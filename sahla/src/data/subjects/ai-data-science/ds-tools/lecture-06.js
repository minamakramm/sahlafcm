export const LECTURE = {
  subjectId: 'ds-tools',
  number: 6,
  title: 'Lecture 6: Weka & Data Preprocessing',
  titleAr: 'المحاضرة 6: برنامج Weka ومعالجة البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 1. What is Weka?</h2>
<p>Weka (Waikato Environment for Knowledge Analysis) is a powerful, open-source suite of machine learning software written in Java, developed at the University of Waikato, New Zealand. It provides a graphical user interface (GUI) for data analysis and predictive modeling.</p>
<ul>
  <li><strong>GUI-Based:</strong> No coding required for basic ML tasks (unlike Python libraries).</li>
  <li><strong>Comprehensive:</strong> Includes tools for data preprocessing, classification, regression, clustering, and visualization.</li>
  <li><strong>Portability:</strong> Runs on any platform with a Java Runtime Environment (JRE).</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Weka is ideal for researchers and beginners who want to explore ML algorithms without writing extensive code.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> 2. ARFF File Format</h2>
<p>ARFF (Attribute-Relation File Format) is the native file format for Weka. It is a plain text file that describes a collection of instances sharing a common set of attributes.</p>
<ul>
  <li><strong>Header Section:</strong> Defines the dataset name and attributes.
    <ul>
      <li><code>@RELATION &lt;name&gt;</code>: Defines the dataset name.</li>
      <li><code>@ATTRIBUTE &lt;name&gt; &lt;type&gt;</code>: Defines attribute names and types (NUMERIC, NOMINAL, STRING, DATE).</li>
    </ul>
  </li>
  <li><strong>Data Section:</strong>
    <ul>
      <li><code>@DATA</code>: Marks the beginning of data records.</li>
      <li>Each line is a comma-separated instance. Missing values are represented by <code>?</code>.</li>
    </ul>
  </li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Nominal attributes must list their possible values in curly braces, e.g., <code>@ATTRIBUTE class {setosa, versicolor, virginica}</code>.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> 3. Weka Interfaces</h2>
<p>Weka provides four main ways to interact with data:</p>
<ul>
  <li><strong>Explorer:</strong> The most popular interface for batch data processing and analysis.</li>
  <li><strong>Experimenter:</strong> Used to run large-scale experiments comparing multiple algorithms.</li>
  <li><strong>KnowledgeFlow:</strong> A visual drag-and-drop workflow interface for data streams.</li>
  <li><strong>SimpleCLI:</strong> A command-line interface for users who prefer typing commands.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 21 14-14"/><path d="m14 5 5 5"/><path d="m15 2 7 7-2 2-7-7 2-2Z"/><path d="m9 11 1 1"/><path d="m5 15 1 1"/><path d="m2 18 1 1"/></svg> 4. The Preprocess Tab</h2>
<p>Preprocessing is the first step in the Weka Explorer. It allows you to load data from files (ARFF, CSV, URL) or databases. Once loaded, Weka displays histograms and statistics (Mean, StdDev, etc.) for each attribute.</p>
<ul>
  <li><strong>Open File:</strong> Load your dataset.</li>
  <li><strong>Attributes:</strong> Select/deselect attributes to include in analysis.</li>
  <li><strong>Visualize:</strong> Click on an attribute to see its distribution.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 5. Weka Filters</h2>
<p>Filters in Weka are used to transform datasets. They are categorized into two main hierarchies:</p>
<ul>
  <li><strong>Supervised vs. Unsupervised:</strong> Supervised filters use the class attribute (target) to inform the transformation, while Unsupervised filters do not.</li>
  <li><strong>Attribute vs. Instance:</strong> Attribute filters modify columns (e.g., removing a column), while Instance filters modify rows (e.g., removing specific samples).</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Most preprocessing tasks (like Normalization) use <strong>Unsupervised Attribute</strong> filters.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><polyline points="21 3 21 8 16 8"/></svg> 6. Common Preprocessing Tasks</h2>
<p>Weka provides hundreds of built-in filters for common tasks:</p>
<ul>
  <li><strong>ReplaceMissingValues:</strong> Automatically fills <code>?</code> values using mean/mode.</li>
  <li><strong>Discretize:</strong> Converts numeric attributes into nominal bins (e.g., age → {young, old}).</li>
  <li><strong>Normalize:</strong> Scales all numeric attributes to the [0, 1] range.</li>
  <li><strong>Standardize:</strong> Scales numeric attributes to mean=0 and stdDev=1.</li>
  <li><strong>Remove:</strong> Deletes specific attributes from the dataset.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 7. Attribute Selection</h2>
<p>Attribute selection (feature selection) helps identify the most relevant variables for your model. Weka's <strong>Select Attributes</strong> tab provides various search methods (e.g., BestFirst) and evaluators (e.g., CfsSubsetEval) to find the optimal subset of features.</p>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Removing irrelevant features reduces noise, speeds up training, and often improves model accuracy.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg> 8. Handling "Garbage In, Garbage Out"</h2>
<p>Data preprocessing is critical because ML models are only as good as the data they are trained on. Raw data is often noisy, incomplete, or inconsistent.</p>
<ul>
  <li><strong>Noisy Data:</strong> Errors or outliers in values.</li>
  <li><strong>Incomplete Data:</strong> Missing attributes or values.</li>
  <li><strong>Inconsistent Data:</strong> Mismatched units or labels (e.g., "M" vs "Male").</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg> 9. Weka Workflow Steps</h2>
<ol>
  <li><strong>Load:</strong> Open the dataset in the Preprocess tab.</li>
  <li><strong>Filter:</strong> Choose and apply filters to clean/transform the data.</li>
  <li><strong>Save:</strong> Export the preprocessed data for future use.</li>
  <li><strong>Classify/Cluster:</strong> Move to the next tabs to build models.</li>
</ol>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> ARFF & Weka Reference</h2>

<h3>1. ARFF File Structure Example</h3>
<p>This is how a standard ARFF file looks. It defines the relation name, attributes with their types, and the raw comma-separated data rows.</p>
<div class="code-block">
<pre><code class="language-arff">
% 1. Title: Iris Plants Database
@RELATION iris

@ATTRIBUTE sepal_length  NUMERIC
@ATTRIBUTE sepal_width   NUMERIC
@ATTRIBUTE petal_length  NUMERIC
@ATTRIBUTE petal_width   NUMERIC
@ATTRIBUTE class         {Iris-setosa,Iris-versicolor,Iris-virginica}

@DATA
5.1,3.5,1.4,0.2,Iris-setosa
4.9,3.0,1.4,0.2,Iris-setosa
7.0,3.2,4.7,1.4,Iris-versicolor
6.3,3.3,6.0,2.5,Iris-virginica
</code></pre>
</div>

<h3>2. Using Weka via Command Line (SimpleCLI)</h3>
<p>While the GUI is popular, Weka can be run via command line for automation. Here is an example of applying a filter and running a classifier.</p>
<div class="code-block">
<pre><code class="language-bash">
# Load data and apply a 'Remove' filter to the first attribute
java weka.filters.unsupervised.attribute.Remove -R 1 -i input.arff -o output.arff

# Run J48 Decision Tree on the preprocessed data
java weka.classifiers.trees.J48 -t output.arff
</code></pre>
</div>

<h3>3. Weka Filter Configuration Example</h3>
<p>When using filters like 'Discretize' in Weka, you often configure parameters like 'bins'. Here is a conceptual mapping of filter settings.</p>
<div class="code-block">
<pre><code class="language-text">
Filter: weka.filters.unsupervised.attribute.Discretize
Parameters:
  - bins: 10 (Divide numeric values into 10 intervals)
  - attributeIndices: first-last (Apply to all attributes)
  - useEqualFrequency: false (Use equal-width bins by default)
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 1. ما هو Weka؟</h2>
<p>Weka هو مجموعة برامج مفتوحة المصدر لتعلم الآلة مكتوبة بلغة جافا، وتوفر واجهة رسومية سهلة الاستخدام.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> 2. تنسيق ملف ARFF</h2>
<p>هو التنسيق الأصلي لـ Weka، ويتكون من قسمين: الرأس (Header) والبيانات (Data).</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 21 14-14"/><path d="m14 5 5 5"/><path d="m15 2 7 7-2 2-7-7 2-2Z"/><path d="m9 11 1 1"/><path d="m5 15 1 1"/><path d="m2 18 1 1"/></svg> 3. معالجة البيانات (Preprocessing)</h2>
<p>تستخدم الفلاتر (Filters) في Weka لتنظيف وتحويل البيانات، مثل التعامل مع القيم المفقودة وتحويل القيم الرقمية إلى فئات.</p>
        `
      }
    }
  ],

  summary: {
    points: [
      'Weka is a GUI-based ML tool developed in Java at the University of Waikato.',
      'ARFF is the standard Weka format, consisting of @RELATION, @ATTRIBUTE, and @DATA.',
      'Data types in Weka include Numeric, Nominal, String, and Date.',
      'Weka Explorer is the primary interface for preprocessing and analysis.',
      'Filters are used to clean data (e.g., ReplaceMissingValues) or transform it (e.g., Discretize).',
      'Filters are split into Supervised/Unsupervised and Attribute/Instance hierarchies.',
      'Missing values are marked as "?" in ARFF files.',
      'Data preprocessing handles noise, incompleteness, and inconsistency to ensure quality.'
    ],
    pointsAr: [
      'Weka هي أداة تعلم آلة تعتمد على الواجهة الرسومية ومكتوبة بلغة Java.',
      'ARFF هو التنسيق القياسي لـ Weka ويتكون من Header و Data.',
      'يتم استخدام الفلاتر (Filters) لتنظيف وتحويل البيانات قبل النمذجة.',
      'الفلاتر تنقسم إلى خاضعة للإشراف (Supervised) وغير خاضعة للإشراف (Unsupervised).',
      'يتم تمثيل القيم المفقودة في Weka بعلامة الاستفهام "?".'
    ]
  },

  mcq: [
    {
      id: 'ds-l6-q1',
      question: 'Weka was developed at which university?',
      answers: [
        { id: 'a', text: 'Stanford University', isCorrect: false },
        { id: 'b', text: 'University of Waikato', isCorrect: true },
        { id: 'c', text: 'MIT', isCorrect: false },
        { id: 'd', text: 'Harvard University', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q2',
      question: 'Which tag in ARFF defines the name of the dataset?',
      answers: [
        { id: 'a', text: '@DATA', isCorrect: false },
        { id: 'b', text: '@ATTRIBUTE', isCorrect: false },
        { id: 'c', text: '@RELATION', isCorrect: true },
        { id: 'd', text: '@NAME', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q3',
      question: 'In an ARFF file, missing values are represented by:',
      answers: [
        { id: 'a', text: 'NULL', isCorrect: false },
        { id: 'b', text: 'NaN', isCorrect: false },
        { id: 'c', text: '?', isCorrect: true },
        { id: 'd', text: '-1', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q4',
      question: 'Which interface in Weka is used for batch data analysis and preprocessing?',
      answers: [
        { id: 'a', text: 'Experimenter', isCorrect: false },
        { id: 'b', text: 'Explorer', isCorrect: true },
        { id: 'c', text: 'KnowledgeFlow', isCorrect: false },
        { id: 'd', text: 'SimpleCLI', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q5',
      question: 'Nominal attributes in ARFF are defined using:',
      answers: [
        { id: 'a', text: 'Square brackets []', isCorrect: false },
        { id: 'b', text: 'Parentheses ()', isCorrect: false },
        { id: 'c', text: 'Curly braces {}', isCorrect: true },
        { id: 'd', text: 'Angle brackets <>', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q6',
      question: 'What type of filter modifies columns (features)?',
      answers: [
        { id: 'a', text: 'Instance Filter', isCorrect: false },
        { id: 'b', text: 'Attribute Filter', isCorrect: true },
        { id: 'c', text: 'Supervised Filter only', isCorrect: false },
        { id: 'd', text: 'Unsupervised Filter only', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q7',
      question: 'Which filter is used to convert NUMERIC attributes to NOMINAL?',
      answers: [
        { id: 'a', text: 'Normalize', isCorrect: false },
        { id: 'b', text: 'Discretize', isCorrect: true },
        { id: 'c', text: 'Standardize', isCorrect: false },
        { id: 'd', text: 'ReplaceMissingValues', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q8',
      question: 'Supervised filters are different from unsupervised filters because they:',
      answers: [
        { id: 'a', text: 'Are faster', isCorrect: false },
        { id: 'b', text: 'Do not require a class attribute', isCorrect: false },
        { id: 'c', text: 'Use information about the target/class attribute', isCorrect: true },
        { id: 'd', text: 'Only work on numeric data', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q9',
      question: 'The KnowledgeFlow interface in Weka uses a ________ approach.',
      answers: [
        { id: 'a', text: 'Menu-driven', isCorrect: false },
        { id: 'b', text: 'Command-line', isCorrect: false },
        { id: 'c', text: 'Visual drag-and-drop workflow', isCorrect: true },
        { id: 'd', text: 'Scripting', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q10',
      question: 'Which filter scales all numeric values to a range between 0 and 1?',
      answers: [
        { id: 'a', text: 'Standardize', isCorrect: false },
        { id: 'b', text: 'Normalize', isCorrect: true },
        { id: 'c', text: 'Discretize', isCorrect: false },
        { id: 'd', text: 'Remove', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q11',
      question: 'Weka is written in which programming language?',
      answers: [
        { id: 'a', text: 'Python', isCorrect: false },
        { id: 'b', text: 'C++', isCorrect: false },
        { id: 'c', text: 'Java', isCorrect: true },
        { id: 'd', text: 'R', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q12',
      question: 'The "Garbage In, Garbage Out" principle highlights the importance of:',
      answers: [
        { id: 'a', text: 'Fast algorithms', isCorrect: false },
        { id: 'b', text: 'Data Preprocessing', isCorrect: true },
        { id: 'c', text: 'Complex models', isCorrect: false },
        { id: 'd', text: 'Cloud storage', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q13',
      question: 'Which Weka interface is designed for large-scale algorithmic comparisons?',
      answers: [
        { id: 'a', text: 'Explorer', isCorrect: false },
        { id: 'b', text: 'Experimenter', isCorrect: true },
        { id: 'c', text: 'KnowledgeFlow', isCorrect: false },
        { id: 'd', text: 'SimpleCLI', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q14',
      question: 'How do you mark a comment in an ARFF file?',
      answers: [
        { id: 'a', text: '//', isCorrect: false },
        { id: 'b', text: '#', isCorrect: false },
        { id: 'c', text: '%', isCorrect: true },
        { id: 'd', text: '/*', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q15',
      question: 'Which filter would you use to remove an ID column from your data?',
      answers: [
        { id: 'a', text: 'Remove', isCorrect: true },
        { id: 'b', text: 'Discretize', isCorrect: false },
        { id: 'c', text: 'ReplaceMissingValues', isCorrect: false },
        { id: 'd', text: 'Resample', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q16',
      question: 'Which data type is used for categorical labels like "Red", "Blue", "Green"?',
      answers: [
        { id: 'a', text: 'NUMERIC', isCorrect: false },
        { id: 'b', text: 'NOMINAL', isCorrect: true },
        { id: 'c', text: 'STRING', isCorrect: false },
        { id: 'd', text: 'DATE', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q17',
      question: 'In the Weka Explorer, where can you find histograms of your data?',
      answers: [
        { id: 'a', text: 'Classify Tab', isCorrect: false },
        { id: 'b', text: 'Visualize Tab', isCorrect: false },
        { id: 'c', text: 'Preprocess Tab', isCorrect: true },
        { id: 'd', text: 'Associate Tab', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q18',
      question: 'Standardization scales data to have:',
      answers: [
        { id: 'a', text: 'Mean=1, StdDev=0', isCorrect: false },
        { id: 'b', text: 'Mean=0, StdDev=1', isCorrect: true },
        { id: 'c', text: 'Min=0, Max=1', isCorrect: false },
        { id: 'd', text: 'Sum=1', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q19',
      question: 'What happens when you apply a filter in Weka Explorer?',
      answers: [
        { id: 'a', text: 'The model is trained', isCorrect: false },
        { id: 'b', text: 'The data is visually updated in the memory buffer', isCorrect: true },
        { id: 'c', text: 'The source file is immediately overwritten', isCorrect: false },
        { id: 'd', text: 'Weka closes', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q20',
      question: 'Which task is NOT part of preprocessing?',
      answers: [
        { id: 'a', text: 'Handling missing values', isCorrect: false },
        { id: 'b', text: 'Attribute selection', isCorrect: false },
        { id: 'c', text: 'Predicting future stock prices', isCorrect: true },
        { id: 'd', text: 'Normalization', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q21',
      question: 'Attribute selection is used to:',
      answers: [
        { id: 'a', text: 'Increase dataset size', isCorrect: false },
        { id: 'b', text: 'Find the most relevant features', isCorrect: true },
        { id: 'c', text: 'Change data types', isCorrect: false },
        { id: 'd', text: 'Delete noisy rows', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q22',
      question: 'Data inconsistency refers to:',
      answers: [
        { id: 'a', text: 'Missing values', isCorrect: false },
        { id: 'b', text: 'Values outside the normal range', isCorrect: false },
        { id: 'c', text: 'Conflicts in data names or units', isCorrect: true },
        { id: 'd', text: 'Duplicate rows', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q23',
      question: 'The @ATTRIBUTE line follows which format?',
      answers: [
        { id: 'a', text: '@ATTRIBUTE <type> <name>', isCorrect: false },
        { id: 'b', text: '@ATTRIBUTE <name> <type>', isCorrect: true },
        { id: 'c', text: '@ATTRIBUTE <name> = <value>', isCorrect: false },
        { id: 'd', text: '@ATTRIBUTE <index>', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q24',
      question: 'Which Weka tab would you use to remove outliers?',
      answers: [
        { id: 'a', text: 'Classify', isCorrect: false },
        { id: 'b', text: 'Preprocess', isCorrect: true },
        { id: 'c', text: 'Cluster', isCorrect: false },
        { id: 'd', text: 'Visualize', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q25',
      question: 'Weka is an acronym for:',
      answers: [
        { id: 'a', text: 'Waikato Environment for Knowledge Analysis', isCorrect: true },
        { id: 'b', text: 'World Environment for Knowledge Access', isCorrect: false },
        { id: 'c', text: 'Wide Enterprise Knowledge Assistant', isCorrect: false },
        { id: 'd', text: 'Waikato Engine for Knowledge Analysis', isCorrect: false }
      ]
    }
  ]
};
