export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'data-mining',
  number: 15,
  title: 'Lecture 8: Data Warehouse',
  titleAr: 'المحاضرة 8: مستودع البيانات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 What is a Data Warehouse?</h2>
        <p>A data warehouse is a <strong>subject-oriented, integrated, time-variant, and nonvolatile</strong> collection of data in support of management's decision-making process.</p>
        <div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Bill Inmon (1996):</strong> "A single, complete and consistent store of data obtained from a variety of different sources made available to end users in a way they can understand and use in a business context."</span></div>
        
        <p>Data warehousing is also described as:</p>
        <ul>
        <li>A collection of <strong>integrated databases</strong> designed to support a DSS (Decision Support System).</li>
        <li>A <strong>technique for assembling and managing data</strong> from various sources for answering business questions.</li>
        <li>A <strong>decision support database</strong> maintained separately from the organization's operational database.</li>
        <li>A process of transforming <strong>data into information</strong> and making it available to users in a timely manner.</li>
        </ul>
        
        <h2>🔹 Data Problems DW Solves</h2>
        <ul>
        <li><em>"I can't find the data I need"</em> — data scattered over the network, many versions.</li>
        <li><em>"I can't get the data I need"</em> — need an expert to extract data.</li>
        <li><em>"I can't understand the data I found"</em> — poorly documented data.</li>
        <li><em>"I can't use the data I found"</em> — data needs transformation.</li>
        </ul>
        
        <h2>🔹 4 Characteristics of Data Warehouse</h2>
        
        <h3>1. Subject-Oriented</h3>
        <ul>
        <li>Organized around <strong>subjects</strong> such as sales, product, customer.</li>
        <li>Focuses on modeling and analysis of data <strong>for decision makers</strong>.</li>
        <li>Provides a simple, concise view by <strong>excluding data not useful</strong> for decision support.</li>
        </ul>
        
        <h3>2. Integrated</h3>
        <ul>
        <li>Constructed by integrating <strong>multiple heterogeneous sources</strong>.</li>
        <li>Data preprocessing ensures <strong>consistency</strong>.</li>
        <li>All inconsistencies in <strong>naming conventions and value representations</strong> are removed.</li>
        </ul>
        
        <h3>3. Time-Variant</h3>
        <ul>
        <li>Time horizon is <strong>significantly longer</strong> than operational systems (e.g., past 5-10 years).</li>
        <li>Operational DB: <strong>current value data</strong>. DW: <strong>historical perspective</strong>.</li>
        <li>Every key structure <strong>contains a time element</strong> (explicitly or implicitly).</li>
        </ul>
        
        <h3>4. Nonvolatile</h3>
        <ul>
        <li>Data once recorded <strong>cannot be updated</strong> — stored in <strong>read-only format</strong>.</li>
        <li>Only two operations: <strong>Initial loading</strong> and <strong>Access (read)</strong>.</li>
        <li>Data does not change over time.</li>
        </ul>
        
        <h2>🔹 Data Warehouse Environment</h2>
        
        <h3>1. The Data Store</h3>
        <p>Most common component. Its function is to <strong>feed the DW with data for analysis</strong>. Generally subject-oriented, volatile, and current — focused on customers, products, orders, policies, claims.</p>
        
        <h3>2. The Data Mart</h3>
        <p>Contains a <strong>subset of corporate-wide data</strong> valuable to a <strong>specific group of users</strong>. Scope is confined to specific subjects (e.g., Marketing → customer, item, sales). Data tends to be <strong>summarized</strong>.</p>
        <ul>
        <li>Implemented on <strong>low-cost</strong> infrastructure.</li>
        <li>Implementation cycle measured in <strong>weeks</strong> (not months/years).</li>
        </ul>
        
        <h3>3. Metadata</h3>
        <p><strong>Data about data.</strong> Information kept <strong>about</strong> the warehouse rather than within it. Essential for transforming raw data into knowledge.</p>
        <table class="styled-table"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
        <tr><td><strong>Technical Metadata</strong></td><td>Used by DW designers and administrators</td></tr>
        <tr><td><strong>Business Metadata</strong></td><td>Gives end-users an easy way to understand stored info</td></tr>
        </tbody></table>
        
        <h4>Components of Metadata:</h4>
        <ul>
        <li><strong>Transformation maps</strong> — records showing what transformations were applied.</li>
        <li><strong>Extraction & relationship history</strong> — records of analyzed data.</li>
        <li><strong>Algorithms for summarization</strong> — aggregation and summarizing methods.</li>
        <li><strong>Data ownership</strong> — records showing data origin.</li>
        <li><strong>Patterns of access</strong> — what data is accessed and how often.</li>
        </ul>
        <div class="callout callout-warning"><span class="callout-icon">⚠️</span><span><strong>Example:</strong> A line "4056 KJ596 223.45" is meaningless until metadata tells us: Store 4056, Product KJ596, Sales $223.45. Metadata is the <strong>"key"</strong> that lets us handle raw data.</span></div>
        
        <h2>🔹 Data Warehouse Schemas</h2>
        
        <h3>Star Schema</h3>
        <ul>
        <li>A single, large and central <strong>Fact Table</strong> surrounded by one table for each <strong>Dimension</strong>.</li>
        <li>Dimension tables are <strong>denormalized</strong> to maximize performance.</li>
        <li><strong>1:N relationship</strong> between dimension tables and fact tables.</li>
        <li>Fact tables contain <strong>factual/quantitative data</strong>. Dimension tables contain <strong>subject descriptions</strong>.</li>
        <li>Benefits: Easy to understand, easy to define hierarchies, reduces physical joins.</li>
        <li>Good for <strong>ad-hoc queries</strong>, but bad for <strong>OLTP</strong> (Online Transaction Processing).</li>
        </ul>
        
        <h3>Snowflake Schema</h3>
        <ul>
        <li><strong>Variant of Star Schema</strong> where dimension tables are <strong>normalized</strong> (split into additional sub-tables).</li>
        <li><strong>Drawbacks:</strong> Time-consuming joins, slower report generation.</li>
        <li><strong>Benefit:</strong> Less data redundancy.</li>
        </ul>
        
        <h3>Fact Constellation (Galaxy) Schema</h3>
        <ul>
        <li><strong>Multiple fact tables</strong> share dimension tables.</li>
        <li>Viewed as a collection of stars — hence called <strong>Galaxy Schema</strong>.</li>
        <li>Used in <strong>sophisticated applications</strong> requiring complex analysis.</li>
        </ul>
        
        `,
        bodyAr: `<h2>مستودع البيانات (Data Warehouse)</h2>
<p>مجموعة بيانات موجهة للموضوع، متكاملة، متغيرة زمنياً، وغير متقلبة لدعم اتخاذ القرار.</p>

<h3>الخصائص الأربع</h3>
<ol>
<li><strong>موجه للموضوع:</strong> منظم حول مواضيع العمل (مبيعات، عملاء).</li>
<li><strong>متكامل:</strong> يدمج مصادر متعددة ومتنوعة مع إزالة التناقضات.</li>
<li><strong>متغير زمنياً:</strong> يحتفظ ببيانات تاريخية (5-10 سنوات).</li>
<li><strong>غير متقلب:</strong> البيانات للقراءة فقط، لا يتم تحديثها.</li>
</ol>

<h3>بيئة المستودع</h3>
<ul>
<li><strong>مخزن البيانات:</strong> المكون الأساسي الذي يغذي المستودع.</li>
<li><strong>سوق البيانات (Data Mart):</strong> مجموعة فرعية لمجموعة مستخدمين محددة.</li>
<li><strong>البيانات الوصفية (Metadata):</strong> بيانات عن البيانات — مفتاح تحويل البيانات الخام إلى معرفة.</li>
</ul>

<h3>أنواع المخططات</h3>
<ul>
<li><strong>Star Schema:</strong> جدول حقائق مركزي محاط بجداول أبعاد غير منمذجة.</li>
<li><strong>Snowflake:</strong> جداول أبعاد منمذجة (أبطأ لكن أقل تكراراً).</li>
<li><strong>Galaxy:</strong> عدة جداول حقائق تتشارك جداول الأبعاد.</li>
</ul>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "DW = Subject-oriented, Integrated, Time-variant, Nonvolatile collection for decision support.",
      "Subject-oriented: organized around business subjects (sales, customer), excludes non-useful data.",
      "Integrated: combines multiple heterogeneous sources, removes naming/value inconsistencies.",
      "Time-variant: stores historical data (5-10 years). Every key contains a time element.",
      "Nonvolatile: data is read-only — only Initial Loading and Access operations.",
      "Data Store: feeds the DW. Data Mart: subset for specific user groups (implemented in weeks).",
      "Metadata = 'data about data'. Types: Technical (for admins) and Business (for end-users).",
      "Metadata components: transformation maps, extraction history, summarization algorithms, data ownership, access patterns.",
      "Star Schema: central Fact Table + denormalized Dimension Tables. Fast queries, 1:N relationship.",
      "Snowflake: normalized dimensions (less redundancy, more joins, slower reports).",
      "Galaxy (Fact Constellation): multiple fact tables sharing dimensions — for complex applications.",
      "Star = good for ad-hoc queries. Snowflake = reduces redundancy. Galaxy = complex analysis."
    ],
    pointsAr: [
      "خصائص المستودع: موجه للموضوع، متكامل، متغير زمنياً، غير متقلب.",
      "البيانات الوصفية ضرورية لتحويل البيانات الخام إلى معرفة.",
      "Star Schema: جدول حقائق مركزي + أبعاد غير منمذجة.",
      "Snowflake: أبعاد منمذجة = أقل تكرار لكن أبطأ.",
      "Galaxy: عدة جداول حقائق تتشارك الأبعاد."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'dm-l15-q1',
      question: "Which characteristic implies that a Data Warehouse mostly focuses on Read operations and doesn't constantly change past data?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Subject-oriented", isCorrect: false },
        { id: 'b', text: "Integrated", isCorrect: false },
        { id: 'c', text: "Time-variant", isCorrect: false },
        { id: 'd', text: "Nonvolatile", isCorrect: true }
      ]
    },
    {
      id: 'dm-l15-q2',
      question: "A Data Warehouse organized around subjects like sales, customer, and product is described as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Integrated", isCorrect: false },
        { id: 'b', text: "Subject-oriented", isCorrect: true },
        { id: 'c', text: "Time-variant", isCorrect: false },
        { id: 'd', text: "Nonvolatile", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q3',
      question: "The DW characteristic that involves combining data from multiple heterogeneous sources is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Subject-oriented", isCorrect: false },
        { id: 'b', text: "Nonvolatile", isCorrect: false },
        { id: 'c', text: "Integrated", isCorrect: true },
        { id: 'd', text: "Time-variant", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q4',
      question: "The time horizon for a Data Warehouse compared to operational systems is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Shorter — only current data", isCorrect: false },
        { id: 'b', text: "The same length", isCorrect: false },
        { id: 'c', text: "Significantly longer — past 5-10 years of historical data", isCorrect: true },
        { id: 'd', text: "No time element at all", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q5',
      question: "Data warehousing requires only two operations for data:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "INSERT and DELETE", isCorrect: false },
        { id: 'b', text: "Initial loading and Access (read)", isCorrect: true },
        { id: 'c', text: "UPDATE and SELECT", isCorrect: false },
        { id: 'd', text: "CREATE and DROP", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q6',
      question: "A Data Mart is best described as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "The entire corporate data warehouse", isCorrect: false },
        { id: 'b', text: "A subset of corporate data for a specific group of users", isCorrect: true },
        { id: 'c', text: "The physical storage hardware", isCorrect: false },
        { id: 'd', text: "A type of data schema", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q7',
      question: "The implementation cycle of a Data Mart is typically measured in:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Years", isCorrect: false },
        { id: 'b', text: "Decades", isCorrect: false },
        { id: 'c', text: "Weeks", isCorrect: true },
        { id: 'd', text: "Hours", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q8',
      question: "Metadata is simply described as:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Business intelligence reports", isCorrect: false },
        { id: 'b', text: "Data about data", isCorrect: true },
        { id: 'c', text: "Raw transactional data", isCorrect: false },
        { id: 'd', text: "Customer details", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q9',
      question: "Technical Metadata is primarily used by:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "End-users for daily reporting", isCorrect: false },
        { id: 'b', text: "DW designers and administrators", isCorrect: true },
        { id: 'c', text: "Customers for online shopping", isCorrect: false },
        { id: 'd', text: "Marketing teams only", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q10',
      question: "In a Star Schema, the central table is called the:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Dimension Table", isCorrect: false },
        { id: 'b', text: "Fact Table", isCorrect: true },
        { id: 'c', text: "Metadata Table", isCorrect: false },
        { id: 'd', text: "Data Mart", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q11',
      question: "In a Star Schema, dimension tables are:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Fully normalized", isCorrect: false },
        { id: 'b', text: "Denormalized to maximize performance", isCorrect: true },
        { id: 'c', text: "Stored as metadata", isCorrect: false },
        { id: 'd', text: "Not connected to the fact table", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q12',
      question: "A Snowflake Schema differs from a Star Schema in that:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "It has no fact table", isCorrect: false },
        { id: 'b', text: "Dimension tables are normalized (split into sub-tables)", isCorrect: true },
        { id: 'c', text: "It has multiple fact tables", isCorrect: false },
        { id: 'd', text: "It doesn't support queries", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q13',
      question: "A drawback of the Snowflake Schema is:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Too much data redundancy", isCorrect: false },
        { id: 'b', text: "Time-consuming joins and slower report generation", isCorrect: true },
        { id: 'c', text: "Cannot store historical data", isCorrect: false },
        { id: 'd', text: "Only supports one dimension", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q14',
      question: "A Fact Constellation (Galaxy) Schema has:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A single fact table with no dimensions", isCorrect: false },
        { id: 'b', text: "Multiple fact tables sharing dimension tables", isCorrect: true },
        { id: 'c', text: "No fact tables at all", isCorrect: false },
        { id: 'd', text: "Only one dimension table", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q15',
      question: "Star Schema is excellent for:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Online Transaction Processing (OLTP)", isCorrect: false },
        { id: 'b', text: "Ad-hoc queries", isCorrect: true },
        { id: 'c', text: "Real-time data entry", isCorrect: false },
        { id: 'd', text: "Data deletion", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q16',
      question: "Fact tables contain:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Descriptions about business subjects", isCorrect: false },
        { id: 'b', text: "Factual or quantitative data (measures)", isCorrect: true },
        { id: 'c', text: "Only metadata", isCorrect: false },
        { id: 'd', text: "User login credentials", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q17',
      question: "The relationship between dimension tables and fact tables in Star Schema is:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "M:N", isCorrect: false },
        { id: 'b', text: "1:N", isCorrect: true },
        { id: 'c', text: "1:1", isCorrect: false },
        { id: 'd', text: "No relationship", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q18',
      question: "Which is NOT a component of Metadata?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Transformation maps", isCorrect: false },
        { id: 'b', text: "Extraction & relationship history", isCorrect: false },
        { id: 'c', text: "Customer purchase orders", isCorrect: true },
        { id: 'd', text: "Data ownership records", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q19',
      question: "Every key structure in a Data Warehouse:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Is always a surrogate key", isCorrect: false },
        { id: 'b', text: "Contains a time element, explicitly or implicitly", isCorrect: true },
        { id: 'c', text: "Is identical to operational database keys", isCorrect: false },
        { id: 'd', text: "Has no relation to time", isCorrect: false }
      ]
    },
    {
      id: 'dm-l15-q20',
      question: "A successful DW technician needs:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Only programming skills", isCorrect: false },
        { id: 'b', text: "Only business understanding", isCorrect: false },
        { id: 'c', text: "A good balance of business and technical understanding", isCorrect: true },
        { id: 'd', text: "No specific skills", isCorrect: false }
      ]
    }
  ],

  written: []
};