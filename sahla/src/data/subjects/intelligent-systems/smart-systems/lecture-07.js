export const LECTURE = {
  subjectId: 'smart-systems',
  number: 7,
  title: 'Midterm Revision & Practice',
  titleAr: 'قسم: مراجعة منتصف الفصل والتمارين',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>👨‍🏫 Doctor's Official Midterm Revision Pack</h2>
<p>This module contains every point from the "Revision Q for Midterm" document. Focus on these 9 core topics.</p>

<h2>[1] Concept & Key Components</h2>
<p>An integrated technological system capable of perceiving its environment, processing information, learning from data, making decisions, and performing actions autonomously.</p>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>HVAC Example:</strong> Temp sensors measure conditions → Data transmitted via network → AI decides heating/cooling needs → Actuators adjust airflow.</span></div>
<ul>
  <li><strong>Perception (Sensors):</strong> Converts physical phenomena into digital signals.</li>
  <li><strong>Communication:</strong> Uses IoT, Bluetooth, Wi-Fi to transfer data.</li>
  <li><strong>Intelligence:</strong> AI methods (ML, Fuzzy, Optimization) transform data.</li>
  <li><strong>Application:</strong> Interfaces (dashboards, apps) for monitoring.</li>
</ul>

<h2>[2] Computational Intelligence (CI)</h2>
<p>CI focuses on adaptive algorithms solving complex problems using nature-inspired methods.</p>
<ul>
  <li><strong>Neural Networks:</strong> Inspired by the human brain for pattern recognition.</li>
  <li><strong>Fuzzy Logic:</strong> Inspired by human reasoning for control systems.</li>
  <li><strong>Genetic Algorithms:</strong> Inspired by evolution for optimization.</li>
  <li><strong>Swarm Intelligence:</strong> Inspired by social insects for distribution.</li>
</ul>

<h2>[3] Smart System Architecture</h2>
<p>Uses a <strong>Layered Model</strong> to separate functionality into modular pieces.</p>
<ul>
  <li><strong>Modularity:</strong> Layers can be modified or updated independently.</li>
  <li><strong>Scalability:</strong> New devices and sensors can be added easily.</li>
  <li><strong>Maintainability:</strong> System upgraded without affecting core logic.</li>
</ul>

<h2>[4] Sensors & Actuators</h2>
<ul>
  <li><strong>Sensors:</strong> Detect environment & convert to electrical signals (e.g. Soil moisture).</li>
  <li><strong>Actuators:</strong> Perform physical actions based on signals (e.g. Opening valves).</li>
  <li><strong>Communication:</strong> Flows data quickly between sensors and processors.</li>
</ul>

<h2>[5] The Power of Modularity</h2>
<ul>
  <li><strong>Simplified Design:</strong> Break complex systems into smaller parts.</li>
  <li><strong>Fault Isolation:</strong> One module failing doesn't crash the whole system.</li>
  <li><strong>Reusability:</strong> Use the same module in different projects.</li>
</ul>

<h2>[6] Scalability Challenges</h2>
<ul>
  <li><strong>Data Volume:</strong> Handling petabytes of real-time sensor data.</li>
  <li><strong>Network Load:</strong> Overloaded channels leading to packet loss.</li>
  <li><strong>Computational Cost:</strong> Processing intensive AI models at scale.</li>
  <li><strong>Reliability:</strong> Maintaining uptime as the system grows.</li>
</ul>

<h2>[7] Edge Computing Concept</h2>
<p>Processing data close to the source (Sensors → Edge → Cloud).</p>
<ul>
  <li><strong>Low Latency:</strong> Critical for autonomous cars (milliseconds).</li>
  <li><strong>Reduced Traffic:</strong> Sends pre-processed data to the cloud.</li>
  <li><strong>Reliability:</strong> System can operate offline if the internet fails.</li>
</ul>

<h2>[8] Machine Learning Roles</h2>
<ul>
  <li><strong>Supervised:</strong> Labeled data (e.g. Disease classification).</li>
  <li><strong>Unsupervised:</strong> Finding clusters (e.g. User behavior).</li>
  <li><strong>Reinforcement:</strong> Reward-based (e.g. Robot walking).</li>
</ul>

<h2>[9] Sensor Fusion</h2>
<p>Combining data from multiple sensors to produce accurate/reliable info.</p>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Autonomous Driving:</strong> Car using Radar + LiDAR + Camera to see in any weather.</span></div>
<ul>
  <li><strong>Redundancy:</strong> Compensates for individual sensor failures.</li>
  <li><strong>Accuracy:</strong> Filters out noise from single measurements.</li>
</ul>`,
        bodyAr: `<h2>👨‍🏫 حزمة المراجعة الرسمية لمنتصف الفصل</h2>
<p>يحتوي هذا الجزء على كل النقاط من وثيقة "أسئلة المراجعة لمنتصف الفصل". ركز على هذه المواضيع التسعة الأساسية.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "Smart System Definition: Perceive, Process, Decide, Act, Learn",
      "CI Paradigms (ANN, Fuzzy, GA, Swarm Intelligence)",
      "4-Layer Architecture (Perception-Communication-Intelligence-Application)",
      "Sensors & Actuators: Physical-Digital interface",
      "Edge Computing: Speed vs Latency (critical for autonomous systems)",
      "Sensor Fusion: LiDAR + Camera + Radar for redundancy and accuracy",
      "Modularity Benefits: Simplified design, fault isolation, reusability",
      "Scalability Challenges: Data volume, network load, computational cost",
      "ML Types: Supervised, Unsupervised, Reinforcement Learning",
    ],
    pointsAr: [
      "تعريف النظام الذكي: يدرك، يعالج، يقرر، يتصرف، يتعلم",
      "نماذج CI (ANN, Fuzzy, GA, Swarm Intelligence)",
      "الهيكلية رباعية الطبقات",
      "حوسبة الحافة: السرعة مقابل التأخير",
      "دمج المستشعرات للدقة والموثوقية",
    ],
  },

  mcq: [
    { id: 'ss-l7-q1', question: "Which characteristic distinguishes a smart system from traditional automated ones?", difficulty: 'easy', answers: [{ id: 'a', text: 'Fixed rules', isCorrect: false }, { id: 'b', text: 'Sense, learn, and adapt', isCorrect: true }, { id: 'c', text: 'High power', isCorrect: false }, { id: 'd', text: 'Wired only', isCorrect: false }] },
    { id: 'ss-l7-q2', question: "Sensor data preprocessing is primarily focused on:", difficulty: 'easy', answers: [{ id: 'a', text: 'Increasing speed', isCorrect: false }, { id: 'b', text: 'Reducing noise and improving quality', isCorrect: true }, { id: 'c', text: 'Artificial logic', isCorrect: false }, { id: 'd', text: 'Wired circuits', isCorrect: false }] },
    { id: 'ss-l7-q3', question: "Which CI technique is best for 'imprecise reasoning'?", difficulty: 'medium', answers: [{ id: 'a', text: 'Neural Networks', isCorrect: false }, { id: 'b', text: 'Genetic Algorithms', isCorrect: false }, { id: 'c', text: 'Fuzzy Logic', isCorrect: true }, { id: 'd', text: 'Swarm Intelligence', isCorrect: false }] },
    { id: 'ss-l7-q4', question: "Edge computing means processing is done:", difficulty: 'easy', answers: [{ id: 'a', text: 'On a remote cloud', isCorrect: false }, { id: 'b', text: 'Close to the data source', isCorrect: true }, { id: 'c', text: 'Only in the morning', isCorrect: false }, { id: 'd', text: 'Manual input', isCorrect: false }] },
    { id: 'ss-l7-q5', question: "Combining multiple sensors to improve reliability is:", difficulty: 'easy', answers: [{ id: 'a', text: 'Fusion', isCorrect: true }, { id: 'b', text: 'Automation', isCorrect: false }, { id: 'c', text: 'Encryption', isCorrect: false }, { id: 'd', text: 'Induction', isCorrect: false }] },
    { id: 'ss-l7-q6', question: "Which characteristic refers to the ability to operate without human intervention?", difficulty: 'easy', answers: [{ id: 'a', text: 'Modularity', isCorrect: false }, { id: 'b', text: 'Autonomy', isCorrect: true }, { id: 'c', text: 'Interoperability', isCorrect: false }, { id: 'd', text: 'Scalability', isCorrect: false }] },
    { id: 'ss-l7-q7', question: "Fault isolation is a benefit of which design principle?", difficulty: 'medium', answers: [{ id: 'a', text: 'Centralization', isCorrect: false }, { id: 'b', text: 'Modularity', isCorrect: true }, { id: 'c', text: 'Abstraction', isCorrect: false }, { id: 'd', text: 'Induction', isCorrect: false }] },
    { id: 'ss-l7-q8', question: "Which layer handles the 'Physical-Digital' interface?", difficulty: 'easy', answers: [{ id: 'a', text: 'Intelligence', isCorrect: false }, { id: 'b', text: 'Perception', isCorrect: true }, { id: 'c', text: 'Communication', isCorrect: false }, { id: 'd', text: 'Application', isCorrect: false }] },
    { id: 'ss-l7-q9', question: "Network load and computational cost are challenges for:", difficulty: 'medium', answers: [{ id: 'a', text: 'Modularity', isCorrect: false }, { id: 'b', text: 'Scalability', isCorrect: true }, { id: 'c', text: 'Calibration', isCorrect: false }, { id: 'd', text: 'Induction', isCorrect: false }] },
    { id: 'ss-l7-q10', question: "Swarm intelligence is inspired by:", difficulty: 'easy', answers: [{ id: 'a', text: 'Single cells', isCorrect: false }, { id: 'b', text: 'Social insects like bees or ants', isCorrect: true }, { id: 'c', text: 'The moon', isCorrect: false }, { id: 'd', text: 'Fossil fuels', isCorrect: false }] },
    { id: 'ss-l7-q11', question: "Predicting 'Stock Prices' as a number is which type of ML?", difficulty: 'medium', answers: [{ id: 'a', text: 'Classification', isCorrect: false }, { id: 'b', text: 'Regression', isCorrect: true }, { id: 'c', text: 'Clustering', isCorrect: false }, { id: 'd', text: 'Fuzzy', isCorrect: false }] },
    { id: 'ss-l7-q12', question: "A system that can handle growth without performance loss is:", difficulty: 'easy', answers: [{ id: 'a', text: 'Autonomous', isCorrect: false }, { id: 'b', text: 'Scalable', isCorrect: true }, { id: 'c', text: 'Brittle', isCorrect: false }, { id: 'd', text: 'Centralized', isCorrect: false }] },
    { id: 'ss-l7-q13', question: "Which sensor fusion level combines concluded decisions?", difficulty: 'medium', answers: [{ id: 'a', text: 'Low-level', isCorrect: false }, { id: 'b', text: 'Mid-level', isCorrect: false }, { id: 'c', text: 'High-level', isCorrect: true }, { id: 'd', text: 'No-level', isCorrect: false }] },
    { id: 'ss-l7-q14', question: "Smart homes primarly use which technology for device connection?", difficulty: 'easy', answers: [{ id: 'a', text: 'Steam governors', isCorrect: false }, { id: 'b', text: 'IoT protocols', isCorrect: true }, { id: 'c', text: 'Analog waves', isCorrect: false }, { id: 'd', text: 'Clockwork', isCorrect: false }] },
    { id: 'ss-l7-q15', question: "In a smart car, braking suddenly when a child is detected is:", difficulty: 'easy', answers: [{ id: 'a', text: 'Perception', isCorrect: false }, { id: 'b', text: 'Actuation', isCorrect: true }, { id: 'c', text: 'Cloud storage', isCorrect: false }, { id: 'd', text: 'Modularity', isCorrect: false }] },
    { id: 'ss-l7-q16', question: "The 'Black Box' problem refers to which ethical concern?", difficulty: 'medium', answers: [{ id: 'a', text: 'Privacy', isCorrect: false }, { id: 'b', text: 'Transparency (lack of explanation)', isCorrect: true }, { id: 'c', text: 'Battery life', isCorrect: false }, { id: 'd', text: 'GPS accuracy', isCorrect: false }] },
    { id: 'ss-l7-q17', question: "Which reasoning is used in professional medical diagnostic tools?", difficulty: 'medium', answers: [{ id: 'a', text: 'Pure Deduction', isCorrect: false }, { id: 'b', text: 'Abduction (Inference to best explanation)', isCorrect: true }, { id: 'c', text: 'Recursion', isCorrect: false }, { id: 'd', text: 'Fixed rule only', isCorrect: false }] },
    { id: 'ss-l7-q18', question: "Adaptive signal control in cities is an example of:", difficulty: 'easy', answers: [{ id: 'a', text: 'Smart City infrastructure', isCorrect: true }, { id: 'b', text: 'Simple reflex', isCorrect: false }, { id: 'c', text: 'Deductive rule', isCorrect: false }, { id: 'd', text: 'Manual control', isCorrect: false }] },
    { id: 'ss-l7-q19', question: "Data privacy concerns are most common in which smart domain?", difficulty: 'easy', answers: [{ id: 'a', text: 'Smart Healthcare and Cities', isCorrect: true }, { id: 'b', text: 'Mechanical engineering', isCorrect: false }, { id: 'c', text: 'Ancient history', isCorrect: false }, { id: 'd', text: 'Pure math', isCorrect: false }] },
    { id: 'ss-l7-q20', question: "Why is 'Validation' performed in the design workflow?", difficulty: 'easy', answers: [{ id: 'a', text: 'To lose data', isCorrect: false }, { id: 'b', text: 'To ensure the system meets requirements and goals', isCorrect: true }, { id: 'c', text: 'To buy more actuators', isCorrect: false }, { id: 'd', text: 'To make it slower', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l7-w1', question: "Explain the role of actuators in a smart irrigation system.", modelAnswer: "Actuators are the 'muscles'. They turn electrical decisions (water now) into physical actions (open valve)." },
    { id: 'ss-l7-w2', question: "Discuss why 'Low Latency' makes Edge Computing essential for Autonomous Vehicles.", modelAnswer: "Speed. Cloud takes seconds; sensors need milliseconds to avoid a crash. Processing must be local (on the Edge)." },
    { id: 'ss-l7-w3', question: "Differentiate between ANN and Fuzzy Logic inspirations.", modelAnswer: "ANN is inspired by the human brain structure (neurons). Fuzzy logic is inspired by human reasoning (shades of grey between true/false)." },
  ],
}
