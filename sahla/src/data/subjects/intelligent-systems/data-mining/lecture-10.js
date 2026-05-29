export const LECTURE = {
  subjectId: 'data-mining',
  number: 10,
  title: 'Section 4: Scikit-Lean Implementation',
  titleAr: 'القسم 4: تنفيذ Scikit-Lean',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h3>🔹 Scikit-Learn Class Functions</h3>
<p>All core models follow the <strong>Import -> Initialize -> Fit -> Predict</strong> pattern.</p>

<table class="styled-table">
  <thead><tr><th>Function/Attribute</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><code>KMeans(n_clusters=K)</code></td><td>Initialize model with K targeted clusters.</td></tr>
    <tr><td><code>model.fit(X)</code></td><td>Train the model on features X (Calculates Centroids).</td></tr>
    <tr><td><code>model.predict(X)</code></td><td>Assign new data points X to the nearest clusters.</td></tr>
    <tr><td><code>model.fit_predict(X)</code></td><td>Execute training and assignment in a single step.</td></tr>
    <tr><td><code>model.cluster_centers_</code></td><td>Attribute: Coordinates of the final centroids.</td></tr>
    <tr><td><code>model.labels_</code></td><td>Attribute: Array of cluster IDs for each training point.</td></tr>
    <tr><td><code>model.inertia_</code></td><td>Attribute: Sum of distances (Total Error). Smaller is better.</td></tr>
    <tr><td><code>StandardScaler().fit_transform(X)</code></td><td>Standardizes data (Mean=0, StdDev=1).</td></tr>
    <tr><td><code>silhouette_score(X, labels)</code></td><td>Calculates how well-defined the clusters are.</td></tr>
  </tbody>
</table>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> The <code>cluster_centers_</code> attribute and <code>fit_predict()</code> method are frequently tested in code-interpretation questions.</span></div>

<h2>🔹 Implementing K-Means Example</h2>
<pre><code>from sklearn.cluster import KMeans
# 1. Initialize
model = KMeans(n_clusters=3)
# 2. Fit and Predict
labels = model.fit_predict(df[['x', 'y']])
# 3. Get Centroids
centers = model.cluster_centers_</code></pre>

<h2>🔹 The Cluster Evaluation</h2>
<p>Once clusters are formed, it is essential to visualize the <strong>Centroids</strong> on top of the original data. If centroids are in the middle of data groupings, the model is likely accurate.</p>
<div class="callout callout-info"><span class="callout-icon">ℹ️</span><span><strong>Preprocessing:</strong> Remember to handle missing values and scale data before clustering, as distance measures are sensitive to different units.</span></div>`,
        bodyAr: `<h3>🔹 وظائف Scikit-Learn</h3>
<p>تتبع جميع النماذج الأساسية نمط <strong>Import -> Initialize -> Fit -> Predict</strong>.</p>

<table class="styled-table">
  <thead><tr><th>الوظيفة/الخاصية</th><th>الإجراء</th></tr></thead>
  <tbody>
    <tr><td><code>KMeans(n_clusters=K)</code></td><td>إهيئة النموذج بـ K مجموعة.</td></tr>
    <tr><td><code>model.fit(X)</code></td><td>تدريب النموذج على البيانات X.</td></tr>
    <tr><td><code>model.fit_predict(X)</code></td><td>التدريب وتعيين التسميات في خطوة واحدة.</td></tr>
    <tr><td><code>model.cluster_centers_</code></td><td>الوصول إلى إحداثيات المراكز النهائية.</td></tr>
  </tbody>
</table>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> خاصية <code>cluster_centers_</code> وطريقة <code>fit_predict()</code> هي مواضيع متكررة في الامتحانات.</span></div>

<h2>🔹 التقييم</h2>
<p>من الضروري تصور <strong>المراكز (Centroids)</strong> فوق البيانات الأصلية. إذا كانت المراكز في منتصف تجمعات البيانات، فمن المحتمل أن يكون النموذج دقيقاً.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "The fit_predict() method performs both training and assignment.",
      "n_clusters: The 'K' parameter representing target groups.",
      "cluster_centers_: Attribute containing coordinates of centroids.",
      "Standardization: Scaling data so one feature doesn't dominate based on unit size."
    ],
    pointsAr: [
      "طريقة fit_predict() تقوم بكل من التدريب والتعيين.",
      "n_clusters: معامل 'K' الذي يمثل المجموعات المستهدفة.",
      "cluster_centers_: الخاصية التي تحتوي على إحداثيات المراكز.",
      "التقييس (Standardization): توسيع نطاق البيانات بحيث لا تهيمن ميزة واحدة بناءً على حجم الوحدة."
    ],
  },

  mcq: [
    {
      id: 'dm-s4-q1',
      question: "Which scikit-learn module contains the KMeans algorithm?",
      questionAr: "أي وحدة في scikit-learn تحتوي على خوارزمية KMeans؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'sklearn.classification', isCorrect: false },
        { id: 'b', text: 'sklearn.cluster', isCorrect: true },
        { id: 'c', text: 'sklearn.regression', isCorrect: false },
        { id: 'd', text: 'sklearn.data', isCorrect: false },
      ],
    },
    {
      id: 'dm-s4-q2',
      question: "Which method combines training the model and assigning items to clusters in Scikit-Learn?",
      questionAr: "أي طريقة تجمع بين تدريب النموذج وتعيين العناصر للمجموعات في Scikit-Learn؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'fit()', isCorrect: false },
        { id: 'b', text: 'predict()', isCorrect: false },
        { id: 'c', text: 'fit_predict()', isCorrect: true },
        { id: 'd', text: 'assign()', isCorrect: false },
      ],
    },
    {
      id: 'dm-s4-q3',
      question: "What is the parameter name for defining the number of clusters in KMeans?",
      questionAr: "ما هو اسم المعامل المستخدم لتعريف عدد المجموعات في KMeans؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'k_value', isCorrect: false },
        { id: 'b', text: 'clusters', isCorrect: false },
        { id: 'c', text: 'n_clusters', isCorrect: true },
        { id: 'd', text: 'groups', isCorrect: false },
      ],
    },
    {
      id: 'dm-s4-q4',
      question: "After training, where are the centroid coordinates stored in a KMeans object?",
      questionAr: "بعد التدريب، أين يتم تخزين إحداثيات المراكز في كائن KMeans؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'centroids_', isCorrect: false },
        { id: 'b', text: 'centers_', isCorrect: false },
        { id: 'c', text: 'cluster_centers_', isCorrect: true },
        { id: 'd', text: 'midpoints_', isCorrect: false },
      ],
    },
    {
      id: 'dm-s4-q5',
      question: "If data points are measured in different units (e.g. Grams and KM), what should you do?",
      questionAr: "إذا تم قياس نقاط البيانات بوحدات مختلفة (مثل جرام و كم)، فماذا يجب أن تفعل؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Nothing', isCorrect: false },
        { id: 'b', text: 'Double the values', isCorrect: false },
        { id: 'c', text: 'Standardize/Scale the data', isCorrect: true },
        { id: 'd', text: 'Ignore the KM column', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s4-w1',
      question: "Briefly describe the 'Import-Initialize-Fit' workflow in Scikit-Learn.",
      questionAr: "صف باختصار مسار العمل 'Import-Initialize-Fit' في Scikit-Learn.",
      modelAnswer: "1. Import the class (e.g. KMeans). 2. Initialize the model with parameters (e.g. n_clusters=3). 3. Fit the model to the data to learn/assign clusters.",
      modelAnswerAr: "1. استيراد الفئة (مثل KMeans). 2. تهيئة النموذج بالمعاملات (مثل n_clusters=3). 3. ربط (Fit) النموذج بالبيانات لتعلم/تعيين المجموعات.",
    },
    {
      id: 'dm-s4-w2',
      question: "How do you visualize centroids in a plot after running K-Means?",
      questionAr: "كيف يمكنك تصور المراكز (Centroids) في رسم بياني بعد تشغيل K-Means؟",
      modelAnswer: "Using plt.scatter() with the X and Y coordinates stored in the 'cluster_centers_' attribute of the model.",
      modelAnswerAr: "باستخدام plt.scatter() مع إحداثيات X و Y المخزنة في الخاصية 'cluster_centers_' للنموذج.",
    },
  ],
};
