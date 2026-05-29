export const LECTURE = {
  subjectId: 'data-mining',
  number: 11,
  title: 'Section 5: SciPy Hierarchy Implementation',
  titleAr: 'القسم 5: تنفيذ SciPy الهرمي',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Tools for Hierarchical Clustering</h2>
<p>We typically use two libraries together:</p>
<ul>
    <li><strong>SciPy:</strong> Used for creating <em>Linkage Matrices</em> and plotting <em>Dendrograms</em>.</li>
    <li><strong>Scikit-Learn:</strong> Used for the actual <code>AgglomerativeClustering</code> model and assignments.</li>
</ul>

<h3>🔹 Hierarchical Workflow Functions</h3>
<table class="styled-table">
  <thead><tr><th>Library</th><th>Key Function / Parameter</th></tr></thead>
  <tbody>
    <tr><td><strong>SciPy</strong></td><td><code>sch.linkage(X, method='ward')</code>: Calculates the merge tree.</td></tr>
    <tr><td><strong>SciPy</strong></td><td><code>sch.dendrogram(linkage)</code>: Creates the visual tree diagram.</td></tr>
    <tr><td><strong>SciPy</strong></td><td><code>sch.fcluster(linkage, distance)</code>: Flattens the tree into clusters.</td></tr>
    <tr><td><strong>Sklearn</strong></td><td><code>AgglomerativeClustering()</code>: Direct clustering model.</td></tr>
    <tr><td><strong>Sklearn</strong></td><td><code>metric='euclidean'</code>: Sets distance calculation type.</td></tr>
    <tr><td><strong>Sklearn</strong></td><td><code>linkage='single' / 'complete'</code>: Sets the merge strategy.</td></tr>
  </tbody>
</table>

<h2>🔹 Code Workflow</h2>
<pre><code>import scipy.cluster.hierarchy as sch
from sklearn.cluster import AgglomerativeClustering

# 1. Plot Dendrogram first to see how many clusters are natural
dendrogram = sch.dendrogram(sch.linkage(X, method='ward'))

# 2. Fit the model
model = AgglomerativeClustering(n_clusters=3, metric='euclidean', linkage='ward')
labels = model.fit_predict(X)</code></pre>

<div class="lecture-img-container">
  <img src="/assets/img/data-mining/dendrogram.png" class="lecture-img" alt="Dendrogram Example">
  <span class="img-caption">Fig 4.2: Agglomerative Hierarchical Dendrogram Analysis</span>
</div>

<h2>🔹 Interpreting results</h2>
<p>The 'Ward' method minimizes the variance within clusters. Looking at the dendrogram, the longest vertical lines that aren't crossed by any horizontal line indicate the optimal number of clusters to 'cut'.</p>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Identifying the number of clusters from a dendrogram and the <code>linkage()</code> method from SciPy are common exam topics.</span></div>`,
        bodyAr: `<h2>🔹 أدوات التجميع الهرمي</h2>
<ul>
    <li><strong>SciPy:</strong> تُستخدم لإنشاء مصفوفات الربط ورسم الـ Dendrograms.</li>
    <li><strong>Scikit-Learn:</strong> تُستخدم لنموذج <code>AgglomerativeClustering</code> الفعلي.</li>
</ul>

<h3>🔹 وظائف مسار العمل</h3>
<table class="styled-table">
  <thead><tr><th>المكتبة</th><th>الوظيفة الأساسية</th></tr></thead>
  <tbody>
    <tr><td><strong>SciPy</strong></td><td><code>sch.linkage(...)</code>: يحسب شجرة الدمج.</td></tr>
    <tr><td><strong>SciPy</strong></td><td><code>sch.dendrogram(...)</code>: ينشئ مخطط الشجرة المرئي.</td></tr>
    <tr><td><strong>Sklearn</strong></td><td><code>AgglomerativeClustering()</code>: نموذج التجميع المباشر.</td></tr>
  </tbody>
</table>

<div class="lecture-img-container">
  <img src="/assets/img/data-mining/dendrogram.png" class="lecture-img" alt="Dendrogram Example">
  <span class="img-caption">الشكل 4.2: تحليل المخطط الشجري للتجميع الهرمي</span>
</div>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تحديد عدد المجموعات من مخطط Dendrogram واستخدام وظيفة <code>linkage()</code> من مكتبة SciPy هي مواضيع شائعة في الاختبارات.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Dendrogram: A visual map of cluster merges.",
      "Linkage Matrix: The data structure used by SciPy to store relations.",
      "Ward's Method: A common linkage criteria that minimizes inner cluster variance.",
      "Euclidean Distance: The 'straight-line' distance between points used by default."
    ],
    pointsAr: [
      "Dendrogram: خريطة مرئية لعمليات دمج المجموعات.",
      "مصفوفة الربط: هيكل البيانات المستخدم بواسطة SciPy لتخزين العلاقات.",
      "طريقة Ward: معيار ربط شائع يقلل من التباين داخل المجموعة.",
      "المسافة الإقليدية: مسافة 'الخط المستقيم' بين النقاط المستخدمة افتراضياً."
    ],
  },

  mcq: [
    {
      id: 'dm-s5-q1',
      question: "Which library is primarily used to plot the Dendrogram tree in Python?",
      questionAr: "أي مكتبة تُستخدم بشكل أساسي لرسم شجرة Dendrogram في بايثون؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Matplotlib', isCorrect: false },
        { id: 'b', text: 'SciPy', isCorrect: true },
        { id: 'c', text: 'Pandas', isCorrect: false },
        { id: 'd', text: 'NumPy', isCorrect: false },
      ],
    },
    {
      id: 'dm-s5-q2',
      question: "What is the name of the scikit-learn class for bottom-up hierarchical clustering?",
      questionAr: "ما هو اسم فئة scikit-learn للتجميع الهرمي من أسفل إلى أعلى؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'HierarchicalClustering', isCorrect: false },
        { id: 'b', text: 'TopDownClustering', isCorrect: false },
        { id: 'c', text: 'AgglomerativeClustering', isCorrect: true },
        { id: 'd', text: 'DendroCluster', isCorrect: false },
      ],
    },
    {
      id: 'dm-s5-q3',
      question: "In AgglomerativeClustering, what does 'ward' refer to?",
      questionAr: "في AgglomerativeClustering، إلى ماذا يشير 'ward'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A type of data', isCorrect: false },
        { id: 'b', text: 'The output format', isCorrect: false },
        { id: 'c', text: 'A linkage criteria that minimizes variance', isCorrect: true },
        { id: 'd', text: 'A scientist\'s name', isCorrect: false },
      ],
    },
    {
      id: 'dm-s5-q4',
      question: "Looking at a dendrogram, what do the horizontal lines represent?",
      questionAr: "عند النظر إلى المخطط الشجري (Dendrogram)، ماذا تمثل الخطوط الأفقية؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Data points', isCorrect: false },
        { id: 'b', text: 'A specific cluster merge', isCorrect: true },
        { id: 'c', text: 'Errors in data', isCorrect: false },
        { id: 'd', text: 'Outliers', isCorrect: false },
      ],
    },
    {
      id: 'dm-s5-q5',
      question: "What distance measure is typically used for linkage by default in Scikit-Learn?",
      questionAr: "ما هو مقياس المسافة الذي يُستخدم عادة للربط افتراضياً في Scikit-Learn؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Manhattan', isCorrect: false },
        { id: 'b', text: 'Euclidean', isCorrect: true },
        { id: 'c', text: 'Cosine', isCorrect: false },
        { id: 'd', text: 'Hamming', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s5-w1',
      question: "Explain the role of SciPy vs Scikit-Learn in hierarchical clustering projects.",
      questionAr: "اشرح دور SciPy مقابل Scikit-Learn في مشاريع التجميع الهرمي.",
      modelAnswer: "SciPy is used for the tree visualization (dendrogram) and linkage matrix. Scikit-Learn is used to perform the actual data grouping (model fitting) into a specific number of clusters.",
      modelAnswerAr: "تُستخدم SciPy لتصور الشجرة (dendrogram) ومصفوفة الربط. تُستخدم Scikit-Learn لإجراء تجميع البيانات الفعلي في عدد محدد من المجموعات.",
    },
    {
      id: 'dm-s5-w2',
      question: "How does a dendrogram help you decide the number of clusters (K)?",
      questionAr: "كيف يساعدك المخطط الشجري في تحديد عدد المجموعات (K)؟",
      modelAnswer: "By looking for the largest vertical distance where you can 'cut' the tree without intersecting many horizontal merge lines.",
      modelAnswerAr: "بالبحث عن أكبر مسافة عمودية حيث يمكنك 'قطع' الشجرة دون تقاطع العديد من خطوط الدمج الأفقية.",
    },
  ],
};
