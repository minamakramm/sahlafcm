export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'database',
  number: 5,
  title: 'Lecture: Logical DB Design',
  titleAr: 'محاضرة: التصميم المنطقي لقواعد البيانات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Logical Database Design</h2>
        <p>Logical database design is the process of <strong>transforming the conceptual data model into a logical data model</strong>. During this phase, the E-R diagrams developed in conceptual design are converted into relational database schemas.</p>
        
        <h2>🔹 The Relational Data Model</h2>
        <p>First introduced in <strong>1970</strong>, commercial RDBMS products started appearing around 1980. Today, RDBMSs have become the <strong>dominant technology</strong> for data management.</p>
        <ul>
        <li>Represents data in the form of <strong>tables (relations)</strong>.</li>
        <li>Entities in conceptual model map to tables in logical model.</li>
        </ul>
        
        <h3>Three Components of the Relational Data Model</h3>
        <ol>
        <li><strong>Data structure:</strong> Two-dimensional tables with rows and columns (relations).</li>
        <li><strong>Data manipulation:</strong> Powerful operations (using SQL language or processing programs) to manipulate data stored in relations.</li>
        <li><strong>Data integrity:</strong> Facilities to specify business rules that maintain the integrity of data when they are manipulated.</li>
        </ol>
        
        <h2>🔹 Relational Data Structure</h2>
        <p>A <strong>relation</strong> is a named, two-dimensional table of data. Each table consists of <strong>named columns (attributes)</strong> and <strong>unnamed rows (records)</strong>.</p>
        <p>Each row corresponds to a record containing data values for a single entity. To store and retrieve a row, every relation must have a <strong>primary key</strong>.</p>
        
        <h3>Primary Key (PK)</h3>
        <ul>
        <li>Each table must have <strong>only one</strong> Primary Key.</li>
        <li>PK values must <strong>never be null</strong> (NN) — Not Null constraint.</li>
        <li>PK values must <strong>never be duplicate</strong> (ND) — No Duplicates.</li>
        <li>PK values must <strong>never be changed</strong>.</li>
        <li>PKs do not influence <strong>column order, row order, or row access</strong>.</li>
        <li>PKs may be <strong>User Assigned (UA)</strong> or <strong>System Assigned (SA)</strong>.</li>
        </ul>
        
        <h3>Foreign Key (FK)</h3>
        <ul>
        <li>A Foreign Key is a column (or group of columns) that is a <strong>primary key elsewhere</strong>.</li>
        <li>FK values must <strong>refer to existing PK values</strong> (Referential Integrity).</li>
        </ul>
        
        <h2>🔹 Properties of Relations</h2>
        <p>Not all tables are relations. Relations have specific properties:</p>
        <ul>
        <li>Unique name for each relation/table.</li>
        <li><strong>Atomicity:</strong> An entry at the intersection of each row and column is <strong>atomic (single-valued)</strong>. No multi-valued attributes!</li>
        <li>Each row is <strong>unique</strong> — no two rows are identical.</li>
        <li>Each attribute within a table has a <strong>unique name</strong>.</li>
        <li>The sequence of <strong>columns (left to right)</strong> is insignificant.</li>
        <li>The sequence of <strong>rows (top to bottom)</strong> is insignificant.</li>
        </ul>
        
        <h2>🔹 Transforming E-R Diagrams into Relations</h2>
        <p><strong>Inputs:</strong> E-R Diagrams. <strong>Outputs:</strong> Relational Schemas. A well-defined set of rules governs the process:</p>
        <ol>
        <li><strong>Mapping Regular Entity:</strong> Create a table with the same name, simple attributes map to columns, PK maps to PK.</li>
        <li><strong>Mapping Composite Attribute:</strong> Only the simple components are included in the relation as columns.</li>
        <li><strong>Mapping Multi-valued Attribute:</strong> Use an M:N Relation (create a new table linking to the original via PK).</li>
        <li><strong>Mapping Binary 1:1 Relationship</strong></li>
        <li><strong>Mapping Binary 1:M Relationship</strong></li>
        <li><strong>Mapping Binary M:N Relationship</strong></li>
        <li><strong>Mapping Associative Entities</strong> (with or without assigned identifier)</li>
        <li><strong>Mapping Unary Relationships</strong> (1:M and M:N)</li>
        <li><strong>Mapping Ternary (and n-ary) Relationships</strong></li>
        </ol>
        
        <h2>🔹 Generalization</h2>
        <ul>
        <li><strong>Generalization:</strong> Grouping common attributes of several entity types into their own entity.</li>
        <li><strong>Supertype:</strong> An entity whose instances store attributes common to one or more subtypes.</li>
        <li><strong>Subtype:</strong> An entity whose instances inherit common attributes from its supertype and add unique attributes.</li>
        <li><strong>Subsetting Criteria:</strong> An attribute whose finite values divide entity instances into useful subsets (sometimes called an inversion entry).</li>
        </ul>
        
        <h2>🔹 Logical Model Development Stages</h2>
        <ol>
        <li><strong>Conceptual data model</strong> — Includes only entities and relationships (establishes project scope).</li>
        <li><strong>Key-based data model</strong> — Eliminates M:N relationships, adds associative entities, includes primary/alternate keys, precise cardinalities.</li>
        <li><strong>Fully attributed data model</strong> — Adds all remaining attributes and subsetting criteria.</li>
        </ol>
        
        <h2>🔹 Interview Questions for Data Modeling</h2>
        <table class="styled-table"><thead><tr><th>Purpose</th><th>Candidate Question</th></tr></thead><tbody>
        <tr><td><strong>Discover entities</strong></td><td>What are the subjects of the business?</td></tr>
        <tr><td><strong>Discover entity keys</strong></td><td>What unique characteristic distinguishes instances?</td></tr>
        <tr><td><strong>Discover subsetting criteria</strong></td><td>Are there characteristics that divide instances into useful subsets?</td></tr>
        <tr><td><strong>Discover attributes</strong></td><td>What characteristics describe each subject?</td></tr>
        <tr><td><strong>Discover relationships</strong></td><td>What events imply associations between subjects?</td></tr>
        <tr><td><strong>Discover cardinalities</strong></td><td>Is each activity handled the same way, or are there special circumstances?</td></tr>
        </tbody></table>
        
        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/lectures/Lect5-Logical%20DB%20Design.pdf" target="_blank" class="pdf-link">Lecture 5 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>التصميم المنطقي لقواعد البيانات</h2>
<p>مرحلة تحويل النموذج المفاهيمي إلى نموذج منطقي (جداول علائقية).</p>

<h3>مراحل التطوير</h3>
<ol>
<li><strong>النموذج المفاهيمي:</strong> يتضمن الكيانات والعلاقات فقط.</li>
<li><strong>النموذج القائم على المفاتيح:</strong> يزيل علاقات M:N ويضيف المفاتيح.</li>
<li><strong>النموذج المنسوب بالكامل:</strong> يضيف جميع الخصائص المتبقية.</li>
</ol>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Logical DB design transforms the conceptual data model into a logical data model (relational schemas).",
      "Relational Model has 3 components: Data Structure, Data Manipulation, Data Integrity.",
      "A relation is a named 2D table with named columns (attributes) and unnamed rows (records).",
      "Primary Key: Unique, Not Null (NN), No Duplicates (ND), Never Changed, can be User or System Assigned.",
      "Foreign Key: a column that is a Primary Key elsewhere — must reference existing PK values.",
      "Atomicity: each cell must be single-valued — no multi-valued attributes allowed in a relation.",
      "Each row is unique, column/row sequence is insignificant.",
      "Mapping rules: Regular Entities, Composite Attributes, Multi-valued Attributes, Binary (1:1, 1:M, M:N), Associative, Unary, Ternary.",
      "Generalization: Supertype stores common attributes; Subtype inherits and adds unique attributes.",
      "Subsetting criteria divides entity instances into useful subsets.",
      "Logical stages: Conceptual → Key-based → Fully attributed data model.",
      "Interview questions help discover entities, keys, attributes, relationships, and cardinalities."
    ],
    pointsAr: [
      "التصميم المنطقي يحول النموذج المفاهيمي إلى جداول علائقية.",
      "المفتاح الأساسي: فريد، لا يقبل القيم الفارغة، لا يتكرر.",
      "المراحل المنطقية: مفاهيمي ← مبني على مفاتيح ← منسوب بالكامل."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'db-l5-q1',
      question: "Which of the following is NOT a component of the Relational Data Model?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Data structure", isCorrect: false },
        { id: 'b', text: "Data manipulation", isCorrect: false },
        { id: 'c', text: "Data polymorphism", isCorrect: true },
        { id: 'd', text: "Data integrity", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q2',
      question: "The rule stating that an entry at the intersection of a row and column must be single-valued is called:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Integrity", isCorrect: false },
        { id: 'b', text: "Atomicity", isCorrect: true },
        { id: 'c', text: "Normalization", isCorrect: false },
        { id: 'd', text: "Redundancy", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q3',
      question: "Logical database design transforms:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Physical model into conceptual model", isCorrect: false },
        { id: 'b', text: "Conceptual data model into logical data model", isCorrect: true },
        { id: 'c', text: "Logical model into physical model", isCorrect: false },
        { id: 'd', text: "E-R diagrams into business rules", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q4',
      question: "The relational data model was first introduced in:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "1960", isCorrect: false },
        { id: 'b', text: "1970", isCorrect: true },
        { id: 'c', text: "1980", isCorrect: false },
        { id: 'd', text: "1990", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q5',
      question: "Which statement about Primary Keys is FALSE?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "PK values must never be null", isCorrect: false },
        { id: 'b', text: "PK values must never be duplicate", isCorrect: false },
        { id: 'c', text: "PK values can be changed freely at any time", isCorrect: true },
        { id: 'd', text: "Each table must have only one PK", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q6',
      question: "A Foreign Key is defined as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "A unique column that identifies each row", isCorrect: false },
        { id: 'b', text: "A column that is a primary key elsewhere", isCorrect: true },
        { id: 'c', text: "A column with null values", isCorrect: false },
        { id: 'd', text: "An auto-generated surrogate key", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q7',
      question: "Which property distinguishes a relation from a non-relational table?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Columns can be unnamed", isCorrect: false },
        { id: 'b', text: "Rows can contain duplicate entries", isCorrect: false },
        { id: 'c', text: "Each row is unique and entries are atomic", isCorrect: true },
        { id: 'd', text: "The sequence of columns matters", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q8',
      question: "When mapping a composite attribute to a relation:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The composite attribute itself becomes a column", isCorrect: false },
        { id: 'b', text: "Only simple components are included as columns", isCorrect: true },
        { id: 'c', text: "It is stored as a JSON object", isCorrect: false },
        { id: 'd', text: "It creates a separate table automatically", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q9',
      question: "When mapping a multi-valued attribute for an entity, the recommended approach is to:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Add multiple columns for each value", isCorrect: false },
        { id: 'b', text: "Create a new table linking to the original via PK (M:N Relation)", isCorrect: true },
        { id: 'c', text: "Ignore it completely", isCorrect: false },
        { id: 'd', text: "Store all values in a single comma-separated field", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q10',
      question: "The inputs to the E-R to Relations transformation process are:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "SQL scripts", isCorrect: false },
        { id: 'b', text: "Entity-Relationship diagrams", isCorrect: true },
        { id: 'c', text: "Physical storage schemas", isCorrect: false },
        { id: 'd', text: "Business reports", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q11',
      question: "In a relation, the sequence of columns (left to right) is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Critical for performance", isCorrect: false },
        { id: 'b', text: "Important for queries", isCorrect: false },
        { id: 'c', text: "Insignificant — columns can be interchanged", isCorrect: true },
        { id: 'd', text: "Determined by the DBA automatically", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q12',
      question: "A Supertype entity stores attributes that are:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Unique to only one subtype", isCorrect: false },
        { id: 'b', text: "Common to one or more subtypes", isCorrect: true },
        { id: 'c', text: "Only used for indexing", isCorrect: false },
        { id: 'd', text: "Never inherited by subtypes", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q13',
      question: "Subsetting criteria is best described as:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A type of foreign key", isCorrect: false },
        { id: 'b', text: "An attribute whose finite values divide instances into useful subsets", isCorrect: true },
        { id: 'c', text: "A relationship between two entities", isCorrect: false },
        { id: 'd', text: "A database indexing technique", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q14',
      question: "The Key-based data model stage involves all EXCEPT:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Eliminating M:N relationships", isCorrect: false },
        { id: 'b', text: "Adding associative entities", isCorrect: false },
        { id: 'c', text: "Adding all remaining attributes and subsetting criteria", isCorrect: true },
        { id: 'd', text: "Including primary and alternate keys", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q15',
      question: "FK values must:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Be null always", isCorrect: false },
        { id: 'b', text: "Refer to existing PK values", isCorrect: true },
        { id: 'c', text: "Never match PK values", isCorrect: false },
        { id: 'd', text: "Be system-generated only", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q16',
      question: "PKs may be assigned as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "User Assigned (UA) or System Assigned (SA)", isCorrect: true },
        { id: 'b', text: "Only system-assigned (auto-increment)", isCorrect: false },
        { id: 'c', text: "Only user-assigned (manual)", isCorrect: false },
        { id: 'd', text: "Random-generated only", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q17',
      question: "The Conceptual Data Model stage includes:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "All attributes and constraints", isCorrect: false },
        { id: 'b', text: "Physical storage details", isCorrect: false },
        { id: 'c', text: "Only entities and relationships to establish project scope", isCorrect: true },
        { id: 'd', text: "SQL implementation scripts", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q18',
      question: "A Subtype entity:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Has no connection to any other entity", isCorrect: false },
        { id: 'b', text: "Inherits common attributes from its supertype and adds unique ones", isCorrect: true },
        { id: 'c', text: "Replaces the supertype entirely", isCorrect: false },
        { id: 'd', text: "Cannot have its own attributes", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q19',
      question: "Which statement about rows in a relation is TRUE?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Duplicate rows are allowed if they have different PKs", isCorrect: false },
        { id: 'b', text: "Each row must be unique — no two rows are identical", isCorrect: true },
        { id: 'c', text: "Rows must be ordered alphabetically", isCorrect: false },
        { id: 'd', text: "Rows can have multi-valued entries", isCorrect: false }
      ]
    },
    {
      id: 'db-l5-q20',
      question: "The Fully Attributed Data Model adds:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Only primary keys", isCorrect: false },
        { id: 'b', text: "Only relationships", isCorrect: false },
        { id: 'c', text: "All remaining attributes and subsetting criteria", isCorrect: true },
        { id: 'd', text: "Physical storage details", isCorrect: false }
      ]
    }
  ],

  written: []
};