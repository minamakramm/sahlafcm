export const LECTURE = {
  subjectId: 'ds-tools',
  number: 12,
  title: 'Lab 6 of 6: Weka Data Mining Lab',
  titleAr: 'المختبر 6 من 6: مختبر تنقيب البيانات باستخدام Weka',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 1. Exploring Weka</h2>
<p>Weka (Waikato Environment for Knowledge Analysis) is a collection of machine learning algorithms for data mining tasks. It contains tools for data preparation, classification, regression, clustering, association rules mining, and visualization.</p>

<h3>2. The Weka Workflow</h3>
<p>In the Weka Explorer, the standard workflow moves from left to right through the tabs:</p>
<ol>
  <li><strong>Preprocess:</strong> Load and clean data. Apply filters.</li>
  <li><strong>Classify:</strong> Train and test classification and regression models.</li>
  <li><strong>Cluster:</strong> Group similar instances together.</li>
  <li><strong>Associate:</strong> Find rules that describe your data (e.g., Market Basket Analysis).</li>
  <li><strong>Select Attributes:</strong> Identify the most relevant features in the dataset.</li>
  <li><strong>Visualize:</strong> View 2D scatter plots of your data.</li>
</ol>

<h3>3. Data Formats in Weka</h3>
<p>The primary format is <strong>ARFF</strong> (Attribute-Relation File Format). However, Weka can also import CSV and JSON files. When importing a CSV, Weka automatically converts it to its internal ARFF representation.</p>

<h3>4. Using Filters (The Preprocess Tab)</h3>
<p>Filters are categorized into:</p>
<ul>
  <li><strong>Unsupervised Attribute:</strong> Actions that don't need the class label (e.g., <code>Discretize</code>, <code>Remove</code>, <code>Normalize</code>).</li>
  <li><strong>Unsupervised Instance:</strong> Actions on rows (e.g., <code>RemoveRange</code>, <code>Resample</code>).</li>
  <li><strong>Supervised:</strong> Filters that take the class attribute into account (e.g., <code>AttributeSelection</code>).</li>
</ul>

<h3>5. Evaluation in Weka</h3>
<p>Weka provides various test options:</p>
<ul>
  <li><strong>Cross-validation (default: 10 folds):</strong> Splits data into 10 parts, trains on 9 and tests on 1, repeating 10 times. This is the most reliable evaluation method.</li>
  <li><strong>Percentage split:</strong> Similar to sklearn's train_test_split.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Weka Lab Reference</h2>

<h3>1. ARFF File Header Example</h3>
<p>Understanding how Weka reads metadata through the header.</p>
<div class="code-block">
<pre><code class="language-arff">
@RELATION weather

@ATTRIBUTE outlook {sunny, overcast, rainy}
@ATTRIBUTE temperature NUMERIC
@ATTRIBUTE humidity NUMERIC
@ATTRIBUTE windy {TRUE, FALSE}
@ATTRIBUTE play {yes, no}

@DATA
sunny,85,85,FALSE,no
sunny,80,90,TRUE,no
overcast,83,86,FALSE,yes
</code></pre>
</div>

<h3>2. Common Weka Filter Paths</h3>
<p>Locating the right tool in the Weka filter hierarchy.</p>
<div class="code-block">
<pre><code class="language-text">
# Convert numbers to categories
filters -> unsupervised -> attribute -> Discretize

# Fill missing values (?)
filters -> unsupervised -> attribute -> ReplaceMissingValues

# Remove specific columns
filters -> unsupervised -> attribute -> Remove

# Scale data to [0, 1]
filters -> unsupervised -> attribute -> Normalize
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 1. تطبيق العملي على Weka</h2>
<p>مستكشف Weka هو الأداة الرئيسية لتنقيب البيانات التجريبي.</p>
<ul>
  <li><strong>Preprocess:</strong> تحميل البيانات وتطبيق الفلاتر مثل Discretize و Normalize.</li>
  <li><strong>Classify:</strong> تدريب النماذج واختبارها (مثل J48 و NaiveBayes).</li>
  <li><strong>Evaluation:</strong> استخدام Cross-validation (10 folds) لتقييم دقيق للأداء.</li>
  <li><strong>ARFF:</strong> التنسيق الأساسي لبيانات Weka.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'Weka is a GUI-based ML tool written in Java.',
      'The Preprocess tab is where all data cleaning and filtering happens.',
      'ARFF is the native format, defining attributes and their types in the header.',
      'Cross-validation (10 folds) is the standard evaluation method in Weka.',
      'Filters are used to transform data (e.g., Discretize numeric attributes into nominal bins).',
      'The Visualize tab allows for high-level inspection of feature relationships.'
    ],
    pointsAr: [
      'Weka هي أداة تعلم آلة تعتمد على الواجهة الرسومية ومكتوبة بلغة Java.',
      'يعد قسم Preprocess هو المكان الذي تتم فيه جميع عمليات تنظيف البيانات.',
      'يعتبر Cross-validation (10 folds) هو طريقة التقييم القياسية في Weka.'
    ]
  },

  mcq: [
    {
      id: 'ds-s6-q1',
      question: 'Which Weka Explorer tab is used for data cleaning?',
      answers: [
        { id: 'a', text: 'Classify', isCorrect: false },
        { id: 'b', text: 'Preprocess', isCorrect: true },
        { id: 'c', text: 'Associate', isCorrect: false },
        { id: 'd', text: 'Visualize', isCorrect: false }
      ]
    },
    {
      id: 'ds-s6-q2',
      question: 'What is the default number of folds for cross-validation in Weka?',
      answers: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '10', isCorrect: true },
        { id: 'c', text: '20', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false }
      ]
    },
    {
      id: 'ds-s6-q3',
      question: 'In an ARFF file, which section contains the actual instances?',
      answers: [
        { id: 'a', text: '@RELATION', isCorrect: false },
        { id: 'b', text: '@ATTRIBUTE', isCorrect: false },
        { id: 'c', text: '@DATA', isCorrect: true },
        { id: 'd', text: '@VALUES', isCorrect: false }
      ]
    },
    {
      id: 'ds-s6-q4',
      question: 'The "Discretize" filter is used to:',
      answers: [
        { id: 'a', text: 'Remove rows', isCorrect: false },
        { id: 'b', text: 'Convert numeric attributes to nominal ones', isCorrect: true },
        { id: 'c', text: 'Calculate the mean', isCorrect: false },
        { id: 'd', text: 'Change the class label', isCorrect: false }
      ]
    },
    { id: 'ds-s6-q5', question: 'Which tab would you use to find Association Rules (e.g., Apriori)?', answers: [{ id: 'a', text: 'Classify', isCorrect: false }, { id: 'b', text: 'Associate', isCorrect: true }, { id: 'c', text: 'Cluster', isCorrect: false }, { id: 'd', text: 'Select Attributes', isCorrect: false }] },
    { id: 'ds-s6-q6', question: 'How are missing values represented in Weka?', answers: [{ id: 'a', text: 'NaN', isCorrect: false }, { id: 'b', text: '?', isCorrect: true }, { id: 'c', text: 'NULL', isCorrect: false }, { id: 'd', text: '-999', isCorrect: false }] },
    { id: 'ds-s6-q7', question: 'Which filter replaces missing values with the mean or mode?', answers: [{ id: 'a', text: 'Normalize', isCorrect: false }, { id: 'b', text: 'ReplaceMissingValues', isCorrect: true }, { id: 'c', text: 'NumericToNominal', isCorrect: false }, { id: 'd', text: 'Standardize', isCorrect: false }] },
    { id: 'ds-s6-q8', question: 'If you want to remove the first two columns of a dataset, which filter do you use?', answers: [{ id: 'a', text: 'Remove', isCorrect: true }, { id: 'b', text: 'DeleteRows', isCorrect: false }, { id: 'c', text: 'DropColumns', isCorrect: false }, { id: 'd', text: 'Resample', isCorrect: false }] },
    { id: 'ds-s6-q9', question: 'Nominal attributes are lists of possible values contained in:', answers: [{ id: 'a', text: 'Parentheses ()', isCorrect: false }, { id: 'b', text: 'Curly braces {}', isCorrect: true }, { id: 'c', text: 'Square brackets []', isCorrect: false }, { id: 'd', text: 'Quotes ""', isCorrect: false }] },
    { id: 'ds-s6-q10', question: 'Which Weka tab displays histograms and basic statistics (Min, Max, Mean)?', answers: [{ id: 'a', text: 'Classify', isCorrect: false }, { id: 'b', text: 'Preprocess', isCorrect: true }, { id: 'c', text: 'Select Attributes', isCorrect: false }, { id: 'd', text: 'Visualize', isCorrect: false }] },
    { id: 'ds-s6-q11', question: 'Cross-validation is used to evaluate:', answers: [{ id: 'a', text: 'Data quality', isCorrect: false }, { id: 'b', text: 'Model performance and stability', isCorrect: true }, { id: 'c', text: 'Missing value counts', isCorrect: false }, { id: 'd', text: 'File size', isCorrect: false }] },
    { id: 'ds-s6-q12', question: 'To use Weka, your computer must have which environment installed?', answers: [{ id: 'a', text: 'Python', isCorrect: false }, { id: 'b', text: 'Java Runtime Environment (JRE)', isCorrect: true }, { id: 'c', text: 'Node.js', isCorrect: false }, { id: 'd', text: 'SQL Server', isCorrect: false }] },
    { id: 'ds-s6-q13', question: 'Which filter scales attributes to the [0, 1] range?', answers: [{ id: 'a', text: 'Standardize', isCorrect: false }, { id: 'b', text: 'Normalize', isCorrect: true }, { id: 'c', text: 'Rescale', isCorrect: false }, { id: 'd', text: 'Center', isCorrect: false }] },
    { id: 'ds-s6-q14', question: 'In the Classify tab, "J48" is an implementation of which algorithm?', answers: [{ id: 'a', text: 'Naive Bayes', isCorrect: false }, { id: 'b', text: 'Decision Tree (C4.5)', isCorrect: true }, { id: 'c', text: 'K-Means', isCorrect: false }, { id: 'd', text: 'Linear Regression', isCorrect: false }] },
    { id: 'ds-s6-q15', question: 'Attribute selection helps to reduce:', answers: [{ id: 'a', text: 'The number of rows', isCorrect: false }, { id: 'b', text: 'Overfitting and noise by removing irrelevant features', isCorrect: true }, { id: 'c', text: 'Memory usage only', isCorrect: false }, { id: 'd', text: 'The accuracy', isCorrect: false }] }
  ]
};
