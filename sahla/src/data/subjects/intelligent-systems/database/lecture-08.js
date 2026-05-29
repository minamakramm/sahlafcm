export const LECTURE = {
  subjectId: 'database',
  number: 8,
  title: 'Lab 2: SQL Fundamentals & Data Types',
  titleAr: 'المختبر 2: أساسيات SQL وأنواع البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 SQL (Structured Query Language)</h2>
        <p>SQL is the standard programming language used to <strong>manage and manipulate relational databases</strong>. Operations include querying data, updating records, creating/modifying structures, and controlling access.</p>

        <h3>Basic Concepts</h3>
        <table class="styled-table"><thead><tr><th>Concept</th><th>Definition</th></tr></thead><tbody>
        <tr><td><strong>Database</strong></td><td>A structured collection of data stored electronically</td></tr>
        <tr><td><strong>Table</strong></td><td>A collection of rows and columns within a database</td></tr>
        <tr><td><strong>Row (Record)</strong></td><td>A single entry in a table</td></tr>
        <tr><td><strong>Column (Field)</strong></td><td>A single attribute or property of data</td></tr>
        <tr><td><strong>Primary Key</strong></td><td>A unique identifier for each row in a table</td></tr>
        <tr><td><strong>Foreign Key</strong></td><td>A column that creates a link between two tables</td></tr>
        </tbody></table>

        <h2>🔹 Naming Rules</h2>
        <ul>
        <li>Must <strong>begin with a letter</strong></li>
        <li>Must be <strong>1–30 characters</strong> long</li>
        <li>Must contain only <code>A–Z, a–z, 0–9, _, $, #</code></li>
        <li>Must <strong>not duplicate</strong> another object owned by the same user</li>
        <li>Must <strong>not be an Oracle reserved word</strong></li>
        </ul>

        <h2>🔹 SQL Data Types</h2>
        <table class="styled-table"><thead><tr><th>Data Type</th><th>Description</th></tr></thead><tbody>
        <tr><td><span class="table-tag table-tag-blue">VARCHAR2(size)</span></td><td>Variable-length character data</td></tr>
        <tr><td><span class="table-tag table-tag-violet">CHAR(size)</span></td><td>Fixed-length character data</td></tr>
        <tr><td><span class="table-tag table-tag-amber">NUMBER(p,s)</span></td><td>Variable-length numeric data</td></tr>
        <tr><td><span class="table-tag table-tag-emerald">DATE</span></td><td>Date and time values</td></tr>
        <tr><td><strong>LONG</strong></td><td>Variable-length character data (up to 2 GB)</td></tr>
        <tr><td><strong>CLOB</strong></td><td>Character data up to 4 GB</td></tr>
        <tr><td><strong>RAW / LONG RAW</strong></td><td>Raw binary data</td></tr>
        <tr><td><strong>BLOB</strong></td><td>Binary data (up to 4 GB)</td></tr>
        <tr><td><strong>BFILE</strong></td><td>Binary data stored in external file (up to 4 GB)</td></tr>
        <tr><td><strong>ROWID</strong></td><td>Base-64 number representing unique row address</td></tr>
        </tbody></table>

        <h3>Datetime Data Types</h3>
        <table class="styled-table"><thead><tr><th>Data Type</th><th>Description</th></tr></thead><tbody>
        <tr><td><strong>TIMESTAMP</strong></td><td>Date with fractional seconds</td></tr>
        <tr><td><strong>INTERVAL YEAR TO MONTH</strong></td><td>Interval of years and months</td></tr>
        <tr><td><strong>INTERVAL DAY TO SECOND</strong></td><td>Interval of days, hours, minutes, seconds</td></tr>
        </tbody></table>

        <h2>🔹 Common SQL Functions</h2>
        <ul>
        <li><strong>Aggregate:</strong> <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, <code>MAX()</code></li>
        <li><strong>String:</strong> <code>UPPER()</code>, <code>LOWER()</code>, <code>CONCAT()</code>, <code>SUBSTRING()</code></li>
        <li><strong>Date:</strong> <code>NOW()</code>, <code>CURDATE()</code>, <code>DATEDIFF()</code></li>
        </ul>

        <h2>🔹 Exercise: Create & Insert</h2>
        <div class="code-block"><span class="keyword">CREATE TABLE</span> Students (
    StudentID <span class="number">NUMBER</span> <span class="keyword">PRIMARY KEY</span>,
    FirstName <span class="string">VARCHAR2(50)</span>,
    LastName <span class="string">VARCHAR2(50)</span>,
    Age <span class="number">NUMBER</span>,
    Major <span class="string">VARCHAR2(50)</span>
);

<span class="keyword">INSERT INTO</span> Students <span class="keyword">VALUES</span> (1, <span class="string">'Ali'</span>, <span class="string">'Omar'</span>, 20, <span class="string">'Computer'</span>);
<span class="keyword">INSERT INTO</span> Students <span class="keyword">VALUES</span> (2, <span class="string">'Sara'</span>, <span class="string">'Ahmed'</span>, 22, <span class="string">'Math'</span>);
<span class="keyword">INSERT INTO</span> Students <span class="keyword">VALUES</span> (3, <span class="string">'Rami'</span>, <span class="string">'Khalid'</span>, 21, <span class="string">'Physics'</span>);</div>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%202.pdf" target="_blank" class="pdf-link">Lab 2 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>لغة SQL</h2>
<p>لغة الاستعلام الهيكلية — اللغة القياسية لإدارة قواعد البيانات العلائقية.</p>
<h3>أنواع البيانات</h3>
<ul>
<li><strong>VARCHAR2:</strong> نص متغير الطول.</li>
<li><strong>CHAR:</strong> نص ثابت الطول.</li>
<li><strong>NUMBER:</strong> بيانات رقمية.</li>
<li><strong>DATE:</strong> التاريخ والوقت.</li>
</ul>`
      }
    }
  ],

  summary: {
    points: [
      "SQL = Structured Query Language — standard for managing relational databases.",
      "Basic concepts: Database, Table, Row (Record), Column (Field), PK, FK.",
      "Naming rules: begin with letter, 1-30 chars, A-Z/a-z/0-9/_/$/#, no reserved words.",
      "VARCHAR2(size) = variable-length text. CHAR(size) = fixed-length text (padded with spaces).",
      "NUMBER(p,s) = numeric. DATE = date/time. LONG = up to 2 GB text.",
      "CLOB = character data up to 4 GB. BLOB = binary data up to 4 GB.",
      "TIMESTAMP = date with fractional seconds.",
      "Aggregate functions: COUNT, SUM, AVG, MIN, MAX.",
      "String functions: UPPER, LOWER, CONCAT, SUBSTRING.",
      "Date functions: NOW, CURDATE, DATEDIFF."
    ],
    pointsAr: ["SQL هي اللغة المعيارية لإدارة قواعد البيانات.", "VARCHAR2 نص متغير، CHAR نص ثابت، NUMBER رقمي."]
  },

  mcq: [
    { id: 'db-s2-q1', question: "VARCHAR2(50) means:", difficulty: 'easy', answers: [
      { id: 'a', text: "Fixed-length field of exactly 50 characters", isCorrect: false },
      { id: 'b', text: "Variable-length character field up to 50 characters", isCorrect: true },
      { id: 'c', text: "Numeric field with 50 digits", isCorrect: false },
      { id: 'd', text: "Date spanning 50 days", isCorrect: false }
    ]},
    { id: 'db-s2-q2', question: "Table names in Oracle must:", difficulty: 'easy', answers: [
      { id: 'a', text: "Begin with a letter and be 1-30 characters", isCorrect: true },
      { id: 'b', text: "Start with a number", isCorrect: false },
      { id: 'c', text: "Contain spaces", isCorrect: false },
      { id: 'd', text: "Include 'table' in the name", isCorrect: false }
    ]},
    { id: 'db-s2-q3', question: "CLOB data type can store up to:", difficulty: 'easy', answers: [
      { id: 'a', text: "2 MB", isCorrect: false },
      { id: 'b', text: "256 MB", isCorrect: false },
      { id: 'c', text: "4 GB", isCorrect: true },
      { id: 'd', text: "1 TB", isCorrect: false }
    ]},
    { id: 'db-s2-q4', question: "A Primary Key uniquely identifies:", difficulty: 'easy', answers: [
      { id: 'a', text: "A column in a table", isCorrect: false },
      { id: 'b', text: "Each row in a table", isCorrect: true },
      { id: 'c', text: "A database", isCorrect: false },
      { id: 'd', text: "An index", isCorrect: false }
    ]},
    { id: 'db-s2-q5', question: "The TIMESTAMP data type stores:", difficulty: 'medium', answers: [
      { id: 'a', text: "Date only without time", isCorrect: false },
      { id: 'b', text: "Date with fractional seconds", isCorrect: true },
      { id: 'c', text: "Binary data", isCorrect: false },
      { id: 'd', text: "Character data", isCorrect: false }
    ]},
    { id: 'db-s2-q6', question: "Which is NOT an allowed character in Oracle table names?", difficulty: 'medium', answers: [
      { id: 'a', text: "_ (underscore)", isCorrect: false },
      { id: 'b', text: "$ (dollar sign)", isCorrect: false },
      { id: 'c', text: "@ (at sign)", isCorrect: true },
      { id: 'd', text: "# (hash)", isCorrect: false }
    ]},
    { id: 'db-s2-q7', question: "A Foreign Key creates a link between:", difficulty: 'easy', answers: [
      { id: 'a', text: "A table and an external file", isCorrect: false },
      { id: 'b', text: "Two tables", isCorrect: true },
      { id: 'c', text: "Two databases", isCorrect: false },
      { id: 'd', text: "A table and an index", isCorrect: false }
    ]},
    { id: 'db-s2-q8', question: "The LONG data type supports character data up to:", difficulty: 'medium', answers: [
      { id: 'a', text: "4 GB", isCorrect: false },
      { id: 'b', text: "2 GB", isCorrect: true },
      { id: 'c', text: "1 GB", isCorrect: false },
      { id: 'd', text: "256 MB", isCorrect: false }
    ]},
    { id: 'db-s2-q9', question: "ROWID in Oracle represents:", difficulty: 'medium', answers: [
      { id: 'a', text: "The row count", isCorrect: false },
      { id: 'b', text: "A base-64 number for the unique address of a row", isCorrect: true },
      { id: 'c', text: "The primary key value", isCorrect: false },
      { id: 'd', text: "A foreign key reference", isCorrect: false }
    ]},
    { id: 'db-s2-q10', question: "The BFILE data type stores binary data in:", difficulty: 'medium', answers: [
      { id: 'a', text: "Inside the database table", isCorrect: false },
      { id: 'b', text: "An external file (up to 4 GB)", isCorrect: true },
      { id: 'c', text: "Memory only", isCorrect: false },
      { id: 'd', text: "Redo logs", isCorrect: false }
    ]}
  ],
  written: []
};