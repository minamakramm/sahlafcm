export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'database',
  number: 1,
  title: 'Lecture: Introduction to Databases',
  titleAr: 'محاضرة: مقدمة في قواعد البيانات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        
        
        <h2>🔹 Why Databases?</h2>
        <div class="callout callout-warning">
            <span class="callout-icon">⚠️</span>
            <span><strong>Example of Data Redundancy:</strong> Without a DB, the Sales department stores John's address as "123 Main St", but the HR department stores it as "456 Oak St" because he moved and only told Sales. This inconsistency causes major integrity issues.</span>
        </div>
        
        <p><strong>Problem:</strong> Data Redundancy when an organization has multiple files for the same subject. This results in a lack of <strong>data integrity</strong>.</p>
        <h3>Key Needs</h3>
        <ul>
        <li><strong>Sharing:</strong> Departments share the same information</li>
        <li><strong>Security:</strong> Users can access only certain parts</li>
        <li><strong>Less Data Redundancy:</strong> Updates happen in one place</li>
        <li><strong>Data Integrity:</strong> Helps to make data accurate</li>
        </ul>
        
        <h2>🔹 Types of Databases</h2>
        <table class="styled-table"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
        <tr><td><span class="table-tag table-tag-blue">Single-user</span></td><td>Supports only one user at a time</td></tr>
        <tr><td><span class="table-tag table-tag-violet">Multi-user</span></td><td>Supports multiple users simultaneously</td></tr>
        <tr><td><span class="table-tag table-tag-amber">Workgroup</span></td><td>Multi-user DB for a small group or single department</td></tr>
        <tr><td><span class="table-tag table-tag-emerald">Enterprise</span></td><td>Multi-user DB for a large group or entire organization</td></tr>
        </tbody></table>
        
        <h2>🔹 Location of Databases</h2>
        <div class="callout callout-tip">
            <span class="callout-icon">💡</span>
            <span><strong>Example:</strong> A <strong>Centralized</strong> database is like a single physical library storing all books. A <strong>Distributed</strong> database is like having identical micro-libraries spread across different cities that sync with each other over the internet.</span>
        </div>
        <ul>
        <li><strong>Centralized:</strong> Data located at a single site</li>
        <li><strong>Distributed:</strong> Data distributed across several sites</li>
        </ul>
        
        <h2>🔹 Data Processing Types</h2>
        <table class="styled-table"><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody>
        <tr><td><strong>Batch Processing</strong></td><td>Data accumulated and processed all at once (later)</td><td>Telephone Bill</td></tr>
        <tr><td><strong>Real-time Processing</strong></td><td>Online data processing (now)</td><td>ATM Card</td></tr>
        </tbody></table>
        
        <h2>🔹 5 Components of DBMS</h2>
        
        <div class="svg-container" style="margin: 2.5rem 0; padding: 2rem; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:24px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem;">
            
            <div style="width: 100%; display: flex; flex-direction: column; gap: 6px; margin-bottom: 0.5rem; z-index: 2;"><h3 style="color: #f8fafc; margin: 0; font-size: 1.5rem; font-weight: 800; text-align: center; letter-spacing: -0.02em;">System Architecture</h3><p style="color: #94a3b8; margin: 0; font-size: 0.95rem; text-align: center; font-weight: 500;">Conceptual to Physical Data Hierarchy</p></div>
            <div style="z-index: 2; width: 100%; display: flex; justify-content: center;">
            <svg width="100%" style="max-width: 1000px; height: auto;" viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#10b981;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.05" /></linearGradient>
        <filter id="glow-subtle" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        <marker id="arrow-modern" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10V0Z" fill="#64748b" /></marker>
        </defs>
        
        <text x="450" y="24" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Application Layer</text>
        
        <g transform="translate(80, 40)">
          <rect width="160" height="48" rx="12" fill="url(#grad-cyan)" stroke="#06b6d4" stroke-width="1.5" style="opacity:0.8"/>
          <text x="80" y="28" text-anchor="middle" dominant-baseline="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:600;">HR App</text>
        </g>
        <g transform="translate(370, 40)">
          <rect width="160" height="48" rx="12" fill="url(#grad-cyan)" stroke="#06b6d4" stroke-width="1.5" style="opacity:0.8"/>
          <text x="80" y="28" text-anchor="middle" dominant-baseline="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:600;">Sales App</text>
        </g>
        <g transform="translate(660, 40)">
          <rect width="160" height="48" rx="12" fill="url(#grad-cyan)" stroke="#06b6d4" stroke-width="1.5" style="opacity:0.8"/>
          <text x="80" y="28" text-anchor="middle" dominant-baseline="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:600;">Payroll App</text>
        </g>
        
        <path d="M160 88 V150 H300" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
        <path d="M740 88 V150 H600" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" />
        <line x1="450" y1="88" x2="450" y2="145" stroke="#334155" stroke-width="2" marker-end="url(#arrow-modern)" />
        
        <g transform="translate(300, 150)">
          <rect width="300" height="70" rx="16" fill="url(#grad-emerald)" stroke="#10b981" stroke-width="2" />
          <text x="150" y="30" text-anchor="middle" dominant-baseline="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:15px; font-weight:700;">DBMS Engine</text>
          <text x="150" y="52" text-anchor="middle" dominant-baseline="middle" style="fill:#10b981; font-family: 'Inter', sans-serif; font-size:11px; font-weight:500;">Logical ↔ Physical Bridge</text>
        </g>
        
        <line x1="450" y1="220" x2="450" y2="245" stroke="#334155" stroke-width="2" marker-end="url(#arrow-modern)" />
        <text x="450" y="240" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:10px; font-weight:600;">5 SUBSYSTEMS</text>
        
        <g transform="translate(30, 260)">
          <g transform="translate(0, 0)">
            <rect width="145" height="55" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="72.5" y="22" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">Data</text>
            <text x="72.5" y="38" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Definition</text>
          </g>
          <g transform="translate(173, 0)">
            <rect width="145" height="55" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="72.5" y="22" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">Data</text>
            <text x="72.5" y="38" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Manipulation</text>
          </g>
          <g transform="translate(346, 0)">
            <rect width="145" height="55" rx="10" fill="url(#grad-violet)" stroke="#8b5cf6" stroke-width="1.5" />
            <text x="72.5" y="22" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Engine</text>
            <text x="72.5" y="38" text-anchor="middle" style="fill:#a78bfa; font-family: 'Inter', sans-serif; font-size:10px;">Core Path</text>
          </g>
          <g transform="translate(519, 0)">
            <rect width="145" height="55" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="72.5" y="22" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">App Gen.</text>
            <text x="72.5" y="38" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Forms/Reports</text>
          </g>
          <g transform="translate(692, 0)">
            <rect width="145" height="55" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="72.5" y="22" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">Data Admin</text>
            <text x="72.5" y="38" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">DBA/Security</text>
          </g>
        </g>
        
        <line x1="450" y1="315" x2="450" y2="335" stroke="#334155" stroke-width="2" marker-end="url(#arrow-modern)" />
        
        <g transform="translate(360, 335)">
          <ellipse cx="90" cy="15" rx="90" ry="15" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <rect y="15" width="180" height="25" fill="#1e293b" />
          <path d="M0 15 V40 Q90 55 180 40 V15" fill="#1e293b" stroke="#334155" stroke-width="1" />
          <ellipse cx="90" cy="15" rx="90" ry="15" fill="rgba(255,255,255,0.05)" stroke="#475569" stroke-width="1" />
          <text x="90" y="32" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:12px; font-weight:600;">Central Database</text>
        </g>
        </svg>
            </div>
        </div>
        
        <ol>
        
        <li><strong>DBMS Engine:</strong> A bridge between logical and physical view of data</li>
        <li><strong>Data Definition Subsystem:</strong> Logical structure of data using data dictionary</li>
        <li><strong>Data Manipulation Subsystem:</strong> Tools for manipulating data, e.g. SQL</li>
        <li><strong>Application Generator:</strong> Tools to generate forms and reports</li>
        <li><strong>Data Administration Subsystem:</strong> Manages overall DB (security, recovery). DBA manages the system</li>
        </ol>
        
        <h2>🔹 Crucial Database Components</h2>
        <ul>
        <li><strong>Schema:</strong> Conceptual organization of entire database as viewed by the DBA</li>
        <li><strong>Subschema:</strong> Defines the database portion "seen" by application programs</li>
        </ul>
        
        <h2>🔹 SQL Language Components</h2>
        <table class="styled-table"><thead><tr><th>Component</th><th>Purpose</th><th>Examples</th></tr></thead><tbody>
        <tr><td><strong>DDL (Data Definition Language)</strong></td><td>Define schema components</td><td>CREATE, ALTER, RENAME, DROP, TRUNCATE</td></tr>
        <tr><td><strong>DML (Data Manipulation Language)</strong></td><td>Manipulate data</td><td>SELECT, INSERT, UPDATE, DELETE</td></tr>
        </tbody></table>
        
        <h2>🔹 Data Model Building Blocks</h2>
        <ul>
        <li><strong>Entity:</strong> Anything about which data are collected (e.g., Person, Department)</li>
        <li><strong>Attribute:</strong> A characteristic of an entity</li>
        <li><strong>Relationship:</strong> An association among two or more entities</li>
        </ul>
        <h3>Relationship Types</h3>
        <ul>
        <li><strong>1:1</strong> — One-to-one</li>
        <li><strong>1:M</strong> — One-to-many</li>
        <li><strong>M:N</strong> — Many-to-many</li>
        </ul>
        
        <h2>🔹 Data Organization Hierarchy</h2>
        <div class="code-block">Character → Field (Attribute) → Record → File (Entity) → Database</div>
        
        <h2>🔹 Advantages of Databases</h2>
        <ul>
        <li>Reduces Data Redundancy</li>
        <li>Controls Data Inconsistency</li>
        <li>Facilitates Data Sharing</li>
        <li>Enforces Data Standards</li>
        <li>Enhances Data Security</li>
        <li>Maintains Data Integrity</li>
        <li>Improves System Performance</li>
        </ul>
        
        <div class="callout callout-info" style="margin-top:20px; border-left-color: var(--accent-cyan);"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/database/lects/Lect1-DBIntroduction.pdf" target="_blank" class="pdf-link">Lecture 1 PDF (DB Introduction)</a> · <a href="/database/sections/Lab 1.pdf" target="_blank" class="pdf-link">Lab 1 PDF (DB & Oracle Basics)</a></span></div>
        
        `,
        bodyAr: `<h2>نظرة عامة والمفاهيم الأساسية</h2>
<div class="key-concepts">
  <div class="key-concept-item">قاعدة البيانات: هيكل حاسوبي متكامل ومشرك يخزن بيانات المستخدم النهائي والبيانات الوصفية (Metadata).</div>
  <div class="key-concept-item">تكرار البيانات (Data Redundancy): تخزين نفس البيانات في أماكن متعددة، مما يؤدي إلى عدم الاتساق.</div>
  <div class="key-concept-item">تكامل البيانات: ضمان دقة واتساق وحداثة البيانات عبر النظام بالكامل.</div>
</div>

<h2>لماذا نحتاج لقواعد البيانات؟</h2>
<p>تحل قواعد البيانات مشكلة تكرار البيانات التي كانت موجودة في أنظمة الملفات التقليدية، حيث كان تحديث عنوان عميل يتطلب البحث في ملفات المبيعات والموارد البشرية وغيرها بشكل منفصل.</p>

<h2>مكونات نظام إدارة قواعد البيانات (DBMS)</h2>
<ol>
  <li><strong>محرك DBMS:</strong> الجسر بين المنظور المنطقي والمادي للبيانات.</li>
  <li><strong>نظام تعريف البيانات:</strong> يستخدم <em>قاموس البيانات</em> لتعريف الهيكل المنطقي (Schema).</li>
  <li><strong>نظام معالجة البيانات:</strong> يوفر أدوات (مثل SQL) لإضافة وحذف وتعديل البيانات.</li>
  <li><strong>منشئ التطبيقات:</strong> أدوات لإنشاء نماذج وتقارير سهلة الاستخدام.</li>
  <li><strong>نظام إدارة البيانات:</strong> يدير أمن النظام واستعادته (دور مدير قاعدة البيانات DBA).</li>
</ol>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Database solves data redundancy, integrity, sharing, and security problems",
      "Single-user vs Multi-user; Workgroup vs Enterprise databases",
      "Centralized vs Distributed database locations",
      "Batch processing (later) vs Real-time processing (now)",
      "5 DBMS components: Engine, Data Definition, Data Manipulation, App Generator, Data Admin",
      "Schema = entire DB view by DBA; Subschema = portion seen by applications",
      "DDL: CREATE, ALTER, DROP, TRUNCATE | DML: SELECT, INSERT, UPDATE, DELETE",
      "Data hierarchy: Character → Field → Record → File → Database",
      "Entity = thing; Attribute = property; Relationship = association (1:1, 1:M, M:N)",
      "DBA (Database Administrator) manages security and gives rights to users"
    ],
    pointsAr: [
      'تقلل قواعد البيانات التكرار وتفرض تكامل البيانات والمشاركة.',
      'تشمل الأنواع الرئيسية: مستخدم واحد، مستخدمون متعددون، مجموعات عمل، ومشاريع كبيرة.',
      'مواقع البيانات قد تكون مركزية (موقع واحد) أو موزعة (مواقع متعددة).',
      'المعالجة بالدفعة (Batch) تحدث لاحقاً؛ المعالجة الفورية تحدث الآن (الصراف الآلي).',
      'محرك DBMS هو الجسر بين المنظور المنطقي والمادي للبيانات.',
      'الـ Schema هي الرؤية الكلية؛ الـ Subschema هي رؤية جزئية لمستخدمين معينين.',
      'لغة DDL تعرف الهيكل؛ لغة DML تتعامل مع البيانات نفسها.',
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'db-l1-q1',
      question: "What does Data Integrity ensure in a database system?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "That the database runs on multiple servers as defined in SQL standards", isCorrect: false },
        { id: 'b', text: "That data is backed up daily", isCorrect: false },
        { id: 'c', text: "That data is accurate, consistent, and up-to-date across the system", isCorrect: true },
        { id: 'd', text: "That only one user can access the data at a time", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q2',
      question: "If a bank ATM processes your withdrawal immediately, it uses:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Hierarchical Processing", isCorrect: false },
        { id: 'b', text: "Batch Processing", isCorrect: false },
        { id: 'c', text: "Real-time Processing", isCorrect: true },
        { id: 'd', text: "Distributed Processing", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q3',
      question: "Which of the following creates forms and reports in a DBMS?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "DBMS Engine", isCorrect: false },
        { id: 'b', text: "Application Generator", isCorrect: true },
        { id: 'c', text: "Data Administration Subsystem", isCorrect: false },
        { id: 'd', text: "Data Definition Subsystem", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q4',
      question: "Which component of the DBMS uses the data dictionary?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Application Generator", isCorrect: false },
        { id: 'b', text: "Data Definition Subsystem", isCorrect: true },
        { id: 'c', text: "Data Manipulation Subsystem", isCorrect: false },
        { id: 'd', text: "DBMS Engine", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q5',
      question: "A database view created specifically for the Payroll Department is called a:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Physical Model", isCorrect: false },
        { id: 'b', text: "Data Dictionary", isCorrect: false },
        { id: 'c', text: "Schema", isCorrect: false },
        { id: 'd', text: "Subschema", isCorrect: true }
      ],
    },
    {
      id: 'db-l1-q6',
      question: "What is the primary problem that databases solve?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Complex user interfaces", isCorrect: false },
        { id: 'b', text: "Insufficient storage capacity", isCorrect: false },
        { id: 'c', text: "Slow internet connections affecting database performance during the design phase", isCorrect: false },
        { id: 'd', text: "Data redundancy from multiple files for the same subject", isCorrect: true }
      ],
    },
    {
      id: 'db-l1-q7',
      question: "Which type of database supports multiple users simultaneously?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Multi-user database", isCorrect: true },
        { id: 'b', text: "Offline database", isCorrect: false },
        { id: 'c', text: "Single-user database", isCorrect: false },
        { id: 'd', text: "Batch database", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q8',
      question: "A Workgroup database is best described as:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A database distributed across countries", isCorrect: false },
        { id: 'b', text: "A read-only database archive", isCorrect: false },
        { id: 'c', text: "A database for one person only (this is a valid detail) according to relational theory", isCorrect: false },
        { id: 'd', text: "A multi-user DB supporting a small group or single department", isCorrect: true }
      ],
    },
    {
      id: 'db-l1-q9',
      question: "An Enterprise database supports:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A small group of 2-3 users", isCorrect: false },
        { id: 'b', text: "Only external customers", isCorrect: false },
        { id: 'c', text: "A large group of users or an entire organization", isCorrect: true },
        { id: 'd', text: "Only one department at a time within the database environment", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q10',
      question: "In a Centralized database, data is located at:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Each user's local machine", isCorrect: false },
        { id: 'b', text: "A single site only", isCorrect: true },
        { id: 'c', text: "Multiple sites across the network", isCorrect: false },
        { id: 'd', text: "The cloud exclusively", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q11',
      question: "Batch processing is best illustrated by:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Instant messaging applications", isCorrect: false },
        { id: 'b', text: "Real-time stock market trading", isCorrect: false },
        { id: 'c', text: "ATM card transactions processed immediately", isCorrect: false },
        { id: 'd', text: "A telephone bill generated periodically", isCorrect: true }
      ],
    },
    {
      id: 'db-l1-q12',
      question: "The DBMS Engine serves as:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A security authentication module", isCorrect: false },
        { id: 'b', text: "A bridge between logical and physical view of data", isCorrect: true },
        { id: 'c', text: "An internet connection manager", isCorrect: false },
        { id: 'd', text: "A report generator for end users within the database environment", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q13',
      question: "Which DBMS component uses the data dictionary to define logical structure?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Application Generator", isCorrect: false },
        { id: 'b', text: "Data Manipulation Subsystem", isCorrect: false },
        { id: 'c', text: "Data Definition Subsystem", isCorrect: true },
        { id: 'd', text: "DBMS Engine", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q14',
      question: "SQL commands like SELECT, INSERT, UPDATE, DELETE belong to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "DCL (Data Control Language)", isCorrect: false },
        { id: 'b', text: "DML (Data Manipulation Language)", isCorrect: true },
        { id: 'c', text: "DDL (Data Definition Language)", isCorrect: false },
        { id: 'd', text: "TCL (Transaction Control Language)", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q15',
      question: "The Schema represents:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A backup copy of the database", isCorrect: false },
        { id: 'b', text: "Only the physical storage layout within the database environment (this is a valid detail)", isCorrect: false },
        { id: 'c', text: "A single table in the database", isCorrect: false },
        { id: 'd', text: "The conceptual organization of the entire database viewed by the DBA", isCorrect: true }
      ],
    },
    {
      id: 'db-l1-q16',
      question: "In data organization hierarchy, a 'Field' is equivalent to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "An entire file of related records according to relational theory", isCorrect: false },
        { id: 'b', text: "A complete database record", isCorrect: false },
        { id: 'c', text: "An Attribute — a set of related characters", isCorrect: true },
        { id: 'd', text: "A single character", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q17',
      question: "Which relationship type means each entity on both sides can relate to many on the other?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Recursive used in enterprise setups", isCorrect: false },
        { id: 'b', text: "Many-to-many (M:N)", isCorrect: true },
        { id: 'c', text: "One-to-many (1:M)", isCorrect: false },
        { id: 'd', text: "One-to-one (1:1)", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q18',
      question: "The DBA (Database Administrator) is responsible for:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Managing the system and giving rights to users", isCorrect: true },
        { id: 'b', text: "Writing application code only", isCorrect: false },
        { id: 'c', text: "Marketing the database product within the database environment", isCorrect: false },
        { id: 'd', text: "Designing the user interface", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q19',
      question: "DDL commands include all of the following EXCEPT:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "SELECT", isCorrect: true },
        { id: 'b', text: "CREATE", isCorrect: false },
        { id: 'c', text: "DROP", isCorrect: false },
        { id: 'd', text: "ALTER applied to the entity mapping", isCorrect: false }
      ],
    },
    {
      id: 'db-l1-q20',
      question: "A Subschema defines:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The database portion seen by application programs", isCorrect: true },
        { id: 'b', text: "The network configuration modifying the logical schema", isCorrect: false },
        { id: 'c', text: "Only the physical storage", isCorrect: false },
        { id: 'd', text: "The entire database structure", isCorrect: false }
      ],
    }
  ],

  written: [],
}
