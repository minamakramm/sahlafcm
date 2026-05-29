export const LECTURE = {
  subjectId: 'computer-networks',
  number: 3,
  title: 'Network Physical Layer',
  titleAr: 'الطبقة المادية للشبكة (Physical Layer)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Roles of the Physical Layer</h2>
<p>The Physical layer coordinates the functions required to carry a bit stream over a physical medium. It deals with the mechanical and electrical specifications of the interface and transmission medium. Its main concerns include representing bits as signals (electrical or optical), data rate, bit synchronization, and defining the physical topology and transmission mode.</p>

<h2>Data Flow and Transmission Modes</h2>
<ul>
  <li><strong>Simplex:</strong> Data flows in only one direction all the time (e.g., Mainframe to Monitor).</li>
  <li><strong>Half-Duplex:</strong> Data flows in both directions, but not at the same time.</li>
  <li><strong>Full-Duplex:</strong> Data flows in both directions simultaneously.</li>
</ul>

<h2>Physical Topologies</h2>
<ul>
  <li><strong>Mesh Topology:</strong> Every device has a dedicated point-to-point link to every other device. Requires <code>n(n-1)/2</code> links (<code>O(n²)</code> space complexity). Highly robust and secure, but expensive and complex to install.</li>
  <li><strong>Star Topology:</strong> Each device has a dedicated link to a central controller (hub or switch). Requires <code>O(n)</code> links. Easier to install and less expensive, but has a single point of failure.</li>
  <li><strong>Bus Topology:</strong> A multipoint connection where one long backbone cable links all devices. Requires <code>O(1)</code> links. Easy to install but less robust; a break in the cable stops all transmission.</li>
  <li><strong>Ring Topology:</strong> Each device has a dedicated connection with exactly two neighbors. Requires <code>O(1)</code> links. Traffic is usually unidirectional.</li>
</ul>

<h2>Decibels and Signal Loss</h2>
<p>The Decibel (dB) is a relative unit used to measure power gain or loss. <br><code>PdB = 10 * Log10(P2/P1)</code>. <br>When calculating total signal strength across multiple components, decibel values are <strong>added</strong> or subtracted (Output dBW = Input dBW + Gain dB - Loss dB), whereas absolute values (Watts) are multiplied.</p>

<h2>Network Performance Metrics</h2>
<ol>
  <li><strong>Bandwidth:</strong> Measured in Hertz (range of frequencies) or Bits per second (bps).</li>
  <li><strong>Throughput:</strong> The actual measurement of how fast data can be sent through a network. Throughput is always less than or equal to the theoretical bandwidth.</li>
  <li><strong>Latency (Delay):</strong> The total time for a message to arrive. <br><code>Latency = Propagation time + Transmission time + Queuing time + Processing delay</code>.
    <ul>
      <li><code>Propagation Time = Distance / Propagation Speed</code></li>
      <li><code>Transmission Time = Message Size / Channel Bandwidth</code></li>
    </ul>
  </li>
  <li><strong>Bandwidth-Delay Product:</strong> Represents the "volume of the pipe" (number of bits that can fill the link at any given time).</li>
  <li><strong>Jitter:</strong> The variation in delay for transferred messages, which is problematic for time-sensitive applications like VoIP.</li>
</ol>

<h2>Shannon Capacity Formula</h2>
<p>For a noisy channel, the theoretical maximum data rate is determined by the Shannon capacity: <br><code>Capacity = Bandwidth * log2(1 + SNR)</code> <br>Where SNR is the Signal-to-Noise Ratio.</p>`,
        bodyAr: `<h2>أدوار الطبقة المادية (Physical Layer)</h2>
<p>تنسق الطبقة المادية الوظائف المطلوبة لنقل تدفق البتات (bit stream) عبر وسيط مادي. تتعامل مع المواصفات الميكانيكية والكهربائية للواجهة ووسيط النقل. تشمل اهتماماتها الرئيسية تمثيل البتات كإشارات (كهربائية أو بصرية)، ومعدل البيانات، ومزامنة البتات، وتحديد الهيكل المادي (Topology) ووضع النقل.</p>

<h2>تدفق البيانات وأوضاع النقل</h2>
<ul>
  <li><strong>أحادي الاتجاه (Simplex):</strong> تتدفق البيانات في اتجاه واحد فقط طوال الوقت (مثل نقل البيانات من كمبيوتر مركزي إلى شاشة).</li>
  <li><strong>نصف مزدوج (Half-Duplex):</strong> تتدفق البيانات في كلا الاتجاهين، ولكن ليس في نفس الوقت.</li>
  <li><strong>مزدوج كامل (Full-Duplex):</strong> تتدفق البيانات في كلا الاتجاهين في وقت واحد.</li>
</ul>

<h2>الهياكل المادية (Physical Topologies)</h2>
<ul>
  <li><strong>هيكل الشبكة المتداخلة (Mesh Topology):</strong> يحتوي كل جهاز على رابط مخصص من نقطة إلى نقطة لكل جهاز آخر. يتطلب <code>n(n-1)/2</code> من الروابط (تعقيد مساحة <code>O(n²)</code>). قوي وآمن للغاية، ولكنه مكلف ومعقد في التثبيت.</li>
  <li><strong>الهيكل النجمي (Star Topology):</strong> يحتوي كل جهاز على رابط مخصص بوحدة تحكم مركزية (Hub أو Switch). يتطلب روابط <code>O(n)</code>. أسهل في التثبيت وأقل تكلفة، لكنه يحتوي على نقطة فشل واحدة.</li>
  <li><strong>هيكل الناقل (Bus Topology):</strong> اتصال متعدد النقاط حيث يعمل كابل رئيسي طويل كعمود فقري لربط جميع الأجهزة. يتطلب روابط <code>O(1)</code>. سهل التثبيت ولكنه أقل قوة؛ أي قطع في الكابل يوقف جميع عمليات النقل.</li>
  <li><strong>الهيكل الحلقي (Ring Topology):</strong> يحتوي كل جهاز على اتصال مخصص مع جارين اثنين فقط. يتطلب روابط <code>O(1)</code>. عادة ما تكون حركة المرور أحادية الاتجاه.</li>
</ul>

<h2>الديسيبل وفقدان الإشارة</h2>
<p>الديسيبل (dB) هو وحدة نسبية تستخدم لقياس كسب أو فقدان الطاقة. <br><code>PdB = 10 * Log10(P2/P1)</code>. <br>عند حساب قوة الإشارة الإجمالية عبر مكونات متعددة، يتم <strong>جمع</strong> أو طرح قيم الديسيبل (الإخراج dBW = الإدخال dBW + الكسب dB - الفقد dB)، بينما يتم ضرب القيم المطلقة (بالواط).</p>

<h2>مقاييس أداء الشبكة</h2>
<ol>
  <li><strong>عرض النطاق الترددي (Bandwidth):</strong> يُقاس بالهرتز (نطاق الترددات) أو بالبت في الثانية (bps).</li>
  <li><strong>الإنتاجية (Throughput):</strong> القياس الفعلي لمدى سرعة إرسال البيانات عبر الشبكة. الإنتاجية دائمًا أقل من أو تساوي النطاق الترددي النظري.</li>
  <li><strong>وقت الاستجابة (التأخير - Latency):</strong> الوقت الإجمالي لوصول الرسالة. <br><code>الكمون = وقت الانتشار + وقت الإرسال + وقت الانتظار + تأخير المعالجة</code>.
    <ul>
      <li><code>وقت الانتشار (Propagation) = المسافة / سرعة الانتشار</code></li>
      <li><code>وقت الإرسال (Transmission) = حجم الرسالة / النطاق الترددي للقناة</code></li>
    </ul>
  </li>
  <li><strong>منتج عرض النطاق الترددي والتأخير (Bandwidth-Delay Product):</strong> يمثل "حجم الأنبوب" (عدد البتات التي يمكن أن تملأ الرابط في أي وقت).</li>
  <li><strong>التقطع (Jitter):</strong> التباين في وقت التأخير للرسائل المنقولة، وهو يمثل مشكلة للتطبيقات الحساسة للوقت مثل VoIP.</li>
</ol>

<h2>معادلة سعة شانون (Shannon Capacity)</h2>
<p>بالنسبة لقناة بها ضوضاء، يتم تحديد الحد الأقصى النظري لمعدل البيانات من خلال سعة شانون: <br><code>السعة = النطاق الترددي * log2(1 + SNR)</code> <br>حيث SNR هي نسبة الإشارة إلى الضوضاء.</p>`
      }
    }
  ],

  summary: {
    points: [
      "The Physical Layer coordinates carrying bit streams over physical media, defining electrical/mechanical specs.",
      "Transmission modes include Simplex (one-way), Half-duplex (two-way alternating), and Full-duplex (two-way simultaneous).",
      "Mesh topologies are highly robust but require O(n²) links. Star topologies are common but have a single point of failure.",
      "Bus and Ring topologies require only O(1) links but are generally less robust than Mesh.",
      "Decibels (dB) are used to measure power gain/loss, and dB values are added when calculated across multiple components.",
      "Bandwidth is theoretical capacity (in bps or Hz), while Throughput is the actual achieved data rate.",
      "Latency includes propagation, transmission, queuing, and processing times.",
      "The Shannon Capacity formula computes the theoretical max data rate for a noisy channel using Bandwidth and SNR."
    ],
    pointsAr: [
      "تنسق الطبقة المادية نقل تدفقات البتات عبر الوسائط المادية، وتحدد المواصفات الكهربائية والميكانيكية.",
      "تشمل أوضاع النقل أحادي الاتجاه، ونصف مزدوج (اتجاهين بالتناوب)، ومزدوج كامل (اتجاهين في وقت واحد).",
      "الهياكل المتداخلة (Mesh) قوية للغاية ولكنها تتطلب روابط O(n²). الهياكل النجمية شائعة ولكن بها نقطة فشل واحدة.",
      "تتطلب هياكل الناقل والحلقة روابط O(1) فقط ولكنها بشكل عام أقل قوة من الهياكل المتداخلة.",
      "يُستخدم الديسيبل (dB) لقياس كسب/فقدان الطاقة، ويتم جمع قيم dB عند حسابها عبر مكونات متعددة.",
      "عرض النطاق الترددي هو السعة النظرية (بـ bps أو Hz)، بينما الإنتاجية هي معدل البيانات الفعلي المحقق.",
      "يشمل وقت التأخير (Latency) أوقات الانتشار، الإرسال، الاصطفاف، والمعالجة.",
      "تحسب معادلة سعة شانون الحد الأقصى النظري لمعدل البيانات لقناة مشوشة باستخدام النطاق الترددي و SNR."
    ]
  },

  mcq: [
    {
      id: 'cn-l3-q1',
      question: "Which transmission mode allows data to flow in both directions, but not at the same time?",
      questionAr: "أي وضع نقل يسمح بتدفق البيانات في كلا الاتجاهين، ولكن ليس في نفس الوقت؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Simplex', isCorrect: false },
        { id: 'b', text: 'Half-duplex', isCorrect: true },
        { id: 'c', text: 'Full-duplex', isCorrect: false },
        { id: 'd', text: 'Multipoint', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q2',
      question: "[MID] In a fully connected Mesh topology with 10 devices, how many physical links are required?",
      questionAr: "[MID] في هيكل متداخل (Mesh) متصل بالكامل بـ 10 أجهزة، كم عدد الروابط المادية المطلوبة؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '10', isCorrect: false },
        { id: 'b', text: '45', isCorrect: true },
        { id: 'c', text: '90', isCorrect: false },
        { id: 'd', text: '100', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q3',
      question: "Which topology consists of a single long cable acting as a backbone to link all devices?",
      questionAr: "أي هيكل يتكون من كابل طويل واحد يعمل كعمود فقري لربط جميع الأجهزة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Star Network', isCorrect: false },
        { id: 'b', text: 'Mesh Network', isCorrect: false },
        { id: 'c', text: 'Bus Network', isCorrect: true },
        { id: 'd', text: 'Ring Network', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q4',
      question: "According to the Shannon Capacity formula, what determines the theoretical highest data rate for a noisy channel?",
      questionAr: "وفقًا لمعادلة سعة شانون، ما الذي يحدد أعلى معدل بيانات نظري لقناة مشوشة (noisy channel)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Bandwidth and Signal-to-Noise Ratio (SNR)', isCorrect: true },
        { id: 'b', text: 'Propagation speed and Distance', isCorrect: false },
        { id: 'c', text: 'Transmission time and Queuing time', isCorrect: false },
        { id: 'd', text: 'The number of devices on the network', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q5',
      question: "[MID] How is Transmission Time calculated?",
      questionAr: "[MID] كيف يتم حساب وقت الإرسال (Transmission Time)؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Distance / Propagation Speed', isCorrect: false },
        { id: 'b', text: 'Message Size / Channel Bandwidth', isCorrect: true },
        { id: 'c', text: 'Bandwidth * Propagation Time', isCorrect: false },
        { id: 'd', text: 'Throughput / Message Size', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q6',
      question: "What does the 'Bandwidth-Delay Product' represent?",
      questionAr: "ماذا يمثل 'منتج عرض النطاق الترددي والتأخير' (Bandwidth-Delay Product)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The total time a packet takes to reach the destination', isCorrect: false },
        { id: 'b', text: 'The difference between theoretical bandwidth and actual throughput', isCorrect: false },
        { id: 'c', text: 'The number of bits that can fill the link at any given time (the volume of the pipe)', isCorrect: true },
        { id: 'd', text: 'The maximum frequency of the signal', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q7',
      question: "When calculating power gain or loss across multiple components in a system using Decibels (dB), how are the values combined?",
      questionAr: "عند حساب كسب أو فقدان الطاقة عبر مكونات متعددة في نظام باستخدام الديسيبل (dB)، كيف يتم دمج القيم؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'They are multiplied together', isCorrect: false },
        { id: 'b', text: 'They are divided', isCorrect: false },
        { id: 'c', text: 'They are added or subtracted', isCorrect: true },
        { id: 'd', text: 'They are raised to the power of 10', isCorrect: false }
      ]
    },
    {
      id: 'cn-l3-q8',
      question: "What is Jitter in a computer network?",
      questionAr: "ما هو التقطع (Jitter) في شبكة الكمبيوتر؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The maximum throughput of a connection', isCorrect: false },
        { id: 'b', text: 'The time required for a bit to travel from source to destination', isCorrect: false },
        { id: 'c', text: 'The variation in delay for transferred messages through the same channel', isCorrect: true },
        { id: 'd', text: 'A completely broken physical link', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l3-w1',
      question: "Compare the advantages and disadvantages of Mesh and Star physical topologies.",
      questionAr: "قارن بين مزايا وعيوب هياكل الشبكة المتداخلة (Mesh) والنجمية (Star).",
      modelAnswer: "A Mesh topology provides dedicated point-to-point links between all devices, making it highly robust, secure, and easy to isolate faults. However, it requires O(n²) links, making it very expensive and complex to install. A Star topology uses dedicated links to a central controller, requiring only O(n) links. It is less expensive and easier to install, but suffers from a single point of failure (if the central controller fails, the whole network fails).",
      modelAnswerAr: "يوفر هيكل Mesh روابط مخصصة من نقطة إلى نقطة بين جميع الأجهزة، مما يجعله قويًا وآمنًا للغاية ويسهل عزل الأخطاء فيه. ومع ذلك، فإنه يتطلب روابط O(n²)، مما يجعله مكلفًا ومعقدًا جدًا في التثبيت. بينما يستخدم الهيكل النجمي (Star) روابط مخصصة بوحدة تحكم مركزية، ويتطلب فقط روابط O(n). إنه أقل تكلفة وأسهل في التثبيت، ولكنه يعاني من نقطة فشل واحدة (إذا فشلت وحدة التحكم المركزية، تفشل الشبكة بأكملها)."
    },
    {
      id: 'cn-l3-w2',
      question: "Differentiate between Bandwidth and Throughput in a computer network.",
      questionAr: "فرّق بين عرض النطاق الترددي (Bandwidth) والإنتاجية (Throughput) في شبكة الكمبيوتر.",
      modelAnswer: "Bandwidth (in bps) is the theoretical maximum capacity of a link or channel to transmit data. Throughput is the actual, practical measurement of how fast data is successfully sent through the network. Throughput is always less than or equal to bandwidth due to overhead, network congestion, and other practical limitations.",
      modelAnswerAr: "عرض النطاق الترددي (بالبت في الثانية) هو السعة القصوى النظرية لرابط أو قناة لنقل البيانات. بينما الإنتاجية هي القياس العملي والفعلي لمدى سرعة إرسال البيانات بنجاح عبر الشبكة. الإنتاجية دائمًا أقل من أو تساوي عرض النطاق الترددي بسبب أعباء البروتوكولات والازدحام في الشبكة والقيود العملية الأخرى."
    },
    {
      id: 'cn-l3-w3',
      question: "Explain the difference between Propagation Time and Transmission Time.",
      questionAr: "اشرح الفرق بين وقت الانتشار (Propagation Time) ووقت الإرسال (Transmission Time).",
      modelAnswer: "Propagation Time measures the time it takes for a single bit to travel the physical distance from the source to the destination (calculated as Distance / Propagation Speed). Transmission Time measures the time it takes to push the entire message onto the channel (calculated as Message Size / Channel Bandwidth). For very long links with small messages, propagation dominates; for large messages on slow links, transmission time dominates.",
      modelAnswerAr: "وقت الانتشار يقيس الوقت الذي تستغرقه بتة واحدة لقطع المسافة المادية من المصدر إلى الوجهة (يُحسب كـ: المسافة / سرعة الانتشار). بينما وقت الإرسال يقيس الوقت الذي يستغرقه دفع الرسالة بأكملها إلى القناة (يُحسب كـ: حجم الرسالة / النطاق الترددي للقناة). في الروابط الطويلة جدًا مع الرسائل الصغيرة، يهيمن وقت الانتشار؛ أما بالنسبة للرسائل الكبيرة على الروابط البطيئة، فإن وقت الإرسال هو المهيمن."
    }
  ]
};
