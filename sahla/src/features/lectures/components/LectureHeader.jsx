import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Hash, FileDown, Loader2, Lock, Menu } from 'lucide-react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { BookmarkButton } from '@/features/bookmarks/components/BookmarkButton'
import { Badge, Button } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'
// jsPDF and html2canvas are dynamically imported in handleDownloadPDF
// to avoid loading ~600KB on every lecture page visit

/* ─── PDF Vector Header/Footer Helpers ─────────────────────────────────── */

function drawPageHeader(pdf, { subjectName, title, lectureNumber, totalLectures, date, lectureUrl, lectureType }) {
  const w = 210
  
  // Subtle top background strip
  pdf.setFillColor(250, 250, 252)
  pdf.rect(0, 0, w, 14, 'F')

  // Vibrant accent bar at very top
  pdf.setFillColor(99, 102, 241) // Indigo-500
  pdf.rect(0, 0, w, 1.5, 'F')

  // Bottom border line for header
  pdf.setDrawColor(226, 232, 240)
  pdf.setLineWidth(0.4)
  pdf.line(15, 14, w - 15, 14)

  // Left: "Sahla" brand (with link)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(8)
  pdf.setTextColor(79, 70, 229) // Indigo-600
  pdf.textWithLink('SAHLA', 15, 9, { url: 'https://sahla-study.web.app' })
  
  // Left: Subject Name
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(7)
  pdf.setTextColor(100, 116, 139)
  pdf.text(`·  ${subjectName ?? 'Subject'}`, 28, 9)

  // Center: lecture title (truncated)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(7.5)
  pdf.setTextColor(15, 23, 42)
  const truncated = title.length > 55 ? title.slice(0, 52) + '…' : title
  pdf.text(truncated, w / 2, 9, { align: 'center' })

  // Right: "Lec X/Y" or "Lab X/Y"
  let label = 'Lec'
  if (lectureType === 'lab') label = 'Lab'
  else if (lectureType === 'quiz') label = 'Quiz'
  
  pdf.text(`${label} ${lectureNumber}/${totalLectures}`, w - 15, 8.5, { align: 'right' })
  
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(6.5)
  pdf.setTextColor(148, 163, 184)
  pdf.text(date, w - 15, 11.5, { align: 'right' })
}

function drawPageFooter(pdf, { userID, date, pageIndex, totalPages, lectureUrl }) {
  const w = 210
  const h = 297

  // Subtle background for footer
  pdf.setFillColor(250, 250, 252)
  pdf.rect(0, h - 14, w, 14, 'F')

  // Top border line
  pdf.setDrawColor(226, 232, 240)
  pdf.setLineWidth(0.4)
  pdf.line(15, h - 14, w - 15, h - 14)

  // Bottom accent bar
  pdf.setFillColor(99, 102, 241)
  pdf.rect(0, h - 1.5, w, 1.5, 'F')

  // Left: Brand & Copy info (with link)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(7)
  pdf.setTextColor(79, 70, 229)
  pdf.textWithLink('Sahla Platform', 15, h - 8, { url: 'https://sahla-study.web.app' })
  
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(5.5)
  pdf.setTextColor(148, 163, 184)
  pdf.text('STUDENT COPY', 15, h - 4.5)

  // Center: Page Number
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(7)
  pdf.setTextColor(15, 23, 42)
  pdf.text(`Page ${pageIndex + 1} of ${totalPages}`, w / 2, h - 8, { align: 'center' })

  // Center: User ID
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(6)
  pdf.setTextColor(148, 163, 184)
  const displayUID = userID.length > 45 ? userID.slice(0, 42) + '…' : userID
  pdf.text(displayUID, w / 2, h - 4.5, { align: 'center' })

  // Right: Date
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(7)
  pdf.setTextColor(100, 116, 139)
  pdf.text(date, w - 15, h - 8, { align: 'right' })
}

/* ─── Helper to clean problematic canvas elements ─────────────────────── */
function sanitizeBackgroundImages(container) {
  container.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el)
    const bg = style.backgroundImage || ''
    if (bg.includes('-moz-element') || bg.includes('-webkit-canvas')) {
      el.style.setProperty('background-image', 'none', 'important')
    }
    // Mask images can also reference canvases
    if (style.maskImage && style.maskImage !== 'none') {
      el.style.setProperty('mask-image', 'none', 'important')
      el.style.setProperty('-webkit-mask-image', 'none', 'important')
    }
  })
}

function cleanProblematicCanvases(container) {
  // Remove all canvases – generally safe for lecture PDFs and avoids all createPattern errors
  container.querySelectorAll('canvas').forEach(c => c.remove())
  
  // Also clean backgrounds
  sanitizeBackgroundImages(container)
}

/* ─── Main Component ───────────────────────────────────────────────────── */

export const LectureHeader = ({ lecture, subject, lectureNumber, totalLectures, onMenuClick, type }) => {
  const lectureType = type || lecture.type || 'lecture'
  const { t, i18n } = useTranslation('lectures')
  const { profile, user } = useAuth()
  const isAr      = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const title       = isAr && lecture.titleAr ? lecture.titleAr : lecture.title
  const subjectName = isAr && subject?.nameAr  ? subject.nameAr  : subject?.name
  const userID      = profile?.id || user?.email || 'Authenticated User'
  const date        = new Date().toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  // Build lecture URL for PDF links (Always use production URL)
  const lectureUrl = lectureNumber && subject?.slug 
    ? `https://sahla-study.web.app/subjects/${subject.slug}/lecture/${lectureNumber}`
    : 'https://sahla-study.web.app'

  const [isGenerating, setIsGenerating] = React.useState(false)

  /* ─── Build the off-screen HTML for html2canvas ────────────────────── */
  const buildPDFHTML = () => {
    const dir = isAr ? 'rtl' : 'ltr'
    const paddingDir = isAr ? 'right' : 'left'
    const arabicSub = (!isAr && lecture.titleAr)
      ? `<p style="font-family:Georgia,'Times New Roman',serif; font-size:13pt; font-style:italic; color:rgba(255,255,255,0.45); direction:rtl; margin-top:8px;">${lecture.titleAr}</p>` : ''

    /* ── Content body based on active tab ── */
    let innerHTMLContent = ''

    const isSummary = !!document.getElementById('summary-tab-content')
    const isMCQ     = !!document.getElementById('mcq-tab-content')
    const isWritten = !!document.getElementById('written-tab-content')

    if (isSummary) {
      const pts = lecture.summary?.points || []
      const ptsAr = lecture.summary?.pointsAr || []
      const hTitle = isAr ? 'أهم النقاط' : 'Key Points'
      innerHTMLContent = `
        <h2 style="font-family:Arial,Helvetica,sans-serif; font-size:16pt; margin-bottom:20px; color:#1e1b4b; border-bottom:2px solid #ede9fe; padding-bottom:10px;">
          ${hTitle}
        </h2>
        <ul style="list-style:none; padding:0; margin:0;">
          ${pts.map((pt, i) => `
            <li style="margin-bottom:20px; display:flex; align-items:flex-start; page-break-inside:avoid; background:#f5f3ff; padding:18px 22px; border-radius:12px; border-left:${isAr ? 'none' : '5px solid #7c3aed'}; border-right:${isAr ? '5px solid #7c3aed' : 'none'}; border:1px solid #ddd6fe;">
              ${isAr ? '' : `<span style="display:inline-block; background:#7c3aed; color:#ffffff; width:28px; height:28px; border-radius:50%; text-align:center; line-height:28px; font-size:10.5pt; font-weight:800; margin-right:16px; flex-shrink:0; box-shadow:0 2px 4px rgba(124,58,237,0.25);">${i + 1}</span>`}
              <div style="flex:1; margin-${isAr ? 'right' : 'left'}:${isAr ? '16px' : '0'}; text-align:${isAr ? 'right' : 'left'};">
                <p style="color:#0f172a; font-size:12pt; font-weight:700; line-height:1.6; margin:0;">${pt}</p>
                ${isAr && ptsAr[i] ? `<p style="color:#4338ca; font-size:11pt; font-family:Arial,serif; line-height:1.6; margin:8px 0 0 0;" dir="rtl">${ptsAr[i]}</p>` : ''}
              </div>
              ${isAr ? `<span style="display:inline-block; background:#7c3aed; color:#ffffff; width:28px; height:28px; border-radius:50%; text-align:center; line-height:28px; font-size:10.5pt; font-weight:800; margin-left:16px; flex-shrink:0; box-shadow:0 2px 4px rgba(124,58,237,0.25);">${i + 1}</span>` : ''}
            </li>
          `).join('')}
        </ul>
      `
    } else if (isMCQ) {
      const qTitle = isAr ? 'اختبار سريع' : 'Quick Quiz'
      innerHTMLContent = `
        <h2 style="font-family:Arial,Helvetica,sans-serif; font-size:16pt; margin-bottom:20px; color:#1e1b4b; border-bottom:2px solid #ede9fe; padding-bottom:10px;">
          ${qTitle}
        </h2>
        <div>
        ${(lecture.mcq || []).map((q, i) => `
          <div style="margin-bottom:28px; page-break-inside:avoid; border:1px solid #e2e8f0; padding:20px; border-radius:10px; background:#f8fafc;">
            <p style="font-weight:700; font-size:12pt; color:#0f172a; margin-bottom:6px; text-align:${isAr ? 'right' : 'left'}; line-height:1.5;">
              <span style="color:#7c3aed; margin-${isAr ? 'left' : 'right'}:6px;">${i + 1}.</span> ${q.question}
            </p>
            ${isAr && q.questionAr ? `<p style="font-style:italic; font-size:11pt; color:#475569; margin-bottom:16px; text-align:right;" dir="rtl">${q.questionAr}</p>` : ''}
            <div style="margin-${isAr ? 'right' : 'left'}:20px; margin-top:16px;">
              ${q.answers.map(ans => `
                <div style="display:flex; flex-direction:${isAr ? 'row-reverse' : 'row'}; align-items:flex-start; margin-bottom:10px; font-size:11pt; padding:8px 12px; background:${ans.isCorrect ? '#ecfdf5' : '#ffffff'}; border:1px solid ${ans.isCorrect ? '#a7f3d0' : '#e2e8f0'}; border-radius:6px; text-align:${isAr ? 'right' : 'left'};">
                  <span style="font-weight:bold; margin-${isAr ? 'left' : 'right'}:12px; font-size:10pt; color:${ans.isCorrect ? '#059669' : '#64748b'}; width:20px; height:20px; text-align:center; line-height:20px; background:${ans.isCorrect ? '#d1fae5' : '#f1f5f9'}; border-radius:4px; flex-shrink:0;">${ans.id.toUpperCase()}</span>
                  <span style="color:${ans.isCorrect ? '#065f46' : '#334155'}; font-weight:${ans.isCorrect ? '600' : '400'}; flex:1; line-height:1.5;">
                    ${ans.text}
                  </span>
                  ${ans.isCorrect ? `<span style="color:#10b981; font-weight:bold; margin-${isAr ? 'right' : 'left'}:8px; flex-shrink:0;">✓</span>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
        </div>
      `
    } else if (isWritten) {
      const wTitle = isAr ? 'أسئلة مقالية' : 'Written Questions'
      innerHTMLContent = `
        <h2 style="font-family:Arial,Helvetica,sans-serif; font-size:16pt; margin-bottom:20px; color:#1e1b4b; border-bottom:2px solid #ede9fe; padding-bottom:10px;">
          ${wTitle}
        </h2>
        <div>
        ${(lecture.written || []).map((q, i) => `
          <div style="margin-bottom:36px; page-break-inside:avoid; text-align:${isAr ? 'right' : 'left'};">
            <p style="font-weight:700; font-size:12.5pt; color:#1e1b4b; margin-bottom:8px; line-height:1.5;">
              <span style="color:#7c3aed;">Q${i + 1}:</span> ${q.question}
            </p>
            ${isAr && q.questionAr ? `<p style="color:#64748b; font-size:11pt; margin-bottom:14px; font-style:italic;" dir="rtl">${q.questionAr}</p>` : ''}
            
            <div style="background:#faf5ff; border-${isAr ? 'right' : 'left'}:4px solid #7c3aed; padding:16px 20px; margin-top:14px; border-radius:${isAr ? '8px 0 0 8px' : '0 8px 8px 0'}; border-top:1px solid #f3f0ff; border-${isAr ? 'left' : 'right'}:1px solid #f3f0ff; border-bottom:1px solid #f3f0ff;">
              <p style="font-weight:700; font-size:8.5pt; color:#7c3aed; text-transform:uppercase; margin-bottom:8px; letter-spacing:0.08em;">Model Answer</p>
              <p style="color:#1e293b; font-size:11pt; line-height:1.7; white-space:pre-wrap; margin:0;">${q.modelAnswer}</p>
              ${isAr && q.modelAnswerAr ? `<div style="margin-top:12px; padding-top:12px; border-top:1px solid #e2e8f0;"><p style="color:#475569; font-size:11pt; line-height:1.7; margin:0;" dir="rtl">${q.modelAnswerAr}</p></div>` : ''}
            </div>
          </div>
        `).join('')}
        </div>
      `
    } else {
      // ── Explanation tab — clone & clean DOM ──
      const contentEl =
        document.querySelector('[data-pdf-content]') ||
        document.querySelector('#explanation-tab-content') ||
        document.querySelector('main') ||
        document.querySelector('#lecture-content')

      if (contentEl) {
        const clone = contentEl.cloneNode(true)
        const strip = [
          '.no-print','nav','footer','button','header',
          '.BackgroundOrbs','.fixed','.sticky',
          '#lecture-back-link','#lecture-navigation',
          '[role="tablist"]','.OfflineBanner','.FloatingFeedback',
          '.glass-tier-2',
          '[data-lucide]','[class*="lucide-"]',
          'svg',
        ]
        strip.forEach(sel => clone.querySelectorAll(sel).forEach(el => el.remove()))

        // ── global reset for all text in PDF ──
        clone.querySelectorAll('*').forEach(el => {
          // Do not ruin syntax highlighting in code blocks!
          if (el.tagName === 'PRE' || el.tagName === 'CODE' || el.closest('pre') || el.closest('.code-block')) {
            return
          }
          el.style.setProperty('color', '#111827', 'important') // Force very dark text
        })

        // Hide pure-empty elements
        clone.querySelectorAll('*').forEach(el => {
          if (
            el.children.length === 0 &&
            !el.textContent.trim() &&
            !['TD','TH','LI','IMG','BR','HR','INPUT','CANVAS'].includes(el.tagName)
          ) {
            el.style.setProperty('display', 'none', 'important')
          }
        })

        // ── Base Text Styling ──
        const headers = ['H1','H2','H3','H4','H5','H6']
        clone.querySelectorAll('*').forEach(el => {
          if (headers.includes(el.tagName)) {
            el.style.cssText += `color:#1e1b4b!important; font-weight:800!important; margin:1.2em 0 0.6em!important; font-family:Arial,sans-serif!important;`
            if (el.tagName === 'H1') el.style.fontSize = '22pt'
            if (el.tagName === 'H2') el.style.fontSize = '18pt'
            if (el.tagName === 'H3') el.style.fontSize = '15pt'
          }
          if (el.tagName === 'P') {
            el.style.cssText += `margin:1em 0!important; line-height:1.75!important; color:#374151!important; font-weight:400!important; font-size:11.5pt!important;`
          }
          if (['STRONG','B'].includes(el.tagName)) {
            el.style.setProperty('font-weight', '800', 'important')
            el.style.setProperty('color', '#000000', 'important')
            el.style.setProperty('background', 'transparent', 'important')
          }
        })

        // Style code blocks (Light Mode for PDF)
        clone.querySelectorAll('pre, .code-block').forEach(el => {
          el.style.setProperty('background', '#F1F0EE', 'important')
          el.style.setProperty('color', '#374151', 'important')
          el.style.setProperty('border', '1px solid rgba(0,0,0,0.08)', 'important')
          el.style.setProperty('border-radius', '8px', 'important')
          if (el.tagName === 'PRE') {
            el.style.setProperty('padding', '16px', 'important')
          }
          el.style.setProperty('font-size', '9pt', 'important')
          el.style.setProperty('white-space', 'pre-wrap', 'important')
          el.style.setProperty('word-break', 'break-word', 'important')
          el.style.setProperty('overflow-x', 'auto', 'important')
          el.style.setProperty('overflow-y', 'visible', 'important')
          el.style.setProperty('font-family', '"Courier New", Courier, monospace', 'important')
          el.style.setProperty('font-weight', '500', 'important')
          el.style.setProperty('margin', '18px 0', 'important')
          el.style.setProperty('width', '100%', 'important')
          el.style.setProperty('max-width', '100%', 'important')
          el.style.setProperty('box-sizing', 'border-box', 'important')
          el.style.setProperty('display', 'block', 'important')
          el.style.setProperty('line-height', '1.5', 'important')
          el.style.setProperty('box-shadow', 'none', 'important')
          
          if (el.tagName === 'PRE' && el.textContent) {
            // Do NOT trim textContent because it removes intentional whitespace in Python!
            // el.textContent = el.textContent.trim()
          }
        })

        // Fix colors for print-like rendering (except pre/code blocks)
        clone.querySelectorAll('*').forEach(el => {
          // Skip pre/code blocks from color corrections
          if (el.tagName === 'PRE' || el.tagName === 'CODE' || el.closest('pre') || el.closest('.code-block')) {
            return
          }

          const cs = window.getComputedStyle(el)

          const m = cs.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
          if (m && +m[1] > 160 && +m[2] > 160 && +m[3] > 160) {
            el.style.setProperty('color', '#1a1a2e', 'important')
          }

          const bgM = cs.backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
          if (bgM && +bgM[1] < 80 && +bgM[2] < 80 && +bgM[3] < 80) {
            el.style.setProperty('background', 'transparent', 'important')
            el.style.setProperty('color', '#1e293b', 'important')
          }

          if (cs.webkitBackgroundClip === 'text' || cs.backgroundClip === 'text') {
            el.style.setProperty('-webkit-background-clip', 'unset', 'important')
            el.style.setProperty('background-clip', 'unset', 'important')
            el.style.setProperty('-webkit-text-fill-color', '#1a1a2e', 'important')
            el.style.setProperty('background-image', 'none', 'important')
            el.style.setProperty('color', '#1a1a2e', 'important')
          }

          if (cs.backdropFilter !== 'none') {
            el.style.setProperty('backdrop-filter', 'none', 'important')
            el.style.setProperty('-webkit-backdrop-filter', 'none', 'important')
            el.style.setProperty('background', 'transparent', 'important')
            el.style.setProperty('border', 'none', 'important')
            el.style.setProperty('box-shadow', 'none', 'important')
          }

          // ── Strip background-images/masks that confuse html2canvas ──
          if (cs.backgroundImage && cs.backgroundImage !== 'none') {
            el.style.setProperty('background-image', 'none', 'important')
          }
          el.style.setProperty('background-size', 'auto', 'important')
          el.style.setProperty('background-repeat', 'no-repeat', 'important')
          el.style.setProperty('mask', 'none', 'important')
          el.style.setProperty('-webkit-mask', 'none', 'important')
          el.style.setProperty('mask-image', 'none', 'important')
          el.style.setProperty('-webkit-mask-image', 'none', 'important')
        })

        // Style tables for PDF - High contrast clear styling
        clone.querySelectorAll('table').forEach(tbl => {
          tbl.style.cssText = `
            width:100%!important; 
            max-width:100%!important; 
            border-collapse:collapse!important; 
            font-size:9.5pt!important; 
            margin:24px 0!important; 
            word-break:break-word!important; 
            border-radius:8px!important; 
            overflow:hidden!important; 
            box-shadow:0 0 0 1px #cbd5e1!important; 
            box-sizing:border-box!important; 
            display:table!important; 
            table-layout:auto!important;
          `
          tbl.querySelectorAll('th').forEach(th => {
            th.style.cssText = `
              background:#e2e8f0!important;
              color:#0f172a!important;
              border:1px solid #cbd5e1!important;
              border-bottom:2px solid #94a3b8!important;
              padding:12px 16px!important;
              font-weight:800!important;
              font-size:8.5pt!important;
              letter-spacing:0.05em!important;
              text-transform:uppercase!important;
              ${isAr ? 'text-align:right!important;' : 'text-align:left!important;'}
              vertical-align:middle!important;
            `
          })
          let rowIdx = 0
          tbl.querySelectorAll('tbody tr, tr').forEach(tr => {
            if (tr.parentElement && tr.parentElement.tagName === 'THEAD') return
            const isEven = rowIdx % 2 === 0
            tr.querySelectorAll('td').forEach(td => {
              td.style.cssText = `
                color:#1e293b!important;
                border:1px solid #cbd5e1!important;
                padding:12px 16px!important;
                background:${isEven ? '#f8fafc' : '#ffffff'}!important;
                vertical-align:middle!important;
                font-size:9.5pt!important;
                line-height:1.6!important;
                ${isAr ? 'text-align:right!important;' : 'text-align:left!important;'}
              `
            })
            rowIdx++
          })
        })

        // Style content-blocks and callouts
        clone.querySelectorAll('div').forEach(div => {
          const isCallout = /callout|note|tip|warning|highlight|alert/i.test(div.className)
          const isBlock = div.classList.contains('content-block')
          
          if (isCallout || isBlock) {
            div.style.cssText = `
              display: block !important;
              background: #f9fafb !important;
              border: 1.5px solid #e5e7eb !important;
              border-left: 6px solid #7c3aed !important;
              border-radius: 12px !important;
              padding: 24px !important;
              margin: 28px 0 !important;
              page-break-inside: avoid !important;
              box-shadow: none !important;
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
            `
            // Ensure child text is dark
            div.querySelectorAll('*').forEach(child => {
              child.style.setProperty('color', '#111827', 'important')
            })
          }
        })

        // Style lists
        clone.querySelectorAll('ul, ol').forEach(list => {
          list.style.cssText += `padding-${isAr ? 'right' : 'left'}:24px!important; margin-bottom:18px!important; line-height:1.7!important;`
          list.querySelectorAll('li').forEach(li => {
            li.style.cssText += `margin-bottom:8px!important; color:#334155!important; font-size:10.5pt!important;`
          })
        })

        // Style links
        clone.querySelectorAll('a').forEach(a => {
          a.style.cssText += `color:#7c3aed!important; text-decoration:underline!important; font-weight:600!important;`
        })

        // Remove zero-dimension canvases (cause html2canvas createPattern crash)
        clone.querySelectorAll('canvas').forEach(c => {
          // Check if canvas has zero width or height
          if (!c.width || !c.height || c.width === 0 || c.height === 0) {
            c.remove()
          }
          
          // Also check if canvas is not visible or has no content
          const ctx = c.getContext('2d')
          if (ctx) {
            try {
              const imageData = ctx.getImageData(0, 0, Math.max(1, c.width), Math.max(1, c.height))
              // If canvas is completely transparent/empty, remove it
              const hasContent = imageData.data.some((val, index) => {
                // Check alpha channel (every 4th value)
                return index % 4 === 3 && val > 0
              })
              if (!hasContent) {
                c.remove()
              }
            } catch (e) {
              // If we can't read the canvas data, remove it to be safe
              c.remove()
            }
          }
        })

        innerHTMLContent = clone.innerHTML
      } else {
        innerHTMLContent = '<p style="color:#64748b;">No content available for export.</p>'
      }
    }

    /* ── Cover page (ultra-premium sleek aesthetic) ── */
    const coverHTML = `
  <div style="width:794px; min-height:1122px; background:#0b0f19; color:white; position:relative; overflow:hidden; padding:52px 64px 48px; box-sizing:border-box; display:flex; flex-direction:column; font-family:Arial,Helvetica,sans-serif;">

    <!-- Border frame: top/bottom/left/right 3px gradient bars -->
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4);"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#06b6d4,#8b5cf6,#6366f1);"></div>
    <div style="position:absolute;top:0;bottom:0;left:0;width:3px;background:linear-gradient(180deg,#6366f1,#8b5cf6,#06b6d4);"></div>
    <div style="position:absolute;top:0;bottom:0;right:0;width:3px;background:linear-gradient(180deg,#06b6d4,#8b5cf6,#6366f1);"></div>
    <!-- Inner inset border -->
    <div style="position:absolute;top:18px;left:18px;right:18px;bottom:18px;border:1px solid rgba(255,255,255,0.04);border-radius:4px;pointer-events:none;"></div>

    <!-- Ambient glows -->
    <div style="position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(99,102,241,0.25) 0%,transparent 65%);pointer-events:none;"></div>
    <div style="position:absolute;bottom:-200px;left:-200px;width:700px;height:700px;background:radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 65%);pointer-events:none;"></div>

    <!-- Grid texture -->
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px);background-size:36px 36px;pointer-events:none;"></div>

    <!-- Watermark -->
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-8deg);font-family:Arial,Helvetica,sans-serif;font-size:200pt;font-weight:900;color:rgba(255,255,255,0.018);white-space:nowrap;pointer-events:none;letter-spacing:-0.04em;">SAHLA</div>

    <!-- Top bar -->
    <div style="position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;margin-bottom:80px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:8px;height:8px;border-radius:50%;background:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,0.2);"></div>
        <span style="font-size:8pt;font-weight:800;letter-spacing:0.25em;color:rgba(255,255,255,0.5);text-transform:uppercase;">Sahla Platform</span>
      </div>
      <div style="font-size:8pt;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.25);text-transform:uppercase;">Student Copy</div>
    </div>

    <!-- Main content -->
    <div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;">

      <!-- Subject line with side rule -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
        <div style="height:1px;width:28px;background:#4f46e5;"></div>
        <span style="font-size:9pt;font-weight:700;letter-spacing:0.14em;color:#818cf8;text-transform:uppercase;">${subjectName ?? 'Subject'}</span>
      </div>

      <!-- Title + lecture number badge -->
      <div style="display:flex;align-items:flex-start;gap:32px;margin-bottom:36px;">
        <div style="flex:1;">
          <div style="font-size:36pt;font-weight:800;line-height:1.05;color:#ffffff;letter-spacing:-0.035em;margin-bottom:12px;">${title}</div>
          ${arabicSub}
        </div>
        <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;padding:20px 24px;border:1px solid rgba(99,102,241,0.3);border-radius:8px;background:rgba(99,102,241,0.08);min-width:80px;">
          <span style="font-size:8pt;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:6px;">${lectureType === 'lab' ? 'Lab' : lectureType === 'quiz' ? 'Quiz' : 'Lec'}</span>
          <span style="font-size:30pt;font-weight:800;color:#818cf8;line-height:1;">${String(lectureNumber).padStart(2,'0')}</span>
          <div style="width:28px;height:1px;background:rgba(255,255,255,0.1);margin:8px 0;"></div>
          <span style="font-size:9pt;color:rgba(255,255,255,0.3);">of ${totalLectures}</span>
        </div>
      </div>

      <!-- Divider -->
      <div style="height:1px;background:linear-gradient(90deg,rgba(99,102,241,0.5),rgba(6,182,212,0.3),transparent);margin-bottom:32px;"></div>

      <!-- Metadata row -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:0;">
        <div style="padding:16px 0;border-right:1px solid rgba(255,255,255,0.07);">
          <div style="font-size:7pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:8px;">Generated on</div>
          <div style="font-size:10pt;font-weight:700;color:#f8fafc;">${date}</div>
        </div>
        <div style="padding:16px 12px;border-right:1px solid rgba(255,255,255,0.07);">
          <div style="font-size:7pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:8px;">Prepared for</div>
          <div style="font-size:9pt;font-weight:700;color:#f8fafc;word-break:break-word;">${userID.slice(0, 20)}</div>
        </div>
        <div style="padding:16px 12px;border-right:1px solid rgba(255,255,255,0.07);">
          <div style="font-size:7pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:8px;">Progress</div>
          <div style="display:flex;align-items:center;gap:4px;margin-top:4px;">
            <div style="flex:1;height:2px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;">
              <div style="width:${Math.round((lectureNumber/totalLectures)*100)}%;height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6);"></div>
            </div>
            <span style="font-size:8pt;font-weight:700;color:#818cf8;">${Math.round((lectureNumber/totalLectures)*100)}%</span>
          </div>
        </div>
        <div style="padding:16px 12px;">
          <div style="font-size:7pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:8px;">View Online</div>
          <a href="${lectureUrl}" style="font-size:9pt;font-weight:700;color:#818cf8;text-decoration:underline;word-break:break-word;">Open Lecture</a>
        </div>
      </div>
    </div>
  </div>
`

    /* ── Body content (white, flows naturally) ── */
   const bodyHTML = `
  <div style="width:794px; background:#ffffff; padding:60px 25px; box-sizing:border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size:11pt; line-height:1.65; color:#1e293b; direction:${dir}; margin: 0 auto;">
    <style>
      /* Global Print Reset */
      @media print {
        body { margin: 0; padding: 0; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      }

      /* Typography */
      p, li, td { 
        font-weight: 400 !important; 
        color: #334155 !important; 
        margin-bottom: 1.2em;
      }
      
      strong, b { 
        font-weight: 700 !important; 
        color: #000000 !important; 
      }

      h1, h2, h3, h4 { 
        color: #0f172a !important; 
        font-weight: 800 !important; 
        letter-spacing: -0.02em;
        line-height: 1.2;
        page-break-after: avoid;
      }

      h1 { font-size: 24pt; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-top: 0 !important; }
      h2 { font-size: 18pt; margin-top: 2em !important; border-left: 4px solid #6366f1; padding-left: 12px; }
      h3 { font-size: 14pt; margin-top: 1.5em !important; }

      /* Suppress problematic pseudo-elements */
      h1::before, h1::after, h2::before, h2::after, h3::before, h3::after, 
      .content-block::before, .content-block::after { 
        display: none !important; 
        content: none !important; 
      }

      /* Enhanced Container Blocks */
      .content-block, .callout {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        border-left: 5px solid #6366f1 !important;
        border-radius: 8px !important;
        padding: 24px 32px !important;
        margin: 32px 0 !important;
        page-break-inside: avoid;
        box-shadow: 0 1px 3px rgba(0,0,0,0.02);
      }

      /* Table enhancements */
      table {
        width: 100% !important;
        max-width: 100% !important;
        border-collapse: collapse !important;
        margin: 24px 0 !important;
        font-size: 9.5pt !important;
        box-shadow: 0 0 0 1px #cbd5e1 !important;
        border-radius: 8px !important;
        overflow: hidden !important;
        page-break-inside: avoid;
        table-layout: auto !important;
      }

      table th {
        background: #e2e8f0 !important;
        color: #0f172a !important;
        padding: 12px 16px !important;
        font-weight: 800 !important;
        font-size: 8.5pt !important;
        letter-spacing: 0.05em !important;
        text-transform: uppercase !important;
        border: 1px solid #cbd5e1 !important;
        border-bottom: 2px solid #94a3b8 !important;
        vertical-align: middle !important;
      }

      table td {
        padding: 12px 16px !important;
        border: 1px solid #cbd5e1 !important;
        font-size: 9.5pt !important;
        color: #1e293b !important;
        vertical-align: middle !important;
        word-break: break-word !important;
        line-height: 1.6 !important;
      }

      table tbody tr:nth-child(even) td {
        background: #f8fafc !important;
      }

      table tbody tr:nth-child(odd) td {
        background: #ffffff !important;
      }

      /* Code block enhancements */
      pre, .code-block {
        --hl-keyword: #7C3AED !important;
        --hl-string: #059669 !important;
        --hl-comment: #9CA3AF !important;
        --hl-function: #2563EB !important;
        --hl-number: #DC2626 !important;
        --hl-operator: #374151 !important;
        --hl-punctuation: #6B7280 !important;
        --hl-variable: #18181B !important;
        --hl-builtin: #D97706 !important;
        --hl-attr: #2563EB !important;
        
        background: #F1F0EE !important;
        color: #374151 !important;
        border: 1px solid rgba(0,0,0,0.08) !important;
        border-radius: 8px !important;
        padding: 16px !important;
        font-size: 9pt !important;
        white-space: pre-wrap !important;
        word-break: break-word !important;
        overflow-x: auto !important;
        overflow-y: visible !important;
        font-family: "Courier New", Courier, monospace !important;
        font-weight: 500 !important;
        margin: 18px 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        display: block !important;
        line-height: 1.5 !important;
        box-shadow: none !important;
      }

      pre code {
        background: transparent !important;
        color: inherit !important;
        border: none !important;
        padding: 0 !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* Lists */
      ul, ol { padding-left: 28px !important; margin-bottom: 24px !important; }
      li { margin-bottom: 12px !important; padding-left: 8px; }
      li::marker { color: #6366f1; font-weight: bold; }

      /* Utility */
      .text-small { font-size: 9pt; color: #64748b; }
    </style>

    <div class="main-content">
      ${innerHTMLContent}
    </div>
  </div>
`;

return coverHTML + bodyHTML;
  }

  /* ─── Main PDF Generation Handler ─────────────────────────────────── */
  const handleDownloadPDF = async () => {
    if (!user) {
      toast.error(isAr ? 'يجب تسجيل الدخول لتحميل الملف' : 'Authenticate to download this lecture')
      return
    }
    if (isGenerating) return
    setIsGenerating(true)

    try {
      // 1. Build a hidden off-screen render container
      const container = document.createElement('div')
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: -9999px;
        width: 794px;
        background: #fff;
        font-family: Georgia, 'Times New Roman', serif;
        color: #1a1a2e;
        padding: 0;
        margin: 0;
        z-index: -1;
      `
      container.innerHTML = buildPDFHTML()
      document.body.appendChild(container)

      // Add this line:
      cleanProblematicCanvases(container)

      // 2. Wait for images and fonts to load
      await Promise.all([
        document.fonts.ready,
        ...Array.from(container.querySelectorAll('img')).map(img =>
          img.complete ? Promise.resolve() : new Promise(r => { img.onload = r; img.onerror = r })
        )
      ])

      // Small buffer for layout reflow
      await new Promise(r => setTimeout(r, 200))

      // 3. Dynamically import heavy PDF libraries (only when needed)
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ])

      // 4. Render to canvas via html2canvas
      
      // Safety monkey-patch: ignore createPattern calls with zero-sized canvases
      const originalCreatePattern = CanvasRenderingContext2D.prototype.createPattern
      CanvasRenderingContext2D.prototype.createPattern = function(image, repetition) {
        if (image instanceof HTMLCanvasElement && (image.width === 0 || image.height === 0)) {
          return null
        }
        return originalCreatePattern.call(this, image, repetition)
      }

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: false,
        width: 794,
        windowWidth: 794,
        onclone: (clonedDoc) => {
          // Robust cleanup inside the clone
          clonedDoc.querySelectorAll('canvas').forEach(c => c.remove())
          clonedDoc.querySelectorAll('*').forEach(el => {
            const style = window.getComputedStyle(el)
            const bg = style.backgroundImage || ''
            if (bg.includes('-moz-element') || bg.includes('-webkit-canvas')) {
              el.style.setProperty('background-image', 'none', 'important')
            }
          })
        }
      })

      // Restore prototype
      CanvasRenderingContext2D.prototype.createPattern = originalCreatePattern

      document.body.removeChild(container)

      // 5. Slice canvas into A4 pages and build PDF
      const A4_WIDTH_MM  = 210
      const A4_HEIGHT_MM = 297
      const MARGIN_MM    = 6  // Reduced from 10mm to maximize content area
      const CONTENT_W_MM = A4_WIDTH_MM - MARGIN_MM * 2
      const CONTENT_H_MM = A4_HEIGHT_MM - MARGIN_MM * 2
      const HEADER_OFFSET_MM = 10  // space below header for content pages
      const FOOTER_OFFSET_MM = 10  // space above footer

      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })

      const imgWidthMM  = CONTENT_W_MM
      const imgHeightMM = (canvas.height * imgWidthMM) / canvas.width

      // Calculate total pages
      // First page = cover (full bleed), remaining pages have header/footer
      const COVER_HEIGHT_PX = 1122 * 2  // cover is 1122px at scale:2
      const bodyCanvasHeight = Math.max(0, canvas.height - COVER_HEIGHT_PX)
      const bodyContentHeightMM = (bodyCanvasHeight * imgWidthMM) / canvas.width
      const usableContentH = CONTENT_H_MM - HEADER_OFFSET_MM - FOOTER_OFFSET_MM
      const bodyPages = Math.max(1, Math.ceil(bodyContentHeightMM / usableContentH))
      const totalPages = 1 + bodyPages  // cover + body pages

      // ── Page 1: Cover (full bleed, no header/footer) ──
      const coverSliceHeight = Math.min(COVER_HEIGHT_PX, canvas.height)
      const coverCanvas = document.createElement('canvas')
      coverCanvas.width = canvas.width
      coverCanvas.height = coverSliceHeight
      const coverCtx = coverCanvas.getContext('2d')
      coverCtx.drawImage(canvas, 0, 0, canvas.width, coverSliceHeight, 0, 0, canvas.width, coverSliceHeight)

      const coverImg = coverCanvas.toDataURL('image/jpeg', 0.92)
      const coverImgH = (coverSliceHeight * A4_WIDTH_MM) / canvas.width
      pdf.addImage(coverImg, 'JPEG', 0, 0, A4_WIDTH_MM, Math.min(coverImgH, A4_HEIGHT_MM))

      // Add a clearly clickable, centered link at the bottom of the cover
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(9)
      pdf.setTextColor(99, 102, 241)
      const linkText = 'Click here to view this lecture online'
      const textWidth = pdf.getTextWidth(linkText)
      const xPos = (A4_WIDTH_MM - textWidth) / 2
      pdf.textWithLink(linkText, xPos, 280, { url: lectureUrl })
      
      // Also add a subtle underline to indicate clickability
      pdf.setDrawColor(99, 102, 241)
      pdf.setLineWidth(0.2)
      pdf.line(xPos, 281, xPos + textWidth, 281)

      // ── Remaining pages: body content with header/footer ──
      let bodyYPx = COVER_HEIGHT_PX
      let pageIndex = 1

      while (bodyYPx < canvas.height) {
        pdf.addPage()

        // Draw vector header and footer
        drawPageHeader(pdf, { subjectName, title, lectureNumber, totalLectures, date, lectureUrl, lectureType })
        drawPageFooter(pdf, { userID, date, pageIndex, totalPages, lectureUrl })

        // Calculate the slice of canvas for this page
        const sliceHeightMM = usableContentH
        const sliceHeightPx = (sliceHeightMM / imgWidthMM) * canvas.width
        const remainingPx = canvas.height - bodyYPx
        const actualSlicePx = Math.min(sliceHeightPx, remainingPx)
        if (actualSlicePx <= 0) break

        const pageCanvas = document.createElement('canvas')
        pageCanvas.width = canvas.width
        pageCanvas.height = actualSlicePx
        const ctx = pageCanvas.getContext('2d')
        ctx.drawImage(canvas, 0, bodyYPx, canvas.width, actualSlicePx, 0, 0, canvas.width, actualSlicePx)

        const pageImg = pageCanvas.toDataURL('image/jpeg', 0.92)
        const sliceRenderedH = (actualSlicePx * imgWidthMM) / canvas.width
        pdf.addImage(pageImg, 'JPEG', MARGIN_MM, MARGIN_MM + HEADER_OFFSET_MM, imgWidthMM, sliceRenderedH)

        bodyYPx += actualSlicePx
        pageIndex++
      }

      // 6. Download the PDF
      const fileName = `${subjectName ?? 'Lecture'}_${lectureNumber}_${title.replace(/\s+/g, '_').slice(0, 40)}.pdf`
      pdf.save(fileName)

      toast.success(isAr ? 'تم تحميل الملف بنجاح' : 'PDF downloaded successfully!')

    } catch (err) {
      console.error('[PDF Generation Error]', err)
      toast.error(isAr ? 'حدث خطأ أثناء إنشاء الملف' : 'Failed to generate PDF')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-tier-2 p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at bottom right, rgba(99,102,241,0.08) 0%, rgba(255,255,255,0.04) 100%)'
      }}
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Back link */}
      <Link
        to={`/subjects/${subject?.slug || ''}`}
        className={`inline-flex items-center gap-2 text-[0.8rem] sm:text-sm text-white/50 hover:text-white/80 transition-colors w-fit no-print ${fontFamily}`}
        id="lecture-back-link"
      >
        <ArrowLeft size={14} className={`sm:w-4 sm:h-4 ${isAr ? 'rotate-180' : ''}`} />
        {t('navigation.backToSubject', 'Back to Subject')}
      </Link>

      {/* Title row */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6">
        <div className="flex flex-col gap-2.5 sm:gap-3 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="purple" className="px-2 py-0.5 text-[10px] sm:text-xs">
              <Hash size={10} className="mr-1 sm:w-3 sm:h-3" />
              {t(lectureType === 'lab' ? 'navigation.labOf' : lectureType === 'quiz' ? 'navigation.quizOf' : 'navigation.lectureOf', { current: lectureNumber, total: totalLectures })}
            </Badge>
            {subjectName && (
              <Badge variant="default" className="px-2 py-0.5 text-[10px] sm:text-xs bg-white/5 border-white/10">
                {subjectName}
              </Badge>
            )}
          </div>

          <h1 className={`text-xl xs:text-2xl sm:text-3xl font-bold text-white leading-[1.2] sm:leading-tight tracking-tight ${fontFamily}`}>
            {title}
          </h1>

          {!isAr && lecture.titleAr && (
            <p className="text-sm xs:text-base text-white/30 font-arabic leading-relaxed">
              {lecture.titleAr}
            </p>
          )}
        </div>

        {/* Actions - Now more integrated on mobile */}
        <div className="flex items-center gap-2 sm:mt-1 shrink-0 no-print self-end sm:self-start">
          <Button
            onClick={handleDownloadPDF}
            variant="ghost"
            size="sm"
            disabled={isGenerating}
            className="text-white/50 hover:text-white hover:bg-white/10 flex items-center gap-2 border border-white/5 h-10 px-3 transition-all duration-200"
            title={isAr ? 'تحميل PDF' : 'Download PDF'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isGenerating ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 size={16} className="animate-spin" />
                  <span className="hidden sm:inline text-sm">
                    {isAr ? 'جاري…' : 'Preparing…'}
                  </span>
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  {!user && <Lock size={14} className="text-accent-500" />}
                  <FileDown size={16} />
                  <span className="hidden sm:inline text-sm">PDF</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

          <BookmarkButton subjectId={lecture.subjectId} lectureNumber={lectureNumber} />

          {/* Hamburger Menu Removed from Desktop per request */}
        </div>
      </div>
    </motion.header>
  )
}