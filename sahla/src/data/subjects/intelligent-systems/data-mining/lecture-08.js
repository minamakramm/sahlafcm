export const LECTURE = {
  subjectId: 'data-mining',
  number: 8,
  title: 'Section 2: Data Manipulation with Pandas',
  titleAr: 'القسم 2: معالجة البيانات باستخدام Pandas',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is Pandas?</h2>
<p><strong>Pandas</strong> is built on top of NumPy and provides high-level data structures like <strong>Series</strong> (1D) and <strong>DataFrames</strong> (2D). It is the 'Excel' for Python.</p>

<h2>🔹 Loading and Exploring Data</h2>
<ul>
    <li><code>df.head()</code>: View first 5 rows.</li>
    <li><code>df.info()</code>: Check data types and missing values.</li>
    <li><code>df.describe()</code>: Get summary statistics (mean, std, min, max).</li>
</ul>

<h2>🔹 Selection & Filtering</h2>
<ul>
    <li><code>df.drop(columns='A', axis=1)</code>: Deletes specified columns.</li>
    <li><code>df.fillna(value)</code>: Fills missing (NaN) values with a given value.</li>
    <li><code>df.dropna()</code>: Removes rows with any missing values.</li>
    <li><code>df.groupby('X').mean()</code>: Groups by 'X' and calculates mean.</li>
    <li><strong>Indexing:</strong> <code>df.loc[]</code> uses labels (names), while <code>df.iloc[]</code> uses integer positions (0, 1, 2...).</li>
</ul>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> The distinction between <code>.loc</code> and <code>.iloc</code> and the usage of <code>df.describe()</code> are cornerstone topics for the practical part of the exam.</span></div>

<h3>🔹 Pandas Essential Cheatsheet</h3>
<table class="styled-table">
  <thead><tr><th>Function</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><code>pd.read_csv('file.csv')</code></td><td>Loads a CSV file into a DataFrame.</td></tr>
    <tr><td><code>df.head(n) / df.tail(n)</code></td><td>View the first or last 'n' rows.</td></tr>
    <tr><td><code>df.shape / df.columns</code></td><td>Returns dimensions or list of column names.</td></tr>
    <tr><td><code>df.describe()</code></td><td>Provides statistical summary (count, mean, std, etc.).</td></tr>
    <tr><td><code>df.info()</code></td><td>Shows datatypes, memory usage, and non-null counts.</td></tr>
    <tr><td><code>df.iloc[row_idx, col_idx]</code></td><td>Selects data by integer coordinates (0, 1, 2...).</td></tr>
    <tr><td><code>df.loc[label, label]</code></td><td>Selects data by row/column labels or names.</td></tr>
    <tr><td><code>df.drop(columns='A')</code></td><td>Deletes a specific column from the table.</td></tr>
    <tr><td><code>df.fillna(value)</code></td><td>Replaces missing (NaN) values with a given value.</td></tr>
    <tr><td><code>df.dropna()</code></td><td>Removes any rows that contain missing data.</td></tr>
    <tr><td><code>df.groupby('X').mean()</code></td><td>Groups data by column 'X' and applies aggregation.</td></tr>
    <tr><td><code>df.sort_values(by='A')</code></td><td>Sorts the entire table based on column 'A'.</td></tr>
    <tr><td><code>df['A'].value_counts()</code></td><td>Counts unique occurrences in category 'A'.</td></tr>
    <tr><td><code>df['A'].unique()</code></td><td>Returns a list of unique values in column 'A'.</td></tr>
    <tr><td><code>df.corr()</code></td><td>Computes the correlation matrix between columns.</td></tr>
    <tr><td><code>df.T</code></td><td>Transposes the table (swaps rows and columns).</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>🔹 ما هو Pandas؟</h2>
<p>يعتمد <strong>Pandas</strong> على NumPy ويوفر هياكل بيانات عالية المستوى مثل <strong>Series</strong> (بُعد واحد) و <strong>DataFrames</strong> (بُعدين).</p>

<h2>🔹 تحميل واستكشاف البيانات</h2>
<ul>
    <li><code>df.head()</code>: عرض أول 5 صفوف.</li>
    <li><code>df.describe()</code>: الحصول على إحصائيات ملخصة.</li>
</ul>

<h2>🔹 التحديد والتصفية</h2>
<ul>
    <li><code>df.drop(...)</code>: حذف أعمدة محددة.</li>
    <li><code>df.fillna(...)</code>: ملء القيم المفقودة.</li>
    <li><strong>الفهرسة:</strong> <code>df.loc[]</code> يستخدم الأسماء، بينما <code>df.iloc[]</code> يستخدم أرقام المواقع (0، 1، 2...).</li>
</ul>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> التمييز بين <code>.loc</code> و <code>.iloc</code> واستخدام <code>df.describe()</code> هي مواضيع أساسية للجزء العملي من الامتحان.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Series: One-dimensional labeled array.",
      "DataFrame: Two-dimensional labeled data structure (tabular).",
      "Handling Missing Data: Identifying and filling or dropping NaNs.",
      "Statistical Summaries: Quickly understanding distributions via describe()."
    ],
    pointsAr: [
      "Series: مصفوفة مصنفة أحادية البعد.",
      "DataFrame: هيكل بيانات مصنف ثنائي الأبعاد (جدولي).",
      "التعامل مع البيانات المفقودة: تحديد وملء أو إسقاط NaNs.",
      "الملخصات الإحصائية: فهم التوزيعات بسرعة عبر describe()."
    ],
  },

  mcq: [
    {
      id: 'dm-s2-q1',
      question: "Which structure in Pandas represents a 2D table of data?",
      questionAr: "أي هيكل في Pandas يمثل جدولاً ثنائي الأبعاد للبيانات؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Series', isCorrect: false },
        { id: 'b', text: 'DataFrame', isCorrect: true },
        { id: 'c', text: 'Panel', isCorrect: false },
        { id: 'd', text: 'Array', isCorrect: false },
      ],
    },
    {
      id: 'dm-s2-q3',
      question: "What does 'df.head(10)' return?",
      questionAr: "ماذا تعيد 'df.head(10)'؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The last 10 rows', isCorrect: false },
        { id: 'b', text: 'The first 10 columns', isCorrect: false },
        { id: 'c', text: 'The first 10 rows', isCorrect: true },
        { id: 'd', text: 'A summary of the 10 largest values', isCorrect: false },
      ],
    },
    {
      id: 'dm-s2-q4',
      question: "How do you select only the column named 'Salary' from a DataFrame df?",
      questionAr: "كيف يمكنك اختيار العمود المسمى 'Salary' فقط من DataFrame df؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'df.Salary', isCorrect: false },
        { id: 'b', text: "df['Salary']", isCorrect: false },
        { id: 'c', text: 'Both A and B', isCorrect: true },
        { id: 'd', text: "df.get_column('Salary')", isCorrect: false },
      ],
    },
    {
      id: 'dm-s2-q5',
      question: "Which method provides basic statistics like mean and standard deviation for a DataFrame?",
      questionAr: "أي طريقة توفر إحصائيات أساسية مثل المتوسط والانحراف المعياري لـ DataFrame؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'df.stats()', isCorrect: false },
        { id: 'b', text: 'df.info()', isCorrect: false },
        { id: 'c', text: 'df.describe()', isCorrect: true },
        { id: 'd', text: 'df.summary()', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s2-w1',
      question: "Define a Pandas DataFrame and explain how it differs from a NumPy array.",
      questionAr: "عرف Pandas DataFrame واشرح كيف يختلف عن مصفوفة NumPy.",
      modelAnswer: "A DataFrame is a 2D labeled tabular structure. Unlike NumPy arrays, DataFrames can hold different data types in different columns (heterogeneous) and have explicit row/column labels.",
      modelAnswerAr: "DataFrame هو هيكل جدولي مصنف ثنائي الأبعاد. على عكس مصوفات NumPy، يمكن لـ DataFrames الاحتفاظ بأنواع بيانات مختلفة في أعمدة مختلفة (غير متجانسة) ولها عناوين صفوف/أعمدة صريحة.",
    },
    {
      id: 'dm-s2-w2',
      question: "What is the difference between .loc and .iloc?",
      questionAr: "ما الفرق بين .loc و .iloc؟",
      modelAnswer: ".loc is label-based (using column names), while .iloc is integer-based (using numeric indices 0, 1, 2...).",
      modelAnswerAr: ".loc يعتمد على التسميات (باستخدام أسماء الأعمدة)، بينما .iloc يعتمد على الأرقام الصحيحة (باستخدام الفهارس الرقمية 0، 1، 2...).",
    },
  ],
};
