export const LECTURE = {
  subjectId: 'machine-learning',
  number: 9,
  title: 'Naive Bayes Classifier',
  titleAr: 'مصنف بايز الساذج (Naive Bayes)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<!-- ============================================================
     SECTION 1 — CONDITIONAL PROBABILITY & BAYES RULE
     ============================================================ -->
<h2>🎲 Conditional Probability</h2>
<p>
  Before building the Naive Bayes classifier, we need a solid grasp of
  <strong>conditional probability</strong> — the probability of event A
  <em>given that</em> event B has already occurred:
</p>

<div style="background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0 0 8px; font-size:1.05em; font-family:'Courier New',monospace; color:#c7d2fe;">
    p(A | B) = p(A ∧ B) / p(B)
  </p>
  <p style="margin:0; font-size:0.9em; font-family:'Courier New',monospace; color:#94a3b8;">
    equivalently: &nbsp;&nbsp; p(A ∧ B) = p(A | B) · p(B)
  </p>
</div>

<p>
  Think of it as <em>zooming into</em> the region where B is true and asking:
  within that region, how often does A also hold?
</p>

<!-- SVG — Venn diagram for conditional probability -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:540px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <filter id="vGlow">
        <feGaussianBlur stdDeviation="4" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <clipPath id="clipB">
        <circle cx="300" cy="118" r="85"/>
      </clipPath>
    </defs>

    <!-- Title -->
    <text x="270" y="22" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      CONDITIONAL PROBABILITY — VENN VIEW
    </text>

    <!-- Circle A -->
    <circle cx="220" cy="118" r="85" fill="rgba(99,102,241,0.18)"
            stroke="#818cf8" stroke-width="2" filter="url(#vGlow)"/>
    <!-- Circle B -->
    <circle cx="300" cy="118" r="85" fill="rgba(14,165,233,0.18)"
            stroke="#38bdf8" stroke-width="2" filter="url(#vGlow)"/>

    <!-- Intersection fill (A ∧ B) — clip to B, fill with brighter blend -->
    <circle cx="220" cy="118" r="85" fill="rgba(139,92,246,0.38)"
            clip-path="url(#clipB)"/>

    <!-- Labels -->
    <text x="178" y="112" text-anchor="middle" fill="#a5b4fc" font-size="15"
          font-family="'Courier New',monospace" font-weight="bold">A</text>
    <text x="178" y="130" text-anchor="middle" fill="#a5b4fc" font-size="10"
          font-family="'Courier New',monospace">only</text>

    <text x="362" y="112" text-anchor="middle" fill="#7dd3fc" font-size="15"
          font-family="'Courier New',monospace" font-weight="bold">B</text>
    <text x="362" y="130" text-anchor="middle" fill="#7dd3fc" font-size="10"
          font-family="'Courier New',monospace">only</text>

    <text x="261" y="108" text-anchor="middle" fill="#e879f9" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold">A∧B</text>
    <text x="261" y="124" text-anchor="middle" fill="#e879f9" font-size="10"
          font-family="'Courier New',monospace">both</text>

    <!-- Annotation: p(A|B) = shaded / B -->
    <line x1="300" y1="205" x2="261" y2="148" stroke="#e879f9"
          stroke-width="1.5" stroke-dasharray="5,3"/>
    <rect x="240" y="208" width="220" height="24" rx="6"
          fill="rgba(232,121,249,0.1)" stroke="rgba(232,121,249,0.35)" stroke-width="1"/>
    <text x="350" y="224" text-anchor="middle" fill="#e879f9" font-size="11"
          font-family="'Courier New',monospace">p(A|B) = area(A∧B) / area(B)</text>
  </svg>
</div>

<!-- ============================================================
     SECTION 2 — BAYES RULE
     ============================================================ -->
<h2>⚖️ Bayes Rule</h2>
<p>
  Since we can write the joint probability p(A ∧ B) in two symmetric ways,
  equating them yields the famous <strong>Bayes Rule</strong>:
</p>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:16px 0;">
  <div style="background:rgba(99,102,241,0.1); border:1px solid rgba(99,102,241,0.35);
              border-radius:12px; padding:16px; text-align:center;">
    <p style="margin:0 0 6px; color:#94a3b8; font-size:0.85em; font-family:'Courier New',monospace;">Way 1</p>
    <p style="margin:0; font-family:'Courier New',monospace; color:#c7d2fe; font-size:1em;">
      p(A ∧ B) = p(B|A) · p(A)
    </p>
  </div>
  <div style="background:rgba(14,165,233,0.1); border:1px solid rgba(14,165,233,0.35);
              border-radius:12px; padding:16px; text-align:center;">
    <p style="margin:0 0 6px; color:#94a3b8; font-size:0.85em; font-family:'Courier New',monospace;">Way 2</p>
    <p style="margin:0; font-family:'Courier New',monospace; color:#bae6fd; font-size:1em;">
      p(A ∧ B) = p(A|B) · p(B)
    </p>
  </div>
</div>

<div style="background:rgba(251,191,36,0.1); border:2px solid rgba(251,191,36,0.45);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0 0 6px; color:#fbbf24; font-size:0.9em; font-family:'Courier New',monospace; font-weight:bold;">
    BAYES RULE
  </p>
  <p style="margin:0; font-size:1.15em; font-family:'Courier New',monospace; color:#fde68a;">
    p(A|B) = [ p(B|A) · p(A) ] / p(B)
  </p>
</div>

<p>Each term has a name that carries deep meaning:</p>

<!-- SVG — Bayes Rule Term Anatomy -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <filter id="bGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Central formula -->
    <text x="340" y="52" text-anchor="middle" fill="#fde68a" font-size="20"
          font-family="'Courier New',monospace" font-weight="bold">
      p(A|B)  =  p(B|A) · p(A)  /  p(B)
    </text>
    <!-- Underline -->
    <line x1="60" y1="60" x2="620" y2="60" stroke="rgba(148,163,184,0.15)" stroke-width="1"/>

    <!-- Term 1: Posterior -->
    <line x1="100" y1="60" x2="100" y2="90" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="30" y="90" width="140" height="52" rx="8"
          fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="1.5" filter="url(#bGlow)"/>
    <text x="100" y="112" text-anchor="middle" fill="#34d399" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">POSTERIOR</text>
    <text x="100" y="130" text-anchor="middle" fill="#6ee7b7" font-size="10"
          font-family="'Courier New',monospace">p(A|B)</text>

    <!-- Term 2: Likelihood -->
    <line x1="290" y1="60" x2="290" y2="90" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="220" y="90" width="140" height="52" rx="8"
          fill="rgba(99,102,241,0.12)" stroke="#818cf8" stroke-width="1.5" filter="url(#bGlow)"/>
    <text x="290" y="112" text-anchor="middle" fill="#a5b4fc" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">LIKELIHOOD</text>
    <text x="290" y="130" text-anchor="middle" fill="#c7d2fe" font-size="10"
          font-family="'Courier New',monospace">p(B|A)</text>

    <!-- Term 3: Prior -->
    <line x1="440" y1="60" x2="440" y2="90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="370" y="90" width="140" height="52" rx="8"
          fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="1.5" filter="url(#bGlow)"/>
    <text x="440" y="112" text-anchor="middle" fill="#fbbf24" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">PRIOR</text>
    <text x="440" y="130" text-anchor="middle" fill="#fde68a" font-size="10"
          font-family="'Courier New',monospace">p(A)</text>

    <!-- Term 4: Evidence -->
    <line x1="590" y1="60" x2="590" y2="90" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="520" y="90" width="140" height="52" rx="8"
          fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="1.5" filter="url(#bGlow)"/>
    <text x="590" y="112" text-anchor="middle" fill="#fb7185" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">EVIDENCE</text>
    <text x="590" y="130" text-anchor="middle" fill="#fca5a5" font-size="10"
          font-family="'Courier New',monospace">p(B)</text>

    <!-- Bottom descriptions -->
    <text x="100" y="168" text-anchor="middle" fill="#6ee7b7" font-size="9.5"
          font-family="'Courier New',monospace">Updated belief</text>
    <text x="290" y="168" text-anchor="middle" fill="#c7d2fe" font-size="9.5"
          font-family="'Courier New',monospace">How likely B under A</text>
    <text x="440" y="168" text-anchor="middle" fill="#fde68a" font-size="9.5"
          font-family="'Courier New',monospace">Belief before seeing B</text>
    <text x="590" y="168" text-anchor="middle" fill="#fca5a5" font-size="9.5"
          font-family="'Courier New',monospace">Normalisation constant</text>
  </svg>
</div>

<!-- Cancer Example -->
<div style="background:rgba(30,58,138,0.18); border:1px solid rgba(59,130,246,0.45);
            border-radius:14px; padding:22px 28px; margin:24px 0;">
  <p style="margin:0 0 12px; font-size:1em; color:#93c5fd; font-weight:bold;">
    🏥 Worked Example — Cancer Diagnosis
  </p>
  <p style="color:#cbd5e1; margin:0 0 10px;">
    A: patient has cancer &nbsp;|&nbsp; B: patient tests positive
  </p>
  <ul style="color:#94a3b8; margin:0 0 12px; padding-left:20px; font-family:'Courier New',monospace; font-size:0.9em; line-height:1.9;">
    <li>p(A)      = 0.008 &nbsp;← cancer prevalence (prior, very low)</li>
    <li>p(B|A)    = 0.98  &nbsp;← test sensitivity (98% true positive)</li>
    <li>p(B|¬A)   = 0.03  &nbsp;← false positive rate (3%)</li>
  </ul>
  <p style="color:#94a3b8; margin:0 0 6px; font-family:'Courier New',monospace; font-size:0.9em;">
    p(A|B) = (0.98 × 0.008) / (0.98 × 0.008 + 0.03 × 0.992)
  </p>
  <p style="color:#fbbf24; margin:0; font-family:'Courier New',monospace; font-size:0.95em; font-weight:bold;">
    p(A|B) = 0.0078 / (0.0078 + 0.0298) ≈ 0.21
  </p>
  <p style="color:#64748b; margin:10px 0 0; font-size:0.88em;">
    ⚠️ Even with a 98% accurate test, a positive result only means 21% chance of actually having cancer —
    because the prior probability of cancer is so low.  This is the <em>base rate fallacy</em>.
  </p>
</div>

<!-- ============================================================
     SECTION 3 — DISCRIMINATIVE vs GENERATIVE
     ============================================================ -->
<h2>🔀 Discriminative vs. Generative Algorithms</h2>
<p>
  Classification algorithms fall into two philosophical camps depending on
  <em>what they model</em>:
</p>

<!-- SVG — Discriminative vs Generative comparison -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <filter id="dvgGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Title -->
    <text x="350" y="24" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      DISCRIMINATIVE vs GENERATIVE
    </text>

    <!-- LEFT: Discriminative -->
    <rect x="20" y="38" width="310" height="208" rx="14"
          fill="rgba(99,102,241,0.07)" stroke="rgba(99,102,241,0.35)" stroke-width="1.5"/>
    <text x="175" y="62" text-anchor="middle" fill="#818cf8" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold">DISCRIMINATIVE</text>
    <text x="175" y="78" text-anchor="middle" fill="#64748b" font-size="10"
          font-family="'Courier New',monospace">(e.g., Logistic Regression, SVM)</text>

    <!-- Decision boundary illustration -->
    <!-- Class dots -->
    <circle cx="110" cy="130" r="7" fill="#818cf8" filter="url(#dvgGlow)"/>
    <circle cx="130" cy="155" r="7" fill="#818cf8"/>
    <circle cx="95"  cy="160" r="7" fill="#818cf8"/>
    <circle cx="145" cy="140" r="7" fill="#818cf8"/>
    <circle cx="115" cy="175" r="7" fill="#818cf8"/>
    <circle cx="230" cy="128" r="7" fill="#f43f5e" filter="url(#dvgGlow)"/>
    <circle cx="245" cy="155" r="7" fill="#f43f5e"/>
    <circle cx="215" cy="162" r="7" fill="#f43f5e"/>
    <circle cx="260" cy="140" r="7" fill="#f43f5e"/>
    <circle cx="235" cy="175" r="7" fill="#f43f5e"/>
    <!-- Decision boundary line -->
    <line x1="185" y1="95" x2="185" y2="220" stroke="#fbbf24" stroke-width="2.5"
          stroke-dasharray="8,4" filter="url(#dvgGlow)"/>
    <text x="185" y="232" text-anchor="middle" fill="#fbbf24" font-size="10"
          font-family="'Courier New',monospace">decision boundary</text>
    <!-- Labels -->
    <text x="118" y="205" text-anchor="middle" fill="#a5b4fc" font-size="10"
          font-family="'Courier New',monospace">Class A</text>
    <text x="242" y="205" text-anchor="middle" fill="#fca5a5" font-size="10"
          font-family="'Courier New',monospace">Class B</text>

    <!-- Model tag -->
    <rect x="38" y="88" width="138" height="22" rx="5"
          fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.4)" stroke-width="1"/>
    <text x="107" y="103" text-anchor="middle" fill="#c7d2fe" font-size="10"
          font-family="'Courier New',monospace">Models: p(y|x) directly</text>

    <!-- Divider -->
    <line x1="350" y1="42" x2="350" y2="240" stroke="rgba(148,163,184,0.12)"
          stroke-width="1.5" stroke-dasharray="6,4"/>

    <!-- RIGHT: Generative -->
    <rect x="370" y="38" width="310" height="208" rx="14"
          fill="rgba(16,185,129,0.07)" stroke="rgba(16,185,129,0.35)" stroke-width="1.5"/>
    <text x="525" y="62" text-anchor="middle" fill="#10b981" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold">GENERATIVE</text>
    <text x="525" y="78" text-anchor="middle" fill="#64748b" font-size="10"
          font-family="'Courier New',monospace">(e.g., Naive Bayes, GMM)</text>

    <!-- Class A cloud -->
    <ellipse cx="450" cy="150" rx="52" ry="38" fill="rgba(99,102,241,0.18)"
             stroke="#818cf8" stroke-width="1.5" stroke-dasharray="5,3"/>
    <circle cx="435" cy="145" r="6" fill="#818cf8"/>
    <circle cx="455" cy="158" r="6" fill="#818cf8"/>
    <circle cx="448" cy="138" r="6" fill="#818cf8"/>
    <circle cx="468" cy="150" r="6" fill="#818cf8"/>
    <text x="450" y="202" text-anchor="middle" fill="#a5b4fc" font-size="10"
          font-family="'Courier New',monospace">model of Class A</text>

    <!-- Class B cloud -->
    <ellipse cx="595" cy="148" rx="52" ry="38" fill="rgba(244,63,94,0.15)"
             stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5,3"/>
    <circle cx="580" cy="142" r="6" fill="#f43f5e"/>
    <circle cx="600" cy="156" r="6" fill="#f43f5e"/>
    <circle cx="593" cy="136" r="6" fill="#f43f5e"/>
    <circle cx="614" cy="148" r="6" fill="#f43f5e"/>
    <text x="595" y="202" text-anchor="middle" fill="#fca5a5" font-size="10"
          font-family="'Courier New',monospace">model of Class B</text>

    <!-- Model tag -->
    <rect x="388" y="88" width="168" height="22" rx="5"
          fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" stroke-width="1"/>
    <text x="472" y="103" text-anchor="middle" fill="#6ee7b7" font-size="10"
          font-family="'Courier New',monospace">Models: p(x|y) and p(y)</text>

    <!-- New point + match arrows -->
    <circle cx="525" cy="148" r="8" fill="#fbbf24" filter="url(#dvgGlow)"/>
    <text x="525" y="166" text-anchor="middle" fill="#fbbf24" font-size="9"
          font-family="'Courier New',monospace">new x</text>
    <line x1="517" y1="148" x2="502" y2="148" stroke="#fbbf24" stroke-width="1.5"
          marker-end="url(#arrG)"/>
    <line x1="533" y1="148" x2="578" y2="148" stroke="#fbbf24" stroke-width="1.5"
          marker-end="url(#arrG)"/>
    <defs>
      <marker id="arrG" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#fbbf24"/>
      </marker>
    </defs>
    <text x="525" y="232" text-anchor="middle" fill="#fbbf24" font-size="10"
          font-family="'Courier New',monospace">match to best model</text>
  </svg>
</div>

<p>
  <strong>Discriminative algorithms</strong> (like Logistic Regression and SVMs) model
  p(y|x) directly — they learn a decision boundary that separates classes and classify
  a new point by checking which side of the boundary it falls on.
</p>
<p>
  <strong>Generative algorithms</strong> (like Naive Bayes) take a different approach:
  they build a separate statistical model of <em>what each class looks like</em> by modelling
  p(x|y) and p(y). To classify a new point, they ask: "which class's model does this
  point fit best?" They then use Bayes Rule to recover p(y|x):
</p>

<div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.4);
            border-radius:14px; padding:16px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0 0 6px; font-family:'Courier New',monospace; color:#6ee7b7; font-size:1em;">
    argmaxᵧ p(y|x) = argmaxᵧ p(x|y) · p(y) / p(x)
  </p>
  <p style="margin:0; font-family:'Courier New',monospace; color:#34d399; font-size:1em; font-weight:bold;">
    ≈ argmaxᵧ p(x|y) · p(y)
  </p>
  <p style="margin:8px 0 0; color:#64748b; font-size:0.87em;">
    p(x) is constant across classes and can be dropped for argmax
  </p>
</div>

<!-- ============================================================
     SECTION 4 — NAIVE BAYES CLASSIFIER
     ============================================================ -->
<h2>🧠 The Naive Bayes Classifier</h2>
<p>
  Naive Bayes is a <strong>probabilistic generative classifier</strong>. It is called
  <em>naive</em> because of one powerful — and admittedly unrealistic — simplifying
  assumption: given the class label, all features are <strong>conditionally independent</strong>
  of one another.
</p>
<p>
  Without this assumption, estimating p(a₁, a₂, …, aₐ | y) would require seeing
  every possible feature combination many times in the training data — an exponential
  explosion. The naive assumption breaks the joint probability into a product of
  individual ones:
</p>

<div style="background:rgba(251,191,36,0.1); border:2px solid rgba(251,191,36,0.45);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0 0 6px; color:#fbbf24; font-size:0.88em; font-family:'Courier New',monospace; font-weight:bold;">
    NAIVE INDEPENDENCE ASSUMPTION
  </p>
  <p style="margin:0 0 10px; font-family:'Courier New',monospace; color:#fde68a; font-size:1em;">
    p(a₁, a₂, …, aₐ | y) = ∏ⱼ p(aⱼ | y)
  </p>
  <p style="margin:0; color:#fbbf24; font-size:0.88em; font-family:'Courier New',monospace; font-weight:bold;">
    NAIVE BAYES CLASSIFIER
  </p>
  <p style="margin:4px 0 0; font-family:'Courier New',monospace; color:#fde68a; font-size:1.05em;">
    ŷ = argmaxᵧ p(y) · ∏ⱼ p(aⱼ | y)
  </p>
</div>

<p>
  Both terms can now be estimated directly from frequency counts in the training data:
</p>
<ul>
  <li>
    <strong>p(y)</strong> — the <em>class prior</em>: simply count how often each
    label appears and divide by the total number of examples.
  </li>
  <li>
    <strong>p(aⱼ | y)</strong> — the <em>feature likelihood</em>: count how often
    feature j takes value aⱼ among all examples with label y.
  </li>
</ul>

<!-- SVG — NB Classification Flow -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:720px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="flowArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="rgba(148,163,184,0.7)"/>
      </marker>
      <filter id="fGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Title -->
    <text x="360" y="24" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      NAIVE BAYES — CLASSIFICATION PIPELINE
    </text>

    <!-- Step 1: New example -->
    <rect x="20" y="48" width="130" height="60" rx="10"
          fill="rgba(14,165,233,0.15)" stroke="#0ea5e9" stroke-width="1.5" filter="url(#fGlow)"/>
    <text x="85" y="72" text-anchor="middle" fill="#38bdf8" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">NEW EXAMPLE</text>
    <text x="85" y="88" text-anchor="middle" fill="#7dd3fc" font-size="10"
          font-family="'Courier New',monospace">x = (a₁,a₂,…,aₐ)</text>

    <!-- Arrow -->
    <line x1="150" y1="78" x2="188" y2="78" stroke="rgba(148,163,184,0.5)"
          stroke-width="1.5" marker-end="url(#flowArr)"/>

    <!-- Step 2: For each class -->
    <rect x="190" y="38" width="200" height="80" rx="10"
          fill="rgba(99,102,241,0.12)" stroke="#818cf8" stroke-width="1.5"/>
    <text x="290" y="62" text-anchor="middle" fill="#a5b4fc" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">FOR EACH CLASS y:</text>
    <text x="290" y="80" text-anchor="middle" fill="#c7d2fe" font-size="10"
          font-family="'Courier New',monospace">Compute score(y) =</text>
    <text x="290" y="96" text-anchor="middle" fill="#c7d2fe" font-size="10"
          font-family="'Courier New',monospace">p(y) × p(a₁|y) × … × p(aₐ|y)</text>

    <!-- Arrow -->
    <line x1="390" y1="78" x2="428" y2="78" stroke="rgba(148,163,184,0.5)"
          stroke-width="1.5" marker-end="url(#flowArr)"/>

    <!-- Step 3: argmax -->
    <rect x="430" y="48" width="130" height="60" rx="10"
          fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="1.5" filter="url(#fGlow)"/>
    <text x="495" y="72" text-anchor="middle" fill="#fbbf24" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">ARGMAX</text>
    <text x="495" y="88" text-anchor="middle" fill="#fde68a" font-size="10"
          font-family="'Courier New',monospace">Pick highest score</text>

    <!-- Arrow -->
    <line x1="560" y1="78" x2="598" y2="78" stroke="rgba(148,163,184,0.5)"
          stroke-width="1.5" marker-end="url(#flowArr)"/>

    <!-- Step 4: Predicted label -->
    <rect x="600" y="48" width="105" height="60" rx="10"
          fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="1.5" filter="url(#fGlow)"/>
    <text x="652" y="72" text-anchor="middle" fill="#34d399" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">LABEL ŷ</text>
    <text x="652" y="88" text-anchor="middle" fill="#6ee7b7" font-size="10"
          font-family="'Courier New',monospace">Predicted!</text>

    <!-- Bottom: Training phase -->
    <rect x="20" y="160" width="680" height="118" rx="12"
          fill="rgba(15,23,42,0.6)" stroke="rgba(148,163,184,0.12)" stroke-width="1"/>
    <text x="360" y="184" text-anchor="middle" fill="#94a3b8" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">⚙️  TRAINING PHASE  (frequency counting)</text>

    <!-- p(y) box -->
    <rect x="40" y="196" width="190" height="68" rx="8"
          fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
    <text x="135" y="218" text-anchor="middle" fill="#fbbf24" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">Estimate p(y)</text>
    <text x="135" y="234" text-anchor="middle" fill="#fde68a" font-size="10"
          font-family="'Courier New',monospace">p(y) = count(y) / n</text>
    <text x="135" y="252" text-anchor="middle" fill="#94a3b8" font-size="9.5"
          font-family="'Courier New',monospace">e.g. p(yes)=8/14=0.571</text>

    <!-- p(aj|y) box -->
    <rect x="260" y="196" width="420" height="68" rx="8"
          fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.4)" stroke-width="1"/>
    <text x="470" y="218" text-anchor="middle" fill="#a5b4fc" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">Estimate p(aⱼ | y)  for every feature j</text>
    <text x="470" y="234" text-anchor="middle" fill="#c7d2fe" font-size="10"
          font-family="'Courier New',monospace">p(aⱼ|y) = count(aⱼ ∧ y) / count(y)</text>
    <text x="470" y="252" text-anchor="middle" fill="#94a3b8" font-size="9.5"
          font-family="'Courier New',monospace">e.g. p(Java|yes)=6/8=0.75  |  p(Java|no)=1/6=0.167</text>
  </svg>
</div>

<!-- ============================================================
     SECTION 5 — WORKED EXAMPLE
     ============================================================ -->
<h2>🧮 Worked Example — Hiring Dataset</h2>
<p>
  Using the same 14-candidate hiring dataset, we want to predict whether to hire a new
  candidate with profile: <strong>Masters, UX Design, Java, Needs Work Visa = TRUE</strong>.
</p>

<div style="background:rgba(30,58,138,0.18); border:1px solid rgba(59,130,246,0.45);
            border-radius:14px; padding:22px 28px; margin:24px 0;">
  <p style="margin:0 0 14px; font-size:1em; color:#93c5fd; font-weight:bold;">Step 1 — Class Priors</p>
  <p style="color:#94a3b8; margin:0; font-family:'Courier New',monospace; font-size:0.92em; line-height:1.9;">
    p(yes) = 8/14 = 0.571 &nbsp;&nbsp;|&nbsp;&nbsp; p(no) = 6/14 = 0.429
  </p>

  <p style="margin:14px 0 10px; font-size:1em; color:#93c5fd; font-weight:bold;">Step 2 — Feature Likelihoods</p>
  <div style="overflow-x:auto;">
    <table style="width:100%; border-collapse:collapse; font-family:'Courier New',monospace; font-size:0.88em; color:#94a3b8;">
      <thead>
        <tr style="border-bottom:1px solid rgba(148,163,184,0.2);">
          <th style="padding:8px 12px; text-align:left; color:#bae6fd;">Feature</th>
          <th style="padding:8px 12px; text-align:center; color:#6ee7b7;">p(·|yes)</th>
          <th style="padding:8px 12px; text-align:center; color:#fca5a5;">p(·|no)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:6px 12px;">Masters</td>
            <td style="padding:6px 12px; text-align:center;">4/8 = 0.500</td>
            <td style="padding:6px 12px; text-align:center;">1/6 = 0.167</td></tr>
        <tr style="background:rgba(255,255,255,0.03);">
          <td style="padding:6px 12px;">UX Design</td>
            <td style="padding:6px 12px; text-align:center;">2/8 = 0.250</td>
            <td style="padding:6px 12px; text-align:center;">2/6 = 0.333</td></tr>
        <tr><td style="padding:6px 12px;">Java</td>
            <td style="padding:6px 12px; text-align:center;">6/8 = 0.750</td>
            <td style="padding:6px 12px; text-align:center;">1/6 = 0.167</td></tr>
        <tr style="background:rgba(255,255,255,0.03);">
          <td style="padding:6px 12px;">Needs Visa = TRUE</td>
            <td style="padding:6px 12px; text-align:center;">4/8 = 0.500</td>
            <td style="padding:6px 12px; text-align:center;">3/6 = 0.500</td></tr>
      </tbody>
    </table>
  </div>

  <p style="margin:16px 0 10px; font-size:1em; color:#93c5fd; font-weight:bold;">Step 3 — Compute & Compare Scores</p>
  <p style="color:#94a3b8; font-family:'Courier New',monospace; font-size:0.92em; margin:0 0 6px;">
    score(yes) = 0.571 × 0.500 × 0.250 × 0.750 × 0.500 = <strong style="color:#6ee7b7;">0.0268</strong>
  </p>
  <p style="color:#94a3b8; font-family:'Courier New',monospace; font-size:0.92em; margin:0 0 12px;">
    score(no)  = 0.429 × 0.167 × 0.333 × 0.167 × 0.500 = <strong style="color:#fca5a5;">0.0020</strong>
  </p>
  <p style="color:#fbbf24; font-family:'Courier New',monospace; font-size:1em; font-weight:bold; margin:0;">
    ŷ = yes &nbsp;(0.0268 ≫ 0.0020) ✅
  </p>
</div>

<!-- SVG — Score comparison visual -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:560px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <linearGradient id="yesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#34d399"/>
      </linearGradient>
      <linearGradient id="noGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#fb7185"/>
      </linearGradient>
      <filter id="sbGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <text x="280" y="24" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      SCORE COMPARISON
    </text>

    <!-- Yes bar: 0.0268 / 0.0268 ≈ full width of 400px -->
    <text x="100" y="62" text-anchor="end" fill="#34d399" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">YES</text>
    <rect x="110" y="48" width="400" height="28" rx="6" fill="url(#yesGrad)" filter="url(#sbGlow)"/>
    <rect x="110" y="48" width="400" height="10" rx="6" fill="rgba(255,255,255,0.12)"/>
    <text x="520" y="67" fill="#6ee7b7" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">0.0268</text>

    <!-- No bar: 0.0020/0.0268*400 ≈ 30px -->
    <text x="100" y="116" text-anchor="end" fill="#fb7185" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">NO</text>
    <rect x="110" y="102" width="30" height="28" rx="6" fill="url(#noGrad)"/>
    <rect x="110" y="102" width="30" height="10" rx="6" fill="rgba(255,255,255,0.12)"/>
    <text x="148" y="121" fill="#fca5a5" font-size="12"
          font-family="'Courier New',monospace">0.0020</text>

    <!-- Winner label -->
    <text x="310" y="160" text-anchor="middle" fill="#fbbf24" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold">
      ŷ = YES  ✅  (13× higher score)
    </text>
  </svg>
</div>

<!-- ============================================================
     SECTION 6 — M-ESTIMATE (SMOOTHING)
     ============================================================ -->
<h2>🔧 Estimating Probabilities — The m-Estimate</h2>
<p>
  A critical problem arises when a feature value never appears for a given class
  in the training data: its estimated probability becomes <strong>zero</strong>,
  and multiplying by zero wipes out the entire product — even if every other feature
  strongly supports that class. This is called the <em>zero-frequency problem</em>.
</p>
<p>
  The solution is the <strong>m-estimate</strong> (also called Laplace/additive smoothing):
</p>

<div style="background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0 0 8px; font-family:'Courier New',monospace; color:#c7d2fe; font-size:1.05em;">
    p(aⱼ | y) = (nc + m · p) / (ny + m)
  </p>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:14px; text-align:left;">
    <div style="background:rgba(15,23,42,0.5); border-radius:8px; padding:10px 14px;">
      <p style="margin:0; color:#94a3b8; font-size:0.88em; font-family:'Courier New',monospace;">
        <span style="color:#a5b4fc;">ny</span> — total examples with label y
      </p>
    </div>
    <div style="background:rgba(15,23,42,0.5); border-radius:8px; padding:10px 14px;">
      <p style="margin:0; color:#94a3b8; font-size:0.88em; font-family:'Courier New',monospace;">
        <span style="color:#a5b4fc;">nc</span> — examples with label y AND feature = aⱼ
      </p>
    </div>
    <div style="background:rgba(15,23,42,0.5); border-radius:8px; padding:10px 14px;">
      <p style="margin:0; color:#94a3b8; font-size:0.88em; font-family:'Courier New',monospace;">
        <span style="color:#a5b4fc;">m</span>  — equivalent sample size (hyperparameter)
      </p>
    </div>
    <div style="background:rgba(15,23,42,0.5); border-radius:8px; padding:10px 14px;">
      <p style="margin:0; color:#94a3b8; font-size:0.88em; font-family:'Courier New',monospace;">
        <span style="color:#a5b4fc;">p</span>  — prior per value (use 1/k if unknown)
      </p>
    </div>
  </div>
</div>

<p>
  Intuitively, the m-estimate <em>adds m virtual examples</em> distributed according
  to the prior p.  When nc = 0 (unseen feature), instead of returning 0 it returns
  m·p / (ny + m) — a small but nonzero probability.  For binary features with
  unknown prior, p = 0.5; for k-valued categorical features, p = 1/k.
</p>

<!-- ============================================================
     SECTION 7 — TEXT CLASSIFICATION
     ============================================================ -->
<h2>📄 Text Classification with Naive Bayes</h2>
<p>
  One of the most celebrated applications of Naive Bayes is <strong>text classification</strong>:
  spam filtering, topic classification of news articles, sentiment analysis, and web page categorisation.
  It is consistently ranked among the most effective algorithms for text despite its simplicity.
</p>

<h3>How it works for text:</h3>
<ol>
  <li>
    <strong>Represent each document</strong> as a sequence of word positions
    (attribute xᵢ = the word at position i).
  </li>
  <li>
    <strong>Position-independence assumption:</strong> In addition to the naive feature independence
    assumption, we further assume that the probability of word wₖ is the same regardless of its
    position in the document.  All positions share one probability p(wₖ | cⱼ).
  </li>
  <li>
    <strong>Estimate word probabilities</strong> using the m-estimate with Laplace smoothing (m = 1):
  </li>
</ol>

<div style="background:rgba(14,165,233,0.1); border:1px solid rgba(14,165,233,0.4);
            border-radius:14px; padding:20px 28px; margin:20px 0; text-align:center;">
  <p style="margin:0 0 8px; font-family:'Courier New',monospace; color:#bae6fd; font-size:1.05em;">
    p(wₖ | cⱼ) = (nₖ + 1) / (nⱼ + |Vocabulary|)
  </p>
  <p style="margin:0; color:#64748b; font-size:0.88em;">
    nⱼ = total word positions in all class-cⱼ training documents &nbsp;|&nbsp;
    nₖ = times word wₖ appears in those positions
  </p>
</div>

<p>Adding 1 to the numerator and |Vocabulary| to the denominator (Laplace smoothing)
ensures every word in the vocabulary gets a nonzero probability — even words never
seen in that class during training.</p>

<!-- SVG — Text classification pipeline -->
<div style="text-align:center; margin:36px 0;">
  <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg"
       style="width:100%; max-width:700px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <defs>
      <marker id="tArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="rgba(148,163,184,0.6)"/>
      </marker>
      <filter id="tGlow">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <text x="350" y="24" text-anchor="middle" fill="#e2e8f0" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold" letter-spacing="1">
      NAIVE BAYES — TEXT CLASSIFICATION PIPELINE
    </text>

    <!-- Box 1: Raw email -->
    <rect x="18" y="44" width="130" height="72" rx="10"
          fill="rgba(14,165,233,0.12)" stroke="#0ea5e9" stroke-width="1.5" filter="url(#tGlow)"/>
    <text x="83" y="68" text-anchor="middle" fill="#38bdf8" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">RAW EMAIL</text>
    <text x="83" y="84" text-anchor="middle" fill="#7dd3fc" font-size="9.5"
          font-family="'Courier New',monospace">"Buy now! Free</text>
    <text x="83" y="98" text-anchor="middle" fill="#7dd3fc" font-size="9.5"
          font-family="'Courier New',monospace">offer expires…"</text>

    <line x1="148" y1="80" x2="186" y2="80" stroke="rgba(148,163,184,0.5)"
          stroke-width="1.5" marker-end="url(#tArr)"/>

    <!-- Box 2: Word features -->
    <rect x="188" y="44" width="145" height="72" rx="10"
          fill="rgba(99,102,241,0.12)" stroke="#818cf8" stroke-width="1.5"/>
    <text x="260" y="68" text-anchor="middle" fill="#a5b4fc" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">WORD FEATURES</text>
    <text x="260" y="84" text-anchor="middle" fill="#c7d2fe" font-size="9.5"
          font-family="'Courier New',monospace">buy, now, free,</text>
    <text x="260" y="98" text-anchor="middle" fill="#c7d2fe" font-size="9.5"
          font-family="'Courier New',monospace">offer, expires…</text>

    <line x1="333" y1="80" x2="371" y2="80" stroke="rgba(148,163,184,0.5)"
          stroke-width="1.5" marker-end="url(#tArr)"/>

    <!-- Box 3: Score per class -->
    <rect x="373" y="36" width="178" height="88" rx="10"
          fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="462" y="60" text-anchor="middle" fill="#fbbf24" font-size="11"
          font-family="'Courier New',monospace" font-weight="bold">SCORE EACH CLASS</text>
    <text x="462" y="76" text-anchor="middle" fill="#fde68a" font-size="9.5"
          font-family="'Courier New',monospace">p(spam)·∏ p(wₖ|spam)</text>
    <text x="462" y="91" text-anchor="middle" fill="#fde68a" font-size="9.5"
          font-family="'Courier New',monospace">p(ham) ·∏ p(wₖ|ham)</text>
    <text x="462" y="106" text-anchor="middle" fill="#94a3b8" font-size="9"
          font-family="'Courier New',monospace">(use log-sum to avoid underflow)</text>

    <line x1="551" y1="80" x2="589" y2="80" stroke="rgba(148,163,184,0.5)"
          stroke-width="1.5" marker-end="url(#tArr)"/>

    <!-- Box 4: Label -->
    <rect x="591" y="52" width="100" height="56" rx="10"
          fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="1.5" filter="url(#tGlow)"/>
    <text x="641" y="74" text-anchor="middle" fill="#fb7185" font-size="13"
          font-family="'Courier New',monospace" font-weight="bold">🚫 SPAM</text>
    <text x="641" y="92" text-anchor="middle" fill="#fca5a5" font-size="10"
          font-family="'Courier New',monospace">classified!</text>

    <!-- Bottom note: Linear Classifier -->
    <rect x="18" y="136" width="676" height="68" rx="10"
          fill="rgba(15,23,42,0.6)" stroke="rgba(148,163,184,0.12)" stroke-width="1"/>
    <text x="356" y="160" text-anchor="middle" fill="#94a3b8" font-size="12"
          font-family="'Courier New',monospace" font-weight="bold">
      🔑 KEY FACTS ABOUT NB FOR TEXT
    </text>
    <text x="356" y="178" text-anchor="middle" fill="#64748b" font-size="11"
          font-family="'Courier New',monospace">
      ① It is a LINEAR classifier in log-probability space
    </text>
    <text x="356" y="194" text-anchor="middle" fill="#64748b" font-size="11"
          font-family="'Courier New',monospace">
      ② Incredibly fast to train and predict &nbsp; ③ Competitive with neural nets on short texts
    </text>
  </svg>
</div>

<!-- ============================================================
     SECTION 8 — PROS, CONS & PRACTICAL NOTES
     ============================================================ -->
<h2>⚖️ Naive Bayes: Strengths &amp; Weaknesses</h2>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:24px 0;">
  <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.4);
              border-radius:14px; padding:18px 22px;">
    <h3 style="color:#34d399; margin:0 0 14px; font-size:1em;">✅ Strengths</h3>
    <ul style="margin:0; padding-left:18px; color:#a7f3d0; line-height:1.9; font-size:0.93em;">
      <li>Extremely fast to train — just count frequencies.</li>
      <li>Works very well with <strong>small training datasets</strong>.</li>
      <li>Highly effective for <strong>text classification</strong> (spam, topic, sentiment).</li>
      <li>Handles high-dimensional feature spaces gracefully.</li>
      <li>Naturally probabilistic output — gives a confidence score.</li>
      <li>Can be comparable to decision trees and neural networks in some domains.</li>
    </ul>
  </div>
  <div style="background:rgba(244,63,94,0.08); border:1px solid rgba(244,63,94,0.4);
              border-radius:14px; padding:18px 22px;">
    <h3 style="color:#fb7185; margin:0 0 14px; font-size:1em;">❌ Weaknesses</h3>
    <ul style="margin:0; padding-left:18px; color:#fecdd3; line-height:1.9; font-size:0.93em;">
      <li><strong>Independence assumption is unrealistic</strong> — real features often correlate (e.g., "New York" as two words).</li>
      <li>Poor probability calibration — the output probabilities can be over-confident.</li>
      <li>Zero-frequency problem requires smoothing (m-estimate).</li>
      <li>Cannot model feature interactions directly.</li>
      <li>Numeric underflow risk when multiplying many small probabilities — use log-sum.</li>
    </ul>
  </div>
</div>
`,

        bodyAr: `
<h2>🎲 الاحتمال الشرطي وقاعدة بايز</h2>
<p>
  الاحتمال الشرطي p(A|B) هو احتمال وقوع الحدث A بافتراض أن الحدث B قد وقع بالفعل.
  يمكن صياغته رياضياً كـ: p(A|B) = p(A∧B) / p(B).
  وبكتابة الاحتمال المشترك p(A∧B) بطريقتين مختلفتين نحصل على <strong>قاعدة بايز</strong> الشهيرة:
</p>

<div style="background:rgba(251,191,36,0.1); border:2px solid rgba(251,191,36,0.45);
            border-radius:14px; padding:16px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0; font-family:'Courier New',monospace; color:#fde68a; font-size:1.05em;">
    p(A|B) = p(B|A) · p(A) / p(B)
  </p>
</div>

<ul>
  <li><strong>p(A|B)</strong> — الاحتمال اللاحق (Posterior): الاعتقاد المُحدَّث بعد رؤية الدليل B.</li>
  <li><strong>p(B|A)</strong> — الاحتمال المشروط (Likelihood): احتمالية رؤية B إذا كان A صحيحاً.</li>
  <li><strong>p(A)</strong> — الاحتمال السابق (Prior): اعتقادنا قبل رؤية أي دليل.</li>
  <li><strong>p(B)</strong> — الدليل (Evidence): ثابت تطبيع.</li>
</ul>

<h3>🏥 مثال عملي — تشخيص السرطان</h3>
<p>
  المريض لديه نتيجة اختبار إيجابية. ما احتمال إصابته بالسرطان فعلاً؟
  رغم أن الاختبار دقته 98%، إلا أن الإصابة نادرة (0.8%)، لذا فإن احتمال الإصابة الفعلية هو فقط 21%!
  هذه هي <em>مغالطة معدل الأساس (Base Rate Fallacy)</em>.
</p>

<h2>🔀 الخوارزميات التمييزية مقابل التوليدية</h2>
<p>
  خوارزميات التصنيف نوعان فلسفيان:
</p>
<ul>
  <li>
    <strong>التمييزية (Discriminative)</strong> كـ Logistic Regression وSVM:
    تنمذج p(y|x) مباشرةً وتتعلم حدود فاصلة بين الفئات.
  </li>
  <li>
    <strong>التوليدية (Generative)</strong> كـ Naive Bayes:
    تبني نموذجاً إحصائياً لكل فئة بشكل منفصل — "كيف تبدو الفئة؟" — ثم تستخدم قاعدة بايز للتصنيف.
    تنمذج p(x|y) وp(y) ثم تستنتج p(y|x).
  </li>
</ul>

<h2>🧠 مصنف بايز الساذج</h2>
<p>
  مصنف بايز الساذج هو مصنف توليدي احتمالي. يُسمى "ساذجاً" بسبب افتراض قوي وغير واقعي:
  بمعلومية تسمية الفئة، جميع الخصائص <strong>مستقلة شرطياً</strong> عن بعضها.
  هذا يُحوّل الاحتمال المشترك المعقد إلى جداء بسيط:
</p>
<div style="background:rgba(251,191,36,0.1); border:2px solid rgba(251,191,36,0.45);
            border-radius:14px; padding:16px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0; font-family:'Courier New',monospace; color:#fde68a; font-size:1em;">
    ŷ = argmaxᵧ p(y) · ∏ⱼ p(aⱼ | y)
  </p>
</div>
<p>
  كلا الحدين يُقدَّران من عد التكرارات في بيانات التدريب:
  p(y) من تكرار الفئة y، وp(aⱼ|y) من تكرار قيمة الخاصية j ضمن أمثلة الفئة y.
</p>

<h2>🔧 التقدير بـ m-estimate (تجنب الاحتمال الصفري)</h2>
<p>
  إذا لم تظهر قيمة خاصية معينة مع فئة ما في بيانات التدريب، يصبح تقديرها صفراً،
  مما يُصفّر المضروب كله ويُفسد التصنيف. الحل هو <strong>تقدير m</strong> (التنعيم):
</p>
<div style="background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.4);
            border-radius:14px; padding:16px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0; font-family:'Courier New',monospace; color:#c7d2fe; font-size:1em;">
    p(aⱼ|y) = (nc + m · p) / (ny + m)
  </p>
</div>
<p>
  يُضيف m أمثلةً افتراضية موزعة حسب الاحتمال السابق p.
  عند عدم معرفة p، نستخدم الاحتمال المنتظم: p = 1/k حيث k عدد قيم الخاصية.
</p>

<h2>📄 تصنيف النصوص</h2>
<p>
  من أنجح تطبيقات Naive Bayes تصنيف النصوص (البريد المزعج، تصنيف الأخبار، تحليل المشاعر).
  يُمثَّل كل مستند بمواضع الكلمات، مع افتراض إضافي أن احتمال أي كلمة مستقل عن موضعها.
  تُقدَّر الاحتمالات باستخدام تنعيم لابلاس (m=1):
</p>
<div style="background:rgba(14,165,233,0.1); border:1px solid rgba(14,165,233,0.4);
            border-radius:14px; padding:16px 28px; margin:16px 0; text-align:center;">
  <p style="margin:0; font-family:'Courier New',monospace; color:#bae6fd; font-size:1em;">
    p(wₖ | cⱼ) = (nₖ + 1) / (nⱼ + |المفردات|)
  </p>
</div>

<h2>⚖️ مزايا وعيوب Naive Bayes</h2>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin:20px 0;">
  <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.4);
              border-radius:12px; padding:16px;">
    <h3 style="color:#34d399; margin:0 0 12px;">✅ المزايا</h3>
    <ul style="color:#a7f3d0; line-height:1.9; font-size:0.92em; margin:0; padding-left:16px;">
      <li>سريع جداً في التدريب (عدّ التكرارات فقط).</li>
      <li>يعمل بشكل ممتاز مع البيانات الصغيرة.</li>
      <li>فعّال جداً في تصنيف النصوص.</li>
      <li>يُنتج احتمالاً — ثقة في التصنيف.</li>
      <li>يتعامل مع آلاف الخصائص دون مشكلة.</li>
    </ul>
  </div>
  <div style="background:rgba(244,63,94,0.08); border:1px solid rgba(244,63,94,0.4);
              border-radius:12px; padding:16px;">
    <h3 style="color:#fb7185; margin:0 0 12px;">❌ العيوب</h3>
    <ul style="color:#fecdd3; line-height:1.9; font-size:0.92em; margin:0; padding-left:16px;">
      <li>افتراض الاستقلالية غير واقعي في معظم الحالات.</li>
      <li>الاحتمالات المُخرَجة مُعايَرة بشكل سيء.</li>
      <li>مشكلة الاحتمال الصفري تستوجب التنعيم.</li>
      <li>لا يُنمذج التفاعلات بين الخصائص.</li>
      <li>خطر تحت-الفيضان الرقمي عند ضرب احتمالات صغيرة جداً.</li>
    </ul>
  </div>
</div>
`
      }
    }
  ],

  summary: {
    points: [
      "Bayes Rule: p(A|B) = p(B|A)·p(A)/p(B). The four terms are: posterior (updated belief), likelihood (how probable B is given A), prior (belief before evidence), and evidence (normalisation constant).",
      "Generative algorithms model p(x|y) and p(y) — building a profile for each class — then apply Bayes Rule to get p(y|x) for classification.",
      "Naive Bayes makes the conditional independence assumption: given the class label, all features are independent. This simplifies p(a₁,…,aₐ|y) to a product ∏ p(aⱼ|y).",
      "Training is purely frequency counting: p(y) = count(y)/n and p(aⱼ|y) = count(aⱼ∧y)/count(y).",
      "The zero-frequency problem (unseen feature → probability 0) is solved by the m-estimate (Laplace smoothing): p(aⱼ|y) = (nc + m·p)/(ny + m).",
      "For text classification, a position-independence assumption is also made, and word probabilities are estimated as p(wₖ|cⱼ) = (nₖ+1)/(nⱼ+|Vocabulary|).",
      "Despite its unrealistic independence assumption, Naive Bayes is a linear classifier in log-probability space that is fast, robust, and competitive with decision trees and neural networks on text tasks."
    ],
    pointsAr: [
      "قاعدة بايز: p(A|B) = p(B|A)·p(A)/p(B). المصطلحات الأربعة: الاحتمال اللاحق (Posterior)، الاحتمال المشروط (Likelihood)، الاحتمال السابق (Prior)، والدليل (Evidence).",
      "الخوارزميات التوليدية تنمذج p(x|y) وp(y) — تبني ملفاً وصفياً لكل فئة — ثم تطبق قاعدة بايز للحصول على p(y|x) للتصنيف.",
      "بايز الساذج يفترض الاستقلالية الشرطية: بمعلومية الفئة، جميع الخصائص مستقلة. يُبسط هذا p(a₁,…,aₐ|y) إلى جداء ∏ p(aⱼ|y).",
      "التدريب هو مجرد عدّ التكرارات: p(y) = count(y)/n وp(aⱼ|y) = count(aⱼ∧y)/count(y).",
      "مشكلة الاحتمال الصفري (خاصية غير مرئية = احتمال صفر) تُحل بتقدير m (تنعيم لابلاس): p(aⱼ|y) = (nc + m·p)/(ny + m).",
      "لتصنيف النصوص، يُضاف افتراض استقلالية الموضع، وتُقدَّر احتمالات الكلمات بـ p(wₖ|cⱼ) = (nₖ+1)/(nⱼ+|المفردات|).",
      "رغم افتراضاته غير الواقعية، يُعد Naive Bayes مصنفاً خطياً في فضاء اللوغاريتم، سريعاً ومنافساً لأشجار القرار والشبكات العصبية في تصنيف النصوص."
    ]
  },

  mcq: [
    {
      id: 'ml-l9-q1',
      question: "In Bayes Rule p(A|B) = p(B|A)·p(A)/p(B), which term is called the 'prior'?",
      questionAr: "في قاعدة بايز p(A|B) = p(B|A)·p(A)/p(B)، أي مصطلح يُسمى 'الاحتمال السابق (Prior)'؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'p(A|B) — the posterior', isCorrect: false },
        { id: 'b', text: 'p(B|A) — the likelihood', isCorrect: false },
        { id: 'c', text: 'p(A) — belief before seeing any evidence', isCorrect: true },
        { id: 'd', text: 'p(B) — the evidence normalisation term', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q2',
      question: "What is the core modelling difference between generative and discriminative classification algorithms?",
      questionAr: "ما هو الفرق الجوهري في النمذجة بين خوارزميات التصنيف التوليدية والتمييزية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Generative models use gradient descent; discriminative models use counting', isCorrect: false },
        { id: 'b', text: 'Discriminative models learn p(y|x) directly; generative models learn p(x|y) and p(y), then apply Bayes Rule', isCorrect: true },
        { id: 'c', text: 'Generative models only work on binary classification problems', isCorrect: false },
        { id: 'd', text: 'Discriminative models are always more accurate than generative models', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q3',
      question: "Why is Naive Bayes called 'naive'?",
      questionAr: "لماذا يُسمى مصنف بايز 'ساذجاً'؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Because it uses only two features maximum', isCorrect: false },
        { id: 'b', text: 'Because it assumes all features are conditionally independent given the class label — an unrealistic but practical assumption', isCorrect: true },
        { id: 'c', text: 'Because it cannot handle more than two classes', isCorrect: false },
        { id: 'd', text: 'Because it does not require any training data', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q4',
      question: "What is the zero-frequency problem in Naive Bayes, and what is the standard solution?",
      questionAr: "ما هي مشكلة الاحتمال الصفري في Naive Bayes، وما الحل المعتمد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The denominator p(B) is zero; solved by setting it to 1', isCorrect: false },
        { id: 'b', text: 'A feature value unseen during training gets probability 0, collapsing the entire product; solved by m-estimate (Laplace smoothing)', isCorrect: true },
        { id: 'c', text: 'All feature probabilities are zero when the dataset is balanced; solved by oversampling', isCorrect: false },
        { id: 'd', text: 'The class prior is zero when a class has no examples; solved by adding dummy examples', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q5',
      question: "In the m-estimate formula p(aⱼ|y) = (nc + m·p)/(ny + m), what does 'm' represent?",
      questionAr: "في صيغة تقدير m: p(aⱼ|y) = (nc + m·p)/(ny + m)، ماذا يمثل 'm'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The number of classes in the dataset', isCorrect: false },
        { id: 'b', text: 'The equivalent sample size — the number of virtual examples added to smooth the estimate', isCorrect: true },
        { id: 'c', text: 'The total number of training examples', isCorrect: false },
        { id: 'd', text: 'The number of unique feature values', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q6',
      question: "In text classification with Naive Bayes, what additional assumption is made beyond the standard naive independence assumption?",
      questionAr: "في تصنيف النصوص بـ Naive Bayes، ما هو الافتراض الإضافي الذي يُضاف إلى افتراض الاستقلالية الساذجة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'All documents have the same length', isCorrect: false },
        { id: 'b', text: 'Only the 100 most common words are used', isCorrect: false },
        { id: 'c', text: 'The probability of a word is independent of its position within the document (position-independence)', isCorrect: true },
        { id: 'd', text: 'Words can only appear once per document', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q7',
      question: "A patient tests positive for a rare disease (1% prevalence). The test has 95% sensitivity and 5% false positive rate. Which concept explains why the actual probability of having the disease is still relatively low?",
      questionAr: "مريض اختبر إيجابياً لمرض نادر (انتشار 1%). الاختبار حساسيته 95% ومعدل الإيجابي الكاذب 5%. أي مفهوم يفسر لماذا الاحتمال الفعلي للإصابة لا يزال منخفضاً نسبياً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The likelihood dominates the posterior completely', isCorrect: false },
        { id: 'b', text: 'The base rate fallacy — the very low prior p(disease) overwhelms the test result', isCorrect: true },
        { id: 'c', text: 'The evidence term p(B) is always 1 in medical tests', isCorrect: false },
        { id: 'd', text: 'Naive Bayes cannot model medical diagnosis problems', isCorrect: false }
      ]
    },
    {
      id: 'ml-l9-q8',
      question: "Which of the following is TRUE about Naive Bayes for text classification?",
      questionAr: "أي من العبارات التالية صحيح بخصوص Naive Bayes في تصنيف النصوص؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It requires feature scaling of word counts before training', isCorrect: false },
        { id: 'b', text: 'It is a non-linear classifier that uses kernel methods internally', isCorrect: false },
        { id: 'c', text: 'It is a linear classifier in log-probability space, making it fast and surprisingly competitive', isCorrect: true },
        { id: 'd', text: 'It cannot handle vocabulary sizes larger than 1000 words', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l9-w1',
      question: "Explain the difference between generative and discriminative classification algorithms. Which category does Naive Bayes belong to, and what does it model?",
      questionAr: "اشرح الفرق بين خوارزميات التصنيف التوليدية والتمييزية. إلى أي فئة ينتمي Naive Bayes وماذا ينمذج؟",
      modelAnswer: "Discriminative algorithms model p(y|x) directly — they find a decision boundary separating classes and classify new points by their side of the boundary (e.g., Logistic Regression, SVM). Generative algorithms instead model p(x|y) and p(y), building a statistical profile for each class, then apply Bayes Rule p(y|x) ∝ p(x|y)·p(y) at prediction time. Naive Bayes is a generative model: it learns class priors p(y) and per-feature likelihoods p(aⱼ|y) from the training data, then at prediction selects the class that maximises p(y)·∏ p(aⱼ|y).",
      modelAnswerAr: "الخوارزميات التمييزية تنمذج p(y|x) مباشرةً — تجد حدوداً فاصلة بين الفئات وتصنف النقاط الجديدة بناءً على موضعها منها (مثل Logistic Regression وSVM). الخوارزميات التوليدية تنمذج بدلاً من ذلك p(x|y) وp(y)، تبني ملفاً إحصائياً لكل فئة، ثم تطبق قاعدة بايز p(y|x) ∝ p(x|y)·p(y) عند التنبؤ. Naive Bayes نموذج توليدي: يتعلم الاحتمالات السابقة للفئات p(y) واحتمالات الخصائص الشرطية p(aⱼ|y) من بيانات التدريب، ثم عند التنبؤ يختار الفئة التي تُعظّم p(y)·∏ p(aⱼ|y)."
    },
    {
      id: 'ml-l9-w2',
      question: "Explain the naive conditional independence assumption in Naive Bayes. Why is it called 'naive', and why does the classifier still work well in practice despite this unrealistic assumption?",
      questionAr: "اشرح افتراض الاستقلالية الشرطية الساذجة في Naive Bayes. لماذا يُسمى 'ساذجاً'، ولماذا يعمل المصنف بشكل جيد رغم هذا الافتراض غير الواقعي؟",
      modelAnswer: "The naive assumption is that given the class label y, all features a₁, a₂, …, aₐ are conditionally independent: p(a₁,…,aₐ|y) = ∏ p(aⱼ|y). It is called 'naive' because in reality features are rarely independent — for example, in text, 'New' and 'York' co-occur far more than independence predicts. Without this assumption, estimating the full joint p(a₁,…,aₐ|y) would require exponentially many training examples. Despite being wrong, the assumption works well in practice because: (1) the argmax decision is often correct even with miscalibrated probabilities, and (2) Naive Bayes acts as a linear classifier in log-space, which is a strong inductive bias well-suited to many real problems.",
      modelAnswerAr: "الافتراض الساذج هو أن بمعلومية تسمية الفئة y، جميع الخصائص a₁,…,aₐ مستقلة شرطياً: p(a₁,…,aₐ|y) = ∏ p(aⱼ|y). يُسمى 'ساذجاً' لأن الخصائص في الواقع نادراً ما تكون مستقلة — مثلاً في النصوص، كلمتا 'New' و'York' تتواجدان معاً أكثر مما يتنبأ به افتراض الاستقلالية. بدون هذا الافتراض، تقدير الاحتمال المشترك الكامل يستلزم أمثلة تدريب ضخمة بشكل أسي. رغم خطئه، يعمل الافتراض جيداً عملياً لأن: (1) قرار argmax غالباً صحيح حتى مع احتمالات مُعايَرة بشكل سيء، و(2) يعمل NB كمصنف خطي في فضاء اللوغاريتم — تحيز استقرائي قوي يناسب كثيراً من المشاكل."
    },
    {
      id: 'ml-l9-w3',
      question: "Describe the m-estimate formula for probability smoothing in Naive Bayes. What problem does it solve, and what happens when the prior p is unknown?",
      questionAr: "صف صيغة تقدير m للتنعيم في Naive Bayes. ما المشكلة التي يحلها، وماذا يحدث عندما يكون الاحتمال السابق p مجهولاً؟",
      modelAnswer: "The m-estimate formula is p(aⱼ|y) = (nc + m·p)/(ny + m), where nc is the count of examples with class y AND feature value aⱼ, ny is the total count for class y, m is the equivalent sample size (hyperparameter), and p is the prior probability of that feature value. It solves the zero-frequency problem: when nc = 0 (a feature value never seen for a given class), raw frequency estimation gives probability 0, which zeroes out the entire product and ruins the classifier. The m-estimate ensures a nonzero floor of m·p/(ny+m). When the prior is unknown, a uniform prior is assumed: p = 1/k where k is the number of possible values for that feature. For the special case m=1 and p=1/|Vocabulary|, this reduces to Laplace smoothing commonly used in text classification.",
      modelAnswerAr: "صيغة تقدير m هي p(aⱼ|y) = (nc + m·p)/(ny + m)، حيث nc هو عدد الأمثلة ذات الفئة y وقيمة الخاصية aⱼ، وny هو العدد الإجمالي لأمثلة الفئة y، وm حجم العينة المكافئ (معامل ضبط)، وp الاحتمال السابق لقيمة الخاصية. يحل مشكلة الاحتمال الصفري: عندما nc=0 (قيمة خاصية لم تُشاهَد مع فئة معينة)، التقدير المباشر يُعطي 0 مما يُصفّر المضروب كله ويُفسد التصنيف. تقدير m يضمن حداً أدنى غير صفري هو m·p/(ny+m). عند جهل الاحتمال السابق، نفترض الاحتمال المنتظم: p=1/k حيث k عدد القيم الممكنة للخاصية. الحالة الخاصة m=1 وp=1/|المفردات| تُرجع تنعيم لابلاس المستخدم في تصنيف النصوص."
    }
  ]
};