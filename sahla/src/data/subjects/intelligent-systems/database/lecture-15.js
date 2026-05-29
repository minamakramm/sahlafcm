export const LECTURE = {
  subjectId: 'database',
  number: 15,
  title: 'Lab 9: Normalization',
  titleAr: 'المعمل 9: تطبيع البيانات (Normalization)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 What is Normalization?</h2>
        <p>Normalization is an essential process in database design that helps improve the database's efficiency, consistency, and accuracy. It organizes the attributes to <strong>reduce or eliminate data redundancy</strong>.</p>
        <p>Data redundancy leads to inconsistency problems during insert, delete, and update operations. Normalization involves splitting a table into multiple tables, which are then linked together.</p>

        <h2>🔹 Database Anomalies</h2>
        <p>Improper database design leads to the following anomalies:</p>
        <table class="styled-table"><thead><tr><th>Anomaly</th><th>Description</th><th>Example</th></tr></thead><tbody>
        <tr><td><strong>Insertion Anomaly</strong></td><td>Inability to insert certain data because other data is required.</td><td>Cannot add a new department location because no employee is assigned to it yet.</td></tr>
        <tr><td><strong>Update Anomaly</strong></td><td>Data inconsistency when updating duplicated data.</td><td>If the HR location changes, you must update multiple rows. Missing one creates inconsistency.</td></tr>
        <tr><td><strong>Deletion Anomaly</strong></td><td>Unintended loss of data when deleting other data.</td><td>If all employees in IT resign, deleting them might also delete the IT department's location information.</td></tr>
        <tr><td><strong>Data Redundancy</strong></td><td>Unnecessary repetition of data.</td><td>Storing the department location redundantly for every employee in that department.</td></tr>
        </tbody></table>

        <h2>🔹 Normal Forms (NF)</h2>
        <table class="styled-table"><thead><tr><th>Normal Form</th><th>Description</th></tr></thead><tbody>
        <tr><td><strong>First Normal Form (1NF)</strong></td><td>A relation is in 1NF if every attribute is a <strong>single-valued attribute</strong>. (No multi-valued attributes like multiple phone numbers in one cell).</td></tr>
        <tr><td><strong>Second Normal Form (2NF)</strong></td><td>The relation is in 1NF <strong>AND</strong> every non-primary-key attribute is <strong>fully functionally dependent</strong> on the primary key. (No partial dependencies).</td></tr>
        <tr><td><strong>Third Normal Form (3NF)</strong></td><td>The relation is in 2NF <strong>AND</strong> there are <strong>no transitive dependencies</strong> for non-prime attributes. In dependency $X \\rightarrow Y$, either $X$ is a superkey, or $Y$ is a prime attribute.</td></tr>
        </tbody></table>

        <h2>🔹 Laboratory Exercises</h2>
        <ul>
        <li><strong>Q1:</strong> Analyze a given table (e.g., a branch with multiple phone numbers) and explain why it violates 1NF. Describe the process to normalize it to 3NF.</li>
        <li><strong>Q2:</strong> Consider relation BOOK(Book_title, Author_name, Book_type, List_price, Author_affil, Publisher) with PK (Book_title, Author_name). Given functional dependencies, identify the current normal form and apply normalization.</li>
        <li><strong>Q3:</strong> Consider relation R={A, B, C, D, E, F, G, H, I, J} and functional dependencies. Find the key for R and decompose into 2NF and 3NF.</li>
        <li><strong>Q4:</strong> Given R(Doctor#, Patient#, Date, Diagnosis, Treat_code, Charge), evaluate if the relation is in 2NF, justify the answer, and decompose to 3NF if necessary.</li>
        </ul>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%209.pdf" target="_blank" class="pdf-link">Lab 9 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>تطبيع البيانات (Normalization)</h2>
<p>هي عملية تنظيم هيكل قاعدة البيانات لتقليل تكرار البيانات (Redundancy) والقضاء على المشاكل أو الشذوذ (Anomalies) أثناء عمليات الإدراج والتحديث والحذف.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Normalization eliminates redundancy and prevents insertion, update, and deletion anomalies.",
      "Insertion Anomaly: Cannot insert data without presence of other related data.",
      "Update Anomaly: Updating redundant data risks inconsistency if not updated everywhere.",
      "Deletion Anomaly: Deleting a row accidentally removes unrelated facts.",
      "1NF: All attributes must be single-valued (atomic). No repeating groups.",
      "2NF: Must be 1NF + NO partial dependencies (non-prime attributes depend on the WHOLE primary key).",
      "3NF: Must be 2NF + NO transitive dependencies (non-prime attributes depend ONLY on candidate keys)."
    ],
    pointsAr: [
      "التطبيع (Normalization) يقلل التكرار ويمنع شذوذ التحديث والحذف والإدراج.",
      "1NF: جميع القيم يجب أن تكون مفردة (Atomic).",
      "2NF: منع الاعتماد الجزئي على المفتاح الأساسي.",
      "3NF: منع الاعتماد المتعدي (Transitive Dependency)."
    ]
  },

  mcq: [
    { id: 'db-s9-q1', question: "What is the primary goal of Database Normalization?", difficulty: 'easy', answers: [
      { id: 'a', text: "To increase data redundancy", isCorrect: false },
      { id: 'b', text: "To eliminate data redundancy and anomalies", isCorrect: true },
      { id: 'c', text: "To merge multiple tables into one large table", isCorrect: false },
      { id: 'd', text: "To encrypt the database", isCorrect: false }
    ]},
    { id: 'db-s9-q2', question: "A relation is in 1NF if:", difficulty: 'easy', answers: [
      { id: 'a', text: "It has no partial dependencies", isCorrect: false },
      { id: 'b', text: "It has no transitive dependencies", isCorrect: false },
      { id: 'c', text: "Every attribute is single-valued (atomic)", isCorrect: true },
      { id: 'd', text: "All attributes are primary keys", isCorrect: false }
    ]},
    { id: 'db-s9-q3', question: "If deleting an employee accidentally deletes the information about the department they worked in, this is a:", difficulty: 'medium', answers: [
      { id: 'a', text: "Insertion Anomaly", isCorrect: false },
      { id: 'b', text: "Update Anomaly", isCorrect: false },
      { id: 'c', text: "Deletion Anomaly", isCorrect: true },
      { id: 'd', text: "Redundancy Anomaly", isCorrect: false }
    ]},
    { id: 'db-s9-q4', question: "To achieve Second Normal Form (2NF), a relation must be in 1NF and:", difficulty: 'medium', answers: [
      { id: 'a', text: "Have no partial dependencies", isCorrect: true },
      { id: 'b', text: "Have no transitive dependencies", isCorrect: false },
      { id: 'c', text: "Have no primary keys", isCorrect: false },
      { id: 'd', text: "Have multi-valued attributes", isCorrect: false }
    ]},
    { id: 'db-s9-q5', question: "Third Normal Form (3NF) strictly prohibits:", difficulty: 'medium', answers: [
      { id: 'a', text: "Composite keys", isCorrect: false },
      { id: 'b', text: "Partial dependencies", isCorrect: false },
      { id: 'c', text: "Transitive dependencies for non-prime attributes", isCorrect: true },
      { id: 'd', text: "Foreign keys", isCorrect: false }
    ]},
    { id: 'db-s9-q6', question: "If the HR department changes its location, but you forget to update one of the employee records, creating inconsistency. What anomaly is this?", difficulty: 'easy', answers: [
      { id: 'a', text: "Deletion Anomaly", isCorrect: false },
      { id: 'b', text: "Insertion Anomaly", isCorrect: false },
      { id: 'c', text: "Transitive Anomaly", isCorrect: false },
      { id: 'd', text: "Update Anomaly", isCorrect: true }
    ]}
  ],
  written: [
    {
      id: 'db-s9-w1',
      question: "Explain the difference between 2NF and 3NF regarding attribute dependencies.",
      questionAr: "اشرح الفرق بين 2NF و 3NF فيما يتعلق باعتمادات الصفات.",
      modelAnswer: "2NF eliminates partial dependencies, meaning all non-prime attributes must depend on the ENTIRE primary key (crucial for composite keys). 3NF eliminates transitive dependencies, meaning non-prime attributes cannot depend on other non-prime attributes; they must depend strictly on a candidate key.",
      modelAnswerAr: "2NF تلغي الاعتماد الجزئي (يجب أن تعتمد جميع الصفات على المفتاح الأساسي بالكامل). 3NF تلغي الاعتماد المتعدي (لا يمكن لصفة غير رئيسية أن تعتمد على صفة غير رئيسية أخرى؛ يجب أن تعتمد فقط على مفتاح مرشح)."
    }
  ]
};
