export const LECTURE = {
  subjectId: 'database',
  number: 13,
  title: 'Lab 7 - ER Model Analysis',
  titleAr: 'قسم 2: معمل 7 - تحليل نموذج ER',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Entity-Relationship Model (ER Model)</h2>
        <p>The ER Model is a conceptual model used for designing databases by representing entities, their attributes, and the relationships between them.</p>

        <h3>Core Concepts</h3>
        <ul>
        <li><strong>Entity:</strong> A real-world object (e.g., Student, Course).</li>
        <li><strong>Attribute:</strong> Properties describing an entity (e.g., Name, ID).</li>
        <li><strong>Relationship:</strong> A connection between entities (e.g., Student <em>enrolls in</em> Course).</li>
        </ul>

        <h2>🔹 Types of Entities</h2>
        <table class="styled-table"><thead><tr><th>Entity Type</th><th>Description</th><th>Symbol</th></tr></thead><tbody>
        <tr><td><strong>Strong Entity</strong></td><td>Has a primary key and doesn't depend on others.</td><td>Rectangle</td></tr>
        <tr><td><strong>Weak Entity</strong></td><td>Depends on a strong entity for identification.</td><td>Double Rectangle</td></tr>
        </tbody></table>

        <h2>🔹 Types of Attributes</h2>
        <ul>
        <li><strong>Key Attribute:</strong> Uniquely identifies an entity (e.g., Roll_No). Shown as <u>Underlined</u>.</li>
        <li><strong>Composite Attribute:</strong> Composed of other attributes (e.g., Address = Street + City).</li>
        <li><strong>Multivalued Attribute:</strong> Can have more than one value (e.g., Phone_No). Shown as Double Oval.</li>
        <li><strong>Derived Attribute:</strong> Derived from others (e.g., Age from DOB). Shown as Dashed Oval.</li>
        </ul>

        <h2>🔹 Relationship Constraints</h2>
        <h3>Cardinality (Maximum Participation)</h3>
        <ul>
        <li><strong>1:1</strong> (One-to-One)</li>
        <li><strong>1:M</strong> (One-to-Many)</li>
        <li><strong>M:N</strong> (Many-to-Many)</li>
        </ul>
        
        <h3>Participation (Minimum Participation)</h3>
        <ul>
        <li><strong>Total:</strong> Every entity must participate (Double Line).</li>
        <li><strong>Partial:</strong> Entities may or may not participate (Single Line).</li>
        </ul>

        <h2>🔹 Structural Constraints (Min-Max Notation)</h2>
        <p>Represented as (min, max) on the connecting lines.
        <br>If min = 0 → Partial participation.
        <br>If min ≥ 1 → Total participation.</p>

        <h2>🔹 Laboratory Exercises</h2>
        <ul>
        <li><strong>Problem 1:</strong> Bank Database analysis (Branches, Accounts, Loans).</li>
        <li><strong>Problem 2:</strong> Employee-Department-Phone relationship mapping.</li>
        <li><strong>Problem 3:</strong> Course-Textbook-Instructor mapping with constraints.</li>
        <li><strong>Problem 4:</strong> University Management System ER Diagram.</li>
        <li><strong>Problem 5:</strong> Online Bookstore design — Books, Authors, Publishers, Warehouses, Customers, Shopping Baskets.</li>
        </ul>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%207.pdf" target="_blank" class="pdf-link">Lab 7 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>معمل 7 - تحليل نموذج ER</h2>
<p>تدريب عملي على إنشاء مخططات ER مع تحديد الكيانات والصفات وعلاقات الكارديليتي المعقدة والقيود الهيكلية (Min-Max).</p>`
      }
    }
  ],

  summary: {
    points: [
      "ER Model is a conceptual tool for database design.",
      "Symbolism: Rectangle (Entity), Oval (Attribute), Diamond (Relationship).",
      "Key attributes must be underlined and uniquely identify instances.",
      "Weak entities need an identifying relationship (Double Diamond) with a Strong entity.",
      "Multivalued attributes are represented by double ovals (e.g., multiple phone numbers).",
      "Degree of relationship: Unary (1 entity), Binary (2), Ternary (3).",
      "Cardinality Ratios: 1:1, 1:M, M:N based on max participation frequency.",
      "Total participation (double line) vs. Partial participation (single line).",
      "Min-Max notation (m, n) combines cardinality and participation.",
      "Entities represent tables, while attributes represent columns in physical design."
    ],
    pointsAr: ["نموذج ER هو وسيلة مرئية لتصميم قاعدة البيانات.", "الكيان القوي له مفتاح أساسي، والكيان الضعيف يعتمد على غيره للتعريف."]
  },

  mcq: [
    { id: 'db-s7-q1', question: "Which symbol represents a weak entity in an ER diagram?", difficulty: 'easy', answers: [
      { id: 'a', text: "Rectangle", isCorrect: false },
      { id: 'b', text: "Double Rectangle", isCorrect: true },
      { id: 'c', text: "Oval", isCorrect: false },
      { id: 'd', text: "Diamond", isCorrect: false }
    ]},
    { id: 'db-s7-q2', question: "A derived attribute like 'Age' is represented by:", difficulty: 'easy', answers: [
      { id: 'a', text: "Double Oval", isCorrect: false },
      { id: 'b', text: "Dashed Oval", isCorrect: true },
      { id: 'c', text: "Underlined Oval", isCorrect: false },
      { id: 'd', text: "Rectangle", isCorrect: false }
    ]},
    { id: 'db-s7-q3', question: "In (min, max) notation, a min value of 1 indicates:", difficulty: 'medium', answers: [
      { id: 'a', text: "Partial participation", isCorrect: false },
      { id: 'b', text: "Total participation", isCorrect: true },
      { id: 'c', text: "Optional relationship", isCorrect: false },
      { id: 'd', text: "Many-to-many relationship", isCorrect: false }
    ]},
    { id: 'db-s7-q4', question: "A multivalued attribute (e.g., multiple phone numbers) is shown as:", difficulty: 'easy', answers: [
      { id: 'a', text: "Double Rectangle", isCorrect: false },
      { id: 'b', text: "Double Oval", isCorrect: true },
      { id: 'c', text: "Dashed line", isCorrect: false },
      { id: 'd', text: "Diamond", isCorrect: false }
    ]},
    { id: 'db-s7-q5', question: "Total participation is graphically shown by:", difficulty: 'medium', answers: [
      { id: 'a', text: "Single line", isCorrect: false },
      { id: 'b', text: "Double line", isCorrect: true },
      { id: 'c', text: "Dashed line", isCorrect: false },
      { id: 'd', text: "Arrow", isCorrect: false }
    ]},
    { id: 'db-s7-q6', question: "An attribute like Address (consisting of City, State, Country) is a:", difficulty: 'medium', answers: [
      { id: 'a', text: "Derived attribute", isCorrect: false },
      { id: 'b', text: "Composite attribute", isCorrect: true },
      { id: 'c', text: "Simple attribute", isCorrect: false },
      { id: 'd', text: "Key attribute", isCorrect: false }
    ]},
    { id: 'db-s7-q7', question: "What is the degree of a relationship involving 3 entity sets?", difficulty: 'easy', answers: [
      { id: 'a', text: "Unary", isCorrect: false },
      { id: 'b', text: "Binary", isCorrect: false },
      { id: 'c', text: "Ternary", isCorrect: true },
      { id: 'd', text: "Secondary", isCorrect: false }
    ]},
    { id: 'db-s7-q8', question: "Key attributes are always:", difficulty: 'easy', answers: [
      { id: 'a', text: "Dashed", isCorrect: false },
      { id: 'b', text: "Underlined", isCorrect: true },
      { id: 'c', text: "Double highlighted", isCorrect: false },
      { id: 'd', text: "Colored red", isCorrect: false }
    ]},
    { id: 'db-s7-q9', question: "Weak entities are connected to their identifying owners via a:", difficulty: 'medium', answers: [
      { id: 'a', text: "Partial relationship", isCorrect: false },
      { id: 'b', text: "Identifying relationship (Double Diamond)", isCorrect: true },
      { id: 'c', text: "Dashed line", isCorrect: false },
      { id: 'd', text: "Unary connector", isCorrect: false }
    ]},
    { id: 'db-s7-q10', question: "Structural constraints are composed of:", difficulty: 'hard', answers: [
      { id: 'a', text: "Only Cardinality Ratios", isCorrect: false },
      { id: 'b', text: "Cardinality Ratios + Participation Constraints", isCorrect: true },
      { id: 'c', text: "Only Min-Max notation", isCorrect: false },
      { id: 'd', text: "Primary and Foreign keys", isCorrect: false }
    ]}
  ],
  written: []
};
