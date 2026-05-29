export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'database',
  number: 4,
  title: 'Lecture: Business Rules & Relationship Resolution',
  titleAr: 'محاضرة: قواعد العمل وحل العلاقات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        
        
        <h2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5" style="vertical-align:middle;margin-right:8px"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg> Business Rules</h2>
        
        <p>Business rules are <strong>precise statements</strong> derived from the organization's operations that define:</p>
        <ul>
        <li>Entities, Relationships, Attributes</li>
        <li>Connectivities, Cardinalities, Constraints</li>
        </ul>
        <div class="callout callout-tip"><span class="callout-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" stroke-width="2"/><path d="M12 7v6M12 17h.01" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/></svg></span><span><strong>Critical:</strong> Business rules form the BASIS of data modeling. Their precise statement is crucial to database design success.</span></div>
        
        <h3>Examples of Business Rules</h3>
        <ul>
        <li>"A store employs many employees, but each employee is employed by only one store" → <strong>1:M</strong></li>
        <li>"A driver may drive many vehicles, and each vehicle can be driven by many drivers" → <strong>M:N</strong></li>
        <li>"Each contract is signed by only one client" → <strong>M:1</strong> from contract's perspective</li>
        </ul>
        
        <h2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5" style="vertical-align:middle;margin-right:8px"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg> M:N Relationships with Cardinality</h2>
        
        <div class="svg-container" style="margin: 2.5rem 0; padding: 2rem; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:24px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
            <div style="z-index: 2; width: 100%; display: flex; flex-direction: column; gap: 4px; margin-bottom: 0.5rem; text-align: center;">
                <h3 style="color: #f8fafc; margin: 0; font-size: 1.25rem; font-weight: 700;">Entity Bridge Resolution</h3>
                <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">Decomposing unscalable M:N architectures</p>
            </div>
        <div style="z-index: 2; width: 100%; display: flex; justify-content: center;">
            <svg width="100%" style="max-width: 1000px; height: auto;" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="l4-grad-red" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f43f5e;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#f43f5e;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="l4-grad-green" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#10b981;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="l4-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.05" /></linearGradient>
        <marker id="l4-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10V0Z" fill="#64748b" /></marker>
        </defs>
        
        <!-- ===== SECTION 1: M:N Resolution ===== -->
        <text x="450" y="20" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Conflict Resolution: M:N to 1:M</text>
        
        <g transform="translate(40, 45)">
          <!-- BEFORE -->
          <g transform="translate(0, 0)">
            <text x="0" y="22" style="fill:#f43f5e; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700;">INITIAL STATE (M:N)</text>
            <g transform="translate(100, 35)">
              <rect width="180" height="40" rx="8" fill="url(#l4-grad-red)" stroke="#f43f5e" stroke-width="1.5" />
              <text x="90" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">CUSTOMER</text>
              
              <line x1="180" y1="20" x2="440" y2="20" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,2" />
              <path d="M190,12 L182,20 L190,28 M186,12 L186,28" fill="none" stroke="#f43f5e" stroke-width="1.5" />
              <path d="M430,12 L438,20 L430,28 M434,12 L434,28" fill="none" stroke="#f43f5e" stroke-width="1.5" />
              
              <g transform="translate(440, 0)">
                <rect width="180" height="40" rx="8" fill="url(#l4-grad-red)" stroke="#f43f5e" stroke-width="1.5" />
                <text x="90" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">VIDEO_TAPE</text>
              </g>
            </g>
          </g>
        
          <!-- TRANSITION -->
          <path d="M410,125 L410,150" stroke="#64748b" stroke-width="1" marker-end="url(#l4-arrow)" />
          <text x="420" y="142" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px; font-style:italic;">Decompose via Bridge</text>
        
          <!-- AFTER -->
          <g transform="translate(0, 165)">
            <text x="0" y="22" style="fill:#10b981; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700;">RESOLVED STATE (1:M)</text>
            <g transform="translate(100, 35)">
              <!-- Entities -->
              <rect width="160" height="40" rx="8" fill="url(#l4-grad-green)" stroke="#10b981" stroke-width="1.5" />
              <text x="80" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">CUSTOMER</text>
              
              <g transform="translate(230, -10)">
                <rect width="160" height="60" rx="10" fill="url(#l4-grad-purple)" stroke="#8b5cf6" stroke-width="2" />
                <text x="80" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:800;">RENTAL</text>
                <text x="80" y="42" text-anchor="middle" style="fill:rgba(248,250,252,0.6); font-family: 'Inter', sans-serif; font-size:9px;">Composite Entity</text>
                <path d="M10,48 L150,48" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                <text x="80" y="55" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:8px;">PK: {CustID, TapeID}</text>
              </g>
        
              <g transform="translate(460, 0)">
                <rect width="160" height="40" rx="8" fill="url(#l4-grad-green)" stroke="#10b981" stroke-width="1.5" />
                <text x="80" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">VIDEO_TAPE</text>
              </g>
        
              <!-- Connection Lines -->
              <path d="M160,20 L230,20" stroke="#10b981" stroke-width="1.5" />
              <path d="M460,20 L390,20" stroke="#10b981" stroke-width="1.5" />
              <!-- Connectivities -->
              <line x1="170" y1="12" x2="170" y2="28" stroke="#10b981" stroke-width="1.5" />
              <line x1="450" y1="12" x2="450" y2="28" stroke="#10b981" stroke-width="1.5" />
              <path d="M222,12 L230,20 L222,28 M226,12 L226,28" fill="none" stroke="#8b5cf6" stroke-width="1.5" />
              <path d="M398,12 L390,20 L398,28 M394,12 L394,28" fill="none" stroke="#8b5cf6" stroke-width="1.5" />
            </g>
          </g>
        </g>
        
        <!-- ===== SECTION 2: Situations Analysis ===== -->
        <g transform="translate(40, 310)">
          <rect width="820" height="60" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
          <text x="410" y="-15" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Situations Analysis: Text to ERD</text>
          
          <g transform="translate(15, 10)">
            <!-- Nouns -->
            <g transform="translate(0, 0)">
              <rect width="185" height="40" rx="20" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" stroke-width="1" />
              <text x="92.5" y="18" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">NOUNS</text>
              <text x="92.5" y="32" text-anchor="middle" style="fill:#06b6d4; font-family: 'Inter', sans-serif; font-size:9px;">Entities</text>
            </g>
            <!-- Verbs -->
            <g transform="translate(200, 0)">
              <rect width="185" height="40" rx="20" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="1" />
              <text x="92.5" y="18" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">VERBS</text>
              <text x="92.5" y="32" text-anchor="middle" style="fill:#10b981; font-family: 'Inter', sans-serif; font-size:9px;">Relationships</text>
            </g>
            <!-- Adjectives -->
            <g transform="translate(400, 0)">
              <rect width="185" height="40" rx="20" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="1" />
              <text x="92.5" y="18" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">ADJECTIVES</text>
              <text x="92.5" y="32" text-anchor="middle" style="fill:#f59e0b; font-family: 'Inter', sans-serif; font-size:9px;">Entity Attributes</text>
            </g>
            <!-- Adverbs -->
            <g transform="translate(600, 0)">
              <rect width="185" height="40" rx="20" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="1" />
              <text x="92.5" y="18" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">ADVERBS</text>
              <text x="92.5" y="32" text-anchor="middle" style="fill:#8b5cf6; font-family: 'Inter', sans-serif; font-size:9px;">Relationship Attributes</text>
            </g>
          </g>
        </g>
        
        <!-- ===== SECTION 3: Crow's Foot Legend ===== -->
        <g transform="translate(50, 410)">
          <rect width="800" height="70" rx="16" fill="rgba(2, 6, 23, 0.6)" stroke="rgba(255,255,255,0.05)" />
          <text x="15" y="-12" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">Notation Legend</text>
          
          <g transform="translate(20, 15)">
            <!-- Exactly One -->
            <g transform="translate(0, 0)">
              <line x1="0" y1="15" x2="150" y2="15" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
              <line x1="20" y1="5" x2="20" y2="25" stroke="#f8fafc" stroke-width="2" />
              <line x1="30" y1="5" x2="30" y2="25" stroke="#f8fafc" stroke-width="2" />
              <text x="85" y="32" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Exactly One</text>
            </g>
            <!-- Zero or One -->
            <g transform="translate(195, 0)">
              <line x1="0" y1="15" x2="150" y2="15" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
              <circle cx="20" cy="15" r="6" stroke="#f8fafc" stroke-width="1.5" fill="none" />
              <line x1="35" y1="5" x2="35" y2="25" stroke="#f8fafc" stroke-width="2" />
              <text x="85" y="32" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Zero or One</text>
            </g>
            <!-- One or Many -->
            <g transform="translate(390, 0)">
              <line x1="0" y1="15" x2="150" y2="15" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
              <line x1="20" y1="5" x2="20" y2="25" stroke="#f8fafc" stroke-width="2" />
              <path d="M135,5 L150,15 L135,25" fill="none" stroke="#f8fafc" stroke-width="2" />
              <text x="85" y="32" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">One or Many</text>
            </g>
            <!-- Zero or Many -->
            <g transform="translate(585, 0)">
              <line x1="0" y1="15" x2="150" y2="15" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
              <circle cx="20" cy="15" r="6" stroke="#f8fafc" stroke-width="1.5" fill="none" />
              <path d="M135,5 L150,15 L135,25" fill="none" stroke="#f8fafc" stroke-width="2" />
              <text x="85" y="32" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Zero or Many</text>
            </g>
          </g>
        </g>
        </svg>
            </div>
        </div>
        
        <p>M:N relationships must be broken into <strong>two 1:M relationships</strong> using a <strong>bridge entity</strong> (Composite/Associative Entity).</p>
        <h3>Video Store Example</h3>
        <div class="code-block">CUSTOMER ←→ TAPE (M:N)
        becomes:
        CUSTOMER (1:M) → RENTAL (M:1) ← TAPE
        
        Then expanded:
        CUSTOMER → RENTAL → RENTAL_LINE ← TAPE</div>
        
        <p>The composite entity (RENTAL) contains at least the <strong>primary key components</strong> of both entities it bridges (foreign keys).</p>
        
        <h2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5" style="vertical-align:middle;margin-right:8px"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg> Situations Analysis</h2>
        <p>To identify ER components from a text description:</p>
        <table class="styled-table"><thead><tr><th>Text Element</th><th>ER Component</th></tr></thead><tbody>
        <tr><td><strong>Nouns</strong></td><td>→ Entities</td></tr>
        <tr><td><strong>Verbs</strong></td><td>→ Relationships</td></tr>
        <tr><td><strong>Adjectives</strong> (modify nouns)</td><td>→ Attributes of entities</td></tr>
        <tr><td><strong>Adverbs</strong> (modify verbs)</td><td>→ Attributes of associative entities</td></tr>
        </tbody></table>
        
        <h2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5" style="vertical-align:middle;margin-right:8px"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg> Handling Multivalued Attributes</h2>
        <h3>Bad Approach: Splitting into columns</h3>
        <p>Decomposing a multivalued attribute into separate columns (e.g., HIGH_SCHOOL, TWO_YR_COLLEGE, FOUR_YR_COLLEGE) is the <strong>worst solution</strong> because:</p>
        <ul>
        <li>Change in number of components forces table structure changes</li>
        <li>Creates many null values</li>
        <li>Limits query capability</li>
        </ul>
        
        <h3>Better Approach: New entity</h3>
        <p>Create a <strong>new entity</strong> from the multivalued attribute and link it to the original entity. This is especially good when the number of possible values is unlimited.</p>
        
        <h2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5" style="vertical-align:middle;margin-right:8px"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg> Crow's Foot Notation</h2>
        <p>A popular ERD notation that uses symbols at relationship ends:</p>
        <ul>
        <li><strong>|</strong> (single line) = mandatory, exactly one</li>
        <li><strong>O</strong> (circle) = optional, zero</li>
        <li><strong>< (crow's foot)</strong> = many</li>
        </ul>
        
        <div class="callout callout-info" style="margin-top:20px; border-left-color: var(--accent-cyan);"><span class="callout-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:8px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span><span><strong>Resources:</strong> <a href="/database/lects/Lect4-ER_Model2.pdf" target="_blank" class="pdf-link">Lecture 4 PDF (ER Model Part 2)</a></span></div>
        
        `,
        bodyAr: `<h2>قواعد العمل (Business Rules)</h2>
<p>قواعد العمل هي عبارات دقيقة تستخرج من وصف عمليات المؤسسة.</p>

<h2>حل علاقة كثير لكثير (M:N)</h2>
<p>في قواعد البيانات العلائقية، لا يمكن تنفيذ علاقات M:N مباشرة. يجب حلها إلى علاقتين 1:M باستخدام <strong>كيان وسيط (Bridge Entity)</strong>.</p>

<h2>ترميز Crow's Foot</h2>
<ul>
  <li><strong>||</strong> واحد إلزامي</li>
  <li><strong>|></strong> كثير إلزامي</li>
  <li><strong>O|</strong> واحد اختياري</li>
  <li><strong>O></strong> كثير اختياري</li>
</ul>

<h2>تحليل المواقف</h2>
<ul>
  <li><strong>الأسماء:</strong> كيانات (موظف، قسم).</li>
  <li><strong>الأفعال:</strong> علاقات (يعمل في، يدير).</li>
  <li><strong>الصفات:</strong> خصائص الكيانات (الراتب، الاسم).</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Business rules: precise statements from operations defining entities, relationships, constraints",
      "Business rules are the BASIS of data modeling — accuracy is critical for design success",
      "M:N relationships → broken into two 1:M using bridge/composite/associative entity",
      "Bridge entity contains foreign keys pointing to primary keys of both bridged entities",
      "Situations analysis: Nouns→Entities, Verbs→Relationships, Adjectives→Attributes, Adverbs→Relationship attributes",
      "Multivalued attributes: WORST solution = split into columns (nulls, structure changes). BEST = new entity",
      "Crow's Foot notation: | = one, O = zero/optional, < = many",
      "Some business rules (like credit limits) cannot be shown in ERD — handled by application triggers",
      "Video Store: CUSTOMER→RENTAL→RENTAL_LINE←TAPE resolves M:N properly",
      "E-R diagrams cannot always reflect ALL business rules — some require stored procedures"
    ],
    pointsAr: [
      'تشكل قواعد العمل الأساس لجميع عمليات نمذجة البيانات.',
      'حدد الكيانات من الأسماء والعلاقات من الأفعال.',
      'يتم حل علاقة M:N عن طريق إنشاء كيان وسيط (Bridge Entity).',
      'يحتوي الكيان الوسيط على مفاتيح خارجية تشير إلى المفاتيح الأساسية للجداول المرتبطة.',
      'ترميز Crow\'s Foot يستخدم رموزاً في أطراف الخطوط لتوضيح الكارديليتي.',
      'تمنع قواعد العمل الدقيقة فشل التصميم.',
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'db-l4-q1',
      question: "If a business rule says 'Each driver can drive many vehicles', you immediately know:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Maximum cardinality is 1 affecting database performance", isCorrect: false },
        { id: 'b', text: "Maximum cardinality is Many (M)", isCorrect: true },
        { id: 'c', text: "Minimum cardinality is 1", isCorrect: false },
        { id: 'd', text: "There are NO constraints", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q2',
      question: "Bridge (associative) entities contain Foreign Keys that point to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Random surrogate keys", isCorrect: false },
        { id: 'b', text: "Other associative entities", isCorrect: false },
        { id: 'c', text: "Primary Keys of the bridged entities", isCorrect: true },
        { id: 'd', text: "The database index used in enterprise setups", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q3',
      question: "Why can't Some complex business rules be drawn on an ERD?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "They require logic like 'credit cannot exceed limit', requiring triggers instead", isCorrect: true },
        { id: 'b', text: "Because ERDs don't support triangles", isCorrect: false },
        { id: 'c', text: "They are not important enough used in enterprise setups affecting database performance", isCorrect: false },
        { id: 'd', text: "Because ERDs are only for physical paths", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q4',
      question: "When parsing a paragraph for database requirements, Adjectives represent:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Relationships", isCorrect: false },
        { id: 'b', text: "Constraints", isCorrect: false },
        { id: 'c', text: "Entities", isCorrect: false },
        { id: 'd', text: "Attributes", isCorrect: true }
      ],
    },
    {
      id: 'db-l4-q5',
      question: "Why shouldn't you decompose a multivalued attribute (like Phone) into Phone1, Phone2, Phone3?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Oracle doesn't allow repeating names", isCorrect: false },
        { id: 'b', text: "Because it takes too much hard drive space as defined in SQL standards during the design phase", isCorrect: false },
        { id: 'c', text: "It is illegal in SQL standards", isCorrect: false },
        { id: 'd', text: "It forces schema changes later, limits queryability, and creates NULL values", isCorrect: true }
      ],
    },
    {
      id: 'db-l4-q6',
      question: "Business rules in DB design are derived from:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A detailed description of the organization's operations", isCorrect: true },
        { id: 'b', text: "Random brainstorming sessions", isCorrect: false },
        { id: 'c', text: "The DBMS software manual", isCorrect: false },
        { id: 'd', text: "Internet search results modifying the logical schema according to relational theory", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q7',
      question: "An M:N relationship must be resolved by:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Creating a bridge (associative) entity with two 1:M relationships", isCorrect: true },
        { id: 'b', text: "Adding more attributes to both entities", isCorrect: false },
        { id: 'c', text: "Deleting one of the entities", isCorrect: false },
        { id: 'd', text: "Making both entities weak entities affecting database performance used in enterprise setups", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q8',
      question: "In the Video Store example, the RENTAL entity's foreign keys point to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The system administrator's ID as defined in SQL standards", isCorrect: false },
        { id: 'b', text: "Other rental transactions", isCorrect: false },
        { id: 'c', text: "External database connections", isCorrect: false },
        { id: 'd', text: "The primary keys of CUSTOMER and TAPE", isCorrect: true }
      ],
    },
    {
      id: 'db-l4-q9',
      question: "When analyzing a text to build an ERD, NOUNS typically become:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Entities", isCorrect: true },
        { id: 'b', text: "Constraints", isCorrect: false },
        { id: 'c', text: "Relationships", isCorrect: false },
        { id: 'd', text: "Attributes", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q10',
      question: "VERBS in a situation description map to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Entities used in enterprise setups", isCorrect: false },
        { id: 'b', text: "Relationships", isCorrect: true },
        { id: 'c', text: "Data types", isCorrect: false },
        { id: 'd', text: "Attributes", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q11',
      question: "Splitting a multivalued attribute into separate columns is described as:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The best possible solution modifying the logical schema according to relational theory", isCorrect: false },
        { id: 'b', text: "The worst possible solution (null values, structure changes)", isCorrect: true },
        { id: 'c', text: "A mediocre but acceptable approach", isCorrect: false },
        { id: 'd', text: "The industry standard", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q12',
      question: "The better way to handle multivalued attributes is to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Store them as comma-separated text", isCorrect: false },
        { id: 'b', text: "Create a new entity and link it to the original", isCorrect: true },
        { id: 'c', text: "Ignore them completely used in enterprise setups", isCorrect: false },
        { id: 'd', text: "Delete the attribute", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q13',
      question: "In Crow's Foot notation, a circle (O) at a relationship end means:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Mandatory — at least one required", isCorrect: false },
        { id: 'b', text: "The relationship is invalid", isCorrect: false },
        { id: 'c', text: "Exactly ten associations", isCorrect: false },
        { id: 'd', text: "Optional — zero is allowed", isCorrect: true }
      ],
    },
    {
      id: 'db-l4-q14',
      question: "'A customer cannot get credit over $10,000 unless...' is a business rule that:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Cannot be represented in an ERD — requires application triggers", isCorrect: true },
        { id: 'b', text: "Only applies to physical models", isCorrect: false },
        { id: 'c', text: "Should be ignored in design used in enterprise setups during the design phase", isCorrect: false },
        { id: 'd', text: "Can be easily shown in an ERD", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q15',
      question: "Adjectives in a text description typically map to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Primary keys affecting database performance", isCorrect: false },
        { id: 'b', text: "Entities", isCorrect: false },
        { id: 'c', text: "Relationships", isCorrect: false },
        { id: 'd', text: "Attributes of entities", isCorrect: true }
      ],
    },
    {
      id: 'db-l4-q16',
      question: "Why do business rules need to be stated precisely?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "For legal compliance only", isCorrect: false },
        { id: 'b', text: "For marketing purposes", isCorrect: false },
        { id: 'c', text: "Because they form the basis of data modeling — design success depends on accuracy", isCorrect: true },
        { id: 'd', text: "To reduce file sizes as defined in SQL standards according to relational theory according to relational theory", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q17',
      question: "'Each employee is employed by only one store' defines a relationship of:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "1:1 between employee and store (this is a valid detail)", isCorrect: false },
        { id: 'b', text: "No relationship at all", isCorrect: false },
        { id: 'c', text: "M:1 from employee to store (each employee → one store)", isCorrect: true },
        { id: 'd', text: "M:N between employee and store", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q18',
      question: "In the expanded Video Store design, RENTAL_LINE was added to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Simplify the primary keys modifying the logical schema used in enterprise setups", isCorrect: false },
        { id: 'b', text: "Allow a customer to rent multiple tapes per rental transaction", isCorrect: true },
        { id: 'c', text: "Reduce the number of tables", isCorrect: false },
        { id: 'd', text: "Remove the need for a RENTAL entity", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q19',
      question: "Adverbs in situation analysis map to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Primary keys", isCorrect: false },
        { id: 'b', text: "Entities", isCorrect: false },
        { id: 'c', text: "Attributes of associative entities", isCorrect: true },
        { id: 'd', text: "Table names used in enterprise setups", isCorrect: false }
      ],
    },
    {
      id: 'db-l4-q20',
      question: "The Crow's Foot symbol '<' (three lines) represents:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Exactly one", isCorrect: false },
        { id: 'b', text: "A key attribute", isCorrect: false },
        { id: 'c', text: "Zero or optional", isCorrect: false },
        { id: 'd', text: "Many", isCorrect: true }
      ],
    }
  ],

  written: [],
}
