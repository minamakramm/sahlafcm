export const LECTURE = {
  subjectId: 'smart-systems',
  number: 4,
  title: 'Intelligent Agents & Environments',
  titleAr: 'المحاضرة 4: الوكلاء الأذكياء والبيئات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is an Intelligent Agent?</h2>
<p>An <strong>intelligent agent</strong> is an autonomous entity that:</p>
<ol>
  <li><strong>Perceives</strong> its environment via sensors</li>
  <li><strong>Decides</strong> using an internal mechanism (rules, learning, optimization)</li>
  <li><strong>Acts</strong> via actuators</li>
  <li><strong>Learns and adapts</strong> to improve performance</li>
</ol>
<p>Formally: <strong>Agent = f(Percepts) → Actions</strong>. An intelligent agent aims to maximize a performance measure.</p>

<h3>Examples:</h3>
<table class="styled-table">
  <thead><tr><th>Agent</th><th>Sensor</th><th>Percept</th><th>Action</th><th>Goal</th></tr></thead>
  <tbody>
    <tr><td>Thermostat</td><td>Temperature sensor</td><td>30°C</td><td>Turn on cooling</td><td>Maintain 22°C</td></tr>
    <tr><td>Self-driving car</td><td>Cameras, LiDAR</td><td>Obstacle detected</td><td>Braking</td><td>Safe navigation</td></tr>
    <tr><td>Medical AI</td><td>Lab results</td><td>Fever + cough</td><td>Recommend flu test</td><td>Accurate diagnosis</td></tr>
  </tbody>
</table>

<h2>🔹 Rational Agents</h2>
<p>A <strong>rational agent</strong> chooses the action that <strong>maximizes expected performance</strong> based on available knowledge and percept history.</p>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Important:</strong> Rational ≠ Always correct. Rational = Best decision <em>given available information</em>.</span></div>

<h2>🔹 PEAS Framework (Task Environment)</h2>
<p><strong>PEAS</strong> = Performance, Environment, Actuators, Sensors.</p>
<table class="styled-table">
  <thead><tr><th>Component</th><th>Autonomous Taxi Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Performance</strong></td><td>Safe + Fast delivery</td></tr>
    <tr><td><strong>Environment</strong></td><td>Roads, traffic, pedestrians</td></tr>
    <tr><td><strong>Actuators</strong></td><td>Steering, brakes, throttle</td></tr>
    <tr><td><strong>Sensors</strong></td><td>Cameras, GPS, LiDAR</td></tr>
  </tbody>
</table>

<h2>🔹 Agent Architectures</h2>
<table class="styled-table">
  <thead><tr><th>Architecture</th><th>Key Feature</th><th>Structure</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Reactive</strong></td><td>No internal world model. Direct stimulus-response.</td><td>Perception → Action</td><td>Obstacle avoidance robot: obstacle detected → turn left</td></tr>
    <tr><td><strong>Deliberative</strong></td><td>Maintains internal model. Plans and reasons.</td><td>Perception → Model → Planning → Action</td><td>Delivery robot: builds map, plans shortest path</td></tr>
    <tr><td><strong>Hybrid</strong></td><td>Combines reactive (fast) + deliberative (planning)</td><td>Reactive layer + Deliberative layer</td><td>Autonomous car: reactive braking + route planning</td></tr>
  </tbody>
</table>

<h2>🔹 Environment Types</h2>
<table class="styled-table">
  <thead><tr><th>Property</th><th>Type A</th><th>Type B</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Observable</strong></td><td>Fully observable</td><td>Partially observable</td><td>Chess (full) vs Medical diagnosis (partial)</td></tr>
    <tr><td><strong>Deterministic</strong></td><td>Deterministic</td><td>Stochastic</td><td>Puzzle (deterministic) vs Stock market (stochastic)</td></tr>
    <tr><td><strong>Timing</strong></td><td>Static</td><td>Dynamic</td><td>Crossword (static) vs Traffic system (dynamic)</td></tr>
  </tbody>
</table>

<h2>🔹 Knowledge-Based Agents</h2>
<p>Knowledge allows agents to: <strong>infer unseen information</strong>, reduce search complexity, and make <strong>explainable decisions</strong>.</p>
<p><strong>Forward Chaining (Modus Ponens):</strong></p>
<ul>
  <li>Facts: Fever(Ali), Cough(Ali)</li>
  <li>Rule: IF Fever(x) AND Cough(x) → Flu(x)</li>
  <li>Inference: Apply rule → <strong>Flu(Ali)</strong></li>
</ul>

<h2>🔹 RL Numerical Example: Smart Traffic Signal</h2>
<p>An RL agent controls a traffic light. States: S₁ = Low traffic, S₂ = High traffic. Actions: A₁ = Extend green, A₂ = Switch phase.</p>
<p><strong>Q-Learning Update:</strong> Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') − Q(s,a)]</p>
<p>Given: α = 0.1, γ = 0.9. Current state: S₂, Action: A₁ (Extend), Reward: +10, Next state: S₁.</p>
<table class="styled-table">
  <thead><tr><th>State</th><th>Extend (A₁)</th><th>Switch (A₂)</th></tr></thead>
  <tbody>
    <tr><td>S₁</td><td>2</td><td>3</td></tr>
    <tr><td>S₂</td><td>5</td><td>1</td></tr>
  </tbody>
</table>
<p>Q(S₂,A₁) = 5. Max future Q in S₁ = max(2,3) = 3.</p>
<p>Target = 10 + 0.9(3) = 12.7</p>
<p>Q_new = 5 + 0.1(12.7 − 5) = 5 + 0.77 = <strong>5.77</strong></p>

<h2>🔹 Multi-Agent Systems (MAS)</h2>
<table class="styled-table">
  <thead><tr><th>Type</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Cooperative</strong></td><td>Drone fleet mapping an area together</td></tr>
    <tr><td><strong>Competitive</strong></td><td>Automated trading bots in stock market</td></tr>
    <tr><td><strong>Mixed</strong></td><td>Traffic intersections coordination</td></tr>
  </tbody>
</table>

<h2>🔹 Limitations of Simple Problem-Solving Agents</h2>
<ul>
  <li><strong>No Learning:</strong> Cannot update knowledge or adapt.</li>
  <li><strong>Knowledge Acquisition Bottleneck:</strong> Manual encoding of expert rules is slow and expensive.</li>
  <li><strong>Brittleness:</strong> If situation not encoded → failure.</li>
  <li><strong>Computational Complexity:</strong> Too many rules become expensive.</li>
  <li><strong>Limited Uncertainty Handling:</strong> Pure symbolic systems struggle with probabilities.</li>
</ul>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Key Insight:</strong> Knowledge transforms an agent from: Blind search → Intelligent reasoning, Reaction → Explanation, Trial-and-error → Structured inference.</span></div>`,
        bodyAr: `<h2>🔹 ما هو الوكيل الذكي؟</h2>
<p>كيان مستقل يدرك بيئته عبر المستشعرات ويتصرف عبر المشغلات لتحقيق أهدافه.</p>
<h3>إطار PEAS</h3>
<p>الأداء، البيئة، المشغلات، المستشعرات — لتحديد بيئة مهمة الوكيل.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "Intelligent Agent: Perceives environment → Decides → Acts → Learns",
      "Rational Agent: Maximizes expected performance given available information",
      "PEAS Framework: Performance, Environment, Actuators, Sensors",
      "Reactive: Direct stimulus-response (fast, no model). Deliberative: Planning-based (has model). Hybrid: Both",
      "Environments: Fully/Partially observable, Deterministic/Stochastic, Static/Dynamic",
      "Knowledge Base: Facts + Rules → Inference engine → Decisions (Forward Chaining / Modus Ponens)",
      "Q-Learning: Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') − Q(s,a)]",
      "Multi-Agent Systems: Cooperative, Competitive, or Mixed interaction patterns",
      "Limitations: No learning, brittleness, knowledge bottleneck, computational complexity",
    ],
    pointsAr: [
      "الوكيل الذكي: يدرك ← يقرر ← يتصرف ← يتعلم",
      "الوكيل العقلاني: يعظم الأداء المتوقع بناءً على المعلومات المتاحة",
      "إطار PEAS: الأداء، البيئة، المشغلات، المستشعرات",
      "الوكيل الانعكاسي: استجابة مباشرة. الوكيل التداولي: تخطيط. الهجين: كلاهما",
    ],
  },

  mcq: [
    { id: 'ss-l4-q1', question: "An intelligent agent formally maps:", difficulty: 'easy', answers: [{ id: 'a', text: 'Actions to sensors', isCorrect: false }, { id: 'b', text: 'Percept sequences to actions', isCorrect: true }, { id: 'c', text: 'Rules to databases', isCorrect: false }, { id: 'd', text: 'Clouds to edges', isCorrect: false }] },
    { id: 'ss-l4-q2', question: "A 'Rational Agent' is one that:", difficulty: 'medium', answers: [{ id: 'a', text: 'Always makes the correct decision', isCorrect: false }, { id: 'b', text: 'Maximizes expected performance given available info', isCorrect: true }, { id: 'c', text: 'Uses only symbolic logic', isCorrect: false }, { id: 'd', text: 'Requires human supervision', isCorrect: false }] },
    { id: 'ss-l4-q3', question: "In PEAS, 'A' stands for:", difficulty: 'easy', answers: [{ id: 'a', text: 'Applications', isCorrect: false }, { id: 'b', text: 'Actuators', isCorrect: true }, { id: 'c', text: 'Algorithms', isCorrect: false }, { id: 'd', text: 'Architecture', isCorrect: false }] },
    { id: 'ss-l4-q4', question: "A reactive agent differs from a deliberative agent because:", difficulty: 'medium', answers: [{ id: 'a', text: 'It has no internal world model', isCorrect: true }, { id: 'b', text: 'It uses deep learning', isCorrect: false }, { id: 'c', text: 'It requires more memory', isCorrect: false }, { id: 'd', text: 'It is always slower', isCorrect: false }] },
    { id: 'ss-l4-q5', question: "Which architecture combines fast reactive response with planning?", difficulty: 'easy', answers: [{ id: 'a', text: 'Reactive only', isCorrect: false }, { id: 'b', text: 'Deliberative only', isCorrect: false }, { id: 'c', text: 'Hybrid', isCorrect: true }, { id: 'd', text: 'Fuzzy', isCorrect: false }] },
    { id: 'ss-l4-q6', question: "A chess board is an example of which environment type?", difficulty: 'easy', answers: [{ id: 'a', text: 'Partially observable', isCorrect: false }, { id: 'b', text: 'Fully observable', isCorrect: true }, { id: 'c', text: 'Stochastic', isCorrect: false }, { id: 'd', text: 'Dynamic', isCorrect: false }] },
    { id: 'ss-l4-q7', question: "The stock market is an example of a __________ environment.", difficulty: 'medium', answers: [{ id: 'a', text: 'Static, Deterministic', isCorrect: false }, { id: 'b', text: 'Dynamic, Stochastic', isCorrect: true }, { id: 'c', text: 'Fully Observable', isCorrect: false }, { id: 'd', text: 'Binary', isCorrect: false }] },
    { id: 'ss-l4-q8', question: "In Forward Chaining, if Fever(Ali) AND Cough(Ali) and the rule says Fever∧Cough→Flu, the inference is:", difficulty: 'medium', answers: [{ id: 'a', text: 'No conclusion', isCorrect: false }, { id: 'b', text: 'Flu(Ali)', isCorrect: true }, { id: 'c', text: 'More data needed', isCorrect: false }, { id: 'd', text: 'Remove Ali from KB', isCorrect: false }] },
    { id: 'ss-l4-q9', question: "In Q-learning, α represents:", difficulty: 'medium', answers: [{ id: 'a', text: 'Discount factor', isCorrect: false }, { id: 'b', text: 'Learning rate', isCorrect: true }, { id: 'c', text: 'Reward value', isCorrect: false }, { id: 'd', text: 'Number of states', isCorrect: false }] },
    { id: 'ss-l4-q10', question: "In the RL numerical example, Q(S₂,A₁) updates from 5 to:", difficulty: 'medium', answers: [{ id: 'a', text: '5.77', isCorrect: true }, { id: 'b', text: '6.80', isCorrect: false }, { id: 'c', text: '3.20', isCorrect: false }, { id: 'd', text: '12.70', isCorrect: false }] },
    { id: 'ss-l4-q11', question: "Modus Ponens in logic states: If A→B and A is true, then:", difficulty: 'easy', answers: [{ id: 'a', text: 'A is false', isCorrect: false }, { id: 'b', text: 'B is true', isCorrect: true }, { id: 'c', text: 'B might be true', isCorrect: false }, { id: 'd', text: 'Nothing can be concluded', isCorrect: false }] },
    { id: 'ss-l4-q12', question: "'Brittleness' in expert systems means:", difficulty: 'medium', answers: [{ id: 'a', text: 'They break physically', isCorrect: false }, { id: 'b', text: 'They fail when encountering situations not encoded in rules', isCorrect: true }, { id: 'c', text: 'They are too flexible', isCorrect: false }, { id: 'd', text: 'They use too much memory', isCorrect: false }] },
    { id: 'ss-l4-q13', question: "Cooperative MAS is exemplified by:", difficulty: 'easy', answers: [{ id: 'a', text: 'Trading bots competing', isCorrect: false }, { id: 'b', text: 'Drone fleet mapping an area together', isCorrect: true }, { id: 'c', text: 'Single thermostat', isCorrect: false }, { id: 'd', text: 'Manual traffic control', isCorrect: false }] },
    { id: 'ss-l4-q14', question: "A medical AI recommending a flu test based on fever and cough is an example of:", difficulty: 'medium', answers: [{ id: 'a', text: 'Rational decision-making', isCorrect: true }, { id: 'b', text: 'Sensor fusion', isCorrect: false }, { id: 'c', text: 'Genetic optimization', isCorrect: false }, { id: 'd', text: 'Simple reflex', isCorrect: false }] },
    { id: 'ss-l4-q15', question: "In a 'Partially Observable' environment, the agent's sensors:", difficulty: 'medium', answers: [{ id: 'a', text: 'See the whole state at once', isCorrect: false }, { id: 'b', text: 'Receive only some information about the state', isCorrect: true }, { id: 'c', text: 'Do not work at all', isCorrect: false }, { id: 'd', text: 'Always provide perfect data', isCorrect: false }] },
    { id: 'ss-l4-q16', question: "A 'Deterministic' environment means:", difficulty: 'easy', answers: [{ id: 'a', text: 'The next state is completely determined by the current state and action', isCorrect: true }, { id: 'b', text: 'The environment is random', isCorrect: false }, { id: 'c', text: 'No actions are possible', isCorrect: false }, { id: 'd', text: 'It changes while the agent is thinking', isCorrect: false }] },
    { id: 'ss-l4-q17', question: "A cross-word puzzle is an example of which environment type?", difficulty: 'medium', answers: [{ id: 'a', text: 'Dynamic', isCorrect: false }, { id: 'b', text: 'Static', isCorrect: true }, { id: 'c', text: 'Stochastic', isCorrect: false }, { id: 'd', text: 'Continuous', isCorrect: false }] },
    { id: 'ss-l4-q18', question: "In the P-E-A-S framework for an Automated Taxi, 'Pedestrians' are part of the:", difficulty: 'easy', answers: [{ id: 'a', text: 'Performance', isCorrect: false }, { id: 'b', text: 'Environment', isCorrect: true }, { id: 'c', text: 'Actuators', isCorrect: false }, { id: 'd', text: 'Sensors', isCorrect: false }] },
    { id: 'ss-l4-q19', question: "Which agent architecture is like a 'Reflex'—it just acts based on what it sees now?", difficulty: 'medium', answers: [{ id: 'a', text: 'Reactive', isCorrect: true }, { id: 'b', text: 'Deliberative', isCorrect: false }, { id: 'c', text: 'Hybrid', isCorrect: false }, { id: 'd', text: 'Cognitive', isCorrect: false }] },
    { id: 'ss-l4-q20', question: "Knowledge-based agents use an 'Inference Engine' to:", difficulty: 'medium', answers: [{ id: 'a', text: 'Power the motor', isCorrect: false }, { id: 'b', text: 'Derive new information from the knowledge base', isCorrect: true }, { id: 'c', text: 'Connect to Wi-Fi', isCorrect: false }, { id: 'd', text: 'Recharge the battery', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l4-w1', question: "Define an intelligent agent and describe its four main functions with examples.", modelAnswer: "Perceives (sensors), Decides (rules/learning), Acts (actuators), Learns (feedback). Example: Self-driving car — cameras perceive, AI decides, steering acts, data improves model." },
    { id: 'ss-l4-w2', question: "Explain the three agent architectures (Reactive, Deliberative, Hybrid) with examples.", modelAnswer: "Reactive: no model, stimulus-response (obstacle robot). Deliberative: has model, plans (delivery robot). Hybrid: combines both (autonomous car: emergency braking + route planning)." },
    { id: 'ss-l4-w3', question: "Describe the PEAS framework and apply it to an autonomous taxi.", modelAnswer: "Performance (safe+fast), Environment (roads, traffic), Actuators (steering, brakes), Sensors (cameras, GPS, LiDAR)." },
    { id: 'ss-l4-w4', question: "Explain the role of Knowledge in intelligent agents and give an example of Forward Chaining.", modelAnswer: "Knowledge enables inference, reduces search. Forward Chaining: Facts (Fever+Cough) + Rule (Fever∧Cough→Flu) = Conclusion (Flu). Uses Modus Ponens." },
    { id: 'ss-l4-w5', question: "Solve the RL Q-learning example step by step: α=0.1, γ=0.9, Q(S₂,A₁)=5, r=+10, max Q(S₁)=3.", modelAnswer: "Target = r + γ·maxQ = 10 + 0.9(3) = 12.7. Update: Q_new = 5 + 0.1(12.7-5) = 5 + 0.77 = 5.77." },
    { id: 'ss-l4-w6', question: "Discuss the limitations of simple problem-solving agents.", modelAnswer: "No learning (can't adapt), knowledge bottleneck (manual rule encoding), brittleness (fails on unknown inputs), computational complexity (large KBs), limited uncertainty handling (no probabilities)." },
  ],
}
