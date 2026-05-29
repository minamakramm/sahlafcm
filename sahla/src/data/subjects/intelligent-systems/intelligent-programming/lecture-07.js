export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 7,
  title: 'Intelligent Agents',
  titleAr: 'الوكلاء الأذكياء',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is an Agent?</h2>
<p>An <strong>agent</strong> is an entity that perceives its environment through <strong>sensors</strong> and acts upon that environment through <strong>actuators</strong>.</p>
<p>It performs tasks on behalf of users, such as answering questions, generating content, or solving complex problems.</p>

<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span><strong>Example:</strong> A robotic vacuum cleaner uses sensors (bumpers, infrared) to perceive obstacles and actuators (motors, brushes) to clean the floor.</span>
</div>

<h2>🔹 The PEAS Framework</h2>
<p>Before building an agent, we must specify its environment using the <strong>PEAS</strong> framework — a standard way to describe what an agent needs to operate.</p>
<table class="styled-table">
  <thead><tr><th>Letter</th><th>Stands For</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>P</strong></td><td>Performance Measure</td><td>The criteria used to judge how well the agent is doing. Example: accuracy, speed, user satisfaction.</td></tr>
    <tr><td><strong>E</strong></td><td>Environment</td><td>The external world the agent interacts with. Example: a road network, an inbox, a game board.</td></tr>
    <tr><td><strong>A</strong></td><td>Actuators</td><td>The mechanisms the agent uses to take action. Example: motors, display output, API calls.</td></tr>
    <tr><td><strong>S</strong></td><td>Sensors</td><td>The mechanisms the agent uses to perceive the environment. Example: cameras, keyboard input, data feeds.</td></tr>
  </tbody>
</table>

<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span><strong>PEAS Example — Self-Driving Car:</strong><br/>
  <strong>P:</strong> Safe driving, on-time arrival, legal compliance.<br/>
  <strong>E:</strong> Roads, traffic, pedestrians, weather.<br/>
  <strong>A:</strong> Steering wheel, brakes, accelerator, horn.<br/>
  <strong>S:</strong> Cameras, GPS, lidar, speedometer.</span>
</div>

<h2>🔹 Intelligent Agent Features</h2>
<p>An <strong>intelligent agent</strong> is an agent that can autonomously make decisions to achieve specific goals, often using some form of reasoning or learning.</p>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Reactive</strong></td><td>Responds immediately to changes in the environment (Sense → Respond).</td></tr>
    <tr><td><strong>Pro-active</strong></td><td>Doesn't just react; it takes initiative and plans actions to achieve its goals.</td></tr>
    <tr><td><strong>Social</strong></td><td>Communicates and collaborates with other agents or users to achieve common goals.</td></tr>
  </tbody>
</table>

<h3>Reactive Behavior</h3>
<ul>
  <li>Immediate response to environment changes.</li>
  <li><strong>Example:</strong> A smoke detector sounds an alarm as soon as it detects smoke.</li>
  <li><strong>Pros:</strong> Fast response, good for real-time systems.</li>
  <li><strong>Cons:</strong> No planning, cannot anticipate future needs.</li>
</ul>

<h3>Pro-active Behavior</h3>
<ul>
  <li>Goal-driven and initiative-taking.</li>
  <li><strong>Example:</strong> A calendar agent reminds you to leave early because it anticipates traffic.</li>
  <li><strong>Pros:</strong> Intelligent decision-making and planning.</li>
  <li><strong>Cons:</strong> Requires more computation and resources.</li>
</ul>

<h3>Social Behavior</h3>
<ul>
  <li>Collaboration and teamwork.</li>
  <li><strong>Example:</strong> In a multi-agent system, delivery drones coordinate to cover different zones efficiently.</li>
  <li><strong>Pros:</strong> Scalability and shared goals.</li>
  <li><strong>Cons:</strong> Needs trust, protocols, and clear communication rules.</li>
</ul>

<h2>🔹 Types of Agents</h2>
<ol>
  <li><strong>Goal-Based Agents:</strong> Act to achieve specific goals rather than just reacting. Example: A GPS app finding the best route.</li>
  <li><strong>Utility-Based Agents:</strong> Consider multiple goals and pick actions that maximize a <em>utility function</em> (satisfaction/utility). Example: Stock-trading bots.</li>
  <li><strong>Learning Agents:</strong> Improve their performance over time based on experience. Example: Recommendation systems like Netflix.</li>
  <li><strong>Model-Based Agents:</strong> Maintain an <em>internal state</em> — a model of the world — to track context that is no longer directly visible from current sensors. This allows the agent to handle partially observable environments. Example: A chess-playing agent that remembers which pieces have moved even when the board is partially hidden.</li>
  <li><strong>Mobile Agents:</strong> Software agents that can move across different servers to gather data.</li>
  <li><strong>Interface Agents:</strong> Assist users through a user interface. Example: Siri or Alexa.</li>
</ol>

<h2>🔹 Multi-Agent Systems (MAS)</h2>
<p>A <strong>Multi-Agent System (MAS)</strong> is an environment where multiple intelligent agents interact with each other and the world. Each agent has its own goals, sensors, and actuators, but they operate in a shared environment.</p>

<h3>Types of MAS Interaction</h3>
<table class="styled-table">
  <thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Cooperative</strong></td>
      <td>Agents work together toward a shared goal, sharing information and dividing tasks.</td>
      <td>A team of rescue robots searching a building — each covers a different zone and shares findings.</td>
    </tr>
    <tr>
      <td><strong>Competitive</strong></td>
      <td>Agents pursue conflicting goals; one agent's gain may be another's loss.</td>
      <td>Bidding agents in an online auction each try to win at the lowest price.</td>
    </tr>
    <tr>
      <td><strong>Mixed</strong></td>
      <td>Agents cooperate within sub-groups but compete with other groups.</td>
      <td>Two teams of game-playing agents each cooperate internally but compete against the other team.</td>
    </tr>
  </tbody>
</table>

<h3>Why Use MAS?</h3>
<ul>
  <li><strong>Scalability:</strong> Problems too large for one agent can be divided among many.</li>
  <li><strong>Robustness:</strong> If one agent fails, others continue operating.</li>
  <li><strong>Specialization:</strong> Each agent can focus on what it does best.</li>
  <li><strong>Parallel processing:</strong> Multiple agents work simultaneously, reducing overall time.</li>
</ul>

<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span><strong>MAS Requirements:</strong> Agents in a MAS need agreed-upon communication protocols, a way to handle trust between agents, and mechanisms for conflict resolution when goals overlap.</span>
</div>

<h2>🔹 Steps to Build an Intelligent Agent</h2>
<p>There are two main problems to overcome: <strong>Competence</strong> (knowledge needed to decide) and <strong>Trust</strong> (guaranteeing user comfort in delegation).</p>
<div class="code-block">
Step 1: Define the Agent's Purpose
Step 2: Specify the Environment (Percepts, Actions, Goals) — use PEAS
Step 3: Choose the Agent Type
Step 4: Design the Architecture
Step 5: Implement the Logic (Rule-based, ML, Search)
Step 6: Train &amp; Test
</div>

<h2>🔹 Case Study: Intelligent Email Sorting Agent</h2>
<p>An agent that helps users organize their inbox by automatically filtering spam and categorizing messages.</p>

<h3>PEAS Specification</h3>
<table class="styled-table">
  <thead><tr><th>PEAS</th><th>Email Agent</th></tr></thead>
  <tbody>
    <tr><td><strong>Performance</strong></td><td>Classification accuracy, user time saved, spam blocked rate.</td></tr>
    <tr><td><strong>Environment</strong></td><td>User's inbox — incoming emails with subject, sender, body.</td></tr>
    <tr><td><strong>Actuators</strong></td><td>Tag, move, prioritize, or delete emails; draft reply suggestions.</td></tr>
    <tr><td><strong>Sensors</strong></td><td>Email content (subject, sender, body text, attachments, timestamps).</td></tr>
  </tbody>
</table>

<h3>Step 1: Choose Agent Type (Slide 37)</h3>
<ul>
  <li><strong>Model-based:</strong> Maintains internal state to track context (e.g., remembers a sender's history).</li>
  <li><strong>Utility-based:</strong> Optimizes for user satisfaction/utility.</li>
  <li><strong>Learning Agent:</strong> Improves categorization accuracy over time.</li>
</ul>

<h3>Step 2: Design Agent Architecture (Slide 38)</h3>
<table class="styled-table">
  <thead><tr><th>Layer</th><th>Components</th></tr></thead>
  <tbody>
    <tr><td><strong>Input Layer</strong></td><td>Email content (Subject, Sender, Body).</td></tr>
    <tr><td><strong>Processing Layer</strong></td><td>Spam filter (ML model), Classifier (folders), Priority scorer (keywords, history).</td></tr>
    <tr><td><strong>Output Layer</strong></td><td>Email tagged, moved, or prioritized in the inbox.</td></tr>
  </tbody>
</table>

<h3>Step 3: Implement Core Logic (Slide 39)</h3>
<p>The agent uses various algorithms to make decisions:</p>
<ul>
  <li><strong>Naive Bayes:</strong> Effective for spam detection.</li>
  <li><strong>SVM (Support Vector Machines):</strong> High accuracy for multi-class classification.</li>
  <li><strong>Decision Trees or Neural Networks (NN):</strong> Used to assign complex priority levels.</li>
</ul>

<h3>Step 4: Enable Learning (Slide 40)</h3>
<p>The agent improves through a <strong>feedback loop</strong>:</p>
<ul>
  <li>User can mark emails as "Important" or "Not Spam".</li>
  <li>The agent uses <strong>Supervised Learning</strong> to adjust its weights and improve accuracy based on these labels.</li>
</ul>

<h3>Step 5: Testing (Slide 41)</h3>
<ul>
  <li><strong>Labeled Dataset:</strong> Train and validate on known data.</li>
  <li><strong>A/B Testing:</strong> Compare inbox efficiency with and without the agent using real user groups.</li>
  <li><strong>Metrics:</strong> Measure classification accuracy and user time saved.</li>
</ul>

<h3>Step 6: Iterate and Improve (Slide 42)</h3>
<ul>
  <li><strong>Time-sensitive alerts:</strong> Notify users of urgent messages immediately.</li>
  <li><strong>Suggested replies:</strong> Predict and draft quick responses.</li>
  <li><strong>Writing style learning:</strong> Adapt the agent's tone to match the user's personality.</li>
</ul>`,

        bodyAr: `<h2>🔹 ما هو الوكيل؟</h2>
<p><strong>الوكيل (Agent)</strong> هو كيان يدرك بيئته من خلال <strong>المستشعرات (Sensors)</strong> ويتصرف في تلك البيئة من خلال <strong>المشغلات (Actuators)</strong>.</p>

<h2>🔹 إطار PEAS</h2>
<p>قبل بناء أي وكيل، نحدد بيئته باستخدام إطار <strong>PEAS</strong> — الطريقة المعيارية لوصف ما يحتاجه الوكيل للعمل.</p>
<table class="styled-table">
  <thead><tr><th>الحرف</th><th>المعنى</th><th>الوصف</th></tr></thead>
  <tbody>
    <tr><td><strong>P</strong></td><td>مقياس الأداء (Performance)</td><td>معايير الحكم على جودة أداء الوكيل. مثال: الدقة، السرعة، رضا المستخدم.</td></tr>
    <tr><td><strong>E</strong></td><td>البيئة (Environment)</td><td>العالم الخارجي الذي يتفاعل معه الوكيل. مثال: شبكة الطرق، البريد الوارد.</td></tr>
    <tr><td><strong>A</strong></td><td>المشغلات (Actuators)</td><td>الوسائل التي يتخذ بها الوكيل الإجراءات. مثال: المحركات، إخراج البيانات.</td></tr>
    <tr><td><strong>S</strong></td><td>المستشعرات (Sensors)</td><td>الوسائل التي يدرك بها الوكيل البيئة. مثال: الكاميرات، إدخال لوحة المفاتيح.</td></tr>
  </tbody>
</table>

<h2>🔹 خصائص الوكيل الذكي</h2>
<table class="styled-table">
  <thead><tr><th>الخاصية</th><th>الوصف</th></tr></thead>
  <tbody>
    <tr><td><strong>تفاعلي (Reactive)</strong></td><td>يستجيب فوراً للتغيرات في البيئة.</td></tr>
    <tr><td><strong>مبادر (Pro-active)</strong></td><td>يتخذ المبادرة ويخطط لتحقيق أهدافه.</td></tr>
    <tr><td><strong>اجتماعي (Social)</strong></td><td>يتواصل ويتعاون مع الوكلاء الآخرين.</td></tr>
  </tbody>
</table>

<h2>🔹 أنواع الوكلاء</h2>
<ol>
  <li><strong>الوكلاء القائمون على الأهداف:</strong> يعملون لتحقيق أهداف محددة (مثال: تطبيق GPS).</li>
  <li><strong>الوكلاء القائمون على المنفعة:</strong> يختارون الأفعال التي تعظم المنفعة أو الرضا.</li>
  <li><strong>الوكلاء المتعلمون:</strong> يحسنون أداءهم بمرور الوقت بناءً على الخبرة.</li>
  <li><strong>الوكلاء القائمون على النموذج (Model-Based):</strong> يحتفظون بحالة داخلية تمثل نموذجاً للعالم، تمكنهم من التعامل مع البيئات غير المرئية كلياً.</li>
  <li><strong>الوكلاء المتنقلون:</strong> برامج تنتقل عبر الخوادم لجمع البيانات.</li>
  <li><strong>وكلاء الواجهة:</strong> يساعدون المستخدمين عبر واجهة المستخدم (مثال: Siri أو Alexa).</li>
</ol>

<h2>🔹 أنظمة الوكلاء المتعددين (MAS)</h2>
<p><strong>نظام الوكلاء المتعددين (MAS)</strong> هو بيئة يتفاعل فيها عدة وكلاء أذكياء مع بعضهم ومع العالم. يمتلك كل وكيل أهدافه ومستشعراته ومشغلاته الخاصة.</p>
<table class="styled-table">
  <thead><tr><th>النوع</th><th>الوصف</th><th>المثال</th></tr></thead>
  <tbody>
    <tr><td><strong>تعاوني</strong></td><td>الوكلاء يعملون معاً نحو هدف مشترك.</td><td>روبوتات الإنقاذ تغطي مناطق مختلفة وتتشارك المعلومات.</td></tr>
    <tr><td><strong>تنافسي</strong></td><td>الوكلاء يسعون لأهداف متعارضة.</td><td>وكلاء المزايدة في المزاد الإلكتروني.</td></tr>
    <tr><td><strong>مختلط</strong></td><td>تعاون داخل المجموعات وتنافس بين المجموعات.</td><td>فرق الألعاب متعددة الوكلاء.</td></tr>
  </tbody>
</table>

<h2>🔹 دراسة حالة: وكيل فرز البريد الإلكتروني</h2>
<p>نظام ذكي يقوم بأتمتة تنظيم البريد الوارد:</p>
<ul>
  <li><strong>P (الأداء):</strong> دقة التصنيف، الوقت الموفر للمستخدم.</li>
  <li><strong>E (البيئة):</strong> صندوق البريد الوارد.</li>
  <li><strong>A (المشغلات):</strong> وضع العلامات، النقل، تحديد الأولويات.</li>
  <li><strong>S (المستشعرات):</strong> محتوى البريد (الموضوع، المرسل، النص).</li>
  <li><strong>التعلم:</strong> حلقة تغذية راجعة من المستخدم لتحسين الدقة.</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Agent = entity that perceives environment (sensors) and acts (actuators).",
      "PEAS framework = Performance, Environment, Actuators, Sensors — the standard way to specify an agent.",
      "Intelligent Agent = autonomous, goal-driven, and capable of learning/reasoning.",
      "Three key features: Reactive (immediate), Pro-active (initiative), Social (collaborative).",
      "Model-based agents maintain an internal state to handle partially observable environments.",
      "Goal-based agents focus on reaching a destination; Utility-based agents focus on 'how happy' the result is.",
      "Learning agents improve through experience and feedback loops.",
      "Multi-Agent Systems (MAS): multiple agents sharing an environment — can be cooperative, competitive, or mixed.",
      "Building agents requires solving for Competence (logic) and Trust (user comfort).",
      "Case study: Email sorting agents use ML (Naive Bayes) to filter and prioritize messages.",
    ],
    pointsAr: [
      "الوكيل = كيان يدرك البيئة (مستشعرات) ويتصرف فيها (مشغلات).",
      "إطار PEAS = الأداء، البيئة، المشغلات، المستشعرات — الطريقة المعيارية لتحديد مواصفات الوكيل.",
      "الوكيل الذكي = يتميز بالاستقلالية، التوجه نحو الأهداف، والقدرة على التعلم.",
      "ثلاث خصائص رئيسية: تفاعلي (فوري)، مبادر (مخطط)، واجتماعي (متعاون).",
      "الوكيل القائم على النموذج يحتفظ بحالة داخلية للتعامل مع البيئات غير المرئية كلياً.",
      "الوكلاء القائمون على الأهداف يركزون على الوصول للهدف؛ القائمون على المنفعة يركزون على 'مدى جودة' النتيجة.",
      "الوكلاء المتعلمون يحسنون أداءهم من خلال الخبرة والتغذية الراجعة.",
      "أنظمة الوكلاء المتعددين (MAS): بيئة مشتركة بين عدة وكلاء — تعاونية أو تنافسية أو مختلطة.",
      "بناء الوكلاء يتطلب حل مشكلتي الكفاءة (المنطق) والثقة (راحة المستخدم).",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l7-q1',
      question: "What does an agent use to perceive its environment?",
      questionAr: "ماذا يستخدم الوكيل لإدراك بيئته؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Actuators', isCorrect: false },
        { id: 'b', text: 'Sensors', isCorrect: true },
        { id: 'c', text: 'Processors', isCorrect: false },
        { id: 'd', text: 'Batteries', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q2',
      question: "Which feature describes an agent that takes initiative to achieve its goals?",
      questionAr: "أي خاصية تصف الوكيل الذي يتخذ المبادرة لتحقيق أهدافه؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Reactive', isCorrect: false },
        { id: 'b', text: 'Pro-active', isCorrect: true },
        { id: 'c', text: 'Social', isCorrect: false },
        { id: 'd', text: 'Passive', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q3',
      question: "A GPS application that finds the best route is an example of a:",
      questionAr: "تطبيق GPS الذي يجد أفضل طريق هو مثال على:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Reactive Agent', isCorrect: false },
        { id: 'b', text: 'Goal-Based Agent', isCorrect: true },
        { id: 'c', text: 'Mobile Agent', isCorrect: false },
        { id: 'd', text: 'Interface Agent', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q4',
      question: "Which type of agent improves its performance over time based on experience?",
      questionAr: "أي نوع من الوكلاء يحسن أداءه بمرور الوقت بناءً على الخبرة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Utility-Based Agent', isCorrect: false },
        { id: 'b', text: 'Learning Agent', isCorrect: true },
        { id: 'c', text: 'Multi-Agent System', isCorrect: false },
        { id: 'd', text: 'Model-Based Agent', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q5',
      question: "The two main problems to overcome when building an intelligent agent are:",
      questionAr: "المشكلتان الرئيستان اللتان يجب التغلب عليهما عند بناء وكيل ذكي هما:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Hardware Optimization: ensuring the CPU speed and GPU memory are sufficient for real-time video processing and data analysis.', isCorrect: false },
        { id: 'b', text: 'Competence (knowledge needed to decide) and Trust (guaranteeing user comfort and protection in delegation).', isCorrect: true },
        { id: 'c', text: 'Sensor Integration: coordinating between various input types like infrared, ultrasonic, and camera-based vision sensors simultaneously.', isCorrect: false },
        { id: 'd', text: 'Battery Management: implementing efficient power-saving modes to extend the operational life of mobile agent hardware platforms.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q6',
      question: "What is the primary difference between Goal-based and Utility-based agents?",
      questionAr: "ما هو الفرق الأساسي بين الوكلاء القائمين على الأهداف والوكلاء القائمين على المنفعة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Goal-based agents focus on reaching a target state, while utility-based agents optimize for the "best" or "happiest" path using a utility function.', isCorrect: true },
        { id: 'b', text: 'Goal-based agents utilize complex deep learning models, whereas utility-based agents only rely on simple IF-THEN heuristic rules for decision making.', isCorrect: false },
        { id: 'c', text: 'Utility-based agents require constant human supervision, while goal-based agents are designed to operate fully autonomously in closed environments.', isCorrect: false },
        { id: 'd', text: 'Goal-based agents are exclusively used for navigation tasks, while utility-based agents are only used for financial market predictions and trading.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q7',
      question: "In a Multi-Agent System (MAS), which type of interaction occurs when agents work toward a shared goal by dividing tasks?",
      questionAr: "في نظام الوكلاء المتعددين (MAS)، أي نوع من التفاعل يحدث عندما يعمل الوكلاء نحو هدف مشترك بتقسيم المهام؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Competitive interaction, where each agent attempts to maximize its own individual reward at the expense of other agents in the system.', isCorrect: false },
        { id: 'b', text: 'Cooperative interaction, where agents share information and coordinate actions to collectively achieve the same goal.', isCorrect: true },
        { id: 'c', text: 'Reactive interaction, where each agent independently responds to sensor input without any awareness of the other agents in the environment.', isCorrect: false },
        { id: 'd', text: 'Utility interaction, where a single central agent assigns a numerical utility score to every other agent to rank their individual contributions.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q8',
      question: "What does the 'E' in the PEAS framework stand for, and what does it describe?",
      questionAr: "ماذا يرمز حرف 'E' في إطار PEAS، وماذا يصف؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Efficiency — the number of CPU cycles consumed by the agent during a single decision-making step.', isCorrect: false },
        { id: 'b', text: 'Execution — the set of low-level machine instructions the agent runs to produce its output actions.', isCorrect: false },
        { id: 'c', text: 'Environment — the external world the agent operates in and interacts with through its sensors and actuators.', isCorrect: true },
        { id: 'd', text: 'Evaluation — the post-deployment review process used to score how well the agent performed on a benchmark dataset.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q9',
      question: "How does a Learning Agent use a feedback loop in an email sorting case study?",
      questionAr: "كيف يستخدم الوكيل المتعلم حلقة التغذية الراجعة في دراسة حالة فرز البريد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It periodically deletes the oldest emails in the inbox to ensure the storage limit is never exceeded regardless of the email content or sender.', isCorrect: false },
        { id: 'b', text: 'It ignores all previous user interactions to ensure that the classification model remains objective and unbiased by specific personal habits.', isCorrect: false },
        { id: 'c', text: 'It uses user actions like marking emails as "important" as training data to adjust its internal logic and improve future accuracy.', isCorrect: true },
        { id: 'd', text: 'It sends automated response messages to all incoming emails to verify if the sender address is still active and valid before processing the body.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l7-q10',
      question: "In the context of intelligent agent testing, what is the specific purpose of A/B testing?",
      questionAr: "في سياق اختبار الوكيل الذكي، ما هو الغرض المحدد من اختبار A/B؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'To train the agent on two separate labeled datasets simultaneously and then merge the resulting model weights into a single unified classifier.', isCorrect: false },
        { id: 'b', text: 'To compare a live system that includes the agent against a control group without it, measuring whether the agent produces a real, statistically meaningful improvement.', isCorrect: true },
        { id: 'c', text: 'To run the agent on two different hardware configurations in parallel and determine which processor architecture yields the lowest inference latency.', isCorrect: false },
        { id: 'd', text: 'To switch the agent between two different rule sets on alternate days and ask users to manually vote for whichever version they prefer in a survey.', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l7-w1',
      question: "Explain the difference between Reactive and Pro-active behaviors in agents.",
      questionAr: "اشرح الفرق بين السلوك التفاعلي والمبادر في الوكلاء.",
      modelAnswer: "Reactive behavior is a direct response to environment changes (Sense-Respond), whereas Pro-active behavior involves taking initiative and planning to achieve goals.",
      modelAnswerAr: "السلوك التفاعلي هو استجابة مباشرة لتغيرات البيئة، بينما السلوك المبادر يتضمن اتخاذ المبادرة والتخطيط لتحقيق الأهداف.",
    },
    {
      id: 'ip-l7-w2',
      question: "Use the PEAS framework to describe the environment of an Email Sorting Agent.",
      questionAr: "استخدم إطار PEAS لوصف بيئة وكيل فرز البريد الإلكتروني.",
      modelAnswer: "Performance: Classification accuracy and user time saved. Environment: The user's inbox with incoming emails. Actuators: Tagging, moving, prioritizing, or deleting emails. Sensors: Email content including subject, sender, body text, and timestamps.",
      modelAnswerAr: "الأداء: دقة التصنيف والوقت الموفر للمستخدم. البيئة: صندوق بريد المستخدم مع الرسائل الواردة. المشغلات: وضع العلامات، النقل، تحديد الأولويات، والحذف. المستشعرات: محتوى البريد بما في ذلك الموضوع والمرسل والنص والطوابع الزمنية.",
    },
    {
      id: 'ip-l7-w3',
      question: "What is the difference between a cooperative and a competitive Multi-Agent System? Give an example of each.",
      questionAr: "ما الفرق بين نظام الوكلاء المتعددين التعاوني والتنافسي؟ أعطِ مثالاً على كل منهما.",
      modelAnswer: "In a cooperative MAS, agents share information and coordinate to achieve a common goal — for example, rescue robots dividing a search area. In a competitive MAS, agents pursue conflicting goals where one agent's gain reduces another's — for example, bidding agents in an online auction each trying to win at the lowest price.",
      modelAnswerAr: "في النظام التعاوني، يتشارك الوكلاء المعلومات وينسقون لتحقيق هدف مشترك — مثال: روبوتات الإنقاذ التي تقسم منطقة البحث. في النظام التنافسي، يسعى كل وكيل لأهداف متعارضة حيث مكسب وكيل يعني خسارة آخر — مثال: وكلاء المزايدة في مزاد إلكتروني.",
    },
  ],
}