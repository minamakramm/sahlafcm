export const LECTURE = {
  subjectId: 'database',
  number: 11,
  title: 'Lab 5: Relationships & JOIN Queries',
  titleAr: 'المختبر 5: العلاقات واستعلامات الربط',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Database Relationships</h2>
        <p>Relationships define how tables are connected and interact through physical <strong>foreign keys</strong>, ensuring data integrity across multiple tables.</p>

        <h3>1. One-to-One (1:1)</h3>
        <p>Each record in Table A is associated with exactly one record in Table B.</p>
        <ul><li><strong>Setup:</strong> Include a foreign key in one table with a <strong>UNIQUE</strong> constraint.</li></ul>
        <div class="code-block"><span class="keyword">CREATE TABLE</span> user_profiles (
    profile_id <span class="number">NUMBER</span> <span class="keyword">PRIMARY KEY</span>,
    user_id <span class="number">NUMBER</span> <span class="keyword">UNIQUE</span>,
    <span class="keyword">FOREIGN KEY</span> (user_id) <span class="keyword">REFERENCES</span> users(user_id)
);</div>

        <h3>2. One-to-Many (1:M)</h3>
        <p>Each record in Table A can have multiple matches in Table B, but Table B records match only one in A.</p>
        <ul><li><strong>Setup:</strong> Include the foreign key on the <strong>"Many" side</strong> (Table B).</li></ul>
        <div class="code-block"><span class="keyword">CREATE TABLE</span> employees (
    emp_id <span class="number">NUMBER</span> <span class="keyword">PRIMARY KEY</span>,
    dept_id <span class="number">NUMBER</span>,
    <span class="keyword">FOREIGN KEY</span> (dept_id) <span class="keyword">REFERENCES</span> departments(dept_id)
);</div>

        <h3>3. Many-to-Many (M:N)</h3>
        <p>Records in both tables can have multiple associations with each other.</p>
        <ul><li><strong>Setup:</strong> Use an <strong>Intermediate (Junction) Table</strong> containing FKs to both tables.</li></ul>
        <div class="code-block"><span class="keyword">CREATE TABLE</span> student_courses (
    student_id <span class="number">NUMBER</span>,
    course_id <span class="number">NUMBER</span>,
    <span class="keyword">PRIMARY KEY</span> (student_id, course_id),
    <span class="keyword">FOREIGN KEY</span> (student_id) <span class="keyword">REFERENCES</span> students(student_id),
    <span class="keyword">FOREIGN KEY</span> (course_id) <span class="keyword">REFERENCES</span> courses(course_id)
);</div>

        <h2>🔹 JOIN Queries</h2>
        <p>Used to combine and retrieve data from multiple tables by linking their IDs.</p>

        <h3>Using JOIN ... ON (Modern Standard)</h3>
        <div class="code-block"><span class="keyword">SELECT</span> s.supplier_name, p.product_name, p.Price
<span class="keyword">FROM</span> Supplier s <span class="keyword">JOIN</span> Product p 
<span class="keyword">ON</span> s.supplier_id = p.supplier_id;</div>

        <h3>Using WHERE (Implicit / Traditional)</h3>
        <div class="code-block"><span class="keyword">SELECT</span> s.supplier_name, p.product_name, p.Price
<span class="keyword">FROM</span> Supplier s, Product p
<span class="keyword">WHERE</span> s.supplier_id = p.supplier_id;</div>

        <h2>🔹 Diagram Representation</h2>
        <div class="svg-container" style="margin: 2rem 0; padding: 1.5rem; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:24px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display: flex; justify-content: center;">
          <svg width="100%" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Table A -->
            <rect x="50" y="80" width="120" height="100" rx="10" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2" />
            <text x="110" y="110" text-anchor="middle" fill="#fff" font-weight="bold">USERS</text>
            <text x="110" y="140" text-anchor="middle" fill="#94a3b8" font-size="12">id (PK)</text>
            
            <!-- Relationship -->
            <path d="M170 130 H230" stroke="#64748b" stroke-width="2" stroke-dasharray="4 2" />
            <circle cx="230" cy="130" r="4" fill="#64748b" />
            
            <!-- Table B -->
            <rect x="230" y="80" width="120" height="100" rx="10" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="2" />
            <text x="290" y="110" text-anchor="middle" fill="#fff" font-weight="bold">PROFILES</text>
            <text x="290" y="140" text-anchor="middle" fill="#94a3b8" font-size="12">user_id (FK)</text>
            <text x="290" y="160" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">UNIQUE</text>

            <text x="300" y="240" text-anchor="middle" fill="#64748b" font-style="italic">Example of 1:1 Relationship</text>
          </svg>
        </div>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%205.pdf" target="_blank" class="pdf-link">Lab 5 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>علاقات قواعد البيانات</h2>
<p>تحدد العلاقات كيفية ترابط الجداول (1:1، 1:M، M:N) من خلال الـ Foreign Keys.</p>
<h2>استعلامات الربط (JOIN)</h2>
<p>دمج واسترجاع البيانات من جداول متعددة بناءً على الحقول المشتركة.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Relationships are implemented using Foreign Keys (FK).",
      "1:1 relationship requires a UNIQUE constraint on the FK.",
      "1:M is the most common relationship; FK is added to the 'Many' side table.",
      "M:N requires a junction table with two FKs and a composite Primary Key.",
      "JOIN ... ON clause is the standard way to combine table data.",
      "Implicit joining can be done using multiple tables in FROM and a WHERE condition.",
      "INNER JOIN only returns rows where there is a match in both tables.",
      "Primary Key must be referenced by the Foreign Key in the child table.",
      "Relationships ensure Referential Integrity — no orphaned records.",
      "Filtering can be combined with JOINs (e.g., JOIN ... ON ... WHERE Price > 1000)."
    ],
    pointsAr: ["العلاقات تضمن تكامل البيانات من خلال الـ Foreign Keys.", "الجداول الوسيطة (Junction) تُستخدم لتمثيل علاقة M:N."]
  },

  mcq: [
    { id: 'db-s5-q1', question: "Which relationship requires a junction table?", difficulty: 'easy', answers: [
      { id: 'a', text: "One-to-One", isCorrect: false },
      { id: 'b', text: "One-to-Many", isCorrect: false },
      { id: 'c', text: "Many-to-Many", isCorrect: true },
      { id: 'd', text: "Many-to-One", isCorrect: false }
    ]},
    { id: 'db-s5-q2', question: "In a One-to-Many relationship between Dept and Staff, where does the Foreign Key go?", difficulty: 'medium', answers: [
      { id: 'a', text: "In the Dept table", isCorrect: false },
      { id: 'b', text: "In the Staff table", isCorrect: true },
      { id: 'c', text: "In both tables", isCorrect: false },
      { id: 'd', text: "In a new junction table", isCorrect: false }
    ]},
    { id: 'db-s5-q3', question: "To ensure a 1:1 relationship, the Foreign Key must be:", difficulty: 'medium', answers: [
      { id: 'a', text: "NOT NULL only", isCorrect: false },
      { id: 'b', text: "UNIQUE", isCorrect: true },
      { id: 'c', text: "Primary Key of its own table", isCorrect: false },
      { id: 'd', text: "A numeric type", isCorrect: false }
    ]},
    { id: 'db-s5-q4', question: "What is the purpose of a JOIN query?", difficulty: 'easy', answers: [
      { id: 'a', text: "To delete duplicate records", isCorrect: false },
      { id: 'b', text: "To combine columns from two or more tables", isCorrect: true },
      { id: 'c', text: "To create a backup of a table", isCorrect: false },
      { id: 'd', text: "To rename a table", isCorrect: false }
    ]},
    { id: 'db-s5-q5', question: "The clause 'ON s.id = p.id' in a JOIN statement defines:", difficulty: 'easy', answers: [
      { id: 'a', text: "The columns to display", isCorrect: false },
      { id: 'b', text: "The matching condition for the tables", isCorrect: true },
      { id: 'c', text: "A filter for specific values", isCorrect: false },
      { id: 'd', text: "The order of results", isCorrect: false }
    ]},
    { id: 'db-s5-q6', question: "A many-to-many junction table typically contains:", difficulty: 'medium', answers: [
      { id: 'a', text: "A single primary key", isCorrect: false },
      { id: 'b', text: "Two foreign keys from the related tables", isCorrect: true },
      { id: 'c', text: "Only text data", isCorrect: false },
      { id: 'd', text: "Calculated sums of data", isCorrect: false }
    ]},
    { id: 'db-s5-q7', question: "Referential Integrity means:", difficulty: 'medium', answers: [
      { id: 'a', text: "Data is encoded for security", isCorrect: false },
      { id: 'b', text: "Every Foreign Key value must exist as a Primary Key in the parent table", isCorrect: true },
      { id: 'c', text: "No tables can have more than 10 columns", isCorrect: false },
      { id: 'd', text: "All data is stored in lowercase", isCorrect: false }
    ]},
    { id: 'db-s5-q8', question: "Which is the correct way to perform an implicit join in WHERE?", difficulty: 'easy', answers: [
      { id: 'a', text: "FROM T1, T2 WHERE T1.id = T2.id", isCorrect: true },
      { id: 'b', text: "FROM T1 JOIN T2", isCorrect: false },
      { id: 'c', text: "SELECT * FROM T1 INTO T2", isCorrect: false },
      { id: 'd', text: "SELECT T1, T2 WHERE MATCH", isCorrect: false }
    ]},
    { id: 'db-s5-q9', question: "When retrieving data from two tables, table aliases (like 's' for 'Supplier') are:", difficulty: 'easy', answers: [
      { id: 'a', text: "Mandatory", isCorrect: false },
      { id: 'b', text: "Optional but helpful for readability and resolving ambiguity", isCorrect: true },
      { id: 'c', text: "Forbidden in Oracle", isCorrect: false },
      { id: 'd', text: "Used only for primary keys", isCorrect: false }
    ]},
    { id: 'db-s5-q10', question: "If you join two tables without a condition, you get:", difficulty: 'hard', answers: [
      { id: 'a', text: "An error", isCorrect: false },
      { id: 'b', text: "A Cartesian Product (all possible combinations)", isCorrect: true },
      { id: 'c', text: "The first table only", isCorrect: false },
      { id: 'd', text: "An empty result", isCorrect: false }
    ]}
  ],
  written: []
};
