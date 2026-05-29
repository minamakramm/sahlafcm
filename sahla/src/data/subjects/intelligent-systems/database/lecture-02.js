export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'database',
  number: 2,
  title: 'Lecture: Data Models Evolution',
  titleAr: 'محاضرة: تطور نماذج البيانات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        
        <h2>🔹 Evolution of Data Models</h2>
        
        <div class="svg-container" style="margin: 2.5rem 0; padding: 2rem; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:24px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem;">
            
            <div style="width: 100%; display: flex; flex-direction: column; gap: 6px; margin-bottom: 0.5rem; z-index: 2;"><h3 style="color: #f8fafc; margin: 0; font-size: 1.5rem; font-weight: 800; text-align: center; letter-spacing: -0.02em;">Structural Data Geometry</h3><p style="color: #94a3b8; margin: 0; font-size: 0.95rem; text-align: center; font-weight: 500;">Record connections across model topologies</p></div>
            <div style="z-index: 2; width: 100%; display: flex; justify-content: center;">
            <svg width="100%" style="max-width: 1000px; height: auto;" viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="grad-v" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="grad-e" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#10b981;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="grad-c" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0.05" /></linearGradient>
        <marker id="arrow-m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10V0Z" fill="#64748b" /></marker>
        </defs>
        <text x="450" y="20" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Model Evolution</text>
        
        <!-- HIERARCHICAL -->
        <g transform="translate(50, 35)">
          <rect width="220" height="175" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
          <text x="110" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Hierarchical</text>
          <text x="110" y="42" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">1 Parent per Child</text>
          <circle cx="110" cy="75" r="14" fill="url(#grad-v)" stroke="#8b5cf6" stroke-width="1.5" />
          <circle cx="72.5" cy="120" r="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
          <circle cx="147.5" cy="120" r="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
          <line x1="102.5" y1="85" x2="77.5" y2="110" stroke="#475569" stroke-width="1" />
          <line x1="117.5" y1="85" x2="142.5" y2="110" stroke="#475569" stroke-width="1" />
        </g>
        
        <!-- NETWORK -->
        <g transform="translate(340, 35)">
          <rect width="220" height="175" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
          <text x="110" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Network</text>
          <text x="110" y="42" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Many Parents Allowed</text>
          <circle cx="77.5" cy="75" r="12" fill="url(#grad-e)" stroke="#10b981" stroke-width="1.5" />
          <circle cx="142.5" cy="75" r="12" fill="url(#grad-e)" stroke="#10b981" stroke-width="1.5" />
          <circle cx="110" cy="125" r="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
          <line x1="82.5" y1="85" x2="102.5" y2="115" stroke="#475569" stroke-width="1" />
          <line x1="137.5" y1="85" x2="117.5" y2="115" stroke="#475569" stroke-width="1" />
        </g>
        
        <!-- RELATIONAL -->
        <g transform="translate(630, 35)">
          <rect width="220" height="175" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
          <text x="110" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Relational</text>
          <text x="110" y="42" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Logical Tables & links</text>
          <!-- Table A -->
          <g transform="translate(40, 65)">
            <rect width="140" height="40" rx="8" fill="url(#grad-c)" stroke="#06b6d4" stroke-width="1" />
            <text x="70" y="15" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:9px; font-weight:700;">EMPLOYEES</text>
            <text x="70" y="28" text-anchor="middle" style="fill:#06b6d4; font-family: 'Inter', sans-serif; font-size:8px;">emp_id · dept_id (FK)</text>
          </g>
          <!-- Table B -->
          <g transform="translate(40, 115)">
            <rect width="140" height="35" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
            <text x="70" y="14" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:9px; font-weight:700;">DEPARTMENTS</text>
            <text x="70" y="26" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:8px;">dept_id · dept_name</text>
          </g>
          <path d="M110 105 L110 115" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#arrow-m)" />
        </g>
        
        <!-- ===== BOTTOM SECTION: ANSI/SPARC ===== -->
        <text x="450" y="245" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">ANSI/SPARC Abstraction</text>
        
        <g transform="translate(50, 265)">
          <!-- Conceptual -->
          <g transform="translate(0, 0)">
            <rect width="800" height="42" rx="10" fill="url(#grad-v)" stroke="#8b5cf6" stroke-width="1" />
            <text x="20" y="25" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Conceptual</text>
            <text x="140" y="25" style="fill:#a78bfa; font-family: 'Inter', sans-serif; font-size:11px;">Global ER View</text>
            <text x="780" y="25" text-anchor="end" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">HW & SW Independent</text>
          </g>
          <!-- Internal -->
          <g transform="translate(0, 48)">
            <rect width="800" height="42" rx="10" fill="url(#grad-e)" stroke="#10b981" stroke-width="1" />
            <text x="20" y="25" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Internal</text>
            <text x="140" y="25" style="fill:#10b981; font-family: 'Inter', sans-serif; font-size:11px;">DBMS View</text>
            <text x="780" y="25" text-anchor="end" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">SW Dependent, HW Independent</text>
          </g>
          <!-- External -->
          <g transform="translate(0, 96)">
            <rect width="800" height="42" rx="10" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="1" />
            <text x="20" y="25" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">External</text>
            <text x="140" y="25" style="fill:#f59e0b; font-family: 'Inter', sans-serif; font-size:11px;">End-user Views</text>
            <text x="780" y="25" text-anchor="end" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">DBMS Dependent</text>
          </g>
          <!-- Physical -->
          <g transform="translate(0, 144)">
            <rect width="800" height="42" rx="10" fill="rgba(244,63,94,0.1)" stroke="#f43f5e" stroke-width="1" />
            <text x="20" y="25" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Physical</text>
            <text x="140" y="25" style="fill:#f43f5e; font-family: 'Inter', sans-serif; font-size:11px;">Storage (Disk/Tape)</text>
            <text x="780" y="25" text-anchor="end" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">HW & SW Dependent</text>
          </g>
        </g>
        
        <path d="M870 265 L870 450" stroke="#475569" stroke-width="1" stroke-dasharray="4 4" marker-end="url(#arrow-m)" />
        <text transform="translate(885, 360) rotate(90)" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px; font-weight:600; text-transform:uppercase;">More Concrete</text>
        </svg>
        
            </div>
        </div>
        
        
        <p>Three major data models evolved over time:</p>
        
        <h3>1. Hierarchical Model</h3>
        <ul>
        <li>Fields and records structured in <strong>nodes</strong> (tree structure)</li>
        <li>Each parent can have <strong>many children</strong></li>
        <li>Each child has <strong>only one parent</strong></li>
        <li>Tree traversal: Preorder traversal</li>
        </ul>
        <table class="styled-table"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
        <tr><td>Conceptual simplicity</td><td>Complex implementation</td></tr>
        <tr><td>Database security</td><td>Difficult to manage</td></tr>
        <tr><td>Data independence</td><td>Difficult to implement M:N relationships</td></tr>
        <tr><td>Easy 1:1 and 1:M relationships</td><td>Deleting parent deletes ALL children</td></tr>
        <tr><td></td><td>Lack of structural independence</td></tr>
        </tbody></table>
        
        <h3>2. Network Model</h3>
        <ul>
        <li>Resembles hierarchical but each child may have <strong>many parents</strong></li>
        <li>Owner = Parent, Member = Child</li>
        </ul>
        <table class="styled-table"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
        <tr><td>Conceptual simplicity</td><td>System complexity</td></tr>
        <tr><td>Handles more relationship types</td><td>Lack of structural independence</td></tr>
        <tr><td>Data access flexibility</td><td></td></tr>
        </tbody></table>
        
        <h3>3. Relational Model (RDBMS)</h3>
        <ul>
        <li>Uses <strong>tables (relations)</strong> — matrix of rows and columns</li>
        <li>Tables related by sharing a <strong>common entity characteristic</strong></li>
        <li>Table is a <strong>purely logical structure</strong> (physical storage is hidden)</li>
        <li>Most important advantage: lets user operate in a <strong>human logical environment</strong></li>
        </ul>
        <table class="styled-table"><thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead><tbody>
        <tr><td>Structural independence</td><td>Substantial hardware/software overhead</td></tr>
        <tr><td>Improved conceptual simplicity</td><td>Can facilitate poor design</td></tr>
        <tr><td>Easier design, implementation, use</td><td>May promote "islands of information"</td></tr>
        <tr><td>Ad hoc query capability (SQL)</td><td></td></tr>
        </tbody></table>
        
        <div class="callout callout-warning">
            <span class="callout-icon">🏗️</span>
            <span><strong>Example:</strong> In a <strong>Hierarchical</strong> model, if you manually delete a 'Department' record, all 'Employee' records underneath it are instantly and permanently wiped out. In a <strong>Relational</strong> model, you can safely reassign employees by changing their foreign key without destroying their row data.</span>
        </div>
        
        <h2>🔹 Entity Relationship (ER) Model</h2>
        <ul>
        <li>Widely accepted graphical tool for data modeling</li>
        <li>Introduced by <strong>Chen in 1976</strong></li>
        <li>ERD uses graphic representations to model database components</li>
        <li>Entity is mapped to a relational table</li>
        </ul>
        
        <h2>🔹 Data Abstraction Levels (ANSI/SPARC)</h2>
        <table class="styled-table"><thead><tr><th>Level</th><th>Description</th><th>Dependencies</th></tr></thead><tbody>
        <tr><td><strong>Conceptual</strong></td><td>Global view of DB; high-level (ER Model). Basis for main data objects</td><td>Independent of HW & SW</td></tr>
        <tr><td><strong>Internal</strong></td><td>DB as "seen" by the DBMS. Adapts conceptual to DBMS</td><td>Software dependent, HW independent</td></tr>
        <tr><td><strong>External</strong></td><td>End users' view. Subdivides into functional modules</td><td>DBMS dependent, HW independent</td></tr>
        <tr><td><strong>Physical</strong></td><td>Lowest level. How data saved on disks/tapes</td><td>Both SW & HW dependent</td></tr>
        </tbody></table>
        
        <div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Key Insight:</strong> Data Abstraction allows program-data independence and program-operation independence. Programs don't need to know HOW data is stored.</span></div>
        
        <div class="callout callout-info" style="margin-top:20px; border-left-color: var(--accent-cyan);"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/database/lects/Lect2-Data Models.pdf" target="_blank" class="pdf-link">Lecture 2 PDF (Data Models)</a></span></div>
        
        `,
        bodyAr: `<h2>تطور نماذج البيانات</h2>
<p>تطورت نماذج البيانات للتعامل مع التعقيد المتزايد وتوفير استقلالية أفضل للبيانات.</p>

<h2>النماذج عبر الزمن</h2>
<ol>
  <li><strong>النموذج الهرمي (الستينيات):</strong> هيكل شجرة مقلوبة. والد واحد، وأبناء متعددون. سريع ولكن غير مرن.</li>
  <li><strong>نموذج الشبكة:</strong> سمح بوجود أكثر من والد للابن الواحد. معقد في الإدارة.</li>
  <li><strong>النموذج العلائقي (1970):</strong> البيانات كمجموعة من الجداول. بساطة منطقية.</li>
  <li><strong>نموذج الكائنات (OO):</strong> يخزن البيانات والسلوك (الطرق) معاً.</li>
</ol>

<h2>مستويات تجريد البيانات</h2>
<ul>
  <li><strong>الخارجي:</strong> رؤية المستخدم النهائي.</li>
  <li><strong>المفاهيمي:</strong> الرؤية الكلية (مثل رسوم ERD).</li>
  <li><strong>الداخلي:</strong> رؤية نظام DBMS (مثل جداول Oracle).</li>
  <li><strong>المادي:</strong> تخزين البيانات على القرص الصلب.</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Hierarchical Model: tree structure, each child has ONE parent, parent deletion removes all children",
      "Network Model: like hierarchical but each child can have MANY parents (Owner=Parent, Member=Child)",
      "Relational Model (RDBMS): tables (relations), rows & columns. Purely logical structure, user-friendly",
      "RDBMS key advantage: lets user operate in a human logical environment with ad hoc queries (SQL)",
      "ER Model: graphical data modeling tool, introduced by Chen (1976), entity mapped to table",
      "Relational schema: visual representation of entities, attributes, and relationships",
      "Data Abstraction (ANSI/SPARC): Conceptual, Internal, External, Physical levels",
      "Conceptual model: HW & SW independent. Physical model: both HW & SW dependent",
      "Program-data independence: programs don't depend on how data is stored",
      "External model: end user's view; provides security by limiting visible data"
    ],
    pointsAr: [
      'نماذج البيانات هي أدوات لتمثيل هياكل البيانات المعقدة في العالم الحقيقي.',
      'النموذج الهرمي يستخدم هيكل الشجرة (1:M فقط).',
      'نموذج الشبكة يسمح بـ M:N من خلال الوالدين المتعددين.',
      'النموذج العلائقي (إي اف كود) يستخدم الجداول وهو المعيار الصناعي الحالي.',
      'نموذج ER هو الأداة الأكثر شيوعاً للتصميم المفاهيمي.',
      'يخزن نموذج الكائنات البيانات والسلوك معاً.',
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'db-l2-q1',
      question: "What is the defining characteristic of a Network Model compared to a Hierarchical Model?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Hierarchical models are faster", isCorrect: false },
        { id: 'b', text: "Network models allow a child to have multiple parents", isCorrect: true },
        { id: 'c', text: "Hierarchical models allow many-to-many relationships applied to the entity mapping", isCorrect: false },
        { id: 'd', text: "Network models only use tables", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q2',
      question: "The Relational Model was a revolution because it introduced:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Hardware dependence affecting database performance as defined in SQL standards", isCorrect: false },
        { id: 'b', text: "Tree-like traversal paths", isCorrect: false },
        { id: 'c', text: "Data redundancy requirements", isCorrect: false },
        { id: 'd', text: "Purely logical database structures hiding physical storage details", isCorrect: true }
      ],
    },
    {
      id: 'db-l2-q3',
      question: "Which data abstraction level completely hides the DBMS software being used?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Conceptual Level", isCorrect: true },
        { id: 'b', text: "Physical Level", isCorrect: false },
        { id: 'c', text: "External Level", isCorrect: false },
        { id: 'd', text: "Internal Level according to relational theory", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q4',
      question: "In the ANSI/SPARC Data Abstraction model, which level is both Hardware and Software dependent?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Physical", isCorrect: true },
        { id: 'b', text: "Conceptual", isCorrect: false },
        { id: 'c', text: "External", isCorrect: false },
        { id: 'd', text: "Internal", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q5',
      question: "If a manager accesses an HR dashboard to see only employee names and salaries (not SSNs), they are interacting with the:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Internal Model", isCorrect: false },
        { id: 'b', text: "External Model", isCorrect: true },
        { id: 'c', text: "Physical Model", isCorrect: false },
        { id: 'd', text: "Conceptual Model", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q6',
      question: "In the Hierarchical Model, each child node can have:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "No parent nodes", isCorrect: false },
        { id: 'b', text: "Multiple parent nodes", isCorrect: false },
        { id: 'c', text: "Only one parent node", isCorrect: true },
        { id: 'd', text: "Unlimited parent nodes", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q7',
      question: "A major disadvantage of the Hierarchical Model is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "It is too simple to implement", isCorrect: false },
        { id: 'b', text: "It handles M:N relationships easily during the design phase", isCorrect: false },
        { id: 'c', text: "Deleting a parent deletes ALL children nodes", isCorrect: true },
        { id: 'd', text: "It supports ad hoc queries", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q8',
      question: "The Network Model differs from the Hierarchical Model because:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "It uses tables instead of trees", isCorrect: false },
        { id: 'b', text: "It was invented before the hierarchical model", isCorrect: false },
        { id: 'c', text: "It doesn't support any relationships", isCorrect: false },
        { id: 'd', text: "Each child may have many parents", isCorrect: true }
      ],
    },
    {
      id: 'db-l2-q9',
      question: "In the Network Model, 'Owner' is equivalent to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "An attribute of an entity during the design phase", isCorrect: false },
        { id: 'b', text: "Child in the hierarchical model", isCorrect: false },
        { id: 'c', text: "A table in the relational model", isCorrect: false },
        { id: 'd', text: "Parent in the hierarchical model", isCorrect: true }
      ],
    },
    {
      id: 'db-l2-q10',
      question: "The most important advantage of the Relational Model (RDBMS) is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Letting the user operate in a human logical environment", isCorrect: true },
        { id: 'b', text: "Unlimited storage capacity modifying the logical schema as defined in SQL standards", isCorrect: false },
        { id: 'c', text: "Fastest data processing speed", isCorrect: false },
        { id: 'd', text: "Lowest hardware requirements", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q11',
      question: "A relational table is described as a:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Hierarchical tree branch", isCorrect: false },
        { id: 'b', text: "Network node with multiple parents within the database environment", isCorrect: false },
        { id: 'c', text: "Purely logical structure — physical storage is hidden", isCorrect: true },
        { id: 'd', text: "Physical structure tied to hardware", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q12',
      question: "Tables in the relational model are related to each other by:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "User manual configuration", isCorrect: false },
        { id: 'b', text: "Sharing a common entity characteristic", isCorrect: true },
        { id: 'c', text: "Random assignment algorithms during the design phase", isCorrect: false },
        { id: 'd', text: "Physical cables between servers", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q13',
      question: "The ER Model was introduced by:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Codd in 1970", isCorrect: false },
        { id: 'b', text: "Boyce in 1974", isCorrect: false },
        { id: 'c', text: "Chen in 1976", isCorrect: true },
        { id: 'd', text: "Date in 1981", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q14',
      question: "Which data abstraction level represents the global view of the database?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Conceptual", isCorrect: true },
        { id: 'b', text: "External in database systems", isCorrect: false },
        { id: 'c', text: "Physical", isCorrect: false },
        { id: 'd', text: "Internal", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q15',
      question: "The Physical data model is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Both software AND hardware dependent", isCorrect: true },
        { id: 'b', text: "Independent of all implementation details", isCorrect: false },
        { id: 'c', text: "Independent of both hardware and software", isCorrect: false },
        { id: 'd', text: "Software dependent but hardware independent", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q16',
      question: "The External model represents:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The DBA's complete view of the database", isCorrect: false },
        { id: 'b', text: "How data is stored on disk modifying the logical schema", isCorrect: false },
        { id: 'c', text: "The end users' view of the data environment", isCorrect: true },
        { id: 'd', text: "The DBMS internal processing logic", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q17',
      question: "Data Abstraction achieves:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Program-data independence and program-operation independence", isCorrect: true },
        { id: 'b', text: "Data compression", isCorrect: false },
        { id: 'c', text: "Faster network speeds", isCorrect: false },
        { id: 'd', text: "Automatic database backup applied to the entity mapping (this is a valid detail)", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q18',
      question: "Which model can easily implement M:N relationships?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Network Model (handles more types)", isCorrect: true },
        { id: 'b', text: "Hierarchical Model", isCorrect: false },
        { id: 'c', text: "Neither model used in enterprise setups", isCorrect: false },
        { id: 'd', text: "Both equally", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q19',
      question: "The Internal model adapts the conceptual model to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The end user's preferences affecting database performance", isCorrect: false },
        { id: 'b', text: "The DBMS software being used", isCorrect: true },
        { id: 'c', text: "The physical hardware layout", isCorrect: false },
        { id: 'd', text: "The network topology", isCorrect: false }
      ],
    },
    {
      id: 'db-l2-q20',
      question: "An advantage of the Conceptual model is that it is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Only useful for small databases", isCorrect: false },
        { id: 'b', text: "Hardware and software dependent", isCorrect: false },
        { id: 'c', text: "Tied to a specific DBMS vendor modifying the logical schema", isCorrect: false },
        { id: 'd', text: "Independent of both hardware and software", isCorrect: true }
      ],
    }
  ],

  written: [],
}
