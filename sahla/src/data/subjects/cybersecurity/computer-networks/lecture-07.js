export const LECTURE = {
  subjectId: 'computer-networks',
  number: 7,
  title: 'Network Layer 1',
  titleAr: 'طبقة الشبكة 1',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Introduction to the Network Layer</h2>
<p>The network layer (Layer 3) is responsible for moving datagrams from the sending host to the receiving host across multiple networks. At the sending side, it encapsulates transport layer segments into datagrams (IP packets). At the receiving side, it removes the IP header and passes the segment upward to the transport layer.</p>

<h2>Two Key Network-Layer Functions</h2>
<ul>
  <li><strong>Forwarding:</strong> The process of moving packets from a router's input port to the appropriate output port based on a local forwarding table (like taking the correct exit at an interchange). This happens extremely fast locally at each router.</li>
  <li><strong>Routing:</strong> The process of determining the end-to-end path a packet should take from source to destination using routing algorithms (like planning a trip route before driving).</li>
</ul>

<h2>Network Service Models</h2>
<p>A service model defines what the network guarantees when it carries datagrams. Different network architectures offer different models:</p>
<ul>
  <li><strong>Internet (Datagram Network):</strong> Uses a <strong>"best-effort"</strong> service model. It provides NO guarantees on bandwidth, loss, order, or timing. End systems are "smart" and handle errors and congestion.</li>
  <li><strong>ATM (Virtual-Circuit Network):</strong> Evolved from telephony to support real-time traffic. Provides strict guarantees using models like <strong>CBR (Constant Bit Rate)</strong> and <strong>VBR (Variable Bit Rate)</strong>. The end systems are "dumb" and the network core handles complexity.</li>
</ul>

<h2>Datagram Networks vs Virtual Circuit (VC) Networks</h2>
<div class="callout callout-info">
  <strong>Datagram Networks:</strong> Provide connectionless service. No call setup is required. Routers do not maintain state about connections. Packets are forwarded using the destination host address. Packets between the same source and destination may take different paths.
</div>
<div class="callout callout-warning">
  <strong>Virtual Circuit Networks:</strong> Provide connection-oriented service. Requires a call setup phase before data flows. Packets carry a VC identifier instead of a destination address. Routers maintain connection state and resources (bandwidth, buffers) are dedicated.
</div>

<h2>Forwarding in Datagram Networks</h2>
<p>In IPv4 datagram networks, routers use a forwarding table that maps ranges of 32-bit destination IP addresses to specific outgoing link interfaces. The router forwards the packet to the interface associated with the matching range.</p>`,
        bodyAr: `<h2>مقدمة في طبقة الشبكة</h2>
<p>طبقة الشبكة (الطبقة 3) مسؤولة عن نقل مخططات البيانات (datagrams) من المضيف المرسل إلى المضيف المستقبل عبر شبكات متعددة. في جانب الإرسال، تقوم بتغليف مقاطع طبقة النقل إلى مخططات بيانات (حزم IP). في جانب الاستقبال، تزيل رأس IP وتمرر المقطع لأعلى إلى طبقة النقل.</p>

<h2>وظيفتان رئيسيتان لطبقة الشبكة</h2>
<ul>
  <li><strong>إعادة التوجيه (Forwarding):</strong> عملية نقل الحزم من منفذ الإدخال للموجه إلى منفذ الإخراج المناسب بناءً على جدول توجيه محلي. يحدث هذا بسرعة كبيرة محليًا في كل موجه.</li>
  <li><strong>التوجيه (Routing):</strong> عملية تحديد المسار من البداية إلى النهاية الذي يجب أن تسلكه الحزمة من المصدر إلى الوجهة باستخدام خوارزميات التوجيه.</li>
</ul>

<h2>نماذج خدمة الشبكة</h2>
<p>يحدد نموذج الخدمة الضمانات التي تقدمها الشبكة عند نقل مخططات البيانات:</p>
<ul>
  <li><strong>الإنترنت (شبكة مخططات البيانات):</strong> تستخدم نموذج خدمة <strong>"أفضل جهد" (best-effort)</strong>. لا توفر أي ضمانات بشأن النطاق الترددي أو الفقد أو الترتيب أو التوقيت. الأنظمة الطرفية "ذكية" وتتعامل مع الأخطاء والازدحام.</li>
  <li><strong>ATM (الدوائر الافتراضية):</strong> تطورت من الاتصالات الهاتفية لدعم حركة المرور في الوقت الفعلي. توفر ضمانات صارمة باستخدام نماذج مثل <strong>CBR (معدل بت ثابت)</strong> و <strong>VBR (معدل بت متغير)</strong>. الأنظمة الطرفية "غبية" ونواة الشبكة تتعامل مع التعقيد.</li>
</ul>

<h2>شبكات مخططات البيانات مقابل شبكات الدوائر الافتراضية (VC)</h2>
<div class="callout callout-info">
  <strong>شبكات مخططات البيانات (Datagram Networks):</strong> توفر خدمة غير متصلة (connectionless). لا يلزم إعداد مكالمة. لا تحتفظ الموجهات بحالة حول الاتصالات. يتم إعادة توجيه الحزم باستخدام عنوان المضيف الوجهة. قد تسلك الحزم مسارات مختلفة.
</div>
<div class="callout callout-warning">
  <strong>شبكات الدوائر الافتراضية (VC):</strong> توفر خدمة موجهة نحو الاتصال. تتطلب مرحلة إعداد مكالمة قبل تدفق البيانات. تحمل الحزم معرّف VC بدلاً من عنوان الوجهة. تحتفظ الموجهات بحالة الاتصال ويتم تخصيص الموارد.
</div>

<h2>إعادة التوجيه في شبكات مخططات البيانات</h2>
<p>في شبكات مخططات البيانات IPv4، تستخدم الموجهات جدول إعادة توجيه يعين نطاقات من عناوين IP للوجهة (32 بت) إلى واجهات ارتباط صادرة محددة.</p>`
      }
    }
  ],

  summary: {
    points: [
      "The network layer encapsulates transport segments into datagrams.",
      "Routing determines the end-to-end path; forwarding moves packets to the correct output port at each router.",
      "The Internet uses a 'best-effort' connectionless datagram service model.",
      "ATM networks use connection-oriented Virtual Circuits (VC) providing guaranteed services like CBR and VBR.",
      "Datagram networks do not maintain connection state in routers and route based on destination IP address.",
      "Virtual Circuit networks require call setup and route based on VC identifiers."
    ],
    pointsAr: [
      "تغلف طبقة الشبكة مقاطع طبقة النقل في مخططات بيانات.",
      "يحدد التوجيه (Routing) المسار الكامل، بينما تنقل إعادة التوجيه (Forwarding) الحزم إلى منفذ الإخراج الصحيح في كل موجه.",
      "يستخدم الإنترنت نموذج خدمة مخططات بيانات غير متصلة 'أفضل جهد' (best-effort).",
      "تستخدم شبكات ATM الدوائر الافتراضية (VC) الموجهة نحو الاتصال لتوفير خدمات مضمونة مثل CBR و VBR.",
      "لا تحتفظ شبكات مخططات البيانات بحالة الاتصال في الموجهات وتقوم بالتوجيه بناءً على عنوان IP للوجهة.",
      "تتطلب شبكات الدوائر الافتراضية إعداد مكالمة وتقوم بالتوجيه بناءً على معرفات VC."
    ]
  },

  mcq: [
    {
      id: 'cn-l7-q1',
      question: "Which of the following best describes the 'forwarding' function of a router?",
      questionAr: "أي مما يلي يصف بشكل أفضل وظيفة 'إعادة التوجيه' (forwarding) للموجه؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Determining the end-to-end path from source to destination', isCorrect: false },
        { id: 'b', text: 'Moving packets from the router\'s input port to the correct output port', isCorrect: true },
        { id: 'c', text: 'Encapsulating segments into datagrams', isCorrect: false },
        { id: 'd', text: 'Establishing a virtual circuit before sending data', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q2',
      question: "What service model is used by the Internet architecture at the network layer?",
      questionAr: "ما هو نموذج الخدمة المستخدم في بنية الإنترنت في طبقة الشبكة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Constant Bit Rate (CBR)', isCorrect: false },
        { id: 'b', text: 'Available Bit Rate (ABR)', isCorrect: false },
        { id: 'c', text: 'Best-effort service', isCorrect: true },
        { id: 'd', text: 'Guaranteed delivery with timing', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q3',
      question: "[MID] Which type of network requires a 'call setup' phase before data can flow?",
      questionAr: "[MID] أي نوع من الشبكات يتطلب مرحلة 'إعداد مكالمة' قبل أن تتمكن البيانات من التدفق؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Datagram Network', isCorrect: false },
        { id: 'b', text: 'Virtual Circuit (VC) Network', isCorrect: true },
        { id: 'c', text: 'Ethernet LAN', isCorrect: false },
        { id: 'd', text: 'Wireless 802.11 Network', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q4',
      question: "In a datagram network like the Internet, routers forward packets primarily based on:",
      questionAr: "في شبكة مخططات البيانات مثل الإنترنت، تعيد الموجهات توجيه الحزم بشكل أساسي بناءً على:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Virtual Circuit (VC) identifier', isCorrect: false },
        { id: 'b', text: 'Source MAC address', isCorrect: false },
        { id: 'c', text: 'Destination IP address', isCorrect: true },
        { id: 'd', text: 'Port number', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q5',
      question: "Which of the following provides constant bandwidth and strict timing guarantees?",
      questionAr: "أي مما يلي يوفر عرض نطاق ترددي ثابت وضمانات توقيت صارمة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Internet Best Effort', isCorrect: false },
        { id: 'b', text: 'ATM Unspecified Bit Rate (UBR)', isCorrect: false },
        { id: 'c', text: 'ATM Constant Bit Rate (CBR)', isCorrect: true },
        { id: 'd', text: 'ATM Available Bit Rate (ABR)', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q6',
      question: "[MID] Do routers in a datagram network maintain state information about end-to-end connections?",
      questionAr: "[MID] هل تحتفظ الموجهات في شبكة مخططات البيانات بمعلومات حالة حول الاتصالات من البداية إلى النهاية؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Yes, always', isCorrect: false },
        { id: 'b', text: 'No, they do not maintain connection state', isCorrect: true },
        { id: 'c', text: 'Yes, but only for the source router', isCorrect: false },
        { id: 'd', text: 'Only during call setup', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q7',
      question: "In Virtual Circuit networks, what does a packet carry to determine its path?",
      questionAr: "في شبكات الدوائر الافتراضية، ماذا تحمل الحزمة لتحديد مسارها؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Destination IP address', isCorrect: false },
        { id: 'b', text: 'VC Identifier', isCorrect: true },
        { id: 'c', text: 'MAC Address', isCorrect: false },
        { id: 'd', text: 'Port Number', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q8',
      question: "Where does the 'complexity' primarily reside in a datagram network (Internet)?",
      questionAr: "أين تكمن 'التعقيد' بشكل أساسي في شبكة مخططات البيانات (الإنترنت)؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'In the core routers', isCorrect: false },
        { id: 'b', text: 'At the "edge" in the smart end systems', isCorrect: true },
        { id: 'c', text: 'In the physical cables', isCorrect: false },
        { id: 'd', text: 'In the switch hardware', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q9',
      question: "What length is an IPv4 address?",
      questionAr: "ما هو طول عنوان IPv4؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '16 bits', isCorrect: false },
        { id: 'b', text: '32 bits', isCorrect: true },
        { id: 'c', text: '48 bits', isCorrect: false },
        { id: 'd', text: '128 bits', isCorrect: false }
      ]
    },
    {
      id: 'cn-l7-q10',
      question: "Which of the following is true regarding packets sent between the same source and destination in a Datagram Network?",
      questionAr: "أي مما يلي صحيح فيما يتعلق بالحزم المرسلة بين نفس المصدر والوجهة في شبكة مخططات البيانات؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'They must follow the exact same path', isCorrect: false },
        { id: 'b', text: 'They may take different paths', isCorrect: true },
        { id: 'c', text: 'They use a VC number', isCorrect: false },
        { id: 'd', text: 'They are guaranteed to arrive in order', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l7-w1',
      question: "Explain the difference between 'routing' and 'forwarding' in the network layer.",
      questionAr: "اشرح الفرق بين 'التوجيه' (routing) و 'إعادة التوجيه' (forwarding) في طبقة الشبكة.",
      modelAnswer: "Routing is the global process of determining the end-to-end path a packet should take from source to destination using routing algorithms. Forwarding is the local process inside a single router that moves a packet from an input port to the correct output port using a forwarding table.",
      modelAnswerAr: "التوجيه (Routing) هو العملية الشاملة لتحديد المسار من البداية إلى النهاية الذي يجب أن تسلكه الحزمة من المصدر إلى الوجهة باستخدام خوارزميات التوجيه. إعادة التوجيه (Forwarding) هي العملية المحلية داخل موجه واحد والتي تنقل الحزمة من منفذ الإدخال إلى منفذ الإخراج الصحيح باستخدام جدول إعادة التوجيه."
    },
    {
      id: 'cn-l7-w2',
      question: "Compare the Internet (Datagram) service model with the ATM (Virtual Circuit) service model.",
      questionAr: "قارن بين نموذج خدمة الإنترنت (مخططات البيانات) ونموذج خدمة ATM (الدائرة الافتراضية).",
      modelAnswer: "The Internet uses a 'best-effort' connectionless model with no guarantees on bandwidth, timing, or delivery order, relying on smart end systems for error control. ATM uses connection-oriented Virtual Circuits requiring call setup, providing guaranteed QoS (timing, bandwidth) using 'dumb' end systems and a complex network core.",
      modelAnswerAr: "يستخدم الإنترنت نموذج اتصال غير متصل بـ 'أفضل جهد' بدون ضمانات بشأن النطاق الترددي أو التوقيت أو ترتيب التسليم، ويعتمد على أنظمة طرفية ذكية للتحكم في الأخطاء. يستخدم ATM دوائر افتراضية موجهة للاتصال تتطلب إعداد مكالمة، وتوفر جودة خدمة مضمونة (توقيت، نطاق ترددي) باستخدام أنظمة طرفية 'غبية' ونواة شبكة معقدة."
    },
    {
      id: 'cn-l7-w3',
      question: "Why do Virtual Circuit networks maintain connection state in routers, while Datagram networks do not?",
      questionAr: "لماذا تحتفظ شبكات الدوائر الافتراضية بحالة الاتصال في الموجهات، بينما لا تفعل شبكات مخططات البيانات ذلك؟",
      modelAnswer: "In VC networks, a dedicated path is established before transmission, and routers must maintain state to map incoming VC identifiers to outgoing VC identifiers and reserve resources. Datagram networks route each packet independently based on the destination IP address, so routers do not need to track individual connections.",
      modelAnswerAr: "في شبكات VC، يتم إنشاء مسار مخصص قبل الإرسال، ويجب أن تحتفظ الموجهات بالحالة لتعيين معرفات VC الواردة إلى معرفات VC الصادرة وتخصيص الموارد. بينما تقوم شبكات مخططات البيانات بتوجيه كل حزمة بشكل مستقل بناءً على عنوان IP للوجهة، لذلك لا تحتاج الموجهات إلى تتبع الاتصالات الفردية."
    }
  ]
};
