export const LECTURE = {
  subjectId: 'machine-learning',
  number: 1,
  title: 'ML Intro, KNN & Evaluation',
  titleAr: 'مقدمة في تعلم الآلة، خوارزمية الجار الأقرب والتقييم',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is Machine Learning?</h2>
<p>"A computer program is said to learn from <b>Experience E</b> with respect to some class of <b>Tasks T</b> and <b>Performance measure P</b>, if its performance at tasks in T, as measured by P, improves with experience E." — <em>Tom Mitchell, 1997</em></p>
<div class="callout callout-info"><span class="callout-icon">ℹ️</span><span>Machine learning is defined by three elements: <strong>Experience (E)</strong>, <strong>Task (T)</strong>, and <strong>Performance (P)</strong>. E.g., learning to play checkers (T) by playing against itself (E) to win more games (P).</span></div>

<h2>🔹 Supervised vs. Unsupervised Learning</h2>
<table class="styled-table">
  <thead><tr><th>Type</th><th>Definition</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Supervised</strong></td><td>Learning from <em>labeled</em> data. Both input $x$ and output $y$ are known.</td><td>Spam/Ham filtering, Credit approval, Image recognition.</td></tr>
    <tr><td><strong>Unsupervised</strong></td><td>Learning from <em>unlabeled</em> data. Only input $x$ is known.</td><td>Customer segmentation, anomaly detection.</td></tr>
  </tbody>
</table>
<p>In Supervised learning, if $y$ is discrete (categorical), it's called <strong>Classification</strong>. If $y$ is continuous (real numbers), it's called <strong>Regression</strong>.</p>

<h2>🔹 K-Nearest Neighbors (KNN)</h2>
<p>KNN is a "lazy learning" algorithm that does <em>not</em> build an explicit model. Instead, it memorizes the training data. Given a query point $x_q$, it finds the $K$ closest training examples using a distance metric (like Euclidean Distance).</p>
<p style="text-align: center;"><strong>Euclidean Distance formula:</strong><br/> $$ d(p, q) = \\sqrt{ (p_1-q_1)^2 + (p_2-q_2)^2 + \\dots + (p_n-q_n)^2 } $$</p>
<ol>
  <li><strong>Training:</strong> Simply store all examples $(x, y)$. Time complexity: $O(1)$.</li>
  <li><strong>Classification:</strong> Given query $x_q$, compute distance to all stored examples. Find the $K$ nearest neighbors.</li>
  <li><strong>Predict:</strong> Output the majority vote of the $K$ neighbors: $\\hat{y} = \\text{sign}(\\sum y_i)$. Time complexity: $O(n \\times d)$.</li>
</ol>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Feature Scaling:</strong> Crucial for KNN. If one feature has values 1-1000 and another 0-1, the large feature will dominate the Euclidean distance. We use Min-Max scaling to compress all features to $[0,1]$.</span></div>

<h2>🔹 Training, Validation & Testing</h2>
<p>Never test on the data you train on! A common split is: <strong>60% Training</strong>, <strong>20% Validation</strong>, <strong>20% Testing</strong>.</p>
<ul>
  <li><strong>Training set:</strong> Used to learn the model parameters.</li>
  <li><strong>Validation set:</strong> Used to tune hyperparameters (like $K$ in KNN) and control overfitting.</li>
  <li><strong>Test set:</strong> Kept hidden until the very end to estimate real-world performance.</li>
</ul>

<h2>🔹 Overfitting vs. Underfitting</h2>
<table class="styled-table">
  <thead><tr><th>State</th><th>Bias</th><th>Variance</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Underfitting</strong></td><td>High</td><td>Low</td><td>Model is too simple. Fails to capture the underlying pattern.</td></tr>
    <tr><td><strong>Good Fit</strong></td><td>Balanced</td><td>Balanced</td><td>Generalizes well to new, unseen data.</td></tr>
    <tr><td><strong>Overfitting</strong></td><td>Low</td><td>High</td><td>Model is too complex. Memorizes the training data's noise. Fails on test data.</td></tr>
  </tbody>
</table>

<h2>🔹 K-fold Cross Validation</h2>
<p>Instead of a single Validation set, we partition data into $K$ equal subsets (folds). We train on $K-1$ folds and validate on the remaining $1$ fold. We repeat this $K$ times, rotating the validation fold. The final error is the average across all $K$ folds. This makes better use of limited data.</p>

<h2>🔹 Confusion Matrix & Metrics</h2>
<p>For a binary classification problem, a Confusion Matrix breaks down predictions into 4 categories:</p>
<ul>
  <li><strong>True Positives (TP):</strong> Actually positive, predicted positive.</li>
  <li><strong>True Negatives (TN):</strong> Actually negative, predicted negative.</li>
  <li><strong>False Positives (FP):</strong> Actually negative, predicted positive (Type I error).</li>
  <li><strong>False Negatives (FN):</strong> Actually positive, predicted negative (Type II error).</li>
</ul>
<table class="styled-table">
  <thead><tr><th>Metric</th><th>Formula</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Accuracy</strong></td><td>(TP + TN) / Total</td><td>Overall percentage of correct predictions.</td></tr>
    <tr><td><strong>Precision</strong></td><td>TP / (TP + FP)</td><td>Of all predicted positives, how many were actually positive?</td></tr>
    <tr><td><strong>Recall (Sensitivity)</strong></td><td>TP / (TP + FN)</td><td>Of all actual positives, how many did we find?</td></tr>
    <tr><td><strong>Specificity</strong></td><td>TN / (TN + FP)</td><td>Of all actual negatives, how many did we correctly identify?</td></tr>
  </tbody>
</table>

<h2>🔹 Mathematical Walkthrough: KNN & Confusion Matrix</h2>
<p>Because this course is heavily mathematical, here are explicit calculation steps tested on the midterm:</p>
<div class="callout callout-info" style="background: rgba(30,58,138,0.2); border-left-color: #3b82f6;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>1. Calculating Euclidean & Manhattan Distances</strong><br/>
    Given Point A (1, 2) and Point B (4, 6).<br/>
    • <b>Euclidean (L2):</b> $\\sqrt{(4-1)^2 + (6-2)^2}$ = $\\sqrt{3^2 + 4^2}$ = $\\sqrt{9 + 16}$ = $\\sqrt{25}$ = <b>5</b>.<br/>
    • <b>Manhattan (L1):</b> $|4-1| + |6-2|$ = $|3| + |4|$ = $3 + 4$ = <b>7</b>.<br/><br/>

    <strong>2. Feature Scaling (Min-Max Normalization)</strong><br/>
    If feature $X$ has values [10, 20, 50]. We scale it to [0,1].<br/>
    Formula: $X_{new} = \\frac{X - X_{min}}{X_{max} - X_{min}}$.<br/>
    • For X=20: $\\frac{20 - 10}{50 - 10} = \\frac{10}{40} = $ <b>0.25</b>.<br/><br/>

    <strong>3. Confusion Matrix Calculations</strong><br/>
    Given a matrix with TP=30, FP=10, FN=5, TN=55.<br/>
    • <b>Accuracy:</b> (TP+TN)/Total = (30+55)/100 = 85/100 = <b>85%</b>.<br/>
    • <b>Precision:</b> TP/(TP+FP) = 30/(30+10) = 30/40 = <b>75%</b>.<br/>
    • <b>Recall:</b> TP/(TP+FN) = 30/(30+5) = 30/35 ≈ <b>85.7%</b>.
  </div>
</div>

<h2>🔹 Additional Solved Examples: KNN</h2>
<div class="callout callout-success" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
  <span class="callout-icon">✅</span>
  <div>
    <strong>Problem: Classify a new point using 3-NN (K=3)</strong><br/>
    Given Training Data:<br/>
    • Point A(1, 2) → Class 0<br/>
    • Point B(2, 3) → Class 0<br/>
    • Point C(4, 4) → Class 1<br/>
    • Point D(5, 5) → Class 1<br/><br/>
    Query Point $Q(3, 3)$. What is Q's classification?<br/><br/>
    <strong>Step 1: Calculate Euclidean Distances</strong><br/>
    • $d(A, Q) = \\sqrt{(1-3)^2 + (2-3)^2} = \\sqrt{4+1} = \\sqrt{5} \\approx 2.23$<br/>
    • $d(B, Q) = \\sqrt{(2-3)^2 + (3-3)^2} = \\sqrt{1+0} = 1$<br/>
    • $d(C, Q) = \\sqrt{(4-3)^2 + (4-3)^2} = \\sqrt{1+1} = \\sqrt{2} \\approx 1.41$<br/>
    • $d(D, Q) = \\sqrt{(5-3)^2 + (5-3)^2} = \\sqrt{4+4} = \\sqrt{8} \\approx 2.83$<br/><br/>
    <strong>Step 2: Find the K=3 Nearest Neighbors</strong><br/>
    Sorting from closest to farthest: B(1), C(1.41), A(2.23).<br/><br/>
    <strong>Step 3: Majority Vote</strong><br/>
    Neighbors' classes: Class 0 (from B), Class 1 (from C), Class 0 (from A).<br/>
    Majority is Class 0 (2 votes) vs Class 1 (1 vote).<br/>
    <b>Result:</b> Query point Q is classified as <b>Class 0</b>.
  </div>
</div>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/subjects/machine-learning/lectures/1_ml_intro.pdf" target="_blank" class="pdf-link">Lecture 1 PDF</a> | <a href="/subjects/machine-learning/questions/Sheet 1 (1).pdf" target="_blank" class="pdf-link">Sheet 1 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 ما هو التعلم الآلي؟</h2>
<p>"يُقال إن برنامج حاسوبي يتعلم من <b>الخبرة E</b> فيما يتعلق بفئة من <b>المهام T</b> ومقياس <b>الأداء P</b>، إذا كان أداؤه في المهام ضمن T، كما يُقاس بواسطة P، يتحسن مع الخبرة E." — <em>توم ميتشل، 1997</em></p>
<div class="callout callout-info"><span class="callout-icon">ℹ️</span><span>يتم تعريف التعلم الآلي بثلاثة عناصر: <strong>الخبرة (E)</strong>، <strong>المهمة (T)</strong>، و<strong>الأداء (P)</strong>. مثل: تعلم لعب الداما (T) باللعب ضد نفسه (E) للفوز بالمزيد من المباريات (P).</span></div>

<h2>🔹 التعلم الخاضع للإشراف مقابل غير الخاضع للإشراف</h2>
<table class="styled-table">
  <thead><tr><th>النوع</th><th>التعريف</th><th>مثال</th></tr></thead>
  <tbody>
    <tr><td><strong>خاضع للإشراف</strong></td><td>التعلم من بيانات <em>مصنفة/معنونة</em>. كل من المدخل $x$ والمخرج $y$ معلومان.</td><td>تصفية البريد المزعج، الموافقة على الائتمان، التعرف على الصور.</td></tr>
    <tr><td><strong>غير خاضع للإشراف</strong></td><td>التعلم من بيانات <em>غير مصنفة</em>. المدخل $x$ فقط هو المعلوم.</td><td>تصنيف العملاء، اكتشاف الشذوذ.</td></tr>
  </tbody>
</table>
<p>في التعلم الخاضع للإشراف، إذا كان المخرج $y$ منقطعاً (فئوياً)، يُسمى <strong>تصنيف (Classification)</strong>. وإذا كان $y$ متصلاً (أرقام حقيقية)، يُسمى <strong>انحدار (Regression)</strong>.</p>

<h2>🔹 خوارزمية الجار الأقرب (KNN)</h2>
<p>تعتبر KNN خوارزمية "تعلم كسول" لأنها <em>لا</em> تبني نموذجاً صريحاً. بدلاً من ذلك، تحفظ بيانات التدريب. عند إعطاء نقطة استعلام $x_q$، فإنها تجد أقرب $K$ أمثلة تدريبية باستخدام مقياس مسافة (مثل المسافة الإقليدية).</p>

<h2>🔹 التدريب، التحقق والاختبار</h2>
<p>يتم تقسيم البيانات بشكل شائع إلى: <strong>60% للتدريب</strong>، <strong>20% للتحقق</strong>، <strong>20% للاختبار</strong>.</p>

<h2>🔹 الملاءمة الزائدة (Overfitting) مقابل الملاءمة الناقصة (Underfitting)</h2>
<table class="styled-table">
  <thead><tr><th>الحالة</th><th>التحيز (Bias)</th><th>التباين (Variance)</th><th>الوصف</th></tr></thead>
  <tbody>
    <tr><td><strong>ملاءمة ناقصة</strong></td><td>عالي</td><td>منخفض</td><td>النموذج بسيط جداً وفشل في التقاط النمط الأساسي.</td></tr>
    <tr><td><strong>ملاءمة جيدة</strong></td><td>متوازن</td><td>متوازن</td><td>يُعمّم بشكل جيد على البيانات الجديدة.</td></tr>
    <tr><td><strong>ملاءمة زائدة</strong></td><td>منخفض</td><td>عالي</td><td>النموذج معقد جداً وحفظ ضوضاء بيانات التدريب، وسيفشل في الاختبار.</td></tr>
  </tbody>
</table>

<h2>🔹 التحقق المتقاطع (K-fold Cross Validation)</h2>
<p>لتحسين استخدام البيانات، نقسم البيانات إلى $K$ من المجموعات الفرعية المتساوية، وندرب على $K-1$ ونتحقق من 1، ونكرر ذلك $K$ من المرات.</p>

<h2>🔹 مصفوفة الارتباك (Confusion Matrix)</h2>
<p>مصفوفة تصنف التوقعات إلى: إيجابيات صحيحة (TP)، سلبيات صحيحة (TN)، إيجابيات خاطئة (FP)، سلبيات خاطئة (FN).</p>`
      }
    }
  ],
  
  summary: {
    points: [
      "Mitchell's E, T, P definition.",
      "Classification = discrete y, Regression = continuous y.",
      "KNN uses Euclidean distance and requires feature scaling.",
      "Overfitting = High Variance, Underfitting = High Bias.",
      "Validation set prevents overfitting; Test set evaluates finals.",
      "Confusion Matrix: Accuracy, Precision, Recall, Specificity."
    ],
    pointsAr: [
      "تعريف ميتشل يشمل الخبرة (E)، المهمة (T)، ومقياس الأداء (P).",
      "التصنيف يمتلك نتائج فئوية متميزة، الانحدار نتائجه أرقام متصلة.",
      "تعمل خوارزمية KNN بمسافات إقليدية وتتطلب تحجيم للميزات.",
      "الملاءمة الزائدة تعني تباين عالي، والملاءمة الناقصة تعني تحيز عالي.",
      "مجموعة التحقق تمنع الملاءمة الزائدة، ومجموعة الاختبار تقيم الأداء النهائي.",
      "مصفوفة الارتباك تتضمن: الدقة، التحديد، الاسترداد."
    ]
  },

  mcq: [
    {
      id: 'ml-l1-q1',
      question: "Given points P1(2, 3) and P2(5, 7), what is the exact Euclidean Distance between them?",
      questionAr: "بين النقطتين P1(2, 3) و P2(5, 7)، ما هي المسافة الإقليدية الدقيقة بينهما؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '5.0', isCorrect: true },
        { id: 'b', text: '4.0', isCorrect: false },
        { id: 'c', text: '7.0', isCorrect: false },
        { id: 'd', text: '25.0', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q2',
      question: "Given points P1(2, 3) and P2(5, 7), what is the precise Manhattan Distance between them?",
      questionAr: "بين النقطتين P1(2, 3) و P2(5, 7)، ما هي مسافة مانهاتن (Manhattan Distance) بينهما؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '7.0', isCorrect: true },
        { id: 'b', text: '5.0', isCorrect: false },
        { id: 'c', text: '16.0', isCorrect: false },
        { id: 'd', text: '10.0', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q3',
      question: "If a confusion matrix has TP=40, TN=50, FP=10, and FN=0, what is the exact Precision?",
      questionAr: "إذا كانت مصفوفة الارتباك تحتوي على TP=40 و TN=50 و FP=10 و FN=0، فما هي قيمة الدقة (Precision) الدقيقة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '80.0%', isCorrect: true },
        { id: 'b', text: '100%', isCorrect: false },
        { id: 'c', text: '50.0%', isCorrect: false },
        { id: 'd', text: '40.0%', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q4',
      question: "In the same matrix (TP=40, TN=50, FP=10, FN=0), what is the calculated Recall?",
      questionAr: "في نفس المصفوفة (TP=40، TN=50، FP=10، FN=0)، ما هي قيمة الاسترداد (Recall) المحسوبة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '100%', isCorrect: true },
        { id: 'b', text: '80.0%', isCorrect: false },
        { id: 'c', text: '90.0%', isCorrect: false },
        { id: 'd', text: '40.0%', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q5',
      question: "If an unscaled feature sets x1=1000 and x2=1, its Euclidean distance to origin (0,0) is approximately:",
      questionAr: "إذا كانت الميزة غير المعدلة هي x1=1000 و x2=1، فإن المسافة الإقليدية إلى نقطة الأصل (0,0) هي تقريباً:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '1000.00', isCorrect: true },
        { id: 'b', text: '1001.00', isCorrect: false },
        { id: 'c', text: '√(1000)', isCorrect: false },
        { id: 'd', text: '1.0', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q6',
      question: "A model's confusion matrix is: [ [30, 10], [5, 55] ]. Assuming TP=30, FP=10, FN=5, TN=55. What is the Accuracy natively?",
      questionAr: "مصفوفة الارتباك المعطاة: TP=30, FP=10, FN=5, TN=55. ما هي درجة الدقة الإجمالية (Accuracy)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '85.0%', isCorrect: true },
        { id: 'b', text: '30.0%', isCorrect: false },
        { id: 'c', text: '75.0%', isCorrect: false },
        { id: 'd', text: '90.0%', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q7',
      question: "For 1-NN (K=1) tested against its exact own Training Set geometrically, the mathematically guaranteed accuracy is:",
      questionAr: "لخوارزمية 1-NN (K=1) التي تم اختبارها على مجموعة التدريب الخاصة بها بالضبط، الدقة الرياضية المضمونة هي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '100%', isCorrect: true },
        { id: 'b', text: '50.0%', isCorrect: false },
        { id: 'c', text: '0%', isCorrect: false },
        { id: 'd', text: 'Undefined natively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q8',
      question: "If scaling a feature x=[10, 20, 30] via Min-Max to [0,1], what does the exact value '20' mathematically become?",
      questionAr: "إذا قمت بتحجيم ميزة x=[10, 20, 30] باستخدام (Min-Max) لربطها بـ [0,1]، إلى ماذا تصبح القيمة الدقيقة '20' رياضياً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.5', isCorrect: true },
        { id: 'b', text: '1.0', isCorrect: false },
        { id: 'c', text: '0', isCorrect: false },
        { id: 'd', text: '10.0', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q9',
      question: "Using standard mathematical K-Fold of K=10, exactly what percentage of the data mathematically serves as the Validation array exactly per matrix iteration?",
      questionAr: "عند استخدام K-Fold رياضي قياسي لقيمة K=10، ما هي النسبة المئوية الدقيقة للبيانات التي تُستخدم كمصفوفة للتحقق (Validation) في كل تكرار؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '10.0%', isCorrect: true },
        { id: 'b', text: '90.0%', isCorrect: false },
        { id: 'c', text: '1.0%', isCorrect: false },
        { id: 'd', text: '100%', isCorrect: false }
      ]
    },
    {
      id: 'ml-l1-q10',
      question: "If a model has Specificity of exactly 1.0, what must strictly mathematically equal 0?",
      questionAr: "إذا كان التخصص (Specificity) لنموذج يساوي 1.0 بالضبط، فما الذي يجب أن يساوي صفر رياضياً لضمان ذلك؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'False Positives (FP) natively', isCorrect: true },
        { id: 'b', text: 'False Negatives (FN) inherently', isCorrect: false },
        { id: 'c', text: 'True Positives (TP) exactly', isCorrect: false },
        { id: 'd', text: 'True Negatives (TN) practically', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l1-w1',
      question: "Given coordinates P1(1, 1, 1) and P2(3, 3, 2). Mathematically calculate the Euclidean distance step-by-step natively.",
      questionAr: "بين الإحداثيات P1(1, 1, 1) و P2(3, 3, 2). قم بحساب المسافة الإقليدية رياضياً خطوة بخطوة.",
      modelAnswer: "sqrt((3-1)^2 + (3-1)^2 + (2-1)^2) = sqrt(2^2 + 2^2 + 1^2) = sqrt(4 + 4 + 1) = sqrt(9) = exactly 3.",
      modelAnswerAr: "الجذر التربيعي لـ ((3-1)² + (3-1)² + (2-1)²) = جذر(4 + 4 + 1) = جذر(9) = 3 بالضبط."
    },
    {
      id: 'ml-l1-w2',
      question: "A system predicts 100 cases. Confusion matrix output explicitly yields: TP=20, FP=30, FN=10, TN=40. Mathematically compute Precision, Recall, and Accuracy sequentially.",
      questionAr: "نظام يتنبأ بـ 100 حالة. مخرجات مصفوفة الارتباك تفيد بوضوح بـ: TP=20, FP=30, FN=10, TN=40. احسب رياضياً الدقة (Precision) والاسترداد (Recall) والدقة الإجمالية (Accuracy) بالتسلسل.",
      modelAnswer: "Total = 100. Precision = TP / (TP+FP) = 20/50 = 40%. Recall = TP / (TP+FN) = 20/30 = 66.6%. Accuracy = (TP+TN)/Total = 60/100 = 60%.",
      modelAnswerAr: "الإجمالي = 100. الدقة (Precision) = 20 / 50 = 40%. الاسترداد (Recall) = 20 / 30 = 66.6%. الدقة الإجمالية (Accuracy) = 60 / 100 = 60%."
    },
    {
      id: 'ml-l1-w3',
      question: "An array column has values X = [0, 50, 100]. Walk through mathematically normalizing X via standard Min-Max to bound [0, 1] purely.",
      questionAr: "عمود مصفوفة يحتوي على القيم X = [0, 50, 100]. اشرح رياضياً تسوية X عبر Min-Max لربطها بـ [0, 1].",
      modelAnswer: "Min-Max formula: x_new = (x - min) / (max - min). Min=0, Max=100. For 0: (0-0)/(100-0)=0. For 50: (50-0)/100 = 0.5. For 100: (100-0)/100 = 1.0. Array becomes explicitly [0, 0.5, 1.0] natively.",
      modelAnswerAr: "معادلة Min-Max هي (x - min) / (max - min). القيمة الصغرى 0، القيمة العظمى 100. للقيمة 0: يعطي 0. للقيمة 50: يعطي 0.5. للقيمة 100: يعطي 1. تصبح المصفوفة [0, 0.5, 1.0]."
    }
  ]
};
