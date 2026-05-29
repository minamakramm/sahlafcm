export const LECTURE = {
  subjectId: 'machine-learning',
  number: 3,
  title: 'Linear Models & Regression',
  titleAr: 'النماذج الخطية والانحدار',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Linear Regression Basics</h2>
<p>Regression is a Supervised Learning task where the target output $y$ is a continuous real number. In <strong>Linear Regression</strong>, we assume a linear relationship between input features $x$ and output $y$.</p>
<p>The model equation (hypothesis) is:</p>
$$ f(x) = \\theta_0 + \\theta_1 x_1 + \\theta_2 x_2 + \\dots + \\theta_d x_d $$
<p>Where $x$ are the features, and $\\theta$ are the parameters (weights). $\\theta_0$ is the y-intercept (bias). Learning the model simply means calculating the optimal $\\theta$ vector.</p>

<h2>🔹 The Cost Function</h2>
<p>To find the optimal line, we need to mathematically define how 'wrong' a line is. We use the <strong>Least Squares Cost Function</strong> (or Mean Squared Error - MSE).</p>
$$ R(\\theta) = \\frac{1}{2n} \\sum_{i=1}^{n} (y_i - f(x_i))^2 $$
<p>Our objective is to find the $\\theta$ vector that yields the minimum possible Cost $R(\\theta)$. We have two primary ways to do this: Normal Equation and Gradient Descent.</p>

<h2>🔹 Method 1: The Normal Equation</h2>
<p>We can solve for $\\theta$ exactly in one single mathematical step using linear algebra (setting the derivative of the cost function to zero).</p>
$$ \\theta = (X^T X)^{-1} X^T y $$
<table class="styled-table">
  <thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
  <tbody>
    <tr><td>No learning rate $\\alpha$ needed.</td><td>Need to compute matrix inverse, which is heavily computationally expensive $O(d^3)$.</td></tr>
    <tr><td>No iteration needed. Provides precise analytic answer immediately.</td><td>Extremely slow if features exceed ~10,000. Fails if matrix is non-invertible.</td></tr>
  </tbody>
</table>

<h2>🔹 Method 2: Gradient Descent</h2>
<p>Gradient Descent is an iterative optimization algorithm. It starts with random $\\theta$ values, computes the gradient (slope) of the cost curve, and takes small steps downhill towards the minimum.</p>
$$ \\theta_j := \\theta_j - \\alpha \\left( \\frac{\\partial R}{\\partial \\theta_j} \\right) $$
<ul>
  <li><strong>$\\alpha$ (Learning Rate):</strong> Controls the size of the steps. If $\\alpha$ is too small, convergence takes forever. If $\\alpha$ is too large, it overshoots the minimum and diverges (explodes).</li>
  <li>Must update all $\\theta_j$ variables <em>simultaneously</em> at each step.</li>
  <li>In Linear Regression, the cost function is perfectly convex (bowl-shaped), so Gradient Descent is guaranteed to find the global minimum.</li>
</ul>

<h2>🔹 Feature Scaling for Gradient Descent</h2>
<p>If you have two features—e.g., $x_1$ = Age (0-100) and $x_2$ = Income (0-1,000,000)—the cost function contours will form a highly elongated, skewed ellipse. Gradient descent will oscillate wildly and take ages to converge.</p>
<p><strong>Solution:</strong> Standardize the features so they share similar scales. <br/> $x_i = (x_i - \\mu) / \\sigma$ (where $\\mu$ is mean and $\\sigma$ is standard dev).</p>

<h2>🔹 Regularization (Lasso & Ridge)</h2>
<p>When dealing with highly complex models (e.g., California House Prices with many features), the model can overfit. We counter this by <em>penalizing</em> large weights.</p>
<ul>
  <li><strong>Ridge Regression (L2):</strong> Adds $\\lambda \\sum \\theta^2$ to the cost function. Shrinks weights close to zero but rarely exactly zero.</li>
  <li><strong>Lasso Regression (L1):</strong> Adds $\\lambda \\sum |\\theta|$ to the cost function. Can force weights to literally become zero, performing natural feature selection.</li>
</ul>

<h2>🔹 Mathematical Walkthrough: Mean Squared Error (MSE)</h2>
<p>Because this course is heavily mathematical, here are explicit calculation steps tested on the midterm:</p>
<div class="callout callout-info" style="background: rgba(30,58,138,0.2); border-left-color: #3b82f6;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>1. Calculating Mean Squared Error (MSE) natively</strong><br/>
    Model: $f(x) = 1 + 2x$. Dataset: Point A(x=1, y=4), Point B(x=2, y=3).<br/>
    • Eval A: $f(1) = 1 + 2(1) = 3$. Error = $(4 - 3)^2 = 1^2 = $ <b>1</b>.<br/>
    • Eval B: $f(2) = 1 + 2(2) = 5$. Error = $(3 - 5)^2 = (-2)^2 = $ <b>4</b>.<br/>
    • Total MSE Form: $J = \\frac{1}{2n} \\sum (y - f(x))^2$. Wait, basic MSE without $1/2$ is $(1 + 4)/2 = $ <b>2.5</b>.<br/><br/>

    <strong>2. Executing Gradient Descent Update Step</strong><br/>
    Formula: $\\theta_{new} := \\theta_{old} - \\alpha \\times (\\text{Derivative})$.<br/>
    • Given $\\alpha = 0.5$, $\\theta_{old} = 10$, and calculated slope derivative = 4.<br/>
    • Iteration 1 Update: $10 - 0.5(4) = 10 - 2 = $ <b>8</b>.<br/>
    • Iteration 2 Update (if slope stays 4): $8 - 0.5(4) = 8 - 2 = $ <b>6</b>.<br/><br/>

    <strong>3. L2 (Ridge) Regularization Penalty</strong><br/>
    Formula adds $\\lambda \\sum \\theta^2$ directly to the cost.<br/>
    • Given $\\lambda = 10$, and weight vector $\\theta = [3, 4]$.<br/>
    • Applied Penalty: $10 \\times (3^2 + 4^2) = 10 \\times (9 + 16) = 10 \\times 25 = $ <b>250</b>.
  </div>
</div>

<h2>🔹 Additional Solved Examples: Linear Regression</h2>
<div class="callout callout-success" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
  <span class="callout-icon">✅</span>
  <div>
    <strong>Problem: Calculate the New Weights using Gradient Descent</strong><br/>
    A Linear Regression model is $f(x) = \\theta_0 + \\theta_1 x$.<br/>
    Given current parameters: $\\theta_0 = 1$, $\\theta_1 = 2$. Learning Rate $\\alpha = 0.1$.<br/>
    We have ONE training point: $(x=3, y=10)$.<br/><br/>
    <strong>Step 1: Calculate the Prediction & Error</strong><br/>
    • Predict: $f(3) = 1 + 2(3) = 1 + 6 = 7$.<br/>
    • Error: $(f(x) - y) = (7 - 10) = -3$.<br/><br/>
    <strong>Step 2: Calculate the Gradients</strong><br/>
    • Gradient for $\\theta_0$: $(f(x) - y) \\times 1 = -3 \\times 1 = -3$.<br/>
    • Gradient for $\\theta_1$: $(f(x) - y) \\times x = -3 \\times 3 = -9$.<br/><br/>
    <strong>Step 3: Update the Parameters</strong><br/>
    • New $\\theta_0$: $\\theta_0 - \\alpha \\times (Gradient_0) = 1 - (0.1 \\times -3) = 1 + 0.3 = $ <b>1.3</b>.<br/>
    • New $\\theta_1$: $\\theta_1 - \\alpha \\times (Gradient_1) = 2 - (0.1 \\times -9) = 2 + 0.9 = $ <b>2.9</b>.<br/>
    <br/>
    <i>Now the new model equation is $f(x) = 1.3 + 2.9x$. If we predict $x=3$ again, $f(3) = 1.3 + 2.9(3) = 1.3 + 8.7 = 10.0$! The error drops to zero because of the gradient step adjusting the line perfectly.</i>
  </div>
</div>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/subjects/machine-learning/lectures/3_ml_linear_models_regression.pdf" target="_blank" class="pdf-link">Lecture 3 PDF</a> | <a href="/subjects/machine-learning/questions/ML Sheet 2 (2).pdf" target="_blank" class="pdf-link">Sheet 2 PDF</a> | <a href="/subjects/machine-learning/questions/Assignment 1 (1).pdf" target="_blank" class="pdf-link">Assignment 1 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 أساسيات الانحدار الخطي</h2>
<p>الانحدار (Regression) هو مهمة تعلم خاضع للإشراف حيث يكون المخرج $y$ رقماً مستمراً. في <strong>الانحدار الخطي</strong>، نفترض وجود علاقة خطية بين المدخلات $x$ والمخرجات $y$.</p>
<p>معادلة النموذج هي:</p>
$$ f(x) = \\theta_0 + \\theta_1 x_1 + \\dots + \\theta_d x_d $$
<p>حيث $\\theta$ هي المعلمات (الأوزان)، و $\\theta_0$ هي التقاطع (التحيز).</p>

<h2>🔹 دالة التكلفة</h2>
<p>للعثور على الخط الأمثل، نحدد مدى 'الخطأ' باستخدام <strong>دالة تكلفة المربعات الصغرى</strong> (MSE).</p>
$$ R(\\theta) = \\frac{1}{2n} \\sum (y_i - f(x_i))^2 $$

<h2>🔹 الطريقة الأولى: المعادلة العادية (Normal Equation)</h2>
<p>نحل لـ $\\theta$ في خطوة رياضية واحدة:</p>
$$ \\theta = (X^T X)^{-1} X^T y $$
<p>سريعة للميزات القليلة ولكنها مكلفة حسابياً للمصفوفات الضخمة.</p>

<h2>🔹 الطريقة الثانية: النزول المتدرج (Gradient Descent)</h2>
<p>خوارزمية تحسين تكرارية. تبدأ بقيم عشوائية وتتحرك لأسفل المنحنى لتقليل التكلفة خطوة بخطوة بواسطة <strong>معدل التعلم $\\alpha$</strong>.</p>
$$ \\theta_j := \\theta_j - \\alpha \\left( \\frac{\\partial R}{\\partial \\theta_j} \\right) $$

<h2>🔹 التنظيم (Regularization - Lasso & Ridge)</h2>
<p>لمنع الملاءمة الزائدة (Overfitting)، نضيف عقوبة على الأوزان الكبيرة:</p>
<ul>
  <li><strong>Ridge Regression (L2):</strong> إضافة $\\lambda \\sum \\theta^2$ لتقليص الأوزان.</li>
  <li><strong>Lasso Regression (L1):</strong> إضافة $\\lambda \\sum |\\theta|$ مما يؤدي لصفرية الأوزان واختيار الميزات.</li>
</ul>`
      }
    }
  ],
  
  summary: {
    points: [
      "Linear hypothesis: f(x) = θ₀ + θ₁x₁ + ...",
      "Least Squares Cost minimizes the sum of squared differences.",
      "Normal Equation calculates θ explicitly via inverse matrix logic (O(d³)).",
      "Gradient Descent iterates downhill using a learning rate α.",
      "A learning rate that is too high causes divergence.",
      "Feature scaling ensures gradient descent converges rapidly without oscillation.",
      "Ridge (L2) shrinks weights. Lasso (L1) can zero out weights (adds feature selection)."
    ],
    pointsAr: [
      "الفرضية الخطية تحدد معادلة الانحدار بجمع الأوزان.",
      "تكلفة المربعات الصغرى تقلل من مجموع الفروق المربعة.",
      "المعادلة العادية تقوم بحساب قيم θ المباشرة عبر معكوس المصفوفة باستهلاك عالي (O(d³)).",
      "النزول المتدرج يكرر الخطوات الانحدارية لأسفل باستخدام معدل التعلم α.",
      "معدل التعلم العالي جداً يسبب التباعد عن الحل الأمثل.",
      "تحجيم الميزات يؤمن التقارب السلس والانحدار المتجه بدون التذبذب.",
      "انحدار(Ridge) يقلص الأوزان، أما (Lasso L1) يقوم بتصفيرها ويعمل كمنتقي ميزات."
    ]
  },

  mcq: [
    {
      id: 'ml-l3-q1',
      question: "Given an equation y = 2x + 1. For data point (x=3, true_y=10), what is the calculated mathematically squared error natively?",
      questionAr: "بموجب المعادلة y = 2x + 1. لنقطة البيانات (x=3, القيمة الحقيقية true_y=10)، ما هو مقدار الخطأ المربع المحسوب بدقة رياضياً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '100', isCorrect: false },
        { id: 'b', text: '9', isCorrect: true },
        { id: 'c', text: '1', isCorrect: false },
        { id: 'd', text: '3', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q2',
      question: "In the Normal Equation θ = (XᵀX)⁻¹Xᵀy, if the matrix X has dimensions (100 rows by 5 columns), what is the exact dimensionality of the resulting inverted matrix (XᵀX)⁻¹?",
      questionAr: "في المعادلة العادية θ = (XᵀX)⁻¹Xᵀy، إذا كانت أبعاد المصفوفة X هي (100 صف في 5 أعمدة)، فما هو البُعد الدقيق للمصفوفة المعكوسة الناتجة (XᵀX)⁻¹؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '5 x 5 natively', isCorrect: true },
        { id: 'b', text: '100 x 100 logically', isCorrect: false },
        { id: 'c', text: '5 x 100 entirely', isCorrect: false },
        { id: 'd', text: '1 x 5 exactly', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q3',
      question: "If learning rate α = 0.1, current weight θ_1 = 5.0, and the mathematically calculated gradient slope is 20.0, what is the exact new updated weight?",
      questionAr: "إذا كان معدل التعلم α = 0.1، والوزن الحالي θ_1 = 5.0، وكان ميل الانحدار المحسوب هو 20.0، فما هو الوزن الجديد الدقيق بعد التحديث اللحظي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '7.0 natively', isCorrect: false },
        { id: 'b', text: '3.0 directly', isCorrect: true },
        { id: 'c', text: '5.0 completely', isCorrect: false },
        { id: 'd', text: '15.0 invariably', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q4',
      question: "Given coordinates P1(1, 2) and P2(2, 4). The mathematical Mean Squared Error (MSE) of the constant prediction line y=3 is:",
      questionAr: "استناداً على الإحداثيات P1(1, 2) و P2(2, 4). خطأ متوسط المربعات (MSE) الرياضي لخط التوقع الثابت y=3 هو:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '((2-3)² + (4-3)²)/2 = (1+1)/2 = 1.0 natively', isCorrect: true },
        { id: 'b', text: '0.0 flawlessly', isCorrect: false },
        { id: 'c', text: '2.0 invariably', isCorrect: false },
        { id: 'd', text: '4.0 purely', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q5',
      question: "If the derivative slope at point θ is exactly 0.0, the Gradient Descent mathematical update step formula will literally:",
      questionAr: "إذا كان ميل المشتقة عند النقطة θ هو تماماً 0.0، فإن خطوة تحديث النزول المتدرج ستؤدي حرفياً إلى:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Explode logically', isCorrect: false },
        { id: 'b', text: 'Divide by zero invariably', isCorrect: false },
        { id: 'c', text: 'Subtract 0, freezing the parameter precisely natively', isCorrect: true },
        { id: 'd', text: 'Reverse direction dynamically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q6',
      question: "What kind of pure geometric shape does the Least Squares Cost Function map out for univariate (one-feature) Linear Regression?",
      questionAr: "ما هو نوع الشكل الهندسي النقي الذي ترسمه دالة تكلفة المربعات الصغرى للانحدار الخطي أحادي المتغير؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A completely flat 2D plane', isCorrect: false },
        { id: 'b', text: 'A multi-peaked terrain natively', isCorrect: false },
        { id: 'c', text: 'A perfect mathematically convex bowl exactly', isCorrect: true },
        { id: 'd', text: 'A saddle point infinitely', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q7',
      question: "In Regularization (Ridge L2), the mathematical formula appends + λ||θ||². If λ = 10 and weight vector θ = [3, 4], what is the exact mathematical penalty added to the cost?",
      questionAr: "في التنظيم (Ridge L2)، تضيف المعادلة  + λ||θ||². إذا كان λ = 10 ومتجه الأوزان θ = [3, 4]، فما هي العقوبة الرياضية الدقيقة المضافة للتكلفة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '10 * (9+16) = 250 natively', isCorrect: true },
        { id: 'b', text: '50 logically', isCorrect: false },
        { id: 'c', text: '25 exactly', isCorrect: false },
        { id: 'd', text: '100 purely', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q8',
      question: "If your dataset has exactly n = 3 billion rows, what explicit mathematical operation forces the Normal Equation to crash entirely?",
      questionAr: "إذا كانت مجموعة البيانات تحتوي على بالضبط 3 مليار صف، فما هي العملية الرياضية التي تُجبر المعادلة العادية على الانهيار التام؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Calculating scaling natively', isCorrect: false },
        { id: 'b', text: 'Multiplying X by y natively', isCorrect: false },
        { id: 'c', text: 'The extreme O(d³) computational limit required to invert massive matrices logically', isCorrect: true },
        { id: 'd', text: 'Standard derivatives identically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l3-q9',
      question: "Lasso Regularization (L1) uniquely forces mathematical coefficients to do what?",
      questionAr: "تنظيم Lasso (L1) يجبر المعاملات الرياضية بصورة فريدة على القيام بـ:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Double dynamically', isCorrect: false },
        { id: 'b', text: 'Square logarithmically', isCorrect: false },
        { id: 'c', text: 'Crash natively', isCorrect: false },
        { id: 'd', text: 'Shrink to absolute literal zero, mathematically deleting the feature essentially', isCorrect: true }
      ]
    },
    {
      id: 'ml-l3-q10',
      question: "Under what strict geometric condition will the matrix (XᵀX) mathematically fail to be invertible (singular) during the Normal Equation natively?",
      questionAr: "تحت أي شرط هندسي صارم ستفشل المصفوفة رياضياً (XᵀX) في أن يكون لها معكوس (معكوس حسابي وحيد) في المعادلة العادية؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'If features are perfectly mathematically collinear/dependent natively', isCorrect: true },
        { id: 'b', text: 'If learning rate is 1.0 identically', isCorrect: false },
        { id: 'c', text: 'If MSE is exactly zero natively', isCorrect: false },
        { id: 'd', text: 'If points are overlapping exactly', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l3-w1',
      question: "A model equation is f(x) = θ₀ + θ₁x. Given θ₀=1, θ₁=2. The dataset has two points: A(x=1, y=4) and B(x=2, y=3). Mathematically calculate the exact Mean Squared Error (Cost).",
      questionAr: "نموذج معادلته f(x) = θ₀ + θ₁x. حيث θ₀=1 و θ₁=2. يحتوي مجموعة البيانات على نقطتين: A(x=1, y=4) و B(x=2, y=3). احسب رياضياً قيمة متوسط الخطأ المربع (Cost).",
      modelAnswer: "f(1) = 1 + 2(1) = 3. Squared error for A = (4 - 3)² = 1. f(2) = 1 + 2(2) = 5. Squared error for B = (3 - 5)² = (-2)² = 4. MSE = (1/2) * (1 + 4) = 5 / 2 = 2.5.",
      modelAnswerAr: "توقع f(1) = 3 (الخطأ המربع لـ A: 1² = 1). توقع f(2) = 5 (الخطأ المربع لـ B: -2² = 4). الدالة تعطي المجموع المربع على اثنين: (1 + 4) / 2 = 2.5."
    },
    {
      id: 'ml-l3-w2',
      question: "Gradient Descent mathematical step is: θ := θ - α(Derivative). Given α=0.5, θ=10, and Derivative=4. Mathematically map the exact next two steps (assuming Derivative stubbornly remains 4).",
      questionAr: "خطوة النزول المتدرج الرياضية هي: θ := θ - α(تفاضل). بالنظر إلى أن معدل التعلم α=0.5، والأوزان الحالية θ=10 والتفاضل(الميل)=4. تتبع الخطوات لآخر مرتين.",
      modelAnswer: "Step 1: new_θ = 10 - 0.5(4) = 10 - 2 = 8. Step 2: new_θ = 8 - 0.5(4) = 8 - 2 = 6. It mathematically steps down by 2 each pure iteration.",
      modelAnswerAr: "الخطوة الأولي: 10 - (0.5 مضروبة في 4 ) يعطي 8. الخطوة الثانية: 8 - 2 = يعطي 6. النتيجة هي انحدار مستمر منتظم بتناقص حاد 2 مع كل دورة رياضية."
    },
    {
      id: 'ml-l3-w3',
      question: "If feature X1 ranges [0 to 1], and feature X2 ranges [0 to 1,000,000]. Mathematically describe the exact geometric distortion in the Cost Contour Map, and why unscaled Gradient Descent violently fails.",
      questionAr: "إذا كان المتغير X1 مدى انتشاره [0 إلى 1] بينما X2 مداه يفوق المليون. رياضياً حلل أثر ذلك هندسياً للمخطط البياني (خريطة التكلفة Contour) لماذا يفشل نزول متدرج بدون تحجيم الميزات بشكل حاد.",
      modelAnswer: "The axes scaling discrepancy mathematically stretches the convex cost bowl into an incredibly thin, elongated ellipse natively. Gradient vectors always point strictly perpendicular to contour lines. Instead of pointing straight to the minimum mathematically, the gradient points uselessly across the narrow valley, violently oscillating back and forth wasting thousands of iterations.",
      modelAnswerAr: "تباين انتشار وتمدد المحاور يُنتج شكلاً هندسياً ضيق البؤرة إهليلجيا وطويلاً بشكل هائل. نظراً لأن المتجهات الموجهه (خوارزمية التدريج) تشير دوماً بشكل عامودي حاد لخطوط المستوى. سوف تتجه للجانب بصورة لا فائدة منها بدلاً من الحل الأمثل وتظل تتذبذب يميناً ويساراً بلا هوادة لآلاف المرات بضياع واضح لمسار التقارب السريع."
    }
  ]
};
