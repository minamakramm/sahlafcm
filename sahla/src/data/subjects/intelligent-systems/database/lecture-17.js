export const LECTURE = {
  subjectId: 'database',
  number: 17,
  title: 'Lecture 8: Relational Algebra',
  titleAr: 'المحاضرة 8: الجبر العلائقي',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<!-- ============================================================
     SECTION 1 — WHAT IS RELATIONAL ALGEBRA?
     ============================================================ -->
<h2>📐 What Is Relational Algebra?</h2>
<p>
  Relational Algebra is the <strong>theoretical foundation</strong> of SQL and every
  relational database query language. It defines a formal set of operations that
  manipulate <em>relations</em> (tables) to produce new relations as output.
  Understanding it means understanding <em>why</em> SQL works the way it does.
</p>
<p>
  Every operation takes one or more relations as input and produces a new relation —
  making operations <strong>composable</strong>: you can pipe the output of one
  operation directly into another.
</p>

<!-- SVG — Operator Overview Map -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <filter id="ov1Glow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <linearGradient id="gradUnary" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.1" />
        <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0.02" />
      </linearGradient>
      <linearGradient id="gradBinary" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.1" />
        <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.02" />
      </linearGradient>
    </defs>

    <text x="350" y="25" text-anchor="middle" fill="#f8fafc" font-size="14"
          font-family="system-ui, sans-serif" font-weight="800" letter-spacing="0.5">
      RELATIONAL ALGEBRA — OPERATOR ARCHITECTURE
    </text>

    <!-- UNARY group -->
    <rect x="15" y="45" width="320" height="185" rx="16"
          fill="url(#gradUnary)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>
    <text x="175" y="68" text-anchor="middle" fill="#818cf8" font-size="11"
          font-family="monospace" font-weight="bold" letter-spacing="1">UNARY (Single Table)</text>

    <!-- Select box -->
    <rect x="30" y="80" width="135" height="140" rx="12"
          fill="rgba(99,102,241,0.1)" stroke="#818cf8" stroke-width="2" filter="url(#ov1Glow)"/>
    <text x="97" y="105" text-anchor="middle" fill="#a5b4fc" font-size="14"
          font-family="system-ui, sans-serif" font-weight="bold">SELECT</text>
    <text x="97" y="130" text-anchor="middle" fill="#f8fafc" font-size="28"
          font-family="serif">σ</text>
    <text x="97" y="155" text-anchor="middle" fill="#94a3b8" font-size="11"
          font-family="system-ui, sans-serif">Filters Rows</text>
    <rect x="42" y="175" width="110" height="35" rx="8"
          fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.4)" stroke-width="1"/>
    <text x="97" y="197" text-anchor="middle" fill="#c7d2fe" font-size="10"
          font-family="monospace">σ_cond(R)</text>

    <!-- Project box -->
    <rect x="185" y="80" width="135" height="140" rx="12"
          fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" stroke-width="2" filter="url(#ov1Glow)"/>
    <text x="252" y="105" text-anchor="middle" fill="#38bdf8" font-size="14"
          font-family="system-ui, sans-serif" font-weight="bold">PROJECT</text>
    <text x="252" y="130" text-anchor="middle" fill="#f8fafc" font-size="28"
          font-family="serif">π</text>
    <text x="252" y="155" text-anchor="middle" fill="#94a3b8" font-size="11"
          font-family="system-ui, sans-serif">Filters Columns</text>
    <rect x="197" y="175" width="110" height="35" rx="8"
          fill="rgba(14,165,233,0.15)" stroke="rgba(14,165,233,0.4)" stroke-width="1"/>
    <text x="252" y="197" text-anchor="middle" fill="#bae6fd" font-size="10"
          font-family="monospace">π_cols(R)</text>

    <!-- BINARY group -->
    <rect x="345" y="45" width="340" height="185" rx="16"
          fill="url(#gradBinary)" stroke="rgba(16,185,129,0.3)" stroke-width="1.5"/>
    <text x="515" y="68" text-anchor="middle" fill="#10b981" font-size="11"
          font-family="monospace" font-weight="bold" letter-spacing="1">BINARY (Multiple Tables)</text>

    <!-- Product -->
    <rect x="360" y="80" width="100" height="140" rx="12"
          fill="rgba(245,158,11,0.08)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="410" y="105" text-anchor="middle" fill="#fbbf24" font-size="11"
          font-family="system-ui, sans-serif" font-weight="bold">PRODUCT</text>
    <text x="410" y="132" text-anchor="middle" fill="#f8fafc" font-size="24"
          font-family="serif">×</text>
    <text x="410" y="197" text-anchor="middle" fill="#fde68a" font-size="11"
          font-family="monospace">R × S</text>

    <!-- Join -->
    <rect x="475" y="80" width="100" height="140" rx="12"
          fill="rgba(244,63,94,0.08)" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="525" y="105" text-anchor="middle" fill="#fb7185" font-size="11"
          font-family="system-ui, sans-serif" font-weight="bold">JOINS</text>
    <text x="525" y="132" text-anchor="middle" fill="#f8fafc" font-size="24"
          font-family="serif">⋈</text>
    <text x="525" y="197" text-anchor="middle" fill="#fca5a5" font-size="11"
          font-family="monospace">R ⋈ S</text>

    <!-- Sets -->
    <rect x="590" y="80" width="85" height="140" rx="12"
          fill="rgba(232,121,249,0.08)" stroke="#e879f9" stroke-width="1.5"/>
    <text x="632" y="105" text-anchor="middle" fill="#f0abfc" font-size="11"
          font-family="system-ui, sans-serif" font-weight="bold">SETS</text>
    <text x="632" y="130" text-anchor="middle" fill="#f8fafc" font-size="12"
          font-family="monospace">∪ ∩ −</text>
  </svg>
</div>


<!-- ============================================================
     SECTION 2 — UNARY OPERATIONS
     ============================================================ -->
<h2>1️⃣ Unary Operations</h2>

<h3>σ — Selection (Select)</h3>
<p>
  Selection extracts <strong>rows</strong> that satisfy a given condition.
  It produces a <em>horizontal subset</em> of the original table — same columns,
  fewer rows. Think of it as a WHERE clause in SQL.
</p>
<div style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.4);
            border-radius:12px; padding:14px 20px; margin:14px 0; font-family:'Courier New',monospace;
            color:#c7d2fe; text-align:center; font-size:1em;">
  σ_&lt;condition&gt;(TableName)&nbsp;&nbsp;&nbsp;e.g.&nbsp;&nbsp;&nbsp;σ_(PRICE &lt; 2.00)(PRODUCT)
</div>

<h3>π — Projection (Project)</h3>
<p>
  Projection extracts <strong>columns</strong> from a table.
  It produces a <em>vertical subset</em> — same rows, fewer columns. Equivalent to
  SELECT col1, col2 … in SQL. Duplicate rows in the result are automatically eliminated.
</p>
<div style="background:rgba(14,165,233,0.1); border:1px solid rgba(14,165,233,0.4);
            border-radius:12px; padding:14px 20px; margin:14px 0; font-family:'Courier New',monospace;
            color:#bae6fd; text-align:center; font-size:1em;">
  π_&lt;col list&gt;(TableName)&nbsp;&nbsp;&nbsp;e.g.&nbsp;&nbsp;&nbsp;π_(stud#, name)(Students)
</div>

<!-- SVG — Select vs Project side by side -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="spArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/>
      </marker>
    </defs>

    <text x="350" y="25" text-anchor="middle" fill="#f8fafc" font-size="14"
          font-family="system-ui, sans-serif" font-weight="800" letter-spacing="0.5">
      UNARY VISUALIZATION: σ (Rows) vs π (Columns)
    </text>

    <!-- ORIGINAL TABLE -->
    <g transform="translate(225, 45)">
      <text x="125" y="-12" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace" font-weight="bold">INPUT: STUDENTS</text>
      <rect width="250" height="24" rx="4" fill="rgba(51,65,85,0.8)"/>
      <text x="40" y="16" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace" font-weight="bold">stud#</text>
      <text x="125" y="16" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace" font-weight="bold">name</text>
      <text x="210" y="16" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace" font-weight="bold">course</text>
      
      <g transform="translate(0, 28)">
        <rect width="250" height="22" rx="4" fill="rgba(244,63,94,0.08)" stroke="rgba(244,63,94,0.3)" stroke-width="1"/>
        <text x="40" y="14" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">100</text>
        <text x="125" y="14" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Fred</text>
        <text x="210" y="14" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">PH</text>
      </g>
      <g transform="translate(0, 54)">
        <rect width="250" height="22" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1.5"/>
        <text x="40" y="14" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace">200</text>
        <text x="125" y="14" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace">Dave</text>
        <text x="210" y="14" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace">CM</text>
      </g>
      <g transform="translate(0, 80)">
        <rect width="250" height="22" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1.5"/>
        <text x="40" y="14" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace">300</text>
        <text x="125" y="14" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace">Bob</text>
        <text x="210" y="14" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="monospace">CM</text>
      </g>

      <!-- Selection Filter Indicator -->
      <path d="M-20,54 L-5,65 L-20,76" fill="none" stroke="#818cf8" stroke-width="2"/>
      <text x="-30" y="70" text-anchor="end" fill="#818cf8" font-size="10" font-family="monospace">σ Filter</text>
      
      <!-- Projection Column Indicators -->
      <rect x="0" y="-5" width="80" height="110" rx="6" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="4,4"/>
      <rect x="85" y="-5" width="80" height="110" rx="6" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="82" y="125" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="monospace">π Cols</text>
    </g>

    <!-- RESULTS -->
    <g transform="translate(50, 190)">
       <text x="75" y="-12" text-anchor="middle" fill="#818cf8" font-size="10" font-family="monospace" font-weight="bold">σ (course='CM')</text>
       <rect width="150" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
       <g transform="translate(0, 24)">
         <rect width="150" height="20" rx="4" fill="rgba(16,185,129,0.1)"/>
         <text x="75" y="14" text-anchor="middle" fill="#10b981" font-size="10" font-family="monospace">Dave | CM</text>
       </g>
       <g transform="translate(0, 48)">
         <rect width="150" height="20" rx="4" fill="rgba(16,185,129,0.1)"/>
         <text x="75" y="14" text-anchor="middle" fill="#10b981" font-size="10" font-family="monospace">Bob | CM</text>
       </g>
    </g>

    <g transform="translate(500, 190)">
       <text x="75" y="-12" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="monospace" font-weight="bold">π (stud#, name)</text>
       <rect width="150" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
       <g transform="translate(0, 24)">
         <rect width="150" height="20" rx="4" fill="rgba(14,165,233,0.1)"/>
         <text x="75" y="14" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="monospace">100 | Fred</text>
       </g>
       <g transform="translate(0, 48)">
         <rect width="150" height="20" rx="4" fill="rgba(14,165,233,0.1)"/>
         <text x="75" y="14" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="monospace">200 | Dave</text>
       </g>
    </g>
    
    <line x1="225" y1="130" x2="150" y2="185" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="2,2" marker-end="url(#spArr)"/>
    <line x1="475" y1="130" x2="550" y2="185" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" marker-end="url(#spArr)"/>
  </svg>
</div>


<h3>🔗 Combining Select + Project</h3>
<p>
  The two unary operations are almost always combined to filter both rows and columns
  simultaneously — equivalent to a full <code>SELECT col1, col2 FROM table WHERE condition</code>:
</p>
<div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.4);
            border-radius:12px; padding:14px 20px; margin:14px 0; font-family:'Courier New',monospace;
            color:#6ee7b7; text-align:center;">
  π_(stud#, name)( σ_(course='CM')(Students) )
  <p style="margin:6px 0 0; color:#64748b; font-size:0.88em; font-family:sans-serif;">
    First SELECT rows where course='CM', THEN PROJECT only stud# and name columns
  </p>
</div>

<!-- ============================================================
     SECTION 3 — CARTESIAN PRODUCT
     ============================================================ -->
<h2>✖️ Cartesian Product (R × S)</h2>
<p>
  The Cartesian Product concatenates <strong>every row of R</strong> with
  <strong>every row of S</strong>.  If R has <em>m</em> rows and S has <em>n</em> rows,
  the result has <em>m × n</em> rows — it grows explosively and is rarely useful on its own.
  It is the building block from which all joins are constructed.
</p>

<!-- SVG — Cartesian Product explosion -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="cpArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/>
      </marker>
    </defs>

    <text x="350" y="25" text-anchor="middle" fill="#f8fafc" font-size="14"
          font-family="system-ui, sans-serif" font-weight="800" letter-spacing="0.5">
      CARTESIAN PRODUCT (×): ALL COMBINATIONS
    </text>

    <!-- R Table -->
    <g transform="translate(30, 60)">
      <text x="75" y="-12" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="monospace" font-weight="bold">R (3 rows)</text>
      <rect width="150" height="22" rx="4" fill="rgba(51,65,85,0.8)"/>
      <g transform="translate(0, 24)">
        <rect width="150" height="18" rx="2" fill="rgba(245,158,11,0.1)"/>
        <text x="75" y="13" text-anchor="middle" fill="#fde68a" font-size="10" font-family="monospace">Row R1</text>
      </g>
      <g transform="translate(0, 44)">
        <rect width="150" height="18" rx="2" fill="rgba(245,158,11,0.1)"/>
        <text x="75" y="13" text-anchor="middle" fill="#fde68a" font-size="10" font-family="monospace">Row R2</text>
      </g>
      <g transform="translate(0, 64)">
        <rect width="150" height="18" rx="2" fill="rgba(245,158,11,0.1)"/>
        <text x="75" y="13" text-anchor="middle" fill="#fde68a" font-size="10" font-family="monospace">Row R3</text>
      </g>
    </g>

    <text x="210" y="105" text-anchor="middle" fill="#38bdf8" font-size="28" font-weight="bold">×</text>

    <!-- S Table -->
    <g transform="translate(240, 60)">
      <text x="75" y="-12" text-anchor="middle" fill="#a5b4fc" font-size="11" font-family="monospace" font-weight="bold">S (2 rows)</text>
      <rect width="150" height="22" rx="4" fill="rgba(51,65,85,0.8)"/>
      <g transform="translate(0, 24)">
        <rect width="150" height="18" rx="2" fill="rgba(99,102,241,0.1)"/>
        <text x="75" y="13" text-anchor="middle" fill="#c7d2fe" font-size="10" font-family="monospace">Row S1</text>
      </g>
      <g transform="translate(0, 44)">
        <rect width="150" height="18" rx="2" fill="rgba(99,102,241,0.1)"/>
        <text x="75" y="13" text-anchor="middle" fill="#c7d2fe" font-size="10" font-family="monospace">Row S2</text>
      </g>
    </g>

    <line x1="410" y1="100" x2="450" y2="100" stroke="#38bdf8" stroke-width="2" marker-end="url(#cpArr)"/>

    <!-- Result Table -->
    <g transform="translate(480, 50)">
      <text x="90" y="-12" text-anchor="middle" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold">RESULT (3×2 = 6 rows)</text>
      <rect width="180" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
      <g transform="translate(0, 22)">
        <rect width="180" height="16" rx="2" fill="rgba(245,158,11,0.05)"/>
        <text x="90" y="12" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace">R1 | S1</text>
      </g>
      <g transform="translate(0, 40)">
        <rect width="180" height="16" rx="2" fill="rgba(99,102,241,0.05)"/>
        <text x="90" y="12" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace">R1 | S2</text>
      </g>
      <g transform="translate(0, 58)">
        <rect width="180" height="16" rx="2" fill="rgba(245,158,11,0.05)"/>
        <text x="90" y="12" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace">R2 | S1</text>
      </g>
      <g transform="translate(0, 76)">
        <rect width="180" height="16" rx="2" fill="rgba(99,102,241,0.05)"/>
        <text x="90" y="12" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace">R2 | S2</text>
      </g>
      <g transform="translate(0, 94)">
        <rect width="180" height="16" rx="2" fill="rgba(245,158,11,0.05)"/>
        <text x="90" y="12" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace">R3 | S1</text>
      </g>
      <g transform="translate(0, 112)">
        <rect width="180" height="16" rx="2" fill="rgba(99,102,241,0.05)"/>
        <text x="90" y="12" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace">R3 | S2</text>
      </g>
    </g>

    <!-- Explosion indicator -->
    <path d="M210,120 Q350,220 480,140" fill="none" stroke="rgba(244,63,94,0.4)" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="350" y="240" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="bold">EXPLOSIVE GROWTH</text>
  </svg>
</div>


<div class="callout callout-warning" style="margin-top: 2rem;">
  <span class="callout-icon">⚠️</span>
  <div>
    <strong>The Cartesian Product Explosion</strong>
    <p style="margin-top: 0.5rem; opacity: 0.9;">
      Most row pairs produced by a Cartesian Product are <em>meaningless</em>. This is why we rarely use it alone — <strong>Theta Join</strong> adds a filter to fix this.
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
      <div style="background: rgba(244,63,94,0.08); border: 1px solid rgba(244,63,94,0.35); border-radius: 12px; padding: 1rem; text-align: center;">
        <h4 style="color: #fb7185; margin: 0 0 0.5rem; font-size: 0.85rem; font-weight: bold;">Row Count Formula</h4>
        <code style="font-size: 1rem; color: #fb7185;">|R| rows × |S| rows = |R × S| rows</code>
      </div>
      <div style="background: rgba(148,163,184,0.1); border: 1px solid rgba(148,163,184,0.25); border-radius: 12px; padding: 1rem; text-align: center;">
        <h4 style="color: #94a3b8; margin: 0 0 0.5rem; font-size: 0.85rem; font-weight: bold;">Column Count Formula</h4>
        <code style="font-size: 1rem; color: #94a3b8;">cols(R) + cols(S) = result cols</code>
      </div>
    </div>
  </div>
</div>


<!-- ============================================================
     SECTION 4 — JOIN FAMILY
     ============================================================ -->
<h2>🔗 The Join Family</h2>

<!-- SVG — Join progression (θ → Inner → Natural) -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:750px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="jArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/>
      </marker>
    </defs>

    <text x="375" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="800">
      JOIN PROGRESSION: θ → INNER (EQUIJOIN) → NATURAL
    </text>

    <!-- THETA -->
    <g transform="translate(15, 50)">
      <rect width="220" height="230" rx="16" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.3)" stroke-width="1.5"/>
      <text x="110" y="25" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">θ THETA JOIN</text>
      <text x="110" y="45" text-anchor="middle" fill="#94a3b8" font-size="10">R ⋈_cond S</text>
      <rect x="20" y="60" width="180" height="150" rx="10" fill="rgba(15,23,42,0.4)"/>
      <text x="110" y="80" text-anchor="middle" fill="#94a3b8" font-size="9">Any Comparison (=, <, >)</text>
      <line x1="40" y1="100" x2="180" y2="100" stroke="rgba(245,158,11,0.2)"/>
      <text x="110" y="130" text-anchor="middle" fill="#fde68a" font-size="9" font-style="italic">"Cartesian Product + Filter"</text>
    </g>

    <!-- Arrow 1 -->
    <line x1="235" y1="165" x2="265" y2="165" stroke="#38bdf8" stroke-width="2" marker-end="url(#jArr)"/>
    <text x="250" y="155" text-anchor="middle" fill="#38bdf8" font-size="9">PK = FK</text>

    <!-- INNER -->
    <g transform="translate(265, 50)">
      <rect width="220" height="230" rx="16" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>
      <text x="110" y="25" text-anchor="middle" fill="#a5b4fc" font-size="12" font-weight="bold">INNER (EQUIJOIN)</text>
      <text x="110" y="45" text-anchor="middle" fill="#94a3b8" font-size="10">Matches key values</text>
      <rect x="20" y="60" width="180" height="150" rx="10" fill="rgba(15,23,42,0.4)"/>
      <g transform="translate(30, 85)">
        <text x="0" y="0" fill="#94a3b8" font-size="8">stud# | course | course#</text>
        <text x="0" y="15" fill="#c7d2fe" font-size="8">100 | PH | PH  ⚠️</text>
        <text x="0" y="30" fill="#c7d2fe" font-size="8">200 | CM | CM  ⚠️</text>
        <text x="75" y="55" text-anchor="middle" fill="#fb7185" font-size="8" font-weight="bold">DUPLICATE COLS</text>
      </g>
    </g>

    <!-- Arrow 2 -->
    <line x1="485" y1="165" x2="515" y2="165" stroke="#38bdf8" stroke-width="2" marker-end="url(#jArr)"/>
    <text x="500" y="155" text-anchor="middle" fill="#38bdf8" font-size="9">PROJECT</text>

    <!-- NATURAL -->
    <g transform="translate(515, 50)">
      <rect width="220" height="230" rx="16" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.3)" stroke-width="1.5"/>
      <text x="110" y="25" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">NATURAL JOIN</text>
      <text x="110" y="45" text-anchor="middle" fill="#94a3b8" font-size="10">Clean & Deduplicated</text>
      <rect x="20" y="60" width="180" height="150" rx="10" fill="rgba(15,23,42,0.4)"/>
      <g transform="translate(30, 85)">
        <text x="0" y="0" fill="#94a3b8" font-size="8">stud# | course | Cname</text>
        <text x="0" y="15" fill="#34d399" font-size="8">100 | PH | Pharmacy ✓</text>
        <text x="0" y="30" fill="#34d399" font-size="8">200 | CM | Computing ✓</text>
        <text x="75" y="55" text-anchor="middle" fill="#34d399" font-size="9" font-weight="bold">ONE COPY ONLY</text>
      </g>
    </g>
  </svg>
</div>

<div class="callout callout-info" style="margin-top: 2rem;">
  <span class="callout-icon">💡</span>
  <div>
    <strong>Comparison: Equijoin vs. Natural Join</strong>
    <p style="margin-top: 0.5rem; opacity: 0.9;">
      While both joins link tables based on equality, they handle matching columns differently:
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
      <div style="background: rgba(244,63,94,0.05); border: 1px solid rgba(244,63,94,0.2); border-radius: 12px; padding: 1rem;">
        <h4 style="color: #fb7185; margin: 0 0 0.5rem; font-size: 0.9rem; font-weight: bold;">⚠️ Equijoin (Inner Join)</h4>
        <p style="font-size: 0.85rem; margin: 0; color: #94a3b8;">
          Retains <strong>both</strong> matching columns, creating redundancy.
        </p>
        <code style="display: block; margin-top: 0.8rem; font-size: 0.75rem; color: #c7d2fe; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
          stud# | name | <strong>course</strong> | <strong>course#</strong> | Cname<br/>
          100 | Fred | <span style="color:#fb7185">PH</span> | <span style="color:#fb7185">PH</span> | Pharmacy
        </code>
      </div>
      <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 1rem;">
        <h4 style="color: #34d399; margin: 0 0 0.5rem; font-size: 0.9rem; font-weight: bold;">✅ Natural Join</h4>
        <p style="font-size: 0.85rem; margin: 0; color: #94a3b8;">
          Automatically <strong>removes</strong> duplicate columns.
        </p>
        <code style="display: block; margin-top: 0.8rem; font-size: 0.75rem; color: #6ee7b7; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
          stud# | name | <strong>course</strong> | Crs.name<br/>
          100 | Fred | <span style="color:#34d399">PH</span> | Pharmacy
        </code>
        <p style="font-size: 0.75rem; margin-top: 0.5rem; color: #34d399; font-weight: bold; text-align: right;">
          Clean! One copy per attribute ✓
        </p>
      </div>
    </div>
    <p style="margin-top: 1rem; font-size: 0.85rem; color: #94a3b8; font-style: italic;">
      Natural Join uses a 3-step logic: <strong>PRODUCT</strong> → <strong>SELECT</strong> (on match) → <strong>PROJECT</strong> (remove duplicates).
    </p>
  </div>
</div>

<!-- ============================================================
     SECTION 5 — OUTER JOINS
     ============================================================ -->
<h2>↔️ Outer Joins</h2>
<p>
  Inner/Natural Joins <strong>silently discard</strong> any rows that don't find a match.
  Outer Joins preserve those unmatched rows, padding missing values with <strong>NULL</strong>.
</p>

<!-- SVG — Left vs Right Outer Join -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 750 350" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:750px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    
    <text x="375" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="800">
      OUTER JOINS: PRESERVING UNMATCHED ROWS
    </text>

    <!-- LEFT TABLE -->
    <g transform="translate(30, 50)">
      <text x="100" y="-10" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">LEFT: STUDENTS</text>
      <rect width="200" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
      <g transform="translate(0, 25)">
        <rect width="200" height="18" rx="4" fill="rgba(14,165,233,0.1)"/>
        <text x="10" y="12" fill="#7dd3fc" font-size="10">100 | Fred | PH</text>
      </g>
      <g transform="translate(0, 48)">
        <rect width="200" height="18" rx="4" fill="rgba(244,63,94,0.15)" stroke="#fb7185" stroke-width="1"/>
        <text x="10" y="12" fill="#fb7185" font-size="10">400 | Peter | EN (No Match!)</text>
      </g>
    </g>

    <!-- RIGHT TABLE -->
    <g transform="translate(520, 50)">
      <text x="100" y="-10" text-anchor="middle" fill="#a5b4fc" font-size="11" font-weight="bold">RIGHT: COURSES</text>
      <rect width="200" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
      <g transform="translate(0, 25)">
        <rect width="200" height="18" rx="4" fill="rgba(99,102,241,0.1)"/>
        <text x="10" y="12" fill="#c7d2fe" font-size="10">PH | Pharmacy</text>
      </g>
      <g transform="translate(0, 48)">
        <rect width="200" height="18" rx="4" fill="rgba(244,63,94,0.15)" stroke="#fb7185" stroke-width="1"/>
        <text x="10" y="12" fill="#fb7185" font-size="10">CH | Chemistry (No Match!)</text>
      </g>
    </g>

    <!-- LEFT OUTER RESULT -->
    <g transform="translate(30, 160)">
      <rect width="320" height="160" rx="16" fill="rgba(14,165,233,0.05)" stroke="rgba(14,165,233,0.3)" stroke-width="1.5"/>
      <text x="160" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">⬅️ LEFT OUTER JOIN</text>
      <g transform="translate(20, 50)">
        <rect width="280" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
        <text x="10" y="14" fill="#94a3b8" font-size="9">stud# | name | course | Cname</text>
        <g transform="translate(0, 25)">
           <text x="10" y="12" fill="#7dd3fc" font-size="9">100 | Fred | PH | Pharmacy</text>
        </g>
        <g transform="translate(0, 50)">
           <rect width="280" height="18" rx="4" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.3)"/>
           <text x="10" y="13" fill="#fb7185" font-size="9">400 | Peter | EN | </text>
           <text x="220" y="13" fill="#64748b" font-size="9" font-style="italic" font-weight="bold">NULL</text>
        </g>
      </g>
      <text x="160" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">Peter is preserved, missing Course name → NULL</text>
    </g>

    <!-- RIGHT OUTER RESULT -->
    <g transform="translate(400, 160)">
      <rect width="320" height="160" rx="16" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>
      <text x="160" y="25" text-anchor="middle" fill="#a5b4fc" font-size="12" font-weight="bold">RIGHT OUTER JOIN ➡️</text>
      <g transform="translate(20, 50)">
        <rect width="280" height="20" rx="4" fill="rgba(51,65,85,0.8)"/>
        <text x="10" y="14" fill="#94a3b8" font-size="9">stud# | name | course# | Cname</text>
        <g transform="translate(0, 25)">
           <text x="10" y="12" fill="#c7d2fe" font-size="9">100 | Fred | PH | Pharmacy</text>
        </g>
        <g transform="translate(0, 50)">
           <rect width="280" height="18" rx="4" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.3)"/>
           <text x="10" y="13" fill="#64748b" font-size="9" font-style="italic" font-weight="bold">NULL</text>
           <text x="100" y="13" fill="#fb7185" font-size="9"> |  | CH | Chemistry</text>
        </g>
      </g>
      <text x="160" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">Chemistry is preserved, missing Student → NULL</text>
    </g>
  </svg>
</div>


<!-- ============================================================
     SECTION 6 — SET OPERATIONS
     ============================================================ -->
<h2>⚙️ Set Operations</h2>
<p>
  Set operations work on two <strong>union-compatible</strong> relations — meaning they must
  have the same number of columns and matching column names, domains, and data types.
</p>

<!-- SVG — Union, Intersection, Difference Venn + table -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:750px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <clipPath id="clipRA"><circle cx="170" cy="140" r="75"/></clipPath>
      <clipPath id="clipRB"><circle cx="250" cy="140" r="75"/></clipPath>
    </defs>

    <text x="375" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="800">
      SET OPERATIONS: UNION, INTERSECTION, DIFFERENCE
    </text>

    <!-- VENN -->
    <g transform="translate(0, 20)">
      <circle cx="170" cy="140" r="75" fill="rgba(99,102,241,0.15)" stroke="#818cf8" stroke-width="2"/>
      <circle cx="250" cy="140" r="75" fill="rgba(14,165,233,0.15)" stroke="#38bdf8" stroke-width="2"/>
      <!-- Intersection -->
      <circle cx="170" cy="140" r="75" fill="rgba(16,185,129,0.3)" clip-path="url(#clipRB)"/>
      
      <text x="120" y="145" text-anchor="middle" fill="#a5b4fc" font-size="14" font-weight="bold">R</text>
      <text x="210" y="145" text-anchor="middle" fill="#6ee7b7" font-size="12" font-weight="bold">R∩S</text>
      <text x="300" y="145" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">S</text>
    </g>

    <!-- TABLE -->
    <g transform="translate(400, 60)">
      <rect width="320" height="220" rx="16" fill="rgba(15,23,42,0.5)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="160" y="25" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">QUICK REFERENCE</text>
      
      <g transform="translate(20, 45)">
         <rect width="280" height="40" rx="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)"/>
         <text x="15" y="25" fill="#34d399" font-size="12" font-weight="bold">R ∪ S (Union)</text>
         <text x="160" y="25" fill="#94a3b8" font-size="9">Everything from both</text>
      </g>
      <g transform="translate(20, 95)">
         <rect width="280" height="40" rx="8" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)"/>
         <text x="15" y="25" fill="#a78bfa" font-size="12" font-weight="bold">R ∩ S (Intersect)</text>
         <text x="160" y="25" fill="#94a3b8" font-size="9">Only the overlap</text>
      </g>
      <g transform="translate(20, 145)">
         <rect width="280" height="40" rx="8" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.3)"/>
         <text x="15" y="25" fill="#fb7185" font-size="12" font-weight="bold">R − S (Difference)</text>
         <text x="160" y="25" fill="#94a3b8" font-size="9">In R but NOT in S</text>
      </g>
    </g>
    
    <text x="210" y="280" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">⚠️ MUST BE UNION-COMPATIBLE</text>
  </svg>
</div>


<!-- ============================================================
     SECTION 7 — COMPOSED QUERY EXAMPLE (Bank DB)
     ============================================================ -->
<h2>🏦 Composed Query Example — Bank Database</h2>
<p>
  Relational Algebra expressions can be <strong>chained</strong> to answer complex questions.
  Consider a bank database with four relations:
  <code>branch(B-name, Address, City, Assets)</code>,
  <code>customer(C-name, Street, City)</code>,
  <code>deposit(Account-no, C-name, B-name, Balance)</code>,
  <code>borrow(Account-no, C-name, B-name, Amount)</code>.
</p>

<div style="background:rgba(15,23,42,0.6); border:1px solid rgba(148,163,184,0.12);
            border-radius:14px; padding:20px 24px; margin:18px 0;">
  <p style="margin:0 0 10px; color:#94a3b8; font-size:0.9em; font-weight:bold; font-family:'Courier New',monospace;">
    Query examples:
  </p>
  <table style="width:100%; border-collapse:collapse; font-family:'Courier New',monospace; font-size:0.88em; color:#94a3b8;">
    <thead>
      <tr style="border-bottom:1px solid rgba(148,163,184,0.15);">
        <th style="padding:8px 12px; text-align:left; color:#bae6fd;">Question</th>
        <th style="padding:8px 12px; text-align:left; color:#6ee7b7;">Relational Algebra</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid rgba(148,163,184,0.06);">
        <td style="padding:8px 12px;">List all branch names</td>
        <td style="padding:8px 12px; color:#6ee7b7;">π_B-name(branch)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(148,163,184,0.06);" >
        <td style="padding:8px 12px;">All cities with a branch</td>
        <td style="padding:8px 12px; color:#6ee7b7;">π_City(branch)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(148,163,184,0.06);">
        <td style="padding:8px 12px;">Cities with a branch OR a customer</td>
        <td style="padding:8px 12px; color:#6ee7b7;">π_City(branch) ∪ π_City(customer)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(148,163,184,0.06);">
        <td style="padding:8px 12px;">Cities with branch but NO customers</td>
        <td style="padding:8px 12px; color:#fbbf24;">π_City(branch) − π_City(customer)</td>
      </tr>
      <tr style="border-bottom:1px solid rgba(148,163,184,0.06);">
        <td style="padding:8px 12px;">Branches with assets &gt; $2500</td>
        <td style="padding:8px 12px; color:#6ee7b7;">π_B-name(σ_Assets&gt;2500(branch))</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;">Customers with both deposit AND loan at UofA</td>
        <td style="padding:8px 12px; color:#e879f9;">π_C-name(σ_B-name='UofA'(deposit)) ∩ π_C-name(σ_B-name='UofA'(borrow))</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        bodyAr: `
<h2>📐 ما هو الجبر العلائقي؟</h2>
<p>
  الجبر العلائقي هو <strong>الأساس النظري</strong> لـ SQL ولغات استعلام قواعد البيانات العلائقية.
  يُعرّف مجموعة رسمية من العمليات التي تتلاعب بـ<em>العلاقات (الجداول)</em> لإنتاج علاقات جديدة.
  كل عملية تأخذ علاقة واحدة أو أكثر كمدخل وتُنتج علاقة جديدة — مما يجعل العمليات
  <strong>قابلة للتركيب</strong>: يمكن توصيل مخرج عملية كمدخل لعملية أخرى.
</p>

<h2>1️⃣ العمليات الأحادية (Unary)</h2>

<h3>σ — التحديد (Selection)</h3>
<p>
  يستخرج <strong>الصفوف</strong> التي تحقق شرطاً معيناً — مجموعة أفقية جزئية من الجدول.
  مكافئ لعبارة WHERE في SQL.
</p>
<div style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.4);
            border-radius:10px; padding:12px 18px; margin:12px 0; font-family:'Courier New',monospace;
            color:#c7d2fe; text-align:center;">
  σ_&lt;الشرط&gt;(اسم_الجدول)&nbsp;&nbsp;مثال:&nbsp;&nbsp;σ_(course='CM')(Students)
</div>

<h3>π — الإسقاط (Projection)</h3>
<p>
  يستخرج <strong>الأعمدة</strong> من جدول — مجموعة رأسية جزئية. مكافئ لـ SELECT col1, col2 في SQL.
  الصفوف المكررة تُحذف تلقائياً.
</p>
<div style="background:rgba(14,165,233,0.1); border:1px solid rgba(14,165,233,0.4);
            border-radius:10px; padding:12px 18px; margin:12px 0; font-family:'Courier New',monospace;
            color:#bae6fd; text-align:center;">
  π_&lt;قائمة الأعمدة&gt;(اسم_الجدول)&nbsp;&nbsp;مثال:&nbsp;&nbsp;π_(stud#, name)(Students)
</div>

<h2>✖️ الضرب الديكارتي (Cartesian Product)</h2>
<p>
  يُنتج جميع أزواج الصفوف الممكنة من جدولين. إذا كان R يحتوي m صفاً وS يحتوي n صفاً،
  النتيجة تحتوي m×n صفاً — تنمو بشكل متفجر وغير مفيدة غالباً بدون فلتر.
  هي اللبنة الأساسية التي تُبنى منها كل عمليات الربط (Join).
</p>

<div class="callout callout-warning" style="margin-top: 2rem;">
  <span class="callout-icon">⚠️</span>
  <div>
    <strong>انفجار الضرب الديكارتي</strong>
    <p style="margin-top: 0.5rem; opacity: 0.9;">
      معظم أزواج الصفوف الناتجة عن الضرب الديكارتي هي <em>غير مفيدة</em>. لهذا السبب نادراً ما نستخدمه بمفرده — <strong>ربط ثيتا</strong> يضيف فلتر لإصلاح ذلك.
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
      <div style="background: rgba(244,63,94,0.08); border: 1px solid rgba(244,63,94,0.35); border-radius: 12px; padding: 1rem; text-align: center;">
        <h4 style="color: #fb7185; margin: 0 0 0.5rem; font-size: 0.85rem; font-weight: bold;">قانون عدد الصفوف</h4>
        <code style="font-size: 1rem; color: #fb7185; direction: ltr; display: block;">|R| × |S| = |R × S| rows</code>
      </div>
      <div style="background: rgba(148,163,184,0.1); border: 1px solid rgba(148,163,184,0.25); border-radius: 12px; padding: 1rem; text-align: center;">
        <h4 style="color: #94a3b8; margin: 0 0 0.5rem; font-size: 0.85rem; font-weight: bold;">قانون عدد الأعمدة</h4>
        <code style="font-size: 1rem; color: #94a3b8; direction: ltr; display: block;">cols(R) + cols(S) = result</code>
      </div>
    </div>
  </div>
</div>


<h2>🔗 عائلة الربط (Join)</h2>
<ul>
  <li><strong>ربط ثيتا (θ Join):</strong> ضرب ديكارتي + شرط تصفية (أي مقارنة: =, &lt;, &gt; …)</li>
  <li><strong>الربط الداخلي (Inner/Equijoin):</strong> ربط ثيتا حيث الشرط هو تساوي المفتاح الأساسي بالمفتاح الأجنبي. يحذف الصفوف غير المتطابقة، لكن يُبقي على عمود مكرر.</li>
  <li><strong>الربط الطبيعي (Natural Join):</strong> ربط داخلي + حذف الأعمدة المكررة. عملية من 3 مراحل: ضرب ديكارتي → تحديد → إسقاط.</li>
</ul>

<div class="callout callout-info" style="margin-top: 2rem;">
  <span class="callout-icon">💡</span>
  <div>
    <strong>مقارنة: الربط المتساوي مقابل الربط الطبيعي</strong>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
      <div style="background: rgba(244,63,94,0.05); border: 1px solid rgba(244,63,94,0.2); border-radius: 12px; padding: 1.2rem;">
        <h4 style="color: #fb7185; margin: 0 0 0.5rem; font-size: 0.95rem; font-weight: bold;">⚠️ الربط المتساوي (Equijoin)</h4>
        <p style="font-size: 0.88rem; margin: 0; color: #94a3b8;">
          يحتفظ بكلا العمودين اللذين تمت المطابقة بينهما، مما يؤدي إلى تكرار غير ضروري للبيانات في النتيجة.
        </p>
      </div>
      <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 1.2rem;">
        <h4 style="color: #34d399; margin: 0 0 0.5rem; font-size: 0.95rem; font-weight: bold;">✅ الربط الطبيعي (Natural Join)</h4>
        <p style="font-size: 0.88rem; margin: 0; color: #94a3b8;">
          يقوم بحذف الأعمدة المكررة تلقائياً، مما ينتج عنه جدول "نظيف" يحتوي على نسخة واحدة فقط من كل خاصية.
        </p>
      </div>
    </div>
  </div>
</div>


<h2>↔️ الرباطات الخارجية (Outer Joins)</h2>
<ul>
  <li><strong>الربط الخارجي الأيسر (Left Outer Join):</strong> جميع صفوف الجدول الأيسر مُحتفظ بها. الصفوف غير المتطابقة من الجانب الأيمن تُملأ بـ NULL.</li>
  <li><strong>الربط الخارجي الأيمن (Right Outer Join):</strong> جميع صفوف الجدول الأيمن مُحتفظ بها. الصفوف غير المتطابقة من الجانب الأيسر تُملأ بـ NULL.</li>
</ul>

<h2>⚙️ عمليات المجموعات (Set Operations)</h2>
<p>تتطلب جداول متوافقة (نفس عدد الأعمدة والأنواع والنطاقات):</p>
<ul>
  <li><strong>الاتحاد (Union ∪):</strong> جميع الصفوف من الجدولين، مع حذف المكرر.</li>
  <li><strong>التقاطع (Intersection ∩):</strong> الصفوف المشتركة بين الجدولين فقط.</li>
  <li><strong>الفرق (Difference −):</strong> صفوف في الجدول الأول وليست في الثاني. R−S ≠ S−R ⚠️</li>
</ul>
`
      }
    }
  ],

  summary: {
    points: [
      "Relational Algebra is the theoretical foundation of SQL; every operation takes relations as input and produces a new relation.",
      "SELECT (σ) produces a horizontal subset — filters ROWS by a condition.",
      "PROJECT (π) produces a vertical subset — filters COLUMNS; eliminates duplicate result rows.",
      "Cartesian Product (×) yields all possible row pairs: |R| × |S| rows, all columns combined. Rarely useful alone.",
      "Theta Join = Cartesian Product + ANY filter condition. Inner Join (Equijoin) = Theta Join where condition is PK = FK.",
      "Natural Join = Equijoin + eliminate duplicate columns. Unmatched rows are DISCARDED (3-step: Product → Select → Project).",
      "Left Outer Join: ALL left-table rows kept; unmatched right side → NULL. Right Outer Join: ALL right-table rows kept; unmatched left side → NULL.",
      "Set operations (Union, Intersection, Difference) require UNION-COMPATIBLE tables. R − S ≠ S − R."
    ],
    pointsAr: [
      "الجبر العلائقي أساس SQL النظري؛ كل عملية تأخذ علاقات كمدخل وتُنتج علاقة جديدة.",
      "SELECT (σ): مجموعة أفقية — يُصفّي الصفوف بشرط.",
      "PROJECT (π): مجموعة رأسية — يُصفّي الأعمدة ويحذف الصفوف المكررة.",
      "الضرب الديكارتي (×): جميع أزواج الصفوف الممكنة: |R|×|S| صف. نادراً مفيد وحده.",
      "ربط ثيتا = ضرب ديكارتي + شرط. الربط الداخلي = ربط ثيتا حيث الشرط PK=FK.",
      "الربط الطبيعي = ربط داخلي + حذف الأعمدة المكررة. الصفوف غير المتطابقة تُحذف. عملية 3 مراحل.",
      "الربط الخارجي الأيسر: جميع صفوف اليسار مُحتفظ بها، اليمين غير المتطابق → NULL. والعكس للأيمن.",
      "عمليات المجموعات تتطلب جداول متوافقة. R − S ≠ S − R ⚠️"
    ]
  },

  mcq: [
    {
      id: 'db-l8-q1',
      question: "Which relational algebra operation yields a vertical subset of a table (extracting columns)?",
      questionAr: "أي عملية في الجبر العلائقي تُنتج مجموعة جزئية رأسية (استخراج الأعمدة)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Selection (σ)", isCorrect: false },
        { id: 'b', text: "Projection (π)", isCorrect: true },
        { id: 'c', text: "Cartesian Product", isCorrect: false },
        { id: 'd', text: "Difference", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q2',
      question: "Which operation yields all possible pairs of rows from two tables?",
      questionAr: "أي عملية تُنتج جميع الأزواج الممكنة من الصفوف من جدولين؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Natural Join", isCorrect: false },
        { id: 'b', text: "Cartesian Product (×)", isCorrect: true },
        { id: 'c', text: "Intersection", isCorrect: false },
        { id: 'd', text: "Union", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q3',
      question: "A join that yields all rows in the LEFT table, including those without a match in the right table, is called:",
      questionAr: "الربط الذي يُرجع جميع صفوف الجدول الأيسر بما فيها تلك التي ليس لها تطابق في الجدول الأيمن يُسمى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Inner Join", isCorrect: false },
        { id: 'b', text: "Left Outer Join", isCorrect: true },
        { id: 'c', text: "Right Outer Join", isCorrect: false },
        { id: 'd', text: "Natural Join", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q4',
      question: "In order to perform Union, Intersection, or Difference, the participating relations must be:",
      questionAr: "لتنفيذ عمليات الاتحاد والتقاطع والفرق، يجب أن تكون العلاقات المشاركة:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Exactly the same table", isCorrect: false },
        { id: 'b', text: "Joined by a foreign key", isCorrect: false },
        { id: 'c', text: "Union-compatible: same number of columns with matching domains and data types", isCorrect: true },
        { id: 'd', text: "In Boyce-Codd Normal Form", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q5',
      question: "Which statement about the Difference operation (R − S) is TRUE?",
      questionAr: "أي من العبارات التالية صحيحة بشأن عملية الفرق (R − S)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "It combines all rows from both tables", isCorrect: false },
        { id: 'b', text: "R − S is always equal to S − R", isCorrect: false },
        { id: 'c', text: "R − S yields rows in R not found in S, and is NOT equal to S − R", isCorrect: true },
        { id: 'd', text: "It requires tables to have different column names", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q6',
      question: "What is the correct definition of a Natural Join?",
      questionAr: "ما هو التعريف الصحيح للربط الطبيعي (Natural Join)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "An Equijoin that also eliminates duplicate columns from the result", isCorrect: true },
        { id: 'b', text: "A Cartesian product without any condition", isCorrect: false },
        { id: 'c', text: "An operation that retains all unmatched rows padded with NULL", isCorrect: false },
        { id: 'd', text: "A join that works on single tables only", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q7',
      question: "Relations R has 5 rows and 3 columns; relation S has 4 rows and 2 columns. What is the size (rows × columns) of their Cartesian Product R × S?",
      questionAr: "العلاقة R تحتوي 5 صفوف و3 أعمدة، والعلاقة S تحتوي 4 صفوف و2 أعمدة. ما حجم (صفوف × أعمدة) ناتج الضرب الديكارتي R × S؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "9 rows × 5 columns", isCorrect: false },
        { id: 'b', text: "20 rows × 6 columns", isCorrect: false },
        { id: 'c', text: "20 rows × 5 columns", isCorrect: true },
        { id: 'd', text: "9 rows × 6 columns", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q8',
      question: "Using the bank database, which relational algebra expression correctly finds customers who have BOTH a deposit AND a loan at the UofA branch?",
      questionAr: "باستخدام قاعدة بيانات البنك، أي تعبير جبر علائقي يجد العملاء الذين لديهم إيداع وقرض في فرع UofA؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "π_C-name(σ_B-name='UofA'(deposit)) ∪ π_C-name(σ_B-name='UofA'(borrow))", isCorrect: false },
        { id: 'b', text: "π_C-name(σ_B-name='UofA'(deposit)) ∩ π_C-name(σ_B-name='UofA'(borrow))", isCorrect: true },
        { id: 'c', text: "π_C-name(σ_B-name='UofA'(deposit)) − π_C-name(σ_B-name='UofA'(borrow))", isCorrect: false },
        { id: 'd', text: "σ_B-name='UofA'(deposit ⋈ borrow)", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q9',
      question: "A Natural Join is executed as a 3-step process. Which correctly orders the steps?",
      questionAr: "يُنفَّذ الربط الطبيعي (Natural Join) كعملية من 3 خطوات. أي الخيارات يُرتّب الخطوات بشكل صحيح؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "PROJECT → SELECT → PRODUCT", isCorrect: false },
        { id: 'b', text: "SELECT → PRODUCT → PROJECT", isCorrect: false },
        { id: 'c', text: "PRODUCT → SELECT (on matching join columns) → PROJECT (remove duplicate columns)", isCorrect: true },
        { id: 'd', text: "PRODUCT → PROJECT → SELECT", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q10',
      question: "Tables R(A,B) and S(A,B) where R = {(a1,b1),(a2,b2)} and S = {(a2,b2),(a3,b3)}. What does R − S yield?",
      questionAr: "جدولان R(A,B) وS(A,B) حيث R = {(a1,b1),(a2,b2)} وS = {(a2,b2),(a3,b3)}. ماذا يُنتج R − S؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "{(a3,b3)} only", isCorrect: false },
        { id: 'b', text: "{(a1,b1),(a3,b3)}", isCorrect: false },
        { id: 'c', text: "{(a1,b1)} only", isCorrect: true },
        { id: 'd', text: "Empty set — all rows cancel out", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q11',
      question: "A Left Outer Join between Students and Courses is performed. Student Peter (stud#=400) is enrolled in course 'EN' which has no matching entry in the Courses table. Which statement correctly describes Peter's row in the result?",
      questionAr: "تم تنفيذ Left Outer Join بين Students وCourses. الطالب Peter (stud#=400) مسجل في مادة 'EN' التي ليس لها تطابق في جدول Courses. أي عبارة تصف صف Peter في النتيجة بشكل صحيح؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "Peter's row is completely excluded from the result", isCorrect: false },
        { id: 'b', text: "Peter's row appears with NULL values filling the Courses columns", isCorrect: true },
        { id: 'c', text: "Peter's row appears only if a Right Outer Join is used instead", isCorrect: false },
        { id: 'd', text: "Peter's row appears with zeroes filling the Courses columns", isCorrect: false }
      ]
    },
    {
      id: 'db-l8-q12',
      question: "Which of the following relational algebra expressions correctly retrieves the names of all customers who live in a city that has no bank branches?",
      questionAr: "أي من تعبيرات الجبر العلائقي التالية يسترجع بشكل صحيح أسماء العملاء الذين يسكنون في مدينة لا يوجد فيها أي فرع بنكي؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "π_C-name(customer) − π_C-name(branch)", isCorrect: false },
        { id: 'b', text: "π_C-name( σ_City∈(π_City(customer)−π_City(branch)) (customer) )", isCorrect: true },
        { id: 'c', text: "π_C-name(customer) ∩ π_City(branch)", isCorrect: false },
        { id: 'd', text: "π_C-name(customer ⋈ branch)", isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'db-l8-w1',
      question: "Explain the difference between an Inner Join (Equijoin) and a Natural Join. Why is the Natural Join generally preferred, and what does it do in its three steps?",
      questionAr: "اشرح الفرق بين الربط الداخلي (Equijoin) والربط الطبيعي (Natural Join). لماذا يُفضَّل الربط الطبيعي عموماً، وماذا يفعل في خطواته الثلاث؟",
      modelAnswer: "An Inner Join (Equijoin) is a Theta Join where the condition is equality between a primary key and a foreign key. It returns only matched rows but retains both join columns in the result (e.g., both 'course' and 'course#' appear), creating redundant data. A Natural Join is an Equijoin that additionally eliminates those duplicate columns: Step 1 — compute the PRODUCT of the two tables; Step 2 — SELECT only the rows where the common attribute values match; Step 3 — PROJECT to keep only one copy of each attribute (removing the duplicate join column). The Natural Join is preferred because its result is cleaner — no redundant columns — and conceptually matches what we expect from a meaningful join.",
      modelAnswerAr: "الربط الداخلي (Equijoin) هو ربط ثيتا حيث الشرط هو المساواة بين المفتاح الأساسي والمفتاح الأجنبي. يُرجع الصفوف المتطابقة فقط لكنه يُبقي على كلا عمودي الربط في النتيجة (مثل: 'course' و'course#' معاً)، مما يُنشئ بيانات مكررة. الربط الطبيعي هو ربط داخلي يزيل إضافياً الأعمدة المكررة عبر 3 خطوات: الخطوة 1 — حساب الضرب الديكارتي للجدولين؛ الخطوة 2 — تحديد الصفوف التي تتطابق فيها قيم السمة المشتركة؛ الخطوة 3 — إسقاط نسخة واحدة فقط من كل سمة (إزالة عمود الربط المكرر). يُفضَّل الربط الطبيعي لأن النتيجة أنظف بلا أعمدة مكررة."
    },
    {
      id: 'db-l8-w2',
      question: "Using the bank database with relations branch(B-name, City, Assets) and customer(C-name, City), write relational algebra expressions to find: (a) all cities with at least one branch, (b) all cities with at least one customer but no branch, and (c) cities that have both a branch and a customer.",
      questionAr: "باستخدام قاعدة بيانات البنك مع العلاقات branch(B-name, City, Assets) وcustomer(C-name, City)، اكتب تعبيرات الجبر العلائقي لإيجاد: (أ) جميع المدن التي لها فرع واحد على الأقل، (ب) جميع المدن التي لها عملاء ولا يوجد فيها فرع، (ج) المدن التي لها فرع وعملاء معاً.",
      modelAnswer: "(a) π_City(branch) — project the City attribute from branch to get all branch cities. (b) π_City(customer) − π_City(branch) — start with all customer cities, subtract those that also have a branch; this uses Difference and requires the two projections to be union-compatible (they both project to a single City attribute). (c) π_City(branch) ∩ π_City(customer) — the Intersection of branch cities and customer cities returns only those cities that appear in both. All three expressions require union-compatible operands since both projected results have a single attribute of the same domain (City).",
      modelAnswerAr: "(أ) π_City(branch) — إسقاط خاصية City من جدول branch للحصول على جميع مدن الفروع. (ب) π_City(customer) − π_City(branch) — نبدأ بجميع مدن العملاء ونطرح منها المدن التي تحتوي أيضاً على فرع؛ يستخدم عملية الفرق ويتطلب أن يكون الإسقاطان متوافقَين (كلاهما يُسقط على سمة City واحدة). (ج) π_City(branch) ∩ π_City(customer) — تقاطع مدن الفروع ومدن العملاء يُرجع المدن التي تظهر في كليهما. تتطلب جميع التعبيرات الثلاثة معاملات متوافقة إذ يحتوي كل ناتج إسقاط على سمة مفردة من نفس النطاق (City)."
    },
    {
      id: 'db-l8-w3',
      question: "A colleague claims: 'A Left Outer Join always produces more rows than an Inner Join on the same two tables.' Is this always true? Explain.",
      questionAr: "يجادل زميل: 'الربط الخارجي الأيسر دائماً يُنتج عدداً من الصفوف أكبر من الربط الداخلي على نفس الجدولين.' هل هذا صحيح دائماً؟ اشرح.",
      modelAnswer: "Not necessarily always — but it is always true that a Left Outer Join produces at least as many rows as the Inner Join on the same tables, never fewer. The Left Outer Join returns all rows the Inner Join returns (the matched pairs), PLUS any unmatched left-table rows padded with NULL. So if every row in the left table has a matching row in the right table (i.e., there are no unmatched left rows), both operations produce exactly the same number of rows. The colleague's claim is correct in the common case where at least one left row has no match, but the word 'always' makes it imprecise: when all rows match, the counts are equal.",
      modelAnswerAr: "ليس دائماً — لكن الصحيح أن الربط الخارجي الأيسر يُنتج دائماً عدداً من الصفوف لا يقل عن الربط الداخلي على نفس الجدولين. الربط الخارجي الأيسر يُرجع جميع الصفوف التي يُرجعها الربط الداخلي (الأزواج المتطابقة) بالإضافة إلى أي صفوف من الجدول الأيسر لا تجد تطابقاً مُملّأة بـ NULL. لذا إذا كان كل صف في الجدول الأيسر له صف مطابق في الجدول الأيمن (أي لا توجد صفوف غير متطابقة من اليسار)، تُنتج العمليتان نفس العدد من الصفوف تماماً. ادعاء الزميل صحيح في الحالة الشائعة، لكن كلمة 'دائماً' تجعله غير دقيق: حين تتطابق جميع الصفوف تكون الأعداد متساوية."
    }
  ]
};