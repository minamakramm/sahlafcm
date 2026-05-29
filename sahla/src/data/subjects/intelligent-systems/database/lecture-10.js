export const LECTURE = {
  subjectId: 'database',
  number: 10,
  title: 'Lab 4: SQL Constraints & Retrieving Data',
  titleAr: 'المختبر 4: قيود SQL واسترجاع البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 SQL Constraints</h2>
        <p>Constraints are rules enforced on data columns to ensure <strong>accuracy, reliability, and integrity</strong> of the data.</p>

        <table class="styled-table"><thead><tr><th>Constraint</th><th>Description</th></tr></thead><tbody>
        <tr><td><span class="table-tag table-tag-emerald">NOT NULL</span></td><td>Ensures a column cannot have a NULL value.</td></tr>
        <tr><td><span class="table-tag table-tag-blue">UNIQUE</span></td><td>Ensures all values in a column are different.</td></tr>
        <tr><td><span class="table-tag table-tag-violet">PRIMARY KEY</span></td><td>NOT NULL + UNIQUE. Uniquely identifies each row.</td></tr>
        <tr><td><span class="table-tag table-tag-amber">FOREIGN KEY</span></td><td>Uniquely identifies a row/record in another table.</td></tr>
        <tr><td><strong>CHECK</strong></td><td>Ensures that all values in a column satisfy a specific condition.</td></tr>
        </tbody></table>

        <h3>Creating Tables with Constraints</h3>
        <div class="code-block"><span class="keyword">CREATE TABLE</span> Students (
    id <span class="number">NUMBER</span> <span class="keyword">PRIMARY KEY</span>,
    name <span class="string">VARCHAR2(50)</span> <span class="keyword">NOT NULL</span>,
    email <span class="string">VARCHAR2(100)</span> <span class="keyword">UNIQUE</span>,
    City <span class="string">VARCHAR2(50)</span>,
    age <span class="number">NUMBER</span> <span class="keyword">CHECK</span> (age <span class="keyword">BETWEEN</span> 18 <span class="keyword">AND</span> 50)
);</div>

        <h3>Modifying Constraints (ALTER)</h3>
        <div class="code-block"><span class="comment">-- Add UNIQUE constraint</span>
<span class="keyword">ALTER TABLE</span> Students <span class="keyword">ADD UNIQUE</span> (Mobile);

<span class="comment">-- Add CHECK constraint</span>
<span class="keyword">ALTER TABLE</span> Students <span class="keyword">ADD CONSTRAINT</span> check_city <span class="keyword">CHECK</span> (City <span class="keyword">IN</span> (<span class="string">'Cairo'</span>, <span class="string">'Alex'</span>, <span class="string">'Aswan'</span>));

<span class="comment">-- Drop or Disable constraint</span>
<span class="keyword">ALTER TABLE</span> Students <span class="keyword">DROP CONSTRAINT</span> constraint_name;
<span class="keyword">ALTER TABLE</span> Students <span class="keyword">DISABLE CONSTRAINT</span> constraint_name;</div>

        <h2>🔹 Retrieving Data (SELECT Statement)</h2>
        <p>The <code>SELECT</code> statement is used to fetch data from a database.</p>

        <h3>Filtering with WHERE</h3>
        <div class="code-block"><span class="comment">-- Exact match</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> City = <span class="string">'Cairo'</span>;

<span class="comment">-- Ranges and Sets</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> age <span class="keyword">BETWEEN</span> 20 <span class="keyword">AND</span> 25;
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> City <span class="keyword">IN</span> (<span class="string">'Cairo'</span>, <span class="string">'Alex'</span>);

<span class="comment">-- Logical operators</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> City = <span class="string">'Cairo'</span> <span class="keyword">AND</span> Grade > 80;
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> City = <span class="string">'Alex'</span> <span class="keyword">OR</span> age < 20;</div>

        <h3>Pattern Matching (LIKE)</h3>
        <ul>
        <li><code>%</code>: Represents zero, one, or multiple characters.</li>
        <li><code>_</code>: Represents a single character.</li>
        </ul>
        <div class="code-block"><span class="comment">-- Names starting with 'A'</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> name <span class="keyword">LIKE</span> <span class="string">'A%'</span>;

<span class="comment">-- Emails ending with gmail.com</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> email <span class="keyword">LIKE</span> <span class="string">'%gmail.com'</span>;

<span class="comment">-- Names with exactly 4 letters</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> Students <span class="keyword">WHERE</span> name <span class="keyword">LIKE</span> <span class="string">'____'</span>;</div>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%204.pdf" target="_blank" class="pdf-link">Lab 4 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>قيود SQL (Constraints)</h2>
<p>القيود هي قواعد تُطبق على الأعمدة لضمان دقة وتكامل البيانات مثل (NOT NULL, PRIMARY KEY, UNIQUE, FOREIGN KEY, CHECK).</p>
<h2>استرجاع البيانات (SELECT)</h2>
<p>استخدام جملة SELECT مع WHERE للتصفية، و LIKE للبحث عن أنماط معينة.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Constraints ensure data integrity: NOT NULL, PK, FK, UNIQUE, CHECK.",
      "PRIMARY KEY is automatically NOT NULL and UNIQUE.",
      "FOREIGN KEY creates a relationship between two tables by referencing a column in the parent table.",
      "CHECK constraint validates data ranges (e.g., age BETWEEN 18 AND 50).",
      "ALTER TABLE can ADD, DROP, or DISABLE constraints.",
      "SELECT statement retrieves data. WHERE clause filters results.",
      "BETWEEN captures a range of values (inclusive).",
      "IN checks for values within a specific set/list.",
      "LIKE uses wildcards: % (any characters) and _ (exactly one character).",
      "Combined conditions use AND, OR, and NOT logic."
    ],
    pointsAr: ["القيود تضمن سلامة البيانات.", "PRIMARY KEY يحدد الصف بشكل فريد.", "LIKE تستخدم % و _ للبحث عن الأنماط."]
  },

  mcq: [
    { id: 'db-s4-q1', question: "Which constraint ensures that a column cannot have a NULL value?", difficulty: 'easy', answers: [
      { id: 'a', text: "NOT NULL", isCorrect: true },
      { id: 'b', text: "UNIQUE", isCorrect: false },
      { id: 'c', text: "CHECK", isCorrect: false },
      { id: 'd', text: "DEFAULT", isCorrect: false }
    ]},
    { id: 'db-s4-q2', question: "A PRIMARY KEY is a combination of which two constraints?", difficulty: 'medium', answers: [
      { id: 'a', text: "UNIQUE and CHECK", isCorrect: false },
      { id: 'b', text: "NOT NULL and UNIQUE", isCorrect: true },
      { id: 'c', text: "FOREIGN KEY and NOT NULL", isCorrect: false },
      { id: 'd', text: "DEFAULT and UNIQUE", isCorrect: false }
    ]},
    { id: 'db-s4-q3', question: "To find all students whose names start with 'S', use:", difficulty: 'easy', answers: [
      { id: 'a', text: "WHERE name LIKE 'S%'", isCorrect: true },
      { id: 'b', text: "WHERE name = 'S'", isCorrect: false },
      { id: 'c', text: "WHERE name LIKE '_S'", isCorrect: false },
      { id: 'd', text: "WHERE name IN ('S')", isCorrect: false }
    ]},
    { id: 'db-s4-q4', question: "Which wildcard represents exactly ONE character in a LIKE pattern?", difficulty: 'easy', answers: [
      { id: 'a', text: "%", isCorrect: false },
      { id: 'b', text: "*", isCorrect: false },
      { id: 'c', text: "_", isCorrect: true },
      { id: 'd', text: "?", isCorrect: false }
    ]},
    { id: 'db-s4-q5', question: "The CHECK constraint is used to:", difficulty: 'medium', answers: [
      { id: 'a', text: "Link two tables together", isCorrect: false },
      { id: 'b', text: "Ensure value uniqueness", isCorrect: false },
      { id: 'c', text: "Validate that data satisfies a specific condition", isCorrect: true },
      { id: 'd', text: "Allow null values", isCorrect: false }
    ]},
    { id: 'db-s4-q6', question: "To find ages between 18 and 25 (inclusive), you use:", difficulty: 'easy', answers: [
      { id: 'a', text: "WHERE age IN (18, 25)", isCorrect: false },
      { id: 'b', text: "WHERE age BETWEEN 18 AND 25", isCorrect: true },
      { id: 'c', text: "WHERE age LIKE '18-25'", isCorrect: false },
      { id: 'd', text: "WHERE age = 18 OR 25", isCorrect: false }
    ]},
    { id: 'db-s4-q7', question: "How do you disable an existing constraint?", difficulty: 'medium', answers: [
      { id: 'a', text: "DELETE CONSTRAINT name", isCorrect: false },
      { id: 'b', text: "ALTER TABLE Students DISABLE CONSTRAINT name", isCorrect: true },
      { id: 'c', text: "REMOVE CONSTRAINT name", isCorrect: false },
      { id: 'd', text: "UPDATE TABLE set constraint = off", isCorrect: false }
    ]},
    { id: 'db-s4-q8', question: "Which query returns students NOT from Alexandria?", difficulty: 'easy', answers: [
      { id: 'a', text: "SELECT * FROM Students WHERE City NOT IN ('Alex')", isCorrect: true },
      { id: 'b', text: "SELECT * FROM Students WHERE City != 'Alex'", isCorrect: true, isMultiple: true },
      { id: 'c', text: "SELECT * FROM Students WHERE City NOT LIKE 'Alex'", isCorrect: false },
      { id: 'd', text: "Both A and B are valid", isCorrect: true }
    ]},
    { id: 'db-s4-q9', question: "A FOREIGN KEY references which column in the parent table?", difficulty: 'medium', answers: [
      { id: 'a', text: "Any non-null column", isCorrect: false },
      { id: 'b', text: "The Primary Key (or Unique key)", isCorrect: true },
      { id: 'c', text: "The first column", isCorrect: false },
      { id: 'd', text: "Only columns named 'ID'", isCorrect: false }
    ]},
    { id: 'db-s4-q10', question: "To see Only the Name and Email of students older than 18:", difficulty: 'easy', answers: [
      { id: 'a', text: "SELECT * FROM Students WHERE age > 18", isCorrect: false },
      { id: 'b', text: "SELECT Name, Email FROM Students WHERE age > 18", isCorrect: true },
      { id: 'c', text: "GET Name, Email FROM Students WHERE age > 18", isCorrect: false },
      { id: 'd', text: "SELECT Name AND Email FROM Students WHERE age > 18", isCorrect: false }
    ]}
  ],
  written: []
};
