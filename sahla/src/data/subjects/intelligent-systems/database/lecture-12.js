export const LECTURE = {
  subjectId: 'database',
  number: 12,
  title: 'Lab 6: Aggregation & Grouping',
  titleAr: 'المختبر 6: التجميع والتحليل',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Aggregate Functions</h2>
        <p>Aggregate functions perform a calculation on a set of values and return a <strong>single value</strong> summarizing the set.</p>

        <table class="styled-table"><thead><tr><th>Function</th><th>Usage</th></tr></thead><tbody>
        <tr><td><span class="table-tag table-tag-emerald">COUNT()</span></td><td>Counts the number of rows or non-null values.</td></tr>
        <tr><td><span class="table-tag table-tag-blue">SUM()</span></td><td>Calculates the total sum of a numeric column.</td></tr>
        <tr><td><span class="table-tag table-tag-violet">AVG()</span></td><td>Calculates the average value of a numeric column.</td></tr>
        <tr><td><span class="table-tag table-tag-amber">MAX()</span></td><td>Returns the largest value.</td></tr>
        <tr><td><strong>MIN()</strong></td><td>Returns the smallest value.</td></tr>
        </tbody></table>

        <h3>Examples</h3>
        <div class="code-block"><span class="comment">-- Count total products</span>
<span class="keyword">SELECT</span> COUNT(*) <span class="keyword">FROM</span> Product;

<span class="comment">-- Find avg price of all products</span>
<span class="keyword">SELECT</span> AVG(Price) <span class="keyword">FROM</span> Product;

<span class="comment">-- Total price of high-end products</span>
<span class="keyword">SELECT</span> SUM(Price) <span class="keyword">FROM</span> Product <span class="keyword">WHERE</span> Price > <span class="number">2000</span>;</div>

        <h2>🔹 String Functions</h2>
        <p>Used to manipulate text data during retrieval.</p>
        <div class="code-block"><span class="comment">-- Uppercase names</span>
<span class="keyword">SELECT</span> UPPER(supplier_name) <span class="keyword">FROM</span> Supplier;

<span class="comment">-- Lowercase names</span>
<span class="keyword">SELECT</span> LOWER(supplier_name) <span class="keyword">FROM</span> Supplier;</div>

        <h2>🔹 Grouping Results (GROUP BY)</h2>
        <p>The <code>GROUP BY</code> statement groups rows that have the same values into summary rows.</p>

        <h3>Examples</h3>
        <div class="code-block"><span class="comment">-- Average price for Each supplier</span>
<span class="keyword">SELECT</span> supplier_id, AVG(Price) 
<span class="keyword">FROM</span> Product 
<span class="keyword">GROUP BY</span> supplier_id;

<span class="comment">-- Count products per supplier</span>
<span class="keyword">SELECT</span> supplier_id, COUNT(product_id) 
<span class="keyword">FROM</span> Product 
<span class="keyword">GROUP BY</span> supplier_id;</div>

        <h2>🔹 Conditional Grouping (HAVING)</h2>
        <p>The <code>HAVING</code> clause is used instead of <code>WHERE</code> when filtering based on <strong>aggregate</strong> results.</p>
        <div class="code-block"><span class="comment">-- Suppliers with more than one product</span>
<span class="keyword">SELECT</span> supplier_id, COUNT(product_id) 
<span class="keyword">FROM</span> Product 
<span class="keyword">GROUP BY</span> supplier_id
<span class="keyword">HAVING</span> COUNT(product_id) > <span class="number">1</span>;

<span class="comment">-- Suppliers with avg price > 1000</span>
<span class="keyword">SELECT</span> supplier_id, AVG(Price)
<span class="keyword">FROM</span> Product
<span class="keyword">GROUP BY</span> supplier_id
<span class="keyword">HAVING</span> AVG(Price) > <span class="number">1000</span>;</div>

        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/database/sections/Lab%206.pdf" target="_blank" class="pdf-link">Lab 6 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>الدوال التجميعية (Aggregate Functions)</h2>
<p>تقوم بإجراء عمليات حسابية على مجموعة من القيم لإرجاع قيمة ملخصة واحدة (COUNT, SUM, AVG, MIN, MAX).</p>
<h2>تجميع النتائج (GROUP BY)</h2>
<p>تُستخدم لتجميع الصفوف التي لها نفس القيم في صفوف تلخيصية، مع ميزة HAVING لتصفية المجموعات.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Aggregate functions summarize data into a single value.",
      "COUNT(*) counts all rows; COUNT(column) counts non-null values.",
      "SUM, AVG, MIN, and MAX work on numeric data sets.",
      "UPPER and LOWER transform text case.",
      "GROUP BY clusters rows based on one or more columns.",
      "Any column in the SELECT that is not an aggregate MUST be in the GROUP BY clause.",
      "HAVING filters groups after they are formed (uses aggregate functions).",
      "WHERE filters individual rows BEFORE grouping.",
      "Example: COUNT(products) per dept where total > 5.",
      "Grouping can be used with JOINs to analyze multi-table data (e.g., student name and their avg grade)."
    ],
    pointsAr: ["الدوال التجميعية تعتمد على قيم متعددة لإرجاع قيمة واحدة.", "HAVING تُستخدم لتصفية النتائج بعد التجميع."]
  },

  mcq: [
    { id: 'db-s6-q1', question: "Which function returns the total number of rows in a table?", difficulty: 'easy', answers: [
      { id: 'a', text: "SUM()", isCorrect: false },
      { id: 'b', text: "TOTAL()", isCorrect: false },
      { id: 'c', text: "COUNT()", isCorrect: true },
      { id: 'd', text: "MAX()", isCorrect: false }
    ]},
    { id: 'db-s6-q2', question: "Which clause is used to filter results based on an aggregate function?", difficulty: 'medium', answers: [
      { id: 'a', text: "WHERE", isCorrect: false },
      { id: 'b', text: "ORDER BY", isCorrect: false },
      { id: 'c', text: "HAVING", isCorrect: true },
      { id: 'd', text: "GROUP BY", isCorrect: false }
    ]},
    { id: 'db-s6-q3', question: "To find the average salary for each department, you need:", difficulty: 'easy', answers: [
      { id: 'a', text: "SELECT AVG(salary) FROM employees GROUP BY dept_id", isCorrect: true },
      { id: 'b', text: "SELECT AVG(salary) FROM employees HAVING dept_id", isCorrect: false },
      { id: 'c', text: "SELECT SUM(salary)/COUNT(id) FROM employees", isCorrect: false },
      { id: 'd', text: "SELECT salary FROM employees GROUP BY AVG", isCorrect: false }
    ]},
    { id: 'db-s6-q4', question: "WHERE filter is applied _____ the grouping occurs.", difficulty: 'medium', answers: [
      { id: 'a', text: "After", isCorrect: false },
      { id: 'b', text: "Before", isCorrect: true },
      { id: 'c', text: "Simultaneously with", isCorrect: false },
      { id: 'd', text: "Only if HAVING is absent", isCorrect: false }
    ]},
    { id: 'db-s6-q5', question: "Which function converts 'apple' to 'APPLE'?", difficulty: 'easy', answers: [
      { id: 'a', text: "UPPER()", isCorrect: true },
      { id: 'b', text: "LOWER()", isCorrect: false },
      { id: 'c', text: "INITCAP()", isCorrect: false },
      { id: 'd', text: "BIG()", isCorrect: false }
    ]},
    { id: 'db-s6-q6', question: "The COUNT(column_name) function ignores:", difficulty: 'medium', answers: [
      { id: 'a', text: "Zero values", isCorrect: false },
      { id: 'b', text: "NULL values", isCorrect: true },
      { id: 'c', text: "Negative values", isCorrect: false },
      { id: 'd', text: "Duplicate values", isCorrect: false }
    ]},
    { id: 'db-s6-q7', question: "To find suppliers who provide more than 2 products, use:", difficulty: 'medium', answers: [
      { id: 'a', text: "WHERE COUNT(p_id) > 2", isCorrect: false },
      { id: 'b', text: "GROUP BY s_id HAVING COUNT(p_id) > 2", isCorrect: true },
      { id: 'c', text: "ORDER BY p_id > 2", isCorrect: false },
      { id: 'd', text: "GROUP BY s_id WHERE COUNT(p_id) > 2", isCorrect: false }
    ]},
    { id: 'db-s6-q8', question: "Which function will find the highest price in the product list?", difficulty: 'easy', answers: [
      { id: 'a', text: "MIN()", isCorrect: false },
      { id: 'b', text: "MAX()", isCorrect: true },
      { id: 'c', text: "TOP()", isCorrect: false },
      { id: 'd', text: "LIMIT()", isCorrect: false }
    ]},
    { id: 'db-s6-q9', question: "Aggregate functions return _____ per group of rows.", difficulty: 'easy', answers: [
      { id: 'a', text: "Multiple values", isCorrect: false },
      { id: 'b', text: "Zero values", isCorrect: false },
      { id: 'c', text: "A single value", isCorrect: true },
      { id: 'd', text: "A new table", isCorrect: false }
    ]},
    { id: 'db-s6-q10', question: "To find the total number of students in Each course from an Enrollment table:", difficulty: 'medium', answers: [
      { id: 'a', text: "SELECT course_id, COUNT(student_id) FROM Enrollment GROUP BY course_id", isCorrect: true },
      { id: 'b', text: "SELECT COUNT(student_id) FROM Enrollment", isCorrect: false },
      { id: 'c', text: "SELECT course_id FROM Enrollment GROUP BY student_id", isCorrect: false },
      { id: 'd', text: "SELECT student_id, course_id FROM Enrollment", isCorrect: false }
    ]}
  ],
  written: []
};
