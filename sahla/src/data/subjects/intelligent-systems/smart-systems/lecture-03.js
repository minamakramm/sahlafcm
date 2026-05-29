export const LECTURE = {
  subjectId: 'smart-systems',
  number: 3,
  title: 'Architecture, Sensors & Communication',
  titleAr: 'المحاضرة 3: الهيكلية وأجهزة الاستشعار والاتصالات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Smart System Architecture</h2>
<p>A <strong>Smart System Architecture</strong> defines how components are organized to: (1) Collect data, (2) Transmit data, (3) Analyze data, (4) Make decisions, (5) Deliver services. It provides structure, modularity, and scalability.</p>

<h3>The 4-Layer Model:</h3>
<ol>
  <li><strong>Layer 1 — Perception (Sensing):</strong> Collect raw data from the environment. Components: Temperature sensors, cameras, GPS, motion detectors, IoT devices. Key Function: Data acquisition, real-time monitoring, physical-to-digital conversion.</li>
  <li><strong>Layer 2 — Communication (Network):</strong> Transfers data from perception to intelligence layer. Technologies: Wi-Fi, 5G, Bluetooth, LoRaWAN, MQTT protocols.</li>
  <li><strong>Layer 3 — Intelligence (Processing & Decision):</strong> Data processing, learning, prediction, and decision-making. <em>This is where Computational Intelligence operates.</em> Technologies: Neural Networks, Fuzzy Logic, Evolutionary Algorithms, ML models.</li>
  <li><strong>Layer 4 — Application (Service):</strong> Interface with users. Deliver smart services. Examples: Smart Healthcare App, Smart City Dashboard, Smart Factory maintenance alerts.</li>
</ol>

<h2>🔹 Sensors and Actuators</h2>
<p><strong>Sensors</strong> convert physical phenomena into digital/electrical signals. <strong>Actuators</strong> convert signals into physical actions. Together they close the <em>sense → decide → act</em> loop.</p>

<h3>Types of Sensors:</h3>
<table class="styled-table">
  <thead><tr><th>Type</th><th>Measures</th><th>Example</th><th>Smart System Use</th></tr></thead>
  <tbody>
    <tr><td>Temperature</td><td>Thermal energy</td><td>Thermistor, RTD</td><td>HVAC, smart homes</td></tr>
    <tr><td>Motion/Position</td><td>Movement</td><td>Accelerometer, GPS</td><td>Autonomous vehicles, robotics</td></tr>
    <tr><td>Light/Optical</td><td>Illumination</td><td>Photodiode, LDR</td><td>Smart streetlights, cameras</td></tr>
    <tr><td>Proximity</td><td>Distance</td><td>Ultrasonic, IR</td><td>Parking sensors, automation</td></tr>
    <tr><td>Chemical/Gas</td><td>Gas concentration</td><td>CO₂ sensor, smoke detector</td><td>Environmental monitoring</td></tr>
    <tr><td>Humidity</td><td>Moisture in air</td><td>Hygrometer</td><td>Greenhouses, smart buildings</td></tr>
    <tr><td>Pressure</td><td>Force per area</td><td>Barometer</td><td>Weather stations, smart cars</td></tr>
  </tbody>
</table>

<h3>Types of Actuators:</h3>
<table class="styled-table">
  <thead><tr><th>Type</th><th>Action</th><th>Example</th><th>Smart System Use</th></tr></thead>
  <tbody>
    <tr><td>Electrical</td><td>Movement / switching</td><td>DC motor, solenoid</td><td>Conveyor belts, valves</td></tr>
    <tr><td>Pneumatic</td><td>Air pressure movement</td><td>Air cylinder</td><td>Robotics, factory automation</td></tr>
    <tr><td>Hydraulic</td><td>Fluid power</td><td>Hydraulic piston</td><td>Heavy machinery, lifting</td></tr>
    <tr><td>Thermal</td><td>Heat / cooling</td><td>Peltier module</td><td>Temperature control</td></tr>
    <tr><td>Optical</td><td>Light emission</td><td>LED displays</td><td>Smart lighting, signals</td></tr>
  </tbody>
</table>

<h2>🔹 Noise, Uncertainty, and Calibration</h2>
<ul>
  <li><strong>Noise:</strong> Random variations in sensor signals caused by environment, electronics, or interference.</li>
  <li><strong>Uncertainty:</strong> Systematic deviation from true value due to aging sensors, non-linearity, or environmental factors.</li>
  <li><strong>Calibration:</strong> Process of adjusting sensor output to match known reference values. Reduces uncertainty and improves accuracy.</li>
</ul>

<h2>🔹 Communication: Conceptual Overview</h2>
<table class="styled-table">
  <thead><tr><th>Category</th><th>Description</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Wired</strong></td><td>Direct electrical connections</td><td>Ethernet, Serial (RS-232)</td></tr>
    <tr><td><strong>Wireless</strong></td><td>Radio or infrared</td><td>Wi-Fi, Bluetooth, LoRaWAN</td></tr>
    <tr><td><strong>Bus-based</strong></td><td>Multiple devices share lines</td><td>I²C, SPI, CAN</td></tr>
  </tbody>
</table>

<h2>🔹 Modularity & Scalability</h2>
<p><strong>Modularity:</strong> Each layer functions independently but interacts through defined interfaces. Benefits: easier maintenance, replace one layer without redesigning entire system.</p>
<p><strong>Scalability:</strong> Ability to grow without redesigning. <em>Horizontal:</em> Add more sensors. <em>Vertical:</em> Increase computing power.</p>

<h3>Traditional vs Smart Architecture:</h3>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Traditional System</th><th>Smart System</th></tr></thead>
  <tbody>
    <tr><td>Processing</td><td>Centralized</td><td>Distributed</td></tr>
    <tr><td>Learning</td><td>None</td><td>Built-in</td></tr>
    <tr><td>Adaptation</td><td>Low</td><td>High</td></tr>
    <tr><td>Data Flow</td><td>Static</td><td>Continuous</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>🔹 هيكلية النظام الذكي — النموذج رباعي الطبقات</h2>
<ol>
<li><strong>طبقة الإدراك:</strong> تحويل الظواهر الفيزيائية إلى إشارات رقمية (المستشعرات).</li>
<li><strong>طبقة الاتصال:</strong> نقل البيانات (Wi-Fi, 5G, LoRaWAN).</li>
<li><strong>طبقة الذكاء:</strong> حيث يعمل الذكاء الحاسوبي (ANN, Fuzzy, GA).</li>
<li><strong>طبقة التطبيق:</strong> واجهة المستخدم وتقديم الخدمات.</li>
</ol>`,
      },
    },
  ],

  summary: {
    points: [
      "4-Layer Model: Perception → Communication → Intelligence → Application",
      "Perception Layer: Physical-to-Digital conversion (sensors, IoT devices)",
      "Communication Layer: Data transfer (Wi-Fi, 5G, LoRaWAN, MQTT)",
      "Intelligence Layer: Where CI operates (ANN, Fuzzy, GA, ML)",
      "Sensors: Convert physical phenomena to digital. Actuators: Convert signals to physical actions",
      "Noise: Random fluctuations. Calibration: Adjusting to a reference standard",
      "Modularity: Independent components, easier maintenance, scalable",
      "Architectural variants: Edge-Fog-Cloud, SOA, Microservices",
    ],
    pointsAr: [
      "النموذج رباعي الطبقات: الإدراك ← الاتصال ← الذكاء ← التطبيق",
      "طبقة الإدراك: تحويل فيزيائي إلى رقمي (المستشعرات)",
      "طبقة الاتصال: نقل البيانات (Wi-Fi, 5G, LoRaWAN)",
      "طبقة الذكاء: حيث يعمل الذكاء الحاسوبي",
      "المستشعرات تحول الظواهر الفيزيائية والمشغلات تنفذ الأفعال",
      "الضوضاء: تقلبات عشوائية. المعايرة: التعديل لمعيار مرجعي",
    ],
  },

  mcq: [
    { id: 'ss-l3-q1', question: "Which layer is responsible for converting physical phenomena into digital signals?", difficulty: 'easy', answers: [{ id: 'a', text: 'Intelligence', isCorrect: false }, { id: 'b', text: 'Application', isCorrect: false }, { id: 'c', text: 'Perception', isCorrect: true }, { id: 'd', text: 'Communication', isCorrect: false }] },
    { id: 'ss-l3-q2', question: "What is an 'Actuator'?", difficulty: 'easy', answers: [{ id: 'a', text: 'A sense device', isCorrect: false }, { id: 'b', text: 'A device that converts electrical signals into physical actions', isCorrect: true }, { id: 'c', text: 'A data processing software', isCorrect: false }, { id: 'd', text: 'A communication protocol', isCorrect: false }] },
    { id: 'ss-l3-q3', question: "In a smart home application, the mobile dashboard belongs to:", difficulty: 'easy', answers: [{ id: 'a', text: 'Perception Layer', isCorrect: false }, { id: 'b', text: 'Application Layer', isCorrect: true }, { id: 'c', text: 'Intelligence Layer', isCorrect: false }, { id: 'd', text: 'Physical Layer', isCorrect: false }] },
    { id: 'ss-l3-q4', question: "Modularity in design means:", difficulty: 'easy', answers: [{ id: 'a', text: 'The system is one single piece', isCorrect: false }, { id: 'b', text: 'The system is divided into independent modules', isCorrect: true }, { id: 'c', text: 'The system has no CPU', isCorrect: false }, { id: 'd', text: 'The system is analog', isCorrect: false }] },
    { id: 'ss-l3-q5', question: "'Noise' in a sensor refers to:", difficulty: 'easy', answers: [{ id: 'a', text: 'Loud sound from the device', isCorrect: false }, { id: 'b', text: 'Random fluctuations or disturbances in sensor readings', isCorrect: true }, { id: 'c', text: 'Correct data output', isCorrect: false }, { id: 'd', text: 'A type of actuator', isCorrect: false }] },
    { id: 'ss-l3-q6', question: "'Calibration' of a sensor means:", difficulty: 'easy', answers: [{ id: 'a', text: 'Replacing the sensor', isCorrect: false }, { id: 'b', text: 'Adjusting output to match a known reference standard', isCorrect: true }, { id: 'c', text: 'Removing the sensor from the system', isCorrect: false }, { id: 'd', text: 'Increasing sensor size', isCorrect: false }] },
    { id: 'ss-l3-q7', question: "The typical order of data flow is:", difficulty: 'medium', answers: [{ id: 'a', text: 'App -> Logic -> Comm -> Sensor', isCorrect: false }, { id: 'b', text: 'Sensor -> Comm -> Logic -> App', isCorrect: true }, { id: 'c', text: 'Logic -> Sensor -> App -> Comm', isCorrect: false }, { id: 'd', text: 'Sensor -> Logic -> Comm -> App', isCorrect: false }] },
    { id: 'ss-l3-q8', question: "In the Edge-Fog-Cloud architecture, 'Edge' performs:", difficulty: 'medium', answers: [{ id: 'a', text: 'Deep analytics', isCorrect: false }, { id: 'b', text: 'Local processing near the data source', isCorrect: true }, { id: 'c', text: 'Long-term storage', isCorrect: false }, { id: 'd', text: 'User interface rendering', isCorrect: false }] },
    { id: 'ss-l3-q9', question: "Which communication protocol is designed for low-power, long-range IoT?", difficulty: 'medium', answers: [{ id: 'a', text: 'Ethernet', isCorrect: false }, { id: 'b', text: 'USB', isCorrect: false }, { id: 'c', text: 'LoRaWAN', isCorrect: true }, { id: 'd', text: 'HDMI', isCorrect: false }] },
    { id: 'ss-l3-q10', question: "Horizontal scalability means:", difficulty: 'easy', answers: [{ id: 'a', text: 'Increasing computing power', isCorrect: false }, { id: 'b', text: 'Adding more sensors/devices', isCorrect: true }, { id: 'c', text: 'Reducing system size', isCorrect: false }, { id: 'd', text: 'Removing layers', isCorrect: false }] },
    { id: 'ss-l3-q11', question: "A wireless soil moisture sensor transmitting data uses which layer?", difficulty: 'easy', answers: [{ id: 'a', text: 'Perception then Intelligence', isCorrect: false }, { id: 'b', text: 'Perception then Communication', isCorrect: true }, { id: 'c', text: 'Intelligence then Application', isCorrect: false }, { id: 'd', text: 'Only Actuation', isCorrect: false }] },
    { id: 'ss-l3-q12', question: "Which component is responsible for closing a valve in an irrigation system?", difficulty: 'easy', answers: [{ id: 'a', text: 'Sensor', isCorrect: false }, { id: 'b', text: 'Actuator', isCorrect: true }, { id: 'c', text: 'Communication hub', isCorrect: false }, { id: 'd', text: 'Mobile app', isCorrect: false }] },
    { id: 'ss-l3-q13', question: "Scalability allows a smart system to:", difficulty: 'easy', answers: [{ id: 'a', text: 'Use less electricity', isCorrect: false }, { id: 'b', text: 'Handle more devices and data without failing', isCorrect: true }, { id: 'c', text: 'Shrink in size', isCorrect: false }, { id: 'd', text: 'Connect to only one brand of sensor', isCorrect: false }] },
    { id: 'ss-l3-q14', question: "Which technology is found in the Communication Layer?", difficulty: 'easy', answers: [{ id: 'a', text: 'Neural Networks', isCorrect: false }, { id: 'b', text: 'Temperature Sensors', isCorrect: false }, { id: 'c', text: 'IoT protocols (Wi-Fi/5G)', isCorrect: true }, { id: 'd', text: 'Membership Functions', isCorrect: false }] },
    { id: 'ss-l3-q15', question: "If a smart traffic system adjusts light timing to reduce congestion, this logic resides in the:", difficulty: 'medium', answers: [{ id: 'a', text: 'Perception Layer', isCorrect: false }, { id: 'b', text: 'Communication Layer', isCorrect: false }, { id: 'c', text: 'Intelligence Layer', isCorrect: true }, { id: 'd', text: 'User Layer', isCorrect: false }] },
    { id: 'ss-l3-q16', question: "What happens in a 'Modular' system if one component is upgraded?", difficulty: 'easy', answers: [{ id: 'a', text: 'The entire system must be replaced', isCorrect: false }, { id: 'b', text: 'Only that module is affected', isCorrect: true }, { id: 'c', text: 'The system stops working', isCorrect: false }, { id: 'd', text: 'The batteries drain faster', isCorrect: false }] },
    { id: 'ss-l3-q17', question: "Which sensor is used to detect human presence in a smart building?", difficulty: 'easy', answers: [{ id: 'a', text: 'Pressure sensor', isCorrect: false }, { id: 'b', text: 'Motion detector', isCorrect: true }, { id: 'c', text: 'Thermometer', isCorrect: false }, { id: 'd', text: 'Luminous sensor', isCorrect: false }] },
    { id: 'ss-l3-q18', question: "Interoperability refers to:", difficulty: 'medium', answers: [{ id: 'a', text: 'Ability of different systems to work together', isCorrect: true }, { id: 'b', text: 'Removing all wires', isCorrect: false }, { id: 'c', text: 'Encoding data', isCorrect: false }, { id: 'd', text: 'Higher sensor resolution', isCorrect: false }] },
    { id: 'ss-l3-q19', question: "A smart thermostat's ability to turn on the heater is due to an:", difficulty: 'easy', answers: [{ id: 'a', text: 'Algorithm', isCorrect: false }, { id: 'b', text: 'Actuator', isCorrect: true }, { id: 'c', text: 'Sensor', isCorrect: false }, { id: 'd', text: 'Cloud', isCorrect: false }] },
    { id: 'ss-l3-q20', question: "Which is a benefit of 'Layered Architecture'?", difficulty: 'easy', answers: [{ id: 'a', text: 'It makes the system slower', isCorrect: false }, { id: 'b', text: 'It allows parts to be updated independently (Modularity)', isCorrect: true }, { id: 'c', text: 'It removes the need for sensors', isCorrect: false }, { id: 'd', text: 'It requires more batteries', isCorrect: false }] },
  ],

  written: [
    { id: 'ss-l3-w1', question: "Discuss the role and components of each of the four layers in a smart system architecture.", modelAnswer: "Perception (Sensors — physical to digital), Communication (Networks — Wi-Fi/5G/LoRaWAN), Intelligence (AI — ANN/Fuzzy/GA), Application (UI — dashboards/alerts)." },
    { id: 'ss-l3-w2', question: "What is the difference between a Sensor and an Actuator? Provide examples of each type.", modelAnswer: "Sensor: physical to digital (Thermometer, GPS, Camera). Actuator: digital to action (Motor, Valve, LED). Sensors gather information; actuators perform corrective action." },
    { id: 'ss-l3-w3', question: "Describe how a Smart HVAC system utilizes all four layers.", modelAnswer: "Perception (temp sensor), Communication (wireless to controller), Intelligence (compare to setpoint), Application (app alerts/control, actuator adjusts fan/valve)." },
    { id: 'ss-l3-w4', question: "Explain Noise, Uncertainty, and Calibration and why they matter in smart systems.", modelAnswer: "Noise: random variations (electrical interference). Uncertainty: systematic deviation. Calibration: adjusting to match reference. All affect accuracy of decisions." },
    { id: 'ss-l3-w5', question: "Explain the concept of 'Modularity' and provide 3 benefits it provides to smart systems.", modelAnswer: "Definition: independent components. Benefits: simplified design, easier maintenance, scalability, and reusability. You can replace Wi-Fi with 5G without changing sensors." },
    { id: 'ss-l3-w6', question: "Compare Edge-Fog-Cloud architecture with the standard layered model.", modelAnswer: "Edge: local processing (low latency). Fog: intermediate (data filtering). Cloud: deep analytics (big data). Layered model organizes by function (perception/comm/intelligence/app)." },
  ],
}
