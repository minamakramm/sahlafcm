export const LECTURE = {
  subjectId: 'smart-systems',
  number: 6,
  title: 'Applications, Ethics & Integration',
  titleAr: 'المحاضرة 6: التطبيقات والأخلاقيات والتكامل',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Global Applications of Smart Systems</h2>

<h3>1. Smart Homes</h3>
<p>Integration of lighting, security, HVAC, and appliances into a connected ecosystem for comfort, energy saving, and safety.</p>
<ul>
  <li><strong>Example:</strong> Smart thermostat (Nest) learns your schedule and adjusts temperature accordingly, saving up to 15% energy.</li>
</ul>

<h3>2. Smart Cities</h3>
<ul>
  <li><strong>Traffic:</strong> Adaptive signal control based on real-time congestion data (sensor fusion).</li>
  <li><strong>Waste:</strong> IoT-enabled bins report fill levels → optimized collection routes.</li>
  <li><strong>Energy:</strong> Smart grid balances renewable energy + demand prediction.</li>
  <li><strong>Water:</strong> Leak detection via pressure sensors + ML anomaly detection.</li>
</ul>

<h3>3. Smart Healthcare</h3>
<ul>
  <li><strong>Wearables:</strong> Continuous heart rate, SpO₂, ECG monitoring.</li>
  <li><strong>AI Diagnosis:</strong> ANN analyzes medical images (X-ray, MRI) for early disease detection.</li>
  <li><strong>Example:</strong> Wearable detects irregular heartbeat → alerts doctor → early intervention for atrial fibrillation.</li>
</ul>

<h3>4. Industry 4.0 (Smart Manufacturing)</h3>
<ul>
  <li><strong>Predictive Maintenance:</strong> Sensors detect vibration anomalies → predict bearing failure.</li>
  <li><strong>Digital Twin:</strong> Virtual replica of physical system for simulation and optimization.</li>
  <li><strong>Autonomous Robots:</strong> Collaborative robots (cobots) work alongside humans.</li>
</ul>

<h3>5. Smart Agriculture</h3>
<ul>
  <li><strong>Irrigation:</strong> Soil moisture + weather forecast → optimize water usage (save up to 30%).</li>
  <li><strong>Crop Monitoring:</strong> Drones with multispectral cameras detect plant diseases early.</li>
</ul>

<h3>6. Smart Transportation</h3>
<ul>
  <li><strong>Autonomous Vehicles:</strong> Sensor fusion (Camera + Radar + LiDAR) + AI decision-making.</li>
  <li><strong>V2X Communication:</strong> Vehicle-to-everything communication for safety.</li>
</ul>

<h3>📊 Application Domain Summary:</h3>
<table class="styled-table">
  <thead><tr><th>Domain</th><th>Key Technology</th><th>Primary Benefit</th></tr></thead>
  <tbody>
    <tr><td>Smart Home</td><td>IoT + ML</td><td>Energy saving, comfort</td></tr>
    <tr><td>Smart City</td><td>Sensor Fusion + AI</td><td>Resource optimization</td></tr>
    <tr><td>Healthcare</td><td>Wearables + ANN</td><td>Early detection, remote care</td></tr>
    <tr><td>Industry 4.0</td><td>CPS + Predictive ML</td><td>Reduced downtime, efficiency</td></tr>
    <tr><td>Agriculture</td><td>Drones + Soil Sensors</td><td>Water savings, yield optimization</td></tr>
    <tr><td>Transportation</td><td>LiDAR + RL</td><td>Safety, autonomous navigation</td></tr>
  </tbody>
</table>

<h2>🔹 Ethics & Challenges</h2>
<table class="styled-table">
  <thead><tr><th>Challenge</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Privacy</strong></td><td>Massive data collection from cameras, wearables, and IoT devices</td><td>Facial recognition tracking citizens without consent</td></tr>
    <tr><td><strong>Bias</strong></td><td>AI models making unfair decisions due to biased training data</td><td>Recruitment AI discriminating by gender or ethnicity</td></tr>
    <tr><td><strong>Transparency</strong></td><td>Inability to explain how AI makes decisions ("Black Box")</td><td>Medical AI recommends treatment but can't explain why</td></tr>
    <tr><td><strong>Accountability</strong></td><td>Who is responsible when AI causes harm?</td><td>Self-driving car accident: manufacturer, programmer, or passenger?</td></tr>
    <tr><td><strong>Security</strong></td><td>Vulnerabilities to hacking and cyber-attacks</td><td>Hacking smart grid → city-wide power outage</td></tr>
    <tr><td><strong>Job Displacement</strong></td><td>Automation replacing human workers</td><td>Factory automation reducing manual labor jobs</td></tr>
  </tbody>
</table>

<h2>🔹 Security Threats in Smart Systems</h2>
<ul>
  <li><strong>Data Breaches:</strong> Unauthorized access to personal health/financial data.</li>
  <li><strong>Device Hijacking:</strong> Taking control of IoT devices (cameras, thermostats, cars).</li>
  <li><strong>Man-in-the-Middle:</strong> Intercepting communication between sensors and cloud.</li>
  <li><strong>Denial of Service (DoS):</strong> Overwhelming system to cause failure.</li>
</ul>

<h2>🔹 Responsible AI Design Principles</h2>
<ol>
  <li><strong>Human-Centered:</strong> Design systems that augment, not replace, human capabilities.</li>
  <li><strong>Fairness:</strong> Ensure models are tested for bias across demographics.</li>
  <li><strong>Transparency:</strong> Use explainable AI (XAI) so decisions can be understood.</li>
  <li><strong>Privacy by Design:</strong> Minimize data collection, encrypt at rest and in transit.</li>
  <li><strong>Robustness:</strong> Systems should handle errors, noise, and adversarial attacks.</li>
  <li><strong>Accountability:</strong> Clear ownership of AI decisions and their consequences.</li>
</ol>

<h2>🔹 Smart System Design Workflow</h2>
<ol>
  <li><strong>Requirements Analysis:</strong> Define the problem, goals, and constraints.</li>
  <li><strong>Hardware Selection:</strong> Choose appropriate sensors and actuators.</li>
  <li><strong>Architecture Design:</strong> Select Edge, Cloud, or Hybrid architecture.</li>
  <li><strong>Intelligence Design:</strong> Choose CI/ML algorithms (ANN, Fuzzy, GA, RL).</li>
  <li><strong>Communication Setup:</strong> Select protocols (Wi-Fi, 5G, LoRaWAN).</li>
  <li><strong>Integration & Testing:</strong> End-to-end testing, calibration, and validation.</li>
  <li><strong>Deployment & Monitoring:</strong> Deploy, monitor performance, and iterate.</li>
</ol>

<h2>🔹 Course Integration: How Everything Connects</h2>
<table class="styled-table">
  <thead><tr><th>Lecture</th><th>Topic</th><th>Role in Smart System</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Introduction & Reasoning</td><td>Defines what makes a system "Smart" + logical foundations</td></tr>
    <tr><td>2</td><td>Computational Intelligence</td><td>ANN/Fuzzy/GA provide the intelligence layer capabilities</td></tr>
    <tr><td>3</td><td>Architecture & Sensors</td><td>4-layer structure + physical interfaces (sensors/actuators)</td></tr>
    <tr><td>4</td><td>Agents & Environments</td><td>Autonomous decision-making agents using knowledge + RL</td></tr>
    <tr><td>5</td><td>ML & Sensor Fusion</td><td>Learning from data + reliable multimodal perception</td></tr>
    <tr><td>6</td><td>Applications & Ethics</td><td>Real-world deployment + responsible design principles</td></tr>
  </tbody>
</table>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>The Complete Pipeline:</strong> Sensors (L3) collect data → Communication (L3) transmits it → CI/ML (L2, L5) processes and learns → Agents (L4) decide and act → Applications (L6) deliver services → Ethics (L6) ensures responsible deployment.</span></div>`,
        bodyAr: `<h2>🔹 التطبيقات العالمية للأنظمة الذكية</h2>
<p>المنازل الذكية، المدن الذكية، الرعاية الصحية، الصناعة 4.0، الزراعة الذكية، النقل الذكي.</p>
<h2>🔹 الأخلاقيات</h2>
<p>الخصوصية، التحيز، الشفافية، المساءلة، الأمن، إزاحة الوظائف.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "Smart Homes: IoT + ML for energy saving and comfort (Nest thermostat)",
      "Smart Cities: Adaptive traffic, smart waste/water/energy management",
      "Smart Healthcare: Wearables + ANN for remote monitoring and AI diagnosis",
      "Industry 4.0: Cyber-Physical Systems + Predictive Maintenance + Digital Twins",
      "Smart Agriculture: Precision irrigation + drone monitoring + yield prediction",
      "Ethics: Privacy, Bias, Transparency, Accountability, Security, Job Displacement",
      "Responsible AI: Human-centered, Fair, Transparent, Privacy-by-design, Robust, Accountable",
      "Design Workflow: Requirements → Hardware → Architecture → Intelligence → Communication → Integration → Deploy",
      "Course Integration: Sensors(L3) → Communication(L3) → CI/ML(L2,L5) → Agents(L4) → Applications(L6) → Ethics(L6)",
    ],
    pointsAr: [
      "المنازل الذكية: IoT + ML لتوفير الطاقة والراحة",
      "المدن الذكية: إشارات مرور تكيفية، إدارة النفايات والمياه والطاقة",
      "الرعاية الصحية الذكية: أجهزة قابلة للارتداء + ANN",
      "الصناعة 4.0: أنظمة مادية-إلكترونية + صيانة تنبؤية + توائم رقمية",
      "الأخلاقيات: الخصوصية، التحيز، الشفافية، المساءلة، الأمن",
    ],
  },

  mcq: [
    { id: 'ss-l6-q1', question: "Which domain uses IoT-enabled bins to report fill levels?", difficulty: 'easy', answers: [{ id: 'a', text: 'Smart Homes', isCorrect: false }, { id: 'b', text: 'Healthcare', isCorrect: false }, { id: 'c', text: 'Smart Water', isCorrect: false }, { id: 'd', text: 'Smart Waste Management', isCorrect: true }] },
    { id: 'ss-l6-q2', question: "Privacy and data security are ________________ in smart city design.", difficulty: 'easy', answers: [{ id: 'a', text: 'Minor issues', isCorrect: false }, { id: 'b', text: 'Major ethical challenges', isCorrect: true }, { id: 'c', text: 'Impossible to achieve', isCorrect: false }, { id: 'd', text: 'Unnecessary', isCorrect: false }] },
    { id: 'ss-l6-q3', question: "In Industry 4.0, smart factories use 'Predictive Maintenance' to:", difficulty: 'medium', answers: [{ id: 'a', text: 'Clean the floors', isCorrect: false }, { id: 'b', text: 'Wait for machines to break', isCorrect: false }, { id: 'c', text: 'Identify failure signs and fix them early', isCorrect: true }, { id: 'd', text: 'Replace all humans', isCorrect: false }] },
    { id: 'ss-l6-q4', question: "Smart irrigation saves water by:", difficulty: 'easy', answers: [{ id: 'a', text: 'Turning off water forever', isCorrect: false }, { id: 'b', text: 'Using soil moisture sensors and weather data', isCorrect: true }, { id: 'c', text: 'Ignoring the crops', isCorrect: false }, { id: 'd', text: 'Using high pressure', isCorrect: false }] },
    { id: 'ss-l6-q5', question: "Facial recognition cameras raise concerns about:", difficulty: 'easy', answers: [{ id: 'a', text: 'Storage space', isCorrect: false }, { id: 'b', text: 'Citizen privacy', isCorrect: true }, { id: 'c', text: 'Battery life', isCorrect: false }, { id: 'd', text: 'Internet speed', isCorrect: false }] },
    { id: 'ss-l6-q6', question: "A 'Digital Twin' in Industry 4.0 is:", difficulty: 'medium', answers: [{ id: 'a', text: 'A robot that looks like a human', isCorrect: false }, { id: 'b', text: 'A virtual replica of a physical system for simulation', isCorrect: true }, { id: 'c', text: 'A backup hard drive', isCorrect: false }, { id: 'd', text: 'A twin factory', isCorrect: false }] },
    { id: 'ss-l6-q7', question: "'Explainable AI (XAI)' addresses which ethical concern?", difficulty: 'medium', answers: [{ id: 'a', text: 'Privacy', isCorrect: false }, { id: 'b', text: 'Transparency (Black Box problem)', isCorrect: true }, { id: 'c', text: 'Job Displacement', isCorrect: false }, { id: 'd', text: 'Power consumption', isCorrect: false }] },
    { id: 'ss-l6-q8', question: "'Privacy by Design' means:", difficulty: 'medium', answers: [{ id: 'a', text: 'Adding privacy as an afterthought', isCorrect: false }, { id: 'b', text: 'Minimizing data collection and encrypting from the start', isCorrect: true }, { id: 'c', text: 'Collecting all data then filtering', isCorrect: false }, { id: 'd', text: 'Ignoring user consent', isCorrect: false }] },
    { id: 'ss-l6-q9', question: "Which security threat involves intercepting communication between sensors and cloud?", difficulty: 'medium', answers: [{ id: 'a', text: 'Phishing', isCorrect: false }, { id: 'b', text: 'Man-in-the-Middle', isCorrect: true }, { id: 'c', text: 'Brute Force', isCorrect: false }, { id: 'd', text: 'Social Engineering', isCorrect: false }] },
    { id: 'ss-l6-q10', question: "The complete smart system pipeline follows:", difficulty: 'medium', answers: [{ id: 'a', text: 'Act → Sense → Decide', isCorrect: false }, { id: 'b', text: 'Sense → Communicate → Process → Decide → Act → Learn', isCorrect: true }, { id: 'c', text: 'Learn → Forget → Repeat', isCorrect: false }, { id: 'd', text: 'Only sensing', isCorrect: false }] },
    { id: 'ss-l6-q11', question: "Which ethical concern involves 'AI models making unfair decisions'?", difficulty: 'easy', answers: [{ id: 'a', text: 'Privacy', isCorrect: false }, { id: 'b', text: 'Bias', isCorrect: true }, { id: 'c', text: 'Security', isCorrect: false }, { id: 'd', text: 'Internet Speed', isCorrect: false }] },
    { id: 'ss-l6-q12', question: "A 'Smart Grid' primarily optimizes:", difficulty: 'easy', answers: [{ id: 'a', text: 'Water usage', isCorrect: false }, { id: 'b', text: 'Electricity distribution and renewable energy', isCorrect: true }, { id: 'c', text: 'Car tires', isCorrect: false }, { id: 'd', text: 'School lunches', isCorrect: false }] },
    { id: 'ss-l6-q13', question: "In a smart city, 'V2X' stands for:", difficulty: 'medium', answers: [{ id: 'a', text: 'Very Small X-ray', isCorrect: false }, { id: 'b', text: 'Vehicle-to-Everything communication', isCorrect: true }, { id: 'c', text: 'Virtual Zero X', isCorrect: false }, { id: 'd', text: 'Video To XML', isCorrect: false }] },
    { id: 'ss-l6-q14', question: "Who is formally accountable for a decision made by an AI agent?", difficulty: 'medium', answers: [{ id: 'a', text: 'The agent itself', isCorrect: false }, { id: 'b', text: 'The designer, owner, and operator of the system', isCorrect: true }, { id: 'c', text: 'None of the above', isCorrect: false }, { id: 'd', text: 'The electrical company', isCorrect: false }] },
    { id: 'ss-l6-q15', question: "Hacking into a smart city water system is a violation of:", difficulty: 'easy', answers: [{ id: 'a', text: 'Privacy', isCorrect: false }, { id: 'b', text: 'Critical Infrastructure Security', isCorrect: true }, { id: 'c', text: 'Machine Learning', isCorrect: false }, { id: 'd', text: 'Color theory', isCorrect: false }] },
    { id: 'ss-l6-q16', question: "AI-based image analysis for MRI scans is an example of:", difficulty: 'easy', answers: [{ id: 'a', text: 'Smart City', isCorrect: false }, { id: 'b', text: 'Smart Healthcare', isCorrect: true }, { id: 'c', text: 'Smart Home', isCorrect: false }, { id: 'd', text: 'Smart Pavement', isCorrect: false }] },
    { id: 'ss-l6-q17', question: "The first step in any Smart System Design Workflow is:", difficulty: 'easy', answers: [{ id: 'a', text: 'Buying sensors', isCorrect: false }, { id: 'b', text: 'Requirements Analysis', isCorrect: true }, { id: 'c', text: 'Coding CI', isCorrect: false }, { id: 'd', text: 'Releasing the app', isCorrect: false }] },
    { id: 'ss-l6-q18', question: "Collaborative robots that work with humans are called:", difficulty: 'medium', answers: [{ id: 'a', text: 'Bostons', isCorrect: false }, { id: 'b', text: 'Cobots', isCorrect: true }, { id: 'c', text: 'Androids', isCorrect: false }, { id: 'd', text: 'Cyborgs', isCorrect: false }] },
    { id: 'ss-l6-q19', question: "Which technology is essential for 'Remote Patient Monitoring'?", difficulty: 'medium', answers: [{ id: 'a', text: 'Wearable sensors + Communication network', isCorrect: true }, { id: 'b', text: 'Pneumatic actuators', isCorrect: false }, { id: 'c', text: 'Analog radios', isCorrect: false }, { id: 'd', text: 'Heavy cranes', isCorrect: false }] },
    { id: 'ss-l6-q20', question: "The goal of 'Responsible AI' is to ensure that:", difficulty: 'easy', answers: [{ id: 'a', text: 'AI is as fast as possible', isCorrect: false }, { id: 'b', text: 'AI is designed and used ethically, safely, and fairly', isCorrect: true }, { id: 'c', text: 'Humans never have to work again', isCorrect: false }, { id: 'd', text: 'AI can think like a god', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l6-w1', question: "Describe the role of smart systems in four different application domains.", modelAnswer: "Healthcare (wearables + AI diagnosis), Transportation (autonomous vehicles + sensor fusion), Agriculture (precision irrigation + drone monitoring), Industry 4.0 (predictive maintenance + digital twins)." },
    { id: 'ss-l6-w2', question: "Discuss the ethical challenges of smart systems, focusing on privacy, bias, and transparency.", modelAnswer: "Privacy: massive data collection without consent. Bias: AI making unfair decisions from biased training data. Transparency: Black Box problem — can't explain decisions. Need Explainable AI (XAI)." },
    { id: 'ss-l6-w3', question: "Outline the 7 steps of a Smart System Design Workflow.", modelAnswer: "(1) Requirements analysis, (2) Hardware selection, (3) Architecture design, (4) Intelligence design, (5) Communication setup, (6) Integration & testing, (7) Deployment & monitoring." },
    { id: 'ss-l6-w4', question: "List and explain 6 principles of Responsible AI Design.", modelAnswer: "Human-centered, Fairness (test for bias), Transparency (XAI), Privacy by Design, Robustness (handle errors), Accountability (clear ownership of decisions)." },
    { id: 'ss-l6-w5', question: "Explain how the 6 lectures connect to form a complete smart system pipeline.", modelAnswer: "Sensors(L3) collect data → Communication(L3) transmits → CI/ML(L2,L5) learns and processes → Agents(L4) decide and act → Applications(L6) deliver services → Ethics(L6) ensures responsibility." },
  ],
}
