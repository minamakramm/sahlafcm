export const LECTURE = {
  subjectId: 'machine-learning',
  number: 2,
  title: 'Unsupervised Learning & K-Means',
  titleAr: 'التعلم غير الخاضع للإشراف و خوارزمية K-Means',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Unsupervised Learning</h2>
<p>Unlike Supervised Learning, Unsupervised Learning models operate on datasets with <strong>no target labels (no y)</strong>. The objective is to discover hidden structures, patterns, or groupings within the input data.</p>
<ul>
  <li><strong>Clustering:</strong> Grouping similar objects together (e.g., K-Means).</li>
  <li><strong>Dimensionality Reduction:</strong> Compressing data while retaining essential features (e.g., PCA).</li>
  <li><strong>Association:</strong> Finding rules that describe large datasets (e.g., users who buy X also buy Y).</li>
</ul>

<h2>🔹 K-Means Clustering</h2>
<p>The K-Means algorithm partitions a dataset into $K$ distinct, non-overlapping clusters. It ensures every data point belongs to the cluster with the most similar characteristics.</p>
<p><strong>The Algorithm:</strong></p>
<ol>
  <li><strong>Initialize:</strong> Randomly select $K$ points to be the initial centroids.</li>
  <li><strong>Assign:</strong> Calculate the distance from each data point to all $K$ centroids. Assign the data point to the closest centroid, forming temporary clusters.</li>
  <li><strong>Update:</strong> Calculate the mean of all points within each cluster to determine the new centroid coordinates.</li>
  <li><strong>Repeat:</strong> Repeat steps 2 and 3 until <em>convergence</em>.</li>
</ol>
<p>Convergence occurs when either the cluster assignments stop changing entirely, or a maximum number of iterations is reached.</p>

<h2>🔹 The Objective Function</h2>
<p>Mathematical goal: minimize the sum of squared distances between each point and its assigned centroid.</p>
$$ J = \\sum_{j=1}^{K} \\sum_{x_i \\in C_j} || x_i - \\mu_j ||^2 $$

<h2>🔹 Challenges with K-Means</h2>
<table class="styled-table">
  <thead><tr><th>Challenge</th><th>Details</th></tr></thead>
  <tbody>
    <tr><td><strong>Fixed K</strong></td><td>The algorithm cannot determine the best number of clusters automatically; $K$ must be provided manually.</td></tr>
    <tr><td><strong>Random Start Sensitive</strong></td><td>Poor initial centroids can cause the algorithm to get stuck in local minima, producing bad clusters. Solution: Use <strong>K-Means++</strong> initialization.</td></tr>
    <tr><td><strong>Shape Sensitivity</strong></td><td>K-Means assumes clusters are spherical. It struggles massively with crescent, elongated, or overlapping cluster shapes.</td></tr>
  </tbody>
</table>

<h2>🔹 Evaluation: Internal vs External Metrics</h2>
<p>If we don't have true labels, how do we know if the clustering is good?</p>
<ul>
  <li><strong>Internal Metrics (No labels):</strong> We want high <em>intra-cluster</em> similarity (tightness) and low <em>inter-cluster</em> similarity (separation). The <strong>Davies-Bouldin Index</strong> calculates this ratio. A lower DB index implies better clustering.</li>
  <li><strong>External Metrics (Labels exist):</strong> We compare the found clusters against ground truth labels using metrics like Mutual Information or Adjusted Random Index.</li>
</ul>

<h2>🔹 Determining K: The G-Means Algorithm</h2>
<p>G-Means is an extension that automatically determines $K$. It starts with a small $K$, runs K-Means, and then statistically tests each resulting cluster to see if the data within it follows a Gaussian (normal) distribution using the Anderson-Darling test. If a cluster is not Gaussian, G-Means automatically splits it in two and repeats the process until all clusters are Gaussian.</p>
<h2>🔹 Mathematical Walkthrough: K-Means & Davies-Bouldin</h2>
<p>Because this course is heavily mathematical, here are explicit calculation steps tested on the midterm:</p>
<div class="callout callout-info" style="background: rgba(30,58,138,0.2); border-left-color: #3b82f6;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>1. Executing K-Means (Assign Step)</strong><br/>
    Object X is at (2, 2). Initial Centroids: $C_1(0,0)$ and $C_2(10,10)$.<br/>
    • Dist to $C_1$: $\\sqrt{(2-0)^2 + (2-0)^2} = \\sqrt{4+4} = \\sqrt{8} \\approx 2.82$.<br/>
    • Dist to $C_2$: $\\sqrt{(10-2)^2 + (10-2)^2} = \\sqrt{64+64} = \\sqrt{128} \\approx 11.31$.<br/>
    • <b>Result:</b> X assigns strictly to $C_1$.<br/><br/>

    <strong>2. Executing K-Means (Update Step)</strong><br/>
    Cluster 1 now exclusively contains points $P_1(2,2), P_2(4,4), P_3(6,6)$.<br/>
    • New $C_1$ X-coord: $(2+4+6)/3 = 12/3 = $ <b>4</b>.<br/>
    • New $C_1$ Y-coord: $(2+4+6)/3 = 12/3 = $ <b>4</b>.<br/>
    • <b>Result:</b> $C_1$ dynamically moves to exactly <b>(4, 4)</b>.<br/><br/>

    <strong>3. Davies-Bouldin Index (Internal Metric)</strong><br/>
    Formula seeks (Variance of C_1 + Variance of C_2) / (Distance between C_1 & C_2).<br/>
    • If $Var(C_1)=10$, $Var(C_2)=20$, Distance=$5$.<br/>
    • DB Ratio = $\\frac{10 + 20}{5} = \\frac{30}{5} = $ <b>6.0</b>. (Lower is mathematically better).
  </div>
</div>

<h2>🔹 Additional Solved Examples: K-Means</h2>
<div class="callout callout-success" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
  <span class="callout-icon">✅</span>
  <div>
    <strong>Problem: Execute One Full Iteration of K-Means</strong><br/>
    Given a dataset with 4 points: $A(2, 4)$, $B(3, 3)$, $C(8, 8)$, $D(9, 7)$.<br/>
    We decide $K=2$. Our random initial centroids are $C_1(2, 2)$ and $C_2(10, 10)$.<br/><br/>
    <strong>Step 1: Compute Distances and Assign</strong><br/>
    • <b>Point A(2, 4):</b> Distance to $C_1$ = $\\sqrt{(2-2)^2 + (4-2)^2}$ = $\\sqrt{0+4}$ = 2. Distance to $C_2$ = $\\sqrt{(10-2)^2 + (10-4)^2}$ = $\\sqrt{64+36}$ = 10. (Assign A $\\rightarrow$ $C_1$)<br/>
    • <b>Point B(3, 3):</b> Distance to $C_1$ = $\\sqrt{(3-2)^2 + (3-2)^2}$ = $\\sqrt{1+1}$ \\approx 1.41. Distance to $C_2$ = $\\sqrt{(10-3)^2 + (10-3)^2}$ = $\\sqrt{49+49}$ \\approx 9.89. (Assign B $\\rightarrow$ $C_1$)<br/>
    • <b>Point C(8, 8):</b> Distance to $C_1$ = $\\sqrt{(8-2)^2 + (8-2)^2}$ = $\\sqrt{36+36}$ \\approx 8.48. Distance to $C_2$ = $\\sqrt{(10-8)^2 + (10-8)^2}$ = $\\sqrt{4+4}$ = 2.82. (Assign C $\\rightarrow$ $C_2$)<br/>
    • <b>Point D(9, 7):</b> Distance to $C_1$ = $\\sqrt{(9-2)^2 + (7-2)^2}$ = $\\sqrt{49+25}$ \\approx 8.60. Distance to $C_2$ = $\\sqrt{(10-9)^2 + (10-7)^2}$ = $\\sqrt{1+9}$ = 3.16. (Assign D $\\rightarrow$ $C_2$)<br/>
    <i>Cluster 1 currently contains {A, B}. Cluster 2 currently contains {C, D}.</i><br/><br/>
    
    <strong>Step 2: Update Centroid Coordinates</strong><br/>
    • New $C_1$ coordinates = Average of {A, B} = $(\\frac{2+3}{2}, \\frac{4+3}{2})$ = <b>(2.5, 3.5)</b><br/>
    • New $C_2$ coordinates = Average of {C, D} = $(\\frac{8+9}{2}, \\frac{8+7}{2})$ = <b>(8.5, 7.5)</b><br/><br/>
    
    <strong>Step 3: Check for Convergence</strong><br/>
    The centroids moved from (2, 2) and (10, 10) to (2.5, 3.5) and (8.5, 7.5). Because they changed, the algorithm must repeat Steps 1 and 2 until the coordinates stop updating entirely.
  </div>
</div>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/subjects/machine-learning/lectures/2_unsupervised_learning.pdf" target="_blank" class="pdf-link">Lecture 2 PDF</a> | <a href="/subjects/machine-learning/sections/Section 2-Kmeans  (1).pdf" target="_blank" class="pdf-link">Section 2 PDF</a> | <a href="/subjects/machine-learning/questions/ML Sheet 2 (2).pdf" target="_blank" class="pdf-link">Sheet 2 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 التعلم غير الخاضع للإشراف</h2>
<p>تعمل خوارزميات التعلم غير الخاضع للإشراف على بيانات <strong>بدون تصنيفات أهداف مُسبقة (No labels)</strong>. الهدف هو استخراج وتقسيم البيانات بناءً على الأنماط الطبيعية.</p>

<h2>🔹 خوارزمية تجميع K-Means</h2>
<p>تقوم الخوارزمية بتقسيم البيانات إلى $K$ مجموعات. وتتبع الخطوات التالية:</p>
<ol>
  <li><strong>التهيئة:</strong> اختيار $K$ نقاط عشوائياً كبداية للمراكز.</li>
  <li><strong>التعيين:</strong> ربط كل نقطة بالمركز الأقرب مسافةً.</li>
  <li><strong>التحديث:</strong> حساب متوسط النقاط المعينة لإيجاد الموقع الجديد للمركز.</li>
  <li><strong>التكرار:</strong> التكرار حتى الاستقرار.</li>
</ol>

<h2>🔹 التحديات ومقياس التقييم</h2>
<p>K-Means لا تستطيع تحديد K تلقائياً وتفشل مع المجموعات غير الدائرية وتشكل بداية عشوائية سيئة. نقيّم الجودة باستخدام مؤشر <strong>Davies-Bouldin Index</strong>.</p>`
      }
    }
  ],
  
  summary: {
    points: [
      "Unsupervised Learning = unlabelled data.",
      "K-Means: Initialize random centroids, Assign to closest, Recalculate mean.",
      "Cost function seeks to minimize the Sum of Squared Distances to centroids.",
      "Sensitive to initial starting points -> use K-Means++.",
      "Fails on non-spherical/non-circular cluster distributions.",
      "Davies-Bouldin Index: internal evaluation (lower is better).",
      "G-Means algorithm finds correct K using the Anderson-Darling Gaussian test."
    ],
    pointsAr: [
      "التعلم غير الخاضع للإشراف يعتمد على بيانات غير مصنفة.",
      "تعمل خوارزمية K-Means كالتالي: تهيئة، تعيين، تحديث.",
      "الهدف هو تقليل دالة التكلفة الخاصة بالمسافات المربعة.",
      "حساسة للبدايات العشوائية وللمجموعات غير الدائرية.",
      "لديها مقياس التقييم الداخلي Davies-Bouldin.",
      "تكتشف K-Means++ نقاط البداية البعيدة تلقائياً."
    ]
  },

  mcq: [
    {
      id: 'ml-l2-q1',
      question: "Given an initial centroid C1(0,0) and C2(10,10). Object X is at (2,2). Which centroid does it mathematically assign itself to using Euclidean distance?",
      questionAr: "بمعلومية المركز الابتدائي C1(0,0) و C2(10,10). الكائن X يقع في الإحداثيات (2,2). لأي مركز سيتم تعيينه رياضياً بالمسافة الإقليدية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'C2, because it is larger natively', isCorrect: false },
        { id: 'b', text: 'C1, as distance to C1 is √8 ≈ 2.82 and to C2 is √128 ≈ 11.31', isCorrect: true },
        { id: 'c', text: 'Neither, it inherently crashes', isCorrect: false },
        { id: 'd', text: 'It requires weights to decide', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q2',
      question: "A cluster is currently holding points: P1(2,2), P2(4,4), P3(6,6). Mathematical Update Step: what is the exact new coordinates for the Centroid?",
      questionAr: "مجموعة تحتوي حالياً على النقاط: P1(2,2)، P2(4,4)، P3(6,6). خطوة التحديث الرياضي: ما هي الإحداثيات الجديدة الدقيقة للمركز (Centroid)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(4, 4) exactly', isCorrect: true },
        { id: 'b', text: '(12, 12) natively', isCorrect: false },
        { id: 'c', text: '(0, 0) logically', isCorrect: false },
        { id: 'd', text: '(6, 6) invariably', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q3',
      question: "Given J (Cost) = Σ ||x - μ||². If point X is (3,4) and its assigned centroid μ is (0,0), what is the exact squared error contribution of X?",
      questionAr: "بافتراض التكلفة J = Σ ||x - μ||². إذا كانت النقطة X هي (3,4) والمركز المعين لها هو μ (0,0)، فما هو مساهمة الخطأ التربيعي الدقيق للنقطة X؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '25 natively', isCorrect: true },
        { id: 'b', text: '5 logically', isCorrect: false },
        { id: 'c', text: '7 completely', isCorrect: false },
        { id: 'd', text: '12 intrinsically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q4',
      question: "A K-Means loop evaluates J_current = 200, then re-assigns points making J_new = 450. What physically happened mathematically?",
      questionAr: "حلقة K-Means قامت بحساب التكلفة الحالية J_current = 200، ثم أعادت تعيين النقاط لتصبح التكلفة الجديدة J_new = 450. ماذا حدث رياضياً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It converged flawlessly', isCorrect: false },
        { id: 'b', text: 'An absolute mathematical error/bug mathematically occurred; K-means is guaranteed to monotonically strictly decrease or maintain J, it can NEVER increase J', isCorrect: true },
        { id: 'c', text: 'It hit a localized minimum', isCorrect: false },
        { id: 'd', text: 'The data inherently scaled natively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q5',
      question: "You have two clusters. C1 has variance 10, C2 has variance 20. The distance between C1 and C2 centers is 5. What is their Davies-Bouldin ratio specifically?",
      questionAr: "لديك مجموعتان. المجموعة C1 لها تباين 10، المجموعة C2 لها تباين 20. المسافة بين مركزي C1 و C2 هي 5. ما هي نسبة Davies-Bouldin الخاصة بهما؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(10+20)/5 = 30/5 = 6.0 natively', isCorrect: true },
        { id: 'b', text: '(10+20)*5', isCorrect: false },
        { id: 'c', text: '5 / 30 = 0.166', isCorrect: false },
        { id: 'd', text: '0 completely', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q6',
      question: "If K=3, and the dataset has exactly 3 fully identical points located at (1,1). What mathematically occurs?",
      questionAr: "إذا كان K=3، ومجموعة البيانات تحتوي على 3 نقاط متطابقة تماماً موجودة في (1,1). ماذا يحدث رياضياً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Cost J becomes explicitly 0 natively as each point gets its own centroid logically', isCorrect: true },
        { id: 'b', text: 'The cost function explodes natively', isCorrect: false },
        { id: 'c', text: 'K-means loops infinitely explicitly', isCorrect: false },
        { id: 'd', text: 'It throws an explicit index matrix error inevitably', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q7',
      question: "What happens mathematically to the centroid if an extreme outlier point (-9000, 0) is added to a cluster of points near (1,1)?",
      questionAr: "ماذا يحدث رياضياً للمركز (Centroid) إذا تمت إضافة نقطة شاذة متطرفة (-9000, 0) إلى مجموعة من النقاط بالقرب من (1,1)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Nothing intrinsically', isCorrect: false },
        { id: 'b', text: 'The centroid’s mean value is violently dragged horizontally towards -9000 linearly dynamically', isCorrect: true },
        { id: 'c', text: 'The outlier is purely ignored natively', isCorrect: false },
        { id: 'd', text: 'The algorithm splits the cluster natively explicitly', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q8',
      question: "Given coordinates (2,2) and (5,6). The Manhattan (L1) distance is:",
      questionAr: "إذا كانت الإحداثيات (2,2) و (5,6). مسافة مانهاتن (L1) هي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '25', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q9',
      question: "Given coordinates (2,2) and (5,6). The Euclidean (L2) distance is:",
      questionAr: "بين الإحداثيات (2,2) و (5,6)، ما هي المسافة الإقليدية (L2) الثابتة:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '5', isCorrect: true },
        { id: 'b', text: '7', isCorrect: false },
        { id: 'c', text: '25', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false }
      ]
    },
    {
      id: 'ml-l2-q10',
      question: "If an explicit dataset has N=100 and K=100, what is the exact mathematical Cost Function (J) after convergence?",
      questionAr: "إذا كان لدى بيانات معطاة مسبقاً N=100 و K=100، فما هي دالة التكلفة (Cost Function J) الدقيقة رياضياً بعد عملية التقارب (Convergence)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '100', isCorrect: false },
        { id: 'b', text: '50', isCorrect: false },
        { id: 'c', text: 'Infinity', isCorrect: false },
        { id: 'd', text: '0', isCorrect: true }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l2-w1',
      question: "Given points A(1,1), B(2,2), C(8,8). Initial Centroids are μ1=(0,0) and μ2=(10,10). Mathematically walk through exactly ONE complete K-Means iteration loop (Assign -> Update).",
      questionAr: "النقاط المعطاة A(1,1)، B(2,2)، C(8,8). المراكز الأولية هي μ1=(0,0) و μ2=(10,10). قم بحل رياضي لدورة K-Means كاملة واحدة بالضبط (التعيين -> التحديث).",
      modelAnswer: "Assign: Dist(A, μ1)=√2 < Dist(A, μ2). A -> μ1. Dist(B, μ1)=√8 < Dist(B, μ2). B -> μ1. Dist(C,μ2)=√8 < Dist(C,μ1). C -> μ2. Update: New μ1 = Mean(A,B) = ((1+2)/2, (1+2)/2) = (1.5, 1.5). New μ2 = Mean(C) = (8,8). Loop 1 complete.",
      modelAnswerAr: "التعيين: المسافة إلى مسافة A أقرب لـ μ1. و B أقرب لـ μ1. و C أقرب لـ μ2. التحديث: المركز μ1 الجديد هو متوسط(المتجه A, B) = (1.5، 1.5). و μ2 الجديد = (8،8)."
    },
    {
      id: 'ml-l2-w2',
      question: "A K-Means model has a Davies-Bouldin internal index of 42.0. A second K-Means model (K=5) has a DB index of 0.2. Mathematically, which model explicitly succeeded and why?",
      questionAr: "نموذج K-Means لديه مؤشر داخلي (Davies-Bouldin) قدره 42.0. نموذج آخر (K=5) لديه مؤشر DB هو 0.2. رياضياً، أي نموذج قد نجح بشكل صريح ولماذا؟",
      modelAnswer: "The model scoring 0.2 is infinitely better. The DB index formula is intrinsically (Intra-cluster Variance) / (Inter-cluster Distance). You want Variance to be mathematically tiny (tight), and Distance to be mathematically huge (separate). A small numerator and massive denominator yields a score close to 0.",
      modelAnswerAr: "النموذج ذو الدرجة 0.2 أفضل لا محالة، لأن مقياس Davies-Bouldin يمثل التباين الداخلي مقسوماً على مسافات الفروق الكبرى، ونحن نريد تبايناً صغيراً وتقسيماً واسعاً ليكون المقياس أقرب إلى الصفر."
    },
    {
      id: 'ml-l2-w3',
      question: "Mathematically explain why standard K-Means blindly fails heavily if applied directly to two interlocking concentric rings (a donut shape).",
      questionAr: "اشرح رياضياً لماذا تفشل خوارزمية K-Means القياسية بشكل كبير إذا طبقت مباشرة على حلقتين دائريتين متداخلتين (شكل دونات).",
      modelAnswer: "K-Means explicitly assigns points based purely on linear distance to a single central coordinate average, partitioning space forming pure straight Voronoi lines. A ring has no single 'center' that doesn't overlap the other ring. The algorithm will mathematically draw a generic straight plane right through the center splitting both rings in half.",
      modelAnswerAr: "خوارزمية K-Means تعيّن النقاط بناءً على المسافة الخطية لمتوسط مركزي واحد باستخدام خطوط (Voronoi) المستقيمة. ليس للمجموعات الدائرية أي مركز غير متقاطع مما يجعلها ترسم خطوط تقطيع للمجموعات من المنتصف وتفصل الدائرتين."
    }
  ]
};
