export const LECTURE = {
  subjectId: 'data-mining',
  number: 12,
  title: 'Section 6: Mall Customer Case Study',
  titleAr: 'القسم 6: دراسة حالة عملاء المول',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Practical Hierarchical Clustering</h2>
<p>Working with real-world <code>Mall_Customers_dataset.csv</code> to segment customers based on <strong>Annual Income</strong> and <strong>Spending Score</strong>.</p>

<h3>📂 Mall Customers Workflow</h3>
<pre><code>import pandas as pd
import scipy.cluster.hierarchy as sch
from sklearn.cluster import AgglomerativeClustering
import matplotlib.pyplot as plt

shopping_data = pd.read_csv('Mall_Customers_dataset.csv')

# Selection: Annual Income and Spending Score
data = shopping_data.iloc[:, 3:5].values

# 1. Truncated Dendrogram for Clarity
dendrogram = sch.dendrogram(sch.linkage(data, 'single'), 
                            truncate_mode="lastp", p=10)
plt.show()

# 2. Final Clustering (K=5)
cluster = AgglomerativeClustering(n_clusters=5, metric='euclidean', linkage='single')
cluster.fit_predict(data)

# 3. Visualize
plt.scatter(data[:,0], data[:,1], c=cluster.labels_, cmap='rainbow')
plt.show()</code></pre>

<h3>🔹 Key Parameters</h3>
<ul>
  <li><strong>truncate_mode='lastp':</strong> Reduces visual noise by only showing the final p merges.</li>
  <li><strong>iloc[:, 3:5]:</strong> Selects the specific feature columns from the dataset.</li>
  <li><strong>cmap='rainbow':</strong> Applies a color map to differentiate clusters visually.</li>
</ul>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> The usage of <code>iloc[:, 3:5]</code> for feature selection in the Mall Customers activity is a highly frequent code-interpretation question.</span></div>`,
        bodyAr: `<h2>🔹 دراسة حالة عملاء المول</h2>
<p>العمل مع ملف <code>Mall_Customers_dataset.csv</code> لتقسيم العملاء بناءً على <strong>الدخل السنوي</strong> و <strong>درجة الإنفاق</strong>.</p>

<h3>📂 مسار العمل</h3>
<ul>
    <li>تحميل البيانات باستخدام Pandas.</li>
    <li>اختيار الأعمدة ذات الصلة (الدخل والإنفاق).</li>
    <li>رسم Dendrogram مختصر (Truncated) للوضوح.</li>
    <li>تدريب نموذج التجميع الهرمي K=5.</li>
    <li>تصور المجموعات الناتجة باستخدام خريطة ألوان.</li>
</ul>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> يعد استخدام <code>iloc[:, 3:5]</code> لاختيار الميزات في نشاط عملاء المول سؤالاً متكرراً في تتبع الكود في الامتحانات.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Single Linkage defines distance as the MIN between any two points in different clusters.",
      "truncate_mode='lastp' reduces visual noise by only showing the final p merges.",
      "Slicing data[:, 3:5] selects the Specific Features needed for the analysis.",
      "The Rainbow cmap is often used to differentiate formed clusters visually."
    ],
    pointsAr: [
      "الربط الأحادي يحدد المسافة كأدنى مسافة بين أي نقطتين في مجموعات مختلفة.",
      "truncate_mode='lastp' يقلل من الضوضاء البصرية من خلال إظهار عمليات الدمج النهائية فقط.",
      "التقطيع data[:, 3:5] يختار الميزات المحددة اللازمة للتحليل.",
      "تُستخدم خريطة ألوان Rainbow غالباً لتمييز المجموعات المتكونة بصرياً."
    ],
  },

  mcq: [
    {
      id: 'dm-s6-q1',
      question: "In the provided code, which parameter is used to limit the dendrogram to the final 10 branches?",
      questionAr: "في الكود المقدم، ما هو المعامل المستخدم لقصر الـ dendrogram على آخر 10 فروع؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'max_depth=10', isCorrect: false },
        { id: 'b', text: "truncate_mode='lastp', p=10", isCorrect: true },
        { id: 'c', text: 'limit_tree(10)', isCorrect: false },
        { id: 'd', text: 'cut_height=10', isCorrect: false },
      ],
    },
    {
      id: 'dm-s6-q2',
      question: "When calling plt.scatter, what does 'c=cluster.labels_' accomplish?",
      questionAr: "عند استدعاء plt.scatter، ماذا يحقق 'c=cluster.labels_'؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Colors the points based on their assigned cluster', isCorrect: true },
        { id: 'b', text: 'Names each point with a label', isCorrect: false },
        { id: 'c', text: 'Draws lines between points', isCorrect: false },
        { id: 'd', text: 'Sets the size of the points', isCorrect: false },
      ],
    },
    {
      id: 'dm-s6-q3',
      question: "Which library was used to calculate the linkage matrix for the dendrogram in the exercise?",
      questionAr: "أي مكتبة تم استخدامها لحساب مصفوفة الربط للـ dendrogram في التمرين؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Scikit-Learn', isCorrect: false },
        { id: 'b', text: 'Pandas', isCorrect: false },
        { id: 'c', text: 'SciPy (sch.linkage)', isCorrect: true },
        { id: 'd', text: 'NumPy', isCorrect: false },
      ],
    },
    {
      id: 'dm-s6-q4',
      question: "What does shopping_data.iloc[:, 3:5] specifically select?",
      questionAr: "ماذا تختار shopping_data.iloc[:, 3:5] تحديداً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Rows 3 through 5', isCorrect: false },
        { id: 'b', text: 'All rows, columns at index 3 and 4', isCorrect: true },
        { id: 'c', text: 'The first 3 rows', isCorrect: false },
        { id: 'd', text: 'The header and row 5', isCorrect: false },
      ],
    },
    {
      id: 'dm-s6-q5',
      question: "Which linkage method was explicitly used in the mall customer exercise?",
      questionAr: "أي طريقة ربط تم استخدامها صراحة في تمرين عملاء المول؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'ward', isCorrect: false },
        { id: 'b', text: 'average', isCorrect: false },
        { id: 'c', text: 'single', isCorrect: true },
        { id: 'd', text: 'complete', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s6-w1',
      question: "Why is 'truncate_mode' useful when working with large datasets like the Mall Customers file?",
      questionAr: "لماذا يعد 'truncate_mode' مفيداً عند العمل مع مجموعات بيانات كبيرة مثل ملف عملاء المول؟",
      modelAnswer: "With 100+ points, a full dendrogram becomes unreadable (too many lines). Truncating to the last 'p' clusters allows you to see the final high-level merges clearly.",
      modelAnswerAr: "مع وجود أكثر من 100 نقطة، يصبح الـ dendrogram الكامل غير قابل للقراءة. يسمح الاختصار لآخر 'p' مجموعة برؤية عمليات الدمج النهائية عالية المستوى بوضوح.",
    },
    {
      id: 'dm-s6-w2',
      question: "In the code 'cluster.fit_predict(data)', what is the difference between this and just 'fit(data)'?",
      questionAr: "في الكود 'cluster.fit_predict(data)'، ما الفرق بينه وبين 'fit(data)' فقط؟",
      modelAnswer: "'fit' just calculates the merges. 'fit_predict' calculates the merges AND returns the specific cluster label (0, 1, 2...) for every row in the dataset immediately.",
      modelAnswerAr: "تقوم 'fit' فقط بحساب عمليات الدمج. تقوم 'fit_predict' بحساب عمليات الدمج وإرجاع تسمية المجموعة المحددة (0، 1، 2...) لكل صف في مجموعة البيانات على الفور.",
    },
  ],
};
