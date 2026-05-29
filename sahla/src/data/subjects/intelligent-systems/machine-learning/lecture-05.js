export const LECTURE = {
  subjectId: 'machine-learning',
  number: 5,
  title: 'Classification & Perceptrons',
  titleAr: 'التصنيف وخوارزمية البيرسيبترون (Perceptron)',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Linear Classification</h2>
<p>A classification model is linear if it can be represented by a linear hyperplane separating classes. Examples: Bananas vs Oranges, Spam vs Ham, Cancerous vs Benign.</p>

<h2>🔹 The History: The Perceptron</h2>
<p>Invented by <strong>Frank Rosenblatt in 1959</strong>, the Perceptron was an attempt to mimic biological neurons. It is the absolute simplest linear classifier and the foundational building block of all modern Neural Networks.</p>
<ul>
  <li>It takes multiple inputs, multiplies them by weights, strictly sums them up, and passes them through a hard <em>Sign / Step</em> threshold function.</li>
  <li>It <strong>only</strong> works on perfectly linearly separable data. If the data overlaps in the slightest, the raw Perceptron algorithm will loop infinitely and never converge.</li>
  <li>The equation: $f(x_i) = \\text{sign} (\\sum_j w_j x_{ij})$</li>
</ul>

<h2>🔹 The Perceptron Learning Algorithm</h2>
<p>The beauty of the Perceptron lies in its simple error-correction loop:</p>
<div style="background: var(--bg-tertiary); padding: 16px 20px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.95rem; border: 1px solid var(--border-subtle); margin-bottom: 16px; line-height: 1.8; overflow-x: auto;">
Initialize $W = [0, 0, \\dots, 0]$<br/>
<span style="color: var(--accent-magenta); font-weight: 600;">Repeat</span> until convergence (no updates happen):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--accent-cyan); font-weight: 600;">For</span> each example $x_i$:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--accent-rose); font-weight: 600;">If</span> $y_i \\cdot f(x_i) \\leq 0$ <span style="color: var(--text-muted); font-style: italic;">// Misclassification strictly occurs</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$W_j := W_j + (y_i \\cdot x_{ij})$ <span style="color: var(--text-muted); font-style: italic;">// Adjust weights instantly</span>
</div>
<ul>
  <li>If the model makes a mistake on a positive example (predicts -, true +): It <strong>adds</strong> the example coordinates to the weights.</li>
  <li>If the model makes a mistake on a negative example (predicts +, true -): It <strong>subtracts</strong> the example coordinates from the weights.</li>
  <li>$w_1, \\dots, w_d$ dictates the <strong>slope</strong>. $w_0$ dictates the <strong>offset/bias</strong>.</li>
</ul>

<h2>🔹 Boolean Function Representation & The XOR Problem</h2>
<p>A single Perceptron can easily draw a line computing logic gates like <strong>AND, OR, NAND, NOR, and NOT</strong>.</p>
<div class="callout callout-warning"><span class="callout-icon">⚠️</span><span><strong>The XOR Problem:</strong> A terrifying limitation was discovered by Marvin Minsky. You cannot draw a single straight line to separate an <strong>XOR</strong> gate (Exclusive OR). This proved a single perceptron cannot learn XOR logic, severely crushing Neural Network funding in the 1970s.</span></div>

<h2>🔹 From Perceptron to Deep Neural Networks</h2>
<p>To solve XOR, we must connect Perceptrons together in complex layers. However, there is a mathematical catch: <strong>A cascade of linear functions is still just one big linear function!</strong></p>
<p>This means stacking 1,000 pure Perceptrons still acts exactly identical to 1 single Perceptron.</p>
<p><strong>The Fix:</strong> We must inject <strong>Non-linear Activation Functions</strong> (like Sigmoid or ReLU) between the multi-layered nodes. This introduces math curvature, allowing deep networks to bend boundaries to surround hyper-complex problems like image recognition and language generation.</p>

<h2>🔹 Mathematical Walkthrough: Perceptron Updates</h2>
<p>Because this course is heavily mathematical, here are explicit calculation steps tested on the midterm:</p>
<div class="callout callout-info" style="background: rgba(30,58,138,0.2); border-left-color: #3b82f6;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>1. Executing Perceptron Update Rule (False Negative)</strong><br/>
    Initial Weights: $W = [2, -1]$. Input: $X = [1, 3]$ with True Label $Y = +1$.<br/>
    • Predict: $Sign(W \\cdot X) = Sign((2)(1) + (-1)(3)) = Sign(2 - 3) = Sign(-1) = $ <b>-1</b>.<br/>
    • <b>Result:</b> The model incorrectly predicted -1 (False Negative).<br/>
    • Update: Since $Y = +1$, we mathematically ADD the input to the weights.<br/>
    • New Weights: $W_{new} = W + X = [2, -1] + [1, 3] = $ <b>[3, 2]</b>.<br/><br/>

    <strong>2. Executing Perceptron Update Rule (False Positive)</strong><br/>
    Current Weights: $W = [3, 2]$. Input: $X = [-1, 1]$ with True Label $Y = -1$.<br/>
    • Predict: $Sign(W \\cdot X) = Sign((3)(-1) + (2)(1)) = Sign(-3 + 2) = Sign(-1) = $ <b>-1</b>.<br/>
    • <b>Result:</b> The model correctly predicted -1. No update occurs! $W$ remains <b>[3, 2]</b>.<br/><br/>

    <strong>3. The XOR Mathematical Proof</strong><br/>
    Inputs: [0,0]->0, [1,0]->1, [0,1]->1, [1,1]->0.<br/>
    Impossible constraint: We need $W_1 > 0$ to satisfy [1,0]->1, and $W_2 > 0$ to satisfy [0,1]->1.<br/>
    But if both $W_1 > 0$ and $W_2 > 0$, then [1,1] must mathematically be $> 0$ (which output 1).<br/>
    However, XOR strictly expects [1,1] to output 0. It is biologically and mathematically contradictory for a single weight set.
  </div>
</div>

<h2>🔹 Additional Solved Examples: Perceptron</h2>
<div class="callout callout-success" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
  <span class="callout-icon">✅</span>
  <div>
    <strong>Problem: Simulating the Perceptron Learning Algorithm</strong><br/>
    Initial weights: $W = [0, 0]$, Bias $b = 0$.<br/>
    We pass two data points sequentially:<br/>
    • Point 1: $X_1 = [1, 1]$, True Label $Y_1 = +1$<br/>
    • Point 2: $X_2 = [-1, 2]$, True Label $Y_2 = -1$<br/>
    *(Note: Perceptron outputs +1 if sum ≥ 0, else -1)*<br/><br/>
    
    <strong>Step 1: Evaluate Point 1</strong><br/>
    • Calculation: $(w_1 \\times x_1) + (w_2 \\times x_2) + b$<br/>
    • $(0 \\times 1) + (0 \\times 1) + 0 = 0$.<br/>
    • Since $0 \\ge 0$, Prediction = <b>+1</b>.<br/>
    • <b>Result:</b> Target is +1, Prediction is +1. Correct! <b>No weights update.</b><br/><br/>
    
    <strong>Step 2: Evaluate Point 2</strong><br/>
    • Calculation using current weights [$0, 0$]: $(0 \\times -1) + (0 \\times 2) + 0 = 0$.<br/>
    • Since $0 \\ge 0$, Prediction = <b>+1</b>.<br/>
    • <b>Result:</b> Target is -1, but Prediction is +1. <b>Error! Update required.</b><br/><br/>
    
    <strong>Step 3: Update Weights for Error on Negative Class</strong><br/>
    • Since it predicted +1 but should be -1, we <b>subtract</b> the input coordinates from the weights.<br/>
    • New $W = W_{old} - X_2 = [0, 0] - [-1, 2] = [0 - (-1), 0 - 2] = $ <b>[1, -2]</b>.<br/>
    • New Bias = $b_{old} - 1 = 0 - 1 = $ <b>-1</b>.<br/><br/>
    
    <i>Future passes will now use $W = [1, -2]$ and offset $b = -1$ to draw the new shifted boundary line!</i>
  </div>
</div>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Resources:</strong> <a href="/subjects/machine-learning/lectures/4_ml_Classification_and_Perception_Algorithm.pdf" target="_blank" class="pdf-link">Lecture 4 P2 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 التصنيف الخطي</h2>
<p>يكون نموذج التصنيف خطياً إذا أمكن تمثيله برسم مستوى فائق يفصل بين الفئات على التوالي خطياً.</p>

<h2>🔹 التاريخ: خوارزمية البيرسيبترون (Perceptron)</h2>
<p>تم اختراعها عام 1959 في محاولة لنسخ الأعصاب البيولوجية وتصنف كاساس للشبكات العصبية الخطية:</p>
<ul>
  <li>لا يعمل إطلاقاً إلا ببيانات ممكن أن تُفصل على هيئة خط مستقيم.</li>
  <li>تمر العمليات بجمع وضروبات بسيطة منتهية بخاصية القطع المحدودة (Sign Threshold).</li>
</ul>

<h2>🔹 عملية التعلم والتحديث الخوارزمي</h2>
<p>تعمل هذه الخوارزمية بمنهجية التصحيح للأخطاء:</p>
<ul>
  <li>إذا تم التنبؤ بنتيجة سلبية، وهي إيجابية (يُضاف نقاط المدخل للمخرجات ليعاد التوجيه للأعلى).</li>
  <li>إذا تم التنبؤ بنتيجة إيجابية، وهي عكس ذلك سلبية بالواقع (تطرح الإحداثيات وتُعاد ضبط التوجيه).</li>
</ul>

<h2>🔹 وظائف البولين ومسألة (XOR Problem)</h2>
<p>تستطيع البيرسيبترون العادية برسم بوابة الAND والOR وغيرها لأنها ممكنة الرسم والتحديد بخط واحد. ولكن يستحيل فصل البوابة المتناقضة XOR بخط حاسم وهو العيب الذي هدم ثقة الباحثين.</p>`
      }
    }
  ],
  
  summary: {
    points: [
      "Perceptron (Rosenblatt 1959) is the simplest biological neural mimic.",
      "Update Rule fires exclusively on error: w_j := w_j + (y_i * x_ij).",
      "Demands data be perfectly linearly separable or it never converges.",
      "Solves AND/OR/NOT but utterly fails on the non-linear XOR.",
      "NNs stack perceptrons natively, but require non-linear Activation Functions to break extreme linearity.",
      "SVM (Support Vector Machines) evolved parallel, doing the same as but optimizing for maximum margin."
    ],
    pointsAr: [
      "خوارزمية البيرسيبترون من ابسط نماذج محاكاة الاعصاب الحيوية والمبتكرة 1959.",
      "قاعدة التحديث وتعيين الأوزان تعمل وتتدخل حصرياً عند مواجهة أخطاء ولا تفعل حال التوقع الصحيح.",
      "يتطلب العمل وجود تقسيم خطي صحيح للبيانات ولا يستطيع حل المشكلات المتقاطعة مطلقاً.",
      "تتغلب الشبكات العصبية العميقة باستخدام دوال (Non-Linear Activation)",
      "تعمل (SVM Support Vector) بشكل مشابه لكن لتطبيق فواصل الهامش القصوى بصورة مباشرة."
    ]
  },

  mcq: [
    {
      id: 'ml-l5-q1',
      question: "Given an initial weight vector w = [0, 0]. An input x = [1, 2] has a true label of '+1'. The perceptron predicts '-1'. What is the explicitly calculated new weight vector?",
      questionAr: "بالرجوع للقيمة الأساسية w = [0, 0]. وقيمة الإحداثي المدخل للمتجه x = [1, 2] وتصنيفه الطبيعي '+1'. وتوقعت الخوارزمية خطأ التصنيف '-1'. ما هي قيمة التحديث الدقيق للمتجه المحسوبة لاحقاً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '[1, 2] natively', isCorrect: true },
        { id: 'b', text: '[-1, -2] exactly', isCorrect: false },
        { id: 'c', text: '[0, 0] completely', isCorrect: false },
        { id: 'd', text: '[2, 4] precisely', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q2',
      question: "Given weight vector w = [1, 1]. Input x = [2, -3] has true label '-1'. The mathematical prediction is sign(1*2 + 1*-3) = sign(-1) = '-1'. What mathematically occurs next?",
      questionAr: "إذا كان المتجه والأوزان w=[1,1] والإحداثي x=[2 ,-3] والتصنيف '-1'. وبعد العملية الرياضية وجد التوقع يحدد النتيجة كالتالي (-1). ما هو الإجراء التالي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'w becomes [3, -2] natively', isCorrect: false },
        { id: 'b', text: 'The perceptron does absolutely nothing geometrically because the prediction is correct natively', isCorrect: true },
        { id: 'c', text: 'w resets to [0, 0] logically', isCorrect: false },
        { id: 'd', text: 'w becomes [-1, 4] exclusively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q3',
      question: "Given w = [2, 3] and input x = [1, 1] with true label '-1'. Prediction is sign(2*1 + 3*1) = sign(5) = '+1' (Error!). Calculate the precise update.",
      questionAr: "بأوزان المعطيات الحالية w=[2,3] للإحداثي المستخرج x=[1,1] بتصنيفه السلبي المطلوب '-1' . وعند التطبيق حصل الخطأ بالنتيجة للإيجابي  '+1' للاشارات. قم باستخراج التحديث المطلوب بدقة.",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'w_new = w - x = [2-1, 3-1] = [1, 2] natively', isCorrect: true },
        { id: 'b', text: 'w_new = w + x = [3, 4] exactly', isCorrect: false },
        { id: 'c', text: 'w_new = [0, 0] flawlessly', isCorrect: false },
        { id: 'd', text: 'w_new = [-2, -3] natively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q4',
      question: "Mathematically, a purely linear Perceptron maps a boundary equation defined as: w₁x₁ + w₂x₂ + bias = 0. If w=[1, -1] and bias=0. What geometric line does this represent?",
      questionAr: "يرسم البيرسبترون بحدوده الفاصلة هندسياً للمعادلة: : w₁x₁ + w₂x₂ + bias = 0، فإذا كانت المتجهات [ 1, و  -1 ] وكان الخطأ معدوماً 0 ما هي حدود المنحنى الجبرية؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'y = x (or x₁ = x₂) exactly', isCorrect: true },
        { id: 'b', text: 'y = -x essentially', isCorrect: false },
        { id: 'c', text: 'y = 0 entirely', isCorrect: false },
        { id: 'd', text: 'x = 0 strictly', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q5',
      question: "What absolute strict geometric anomaly occurs when graphing the Boolean logic gate XOR natively in a 2D Cartesian plane?",
      questionAr: "ما هو الشذوذ الهندسي المطلق والثابت الذي يحدث عند رسم البوابة المنطقية XOR هندسيًا في محور ديكارت كقيمة رقمية ؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'All points land on a perfectly straight horizontal axis natively', isCorrect: false },
        { id: 'b', text: 'All points land in a perfect circle natively', isCorrect: false },
        { id: 'c', text: 'The positive and negative coordinates form an \'X\' pattern that physically cannot be separated by a single straight line natively', isCorrect: true },
        { id: 'd', text: 'All points perfectly overlap logically identically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q6',
      question: "If a perceptron mathematically loops identically over a dataset with 5 points, updating weights endlessly without ever achieving zero errors, the dataset is definitively:",
      questionAr: "إذا دارت المرجعية للنموذج البيرسيبترون باستمرار بلا توقف حول قيم 5 نقاط وظل في حوسبة وإعادة لتصحيح التجاوزات مراراً بلا أي مقياس للنجاح بدون أخطاء. فإن هذه حتمياً تعود إلى:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Mathematically Linearly Inseparable completely natively', isCorrect: true },
        { id: 'b', text: 'Mathematically entirely linear identically', isCorrect: false },
        { id: 'c', text: 'Too small for the perceptron cleanly', isCorrect: false },
        { id: 'd', text: 'Lacking a sigmoid matrix logically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q7',
      question: "Given a purely mathematical cascade of 3 fully linear Neural Network layers (without activation functions): y = W₃(W₂(W₁x)). This equation simplifies directly natively to:",
      questionAr: "لو ربطنا حوسبة رياضية صريحة وثلاثية لطبقات شبكة عصبية متعددة بالخطية: (y = W₃(W₂(W₁x))) بدون دوال تنشيط محورية، فإن هذه المعادلة تتحجم تلقائياً لتكون:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A wildly complex polynomial inherently', isCorrect: false },
        { id: 'b', text: 'A single linear matrix explicitly y = Wx natively', isCorrect: true },
        { id: 'c', text: 'An exponential probability distribution cleanly', isCorrect: false },
        { id: 'd', text: 'A Gaussian curve absolutely', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q8',
      question: "Assume the mathematical Hard-Step limit function for a Perceptron defined as: Output = 1 if (w⋅x + bias >= 0) else 0. If w=[2, 3], bias=-5, and x=[1, 1]. What is the explicit mathematical output?",
      questionAr: "وفق دالة القفز الرقمي المباشر Output = 1 if (w⋅x + bias >= 0) else 0 و w=[2, 3] مع الإحداثي المدخل [1,1] ومع التحيز -5. ما القيم النهائية الدقيقة للمخرج:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '2*1 + 3*1 - 5 = 0. Since 0 >= 0, output is explicitly 1 natively', isCorrect: true },
        { id: 'b', text: 'output is strictly 0 purely natively', isCorrect: false },
        { id: 'c', text: 'output is precisely 0.5 seamlessly', isCorrect: false },
        { id: 'd', text: 'output is -5 exclusively natively', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q9',
      question: "In Support Vector Machines (SVM), unlike Perceptrons, the algorithm doesn't just halt at the first working mathematical line. It explicitly maximizes:",
      questionAr: "على خلاف نموذج البيرسيبترون العادي، فخوارزمية دعم الآلات المتجهة للرياضيات (SVM) لا تتوقف بمجرد أول دالة مقترحة وتتجاوز ذلك لاختيار:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The sum of all coordinates geometrically', isCorrect: false },
        { id: 'b', text: 'The marginal distance geometrically bounding the closest points of each class implicitly natively', isCorrect: true },
        { id: 'c', text: 'The number of parameters natively globally', isCorrect: false },
        { id: 'd', text: 'The learning rate actively identically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l5-q10',
      question: "When does the Perceptron mathematical update algorithm (w_new = w ± x) officially converge dynamically?",
      questionAr: "متى تقر وتستقر خوارزمية التعلم للبيرسيبترون في تحديثاتها (w_new = w ± x) بفاعلية متوازنة واكتمال حسابات؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Precisely when the error calculation equals zero for every single data point in an entire geometric epoch pass natively', isCorrect: true },
        { id: 'b', text: 'When weights explode to precisely infinity securely', isCorrect: false },
        { id: 'c', text: 'When 100 epochs are hit identically exclusively', isCorrect: false },
        { id: 'd', text: 'When weights natively hit exactly 0 definitively', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l5-w1',
      question: "Let w = [1, 0] initially. Given points A([1, 1], label=1) and B([-1, -1], label=1). Compute strictly the mathematical prediction and updates for passing A and then passing B.",
      questionAr: "بأوزان أولية المتجه w = [1, 0]. ومعطيات النقطة A([1, 1], لها فئة 1) و B([-1, -1], فئتها 1 ايضاً). ووضح الحسابات الرياضية وتحديثاتها للمرور فوق A ومباشرة البت في B تالياً.",
      modelAnswer: "Pass A: prediction = sign(1*1 + 0*1) = sign(1) = 1 (Correct, NO UPDATE). Pass B: prediction = sign(1*-1 + 0*-1) = sign(-1) = -1 (Error). It predicted negative, but B is positive. Update: w_new = w + B = [1, 0] + [-1, -1] = [0, -1].",
      modelAnswerAr: "المرور بـ A: النتيجة علامتها موجبة (1) ولن يتحدث الوزن. المرور بـ B: التوقع علامته سالبة (-1) والنتيجة خطأ لأن B إيجابية وموجبة. حساب التحديث هنا : جمع w الحالية و B المتجه للحصول على = [ 0 و -1 ]."
    },
    {
      id: 'ml-l5-w2',
      question: "Mathematically define why a Multi-Layered Neural Network strictly requires a Non-Linear Activation Function (like ReLU or Sigmoid) between pure matrix multiplications.",
      questionAr: "حلل هندسياً ورياضياً ضرورة إلزام وحتمية ادراج دالة رياضية غير خطية (مثل  ReLU أو Sigmoid) حين تطبيق العمليات والمصفوفات في الشبكات العصبية المتعددة.",
      modelAnswer: "Matrix multiplication is mathematically entirely linearly distributive natively. If you multiply an input by Matrix 1, then Matrix 2, then Matrix 3, the math compresses. W3*(W2*(W1*x)) mathematically collapses directly into a single completely equivalent matrix W_final * x. Thus, a 400-layer linear network possesses literally the exact same computational capability as a sheer 1-layer Perceptron. Non-linear activation functions mathematically warp and bend the plane, breaking the linearity permanently so the math cannot collapse backwards natively.",
      modelAnswerAr: "بنيت خصائص المصفوفات لتضرب بقيم خطية مستقيمة كُلياً بطبيعتها. في حين تم ضرب المصفوفة الأولى والثانية والثالثة فرياضيا ومعادلاتياً لا تعتبر خطوة حوسبية أكثر من الانهيار لنفس المحور لتعود كمرحلة أحادية خطياً، وال100 طبقة خطية مساوي حوسبياً لنقطة ومعادلة البيرسبترون الأوحد. إدراجنا للتنشيط الغير خطي يحرف المسار ويطوعه ليحسب معادلات ويطويها ليصيب مستويات عليا من الرياضيات التي لا تنهار للخلف بأي حال."
    },
    {
      id: 'ml-l5-w3',
      question: "Draw mathematically the Boolean OR gate coordinates. Prove whether a single Perceptron line can geometrically separate it natively.",
      questionAr: "ارسم هندسياً ومعادلاتياً إحداثيات البوابة المنطقية OR. ووضح بإثبات حتمي وموثق هل البيرسبترون المنفرد يمكنه تجاوز النتيجة هندسياً وفصله حيوياً بحالة طبيعية.",
      modelAnswer: "Coordinates: (0,0)-> -1. (0,1)-> 1. (1,0)-> 1. (1,1)-> 1. If we plot these statically, the three '1's form an L shape surrounding the single '0' at the origin natively. We can easily draw a single straight geometric line (like x1 + x2 = 0.5) to isolate the 0 entirely. Hence, OR is perfectly mathematically linearly separable natively.",
      modelAnswerAr: "الإحداثيات : (0,0) للسالب ( -1). (0,1) ونواتجه لموجب 1. إن تم إسقاطها هندسياً ستمثل نقاط ال1 الإيجابية زاوية مثلثة الشكل L-Shape تحيط نقطة المركز الصفرية الايقافية 0 بأصل الجدول تماماً. يُمكن بسهولة جدا اقتلاع صفر المخرجات ورسم خط مفُرد مستقيم وحاد قاطع يفصل الموجب الكامل من النتائج. فهذا الإثبات قاطع بأن معادلات OR قابلة للتقطيع الحتمي وفصلها الخطي."
    }
  ]
};
