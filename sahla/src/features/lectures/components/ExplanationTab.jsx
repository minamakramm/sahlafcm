import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ContentRenderer } from './ContentRenderer'
import { useUpdateProgress } from '../hooks/useLectureProgress'
import { useAuth } from '@/hooks/useAuth'

/* ─── Variants ────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

const blockVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ─── Main Component ─────────────────────────────────────────────── */

export const ExplanationTab = ({ lecture }) => {
  const { isAuthenticated } = useAuth()
  const { updateProgress } = useUpdateProgress(lecture.subjectId, lecture.number)

  useEffect(() => {
    if (isAuthenticated) {
      updateProgress({ explanation_viewed: true, last_visited_tab: 'explanation' })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!lecture.explanation || lecture.explanation.length === 0) {
    return (
      <div className="exp-empty">
        <span className="exp-empty__icon">📭</span>
        <p className="exp-empty__text">No explanation content available.</p>
      </div>
    )
  }

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="exp-content"
        id="explanation-tab-content"
      >
        {lecture.explanation.map((block, i) => (
          <motion.div
            key={i}
            variants={blockVariants}
            className="content-block"
          >
            <ContentRenderer block={block} index={i} />
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        /* ── Layout ─────────────────────────────────────────────── */
        .exp-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
          padding: 0;
        }

        @media (min-width: 768px) {
          .exp-content {
            gap: 16px;
            padding: 0;
          }
        }

        /* ── Content block ──────────────────────────────────────── */
        .content-block {
          background: var(--glass-bg);
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          border: 1px solid var(--border-default);
          border-radius: 16px;
          padding: 20px 12px;
          transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }

        /* Subtle Inner Glow */
        .content-block::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, -20%), var(--hover-overlay), transparent 40%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .content-block:hover {
          border-color: var(--border-strong);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .content-block:hover::before {
          opacity: 1;
        }

        @media (min-width: 768px) {
          .content-block {
            border-radius: 24px;
            padding: 32px 36px;
          }
        }

        /* ── h2 ─────────────────────────────────────────────────── */
        .content-block h2 {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0 0 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
          line-height: 1.3;
          letter-spacing: -0.015em;
        }

        .content-block h2::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border-strong), transparent);
          margin-left: 6px;
        }

        @media (min-width: 768px) {
          .content-block h2 {
            font-size: 1.6rem;
            margin-bottom: 24px;
          }
        }

        /* ── h3 ─────────────────────────────────────────────────── */
        .content-block h3 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 20px 0 10px;
          color: var(--text-brand);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .content-block h3::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 2px;
          background: var(--text-accent);
          flex-shrink: 0;
          box-shadow: 0 0 10px var(--border-strong);
          transform: rotate(45deg);
        }

        @media (min-width: 768px) {
          .content-block h3 {
            font-size: 1.25rem;
            margin: 30px 0 16px;
            gap: 10px;
          }
          .content-block h3::before {
            width: 8px;
            height: 8px;
          }
        }

        /* ── Paragraphs ─────────────────────────────────────────── */
        .content-block p {
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-size: 0.95rem;
          line-height: 1.75;
          letter-spacing: 0.01em;
        }

        @media (min-width: 768px) {
          .content-block p {
            font-size: 1.05rem;
            margin-bottom: 16px;
            line-height: 1.8;
          }
        }

        /* ── Strong ─────────────────────────────────────────────── */
        .content-block strong {
          color: var(--text-primary);
          font-weight: 700;
          background: var(--active-overlay);
          padding: 1px 4px;
          border-radius: 4px;
        }

        /* ── Lists ──────────────────────────────────────────────── */
        .content-block ul,
        .content-block ol {
          color: var(--text-secondary);
          padding-left: 16px;
          margin-bottom: 16px;
        }

        .content-block li {
          margin-bottom: 8px;
          font-size: 0.95rem;
          line-height: 1.7;
          position: relative;
        }

        .content-block ul li::marker {
          color: var(--text-accent);
        }

        @media (min-width: 768px) {
          .content-block ul,
          .content-block ol {
            padding-left: 28px;
            margin-bottom: 20px;
          }
          .content-block li {
            font-size: 1.05rem;
            margin-bottom: 10px;
          }
        }

        /* ── Callouts ───────────────────────────────────────────── */
        .callout {
          padding: 16px 20px;
          border-radius: 16px;
          margin: 24px 0;
          font-size: 0.95rem;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
        }

        .callout:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .callout-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .callout-info {
          background: var(--active-overlay);
          border-color: var(--border-default);
          color: var(--text-primary);
        }

        .callout-tip {
          background: var(--active-overlay);
          border-color: var(--border-default);
          color: var(--text-primary);
        }

        .callout-warn {
          background: var(--active-overlay);
          border-color: var(--border-default);
          color: var(--text-primary);
        }

        /* ── PDF link ───────────────────────────────────────────── */
        .pdf-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 700;
          padding-bottom: 2px;
          background: linear-gradient(to right, var(--text-brand), var(--text-accent));
          background-size: 0% 2px;
          background-repeat: no-repeat;
          background-position: left bottom;
          transition: background-size 0.3s ease, color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .pdf-link:hover {
          color: var(--text-brand);
          background-size: 100% 2px;
          transform: translateX(4px);
        }

        .pdf-link::after {
          content: ' →';
          font-size: 0.9rem;
          opacity: 0.8;
          transition: transform 0.3s ease;
        }
        
        .pdf-link:hover::after {
          transform: translateX(4px);
        }

        /* ── Tables ─────────────────────────────────────────────── */
        /* Note: .styled-table responsive scrolling is handled globally in index.css */
        .styled-table {
          background: var(--bg-surface);
        }

        .styled-table thead th {
          background: var(--bg-elevated);
          padding: 16px 20px;
          text-align: inherit;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-brand);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 2px solid var(--border-strong);
        }

        .styled-table tbody td {
          padding: 16px 20px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-subtle);
          line-height: 1.6;
        }

        .styled-table tbody tr:last-child td {
          border-bottom: none;
        }

        .styled-table tbody tr:hover td {
          background: var(--hover-overlay);
        }

        @media (min-width: 768px) {
          .styled-table thead th {
            padding: 18px 24px;
            font-size: 0.9rem;
          }
          .styled-table tbody td {
            padding: 18px 24px;
            font-size: 1rem;
          }
        }

        /* ── Empty state ─────────────────────────────────────────── */
        .exp-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 5rem 2rem;
          border-radius: 24px;
          background: var(--bg-surface);
          backdrop-filter: blur(20px);
          border: 1px dashed var(--border-strong);
          text-align: center;
          max-width: 72rem;
          margin: 0 auto;
          box-shadow: var(--shadow-sm);
        }

        .exp-empty__icon { font-size: 3rem; filter: drop-shadow(0 0 12px var(--border-default)); opacity: 0.8; }
        .exp-empty__text { font-size: 1.1rem; color: var(--text-secondary); font-weight: 500; margin: 0; }

        /* ── RTL ─────────────────────────────────────────────────── */
        [dir='rtl'] .content-block h2::after {
          background: linear-gradient(270deg, var(--border-strong), transparent);
          margin-left: 0; margin-right: 8px;
        }
        [dir='rtl'] .content-block h3::before {
          margin-left: 10px; margin-right: 0;
        }
        [dir='rtl'] .pdf-link:hover { transform: translateX(-4px); }
        [dir='rtl'] .pdf-link::after {
          content: ' ←';
        }
        [dir='rtl'] .pdf-link:hover::after {
          transform: translateX(-4px);
        }

        /* ── Reduced motion ──────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .content-block,
          .callout,
          .pdf-link,
          .pdf-link::after { transition: none; }
        }
      `}</style>
    </>
  )
}