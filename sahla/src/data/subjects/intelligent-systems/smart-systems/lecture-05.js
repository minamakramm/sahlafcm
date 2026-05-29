export const LECTURE = {
  subjectId: 'smart-systems',
  number: 5,
  title: 'Machine Learning & Sensor Fusion',
  titleAr: 'المحاضرة 5: تعلم الآلة ودمج المستشعرات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Machine Learning in Smart Systems</h2>
<p><strong>Machine Learning (ML)</strong> enables smart systems to improve performance <strong>from data and experience</strong> without being explicitly programmed for every scenario.</p>

<h3>Three Types of Machine Learning:</h3>
<table class="styled-table">
  <thead><tr><th>Type</th><th>How It Works</th><th>Data</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Supervised</strong></td><td>Learns from labeled input-output pairs</td><td>Labeled training data</td><td>Spam detection: email + label (spam/not spam)</td></tr>
    <tr><td><strong>Unsupervised</strong></td><td>Finds hidden patterns or groupings</td><td>Unlabeled data</td><td>Customer segmentation: group buyers by behavior</td></tr>
    <tr><td><strong>Reinforcement (RL)</strong></td><td>Learns by trial-and-error with rewards/penalties</td><td>Environment feedback</td><td>Robot walking: +reward for balance, −penalty for falling</td></tr>
  </tbody>
</table>

<h3>📘 Supervised Learning — Detailed</h3>
<ul>
  <li><strong>Classification:</strong> Output is a category (spam/not spam, healthy/diseased).</li>
  <li><strong>Regression:</strong> Output is a continuous value (price prediction, temperature forecast).</li>
</ul>

<h3>📘 Unsupervised Learning — Detailed</h3>
<ul>
  <li><strong>Clustering:</strong> Group similar data points (K-Means, Hierarchical).</li>
  <li><strong>Anomaly Detection:</strong> Identify unusual patterns (fraud, equipment failure).</li>
</ul>

<h3>📘 Reinforcement Learning — Detailed</h3>
<ul>
  <li><strong>Key concepts:</strong> State (s), Action (a), Reward (r), Policy (π), Q-value.</li>
  <li><strong>Smart System Example:</strong> RL agent controls traffic signal → reward: −1 per second cars wait → learns to minimize total waiting time.</li>
</ul>

<h2>🔹 Sensor Fusion</h2>
<p><strong>Sensor Fusion</strong> is the intelligent combination of data from <strong>multiple sensors</strong> to produce more accurate, reliable, and comprehensive information than any single sensor could provide alone.</p>
<p><strong>Why is it needed?</strong> No single sensor is perfect: cameras fail in darkness, radar has low resolution, GPS is inaccurate indoors.</p>

<h3>Levels of Sensor Fusion:</h3>
<table class="styled-table">
  <thead><tr><th>Level</th><th>What is Fused</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Low-Level (Data)</strong></td><td>Raw data</td><td>Combine raw sensor data into a unified representation</td><td>Merging pixel data from multiple cameras</td></tr>
    <tr><td><strong>Mid-Level (Feature)</strong></td><td>Extracted features</td><td>Combine features extracted from each sensor</td><td>Combining edges from camera + distance from LiDAR</td></tr>
    <tr><td><strong>High-Level (Decision)</strong></td><td>Decisions</td><td>Each sensor makes a decision independently; decisions are combined</td><td>Camera says "pedestrian", radar says "moving object" → fused: "pedestrian crossing"</td></tr>
  </tbody>
</table>

<h3>📌 Autonomous Vehicle — Sensor Fusion Example:</h3>
<table class="styled-table">
  <thead><tr><th>Sensor</th><th>Strength</th><th>Weakness</th></tr></thead>
  <tbody>
    <tr><td><strong>Camera</strong></td><td>Object recognition, lane detection</td><td>Fails in fog, rain, darkness</td></tr>
    <tr><td><strong>Radar</strong></td><td>Speed + distance (works in fog/rain)</td><td>Low resolution, no shape</td></tr>
    <tr><td><strong>LiDAR</strong></td><td>High-precision 3D mapping</td><td>Expensive, affected by heavy rain</td></tr>
    <tr><td><strong>GPS</strong></td><td>Global position</td><td>Inaccurate in tunnels/canyons</td></tr>
    <tr><td><strong>IMU</strong></td><td>Orientation and acceleration</td><td>Drift over time</td></tr>
  </tbody>
</table>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Kalman Filter:</strong> A mathematical algorithm commonly used in sensor fusion. It estimates the true state of a system by combining noisy measurements from multiple sensors with a prediction model.</span></div>

<h2>🔹 Predictive Maintenance</h2>
<ol>
  <li><strong>Data Collection:</strong> Sensors monitor vibration, temperature, pressure continuously.</li>
  <li><strong>Feature Extraction:</strong> ML extracts patterns (increasing vibration = bearing wear).</li>
  <li><strong>Anomaly Detection:</strong> Compare current patterns to baseline.</li>
  <li><strong>Prediction:</strong> Estimate remaining useful life (RUL) of component.</li>
  <li><strong>Action:</strong> Schedule maintenance before failure → avoid downtime.</li>
</ol>

<h2>🔹 Edge vs Cloud for ML Processing</h2>
<table class="styled-table">
  <thead><tr><th>Aspect</th><th>Edge Processing</th><th>Cloud Processing</th></tr></thead>
  <tbody>
    <tr><td>Latency</td><td>Very low (milliseconds)</td><td>Higher (seconds)</td></tr>
    <tr><td>Use Case</td><td>Real-time inference (braking, alerts)</td><td>Model training, historical analysis</td></tr>
    <tr><td>Bandwidth</td><td>Saves — processes locally</td><td>Requires — uploads raw data</td></tr>
    <tr><td>Privacy</td><td>Data stays local</td><td>Data sent to remote servers</td></tr>
    <tr><td>Compute Power</td><td>Limited</td><td>High (GPUs, TPUs)</td></tr>
  </tbody>
</table>
<p><strong>Best practice:</strong> Train models in the Cloud → Deploy trained models to the Edge for real-time inference.</p>

<h2>🔹 GIGO: Garbage In, Garbage Out</h2>
<p>The quality of a smart system's decisions is <strong>only as good as the quality of its data</strong>. If sensors are uncalibrated, noisy, or biased → the ML model learns incorrect patterns → wrong decisions.</p>
<p><strong>Example:</strong> If a heart rate sensor has a 20% error margin (garbage in), a health app may send false emergency alerts or miss real emergencies (garbage out).</p>`,
        bodyAr: `<h2>🔹 تعلم الآلة في الأنظمة الذكية</h2>
<ul>
<li><strong>التعلم الخاضع للإشراف:</strong> بيانات مُعنونة (كشف البريد المزعج).</li>
<li><strong>التعلم غير الخاضع للإشراف:</strong> أنماط مخفية (تجميع العملاء).</li>
<li><strong>التعلم المعزز:</strong> مكافآت وعقوبات (روبوت يتعلم المشي).</li>
</ul>
<h3>دمج المستشعرات</h3>
<p>دمج بيانات من عدة مستشعرات لتحسين الدقة والموثوقية.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "ML Types: Supervised (labeled data), Unsupervised (hidden patterns), Reinforcement (trial-and-error rewards)",
      "Supervised: Classification (categories) and Regression (continuous values)",
      "Sensor Fusion: Combining multiple sensors for accuracy + reliability + coverage",
      "Fusion Levels: Low (raw data), Mid (features), High (decisions)",
      "Autonomous Vehicle Fusion: Camera + Radar + LiDAR + GPS + IMU for 360° perception",
      "Kalman Filter: Mathematical algorithm for combining noisy measurements",
      "Predictive Maintenance: Data → Features → Anomaly Detection → Predict RUL → Schedule repair",
      "Edge = real-time inference (low latency). Cloud = model training (high compute). Best: train in cloud, deploy to edge",
      "GIGO: Garbage In, Garbage Out — data quality determines decision quality",
    ],
    pointsAr: [
      "أنواع تعلم الآلة: خاضع للإشراف، غير خاضع للإشراف، التعلم المعزز",
      "دمج المستشعرات: دمج عدة مستشعرات لتحسين الدقة",
      "مستويات الدمج: منخفض (بيانات خام)، متوسط (ميزات)، عالٍ (قرارات)",
      "Edge = استدلال آني. Cloud = تدريب النماذج",
      "GIGO: بيانات سيئة = قرارات سيئة",
    ],
  },

  mcq: [
    { id: 'ss-l5-q1', question: "Combining data from multiple sensors to produce high reliability is:", difficulty: 'easy', answers: [{ id: 'a', text: 'Splitting', isCorrect: false }, { id: 'b', text: 'Fusion', isCorrect: true }, { id: 'c', text: 'Calibration', isCorrect: false }, { id: 'd', text: 'Reduction', isCorrect: false }] },
    { id: 'ss-l5-q2', question: "Self-driving cars use Camera, Radar, and LiDAR because:", difficulty: 'easy', answers: [{ id: 'a', text: 'To increase weight', isCorrect: false }, { id: 'b', text: 'No single sensor is perfect in all conditions', isCorrect: true }, { id: 'c', text: "It's a color requirement", isCorrect: false }, { id: 'd', text: 'They are all the same', isCorrect: false }] },
    { id: 'ss-l5-q3', question: "Learning from 'Labeled data' is called:", difficulty: 'easy', answers: [{ id: 'a', text: 'Unsupervised', isCorrect: false }, { id: 'b', text: 'Supervised', isCorrect: true }, { id: 'c', text: 'Reinforcement', isCorrect: false }, { id: 'd', text: 'Deduction', isCorrect: false }] },
    { id: 'ss-l5-q4', question: "A robot learning to walk by receiving 'points' for success uses:", difficulty: 'easy', answers: [{ id: 'a', text: 'Supervised Learning', isCorrect: false }, { id: 'b', text: 'Reinforcement Learning', isCorrect: true }, { id: 'c', text: 'Fuzzy Logic', isCorrect: false }, { id: 'd', text: 'Deduction', isCorrect: false }] },
    { id: 'ss-l5-q5', question: "Predictive Maintenance allows a smart system to:", difficulty: 'medium', answers: [{ id: 'a', text: 'Fix a broken machine', isCorrect: false }, { id: 'b', text: 'Identify signs of failure before it happens', isCorrect: true }, { id: 'c', text: 'Turn off the system', isCorrect: false }, { id: 'd', text: 'Ignore all sensors', isCorrect: false }] },
    { id: 'ss-l5-q6', question: "Garbage In, Garbage Out (GIGO) means:", difficulty: 'easy', answers: [{ id: 'a', text: 'Recycling hardware', isCorrect: false }, { id: 'b', text: 'Bad data leads to bad decisions', isCorrect: true }, { id: 'c', text: 'Deleting old files', isCorrect: false }, { id: 'd', text: 'Fast processing', isCorrect: false }] },
    { id: 'ss-l5-q7', question: "High-level sensor fusion combines:", difficulty: 'medium', answers: [{ id: 'a', text: 'Raw data from all sensors', isCorrect: false }, { id: 'b', text: 'Extracted features', isCorrect: false }, { id: 'c', text: 'Independent decisions from each sensor', isCorrect: true }, { id: 'd', text: 'Only camera images', isCorrect: false }] },
    { id: 'ss-l5-q8', question: "The Kalman Filter is used in sensor fusion for:", difficulty: 'medium', answers: [{ id: 'a', text: 'Removing sensors', isCorrect: false }, { id: 'b', text: 'Estimating true state from noisy measurements', isCorrect: true }, { id: 'c', text: 'Increasing noise', isCorrect: false }, { id: 'd', text: 'Replacing cameras', isCorrect: false }] },
    { id: 'ss-l5-q9', question: "In predictive maintenance, 'RUL' stands for:", difficulty: 'medium', answers: [{ id: 'a', text: 'Real User Login', isCorrect: false }, { id: 'b', text: 'Remaining Useful Life', isCorrect: true }, { id: 'c', text: 'Remote Universal Link', isCorrect: false }, { id: 'd', text: 'Rapid Update Layer', isCorrect: false }] },
    { id: 'ss-l5-q10', question: "Best practice for ML in smart systems:", difficulty: 'medium', answers: [{ id: 'a', text: 'Train and run on edge', isCorrect: false }, { id: 'b', text: 'Train in cloud, deploy to edge', isCorrect: true }, { id: 'c', text: 'Only use cloud', isCorrect: false }, { id: 'd', text: 'Avoid ML entirely', isCorrect: false }] },
    { id: 'ss-l5-q11', question: "Predicting a patient's 'Blood Pressure' as a number (e.g. 120/80) is an example of:", difficulty: 'medium', answers: [{ id: 'a', text: 'Classification', isCorrect: false }, { id: 'b', text: 'Regression', isCorrect: true }, { id: 'c', text: 'Clustering', isCorrect: false }, { id: 'd', text: 'Anomaly Detection', isCorrect: false }] },
    { id: 'ss-l5-q12', question: "Group of consumers into 'Big Spenders' and 'Occasional Buyers' without labels is:", difficulty: 'medium', answers: [{ id: 'a', text: 'Supervised Learning', isCorrect: false }, { id: 'b', text: 'Unsupervised (Clustering)', isCorrect: true }, { id: 'c', text: 'Reinforcement Learning', isCorrect: false }, { id: 'd', text: 'Deduction', isCorrect: false }] },
    { id: 'ss-l5-q13', question: "A 'Feature' in Machine Learning is:", difficulty: 'easy', answers: [{ id: 'a', text: 'The final decision', isCorrect: false }, { id: 'b', text: 'An input variable used for prediction (e.g. pulse, age)', isCorrect: true }, { id: 'c', text: 'The battery level', isCorrect: false }, { id: 'd', text: 'A loud noise', isCorrect: false }] },
    { id: 'ss-l5-q14', question: "What is the primary benefit of 'Decision-level' sensor fusion?", difficulty: 'medium', answers: [{ id: 'a', text: 'It combines raw pixels', isCorrect: false }, { id: 'b', text: 'It allows sensors to operate independently before merging conclusions', isCorrect: true }, { id: 'c', text: 'It requires zero power', isCorrect: false }, { id: 'd', text: 'It eliminates the need for AI', isCorrect: false }] },
    { id: 'ss-l5-q15', question: "Which sensor is best at mapping a 3D environment with high precision?", difficulty: 'easy', answers: [{ id: 'a', text: 'Camera', isCorrect: false }, { id: 'b', text: 'Radar', isCorrect: false }, { id: 'c', text: 'LiDAR', isCorrect: true }, { id: 'd', text: 'IMU', isCorrect: false }] },
    { id: 'ss-l5-q16', question: "An 'Anomaly Detection' system in a factory looks for:", difficulty: 'medium', answers: [{ id: 'a', text: 'Normal behavior', isCorrect: false }, { id: 'b', text: 'Unusual patterns that might indicate damage', isCorrect: true }, { id: 'c', text: 'Lunch hours', isCorrect: false }, { id: 'd', text: 'Employee names', isCorrect: false }] },
    { id: 'ss-l5-q17', question: "Cloud computing is better than Edge for:", difficulty: 'medium', answers: [{ id: 'a', text: 'Real-time braking', isCorrect: false }, { id: 'b', text: 'Training heavy AI models from historical data', isCorrect: true }, { id: 'c', text: 'Privacy-sensitive data', isCorrect: false }, { id: 'd', text: 'Local signal control', isCorrect: false }] },
    { id: 'ss-l5-q18', question: "The 'Reward' in Reinforcement Learning is used to:", difficulty: 'easy', answers: [{ id: 'a', text: 'Punish the programmer', isCorrect: false }, { id: 'b', text: 'Tell the agent how well it performed its last action', isCorrect: true }, { id: 'c', text: 'Buy more hardware', isCorrect: false }, { id: 'd', text: 'Label the training data', isCorrect: false }] },
    { id: 'ss-l5-q19', question: "In the context of 'Smart Systems', what is 'Ground Truth'?", difficulty: 'medium', answers: [{ id: 'a', text: 'The physical floor', isCorrect: false }, { id: 'b', text: 'The real, actual value we are trying to predict', isCorrect: true }, { id: 'c', text: 'A type of sensor', isCorrect: false }, { id: 'd', text: 'The internet connection', isCorrect: false }] },
    { id: 'ss-l5-q20', question: "Why is 'Low-level' data fusion difficult?", difficulty: 'medium', answers: [{ id: 'a', text: 'Sensors speak the same language', isCorrect: false }, { id: 'b', text: 'It involves merging massive amounts of raw, unformatted data', isCorrect: true }, { id: 'c', text: 'It is too simple', isCorrect: false }, { id: 'd', text: 'It doesn\'t use sensors', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l5-w1', question: "Define Machine Learning and describe the three main learning types with examples.", modelAnswer: "Supervised (labeled: spam detection), Unsupervised (unlabeled: customer clustering), Reinforcement (rewards: robot walking). ML enables learning from data without explicit programming." },
    { id: 'ss-l5-w2', question: "Why is Sensor Fusion essential for autonomous vehicles? List 5 sensors and their strengths/weaknesses.", modelAnswer: "Camera (vision but fails in fog), Radar (speed/distance but low resolution), LiDAR (3D but expensive), GPS (position but inaccurate indoors), IMU (orientation but drifts). Fusion compensates weaknesses." },
    { id: 'ss-l5-w3', question: "Explain the three levels of sensor fusion with examples.", modelAnswer: "Low (raw data: merge camera pixels), Mid (features: combine edges + distance), High (decisions: camera says pedestrian + radar says moving object → fused: pedestrian crossing)." },
    { id: 'ss-l5-w4', question: "Describe the Predictive Maintenance pipeline in Industry 4.0.", modelAnswer: "(1) Data collection (vibration/temp sensors), (2) Feature extraction (ML patterns), (3) Anomaly detection (compare to baseline), (4) Predict RUL, (5) Schedule repair before failure." },
    { id: 'ss-l5-w5', question: "Compare Edge and Cloud processing for ML and explain the best practice approach.", modelAnswer: "Edge: low latency, local, real-time inference. Cloud: high compute, training, historical analysis. Best practice: Train in cloud → Deploy to edge." },
  ],
}
