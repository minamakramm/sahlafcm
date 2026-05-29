from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
import math
import random

OUTPUT = "sahla_pro_hub.pdf"
W, H = A4

# Sahla Brand Palette (Ultra High Fidelity)
OBSIDIAN      = colors.HexColor("#080713")
DEEP_BG       = colors.HexColor("#0B0A1A")
NAVY_SURFACE  = colors.HexColor("#12112A")
INDIGO        = colors.HexColor("#6C63FF")
INDIGO_GLOW   = colors.Color(0.42, 0.39, 1, alpha=0.3)
CYAN          = colors.HexColor("#38BDF8")
CYAN_GLOW     = colors.Color(0.22, 0.74, 0.97, alpha=0.3)
EMERALD       = colors.HexColor("#22C55E")
PURPLE        = colors.HexColor("#A855F7")
WHITE         = colors.white
TEXT_SEC      = colors.HexColor("#8B8BA0")
TEXT_DIM      = colors.HexColor("#4A4A6A")

c = canvas.Canvas(OUTPUT, pagesize=A4)

def draw_orb(canv, cx, cy, r, col_hex, alpha):
    """Layered atmospheric light orbs"""
    canv.saveState()
    base = colors.HexColor(col_hex)
    for i in range(8):
        frac = (8 - i) / 8
        a = alpha * (frac ** 2.5)
        canv.setFillColor(colors.Color(base.red, base.green, base.blue, alpha=a))
        canv.circle(cx, cy, r * frac, fill=1, stroke=0)
    canv.restoreState()

def draw_sahla_logo(canv, x, y, size=32):
    """The signature 's.' logo with glass border and glow"""
    canv.saveState()
    # Glassy background
    canv.setFillColor(colors.Color(0.12, 0.11, 0.22, alpha=0.9))
    canv.setStrokeColor(colors.Color(1, 1, 1, alpha=0.15))
    canv.setLineWidth(0.6)
    canv.roundRect(x, y, size, size, size * 0.3, fill=1, stroke=1)
    
    # White 's'
    canv.setFillColor(WHITE)
    canv.setFont("Helvetica-Bold", size * 0.65)
    canv.drawString(x + size*0.22, y + size*0.3, "s")
    
    # Emerald dot with glow
    canv.setFillColor(EMERALD)
    canv.circle(x + size*0.72, y + size*0.35, size*0.09, fill=1, stroke=0)
    canv.setFillColor(colors.Color(0.13, 0.77, 0.37, alpha=0.3))
    canv.circle(x + size*0.72, y + size*0.35, size*0.18, fill=1, stroke=0)
    canv.restoreState()

def draw_glass_card(canv, x, y, w, h, accent_color=INDIGO):
    """High-fidelity glass card with shimmer and side-accent"""
    canv.saveState()
    radius = 5*mm
    # Soft drop shadow
    canv.setFillColor(colors.Color(0, 0, 0, alpha=0.2))
    canv.roundRect(x + 1*mm, y - 2*mm, w, h, radius, fill=1, stroke=0)
    
    # Base card
    canv.setFillColor(colors.Color(0.09, 0.08, 0.18, alpha=0.95))
    canv.roundRect(x, y, w, h, radius, fill=1, stroke=0)
    
    # Glass border
    canv.setStrokeColor(colors.Color(1, 1, 1, alpha=0.12))
    canv.setLineWidth(0.8)
    canv.roundRect(x, y, w, h, radius, fill=0, stroke=1)
    
    # Shimmer highlight (diagonal)
    canv.setStrokeColor(colors.Color(1, 1, 1, alpha=0.04))
    canv.setLineWidth(0.5)
    canv.line(x + 10*mm, y + h, x + w - 10*mm, y)
    
    # Side accent bar
    canv.setStrokeColor(accent_color)
    canv.setLineWidth(3)
    canv.line(x + 2, y + radius, x + 2, y + h - radius)
    
    canv.restoreState()

def draw_link_row(canv, x, y, w, h, label, sublabel, url, color):
    """Smooth, clickable link row with sublabels"""
    canv.saveState()
    r = 3.5*mm
    # Card Body
    canv.setFillColor(NAVY_SURFACE)
    canv.setStrokeColor(colors.Color(1, 1, 1, alpha=0.1))
    canv.setLineWidth(0.8)
    canv.roundRect(x, y, w, h, r, fill=1, stroke=1)
    
    # Clickable Area
    canv.linkURL(url, (x, y, x + w, y + h), relative=0)
    
    # Label Pill (Dynamic width based on text)
    text_w = canv.stringWidth(label, "Helvetica-Bold", 8)
    pill_w = text_w + 6  # width + small padding
    canv.setFillColor(colors.Color(color.red, color.green, color.blue, alpha=0.15))
    canv.roundRect(x + 5*mm, y + h/2 - 3*mm, pill_w, 6*mm, 3*mm, fill=1, stroke=0)
    
    canv.setFillColor(color)
    canv.setFont("Helvetica-Bold", 8)
    canv.drawCentredString(x + 5*mm + pill_w/2, y + h/2 - 1, label)
    
    # Sublabel
    canv.setFillColor(WHITE)
    canv.setFont("Helvetica-Bold", 10)
    canv.drawString(x + 5*mm + pill_w + 5, y + h/2 - 1, sublabel)
    
    # Right-side hint
    canv.setFillColor(TEXT_SEC)
    canv.setFont("Helvetica", 7.5)
    canv.drawRightString(x + w - 5*mm, y + h/2 - 1, "Open →")
    
    canv.restoreState()

# ── 1. BACKGROUND LAYER ──────────────────────────────────────────────────────
c.setFillColor(OBSIDIAN)
c.rect(0, 0, W, H, fill=1, stroke=0)

# Single, very soft indigo glow in the background corner (Extremely subtle)
draw_orb(c, W, H, 140*mm, "#6C63FF", 0.04)

# ── 2. TOP NAVIGATION BAR ─────────────────────────────────────────────────────
# Semi-transparent clean header
c.setFillColor(colors.Color(1, 1, 1, alpha=0.03))
c.rect(0, H - 20*mm, W, 20*mm, fill=1, stroke=0)

draw_sahla_logo(c, 25*mm, H - 15*mm, 10*mm)
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 11)
c.drawString(38*mm, H - 12*mm, "SAHLA STUDY")

# ── 3. HERO SECTION ───────────────────────────────────────────────────────────
# Single-layer crisp titles (No "hesitated" glow)
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 36)
c.drawCentredString(W/2, H - 55*mm, "Master Hard")

c.setFillColor(CYAN)
c.setFont("Helvetica-Bold", 42)
c.drawCentredString(W/2, H - 72*mm, "University Subjects")

# Subtitle
c.setFillColor(TEXT_SEC)
c.setFont("Helvetica", 11)
c.drawCentredString(W/2, H - 84*mm, "Clear Lectures • Smart Quizzes • Expert Exams")
c.drawCentredString(W/2, H - 89*mm, "No chaos, no excuses. Built for academic excellence.")

# ── 4. RECRUITMENT PILL ──────────────────────────────────────────────────────
banner_y = H - 105*mm
c.setFillColor(colors.Color(0.06, 0.05, 0.12, alpha=0.85))
c.setStrokeColor(colors.Color(0.42, 0.39, 1, alpha=0.3))
c.roundRect(W/2 - 70*mm, banner_y, 140*mm, 10*mm, 5*mm, fill=1, stroke=1)

# Live Indicator
c.setFillColor(INDIGO)
c.circle(W/2 - 62*mm, banner_y + 5*mm, 1.5*mm, fill=1, stroke=0)

c.setFillColor(INDIGO)
c.setFont("Helvetica-Bold", 7)
c.drawString(W/2 - 58*mm, banner_y + 4*mm, "RECRUITMENT OPEN")

c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 9)
c.drawString(W/2 - 25*mm, banner_y + 4*mm, "Join the Sahla creative team  →")

# ── 5. SUBJECTS GRID ──────────────────────────────────────────────────────────
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 16)
c.drawString(25*mm, H - 120*mm, "Curriculum Overview")

subjects = [
    ("Data Science", "Visualization & Pandas", CYAN,    "◈"),
    ("Data Mining",  "Clustering & Fuzzy",      INDIGO,  "◉"),
    ("Intelligence", "AI & Machine Logic",      PURPLE,  "◆"),
    ("Graphics",     "Digital Image Ops",       EMERALD, "◇")
]

card_w = (W - 60*mm) / 2
card_h = 28*mm
card_y = H - 155*mm

for i, (title, desc, color, icon) in enumerate(subjects):
    col, row = i % 2, i // 2
    x = 25*mm + col * (card_w + 10*mm)
    y = card_y - row * (card_h + 8*mm)
    
    draw_glass_card(c, x, y, card_w, card_h, color)
    
    # Icon
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(x + 10*mm, y + card_h - 11.5*mm, icon)
    
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x + 18*mm, y + card_h - 11*mm, title)
    
    c.setFillColor(TEXT_SEC)
    c.setFont("Helvetica", 8)
    c.drawString(x + 10*mm, y + 8*mm, desc)

# ── 6. QUICK ACCESS (With Real Clickable Links) ───────────────────────────────
link_y = card_y - 65*mm
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 15)
c.drawString(25*mm, link_y, "Quick Access")

# Divider
c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.07))
c.setLineWidth(0.5)
c.line(25*mm, link_y - 3*mm, W - 25*mm, link_y - 3*mm)

link_y -= 13*mm
link_h = 11*mm
gap = 4*mm

links = [
    ("PLATFORM",  "Sahla Study Web",   "https://sahla-study.web.app",  CYAN),
    ("DRIVE",     "Google Drive Cloud",    "https://drive.google.com/drive/folders/1MIDrWMNn41AjAHVxZ1hC0FPpxKYdbp0M?usp=drive_link", INDIGO),
    ("WHATSAPP",  "Community Group",       "https://chat.whatsapp.com/Cqrhg1cjdotJktytDUKAnA?mode=wwt", EMERALD),
]

for label, sublabel, url, color in links:
    draw_link_row(c, 25*mm, link_y - link_h, W - 50*mm, link_h, label, sublabel, url, color)
    link_y -= link_h + gap

# ── 7. FOOTER ─────────────────────────────────────────────────────────────────
c.setFillColor(colors.Color(0.055, 0.05, 0.13, alpha=0.98))
c.rect(0, 0, W, 14*mm, fill=1, stroke=0)
c.setStrokeColor(colors.Color(0.42, 0.39, 1, alpha=0.5))
c.setLineWidth(0.8)
c.line(0, 14*mm, W, 14*mm)
# Thin glow line
c.setStrokeColor(colors.Color(0.22, 0.74, 0.97, alpha=0.15))
c.setLineWidth(1.5)
c.line(0, 14.6*mm, W, 14.6*mm)
 
# Logo small
draw_sahla_logo(c, 22*mm, 2*mm, 9*mm)
 
c.setFillColor(WHITE)
c.setFont("Helvetica-Bold", 7.5)
c.drawCentredString(W/2, 5.5*mm, "SAHLA INTELLIGENT SYSTEMS  •  MANAGED BY MINA MAKRAM")
c.setFillColor(TEXT_DIM)
c.setFont("Helvetica", 6.5)
c.drawCentredString(W/2, 2.5*mm, "sahla-study.web.app  •  All rights reserved © 2026")
 
c.save()
print("Done:", OUTPUT)