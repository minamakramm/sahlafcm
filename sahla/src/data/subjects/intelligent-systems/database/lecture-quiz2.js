export const LECTURE = {
  subjectId: 'database',
  number: 'quiz2',
  title: 'Quiz 2 Prep: SQL JOINs & Aggregations',
  titleAr: 'اختبار 2: الربط والدوال التجميعية',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <div class="callout callout-info">
          <span>📚 <strong>Quiz Preparation Guide:</strong> Learn through examples, see the results, and then test your knowledge!</span>
        </div>

        <h2>📦 Our Data Setup</h2>
        <div class="grid-2">
          <div>
            <h3>🏭 Supplier Table</h3>
            <table class="styled-table">
              <thead><tr><th>supplier_id</th><th>supplier_name</th></tr></thead>
              <tbody>
                <tr><td>100</td><td>IBM</td></tr>
                <tr><td>200</td><td>HP</td></tr>
                <tr><td>300</td><td>Microsoft</td></tr>
                <tr><td>400</td><td>Apple</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>📦 Product Table</h3>
            <table class="styled-table">
              <thead><tr><th>id</th><th>name</th><th>sup_id</th><th>price</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>IPAD2</td><td>400</td><td>2400</td></tr>
                <tr><td>2</td><td>IPHONE 4s</td><td>400</td><td>2500</td></tr>
                <tr><td>3</td><td>MS Office</td><td>300</td><td>1600</td></tr>
                <tr><td>4</td><td>Printer</td><td>100</td><td>1500</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <section class="topic-section">
          <h2>🔨 1. Create & Insert</h2>
          
          <div class="step-card">
            <div class="step-header">1. Create Tables: Supplier & Product</div>
            <p>We use <strong>CREATE TABLE</strong> to define a table's structure. <strong>PRIMARY KEY</strong> uniquely identifies each row. <strong>NOT NULL</strong> means the column can't be empty.</p>
            <div class="code-block">
<span class="keyword">CREATE TABLE</span> <span class="table">Supplier</span> (
  supplier_id    <span class="number">NUMBER</span> <span class="keyword">PRIMARY KEY</span>,
  supplier_name  <span class="string">VARCHAR2(50)</span> <span class="keyword">NOT NULL</span>
);

<span class="keyword">CREATE TABLE</span> <span class="table">Product</span> (
  id             <span class="number">NUMBER</span>,
  name           <span class="string">VARCHAR2(50)</span> <span class="keyword">NOT NULL</span>,
  supplier_id    <span class="number">NUMBER</span>,
  Price          <span class="number">NUMBER</span>
);</div>
            <div class="tip">💡 <strong>supplier_id</strong> in Product is a FOREIGN KEY that references Supplier — it links the two tables together!</div>
          </div>

          <div class="step-card">
            <div class="step-header">2. Insert Data into Both Tables</div>
            <p><strong>INSERT INTO</strong> adds rows. Order of values must match column order.</p>
            <div class="code-block">
<span class="comment">-- Insert Suppliers</span>
<span class="keyword">INSERT INTO</span> Supplier <span class="keyword">VALUES</span> (100, <span class="string">'IBM'</span>);
<span class="keyword">INSERT INTO</span> Supplier <span class="keyword">VALUES</span> (200, <span class="string">'HP'</span>);
<span class="keyword">INSERT INTO</span> Supplier <span class="keyword">VALUES</span> (300, <span class="string">'Microsoft'</span>);
<span class="keyword">INSERT INTO</span> Supplier <span class="keyword">VALUES</span> (400, <span class="string">'Apple'</span>);

<span class="comment">-- Insert Products</span>
<span class="keyword">INSERT INTO</span> Product <span class="keyword">VALUES</span> (1, <span class="string">'IPAD2'</span>, 400, 2400);
<span class="keyword">INSERT INTO</span> Product <span class="keyword">VALUES</span> (2, <span class="string">'IPHONE 4s'</span>, 400, 2500);</div>
          </div>
        </section>

        <section class="topic-section">
          <h2>🔗 2. SQL JOINs</h2>
          
          <div class="step-card">
            <div class="step-header">3. JOIN using ON keyword</div>
            <p><strong>JOIN ... ON</strong> combines rows where the condition matches. Modern, explicit standard.</p>
            <div class="code-block">
<span class="keyword">SELECT</span> s.supplier_name, p.name, p.Price
<span class="keyword">FROM</span> <span class="table">Supplier</span> s
<span class="keyword">JOIN</span> <span class="table">Product</span> p <span class="keyword">ON</span> s.supplier_id = p.supplier_id;</div>
            <h4>📊 Result Data:</h4>
            <table class="styled-table">
              <thead><tr><th>supplier_name</th><th>product_name</th><th>price</th></tr></thead>
              <tbody>
                <tr><td>Apple</td><td>IPAD2</td><td>2400</td></tr>
                <tr><td>Apple</td><td>IPHONE 4s</td><td>2500</td></tr>
                <tr><td>Microsoft</td><td>MS Office</td><td>1600</td></tr>
                <tr><td>IBM</td><td>Printer</td><td>1500</td></tr>
              </tbody>
            </table>
            <div class="tip">💡 <strong>s</strong> and <strong>p</strong> are table aliases. HP doesn't appear because it has no products!</div>
          </div>

          <div class="step-card">
            <div class="step-header">4. JOIN using WHERE (Old-style)</div>
            <p>Implicit join using comma in FROM. Produces same result as JOIN ON.</p>
            <div class="code-block">
<span class="keyword">SELECT</span> s.supplier_name, p.name, p.Price
<span class="keyword">FROM</span> <span class="table">Supplier</span> s, <span class="table">Product</span> p
<span class="keyword">WHERE</span> s.supplier_id = p.supplier_id;</div>
          </div>

          <div class="step-card">
            <div class="step-header">5. JOIN + Filter: Price > 1000</div>
            <div class="code-block">
<span class="keyword">SELECT</span> s.supplier_name, p.name, p.Price
<span class="keyword">FROM</span> Supplier s, Product p
<span class="keyword">WHERE</span> s.supplier_id = p.supplier_id
  <span class="keyword">AND</span> p.Price > <span class="number">1000</span>;</div>
          </div>
        </section>

        <section class="topic-section">
          <h2>🧮 3. Aggregate Functions</h2>
          <div class="tip">Functions that return a single summary value: <strong>COUNT, SUM, AVG, MAX, MIN</strong>.</div>

          <div class="step-card">
            <div class="step-header">7. COUNT — Total Products</div>
            <div class="code-block"><span class="keyword">SELECT</span> <span class="function">COUNT</span>(*) <span class="keyword">FROM</span> Product;</div>
            <table class="styled-table"><thead><tr><th>COUNT(*)</th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>
          </div>

          <div class="step-card">
            <div class="step-header">8. AVG — Average Price</div>
            <p>(2400 + 2500 + 1600 + 1500) / 4 = 2000</p>
            <div class="code-block"><span class="keyword">SELECT</span> <span class="function">AVG</span>(Price) <span class="keyword">FROM</span> Product;</div>
          </div>

          <div class="step-card">
            <div class="step-header">9. MAX & MIN — Range</div>
            <div class="code-block"><span class="keyword">SELECT</span> <span class="function">MAX</span>(Price), <span class="function">MIN</span>(Price) <span class="keyword">FROM</span> Product;</div>
          </div>
        </section>

        <section class="topic-section">
          <h2>📊 4. GROUP BY & HAVING</h2>
          
          <div class="step-card">
            <div class="step-header">14. COUNT per supplier_id</div>
            <p>Groups products by supplier then counts each group.</p>
            <div class="code-block">
<span class="keyword">SELECT</span> supplier_id, <span class="function">COUNT</span>(*)
<span class="keyword">FROM</span> Product
<span class="keyword">GROUP BY</span> supplier_id;</div>
            <table class="styled-table">
              <thead><tr><th>supplier_id</th><th>COUNT</th></tr></thead>
              <tbody>
                <tr><td>400</td><td>2</td></tr>
                <tr><td>300</td><td>1</td></tr>
                <tr><td>100</td><td>1</td></tr>
              </tbody>
            </table>
          </div>

          <div class="step-card">
            <div class="step-header">15. HAVING — Filter Groups</div>
            <p>Only show suppliers with 2+ products.</p>
            <div class="code-block">
<span class="keyword">SELECT</span> supplier_id, <span class="function">COUNT</span>(*)
<span class="keyword">FROM</span> Product
<span class="keyword">GROUP BY</span> supplier_id
<span class="keyword">HAVING</span> <span class="function">COUNT</span>(*) >= <span class="number">2</span>;</div>
          </div>
        </section>
        `,
        bodyAr: `
        <h2>تحضير الاختبار: SQL JOINs و Aggregations</h2>
        <p>تعلم من خلال الأمثلة العملية، اطلع على النتائج، ثم اختبر نفسك.</p>
        <h3>العناوين الرئيسية:</h3>
        <ul>
        <li><strong>JOIN:</strong> دمج الجداول بناءً على الحقول المشتركة.</li>
        <li><strong>Aggregates:</strong> دوال التلخيص مثل COUNT و AVG.</li>
        <li><strong>GROUP BY:</strong> تجميع البيانات لحساب النتائج لكل فئة.</li>
        <li><strong>HAVING:</strong> تصفية المجموعات الناتجة عن GROUP BY.</li>
        </ul>
        `
      }
    }
  ],

  summary: {
    points: [
      "JOIN combines rows from multiple tables using common keys.",
      "JOIN ... ON is the explicit modern syntax; comma in FROM is implicit.",
      "Aggregate functions (COUNT, SUM, AVG, MAX, MIN) work on sets of values.",
      "GROUP BY clusters rows together to apply aggregates per group.",
      "WHERE filters individual rows; HAVING filters aggregated groups.",
      "The order of execution is: WHERE -> GROUP BY -> HAVING.",
      "Aliases (s, p) make queries shorter and resolve ambiguity.",
      "UPPER and LOWER shift text case for standardization.",
      "PRIMARY KEY ensures row uniqueness; FOREIGN KEY links tables.",
      "A table without a match in a join (like HP in our data) is omitted in an INNER JOIN."
    ],
    pointsAr: [
      "تستخدم JOIN لدمج البيانات من جداول مختلفة.",
      "الدوال التجميعية تعطي قيمة واحدة ملخصة لمجموعة بيانات.",
      "تستخدم HAVING لتصفية النتائج بعد عملية التجميع (GROUP BY)."
    ]
  },

  mcq: [
    {
      id: 'db-q2-01',
      question: "Which SQL keyword is used to combine rows from two tables based on a related column?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'MERGE', isCorrect: false },
        { id: 'b', text: 'JOIN', isCorrect: true },
        { id: 'c', text: 'COMBINE', isCorrect: false },
        { id: 'd', text: 'LINK', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-02',
      question: "What is the correct syntax to join Supplier and Product tables?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'SELECT * FROM Supplier COMBINE Product ON Supplier.id = Product.id', isCorrect: false },
        { id: 'b', text: 'SELECT * FROM Supplier JOIN Product ON Supplier.supplier_id = Product.supplier_id', isCorrect: true },
        { id: 'c', text: 'SELECT * FROM Supplier, Product WHERE Supplier.id', isCorrect: false },
        { id: 'd', text: 'SELECT * FROM Supplier INNER Product WHERE id = id', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-03',
      question: "In our sample data (IBM, HP, Microsoft, Apple), which supplier does NOT appear in the Product table?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IBM', isCorrect: false },
        { id: 'b', text: 'Apple', isCorrect: false },
        { id: 'c', text: 'HP', isCorrect: true },
        { id: 'd', text: 'Microsoft', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-04',
      question: "What does COUNT(*) return?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Sum of all values', isCorrect: false },
        { id: 'b', text: 'Number of rows', isCorrect: true },
        { id: 'c', text: 'Average value', isCorrect: false },
        { id: 'd', text: 'Maximum value', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-05',
      question: "What is the average price of ALL products? (2400+2500+1600+1500) / 4",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '1800', isCorrect: false },
        { id: 'b', text: '2000', isCorrect: true },
        { id: 'c', text: '2250', isCorrect: false },
        { id: 'd', text: '1950', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-06',
      question: "Which function finds the most expensive product?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'TOP(Price)', isCorrect: false },
        { id: 'b', text: 'MAX(Price)', isCorrect: true },
        { id: 'c', text: 'HIGHEST(Price)', isCorrect: false },
        { id: 'd', text: 'LIMIT(Price)', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-07',
      question: "What is the SUM of all product prices in our data?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '7000', isCorrect: false },
        { id: 'b', text: '8000', isCorrect: true },
        { id: 'c', text: '6000', isCorrect: false },
        { id: 'd', text: '9000', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-08',
      question: "What does UPPER('apple') return?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'apple', isCorrect: false },
        { id: 'b', text: 'Apple', isCorrect: false },
        { id: 'c', text: 'APPLE', isCorrect: true },
        { id: 'd', text: 'Error', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-09',
      question: "What is the difference between WHERE and HAVING?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'They are exactly the same', isCorrect: false },
        { id: 'b', text: 'WHERE filters rows before grouping; HAVING filters groups after grouping', isCorrect: true },
        { id: 'c', text: 'HAVING filters before grouping; WHERE filters after grouping', isCorrect: false },
        { id: 'd', text: 'WHERE works only with JOIN; HAVING works without JOIN', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-10',
      question: "Which supplier has more than 1 product in our data?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IBM', isCorrect: false },
        { id: 'b', text: 'HP', isCorrect: false },
        { id: 'c', text: 'Microsoft', isCorrect: false },
        { id: 'd', text: 'Apple', isCorrect: true }
      ]
    },
    {
      id: 'db-q2-11',
      question: "What does this query return?\nSELECT SUM(Price) FROM Product WHERE Price > 2000;",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '8000', isCorrect: false },
        { id: 'b', text: '4900', isCorrect: true },
        { id: 'c', text: '5000', isCorrect: false },
        { id: 'd', text: '2000', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-12',
      question: "To count products per supplier and show only suppliers with ≥ 2 products, which clause do you use?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'WHERE COUNT(*) >= 2', isCorrect: false },
        { id: 'b', text: 'HAVING COUNT(*) >= 2', isCorrect: true },
        { id: 'c', text: 'FILTER COUNT(*) >= 2', isCorrect: false },
        { id: 'd', text: 'GROUP COUNT(*) >= 2', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-13',
      question: "What is the correct logical order of SQL clauses?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'SELECT -> GROUP BY -> WHERE -> HAVING', isCorrect: false },
        { id: 'b', text: 'SELECT -> WHERE -> HAVING -> GROUP BY', isCorrect: false },
        { id: 'c', text: 'SELECT -> WHERE -> GROUP BY -> HAVING', isCorrect: true },
        { id: 'd', text: 'SELECT -> HAVING -> WHERE -> GROUP BY', isCorrect: false }
      ]
    },
    {
      id: 'db-q2-14',
      question: "What does this return?\nSELECT MAX(Price) FROM Product;",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1500', isCorrect: false },
        { id: 'b', text: '2000', isCorrect: false },
        { id: 'c', text: '2400', isCorrect: false },
        { id: 'd', text: '2500', isCorrect: true }
      ]
    },
    {
      id: 'db-q2-15',
      question: "Which query finds the average price per supplier (using JOIN)?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'SELECT supplier_name, AVG(Price) FROM Product GROUP BY supplier_name', isCorrect: false },
        { id: 'b', text: 'SELECT s.supplier_name, AVG(p.Price) FROM Supplier s JOIN Product p ON s.supplier_id = p.supplier_id GROUP BY s.supplier_name', isCorrect: true },
        { id: 'c', text: 'SELECT AVG(Price) FROM Supplier JOIN Product', isCorrect: false },
        { id: 'd', text: 'SELECT supplier_name, AVERAGE(Price) FROM Product GROUP BY supplier_name', isCorrect: false }
      ]
    }
  ],

  written: []
};
