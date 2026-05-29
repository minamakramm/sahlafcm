export const LECTURE = {
  subjectId: 'computer-networks',
  number: 1,
  title: 'Introduction to Data Communication and Networks',
  titleAr: 'مقدمة في اتصالات البيانات والشبكات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Course Overview</h2>
<p>The course covers four major concepts: data and computer communications, networking, protocols and standards, and networking models.</p>
<div class="callout callout-info">Assessment: Labs/Assignments/Quizzes (35%), Midterm exam (25%), Final exam (40%).</div>
<h2>Data Communications and Networks</h2>
<p><strong>Data Communications:</strong> deals with the transmission of signals in a reliable and effective manner.</p>
<p><strong>Networking:</strong> deals with the technology and architecture of the communication networks used to interconnect communicating devices.</p>
<h2>A Communications Model</h2>
<ul>
<li><strong>Source:</strong> Generates data to be transmitted</li>
<li><strong>Transmitter:</strong> Converts data into transmittable electromagnetic signals</li>
<li><strong>Transmission system:</strong> Single transmission line or a complex network</li>
<li><strong>Receiver:</strong> Converts received signal into data</li>
<li><strong>Destination:</strong> Takes incoming data</li>
</ul>
<h2>Network Types</h2>
<ul>
<li><strong>LAN (Local Area Network):</strong> Smaller scope, usually broadcast systems, high data rates.</li>
<li><strong>WAN (Wide Area Network):</strong> Large geographical area, alternative technologies include Circuit switching, Packet switching, and Frame relay.</li>
<li><strong>MAN (Metropolitan Area Network):</strong> Middle ground between LAN and WAN.</li>
</ul>
<h2>Switching Techniques</h2>
<p><strong>Circuit Switching:</strong> Dedicated communications path, rapid data transmission without delay, good for real-time services.</p>
<p><strong>Packet Switching:</strong> Data sent out of sequence in small chunks. Packets are received, stored briefly, and transmitted to the next node.</p>
<div class="callout callout-warning">Packet switching has two kinds: Virtual circuit and datagram.</div>
<h2>Network Criteria</h2>
<p>A network must meet: <strong>Performance</strong> (response time, throughput), <strong>Reliability</strong> (accuracy, failure frequency), and <strong>Security</strong> (Confidentiality, Integrity, Availability).</p>
<h2>Protocols & Standards</h2>
<p>A protocol is a set of rules that govern data communications. The key elements are:</p>
<ol>
<li><strong>Syntax:</strong> structure or format of the data</li>
<li><strong>Semantics:</strong> meaning of each section of data</li>
<li><strong>Timing:</strong> when data should be sent and how fast</li>
</ol>
<p>Standards provide guidelines for interoperability between equipment from various vendors.</p>`,
        bodyAr: `<h2>نظرة عامة على المقرر</h2>
<p>يغطي المقرر أربعة مفاهيم رئيسية: اتصالات البيانات والحواسيب، الشبكات، البروتوكولات والمعايير، ونماذج الشبكات.</p>
<div class="callout callout-info">التقييم: المعامل/الواجبات/الاختبارات القصيرة (35٪)، امتحان منتصف الفصل (25٪)، الامتحان النهائي (40٪).</div>
<h2>اتصالات البيانات والشبكات</h2>
<p><strong>اتصالات البيانات:</strong> تتعامل مع نقل الإشارات بطريقة موثوقة وفعالة.</p>
<p><strong>الشبكات:</strong> تتعامل مع تقنية وهندسة شبكات الاتصال المستخدمة لربط الأجهزة المتصلة.</p>
<h2>نموذج الاتصالات</h2>
<ul>
<li><strong>المصدر (Source):</strong> يولد البيانات المراد إرسالها</li>
<li><strong>المرسل (Transmitter):</strong> يحول البيانات إلى إشارات كهرومغناطيسية قابلة للإرسال</li>
<li><strong>نظام الإرسال (Transmission system):</strong> خط إرسال واحد أو شبكة معقدة</li>
<li><strong>المستقبل (Receiver):</strong> يحول الإشارة المستقبلة إلى بيانات</li>
<li><strong>الوجهة (Destination):</strong> تستقبل البيانات الواردة</li>
</ul>
<h2>أنواع الشبكات</h2>
<ul>
<li><strong>الشبكة المحلية (LAN):</strong> نطاق أصغر، وعادة ما تكون أنظمة بث، ومعدلات بيانات عالية.</li>
<li><strong>الشبكة الواسعة (WAN):</strong> مساحة جغرافية كبيرة، وتشمل التقنيات البديلة تبديل الدوائر وتبديل الحزم وترحيل الإطارات.</li>
<li><strong>شبكة العاصمة (MAN):</strong> حل وسط بين الشبكة المحلية والشبكة الواسعة.</li>
</ul>
<h2>تقنيات التبديل</h2>
<p><strong>تبديل الدوائر (Circuit Switching):</strong> مسار اتصالات مخصص، نقل بيانات سريع بدون تأخير، جيد لخدمات الوقت الفعلي.</p>
<p><strong>تبديل الحزم (Packet Switching):</strong> يتم إرسال البيانات خارج التسلسل في أجزاء صغيرة. يتم استقبال الحزم وتخزينها لفترة وجيزة ثم نقلها إلى العقدة التالية.</p>
<div class="callout callout-warning">تبديل الحزم له نوعان: الدائرة الافتراضية ومخطط البيانات (Datagram).</div>
<h2>معايير الشبكة</h2>
<p>يجب أن تلبي الشبكة: <strong>الأداء</strong> (وقت الاستجابة، الإنتاجية)، <strong>الموثوقية</strong> (الدقة، وتيرة الفشل)، و <strong>الأمان</strong> (السرية، النزاهة، التوافر).</p>
<h2>البروتوكولات والمعايير</h2>
<p>البروتوكول عبارة عن مجموعة من القواعد التي تحكم اتصالات البيانات. العناصر الرئيسية هي:</p>
<ol>
<li><strong>البنية (Syntax):</strong> هيكل أو تنسيق البيانات</li>
<li><strong>الدلالات (Semantics):</strong> معنى كل قسم من البيانات</li>
<li><strong>التوقيت (Timing):</strong> متى يجب إرسال البيانات وبأي سرعة</li>
</ol>
<p>توفر المعايير إرشادات للتشغيل البيني بين المعدات من مختلف البائعين.</p>`
      }
    }
  ],

  summary: {
    points: [
      "A communications model consists of a Source, Transmitter, Transmission System, Receiver, and Destination.",
      "Networks are classified by scope into LAN (local), MAN (metropolitan), and WAN (wide area).",
      "Switching techniques include Circuit Switching (dedicated path) and Packet Switching (data sent in chunks).",
      "A network must meet performance, reliability, and security criteria.",
      "Protocols govern data communication and consist of syntax, semantics, and timing."
    ],
    pointsAr: [
      "يتكون نموذج الاتصالات من مصدر، ومرسل، ونظام إرسال، ومستقبل، ووجهة.",
      "تُصنف الشبكات حسب النطاق إلى محلية (LAN)، وإقليمية (MAN)، وواسعة (WAN).",
      "تشمل تقنيات التبديل تبديل الدوائر (مسار مخصص) وتبديل الحزم (بيانات تُرسل في أجزاء).",
      "يجب أن تستوفي الشبكة معايير الأداء والموثوقية والأمان.",
      "تحكم البروتوكولات اتصال البيانات وتتكون من البنية والدلالات والتوقيت."
    ]
  },

  mcq: [
    {
      id: 'cn-l1-q1',
      question: "Which of the following is NOT a component of the simplified communications model?",
      questionAr: "أي مما يلي ليس من مكونات نموذج الاتصالات المبسط؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Source', isCorrect: false },
        { id: 'b', text: 'Transmitter', isCorrect: false },
        { id: 'c', text: 'Router', isCorrect: true },
        { id: 'd', text: 'Destination', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q2',
      question: "Which network switching technique provides a dedicated communications path established for the duration of the conversation?",
      questionAr: "أي تقنية تبديل شبكة توفر مسار اتصالات مخصصًا يتم إنشاؤه طوال مدة المحادثة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Packet Switching', isCorrect: false },
        { id: 'b', text: 'Circuit Switching', isCorrect: true },
        { id: 'c', text: 'Frame Relay', isCorrect: false },
        { id: 'd', text: 'ATM', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q3',
      question: "[MID] What are the three key elements of a protocol?",
      questionAr: "[MID] ما هي العناصر الرئيسية الثلاثة للبروتوكول؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Syntax, Semantics, Timing', isCorrect: true },
        { id: 'b', text: 'Performance, Reliability, Security', isCorrect: false },
        { id: 'c', text: 'Source, Destination, Transmission', isCorrect: false },
        { id: 'd', text: 'Confidentiality, Integrity, Availability', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q4',
      question: "Which type of network covers a middle ground between LAN and WAN?",
      questionAr: "أي نوع من الشبكات يغطي حلاً وسطاً بين الشبكة المحلية (LAN) والشبكة الواسعة (WAN)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'PAN', isCorrect: false },
        { id: 'b', text: 'MAN', isCorrect: true },
        { id: 'c', text: 'WLAN', isCorrect: false },
        { id: 'd', text: 'ATM', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q5',
      question: "[MID] Which network criterion involves protecting data from unauthorized access and damage?",
      questionAr: "[MID] ما هو معيار الشبكة الذي يتضمن حماية البيانات من الوصول غير المصرح به والضرر؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Performance', isCorrect: false },
        { id: 'b', text: 'Reliability', isCorrect: false },
        { id: 'c', text: 'Security', isCorrect: true },
        { id: 'd', text: 'Throughput', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q6',
      question: "In Packet Switching, how is data transmitted?",
      questionAr: "في تبديل الحزم (Packet Switching)، كيف يتم إرسال البيانات؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Over a dedicated, unbroken path', isCorrect: false },
        { id: 'b', text: 'Out of sequence, in small chunks', isCorrect: true },
        { id: 'c', text: 'Only via wireless media', isCorrect: false },
        { id: 'd', text: 'Continuously without any delay', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q7',
      question: "What does the 'Syntax' element of a protocol define?",
      questionAr: "ما الذي يحدده عنصر 'البنية' (Syntax) في البروتوكول؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'When data should be sent', isCorrect: false },
        { id: 'b', text: 'Meaning of each section of data', isCorrect: false },
        { id: 'c', text: 'Structure or format of the data', isCorrect: true },
        { id: 'd', text: 'How fast data can be sent', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q8',
      question: "Which type of connection involves more than two specific devices sharing a single link?",
      questionAr: "أي نوع من الاتصال يتضمن أكثر من جهازين محددين يتشاركان ارتباطًا واحدًا؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Point-to-point', isCorrect: false },
        { id: 'b', text: 'Multipoint', isCorrect: true },
        { id: 'c', text: 'Circuit switched', isCorrect: false },
        { id: 'd', text: 'Virtual circuit', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q9',
      question: "What is a disadvantage of network standards?",
      questionAr: "ما هو أحد عيوب معايير الشبكة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Ensures a large market for equipment', isCorrect: false },
        { id: 'b', text: 'Allows products from different vendors to communicate', isCorrect: false },
        { id: 'c', text: 'May freeze technology and limit evolution', isCorrect: true },
        { id: 'd', text: 'Guarantees mass production', isCorrect: false }
      ]
    },
    {
      id: 'cn-l1-q10',
      question: "Which technology is considered an evolution of frame relay with fixed packet (cell) length?",
      questionAr: "ما التقنية التي تعتبر تطوراً لترحيل الإطارات (frame relay) بطول حزمة (خلية) ثابت؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Circuit Switching', isCorrect: false },
        { id: 'b', text: 'Ethernet', isCorrect: false },
        { id: 'c', text: 'Asynchronous Transfer Mode (ATM)', isCorrect: true },
        { id: 'd', text: 'Packet Switching', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l1-w1',
      question: "Identify the main five components of a data communications system.",
      questionAr: "حدد المكونات الخمسة الرئيسية لنظام اتصالات البيانات.",
      modelAnswer: "The five main components are the Source, Transmitter, Transmission System, Receiver, and Destination.",
      modelAnswerAr: "المكونات الخمسة الرئيسية هي المصدر، والمرسل، ونظام الإرسال، والمستقبل، والوجهة."
    },
    {
      id: 'cn-l1-w2',
      question: "Highlight the main differences between Circuit Switching and Packet Switching.",
      questionAr: "سلط الضوء على الاختلافات الرئيسية بين تبديل الدوائر (Circuit Switching) وتبديل الحزم (Packet Switching).",
      modelAnswer: "Circuit switching establishes a dedicated communications path, providing rapid, delay-free transmission suitable for real-time services. Packet switching sends data in small chunks (packets) out of sequence, which are briefly stored and forwarded at each node, making it suitable for computer-to-computer communications.",
      modelAnswerAr: "ينشئ تبديل الدوائر مسار اتصالات مخصصًا، مما يوفر نقلًا سريعًا وبدون تأخير ومناسبًا لخدمات الوقت الفعلي. بينما يرسل تبديل الحزم البيانات في أجزاء صغيرة (حزم) خارج التسلسل، والتي يتم تخزينها وتوجيهها لفترة وجيزة في كل عقدة، مما يجعلها مناسبة لاتصالات الكمبيوتر."
    },
    {
      id: 'cn-l1-w3',
      question: "Define what a protocol is and list its three key elements.",
      questionAr: "عَرِّف البروتوكول واذكر عناصره الرئيسية الثلاثة.",
      modelAnswer: "A protocol is a set of rules governing data communications. Its three key elements are Syntax (data structure/format), Semantics (meaning of data sections), and Timing (when and how fast to send data).",
      modelAnswerAr: "البروتوكول هو مجموعة من القواعد التي تحكم اتصالات البيانات. عناصره الرئيسية الثلاثة هي البنية (هيكل أو تنسيق البيانات)، والدلالات (معنى أقسام البيانات)، والتوقيت (متى وبأي سرعة يتم إرسال البيانات)."
    }
  ]
};
