export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'database',
  number: 6,
  title: 'Lecture: Extended ER Model',
  titleAr: 'محاضرة: نموذج ER الموسع',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Crow's Foot vs. Chen Model</h2>
        <p>Both models represent cardinality constraints but use different notations. The Crow's Foot model uses symbols (|, O, <) while the Chen model uses (min,max) pairs.</p>
        
        <h3>HEG Example</h3>
        <p>"The HEG has 12 instructors and can handle up to 30 trainees per class. HEG offers five 'advanced technology' courses, each of which may generate several classes. If a class has fewer than 10 trainees, it will be canceled."</p>
        <ul>
        <li>Each instructor may teach up to <strong>two classes</strong> or may do research.</li>
        <li>Each trainee may take up to <strong>two classes</strong> per session.</li>
        <li>Each class must contain from <strong>10 up to 30</strong> enrollment.</li>
        <li>It is possible for a course <strong>not to generate any classes</strong>.</li>
        </ul>
        
        <h2>🔹 Extended Relational Analysis</h2>
        <p>The Extended Entity Relationship (EER) model adds specialized constructs for handling complex relationships:</p>
        
        <h3>1. Subsets of Entities</h3>
        <ul>
        <li>A <strong>subset</strong> is a collection of occurrences of an entity type that participate in relations or possess attributes <strong>not common to the entity type as a whole</strong>.</li>
        <li>The entity as a whole is called a <strong>Superset</strong>.</li>
        <li>Subsets are <strong>nouns</strong> — they can participate in relations and have attributes.</li>
        <li><strong>Key Rule:</strong> The PK of the Subset table is the <strong>same as the PK of its Superset table</strong>, and it also acts as a FK in the Subset table.</li>
        </ul>
        <div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Example:</strong> "Is this a relation between Persons and Department?" — "Yes, but only the employees." Here, Employee is a <strong>subset</strong> of Person.</span></div>
        
        <h3>2. Dependents of Entities</h3>
        <ul>
        <li>A <strong>dependent</strong> is a noun that may have attributes of its own but exists <strong>only as part of, or subordinate to</strong>, some other entity (the <strong>parent</strong>).</li>
        <li>Dependents are nouns — they can participate in relations and have attributes.</li>
        <li>A dependent <strong>must have exactly ONE parent</strong> and must always have the <strong>same parent</strong>.</li>
        <li><strong>Key Rule:</strong> The PK of a dependent is always the <strong>PK of its parent(s) plus one additional column</strong>.</li>
        </ul>
        
        <h3>Subsets vs Dependents — Key Difference</h3>
        <table class="styled-table"><thead><tr><th>Feature</th><th>Subset</th><th>Dependent</th></tr></thead><tbody>
        <tr><td><strong>PK</strong></td><td>Same as superset's PK</td><td>Parent's PK + one extra column</td></tr>
        <tr><td><strong>FK?</strong></td><td>PK is also FK to superset</td><td>PK includes parent's PK as FK</td></tr>
        <tr><td><strong>Existence</strong></td><td>Can exist independently</td><td>Exists only with parent</td></tr>
        </tbody></table>
        
        <h3>3. Recursive Relations (Unary)</h3>
        <ul>
        <li>A relation between occurrences of a <strong>particular entity type and other occurrences of the same entity type</strong>.</li>
        <li>The entity could be simple, subset, or dependent.</li>
        <li>Can be of three basic types: <strong>1:1, 1:M, M:N</strong>.</li>
        <li>Also called <strong>Unary Relations</strong>.</li>
        </ul>
        
        <h3>4. Complex Relations</h3>
        <ul>
        <li>A relation between <strong>more than two entities</strong> (e.g., Ternary relationships).</li>
        <li>Examples: 1:M:1, N:M:1, M:N:M</li>
        <li>Region(1):Customer(M) + Region/Customer(M):Class(1) = <strong>1:M:1</strong></li>
        <li>Course(N):Student(M) + Course/Student(M):Grade(1) = <strong>N:M:1</strong></li>
        <li>Part(M):Vendor(N) + Part/Vendor(M):Order(N) = <strong>M:N:M</strong></li>
        </ul>
        
        <h3>5. Time Relations</h3>
        <ul>
        <li>A relation between an entity, subset, dependent, or another relation and <strong>time</strong>.</li>
        <li>Time Relations are <strong>always Many-to-Many</strong>.</li>
        <li>We consider a <strong>virtual entity called TIME</strong> (Years, Months, Days, Hours, Seconds).</li>
        </ul>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/lectures/Lect6-Extended_ER_Model.pdf" target="_blank" class="pdf-link">Lecture 6 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>نموذج ER الموسع</h2>
<p>يضيف مفاهيم متقدمة مثل المجاميع الفرعية، التبعية، والعلاقات المعقدة والزمنية.</p>

<h3>المجاميع الفرعية مقابل التبعيات</h3>
<ul>
<li><strong>المجاميع الفرعية:</strong> المفتاح الأساسي هو نفس مفتاح المجموعة الأصل.</li>
<li><strong>التبعيات:</strong> المفتاح الأساسي = مفتاح الأصل + عمود إضافي.</li>
</ul>

<h3>العلاقات</h3>
<ul>
<li><strong>العلاقات المرتدة (Recursive):</strong> بين كيانين من نفس النوع.</li>
<li><strong>العلاقات المعقدة:</strong> علاقات بين أكثر من كيانين.</li>
<li><strong>العلاقات الزمنية:</strong> دائماً كثير لكثير مع كيان الوقت الافتراضي.</li>
</ul>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Extended ER adds: Subsets, Dependents, Recursive, Complex, and Time relations.",
      "Subset PK = Superset PK exactly (also acts as FK).",
      "Dependent PK = Parent's PK + one additional column.",
      "Dependent must have exactly ONE parent and always the same parent.",
      "Recursive (Unary) relations: between instances of the SAME entity type (1:1, 1:M, M:N).",
      "Complex relations: involve more than two entities (Ternary: 1:M:1, N:M:1, M:N:M).",
      "Time relations are ALWAYS Many-to-Many with a virtual TIME entity.",
      "Crow's Foot uses line symbols (|, O, <); Chen uses (min,max) pairs.",
      "HEG Example: Instructor teaches 0-2 classes, Trainee takes 0-2 classes, Class has 10-30 enrollments.",
      "A course may not generate any classes (zero minimum cardinality)."
    ],
    pointsAr: [
      "المجموعة الفرعية: مفتاحها = مفتاح المجموعة الأصل.",
      "التبعية: مفتاحها = مفتاح الأصل + عمود إضافي.",
      "العلاقات الزمنية دائماً كثير لكثير.",
      "العلاقات المرتدة تربط كيان بنفسه."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'db-l6-q1',
      question: "In Extended ER, what constitutes the Primary Key of a Dependent entity?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A surrogate auto-increment key", isCorrect: false },
        { id: 'b', text: "The PK of its parent plus one additional column", isCorrect: true },
        { id: 'c', text: "Exactly the same PK as its parent", isCorrect: false },
        { id: 'd', text: "Dependent entities do not have PKs", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q2',
      question: "The PK of a Subset table compared to its Superset table is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Completely different", isCorrect: false },
        { id: 'b', text: "The same as the PK of the Superset and also acts as FK", isCorrect: true },
        { id: 'c', text: "A composite key of both entities", isCorrect: false },
        { id: 'd', text: "System-generated and independent", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q3',
      question: "Time Relations in Extended ER are always:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "One-to-One", isCorrect: false },
        { id: 'b', text: "One-to-Many", isCorrect: false },
        { id: 'c', text: "Many-to-Many", isCorrect: true },
        { id: 'd', text: "Optional and unary", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q4',
      question: "A Recursive Relation is also known as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Binary Relation", isCorrect: false },
        { id: 'b', text: "Ternary Relation", isCorrect: false },
        { id: 'c', text: "Unary Relation", isCorrect: true },
        { id: 'd', text: "Complex Relation", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q5',
      question: "A dependent entity must have:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Multiple parents for redundancy", isCorrect: false },
        { id: 'b', text: "No parent at all", isCorrect: false },
        { id: 'c', text: "Exactly ONE parent, and always the same parent", isCorrect: true },
        { id: 'd', text: "At least two parents from different tables", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q6',
      question: "Which of the following is an example of a Complex Relation?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A relation between Employee and Department only", isCorrect: false },
        { id: 'b', text: "A Ternary relationship like Course(N):Student(M):Grade(1)", isCorrect: true },
        { id: 'c', text: "A recursive relation within Employee", isCorrect: false },
        { id: 'd', text: "A time relation between Order and TIME", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q7',
      question: "Subsets are classified as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Verbs", isCorrect: false },
        { id: 'b', text: "Adjectives", isCorrect: false },
        { id: 'c', text: "Nouns", isCorrect: true },
        { id: 'd', text: "Adverbs", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q8',
      question: "In the HEG example, each instructor may teach:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Exactly 5 classes", isCorrect: false },
        { id: 'b', text: "Up to two classes or be assigned to research", isCorrect: true },
        { id: 'c', text: "Only one class", isCorrect: false },
        { id: 'd', text: "Unlimited classes", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q9',
      question: "A recursive relation can be of these basic types:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Only 1:M", isCorrect: false },
        { id: 'b', text: "Only M:N", isCorrect: false },
        { id: 'c', text: "1:1, 1:M, or M:N", isCorrect: true },
        { id: 'd', text: "Only 1:1", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q10',
      question: "What distinguishes a Subset from a Dependent in terms of existence?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Subsets can exist independently but dependents exist only with their parent", isCorrect: true },
        { id: 'b', text: "Both can exist independently", isCorrect: false },
        { id: 'c', text: "Neither can exist independently", isCorrect: false },
        { id: 'd', text: "Dependents exist independently but subsets do not", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q11',
      question: "In Crow's Foot notation, the symbol '|' (single line) represents:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Many", isCorrect: false },
        { id: 'b', text: "Zero/Optional", isCorrect: false },
        { id: 'c', text: "Mandatory/Exactly one", isCorrect: true },
        { id: 'd', text: "Recursive", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q12',
      question: "In the HEG scenario, a class that has fewer than 10 trainees will be:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Split into two smaller classes", isCorrect: false },
        { id: 'b', text: "Canceled", isCorrect: true },
        { id: 'c', text: "Merged with another course", isCorrect: false },
        { id: 'd', text: "Extended to the next session", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q13',
      question: "TIME is considered a ___ entity in Time Relations.",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Strong", isCorrect: false },
        { id: 'b', text: "Weak", isCorrect: false },
        { id: 'c', text: "Virtual", isCorrect: true },
        { id: 'd', text: "Dependent", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q14',
      question: "Part(M):Vendor(N) + Part/Vendor(M):Order(N) results in which complex relation?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "1:M:1", isCorrect: false },
        { id: 'b', text: "N:M:1", isCorrect: false },
        { id: 'c', text: "M:N:M", isCorrect: true },
        { id: 'd', text: "1:1:1", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q15',
      question: "Course(N):Student(M) + Course/Student(M):Grade(1) results in:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "M:N:M", isCorrect: false },
        { id: 'b', text: "N:M:1", isCorrect: true },
        { id: 'c', text: "1:M:1", isCorrect: false },
        { id: 'd', text: "1:1:M", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q16',
      question: "Chen model represents cardinality constraints using:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Crow's foot symbols (|, O, <)", isCorrect: false },
        { id: 'b', text: "(min, max) number pairs", isCorrect: true },
        { id: 'c', text: "Color-coded lines", isCorrect: false },
        { id: 'd', text: "Arrow directions only", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q17',
      question: "A recursive relation involves:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Two different entity types", isCorrect: false },
        { id: 'b', text: "Three entity types in a ternary relationship", isCorrect: false },
        { id: 'c', text: "Occurrences of the same entity type relating to each other", isCorrect: true },
        { id: 'd', text: "An entity and a time dimension", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q18',
      question: "In the HEG example, each trainee may take up to:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Five classes per session", isCorrect: false },
        { id: 'b', text: "Two classes per session", isCorrect: true },
        { id: 'c', text: "One class per session", isCorrect: false },
        { id: 'd', text: "Unlimited classes", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q19',
      question: "It is possible for a course in HEG not to generate any classes. This means:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "The minimum cardinality of Course to Class is 0", isCorrect: true },
        { id: 'b', text: "The course entity is deleted", isCorrect: false },
        { id: 'c', text: "The relationship becomes recursive", isCorrect: false },
        { id: 'd', text: "The course becomes a dependent entity", isCorrect: false }
      ]
    },
    {
      id: 'db-l6-q20',
      question: "Dependents can have:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Neither attributes nor relations", isCorrect: false },
        { id: 'b', text: "Attributes and can participate in relations", isCorrect: true },
        { id: 'c', text: "Only attributes, no relations", isCorrect: false },
        { id: 'd', text: "Only relations, no attributes", isCorrect: false }
      ]
    }
  ],

  written: []
};