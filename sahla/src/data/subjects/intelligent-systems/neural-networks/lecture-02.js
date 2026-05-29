export const LECTURE = {
  subjectId: 'neural-networks',
  number: 2,
  title: 'Biological Inspiration & Activations',
  titleAr: 'الإلهام البيولوجي ووظائف التنشيط',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Biological Inspiration</h2>
<p>An Artificial Neuron seeks to mimic the human brain natively:</p>
<ul>
  <li><strong>Dendrite (Inputs):</strong> Receives signals $X$.</li>
  <li><strong>Synapse (Weights):</strong> Determines signal importance $W$.</li>
  <li><strong>Soma (Cell Body):</strong> Sums the weighted inputs and bias natively.</li>
  <li><strong>Activation Function:</strong> Bends the output, introducing extreme non-linearity natively.</li>
</ul>

<h2>🔹 Modeling Individual Neurons (Perceptron Architecture)</h2>
<p>The transition from a biological neuron to a mathematical construct defines the <strong>Perceptron Model</strong>. This raw architectural primitive directly bridges biology and mathematics:</p>
<div style="text-align: center; margin: 30px 0;">
<div class="svg-responsive-container">
  <svg width="100%" height="250" viewBox="0 0 600 250" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle); box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
    <!-- Arrow marker -->
    <defs>
      <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-violet-soft)" />
      </marker>
    </defs>
    <!-- Inputs -->
    <circle cx="80" cy="50" r="20" fill="var(--bg-tertiary)" stroke="var(--accent-cyan)" stroke-width="2"/>
    <text x="80" y="55" text-anchor="middle" fill="var(--text-primary)" font-size="14" font-weight="bold">x₁</text>
    <circle cx="80" cy="125" r="20" fill="var(--bg-tertiary)" stroke="var(--accent-cyan)" stroke-width="2"/>
    <text x="80" y="130" text-anchor="middle" fill="var(--text-primary)" font-size="14" font-weight="bold">x₂</text>
    <circle cx="80" cy="180" r="2" fill="var(--text-muted)"/><circle cx="80" cy="190" r="2" fill="var(--text-muted)"/><circle cx="80" cy="200" r="2" fill="var(--text-muted)"/>
    <circle cx="80" cy="230" r="20" fill="var(--bg-tertiary)" stroke="var(--accent-cyan)" stroke-width="2"/>
    <text x="80" y="235" text-anchor="middle" fill="var(--text-primary)" font-size="14" font-weight="bold">xₙ</text>

    <!-- Bias Input -->
    <circle cx="210" cy="40" r="20" fill="var(--bg-tertiary)" stroke="var(--accent-amber)" stroke-width="2"/>
    <text x="210" y="45" text-anchor="middle" fill="var(--text-primary)" font-size="14" font-weight="bold">1</text>
    <text x="210" y="15" text-anchor="middle" fill="var(--accent-amber)" font-size="12" font-weight="600">Bias Input</text>

    <!-- Summation Node -->
    <circle cx="300" cy="125" r="40" fill="var(--bg-tertiary)" stroke="var(--accent-violet)" stroke-width="3"/>
    <text x="300" y="135" text-anchor="middle" fill="var(--text-primary)" font-size="28" font-weight="bold">Σ</text>
    <text x="300" y="185" text-anchor="middle" fill="var(--text-secondary)" font-size="12" font-weight="600">y_in</text>

    <!-- Activation Node -->
    <rect x="380" y="100" width="60" height="50" rx="8" fill="var(--bg-tertiary)" stroke="var(--accent-emerald)" stroke-width="2"/>
    <path d="M 390 125 Q 410 125 410 110 T 430 110" fill="none" stroke="var(--accent-emerald)" stroke-width="2"/>
    <text x="410" y="170" text-anchor="middle" fill="var(--text-secondary)" font-size="12" font-weight="600">f( )</text>

    <!-- Output -->
    <circle cx="530" cy="125" r="20" fill="var(--bg-tertiary)" stroke="var(--accent-rose)" stroke-width="2"/>
    <text x="530" y="130" text-anchor="middle" fill="var(--text-primary)" font-size="14" font-weight="bold">y</text>

    <!-- Connections -->
    <line x1="230" y1="40" x2="280" y2="105" stroke="var(--accent-amber)" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <text x="260" y="70" fill="var(--accent-amber)" font-size="14" font-weight="bold">b</text>
    <line x1="100" y1="50" x2="270" y2="105" stroke="var(--accent-violet-soft)" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <text x="180" y="70" fill="var(--text-primary)" font-size="14" font-weight="bold">w₁</text>
    <line x1="100" y1="125" x2="260" y2="125" stroke="var(--accent-violet-soft)" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <text x="180" y="120" fill="var(--text-primary)" font-size="14" font-weight="bold">w₂</text>
    <line x1="100" y1="230" x2="270" y2="155" stroke="var(--accent-violet-soft)" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <text x="180" y="210" fill="var(--text-primary)" font-size="14" font-weight="bold">wₙ</text>

    <line x1="340" y1="125" x2="380" y2="125" stroke="var(--accent-violet-soft)" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <line x1="440" y1="125" x2="510" y2="125" stroke="var(--accent-violet-soft)" stroke-width="2" marker-end="url(#arrowhead2)"/>
  </svg>
</div>
</div>
<p>The generalized sequence is rigidly systematic:</p>
<ol>
  <li>The raw data inputs $x_i$ (representing dendrites) carry physical incoming states dynamically.</li>
  <li>These states multiply universally against synaptic weights $w_i$, acting strictly as signal gates.</li>
  <li>The nucleus algebraically computes the summation equation exactly: $y_{in} = b + \\sum_{i=1}^{n} w_i x_i$.</li>
  <li>The absolute raw array ($y_{in}$) is violently warped by a non-linear Activation Function $f(y_{in})$ to output the true boolean/float classification output $y$ entirely logically.</li>
</ol>

<h2>🔹 The Activation Functions</h2>
<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">
  <div style="text-align: center;">
    <svg width="200" height="200" viewBox="-100 -100 200 200" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="var(--text-muted)" stroke-width="1"/>
      <line x1="0" y1="-100" x2="0" y2="100" stroke="var(--text-muted)" stroke-width="1"/>
      <!-- Sigmoid Curve -->
      <path d="M -100 90 Q -30 90 0 0 T 100 -90" fill="none" stroke="var(--accent-violet-soft)" stroke-width="4"/>
      <text x="50" y="-70" fill="var(--text-primary)" font-size="16">Sigmoid</text>
    </svg>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">(0, 1)</p>
  </div>
  <div style="text-align: center;">
    <svg width="200" height="200" viewBox="-100 -100 200 200" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="var(--text-muted)" stroke-width="1"/>
      <line x1="0" y1="-100" x2="0" y2="100" stroke="var(--text-muted)" stroke-width="1"/>
      <!-- Tanh Curve -->
      <path d="M -100 90 Q -20 90 0 0 T 100 -90" fill="none" stroke="var(--accent-cyan)" stroke-width="4"/>
      <text x="50" y="-70" fill="var(--text-primary)" font-size="16">Tanh</text>
    </svg>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">(-1, +1)</p>
  </div>
  <div style="text-align: center;">
    <svg width="200" height="200" viewBox="-100 -100 200 200" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="var(--text-muted)" stroke-width="1"/>
      <line x1="0" y1="-100" x2="0" y2="100" stroke="var(--text-muted)" stroke-width="1"/>
      <!-- ReLU Curve -->
      <path d="M -100 0 L 0 0 L 90 -90" fill="none" stroke="var(--accent-emerald)" stroke-width="4"/>
      <text x="50" y="-70" fill="var(--text-primary)" font-size="16">ReLU</text>
    </svg>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">[0, ∞)</p>
  </div>
</div>

<h2>🔹 Mathematical Visual Trace: Execution Steps</h2>
<div style="background: rgba(30,58,138,0.1); padding: 20px; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 30px;">
  <p style="margin-top: 0;"><strong>Input Data:</strong> $X = [2, -1]$, <strong>Weights:</strong> $W = [0.5, 1]$, <strong>Bias:</strong> $b = 0.5$</p>
  <div style="text-align: center;">
    <svg width="100%" height="150" viewBox="0 0 500 150">
      <defs>
        <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="var(--text-muted)" /></marker>
      </defs>
      <rect x="10" y="35" width="120" height="80" rx="8" fill="var(--bg-card)" stroke="var(--accent-cyan)" stroke-width="2"/>
      <text x="70" y="60" text-anchor="middle" fill="var(--text-primary)" font-size="12">w₁x₁ + w₂x₂</text>
      <text x="70" y="80" text-anchor="middle" fill="var(--accent-cyan)" font-size="14" font-weight="bold">2(0.5) + (-1)(1)</text>
      <text x="70" y="100" text-anchor="middle" fill="var(--text-secondary)" font-size="12">= 0</text>
      <line x1="130" y1="75" x2="160" y2="75" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arrowhead3)"/>
      <circle cx="200" cy="75" r="40" fill="var(--bg-card)" stroke="var(--accent-violet)" stroke-width="2"/>
      <text x="200" y="65" text-anchor="middle" fill="var(--text-primary)" font-size="18" font-weight="bold">Σ + b</text>
      <text x="200" y="85" text-anchor="middle" fill="var(--accent-violet)" font-size="14" font-weight="bold">0 + 0.5</text>
      <text x="200" y="105" text-anchor="middle" fill="var(--text-secondary)" font-size="12">= 0.5</text>
      <line x1="240" y1="75" x2="280" y2="75" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arrowhead3)"/>
      <text x="260" y="65" text-anchor="middle" fill="var(--text-primary)" font-size="12">y_in = 0.5</text>
      <rect x="290" y="35" width="110" height="80" rx="8" fill="var(--bg-card)" stroke="var(--accent-emerald)" stroke-width="2"/>
      <text x="345" y="60" text-anchor="middle" fill="var(--text-primary)" font-size="12">ReLU(y_in)</text>
      <text x="345" y="80" text-anchor="middle" fill="var(--accent-emerald)" font-size="14" font-weight="bold">max(0, 0.5)</text>
      <line x1="400" y1="75" x2="440" y2="75" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#arrowhead3)"/>
      <circle cx="470" cy="75" r="25" fill="var(--bg-card)" stroke="var(--accent-rose)" stroke-width="2"/>
      <text x="470" y="80" text-anchor="middle" fill="var(--accent-rose)" font-size="16" font-weight="bold">0.5</text>
    </svg>
  </div>
</div>

<h2>🔹 Advanced Weight Initialization (He Initialization)</h2>
<p>If we use ReLU, we must initialize weights dynamically to avoid dead neurons using <strong>He Initialization</strong>:</p>
$$ W \\sim N(0,1) \\times \\sqrt{\\frac{2}{N_{in}}} $$
<table class="styled-table" style="width:100%; text-align:left; background: var(--bg-card); border-collapse: collapse; margin: 20px 0;">
  <thead><tr style="border-bottom: 1px solid var(--border-active); color: var(--accent-violet-soft);">
    <th style="padding: 12px;">Layer</th><th style="padding: 12px;">Inputs ($m_{L-1}$)</th><th style="padding: 12px;">Outputs ($m_L$)</th><th style="padding: 12px;">He Scale</th>
  </tr></thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px;">Input → Hidden1</td><td style="padding: 12px;">15</td><td style="padding: 12px;">50</td><td style="padding: 12px;">$\\sqrt{2/15} = 0.365$</td></tr>
    <tr><td style="padding: 12px;">Hidden1 → Output</td><td style="padding: 12px;">50</td><td style="padding: 12px;">10</td><td style="padding: 12px;">$\\sqrt{2/50} = 0.20$</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>🔹 الإلهامات البيولوجية</h2>
<p>يحاول العصبون والصمام الاصطناعي تقليد ومقاربة مسارات وترجمات النطاقات المكتصلة بالدماغ البشري بصورة اساسية.</p>

<h3>🔹 نمذجة وبناء العصبونات المفردة</h3>
<p>تستقبل النواة مجمل الخيارات والتشابكات، وتقوم وظيفة التنشيط بفرض انطواء ومعايير الانحراف اللاخطي العنيف للتحكم بالمخرجات.</p>
`
      }
    }
  ],

  summary: {
    points: [
      "Linear regression requires bias to cleanly shift equations from origin natively.",
      "Activation functions mathematically break pure linearity natively.",
      "Tanh natively solves Sigmoid's non-zero-centered gradient problem exclusively.",
      "He Initialization scales purely by sqrt(2/N_in) for ReLU activation architectures inherently."
    ],
    pointsAr: [
      "يتطلب الانحدار الخطي وجود التحيز (Bias) ليكون قادرا على تحريك وزحزحة المعادلات من نقطة الأصل بأمان.",
      "تقوم دوال التحفيز ووظائف التنشيط رياضيا بتكسير وتحطيم المعطيات الخطية الصرفة كلياً ومباشرة.",
      "معادلات הTanh تتجاوز وتحل إشكاليات הSigmoid والتي لا تتمركز بتوزيع الميل الرياضي عند مستوى الصفر.",
      "تحجيم وتسوية א(He Initialization) تعالج مقاس ومقاييس (ReLU) بضربها بمنظومة الـ sqrt(2/N_in)."
    ]
  },

  mcq: [
    {
      id: 'nn-l2-q1',
      question: "Why is setting all Neural weights precisely to W=0 a catastrophic mathematical failure natively?",
      questionAr: "لماذا يعتبر توجيه وتعيين كافة الأوزان المبدئية للعصبونات وتثبيتها بشكل تام لـ ק=0 إخفاقاً رياضياً واشتقاقياً كارثياً بطبيعة الحال؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It violates matrices exclusively', isCorrect: false },
        { id: 'b', text: 'It explicitly guarantees every neuron learns the exact identical feature symmetrically during backprop, acting computationally as just 1 neuron', isCorrect: true },
        { id: 'c', text: 'It causes weights to explode inherently', isCorrect: false },
        { id: 'd', text: 'It forces non-linearity invariably natively', isCorrect: false }
      ]
    },
    {
      id: 'nn-l2-q2',
      question: "Which activation function perfectly centers its output bounds strictly mathematically between -1 and +1?",
      questionAr: "أيُ وظائف ودعامات التنشيط تقوم بـ توسيط وتحديد وتثبيت مخرجاتها بشكل حصري ومنغلق رياضياً بين -1 و +1؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'ReLU inherently', isCorrect: false },
        { id: 'b', text: 'Sigmoid natively', isCorrect: false },
        { id: 'c', text: 'Tanh actively', isCorrect: true },
        { id: 'd', text: 'PReLU logistically', isCorrect: false }
      ]
    },
    {
      id: 'nn-l2-q3',
      question: "In 'He Initialization', if our Input layer explicitly has 50 nodes natively, we multiply our standard normal random starting weights strictly by what scaling factor?",
      questionAr: "بنهج ونظام 'He Initialization'، لو كانت منافذ المدخلات تحمل وتحتوي 50 عقدة (Nodes) صريحة، فبأي معاملات تحجيم دقيقة وبشكل قطعي سنضرب مصفوفة أوزاننا الأولية العشوائية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'sqrt(2 / 50) = 0.2 exactly natively', isCorrect: true },
        { id: 'b', text: '0.5 identically', isCorrect: false },
        { id: 'c', text: 'sqrt(100) = 10 explicitly', isCorrect: false },
        { id: 'd', text: '1 completely identically', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'nn-l2-w1',
      question: "Explain mathematically exactly how PReLU solves the 'Dying ReLU' catastrophe heavily.",
      questionAr: "اِشرح وعبر بالصياغات الجبرية والرياضية حصرا، ما هي المنهجية التي تُمكِّن ದ(PReLU) بالانقضاض الجذري على كارثة 'احتضار وفشل ReLU'.",
      modelAnswer: "In standard ReLU, negative sums get rigidly zeroed out. This permanently kills their gradients natively, meaning the weights can NEVER update again. PReLU dynamically allows negative numbers to multiply by a tiny learnable slope 'a', explicitly keeping gradients active indefinitely.",
      modelAnswerAr: "بحدود الـ ReLU العادية، المجاميع السلبية تُصفَّر نهائياً وتُطحن بشكل صلب. هذا الفعل يقوم باعدام الميل بشكل مزمن، وهو ما يعني ان الأوزان لن تقبل التحديث مرة اخرى. بديلة(PReLU) لا تصفرها بل تمررها مضروبة بنسبة انحدار(a) قابلة للتعديل والتدريب مما يسهم بالاحتفاظ بفعالية الميل والاشتقاق للأبد."
    },
    {
      id: 'nn-l2-w2',
      question: "Calculate the required He Initialization scalar multiplier if transitioning from a Hidden Layer of 72 nodes to an Output Layer of 4 nodes.",
      questionAr: "استنبط وعالج معدل ومقدار عامل القياس لخوارزمية (He Initialization) إذا تمت النقلة والمعالجة من محاور(Hidden layer) تحوي 72 عقدة وتصب بمجمع نتائج نهايات يحوي 4 عقد.",
      modelAnswer: "He Initialization strictly depends on the INPUT layer to that specific calculation block. Thus scalar = sqrt(2 / N_in) = sqrt(2 / 72) = sqrt(1 / 36) = 1/6.",
      modelAnswerAr: "خوارزمية (He Init) تدقق وتوجه بوصلتها للمدخلات المتجهة لتلك الطبقة. وبالتالي فالمعادلة هي sqrt(2/Input) وبحالتنا الجبرية sqrt( 2 / 72) وهي تتطابق مع (1/36) تحت الجذر، ليستقر الجواب لـ سدس (1/6)."
    }
  ]
};
