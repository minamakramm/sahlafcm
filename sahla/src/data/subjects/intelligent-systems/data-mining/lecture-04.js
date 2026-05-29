export const LECTURE = {
  subjectId: 'data-mining',
  number: 4,
  title: 'Hierarchical Clustering',
  titleAr: 'التجميع الهرمي',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Hierarchical Clustering: Structural Topology</h2>
<p>Hierarchical clustering algorithms construct a multi-level grouping topology, yielding a treelike structural representation known as a <strong>Dendrogram</strong>. Unlike partitioning (K-Means), it offers a comprehensive spectrum of granularities.</p>

<h3>Key Features of the Hierarchy Tree:</h3>
<ul>
  <li><strong>Root Node:</strong> Represents the entire input set S containing all data objects.</li>
  <li><strong>Leaf Nodes:</strong> Represent individual, discrete elements of S (singletons).</li>
  <li><strong>Internal Nodes:</strong> Defined as the union of their children.</li>
</ul>

<h3>Structural Methodologies:</h3>
<ol>
<li><strong>Agglomerative (Bottom-Up Integration):</strong> The most common approach. Every observation commences as a standalone singleton. The algorithm iterates by fusing the two most proximate subsets incrementally until all datasets coalesce at a unified root node.</li>
<li><strong>Divisive (Top-Down Bifurcation):</strong> The converse logic. It initiates with a holistic macro-cluster, recursively fracturing it until indivisible singletons remain.</li>
</ol>

<h2>🔹 The Agglomerative Protocol (Step-by-Step)</h2>
<ol>
  <li><strong>Initialize:</strong> Place each instance in its own cluster (singleton).</li>
  <li><strong>Distance Matrix:</strong> Compute merging cost function (Distance) between every pair.</li>
  <li><strong>Optimization:</strong> Find the two closest clusters.</li>
  <li><strong>Merge:</strong> create a new parent node representing their union.</li>
  <li><strong>Iterate:</strong> Repeat until only one set (the root) remains.</li>
</ol>

<h2>🔹 Linkage Metrics: Defining Cluster Distance</h2>
<table class="styled-table">
  <thead><tr><th>Linkage Criterion</th><th>Mathematical Logic</th></tr></thead>
  <tbody>
    <tr><td><strong>Single Linkage</strong></td><td>Distance is the shortest distance from <em>any</em> member of cluster A to <em>any</em> member of cluster B (MIN).</td></tr>
    <tr><td><strong>Complete Linkage</strong></td><td>Distance is the greatest distance between any member of cluster A and any member of cluster B (MAX).</td></tr>
    <tr><td><strong>Average Linkage</strong></td><td>Distance is the arithmetic average distance between all pairs of elements.</td></tr>
  </tbody>
</table>

<div class="callout callout-info" style="background: rgba(139, 92, 246, 0.1); border-left-color: var(--accent-violet);">
  <span class="callout-icon">📊</span>
  <div>
    <strong>Standard Dendrogram Walkthrough (6 Objects: A-F)</strong><br/>
    1. Start with 6 clusters: {A}, {B}, {C}, {D}, {E}, {F}.<br/>
    2. Merge D & F into <strong>(D, F)</strong> at distance 0.50.<br/>
    3. Merge A & B into <strong>(A, B)</strong> at distance 0.71.<br/>
    4. Merge E & (D, F) into <strong>((D, F), E)</strong> at distance 1.00.<br/>
    5. Merge ((D, F), E) & C into <strong>(((D, F), E), C)</strong> at distance 1.41.<br/>
    6. Merge (((D, F), E), C) & (A, B) into root at distance 2.50.<br/>
    <em>Result: A single cluster containing all objects.</em>
  </div>
</div>

<h2>🔹 Strategic Pros & Cons</h2>
<p><strong>Analytic Advantages:</strong> Dendrograms are superb for visualizing hierarchical relations and innate data topography. They can capture concentric or interlocking clusters that partitioning methods often fail to isolate.</p>
<p><strong>Systemic Limitations:</strong> It is difficult to define the optimal "level" or height to cut the tree for distinct clusters. Furthermore, once a merge is executed, it is mathematically <strong>irreversible</strong>, potentially trapping the algorithm in locally optimal but globally suboptimal configurations.</p>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Official exam questions have been integrated! Search for <strong>[Midterm]</strong> in the questions below.</span></div>`,
        bodyAr: `<h2>🔹 التجميع الهرمي</h2>
<p>تبني خوارزميات التجميع الهرمي طوبولوجيا تجميع متعددة المستويات، مما ينتج عنه تمثيل هيكلي يشبه الشجرة يُعرف باسم <strong>Dendrogram</strong>.</p>

<h3>المنهجيات الهيكلية:</h3>
<ol>
<li><strong>التجميع (Agglomerative - Bottom-Up):</strong> يبدأ كل كائن كمجموعة مستقلة، ثم تندمج المجموعات تدريجياً.</li>
<li><strong>التقسيم (Divisive - Top-Down):</strong> يبدأ بمجموعة واحدة كبيرة ثم يتم تقسيمها تدريجياً.</li>
</ol>

<h2>🔹 مقاييس الربط (Linkage)</h2>
<table class="styled-table">
  <thead><tr><th>المعيار</th><th>المنطق الرياضي</th></tr></thead>
  <tbody>
    <tr><td><strong>Single Linkage</strong></td><td>أقصر مسافة بين أي عضو في المجموعة A وأي عضو في المجموعة B (MIN).</td></tr>
    <tr><td><strong>Complete Linkage</strong></td><td>أكبر مسافة بين أي عضو في المجموعة A وأي عضو في المجموعة B (MAX).</td></tr>
    <tr><td><strong>Average Linkage</strong></td><td>متوسط المسافة بين جميع الأزواج.</td></tr>
  </tbody>
</table>

<h2>🔹 الإيجابيات والسلبيات الإستراتيجية</h2>
<p><strong>المزايا التحليلية:</strong> المخططات الشجرية (Dendrograms) رائعة لتصور العلاقات الهرمية وتضاريس البيانات الفطرية. يمكنها التقاط المجموعات المتداخلة التي تفشل طرق التقسيم غالباً في عزلها.</p>
<p><strong>القيود النظامية:</strong> من الصعب تحديد "المستوى" أو الارتفاع الأمثل لقطع الشجرة للحصول على مجموعات منفصلة. علاوة على ذلك، بمجرد تنفيذ الدمج، فإنه يكون <strong>غير قابل للعكس</strong> رياضياً.</p>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تم دمج أسئلة الامتحانات الرسمية! ابحث عن علامة <strong>[ميدتيرم]</strong> في الأسئلة أدناه.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Hierarchical models build a 'Tree' or Dendrogram.",
      "Agglomerative is Bottom-Up (merge). Divisive is Top-Down (split).",
      "Distance to a cluster requires a linkage rule: Single(MIN), Complete(MAX), or Average.",
      "A primary advantage is visualization without needing to guess K."
    ],
    pointsAr: [
      "النماذج الهرمية تبني 'شجرة' أو Dendrogram.",
      "Agglomerative هو من الأسفل إلى الأعلى (دمج). Divisive هو من الأعلى إلى الأسفل (تقسيم).",
      "مسافة المجموعة تتطلب قاعدة ربط: أحادية (MIN)، كاملة (MAX)، أو متوسطة.",
      "الميزة الأساسية هي التصور دون الحاجة إلى تخمين K مسبقاً."
    ],
  },

  mcq: [
    {
      id: 'dm-l4-q1',
      question: "What is the visual output of a hierarchical clustering algorithm called?",
      questionAr: "ماذا يسمى المخرج المرئي لخوارزمية التجميع الهرمي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Scatter Plot', isCorrect: false },
        { id: 'b', text: 'Pie Chart', isCorrect: false },
        { id: 'c', text: 'Dendrogram', isCorrect: true },
        { id: 'd', text: 'Centroid Matrix', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q2',
      question: "If we measure the distance between two clusters by taking the LARGEST distance between any two elements across the clusters, we are using:",
      questionAr: "إذا قمنا بقياس المسافة بين مجموعتين بأخذ أكبر مسافة بين أي عنصرين في المجموعتين، فنحن نستخدم:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Single Link (MIN)', isCorrect: false },
        { id: 'b', text: 'Complete Link (MAX)', isCorrect: true },
        { id: 'c', text: 'Average Link', isCorrect: false },
        { id: 'd', text: 'Centroid Link', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q3',
      question: "Bottom-up (Agglomerative) is a typical example of which approach?",
      questionAr: "التجميع من أسفل إلى أعلى (Agglomerative) هو مثال نموذجي لأي نهج؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Exclusive classification', isCorrect: false },
        { id: 'b', text: 'Supervised learning', isCorrect: false },
        { id: 'c', text: 'partitioning clustering', isCorrect: false },
        { id: 'd', text: 'hierarchical clustering', isCorrect: true },
      ],
    },
    {
      id: 'dm-l4-q19',
      question: "For a dendrogram with 6 initial points, how many merge iterations were performed to reach the root?",
      questionAr: "بالنسبة لمخطط شجري يبدأ بـ 6 نقاط، كم عدد عمليات الدمج المطلوبة للوصول للجذر؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '5', isCorrect: true },
        { id: 'b', text: '3', isCorrect: false },
        { id: 'c', text: '2', isCorrect: false },
        { id: 'd', text: 'cannot be determined', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q20',
      question: "Agglomerative clustering is functionally a:",
      questionAr: "التجميع الهرمي (Agglomerative) هو وظيفياً نهج:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Top-Down approach', isCorrect: false },
        { id: 'b', text: 'Bottom-Up approach', isCorrect: true },
        { id: 'c', text: 'Random-assignment approach', isCorrect: false },
        { id: 'd', text: 'Supervised approach', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q21',
      question: "In Python/SciPy, linkage(X, method='single') would implement distance based on:",
      questionAr: "في بايثون، استدعاء linkage بطريقة single سينفذ مسافة بناءً على:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Maximum distance between clusters', isCorrect: false },
        { id: 'b', text: 'Minimum distance between clusters', isCorrect: true },
        { id: 'c', text: 'Average distance', isCorrect: false },
        { id: 'd', text: 'Centroid distance', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q22',
      question: "Which of the following describes the 'Chaining Effect'?",
      questionAr: "أي مما يلي يصف 'تأثير التسلسل' (Chaining Effect)؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'A single point refuses to join any cluster', isCorrect: false },
        { id: 'b', text: 'Clusters being pulled together into long, thin shapes', isCorrect: true },
        { id: 'c', text: 'The algorithm crashes recursively', isCorrect: false },
        { id: 'd', text: 'Two clusters merging and then splitting', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q23',
      question: "The distance at which two clusters merge in a dendrogram represents their:",
      questionAr: "تمثل المسافة التي تندمج عندها مجموعتان في المخطط الشجري درجة:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Dissimilarity', isCorrect: true },
        { id: 'b', text: 'Similarity', isCorrect: false },
        { id: 'c', text: 'Popularity', isCorrect: false },
        { id: 'd', text: 'Coordinates', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q4',
      question: "In Agglomerative clustering, the algorithm stops when:",
      questionAr: "في التجميع الهرمي (Agglomerative)، تتوقف الخوارزمية عندما:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Every item is in its own cluster', isCorrect: false },
        { id: 'b', text: 'K clusters are formed', isCorrect: false },
        { id: 'c', text: 'There is only one cluster remaining containing all items', isCorrect: true },
        { id: 'd', text: 'The distance hits zero', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q5',
      question: "[MATH] Cluster A has points {1, 2}. Cluster B has points {8, 10}. Using Single Link (MIN) linkage, what is the distance between A and B?",
      questionAr: "[حساب] المجموعة A بها النقاط {1, 2}. المجموعة B بها النقاط {8, 10}. باستخدام Single Link (MIN)، ما هي المسافة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '|10 - 1| = 9', isCorrect: false },
        { id: 'b', text: '|8 - 2| = 6', isCorrect: true },
        { id: 'c', text: '|8 - 1| = 7', isCorrect: false },
        { id: 'd', text: '|10 - 2| = 8', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q6',
      question: "Which linkage method is also known as the 'Diameter' of a cluster?",
      questionAr: "أي طريقة ربط تُعرف أيضاً باسم 'قطر' (Diameter) المجموعة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Single Link', isCorrect: false },
        { id: 'b', text: 'Complete Link', isCorrect: true },
        { id: 'c', text: 'Average Link', isCorrect: false },
        { id: 'd', text: 'Centroid Link', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q7',
      question: "What problem is Single Linkage clustering (MIN) frequently susceptible to?",
      questionAr: "ما هي المشكلة التي يتعرض لها التجميع باستخدام الربط الأحادي (Single Linkage) غالباً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Crashing the computer', isCorrect: false },
        { id: 'b', text: 'Forming strict globular clusters', isCorrect: false },
        { id: 'c', text: 'The Chaining Effect (clusters being pulled into long chains)', isCorrect: true },
        { id: 'd', text: 'Ignoring K parameter', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q8',
      question: "In Hierarchical Clustering, the sequence of agglomerative merges is mathematically:",
      questionAr: "في التجميع الهرمي، يكون تسلسل عمليات الدمج رياضياً:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Reversible', isCorrect: false },
        { id: 'b', text: 'Irreversible', isCorrect: true },
        { id: 'c', text: 'Always identical to PAM', isCorrect: false },
        { id: 'd', text: 'Guessed via fuzzy logic', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q9',
      question: "[MID] Using d = max(d_DA, d_FA) for merging cost specifically represents:",
      questionAr: "[ميدتيرم] استخدام أقصى مسافة (max) لتكلفة الدمج يمثل تحديداً:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Single Linkage (MIN)', isCorrect: false },
        { id: 'b', text: 'Average Linkage', isCorrect: false },
        { id: 'c', text: 'Complete Linkage (MAX)', isCorrect: true },
        { id: 'd', text: 'Ward\'s Method', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q10',
      question: "[MID] A dendrogram with 6 leaf nodes requires exactly ___ merge steps to reach the root:",
      questionAr: "[ميدتيرم] يتطلب مخطط Dendrogram يحتوي على 6 عُقد أوراق ___ خطوات دمج بالضبط للوصول للجذر:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '6', isCorrect: false },
        { id: 'b', text: '5', isCorrect: true },
        { id: 'c', text: '4', isCorrect: false },
        { id: 'd', text: '3', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q11',
      question: "[MID] In Python/SciPy, linkage(X, method='complete', metric='euclidean') performs:",
      questionAr: "[ميدتيرم] في Python، استدعاء linkage بطريقة complete ينفذ:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'K-Means clustering', isCorrect: false },
        { id: 'b', text: 'Agglomerative clustering with Complete Linkage', isCorrect: true },
        { id: 'c', text: 'Divisive clustering', isCorrect: false },
        { id: 'd', text: 'Fuzzy clustering', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q12',
      question: "[MATH] Cluster A has points {10, 12}. Cluster B has points {20, 25}. Using Complete Link (MAX) linkage, what is the distance?",
      questionAr: "[حساب] المجموعة A {10, 12}، والمجموعة B {20, 25}. باستخدام Complete Link (MAX)، ما هي المسافة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '|25 - 10| = 15', isCorrect: true },
        { id: 'b', text: '|20 - 12| = 8', isCorrect: false },
        { id: 'c', text: '|20 - 10| = 10', isCorrect: false },
        { id: 'd', text: '|25 - 12| = 13', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q13',
      question: "Which of the following is a key advantage of Hierarchical Clustering (Dendrograms)?",
      questionAr: "أي مما يلي يعد ميزة رئيسية للتجميع الهرمي (Dendrograms)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'It runs instantly on massive datasets', isCorrect: false },
        { id: 'b', text: 'It reveals nested relationships and topography of data', isCorrect: true },
        { id: 'c', text: 'It predicts class labels perfectly', isCorrect: false },
        { id: 'd', text: 'It uses centroids like K-Means', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q14',
      question: "Compute a merging cost function using d = min(d_DA, d_FA) means we applied:",
      questionAr: "حساب تكلفة الدمج باستخدام الحد الأدنى (min) يعني أننا طبقنا:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Complete-linkage', isCorrect: false },
        { id: 'b', text: 'Single-linkage', isCorrect: true },
        { id: 'c', text: 'Average-linkage', isCorrect: false },
        { id: 'd', text: 'K-Means', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q15',
      question: "What happens to the number of clusters in a 'Divisive' approach at each step?",
      questionAr: "ماذا يحدث لعدد المجموعات في النهج 'التقسيمي' (Divisive) عند كل خطوة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It decreases', isCorrect: false },
        { id: 'b', text: 'It increases (as clusters are split)', isCorrect: true },
        { id: 'c', text: 'It stays constant', isCorrect: false },
        { id: 'd', text: 'It follows K-Means rules', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q16',
      question: "A Dendrogram is read from bottom to top to observe:",
      questionAr: "يُقرأ مخطط Dendrogram من الأسفل إلى الأعلى لمراقبة:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Deletion of points', isCorrect: false },
        { id: 'b', text: 'Hierarchical merging at different distance levels', isCorrect: true },
        { id: 'c', text: 'Average value of all points', isCorrect: false },
        { id: 'd', text: 'Prediction of targets', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q17',
      question: "In Agglomerative clustering, the initialization step treats each point as:",
      questionAr: "في التجميع الهرمي (Agglomerative)، تعامل خطوة التهيئة كل نقطة على أنها:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A noise object', isCorrect: false },
        { id: 'b', text: 'A single-point cluster (singleton)', isCorrect: true },
        { id: 'c', text: 'A centroid', isCorrect: false },
        { id: 'd', text: 'A medoid', isCorrect: false },
      ],
    },
    {
      id: 'dm-l4-q18',
      question: "Which of these is a valid stopping condition if you want exactly 3 clusters?",
      questionAr: "أي من هذه الشروط يعد شرط توقف صحيح إذا كنت تريد 3 مجموعات بالضبط؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Stop when the root is formed', isCorrect: false },
        { id: 'b', text: 'Stop when the number of clusters equals 3', isCorrect: true },
        { id: 'c', text: 'Repeat until 1 cluster remains', isCorrect: false },
        { id: 'd', text: 'Stop after 100 iterations', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-l4-w1',
      question: "Contrast Agglomerative and Divisive Hierarchical Clustering.",
      questionAr: "قارن بين التجميع الهرمي التجمعي (Agglomerative) والتقسيمي (Divisive).",
      modelAnswer: "Agglomerative is bottom-up (starts with single elements, merges up to one root). Divisive is top-down (starts with one root, splits down to single elements).",
      modelAnswerAr: "التجمعي هو من الأسفل إلى الأعلى (يبدأ بعناصر فردية، ويندمج حتى جذر واحد). التقسيمي هو من الأعلى إلى الأسفل (يبدأ بجذر واحد، وينقسم إلى عناصر فردية).",
    },
    {
      id: 'dm-l4-w2',
      question: "Define Single Linkage and Complete Linkage.",
      questionAr: "عرف الربط الأحادي (Single Linkage) والربط الكامل (Complete Linkage).",
      modelAnswer: "Single linkage uses the minimum distance between any two elements in differing clusters. Complete linkage uses the maximum distance between elements.",
      modelAnswerAr: "الربط الأحادي يستخدم أدنى مسافة بين أي عنصرين في مجموعات مختلفة. الربط الكامل يستخدم أقصى مسافة بين العناصر.",
    },
    {
      id: 'dm-l4-w3',
      question: "[MATH] Given Cluster 1 (points at x=0, x=2) and Cluster 2 (points at x=10, x=15). Calculate the Single Link distance AND Complete Link distance.",
      questionAr: "[حساب] المجموعة 1 (عند x=0, 2) والمجموعة 2 (عند x=10, 15). احسب مسافة Single Link و Complete Link.",
      modelAnswer: "Single Link (MIN): Distance between closest points (x=2 and x=10) = 8. Complete Link (MAX): Distance between furthest points (x=0 and x=15) = 15.",
      modelAnswerAr: "Single Link (MIN): المسافة بين أقرب نقطتين (2 و 10) = 8. Complete Link (MAX): المسافة بين أبعد نقطتين (0 و 15) = 15.",
    },
    {
      id: 'dm-l4-w4',
      question: "Explain what a Dendrogram represents and how to 'cut' it to get clusters.",
      questionAr: "اشرح ماذا يمثل مخطط Dendrogram وكيف يتم 'قطعه' للحصول على مجموعات.",
      modelAnswer: "A dendrogram is a tree diagram showing taxonomic relationships between clusters. 'Cutting' it at a specific height (distance level) yields a set of clusters that existed at that level of similarity.",
      modelAnswerAr: "مخطط Dendrogram هو رسم شجري يوضح العلاقات بين المجموعات. 'قطعه' عند ارتفاع معين (مستوى مسافة) يعطي مجموعة المجموعات التي كانت موجودة عند ذلك المستوى من التشابه.",
    },
    {
      id: 'dm-l4-w5',
      question: "What is the main limitation of standard hierarchical clustering on very large datasets?",
      questionAr: "ما هو القيد الرئيسي للتجميع الهرمي القياسي على مجموعات البيانات الكبيرة جداً؟",
      modelAnswer: "Complexity. Standard algorithms are O(n² or n³), meaning as the number of points (n) grows, the time and memory growth is significant, making it slow compared to K-Means.",
      modelAnswerAr: "التعقيد. الخوارزميات القياسية لها تعقيد O(n² أو n³)، مما يعني أنه مع نمو عدد النقاط، يزداد الوقت والذاكرة المطلوبة بشكل كبير، مما يجعلها بطيئة مقارنة بـ K-Means.",
    },
    {
      id: 'dm-l4-w6',
      question: "[MATH] Cluster X has points {3, 5} and Cluster Y has points {12, 18}. Calculate the Average Linkage distance.",
      questionAr: "[حساب] المجموعة X لها {3, 5} والمجموعة Y لها {12, 18}. احسب مسافة Average Linkage.",
      modelAnswer: "Possible pairs: (3,12), (3,18), (5,12), (5,18). Distances: 9, 15, 7, 13. Average = (9+15+7+13)/4 = 44/4 = 11.",
      modelAnswerAr: "الأزواج الممكنة: (3,12), (3,18), (5,12), (5,18). المسافات: 9, 15, 7, 13. المتوسط = (9+15+7+13)/4 = 11.",
    },
  ],
};
