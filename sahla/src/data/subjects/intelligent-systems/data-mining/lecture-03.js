export const LECTURE = {
  subjectId: 'data-mining',
  number: 3,
  title: 'Cluster Analysis (K-Means & K-Medoids)',
  titleAr: 'تحليل المجموعات (K-Means و K-Medoids)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is Cluster Analysis?</h2>
<p><strong>Clustering</strong> is the process of grouping a set of data objects into multiple clusters so that objects within a cluster are highly similar, but very dissimilar to objects in other clusters. It relies on assessing distance measures between attributes.</p>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span>Clustering is <strong>Unsupervised Learning</strong> because there are no predefined class labels. It is learning by observation. Classification, on the other hand, is Supervised because you predict known classes.</span></div>

<h2>🔹 Major Clustering Approaches</h2>
<ul>
<li><strong>Partitioning Methods:</strong> Exclusivity-based. Typical methods: K-Means, K-Medoids.</li>
<li><strong>Hierarchical Methods:</strong> Creates a tree (dendrogram) of clusters.</li>
<li><strong>Advanced Methods:</strong> Fuzzy clustering, Density-based, Model-based.</li>
</ul>

<h2>🔹 K-Means Algorithm</h2>
<p>K-Means uses the <em>centroid</em> (mean value) of the objects in a cluster as its center.</p>
<ol>
<li>Choose K (number of clusters); randomly select K centroids.</li>
<li>Assign each record to the cluster with the closest centroid (using distance, e.g., Euclidean).</li>
<li>Recalculate the centroids (calculate the mean of all assigned records).</li>
<li>Repeat steps 2 &amp; 3 until assignments no longer change.</li>
</ol>

<h2>🔹 The K-Medoids Algorithm (PAM): A Professional Perspective</h2>
<p>Unlike K-Means (centroids are synthetic averages), the <strong>K-Medoids</strong> algorithm elects <em>representative objects (medoids)</em> directly from the dataset. The most prominent implementation is <strong>PAM (Partitioning Around Medoids)</strong>.</p>
<p><strong>Why is K-Medoids Superior for Noisy Data?</strong> K-Means is highly sensitive to outliers because the arithmetic mean is easily skewed by extreme values. A medoid is defined as the object within a cluster for which average dissimilarity to all other objects in the cluster is minimal. As a result, medoids act as robust central anchors that remain immovable in the face of radical outliers.</p>

<h3>📌 PAM Algorithm Optimization Logic:</h3>
<ol>
<li><strong>Initialization:</strong> Randomly elect K objects as initial medoids.</li>
<li><strong>Assignment Phase:</strong> Allocate each non-medoid object to the nearest medoid based on a robust distance metric (Manhattan distance: $ d = |x_2 - x_1| + |y_2 - y_1| $).</li>
<li><strong>Cost Computation:</strong> Formulate the <em>absolute error criterion</em> (total cost), which is the sum of distances from all non-medoids to their respective assigned medoids.</li>
<li><strong>Iterative Swapping Test:</strong> trial swapping a nominated medoid $M_i$ with a non-medoid $O_h$. If the post-swap total configuration cost is strictly lower, commit the swap.</li>
<li><strong>Convergence Criteria:</strong> Cycle until no swap yields a reduction in total cost.</li>
</ol>

<h3>📊 Professional Worked Example (Bivariate Dataset, K=2)</h3>
<p>Consider a bi-dimensional dataset simulating survey points: <strong>$A(1,1)$, $B(2,1)$, $C(4,3)$, $D(5,4)$</strong>, and an anomalous reading (outlier) at <strong>$E(100,100)$</strong>.</p>

<h4>Step 1 — Initial Medoid Selection</h4>
<p>We designate $K=2$ medoids: <strong>$M_1 = A(1,1)$</strong> and <strong>$M_2 = D(5,4)$</strong>.</p>

<h4>Step 2 — Proximity Assignment</h4>
<table class="styled-table text-sm">
<thead><tr><th>Observation Point</th><th>Dist to $M_1=A(1,1)$</th><th>Dist to $M_2=D(5,4)$</th><th>Cluster Assignment</th></tr></thead>
<tbody>
<tr><td>$B(2,1)$</td><td>$|2−1|+|1−1| = \mathbf{1}$</td><td>$|2−5|+|1−4| = 6$</td><td>Cluster 1 ($M_1$)</td></tr>
<tr><td>$C(4,3)$</td><td>$|4−1|+|3−1| = 5$</td><td>$|4−5|+|3−4| = \mathbf{2}$</td><td>Cluster 2 ($M_2$)</td></tr>
<tr><td>Anomalous $E(100,100)$</td><td>$|100−1|+|100−1| = 198$</td><td>$|100−5|+|100−4| = \mathbf{191}$</td><td>Cluster 2 ($M_2$)</td></tr>
</tbody>
</table>

<h4>Step 3 — Baseline Cost Evaluation</h4>
<p>Total Configuration Cost = $Cost(B \rightarrow M_1) + Cost(C \rightarrow M_2) + Cost(E \rightarrow M_2) = \mathbf{1 + 2 + 191 = 194}$.</p>

<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Analytic Insight on Outlier Resilience:</strong> Had K-Means been applied, Cluster 2's centroid would gravitate towards the outlier, yielding $(36.3, 35.7)$, a void space. K-Medoids rightfully retains $D(5,4)$ as the representative.</span></div>

<h3>🏆 Midterm Concept: The ATM Location Optimization Problem</h3>
<p>In many exam problems, you are asked to solve an <strong>ATM location problem</strong> using K-Medoids. Here are the standard coordinates often used ($K=2$):</p>
<table class="styled-table text-xs" style="max-width:450px;">
<thead><tr><th>Set A</th><th>Coords (x,y)</th><th>Set B</th><th>Coords (x,y)</th></tr></thead>
<tbody>
<tr><td>$D_1$ <span class="init-label">(Init Medoid)</span></td><td><strong>(2, 6)</strong></td><td>$D_6$</td><td><strong>(6, 4)</strong></td></tr>
<tr><td>$D_2$</td><td><strong>(3, 4)</strong></td><td>$D_7$ <span class="init-label">(Init Medoid)</span></td><td><strong>(7, 3)</strong></td></tr>
<tr><td>$D_3$</td><td>(3, 8)</td><td>$D_8$</td><td>(7, 4)</td></tr>
<tr><td>$D_4$</td><td>(4, 7)</td><td>$D_9$</td><td>(8, 5)</td></tr>
<tr><td>$D_5$</td><td>(6, 2)</td><td>$D_{10}$</td><td>(7, 6)</td></tr>
</tbody>
</table>
<p><strong>Logic Key:</strong> Point $D_2(3,4)$ is closer to $D_1(2,6)$ ($dist=3$) than to $D_7(7,3)$ ($dist=5$), so it belongs to Cluster 1. Total cost $Y$ is the sum of these Manhattan distances across all points.</p>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Official exam questions have been integrated! Look for the <strong>[Midterm]</strong> tag in the practice sections.</span></div>
<div class="callout callout-info" style="background: rgba(139, 92, 246, 0.1); border-left-color: var(--accent-violet);"><span><strong>Computational Trade-off:</strong> The exhaustive swap-testing mechanics of PAM impose an algorithmic complexity of $\mathcal{O}(K(n-K)^2)$ per iteration.</span></div>`,
        bodyAr: `<h2>🔹 ما هو تحليل المجموعات (Cluster Analysis)؟</h2>
<p><strong>التجميع (Clustering)</strong> هو عملية تجميع مجموعة من الكائنات في عدة مجموعات بحيث تكون الكائنات داخل المجموعة متشابهة للغاية، ولكنها مختلفة تماماً عن الكائنات في المجموعات الأخرى. يعتمد ذلك على تقييم مقاييس المسافة بين السمات.</p>
<div class="callout callout-tip"><span class="callout-icon">💡</span>التجميع هو <strong>تعلم بدون إشراف (Unsupervised)</strong> لأنه لا توجد تسميات لفئات محددة مسبقاً. إنه التعلم من خلال الملاحظة. التصنيف، من ناحية أخرى، هو تعلم بإشراف لأنك تتنبأ بفئات معروفة.</div>

<h2>🔹 المنهجيات الأساسية للتجميع</h2>
<ul>
<li><strong>طرق التقسيم:</strong> تعتمد على الحصرية. الطرق النموذجية: K-Means، K-Medoids.</li>
<li><strong>الطرق الهرمية:</strong> تنشئ شجرة (dendrogram) من المجموعات.</li>
<li><strong>الطرق المتقدمة:</strong> التجميع الضبابي، التجميع القائم على الكثافة، القائم على النماذج.</li>
</ul>

<h2>🔹 خوارزمية K-Means</h2>
<p>تستخدم K-Means <em>المركز (Centroid)</em> (قيمة المتوسط) للكائنات في المجموعة ليكون مركزها.</p>
<ol>
<li>اختر K (عدد المجموعات)؛ اختر عشوائياً K من المراكز.</li>
<li>خصص كل سجل للمجموعة ذات المركز الأقرب (باستخدام المسافة، مثلاً الإقليدية).</li>
<li>أعد حساب المراكز (احسب متوسط جميع السجلات المخصصة).</li>
<li>كرر الخطوتين 2 و 3 حتى لا تتغير التخصيصات.</li>
</ol>

<h2>🔹 خوارزمية K-Medoids (PAM): منظور احترافي</h2>
<p>على عكس K-Means (حيث المراكز هي متوسطات اصطناعية)، تنتخب خوارزمية <strong>K-Medoids</strong> <em>كائنات تمثيلية (medoids)</em> مباشرة من مجموعة البيانات. التنفيذ الأكثر شهرة هو <strong>PAM (Partitioning Around Medoids)</strong>.</p>
<p><strong>لماذا تعتبر K-Medoids متفوقة للبيانات المليئة بالضجيج؟</strong> K-Means حساسة للغاية للقيم المتطرفة لأن المتوسط الحسابي يتأثر بسهولة بالقيم القصوى. يتم تعريف الـ medoid بأنه الكائن داخل المجموعة الذي تكون متوسط درجة الاختلاف بينه وبين جميع الكائنات الأخرى في المجموعة ضئيلة. نتيجة لذلك، تعمل الـ medoids كركائز مركزية قوية تظل ثابتة في مواجهة القيم المتطرفة الجذرية.</p>

<h3>📌 منطق تحسين خوارزمية PAM:</h3>
<ol>
<li><strong>التهيئة:</strong> اختر عشوائياً K من الكائنات لتكون medoids أولية.</li>
<li><strong>مرحلة التخصيص:</strong> خصص كل كائن غير medoid إلى أقرب medoid بناءً على مقياس مسافة قوي (مثل مسافة مانهاتن).</li>
<li><strong>حساب التكلفة:</strong> صياغة <em>معيار الخطأ المطلق</em> (التكلفة الإجمالية)، وهو مجموع المسافات من جميع الكائنات غير medoid إلى الـ medoids المخصصة لها.</li>
<li><strong>اختبار التبديل التكراري:</strong> تجربة تبديل medoid مرشح $M_i$ مع كائن غير medoid $O_h$. إذا كانت التكلفة الإجمالية بعد التبديل أقل، فقم باعتماد التبديل.</li>
<li><strong>معيار التقارب:</strong> كرر الدورة حتى لا يؤدي أي تبديل إلى تقليل التكلفة الإجمالية.</li>
</ol>

<div class="callout callout-info"><span><strong>المقايضة الحسابية:</strong> تفرض ميكانيكا اختبار التبديل الشامل لـ PAM تعقيداً خوارزمياً قدره $\\mathcal{O}(K(n-K)^2)$ لكل تكرار. هذا عبء حسابي كبير مقارنة بالتوسع الخطي لـ K-Means.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Clustering groups similar objects (high intra-cluster similarity, low inter-cluster similarity).",
      "Clustering is Unsupervised (no labels). Classification is Supervised.",
      "K-Means uses the calculated average (centroid). K-Medoids uses an actual data point (medoid).",
      "PAM (Partitioning Around Medoids) is the classic K-Medoids algorithm.",
      "K-Medoids is robust to outliers because medoids are real points, not averages.",
      "Manhattan distance: $ d = |x_2 - x_1| + |y_2 - y_1| $. Used for swap cost calculations."
    ],
    pointsAr: [
      "التجميع يجمع الأجسام المتشابهة (تشابه داخلي عالٍ، تشابه بين المجموعات منخفض).",
      "التجميع هو تعلم بدون إشراف (لا توجد تصنيفات). التصنيف هو تعلم بإشراف.",
      "خوارزمية K-Means تستخدم المتوسط المحسوب (centroid). خوارزمية K-Medoids تستخدم نقطة بيانات حقيقية (medoid).",
      "خوارزمية PAM هي خوارزمية K-Medoids الكلاسيكية.",
      "K-Medoids قوية ضد القيم المتطرفة لأن الـ medoids هي نقاط حقيقية.",
      "مسافة مانهاتن: تستخدم لحساب تكلفة التبديل."
    ],
  },

  mcq: [
    {
      id: 'dm-l3-q1',
      question: "What does K-Means use as the center of a cluster?",
      questionAr: "ماذا تستخدم K-Means كمركز للمجموعة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'An actual data object in the cluster', isCorrect: false },
        { id: 'b', text: 'The calculated mean (centroid) of the objects in the cluster', isCorrect: true },
        { id: 'c', text: 'The object furthest from the origin', isCorrect: false },
        { id: 'd', text: 'A randomly changing point', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q2',
      question: "Why might someone choose K-Medoids over K-Means?",
      questionAr: "لماذا قد يختار شخص ما K-Medoids بدلاً من K-Means؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'K-Medoids is much faster on large datasets', isCorrect: false },
        { id: 'b', text: 'K-Medoids is more robust to noise and outliers', isCorrect: true },
        { id: 'c', text: 'K-Medoids doesn\'t require choosing K', isCorrect: false },
        { id: 'd', text: 'K-Medoids uses Supervised Learning', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q3',
      question: "Which distance measure is commonly used in K-Medoids to calculate the 'swap cost'?",
      questionAr: "أي مقياس مسافة يُستخدم عادةً في K-Medoids لحساب 'تكلفة التبديل'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Euclidean Distance', isCorrect: false },
        { id: 'b', text: 'Manhattan Distance', isCorrect: true },
        { id: 'c', text: 'Cosine Similarity', isCorrect: false },
        { id: 'd', text: 'Hamming Distance', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q4',
      question: "What is the algorithmic complexity of the PAM algorithm per iteration?",
      questionAr: "ما هو التعقيد الخوارزمي لـ PAM لكل تكرار؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'O(n)', isCorrect: false },
        { id: 'b', text: 'O(n*K)', isCorrect: false },
        { id: 'c', text: 'O(K(n-K)^2)', isCorrect: true },
        { id: 'd', text: 'O(n^2)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q5',
      question: "The process of grouping similar objects without predefined labels is called:",
      questionAr: "عملية تجميع الكائنات المتشابهة بدون تسميات محددة مسبقاً تسمى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Classification', isCorrect: false },
        { id: 'b', text: 'Clustering', isCorrect: true },
        { id: 'c', text: 'Regression', isCorrect: false },
        { id: 'd', text: 'Data Warehouse', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q6',
      question: "[ATM Scenario] Based on the initial medoids M1=D1(2,6) and M2=D7(7,3), which point belongs to Cluster 2 (M2)?",
      questionAr: "[سيناريو ATM] بناءً على الـ medoids الأولية D1 و D7، أي نقطة تنتمي للمجموعة 2 (M2)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'D3 (3, 8)', isCorrect: false },
        { id: 'b', text: 'D1 (2, 6)', isCorrect: false },
        { id: 'c', text: 'D8 (7, 4)', isCorrect: true },
        { id: 'd', text: 'D4 (4, 7)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q7',
      question: "[ATM Scenario] What is the Manhattan distance from D2(3, 4) to initial medoid D1(2, 6)?",
      questionAr: "[سيناريو ATM] ما هي مسافة مانهاتن من D2 إلى الـ medoid الأولي D1؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '|3-2| + |4-6| = 3', isCorrect: true },
        { id: 'b', text: '(3-2)^2 + (4-6)^2 = 5', isCorrect: false },
        { id: 'c', text: '|3-6| + |4-2| = 5', isCorrect: false },
        { id: 'd', text: '0', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q8',
      question: "[ATM Scenario] To which cluster does D5(6, 2) belong if medoids are D1(2, 6) and D7(7,3)?",
      questionAr: "[سيناريو ATM] إلى أي مجموعة تنتمي D5 إذا كانت الـ medoids هي D1 و D7؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Cluster 1 (dist to D1 = 8)', isCorrect: false },
        { id: 'b', text: 'Cluster 2 (dist to D7 = 2)', isCorrect: true },
        { id: 'c', text: 'Cluster 3', isCorrect: false },
        { id: 'd', text: 'Both 1 and 2 equally', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q9',
      question: "[ATM Scenario] If the 'total cost' Y is the sum of distances, what does a LOWER Y indicate?",
      questionAr: "[سيناريو ATM] إذا كانت 'التكلفة الإجمالية' Y هي مجموع المسافات، فماذا يشير انخفاض Y؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A worse configuration', isCorrect: false },
        { id: 'b', text: 'A configuration requiring more clusters', isCorrect: false },
        { id: 'c', text: 'A better, more efficient configuration', isCorrect: true },
        { id: 'd', text: 'An error in calculation', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q10',
      question: "In PAM, should we confirm a swap if the new total cost is 120 and the original cost was 100?",
      questionAr: "في PAM، هل يجب تأكيد التبديل إذا كانت التكلفة الجديدة 120 والأصلية 100؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Confirm swap', isCorrect: false },
        { id: 'b', text: 'Do not confirm swap (cost must decrease)', isCorrect: true },
        { id: 'c', text: 'Confirmation doesn\'t matter', isCorrect: false },
        { id: 'd', text: 'Only confirm if K > 5', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q11',
      question: "What is the primary reason K-Medoids is 'Robust to Outliers' compared to K-Means?",
      questionAr: "ما هو السبب الرئيسي لكون K-Medoids 'قوية ضد القيم المتطرفة' مقارنة بـ K-Means؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It ignores outliers completely', isCorrect: false },
        { id: 'b', text: 'It uses actual points (medoids) which are less affected than averages', isCorrect: true },
        { id: 'c', text: 'It uses more memory', isCorrect: false },
        { id: 'd', text: 'It is a supervised method', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q12',
      question: "When does the K-Means algorithm stop iterating?",
      questionAr: "متى تتوقف خوارزمية K-Means عن التكرار؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'After exactly 10 loops', isCorrect: false },
        { id: 'b', text: 'When the user presses stop', isCorrect: false },
        { id: 'c', text: 'When records assignments to clusters no longer change', isCorrect: true },
        { id: 'd', text: 'When all items are in a single cluster', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q13',
      question: "[MATH] Given point A(5, 7) and Medoid M(2, 3), calculate the Manhattan distance.",
      questionAr: "[حساب] للنقطة A(5, 7) والـ Medoid M(2, 3)، احسب مسافة مانهاتن.",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(5-2)^2 + (7-3)^2 = 25', isCorrect: false },
        { id: 'b', text: '|5-2| + |7-3| = 3 + 4 = 7', isCorrect: true },
        { id: 'c', text: '|5-3| + |7-2| = 2 + 5 = 7', isCorrect: false },
        { id: 'd', text: 'sqrt(25) = 5', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q14',
      question: "[MID] If swapping medoid M2 with point D5 results in a HIGHER total cost, the correct action is:",
      questionAr: "[ميدتيرم] إذا أدى تبديل الـ medoid M2 بالنقطة D5 إلى تكلفة إجمالية أعلى، فإن الإجراء الصحيح هو:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Confirm the swap', isCorrect: false },
        { id: 'b', text: 'Undo the swap and keep original medoids', isCorrect: true },
        { id: 'c', text: 'Restart the entire algorithm', isCorrect: false },
        { id: 'd', text: 'Add a third medoid', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q15',
      question: "[MID] The Manhattan distance between points (7,2) and (3,8) is:",
      questionAr: "[ميدتيرم] مسافة مانهاتن بين النقطتين (7,2) و (3,8) هي:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '|7-3|+|2-8| = 4+6 = 10', isCorrect: true },
        { id: 'b', text: 'sqrt((7-3)²+(2-8)²) = 7.2', isCorrect: false },
        { id: 'c', text: '|7-8|+|2-3| = 2', isCorrect: false },
        { id: 'd', text: '(7+3)+(2+8) = 20', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q16',
      question: "[MID] In K-Medoids, the 'total cost' is computed by:",
      questionAr: "[ميدتيرم] في K-Medoids، يتم حساب 'التكلفة الإجمالية' من خلال:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Counting the number of clusters', isCorrect: false },
        { id: 'b', text: 'Summing distances from every non-medoid to its assigned medoid', isCorrect: true },
        { id: 'c', text: 'Multiplying K by the number of points', isCorrect: false },
        { id: 'd', text: 'Subtracting the furthest point distance', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q17',
      question: "To perform K-medoids in python (using sklearn-extra), which syntax is used?",
      questionAr: "لإجراء K-medoids في لغة بايثون، أي صيغة تُستخدم؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'kmedoids = KMedoids(n_clusters=k).fit(data)', isCorrect: true },
        { id: 'b', text: 'kmedoids = KMeans(n_clusters=k).fit(data)', isCorrect: false },
        { id: 'c', text: 'kmedoids = PAM_Algorithm(k)', isCorrect: false },
        { id: 'd', text: 'kmedoids = Cluster(data, medoids=True)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q18',
      question: "In K-Medoids, what is defined as the 'total cost' (Absolute Error Criterion)?",
      questionAr: "في K-Medoids، ما الذي يُعرف بـ 'التكلفة الإجمالية' (معيار الخطأ المطلق)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The sum of squares of errors', isCorrect: false },
        { id: 'b', text: 'The number of iterations', isCorrect: false },
        { id: 'c', text: 'The sum of distances from objects to their closest medoid', isCorrect: true },
        { id: 'd', text: 'The physical memory used by the RAM', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q19',
      question: "[MATH] If three points P1(1,1), P2(2,2), P3(3,3) are assigned to a K-Means cluster, what is the new Centroid?",
      questionAr: "[حساب] إذا تم تخصيص ثلاث نقاط P1 و P2 و P3 لمجموعة K-Means، فما هو المركز الجديد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(2, 2)', isCorrect: true },
        { id: 'b', text: '(3, 3)', isCorrect: false },
        { id: 'c', text: '(1, 1)', isCorrect: false },
        { id: 'd', text: '(6, 6)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q20',
      question: "In K-Medoids, we swap a medoid with a non-medoid object ONLY if:",
      questionAr: "في K-Medoids، نقوم بتبديل الـ medoid بكائن غير medoid فقط إذا:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The total cost increases', isCorrect: false },
        { id: 'b', text: 'The total cost decreases', isCorrect: true },
        { id: 'c', text: 'The number of clusters stays the same', isCorrect: false },
        { id: 'd', text: 'We hit the 10th iteration', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q21',
      question: "[MATH] Given point P(10, 5) and Medoid M(4, 2), what is the Manhattan distance?",
      questionAr: "[حساب] للنقطة P(10, 5) والـ Medoid M(4, 2)، ما هي مسافة مانهاتن؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '|10-4| + |5-2| = 9', isCorrect: true },
        { id: 'b', text: '|10-2| + |5-4| = 9', isCorrect: false },
        { id: 'c', text: '(10-4)^2 + (5-2)^2 = 45', isCorrect: false },
        { id: 'd', text: 'sqrt(45)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q22',
      question: "What is the full name of the PAM algorithm?",
      questionAr: "ما هو الاسم الكامل لخوارزمية PAM؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Points Around Medians', isCorrect: false },
        { id: 'b', text: 'Partitioning Around Medoids', isCorrect: true },
        { id: 'c', text: 'Parallelized Automatic Mining', isCorrect: false },
        { id: 'd', text: 'Pattern Analysis Method', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q23',
      question: "In the K-Medoids worked example, if E(100,100) is an outlier, what happens to the K-Means centroid?",
      questionAr: "في مثال K-Medoids، إذا كانت E(100,100) قيمة متطرفة، فماذا يحدث لمركز K-Means؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It stays at the real data center', isCorrect: false },
        { id: 'b', text: 'It gets pulled far away toward the outlier', isCorrect: true },
        { id: 'c', text: 'It is not affected at all', isCorrect: false },
        { id: 'd', text: 'It becomes the origin (0,0)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q24',
      question: "[MATH] Points: A(1,1), B(2,1). Medoid M=A(1,1). What is the total cost for this cluster?",
      questionAr: "[حساب] النقاط: A و B. الـ Medoid M هو A. ما هي التكلفة الإجمالية لهذه المجموعة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'dist(B→A) = |2−1|+|1−1| = 1', isCorrect: true },
        { id: 'b', text: 'dist(B→A) = (2−1)²+(1−1)² = 1', isCorrect: false },
        { id: 'c', text: 'dist(A→A) + dist(B→A) = 0 + 2 = 2', isCorrect: false },
        { id: 'd', text: '0', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q25',
      question: "After K-Medoids converges, the medoids are:",
      questionAr: "بعد تقارب K-Medoids، تكون الـ medoids عبارة عن:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Synthetic calculated average points', isCorrect: false },
        { id: 'b', text: 'Actual data points from the dataset', isCorrect: true },
        { id: 'c', text: 'Always the first K points in the list', isCorrect: false },
        { id: 'd', text: 'Random points outside the dataset', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q26',
      question: "What is the primary computational complexity concern with PAM?",
      questionAr: "ما هو القلق الأساسي المتعلق بالتعقيد الحسابي لخوارزمية PAM؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It uses too much disk space', isCorrect: false },
        { id: 'b', text: 'It requires labeled data', isCorrect: false },
        { id: 'c', text: 'It tests every (medoid, non-medoid) pair making it O(K(n-K)²)', isCorrect: true },
        { id: 'd', text: 'It cannot handle more than 2 clusters', isCorrect: false },
      ],
    },
    {
      id: 'dm-l3-q27',
      question: "Clustering is considered what type of learning?",
      questionAr: "يعتبر التجميع أي نوع من أنواع التعلم؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Supervised Learning', isCorrect: false },
        { id: 'b', text: 'Reinforcement Learning', isCorrect: false },
        { id: 'c', text: 'Unsupervised Learning', isCorrect: true },
        { id: 'd', text: 'Procedural Learning', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-l3-w1',
      question: "Explain the difference between K-Means and K-Medoids, and identify the main advantage and disadvantage of K-Medoids.",
      questionAr: "اشرح الفرق بين K-Means و K-Medoids، وحدد الميزة والعيب الرئيسي لـ K-Medoids.",
      modelAnswer: "K-Means uses calculated means (centroids) as centers. K-Medoids uses actual data points. Adv: K-Medoids is robust to outliers/noise. Disadv: High computational cost makes it poor for large datasets.",
      modelAnswerAr: "K-Means تستخدم المتوسطات المحسوبة كمراكز. K-Medoids تستخدم نقاط بيانات حقيقية. الميزة: K-Medoids قوية ضد القيم المتطرفة. العيب: التكلفة الحسابية العالية تجعلها سيئة لمجموعات البيانات الكبيرة.",
    },
    {
      id: 'dm-l3-w2',
      question: "Summarize the 4 steps of the K-Means algorithm.",
      questionAr: "لخص الخطوات الأربع لخوارزمية K-Means.",
      modelAnswer: "1. Choose K and pick random centroids. 2. Assign each point to closest centroid. 3. Recalculate centroids based on current assignments. 4. Repeat 2 & 3 until assignments stabilize.",
      modelAnswerAr: "1. اختر K واختر مراكز عشوائية. 2. خصص كل نقطة لأقرب مركز. 3. أعد حساب المراكز بناءً على التخصيصات الحالية. 4. كرر 2 و 3 حتى تستقر التخصيصات.",
    },
    {
      id: 'dm-l3-w3',
      question: "List the 5 steps of the PAM (K-Medoids) algorithm in order.",
      questionAr: "اذكر الخطوات الخمس لخوارزمية PAM (K-Medoids) بالترتيب.",
      modelAnswer: "1. Initialize K medoids randomly. 2. Assign each non-medoid to nearest medoid. 3. Calculate total cost (sum of distances). 4. Try swapping medoids with non-medoids to reduce cost. 5. Repeat until convergence.",
      modelAnswerAr: "1. تهيئة K من الـ medoids عشوائياً. 2. تخصيص كل نقطة غير medoid لأقرب medoid. 3. حساب التكلفة الإجمالية. 4. تجربة تبديل الـ medoids بالنقاط الأخرى لتقليل التكلفة. 5. التكرار حتى التقارب واستقرار التكلفة.",
    },
    {
      id: 'dm-l3-w4',
      question: "[MATH] A cluster contains 4 points: (0,0), (0,4), (4,0), and (4,4). Calculate the Centroid for K-Means.",
      questionAr: "[حساب] مجموعة تحتوي 4 نقاط: (0,0)، (0,4)، (4,0)، (4,4). احسب المركز (Centroid) لـ K-Means.",
      modelAnswer: "Sum x: 8. Mean x = 8/4 = 2. Sum y: 8. Mean y = 8/4 = 2. New Centroid is (2, 2).",
      modelAnswerAr: "مجموع x هو 8، متوسط x هو 2. مجموع y هو 8، متوسط y هو 2. المركز الجديد هو (2, 2).",
    },
    {
      id: 'dm-l3-w5',
      question: "[MATH] Using K-Medoids, if Medoid M is (1,1) and point P is (6, 12), calculate the Manhattan Distance.",
      questionAr: "[حساب] باستخدام K-Medoids، إذا كان Medoid M هو (1,1) والنقطة P هي (6, 12)، احسب مسافة مانهاتن.",
      modelAnswer: "Distance = |6 - 1| + |12 - 1| = 5 + 11 = 16.",
      modelAnswerAr: "المسافة = |6 - 1| + |12 - 1| = 5 + 11 = 16.",
    },
    {
      id: 'dm-l3-w6',
      question: "Why is K-Means more 'Sensitive' to noise than K-Medoids? Provide a numerical example.",
      questionAr: "لماذا تعتبر K-Means أكثر 'حساسية' للضجيج من K-Medoids؟ أعطِ مثالاً رقمياً.",
      modelAnswer: "K-Means uses the mean. Example: Points (2,2), (3,3), (100,100). Centroid is (35,35) — far from real data center. K-Medoids would pick (3,3) which is still representative.",
      modelAnswerAr: "K-Means تستخدم المتوسط. مثال: النقاط (2,2)، (3,3)، (100,100). المركز سيكون (35,35) وهو بعيد جداً عن مركز البيانات الحقيقي. بينما ستختار K-Medoids النقطة (3,3) لتكون ممثلاً حقيقياً للمجموعة.",
    },
    {
      id: 'dm-l3-w7',
      question: "Explain what 'convergence' means in the context of the K-Medoids algorithm.",
      questionAr: "اشرح ماذا يعني 'التقارب' (convergence) في سياق خوارزمية K-Medoids.",
      modelAnswer: "Convergence means the algorithm has reached a state where no possible swap of a medoid with a non-medoid object can reduce the total cost any further.",
      modelAnswerAr: "التقارب يعني أن الخوارزمية وصلت إلى حالة لا يمكن فيها لأي تبديل ممكن للـ medoid مع نقطة غير medoid أن يقلل التكلفة الإجمالية أكثر من ذلك.",
    },
    {
      id: 'dm-l3-w8',
      question: "Describe the 'Swap' process in PAM and explain the acceptance criteria.",
      questionAr: "صف عملية 'التبديل' (Swap) في PAM واشرح معيار القبول.",
      modelAnswer: "For each iteration, the algorithm tests if replacing a current medoid with a non-medoid point reduces overall cost. If it does, the swap is accepted. This continues until no further swaps reduce cost.",
      modelAnswerAr: "في كل تكرار، تختبر الخوارزمية ما إذا كان استبدال medoid حالي بنقطة غير medoid يقلل التكلفة الإجمالية. إذا حدث ذلك، يتم قبول التبديل. يستمر هذا حتى لا تؤدي أي تبديلات أخرى إلى تقليل التكلفة.",
    },
    {
      id: 'dm-l3-w9',
      question: "[MATH] Given points A(1,1), B(2,1), C(4,3), D(5,4) with Medoids M1=A and M2=D. Assign each non-medoid point and calculate the total cost.",
      questionAr: "[حساب] بالنقاط A, B, C, D والـ Medoids M1=A و M2=D. قم بتخصيص النقاط واحسب التكلفة الإجمالية.",
      modelAnswer: "B is closest to M1 (dist=1). C is closest to M2 (dist=2). Total Cost = 1 + 2 = 3.",
      modelAnswerAr: "B هي الأقرب لـ M1 (مسافة=1). C هي الأقرب لـ M2 (مسافة=2). التكلفة الإجمالية = 1 + 2 = 3.",
    },
  ],
};
