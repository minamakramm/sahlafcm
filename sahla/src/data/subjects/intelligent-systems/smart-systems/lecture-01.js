export const LECTURE = {
  subjectId: 'smart-systems',
  number: 1,
  title: 'Introduction & Reasoning Techniques',
  titleAr: 'المحاضرة 1: مقدمة وتقنيات الاستدلال',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is a Smart System?</h2>
<p>A <strong>smart system</strong> is an integrated system that combines <strong>sensing, data processing, decision-making, and actuation</strong> capabilities to operate autonomously or semi-autonomously in dynamic environments. It uses intelligence—often through AI, ML, or rule-based reasoning—to adapt its behavior based on context and feedback.</p>
<p>More formally: a smart system <strong>perceives</strong> its environment through sensors, <strong>analyzes</strong> data using intelligent algorithms, <strong>makes informed decisions</strong>, and <strong>executes actions</strong> while continuously improving performance through feedback.</p>
<p>Unlike traditional automated systems that execute <em>fixed, pre-programmed instructions</em>, smart systems can <strong>adapt, learn, and respond</strong> to changing conditions. For example, a fixed-time traffic light switches signals at regular intervals regardless of traffic. A <strong>smart traffic control system</strong> uses cameras and sensors to measure vehicle density and <em>dynamically adjusts</em> signal timing to reduce congestion. The key difference is <strong>adaptation based on real-time information</strong>.</p>

<h3>Core Elements of a Smart System:</h3>
<ol>
  <li><strong>Perception (Sensing):</strong> Collects data from the environment (temperature sensors, cameras, microphones, GPS).</li>
  <li><strong>Processing & Intelligence:</strong> Analyzes data using algorithms, models, or learning techniques.</li>
  <li><strong>Decision-Making:</strong> Selects optimal or near-optimal actions based on goals and constraints.</li>
  <li><strong>Actuation:</strong> Executes decisions in the physical or digital environment.</li>
  <li><strong>Feedback & Learning:</strong> Adjusts behavior based on outcomes and new data.</li>
</ol>

<h2>🔹 Core Characteristics of Smart Systems</h2>
<table class="styled-table">
  <thead><tr><th>Characteristic</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Autonomy</strong></td><td>Operates with minimal human intervention</td><td>Autonomous vacuum cleaner decides where to move</td></tr>
    <tr><td><strong>Adaptability</strong></td><td>Adjusts to environmental changes</td><td>Smart thermostat learns your schedule</td></tr>
    <tr><td><strong>Context Awareness</strong></td><td>Interprets situations meaningfully</td><td>Distinguishes "warm" from "dangerously hot"</td></tr>
    <tr><td><strong>Learning Capability</strong></td><td>Improves performance over time</td><td>Recommendation systems get better with usage</td></tr>
    <tr><td><strong>Interconnectivity</strong></td><td>Communicates with other systems/devices</td><td>IoT devices sharing data across a smart home</td></tr>
  </tbody>
</table>

<h2>🔹 The Sense-Decide-Act-Learn Loop</h2>
<ol>
  <li><strong>Sense:</strong> Collect data via sensors (Perception) — temperature, motion, images, sound.</li>
  <li><strong>Decide:</strong> Analyze and interpret data using AI/ML algorithms (Intelligence).</li>
  <li><strong>Act:</strong> Execute decisions via actuators — motors, valves, displays (Action).</li>
  <li><strong>Learn:</strong> Refine future decisions based on feedback from outcomes.</li>
</ol>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Example — Wearable Health Monitor:</strong> Sensors measure heart rate and oxygen levels → ML models detect anomalies → If irregular patterns appear, the system alerts medical personnel → The model refines its thresholds based on patient history.</span></div>

<h2>🔹 Key Technologies Behind Smart Systems</h2>
<ul>
  <li><strong>Artificial Intelligence (AI)</strong> — for reasoning and decision-making</li>
  <li><strong>Machine Learning (ML)</strong> — for pattern recognition and prediction</li>
  <li><strong>Internet of Things (IoT)</strong> — for device connectivity</li>
  <li><strong>Cloud & Edge Computing</strong> — for scalable processing</li>
  <li><strong>Sensors & Embedded Systems</strong> — for real-world interaction</li>
</ul>

<h2>🔹 Reasoning Techniques: Deduction, Induction, Abduction</h2>

<h3>1. Deduction (الاستنباط - الاستنتاج)</h3>
<p>Deduction is a logical process where conclusions are derived from <strong>general rules or premises</strong>. If the premises are true, then the conclusion <strong>must</strong> be true.</p>
<ul>
  <li><strong>Process:</strong> General Rule → Specific Case → Conclusion</li>
  <li><strong>Form:</strong> Premise 1: If A, then B. Premise 2: A is true. ∴ Conclusion: B is true.</li>
</ul>
<p><strong>Classic Example:</strong> All humans are mortal. Socrates is human. ∴ Socrates is mortal.</p>
<p><strong>AI Example (Expert System):</strong> Rule: If a patient has a fever AND a sore throat → they may have a cold. Fact: Patient has fever and sore throat. Conclusion: Patient may have a cold.</p>

<h3>2. Induction (الاستقراء)</h3>
<p>Induction derives <strong>general rules from specific observations</strong>. Conclusions are <em>probabilistic</em> — likely but <strong>not guaranteed</strong>.</p>
<ul>
  <li><strong>Process:</strong> Specific Observations → General Rule or Hypothesis</li>
</ul>
<p><strong>Classic Example:</strong> Every swan I've seen is white → All swans are white (risk of error!).</p>
<p><strong>AI Example (Machine Learning):</strong> 100 data points of patients with high cholesterol are associated with heart disease → General rule: high cholesterol correlates with heart disease.</p>

<h3>3. Abduction (الاستدلال)</h3>
<p>Abduction starts with an observation and seeks the <strong>simplest or most likely explanation</strong>. Often called <em>"inference to the best explanation."</em></p>
<ul>
  <li><strong>Process:</strong> Observation → Best Explanation (Hypothesis)</li>
</ul>
<p><strong>Classic Example:</strong> You wake up and see the street is wet → Hypothesis: It rained last night.</p>
<p><strong>AI Example (Medical Diagnosis):</strong> Patient presents with high fever and a rash → Most likely explanation: measles.</p>

<h3>📊 Comparison Table:</h3>
<table class="styled-table">
  <thead><tr><th>Technique</th><th>Process</th><th>Example</th><th>Strength</th><th>Weakness</th></tr></thead>
  <tbody>
    <tr><td><strong>Deduction</strong></td><td>General Rule → Specific → Conclusion</td><td>All men are mortal. Socrates is a man. ∴ Socrates is mortal.</td><td>Guarantees truth if premises are true</td><td>Requires known, true premises</td></tr>
    <tr><td><strong>Induction</strong></td><td>Specific Observations → General Rule</td><td>100 white swans → "All swans are white"</td><td>Generates general rules from data</td><td>Conclusions are probable, not certain</td></tr>
    <tr><td><strong>Abduction</strong></td><td>Observation → Best Explanation</td><td>Street is wet → It probably rained</td><td>Provides plausible explanations</td><td>Hypotheses may be wrong</td></tr>
  </tbody>
</table>

<h3>📌 Use in AI and Machine Learning:</h3>
<ul>
  <li><strong>Deduction</strong> → Used in rule-based systems, expert systems, and logic programming.</li>
  <li><strong>Induction</strong> → Fundamental to <strong>machine learning</strong> (generalizes from data).</li>
  <li><strong>Abduction</strong> → Useful in <strong>diagnostic systems</strong> (medical diagnosis, fault detection).</li>
</ul>

<h2>🔹 Historical Evolution of Smart Systems</h2>
<table class="styled-table">
  <thead><tr><th>Era</th><th>Key Feature</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Pre-1950</td><td>Mechanical automation</td><td>Steam engine governors</td></tr>
    <tr><td>1950–1970</td><td>Feedback control (Cybernetics)</td><td>Thermostats, PID controllers</td></tr>
    <tr><td>1970–1985</td><td>Rule-based AI</td><td>Expert systems (MYCIN)</td></tr>
    <tr><td>1985–2000</td><td>Embedded systems & microprocessors</td><td>Automotive controllers (ABS)</td></tr>
    <tr><td>2000–2015</td><td>IoT & Big Data</td><td>Remote monitoring, recommendation systems</td></tr>
    <tr><td>2015–Present</td><td>Deep learning & autonomy</td><td>Self-driving cars, smart assistants</td></tr>
  </tbody>
</table>

<h2>🔹 Benefits and Challenges</h2>
<table class="styled-table">
  <thead><tr><th>Benefits</th><th>Challenges</th></tr></thead>
  <tbody>
    <tr><td>Increased efficiency & resource optimization</td><td>Data privacy and security concerns</td></tr>
    <tr><td>Enhanced safety and reliability</td><td>Ethical issues (bias, transparency)</td></tr>
    <tr><td>Personalized services</td><td>System complexity & integration difficulties</td></tr>
    <tr><td>Real-time responsiveness</td><td>Dependence on reliable data & connectivity</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>🔹 ما هو النظام الذكي؟</h2>
<p>النظام الذكي هو نظام متكامل يجمع بين <strong>الاستشعار ومعالجة البيانات واتخاذ القرار والتنفيذ</strong> للعمل بشكل مستقل أو شبه مستقل في بيئات ديناميكية.</p>

<h2>🔹 تقنيات الاستدلال</h2>
<table class="styled-table">
  <thead><tr><th>التقنية</th><th>العملية</th><th>القوة</th></tr></thead>
  <tbody>
    <tr><td><strong>الاستنباط (Deduction)</strong></td><td>قاعدة عامة → استنتاج محدد</td><td>مضمون إذا كانت المقدمات صحيحة</td></tr>
    <tr><td><strong>الاستقراء (Induction)</strong></td><td>ملاحظات محددة → قاعدة عامة</td><td>يولد قواعد من البيانات (احتمالي)</td></tr>
    <tr><td><strong>الاستدلال (Abduction)</strong></td><td>ملاحظة → أفضل تفسير</td><td>يقدم تفسيرات معقولة</td></tr>
  </tbody>
</table>`,
      },
    },
  ],

  summary: {
    points: [
      "Smart System: Perceives, analyzes, decides, acts, and learns continuously",
      "Core Elements: Perception → Processing → Decision → Actuation → Feedback",
      "5 Characteristics: Autonomy, Adaptability, Context Awareness, Learning, Interconnectivity",
      "Deduction: General Rule → Specific Conclusion (certain if premises true) — Expert Systems",
      "Induction: Specific Observations → General Rule (probable, not certain) — Machine Learning",
      "Abduction: Observation → Best Explanation (most likely cause) — Diagnostic Systems",
      "Sense-Decide-Act-Learn: The core continuous operation loop of smart systems",
      "Historical evolution: From mechanical governors (pre-1950) to deep learning & autonomy (2015+)",
    ],
    pointsAr: [
      "النظام الذكي: يدرك ويحلل ويقرر ويتصرف ويتعلم باستمرار",
      "العناصر الأساسية: الإدراك ← المعالجة ← القرار ← التنفيذ ← التغذية الراجعة",
      "5 خصائص: الاستقلالية، التكيف، الوعي بالسياق، التعلم، الترابط",
      "الاستنباط: قاعدة عامة ← استنتاج محدد (مؤكد) — النظم الخبيرة",
      "الاستقراء: ملاحظات محددة ← قاعدة عامة (احتمالي) — تعلم الآلة",
      "الاستدلال: ملاحظة ← أفضل تفسير (السبب الأكثر احتمالاً) — أنظمة التشخيص",
    ],
  },

  mcq: [
    { id: 'ss-l1-q1', question: "Which reasoning technique moves from general principles to specific certain conclusions?", questionAr: "أي تقنية استدلال تنتقل من المبادئ العامة إلى استنتاجات محددة مؤكدة؟", difficulty: 'easy', answers: [{ id: 'a', text: 'Induction', isCorrect: false }, { id: 'b', text: 'Abduction', isCorrect: false }, { id: 'c', text: 'Deduction', isCorrect: true }, { id: 'd', text: 'Reduction', isCorrect: false }] },
    { id: 'ss-l1-q2', question: "Inductive reasoning is fundamental to which field of AI?", questionAr: "الاستدلال الاستقرائي أساسي لأي مجال في الذكاء الاصطناعي؟", difficulty: 'medium', answers: [{ id: 'a', text: 'Expert Systems', isCorrect: false }, { id: 'b', text: 'Machine Learning', isCorrect: true }, { id: 'c', text: 'Logic Programming', isCorrect: false }, { id: 'd', text: 'Fixed Automation', isCorrect: false }] },
    { id: 'ss-l1-q3', question: "An AI diagnostic system that finds the 'most likely' cause for a symptom uses:", questionAr: "نظام تشخيص ذكي يجد 'السبب الأكثر احتمالاً' للأعراض يستخدم:", difficulty: 'medium', answers: [{ id: 'a', text: 'Deduction', isCorrect: false }, { id: 'b', text: 'Abduction', isCorrect: true }, { id: 'c', text: 'Induction', isCorrect: false }, { id: 'd', text: 'Recursion', isCorrect: false }] },
    { id: 'ss-l1-q4', question: "What is the main difference between 'Smart' and 'Traditional' automation?", questionAr: "ما الفرق الرئيسي بين الأتمتة 'الذكية' و'التقليدية'؟", difficulty: 'easy', answers: [{ id: 'a', text: 'Smart systems are faster', isCorrect: false }, { id: 'b', text: 'Smart systems adapt to real-time information', isCorrect: true }, { id: 'c', text: 'Traditional systems use more sensors', isCorrect: false }, { id: 'd', text: 'Smart systems are always wired', isCorrect: false }] },
    { id: 'ss-l1-q5', question: "The characteristic of 'Autonomy' means the system:", questionAr: "خاصية 'الاستقلالية' تعني أن النظام:", difficulty: 'easy', answers: [{ id: 'a', text: 'Requires constant human input', isCorrect: false }, { id: 'b', text: 'Operates independently with minimal human intervention', isCorrect: true }, { id: 'c', text: 'Is always connected to the cloud', isCorrect: false }, { id: 'd', text: 'Only works in a laboratory', isCorrect: false }] },
    { id: 'ss-l1-q6', question: "Which reasoning method is 'probabilistic', meaning conclusions are likely but not guaranteed?", questionAr: "أي طريقة استدلال 'احتمالية'؟", difficulty: 'medium', answers: [{ id: 'a', text: 'Deduction', isCorrect: false }, { id: 'b', text: 'Induction', isCorrect: false }, { id: 'c', text: 'Abduction', isCorrect: false }, { id: 'd', text: 'Both B and C', isCorrect: true }] },
    { id: 'ss-l1-q7', question: "A smart thermostat learning your schedule is an example of:", questionAr: "ترموستات ذكي يتعلم جدولك هو مثال على:", difficulty: 'easy', answers: [{ id: 'a', text: 'Adaptability and Learning', isCorrect: true }, { id: 'b', text: 'Deduction only', isCorrect: false }, { id: 'c', text: 'Fixed instruction', isCorrect: false }, { id: 'd', text: 'Manual control', isCorrect: false }] },
    { id: 'ss-l1-q8', question: "In the 'Sense-Decide-Act' loop, sensors are responsible for:", questionAr: "في حلقة 'الإحساس-القرار-الفعل'، المستشعرات مسؤولة عن:", difficulty: 'easy', answers: [{ id: 'a', text: 'Intelligence', isCorrect: false }, { id: 'b', text: 'Application', isCorrect: false }, { id: 'c', text: 'Perception', isCorrect: true }, { id: 'd', text: 'Actuation', isCorrect: false }] },
    { id: 'ss-l1-q9', question: "Which technology enables 'Interconnectivity' in smart systems?", questionAr: "أي تكنولوجيا تمكن 'الترابط' في الأنظمة الذكية؟", difficulty: 'easy', answers: [{ id: 'a', text: 'Microprocessors', isCorrect: false }, { id: 'b', text: 'IoT', isCorrect: true }, { id: 'c', text: 'Deduction', isCorrect: false }, { id: 'd', text: 'Fuzzy Logic', isCorrect: false }] },
    { id: 'ss-l1-q10', question: "Which reasoning is described as 'Inference to the best explanation'?", questionAr: "أي استدلال يوصف بـ'الاستنتاج لأفضل تفسير'؟", difficulty: 'medium', answers: [{ id: 'a', text: 'Deduction', isCorrect: false }, { id: 'b', text: 'Abduction', isCorrect: true }, { id: 'c', text: 'Induction', isCorrect: false }, { id: 'd', text: 'Inference', isCorrect: false }] },
    { id: 'ss-l1-q11', question: "The term 'Artificial Intelligence' was coined in which year?", questionAr: "صيغ مصطلح 'الذكاء الاصطناعي' في أي سنة؟", difficulty: 'easy', answers: [{ id: 'a', text: '1943', isCorrect: false }, { id: 'b', text: '1956', isCorrect: true }, { id: 'c', text: '1970', isCorrect: false }, { id: 'd', text: '2000', isCorrect: false }] },
    { id: 'ss-l1-q12', question: "MYCIN (1970s) is an example of:", questionAr: "MYCIN (السبعينيات) هو مثال على:", difficulty: 'medium', answers: [{ id: 'a', text: 'A smart thermostat', isCorrect: false }, { id: 'b', text: 'An early medical expert system', isCorrect: true }, { id: 'c', text: 'A deep learning model', isCorrect: false }, { id: 'd', text: 'A sensor fusion algorithm', isCorrect: false }] },
    { id: 'ss-l1-q13', question: "'All humans are mortal. Socrates is human. Therefore Socrates is mortal' is an example of:", questionAr: "'كل البشر فانون. سقراط بشري. إذن سقراط فانٍ' هو مثال على:", difficulty: 'easy', answers: [{ id: 'a', text: 'Induction', isCorrect: false }, { id: 'b', text: 'Abduction', isCorrect: false }, { id: 'c', text: 'Deduction', isCorrect: true }, { id: 'd', text: 'Hypothesis', isCorrect: false }] },
    { id: 'ss-l1-q14', question: "A system that adjusts signal timing based on real-time vehicle density is:", difficulty: 'easy', answers: [{ id: 'a', text: 'Smart Traffic Control', isCorrect: true }, { id: 'b', text: 'Traditional Automation', isCorrect: false }, { id: 'c', text: 'Rule-based only', isCorrect: false }, { id: 'd', text: 'Mechanical Control', isCorrect: false }] },
    { id: 'ss-l1-q15', question: "What kind of reasoning does a rule-based expert system primarily use?", difficulty: 'medium', answers: [{ id: 'a', text: 'Induction', isCorrect: false }, { id: 'b', text: 'Deduction', isCorrect: true }, { id: 'c', text: 'Abduction', isCorrect: false }, { id: 'd', text: 'Intuition', isCorrect: false }] },
    { id: 'ss-l1-q16', question: "Which phase of the smart system loop uses Feedback to refine future decisions?", difficulty: 'easy', answers: [{ id: 'a', text: 'Sense', isCorrect: false }, { id: 'b', text: 'Decide', isCorrect: false }, { id: 'c', text: 'Act', isCorrect: false }, { id: 'd', text: 'Learn', isCorrect: true }] },
    { id: 'ss-l1-q17', question: "Context awareness allows a system to:", difficulty: 'medium', answers: [{ id: 'a', text: 'Ignore all data', isCorrect: false }, { id: 'b', text: 'Interpret situations meaningfully based on surrounding facts', isCorrect: true }, { id: 'c', text: 'Run without power', isCorrect: false }, { id: 'd', text: 'Connect to the internet', isCorrect: false }] },
    { id: 'ss-l1-q18', question: "Which era marked the move from 'Isolated' to 'Interconnected' devices?", difficulty: 'medium', answers: [{ id: 'a', text: 'Pre-1950', isCorrect: false }, { id: 'b', text: 'Classical Control', isCorrect: false }, { id: 'c', text: 'IoT and Big Data', isCorrect: true }, { id: 'd', text: 'Mechanical Era', isCorrect: false }] },
    { id: 'ss-l1-q19', question: "A smart system formally does all EXCEPT:", difficulty: 'medium', answers: [{ id: 'a', text: 'Perceives its environment', isCorrect: false }, { id: 'b', text: 'Analyzes data with algorithms', isCorrect: false }, { id: 'c', text: 'Follows only fixed pre-programmed rules', isCorrect: true }, { id: 'd', text: 'Executes actions via actuators', isCorrect: false }] },
    { id: 'ss-l1-q20', question: "Which core element of a smart system is responsible for executing decisions in the physical world?", difficulty: 'easy', answers: [{ id: 'a', text: 'Perception', isCorrect: false }, { id: 'b', text: 'Processing', isCorrect: false }, { id: 'c', text: 'Actuation', isCorrect: true }, { id: 'd', text: 'Feedback', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l1-w1', question: "Explain the three main reasoning techniques (Deduction, Induction, Abduction) and provide an AI example for each.", questionAr: "اشرح تقنيات الاستدلال الثلاث مع مثال ذكاء اصطناعي لكل منها.", modelAnswer: "Deduction: General→Specific (Expert System: fever+sore throat→cold). Induction: Specific→General (ML: 100 patients with high cholesterol→correlate with heart disease). Abduction: Observation→Best Explanation (Diagnosis: fever+rash→likely measles).", modelAnswerAr: "الاستنباط: عام→محدد. الاستقراء: محدد→عام. الاستدلال: ملاحظة→أفضل تفسير." },
    { id: 'ss-l1-w2', question: "Compare Traditional Automation with Smart Systems using the example of a traffic light.", questionAr: "قارن بين الأتمتة التقليدية والأنظمة الذكية مع مثال إشارة المرور.", modelAnswer: "Traditional: fixed timer switches at regular intervals regardless of traffic. Smart: uses cameras/sensors to measure vehicle density and dynamically adjusts signal timing. Key difference: adaptation based on real-time information.", modelAnswerAr: "التقليدية: مؤقت ثابت. الذكية: تستخدم كاميرات/مستشعرات لقياس كثافة المرور وتعدل توقيت الإشارة ديناميكياً." },
    { id: 'ss-l1-w3', question: "List and describe five core characteristics that make a system 'Smart'.", questionAr: "اذكر ووصف خمس خصائص أساسية تجعل النظام 'ذكياً'.", modelAnswer: "(1) Autonomy: minimal human intervention. (2) Adaptability: adjust to changes. (3) Context Awareness: interpret situations meaningfully. (4) Learning: improve over time. (5) Interconnectivity: communicate with other devices.", modelAnswerAr: "(1) الاستقلالية (2) التكيف (3) الوعي بالسياق (4) التعلم (5) الترابط." },
    { id: 'ss-l1-w4', question: "Describe the 'Sense-Decide-Act-Learn' loop with a real-world example.", questionAr: "صف حلقة 'الإحساس-القرار-الفعل-التعلم' مع مثال واقعي.", modelAnswer: "Sensors (Sense), AI algorithms (Decide), Actuators (Act), Feedback analysis (Learn). Example: Wearable health monitor — sensors measure heart rate → ML detects anomalies → alerts medical personnel → refines thresholds based on patient history.", modelAnswerAr: "المستشعرات (إحساس)، خوارزميات AI (قرار)، المشغلات (فعل)، تحليل التغذية الراجعة (تعلم)." },
    { id: 'ss-l1-w5', question: "Describe the historical evolution of smart systems from pre-1950 to present.", questionAr: "صف التطور التاريخي للأنظمة الذكية من قبل 1950 حتى الآن.", modelAnswer: "Pre-1950: mechanical (steam governors). 1950s-70s: feedback control (thermostats). 1970s-80s: rule-based AI (MYCIN). 1980s-2000: embedded systems (ABS). 2000-2015: IoT & Big Data. 2015+: Deep learning & autonomy (self-driving cars).", modelAnswerAr: "قبل 1950: ميكانيكي. الخمسينات-السبعينات: التحكم بالتغذية الراجعة. السبعينات-الثمانينات: AI قائم على القواعد. 2000-2015: IoT. 2015+: التعلم العميق." },
  ],
}
