export const LECTURE = {
  subjectId: 'database',
  number: 14,
  title: 'Lab 8: Enhanced ER Model',
  titleAr: 'المعمل 8: نموذج ER المحسن',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Enhanced ER (EER) Model</h2>
        <p>The Enhanced ER Model is an extension of the traditional ER model used to represent complex database requirements. As data complexity increases, the basic ER model becomes insufficient.</p>

        <h3>Core Concepts</h3>
        <ul>
        <li><strong>Subtypes and Supertypes:</strong> Define general and specialized entities.</li>
        <li><strong>Generalization and Specialization:</strong> Organize entities by shared or unique attributes.</li>
        <li><strong>Inheritance:</strong> Subtypes automatically inherit all attributes and relationships from their supertypes.</li>
        <li><strong>Aggregation:</strong> Represents related entities as a single higher-level entity.</li>
        </ul>

        <h2>🔹 Superclass and Subclass</h2>
        <p><strong>Superclass</strong> is a higher-level entity set that has common attributes. <strong>Subclass</strong> is a lower-level entity set that inherits attributes and relationships from its superclass but also has its own specific attributes/relationships. This supports the concept of <strong>inheritance</strong>.</p>

        <h2>🔹 Generalization and Specialization Constraints</h2>
        <p>There are two primary types of constraints on the "Sub-class" relationship:</p>

        <h3>1. Completeness Constraints (Total vs. Partial)</h3>
        <table class="styled-table"><thead><tr><th>Constraint</th><th>Description</th><th>Example</th></tr></thead><tbody>
        <tr><td><strong>Total Sub-classing</strong></td><td>Every entity in the superclass <em>must</em> belong to at least one subclass. (Complete coverage)</td><td>Every employee is <em>either</em> salaried or hourly.</td></tr>
        <tr><td><strong>Partial Sub-classing</strong></td><td>Some entities in the superclass may <em>not</em> belong to any subclass. (Incomplete coverage)</td><td>Not all employees are a secretary, engineer, or technician.</td></tr>
        </tbody></table>

        <h3>2. Disjointness Constraints (Overlapped vs. Disjoint)</h3>
        <table class="styled-table"><thead><tr><th>Constraint</th><th>Description</th><th>Example</th></tr></thead><tbody>
        <tr><td><strong>Disjoint (d)</strong></td><td>An entity can belong to <em>only one</em> subclass. No overlap allowed.</td><td>Job types: An employee is only an Engineer OR a Secretary, not both.</td></tr>
        <tr><td><strong>Overlapped (o)</strong></td><td>An entity can belong to <em>multiple</em> subclasses simultaneously.</td><td>A person can be both an Employee AND an Alumnus.</td></tr>
        </tbody></table>

        <h2>🔹 Category or Union Type</h2>
        <p>A Category (or Union Type) is a subclass that is derived from <strong>two or more superclasses that may not be related</strong>. It allows the model to represent an entity that can be a member of more than one entity set. In multiple inheritance, attributes of the sub-class are the union of attributes of all super-classes.</p>

        <h2>🔹 Exercises</h2>
        <ul>
        <li><strong>Q1:</strong> Draw EER-Diagram for a library system keeping track of art objects (sculpture, painting) created by different artists, exhibitions, and collections.</li>
        <li><strong>Q2:</strong> Map the provided Customer EER schema to a Relational Data Model.</li>
        <li><strong>Q3:</strong> Map the Employee (Secretary, Technician, Engineer) disjoint subclass EER schema to a Relational Data Model.</li>
        </ul>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%208.pdf" target="_blank" class="pdf-link">Lab 8 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>نموذج ER المحسن (EER)</h2>
<p>هو امتداد لنموذج ER التقليدي يُستخدم لتمثيل متطلبات قواعد البيانات المعقدة، مثل الوراثة (Inheritance) والأصناف الفائقة (Supertypes) والفرعية (Subtypes).</p>`
      }
    }
  ],

  summary: {
    points: [
      "Enhanced ER (EER) extends traditional ER with advanced concepts like inheritance.",
      "Superclass = General entity; Subclass = Specialized entity.",
      "Subclasses inherit ALL attributes and relationships of their superclass.",
      "Total subclassing = complete coverage (entity MUST be in a subclass).",
      "Partial subclassing = incomplete coverage.",
      "Disjoint (d) = entity belongs to ONLY ONE subclass.",
      "Overlapped (o) = entity can belong to MULTIPLE subclasses.",
      "Union Type (Category) is a subclass derived from multiple unrelated superclasses."
    ],
    pointsAr: [
      "نموذج EER يضيف مفاهيم متقدمة مثل الوراثة (Inheritance).",
      "Total Subclassing: يجب أن ينتمي العنصر لفئة فرعية.",
      "Disjoint: يمكن أن ينتمي العنصر لفئة فرعية واحدة فقط."
    ]
  },

  mcq: [
    { id: 'db-s8-q1', question: "In the EER model, what happens to attributes of a superclass?", difficulty: 'easy', answers: [
      { id: 'a', text: "They are inherited by all its subclasses", isCorrect: true },
      { id: 'b', text: "They are hidden from subclasses", isCorrect: false },
      { id: 'c', text: "They must be redefined in each subclass", isCorrect: false },
      { id: 'd', text: "They are deleted", isCorrect: false }
    ]},
    { id: 'db-s8-q2', question: "A constraint specifying that an entity can belong to only ONE subclass is called:", difficulty: 'easy', answers: [
      { id: 'a', text: "Overlapped", isCorrect: false },
      { id: 'b', text: "Total", isCorrect: false },
      { id: 'c', text: "Disjoint", isCorrect: true },
      { id: 'd', text: "Partial", isCorrect: false }
    ]},
    { id: 'db-s8-q3', question: "Which constraint specifies that every entity in the superclass MUST belong to at least one subclass?", difficulty: 'medium', answers: [
      { id: 'a', text: "Total subclassing", isCorrect: true },
      { id: 'b', text: "Partial subclassing", isCorrect: false },
      { id: 'c', text: "Disjoint subclassing", isCorrect: false },
      { id: 'd', text: "Overlapped subclassing", isCorrect: false }
    ]},
    { id: 'db-s8-q4', question: "What is a 'Category' or 'Union Type' in the EER model?", difficulty: 'hard', answers: [
      { id: 'a', text: "A superclass with no attributes", isCorrect: false },
      { id: 'b', text: "A subclass derived from two or more unrelated superclasses", isCorrect: true },
      { id: 'c', text: "A relationship between two strong entities", isCorrect: false },
      { id: 'd', text: "A primary key constraint", isCorrect: false }
    ]},
    { id: 'db-s8-q5', question: "If an Employee can be both an 'Engineer' AND an 'Alumnus', this is an example of:", difficulty: 'medium', answers: [
      { id: 'a', text: "Disjoint subclassing", isCorrect: false },
      { id: 'b', text: "Overlapped subclassing", isCorrect: true },
      { id: 'c', text: "Aggregation", isCorrect: false },
      { id: 'd', text: "Partial participation", isCorrect: false }
    ]},
    { id: 'db-s8-q6', question: "Aggregation in an EER model is used to:", difficulty: 'medium', answers: [
      { id: 'a', text: "Represent related entities as a single higher-level entity", isCorrect: true },
      { id: 'b', text: "Delete redundant attributes", isCorrect: false },
      { id: 'c', text: "Connect two subclasses together", isCorrect: false },
      { id: 'd', text: "Remove the need for a primary key", isCorrect: false }
    ]}
  ],
  written: [
    {
      id: 'db-s8-w1',
      question: "Explain the difference between Total Sub-classing and Partial Sub-classing.",
      questionAr: "اشرح الفرق بين Total Sub-classing و Partial Sub-classing.",
      modelAnswer: "Total Sub-classing means complete coverage, meaning every entity in the superclass MUST belong to at least one subclass. Partial Sub-classing means incomplete coverage, meaning an entity in the superclass may exist without belonging to any subclass.",
      modelAnswerAr: "Total يعني تغطية كاملة (كل عنصر في الفئة الرئيسية يجب أن ينتمي لفئة فرعية). Partial يعني تغطية غير كاملة (يمكن للعنصر أن يوجد في الفئة الرئيسية دون الانتماء لأي فئة فرعية)."
    }
  ]
};
