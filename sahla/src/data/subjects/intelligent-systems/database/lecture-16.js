// ============================================================
// LECTURE 16: Database Normalization — Enhanced Refactoring
// Refined SVG diagrams + Glassmorphic design system
// ============================================================

const SVG_NORMALIZATION_PROGRESSION = `
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="pgArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/>
      </marker>
      <filter id="pgGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <text x="350" y="22" text-anchor="middle" fill="#94a3b8" font-size="10"
          font-family="system-ui,sans-serif" font-weight="bold" letter-spacing="2">
      NORMALIZATION PROGRESSION
    </text>

    <!-- UNF -->
    <rect x="18" y="38" width="110" height="56" rx="12"
          fill="rgba(244,63,94,0.1)" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="73" y="62" text-anchor="middle" fill="#fb7185" font-size="13"
          font-family="system-ui,sans-serif" font-weight="bold">UNF</text>
    <text x="73" y="78" text-anchor="middle" fill="#fca5a5" font-size="9"
          font-family="system-ui,sans-serif">Un-normalized</text>

    <line x1="128" y1="66" x2="158" y2="66" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#pgArr)"/>

    <!-- 1NF -->
    <rect x="160" y="38" width="110" height="56" rx="12"
          fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="215" y="62" text-anchor="middle" fill="#fbbf24" font-size="13"
          font-family="system-ui,sans-serif" font-weight="bold">1NF</text>
    <text x="215" y="78" text-anchor="middle" fill="#fde68a" font-size="9"
          font-family="system-ui,sans-serif">No Repeat Groups</text>

    <line x1="270" y1="66" x2="300" y2="66" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#pgArr)"/>

    <!-- 2NF -->
    <rect x="302" y="38" width="110" height="56" rx="12"
          fill="rgba(99,102,241,0.1)" stroke="#818cf8" stroke-width="1.5"/>
    <text x="357" y="62" text-anchor="middle" fill="#a5b4fc" font-size="13"
          font-family="system-ui,sans-serif" font-weight="bold">2NF</text>
    <text x="357" y="78" text-anchor="middle" fill="#c7d2fe" font-size="9"
          font-family="system-ui,sans-serif">No Partial Dep.</text>

    <line x1="412" y1="66" x2="442" y2="66" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#pgArr)"/>

    <!-- 3NF -->
    <rect x="444" y="38" width="110" height="56" rx="12"
          fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2" filter="url(#pgGlow)"/>
    <text x="499" y="62" text-anchor="middle" fill="#34d399" font-size="13"
          font-family="system-ui,sans-serif" font-weight="bold">3NF ★</text>
    <text x="499" y="78" text-anchor="middle" fill="#6ee7b7" font-size="9"
          font-family="system-ui,sans-serif">No Transitive Dep.</text>

    <line x1="554" y1="66" x2="584" y2="66" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#pgArr)"/>

    <!-- BCNF -->
    <rect x="586" y="38" width="96" height="56" rx="12"
          fill="rgba(232,121,249,0.1)" stroke="#e879f9" stroke-width="1.5"/>
    <text x="634" y="62" text-anchor="middle" fill="#e879f9" font-size="13"
          font-family="system-ui,sans-serif" font-weight="bold">BCNF</text>
    <text x="634" y="78" text-anchor="middle" fill="#f0abfc" font-size="9"
          font-family="system-ui,sans-serif">Stricter 3NF</text>

    <rect x="444" y="104" width="110" height="22" rx="6"
          fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.4)" stroke-width="1"/>
    <text x="499" y="119" text-anchor="middle" fill="#6ee7b7" font-size="9"
          font-family="system-ui,sans-serif" font-weight="bold">Business Target ✓</text>

    <text x="350" y="148" text-anchor="middle" fill="#64748b" font-size="9"
          font-family="system-ui,sans-serif" letter-spacing="0.5">
      2NF > 1NF  ·  3NF > 2NF  ·  Optimization Balance
    </text>
  </svg>
</div>
`;

const SVG_DATA_ANOMALIES = `
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <text x="350" y="24" text-anchor="middle" fill="#94a3b8" font-size="10"
          font-family="system-ui,sans-serif" font-weight="bold" letter-spacing="2">
      DATA ANOMALIES
    </text>

    <!-- Insertion -->
    <rect x="20" y="40" width="206" height="160" rx="16"
          fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.3)" stroke-width="1.5"/>
    <text x="123" y="65" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">INSERTION</text>
    <text x="123" y="85" text-anchor="middle" fill="#fde68a" font-size="10">Missing required data</text>
    <rect x="63" y="105" width="120" height="30" rx="8" fill="rgba(245,158,11,0.1)"/>
    <text x="123" y="125" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold">New Employee</text>
    <path d="M123 135 L123 155" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 2"/>
    <text x="123" y="175" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">Blocked! (No Dept)</text>

    <!-- Deletion -->
    <rect x="247" y="40" width="206" height="160" rx="16"
          fill="rgba(244,63,94,0.05)" stroke="rgba(244,63,94,0.3)" stroke-width="1.5"/>
    <text x="350" y="65" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold">DELETION</text>
    <text x="350" y="85" text-anchor="middle" fill="#fca5a5" font-size="10">Loss of collateral data</text>
    <rect x="290" y="105" width="120" height="30" rx="8" fill="rgba(244,63,94,0.1)"/>
    <text x="350" y="125" text-anchor="middle" fill="#fb7185" font-size="10" font-weight="bold">Delete Loan</text>
    <path d="M350 135 L350 155" stroke="#f43f5e" stroke-width="2"/>
    <text x="350" y="175" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">Lost Book Info!</text>

    <!-- Modification -->
    <rect x="474" y="40" width="206" height="160" rx="16"
          fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>
    <text x="577" y="65" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="bold">MODIFICATION</text>
    <text x="577" y="85" text-anchor="middle" fill="#c7d2fe" font-size="10">Inconsistent updates</text>
    <g transform="translate(517,105)">
      <rect width="120" height="16" rx="4" fill="rgba(99,102,241,0.2)"/>
      <text x="60" y="12" text-anchor="middle" fill="#a5b4fc" font-size="9">Updated ✓</text>
      <rect y="20" width="120" height="16" rx="4" fill="rgba(244,63,94,0.2)"/>
      <text x="60" y="32" text-anchor="middle" fill="#fb7185" font-size="9">Missed ✗</text>
    </g>
    <text x="577" y="175" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">Data Conflict!</text>
  </svg>
</div>
`;

const SVG_DEPENDENCY_TYPES = `
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="depArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#64748b"/>
      </marker>
    </defs>
    <text x="350" y="22" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif" font-weight="bold" letter-spacing="2">
      DEPENDENCY ANALYSIS
    </text>

    <!-- Composite PK -->
    <rect x="240" y="40" width="220" height="40" rx="10" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2"/>
    <text x="350" y="58" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Primary Key (Composite)</text>
    <text x="350" y="72" text-anchor="middle" fill="#6ee7b7" font-size="10">PROJ_NUM + EMP_NUM</text>

    <!-- Partial Dep -->
    <g transform="translate(50,110)">
      <rect width="140" height="30" rx="8" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="70" y="20" text-anchor="middle" fill="#fbbf24" font-size="11">PROJ_NUM</text>
      <path d="M70 30 L70 60" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#depArr)"/>
      <rect y="60" width="140" height="30" rx="8" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.3)"/>
      <text x="70" y="80" text-anchor="middle" fill="#fde68a" font-size="11">PROJ_NAME</text>
      <text x="70" y="105" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">PARTIAL DEP.</text>
    </g>

    <!-- Full Dep -->
    <g transform="translate(280,110)">
      <rect width="140" height="30" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5"/>
      <text x="70" y="20" text-anchor="middle" fill="#34d399" font-size="11">BOTH KEYS</text>
      <path d="M70 30 L70 60" stroke="#10b981" stroke-width="1.5" marker-end="url(#depArr)"/>
      <rect y="60" width="140" height="30" rx="8" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.3)"/>
      <text x="70" y="80" text-anchor="middle" fill="#6ee7b7" font-size="11">HOURS</text>
      <text x="70" y="105" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">FULL DEP. ✓</text>
    </g>

    <!-- Transitive Dep -->
    <g transform="translate(510,110)">
      <rect width="140" height="30" rx="8" fill="rgba(99,102,241,0.1)" stroke="#818cf8" stroke-width="1.5"/>
      <text x="70" y="20" text-anchor="middle" fill="#a5b4fc" font-size="11">JOB_CLASS</text>
      <path d="M70 30 L70 60" stroke="#818cf8" stroke-width="1.5" marker-end="url(#depArr)"/>
      <rect y="60" width="140" height="30" rx="8" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.3)"/>
      <text x="70" y="80" text-anchor="middle" fill="#c7d2fe" font-size="11">CHG_HOUR</text>
      <text x="70" y="105" text-anchor="middle" fill="#818cf8" font-size="9" font-weight="bold">TRANSITIVE DEP.</text>
    </g>
  </svg>
</div>
`;

const SVG_1NF_TO_2NF = `
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <text x="350" y="22" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif" font-weight="bold" letter-spacing="2">
      1NF → 2NF DECOMPOSITION
    </text>

    <!-- Source -->
    <rect x="20" y="40" width="220" height="150" rx="12" fill="rgba(244,63,94,0.05)" stroke="#f43f5e" stroke-width="1"/>
    <text x="130" y="60" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="bold">1NF Table (Problematic)</text>
    <text x="35" y="85" fill="#fca5a5" font-size="10">PROJ_NUM (Key)</text>
    <text x="35" y="100" fill="#fca5a5" font-size="10">EMP_NUM (Key)</text>
    <text x="35" y="115" fill="#64748b" font-size="10">PROJ_NAME (Partial)</text>
    <text x="35" y="130" fill="#64748b" font-size="10">EMP_NAME (Partial)</text>
    <text x="35" y="145" fill="#64748b" font-size="10">HOURS (Full)</text>

    <!-- Arrow -->
    <path d="M260 115 L320 115" stroke="#38bdf8" stroke-width="2" marker-end="url(#depArr)"/>
    <text x="290" y="110" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">SPLIT</text>

    <!-- Results -->
    <g transform="translate(350,40)">
      <rect width="320" height="40" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1"/>
      <text x="10" y="25" fill="#34d399" font-size="11" font-weight="bold">PROJECT: {PROJ_NUM, PROJ_NAME}</text>
      
      <rect y="50" width="320" height="40" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1"/>
      <text x="10" y="75" fill="#34d399" font-size="11" font-weight="bold">EMPLOYEE: {EMP_NUM, EMP_NAME...}</text>
      
      <rect y="100" width="320" height="40" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1"/>
      <text x="10" y="125" fill="#34d399" font-size="11" font-weight="bold">ASSIGN: {PROJ_NUM, EMP_NUM, HOURS}</text>
    </g>
  </svg>
</div>
`;

const SVG_2NF_TO_3NF = `
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <text x="350" y="22" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif" font-weight="bold" letter-spacing="2">
      2NF → 3NF DECOMPOSITION
    </text>

    <!-- Source -->
    <rect x="20" y="50" width="200" height="100" rx="12" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="1"/>
    <text x="120" y="75" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">EMPLOYEE (2NF)</text>
    <text x="35" y="100" fill="#fde68a" font-size="10">EMP_NUM (PK)</text>
    <text x="35" y="115" fill="#fde68a" font-size="10">JOB_CLASS</text>
    <text x="35" y="130" fill="#fb7185" font-size="10">CHG_HOUR (Transitive)</text>

    <!-- Arrow -->
    <path d="M240 100 L300 100" stroke="#38bdf8" stroke-width="2" marker-end="url(#depArr)"/>

    <!-- Final -->
    <g transform="translate(330,50)">
      <rect width="340" height="40" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5"/>
      <text x="10" y="25" fill="#34d399" font-size="11" font-weight="bold">EMPLOYEE: {EMP_NUM, EMP_NAME, JOB_CLASS(FK)}</text>
      
      <rect y="60" width="340" height="40" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5"/>
      <text x="10" y="85" fill="#34d399" font-size="11" font-weight="bold">JOB: {JOB_CLASS, CHG_HOUR}</text>
    </g>
  </svg>
</div>
`;

const SVG_BCNF_DECOMPOSITION = `
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <text x="350" y="22" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif" font-weight="bold" letter-spacing="2">
      3NF → BCNF DECOMPOSITION
    </text>

    <!-- Problem -->
    <rect x="20" y="45" width="280" height="130" rx="12" fill="rgba(244,63,94,0.05)" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="160" y="70" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="bold">3NF (Not BCNF)</text>
    <text x="40" y="95" fill="#fca5a5" font-size="10">{STU_ID, CLASS_CODE} → PK</text>
    <text x="40" y="115" fill="#fb7185" font-size="10">STAFF_ID → CLASS_CODE (Violation!)</text>
    <text x="40" y="145" fill="#64748b" font-size="9" italic>STAFF_ID is a determinant but NOT a Candidate Key</text>

    <!-- Arrow -->
    <path d="M310 110 L350 110" stroke="#38bdf8" stroke-width="2" marker-end="url(#depArr)"/>

    <!-- Solution -->
    <g transform="translate(370,45)">
      <rect width="300" height="45" rx="8" fill="#10b9811a" stroke="#10b981" stroke-width="1.5"/>
      <text x="150" y="28" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">ENROLL: {STU_ID, STAFF_ID, GRADE}</text>
      
      <rect y="65" width="300" height="45" rx="8" fill="#10b9811a" stroke="#10b981" stroke-width="1.5"/>
      <text x="150" y="93" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">CLASS_STAFF: {STAFF_ID, CLASS_CODE}</text>
    </g>
  </svg>
</div>
`;

export const LECTURE = {
  subjectId: 'database',
  number: 16,
  title: 'Lecture 7: Normalization of Database Tables',
  titleAr: 'المحاضرة 7: تطبيع جداول قواعد البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<!-- ============================================================
     SECTION 1 — WHAT IS NORMALIZATION?
     ============================================================ -->
<h2>🗄️ What Is Database Normalization?</h2>
<p>
  Normalization is the systematic process of evaluating and restructuring database
  table schemas to <strong>minimize data redundancy</strong> and
  <strong>eliminate data anomalies</strong>. Think of it as tidying a messy room:
  instead of piling everything into one giant drawer, you sort things into labelled
  compartments so nothing is duplicated and nothing gets lost.
</p>
<p>
  It works through a series of progressively stricter stages called
  <strong>normal forms</strong>: <code>1NF</code> → <code>2NF</code> → <code>3NF</code> → <code>BCNF</code>.
  For most real-world business databases, <strong>3NF is the target</strong>.
  The highest normal form is not always the most desirable — extreme normalisation
  can hurt query performance by forcing many costly joins.
</p>

<!-- SVG — Normalization Progression -->
${SVG_NORMALIZATION_PROGRESSION}

<!-- ============================================================
     SECTION 2 — DATA ANOMALIES
     ============================================================ -->
<h2>⚠️ Data Anomalies</h2>
<p>
  Anomalies are the <em>symptoms</em> of a poorly designed, un-normalised flat-file database.
  They make the data untrustworthy over time.
</p>

<!-- SVG — Three anomalies side by side -->
${SVG_DATA_ANOMALIES}

<!-- ============================================================
     SECTION 3 — DEPENDENCY TYPES
     ============================================================ -->
<h2>🔗 Types of Dependencies</h2>
<p>
  Understanding dependency types is the heart of normalization.
  A <strong>functional dependency</strong> <code>A → B</code> means: knowing A uniquely determines B.
</p>

<!-- SVG — Dependency Types Diagram -->
${SVG_DEPENDENCY_TYPES}

<!-- ============================================================
     SECTION 4 — FIRST NORMAL FORM (1NF)
     ============================================================ -->
<h2>1️⃣ First Normal Form (1NF)</h2>
<p>
  The un-normalised <code>RPT_FORMAT</code> table stores multiple employees
  per project in a single row — these are <strong>repeating groups</strong>.
  Relational tables must never contain them.
</p>

<h3>Steps to 1NF:</h3>
<ol>
  <li><strong>Eliminate repeating groups</strong> — expand each row so every cell holds exactly one value; project details repeat across employee rows.</li>
  <li><strong>Identify the Primary Key</strong> — <code>PROJ_NUM</code> alone cannot uniquely identify a row. We need a <em>composite PK</em>: <code>(PROJ_NUM, EMP_NUM)</code>.</li>
  <li><strong>Identify all dependencies</strong> — map which attributes depend on all of PK (<em>full</em>), part of PK (<em>partial</em>), or on another non-key attribute (<em>transitive</em>).</li>
</ol>

<p><strong>1NF Properties:</strong> tabular format · all key attributes defined · no repeating groups · all attributes are dependent on the primary key.</p>

<div class="callout callout-warning">
  <p style="margin:0;">
    ⚠️ <strong>Still problematic after 1NF:</strong> the table now has partial dependencies
    (<code>PROJ_NAME</code> depends only on <code>PROJ_NUM</code>) and a transitive dependency (<code>JOB_CLASS</code> → <code>CHG_HOUR</code>).
  </p>
</div>

<!-- ============================================================
     SECTION 5 — SECOND NORMAL FORM (2NF)
     ============================================================ -->
<h2>2️⃣ Second Normal Form (2NF)</h2>
<p>
  A table is in <strong>2NF</strong> if it is in 1NF <em>and</em> contains
  <strong>no partial dependencies</strong> — no non-key attribute may depend on
  only a <em>portion</em> of a composite primary key.
</p>

<!-- SVG — 1NF → 2NF decomposition -->
${SVG_1NF_TO_2NF}

<div class="callout callout-info">
  <p style="margin:0;">
    ⚠️ A 2NF table <strong>may still contain transitive dependencies</strong>.
    That is why we continue to 3NF.
  </p>
</div>

<!-- ============================================================
     SECTION 6 — THIRD NORMAL FORM (3NF)
     ============================================================ -->
<h2>3️⃣ Third Normal Form (3NF)</h2>
<p>
  A table is in <strong>3NF</strong> if it is in 2NF <em>and</em> contains
  <strong>no transitive dependencies</strong>.
</p>
<p>
  In the <code>EMPLOYEE</code> table: <code>EMP_NUM</code> → <code>JOB_CLASS</code> → <code>CHG_HOUR</code>.
  <code>CHG_HOUR</code> depends on <code>JOB_CLASS</code>, not directly on the primary key <code>EMP_NUM</code>.
  The fix: split <code>JOB_CLASS</code> and <code>CHG_HOUR</code> into their own <strong>JOB</strong> table.
</p>

<!-- SVG — 2NF → 3NF decomposition -->
${SVG_2NF_TO_3NF}

<!-- ============================================================
     SECTION 7 — BCNF
     ============================================================ -->
<h2>🔷 Boyce-Codd Normal Form (BCNF)</h2>
<p>
  BCNF is a stricter special case of 3NF. The rule is simple:
  <strong>every determinant must be a candidate key</strong>.
</p>
<ul>
  <li>If a table has only <strong>one candidate key</strong>, 3NF and BCNF are equivalent.</li>
  <li>A table can be in 3NF but <strong>not</strong> in BCNF when a <em>non-key attribute</em> acts as the determinant for a key attribute.</li>
</ul>

<!-- SVG — BCNF example -->
${SVG_BCNF_DECOMPOSITION}
`,
        bodyAr: `
<!-- ============================================================
     القسم 1 — ما هو التطبيع؟
     ============================================================ -->
<h2>🗄️ ما هو تطبيع قواعد البيانات؟</h2>
<p>
  التطبيع (Normalization) هو عملية منهجية لتقييم وإعادة هيكلة جداول قواعد البيانات بهدف
  <strong>تقليل تكرار البيانات</strong> و<strong>إزالة الشذوذات</strong>. يعمل عبر سلسلة من المراحل:
  1NF ← 2NF ← 3NF ← BCNF. لأغراض معظم قواعد بيانات الأعمال، تُعد <strong>3NF هي الهدف</strong>.
</p>

<!-- SVG — Normalization Progression -->
${SVG_NORMALIZATION_PROGRESSION}

<!-- ============================================================
     القسم 2 — الشذوذات
     ============================================================ -->
<h2>⚠️ الشذوذات الثلاثة</h2>
<ul>
  <li><strong>شذوذ الإدراج (Insertion Anomaly):</strong> لا يمكن إضافة بيانات جديدة دون توفر بيانات أخرى غير متاحة. مثال: لا يمكن إضافة موظف جديد بدون تعيينه لقسم.</li>
  <li><strong>شذوذ الحذف (Deletion Anomaly):</strong> حذف سجل يتسبب في فقدان بيانات حيوية أخرى. مثال: حذف استعارة كتاب يُزيل المعلومات الوحيدة عن الكتاب.</li>
  <li><strong>شذوذ التعديل (Modification Anomaly):</strong> تعديل قيمة يتطلب تغيير عدة سجلات، مما يُعرّض البيانات للتناقض.</li>
</ul>

<!-- SVG — Three anomalies side by side -->
${SVG_DATA_ANOMALIES}

<!-- ============================================================
     القسم 3 — أنواع الاعتمادية
     ============================================================ -->
<h2>🔗 أنواع الاعتمادية</h2>
<ul>
  <li><strong>الاعتمادية الكاملة (Full Dependency):</strong> خاصية تعتمد على المفتاح الأساسي كاملاً. مثلاً: HOURS يعتمد على {PROJ_NUM, EMP_NUM} معاً.</li>
  <li><strong>الاعتمادية الجزئية (Partial Dependency):</strong> خاصية تعتمد على جزء فقط من المفتاح المركب. مثلاً: PROJ_NAME يعتمد على PROJ_NUM فقط. تنتهك 2NF.</li>
  <li><strong>الاعتمادية المتعدية (Transitive Dependency):</strong> خاصية غير رئيسية تعتمد على خاصية غير رئيسية أخرى. مثلاً: EMP_NUM → JOB_CLASS → CHG_HOUR. تنتهك 3NF.</li>
</ul>

<!-- SVG — Dependency Types Diagram -->
${SVG_DEPENDENCY_TYPES}

<!-- ============================================================
     القسم 4 — الشكل الطبيعي الأول (1NF)
     ============================================================ -->
<h2>1️⃣ الشكل الطبيعي الأول (1NF)</h2>
<p>
  الشرط: لا توجد مجموعات متكررة في أي خلية — كل خلية تحتوي قيمة واحدة فقط.
  يُضبط مفتاح أساسي مناسب (قد يكون مركباً مثل {PROJ_NUM, EMP_NUM}).
  تُحدد جميع الاعتمادات (كاملة، جزئية، متعدية).
</p>

<!-- ============================================================
     القسم 5 — الشكل الطبيعي الثاني (2NF)
     ============================================================ -->
<h2>2️⃣ الشكل الطبيعي الثاني (2NF)</h2>
<p>
  الشرط: الجدول في 1NF <strong>ولا توجد اعتمادية جزئية</strong> — لا توجد خاصية غير رئيسية تعتمد على جزء فقط من المفتاح المركب.
  الحل: تقسيم كل مكوّن من المفتاح المركب إلى جدول مستقل.
</p>

<!-- SVG — 1NF → 2NF decomposition -->
${SVG_1NF_TO_2NF}

<div class="callout callout-info">
  <p style="margin:0;">
    ⚠️ قد لا تزال توجد اعتمادية متعدية بعد 2NF. ولهذا ننتقل إلى 3NF.
  </p>
</div>

<!-- ============================================================
     القسم 6 — الشكل الطبيعي الثالث (3NF)
     ============================================================ -->
<h2>3️⃣ الشكل الطبيعي الثالث (3NF)</h2>
<p>
  الشرط: الجدول في 2NF <strong>ولا توجد اعتمادية متعدية</strong>.
  الحل: فصل الخصائص المتعدية إلى جداول مستقلة.
  مثال: فصل JOB_CLASS وCHG_HOUR إلى جدول JOB.
</p>

<!-- SVG — 2NF → 3NF decomposition -->
${SVG_2NF_TO_3NF}

<!-- ============================================================
     القسم 7 — BCNF
     ============================================================ -->
<h2>🔷 شكل بويس-كود الطبيعي (BCNF)</h2>
<p>
  BCNF هو حالة خاصة أكثر صرامة من 3NF. الشرط: <strong>كل محدِّد (Determinant) يجب أن يكون مفتاحاً مرشحاً</strong>.
  إذا كان الجدول يحتوي على مفتاح مرشح واحد فقط، فإن 3NF وBCNF متكافئان.
  يمكن أن يكون الجدول في 3NF وليس BCNF إذا كانت خاصية غير رئيسية تُحدِّد خاصية رئيسية.
</p>

<!-- SVG — BCNF example -->
${SVG_BCNF_DECOMPOSITION}
`
      }
    }
  ],
summary: {
    points: [
      "Normalization minimizes redundancy and eliminates Insertion, Deletion, and Modification anomalies.",
      "For most business databases, 3NF is the target. The highest normal form is not always the most desirable.",
      "1NF: Tabular format, primary key defined, NO repeating groups, all attributes depend on the PK.",
      "2NF: Must be in 1NF AND have NO partial dependencies (no attribute depends on only part of a composite PK).",
      "3NF: Must be in 2NF AND have NO transitive dependencies (no non-key attribute determines another non-key attribute).",
      "BCNF: A stricter 3NF — EVERY determinant must be a candidate key. Violated only when a table has multiple candidate keys.",
      "Decomposition to BCNF may cause loss of some functional dependencies, unlike decomposition to 3NF."
    ],
    pointsAr: [
      "التطبيع يُقلل التكرار ويزيل شذوذات الإدراج والحذف والتعديل.",
      "لأغراض معظم قواعد البيانات، 3NF هو الهدف. أعلى درجة ليست الأفضل دائماً.",
      "1NF: شكل جدولي، مفتاح أساسي محدد، لا مجموعات متكررة، جميع الخصائص تعتمد على المفتاح.",
      "2NF: يجب أن يكون في 1NF ولا توجد اعتمادية جزئية.",
      "3NF: يجب أن يكون في 2NF ولا توجد اعتمادية متعدية.",
      "BCNF: حالة 3NF أكثر صرامة — كل محدِّد يجب أن يكون مفتاحاً مرشحاً.",
      "التحليل إلى BCNF قد يُفقد بعض الاعتماديات الوظيفية، على عكس التحليل إلى 3NF."
    ]
  },
 
  mcq: [
    {
      id: 'db-l7-q1',
      question: "What is the primary purpose of normalization?",
      questionAr: "ما هو الهدف الأساسي من التطبيع (Normalization)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "To maximize query speed", isCorrect: false },
        { id: 'b', text: "To minimize data redundancies and eliminate data anomalies", isCorrect: true },
        { id: 'c', text: "To group all data into a single flat-file database", isCorrect: false },
        { id: 'd', text: "To create derived attributes automatically", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q2',
      question: "For most business database design purposes, what is the highest normal form needed?",
      questionAr: "لأغراض تصميم قواعد البيانات في معظم الأعمال، ما هو أعلى شكل طبيعي مطلوب؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "1NF", isCorrect: false },
        { id: 'b', text: "2NF", isCorrect: false },
        { id: 'c', text: "3NF", isCorrect: true },
        { id: 'd', text: "BCNF", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q3',
      question: "A table has no repeating groups but still contains partial dependencies. Which normal form is it in?",
      questionAr: "جدول لا يحتوي على مجموعات متكررة لكنه لا يزال يحتوي على اعتمادية جزئية. في أي شكل طبيعي يقع؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Unnormalized Form", isCorrect: false },
        { id: 'b', text: "1NF", isCorrect: true },
        { id: 'c', text: "2NF", isCorrect: false },
        { id: 'd', text: "3NF", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q4',
      question: "A table is in 3NF if it is in 2NF and:",
      questionAr: "يكون الجدول في 3NF إذا كان في 2NF و:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Has no partial dependencies", isCorrect: false },
        { id: 'b', text: "Has no transitive dependencies", isCorrect: true },
        { id: 'c', text: "Has no repeating groups", isCorrect: false },
        { id: 'd', text: "Has only one candidate key", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q5',
      question: "In Boyce-Codd Normal Form (BCNF), every determinant must be a:",
      questionAr: "في شكل بويس-كود الطبيعي (BCNF)، يجب أن يكون كل محدِّد (Determinant):",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Foreign key", isCorrect: false },
        { id: 'b', text: "Candidate key", isCorrect: true },
        { id: 'c', text: "Composite attribute", isCorrect: false },
        { id: 'd', text: "Transitive attribute", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q6',
      question: "Deleting a book loan record results in the unintended loss of the only record of the book's author. This is an example of:",
      questionAr: "حذف سجل استعارة كتاب أدى إلى فقدان المعلومة الوحيدة عن مؤلف الكتاب. هذا مثال على:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Insertion Anomaly", isCorrect: false },
        { id: 'b', text: "Modification Anomaly", isCorrect: false },
        { id: 'c', text: "Deletion Anomaly", isCorrect: true },
        { id: 'd', text: "Repeating Group", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q7',
      question: "Consider a table ENROLL(STU_ID, CLASS_CODE, STAFF_ID, GRADE) where each class is taught by one staff member (STAFF_ID → CLASS_CODE) and each student takes each class once. The composite PK is {STU_ID, CLASS_CODE}. Which statement is TRUE?",
      questionAr: "جدول ENROLL(STU_ID, CLASS_CODE, STAFF_ID, GRADE) حيث كل مادة يدرّسها موظف واحد (STAFF_ID → CLASS_CODE) والمفتاح المركب هو {STU_ID, CLASS_CODE}. أي العبارات صحيحة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "The table is in BCNF because it has no transitive dependencies", isCorrect: false },
        { id: 'b', text: "The table is in 3NF but NOT in BCNF because STAFF_ID is a determinant of CLASS_CODE yet STAFF_ID is not a candidate key", isCorrect: true },
        { id: 'c', text: "The table is in 2NF but NOT in 3NF because GRADE transitively depends on STAFF_ID", isCorrect: false },
        { id: 'd', text: "The table is not in 1NF because STAFF_ID introduces a repeating group", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q8',
      question: "A table has the composite primary key (A, B). Attribute C depends only on A, and attribute D depends on C. Which of the following accurately describes the violations present?",
      questionAr: "جدول مفتاحه المركب هو (A, B). الخاصية C تعتمد على A فقط، والخاصية D تعتمد على C. أي العبارات التالية تصف بدقة الانتهاكات الموجودة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "Only a transitive dependency violation (fails 3NF only)", isCorrect: false },
        { id: 'b', text: "Only a partial dependency violation (fails 2NF only)", isCorrect: false },
        { id: 'c', text: "Both a partial dependency (C on A only, failing 2NF) and a transitive dependency (D via C, failing 3NF)", isCorrect: true },
        { id: 'd', text: "A repeating group violation (fails 1NF)", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q9',
      question: "When decomposing a table from 3NF into BCNF, which risk does NOT apply to the 3NF → 2NF step?",
      questionAr: "عند تحليل جدول من 3NF إلى BCNF، أي من المخاطر التالية لا ينطبق على خطوة 3NF → 2NF؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "BCNF decomposition may lose some functional dependencies, making it impossible to reconstruct them from the decomposed tables", isCorrect: false },
        { id: 'b', text: "BCNF decomposition always guarantees lossless-join decomposition", isCorrect: false },
        { id: 'c', text: "Removing partial dependencies during 2NF conversion can eliminate insertion anomalies related to those partial dependencies", isCorrect: false },
        { id: 'd', text: "A table with only a single-attribute primary key can still have partial dependencies that violate 2NF", isCorrect: true }
      ]
    },
    {
      id: 'db-l7-q10',
      question: "In the ConstructCo example, after achieving 3NF we have four tables: PROJECT, EMPLOYEE, JOB, and ASSIGN. Which functional dependency chain originally caused the split of EMPLOYEE into EMPLOYEE + JOB?",
      questionAr: "في مثال ConstructCo، بعد تحقيق 3NF أصبح لدينا أربعة جداول. أي سلسلة اعتمادية وظيفية تسببت في تقسيم جدول EMPLOYEE إلى EMPLOYEE + JOB؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "PROJ_NUM → PROJ_NAME (partial dependency)", isCorrect: false },
        { id: 'b', text: "EMP_NUM → JOB_CLASS → CHG_HOUR (transitive dependency)", isCorrect: true },
        { id: 'c', text: "{PROJ_NUM, EMP_NUM} → HOURS (full dependency)", isCorrect: false },
        { id: 'd', text: "EMP_NUM → PROJ_NUM (partial dependency)", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q11',
      question: "A database designer argues: 'Normalizing to BCNF is always better than stopping at 3NF.' What is the most accurate counterargument?",
      questionAr: "يجادل مصمم قاعدة بيانات: 'التطبيع إلى BCNF دائماً أفضل من التوقف عند 3NF.' ما هو الرد الأكثر دقة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "BCNF is impossible to achieve in tables with more than 4 attributes", isCorrect: false },
        { id: 'b', text: "BCNF decomposition may lose functional dependencies, potentially preventing the database from enforcing business rules without additional constraints; also, extra joins hurt performance", isCorrect: true },
        { id: 'c', text: "BCNF introduces more partial dependencies than 3NF", isCorrect: false },
        { id: 'd', text: "3NF and BCNF are always identical regardless of how many candidate keys the table has", isCorrect: false }
      ]
    },
    {
      id: 'db-l7-q12',
      question: "Table T has attributes (P, Q, R, S) with FDs: P→Q, Q→R, {P,S}→R. The primary key is {P, S}. What is the highest normal form T currently satisfies?",
      questionAr: "جدول T يحتوي الخصائص (P, Q, R, S) مع الاعتماديات: P→Q، Q→R، {P,S}→R. المفتاح الأساسي هو {P,S}. ما هو أعلى شكل طبيعي يحققه الجدول حالياً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "1NF only — P→Q is a partial dependency (Q depends on P alone, part of the composite key)", isCorrect: true },
        { id: 'b', text: "2NF only — Q→R is a transitive dependency but there are no partial dependencies", isCorrect: false },
        { id: 'c', text: "3NF — all dependencies are either full or involve candidate keys", isCorrect: false },
        { id: 'd', text: "BCNF — every determinant is a candidate key", isCorrect: false }
      ]
    }
  ],
 
  written: [
    {
      id: 'db-l7-w1',
      question: "Can a table be in 3NF but NOT in BCNF? Explain with a concrete example.",
      questionAr: "هل يمكن أن يكون الجدول في 3NF ولكنه ليس في BCNF؟ اشرح مع مثال ملموس.",
      modelAnswer: "Yes. A table is in 3NF but not BCNF when a non-prime (non-key) attribute acts as the determinant for a prime (key) attribute — BCNF requires every determinant to be a candidate key. Example: ENROLL(STU_ID, CLASS_CODE, STAFF_ID, GRADE) with PK={STU_ID, CLASS_CODE} and FD STAFF_ID → CLASS_CODE. There are no transitive dependencies between non-key attributes (so 3NF holds), but STAFF_ID determines CLASS_CODE while STAFF_ID is not a candidate key — violating BCNF. The fix is to decompose into ENROLL(STU_ID, CLASS_CODE, GRADE) and CLASS_STAFF(CLASS_CODE, STAFF_ID).",
      modelAnswerAr: "نعم. يكون الجدول في 3NF وليس BCNF عندما تكون خاصية غير رئيسية مُحدِّداً لخاصية رئيسية — إذ يشترط BCNF أن كل مُحدِّد يكون مفتاحاً مرشحاً. مثال: ENROLL(STU_ID, CLASS_CODE, STAFF_ID, GRADE) حيث PK={STU_ID, CLASS_CODE} والاعتمادية STAFF_ID → CLASS_CODE. لا توجد اعتمادية متعدية بين خصائص غير رئيسية (لذا 3NF محقق)، لكن STAFF_ID يُحدد CLASS_CODE وليس مفتاحاً مرشحاً — مما ينتهك BCNF. الحل: تقسيمه إلى ENROLL(STU_ID, CLASS_CODE, GRADE) وCLASS_STAFF(CLASS_CODE, STAFF_ID)."
    },
    {
      id: 'db-l7-w2',
      question: "Describe the three steps to convert a table to First Normal Form (1NF) and explain what types of dependencies must then be identified to proceed to 2NF.",
      questionAr: "صف الخطوات الثلاث لتحويل جدول إلى الشكل الطبيعي الأول (1NF) واشرح أنواع الاعتمادية التي يجب تحديدها للانتقال إلى 2NF.",
      modelAnswer: "Step 1 — Eliminate repeating groups: ensure every cell contains a single atomic value; expand rows so each employee-project combination is its own row. Step 2 — Identify the primary key: choose a key that uniquely identifies each row; for the ConstructCo table, neither PROJ_NUM nor EMP_NUM alone is unique, so the composite PK (PROJ_NUM, EMP_NUM) is used. Step 3 — Identify all dependencies: map which attributes depend fully on the entire composite PK (e.g., HOURS), which depend on only part of it (partial dependencies, e.g., PROJ_NAME on PROJ_NUM only; EMP_NAME, JOB_CLASS on EMP_NUM only), and which depend on other non-key attributes (transitive dependencies, e.g., JOB_CLASS → CHG_HOUR). Partial dependencies violate 2NF and must be eliminated next.",
      modelAnswerAr: "الخطوة 1 — إزالة المجموعات المتكررة: التأكد من أن كل خلية تحتوي قيمة واحدة فقط؛ توسيع الصفوف بحيث تكون كل مجموعة (موظف-مشروع) في صف مستقل. الخطوة 2 — تحديد المفتاح الأساسي: اختيار مفتاح يُميز كل صف بشكل فريد؛ في مثال ConstructCo لا PROJ_NUM ولا EMP_NUM منفرداً كافيان، لذا يُستخدم المفتاح المركب {PROJ_NUM, EMP_NUM}. الخطوة 3 — تحديد جميع الاعتمادات: رسم خريطة للخصائص التي تعتمد على المفتاح كاملاً (اعتمادية كاملة مثل HOURS)، وتلك التي تعتمد على جزء منه (اعتمادية جزئية مثل PROJ_NAME على PROJ_NUM فقط)، وتلك التي تعتمد على خصائص غير رئيسية أخرى (اعتمادية متعدية مثل JOB_CLASS → CHG_HOUR). الاعتماديات الجزئية تنتهك 2NF ويجب إزالتها في الخطوة التالية."
    },
    {
      id: 'db-l7-w3',
      question: "A critic argues that 'full normalization to 3NF or BCNF always produces a better database.' Provide a reasoned counterargument.",
      questionAr: "ناقد يجادل بأن 'التطبيع الكامل إلى 3NF أو BCNF دائماً يُنتج قاعدة بيانات أفضل.' قدّم حجةً معاكسة مُبررة.",
      modelAnswer: "While full normalization eliminates redundancy and anomalies, it is not always the best design choice. First, highly normalized schemas require many JOIN operations to reconstruct data that was previously in one table — this can significantly degrade read query performance in read-heavy applications like reporting or analytics. Second, BCNF decomposition in particular can cause loss of functional dependencies, making it impossible to enforce certain business rules through the schema alone (requiring triggers or application-layer constraints instead). Third, for small, rarely-updated lookup tables, the overhead of additional tables and joins may outweigh the benefits. The lecture explicitly notes that 'the highest level of normalization is not always the most desirable,' which is why many practical designs intentionally denormalize certain parts for performance.",
      modelAnswerAr: "رغم أن التطبيع الكامل يُزيل التكرار والشذوذات، إلا أنه ليس دائماً الخيار الأفضل. أولاً: المخططات شديدة التطبيع تتطلب عمليات JOIN كثيرة لإعادة تجميع البيانات التي كانت في جدول واحد — مما يُدهور أداء الاستعلامات خاصةً في التطبيقات كثيرة القراءة كالتقارير والتحليلات. ثانياً: التحليل إلى BCNF قد يُفقد بعض الاعتماديات الوظيفية مما يجعل تطبيق قواعد العمل عبر المخطط أمراً مستحيلاً (يستلزم استخدام Triggers أو قيود على مستوى التطبيق). ثالثاً: لجداول البحث الصغيرة النادرة التحديث، قد تتجاوز تكاليف الجداول والوصلات الإضافية الفوائد المكتسبة. وقد أكدت المحاضرة صراحةً أن 'أعلى درجات التطبيع ليست دائماً الأكثر ملاءمة'، ولهذا يلجأ كثير من المصممين عمداً إلى الإلغاء الجزئي للتطبيع في أجزاء معينة لتحسين الأداء."
    }
  ]
};