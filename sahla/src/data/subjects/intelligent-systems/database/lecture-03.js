export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'database',
  number: 3,
  title: 'Lecture: ER Modeling: Entities & Attributes',
  titleAr: 'محاضرة: نمذجة ER: الكيانات والصفات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        
        
        <h2>🔹 The ER Model</h2>
        
        <div class="svg-container" style="margin: 2.5rem 0; padding: 2rem; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:24px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem;">
            <!-- Decorative glow behind SVG -->
            
            <div style="width: 100%; display: flex; flex-direction: column; gap: 4px; margin-bottom: 0.5rem; z-index: 2;"><h3 style="color: #f8fafc; margin: 0; font-size: 1.25rem; font-weight: 700; text-align: center; letter-spacing: -0.01em;">Semantic Architecture Mapping</h3><p style="color: #94a3b8; margin: 0; font-size: 0.9rem; text-align: center;">Differentiating exact dependencies across entity structures</p></div>
            <div style="z-index: 2; width: 100%; display: flex; justify-content: center;">
            <svg width="100%" style="max-width: 1000px; height: auto;" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#10b981;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.05" /></linearGradient>
        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.2" /><stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.05" /></linearGradient>
        <marker id="arrow-card" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10V0Z" fill="#64748b" /></marker>
        </defs>
        
        <!-- ===== SECTION 1: Entity Types ===== -->
        <text x="450" y="20" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Entity Classifications</text>
        
        <g transform="translate(40, 40)">
          <!-- Strong Entity -->
          <g transform="translate(0, 0)">
            <rect width="250" height="130" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Strong Entity</text>
            <text x="125" y="42" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:11px;">Independent Existence</text>
            <rect x="50" y="60" width="150" height="40" rx="8" fill="url(#grad-green)" stroke="#10b981" stroke-width="1.5" />
            <text x="125" y="85" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">STUDENT</text>
            <text x="125" y="120" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:10px;">Single Rectangle</text>
          </g>
        
          <!-- Weak Entity -->
          <g transform="translate(285, 0)">
            <rect width="250" height="130" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Weak Entity</text>
            <text x="125" y="42" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:11px;">Owner Dependent</text>
            <!-- Double border rect -->
            <rect x="47" y="57" width="156" height="46" rx="9" fill="none" stroke="#64748b" stroke-width="1" />
            <rect x="50" y="60" width="150" height="40" rx="6" fill="rgba(255,255,255,0.05)" stroke="#64748b" stroke-width="1" />
            <text x="125" y="85" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">DEPENDENT</text>
            <text x="125" y="120" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:10px;">Double Rectangle</text>
          </g>
        
          <!-- Associative Entity -->
          <g transform="translate(570, 0)">
            <rect width="250" height="130" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="25" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:13px; font-weight:700;">Associative</text>
            <text x="125" y="42" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:11px;">M:N Connector</text>
            <!-- Rect + Diamond overlay -->
            <rect x="50" y="60" width="150" height="40" rx="8" fill="url(#grad-purple)" stroke="#8b5cf6" stroke-width="1.5" />
            <polygon points="125,52 140,80 125,108 110,80" fill="none" stroke="#8b5cf6" stroke-width="1" />
            <text x="125" y="85" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700;">ENROLLMENT</text>
            <text x="125" y="120" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:10px;">Rectangle + Diamond</text>
          </g>
        </g>
        
        <!-- ===== SECTION 2: Attribute Variations ===== -->
        <text x="450" y="195" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Attribute Variations</text>
        
        <g transform="translate(47.5, 215)">
          <!-- Simple -->
          <g transform="translate(0, 0)">
            <rect width="250" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="20" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Simple</text>
            <ellipse cx="125" cy="50" rx="60" ry="18" fill="none" stroke="#64748b" stroke-width="1" />
            <text x="125" y="54" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Student_ID</text>
          </g>
        
          <!-- Composite -->
          <g transform="translate(277.5, 0)">
            <rect width="250" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="20" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Composite</text>
            <ellipse cx="125" cy="45" rx="50" ry="14" fill="none" stroke="#64748b" stroke-width="1" />
            <text x="125" y="49" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Address</text>
            <!-- Sub-attributes -->
            <path d="M100,57 L85,67" stroke="#64748b" stroke-width="1" />
            <path d="M150,57 L165,67" stroke="#64748b" stroke-width="1" />
            <text x="75" y="78" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px;">City</text>
            <text x="175" y="78" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px;">Zip</text>
          </g>
        
          <!-- Multi-valued -->
          <g transform="translate(555, 0)">
            <rect width="250" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="20" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Multi-valued</text>
            <ellipse cx="125" cy="50" rx="60" ry="18" fill="none" stroke="#64748b" stroke-width="1.5" />
            <ellipse cx="125" cy="50" rx="52" ry="13" fill="none" stroke="#64748b" stroke-width="1" />
            <text x="125" y="54" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Phones</text>
          </g>
        </g>
        
        <g transform="translate(47.5, 315)">
          <!-- Derived -->
          <g transform="translate(0, 0)">
            <rect width="250" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="20" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Derived</text>
            <ellipse cx="125" cy="50" rx="60" ry="18" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="4,2" />
            <text x="125" y="54" text-anchor="middle" style="fill:#94a3b8; font-family: 'Inter', sans-serif; font-size:10px;">Age</text>
          </g>
        
          <!-- Key -->
          <g transform="translate(277.5, 0)">
            <rect width="250" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="20" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Primary Key</text>
            <ellipse cx="125" cy="50" rx="60" ry="18" fill="none" stroke="#3b82f6" stroke-width="1.5" />
            <text x="125" y="54" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:10px; font-weight:700; text-decoration:underline;">Student_ID</text>
          </g>
        
          <!-- Degree -->
          <g transform="translate(555, 0)">
            <rect width="250" height="85" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
            <text x="125" y="20" text-anchor="middle" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">Degree</text>
            <!-- mini diagram: entity-diamond-entity -->
            <rect x="80" y="45" width="30" height="20" rx="2" fill="none" stroke="#64748b" stroke-width="1" />
            <polygon points="125,45 137,55 125,65 113,55" fill="none" stroke="#64748b" stroke-width="1" />
            <rect x="140" y="45" width="30" height="20" rx="2" fill="none" stroke="#64748b" stroke-width="1" />
            <path d="M110,55 L113,55 M137,55 L140,55" stroke="#64748b" stroke-width="1" />
            <text x="125" y="78" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px;">Unary · Binary · Ternary</text>
          </g>
        </g>
        
        <!-- ===== SECTION 3: Cardinality Reference ===== -->
        <text x="450" y="425" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em;">Cardinality Constraints</text>
        
        <g transform="translate(47.5, 440)">
          <!-- 1:1 -->
          <g transform="translate(0, 0)">
            <text x="0" y="15" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">1:1</text>
            <line x1="40" y1="11" x2="160" y2="11" stroke="#334155" stroke-width="1" />
            <line x1="55" y1="4" x2="55" y2="18" stroke="#3b82f6" stroke-width="1.5" />
            <line x1="145" y1="4" x2="145" y2="18" stroke="#3b82f6" stroke-width="1.5" />
            <text x="100" y="32" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px;">Mandatory One</text>
          </g>
        
          <!-- 1:M -->
          <g transform="translate(285, 0)">
            <text x="0" y="15" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">1:M</text>
            <line x1="40" y1="11" x2="160" y2="11" stroke="#334155" stroke-width="1" />
            <line x1="55" y1="4" x2="55" y2="18" stroke="#3b82f6" stroke-width="1.5" />
            <!-- Crow's foot -->
            <path d="M160,11 L145,4 M160,11 L145,18 M153,4 L153,18" fill="none" stroke="#3b82f6" stroke-width="1.5" />
            <text x="100" y="32" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px;">One to Many</text>
          </g>
        
          <!-- M:N -->
          <g transform="translate(570, 0)">
            <text x="0" y="15" style="fill:#f8fafc; font-family: 'Inter', sans-serif; font-size:12px; font-weight:700;">M:N</text>
            <line x1="40" y1="11" x2="160" y2="11" stroke="#334155" stroke-width="1" />
            <!-- Two Crow's feet -->
            <path d="M40,11 L55,4 M40,11 L55,18 M47,4 L47,18" fill="none" stroke="#3b82f6" stroke-width="1.5" />
            <path d="M160,11 L145,4 M160,11 L145,18 M153,4 L153,18" fill="none" stroke="#3b82f6" stroke-width="1.5" />
            <text x="100" y="32" text-anchor="middle" style="fill:#64748b; font-family: 'Inter', sans-serif; font-size:9px;">Many to Many</text>
          </g>
        </g>
        </svg>
            </div>
        </div>
        
        
        <p>An ER model is a detailed, logical representation of data expressed in terms of <strong>entities</strong>, <strong>relationships</strong>, and <strong>attributes</strong>.</p>
        
        <h2>🔹 Entity Types</h2>
        <table class="styled-table"><thead><tr><th>Type</th><th>Description</th><th>Symbol</th></tr></thead><tbody>
        <tr><td><strong>Strong Entity</strong></td><td>Exists independently of other entities</td><td>Single rectangle</td></tr>
        <tr><td><strong>Weak Entity</strong></td><td>Depends on another entity (owner) for existence</td><td>Double rectangle</td></tr>
        <tr><td><strong>Associative Entity</strong></td><td>Associates instances of entity types; contains relationship attributes</td><td>Rectangle with diamond</td></tr>
        </tbody></table>
        
        <h2>🔹 Attribute Types</h2>
        <table class="styled-table"><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody>
        <tr><td><strong>Simple</strong></td><td>Cannot be broken down further</td><td>Student_ID</td></tr>
        <tr><td><strong>Composite</strong></td><td>Can be broken into smaller parts</td><td>Address → Street, City, Zip</td></tr>
        <tr><td><strong>Multi-valued</strong></td><td>Can have multiple values per entity instance</td><td>Phone Numbers, Courses</td></tr>
        <tr><td><strong>Derived</strong></td><td>Calculated from other attributes</td><td>Age (from Date_of_Birth)</td></tr>
        <tr><td><strong>Key (Identifier)</strong></td><td>Uniquely identifies entity instances</td><td>Student_ID (underlined)</td></tr>
        <tr><td><strong>Composite Key</strong></td><td>Key composed of multiple attributes</td><td>Flight_ID = Airline + Flight_Number</td></tr>
        </tbody></table>
        
        <h2>🔹 Relationship Concepts</h2>
        <h3>Relationship Types (Connectivity)</h3>
        <ul>
        <li><strong>1:1</strong> — One-to-one</li>
        <li><strong>1:M</strong> — One-to-many</li>
        <li><strong>M:N</strong> — Many-to-many</li>
        </ul>
        
        <h3>Degree of Relationships</h3>
        <table class="styled-table"><thead><tr><th>Degree</th><th>Description</th></tr></thead><tbody>
        <tr><td><strong>Unary (1)</strong></td><td>Relationship between instances of a SINGLE entity (recursive)</td></tr>
        <tr><td><strong>Binary (2)</strong></td><td>Relationship between instances of TWO entities (most common)</td></tr>
        <tr><td><strong>Ternary (3)</strong></td><td>Simultaneous relationship among THREE entities</td></tr>
        </tbody></table>
        <div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Important:</strong> A ternary relationship is NOT the same as three binary relationships. For example, Unit_Price in a Vendor-Part-Warehouse relationship cannot be captured by any pair of binary relationships alone.</span></div>
        
        <div class="callout callout-tip">
            <span class="callout-icon">🎓</span>
            <span><strong>Example of Ternary Relationship:</strong> Consider a Doctor prescribing a Medicine to a Patient. A binary relation between Doctor and Patient doesn't specify <i>which</i> medicine. A relationshop between Patient and Medicine doesn't specify <i>which</i> doctor. You strictly need a <strong>Ternary (3-way)</strong> relationship to map this single interconnected event accurately.</span>
        </div>
        
        <h2>🔹 Cardinality Constraints</h2>
        <ul>
        <li><strong>Minimum Cardinality:</strong> The minimum number of instances of one entity that MUST be associated with each instance of another</li>
        <li><strong>Maximum Cardinality:</strong> The maximum number of instances allowed</li>
        <li><strong>Mandatory (1):</strong> At least one association required</li>
        <li><strong>Optional (0):</strong> Zero associations allowed</li>
        </ul>
        
        <h2>🔹 Attributes on Relationships</h2>
        <p>Attributes may be associated with <strong>relationships</strong>, not just entities. When a relationship has attributes, it often suggests converting it to an <strong>associative entity</strong>.</p>
        <p><strong>Example:</strong> STUDENT completes COURSE — the attribute "Date_Completed" belongs to the relationship, not to Student or Course individually.</p>
        
        <div class="callout callout-info" style="margin-top:20px; border-left-color: var(--accent-cyan);"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/database/lects/Lect3-ER_Model1.pdf" target="_blank" class="pdf-link">Lecture 3 PDF (ER Model Part 1)</a></span></div>
        
        `,
        bodyAr: `<h2>مكونات نموذج ER</h2>
<p>يستخدم نموذج ER ثلاثة مكونات رئيسية: الكيانات والصفات والعلاقات.</p>

<h2>أنواع الكيانات</h2>
<ul>
  <li><strong>الكيان القوي (Strong):</strong> يمكنه الوجود بشكل مستقل (مستطيل مفرد).</li>
  <li><strong>الكيان الضعيف (Weak):</strong> لا يمكنه الوجود بدون الكيان "المالك" له (مستطيل مزدوج).</li>
</ul>

<h2>أنواع الصفات (Attributes)</h2>
<ul>
  <li><strong>بسيطة (Simple):</strong> لا يمكن تقسيمها (مثل العمر).</li>
  <li><strong>مركبة (Composite):</strong> يمكن تقسيمها (مثل الاسم -> الأول، الأخير).</li>
  <li><strong>متعددة القيم (Multi-valued):</strong> يمكن أن يكون لها عدة قيم (مثل رقم الهاتف) - تُرسم ببيضاوي مزدوج.</li>
  <li><strong>مشتقة (Derived):</strong> تُحسب من بيانات أخرى (مثل العمر من تاريخ الميلاد) - تُرسم ببيضاوي منقط.</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "ER Model: entities + relationships + attributes = logical data representation",
      "Strong entity: exists independently. Weak entity: depends on owner entity",
      "Associative entity: resolves M:N relationships, contains relationship attributes",
      "Simple attribute: cannot be broken down. Composite: can be split (Address → Street, City)",
      "Multi-valued attribute: multiple values per instance (Phone Numbers). Derived: calculated (Age from DOB)",
      "Key attribute: uniquely identifies instances (underlined in ERD). Composite key: multiple attributes",
      "Relationship degrees: Unary (1, recursive), Binary (2, most common), Ternary (3)",
      "Cardinality constraints: Mandatory (min=1) vs Optional (min=0)",
      "Ternary ≠ three binary relationships — ternary captures all three entities simultaneously",
      "Attributes on relationships suggest converting to associative entity"
    ],
    pointsAr: [
      'ترسم الكيانات كمستطيلات، والصفات كأشكال بيضاوية، والعلاقات كمعينات.',
      'يجب أن يكون المفتاح الأساسي (PK) فريداً وغير فارغ.',
      'الصفات المشتقة (مثل إجمالي الراتب) لا تُخزن، بل تُحسب عند الحاجة.',
      'الكيانات القوية لها مفتاح أساسي خاص بها، بينما تعتمد الكيانات الضعيفة على غيرها.',
      'تحدد الكارديليتي (Cardinality) نسبة العلاقة (واحد لواحد، واحد لكثير، كثير لكثير).',
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'db-l3-q1',
      question: "What specifies the minimum number of instances that MUST be associated with an entity?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Minimum Cardinality", isCorrect: true },
        { id: 'b', text: "Domain", isCorrect: false },
        { id: 'c', text: "Identifier", isCorrect: false },
        { id: 'd', text: "Degree (this is a valid detail)", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q2',
      question: "In ER mapping, an attribute like 'Employee Age' that can be automatically computed from 'DOB' is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Multivalued", isCorrect: false },
        { id: 'b', text: "Derived", isCorrect: true },
        { id: 'c', text: "Composite", isCorrect: false },
        { id: 'd', text: "Primary Key", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q3',
      question: "When converting a Many-to-Many relationship (like Student and Course) into an Associative Entity, the new entity usually contains:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A completely random identifier", isCorrect: false },
        { id: 'b', text: "A composite primary key made of foreign keys from both entities", isCorrect: true },
        { id: 'c', text: "Only derived attributes", isCorrect: false },
        { id: 'd', text: "No foreign keys within the database environment as defined in SQL standards", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q4',
      question: "A recursive relationship (like an Employee managing other Employees) has a relationship degree of:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Unary (1)", isCorrect: true },
        { id: 'b', text: "Binary (2)", isCorrect: false },
        { id: 'c', text: "Ternary (3)", isCorrect: false },
        { id: 'd', text: "Zero", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q5',
      question: "In standard ER notation, how is a Multivalued Attribute typically represented?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "As a double oval", isCorrect: true },
        { id: 'b', text: "Inside a diamond", isCorrect: false },
        { id: 'c', text: "As a dashed rectangle", isCorrect: false },
        { id: 'd', text: "With an underline", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q6',
      question: "A Weak Entity is one that:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Depends on another entity (owner) for its existence", isCorrect: true },
        { id: 'b', text: "Exists independently of all other entities in database systems", isCorrect: false },
        { id: 'c', text: "Is always deleted first in a database", isCorrect: false },
        { id: 'd', text: "Has no attributes of its own", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q7',
      question: "Which attribute type can be broken down into smaller components?",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Key attribute", isCorrect: false },
        { id: 'b', text: "Composite attribute", isCorrect: true },
        { id: 'c', text: "Simple attribute (this is a valid detail)", isCorrect: false },
        { id: 'd', text: "Derived attribute", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q8',
      question: "Student_Age calculated from Date_of_Birth is an example of:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A multi-valued attribute", isCorrect: false },
        { id: 'b', text: "A simple attribute", isCorrect: false },
        { id: 'c', text: "A derived attribute", isCorrect: true },
        { id: 'd', text: "A composite attribute", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q9',
      question: "A Key attribute (Identifier) serves to:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Calculate derived attributes", isCorrect: false },
        { id: 'b', text: "Connect two databases together as defined in SQL standards", isCorrect: false },
        { id: 'c', text: "Store the largest value in the table", isCorrect: false },
        { id: 'd', text: "Uniquely identify individual entity instances", isCorrect: true }
      ],
    },
    {
      id: 'db-l3-q10',
      question: "The most common degree of relationship in ER modeling is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Quaternary (degree 4)", isCorrect: false },
        { id: 'b', text: "Ternary (degree 3)", isCorrect: false },
        { id: 'c', text: "Binary (degree 2)", isCorrect: true },
        { id: 'd', text: "Unary (degree 1)", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q11',
      question: "A unary (recursive) relationship is between:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Instances of a SINGLE entity type", isCorrect: true },
        { id: 'b', text: "Three different entity types applied to the entity mapping", isCorrect: false },
        { id: 'c', text: "Two different entity types", isCorrect: false },
        { id: 'd', text: "An entity and an attribute", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q12',
      question: "An Associative Entity is used when:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The database is very small", isCorrect: false },
        { id: 'b', text: "There are no relationships in the model", isCorrect: false },
        { id: 'c', text: "Only 1:1 relationships exist used in enterprise setups applied to the entity mapping", isCorrect: false },
        { id: 'd', text: "A M:N relationship needs to be resolved or has its own attributes", isCorrect: true }
      ],
    },
    {
      id: 'db-l3-q13',
      question: "A ternary relationship differs from three binary relationships because:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "It is simpler to implement", isCorrect: false },
        { id: 'b', text: "It captures simultaneous association among three entities that binaries cannot", isCorrect: true },
        { id: 'c', text: "It requires less storage", isCorrect: false },
        { id: 'd', text: "It involves fewer entities within the database environment within the database environment", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q14',
      question: "Minimum cardinality of 0 means the relationship is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Impossible — cannot have zero affecting database performance", isCorrect: false },
        { id: 'b', text: "Optional — zero associations allowed", isCorrect: true },
        { id: 'c', text: "Error in the ER diagram", isCorrect: false },
        { id: 'd', text: "Mandatory — at least one required", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q15',
      question: "When a relationship has attributes (like Date_Completed), this suggests:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Adding more entities to the model affecting database performance", isCorrect: false },
        { id: 'b', text: "Deleting the relationship entirely", isCorrect: false },
        { id: 'c', text: "Removing the attributes", isCorrect: false },
        { id: 'd', text: "Converting the relationship to an associative entity", isCorrect: true }
      ],
    },
    {
      id: 'db-l3-q16',
      question: "A multi-valued attribute example is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Age (calculated from DOB)", isCorrect: false },
        { id: 'b', text: "Phone Numbers (a student can have multiple)", isCorrect: true },
        { id: 'c', text: "Student_ID (unique for each student)", isCorrect: false },
        { id: 'd', text: "Address (split into street, city, zip) (this is a valid detail)", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q17',
      question: "A Composite Key attribute consists of:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Multiple attributes combined to form the key", isCorrect: true },
        { id: 'b', text: "No attributes at all", isCorrect: false },
        { id: 'c', text: "A single field that uniquely identifies records", isCorrect: false },
        { id: 'd', text: "Only numeric values", isCorrect: false }
      ],
    },
    {
      id: 'db-l3-q18',
      question: "'DEPENDENT is a weak entity of EMPLOYEE' means:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "DEPENDENT can exist without EMPLOYEE", isCorrect: false },
        { id: 'b', text: "EMPLOYEE depends on DEPENDENT during the design phase", isCorrect: false },
        { id: 'c', text: "They are the same entity", isCorrect: false },
        { id: 'd', text: "DEPENDENT's existence depends on EMPLOYEE", isCorrect: true }
      ],
    },
    {
      id: 'db-l3-q19',
      question: "In an ERD, a strong entity is shown as:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A dashed oval", isCorrect: false },
        { id: 'b', text: "A diamond shape used in enterprise setups", isCorrect: false },
        { id: 'c', text: "A double rectangle", isCorrect: false },
        { id: 'd', text: "A single rectangle", isCorrect: true }
      ],
    },
    {
      id: 'db-l3-q20',
      question: "The 'Entity Type' vs 'Entity Instance' distinction is:",
      questionAr: "ترجمة السؤال هنا",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "They mean exactly the same thing (this is a valid detail) within the database environment", isCorrect: false },
        { id: 'b', text: "Type = one record; Instance = the table structure", isCorrect: false },
        { id: 'c', text: "Type refers to attributes; Instance refers to relationships", isCorrect: false },
        { id: 'd', text: "Type = the metadata description; Instance = a single occurrence", isCorrect: true }
      ],
    }
  ],

  written: [],
}
