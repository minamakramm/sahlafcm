export const LECTURE = {
  subjectId: 'machine-learning',
  number: 'quiz3',
  title: 'Quiz 3 — Ensemble Methods',
  titleAr: 'اختبار 3 — طرق التجميع',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Ensemble Learning Quick Review</h2>
<p>This quiz focuses exclusively on Ensemble Methods. An Ensemble Method combines several base models (weak learners) to produce one optimal predictive model.</p>

<h3>1. Majority Voting</h3>
<ul>
  <li>Acts as a "Team Method" — each member votes; the majority wins, overriding isolated incorrect predictions.</li>
  <li>Relies on a threshold: decisions surpassing it by majority are accepted.</li>
</ul>

<h3>2. Bagging vs Boosting</h3>
<ul>
  <li><strong>Bagging:</strong> Trains models independently in parallel on random subsets, then averages predictions.</li>
  <li><strong>Boosting:</strong> Trains models sequentially — each new model targets the misclassified points of the previous one.</li>
</ul>

<h3>3. AdaBoost</h3>
<ol>
  <li>Initialize weights: $w_i = 1/n$.</li>
  <li>Compute error: $err_m = \\sum w_i \\cdot \\mathbf{1}[y_i \\neq G_m(x_i)]$.</li>
  <li>Compute model weight: $\\alpha_m = \\log\\!\\left(\\frac{1-err_m}{err_m}\\right)$.</li>
  <li>Update weights: $w_i \\leftarrow w_i \\cdot e^{\\alpha_m}$ for misclassified examples.</li>
  <li>Output: $G(x) = \\text{sign}\\!\\left[\\sum_{m=1}^{M} \\alpha_m G_m(x)\\right]$.</li>
</ol>`,
        bodyAr: `<h2>🔹 مراجعة سريعة لتعلم التجميع</h2>
<p>يركز هذا الاختبار حصرياً على طرق التجميع. طريقة التجميع تدمج عدة نماذج أساسية (متعلمين ضعفاء) لإنتاج نموذج واحد قوي.</p>
<h3>1. التصويت بالأغلبية</h3>
<ul>
  <li>يعمل كطريقة فريق — كل عضو يصوت والأغلبية تفوز.</li>
</ul>
<h3>2. Bagging مقابل Boosting</h3>
<ul>
  <li><strong>Bagging:</strong> تدريب موازي على مجموعات فرعية عشوائية.</li>
  <li><strong>Boosting:</strong> تدريب متسلسل يركز على الأخطاء السابقة.</li>
</ul>
<h3>3. AdaBoost</h3>
<ol>
  <li>تهيئة الأوزان: $w_i = 1/n$.</li>
  <li>حساب الخطأ: $err_m$.</li>
  <li>حساب وزن النموذج: $\\alpha_m = \\log((1-err_m)/err_m)$.</li>
  <li>تحديث الأوزان للعينات الخاطئة.</li>
  <li>الإخراج: $G(x) = \\text{sign}[\\sum \\alpha_m G_m(x)]$.</li>
</ol>`,
      },
    },
  ],

  summary: {
    points: [
      "Ensemble learning combines multiple weak base models to build one strong predictive model.",
      "Majority Voting sides with the majority, discarding isolated incorrect weak learner guesses.",
      "Bagging builds models in parallel; Boosting builds models sequentially to fix previous errors.",
      "AdaBoost increases weights of misclassified points, forcing the next learner to focus on them.",
      "Alpha (α_m) in AdaBoost is computed as log((1−err)/err) — higher accuracy → higher voting power."
    ],
    pointsAr: [
      "تعلم التجميع يدمج نماذج ضعيفة متعددة لبناء نموذج قوي واحد.",
      "التصويت بالأغلبية ينحاز للأغلبية متجاهلاً التخمينات الخاطئة المعزولة.",
      "Bagging يبني النماذج بالتوازي؛ Boosting يبنيها بشكل متسلسل.",
      "AdaBoost يزيد أوزان الأمثلة الخاطئة لإجبار المتعلم التالي على التركيز عليها.",
      "Alpha في AdaBoost = log((1-err)/err) — كلما قلّ الخطأ زاد وزن التصويت."
    ],
  },

  mcq: [
    // ── Q1 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-01",
      question: "Which of the following best defines Ensemble Learning?",
      questionAr: "أي مما يلي يحدد تعلم التجميع (Ensemble Learning) بشكل أفضل؟",
      difficulty: "easy",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 150" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>Ensemble: many weak models → one strong model</title>
  <defs>
    <marker id="arq1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>
  <!-- 3 weak learners -->
  <rect x="20"  y="46" width="100" height="36" rx="7" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1"/>
  <text x="70"  y="60" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7dd3fc" font-weight="600">Weak Model 1</text>
  <text x="70"  y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0ea5e9">60% accuracy</text>

  <rect x="20"  y="96" width="100" height="36" rx="7" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1"/>
  <text x="70"  y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7dd3fc" font-weight="600">Weak Model 2</text>
  <text x="70"  y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0ea5e9">62% accuracy</text>

  <rect x="20"  y="6" width="100" height="36" rx="7" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1"/>
  <text x="70"  y="20" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7dd3fc" font-weight="600">Weak Model 3</text>
  <text x="70"  y="35" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0ea5e9">61% accuracy</text>

  <!-- arrows -->
  <line x1="120" y1="24"  x2="270" y2="68"  stroke="#64748b" stroke-width="1" marker-end="url(#arq1)"/>
  <line x1="120" y1="64"  x2="270" y2="75"  stroke="#64748b" stroke-width="1" marker-end="url(#arq1)"/>
  <line x1="120" y1="114" x2="270" y2="82"  stroke="#64748b" stroke-width="1" marker-end="url(#arq1)"/>

  <!-- combine box -->
  <rect x="272" y="46" width="120" height="60" rx="8" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.2"/>
  <text x="332" y="72"  text-anchor="middle" font-family="sans-serif" font-size="12" fill="#6ee7b7" font-weight="700">COMBINE</text>
  <text x="332" y="88"  text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">(vote / average)</text>

  <!-- arrow to strong -->
  <line x1="392" y1="76" x2="428" y2="76" stroke="#64748b" stroke-width="1.2" marker-end="url(#arq1)"/>

  <!-- strong model -->
  <rect x="430" y="46" width="130" height="60" rx="8" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.5"/>
  <text x="495" y="72"  text-anchor="middle" font-family="sans-serif" font-size="12" fill="#6ee7b7" font-weight="700">Strong Model</text>
  <text x="495" y="88"  text-anchor="middle" font-family="sans-serif" font-size="10" fill="#34d399">90%+ accuracy</text>

  <!-- label -->
  <text x="340" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">Several weak base models → one optimal predictive model</text>
</svg>`
      },

      answers: [
        { id: "a", text: "A technique that exclusively relies on deep neural networks to extract visual features.", isCorrect: false },
        { id: "b", text: "A machine learning technique that systematically combines several base models to produce one strong model.", isCorrect: true },
        { id: "c", text: "A method that randomly deletes half of the dataset to mathematically prevent overfitting.", isCorrect: false },
        { id: "d", text: "An unsupervised algorithm completely incapable of processing any labeled target variables.", isCorrect: false },
      ],
    },

    // ── Q2 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-02",
      question: "In the context of Ensemble Learning, what is a 'weak learner'?",
      questionAr: "في سياق تعلم التجميع، ما هو 'المتعلم الضعيف' (Weak Learner)؟",
      difficulty: "easy",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 140" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>Weak learner vs random vs strong</title>

  <!-- accuracy scale bar -->
  <rect x="60" y="40" width="560" height="18" rx="4" fill="rgba(148,163,184,0.15)" stroke="rgba(148,163,184,0.3)" stroke-width="0.8"/>
  <!-- gradient fill: red → yellow → green -->
  <rect x="60"  y="40" width="186" height="18" rx="4" fill="rgba(251,113,133,0.15)" stroke="none"/>
  <rect x="246" y="40" width="187" height="18" fill="rgba(251,191,36,0.15)" stroke="none"/>
  <rect x="433" y="40" width="187" height="18" rx="4" fill="rgba(52,211,153,0.15)" stroke="none"/>

  <!-- tick marks -->
  <line x1="60"  y1="38" x2="60"  y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="340" y1="38" x2="340" y2="62" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="620" y1="38" x2="620" y2="62" stroke="#64748b" stroke-width="1"/>

  <!-- labels below bar -->
  <text x="60"  y="76" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">0%</text>
  <text x="340" y="76" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#f43f5e" font-weight="600">50% (random)</text>
  <text x="620" y="76" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">100%</text>

  <!-- weak learner marker -->
  <line x1="390" y1="32" x2="390" y2="62" stroke="#34d399" stroke-width="2"/>
  <text x="390" y="25" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="700">Weak Learner</text>
  <text x="390" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">slightly &gt; 50%</text>
  <text x="390" y="103" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">e.g. decision stump</text>

  <!-- description -->
  <text x="340" y="128" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#94a3b8">A weak learner only needs to beat random guessing — it sits just above 50% accuracy</text>
</svg>`
      },

      answers: [
        { id: "a", text: "A neural network that specifically has exactly zero hidden layers.", isCorrect: false },
        { id: "b", text: "A model that systematically fails to compile due to fundamental syntax errors.", isCorrect: false },
        { id: "c", text: "A base model (like a decision stump) that performs only slightly better than random guessing.", isCorrect: true },
        { id: "d", text: "A model that achieves absolute perfect 100% accuracy on the training data.", isCorrect: false },
      ],
    },

    // ── Q3 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-03",
      question: "What is the primary difference in how Bagging and Boosting generate their models?",
      questionAr: "ما هو الفرق الرئيسي في كيفية إنشاء Bagging و Boosting لنماذجهم؟",
      difficulty: "medium",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 200" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>Bagging parallel vs Boosting sequential</title>
  <defs>
    <marker id="arq3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <!-- BAGGING left -->
  <text x="160" y="18" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#6ee7b7">BAGGING — Parallel</text>

  <rect x="110" y="26" width="100" height="28" rx="6" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1"/>
  <text x="160" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="600">Data</text>

  <line x1="130" y1="54" x2="80"  y2="82" stroke="#34d399" stroke-width="1" marker-end="url(#arq3)"/>
  <line x1="160" y1="54" x2="160" y2="82" stroke="#34d399" stroke-width="1" marker-end="url(#arq3)"/>
  <line x1="190" y1="54" x2="240" y2="82" stroke="#34d399" stroke-width="1" marker-end="url(#arq3)"/>

  <rect x="50"  y="84" width="60" height="28" rx="5" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
  <text x="80"  y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7" font-weight="600">Model 1</text>
  <rect x="130" y="84" width="60" height="28" rx="5" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
  <text x="160" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7" font-weight="600">Model 2</text>
  <rect x="210" y="84" width="60" height="28" rx="5" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
  <text x="240" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7" font-weight="600">Model 3</text>

  <line x1="80"  y1="112" x2="140" y2="140" stroke="#64748b" stroke-width="0.8" marker-end="url(#arq3)"/>
  <line x1="160" y1="112" x2="160" y2="140" stroke="#64748b" stroke-width="0.8" marker-end="url(#arq3)"/>
  <line x1="240" y1="112" x2="180" y2="140" stroke="#64748b" stroke-width="0.8" marker-end="url(#arq3)"/>

  <rect x="110" y="142" width="100" height="28" rx="6" fill="rgba(52,211,153,0.25)" stroke="#10b981" stroke-width="1.2"/>
  <text x="160" y="161" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="700">Avg. Vote</text>

  <text x="160" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Independent · Equal weights</text>

  <!-- divider -->
  <line x1="340" y1="10" x2="340" y2="195" stroke="rgba(148,163,184,0.3)" stroke-width="1" stroke-dasharray="4 3"/>

  <!-- BOOSTING right -->
  <text x="510" y="18" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#a5b4fc">BOOSTING — Sequential</text>

  <rect x="460" y="26" width="100" height="28" rx="6" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1"/>
  <text x="510" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#a5b4fc" font-weight="600">Data + w₁</text>
  <line x1="510" y1="54" x2="510" y2="82" stroke="#6366f1" stroke-width="1.2" marker-end="url(#arq3)"/>

  <rect x="460" y="84" width="100" height="28" rx="6" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="0.8"/>
  <text x="510" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#a5b4fc" font-weight="600">Model 1</text>
  <line x1="510" y1="112" x2="510" y2="128" stroke="#6366f1" stroke-width="1.2" marker-end="url(#arq3)"/>
  <text x="560" y="125" font-family="sans-serif" font-size="10" fill="#f43f5e">update w ↑</text>

  <rect x="460" y="130" width="100" height="28" rx="6" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="0.8"/>
  <text x="510" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#a5b4fc" font-weight="600">Model 2</text>
  <line x1="510" y1="158" x2="510" y2="170" stroke="#64748b" stroke-width="1.2" marker-end="url(#arq3)"/>

  <rect x="460" y="172" width="100" height="20" rx="5" fill="rgba(129,140,248,0.25)" stroke="#818cf8" stroke-width="1.2"/>
  <text x="510" y="186" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#c7d2fe" font-weight="700">Weighted Vote</text>

  <text x="510" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Sequential · α-weighted</text>
</svg>`
      },

      answers: [
        { id: "a", text: "Bagging strictly generates models sequentially, while Boosting builds all models in parallel.", isCorrect: false },
        { id: "b", text: "Bagging generates independent models in parallel, while Boosting builds models sequentially to fix previous errors.", isCorrect: true },
        { id: "c", text: "Bagging exclusively uses Neural Networks, whereas Boosting exclusively uses Support Vector Machines.", isCorrect: false },
        { id: "d", text: "There is absolutely no mathematical or architectural difference between the two methods.", isCorrect: false },
      ],
    },

    // ── Q4 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-04",
      question: "In AdaBoost, what mathematical operation happens to the weights of data points that are MISCLASSIFIED by the current learner?",
      questionAr: "في AdaBoost، ما هي العملية الرياضية التي تحدث لأوزان نقاط البيانات التي يتم تصنيفها بشكل خاطئ بواسطة المصنف الحالي؟",
      difficulty: "medium",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 160" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>AdaBoost weight update: misclassified points get larger weights</title>
  <defs>
    <marker id="arq4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <!-- Before -->
  <text x="140" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#94a3b8">Before (uniform weights)</text>

  <!-- 5 equal-size points -->
  <circle cx="50"  cy="80" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
  <text   x="50"  y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#38bdf8" font-weight="700">A</text>
  <circle cx="100" cy="80" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
  <text   x="100" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#38bdf8" font-weight="700">B</text>
  <circle cx="150" cy="80" r="14" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.2"/>
  <text   x="150" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fb7185" font-weight="700">C</text>
  <circle cx="200" cy="80" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
  <text   x="200" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#38bdf8" font-weight="700">D</text>
  <circle cx="250" cy="80" r="14" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.2"/>
  <text   x="250" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fb7185" font-weight="700">E</text>

  <!-- weight labels -->
  <text x="50"  y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">1/n</text>
  <text x="100" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">1/n</text>
  <text x="150" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">1/n</text>
  <text x="200" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">1/n</text>
  <text x="250" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">1/n</text>

  <!-- misclassified label -->
  <text x="150" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#f43f5e">✗ miss</text>
  <text x="250" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#f43f5e">✗ miss</text>

  <!-- arrow -->
  <line x1="295" y1="80" x2="355" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#arq4)"/>
  <text x="325" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">w ← w·e^α</text>

  <!-- After -->
  <text x="530" y="16" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#94a3b8">After (misclassified upweighted)</text>

  <circle cx="380" cy="80" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
  <text   x="380" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#38bdf8" font-weight="700">A</text>
  <circle cx="430" cy="80" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
  <text   x="430" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#38bdf8" font-weight="700">B</text>

  <!-- C enlarged — misclassified -->
  <circle cx="490" cy="80" r="24" fill="rgba(251,191,36,0.15)" stroke="#f43f5e" stroke-width="2.5"/>
  <text   x="490" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fb7185" font-weight="700">C</text>
  <text   x="490" y="58" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#f43f5e">↑ weight</text>

  <circle cx="550" cy="80" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
  <text   x="550" y="85" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#38bdf8" font-weight="700">D</text>

  <!-- E enlarged -->
  <circle cx="610" cy="80" r="24" fill="rgba(251,191,36,0.15)" stroke="#f43f5e" stroke-width="2.5"/>
  <text   x="610" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fb7185" font-weight="700">E</text>
  <text   x="610" y="58" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#f43f5e">↑ weight</text>

  <text x="340" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Circle size ∝ weight. Misclassified examples grow — next learner focuses on them.</text>
</svg>`
      },

      answers: [
        { id: "a", text: "Their weights are drastically increased so the next classifier focuses heavily on them.", isCorrect: true },
        { id: "b", text: "Their weights are completely reset to precisely zero to remove them from the dataset.", isCorrect: false },
        { id: "c", text: "Their weights stubbornly remain perfectly unchanged throughout all iterations.", isCorrect: false },
        { id: "d", text: "Their weights are immediately reduced so the algorithm safely ignores them next time.", isCorrect: false },
      ],
    },

    // ── Q5 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-05",
      question: "In the first iteration of AdaBoost applied to 8 data points, what is the initial weight initialized for each data point?",
      questionAr: "في التكرار الأول من AdaBoost المطبقة على 8 نقاط بيانات، ما هو الوزن المبدئي لكل نقطة؟",
      difficulty: "medium",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 130" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>AdaBoost initial weights: 8 points each with weight 1/8</title>

  <!-- header -->
  <text x="340" y="18" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#94a3b8">Step 1 — Initialize: n = 8 points → each gets w = 1/8 = 0.125</text>

  <!-- 8 equal circles -->
  <g font-family="sans-serif">
    <circle cx="55"  cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="55"  y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P1</text>
    <text   x="55"  y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="130" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="130" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P2</text>
    <text   x="130" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="205" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="205" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P3</text>
    <text   x="205" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="280" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="280" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P4</text>
    <text   x="280" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="355" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="355" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P5</text>
    <text   x="355" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="430" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="430" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P6</text>
    <text   x="430" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="505" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="505" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P7</text>
    <text   x="505" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>

    <circle cx="580" cy="70" r="18" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.2"/>
    <text   x="580" y="66" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">P8</text>
    <text   x="580" y="80" text-anchor="middle" font-size="10" fill="#818cf8">1/8</text>
  </g>

  <!-- weight sum bar -->
  <rect x="55" y="100" width="543" height="10" rx="3" fill="rgba(129,140,248,0.25)" stroke="#818cf8" stroke-width="0.8"/>
  <text x="340" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#a5b4fc">Total weight = 8 × (1/8) = 1.0  ✓ (weights always sum to 1)</text>
</svg>`
      },

      answers: [
        { id: "a", text: "Exactly 1.0 for every single data point uniformly.", isCorrect: false },
        { id: "b", text: "Exactly 0.0 because the first model hasn't made any numerical errors yet.", isCorrect: false },
        { id: "c", text: "Exactly 1/8 (0.125) for each point, distributing the weights evenly.", isCorrect: true },
        { id: "d", text: "Exactly 8.0 for each point entirely.", isCorrect: false },
      ],
    },

    // ── Q6 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-06",
      question: "How is the Model Weight (α_m) mathematically calculated in the AdaBoost algorithm?",
      questionAr: "كيف يتم حساب وزن النموذج (α_m) رياضياً في خوارزمية AdaBoost؟",
      difficulty: "hard",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 200" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>Alpha_m formula: log of (1-error)/error</title>

  <!-- Formula box -->
  <rect x="180" y="12" width="320" height="54" rx="10" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1.5"/>
  <text x="340" y="36" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#a5b4fc" font-weight="700">α_m = log( (1 − err_m) / err_m )</text>
  <text x="340" y="56" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6366f1">natural log of accuracy-to-error ratio</text>

  <!-- axes -->
  <line x1="60" y1="170" x2="620" y2="170" stroke="rgba(148,163,184,0.3)" stroke-width="1.2"/>
  <line x1="60" y1="82"  x2="60"  y2="170" stroke="rgba(148,163,184,0.3)" stroke-width="1.2"/>

  <!-- zero α line at err=0.5 (x=340) -->
  <line x1="340" y1="78" x2="340" y2="170" stroke="#f43f5e" stroke-width="0.8" stroke-dasharray="4 3"/>
  <text x="344" y="95" font-family="sans-serif" font-size="10" fill="#f43f5e">err=0.5 → α=0</text>

  <!-- axis labels -->
  <text x="60"  y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">0</text>
  <text x="340" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">0.5</text>
  <text x="620" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">1.0</text>
  <text x="340" y="195" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Error rate (err_m)</text>

  <!-- α curve: rises steeply left of 0.5, falls right -->
  <path d="M 80 86
           C 110 92, 140 102, 180 113
           C 220 124, 270 132, 310 137
           C 325 139, 338 140, 340 140
           C 355 140, 380 143, 420 150
           C 460 158, 510 166, 580 170"
        fill="none" stroke="#818cf8" stroke-width="2.5"/>

  <!-- annotations -->
  <text x="90"  y="82" font-family="sans-serif" font-size="10" fill="#34d399" font-weight="700">High α → strong vote</text>
  <text x="90"  y="94" font-family="sans-serif" font-size="10" fill="#94a3b8">(very accurate model)</text>

  <text x="430" y="162" font-family="sans-serif" font-size="10" fill="#f43f5e" font-weight="700">Negative α</text>
  <text x="430" y="173" font-family="sans-serif" font-size="10" fill="#94a3b8">(worse than random)</text>
</svg>`
      },

      answers: [
        { id: "a", text: "It is calculated by simply multiplying the base model's total accuracy by the square root of the error.", isCorrect: false },
        { id: "b", text: "It is strictly calculated via the logarithm of the ratio of (1 - error) divided by the error.", isCorrect: true },
        { id: "c", text: "It is entirely randomized continuously to inherently prevent the model from overfitting.", isCorrect: false },
        { id: "d", text: "It is explicitly calculated by adding the raw sum of all training data labels together.", isCorrect: false },
      ],
    },

    // ── Q7 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-07",
      question: "If an AdaBoost weak learner achieves an extremely low error rate, what happens to its Model Weight (α_m)?",
      questionAr: "إذا حقق المصنف الضعيف في AdaBoost معدل خطأ منخفض جداً، ماذا يحدث لوزن نموذجه (α_m)؟",
      difficulty: "hard",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 140" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>Low error leads to high alpha voting power</title>

  <!-- 3 scenario boxes side by side -->

  <!-- Scenario A: high error -->
  <rect x="20" y="20" width="180" height="90" rx="8" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="1.2"/>
  <text x="110" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fda4af" font-weight="700">High Error</text>
  <text x="110" y="58" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#f43f5e" font-weight="700">err = 0.45</text>
  <text x="110" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fb7185">α = log(0.55/0.45)</text>
  <text x="110" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#f43f5e" font-weight="700">α ≈ 0.20  (weak vote)</text>

  <!-- Scenario B: medium error -->
  <rect x="250" y="20" width="180" height="90" rx="8" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="340" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fde68a" font-weight="700">Medium Error</text>
  <text x="340" y="58" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#fbbf24" font-weight="700">err = 0.25</text>
  <text x="340" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fde68a">α = log(0.75/0.25)</text>
  <text x="340" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fbbf24" font-weight="700">α ≈ 1.10  (medium vote)</text>

  <!-- Scenario C: low error -->
  <rect x="480" y="20" width="180" height="90" rx="8" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="2"/>
  <text x="570" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="700">Low Error ✓</text>
  <text x="570" y="58" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#34d399" font-weight="700">err = 0.05</text>
  <text x="570" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7">α = log(0.95/0.05)</text>
  <text x="570" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#34d399" font-weight="700">α ≈ 2.94  (STRONG vote)</text>

  <text x="340" y="128" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#94a3b8">Lower error → Higher α → More voting power in the final ensemble</text>
</svg>`
      },

      answers: [
        { id: "a", text: "The Model Weight explicitly drops to zero because low errors trigger an algorithmic halt.", isCorrect: false },
        { id: "b", text: "The Model Weight dynamically becomes a large negative number to artificially penalize it.", isCorrect: false },
        { id: "c", text: "The Model Weight intrinsically becomes very high, giving this specific model strong voting power.", isCorrect: true },
        { id: "d", text: "The Model Weight systematically resets back to 1/n to completely restart the process.", isCorrect: false },
      ],
    },

    // ── Q8 ─────────────────────────────────────────────────────────
    {
      id: "ml-q3-08",
      question: "According to the 'Majority Voting' logic in ensemble methods, how is the final decision made?",
      questionAr: "وفقاً لمنطق 'التصويت بالأغلبية' في طرق التجميع، كيف يتم اتخاذ القرار النهائي؟",
      difficulty: "easy",

      visual: {
        type: "svg",
        svg: `<svg width="100%" viewBox="0 0 680 150" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-radius:20px; border:1px solid rgba(255,255,255,0.05); box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
  <title>Majority voting: 5 classifiers vote, majority of YES wins</title>
  <defs>
    <marker id="arq8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <!-- 5 classifiers voting -->
  <rect x="10"  y="30" width="80" height="34" rx="6" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1"/>
  <text x="50"  y="48" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="700">C1: YES ✓</text>

  <rect x="110" y="30" width="80" height="34" rx="6" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1"/>
  <text x="150" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="700">C2: YES ✓</text>

  <rect x="210" y="30" width="80" height="34" rx="6" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1"/>
  <text x="250" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fb7185" font-weight="700">C3: NO ✗</text>

  <rect x="310" y="30" width="80" height="34" rx="6" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1"/>
  <text x="350" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7" font-weight="700">C4: YES ✓</text>

  <rect x="410" y="30" width="80" height="34" rx="6" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1"/>
  <text x="450" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fb7185" font-weight="700">C5: NO ✗</text>

  <!-- vote count -->
  <rect x="540" y="22" width="130" height="50" rx="8" fill="rgba(52,211,153,0.25)" stroke="#10b981" stroke-width="1.5"/>
  <text x="605" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#6ee7b7" font-weight="700">YES: 3   NO: 2</text>
  <text x="605" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6ee7b7">Majority → YES</text>

  <!-- connecting line -->
  <line x1="490" y1="47" x2="538" y2="47" stroke="#64748b" stroke-width="1.2" marker-end="url(#arq8)"/>

  <!-- threshold bar -->
  <text x="340" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#94a3b8">Threshold: need &gt; 50% (3 out of 5) to decide YES — isolated NO votes are overridden</text>

  <!-- final output -->
  <rect x="240" y="110" width="200" height="32" rx="8" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.5"/>
  <text x="340" y="131" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#6ee7b7" font-weight="700">Final Decision: YES ✓</text>
</svg>`
      },

      answers: [
        { id: "a", text: "The algorithm mathematically averages the absolute physical size of all generated decision trees.", isCorrect: false },
        { id: "b", text: "The algorithm exclusively strictly trusts only the very first model generated and discards the rest.", isCorrect: false },
        { id: "c", text: "The algorithm combines all individual model predictions and selects the one that surpasses the threshold by majority.", isCorrect: true },
        { id: "d", text: "The algorithm randomly selects one target label output completely arbitrarily.", isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: "ml-q3-w1",
      question: "Explain the fundamental difference between Bagging and Boosting in terms of how they handle training data and generate models.",
      questionAr: "اشرح الفرق الأساسي بين Bagging و Boosting من حيث كيفية التعامل مع بيانات التدريب وإنشاء النماذج.",
      modelAnswer: "Bagging creates multiple independent models in parallel using random subsets of the data (bootstrapped). Boosting creates models sequentially, where each new model specifically targets the data points that the previous model misclassified by increasing their weights.",
      modelAnswerAr: "Bagging تنشئ نماذج مستقلة بالتوازي باستخدام مجموعات فرعية عشوائية. Boosting تنشئ النماذج بشكل متسلسل، حيث يستهدف كل نموذج جديد نقاط البيانات التي أخطأ النموذج السابق في تصنيفها من خلال زيادة أوزانها.",
    },
    {
      id: "ml-q3-w2",
      question: "In the AdaBoost algorithm, why is it critical to increase the weights of misclassified examples after each iteration?",
      questionAr: "في خوارزمية AdaBoost، لماذا من الضروري زيادة أوزان الأمثلة المصنفة بشكل خاطئ بعد كل تكرار؟",
      modelAnswer: "Increasing the weights of misclassified examples acts as a penalty mechanism. It mathematically forces the next weak learner to focus heavily on these 'hard' examples, systematically reducing the overall error of the ensemble over iterations.",
      modelAnswerAr: "زيادة أوزان الأمثلة الخاطئة تعمل كآلية عقاب رياضية. تجبر المتعلم الضعيف القادم على التركيز بشدة على هذه العينات الصعبة، مما يقلل من الخطأ الإجمالي للتجميع بشكل منهجي عبر التكرارات.",
    },
  ],

  explanation: [
    {
      type: "text",
      content: {
        body: "<h2>1. Core Concept of Ensemble Learning</h2>\n<p>Ensemble methods combine multiple <strong>weak learners</strong> (like shallow decision trees) into a single <strong>strong learner</strong>. The main goal is to improve robustness, reduce variance (overfitting), and decrease bias. By leveraging the 'wisdom of the crowd', the ensemble performs significantly better than any individual base model.</p>"
      }
    },
    {
      type: "text",
      content: {
        body: `<h2>2. Bagging vs. Boosting</h2>
      <div style="background:rgba(255,255,255,0.03); border-radius:12px; padding:16px; border:1px solid rgba(255,255,255,0.1); margin-top:12px; overflow-x:auto;">
        <table class="styled-table" style="width:100%; border-collapse:collapse; text-align:left; min-width:500px;">
          <thead>
            <tr style="border-bottom:2px solid rgba(255,255,255,0.1);">
              <th style="padding:12px; color:#38bdf8; font-weight:600;">Feature</th>
              <th style="padding:12px; color:#10b981; font-weight:600;">Bagging (Parallel)</th>
              <th style="padding:12px; color:#818cf8; font-weight:600;">Boosting (Sequential)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:12px; font-weight:600;">Model Training</td>
              <td style="padding:12px;">Parallel & independent</td>
              <td style="padding:12px;">Sequential (one after another)</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:12px; font-weight:600;">Focus</td>
              <td style="padding:12px;">Reduces Variance (Overfitting)</td>
              <td style="padding:12px;">Reduces Bias (Underfitting)</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:12px; font-weight:600;">Data Sampling</td>
              <td style="padding:12px;">Bootstrap sampling (random subset w/ replacement)</td>
              <td style="padding:12px;">Reweighting (focuses on misclassified points)</td>
            </tr>
            <tr>
              <td style="padding:12px; font-weight:600;">Aggregation</td>
              <td style="padding:12px;">Unweighted majority vote / Average</td>
              <td style="padding:12px;">Weighted voting (better models have higher $\\alpha$)</td>
            </tr>
          </tbody>
        </table>
      </div>`
      }
    },
    {
      type: "text",
      content: {
        body: `<h2>3. AdaBoost Mathematics</h2>
      <ul style="padding-left:20px; line-height:1.8; margin-bottom:12px; list-style-type:disc;">
        <li><strong>Alpha ($\\alpha_m$):</strong> The voting power of model $m$. A model with lower error gets an exponentially higher alpha. $\\alpha_m = \\log\\!\\left(\\frac{1 - err_m}{err_m}\\right)$</li>
        <li><strong>Weight Update ($w_i$):</strong> Data points that the current model misclassified have their weights increased by $e^{\\alpha_m}$. This strictly forces the <i>next</i> model to focus on these hard examples.</li>
        <li><strong>Threshold:</strong> A weak learner only needs to be slightly better than random guessing (error < 0.5) to contribute positively to the ensemble.</li>
      </ul>`
      }
    },
    {
      type: "text",
      content: {
        body: "<h2>4. Random Forest Specifics</h2>\n<p>Random Forest is an extension of Bagging applied to decision trees. To ensure the trees are decorrelated (independent), it introduces <strong>Feature Randomness</strong>: at every split, the algorithm evaluates only a random subset of features ($m = \\sqrt{d}$) instead of all available features. This prevents strong predictors from dominating every tree.</p>"
      }
    }
  ]
};