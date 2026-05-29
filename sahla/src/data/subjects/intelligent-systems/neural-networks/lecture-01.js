export const LECTURE = {
  subjectId: 'neural-networks',
  number: 1,
  title: 'Gradient Descent Optimization',
  titleAr: 'تحسين الانحدار المتدرج (Gradient Descent)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Gradient Descent Foundation</h2>
<p>In minimization problems, our goal is to make the sequence $f(x_k)$ decrease as much as possible to find the minimum point.</p>
<p>The general iteration formula is:</p>
$$ x_{k+1} = x_k + \\alpha_k d_k $$
<ul>
  <li>$x_k$: Current point vector</li>
  <li>$\\alpha_k$: Step size at iteration $k$</li>
  <li>$d_k$: Direction to move. For standard Gradient Descent, we move in the direction of the steepest decrease, which is $-\\nabla f(x_k)$.</li>
</ul>

<h2>🔹 Base Loss Functions: Mean Square Error</h2>
<p>In Machine Learning models (like Linear Regression), we optimize weights to mathematically slice the <strong>Loss</strong>. The staple equation dynamically deployed is MSE:</p>
$$ MSE = \\frac{1}{n} \\sum_{i=1}^{n} (Y_i - \\hat{Y}_i)^2 $$
<p>Where $Y_i$ is explicitly the observed true target, and $\\hat{Y}_i$ is precisely the algorithm prediction: $\\hat{Y}_i = w_0 + w_1 x_i$.</p>

<h2>🔹 The Fitting Dilemma</h2>
<p>When running optimizing gradients over epochs, we must meticulously avoid structural anomalies geometrically:</p>
<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">
  <!-- Underfitting -->
  <div style="text-align: center;">
    <svg width="180" height="150" viewBox="0 0 180 150" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <!-- Points -->
      <circle cx="20" cy="120" r="4" fill="var(--text-secondary)"/>
      <circle cx="50" cy="100" r="4" fill="var(--text-secondary)"/>
      <circle cx="90" cy="40" r="4" fill="var(--text-secondary)"/>
      <circle cx="130" cy="30" r="4" fill="var(--text-secondary)"/>
      <circle cx="160" cy="100" r="4" fill="var(--text-secondary)"/>
      <!-- Line -->
      <line x1="10" y1="130" x2="170" y2="20" stroke="var(--accent-rose)" stroke-width="3"/>
    </svg>
    <p style="font-size: 0.85rem; color: var(--accent-rose); margin-top: 10px;"><strong>Underfitting</strong><br/>Linear Model (Too Simple)</p>
  </div>
  <!-- Best Fit -->
  <div style="text-align: center;">
    <svg width="180" height="150" viewBox="0 0 180 150" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <!-- Points -->
      <circle cx="20" cy="120" r="4" fill="var(--text-secondary)"/>
      <circle cx="50" cy="100" r="4" fill="var(--text-secondary)"/>
      <circle cx="90" cy="40" r="4" fill="var(--text-secondary)"/>
      <circle cx="130" cy="30" r="4" fill="var(--text-secondary)"/>
      <circle cx="160" cy="100" r="4" fill="var(--text-secondary)"/>
      <!-- Curve -->
      <path d="M 10 140 Q 90 -20 170 120" fill="none" stroke="var(--accent-emerald)" stroke-width="3"/>
    </svg>
    <p style="font-size: 0.85rem; color: var(--accent-emerald); margin-top: 10px;"><strong>Optimum Fit</strong><br/>Quadratic Model (Perfect)</p>
  </div>
  <!-- Overfitting -->
  <div style="text-align: center;">
    <svg width="180" height="150" viewBox="0 0 180 150" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <!-- Points -->
      <circle cx="20" cy="120" r="4" fill="var(--text-secondary)"/>
      <circle cx="50" cy="100" r="4" fill="var(--text-secondary)"/>
      <circle cx="90" cy="40" r="4" fill="var(--text-secondary)"/>
      <circle cx="130" cy="30" r="4" fill="var(--text-secondary)"/>
      <circle cx="160" cy="100" r="4" fill="var(--text-secondary)"/>
      <!-- Wavy Line -->
      <path d="M 10 150 C 20 120, 30 140, 50 100 C 70 60, 80 50, 90 40 C 110 20, 120 50, 130 30 C 145 10, 150 110, 160 100 C 170 90, 175 140, 180 130" fill="none" stroke="var(--accent-amber)" stroke-width="3"/>
    </svg>
    <p style="font-size: 0.85rem; color: var(--accent-amber); margin-top: 10px;"><strong>Overfitting</strong><br/>Polynomial Deg: 7 (Unstable)</p>
  </div>
</div>

<h2>🔹 Step Size Rules ($\\alpha_k$)</h2>
<table class="styled-table" style="width:100%; text-align:left; background: var(--bg-card); border-collapse: collapse; margin: 20px 0;">
  <thead><tr style="border-bottom: 1px solid var(--border-active); color: var(--accent-violet-soft);">
    <th style="padding: 12px;">Rule</th>
    <th style="padding: 12px;">Formula</th>
  </tr></thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px;"><strong>Constant</strong></td><td style="padding: 12px;">$\\alpha_k = s > 0$. Simplest, but may oscillate if too large.</td></tr>
    <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px;"><strong>Inverse Decay</strong></td><td style="padding: 12px;">$\\alpha_k = \\frac{a}{b + k}$</td></tr>
    <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px;"><strong>Square Root Decay</strong></td><td style="padding: 12px;">$\\alpha_k = \\frac{a}{\\sqrt{k}}$</td></tr>
    <tr><td style="padding: 12px;"><strong>Exponential Decay</strong></td><td style="padding: 12px;">$\\alpha_k = \\alpha_0 e^{-ak}$</td></tr>
  </tbody>
</table>
<p><strong>Stopping Conditions:</strong> We stop explicitly when the change between iterations drops below $\\epsilon$:</p>
<ul>
  <li>$|f(x_{k+1}) - f(x_k)| \\leq \\epsilon$</li>
  <li>$||\\nabla f(x_k)|| \\leq \\epsilon$</li>
</ul>

<h2>🔹 Mathematical Walkthrough: Exact Line Search (Example 1)</h2>
<p>The primary optimization example maps precisely an elongated ellipse $f(x) = x_1^2 + 25 x_2^2$ starting from a steep raw point $x_0 = (2, 2)$ where $f(x)=104$. The extreme coefficient $25$ rigidly mathematically forces massive orthogonal leaps rather than simple direct decay.</p>
<div class="callout callout-info" style="background: rgba(30,58,138,0.2); border-left-color: #3b82f6;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>Step 1: The Initial Leap</strong><br/>
    • At $x_0=(2,2)$, exact line search violently overrides static alpha yielding $\\alpha = 0.02003$<br/>
    • $x_1 = [1.92, -0.003]^T$<br/>
    • Base Cost radically plummets: $f(x_1) = 3.89$.<br/><br/>
    <strong>Step 2: Geometrical Oscillation</strong><br/>
    • The algorithm bounds across the valley mathematically: $x_2 = [-0.07, 0.07]^T$<br/>
    • Cost hits $f(x_2) = 0.13$.
  </div>
</div>
<br/>
<div style="text-align: center; margin: 30px 0;">
<div class="svg-responsive-container">
  <svg width="100%" height="300" viewBox="0 0 600 300" style="background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-subtle); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
    <!-- Neon Grid -->
    <g stroke="rgba(255, 255, 255, 0.03)" stroke-width="1.5">
      <line x1="50" y1="0" x2="50" y2="300" />
      <line x1="150" y1="0" x2="150" y2="300" />
      <line x1="250" y1="0" x2="250" y2="300" />
      <line x1="350" y1="0" x2="350" y2="300" />
      <line x1="450" y1="0" x2="450" y2="300" />
      <line x1="550" y1="0" x2="550" y2="300" />
      
      <line x1="0" y1="50" x2="600" y2="50" />
      <line x1="0" y1="100" x2="600" y2="100" />
      <line x1="0" y1="150" x2="600" y2="150" />
      <line x1="0" y1="200" x2="600" y2="200" />
      <line x1="0" y1="250" x2="600" y2="250" />
    </g>
    <!-- Main Cartesian Axes -->
    <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
    <line x1="300" y1="0" x2="300" y2="300" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
    
    <!-- Contours -->
    <g fill="none" stroke-width="2">
      <ellipse cx="300" cy="150" rx="260" ry="70" stroke="rgba(139, 92, 246, 0.08)" />
      <ellipse cx="300" cy="150" rx="200" ry="54" stroke="rgba(139, 92, 246, 0.15)" />
      <ellipse cx="300" cy="150" rx="140" ry="38" stroke="rgba(139, 92, 246, 0.3)" />
      <ellipse cx="300" cy="150" rx="80" ry="22" stroke="rgba(139, 92, 246, 0.5)" />
      <ellipse cx="300" cy="150" rx="30" ry="8" stroke="rgba(139, 92, 246, 0.8)" />
    </g>

    <circle cx="300" cy="150" r="5" fill="var(--accent-emerald)" />
    <text x="310" y="145" fill="var(--accent-emerald)" font-size="13" font-weight="700">Optimum (0,0)</text>

    <defs>
      <marker id="glowArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent-amber)" />
      </marker>
    </defs>

    <circle cx="500" cy="40" r="7" fill="var(--accent-rose)" />
    <text x="515" y="45" fill="var(--accent-rose)" font-size="14" font-weight="600" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))">x₀ (2, 2)</text>

    <!-- Line x0 -> x1 -->
    <polyline points="500,40 480,152" fill="none" stroke="var(--accent-amber)" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#glowArrow)" />
    
    <circle cx="480" cy="152" r="7" fill="var(--accent-amber)" />
    <text x="495" y="165" fill="var(--accent-amber)" font-size="14" font-weight="600" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))">x₁ (1.92, -0.003)</text>

    <!-- Line x1 -> x2 -->
    <polyline points="480,152 293,120" fill="none" stroke="var(--accent-cyan)" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#glowArrow)" />

    <circle cx="293" cy="120" r="7" fill="var(--accent-cyan)" />
    <text x="210" y="110" fill="var(--accent-cyan)" font-size="14" font-weight="600" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))">x₂ (-0.07, 0.07)</text>
    
    <!-- Line x2 -> x3 -->
    <polyline points="293,120 298,151" fill="none" stroke="var(--accent-emerald)" stroke-width="2" stroke-dasharray="4,3" />

    <rect x="15" y="15" width="180" height="40" rx="8" fill="rgba(12, 12, 18, 0.8)" stroke="var(--border-subtle)" stroke-width="1" />
    <text x="25" y="40" fill="var(--text-primary)" font-size="14" font-family="var(--font-mono)">f(x) = x₁² + 25x₂²</text>
  </svg>
</div>
  <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 15px; font-weight: 500;">Exact Line Search Iterations: Orthogonal zig-zag convergence along highly elongated contour surfaces.</p>
</div>
<br/>

<h2>🔹 Mathematical Walkthrough: Exact Line Search (Example 2)</h2>
<p>Another classic optimization tracking $f(x_1, x_2) = x_1^2 - x_1 x_2 + x_2^2$:</p>
<div class="callout callout-success" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
  <span class="callout-icon">🧮</span>
  <div>
    <strong>Minimize $f(x_1, x_2) = x_1^2 - x_1 x_2 + x_2^2$</strong><br/>
    Initial Point $x_0 = [1, 1/2]^T$. Target Error $\\epsilon = 0.05$.<br/>
    <br/>
    <strong>Step 1: Compute Initial Values</strong><br/>
    • $f(x_0) = 1^2 - 1(1/2) + (1/2)^2 = 1 - 1/2 + 1/4 = 3/4$.<br/>
    • Gradient Vector $\\nabla f(x) = [2x_1 - x_2, -x_1 + 2x_2]^T$.<br/>
    • At $x_0$, $\\nabla f(x_0) = [2(1) - 1/2, -1 + 2(1/2)]^T = [3/2, 0]^T$.<br/><br/>
    
    <strong>Step 2: Setup the Mathematical Update Equation</strong><br/>
    • $x_1 = x_0 - \\alpha \\nabla f(x_0)$<br/>
    • $x_1 = [1, 1/2]^T - \\alpha [3/2, 0]^T = [1 - \\frac{3}{2}\\alpha, 1/2]^T$.<br/><br/>

    <strong>Step 3: Exact Line Search (Minimization Rule)</strong><br/>
    • Substitute $x_1$ back into the original function $f(x)$ to minimize with respect to $\\alpha$.<br/>
    • Take derivative with respect to $\\alpha$ and set to zero: $df/d\\alpha = 0$<br/>
    • Solving gives $\\alpha = 1/2$.<br/><br/>

    <strong>Step 4: Execute the Update</strong><br/>
    • New $x_1 = [1 - \\frac{3}{2}(1/2), 1/2]^T = [1/4, 1/2]^T$.<br/>
    • New Cost $f(x_1) = 3/16$. Error Change: $|3/16 - 3/4| = 0.56 > 0.05$. Loop repeats natively!
  </div>
</div>`,
        bodyAr: `<h2>🔹 أسس الاشتقاق والتدرج التنازلي</h2>
<p>في مشاكل الحد وإيجاد الحد الأدنى (Minimization problems)، هدفنا هو جعل تسلسل $f(x_k)$ يتناقص قدر الإمكان للعثور على النقطة الدنيا.</p>
<p>صيغة التكرار العامة هي:</p>

<h3>🔹 معضلات وتحديات التوافق</h3>
<p>عند إجراء تحسين للمشتقات على مدى عدة حقب تدريبية، يجب تجنب الشذوذ الهيكلي المتمثل في مشكلات Underfitting والموائمة الزائدة بشدة.</p>

<h3>🔹 قواعد مقاس الخطوات (Learning Rates)</h3>
<p>نتوقف وننهي الخوارزمية عندما يهبط معدل التغير بين خطوة وتكرارية تالية لما دون خطأ مسموح به ضئيل(إبسيلون). وهناك استراتيجية البحث الدقيق للخط (Exact Line search) تحدد رياضيا افضل رقم بدلا من استخدام معامل ثابت.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Gradient Descent iteratively steps along the negative gradient vector.",
      "Diminishing step sizes prevent dangerous oscillation near local minima.",
      "Exact Line Search solves for an optimal Alpha by taking derivative of the update function."
    ],
    pointsAr: [
      "يتقدم الاشتقاق والانحدار التنازلي في خطوات متعاقبة تمتد بمحاذاة وتحاذي زوايا الميل المعكوس للمشتقات بقوة.",
      "تعمل أحجام الخطوات المتناقصة تدريجيا (Diminishing) على منع وكبح التذبذبات الخطيرة والارجحة حول النطاقات الصغرى.",
      "طريقة البحث الدقيق للخط هندسياً تحل إشكالية التخمين لتوليد واستخراج افضل قيمة لـ (Alpha) باشتقاق الدالة وتعيينها لـ صفر."
    ]
  },

  mcq: [
    {
      id: 'nn-l1-q1',
      question: "If the gradient vector ∇f(x) evaluates exactly to 0, what mathematically happens in standard Gradient Descent?",
      questionAr: "إذا نتج الميل الرياضي للمتجه ∇f(x) وساوى مقداره الصفري تماماً، ما الذي يحدث رياضياً بشكل مباشر ومطلق بمنحدر Gradient Descent العادي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The algorithm inherently crashes natively', isCorrect: false },
        { id: 'b', text: 'The parameter update strictly becomes 0, signaling local/global minimum natively', isCorrect: true },
        { id: 'c', text: 'The cost function goes to infinity purely', isCorrect: false },
        { id: 'd', text: 'The learning rate actively doubles inherently', isCorrect: false }
      ]
    },
    {
      id: 'nn-l1-q2',
      question: "Under the Inverse Decay step size rule α = a / (b+k), what mathematically occurs as iterations (k) increase toward infinity?",
      questionAr: "تحت سياقات دالة وقاعدة تقهقر وانكماش حجم الخطوة بـ ( α = a / (b+k) ). ما هو الحدث الحسابي حتماً بموازاة ازدياد المحاولات (k) نحو ما لا نهاية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The step size explodes to infinity globally', isCorrect: false },
        { id: 'b', text: 'The step size shrinks toward 0, slowing oscillation actively', isCorrect: true },
        { id: 'c', text: 'The step size rigidly stalls at value a uniformly', isCorrect: false },
        { id: 'd', text: 'The matrix mathematically inverses uniquely', isCorrect: false }
      ]
    },
    {
      id: 'nn-l1-q3',
      question: "Which of the following defines a strict Stopping Condition for Gradient Descent mathematically?",
      questionAr: "أيُ المأثورات الاتية يعرف ويشكل عائق حتمي ودقيق لحالة(توقف وانهيار حوسبة العمليات) لمعطيات خوارزمية النزول والانحدار رياضيا؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Training forever exclusively', isCorrect: false },
        { id: 'b', text: '|f(x_{k+1}) - f(x_k)| ≤ ϵ', isCorrect: true },
        { id: 'c', text: 'Waiting for a NaN value entirely', isCorrect: false },
        { id: 'd', text: 'Randomizing alpha identically natively', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'nn-l1-w1',
      question: "Given f(x1, x2) = x1^2 - x1x2 + x2^2. Calculate the exact Gradient Vector equation natively.",
      questionAr: "استنبط بمعادلات حسابية دقيقة متجهات الميل الأصلية(Gradient Vector) لدالة f(x1, x2) = x1^2 - x1x2 + x2^2.",
      modelAnswer: "Take partial derivative for x1: 2x1 - x2. Take partial derivative for x2: -x1 + 2x2. Gradient is purely [2x1 - x2, -x1 + 2x2]^T.",
      modelAnswerAr: "بأخذ عوامل التفاضل الجزئية بالنسبة لـ x1 تصبح : 2x1 - x2. وعوامل التفاضل لـ x2 : -x1 + 2x2. ليكون قالب متجه الميل الحصري والقطعي هو : [2x1 - x2, -x1 + 2x2]^T."
    },
    {
      id: 'nn-l1-w2',
      question: "Explain the difference between a constant step size and the Exact Line Search method (Minimization Rule).",
      questionAr: "اوضح مفارقات التباين الشاهقة بين تقنيات (حجم الخطوة الثابت) وطريقة الـ (البحث الخطي العميق) او قوانين الحديات الصغرى.",
      modelAnswer: "Constant step size is rigidly fixed and can cause oscillations. Exact Line Search involves writing the current position as a function of alpha, and calculating the derivative df/d_alpha = 0 to mathematically find the perfect optimal step distance explicitly.",
      modelAnswerAr: "احجام الخطوات الثابتة صارمة ورتيبة ومحصورة وقد تورث وتتسبب بتذبذبات لا قرار لها. بينما البحث الخطي الرياضي يقوم بتوظيف وتسطير وتمثيل الموقع الراهن كـ دالة ومسار مرتبط بـ الفا ومن ثم يحسب مشتقتها لتعيين افضل ابعاد مثلى لمدى الخطوة."
    }
  ]
};
