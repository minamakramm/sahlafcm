export const LECTURE = {
  subjectId: 'machine-learning',
  number: 4,
  title: 'Logistic Regression',
  titleAr: 'الانحدار اللوجستي',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Why Not Linear Regression for Classification?</h2>
<p>When solving binary classification (predicting 0 or 1), using a standard straight-line linear regression model is a terrible idea:</p>
<ul>
  <li><strong>Boundless Outputs:</strong> Linear regression lines go off toward infinity, producing predictions like $y = -4.5$ or $y = 2.8$. We need predictions strictly contained between exactly 0 and 1.</li>
  <li><strong>Outlier Extreme Sensitivity:</strong> Adding one extreme outlier far to the right of the graph will radically tilt the linear regression line, destroying the decision boundary for previously classified points.</li>
</ul>

<h2>🔹 The Sigmoid (Logistic) Function</h2>
<p>To fix this, we squish the linear equation output through the mathematical <strong>Sigmoid Function</strong>.</p>
$$ g(z) = \\frac{1}{1 + e^{-z}} $$
<p style="text-align:center; color: var(--text-muted); font-size: 0.9rem; margin-top: -10px;">(where $z = \\theta_0 + \\theta_1 x_1 + \\dots$)</p>
<ul>
  <li>This maps <em>any</em> real number $z$, from $-\\infty$ to $+\\infty$, perfectly into a range of exactly <strong>(0, 1)</strong>.</li>
  <li>As $z \\rightarrow +\\infty, g(z) \\rightarrow 1$.</li>
  <li>As $z \\rightarrow -\\infty, g(z) \\rightarrow 0$.</li>
  <li>When $z = 0, g(z) = 0.5$.</li>
</ul>

<h2>🔹 The Probabilistic Output</h2>
<p>The output of Logistic Regression represents the <strong>probability</strong> that exactly $y=1$ given the input $x$ and parameters $\\theta$.</p>
$$ h_\\theta(x) = P(y=1 \\mid x; \\theta) $$
<p>Because $P(y=0) + P(y=1) = 1$, we can easily deduce $P(y=0)$ by subtracting the output from 1.</p>

<h2>🔹 The Decision Boundary</h2>
<p>How do we turn that probability percentage back into a strict 0 or 1 classification?</p>
<p><strong>Standard Rule:</strong></p>
<ul>
  <li>If $h_\\theta(x) \\geq 0.5 \\rightarrow$ Predict Class 1.</li>
  <li>If $h_\\theta(x) < 0.5 \\rightarrow$ Predict Class 0.</li>
</ul>
<p>Mathematically, setting $g(z) = 0.5$ means $z = 0$. Therefore, to find the geometric line separating the classes on a graph, we plot where $\\theta_0 + \\theta_1 x_1 + \\dots = 0$. This line is the <strong>Decision Boundary</strong>.</p>
<div class="callout callout-warning"><span class="callout-icon">⚠️</span><span><strong>Name Confusion:</strong> Despite its deeply misleading name, Logistic "Regression" is exclusively used as a <strong>Classification</strong> algorithm. The word "regression" historically stuck around solely because it technically fits a continuous curve to probability distributions before making discrete cuts.</span></div>
<h2>🔹 Mathematical Walkthrough: Logistic Boundaries</h2>
<p>Because this course is heavily mathematical, here are explicit calculation steps tested on the midterm:</p>
<div class="callout callout-info" style="background: rgba(30,58,138,0.2); border-left-color: #3b82f6;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>1. Calculating Sigmoid Output (Probabilities)</strong><br/>
    Given $\\theta_0 = -3$, $\\theta_1 = 1$, $\\theta_2 = 1$. The feature vector for a patient is $x_1=2$, $x_2=2$.<br/>
    • Compute $Z$: $z = -3 + 1(2) + 1(2) = -3 + 2 + 2 = $ <b>1</b>.<br/>
    • Compute Probability: $g(1) = \\frac{1}{1 + e^{-1}} \\approx \\frac{1}{1 + 0.367} = \\frac{1}{1.367} \\approx $ <b>0.73</b> (73%).<br/>
    • <b>Result:</b> Since 0.73 > 0.5 threshold, predict Class 1.<br/><br/>

    <strong>2. Finding the Geometric Decision Boundary</strong><br/>
    The boundary occurs exactly where $Z = 0$ (which is where Sigmoid = 0.5).<br/>
    • Equation: $-3 + 1(x_1) + 1(x_2) = 0$.<br/>
    • Rearranged geometrically: $x_1 + x_2 = 3$.<br/>
    • <b>Result:</b> Any point $(x_1, x_2)$ whose sum geometrically exceeds 3 is explicitly classified as Class 1.
  </div>
</div>

<h2>🔹 Additional Solved Examples: Logistic Regression</h2>
<div class="callout callout-success" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
  <span class="callout-icon">✅</span>
  <div>
    <strong>Problem: Predicting Exam Results based on Hours Studied</strong><br/>
    Given Logistic Equation $z = -4 + 1.5X$, where $X$ = Hours Studied. Threshold is 0.5.<br/><br/>
    <strong>Case 1: Student studies 2 hours ($X=2$)</strong><br/>
    • Compute $Z$: $-4 + 1.5(2) = -4 + 3 = -1$<br/>
    • Compute Prob: $g(-1) = \\frac{1}{1 + e^{-(-1)}} = \\frac{1}{1 + e^1} \\approx \\frac{1}{1+2.718} \\approx 0.269 = $ <b>26.9%</b><br/>
    • <b>Result:</b> 26.9% < 50%, so we predict <b>Fail (Class 0)</b>.<br/><br/>
    
    <strong>Case 2: Student studies 4 hours ($X=4$)</strong><br/>
    • Compute $Z$: $-4 + 1.5(4) = -4 + 6 = 2$<br/>
    • Compute Prob: $g(2) = \\frac{1}{1 + e^{-2}} = \\frac{1}{1 + \\frac{1}{e^2}} \\approx \\frac{1}{1+0.135} \\approx 0.881 = $ <b>88.1%</b><br/>
    • <b>Result:</b> 88.1% ≥ 50%, so we predict <b>Pass (Class 1)</b>.<br/><br/>

    <strong>Case 3: How many hours to exactly reach the Decision Boundary?</strong><br/>
    • Decision Boundary is exactly where $Z = 0$.<br/>
    • $0 = -4 + 1.5X$<br/>
    • $4 = 1.5X \\implies X = 4 / 1.5 = $ <b>2.67 hours</b> necessary for exactly 50% probability.
  </div>
</div>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/subjects/machine-learning/lectures/4_ml_logistic_regression.pdf" target="_blank" class="pdf-link">Lecture 4 P1 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 لماذا لا نستخدم الانحدار الخطي للتصنيف؟</h2>
<p>استخدام الانحدار الخطي العادي للتصنيف الثنائي (Predicting 0 or 1) فكرة سيئة جداً:</p>
<ul>
  <li><strong>المخرجات غير المحدودة:</strong> ينتج الانحدار الخطي قيماً تمتد إلى المالانهاية، نحن نحتاج قيمة محصورة حصرياً بين [0 و 1].</li>
  <li><strong>الحساسية الهائلة للقيم الشاذة (Outliers):</strong> يمكن لطفرة واحدة تدمير حد القرار وتغيير الميل بشكل يسبب تصنيف خاطئ هائل للنقاط القديمة الصحيحة.</li>
</ul>

<h2>🔹 الدالة السينية (Sigmoid/Logistic Function)</h2>
<p>لحل ذلك، نضغط المُخَرَج الخطي عبر دالة رياضية تسمى <strong>Sigmoid Function</strong>.</p>
$$ g(z) = \\frac{1}{1 + e^{-z}} $$
<ul>
  <li>تأخذ أي رقم حقيقي وتقوسه إلى حدود (0 إلى 1).</li>
  <li>إذا كانت Z بصفر، فإن المنحنى يعطينا تماماً المخرجات بالقيمة (0.5).</li>
</ul>

<h2>🔹 حدود القرار (Decision Boundary)</h2>
<p>كيف نحول النسبة أو الاحتمال المخرج من المعادلة لتصنيف إما [ 0 أو 1 ] كأنواع؟ عبر قاعدة أساسية فاصلة:</p>
<p>نحدد أن من تجاوز عتبة التوقع 50% يُعين للكلاس (1). وما دونه يذهب للكلاس(0). وهذا رياضياً يتطابق بدقة على محور Z بقيمة 0 حيث تفصل حدود القرار.</p>`
      }
    }
  ],
  
  summary: {
    points: [
      "Linear regression fails for classification because bounds exceed [0,1] and outliers shift slopes radically.",
      "The Sigmoid function maps real numbers to the strict bounds of (0, 1).",
      "Logistic regression outputs P(y=1|x) – a probability.",
      "Decision boundary exists at g(z) = 0.5, which aligns with z = 0.",
      "Logistic Regression is a CLASSIFICATION algorithm."
    ],
    pointsAr: [
      "يفشل الانحدار الخطي في التصنيف لأن قيمه تتجاوز الحدود ولأنه حساس للشذوذ وتغيير الميل.",
      "دالة Sigmoid تضع أي عدد حقيقي وتجبره بين حدود 0، 1.",
      "الانحدار اللوجستي يُنتج نتيجة على هيئة احتمالية.",
      "حدود القرار (Decision boundary) تتواجد على التقاطع g(z)=0.5 ويكون المنحنى Z وقتها مساوياً 0.",
      "الانحدار اللوجستي عبارة عن خوارزمية 'تصنيف' (Classification)."
    ]
  },

  mcq: [
    {
      id: 'ml-l4-q1',
      question: "If the linear equation z = 0 exactly natively, what is the precisely calculated mathematical output of the Sigmoid function g(z)?",
      questionAr: "إذا كانت المعادلة الخطية z = 0 حسابياً بوضوح، فما هو المخرج الدقيق المحسوب رياضياً لدالة سيجمويد (Sigmoid) g(z)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.5', isCorrect: true },
        { id: 'b', text: '0.0', isCorrect: false },
        { id: 'c', text: '1.0', isCorrect: false },
        { id: 'd', text: 'Undefined natively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q2',
      question: "If Sigmoid outputs 0.88 definitively, what is the explicit mathematically defined probability that the model belongs to Class 0?",
      questionAr: "إذا كان خرج دالة Sigmoid هو 0.88 بشكل حاسم، فما هو الاحتمال الرياضي الصريح بأن النموذج ينتمي إلى الكلاس 0؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.12 natively', isCorrect: true },
        { id: 'b', text: '0.88 exactly', isCorrect: false },
        { id: 'c', text: '-0.88 purely', isCorrect: false },
        { id: 'd', text: 'Unknown implicitly', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q3',
      question: "Given a Logistic equation: z = θ₀ + θ₁x₁ + θ₂x₂. If θ₀ = -3, θ₁ = 1, θ₂ = 1. What geometric line perfectly mathematically defines the decision boundary threshold 0.5?",
      questionAr: "معادلة لوجستية: z = θ₀ + θ₁x₁ + θ₂x₂. إذا كان θ₀ = -3، θ₁ = 1، θ₂ = 1. ما هو الخط الهندسي الذي يعرّف رياضياً عتبة حد القرار المنصفة لِـ 0.5 تماماً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The explicit line: x₁ + x₂ = 3 natively', isCorrect: true },
        { id: 'b', text: 'The explicit area: x₁ + x₂ = 0 directly', isCorrect: false },
        { id: 'c', text: 'The pure radius: x₁² + x₂² = 9 natively', isCorrect: false },
        { id: 'd', text: 'The line natively missing intercept: x₁ = x₂', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q4',
      question: "If z = 100 explicitly, what does the Sigmoid function g(100) mathematically converge to asymptotically?",
      questionAr: "إذا كان (منحنى الاحتمالات) z = 100 صراحةً، فإلى ماذا تتقارب دالة Sigmoid - المحددة g(100) بمقاربة رياضية قوى؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Exactly 1.0 logically', isCorrect: true },
        { id: 'b', text: 'Exactly 0.5 natively', isCorrect: false },
        { id: 'c', text: '100.0 inherently', isCorrect: false },
        { id: 'd', text: 'Infinity directly', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q5',
      question: "Why is the mathematical Linear Regression Cost Function (MSE) catastrophic if used directly for Logistic Regression?",
      questionAr: "ما هو السبب الدقيق وراء اعتبار دالة تكلفة تحليل الانحدار الخطي (MSE) مأساوية إذا استخدمت مباشرة للانحدار اللوجستي؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Because plugging the non-linear Sigmoid into MSE mathematically creates a wildly non-convex, wavy terrain full of local minima that traps Gradient Descent natively', isCorrect: true },
        { id: 'b', text: 'Because probabilities cannot be squared inherently', isCorrect: false },
        { id: 'c', text: 'Because the Normal Equation divides by zero natively', isCorrect: false },
        { id: 'd', text: 'Because it maps directly to strings natively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q6',
      question: "If a Logistic classifier threshold is actively shifted mathematically from 0.5 up to 0.9, what happens geometrically?",
      questionAr: "إذا تم ترحيل عتبة مصنف لوجستي (تحسس المنحنى) بشكل نشط من الرقم الرياضي 0.5 ارتفاعاً إلى عتبة أعلى 0.9. ما الذي يمكن توقعه من خصائصه هندسياً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It aggressively increases Precision (confidence required to yell \'Positive\') while heavily sacrificing Recall natively', isCorrect: true },
        { id: 'b', text: 'It increases Recall while shrinking Precision natively', isCorrect: false },
        { id: 'c', text: 'It completely inverts the classes logically', isCorrect: false },
        { id: 'd', text: 'It drops to 0 Accuracy universally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q7',
      question: "Mathematically, Logistic Regression operates by fitting the data to which pure shape?",
      questionAr: "رياضياً، يعمل الانحدار اللوجستي عن طريق ملاءمة البيانات مع أي شكل هندسي مجرد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A completely binary flat step-function logically', isCorrect: false },
        { id: 'b', text: 'An S-shaped Probability curve mathematically bounding [0,1]', isCorrect: true },
        { id: 'c', text: 'A convex bowl precisely', isCorrect: false },
        { id: 'd', text: 'A rigid hyper-rectangle explicitly', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q8',
      question: "If a linear regression line y = θx is incorrectly used for classification, and an extreme outlier point (x=10000, y=1) is added. What mathematically happens?",
      questionAr: "لو استخدمت معادلة انحدار خطي y = θx بشكل خاطئ جداً للتصنيف، وتم إلحاق نقطة متطرفة شاذة كالسابقة المذكورة (10000). ما التوصيف الحسابي الدقيق لنتيجة الكارثة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The line radically tilts downward to map it, forcing the 0.5 threshold to slide drastically left, misclassifying previously correct points natively', isCorrect: true },
        { id: 'b', text: 'The line ignores it dynamically natively', isCorrect: false },
        { id: 'c', text: 'The line immediately squares itself natively', isCorrect: false },
        { id: 'd', text: 'The threshold is fixed purely locally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q9',
      question: "If g(z) = 1 / (1 + e⁻ᶻ), calculate g(0) precisely.",
      questionAr: "بموجب الدالة g(z) = 1 / (1 + e⁻ᶻ), احسب g(0) تحديداً.",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1 / (1+1) = 0.5', isCorrect: true },
        { id: 'b', text: '1 / 0 = Infinity', isCorrect: false },
        { id: 'c', text: '1 / (1+0) = 1.0', isCorrect: false },
        { id: 'd', text: '0 / 1 = 0', isCorrect: false }
      ]
    },
    {
      id: 'ml-l4-q10',
      question: "In a multiclass problem ('One-vs-All'), if you have exactly 5 distinct classes, how many independent Logistic Regression classifiers must you mathematically train?",
      questionAr: "كمبدأ 'One-vs-All' لمشكلة مخرجات أو فئات ذات إطار متعدد وتصنيف يحتوي على 5 أنواع متباينة تماماً. كم عدد النماذج المستقلة للانحدار التي ستتوجب تدريبها؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Exactly 5 natively', isCorrect: true },
        { id: 'b', text: 'Exactly 1 intrinsically', isCorrect: false },
        { id: 'c', text: 'Exactly 10 globally', isCorrect: false },
        { id: 'd', text: 'Exactly 2 precisely', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l4-w1',
      question: "Given the Logistic geometric boundary equation z = -10 + 2(x₁). Mathematically find the exact value of x₁ where the model predicts precisely a 50% probability (g(z)=0.5).",
      questionAr: "عن طريق معادلة الحد المنبثق هندسيًا z = -10 + 2(x₁). احسب القيمة المطلقة للمتغير x₁ حيثُ يقف نسبة الانحدار عند حاجز دقيق لمقياس الجزم بنسبة 50٪.",
      modelAnswer: "Sigmoid hits 0.5 exactly when z = 0. We set the equation to zero: 0 = -10 + 2(x₁). Rearrange: 10 = 2(x₁). Thus, x₁ geometrically must equal 5 to hit the exact 50% probability boundary natively.",
      modelAnswerAr: "الدالة السينية تقابل وتضرب احتماليات دقيقة 0.5 فقط حينما يكون المنحنى متكافئ مع z=0. تصفير المعادلة: 0 = -10 + 2(x₁). المتغير x₁ يجب أن يعادل 5 لتحقيق التكافؤ."
    },
    {
      id: 'ml-l4-w2',
      question: "A model mathematically outputs probability P(y=1) = 0.73. Threshold is set strictly to 0.80. What is the explicit classification logically natively?",
      questionAr: "نموذج يُنتج مخرجات احصائية بـ الاحتمال P(y=1) = 0.73. تم ضبط مقياس العتبة الحدية بقوة حازمة على 0.80. كيف يكون التصنيف رياضياً بـ طبيعة الحال الثنائي؟",
      modelAnswer: "The mathematical equation output (0.73) explicitly fails to reach the custom confidence threshold (0.80) dynamically. Therefore, it is strictly classified as Class 0 natively.",
      modelAnswerAr: "خوارزمية الدالة الحسابية تعطي ناتجاً يفوق النصف طبيعياً ولكنه (0.73) يفشل بصراحة في الوصول لعتبته وثغور الجدولة المفروضة عليه حديثاً بشكل استباقي (0.80)؛ ووفقا لطبيعته يعتبر مصنفه ضمن المقياس السالب كلاس (0)."
    },
    {
      id: 'ml-l4-w3',
      question: "Mathematically explain why plugging the Sigmoid equation g(θx) directly into the standard Linear Regression Mean Squared Error (MSE) cost function violently destroys Gradient Descent explicitly.",
      questionAr: "كيف تُدمر المعادلة الحسابية المنطقية للدالة السينية بصورة عنيفة عمل النزول التدريجي إذا ما دمجت بدالة خطأ (MSE) الخاص بالانحدار الخطي؟",
      modelAnswer: "Standard MSE is (y - g(z))². Because g(z) is highly non-linear (S-shaped), squaring it mathematically forces the overall cost contour map to warp into a violently non-convex terrain filled with dozens of wavy local minima and flat plateaus natively. Gradient Descent will instantly get permanently trapped in the first local valley it hits, unable to find the global optimum natively. (We use Log Loss instead to restore convexity).",
      modelAnswerAr: "خطأ مقياس (MSE) هو مربع الفرق القياسي للدوال الخطية. وضع دالة غير خطية لها أثر S-Shape السينية (g(z)) يجعل خريطة الخريطة البيانية (Contour map) والمخطط البياني شديد التعرج ومتقلب التموج ويمتلئ بالقيعان المحلية، ولن تكون محدبة بتاتاً ومستحيلة، وبالتالي فإن تقنية النزول التدريجي تعلق من أول محاولة دون حل."
    }
  ]
};
