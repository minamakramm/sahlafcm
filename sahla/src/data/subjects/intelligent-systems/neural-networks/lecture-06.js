export const LECTURE = {
  subjectId: 'neural-networks',
  number: 6,
  title: 'Backpropagation & Deep Learning',
  titleAr: 'الانتشار العكسي والتعلم العميق (Backpropagation)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>What is Backpropagation?</h2>
<p>Backpropagation is the definitive algorithm for training Multi-Layer Perceptrons (MLP). It uses the <strong>Chain Rule</strong> of calculus to distribute the error from the output layer back through the hidden layers to update all weights in the network.</p>

<div class="key-concepts">
  <div class="key-concept-item">Forward Pass: Input data propagates through layers to produce a prediction.</div>
  <div class="key-concept-item">Loss Calculation: The difference between prediction and target is calculated (e.g., MSE).</div>
  <div class="key-concept-item">Backward Pass: Error gradients flow backward, calculating partial derivatives for every weight.</div>
</div>

<h2>The Multi-Layer Perceptron (MLP)</h2>
<p>An MLP consists of:</p>
<ul>
  <li><strong>Input Layer:</strong> Receives raw features.</li>
  <li><strong>Hidden Layers:</strong> Performs non-linear transformations using activation functions (Sigmoid, Tanh, or ReLU).</li>
  <li><strong>Output Layer:</strong> Provides the final prediction.</li>
</ul>

<h2>The Chain Rule Logic</h2>
<p>Because weights in the hidden layers don't have a direct target, we calculate their "responsibility" for the final error by multiplying partial derivatives through the output and activation functions:</p>
<p style="text-align: center;">$\\frac{\\partial Error}{\\partial W_{hidden}} = \\frac{\\partial Error}{\\partial Output} \\times \\frac{\\partial Output}{\\partial Hidden} \\times \\frac{\\partial Hidden}{\\partial W_{hidden}}$</p>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div>
    <strong>The Core Logic (Chain Rule):</strong><br/>
    $\\frac{\\partial Error}{\\partial W_{hidden}} = \\frac{\\partial Error}{\\partial Output} \\times \\frac{\\partial Output}{\\partial Hidden} \\times \\frac{\\partial Hidden}{\\partial W_{hidden}}$
  </div>
</div>

<h2>Weight Initialization (He / Xavier)</h2>
<p>Unlike single-layer networks, deep networks are sensitive to starting weights. <strong>Xavier (Glorot)</strong> is best for Sigmoid/Tanh, while <strong>He initialization</strong> is optimized for ReLU to prevent vanishing/exploding gradients.</p>`,
        bodyAr: `<h2>ما هو الانتشار العكسي (Backpropagation)؟</h2>
<p>الانتشار العكسي هو الخوارزمية الأساسية لتدريب الشبكات متعددة الطبقات (MLP). يستخدم <strong>قاعدة السلسلة</strong> في التفاضل لتوزيع الخطأ من مخرج الشبكة عبر الطبقات المخفية لتحديث جميع الأوزان.</p>

<div class="key-concepts">
  <div class="key-concept-item">المرور الأمامي: تمر البيانات عبر الطبقات لإنتاج توقع.</div>
  <div class="key-concept-item">حساب الخسارة: الفرق بين التوقع والهدف.</div>
  <div class="key-concept-item">المرور العكسي: تتدفق ميول الخطأ للخلف، لحساب المشتقات الجزئية لكل وزن.</div>
</div>

<h2>البيرسبترون متعدد الطبقات (MLP)</h2>
<p>تتكون الشبكة العصبية العميقة من:</p>
<ul>
  <li>طبة المدخلات.</li>
  <li>الطبقات المخفية (Hidden Layers): تقوم بعمليات غير خطية.</li>
  <li>طبقة المخرج.</li>
</ul>

<h2>توازن الأوزان</h2>
<p>بما أن الطبقات المخفية ليس لها هدف مباشر، فإننا نحسب "مسؤوليتها" عن الخطأ النهائي ونحدث أوزانها بناءً على الميول المنقولة من مخرج الشبكة.</p>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div>
    <strong>المنطق الجوهري (قاعدة السلسلة):</strong><br/>
    $\\frac{\\partial Error}{\\partial W_{hidden}} = \\frac{\\partial Error}{\\partial Output} \\times \\frac{\\partial Output}{\\partial Hidden} \\times \\frac{\\partial Hidden}{\\partial W_{hidden}}$
  </div>
</div>`,
      },
    },
  ],

  summary: {
    points: [
      'Backpropagation generalizes the Delta rule to multi-layer architectures.',
      'A non-linear activation function is mandatory for deep networks to represent complex functions.',
      'Forward pass computes activations; Backward pass computes gradients via the Chain Rule.',
      'Weight initialization (Xavier, He) is critical for convergence in deep networks.',
      'Common loss functions include Mean Squared Error (MSE) and Cross-Entropy.',
      'The learning rate α controls the step size of weight updates during backward pass.',
    ],
    pointsAr: [
      'يعمم الانتشار العكسي قاعدة دلتا على المعماريات متعددة الطبقات.',
      'يجب استخدام وظيفة تنشيط غير خطية لتمثيل الدوال المعقدة.',
      'المرور الأمامي يحسب التوقعات؛ المرور العكسي يحسب الميول عبر قاعدة السلسلة.',
      'ابتداء الأوزان (Xavier, He) هو أمر حاسم للوصول للحل في الشبكات العميقة.',
      'دوال الخسارة الشائعة تشمل متوسط مربع الخطأ والاعتلاج المتقاطع (Cross-Entropy).',
      'يتحكم معدل التعلم α في حجم خطوة تحديث الأوزان أثناء المرور العكسي.',
    ],
  },

  mcq: [
    {
      id: 'nn-l6-q1',
      question: 'Which mathematical rule is the core of Backpropagation?',
      questionAr: 'أي قاعدة رياضية تعتبر جوهر الانتشار العكسي؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Power Rule', isCorrect: false },
        { id: 'b', text: 'Chain Rule (of Calculus)', isCorrect: true },
        { id: 'c', text: 'Bayes Rule', isCorrect: false },
        { id: 'd', text: 'Matrix Inverse', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q2',
      question: 'Which phase of training produces the error calculation?',
      questionAr: 'أي مرحلة في التدريب تنتج حساب الخطأ؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Weight Initialization', isCorrect: false },
        { id: 'b', text: 'Forward Pass (at the end)', isCorrect: true },
        { id: 'c', text: 'Backward Pass', isCorrect: false },
        { id: 'd', text: 'Loading data', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q3',
      question: 'Activation functions in hidden layers of a deep network MUST be:',
      questionAr: 'يجب أن تكون وظيفة التنشيط في الطبقات المخفية:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Linear', isCorrect: false },
        { id: 'b', text: 'Non-Linear and Differentiable', isCorrect: true },
        { id: 'c', text: 'Exactly zero', isCorrect: false },
        { id: 'd', text: 'Constants', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q4',
      question: 'Which initialization is famously good for ReLU layers?',
      questionAr: 'أي ابتداء للأوزان هو الأفضل لطبقات ReLU؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Zero initialization', isCorrect: false },
        { id: 'b', text: 'He (Kaiming) initialization', isCorrect: true },
        { id: 'c', text: 'Xavier (Glorot) initialization', isCorrect: false },
        { id: 'd', text: 'Hebbian initialization', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q5',
      question: 'The error term (δ) for a hidden unit depends on:',
      questionAr: 'مصطلح الخطأ (δ) لوحدة مخفية يعتمد على:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Direct target of that unit', isCorrect: false },
        { id: 'b', text: 'Weighted sum of errors from the next layer units', isCorrect: true },
        { id: 'c', text: 'Input only', isCorrect: false },
        { id: 'd', text: 'Number of neurons', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q6',
      question: 'In deep learning, "Exploding Gradient" means:',
      questionAr: 'في التعلم العميق، "انفجار الميل" يعني:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Gradients become very small', isCorrect: false },
        { id: 'b', text: 'Gradients become extremely large, causing unstable updates', isCorrect: true },
        { id: 'c', text: 'Loss becomes zero', isCorrect: false },
        { id: 'd', text: 'Weights stay zero', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q7',
      question: 'A neural network without hidden layers is essentially:',
      questionAr: 'شبكة عصبية بدون طبقات مخفية هي في الأساس:',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A deep network', isCorrect: false },
        { id: 'b', text: 'A single-layer perceptron or Adaline', isCorrect: true },
        { id: 'c', text: 'Impossible', isCorrect: false },
        { id: 'd', text: 'Quantum computer', isCorrect: false },
      ],
    },
    {
      id: 'nn-l6-q8',
      question: 'Backpropagation was popularized by Rumelhart, Hinton and Williams in:',
      questionAr: 'تم تعميم الانتشار العكسي بواسطة هينتون وروميلهارت في:',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1960', isCorrect: false },
        { id: 'b', text: '1986', isCorrect: true },
        { id: 'c', text: '1949', isCorrect: false },
        { id: 'd', text: '2012', isCorrect: false },
      ],
    },
    {
        id: 'nn-l6-q9',
        question: 'Which derivative is needed if the hidden layer uses Sigmoid?',
        questionAr: 'ما هي المشتقة المطلوبة إذا كانت الطبقة المخفية تستخدم Sigmoid؟',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'σ(x) * (1 - σ(x))', isCorrect: true },
          { id: 'b', text: '1', isCorrect: false },
          { id: 'c', text: 'max(0, 1)', isCorrect: false },
          { id: 'd', text: 'Bias', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q10',
        question: 'Xavier Initialization samples weights from a distribution with variance:',
        questionAr: 'ابتداء Xavier يسحب الأوزان من توزيع تباينه:',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'Infinitely large', isCorrect: false },
          { id: 'b', text: '2 / (Nin + Nout)', isCorrect: true },
          { id: 'c', text: 'Zero', isCorrect: false },
          { id: 'd', text: '1', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q11',
        question: 'Backpropagation updates the weights in what order?',
        questionAr: 'كيف يقوم الانتشار العكسي بتحديث الأوزان (الترتيب)؟',
        difficulty: 'easy',
        answers: [
          { id: 'a', text: 'From Input to Output', isCorrect: false },
          { id: 'b', text: 'From Output to Input', isCorrect: true },
          { id: 'c', text: 'Randomly', isCorrect: false },
          { id: 'd', text: 'All at once without sequence', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q12',
        question: 'Optimization in backpropagation is performed via:',
        questionAr: 'يتم إجراء التحسين في الانتشار العكسي عبر:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Random Search', isCorrect: false },
          { id: 'b', text: 'Gradient Descent', isCorrect: true },
          { id: 'c', text: 'Genetic Algorithms', isCorrect: false },
          { id: 'd', text: 'Matrix Inversion', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q13',
        question: 'What happens if we initialize all weights to EXACTLY ZERO in an MLP?',
        questionAr: 'ماذا سيحدث إذا بدأنا جميع الأوزان بصفر في شبكة MLP؟',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'Network trains very fast', isCorrect: false },
          { id: 'b', text: 'All neurons in a layer will learn the same feature (Symmetry problem)', isCorrect: true },
          { id: 'c', text: 'Bias becomes 1', isCorrect: false },
          { id: 'd', text: 'Loss becomes 100', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q14',
        question: 'A 15 -> 50 -> 10 network structure means:',
        questionAr: 'هيكلية شبكة 15 -> 50 -> 10 تعني:',
        difficulty: 'easy',
        answers: [
          { id: 'a', text: '15 hidden, 50 output, 10 bias', isCorrect: false },
          { id: 'b', text: '15 inputs, 50 hidden neurons, 10 outputs', isCorrect: true },
          { id: 'c', text: '15 epochs of training', isCorrect: false },
          { id: 'd', text: 'Random numbers', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q15',
        question: 'The error term for output units is:',
        questionAr: 'مصطلح الخطأ لوحدات الإخراج هو:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: '(Target - Output) * f\'(y_in)', isCorrect: true },
          { id: 'b', text: 'Target only', isCorrect: false },
          { id: 'c', text: 'Output weight', isCorrect: false },
          { id: 'd', text: 'Learning rate', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q16',
        question: 'Orthogonal Initialization helps in:',
        questionAr: 'يساعد الابتداء المتعامد في:',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'Deleting features', isCorrect: false },
          { id: 'b', text: 'Maintaining gradient norms', isCorrect: true },
          { id: 'c', text: 'Increasing bias', isCorrect: false },
          { id: 'd', text: 'Fast forward pass', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q17',
        question: 'He Initialization was specifically designed for which activation?',
        questionAr: 'صُمم ابتداء He خصيصاً لأي وظيفة تنشيط؟',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Sigmoid', isCorrect: false },
          { id: 'b', text: 'ReLU', isCorrect: true },
          { id: 'c', text: 'Tanh', isCorrect: false },
          { id: 'd', text: 'Hard Step', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q18',
        question: 'A bottleneck layer is a layer with:',
        questionAr: 'الطبقة العنقية (Bottleneck) هي طبقة بـ:',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'Many neurons', isCorrect: false },
          { id: 'b', text: 'Fewer neurons than layers before and after it', isCorrect: true },
          { id: 'c', text: 'Zero bias', isCorrect: false },
          { id: 'd', text: 'Only linear activation', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q19',
        question: 'One way to prevent overfitting in deep networks is:',
        questionAr: 'من طرق منع الإفراط في التدريب (Overfitting) في الشبكات العميقة:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Adding more weights', isCorrect: false },
          { id: 'b', text: 'Dropout / L2 Regularization', isCorrect: true },
          { id: 'c', text: 'Removing bias', isCorrect: false },
          { id: 'd', text: 'Zeroing inputs', isCorrect: false },
        ],
    },
    {
        id: 'nn-l6-q20',
        question: 'Backpropagation allows learning representations that:',
        questionAr: 'يسمح الانتشار العكسي بتعلم تمثيلات:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Are always linear', isCorrect: false },
          { id: 'b', text: 'Can capture highly non-linear decision regions', isCorrect: true },
          { id: 'c', text: 'Are random', isCorrect: false },
          { id: 'd', text: 'Are fixed', isCorrect: false },
        ],
    },
  ],

  written: [
    {
      id: 'nn-l6-w1',
      question: "Explain the 'Symmetry Breaking' problem and how random initialization solves it.",
      questionAr: "اشرح مشكلة 'كسر التناظر' (Symmetry Breaking) وكيف يحلها الابتداء العشوائي للأوزان.",
      modelAnswer: "If all weights are initialized to the same value (e.g. zero), every hidden neuron will receive the same signal and compute the same output. During backpropagation, they will all receive the same gradient and update identically. They will effectively act as one single neuron. Random initialization (Xavier/He) breaks this symmetry, allowing neurons to learn different features.",
      modelAnswerAr: "إذا بدأت جميع الأوزان بنفس القيمة (مثلاً صفر)، فسيستقبل كل عصبون مخفي نفس الإشارة ويحسب نفس المخرج. أثناء الانتشار العكسي، سيستقبلون نفس الميل ويتحدثون بشكل متماثل، وكأنهم عصبون واحد. الابتداء العشوائي يكسر هذا التناظر، مما يسمح لكل عصبون بتعلم خصائص مختلفة.",
    },
    {
      id: 'nn-l6-w2',
      question: "Mathematically derive the error term (δ) for an output unit with MSE loss and Sigmoid activation.",
      questionAr: "اشتق رياضياً مصطلح الخطأ (δ) لوحدة إخراج تستخدم MSE و Sigmoid.",
      modelAnswer: "Error E = 1/2 (T - Y)². Output Y = σ(y_in). δ = ∂E/∂y_in = (∂E/∂Y) * (∂Y/∂y_in) = -(T - Y) * σ'(y_in). Since σ'(y_in) = Y(1-Y), then δ = (Y - T) * Y * (1 - Y).",
      modelAnswerAr: "الخطأ E = 1/2 (T - Y)². المخرج Y = σ(y_in). المشتقة بالنسبة لـ y_in هي (Y - T) مضروبة في مشتقة السيجمويد التي هي Y(1-Y).",
    },
    {
      id: 'nn-l6-w3',
      question: "Contrast Forward Pass and Backward Pass in Backpropagation.",
      questionAr: "قارن بين المرور الأمامي والمرور العكسي في الانتشار العكسي.",
      modelAnswer: "Forward Pass: Data flows from inputs to outputs through the network, layer by layer, calculating the activation of each neuron. Backward Pass: Gradients are calculated starting from the output layer towards the input layer using the chain rule to update weights based on the loss.",
      modelAnswerAr: "المرور الأمامي: تتدفق البيانات من المدخلات إلى المخرجات عبر الطبقات، بحساب تنشيط كل عصبون. المرور العكسي: تُحسب الميول بدءاً من طبقة المخرج نحو المدخلات باستخدام قاعدة السلسلة لتحديث الأوزان بناءً على الخسارة.",
    },
    {
      id: 'nn-l6-w4',
      question: "Why is the Chain Rule essential for training hidden layers?",
      questionAr: "لماذا تعتبر قاعدة السلسلة أساسية لتدريب الطبقات المخفية؟",
      modelAnswer: "Hidden layers do not have a defined 'ground truth' target. We only know the error at the output. The chain rule allows us to map how much each hidden weight contributed to that final output error, enabling us to calculate gradients for internal layers.",
      modelAnswerAr: "الطبقات المخفية ليس لها 'هدف' معروف. نحن نعرف الخطأ عند المخرج فقط. تتيح لنا قاعدة السلسلة تحديد مقدار مساهمة كل وزن مخفي في ذلك الخطأ النهائي، مما يمكننا من حساب الميول للطبقات الداخلية.",
    },
    {
      id: 'nn-l6-w5',
      question: "Compare Xavier and He initialization.",
      questionAr: "قارن بين ابتداء Xavier و He.",
      modelAnswer: "Xavier Initialization keeps the variance of activations and gradients consistent across layers for Sigmoid/Tanh. He Initialization accounts for the fact that ReLU zeroes out half of the inputs, using a slightly different variance (2/Nin) to keep deep networks stable.",
      modelAnswerAr: "يحافظ Xavier على تباين التنشيطات والميول متسقاً لـ Sigmoid. بينما يراعي He حقيقة أن ReLU تلغي نصف المدخلات، فيستخدم تبايناً مختلفاً قليلاً (2/Nin) للحفاظ على استقرار الشبكات العميقة.",
    },
  ],
}
