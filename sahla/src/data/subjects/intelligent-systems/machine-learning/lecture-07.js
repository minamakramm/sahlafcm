export const LECTURE = {
  subjectId: 'machine-learning',
  number: 7,
  title: 'Section 2: K-Means Clustering — Python Practical',
  titleAr: 'القسم 2: تجميع K-Means الخوارزمي في بايثون - عملي',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Section 2: Implementing K-Means in Python (Scikit-Learn)</h2>
<p>This section entirely transitions from raw math to utilizing the powerful <code>scikit-learn</code> library to automatically handle the Unsupervised Learning clustering mathematically covered in Lecture 2 natively.</p>

<h3>🛠️ Loading and Understanding the Iris Dataset</h3>
<p>The famous Iris Dataset contains 150 flowers, grouped into 3 species. Each flower has 4 continuous geometric features: Sepal Length, Sepal Width, Petal Length, and Petal Width. We will attempt to cluster these flowers <em>without</em> giving the algorithm the species labels intuitively.</p>
<div style="background: var(--bg-tertiary); padding: 16px 20px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.95rem; border: 1px solid var(--border-subtle); margin-bottom: 16px; overflow-x: auto;">
import pandas as pd<br/>
import matplotlib.pyplot as plt<br/>
from sklearn.cluster import KMeans<br/>
<br/>
# Load the CSV perfectly natively<br/>
df = pd.read_csv('iris.csv')<br/>
X = df.iloc[:, [0, 1, 2, 3]].values  # Exclude strictly the target labels directly!
</div>

<h3>🧠 Executing Scikit-Learn K-Means</h3>
<p>Because finding the optimal mathematical starting points is notoriously tricky and can lead to local minima disasters natively, Scikit-learn implements <strong>K-Means++</strong> automatically to intelligently spread out the initial centroids safely.</p>
<div style="background: var(--bg-tertiary); padding: 16px 20px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.95rem; border: 1px solid var(--border-subtle); margin-bottom: 16px; overflow-x: auto;">
# Establish model: 3 Clusters, K-Means++, maximum 300 update loops universally<br/>
kmeans = KMeans(n_clusters=3, init='k-means++', max_iter=300, random_state=0)<br/>
<br/>
# Dynamically train and force point assignments identically natively<br/>
y_kmeans = kmeans.fit_predict(X)<br/>
<br/>
# Mathematically expose the converged final centroid coordinates strictly<br/>
centroids = kmeans.cluster_centers_
</div>

<h3>🎨 Visualizing Multidimensional Clusters</h3>
<p>We cannot geometrically sketch 4D space on a 2D screen properly natively. So we explicitly pick exactly two features (e.g., column 0 and column 1) to natively represent the clusters geographically entirely.</p>
<div style="background: var(--bg-tertiary); padding: 16px 20px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.95rem; border: 1px solid var(--border-subtle); margin-bottom: 16px; overflow-x: auto;">
# Plot all points dynamically. y_kmeans == 0 means "Cluster 1 natively"<br/>
plt.scatter(X[y_kmeans == 0, 0], X[y_kmeans == 0, 1], s=100, c='red', label='Iris-setosa')<br/>
plt.scatter(X[y_kmeans == 1, 0], X[y_kmeans == 1, 1], s=100, c='blue', label='Iris-versicolour')<br/>
plt.scatter(X[y_kmeans == 2, 0], X[y_kmeans == 2, 1], s=100, c='green', label='Iris-virginica')<br/>
<br/>
# Heavily plot the massive centroids explicitly<br/>
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:,1], s=100, c='yellow', label='Centroids')<br/>
plt.legend()
</div>

<h3>📉 The Elbow Method geometrically</h3>
<p>How did we know definitively to inherently set K=3 natively? We run the algorithm repeatedly for $K=1, 2, \\dots, 10$ and plot the Cost Function ($J$, or WCSS - Within-Cluster Sum of Squares). We look for the "Elbow" — the exact coordinate where the aggressive geometric drop suddenly flattens safely.</p>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Lab Handouts:</strong> <a href="/subjects/machine-learning/sections/Section 2-Kmeans  (1).pdf" target="_blank" class="pdf-link">Download Section 2 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 القسم العملي 2: تطبيق K-Means في بايثون</h2>
<p>هذا القسم العملي يترجم مفاهيم المحاضرة الثانية إلى أكواد عملية باستخدام <code>scikit-learn</code>.</p>

<h3>🛠️ مجموعة بيانات زهرة السوسن (Iris)</h3>
<p>مجموعة بينات تحتوي على 150 عينة (3 فصائل لكل منها 50 نبتة). ونريد استخراج الفصائل والخواص لها حصرياً دون الرجوع للأسماء وتسمياتها المسبقة، لذلك سنخفي عامود الأسماء من قاعدة البينات لتطبيق التجميع الغير خاضع للاشراف.</p>

<h3>🧠 استخدام مكتبة سكايكيت ليرن (Scikit-Learn)</h3>
<p>في بايثون، نستخدم <code>KMeans</code> مع خيار البدايات الآمنة <code>k-means++</code> لضمان عدم السقوط في القيعان المحلية وتجنب الأخطاء العشوائية. ثم نستعرض النتائج باستخدام وظيفة <code>fit_predict()</code>.</p>

<h3>📈 طريقة المرفق (The Elbow Method)</h3>
<p>لمعرفة كيف قمنا باختيار K=3 بشكل مؤكد. يتم تشغيل الخوارزمية وتجربتها لـ K=1 ثم 2 ثم 3 وحتى الوصول لرقم أكبر، ليتم التركيز واستخراج مكان "المرفق المفصل" (Elbow point) أو الانحدار الزاوي والذي هو المكان الذي يهبط فيه الرسم بانحناء واسع قبل ان يتسطح ويكسر المحور بنسبة محدودة، وهي دلالة لقيمة 3.</p>`
      }
    }
  ],
  
  summary: {
    points: [
      "The Iris dataset is structurally handled by strictly dropping all textual target labels for Unsupervised analysis.",
      "K-Means++ mathematically forces centroids to initiate distantly far apart intelligently natively.",
      "kmeans.fit_predict(X) physically trains the model and explicitly outputs final cluster assignments instantly.",
      "kmeans.cluster_centers_ holds the absolute final (X,Y,Z...) coordinates mathematically of the K centroids.",
      "The Elbow Method graphs exactly WCSS (Cost J) against K values entirely to explicitly select optimal clusters natively."
    ],
    pointsAr: [
      "في قاعدة بينات أيريس Iris نضطر لحذف عواميد أسامي النباتات وأهداف النواتج لكي ندرب النموذج على التعلم غير إشرافي.",
      "تتغلب الـ K-Means++ على بدايات K-means السيئة بنشر وتفرقه نقاط المجموعات المراكز أطيافاً واسعة المدى.",
      "الأوامر بصيغة البايثون الفعلي (kmeans.fit_predict) ينفذ حلقة التحديث ودمج وتعيين المسافات دفعة وحيدة.",
      "وتخزن أبعاد وإحداثيات المراكز بالمصفوفة kmeans.cluster_centers_",
      "مبدأ طريقة המרفق (Elbow Method) يساعدنا بقوة بتخصيص الرقم 3 لمعطيات قاعدة آيرس بناءً على معدل وتراجع الخسارة."
    ]
  },

  mcq: [
    {
      id: 'ml-l7-q1',
      question: "In Python Scikit-Learn naturally, if you want exactly the final massive coordinates of all 3 geometric cluster centroids natively, you access what array explicitly?",
      questionAr: "بالحوسبة مع مكتبات سكايكيت לيرن في بايثون(Sklearn)، لو أردت تحديدًا استدعاء وإظهار القيمة المتقاربة لمعطيات الإحداثيات الكبرى للمراكز بشكل صريح لثلاث مجموعات، اي نداء للمصفوفة ستتخذه؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'kmeans.centroids explicitly natively', isCorrect: false },
        { id: 'b', text: 'kmeans.cluster_centers_ completely safely', isCorrect: true },
        { id: 'c', text: 'kmeans.points natively', isCorrect: false },
        { id: 'd', text: 'kmeans.labels_ universally identically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l7-q2',
      question: "When natively applying the Elbow Method dynamically, the Vertical Y-Axis strictly represents:",
      questionAr: "في التطبيقات الفنية والديناميكية لـ طريقة المرفق(The Elbow)، المحور العمودي( الصادي) يعكس حصرياً:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The K values logically natively', isCorrect: false },
        { id: 'b', text: 'The number of iterations dynamically reliably', isCorrect: false },
        { id: 'c', text: 'The WCSS (Within-Cluster Sum of Squares, or Cost J) natively exclusively', isCorrect: true },
        { id: 'd', text: 'The learning rate structurally locally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l7-q3',
      question: "In standard mathematical Scikit-Learn, fit_predict(X) identically performs what two major operations instantaneously?",
      questionAr: "في خراطيش الأوامر المعيارية (Scikit Learn)، تقوم الدالة الوظيفية fit_predict(X) بتنفيذ اي من الأهداف والمراحل الآنية بشكل لحظي معاً؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'It mathematically runs K-Means convergence explicitly AND rigidly returns an index array containing the cluster ID (0, 1, or 2) for every single flower strictly', isCorrect: true },
        { id: 'b', text: 'It inherently creates a geometric scatter plot entirely securely', isCorrect: false },
        { id: 'c', text: 'It cleans missing array nulls naturally safely', isCorrect: false },
        { id: 'd', text: 'It standardizes and shrinks the dimensions dynamically explicitly', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l7-w1',
      question: "Explain identically practically why X = df.iloc[:, [0, 1, 2, 3]].values safely avoids taking column 4.",
      questionAr: "فسر بنطاقات علمية محكمة، لماذا استعانة الكود بـ ( X = df.iloc[:, [0, 1, 2, 3]].values) يحل ويتلافى ادراج العامود رقم 4 بقوة.",
      modelAnswer: "In pandas iloc, indices statically start at exactly 0. Arrays natively contain: 0=SepalLength, 1=SepalWidth, 2=PetalLength, 3=PetalWidth, and 4=SpeciesLabel. Since K-Means is heavily Unsupervised natively, feeding it purely the target labels (index 4) would explicitly destroy the entire geometric point of clustering safely, so we rigidly exclude column 4 natively.",
      modelAnswerAr: "بأروقة مكتبة pandas للمخططات iloc تبدأ المؤشرات طبيعياً وتصاعدياً من الصفر تماماً. مما يقابل (0 لطول السبلات و 1 لعرض السيبالات وال2 لأطوال البتيلا وال3 لسمك وحجم بيتيلا زهرة ايريس). أما المؤشر ذو الرقم الـ (4) فهو ينطوي كلياً على الاسماء المرجعية. وتعتبر الخوارزميات (Unsupervised الغير مفحوصة)، سيعطل تغذية النماذج بعامود الهدف سير العملية وسيغش النتائج، لذا نستبعد كعزل تام عامود الإجابة وهو العامل 4."
    }
  ]
};
