export const LECTURE = {
  subjectId: 'database',
  number: 9,
  title: 'Lab 3: DDL & DML Commands',
  titleAr: 'المختبر 3: أوامر DDL و DML',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 DDL Commands (Data Definition Language)</h2>
        <p>Commands that define and modify the <strong>structure</strong> of database objects.</p>

        <h3>CREATE TABLE</h3>
        <div class="code-block"><span class="keyword">CREATE TABLE</span> STUDENTS (
    ID <span class="number">NUMBER</span> <span class="keyword">PRIMARY KEY</span>,
    NAME <span class="string">VARCHAR2(50)</span>,
    AGE <span class="number">NUMBER</span>,
    GPA <span class="number">NUMBER(3,2)</span>,
    DEPARTMENT <span class="string">VARCHAR2(30)</span>
);</div>

        <h3>ALTER TABLE</h3>
        <div class="code-block"><span class="comment">-- Add a column</span>
<span class="keyword">ALTER TABLE</span> STUDENTS <span class="keyword">ADD</span> EMAIL <span class="string">VARCHAR2(100)</span>;

<span class="comment">-- Drop a column</span>
<span class="keyword">ALTER TABLE</span> STUDENTS <span class="keyword">DROP COLUMN</span> EMAIL;</div>

        <h3>TRUNCATE & DROP</h3>
        <div class="code-block"><span class="comment">-- Remove all rows (keeps structure)</span>
<span class="keyword">TRUNCATE TABLE</span> STUDENTS;

<span class="comment">-- Delete entire table (structure + data)</span>
<span class="keyword">DROP TABLE</span> STUDENTS;</div>

        <h2>🔹 DML Commands (Data Manipulation Language)</h2>
        <p>Commands that <strong>manipulate data</strong> within tables.</p>

        <h3>INSERT</h3>
        <div class="code-block"><span class="keyword">INSERT INTO</span> STUDENTS <span class="keyword">VALUES</span> (1, <span class="string">'Ali'</span>, 20, 3.80, <span class="string">'IS'</span>);
<span class="keyword">INSERT INTO</span> STUDENTS <span class="keyword">VALUES</span> (2, <span class="string">'Sara'</span>, 22, 3.20, <span class="string">'IT'</span>);
<span class="keyword">INSERT INTO</span> STUDENTS <span class="keyword">VALUES</span> (3, <span class="string">'Rami'</span>, 21, 3.70, <span class="string">'IS'</span>);</div>

        <h3>UPDATE</h3>
        <div class="code-block"><span class="comment">-- Update GPA of student ID=1</span>
<span class="keyword">UPDATE</span> STUDENTS <span class="keyword">SET</span> GPA = 3.90 <span class="keyword">WHERE</span> ID = 1;</div>

        <h3>DELETE</h3>
        <div class="code-block"><span class="comment">-- Delete student with ID=3</span>
<span class="keyword">DELETE FROM</span> STUDENTS <span class="keyword">WHERE</span> ID = 3;</div>

        <h3>SELECT</h3>
        <div class="code-block"><span class="comment">-- Select all data</span>
<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> STUDENTS;</div>

        <h2>🔹 Key Differences</h2>
        <table class="styled-table"><thead><tr><th>Command</th><th>Type</th><th>Effect</th></tr></thead><tbody>
        <tr><td><strong>TRUNCATE</strong></td><td>DDL</td><td>Removes all rows, keeps structure, cannot be rolled back</td></tr>
        <tr><td><strong>DELETE</strong></td><td>DML</td><td>Removes specific rows, can use WHERE, can be rolled back</td></tr>
        <tr><td><strong>DROP</strong></td><td>DDL</td><td>Removes entire table (structure + data)</td></tr>
        </tbody></table>

        <h2>🔹 Homework Exercise</h2>
        <ol>
        <li>Create table <strong>COURSES</strong>: COURSE_ID NUMBER (PK), COURSE_NAME VARCHAR2(50), HOURS NUMBER</li>
        <li>Insert 2 courses</li>
        <li>Add column PRICE NUMBER(6,2)</li>
        <li>Update PRICE for one course</li>
        <li>Delete one course</li>
        <li>Truncate table</li>
        <li>Drop table</li>
        </ol>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%203.pdf" target="_blank" class="pdf-link">Lab 3 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>أوامر DDL و DML</h2>
<p>DDL لتعريف الهيكل (CREATE, ALTER, DROP, TRUNCATE). DML لمعالجة البيانات (INSERT, UPDATE, DELETE, SELECT).</p>`
      }
    }
  ],

  summary: {
    points: [
      "DDL = Data Definition Language: CREATE, ALTER, DROP, TRUNCATE.",
      "DML = Data Manipulation Language: INSERT, UPDATE, DELETE, SELECT.",
      "CREATE TABLE defines a new table with columns and data types.",
      "ALTER TABLE ADD adds a column. ALTER TABLE DROP COLUMN removes one.",
      "INSERT INTO adds new rows. UPDATE SET modifies existing rows.",
      "DELETE FROM removes specific rows (can use WHERE, rollback possible).",
      "TRUNCATE removes all rows but keeps structure (no rollback).",
      "DROP TABLE removes the entire table (structure + data).",
      "SELECT * FROM retrieves all data from a table.",
      "Always check data with SELECT before and after TRUNCATE."
    ],
    pointsAr: ["DDL: تعريف الهيكل. DML: معالجة البيانات.", "TRUNCATE يحذف كل الصفوف. DELETE يحذف صفوف محددة."]
  },

  mcq: [
    { id: 'db-s3-q1', question: "Which SQL command creates a new table?", difficulty: 'easy', answers: [
      { id: 'a', text: "CREATE TABLE", isCorrect: true },
      { id: 'b', text: "SELECT TABLE", isCorrect: false },
      { id: 'c', text: "ALTER TABLE", isCorrect: false },
      { id: 'd', text: "INSERT TABLE", isCorrect: false }
    ]},
    { id: 'db-s3-q2', question: "To add a new column to an existing table, you use:", difficulty: 'easy', answers: [
      { id: 'a', text: "CREATE TABLE", isCorrect: false },
      { id: 'b', text: "ALTER TABLE ADD", isCorrect: true },
      { id: 'c', text: "UPDATE TABLE", isCorrect: false },
      { id: 'd', text: "INSERT INTO", isCorrect: false }
    ]},
    { id: 'db-s3-q3', question: "The key difference between TRUNCATE and DELETE is:", difficulty: 'medium', answers: [
      { id: 'a', text: "TRUNCATE removes specific rows, DELETE removes all", isCorrect: false },
      { id: 'b', text: "TRUNCATE removes all rows and cannot be rolled back; DELETE can use WHERE and be rolled back", isCorrect: true },
      { id: 'c', text: "They are exactly the same", isCorrect: false },
      { id: 'd', text: "DELETE removes the table structure", isCorrect: false }
    ]},
    { id: 'db-s3-q4', question: "DROP TABLE does what?", difficulty: 'easy', answers: [
      { id: 'a', text: "Removes only data", isCorrect: false },
      { id: 'b', text: "Removes only structure", isCorrect: false },
      { id: 'c', text: "Removes entire table (structure + data)", isCorrect: true },
      { id: 'd', text: "Renames the table", isCorrect: false }
    ]},
    { id: 'db-s3-q5', question: "To update Sara's GPA to 3.50 where ID=2:", difficulty: 'easy', answers: [
      { id: 'a', text: "CHANGE STUDENTS SET GPA = 3.50 WHERE ID = 2", isCorrect: false },
      { id: 'b', text: "UPDATE STUDENTS SET GPA = 3.50 WHERE ID = 2", isCorrect: true },
      { id: 'c', text: "ALTER STUDENTS SET GPA = 3.50 WHERE ID = 2", isCorrect: false },
      { id: 'd', text: "MODIFY STUDENTS GPA = 3.50 WHERE ID = 2", isCorrect: false }
    ]},
    { id: 'db-s3-q6', question: "DELETE FROM Students WHERE ID = 3 is a:", difficulty: 'easy', answers: [
      { id: 'a', text: "DDL command", isCorrect: false },
      { id: 'b', text: "DML command", isCorrect: true },
      { id: 'c', text: "DCL command", isCorrect: false },
      { id: 'd', text: "TCL command", isCorrect: false }
    ]},
    { id: 'db-s3-q7', question: "TRUNCATE is classified as:", difficulty: 'medium', answers: [
      { id: 'a', text: "DML", isCorrect: false },
      { id: 'b', text: "DDL", isCorrect: true },
      { id: 'c', text: "DCL", isCorrect: false },
      { id: 'd', text: "TCL", isCorrect: false }
    ]},
    { id: 'db-s3-q8', question: "To remove a column from a table:", difficulty: 'easy', answers: [
      { id: 'a', text: "ALTER TABLE t DROP COLUMN c", isCorrect: true },
      { id: 'b', text: "DELETE COLUMN c FROM t", isCorrect: false },
      { id: 'c', text: "REMOVE COLUMN c FROM t", isCorrect: false },
      { id: 'd', text: "DROP COLUMN c", isCorrect: false }
    ]},
    { id: 'db-s3-q9', question: "INSERT INTO Students VALUES (1, 'Ali', 20) adds:", difficulty: 'easy', answers: [
      { id: 'a', text: "A new column", isCorrect: false },
      { id: 'b', text: "A new row", isCorrect: true },
      { id: 'c', text: "A new table", isCorrect: false },
      { id: 'd', text: "A new database", isCorrect: false }
    ]},
    { id: 'db-s3-q10', question: "NUMBER(3,2) means:", difficulty: 'medium', answers: [
      { id: 'a', text: "3 digits total with 2 decimal places (e.g., 3.80)", isCorrect: true },
      { id: 'b', text: "3 whole digits and 2 extra digits", isCorrect: false },
      { id: 'c', text: "32 digits total", isCorrect: false },
      { id: 'd', text: "A number between 3 and 2", isCorrect: false }
    ]}
  ],
  written: []
};
