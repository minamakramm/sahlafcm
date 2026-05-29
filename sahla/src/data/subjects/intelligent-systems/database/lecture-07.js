export const LECTURE = {
  subjectId: 'database',
  number: 7,
  title: 'Lab 1: What is Database? & Oracle',
  titleAr: 'المختبر 1: ما هي قاعدة البيانات؟ وأوراكل',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 What is a Database?</h2>
        <p><strong>Database = Data + Base</strong> — the actual storage of all the information we are interested in.</p>
        <h3>Three Levels to View</h3>
        <ul>
        <li><strong>Level 1 — Literal meaning:</strong> The place where data is stored.</li>
        <li><strong>Level 2 — DBMS:</strong> Software package that manages data storage, access and maintenance (e.g., Oracle, MySQL, MS Access).</li>
        <li><strong>Level 3 — Database Application:</strong> Applications built upon stored data (websites, BI apps, ERP, etc.).</li>
        </ul>

        <h3>Database Properties</h3>
        <ul>
        <li>Represents some aspect of the <strong>real world</strong>.</li>
        <li>A <strong>logically coherent</strong> collection of data with inherent meaning.</li>
        <li>Designed, built and populated for a <strong>specific purpose</strong>.</li>
        <li>Can range from a few KB to <strong>terabytes</strong>.</li>
        </ul>

        <h2>🔹 Advantages of Databases</h2>
        <table class="styled-table"><thead><tr><th>Advantage</th><th>Description</th></tr></thead><tbody>
        <tr><td><span class="table-tag table-tag-emerald">Reduces Redundancy</span></td><td>Stores data centrally, each piece exists only once</td></tr>
        <tr><td><span class="table-tag table-tag-blue">Controls Inconsistency</span></td><td>Updates reflected consistently throughout all records</td></tr>
        <tr><td><span class="table-tag table-tag-violet">Facilitates Sharing</span></td><td>Multiple users and apps access same data simultaneously</td></tr>
        <tr><td><span class="table-tag table-tag-amber">Enforces Standards</span></td><td>Consistent naming conventions, formats and rules</td></tr>
        <tr><td><strong>Enhances Security</strong></td><td>User authentication, access controls, permission management</td></tr>
        <tr><td><strong>Maintains Integrity</strong></td><td>Accuracy via constraints (PK, FK) and referential integrity</td></tr>
        <tr><td><strong>Improves Performance</strong></td><td>Faster access through centralized management</td></tr>
        </tbody></table>

        <h2>🔹 Disadvantages of Databases</h2>
        <ul>
        <li><strong>Security Risks:</strong> Data breaches without strong access controls.</li>
        <li><strong>Integrity Challenges:</strong> If constraints not properly enforced.</li>
        <li><strong>High Hardware Requirements:</strong> Additional storage and powerful servers needed.</li>
        <li><strong>Performance Overhead:</strong> Complex queries and concurrent users slow performance.</li>
        <li><strong>System Complexity:</strong> Requires skilled administrators and developers.</li>
        </ul>

        <h2>🔹 Oracle Database 10g</h2>
        <p>Oracle Database 10g is an <strong>RDBMS</strong> developed by Oracle. It supports both:</p>
        <ul>
        <li><strong>Relational model (RDBMS)</strong> → tables, rows, columns</li>
        <li><strong>Object-Relational model (ORDBMS)</strong> → objects, complex data types</li>
        </ul>
        <p>Built around <strong>Grid Computing</strong> — resources work like a shared utility.</p>

        <h3>Oracle Main Components</h3>
        <table class="styled-table"><thead><tr><th>Component</th><th>Purpose</th></tr></thead><tbody>
        <tr><td><strong>Oracle Database 10g</strong></td><td>Stores enterprise data, uses SQL and PL/SQL</td></tr>
        <tr><td><strong>Application Server 10g</strong></td><td>Runs business apps, web portals, BI</td></tr>
        <tr><td><strong>Enterprise Manager 10g</strong></td><td>Manages/monitors databases and servers</td></tr>
        </tbody></table>

        <h3>Oracle Components Detail</h3>
        <ul>
        <li><strong>Instance:</strong> Manages memory (SGA, PGA) and processes.</li>
        <li><strong>Database:</strong> Physical files — data files, control files, redo logs.</li>
        <li><strong>Tablespaces:</strong> Logical units organizing data storage.</li>
        <li><strong>Schemas:</strong> Collections of objects (tables, views) owned by a user.</li>
        <li><strong>Data Dictionary:</strong> Stores metadata — user info, privileges, definitions.</li>
        <li><strong>Processes:</strong> DBWn (writes data), LGWR (logs), SMON (recovery), PMON (cleanup).</li>
        <li><strong>Redo Logs:</strong> Log changes for recovery.</li>
        <li><strong>Control Files:</strong> Track database structure.</li>
        <li><strong>Oracle Net:</strong> Client-server communication over network.</li>
        </ul>

        <h3>Oracle Editions</h3>
        <table class="styled-table"><thead><tr><th>Edition</th><th>Target</th></tr></thead><tbody>
        <tr><td><span class="table-tag table-tag-blue">Standard (SE)</span></td><td>Small to medium businesses</td></tr>
        <tr><td><span class="table-tag table-tag-violet">Enterprise (EE)</span></td><td>Large organizations (RAC, partitioning)</td></tr>
        <tr><td><span class="table-tag table-tag-amber">Express (XE)</span></td><td>Free — for students, developers, small projects</td></tr>
        <tr><td><span class="table-tag table-tag-emerald">Cloud</span></td><td>Cloud environments with scalability</td></tr>
        <tr><td><strong>Lite</strong></td><td>Mobile and embedded applications</td></tr>
        </tbody></table>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%201.pdf" target="_blank" class="pdf-link">Lab 1 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>ما هي قاعدة البيانات؟</h2>
<p>قاعدة البيانات = بيانات + قاعدة — المكان الذي يتم فيه تخزين المعلومات.</p>
<h3>ثلاثة مستويات</h3>
<ul>
<li><strong>المستوى 1:</strong> المعنى الحرفي — مكان تخزين البيانات.</li>
<li><strong>المستوى 2:</strong> نظام إدارة قواعد البيانات (DBMS).</li>
<li><strong>المستوى 3:</strong> تطبيقات قواعد البيانات.</li>
</ul>
<h3>أوراكل 10g</h3>
<p>نظام RDBMS يدعم النماذج العلائقية وكائنية التوجه، مبني على الحوسبة الشبكية.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Database = Data + Base — the storage of information we are interested in.",
      "3 Levels: Literal storage → DBMS software → Database Applications.",
      "DB Properties: represents real world, logically coherent, designed for specific purpose.",
      "Advantages: reduces redundancy, controls inconsistency, facilitates sharing, enforces standards, enhances security, maintains integrity.",
      "Disadvantages: security risks, integrity challenges, high hardware requirements, performance overhead, system complexity.",
      "Oracle 10g supports RDBMS (tables) and ORDBMS (objects). Built on Grid Computing.",
      "Main products: Oracle DB 10g, Application Server 10g, Enterprise Manager 10g.",
      "Components: Instance (SGA/PGA), Database (data files, control files, redo logs), Tablespaces, Schemas, Data Dictionary.",
      "Background processes: DBWn (write), LGWR (log), SMON (recovery), PMON (cleanup).",
      "Editions: SE (small/medium), EE (large/RAC), XE (free/students), Cloud, Lite (mobile)."
    ],
    pointsAr: [
      "قاعدة البيانات = بيانات + قاعدة.",
      "3 مستويات: التخزين → DBMS → التطبيقات.",
      "أوراكل يدعم RDBMS و ORDBMS.",
      "الإصدارات: SE, EE, XE (مجاني), Cloud, Lite."
    ]
  },

  mcq: [
    { id: 'db-s1-q1', question: "What does DBMS stand for?", difficulty: 'easy', answers: [
      { id: 'a', text: "Data Base Management System", isCorrect: true },
      { id: 'b', text: "Data Binary Management Software", isCorrect: false },
      { id: 'c', text: "Database Monitoring Service", isCorrect: false },
      { id: 'd', text: "Digital Base Management System", isCorrect: false }
    ]},
    { id: 'db-s1-q2', question: "Which Oracle edition is free for students and developers?", difficulty: 'easy', answers: [
      { id: 'a', text: "Enterprise Edition (EE)", isCorrect: false },
      { id: 'b', text: "Standard Edition (SE)", isCorrect: false },
      { id: 'c', text: "Express Edition (XE)", isCorrect: true },
      { id: 'd', text: "Cloud Edition", isCorrect: false }
    ]},
    { id: 'db-s1-q3', question: "Which is NOT an advantage of databases?", difficulty: 'medium', answers: [
      { id: 'a', text: "Reduces data redundancy", isCorrect: false },
      { id: 'b', text: "Eliminates the need for skilled administrators", isCorrect: true },
      { id: 'c', text: "Facilitates data sharing", isCorrect: false },
      { id: 'd', text: "Maintains data integrity", isCorrect: false }
    ]},
    { id: 'db-s1-q4', question: "Oracle 10g is built around which computing concept?", difficulty: 'easy', answers: [
      { id: 'a', text: "Cloud Computing", isCorrect: false },
      { id: 'b', text: "Grid Computing", isCorrect: true },
      { id: 'c', text: "Edge Computing", isCorrect: false },
      { id: 'd', text: "Quantum Computing", isCorrect: false }
    ]},
    { id: 'db-s1-q5', question: "The DBWR (DBWn) background process is responsible for:", difficulty: 'medium', answers: [
      { id: 'a', text: "Logging changes for recovery", isCorrect: false },
      { id: 'b', text: "Writing data from buffer cache to data files", isCorrect: true },
      { id: 'c', text: "System recovery after failures", isCorrect: false },
      { id: 'd', text: "Process cleanup", isCorrect: false }
    ]},
    { id: 'db-s1-q6', question: "Redo Logs in Oracle are used to:", difficulty: 'medium', answers: [
      { id: 'a', text: "Store metadata about tables", isCorrect: false },
      { id: 'b', text: "Log changes for database recovery after failures", isCorrect: true },
      { id: 'c', text: "Manage client-server communication", isCorrect: false },
      { id: 'd', text: "Organize data storage logically", isCorrect: false }
    ]},
    { id: 'db-s1-q7', question: "Which DBMS is an example of a personal-usage scope database?", difficulty: 'easy', answers: [
      { id: 'a', text: "Oracle", isCorrect: false },
      { id: 'b', text: "MS Access", isCorrect: true },
      { id: 'c', text: "MySQL", isCorrect: false },
      { id: 'd', text: "MS SQL Server", isCorrect: false }
    ]},
    { id: 'db-s1-q8', question: "Oracle Enterprise Edition is ideal for:", difficulty: 'easy', answers: [
      { id: 'a', text: "Mobile and embedded applications", isCorrect: false },
      { id: 'b', text: "Large organizations needing RAC and partitioning", isCorrect: true },
      { id: 'c', text: "Student projects only", isCorrect: false },
      { id: 'd', text: "Small personal databases", isCorrect: false }
    ]},
    { id: 'db-s1-q9', question: "A Schema in Oracle is:", difficulty: 'medium', answers: [
      { id: 'a', text: "A physical file on disk", isCorrect: false },
      { id: 'b', text: "A collection of database objects owned by a specific user", isCorrect: true },
      { id: 'c', text: "A type of SQL command", isCorrect: false },
      { id: 'd', text: "A network protocol", isCorrect: false }
    ]},
    { id: 'db-s1-q10', question: "A database can range in size from:", difficulty: 'easy', answers: [
      { id: 'a', text: "Only a few bytes", isCorrect: false },
      { id: 'b', text: "A few KB to terabytes", isCorrect: true },
      { id: 'c', text: "Exactly 1 GB only", isCorrect: false },
      { id: 'd', text: "Must be at least 100 MB", isCorrect: false }
    ]}
  ],
  written: []
};
