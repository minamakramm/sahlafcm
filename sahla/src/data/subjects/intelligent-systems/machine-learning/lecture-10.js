// ============================================================
// LECTURE 10: Ensemble Methods — Enhanced Explanation
// Rich SVG diagrams + clear interactive examples
// ============================================================

export const LECTURE = {
  subjectId: 'machine-learning',
  number: 10,
  title: 'Ensemble Methods',
  titleAr: 'طرق التجميع والتعلم المجمع (Ensemble Methods)',

  explanation: [
    // ── SECTION 1: Majority Voting & Condorcet ─────────────────
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Majority Voting &amp; Condorcet's Jury Theorem</h2>

<p>
  An <strong>Ensemble Method</strong> combines the predictions of many individual classifiers
  by <em>majority voting</em> to produce a single, much stronger prediction.
</p>

<!-- ── SVG 1: Intuition — 1 voter vs many voters ── -->
<div style="text-align:center; margin: 28px 0;">
  <svg width="100%" viewBox="0 0 680 260" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Majority voting intuition</title>
    <desc>Left: a single weak classifier decides alone with 60% accuracy. Right: five classifiers vote together, driving accuracy higher.</desc>

    <defs>
      <marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <!-- ── Panel A: single classifier ── -->
    <!-- label -->
    <text x="160" y="22" text-anchor="middle" font-family="sans-serif"
          font-size="13" font-weight="600" fill="#94a3b8">Single Classifier</text>

    <!-- one brain / classifier box -->
    <rect x="100" y="34" width="120" height="48" rx="8"
          fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1"/>
    <text x="160" y="53" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#7dd3fc" font-weight="600">Classifier</text>
    <text x="160" y="70" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#0ea5e9">p = 0.60</text>

    <!-- arrow down -->
    <line x1="160" y1="82" x2="160" y2="108" stroke="#64748b"
          stroke-width="1.2" marker-end="url(#arr1)"/>

    <!-- output box -->
    <rect x="112" y="110" width="96" height="36" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1"/>
    <text x="160" y="133" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#6ee7b7" font-weight="600">60% accuracy</text>

    <!-- uncertainty bar -->
    <rect x="100" y="162" width="120" height="10" rx="4"
          fill="rgba(148,163,184,0.3)" stroke="none"/>
    <rect x="100" y="162" width="72" height="10" rx="4"
          fill="#0ea5e9" stroke="none"/>
    <text x="160" y="188" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#94a3b8">Uncertainty: HIGH</text>

    <!-- ── Divider ── -->
    <line x1="330" y1="20" x2="330" y2="220" stroke="rgba(148,163,184,0.3)"
          stroke-width="1" stroke-dasharray="5 4"/>

    <!-- ── Panel B: ensemble ── -->
    <text x="510" y="22" text-anchor="middle" font-family="sans-serif"
          font-size="13" font-weight="600" fill="#94a3b8">Ensemble (5 Classifiers)</text>

    <!-- 5 small classifier boxes in a row -->
    <g font-family="sans-serif" font-size="10">
      <!-- clf 1 -->
      <rect x="356" y="34" width="58" height="42" rx="6"
            fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="0.8"/>
      <text x="385" y="52" text-anchor="middle" fill="#7dd3fc" font-weight="600">C1</text>
      <text x="385" y="66" text-anchor="middle" fill="#0ea5e9">✓ YES</text>

      <!-- clf 2 -->
      <rect x="424" y="34" width="58" height="42" rx="6"
            fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="0.8"/>
      <text x="453" y="52" text-anchor="middle" fill="#7dd3fc" font-weight="600">C2</text>
      <text x="453" y="66" text-anchor="middle" fill="#0ea5e9">✓ YES</text>

      <!-- clf 3 -->
      <rect x="492" y="34" width="58" height="42" rx="6"
            fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="0.8"/>
      <text x="521" y="52" text-anchor="middle" fill="#fb7185" font-weight="600">C3</text>
      <text x="521" y="66" text-anchor="middle" fill="#f43f5e">✗ NO</text>

      <!-- clf 4 -->
      <rect x="560" y="34" width="58" height="42" rx="6"
            fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="0.8"/>
      <text x="589" y="52" text-anchor="middle" fill="#7dd3fc" font-weight="600">C4</text>
      <text x="589" y="66" text-anchor="middle" fill="#0ea5e9">✓ YES</text>

      <!-- clf 5 -->
      <rect x="628" y="34" width="44" height="42" rx="6"
            fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="0.8"/>
      <text x="650" y="52" text-anchor="middle" fill="#fb7185" font-weight="600">C5</text>
      <text x="650" y="66" text-anchor="middle" fill="#f43f5e">✗ NO</text>
    </g>

    <!-- arrows from each clf to vote box -->
    <line x1="385" y1="76" x2="490" y2="110" stroke="#64748b"
          stroke-width="0.8" marker-end="url(#arr1)"/>
    <line x1="453" y1="76" x2="494" y2="110" stroke="#64748b"
          stroke-width="0.8" marker-end="url(#arr1)"/>
    <line x1="521" y1="76" x2="510" y2="110" stroke="#64748b"
          stroke-width="0.8" marker-end="url(#arr1)"/>
    <line x1="589" y1="76" x2="526" y2="110" stroke="#64748b"
          stroke-width="0.8" marker-end="url(#arr1)"/>
    <line x1="650" y1="76" x2="532" y2="110" stroke="#64748b"
          stroke-width="0.8" marker-end="url(#arr1)"/>

    <!-- majority vote box -->
    <rect x="440" y="110" width="140" height="36" rx="8"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.2"/>
    <text x="510" y="127" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#6ee7b7" font-weight="600">Majority = YES (3/5)</text>
    <text x="510" y="141" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#34d399">Weighted vote →</text>

    <!-- arrow to output -->
    <line x1="510" y1="146" x2="510" y2="160" stroke="#64748b"
          stroke-width="1.2" marker-end="url(#arr1)"/>

    <!-- output box -->
    <rect x="452" y="162" width="116" height="36" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1"/>
    <text x="510" y="185" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#6ee7b7" font-weight="600">~85%+ accuracy</text>

    <!-- accuracy bar -->
    <rect x="440" y="208" width="140" height="10" rx="4"
          fill="rgba(148,163,184,0.3)" stroke="none"/>
    <rect x="440" y="208" width="119" height="10" rx="4"
          fill="#34d399" stroke="none"/>
    <text x="510" y="232" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#94a3b8">Uncertainty: LOW</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Each classifier is individually weak (60%), but their combined majority vote is much stronger.
  </p>
</div>

<p>The mathematical backbone is <strong>Condorcet's Jury Theorem (1785)</strong>:</p>
<ul>
  <li>Each voter (classifier) is correct with probability <em>p</em>.</li>
  <li>Votes are <strong>independent</strong>.</li>
  <li>
    <strong>If p &gt; 0.5</strong> — more voters → majority decision converges to 100% correct.<br>
    <strong>If p &lt; 0.5</strong> — more voters → majority decision collapses toward 0% (catastrophic).
  </li>
</ul>

<!-- ── SVG 2: Condorcet curve ── -->
<div style="text-align:center; margin: 24px 0;">
  <svg width="100%" viewBox="0 0 680 260" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Condorcet accuracy vs number of voters</title>
    <desc>Two curves: p=0.6 rises toward 100% as voters increase; p=0.4 falls toward 0%.</desc>

    <!-- axes -->
    <line x1="60" y1="220" x2="620" y2="220" stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>
    <line x1="60" y1="20"  x2="60"  y2="220" stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>

    <!-- Y labels -->
    <text x="50" y="224" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">0%</text>
    <text x="50" y="174" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">25%</text>
    <text x="50" y="124" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">50%</text>
    <text x="50" y="74"  text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">75%</text>
    <text x="50" y="28"  text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">100%</text>

    <!-- Y gridlines -->
    <line x1="60" y1="170" x2="620" y2="170" stroke="rgba(148,163,184,0.3)" stroke-width="0.5" stroke-dasharray="4 4"/>
    <line x1="60" y1="120" x2="620" y2="120" stroke="rgba(148,163,184,0.3)" stroke-width="0.5" stroke-dasharray="4 4"/>
    <line x1="60" y1="70"  x2="620" y2="70"  stroke="rgba(148,163,184,0.3)" stroke-width="0.5" stroke-dasharray="4 4"/>
    <line x1="60" y1="20"  x2="620" y2="20"  stroke="rgba(148,163,184,0.3)" stroke-width="0.5" stroke-dasharray="4 4"/>

    <!-- X labels -->
    <text x="60"  y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">1</text>
    <text x="172" y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">10</text>
    <text x="340" y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">50</text>
    <text x="508" y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">100</text>
    <text x="620" y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">150</text>

    <!-- X axis label -->
    <text x="340" y="252" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="600" fill="#94a3b8">Number of Voters</text>

    <!-- p=0.6 curve — rises steeply, asymptotes near 100% -->
    <path d="M60 120
             C90 105, 120 78, 172 52
             C230 30, 290 24, 340 22
             C420 20, 508 20, 620 20"
          fill="none" stroke="#34d399" stroke-width="2.5"/>

    <!-- p=0.4 curve — falls steeply, asymptotes near 0% -->
    <path d="M60 120
             C90 135, 120 162, 172 185
             C230 204, 290 214, 340 218
             C420 220, 508 220, 620 220"
          fill="none" stroke="#f43f5e" stroke-width="2.5"/>

    <!-- legend -->
    <rect x="420" y="80" width="12" height="12" rx="2" fill="#34d399"/>
    <text x="438" y="91" font-family="sans-serif" font-size="12" fill="#6ee7b7">p = 0.6 (better than random) → accuracy ↑</text>

    <rect x="420" y="102" width="12" height="12" rx="2" fill="#f43f5e"/>
    <text x="438" y="113" font-family="sans-serif" font-size="12" fill="#fb7185">p = 0.4 (worse than random) → accuracy ↓</text>

    <!-- starting dot at 1 voter = 60% / 40% -->
    <circle cx="60" cy="120" r="4" fill="#64748b"/>
    <text x="70" y="118" font-family="sans-serif" font-size="11" fill="#94a3b8">Start: 60% / 40%</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Condorcet's theorem: with p &gt; 0.5 the ensemble converges toward certainty. With p &lt; 0.5 it diverges catastrophically.
  </p>
</div>

<p>In ML, these individual classifiers are called <strong>weak learners</strong> —
they only need error = 0.5 − ε (slightly better than a coin flip).</p>
`,

        bodyAr: `
<h2>🔹 التصويت بالأغلبية ونظرية كوندورسيه</h2>
<p>طرق التعلم المجمع (Ensemble Methods) تجمع تنبؤات مصنفات ضعيفة كثيرة بالتصويت للوصول لقرار قوي. الأساس الرياضي هو نظرية كوندورسيه: إذا كانت دقة كل مصنف p &gt; 0.5 وكانت مستقلة، فإن زيادة عددها ترفع دقة الأغلبية نحو 100%.</p>
`
      }
    },

    // ── SECTION 2: Bagging vs Boosting ─────────────────────────
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 How to Produce Independent Weak Learners</h2>

<p>Training the same algorithm on the same data always gives the same classifier.
We must <em>strategically distort</em> the data to force independence.
Two paradigms exist:</p>

<!-- ── SVG 3: Bagging vs Boosting side-by-side architecture ── -->
<div style="text-align:center; margin: 28px 0;">
  <svg width="100%" viewBox="0 0 680 340" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Bagging vs Boosting architecture</title>
    <desc>Left side shows Bagging: training data split into parallel bootstrap samples feeding independent trees into a majority vote. Right side shows Boosting: sequential chain where each learner sees weighted data from the previous step.</desc>

    <defs>
      <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <!-- ══ BAGGING (left) ══ -->
    <text x="160" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="13" font-weight="700" fill="#6ee7b7">BAGGING (Parallel)</text>

    <!-- training data -->
    <rect x="90" y="28" width="140" height="34" rx="7"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1"/>
    <text x="160" y="50" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#6ee7b7" font-weight="600">Training Data</text>

    <!-- 3 bootstrap arrows fanning out -->
    <line x1="120" y1="62" x2="70"  y2="100" stroke="#34d399" stroke-width="1"
          marker-end="url(#arr2)" stroke-dasharray="4 2"/>
    <line x1="160" y1="62" x2="160" y2="100" stroke="#34d399" stroke-width="1"
          marker-end="url(#arr2)" stroke-dasharray="4 2"/>
    <line x1="200" y1="62" x2="248" y2="100" stroke="#34d399" stroke-width="1"
          marker-end="url(#arr2)" stroke-dasharray="4 2"/>

    <!-- bootstrap sample labels -->
    <text x="40"  y="97" font-family="sans-serif" font-size="10" fill="#34d399">Boot-1</text>
    <text x="134" y="97" font-family="sans-serif" font-size="10" fill="#34d399">Boot-2</text>
    <text x="224" y="97" font-family="sans-serif" font-size="10" fill="#34d399">Boot-3</text>

    <!-- 3 tree boxes -->
    <rect x="40"  y="106" width="62" height="38" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="71" y="130" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#6ee7b7" font-weight="600">Tree 1</text>

    <rect x="129" y="106" width="62" height="38" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="160" y="130" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#6ee7b7" font-weight="600">Tree 2</text>

    <rect x="218" y="106" width="62" height="38" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="249" y="130" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#6ee7b7" font-weight="600">Tree 3</text>

    <!-- arrows to majority vote -->
    <line x1="71"  y1="144" x2="130" y2="178" stroke="#64748b" stroke-width="0.8"
          marker-end="url(#arr2)"/>
    <line x1="160" y1="144" x2="160" y2="178" stroke="#64748b" stroke-width="0.8"
          marker-end="url(#arr2)"/>
    <line x1="249" y1="144" x2="192" y2="178" stroke="#64748b" stroke-width="0.8"
          marker-end="url(#arr2)"/>

    <!-- majority vote box -->
    <rect x="100" y="180" width="120" height="36" rx="7"
          fill="rgba(52,211,153,0.25)" stroke="#10b981" stroke-width="1.2"/>
    <text x="160" y="198" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#6ee7b7" font-weight="700">Majority Vote</text>
    <text x="160" y="211" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#6ee7b7">(unweighted)</text>

    <!-- annotation -->
    <text x="160" y="240" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#94a3b8">Equal weights · In parallel</text>
    <text x="160" y="254" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#94a3b8">e.g. Random Forests</text>

    <!-- ── Divider ── -->
    <line x1="340" y1="10" x2="340" y2="270" stroke="rgba(148,163,184,0.3)"
          stroke-width="1" stroke-dasharray="5 4"/>

    <!-- ══ BOOSTING (right) ══ -->
    <text x="510" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="13" font-weight="700" fill="#a5b4fc">BOOSTING (Sequential)</text>

    <!-- shared dataset (same all through) -->
    <rect x="440" y="28" width="140" height="34" rx="7"
          fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="1"/>
    <text x="510" y="50" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#a5b4fc" font-weight="600">Same Dataset</text>

    <!-- learner 1 -->
    <line x1="510" y1="62" x2="510" y2="90" stroke="#6366f1" stroke-width="1.2"
          marker-end="url(#arr2)"/>
    <rect x="454" y="90" width="112" height="38" rx="6"
          fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="0.8"/>
    <text x="510" y="108" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#a5b4fc" font-weight="600">Learner 1</text>
    <text x="510" y="122" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#6366f1">uniform weights</text>

    <!-- weight update arrow -->
    <line x1="510" y1="128" x2="510" y2="152" stroke="#6366f1" stroke-width="1.2"
          marker-end="url(#arr2)"/>
    <text x="560" y="144" font-family="sans-serif" font-size="10" fill="#818cf8">update weights ↑</text>

    <!-- learner 2 -->
    <rect x="454" y="152" width="112" height="38" rx="6"
          fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="0.8"/>
    <text x="510" y="170" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#a5b4fc" font-weight="600">Learner 2</text>
    <text x="510" y="184" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#6366f1">focus on hard examples</text>

    <line x1="510" y1="190" x2="510" y2="210" stroke="#6366f1" stroke-width="1.2"
          marker-end="url(#arr2)"/>
    <text x="560" y="204" font-family="sans-serif" font-size="10" fill="#818cf8">update weights ↑</text>

    <!-- learner M -->
    <rect x="454" y="210" width="112" height="38" rx="6"
          fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="0.8"/>
    <text x="510" y="228" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#a5b4fc" font-weight="600">Learner M</text>
    <text x="510" y="242" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#6366f1">final iteration</text>

    <line x1="510" y1="248" x2="510" y2="268" stroke="#64748b" stroke-width="1.2"
          marker-end="url(#arr2)"/>

    <!-- weighted vote box -->
    <rect x="450" y="270" width="120" height="36" rx="7"
          fill="rgba(129,140,248,0.25)" stroke="#818cf8" stroke-width="1.2"/>
    <text x="510" y="288" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#c7d2fe" font-weight="700">Weighted Vote</text>
    <text x="510" y="301" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#c7d2fe">(α-weighted)</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Bagging trains in <em>parallel</em> with equal weights; Boosting trains <em>sequentially</em>
    and upweights the examples each previous learner got wrong.
  </p>
</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin:20px 0;">
  <div style="background:rgba(16,185,129,0.08); border:1px solid #10b981;
              border-radius:10px; padding:14px;">
    <h3 style="color:#6ee7b7; margin:0 0 8px; font-size:14px;">🟢 Bagging (Bootstrap Aggregating)</h3>
    <ul style="margin:0; padding-left:18px; font-size:13px; line-height:1.7;">
      <li><strong>Parallel</strong> training</li>
      <li>Random sampling <strong>with replacement</strong> (bootstrap)</li>
      <li>Each learner sees different data subset</li>
      <li><strong>Unweighted</strong> majority vote</li>
      <li>→ <em>Random Forests</em></li>
    </ul>
  </div>
  <div style="background:rgba(139,92,246,0.08); border:1px solid #818cf8;
              border-radius:10px; padding:14px;">
    <h3 style="color:#a5b4fc; margin:0 0 8px; font-size:14px;">🟣 Boosting (AdaBoost)</h3>
    <ul style="margin:0; padding-left:18px; font-size:13px; line-height:1.7;">
      <li><strong>Sequential</strong> training</li>
      <li>Same data, but with <strong>adjusted weights</strong></li>
      <li>Misclassified examples get higher weight</li>
      <li><strong>Weighted</strong> majority vote (α)</li>
      <li>→ <em>AdaBoost.M1</em></li>
    </ul>
  </div>
</div>
`,
        bodyAr: `
<h2>🔹 كيفية إنتاج مصنفات ضعيفة مستقلة</h2>
<p>لإنتاج مصنفات مستقلة، نستخدم أحد أسلوبين: Bagging (تدريب موازي) أو Boosting (تدريب متسلسل).</p>
`
      }
    },

    // ── SECTION 3: AdaBoost Deep Dive ──────────────────────────
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 AdaBoost — Step-by-Step Walkthrough</h2>

<p>
  <strong>AdaBoost (Adaptive Boosting, 1997)</strong> — described by Leo Breiman (inventor of CART) as
  the <em>"best off-the-shelf classifier in the world"</em>.
</p>

<!-- ── SVG 4: AdaBoost weight update example ── -->
<div style="text-align:center; margin:28px 0;">
  <svg width="100%" viewBox="0 0 680 310" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>AdaBoost weight update example over two iterations</title>
    <desc>Six training points shown as circles. After iteration 1, the misclassified points grow in size to show their weights increasing. After iteration 2 the corrected points shrink back.</desc>

    <defs>
      <marker id="arr3" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <!-- column headers -->
    <text x="100" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="700" fill="#94a3b8">Initial (t=0)</text>
    <text x="340" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="700" fill="#94a3b8">After Learner 1 (t=1)</text>
    <text x="580" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="700" fill="#94a3b8">After Learner 2 (t=2)</text>

    <!-- ── Column 1: uniform weights ── -->
    <!-- 4 "+" class, 3 "-" class, all same size -->
    <!-- + class: filled blue circles -->
    <circle cx="68"  cy="80"  r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="68"  y="85"  text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="112" cy="120" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="112" y="125" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="68"  cy="170" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="68"  y="175" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="130" cy="200" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="130" y="205" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <!-- - class: orange circles -->
    <circle cx="136" cy="80"  r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="136" y="85"  text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <circle cx="80"  cy="230" r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="80"  y="235" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <circle cx="130" cy="260" r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="130" y="265" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <text x="100" y="292" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#64748b">All w = 1/n</text>

    <!-- arrow col1 → col2 -->
    <line x1="200" y1="165" x2="232" y2="165" stroke="#64748b" stroke-width="1.2"
          marker-end="url(#arr3)"/>
    <text x="216" y="156" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#94a3b8">Learner 1</text>
    <text x="216" y="178" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#f43f5e">misclassifies</text>
    <text x="216" y="190" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#f43f5e">2 examples</text>

    <!-- ── Column 2: after learner 1 — 2 examples upweighted ── -->
    <!-- same points, misclassified ones bigger (r=20) -->
    <circle cx="308" cy="80"  r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="308" y="85"  text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <!-- MISCLASSIFIED: bigger ring, heavier stroke -->
    <circle cx="352" cy="120" r="20" fill="rgba(251,191,36,0.15)" stroke="#f43f5e" stroke-width="3"/>
    <text x="352" y="125" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">+</text>
    <text x="352" y="100" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#f43f5e">↑ weight</text>

    <circle cx="308" cy="170" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="308" y="175" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="370" cy="200" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="370" y="205" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="376" cy="80"  r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="376" y="85"  text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <!-- MISCLASSIFIED − -->
    <circle cx="320" cy="230" r="20" fill="rgba(251,191,36,0.15)" stroke="#f43f5e" stroke-width="3"/>
    <text x="320" y="235" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>
    <text x="320" y="210" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#f43f5e">↑ weight</text>

    <circle cx="370" cy="260" r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="370" y="265" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <text x="340" y="292" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#f43f5e">Hard examples enlarged</text>

    <!-- arrow col2 → col3 -->
    <line x1="442" y1="165" x2="472" y2="165" stroke="#64748b" stroke-width="1.2"
          marker-end="url(#arr3)"/>
    <text x="457" y="156" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#94a3b8">Learner 2</text>
    <text x="457" y="175" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#34d399">focuses on</text>
    <text x="457" y="187" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#34d399">hard examples</text>

    <!-- ── Column 3: learner 2 corrects those examples ── -->
    <circle cx="546" cy="80"  r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="546" y="85"  text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="590" cy="120" r="12" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="2"/>
    <text x="590" y="125" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#6ee7b7" font-weight="700">+</text>
    <text x="608" y="118" font-family="sans-serif" font-size="10" fill="#34d399">✓</text>

    <circle cx="546" cy="170" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="546" y="175" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="608" cy="200" r="12" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="608" y="205" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#38bdf8" font-weight="700">+</text>

    <circle cx="614" cy="80"  r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="614" y="85"  text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <circle cx="558" cy="230" r="12" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="2"/>
    <text x="558" y="235" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#6ee7b7" font-weight="700">−</text>
    <text x="576" y="228" font-family="sans-serif" font-size="10" fill="#34d399">✓</text>

    <circle cx="608" cy="260" r="12" fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="608" y="265" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fb7185" font-weight="700">−</text>

    <text x="580" y="292" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#34d399">Hard examples now correct ✓</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Circle size = weight. Misclassified examples grow larger, forcing Learner 2 to focus on them.
  </p>
</div>

<!-- ── AdaBoost math callout ── -->
<div style="background:rgba(30,58,138,0.06); border-left:3px solid #0ea5e9;
            border-radius:8px; padding:16px; margin:20px 0; font-size:13px;">
  <strong style="font-size:14px;">🧮 AdaBoost Algorithm</strong>
  <ol style="margin:12px 0 0; padding-left:20px; line-height:2;">
    <li>Initialize uniform weights: $w_i = 1/n$ for all $n$ examples.</li>
    <li>For $m = 1 \ldots M$:
      <ol type="a" style="padding-left:18px;">
        <li>Fit classifier $G_m(x)$ using weights $w_i$.</li>
        <li>Compute weighted error: $\\displaystyle err_m = \\frac{\\sum_i w_i \\cdot \\mathbf{1}[y_i \\neq G_m(x_i)]}{\\sum_i w_i}$</li>
        <li>Compute voting weight: $\\alpha_m = \\log\\!\\left(\\dfrac{1 - err_m}{err_m}\\right)$</li>
        <li>Update weights: $w_i \\leftarrow w_i \\cdot e^{\\alpha_m}$ for misclassified examples.</li>
      </ol>
    </li>
    <li>Output: $G(x) = \\text{sign}\\!\\left[\\displaystyle\\sum_{m=1}^{M} \\alpha_m G_m(x)\\right]$</li>
  </ol>
</div>

<!-- ── SVG 5: α_m curve — voting weight vs error ── -->
<div style="text-align:center; margin:28px 0;">
  <svg width="100%" viewBox="0 0 680 240" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Alpha-m voting weight vs error rate</title>
    <desc>A curve showing alpha_m rises steeply as error approaches 0 (very good classifier) and falls below 0 as error exceeds 0.5 (worse than random).</desc>

    <!-- axes -->
    <line x1="60" y1="200" x2="580" y2="200" stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>
    <line x1="60" y1="20"  x2="60"  y2="200" stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>

    <!-- zero line (α=0 at err=0.5) -->
    <line x1="60" y1="110" x2="580" y2="110" stroke="rgba(148,163,184,0.3)" stroke-width="0.8"
          stroke-dasharray="5 4"/>
    <text x="52" y="114" text-anchor="end" font-family="sans-serif"
          font-size="11" fill="#64748b">α=0</text>

    <!-- axis labels -->
    <text x="60"  y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">0</text>
    <text x="320" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">0.5</text>
    <text x="580" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">1.0</text>
    <text x="320" y="232" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="600" fill="#94a3b8">Error rate (err_m)</text>

    <text x="14" y="114" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="600" fill="#94a3b8" transform="rotate(-90 14 114)">α_m (voting weight)</text>

    <!-- α curve: log((1-err)/err) — sampled points, drawn as path -->
    <!-- err=0.01 → α≈4.6; err=0.1→α≈2.2; err=0.2→α≈1.4; err=0.3→α≈0.85;
         err=0.4→α≈0.4; err=0.5→α=0; err=0.6→α=-0.4; err=0.9→α≈-2.2 -->
    <!-- Map err 0..1 → x 60..580 (range 520), α -3..5 → y 200..20 (range 180) -->
    <!-- y = 200 - (α+3)/8 * 180 -->
    <!-- err=0.02: x=70, α≈3.9, y=200-(6.9/8)*180=200-155=45 -->
    <path d="M 70 44
             C 100 50, 120 60, 140 68
             C 180 83, 220 95, 260 103
             C 290 108, 310 110, 320 110
             C 350 110, 380 115, 420 120
             C 460 128, 500 148, 540 172
             C 560 185, 575 196, 580 200"
          fill="none" stroke="#818cf8" stroke-width="2.5"/>

    <!-- vertical at err=0.5 -->
    <line x1="320" y1="20" x2="320" y2="200" stroke="#f43f5e" stroke-width="0.8"
          stroke-dasharray="4 3"/>
    <text x="325" y="38" font-family="sans-serif" font-size="11" fill="#f43f5e">err=0.5</text>
    <text x="325" y="52" font-family="sans-serif" font-size="11" fill="#f43f5e">random</text>

    <!-- annotations -->
    <text x="100" y="35" font-family="sans-serif" font-size="11" fill="#34d399" font-weight="600">Large α → high vote power</text>
    <text x="100" y="48" font-family="sans-serif" font-size="11" fill="#94a3b8">(very accurate learner)</text>

    <text x="360" y="180" font-family="sans-serif" font-size="11" fill="#f43f5e" font-weight="600">Negative α → vote flipped</text>
    <text x="360" y="193" font-family="sans-serif" font-size="11" fill="#94a3b8">(worse than random)</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    $\alpha_m$ is a monotone function of accuracy: near-perfect classifiers dominate the final vote;
    near-random classifiers contribute almost nothing.
  </p>
</div>
`,
        bodyAr: `
<h2>🔹 خوارزمية AdaBoost بالتفصيل</h2>
<p>AdaBoost تدرب مصنفات بشكل متسلسل. كل مصنف يتعلم من أخطاء السابق عبر رفع أوزان العينات الصعبة. في النهاية يُدمج كل مصنف بوزن تصويتي α يعكس دقته.</p>
`
      }
    },

    // ── SECTION 4: Decision Stumps ──────────────────────────────
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Decision Stumps &amp; AdaBoost Performance</h2>

<p>
  A <strong>Decision Stump</strong> is the simplest possible decision tree:
  exactly <em>one</em> root node splitting on <em>one</em> feature, producing exactly two leaf nodes.
  It is the canonical AdaBoost weak learner.
</p>

<!-- ── SVG 6: Decision stump anatomy ── -->
<div style="text-align:center; margin:24px 0;">
  <svg width="100%" viewBox="0 0 680 200" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Decision stump anatomy</title>
    <desc>A tree with one root node asking 'Feature X &gt; 5.5?' branching to two leaf nodes: Class -1 and Class +1.</desc>

    <defs>
      <marker id="arr4" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <!-- root node -->
    <rect x="240" y="24" width="200" height="48" rx="10"
          fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="340" y="44" text-anchor="middle" font-family="sans-serif"
          font-size="13" fill="#7dd3fc" font-weight="700">Feature X<tspan font-size="10" dy="3">j</tspan><tspan dy="-3"> &gt; threshold t</tspan></text>
    <text x="340" y="62" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#0ea5e9">One split · One feature · One threshold</text>

    <!-- left branch — YES -->
    <line x1="285" y1="72" x2="180" y2="130" stroke="#34d399" stroke-width="1.5"
          marker-end="url(#arr4)"/>
    <text x="208" y="106" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#34d399" font-weight="600">YES (x &gt; t)</text>

    <!-- right branch — NO -->
    <line x1="395" y1="72" x2="500" y2="130" stroke="#f43f5e" stroke-width="1.5"
          marker-end="url(#arr4)"/>
    <text x="468" y="106" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#f43f5e" font-weight="600">NO (x ≤ t)</text>

    <!-- leaf +1 -->
    <ellipse cx="180" cy="152" rx="52" ry="24"
             fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.5"/>
    <text x="180" y="157" text-anchor="middle" font-family="sans-serif"
          font-size="14" fill="#6ee7b7" font-weight="700">Class +1</text>

    <!-- leaf -1 -->
    <ellipse cx="500" cy="152" rx="52" ry="24"
             fill="rgba(251,113,133,0.15)" stroke="#fb7185" stroke-width="1.5"/>
    <text x="500" y="157" text-anchor="middle" font-family="sans-serif"
          font-size="14" fill="#fda4af" font-weight="700">Class −1</text>

    <!-- stump formula -->
    <text x="340" y="192" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#64748b">
      f(x|j,t) = +1 if x_j &gt; t, else −1 &nbsp;&nbsp;·&nbsp;&nbsp; j ∈ {1,…,d}
    </text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Despite its simplicity, hundreds of stumps combined by AdaBoost outperform a single 244-node tree.
  </p>
</div>

<!-- ── SVG 7: AdaBoost performance convergence chart ── -->
<div style="text-align:center; margin:28px 0;">
  <svg width="100%" viewBox="0 0 680 300" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>AdaBoost test error vs iterations</title>
    <desc>Three horizontal reference lines for single stump 45.8%, 244-node tree 24.7%, and random 50%. AdaBoost curve drops from 45.8% at iteration 0 to 5.8% by iteration 400.</desc>

    <!-- grid -->
    <line x1="70" y1="250" x2="630" y2="250" stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>
    <line x1="70" y1="20"  x2="70"  y2="250" stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>

    <!-- gridlines -->
    <line x1="70" y1="200" x2="630" y2="200" stroke="rgba(148,163,184,0.3)" stroke-width="0.4" stroke-dasharray="4 4"/>
    <line x1="70" y1="150" x2="630" y2="150" stroke="rgba(148,163,184,0.3)" stroke-width="0.4" stroke-dasharray="4 4"/>
    <line x1="70" y1="100" x2="630" y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="0.4" stroke-dasharray="4 4"/>
    <line x1="70" y1="50"  x2="630" y2="50"  stroke="rgba(148,163,184,0.3)" stroke-width="0.4" stroke-dasharray="4 4"/>

    <!-- Y labels (0%..50%) -->
    <text x="60" y="254" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">0%</text>
    <text x="60" y="204" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">10%</text>
    <text x="60" y="154" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">20%</text>
    <text x="60" y="104" text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">30%</text>
    <text x="60" y="54"  text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">40%</text>
    <!-- 50% -->
    <text x="60" y="28"  text-anchor="end" font-family="sans-serif" font-size="11" fill="#64748b">50%</text>

    <!-- X labels -->
    <text x="70"  y="266" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">0</text>
    <text x="210" y="266" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">100</text>
    <text x="350" y="266" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">200</text>
    <text x="490" y="266" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">300</text>
    <text x="630" y="266" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">400</text>
    <text x="350" y="284" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="600" fill="#94a3b8">Boosting Iterations</text>

    <!-- ── Reference lines ── -->
    <!-- Random: 50% = y=24 -->
    <line x1="70" y1="24" x2="630" y2="24" stroke="rgba(148,163,184,0.3)" stroke-width="1.2"
          stroke-dasharray="6 4"/>
    <text x="472" y="19" font-family="sans-serif" font-size="11" fill="#64748b">Random (50%)</text>

    <!-- Single stump: 45.8% → err=0.458, y = 250 - (0.458/0.5)*230 = 250-211=39 -->
    <line x1="70" y1="39" x2="630" y2="39" stroke="#f43f5e" stroke-width="1.8"
          stroke-dasharray="8 4"/>
    <text x="370" y="34" font-family="sans-serif" font-size="11"
          fill="#fb7185" font-weight="600">Single Stump (45.8%)</text>

    <!-- 244-node tree: 24.7% → y = 250 - (0.247/0.5)*230 = 250-114=136 -->
    <line x1="70" y1="136" x2="630" y2="136" stroke="#fbbf24" stroke-width="1.8"
          stroke-dasharray="8 4"/>
    <text x="370" y="131" font-family="sans-serif" font-size="11"
          fill="#fde68a" font-weight="600">244-Node Tree (24.7%)</text>

    <!-- ── AdaBoost curve ── -->
    <!-- starts at 45.8% (y=39), drops rapidly, reaches 5.8% (y=223) by iter 400 -->
    <!-- y_final = 250 - (0.058/0.5)*230 = 250-26.7=223 -->
    <path d="M 70 39
             C 100 100, 130 160, 180 195
             T 280 212, 350 218
             T 490 222, 630 223"
          fill="none" stroke="#34d399" stroke-width="3"/>

    <!-- end point -->
    <circle cx="630" cy="223" r="5" fill="#34d399"/>
    <text x="580" y="216" font-family="sans-serif" font-size="11"
          fill="#6ee7b7" font-weight="600">5.8% error!</text>

    <!-- Y axis label -->
    <text x="14" y="135" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="600" fill="#94a3b8"
          transform="rotate(-90 14 135)">Test Error Rate</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    AdaBoost with simple stumps achieves <strong>5.8% error</strong> — 
    beating the 244-node tree (24.7%) by <strong>4×</strong>!
  </p>
</div>

<p>
  Because each stump uses a single feature, AdaBoost also performs
  implicit <strong>feature selection</strong> — the most important features appear most frequently
  across the selected stumps.
</p>
`,
        bodyAr: `
<h2>🔹 عتبة القرار وأداء AdaBoost</h2>
<p>عتبة القرار (Decision Stump) هي أبسط شجرة قرار: عقدة جذر واحدة وورقتان. رغم بساطتها الشديدة، يحقق AdaBoost مع مئات من هذه العتبات دقة تبلغ 94.2% — متفوقاً على شجرة ضخمة ذات 244 عقدة.</p>
`
      }
    },

    // ── SECTION 5: Bagging & Bootstrapping ─────────────────────
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Bootstrapping &amp; Bagging Deep Dive</h2>

<p>
  <strong>Bootstrapping</strong> is a statistical re-sampling technique:
  draw a random sample of size $L$ from the training set <em>with replacement</em>.
  Because we sample with replacement, roughly <strong>63.2%</strong> of unique examples appear
  in each bootstrap sample; the rest (OOB — out-of-bag) can be used for free validation.
</p>

<!-- ── SVG 8: Bootstrapping example ── -->
<div style="text-align:center; margin:24px 0;">
  <svg width="100%" viewBox="0 0 680 220" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Bootstrapping sampling with replacement</title>
    <desc>Original 6-point dataset on the left. Three bootstrap samples on the right, each drawn with replacement so some points appear twice and some not at all.</desc>

    <defs>
      <marker id="arr5" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <!-- Original dataset -->
    <text x="90" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="12" font-weight="700" fill="#94a3b8">Original Dataset (n=6)</text>
    <rect x="20" y="26" width="140" height="150" rx="8"
          fill="none" stroke="rgba(148,163,184,0.3)" stroke-width="1" stroke-dasharray="4 3"/>

    <!-- 6 original points labeled A-F -->
    <g font-family="sans-serif" font-size="13" font-weight="700">
      <circle cx="56"  cy="50"  r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="56"  y="55"  text-anchor="middle" fill="#38bdf8">A</text>

      <circle cx="124" cy="50"  r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="124" y="55"  text-anchor="middle" fill="#38bdf8">B</text>

      <circle cx="56"  cy="95"  r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="56"  y="100" text-anchor="middle" fill="#38bdf8">C</text>

      <circle cx="124" cy="95"  r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="124" y="100" text-anchor="middle" fill="#38bdf8">D</text>

      <circle cx="56"  cy="140" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="56"  y="145" text-anchor="middle" fill="#38bdf8">E</text>

      <circle cx="124" cy="140" r="14" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="124" y="145" text-anchor="middle" fill="#38bdf8">F</text>
    </g>

    <!-- arrow to bootstrap samples -->
    <line x1="160" y1="100" x2="188" y2="100" stroke="#64748b" stroke-width="1.2"
          marker-end="url(#arr5)"/>
    <text x="174" y="90" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#94a3b8">sample</text>
    <text x="174" y="112" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#94a3b8">w/ replace</text>

    <!-- Bootstrap sample 1: A,A,C,D,F (B,E missing = OOB) -->
    <text x="310" y="18" text-anchor="middle" font-family="sans-serif"
          font-size="11" font-weight="600" fill="#34d399">Bootstrap 1</text>
    <rect x="200" y="26" width="220" height="52" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <g font-family="sans-serif" font-size="12" font-weight="600" fill="#6ee7b7">
      <text x="226" y="55">A</text>
      <text x="260" y="55">A</text>
      <text x="294" y="55">C</text>
      <text x="328" y="55">D</text>
      <text x="362" y="55">F</text>
    </g>
    <text x="430" y="43" font-family="sans-serif" font-size="10" fill="#64748b">OOB: B, E</text>

    <!-- Bootstrap sample 2: B,C,C,E,F (A,D missing) -->
    <text x="310" y="98" text-anchor="middle" font-family="sans-serif"
          font-size="11" font-weight="600" fill="#34d399">Bootstrap 2</text>
    <rect x="200" y="106" width="220" height="52" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <g font-family="sans-serif" font-size="12" font-weight="600" fill="#6ee7b7">
      <text x="226" y="135">B</text>
      <text x="260" y="135">C</text>
      <text x="294" y="135">C</text>
      <text x="328" y="135">E</text>
      <text x="362" y="135">F</text>
    </g>
    <text x="430" y="123" font-family="sans-serif" font-size="10" fill="#64748b">OOB: A, D</text>

    <!-- Bootstrap sample 3: A,B,D,E,E (C,F missing) -->
    <text x="310" y="178" text-anchor="middle" font-family="sans-serif"
          font-size="11" font-weight="600" fill="#34d399">Bootstrap 3</text>
    <rect x="200" y="186" width="220" height="52" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <g font-family="sans-serif" font-size="12" font-weight="600" fill="#6ee7b7">
      <text x="226" y="215">A</text>
      <text x="260" y="215">B</text>
      <text x="294" y="215">D</text>
      <text x="328" y="215">E</text>
      <text x="362" y="215">E</text>
    </g>
    <text x="430" y="203" font-family="sans-serif" font-size="10" fill="#64748b">OOB: C, F</text>

    <!-- legend -->
    <text x="460" y="170" font-family="sans-serif" font-size="11" fill="#64748b">Duplicates allowed;</text>
    <text x="460" y="184" font-family="sans-serif" font-size="11" fill="#64748b">~36.8% unique</text>
    <text x="460" y="198" font-family="sans-serif" font-size="11" fill="#64748b">points are OOB</text>
    <text x="460" y="212" font-family="sans-serif" font-size="11" fill="#34d399">(free validation!)</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Each bootstrap sample is different — this diversity is what makes the trees independent.
  </p>
</div>

<p><strong>Bagging classification rule (unweighted average):</strong></p>
<div style="background:rgba(16,185,129,0.06); border-left:3px solid #10b981;
            border-radius:6px; padding:12px 16px; margin:12px 0; font-size:13px;">
  $$f_{avg}(x) = \\frac{1}{B} \\sum_{b=1}^{B} f_b(x)$$
  Each of the $B$ trees gets an equal vote. Simple majority determines the class.
</div>
`,
        bodyAr: `
<h2>🔹 الـ Bootstrapping والـ Bagging</h2>
<p>Bootstrapping تأخذ عينات عشوائية مع الإرجاع. كل عينة تحتوي نسخاً متعددة من بعض البيانات وتغفل بعضها الآخر (~36.8%). هذا التنوع يجعل الأشجار المدربة مستقلة. Bagging تجمع تنبؤات الأشجار بتصويت بسيط غير موزون.</p>
`
      }
    },

    // ── SECTION 6: Random Forests ───────────────────────────────
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Random Forests — Breaking Tree Correlation</h2>

<p>
  Plain Bagging has a flaw: if one feature is very dominant,
  <em>all</em> bootstrap trees pick it at the root → the trees become nearly identical →
  the ensemble doesn't gain much over a single tree.
</p>

<!-- ── SVG 9: Bagging correlation problem ── -->
<div style="text-align:center; margin:24px 0;">
  <svg width="100%" viewBox="0 0 680 190" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Correlation problem in bagging</title>
    <desc>Three bagging trees all splitting on the same dominant feature X1 at the root, making them correlated and reducing ensemble benefit.</desc>

    <defs>
      <marker id="arr6" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <!-- problem label -->
    <text x="340" y="16" text-anchor="middle" font-family="sans-serif"
          font-size="13" font-weight="700" fill="#f43f5e">❌ Problem: All Bagging Trees use Same Root Feature!</text>

    <!-- 3 trees with same root split -->
    <g font-family="sans-serif">
      <!-- Tree 1 -->
      <rect x="30" y="28" width="160" height="36" rx="6"
            fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="110" y="46" text-anchor="middle" font-size="12" fill="#fda4af" font-weight="700">Tree 1: Root = X₁</text>
      <text x="110" y="58" text-anchor="middle" font-size="10" fill="#fb7185">(dominant feature)</text>

      <line x1="80"  y1="64" x2="60"  y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="1" marker-end="url(#arr6)"/>
      <line x1="140" y1="64" x2="160" y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="1" marker-end="url(#arr6)"/>
      <rect x="30"  y="100" width="60" height="28" rx="4" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="0.8"/>
      <text x="60"  y="118" text-anchor="middle" font-size="10" fill="#fb7185">X₂&lt;3?</text>
      <rect x="130" y="100" width="60" height="28" rx="4" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="0.8"/>
      <text x="160" y="118" text-anchor="middle" font-size="10" fill="#fb7185">X₃&gt;7?</text>

      <!-- Tree 2 (same root) -->
      <rect x="260" y="28" width="160" height="36" rx="6"
            fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="340" y="46" text-anchor="middle" font-size="12" fill="#fda4af" font-weight="700">Tree 2: Root = X₁</text>
      <text x="340" y="58" text-anchor="middle" font-size="10" fill="#fb7185">(same dominant feature)</text>

      <line x1="310" y1="64" x2="290" y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="1" marker-end="url(#arr6)"/>
      <line x1="370" y1="64" x2="390" y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="1" marker-end="url(#arr6)"/>
      <rect x="260" y="100" width="60" height="28" rx="4" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="0.8"/>
      <text x="290" y="118" text-anchor="middle" font-size="10" fill="#fb7185">X₄&lt;2?</text>
      <rect x="360" y="100" width="60" height="28" rx="4" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="0.8"/>
      <text x="390" y="118" text-anchor="middle" font-size="10" fill="#fb7185">X₂&gt;5?</text>

      <!-- Tree 3 (same root) -->
      <rect x="490" y="28" width="160" height="36" rx="6"
            fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="570" y="46" text-anchor="middle" font-size="12" fill="#fda4af" font-weight="700">Tree 3: Root = X₁</text>
      <text x="570" y="58" text-anchor="middle" font-size="10" fill="#fb7185">(again X₁!)</text>

      <line x1="540" y1="64" x2="520" y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="1" marker-end="url(#arr6)"/>
      <line x1="600" y1="64" x2="620" y2="100" stroke="rgba(148,163,184,0.3)" stroke-width="1" marker-end="url(#arr6)"/>
      <rect x="490" y="100" width="60" height="28" rx="4" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="0.8"/>
      <text x="520" y="118" text-anchor="middle" font-size="10" fill="#fb7185">X₅&lt;1?</text>
      <rect x="590" y="100" width="60" height="28" rx="4" fill="rgba(251,113,133,0.15)" stroke="#f43f5e" stroke-width="0.8"/>
      <text x="620" y="118" text-anchor="middle" font-size="10" fill="#fb7185">X₃&gt;4?</text>
    </g>

    <text x="340" y="162" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#f43f5e">High correlation → ensemble is barely better than one tree</text>
    <text x="340" y="178" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#64748b">The majority vote of near-identical trees adds little diversity</text>
  </svg>
</div>

<!-- ── SVG 10: Random Forest fix — random feature subset ── -->
<div style="text-align:center; margin:24px 0;">
  <svg width="100%" viewBox="0 0 680 220" role="img"
       xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:680px; background:rgba(0,0,0,0.2); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
              border-radius:24px; border:1px solid rgba(255,255,255,0.05);
              box-shadow:0 8px 32px 0 rgba(0,0,0,0.3); display:block; margin:0 auto;">
    <title>Random Forest fix: random feature subsets at each split</title>
    <desc>At each node, only a random subset of m features is considered. This forces diversity — trees pick different root features and become decorrelated.</desc>

    <defs>
      <marker id="arr7" viewBox="0 0 10 10" refX="8" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <text x="340" y="16" text-anchor="middle" font-family="sans-serif"
          font-size="13" font-weight="700" fill="#34d399">✓ Random Forests: Random Feature Subset at Every Split</text>

    <!-- full feature set -->
    <text x="340" y="42" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#64748b">Full set: {X₁, X₂, X₃, X₄, X₅, X₆, X₇, X₈, X₉}  d=9, m=√9=3</text>

    <!-- Tree 1 gets {X2,X5,X8} → picks X5 -->
    <rect x="30" y="52" width="170" height="36" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.5"/>
    <text x="115" y="68" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#6ee7b7" font-weight="700">Tree 1: considers {X₂,X₅,X₈}</text>
    <text x="115" y="82" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#34d399">Best split → Root = X₅</text>

    <line x1="80"  y1="88" x2="60"  y2="120" stroke="#34d399" stroke-width="1" marker-end="url(#arr7)"/>
    <line x1="150" y1="88" x2="170" y2="120" stroke="#34d399" stroke-width="1" marker-end="url(#arr7)"/>
    <rect x="30"  y="120" width="60" height="26" rx="4" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="60"  y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">X₂&lt;4?</text>
    <rect x="140" y="120" width="60" height="26" rx="4" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="170" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">X₈&gt;6?</text>

    <!-- Tree 2 gets {X1,X3,X7} → picks X3 -->
    <rect x="256" y="52" width="170" height="36" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.5"/>
    <text x="341" y="68" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#6ee7b7" font-weight="700">Tree 2: considers {X₁,X₃,X₇}</text>
    <text x="341" y="82" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#34d399">Best split → Root = X₃</text>

    <line x1="306" y1="88" x2="286" y2="120" stroke="#34d399" stroke-width="1" marker-end="url(#arr7)"/>
    <line x1="376" y1="88" x2="396" y2="120" stroke="#34d399" stroke-width="1" marker-end="url(#arr7)"/>
    <rect x="256" y="120" width="60" height="26" rx="4" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="286" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">X₁&lt;2?</text>
    <rect x="366" y="120" width="60" height="26" rx="4" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="396" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">X₇&gt;9?</text>

    <!-- Tree 3 gets {X4,X6,X9} → picks X9 -->
    <rect x="482" y="52" width="170" height="36" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1.5"/>
    <text x="567" y="68" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#6ee7b7" font-weight="700">Tree 3: considers {X₄,X₆,X₉}</text>
    <text x="567" y="82" text-anchor="middle" font-family="sans-serif"
          font-size="10" fill="#34d399">Best split → Root = X₉</text>

    <line x1="532" y1="88" x2="512" y2="120" stroke="#34d399" stroke-width="1" marker-end="url(#arr7)"/>
    <line x1="602" y1="88" x2="622" y2="120" stroke="#34d399" stroke-width="1" marker-end="url(#arr7)"/>
    <rect x="482" y="120" width="60" height="26" rx="4" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="512" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">X₄&lt;3?</text>
    <rect x="592" y="120" width="60" height="26" rx="4" fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="0.8"/>
    <text x="622" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#6ee7b7">X₆&gt;1?</text>

    <text x="340" y="170" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#34d399" font-weight="600">Different roots → Low correlation → Much stronger ensemble!</text>
    <text x="340" y="188" text-anchor="middle" font-family="sans-serif"
          font-size="11" fill="#64748b">Rule: at each node consider only m = √d randomly chosen features</text>

    <!-- formula box -->
    <rect x="240" y="196" width="200" height="22" rx="6"
          fill="rgba(52,211,153,0.15)" stroke="#10b981" stroke-width="1"/>
    <text x="340" y="211" text-anchor="middle" font-family="sans-serif"
          font-size="12" fill="#6ee7b7" font-weight="700">m = √d  (recommended)</text>
  </svg>
  <p style="font-size:0.82rem; color:#64748b; margin-top:8px;">
    Forcing each split to evaluate only $m = \\sqrt{d}$ random features decorrelates the trees,
    massively boosting ensemble diversity.
  </p>
</div>

<div style="background:rgba(16,185,129,0.08); border:1px solid #10b981;
            border-radius:10px; padding:14px; margin:20px 0; font-size:13px;">
  <strong style="color:#6ee7b7; font-size:14px;">🌲 Random Forests — Algorithm Summary</strong>
  <ol style="margin:10px 0 0; padding-left:20px; line-height:2;">
    <li>Use Bagging (bootstrap samples) to get $B$ different subsets.</li>
    <li>Train a full decision tree on each subset, BUT:</li>
    <li>At <em>every single node</em>, pick $m = \\sqrt{d}$ random features.</li>
    <li>Split only on the best among those $m$ features (not all $d$).</li>
    <li>Aggregate by unweighted majority vote: $f_{avg} = \\frac{1}{B}\\sum_b f_b(x)$.</li>
  </ol>
</div>
`,
        bodyAr: `
<h2>🔹 الغابات العشوائية</h2>
<p>الـ Bagging العادي يعاني من الترابط لأن الميزة المهيمنة تختارها كل الأشجار. الغابات العشوائية تحل هذا بقصر كل انقسام على مجموعة عشوائية من m = √d ميزة فقط، مما يولد أشجاراً متنوعة قليلة الارتباط.</p>
`
      }
    }
  ],

  // ── SUMMARY ────────────────────────────────────────────────────
  summary: {
    points: [
      "Condorcet's Jury Theorem: combining independent weak learners (p > 0.5) drives ensemble accuracy toward 100%.",
      "Boosting (AdaBoost) trains sequentially — each learner focuses on the hard examples the previous one got wrong.",
      "AdaBoost voting weight α_m = log((1−err)/err); accurate learners dominate the final weighted vote.",
      "Bagging trains trees in parallel on bootstrap samples (random with-replacement subsets), then takes majority vote.",
      "Random Forests fix Bagging's correlation flaw by restricting each node split to m = √d randomly chosen features.",
      "AdaBoost with decision stumps achieves 5.8% error — far better than a single 244-node tree at 24.7%."
    ],
    pointsAr: [
      "نظرية كوندورسيه: دمج مصنفات ضعيفة مستقلة (p > 0.5) يدفع دقة التجميع نحو 100%.",
      "Boosting يدرب بشكل متسلسل — كل مصنف يركز على الأمثلة الصعبة التي أخطأ فيها السابق.",
      "وزن التصويت في AdaBoost هو α_m = log((1-err)/err)؛ المصنفات الدقيقة تهيمن على التصويت.",
      "Bagging يدرب الأشجار بالتوازي على عينات Bootstrap ثم يأخذ تصويت الأغلبية.",
      "الغابات العشوائية تحل مشكلة الترابط بتقييد كل انقسام على m = √d ميزة عشوائية فقط.",
      "AdaBoost مع عتبات القرار يصل لنسبة خطأ 5.8% — أفضل بكثير من شجرة ضخمة ذات 244 عقدة (24.7%)."
    ]
  },

  // ── MCQ (unchanged) ────────────────────────────────────────────
  mcq: [
    {
      id: 'ml-l10-q1',
      question: "According to Condorcet's Jury Theorem, adding more voters (classifiers) to an ensemble mathematically improves accuracy ONLY IF:",
      questionAr: "وفقاً لنظرية كوندورسيه، إضافة المزيد من المصنفين لهيكل التجميع يحسن الدقة رياضياً فقط في حالة:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Each individual classifier achieves exactly 100% accuracy exclusively', isCorrect: false },
        { id: 'b', text: 'Each individual classifier performs worse than random guessing', isCorrect: false },
        { id: 'c', text: 'Each individual classifier performs slightly better than random guessing (probability p > 0.5) natively', isCorrect: true },
        { id: 'd', text: 'The classifiers are entirely dependent and strongly correlated mathematically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q2',
      question: "In the AdaBoost algorithm, what strictly happens to the weight of a training example if the current weak learner misclassifies it?",
      questionAr: "في خوارزمية AdaBoost، ماذا يحدث تحديداً لوزن عينة التدريب إذا أخطأ المصنف الضعيف الحالي في تصنيفها؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Its weight is violently reduced to 0 natively', isCorrect: false },
        { id: 'b', text: 'Its weight is increased so the next classifier focuses heavily on it intrinsically', isCorrect: true },
        { id: 'c', text: 'Its weight strictly remains identical globally', isCorrect: false },
        { id: 'd', text: 'It is physically deleted from the dataset altogether', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q3',
      question: "What is a 'Decision Stump' geometrically?",
      questionAr: "ما هي 'عتبة القرار' (Decision Stump) هندسياً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A deep decision tree with exactly 100 leaf nodes purely', isCorrect: false },
        { id: 'b', text: 'A neural network with 1 hidden layer natively', isCorrect: false },
        { id: 'c', text: 'The weakest possible decision tree: one root node and exactly 2 terminal leaf nodes (splitting on only one feature)', isCorrect: true },
        { id: 'd', text: 'A vector space completely devoid of points', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q4',
      question: "How does 'Bagging' (Bootstrap Aggregating) fundamentally prepare data for its weak learners?",
      questionAr: "كيف تقوم خوارزمية Bagging بإعداد البيانات لمصنفاتها الضعيفة بشكل أساسي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It strictly assigns exponential weights sequentially', isCorrect: false },
        { id: 'b', text: 'It draws random samples from the training data with replacement to create multiple parallel subsets', isCorrect: true },
        { id: 'c', text: 'It completely ignores 50% of the data uniformly', isCorrect: false },
        { id: 'd', text: 'It converts all categorical variables to continuous globally', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q5',
      question: "To critically reduce mathematical correlation between parallel decision trees, what geometric restriction does a Random Forest enforce at EVERY node split?",
      questionAr: "لتقليل الترابط الرياضي بين أشجار القرار المتوازية، ما هو القيد الذي تفرضه الغابات العشوائية عند كل انقسام للعقدة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It forces the tree to split on exactly 10 dimensions simultaneously', isCorrect: false },
        { id: 'b', text: 'It forces the node to evaluate only a random subset of dimensions (m = √d) instead of all dimensions inherently', isCorrect: true },
        { id: 'c', text: 'It strictly disables the Gini Index physically', isCorrect: false },
        { id: 'd', text: 'It requires pruning to exactly depth 2 mathematically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q6',
      question: "In AdaBoost, the voting contribution coefficient (α_m) of a weak learner is mathematically calculated using:",
      questionAr: "في خوارزمية AdaBoost، يتم حساب مُعامل قوة التصويت (α_m) للمصنف الضعيف رياضياً باستخدام:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The natural logarithm of the ratio of its accuracy to its error rate natively', isCorrect: true },
        { id: 'b', text: 'A strict random uniform generator physically', isCorrect: false },
        { id: 'c', text: 'The exact Euclidean distance between clusters completely', isCorrect: false },
        { id: 'd', text: 'The raw sum of all input features geometrically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q7',
      question: "Which of the following ensemble methods operates sequentially (one classifier after the other) rather than in parallel?",
      questionAr: "أي من طرق التجميع التالية تعمل بشكل متسلسل بدلاً من العمل بالتوازي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Bagging natively', isCorrect: false },
        { id: 'b', text: 'Random Forests explicitly', isCorrect: false },
        { id: 'c', text: 'Boosting (AdaBoost) inherently', isCorrect: true },
        { id: 'd', text: 'K-Means Clustering identically', isCorrect: false }
      ]
    },
    {
      id: 'ml-l10-q8',
      question: "In Random Forests, if the dataset has total d = 100 features, what is the mathematically recommended size (m) for the random feature subset evaluated at each node split?",
      questionAr: "في الغابات العشوائية، إذا كانت مجموعة البيانات تحتوي على 100 خاصية (d=100)، فما هو الحجم المُوصى به (m) للمجموعة الفرعية العشوائية عند كل انقسام؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '100 explicitly (all of them)', isCorrect: false },
        { id: 'b', text: '50 natively (exactly half)', isCorrect: false },
        { id: 'c', text: '10 inherently (the square root of d)', isCorrect: true },
        { id: 'd', text: '1 purely (a single dimension)', isCorrect: false }
      ]
    }
  ],

  // ── WRITTEN ────────────────────────────────────────────────────
  written: [
    {
      id: 'ml-l10-w1',
      question: "According to Condorcet's Jury Theorem, why is it absolutely mandatory for 'weak learners' to have an accuracy strictly greater than 0.5? What happens mathematically if their accuracy is exactly 0.4?",
      questionAr: "وفقاً لنظرية كوندورسيه، لماذا من الإلزامي أن تكون دقة المصنفات الضعيفة أعلى من 0.5؟ وماذا يحدث رياضياً إذا كانت دقتها 0.4؟",
      modelAnswer: "Condorcet's Jury Theorem dictates that ensemble majority voting only amplifies the prevalent probability. If p > 0.5, combining them drives the accuracy toward 1.0 (perfect). If p < 0.5 (e.g., 0.4), the majority vote mathematically compounds the errors, driving the ensemble's overall accuracy disastrously toward 0.0.",
      modelAnswerAr: "نظرية كوندورسيه تنص على أن التصويت بالأغلبية يضخم الاحتمال السائد. إذا كان p > 0.5 فالدمج يدفع الدقة نحو 1.0. أما إذا كان p = 0.4 فالتصويت يراكم الأخطاء ويدفع النظام نحو دقة 0.0 بشكل كارثي."
    },
    {
      id: 'ml-l10-w2',
      question: "Explicitly contrast how Bagging and AdaBoost handle training data differently to produce independent learners.",
      questionAr: "قارن بشكل صريح كيف تتعامل كل من خوارزميتي Bagging و AdaBoost مع بيانات التدريب بطرق مختلفة.",
      modelAnswer: "Bagging uses Bootstrapping — drawing random samples with replacement in parallel, maintaining uniform unweighted data subsets. AdaBoost sequentially uses the exact same dataset but mathematically alters the 'weights' of individual data points, actively forcing subsequent classifiers to focus on previously misclassified (hard) examples.",
      modelAnswerAr: "Bagging تستخدم السحب العشوائي مع الإرجاع بالتوازي بأوزان متساوية. AdaBoost تستخدم نفس مجموعة البيانات بشكل متسلسل لكنها تغير أوزان النقاط وتجبر المصنف اللاحق على التركيز على العينات الصعبة."
    },
    {
      id: 'ml-l10-w3',
      question: "Explain deeply why Random Forests were created to modify standard Bagging, and the geometric role of the formula m = √d.",
      questionAr: "اشرح بعمق لماذا ابتُكرت الغابات العشوائية لتعديل Bagging، والدور الهندسي لمعادلة m = √d.",
      modelAnswer: "Bagging trees are highly correlated: if one dominant feature exists, every bootstrapped tree picks it for the root split, making all trees virtually identical. Random Forests forcefully break this correlation by restricting every node to evaluate only a small random subset of features (m = √d). This produces highly diverse, independent trees, vastly improving the ensemble's robustness.",
      modelAnswerAr: "أشجار Bagging مترابطة جداً: الخاصية المهيمنة تختارها كل الأشجار في الجذر فتصبح متطابقة. الغابات العشوائية تكسر هذا الترابط بإجبار كل عقدة على تقييم مجموعة فرعية عشوائية صغيرة (m = √d)، مما ينتج أشجاراً متنوعة ومستقلة ويحسن قوة التجميع بشكل هائل."
    }
  ]
};