export const LECTURE = {
  subjectId: 'machine-learning',
  number: 8,
  title: 'Decision Tree Classifiers',
  titleAr: 'مصنفات شجرة القرار (Decision Trees)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<!-- ============================================================
     SECTION 1 — WHAT ARE TREE CLASSIFIERS?
     ============================================================ -->
<h2>🌳 What Are Tree Classifiers?</h2>
<p>
  Decision Trees are one of the most beloved classification methods in machine learning —
  not because they are the most powerful, but because they are the most <em>human</em>.
  They mirror how we actually make decisions: a chain of yes/no questions leading to a conclusion.
  Their key advantages are that they make <strong>no assumption about linearity</strong>,
  work natively with categorical data, and produce models that a non-technical stakeholder
  can read like a flowchart.
</p>

<h3>📜 A Brief History</h3>
<ul>
  <li><strong>CART</strong> (Classification And Regression Trees) — Friedman, 1977. Uses <em>binary splits</em> and the <em>Gini Index</em>.</li>
  <li><strong>ID3</strong> (Iterative Dichotomiser 3) — Ross Quinlan, 1979. Greedy top-down approach using <em>Information Entropy</em>.</li>
  <li><strong>C4.5</strong> — Quinlan, 1983. Successor to ID3; adds support for <em>numerical features</em> and <em>pruning</em>.</li>
  <li>1990s refinements: pruning strategies, handling of missing values, and numerical thresholds.</li>
</ul>

<h3>🏥 Real-World Applications</h3>
<ul>
  <li><strong>Botany:</strong> Classifying plant species (e.g., <em>New Flora of the British Isles</em>).</li>
  <li><strong>Medicine:</strong> Diagnosing diabetes (Pima Indian dataset), early detection of myocardial infarction.</li>
  <li><strong>Computational Biology:</strong> Modelling gene-gene interactions.</li>
</ul>

<!-- ============================================================
     SECTION 2 — HOW A TREE GROWS  (with SVG diagram)
     ============================================================ -->
<h2>🌱 How a Decision Tree Grows</h2>
<p>
  Despite the word "tree", a decision tree is grown <strong>from the root downward</strong>,
  like a family tree turned upside-down.  Starting from a single root node that holds
  all training examples, the algorithm greedily finds the best feature to split on,
  creating branches.  The process repeats recursively at every child node until the node
  is <em>pure</em> (all examples belong to one class) or a stopping criterion is met.
</p>

<ol>
  <li><strong>Root node:</strong> Contains all training examples.</li>
  <li><strong>Greedy split:</strong> Choose the feature that best separates the classes (maximises <em>node purity</em>).</li>
  <li><strong>Recurse:</strong> Repeat the process for each child node independently.</li>
  <li><strong>Leaf node:</strong> When a node is pure or cannot be split further, assign the <em>majority class</em>.</li>
</ol>

<!-- SVG — Decision Tree Structure Diagram -->
<div style="text-align:center; margin: 36px 0;">
  <svg viewBox="0 0 780 420" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:780px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="rgba(148,163,184,0.6)"/>
      </marker>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <!-- Node gradients -->
      <radialGradient id="rootGrad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#6366f1"/>
        <stop offset="100%" stop-color="#4338ca"/>
      </radialGradient>
      <radialGradient id="midGrad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#0ea5e9"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </radialGradient>
      <radialGradient id="yesLeafGrad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#059669"/>
      </radialGradient>
      <radialGradient id="noLeafGrad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#e11d48"/>
      </radialGradient>
    </defs>

    <!-- Title -->
    <text x="390" y="30" text-anchor="middle" fill="#e2e8f0" font-size="14"
          font-family="'Courier New', monospace" font-weight="bold" letter-spacing="2">
      DECISION TREE — STRUCTURE
    </text>

    <!-- ── Root Node ── -->
    <rect x="285" y="48" width="210" height="54" rx="12" fill="url(#rootGrad)"
          stroke="#818cf8" stroke-width="1.5" filter="url(#glow)"/>
    <text x="390" y="70" text-anchor="middle" fill="white" font-size="13"
          font-family="'Courier New', monospace" font-weight="bold">ROOT NODE</text>
    <text x="390" y="90" text-anchor="middle" fill="#c7d2fe" font-size="11"
          font-family="'Courier New', monospace">All 14 training examples</text>

    <!-- Edge lines root → mid -->
    <line x1="340" y1="102" x2="200" y2="180" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="390" y1="102" x2="390" y2="180" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="440" y1="102" x2="580" y2="180" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>

    <!-- Edge labels -->
    <text x="252" y="148" text-anchor="middle" fill="#fbbf24" font-size="10"
          font-family="'Courier New', monospace">Java</text>
    <text x="415" y="148" text-anchor="middle" fill="#fbbf24" font-size="10"
          font-family="'Courier New', monospace">Obj-C</text>

    <!-- Split label on root edge -->
    <text x="391" y="145" text-anchor="middle" fill="#94a3b8" font-size="9"
          font-family="'Courier New', monospace">Favorite Language?</text>

    <!-- ── Mid-level nodes ── -->
    <!-- Java branch -->
    <rect x="110" y="186" width="180" height="54" rx="12" fill="url(#midGrad)"
          stroke="#38bdf8" stroke-width="1.5"/>
    <text x="200" y="208" text-anchor="middle" fill="white" font-size="12"
          font-family="'Courier New', monospace" font-weight="bold">Java Speakers</text>
    <text x="200" y="228" text-anchor="middle" fill="#bae6fd" font-size="11"
          font-family="'Courier New', monospace">6 Yes / 1 No</text>

    <!-- Objective-C branch -->
    <rect x="490" y="186" width="180" height="54" rx="12" fill="url(#midGrad)"
          stroke="#38bdf8" stroke-width="1.5"/>
    <text x="580" y="208" text-anchor="middle" fill="white" font-size="12"
          font-family="'Courier New', monospace" font-weight="bold">Obj-C Speakers</text>
    <text x="580" y="228" text-anchor="middle" fill="#bae6fd" font-size="11"
          font-family="'Courier New', monospace">2 Yes / 5 No</text>

    <!-- Pure leaf placeholder at center -->
    <rect x="310" y="186" width="160" height="54" rx="12" fill="url(#yesLeafGrad)"
          stroke="#34d399" stroke-width="1.5"/>
    <text x="390" y="208" text-anchor="middle" fill="white" font-size="12"
          font-family="'Courier New', monospace" font-weight="bold">Pure Leaf ✓</text>
    <text x="390" y="228" text-anchor="middle" fill="#a7f3d0" font-size="11"
          font-family="'Courier New', monospace">Entropy = 0</text>

    <!-- Edge lines mid → leaves -->
    <line x1="160" y1="240" x2="120" y2="320" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="240" y1="240" x2="280" y2="320" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="530" y1="240" x2="490" y2="320" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="630" y1="240" x2="670" y2="320" stroke="rgba(148,163,184,0.4)"
          stroke-width="1.5" marker-end="url(#arr)"/>

    <!-- ── Leaf nodes ── -->
    <rect x="55" y="326" width="130" height="54" rx="12" fill="url(#yesLeafGrad)"
          stroke="#34d399" stroke-width="1.5"/>
    <text x="120" y="350" text-anchor="middle" fill="white" font-size="13"
          font-family="'Courier New', monospace" font-weight="bold">✅ HIRE</text>
    <text x="120" y="368" text-anchor="middle" fill="#a7f3d0" font-size="10"
          font-family="'Courier New', monospace">Majority: Yes</text>

    <rect x="215" y="326" width="130" height="54" rx="12" fill="url(#noLeafGrad)"
          stroke="#fb7185" stroke-width="1.5"/>
    <text x="280" y="350" text-anchor="middle" fill="white" font-size="13"
          font-family="'Courier New', monospace" font-weight="bold">❌ PASS</text>
    <text x="280" y="368" text-anchor="middle" fill="#fecdd3" font-size="10"
          font-family="'Courier New', monospace">Split further...</text>

    <rect x="425" y="326" width="130" height="54" rx="12" fill="url(#noLeafGrad)"
          stroke="#fb7185" stroke-width="1.5"/>
    <text x="490" y="350" text-anchor="middle" fill="white" font-size="13"
          font-family="'Courier New', monospace" font-weight="bold">❌ PASS</text>
    <text x="490" y="368" text-anchor="middle" fill="#fecdd3" font-size="10"
          font-family="'Courier New', monospace">Split further...</text>

    <rect x="605" y="326" width="130" height="54" rx="12" fill="url(#yesLeafGrad)"
          stroke="#34d399" stroke-width="1.5"/>
    <text x="670" y="350" text-anchor="middle" fill="white" font-size="13"
          font-family="'Courier New', monospace" font-weight="bold">✅ HIRE</text>
    <text x="670" y="368" text-anchor="middle" fill="#a7f3d0" font-size="10"
          font-family="'Courier New', monospace">Majority: Yes</text>

    <!-- Legend -->
    <rect x="20" y="396" width="12" height="12" rx="3" fill="#6366f1"/>
    <text x="36" y="406" fill="#94a3b8" font-size="10" font-family="'Courier New', monospace">Root</text>
    <rect x="90" y="396" width="12" height="12" rx="3" fill="#0ea5e9"/>
    <text x="106" y="406" fill="#94a3b8" font-size="10" font-family="'Courier New', monospace">Internal Node</text>
    <rect x="210" y="396" width="12" height="12" rx="3" fill="#10b981"/>
    <text x="226" y="406" fill="#94a3b8" font-size="10" font-family="'Courier New', monospace">Hire Leaf</text>
    <rect x="300" y="396" width="12" height="12" rx="3" fill="#f43f5e"/>
    <text x="316" y="406" fill="#94a3b8" font-size="10" font-family="'Courier New', monospace">Pass Leaf</text>
  </svg>
</div>

<!-- ============================================================
     SECTION 3 — ENTROPY
     ============================================================ -->
<h2>📐 Splitting Criteria: Information Entropy (C4.5 / ID3)</h2>
<p>
  The central question in building a tree is: <em>"Which feature should we split on next?"</em>
  We need a mathematical measure of how <strong>mixed</strong> (impure) or <strong>homogeneous</strong> (pure) a node is.
  The perfect measure borrowed from Information Theory is <strong>Entropy</strong>:
</p>

<div style="background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0; font-size:1.1em; font-family:'Courier New',monospace; color:#c7d2fe; letter-spacing:0.5px;">
    Entropy(S) = − p₊ · log₂(p₊) − p₋ · log₂(p₋)
  </p>
  <p style="margin:10px 0 0; font-size:0.9em; color:#94a3b8;">
    For <em>c</em> classes: &nbsp;&nbsp; Entropy(S) = −∑ pᵢ · log₂(pᵢ)
  </p>
</div>

<ul>
  <li>
    <strong>Maximum Entropy = 1.0</strong> when the node is perfectly balanced
    (50% positive, 50% negative) — maximum chaos, we learn nothing from this split.
  </li>
  <li>
    <strong>Minimum Entropy = 0.0</strong> when the node is completely pure
    (100% one class) — perfect certainty, no more splitting needed.
  </li>
</ul>

<!-- SVG — Entropy Curve -->
<div style="text-align:center; margin: 36px 0;">
  <svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:620px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <linearGradient id="entCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="50%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
      <filter id="entGlow">
        <feGaussianBlur stdDeviation="4" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Grid lines -->
    <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
      <line x1="80" y1="240" x2="560" y2="240"/>
      <line x1="80" y1="180" x2="560" y2="180"/>
      <line x1="80" y1="120" x2="560" y2="120"/>
      <line x1="80" y1="60"  x2="560" y2="60"/>
      <line x1="200" y1="40" x2="200" y2="255"/>
      <line x1="320" y1="40" x2="320" y2="255"/>
      <line x1="440" y1="40" x2="440" y2="255"/>
    </g>

    <!-- Axes -->
    <line x1="80" y1="240" x2="565" y2="240" stroke="#475569" stroke-width="2"/>
    <line x1="80" y1="40"  x2="80"  y2="245" stroke="#475569" stroke-width="2"/>
    <!-- Axis arrows -->
    <polygon points="565,237 572,240 565,243" fill="#475569"/>
    <polygon points="77,40 80,33 83,40" fill="#475569"/>

    <!-- Y-axis labels -->
    <text x="68" y="244" text-anchor="end" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.0</text>
    <text x="68" y="184" text-anchor="end" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.5</text>
    <text x="68" y="124" text-anchor="end" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.75</text>
    <text x="68" y="64"  text-anchor="end" fill="#64748b" font-size="11" font-family="'Courier New',monospace">1.0</text>

    <!-- X-axis labels -->
    <text x="80"  y="260" text-anchor="middle" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.0</text>
    <text x="200" y="260" text-anchor="middle" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.25</text>
    <text x="320" y="260" text-anchor="middle" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.5</text>
    <text x="440" y="260" text-anchor="middle" fill="#64748b" font-size="11" font-family="'Courier New',monospace">0.75</text>
    <text x="560" y="260" text-anchor="middle" fill="#64748b" font-size="11" font-family="'Courier New',monospace">1.0</text>

    <!-- Axis titles -->
    <text x="325" y="284" text-anchor="middle" fill="#94a3b8" font-size="12"
          font-family="'Courier New',monospace">p₊  (proportion of positive examples)</text>
    <text x="22" y="145" text-anchor="middle" fill="#94a3b8" font-size="12"
          font-family="'Courier New',monospace" transform="rotate(-90,22,145)">Entropy(S)</text>

    <!-- Entropy curve: computed as −p·log2(p) − (1-p)·log2(1-p), mapped to SVG coords
         x: 80 + p*480,  y: 240 − entropy*180
         Key points (p, H): 0→0, 0.1→0.469, 0.2→0.722, 0.3→0.881, 0.4→0.971, 0.5→1.0,
                             0.6→0.971, 0.7→0.881, 0.8→0.722, 0.9→0.469, 1→0 -->
    <path d="M80,240
             C110,240 130,158 152,156
             C174,154 184,101 200,156
             L200,155
             C216,101 246,58 272,61
             C298,56 310,60 320,60
             C330,60 342,56 368,61
             C394,58 424,101 440,155
             L440,156
             C456,101 466,154 488,156
             C510,158 530,240 560,240"
          fill="none" stroke="url(#entCurveGrad)" stroke-width="4"
          stroke-linecap="round" filter="url(#entGlow)"/>

    <!-- Better approximated smooth path -->
    <path d="M80,240 Q120,200 152,158 Q200,60 320,60 Q440,60 488,158 Q520,200 560,240"
          fill="rgba(99,102,241,0.06)" stroke="none"/>

    <!-- Peak annotation -->
    <circle cx="320" cy="60" r="7" fill="#f43f5e" filter="url(#entGlow)"/>
    <line x1="320" y1="60" x2="390" y2="40" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
    <rect x="390" y="26" width="148" height="28" rx="6" fill="rgba(244,63,94,0.15)"
          stroke="rgba(244,63,94,0.4)" stroke-width="1"/>
    <text x="464" y="44" text-anchor="middle" fill="#fb7185" font-size="11"
          font-family="'Courier New',monospace">MAX IMPURITY: 1.0</text>

    <!-- Left pure annotation -->
    <circle cx="80" cy="240" r="6" fill="#10b981" filter="url(#entGlow)"/>
    <text x="92" y="228" fill="#34d399" font-size="11" font-family="'Courier New',monospace">Pure</text>
    <text x="92" y="218" fill="#34d399" font-size="10" font-family="'Courier New',monospace">(H=0)</text>

    <!-- Right pure annotation -->
    <circle cx="560" cy="240" r="6" fill="#10b981" filter="url(#entGlow)"/>
    <text x="510" y="228" fill="#34d399" font-size="11" font-family="'Courier New',monospace">Pure</text>
    <text x="510" y="218" fill="#34d399" font-size="10" font-family="'Courier New',monospace">(H=0)</text>

    <!-- Title -->
    <text x="310" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="2">
      ENTROPY CURVE
    </text>
  </svg>
</div>

<!-- ============================================================
     SECTION 4 — INFORMATION GAIN
     ============================================================ -->
<h2>📊 Information Gain — Choosing the Best Split</h2>
<p>
  Entropy tells us how impure a node is.  But how do we decide <em>which feature to split on</em>?
  We compute the <strong>Information Gain</strong>: the expected reduction in entropy if we split
  the dataset by attribute <em>A</em>.
</p>

<div style="background:rgba(14,165,233,0.1); border:1px solid rgba(14,165,233,0.4);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0; font-size:1.05em; font-family:'Courier New',monospace; color:#bae6fd;">
    Gain(S, A) = Entropy(S) − ∑ (|Sᵥ| / |S|) · Entropy(Sᵥ)
  </p>
  <p style="margin:10px 0 0; font-size:0.88em; color:#7dd3fc;">
    Sum runs over all possible values <em>v</em> of attribute <em>A</em>
  </p>
</div>

<p>
  The algorithm selects the attribute with the <strong>highest Information Gain</strong> at each node —
  this is the greedy, top-down approach shared by both ID3 and C4.5.
</p>

<!-- SVG — Information Gain Bar Chart from the Toy Example -->
<div style="text-align:center; margin: 36px 0;">
  <svg viewBox="0 0 620 310" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:620px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <linearGradient id="barWin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
      <linearGradient id="barMid" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0ea5e9"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </linearGradient>
      <linearGradient id="barLow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#6366f1"/>
        <stop offset="100%" stop-color="#4338ca"/>
      </linearGradient>
      <linearGradient id="barZero" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#475569"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
      <filter id="barGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Title -->
    <text x="310" y="26" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      INFORMATION GAIN — HIRING DATASET
    </text>

    <!-- Axes -->
    <line x1="80" y1="250" x2="570" y2="250" stroke="#475569" stroke-width="2"/>
    <line x1="80" y1="50"  x2="80"  y2="255" stroke="#475569" stroke-width="2"/>

    <!-- Y-axis grid & labels  (max gain shown ≈ 0.30) -->
    <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
      <line x1="80" y1="50"  x2="570" y2="50"/>
      <line x1="80" y1="117" x2="570" y2="117"/>
      <line x1="80" y1="183" x2="570" y2="183"/>
    </g>
    <text x="68" y="54"  text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.30</text>
    <text x="68" y="121" text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.20</text>
    <text x="68" y="187" text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.10</text>
    <text x="68" y="253" text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.00</text>
    <text x="22" y="155" text-anchor="middle" fill="#94a3b8" font-size="11"
          font-family="'Courier New',monospace" transform="rotate(-90,22,155)">Information Gain</text>

    <!-- Bars
         Scale: 0.30 gain = 200px height.  gain * 200/0.30 = gain * 667
         Bar width = 80px.  Bars at x positions: 130, 250, 370, 490
         Gain values: Fav Language=0.258, Work Exp=0.189, Highest Degree=0.149, Needs Visa=0.000
    -->

    <!-- Favorite Language — WINNER — gain 0.258 → height=172 -->
    <rect x="105" y="78" width="80" height="172" rx="8" fill="url(#barWin)" filter="url(#barGlow)"/>
    <rect x="105" y="78" width="80" height="14" rx="8" fill="rgba(255,255,255,0.2)"/>
    <text x="145" y="72" text-anchor="middle" fill="#fbbf24" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold">0.258</text>
    <!-- Winner crown badge -->
    <text x="145" y="62" text-anchor="middle" font-size="16">👑</text>
    <text x="145" y="268" text-anchor="middle" fill="#fbbf24" font-size="10"
          font-family="'Courier New',monospace" font-weight="bold">Fav</text>
    <text x="145" y="280" text-anchor="middle" fill="#fbbf24" font-size="10"
          font-family="'Courier New',monospace" font-weight="bold">Language</text>

    <!-- Work Experience — gain 0.189 → height=126 -->
    <rect x="225" y="124" width="80" height="126" rx="8" fill="url(#barMid)"/>
    <rect x="225" y="124" width="80" height="14" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="265" y="118" text-anchor="middle" fill="#7dd3fc" font-size="12"
          font-family="'Courier New',monospace">0.189</text>
    <text x="265" y="268" text-anchor="middle" fill="#7dd3fc" font-size="10"
          font-family="'Courier New',monospace">Work</text>
    <text x="265" y="280" text-anchor="middle" fill="#7dd3fc" font-size="10"
          font-family="'Courier New',monospace">Experience</text>

    <!-- Highest Degree — gain 0.149 → height=99 -->
    <rect x="345" y="151" width="80" height="99" rx="8" fill="url(#barLow)"/>
    <rect x="345" y="151" width="80" height="14" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="385" y="145" text-anchor="middle" fill="#a5b4fc" font-size="12"
          font-family="'Courier New',monospace">0.149</text>
    <text x="385" y="268" text-anchor="middle" fill="#a5b4fc" font-size="10"
          font-family="'Courier New',monospace">Highest</text>
    <text x="385" y="280" text-anchor="middle" fill="#a5b4fc" font-size="10"
          font-family="'Courier New',monospace">Degree</text>

    <!-- Needs Work Visa — gain 0.000 → height=0 (tiny stub) -->
    <rect x="465" y="246" width="80" height="4" rx="2" fill="url(#barZero)"/>
    <text x="505" y="240" text-anchor="middle" fill="#64748b" font-size="12"
          font-family="'Courier New',monospace">0.000</text>
    <text x="505" y="268" text-anchor="middle" fill="#64748b" font-size="10"
          font-family="'Courier New',monospace">Needs</text>
    <text x="505" y="280" text-anchor="middle" fill="#64748b" font-size="10"
          font-family="'Courier New',monospace">Work Visa</text>

    <!-- Annotation: "Choose highest" arrow -->
    <line x1="145" y1="78" x2="145" y2="52" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="310" y="298" text-anchor="middle" fill="#64748b" font-size="10"
          font-family="'Courier New',monospace">Root split: Favorite Language chosen (Gain = 0.258)</text>
  </svg>
</div>

<!-- Worked Example Box -->
<div style="background:rgba(30,58,138,0.18); border:1px solid rgba(59,130,246,0.45);
            border-radius:14px; padding:22px 28px; margin:24px 0;">
  <p style="margin:0 0 10px; font-size:1em; color:#93c5fd; font-weight:bold;">
    🧮 Worked Example — Computing Information Gain
  </p>
  <p style="color:#cbd5e1; margin:0 0 8px;">
    Dataset: 14 candidates, 8 Hired (Yes), 6 Not Hired (No).
  </p>
  <p style="color:#94a3b8; margin:0 0 4px; font-family:'Courier New',monospace;">
    Base Entropy(S) = −(8/14)·log₂(8/14) − (6/14)·log₂(6/14) = <strong style="color:#e2e8f0;">0.985</strong>
  </p>
  <p style="color:#94a3b8; margin:8px 0 4px;">
    Splitting on <strong style="color:#bae6fd;">Favorite Language</strong>:
  </p>
  <ul style="color:#94a3b8; margin:0; padding-left:20px; font-family:'Courier New',monospace; font-size:0.9em;">
    <li>Java (7 total, 6 Yes / 1 No) → Entropy = 0.592</li>
    <li>Objective-C (7 total, 2 Yes / 5 No) → Entropy = 0.863</li>
  </ul>
  <p style="color:#94a3b8; margin:10px 0 0; font-family:'Courier New',monospace;">
    Gain = 0.985 − [(7/14)·0.592 + (7/14)·0.863] = <strong style="color:#fbbf24;">0.258 ← HIGHEST → ROOT SPLIT</strong>
  </p>
</div>

<!-- ============================================================
     SECTION 5 — CART & GINI
     ============================================================ -->
<h2>⚙️ CART & The Gini Index</h2>
<p>
  <strong>CART</strong> (Classification And Regression Trees, Friedman 1977) is an alternative
  family with two key structural differences from C4.5:
</p>
<ul>
  <li>It produces <strong>strictly binary splits</strong> — every internal node has exactly two children.</li>
  <li>It uses the <strong>Gini Index</strong> instead of Information Entropy as the impurity measure.</li>
</ul>

<div style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:18px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0; font-size:1.05em; font-family:'Courier New',monospace; color:#c7d2fe;">
    Gini = 1 − p₊² − p₋²
  </p>
</div>

<p>
  The Gini curve peaks at <strong>0.5</strong> (for two classes) when the split is perfectly balanced,
  compared to Entropy which peaks at <strong>1.0</strong>.  Gini is faster to compute because it
  avoids logarithm calculations, but both measures lead to very similar tree structures in practice.
</p>

<!-- SVG — Entropy vs Gini Comparison -->
<div style="text-align:center; margin: 36px 0;">
  <svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:620px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <filter id="cmpGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Title -->
    <text x="310" y="24" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      IMPURITY MEASURES COMPARISON
    </text>

    <!-- Grid -->
    <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
      <line x1="80" y1="250" x2="560" y2="250"/>
      <line x1="80" y1="183" x2="560" y2="183"/>
      <line x1="80" y1="116" x2="560" y2="116"/>
      <line x1="80" y1="50"  x2="560" y2="50"/>
      <line x1="320" y1="40" x2="320" y2="260"/>
    </g>

    <!-- Axes -->
    <line x1="80"  y1="250" x2="565" y2="250" stroke="#475569" stroke-width="2"/>
    <line x1="80"  y1="40"  x2="80"  y2="255" stroke="#475569" stroke-width="2"/>
    <polygon points="565,247 572,250 565,253" fill="#475569"/>
    <polygon points="77,40 80,33 83,40" fill="#475569"/>

    <!-- Y-axis labels — scale: max=1.0 maps to y=50, i.e. range=200px -->
    <text x="68" y="54"  text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">1.0</text>
    <text x="68" y="121" text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.5</text>
    <text x="68" y="254" text-anchor="end" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.0</text>

    <!-- X-axis labels -->
    <text x="80"  y="268" text-anchor="middle" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.0</text>
    <text x="320" y="268" text-anchor="middle" fill="#64748b" font-size="10" font-family="'Courier New',monospace">0.5</text>
    <text x="560" y="268" text-anchor="middle" fill="#64748b" font-size="10" font-family="'Courier New',monospace">1.0</text>

    <!-- Axis titles -->
    <text x="320" y="284" text-anchor="middle" fill="#94a3b8" font-size="11"
          font-family="'Courier New',monospace">p₊  (proportion positive)</text>
    <text x="22" y="150" text-anchor="middle" fill="#94a3b8" font-size="11"
          font-family="'Courier New',monospace" transform="rotate(-90,22,150)">Impurity</text>

    <!--
      Entropy curve: peak at (0.5, 1.0) → SVG (320, 50)
      Points: p=0→y=250, p=0.5→y=50, p=1→y=250
      Smooth arc: M80,250 Q320,-50 560,250  (control point above for nice bell)
    -->
    <path d="M80,250 Q160,30 320,50 Q480,30 560,250"
          fill="rgba(99,102,241,0.08)" stroke="#818cf8" stroke-width="3"
          stroke-linecap="round" filter="url(#cmpGlow)"/>

    <!--
      Gini curve: peak at (0.5, 0.5) → SVG (320, 150)
      Points: p=0→y=250, p=0.5→y=150, p=1→y=250
    -->
    <path d="M80,250 Q200,120 320,150 Q440,120 560,250"
          fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="3"
          stroke-linecap="round" filter="url(#cmpGlow)"/>

    <!--
      Misclassification error: peak at (0.5, 0.5) → same as Gini but linear
      piecewise: 0→0.5 is linear up then 0.5→1 is linear down
    -->
    <polyline points="80,250 320,150 560,250"
              fill="none" stroke="#f43f5e" stroke-width="2.5"
              stroke-dasharray="7,5" stroke-linecap="round"/>

    <!-- Peak markers -->
    <circle cx="320" cy="50" r="6" fill="#818cf8" filter="url(#cmpGlow)"/>
    <circle cx="320" cy="150" r="6" fill="#fbbf24" filter="url(#cmpGlow)"/>

    <!-- Legend -->
    <rect x="340" y="56" width="180" height="80" rx="8"
          fill="rgba(15,23,42,0.8)" stroke="rgba(148,163,184,0.2)" stroke-width="1"/>
    <line x1="352" y1="76" x2="378" y2="76" stroke="#818cf8" stroke-width="3"/>
    <text x="386" y="80" fill="#a5b4fc" font-size="11" font-family="'Courier New',monospace">Entropy (peak 1.0)</text>
    <line x1="352" y1="96" x2="378" y2="96" stroke="#fbbf24" stroke-width="3"/>
    <text x="386" y="100" fill="#fde68a" font-size="11" font-family="'Courier New',monospace">Gini Index (peak 0.5)</text>
    <line x1="352" y1="116" x2="378" y2="116" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5,4"/>
    <text x="386" y="120" fill="#fca5a5" font-size="11" font-family="'Courier New',monospace">Misclassif. Error</text>
  </svg>
</div>

<!-- ============================================================
     SECTION 6 — PRUNING / OVERFITTING
     ============================================================ -->
<h2>✂️ Pruning Strategies — Fighting Overfitting</h2>
<p>
  A decision tree grown to its <strong>maximum possible depth</strong> will perfectly memorise
  every training example — including noise and outliers.  This is called <strong>overfitting</strong>:
  the model achieves near-zero training error but fails dramatically on unseen data.
</p>

<!-- SVG — Overfitting vs Pruned Concept -->
<div style="text-align:center; margin: 36px 0;">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <filter id="pGlow"><feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Title -->
    <text x="350" y="24" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      OVERFITTING vs PRUNED TREE
    </text>

    <!-- LEFT — Overfitted Tree (complex, many nodes) -->
    <text x="175" y="48" text-anchor="middle" fill="#f43f5e" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">❌ OVERFITTED (Full Depth)</text>

    <!-- Root -->
    <rect x="138" y="58" width="74" height="26" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="175" y="75" text-anchor="middle" fill="#fca5a5" font-size="10" font-family="'Courier New',monospace">Split A</text>
    <!-- L1 -->
    <line x1="160" y1="84" x2="108" y2="108" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.5"/>
    <line x1="190" y1="84" x2="242" y2="108" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.5"/>
    <rect x="82"  y="108" width="52" height="22" rx="5" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="108" y="123" text-anchor="middle" fill="#fca5a5" font-size="9" font-family="'Courier New',monospace">Split B</text>
    <rect x="216" y="108" width="52" height="22" rx="5" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="242" y="123" text-anchor="middle" fill="#fca5a5" font-size="9" font-family="'Courier New',monospace">Split C</text>
    <!-- L2 left -->
    <line x1="96"  y1="130" x2="68"  y2="154" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.4"/>
    <line x1="120" y1="130" x2="148" y2="154" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.4"/>
    <rect x="44"  y="154" width="48" height="20" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="68"  y="168" text-anchor="middle" fill="#fca5a5" font-size="8" font-family="'Courier New',monospace">Split D</text>
    <rect x="124" y="154" width="48" height="20" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="148" y="168" text-anchor="middle" fill="#fca5a5" font-size="8" font-family="'Courier New',monospace">Split E</text>
    <!-- L2 right -->
    <line x1="230" y1="130" x2="202" y2="154" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.4"/>
    <line x1="254" y1="130" x2="282" y2="154" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.4"/>
    <rect x="178" y="154" width="48" height="20" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="202" y="168" text-anchor="middle" fill="#fca5a5" font-size="8" font-family="'Courier New',monospace">Split F</text>
    <rect x="258" y="154" width="48" height="20" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
    <text x="282" y="168" text-anchor="middle" fill="#fca5a5" font-size="8" font-family="'Courier New',monospace">Split G</text>
    <!-- L3 leaves (tiny) -->
    <g fill="#1e293b" stroke="#f43f5e" stroke-width="0.8">
      <rect x="28"  y="188" width="30" height="16" rx="3"/>
      <rect x="62"  y="188" width="30" height="16" rx="3"/>
      <rect x="108" y="188" width="30" height="16" rx="3"/>
      <rect x="142" y="188" width="30" height="16" rx="3"/>
      <rect x="186" y="188" width="30" height="16" rx="3"/>
      <rect x="220" y="188" width="30" height="16" rx="3"/>
      <rect x="266" y="188" width="30" height="16" rx="3"/>
      <rect x="300" y="188" width="30" height="16" rx="3"/>
    </g>

    <!-- Stats -->
    <text x="175" y="224" text-anchor="middle" fill="#f43f5e" font-size="10"
          font-family="'Courier New',monospace">Train acc: 100% | Test acc: 62%</text>
    <text x="175" y="238" text-anchor="middle" fill="#64748b" font-size="9"
          font-family="'Courier New',monospace">Memorised noise!</text>

    <!-- Divider -->
    <line x1="350" y1="45" x2="350" y2="248" stroke="rgba(148,163,184,0.15)"
          stroke-width="1.5" stroke-dasharray="6,4"/>

    <!-- RIGHT — Pruned Tree (simple) -->
    <text x="525" y="48" text-anchor="middle" fill="#10b981" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">✅ PRUNED (Post-Pruning)</text>

    <!-- Root -->
    <rect x="488" y="58" width="74" height="26" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" filter="url(#pGlow)"/>
    <text x="525" y="75" text-anchor="middle" fill="#6ee7b7" font-size="10" font-family="'Courier New',monospace">Split A</text>
    <!-- L1 -->
    <line x1="508" y1="84" x2="460" y2="116" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.6"/>
    <line x1="542" y1="84" x2="590" y2="116" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.6"/>
    <!-- Leaves directly -->
    <rect x="424" y="116" width="72" height="32" rx="8" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1.5"/>
    <text x="460" y="136" text-anchor="middle" fill="#6ee7b7" font-size="12"
          font-family="'Courier New',monospace">✅ HIRE</text>
    <rect x="554" y="116" width="72" height="32" rx="8" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="590" y="136" text-anchor="middle" fill="#fca5a5" font-size="12"
          font-family="'Courier New',monospace">❌ PASS</text>

    <!-- Stats -->
    <text x="525" y="186" text-anchor="middle" fill="#10b981" font-size="10"
          font-family="'Courier New',monospace">Train acc: 88% | Test acc: 85%</text>
    <text x="525" y="200" text-anchor="middle" fill="#64748b" font-size="9"
          font-family="'Courier New',monospace">Generalises well!</text>

    <!-- Post-pruning badge -->
    <rect x="420" y="214" width="210" height="28" rx="8"
          fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
    <text x="525" y="232" text-anchor="middle" fill="#6ee7b7" font-size="10"
          font-family="'Courier New',monospace">Strategy: Grow deep → Prune with validation set</text>
  </svg>
</div>

<p>Two main pruning strategies exist:</p>
<ol>
  <li>
    <strong>Pre-pruning (Early Stopping):</strong> Stop growing the tree before it reaches
    full depth. The drawback is that it is difficult to know exactly <em>when</em> to stop —
    a branch that seems unhelpful now might become useful later.
  </li>
  <li>
    <strong>Post-pruning</strong> (recommended best practice): Grow a full, complex tree first,
    then remove subtrees that do not improve performance on a held-out <em>validation set</em>.
    Also includes <em>rule post-pruning</em> (convert tree to rules, then prune redundant conditions).
  </li>
</ol>

<!-- ============================================================
     SECTION 7 — NUMERICAL FEATURES
     ============================================================ -->
<h2>🔢 Handling Numerical Features</h2>
<p>
  C4.5 extends ID3's handling of purely categorical data to support <strong>continuous/numerical
  attributes</strong> (e.g., GPA, years of experience, papers published).  It does this by
  evaluating candidate <em>threshold splits</em>: for each numerical feature, it tries splitting
  at every midpoint between consecutive sorted values, computing the Information Gain for each
  threshold, and selecting the best one.
</p>
<p>
  For example, if GPA values are {3.2, 3.5, 3.7, 3.9}, C4.5 would try thresholds like
  GPA ≤ 3.35, GPA ≤ 3.6, and GPA ≤ 3.8, then pick whichever yields the highest gain.
</p>

<!-- ============================================================
     SECTION 8 — PRACTICAL CONSIDERATIONS
     ============================================================ -->
<h2>🛠️ Practical Considerations</h2>

<ol>
  <li>
    <strong>Dimensionality Reduction:</strong> Before training, consider applying PCA or
    feature selection to reduce the number of features to the most discriminative ones.
    This speeds up training and often improves generalisation.
  </li>
  <li>
    <strong>Ensemble Methods (the real solution to instability):</strong> A single decision
    tree is inherently unstable — a tiny change in the training data can produce a completely
    different tree (high variance).  <strong>Random Forests</strong> fix this by training
    hundreds of trees on random subsets of data and features, then averaging their predictions.
    Empirically shown to be one of the best-performing general-purpose classifiers
    (Caruana &amp; Niculescu-Mizil, ICML 2006).
  </li>
  <li>
    <strong>Imbalanced Datasets:</strong> If 90% of examples belong to one class, the tree
    will greedily lean toward always predicting that class (high accuracy, zero usefulness).
    Solutions:
    <ul>
      <li><strong>Under-sampling:</strong> Randomly remove examples from the majority class.</li>
      <li><strong>Over-sampling:</strong> Synthetically generate new examples for the minority
          class using algorithms like <strong>SMOTE</strong> or <strong>ADASYN</strong>.</li>
    </ul>
  </li>
</ol>

<!-- ============================================================
     SECTION 9 — PROS & CONS
     ============================================================ -->
<h2>⚖️ Decision Trees: Pros &amp; Cons</h2>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:24px 0;">
  <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.4);
              border-radius:14px; padding:18px 22px;">
    <h3 style="color:#34d399; margin:0 0 14px; display:flex; align-items:center; gap:8px; font-size:1em;">
      ✅ Advantages
    </h3>
    <ul style="margin:0; padding-left:18px; color:#a7f3d0; line-height:1.8; font-size:0.93em;">
      <li>Highly intuitive and interpretable — a non-expert can read the tree.</li>
      <li>Can be trivially converted into IF-THEN rule sets.</li>
      <li>Natively handles categorical features — no encoding required.</li>
      <li>No need to scale or normalise features.</li>
      <li>Simple and fast to build for small-medium datasets.</li>
    </ul>
  </div>
  <div style="background:rgba(244,63,94,0.08); border:1px solid rgba(244,63,94,0.4);
              border-radius:14px; padding:18px 22px;">
    <h3 style="color:#fb7185; margin:0 0 14px; display:flex; align-items:center; gap:8px; font-size:1em;">
      ❌ Disadvantages
    </h3>
    <ul style="margin:0; padding-left:18px; color:#fecdd3; line-height:1.8; font-size:0.93em;">
      <li><strong>High instability (variance):</strong> tiny data changes → completely different tree.</li>
      <li>Univariate splits only — cannot combine features in a single split.</li>
      <li>Greedy choices are locally optimal, not globally optimal.</li>
      <li>Highly sensitive to imbalanced class distributions.</li>
      <li>Prone to severe overfitting without careful pruning.</li>
    </ul>
  </div>
</div>
`,

        bodyAr: `
<h2>🌳 ما هي مصنفات شجرة القرار؟</h2>
<p>
  أشجار القرار (Decision Trees) من أشهر طرق التصنيف في التعلم الآلي وأكثرها قابليةً للتفسير البشري.
  فهي تحاكي طريقة تفكيرنا الفعلية في اتخاذ القرارات: سلسلة من أسئلة نعم/لا تقودنا إلى نتيجة.
  لا تفترض أي علاقة خطية بين المتغيرات، وتتعامل بشكل أصيل مع البيانات الفئوية.
</p>

<h3>📜 لمحة تاريخية</h3>
<ul>
  <li><strong>CART</strong> — فريدمان، 1977. يستخدم الانقسامات الثنائية ومؤشر جيني.</li>
  <li><strong>ID3</strong> (المتعدد الفئوي التكراري) — روس كوينلان، 1979. نهج جشعي من الأعلى لأسفل باستخدام إنتروبيا المعلومات.</li>
  <li><strong>C4.5</strong> — كوينلان، 1983. خلف ID3؛ يدعم الخصائص الرقمية والتقليم.</li>
</ul>

<h2>🌱 كيف تنمو شجرة القرار؟</h2>
<p>
  رغم اسم "شجرة"، فإن شجرة القرار تنمو من <strong>الجذر إلى الأسفل</strong>.
  تبدأ بعقدة جذر تحتوي على جميع بيانات التدريب، ثم تختار جشعياً أفضل خاصية للتقسيم،
  وتكرر هذه العملية بشكل متكرر لكل عقدة أبناء حتى تصبح العقدة نقية أو يتحقق شرط التوقف.
</p>

<h2>📐 مقياس التقسيم: إنتروبيا المعلومات (C4.5/ID3)</h2>
<p>
  السؤال الجوهري في بناء الشجرة: أي خاصية نقسّم عليها؟ نحتاج لمقياس رياضي يقيس مدى "اختلاط" أو "نقاء" العقدة.
  المقياس المثالي المستعار من نظرية المعلومات هو <strong>الإنتروبيا</strong>:
</p>
<div style="background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:20px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0; font-size:1.05em; font-family:'Courier New',monospace; color:#c7d2fe;">
    Entropy(S) = − p₊ · log₂(p₊) − p₋ · log₂(p₋)
  </p>
</div>
<ul>
  <li><strong>إنتروبيا قصوى = 1.0</strong> عند توازن الفئات تماماً (50% / 50%) — أقصى درجات الفوضى.</li>
  <li><strong>إنتروبيا دنيا = 0.0</strong> عندما تكون العقدة نقية تماماً لفئة واحدة — يقين كامل.</li>
</ul>

<h2>📊 كسب المعلومات — اختيار أفضل تقسيم</h2>
<p>
  لتحديد الخاصية الأفضل للتقسيم، نحسب <strong>كسب المعلومات</strong>:
  النقصان المتوقع في الإنتروبيا عند التقسيم بناءً على خاصية معينة.
  الخوارزمية تختار الخاصية ذات كسب المعلومات الأعلى جشعياً.
</p>

<h2>⚙️ CART ومؤشر جيني</h2>
<p>
  تختلف CART عن C4.5 في أمرين جوهريين:
  تُجبر على الانقسامات الثنائية (فرعان فقط لكل عقدة)، وتعتمد على <strong>مؤشر جيني</strong> بدلاً من الإنتروبيا:
</p>
<div style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:16px 28px; margin:14px 0; text-align:center;">
  <p style="margin:0; font-family:'Courier New',monospace; color:#c7d2fe;">Gini = 1 − p₊² − p₋²</p>
</div>
<p>مؤشر جيني أسرع حسابياً (لا لوغاريتمات)، لكن كلاهما يُنتج هياكل شجرية متشابهة عملياً.</p>

<h2>✂️ التقليم — مكافحة الموائمة الزائدة</h2>
<p>
  الشجرة التي تنمو لأقصى عمق ستحفظ كل بيانات التدريب شاملاً الشوائب والقيم الشاذة (Overfitting).
  أفضل استراتيجيتين:
</p>
<ol>
  <li><strong>التقليم المسبق (Pre-pruning):</strong> إيقاف النمو مبكراً (صعب تحديد متى بالضبط).</li>
  <li><strong>التقليم اللاحق (Post-pruning) — الأفضل:</strong> دع الشجرة تنمو كاملاً ثم اقطع الفروع باستخدام بيانات تحقق، مع ضمان عدم تدهور الأداء.</li>
</ol>

<h2>⚖️ مزايا وعيوب أشجار القرار</h2>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin:20px 0;">
  <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.4);
              border-radius:12px; padding:16px;">
    <h3 style="color:#34d399; margin:0 0 12px;">✅ المزايا</h3>
    <ul style="color:#a7f3d0; line-height:1.9; font-size:0.92em; margin:0; padding-left:16px;">
      <li>بديهية للغاية وقابلة للتفسير من غير المتخصصين.</li>
      <li>تُحوَّل بسهولة لقواعد إذا-ثم (IF-THEN).</li>
      <li>تتعامل مع البيانات الفئوية بشكل أصيل دون ترميز.</li>
      <li>لا تحتاج لتوحيد أو تطبيع المتغيرات (Feature Scaling).</li>
    </ul>
  </div>
  <div style="background:rgba(244,63,94,0.08); border:1px solid rgba(244,63,94,0.4);
              border-radius:12px; padding:16px;">
    <h3 style="color:#fb7185; margin:0 0 12px;">❌ العيوب</h3>
    <ul style="color:#fecdd3; line-height:1.9; font-size:0.92em; margin:0; padding-left:16px;">
      <li>عدم الاستقرار العالي: تغيير طفيف يغير الشجرة كلياً.</li>
      <li>تقسيمات أحادية فقط، لا تدمج خصائص متعددة.</li>
      <li>حساسة جداً لاختلال توازن البيانات.</li>
      <li>تميل للموائمة الزائدة دون تقليم دقيق.</li>
    </ul>
  </div>
</div>
`
      }
    }
  ],

  summary: {
    points: [
      "ID3 and C4.5 build trees top-down using Information Entropy and Information Gain to greedily select the best feature at each node.",
      "CART builds strictly binary trees using the Gini Index instead of Entropy, making it computationally faster.",
      "Entropy is 0.0 when a node is pure (all one class) and reaches its maximum (1.0 for binary) when classes are perfectly balanced.",
      "Information Gain measures the expected reduction in entropy from splitting on a given feature; the feature with the highest gain is chosen.",
      "Growing a tree to full depth causes severe overfitting. Post-pruning with a validation set is the recommended best strategy.",
      "Single decision trees are highly unstable (high variance). Ensemble methods like Random Forests provide dramatically better real-world performance.",
      "Dataset imbalance must be addressed before training (via SMOTE, ADASYN, or under-sampling) to prevent biased trees."
    ],
    pointsAr: [
      "خوارزميات ID3 وC4.5 تبني الأشجار من الأعلى لأسفل باستخدام الإنتروبيا وكسب المعلومات لاختيار أفضل خاصية جشعياً.",
      "خوارزمية CART تبني أشجاراً ثنائية حصراً وتعتمد على مؤشر جيني بدلاً من الإنتروبيا لكونه أسرع حسابياً.",
      "الإنتروبيا تساوي 0.0 عند نقاء العقدة وتبلغ ذروتها (1.0 للتصنيف الثنائي) عند التساوي التام بين الفئات.",
      "كسب المعلومات يقيس النقصان المتوقع في الإنتروبيا عند التقسيم؛ تُختار الخاصية ذات الكسب الأعلى.",
      "النمو الكامل للشجرة يسبب الموائمة الزائدة. التقليم اللاحق (Post-pruning) باستخدام بيانات التحقق هو الاستراتيجية الأفضل.",
      "أشجار القرار المنفردة غير مستقرة (تباين عالٍ). تقنيات التجميع مثل Random Forest توفر أداءً أفضل بكثير في التطبيق العملي.",
      "يجب معالجة اختلال توازن البيانات قبل التدريب (عبر SMOTE أو ADASYN أو التقليل من الفئة الأغلب) لمنع انحياز الشجرة."
    ]
  },

  mcq: [
    {
      id: 'ml-l8-q1',
      question: "Which of the following splitting criteria is strictly utilized by the CART decision tree algorithm natively?",
      questionAr: "أي من معايير التقسيم التالية تُستخدم حصرياً وبشكل أصيل في خوارزمية شجرة القرار CART؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Information Entropy completely', isCorrect: false },
        { id: 'b', text: 'The Gini Index exclusively', isCorrect: true },
        { id: 'c', text: 'Mean Squared Error directly', isCorrect: false },
        { id: 'd', text: 'Sigmoid Probability mapping inherently', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q2',
      question: "If a decision tree node contains exactly 50 positive examples and 50 negative examples, what is the exact mathematical Entropy of that node?",
      questionAr: "إذا كانت عقدة شجرة القرار تحتوي على 50 عينة إيجابية و 50 عينة سلبية تماماً، فما هو حساب الإنتروبيا (Entropy) الدقيق لهذه العقدة رياضياً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.0 natively', isCorrect: false },
        { id: 'b', text: '0.5 logically', isCorrect: false },
        { id: 'c', text: '1.0 intrinsically', isCorrect: true },
        { id: 'd', text: 'Infinity due to log scaling', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q3',
      question: "Which algorithm from the Decision Tree family natively supports handling numerical features and post-pruning intrinsically?",
      questionAr: "أي خوارزمية من عائلة أشجار القرار تدعم بشكل أساسي معالجة الخصائص الرقمية (Numerical features) وعملية التقليم اللاحق؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'ID3 exclusively', isCorrect: false },
        { id: 'b', text: 'Perceptron definitively', isCorrect: false },
        { id: 'c', text: 'C4.5 algorithm natively', isCorrect: true },
        { id: 'd', text: 'Linear Discriminant internally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q4',
      question: "The 'Information Gain' metric explicitly calculates the expected reduction in which mathematical property?",
      questionAr: "مقياس 'كسب المعلومات' (Information Gain) يقوم صراحةً بحساب مقدار النقصان المتوقع في أي خاصية رياضية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Distance geometrically', isCorrect: false },
        { id: 'b', text: 'Entropy (Impurity) inherently', isCorrect: true },
        { id: 'c', text: 'Variance natively', isCorrect: false },
        { id: 'd', text: 'Gini coefficient identically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q5',
      question: "What is widely considered the BEST strategy to combat severe overfitting in Decision Tree architectures?",
      questionAr: "ما هي الاستراتيجية التي تُعتبر الأفضل عالمياً لمحاربة ظاهرة الموائمة الزائدة (Overfitting) الشديدة في هياكل أشجار القرار؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Stopping the tree at exactly depth 2 strictly', isCorrect: false },
        { id: 'b', text: 'Growing a complex deep tree, then applying post-pruning using a validation set effectively', isCorrect: true },
        { id: 'c', text: 'Forcing multi-way splits on every node uniformly', isCorrect: false },
        { id: 'd', text: 'Transforming categorical data into continuous variables universally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q6',
      question: "Why does CART differ structurally from ID3/C4.5 in how it branches nodes geometrically?",
      questionAr: "لماذا تختلف CART هيكلياً عن ID3/C4.5 في كيفية تفريع العقد هندسياً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'CART refuses to branch categorically', isCorrect: false },
        { id: 'b', text: 'CART strictly enforces binary splits (only 2 children per node) instead of multi-way splits natively', isCorrect: true },
        { id: 'c', text: 'CART splits exclusively upward structurally', isCorrect: false },
        { id: 'd', text: 'CART requires exactly 3 branches per node universally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q7',
      question: "Which of the following is a significant structural disadvantage (Con) of a single standard Decision Tree?",
      questionAr: "أي مما يلي يُعد عيباً هيكلياً كبيراً (Disadvantage) لشجرة قرار اعتيادية منفردة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'It requires intense mathematical feature scaling universally', isCorrect: false },
        { id: 'b', text: 'It cannot process categorical text data natively', isCorrect: false },
        { id: 'c', text: 'It is highly unstable; a slight change in training data radically alters the entire tree structure violently', isCorrect: true },
        { id: 'd', text: 'It is impossible to interpret geometrically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l8-q8',
      question: "If a target dataset has 90% Class A and 10% Class B, what must you do before training a Decision Tree to prevent fatal bias?",
      questionAr: "إذا كانت قاعدة البيانات المستهدفة تحتوي على 90% للفئة A و 10% للفئة B، ماذا يجب أن تفعل قبل تدريب شجرة القرار لمنع الانحياز القاتل؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Balance the dataset using Over-sampling (SMOTE) or Under-sampling natively', isCorrect: true },
        { id: 'b', text: 'Scale all inputs between 0 and 1 strictly', isCorrect: false },
        { id: 'c', text: 'Use Euclidean distance measures inherently', isCorrect: false },
        { id: 'd', text: 'Multiply weights by 0.5 continuously', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l8-w1',
      question: "Mathematically define the formula for Entropy in a binary classification problem. At what probabilities does Entropy reach its absolute maximum and absolute minimum bounds?",
      questionAr: "عرّف رياضياً صيغة الإنتروبيا (Entropy) في مسألة تصنيف ثنائي. عند أي احتمالات تصل الإنتروبيا إلى حدودها القصوى المطلقة والدنيا المطلقة؟",
      modelAnswer: "Entropy(S) = −p₊·log₂(p₊) − p₋·log₂(p₋). Maximum entropy (1.0) occurs when p₊ = p₋ = 0.5 — perfectly balanced, maximum impurity. Minimum entropy (0.0) occurs when p₊ = 1 or p₋ = 1 — the node is completely pure, containing examples of only one class.",
      modelAnswerAr: "Entropy(S) = −p₊·log₂(p₊) − p₋·log₂(p₋). الإنتروبيا القصوى (1.0) عند p₊ = p₋ = 0.5 — توازن مثالي وأقصى اختلاط. الإنتروبيا الدنيا (0.0) عند p₊ = 1 أو p₋ = 1 — العقدة نقية كلياً لفئة واحدة."
    },
    {
      id: 'ml-l8-w2',
      question: "Explain deeply why building a Decision Tree to its absolute maximum depth without pruning is geometrically dangerous for real-world predictions.",
      questionAr: "اشرح بعمق لماذا بناء شجرة قرار للحد الأقصى المطلق لعمقها دون تقليم (Pruning) يُعد خطراً هندسياً على التنبؤات في العالم الحقيقي.",
      modelAnswer: "A fully-grown tree creates a decision boundary that isolates every single training example, including random noise and outliers. This produces a highly complex, overfitted model that achieves near-100% training accuracy but fails to generalise to unseen data because it has learned the noise rather than the underlying pattern. Post-pruning removes subtrees that don't improve validation performance, forcing the model to learn smoother, more generalisable decision boundaries.",
      modelAnswerAr: "الشجرة ذات العمق الأقصى تخلق حدود قرار تعزل كل عينة تدريب بشكل منفرد، بما في ذلك الشوائب والقيم الشاذة. ينتج عن ذلك نموذج بالغ التعقيد يحقق دقة تدريب تقترب من 100% لكنه يفشل في التعميم على البيانات الجديدة لأنه تعلّم الضوضاء لا النمط الحقيقي. التقليم اللاحق يُزيل الفروع التي لا تُحسّن أداء التحقق، مما يجبر النموذج على تعلّم حدود قرار أكثر سلاسة وقابلية للتعميم."
    },
    {
      id: 'ml-l8-w3',
      question: "Contrast the core geometric algorithmic split differences between C4.5 and CART architectures explicitly.",
      questionAr: "قارن صراحةً الفروقات الهندسية الجوهرية في خوارزميات التقسيم بين هياكل C4.5 و CART.",
      modelAnswer: "C4.5 uses Information Entropy to compute Information Gain, and allows multi-way splits — a categorical attribute with k values creates k branches simultaneously (e.g., splitting 'Work Experience' into Web Dev, Mobile Dev, UX Design in one step). CART uses the Gini Index and enforces strictly binary splits only, meaning categorical attributes must be binarised (e.g., 'Is Java?' Yes/No). CART's binary structure makes tree traversal faster and is easier to extend to regression problems.",
      modelAnswerAr: "C4.5 تعتمد على إنتروبيا المعلومات لحساب كسب المعلومات، وتسمح بالانقسامات المتعددة — الخاصية الفئوية ذات k قيمة تخلق k فروعاً دفعةً واحدة (مثل تقسيم 'الخبرة العملية' لـ Web Dev وMobile Dev وUX Design معاً). CART تعتمد على مؤشر جيني وتُجبر على الانقسامات الثنائية حصراً، مما يعني تحويل الخصائص الفئوية لصيغة ثنائية (مثل 'هل يستخدم Java؟ نعم/لا'). الهيكل الثنائي لـ CART يجعل اجتياز الشجرة أسرع ويُسهّل توسيعها لمسائل الانحدار."
    }
  ]
};