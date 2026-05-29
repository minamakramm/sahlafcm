export const LECTURE = {
  subjectId: 'smart-systems',
  number: 2,
  title: 'Computational Intelligence Foundations',
  titleAr: 'المحاضرة 2: أسس الذكاء الحاسوبي',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is Computational Intelligence (CI)?</h2>
<p><strong>Computational Intelligence (CI)</strong> is a branch of AI that develops <strong>adaptive, learning-based, and nature-inspired</strong> computational methods to solve complex, uncertain, nonlinear, or poorly defined problems.</p>
<p>Unlike traditional symbolic AI (rule-based systems), CI emphasizes:</p>
<ol>
  <li><strong>Learning from data</strong></li>
  <li><strong>Adaptation</strong> to changing environments</li>
  <li><strong>Tolerance</strong> to imprecision and uncertainty</li>
  <li><strong>Heuristic and evolutionary</strong> problem-solving</li>
</ol>

<h2>🔹 The Three Foundational Paradigms of CI</h2>

<h3>1. Artificial Neural Networks (ANN)</h3>
<p>Mathematical models inspired by the <strong>human brain</strong> that learn patterns from data through weighted connections.</p>
<ul>
  <li><strong>Core Strength:</strong> Learning from data, modeling nonlinear relationships, generalization to unseen data.</li>
  <li><strong>Structure:</strong> Input layer → Hidden layers (extract patterns) → Output layer.</li>
  <li><strong>Example — Smart Healthcare:</strong> ANN predicts diabetes risk using patient features (age, glucose, BMI). Input: medical features → Hidden layers extract patterns → Output: probability of disease.</li>
</ul>

<h3>2. Fuzzy Logic Systems (FLS)</h3>
<p>A mathematical framework that allows reasoning with <strong>degrees of truth</strong> (values between 0 and 1) instead of binary true/false logic.</p>
<ul>
  <li><strong>Core Strength:</strong> Handling vagueness, human-like reasoning, interpretable rule-based decisions.</li>
  <li><strong>Example — Smart AC:</strong> Instead of "IF temperature > 30 → Turn AC ON", Fuzzy rules say: "IF temperature is <em>Slightly Warm</em> → Fan Speed = Medium" / "IF temperature is <em>Very Hot</em> → Fan Speed = High". Here, "Slightly Warm" has a membership value between 0 and 1.</li>
</ul>

<h3>3. Evolutionary Computation (EC)</h3>
<p>Population-based <strong>optimization</strong> techniques inspired by natural selection and genetics.</p>
<ul>
  <li><strong>Includes:</strong> Genetic Algorithms (GA), Particle Swarm Optimization (PSO), Differential Evolution.</li>
  <li><strong>Core Strength:</strong> Global optimization, searching large solution spaces, no need for gradient information.</li>
  <li><strong>Example — Network Optimization:</strong> Goal: minimize cost of connecting 20 data centers. Steps: (1) Generate population of possible layouts → (2) Evaluate fitness (cost + reliability) → (3) Select best → (4) Apply crossover and mutation → (5) Repeat until optimal design found.</li>
</ul>

<h3>📊 CI vs Traditional AI:</h3>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Traditional AI</th><th>Computational Intelligence</th></tr></thead>
  <tbody>
    <tr><td>Basis</td><td>Rule-based (Symbolic)</td><td>Learning-based (Nature-inspired)</td></tr>
    <tr><td>Approach</td><td>Deterministic</td><td>Probabilistic / Adaptive</td></tr>
    <tr><td>Models</td><td>Requires exact models</td><td>Works with approximations</td></tr>
    <tr><td>Noise Handling</td><td>Limited in noisy environments</td><td>Robust to noise and uncertainty</td></tr>
  </tbody>
</table>

<h2>🔹 Relationships Between CI Components</h2>
<p>CI components are <strong>complementary, not competing</strong>:</p>
<table class="styled-table">
  <thead><tr><th>Relationship</th><th>How It Works</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Learning + Reasoning</strong></td><td>ANN learns patterns → Fuzzy reasons using linguistic rules</td><td>Smart Traffic: ANN predicts congestion, Fuzzy decides signal timing</td></tr>
    <tr><td><strong>Learning + Optimization</strong></td><td>ANN performs prediction → GA/PSO optimizes model parameters</td><td>GA optimizes ANN weights, hidden neurons, learning rate</td></tr>
    <tr><td><strong>Reasoning + Optimization</strong></td><td>Fuzzy systems depend on membership functions → GA optimizes them</td><td>GA optimizes fuzzy membership shapes for better system accuracy</td></tr>
  </tbody>
</table>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Hybrid CI Systems:</strong> Modern smart systems combine all three. Example — Autonomous Vehicle: ANN for object detection, Fuzzy Logic for uncertain road conditions, GA for path planning optimization. This forms a <strong>Neuro-Fuzzy-Evolutionary System</strong>.</span></div>

<h2>🔹 Learning, Adaptation, and Optimization</h2>

<h3>📘 Learning</h3>
<p>The process by which a system <strong>improves performance using data and experience</strong>. Most associated with ANN and Reinforcement Learning.</p>

<h3>📘 Adaptation</h3>
<p>The ability to <strong>adjust internal parameters or decisions in response to environmental changes</strong>. Occurs online, continuously, without full retraining.</p>
<p><strong>Key Difference:</strong> Learning extracts patterns from data. Adaptation adjusts behavior in <em>real time</em>.</p>

<h3>📘 Optimization</h3>
<p>Finding the <strong>best solution among many possibilities</strong> under given constraints. Typically heuristic, population-based, and non-deterministic.</p>

<h3>📊 Conceptual Comparison:</h3>
<table class="styled-table">
  <thead><tr><th>Aspect</th><th>Learning</th><th>Adaptation</th><th>Optimization</th></tr></thead>
  <tbody>
    <tr><td><strong>Purpose</strong></td><td>Improve model knowledge</td><td>Adjust to change</td><td>Find best solution</td></tr>
    <tr><td><strong>Time Scale</strong></td><td>Training phase</td><td>Online / dynamic</td><td>Iterative search</td></tr>
    <tr><td><strong>Example</strong></td><td>Train ANN</td><td>Update RL policy</td><td>GA minimize cost</td></tr>
    <tr><td><strong>Data Needed</strong></td><td>Historical data</td><td>Real-time feedback</td><td>Fitness evaluation</td></tr>
  </tbody>
</table>

<h2>🔹 Numerical Worked Example: Smart Traffic Intersection</h2>

<h3>Step 1 — Learning (ANN Prediction)</h3>
<p>Simple linear model: ŷ = w × x. Initial weight w = 0.01, learning rate α = 0.001.</p>
<p>Take x = 20 (vehicles/min): Prediction ŷ = 0.01 × 20 = 0.2. Actual y = 0.4. Error = 0.4 − 0.2 = 0.2.</p>
<p>Weight update: w_new = 0.01 + 0.001 × 20 × 0.2 = 0.01 + 0.004 = <strong>0.014</strong>. The model learns by adjusting weight.</p>

<h3>Step 2 — Adaptation (RL Signal Control)</h3>
<p>Q-learning: Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') − Q(s,a)]</p>
<p>Given: Q(S₂,A₁) = 5, r = −40 (reward), γ = 0.9, max Q(S₁) = 20, α = 0.1</p>
<p>Q_new = 5 + 0.1[−40 + 0.9(20) − 5] = 5 + 0.1[−27] = 5 − 2.7 = <strong>2.3</strong></p>

<h3>Step 3 — Optimization (GA for Cycle Length)</h3>
<table class="styled-table">
  <thead><tr><th>Individual</th><th>Cycle Time</th><th>Avg Delay</th><th>Fitness (1/Delay)</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>60 sec</td><td>45 sec</td><td>0.022</td></tr>
    <tr><td>B</td><td>80 sec</td><td>35 sec</td><td>0.029</td></tr>
    <tr><td>C</td><td>100 sec</td><td>30 sec</td><td>0.033 ✓ Best</td></tr>
  </tbody>
</table>
<p>Crossover B(80) + C(100): Child = (80+100)/2 = 90 sec → New delay = 28 sec → Fitness = 1/28 = 0.036 → <strong>Better than previous best!</strong></p>`,
        bodyAr: `<h2>🔹 ما هو الذكاء الحاسوبي؟</h2>
<p>فرع من الذكاء الاصطناعي يطور أساليب حسابية <strong>تكيفية ومستوحاة من الطبيعة</strong> لحل المشاكل المعقدة.</p>
<h3>الركائز الثلاث</h3>
<ul>
<li><strong>الشبكات العصبية (ANN):</strong> مستوحاة من الدماغ البشري — التعرف على الأنماط.</li>
<li><strong>المنطق المضبب (Fuzzy):</strong> درجات الحقيقة بين 0 و1 — التعامل مع الغموض.</li>
<li><strong>الحوسبة التطورية (GA/PSO):</strong> مستوحاة من التطور الطبيعي — التحسين.</li>
</ul>`,
      },
    },
  ],

  summary: {
    points: [
      "CI: Adaptive, learning-based, nature-inspired methods for complex problems",
      "ANN: Brain-inspired models — Learning from data, pattern recognition, prediction",
      "Fuzzy Logic: Degrees of truth [0,1] — handles vagueness, human-like reasoning",
      "Evolutionary Computation (GA/PSO): Population-based global optimization",
      "CI components are complementary: Learning+Reasoning, Learning+Optimization, Reasoning+Optimization",
      "Hybrid systems combine ANN + Fuzzy + GA for Neuro-Fuzzy-Evolutionary intelligence",
      "Learning = extract patterns from data | Adaptation = adjust in real-time | Optimization = find best solution",
      "Numerical example: ANN weight update, Q-learning policy update, GA crossover for cycle optimization",
    ],
    pointsAr: [
      "الذكاء الحاسوبي: أساليب تكيفية مستوحاة من الطبيعة للمشاكل المعقدة",
      "ANN: نماذج مستوحاة من الدماغ — التعلم من البيانات",
      "المنطق المضبب: درجات الحقيقة [0,1] — يتعامل مع الغموض",
      "الحوسبة التطورية: تحسين عالمي قائم على السكان",
      "التعلم = استخلاص الأنماط | التكيف = التعديل الآني | التحسين = إيجاد أفضل حل",
    ],
  },

  mcq: [
    { id: 'ss-l2-q1', question: "Which of these is NOT a core technique in Computational Intelligence?", difficulty: 'easy', answers: [{ id: 'a', text: 'Neural Networks', isCorrect: false }, { id: 'b', text: 'Fuzzy Logic', isCorrect: false }, { id: 'c', text: 'Genetic Algorithms', isCorrect: false }, { id: 'd', text: 'Fixed Rule-based Logic', isCorrect: true }] },
    { id: 'ss-l2-q2', question: "Artificial Neural Networks are primarily inspired by:", difficulty: 'easy', answers: [{ id: 'a', text: 'Evolution', isCorrect: false }, { id: 'b', text: 'Human Brain', isCorrect: true }, { id: 'c', text: 'Social Insects', isCorrect: false }, { id: 'd', text: 'Boolean Logic', isCorrect: false }] },
    { id: 'ss-l2-q3', question: "Which technique uses 'Crossover' and 'Mutation' to find an optimal solution?", difficulty: 'medium', answers: [{ id: 'a', text: 'Fuzzy Logic', isCorrect: false }, { id: 'b', text: 'Genetic Algorithms', isCorrect: true }, { id: 'c', text: 'Swarm Intelligence', isCorrect: false }, { id: 'd', text: 'Backpropagation', isCorrect: false }] },
    { id: 'ss-l2-q4', question: "Fuzzy Logic is useful because it allows for:", difficulty: 'easy', answers: [{ id: 'a', text: 'Infinite speed', isCorrect: false }, { id: 'b', text: 'Boolean (True/False) only', isCorrect: false }, { id: 'c', text: 'Degrees of truth between 0 and 1', isCorrect: true }, { id: 'd', text: 'Removing all sensors', isCorrect: false }] },
    { id: 'ss-l2-q5', question: "Particle Swarm Optimization (PSO) is inspired by:", difficulty: 'medium', answers: [{ id: 'a', text: 'Biology of a single cell', isCorrect: false }, { id: 'b', text: 'Flocking behavior of birds', isCorrect: true }, { id: 'c', text: 'Chemical gradients', isCorrect: false }, { id: 'd', text: "Socrates' logic", isCorrect: false }] },
    { id: 'ss-l2-q6', question: "A washing machine adjusting water based on 'dirtiness' level probably uses:", difficulty: 'medium', answers: [{ id: 'a', text: 'Genetic Algorithms', isCorrect: false }, { id: 'b', text: 'Fuzzy Logic', isCorrect: true }, { id: 'c', text: 'Swarm Intelligence', isCorrect: false }, { id: 'd', text: 'Abduction', isCorrect: false }] },
    { id: 'ss-l2-q7', question: "Which CI paradigm excels at recognizing nonlinear patterns in high-dimensional data?", difficulty: 'medium', answers: [{ id: 'a', text: 'Fuzzy Logic', isCorrect: false }, { id: 'b', text: 'Genetic Algorithms', isCorrect: false }, { id: 'c', text: 'Neural Networks', isCorrect: true }, { id: 'd', text: 'Rule-based systems', isCorrect: false }] },
    { id: 'ss-l2-q8', question: "'Adaptation' differs from 'Learning' because it:", difficulty: 'medium', answers: [{ id: 'a', text: 'Uses historical data only', isCorrect: false }, { id: 'b', text: 'Adjusts behavior in real-time to environmental changes', isCorrect: true }, { id: 'c', text: 'Requires retraining the entire model', isCorrect: false }, { id: 'd', text: 'Is the same thing', isCorrect: false }] },
    { id: 'ss-l2-q9', question: "In the GA numerical example, crossover of B(80sec) and C(100sec) produces:", difficulty: 'medium', answers: [{ id: 'a', text: '60 sec', isCorrect: false }, { id: 'b', text: '90 sec', isCorrect: true }, { id: 'c', text: '180 sec', isCorrect: false }, { id: 'd', text: '50 sec', isCorrect: false }] },
    { id: 'ss-l2-q10', question: "Which CI component provides 'human-like reasoning' with interpretable rules?", difficulty: 'easy', answers: [{ id: 'a', text: 'ANN', isCorrect: false }, { id: 'b', text: 'Fuzzy Logic', isCorrect: true }, { id: 'c', text: 'Genetic Algorithm', isCorrect: false }, { id: 'd', text: 'PSO', isCorrect: false }] },
    { id: 'ss-l2-q11', question: "Which CI technique is best for an image recognition system?", difficulty: 'easy', answers: [{ id: 'a', text: 'Swarm Intelligence', isCorrect: false }, { id: 'b', text: 'Neural Networks', isCorrect: true }, { id: 'c', text: 'Deduction', isCorrect: false }, { id: 'd', text: 'Boolean Logic', isCorrect: false }] },
    { id: 'ss-l2-q12', question: "In fuzzy logic, a temperature condition like 'slightly warm' is a:", difficulty: 'easy', answers: [{ id: 'a', text: 'Binary state', isCorrect: false }, { id: 'b', text: 'Fuzzy set', isCorrect: true }, { id: 'c', text: 'Boolean error', isCorrect: false }, { id: 'd', text: 'Genetic mutation', isCorrect: false }] },
    { id: 'ss-l2-q13', question: "What is 'Mutation' in a Genetic Algorithm?", difficulty: 'medium', answers: [{ id: 'a', text: 'Combining two parents', isCorrect: false }, { id: 'b', text: 'Randomly changing a small part of a solution', isCorrect: true }, { id: 'c', text: 'Selecting the best parents', isCorrect: false }, { id: 'd', text: 'Moving to the next generation', isCorrect: false }] },
    { id: 'ss-l2-q14', question: "Ant Colony Optimization is a type of:", difficulty: 'medium', answers: [{ id: 'a', text: 'Neural Network', isCorrect: false }, { id: 'b', text: 'Swarm Intelligence', isCorrect: true }, { id: 'c', text: 'Fuzzy Logic', isCorrect: false }, { id: 'd', text: 'Deductive Reasoning', isCorrect: false }] },
    { id: 'ss-l2-q15', question: "Classical AI is typically referred to as:", difficulty: 'easy', answers: [{ id: 'a', text: 'Symbolic AI', isCorrect: true }, { id: 'b', text: 'Evolutionary AI', isCorrect: false }, { id: 'c', text: 'Natural AI', isCorrect: false }, { id: 'd', text: 'Adaptive AI', isCorrect: false }] },
    { id: 'ss-l2-q16', question: "The process of 'Training' is most associated with:", difficulty: 'easy', answers: [{ id: 'a', text: 'Fuzzy systems', isCorrect: false }, { id: 'b', text: 'Neural Networks', isCorrect: true }, { id: 'c', text: 'Expert systems', isCorrect: false }, { id: 'd', text: 'Mechanical governors', isCorrect: false }] },
    { id: 'ss-l2-q17', question: "Which technique is best for finding the shortest delivery path for 1000 trucks?", difficulty: 'medium', answers: [{ id: 'a', text: 'Deduction', isCorrect: false }, { id: 'b', text: 'Genetic Algorithms', isCorrect: true }, { id: 'c', text: 'Induction', isCorrect: false }, { id: 'd', text: 'Simple Reflex', isCorrect: false }] },
    { id: 'ss-l2-q18', question: "CI methods emphasize learning from data and ___________ to changing environments.", difficulty: 'easy', answers: [{ id: 'a', text: 'Ignoring', isCorrect: false }, { id: 'b', text: 'Resistance', isCorrect: false }, { id: 'c', text: 'Adaptation', isCorrect: true }, { id: 'd', text: 'Rejection', isCorrect: false }] },
    { id: 'ss-l2-q19', question: "In a hybrid CI system for autonomous vehicles, ANN handles:", difficulty: 'medium', answers: [{ id: 'a', text: 'Path optimization', isCorrect: false }, { id: 'b', text: 'Object detection', isCorrect: true }, { id: 'c', text: 'Linguistic rules', isCorrect: false }, { id: 'd', text: 'Cycle timing', isCorrect: false }] },
    { id: 'ss-l2-q20', question: "'Learning' in CI refers to:", difficulty: 'easy', answers: [{ id: 'a', text: 'Memorizing rules', isCorrect: false }, { id: 'b', text: 'Extracting patterns from data to improve performance', isCorrect: true }, { id: 'c', text: 'Being programmed manually', isCorrect: false }, { id: 'd', text: 'Following fixed instructions', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l2-w1', question: "Differentiate between Classical AI and Computational Intelligence across four features.", modelAnswer: "Basis: Rule-based vs Nature-inspired. Approach: Deterministic vs Probabilistic. Models: Exact vs Approximations. Noise: Limited vs Robust." },
    { id: 'ss-l2-w2', question: "Describe the three foundational paradigms of CI and their core strengths.", modelAnswer: "ANN: Learning from data, pattern recognition. Fuzzy Logic: Handling vagueness with degrees of truth. EC (GA/PSO): Global optimization without gradient information." },
    { id: 'ss-l2-w3', question: "Explain the three relationships between CI components with examples.", modelAnswer: "Learning+Reasoning: ANN predicts, Fuzzy decides (traffic). Learning+Optimization: GA tunes ANN weights. Reasoning+Optimization: GA optimizes fuzzy membership shapes." },
    { id: 'ss-l2-w4', question: "Define Learning, Adaptation, and Optimization in CI and explain how they differ.", modelAnswer: "Learning: extract patterns from data (training phase). Adaptation: adjust real-time to changes (online). Optimization: search for best solution under constraints (iterative)." },
    { id: 'ss-l2-w5', question: "Walk through the numerical worked example showing how ANN learning, RL adaptation, and GA optimization work together in a smart traffic system.", modelAnswer: "ANN: weight adjusts from 0.01 to 0.014. RL: Q-value adjusts based on reward. GA: crossover of 80+100 = 90sec cycle with better fitness." },
    { id: 'ss-l2-w6', question: "Explain how a Genetic Algorithm operates (Selection, Crossover, Mutation) with a network optimization example.", modelAnswer: "Generate population → Evaluate fitness (cost+reliability) → Select best → Crossover combines parents → Mutation adds randomness → Repeat until optimal." },
  ],
}
