export const LECTURE = {
  subjectId: 'ds-tools',
  number: 9,
  title: 'Lab 3 of 6: Data Manipulation with Pandas',
  titleAr: 'المختبر 3 من 6: معالجة البيانات باستخدام Pandas',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg> 1. Introduction to Pandas</h2>
<p>Pandas is the premier library for data analysis and manipulation in Python. It provides fast, flexible, and expressive data structures designed to make working with "relational" or "labeled" data both easy and intuitive.</p>

<h3>2. Primary Data Structures</h3>
<ul>
  <li><strong>Series:</strong> A one-dimensional labeled array capable of holding any data type (integers, strings, floats, etc.).</li>
  <li><strong>DataFrame:</strong> A two-dimensional, size-mutable, and potentially heterogeneous tabular data structure with labeled axes (rows and columns). It is essentially a collection of Series objects.</li>
</ul>

<h3>3. Loading and Inspecting Data</h3>
<p>Pandas can read data from many formats (CSV, Excel, SQL, JSON, etc.). Once loaded, you can quickly inspect the data:</p>
<ul>
  <li><code>df.head(n)</code>: Shows the first <code>n</code> rows.</li>
  <li><code>df.tail(n)</code>: Shows the last <code>n</code> rows.</li>
  <li><code>df.info()</code>: Provides a concise summary of the DataFrame (dtypes, non-null counts, memory usage).</li>
  <li><code>df.describe()</code>: Generates descriptive statistics for numeric columns.</li>
</ul>

<h3>4. Selection and Filtering</h3>
<p>There are multiple ways to access data in a DataFrame:</p>
<ul>
  <li><strong>By Column:</strong> <code>df['column_name']</code> or <code>df[['col1', 'col2']]</code>.</li>
  <li><strong>By Condition:</strong> <code>df[df['age'] > 30]</code>.</li>
  <li><strong>By Location:</strong> <code>.loc[label]</code> (label-based) and <code>.iloc[index]</code> (integer-position-based).</li>
</ul>

<h3>5. Handling Missing Values</h3>
<p>Real-world data is rarely perfect. Pandas uses <code>NaN</code> (Not a Number) to represent missing data:</p>
<ul>
  <li><code>df.isnull().sum()</code>: Find the count of missing values per column.</li>
  <li><code>df.dropna()</code>: Remove rows or columns with missing values.</li>
  <li><code>df.fillna(value)</code>: Fill missing values with a specific constant or statistic (like mean).</li>
</ul>

<h3>6. Grouping and Aggregation</h3>
<p>The <code>groupby</code> method allows you to split data into groups, apply a function (like <code>mean()</code>, <code>sum()</code>, or <code>count()</code>), and combine the results.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Pandas Practical Reference</h2>

<h3>1. Data Selection & Filtering</h3>
<p>Mastering selection is key to cleaning and exploring datasets efficiently.</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd

df = pd.read_csv('data.csv')

# Filter rows: Age > 25 AND City is 'Cairo'
filtered_df = df[(df['age'] > 25) & (df['city'] == 'Cairo')]

# Selection using .loc (labels)
# Get 'name' and 'score' for rows 0 to 5
subset = df.loc[0:5, ['name', 'score']]

# Selection using .iloc (integer indices)
# First 5 rows, first 2 columns
subset_indices = df.iloc[:5, :2]
</code></pre>
</div>

<h3>2. Aggregation with GroupBy</h3>
<p>Summarize your data by categories in one line of code.</p>
<div class="code-block">
<pre><code class="language-python">
# Group by department and calculate average salary
salary_summary = df.groupby('department')['salary'].mean()

# Multiple aggregations
stats = df.groupby('city')['age'].agg(['mean', 'max', 'count'])
print(stats)
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg> 1. ما هي مكتبة Pandas؟</h2>
<p>تعد Pandas الأداة الأهم لتحليل ومعالجة البيانات في بايثون.</p>
<ul>
  <li><strong>Series:</strong> مصفوفة أحادية البعد مع تسميات.</li>
  <li><strong>DataFrame:</strong> هيكل بيانات ثنائي الأبعاد (جدول) مع صفوف وأعمدة.</li>
  <li><strong>معالجة البيانات:</strong> التعامل مع القيم المفقودة، التصفية، والتجميع.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'Pandas is the core library for tabular data manipulation in Python.',
      'DataFrames are 2D structures with labeled rows and columns.',
      'Common cleaning tasks include dropping duplicates and filling NaN values.',
      '.loc is label-based selection, while .iloc is integer-position-based.',
      'The groupby method is used for categorical data analysis and aggregation.',
      'describe() and info() provide immediate insights into a dataset.'
    ],
    pointsAr: [
      'تعد Pandas المكتبة الأساسية لمعالجة البيانات الجدولية في بايثون.',
      'تستخدم DataFrames لهياكل البيانات ثنائية الأبعاد مع تسميات.',
      'تسمح دالة groupby بتحليل البيانات وتلخيصها بناءً على فئات.'
    ]
  },

  mcq: [
    {
      id: 'ds-s3-q1',
      question: 'Which Pandas data structure is 2-dimensional?',
      answers: [
        { id: 'a', text: 'Series', isCorrect: false },
        { id: 'b', text: 'DataFrame', isCorrect: true },
        { id: 'c', text: 'Index', isCorrect: false },
        { id: 'd', text: 'Panel', isCorrect: false }
      ]
    },
    {
      id: 'ds-s3-q2',
      question: 'Which method displays the last 10 rows of a DataFrame?',
      answers: [
        { id: 'a', text: 'df.head(10)', isCorrect: false },
        { id: 'b', text: 'df.tail(10)', isCorrect: true },
        { id: 'c', text: 'df.end(10)', isCorrect: false },
        { id: 'd', text: 'df.last(10)', isCorrect: false }
      ]
    },
    {
      id: 'ds-s3-q3',
      question: 'What does the .info() method provide?',
      answers: [
        { id: 'a', text: 'Mathematical statistics', isCorrect: false },
        { id: 'b', text: 'Summary of data types and non-null values', isCorrect: true },
        { id: 'c', text: 'The actual data records', isCorrect: false },
        { id: 'd', text: 'The correlation matrix', isCorrect: false }
      ]
    },
    {
      id: 'ds-s3-q4',
      question: 'To select rows based on integer position, which indexer do you use?',
      answers: [
        { id: 'a', text: '.loc', isCorrect: false },
        { id: 'b', text: '.iloc', isCorrect: true },
        { id: 'c', text: '.at', isCorrect: false },
        { id: 'd', text: '.ix', isCorrect: false }
      ]
    },
    { id: 'ds-s3-q5', question: 'How do you check for missing values in each column?', answers: [{ id: 'a', text: 'df.missing()', isCorrect: false }, { id: 'b', text: 'df.isnull().sum()', isCorrect: true }, { id: 'c', text: 'df.check_null()', isCorrect: false }, { id: 'd', text: 'df.empty()', isCorrect: false }] },
    { id: 'ds-s3-q6', question: 'Which function is used to load data from a CSV file?', answers: [{ id: 'a', text: 'pd.open_csv()', isCorrect: false }, { id: 'b', text: 'pd.read_csv()', isCorrect: true }, { id: 'c', text: 'pd.get_csv()', isCorrect: false }, { id: 'd', text: 'pd.import_csv()', isCorrect: false }] },
    { id: 'ds-s3-q7', question: 'What does df.dropna() do?', answers: [{ id: 'a', text: 'Drops columns only', isCorrect: false }, { id: 'b', text: 'Removes rows with missing values', isCorrect: true }, { id: 'c', text: 'Deletes the entire DataFrame', isCorrect: false }, { id: 'd', text: 'Sorts the data', isCorrect: false }] },
    { id: 'ds-s3-q8', question: 'To rename columns in a DataFrame, you use:', answers: [{ id: 'a', text: 'df.change()', isCorrect: false }, { id: 'b', text: 'df.rename()', isCorrect: true }, { id: 'c', text: 'df.update()', isCorrect: false }, { id: 'd', text: 'df.columns = [...]', isCorrect: true }] },
    { id: 'ds-s3-q9', question: 'Which Pandas method is best for statistical summaries like mean, std, and percentiles?', answers: [{ id: 'a', text: 'df.info()', isCorrect: false }, { id: 'b', text: 'df.describe()', isCorrect: true }, { id: 'c', text: 'df.stats()', isCorrect: false }, { id: 'd', text: 'df.summary()', isCorrect: false }] },
    { id: 'ds-s3-q10', question: 'The GroupBy operation involves which three steps?', answers: [{ id: 'a', text: 'Read, Edit, Write', isCorrect: false }, { id: 'b', text: 'Split, Apply, Combine', isCorrect: true }, { id: 'c', text: 'Load, Filter, Save', isCorrect: false }, { id: 'd', text: 'Select, Index, Plot', isCorrect: false }] },
    { id: 'ds-s3-q11', question: 'Which indexer is label-based?', answers: [{ id: 'a', text: '.loc', isCorrect: true }, { id: 'b', text: '.iloc', isCorrect: false }, { id: 'c', text: '.pos', isCorrect: false }, { id: 'd', text: '.idx', isCorrect: false }] },
    { id: 'ds-s3-q12', question: 'To fill missing values with a zero, use:', answers: [{ id: 'a', text: 'df.replace(0)', isCorrect: false }, { id: 'b', text: 'df.fillna(0)', isCorrect: true }, { id: 'c', text: 'df.remove_nan(0)', isCorrect: false }, { id: 'd', text: 'df.set_zero()', isCorrect: false }] },
    { id: 'ds-s3-q13', question: 'How do you access a column named "Salary"?', answers: [{ id: 'a', text: 'df["Salary"]', isCorrect: true }, { id: 'b', text: 'df.Salary', isCorrect: true }, { id: 'c', text: 'Both A and B', isCorrect: true }, { id: 'd', text: 'df.get_column("Salary")', isCorrect: false }] },
    { id: 'ds-s3-q14', question: 'df.shape returns:', answers: [{ id: 'a', text: 'Total number of cells', isCorrect: false }, { id: 'b', text: 'A tuple (rows, columns)', isCorrect: true }, { id: 'c', text: 'The memory size', isCorrect: false }, { id: 'd', text: 'Number of columns only', isCorrect: false }] },
    { id: 'ds-s3-q15', question: 'Which method removes duplicate rows?', answers: [{ id: 'a', text: 'df.unique()', isCorrect: false }, { id: 'b', text: 'df.drop_duplicates()', isCorrect: true }, { id: 'c', text: 'df.remove_repeats()', isCorrect: false }, { id: 'd', text: 'df.clean()', isCorrect: false }] }
  ]
};
