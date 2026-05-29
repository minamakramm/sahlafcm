export const LECTURE = {
  subjectId: 'data-mining',
  number: 9,
  title: 'Section 3: Data Visualization',
  titleAr: 'القسم 3: تصور البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Why Visualize?</h2>
<p>Vision is the fastest human sense for pattern recognition. Visualization helps identify <strong>clusters</strong>, <strong>trends</strong>, and <strong>outliers</strong> that summary statistics might miss.</p>

<h2>🔹 Matplotlib vs. Seaborn</h2>
<ul>
    <li><strong>Matplotlib:</strong> The low-level foundation. Total control over every pixel but requires more code.</li>
    <li><strong>Seaborn:</strong> High-level library built on Matplotlib. Creates beautiful statistical graphics with single commands.</li>
</ul>

<h2>🔹 Essential Plot Types</h2>
<table class="styled-table">
  <thead><tr><th>Plot Type</th><th>When to use?</th></tr></thead>
  <tbody>
    <tr><td><strong>Scatter Plot</strong></td><td>Showing relationship between two numeric variables.
    <div class="lecture-img-container">
      <img src="/assets/img/data-mining/scatter-clusters.png" class="lecture-img" alt="Scatter Plot">
      <span class="img-caption">Visualizing data correlation and clusters</span>
    </div></td></tr>
    <tr><td><strong>Histogram</strong></td><td>Distribution of a single numeric variable (Frequency).</td></tr>
    <tr><td><strong>Box Plot</strong></td><td>Showing distributions and identifying outliers (Quartiles).
    <div class="lecture-img-container">
      <img src="/assets/img/data-mining/box-plots.png" class="lecture-img" alt="Box Plot">
      <span class="img-caption">Identifying outliers and median values</span>
    </div></td></tr>
    <tr><td><strong>Heatmap</strong></td><td>Visualizing correlation matrices or 2D density.
    <div class="lecture-img-container">
      <img src="/assets/img/data-mining/heatmap.png" class="lecture-img" alt="Heatmap">
      <span class="img-caption">Color-coded correlation matrix analysis</span>
    </div></td></tr>
  </tbody>
</table>

<h3>🔹 Visualization Functional Summary</h3>
<table class="styled-table">
  <thead><tr><th>Library</th><th>Function</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><strong>Matplotlib</strong></td><td><code>plt.scatter(x, y)</code></td><td>Creates a scatter plot for correlation analysis.</td></tr>
    <tr><td><strong>Matplotlib</strong></td><td><code>plt.hist(data)</code></td><td>Creates a frequency distribution histogram.</td></tr>
    <tr><td><strong>Matplotlib</strong></td><td><code>plt.boxplot(data)</code></td><td>Visualizes quartiles, median, and outliers.</td></tr>
    <tr><td><strong>Matplotlib</strong></td><td><code>plt.bar(x, height)</code></td><td>Creates a vertical bar chart for categorical data.</td></tr>
    <tr><td><strong>Matplotlib</strong></td><td><code>plt.plot(x, y)</code></td><td>Draws a line plot (often for time-series).</td></tr>
    <tr><td><strong>Matplotlib</strong></td><td><code>plt.title() / plt.show()</code></td><td>Sets the chart title and renders the plot.</td></tr>
    <tr><td><strong>Seaborn</strong></td><td><code>sns.heatmap(df.corr())</code></td><td>Displays a color-coded correlation matrix.</td></tr>
    <tr><td><strong>Seaborn</strong></td><td><code>sns.pairplot(df)</code></td><td>Generates a grid of scatter plots for every column pair.</td></tr>
    <tr><td><strong>Seaborn</strong></td><td><code>sns.boxplot(x, y, data)</code></td><td>Enhanced Seaborn box plots (grouped by category).</td></tr>
    <tr><td><strong>Seaborn</strong></td><td><code>sns.countplot(x='cat')</code></td><td>Shows the counts of observations in each category.</td></tr>
  </tbody>
</table>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Scatter plots are almost always tested in relation to identifying clusters before running K-Means.</span></div>`,
        bodyAr: `<h2>🔹 لماذا التصور؟</h2>
<p>البصر هو أسرع حاسة بشرية للتعرف على الأنماط. يساعد التصور في تحديد <strong>المجموعات</strong>، <strong>الاتجاهات</strong>، و <strong>القيم المتطرفة</strong>.</p>

<h2>🔹 Matplotlib مقابل Seaborn</h2>
<ul>
    <li><strong>Matplotlib:</strong> الأساس منخفض المستوى. تحكم كامل ولكن يتطلب المزيد من الكود.</li>
    <li><strong>Seaborn:</strong> مكتبة عالية المستوى مبنية على Matplotlib. تنشئ رسومات إحصائية جميلة بأوامر بسيطة.</li>
</ul>

<h2>🔹 أنواع الرسوم البيانية الأساسية</h2>
<table class="styled-table">
  <thead><tr><th>نوع الرسم</th><th>متى يستخدم؟</th></tr></thead>
  <tbody>
    <tr><td><strong>المبعثر (Scatter Plot)</strong></td><td>لعرض العلاقة بين متغيرين رقميين وتحديد المجموعات.
    <div class="lecture-img-container">
      <img src="/assets/img/data-mining/scatter-clusters.png" class="lecture-img" alt="Scatter Plot">
      <span class="img-caption">تصور الارتباط العنقودي للبيانات</span>
    </div></td></tr>
    <tr><td><strong>المدرج التكراري (Histogram)</strong></td><td>لعرض توزيع متغير رقمي واحد.</td></tr>
    <tr><td><strong>الصندوقي (Box Plot)</strong></td><td>لعرض التوزيـعات وتحديد القيم المتطرفة (Outliers).
    <div class="lecture-img-container">
      <img src="/assets/img/data-mining/box-plots.png" class="lecture-img" alt="Box Plot">
      <span class="img-caption">تحديد القيم المتطرفة والوسيط الإحصائي</span>
    </div></td></tr>
    <tr><td><strong>الخريطة الحرارية (Heatmap)</strong></td><td>لتصور مصفوفة الارتباط (Correlation Matrix).
    <div class="lecture-img-container">
      <img src="/assets/img/data-mining/heatmap.png" class="lecture-img" alt="Heatmap">
      <span class="img-caption">تحليل مصفوفة الارتباط الملونة</span>
    </div></td></tr>
  </tbody>
</table>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> يتم دائمًا اختبار الرسوم المبعثرة فيما يتعلق بتحديد المجموعات بصريًا قبل تنفيذ خوارزمية K-Means.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Scatter plots reveal correlations and potential clusters.",
      "Histograms show the 'shape' of the data (Normal, Skewed).",
      "Seaborn specializes in statistical relationships and complex heatmaps.",
      "Visual inspection is a critical first step in Exploratory Data Analysis (EDA)."
    ],
    pointsAr: [
      "تكشف الرسوم المبعثرة (Scatter plots) عن الارتباطات والمجموعات المحتملة.",
      "تظهر الرسوم التكرارية (Histograms) 'شكل' البيانات.",
      "تتخصص Seaborn في العلاقات الإحصائية والخرائط الحرارية المعقدة.",
      "الفحص البصري هو خطوة أولى حاسمة في تحليل البيانات الاستكشافي (EDA)."
    ],
  },

  mcq: [
    {
      id: 'dm-s3-q1',
      question: "Which plot type is most effective for visualizing the relationship between two numeric variables?",
      questionAr: "أي نوع من الرسوم البيانية هو الأكثر فعالية لتصور العلاقة بين متغيرين رقميين؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Pie Chart', isCorrect: false },
        { id: 'b', text: 'Histogram', isCorrect: false },
        { id: 'c', text: 'Scatter Plot', isCorrect: true },
        { id: 'd', text: 'Bar Chart', isCorrect: false },
      ],
    },
    {
      id: 'dm-s3-q2',
      question: "Which library is Seaborn built on top of?",
      questionAr: "بنيت مكتبة Seaborn فوق أي مكتبة أخرى؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Pandas', isCorrect: false },
        { id: 'b', text: 'Matplotlib', isCorrect: true },
        { id: 'c', text: 'NumPy', isCorrect: false },
        { id: 'd', text: 'Scikit-Learn', isCorrect: false },
      ],
    },
    {
      id: 'dm-s3-q3',
      question: "What does a Box Plot primarily help identify?",
      questionAr: "ما الذي يساعد الرسم الصندوقي (Box Plot) في تحديده بشكل أساسي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Exact data values', isCorrect: false },
        { id: 'b', text: 'Network connections', isCorrect: false },
        { id: 'c', text: 'Outliers and quartiles', isCorrect: true },
        { id: 'd', text: 'Code errors', isCorrect: false },
      ],
    },
    {
      id: 'dm-s3-q4',
      question: "Which function command in Matplotlib is used to render and show the generated plot?",
      questionAr: "أي أمر وظيفة في Matplotlib يُستخدم لتصيير وعرض الرسم البياني الناتج؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'plt.render()', isCorrect: false },
        { id: 'b', text: 'plt.display()', isCorrect: false },
        { id: 'c', text: 'plt.show()', isCorrect: true },
        { id: 'd', text: 'plt.print()', isCorrect: false },
      ],
    },
    {
      id: 'dm-s3-q5',
      question: "A histogram is most effective for visualizing the distribution of:",
      questionAr: "الرسم التكراري (Histogram) هو الأكثر فعالية لتصور توزيع:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'One numeric variable', isCorrect: true },
        { id: 'b', text: 'Two numeric variables', isCorrect: false },
        { id: 'c', text: 'Categorical relationships', isCorrect: false },
        { id: 'd', text: 'Pie slices', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s3-w1',
      question: "Why is a scatter plot often the starting point for K-Means clustering analysis?",
      questionAr: "لماذا غالباً ما يكون الرسم المبعثر هو نقطة الانطلاق لتحليل تجميع K-Means؟",
      modelAnswer: "It allows the data scientist to visually confirm if groups/clusters exist in the data before running the mathematical algorithm.",
      modelAnswerAr: "يسمح لعالم البيانات بالتأكد بصرياً من وجود مجموعات في البيانات قبل تشغيل الخوارزمية الرياضية.",
    },
    {
      id: 'dm-s3-w2',
      question: "Compare Matplotlib and Seaborn based on their level of abstraction and ease of use.",
      questionAr: "قارن بين Matplotlib و Seaborn بناءً على مستوى التجريد وسهولة الاستخدام.",
      modelAnswer: "Matplotlib is the low-level base engine (more control, more code). Seaborn is a high-level statistical layer built on top of it (easier to use, better default styling for complex plots).",
      modelAnswerAr: "Matplotlib هو المحرك الأساسي منخفض المستوى (تحكم أكثر، كود أكثر). Seaborn هي طبقة إحصائية عالية المستوى مبنية فوقه (أسهل في الاستخدام، تنسيق افتراضي أفضل).",
    },
  ],
};
