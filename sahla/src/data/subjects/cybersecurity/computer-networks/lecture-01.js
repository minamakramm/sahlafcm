export const LECTURE = {
  subjectId: 'computer-networks',
  number: 1,
  title: 'Introduction to Data Communication and Networks',
  titleAr: 'مقدمة في اتصالات البيانات والشبكات',


  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>What is a Computer Network?</h2>
<p>A computer network is a set of connected computers and devices that can communicate with each other to share data and resources. These connections can be established using wired media (like copper or fiber optic cables) or wireless media (like Wi-Fi or satellite).</p>

<h2>Data Communications vs. Networking</h2>
<ul>
  <li><strong>Data Communications</strong> deals with the transmission of signals in a reliable and effective manner. Topics include: signal transmission and modulation, transmission media, signal encoding, interfacing, data link control, and multiplexing (MUX).</li>
  <li><strong>Networking</strong> deals with the technology and architecture of communication networks used to interconnect communicating devices (entities). Topics include different network technologies such as LANs and WANs.</li>
</ul>

<h2>A Communications Model</h2>
<p>A basic communications model consists of five building blocks:</p>
<ul>
  <li><strong>Source:</strong> Generates binary data to be transmitted.</li>
  <li><strong>Transmitter:</strong> Converts data into transmittable electromagnetic signals.</li>
  <li><strong>Transmission System:</strong> Can be a single transmission line or a complex network.</li>
  <li><strong>Receiver:</strong> Converts received signals back into data.</li>
  <li><strong>Destination:</strong> Takes the incoming data.</li>
</ul>

<h2>Communications Tasks</h2>
<p>A complete communications system must handle a wide variety of tasks, including:</p>
<ul>
  <li>Transmission system utilization & Interfacing</li>
  <li>Signal generation & Synchronization</li>
  <li>Exchange management & Error detection and correction</li>
  <li>Flow control & Addressing</li>
  <li>Routing & Recovery</li>
  <li>Message formatting & Security</li>
  <li>Network management</li>
</ul>

<h2>Network Components</h2>
<ul>
  <li><strong>Hosts (End Systems):</strong> Devices where network applications run (PCs, smartphones, servers).</li>
  <li><strong>Communication Links:</strong> Physical media that carry data (fiber, copper, radio, satellite).</li>
  <li><strong>Packet Switches:</strong> Devices that forward packets (routers and switches).</li>
  <li><strong>Protocols:</strong> Rules that govern how data is sent and received (e.g., TCP, IP, HTTP).</li>
</ul>

<div class="callout callout-info">
  <strong>Fun Fact:</strong> The Internet is essentially a "network of networks," connecting millions of smaller private, public, academic, business, and government networks globally.
</div>

<h2>Network Edge vs. Network Core</h2>
<ul>
  <li><strong>Network Edge:</strong> Includes hosts (clients and servers). Clients initiate requests, while servers respond to them.</li>
  <li><strong>Network Core:</strong> A mesh of interconnected routers. The core's primary job is <strong>packet switching</strong> (moving data from one link to another).</li>
</ul>

<h2>Transmission of Information</h2>
<p>The basic building block of any communications facility is the <strong>transmission line (medium)</strong>. Key goals include:</p>
<ul>
  <li>Providing required capacity with acceptable reliability at minimum cost.</li>
  <li>For long-distance: fiber optic and wireless (satellite, radio).</li>
  <li>To increase efficiency: <strong>multiplexing</strong> and <strong>compression</strong> are used.</li>
</ul>

<h2>Wide Area Networks (WAN)</h2>
<p>WANs span large geographical areas, crossing public rights-of-way and relying partly on common carrier circuits. Key WAN technologies:</p>
<ul>
  <li><strong>Circuit Switching:</strong> A dedicated communications path is established for the entire duration of the conversation. Data transmission is rapid with no delay. Used in traditional telephone networks.</li>
  <li><strong>Packet Switching:</strong> Data is split into small chunks (packets) sent out of sequence. Each packet is passed node to node, stored briefly, then forwarded. Two types: <em>Virtual Circuit</em> and <em>Datagram</em>.</li>
  <li><strong>Frame Relay:</strong> Strips out most error-control overhead (since modern links are reliable). Designed to exploit high data rates and low error rates.</li>
  <li><strong>ATM (Asynchronous Transfer Mode):</strong> Evolution of Frame Relay. Uses fixed-length cells. Supports 10 Mbps to Gbps with constant data rates via packet switching.</li>
</ul>

<h2>Local Area Networks (LAN)</h2>
<p>LANs cover a smaller scope — a building or small campus — and are typically owned by the same organization as the attached devices. Data rates are much higher than WANs. Usually broadcast systems, though switched Ethernet and ATM LANs are also used.</p>
<ul>
  <li><strong>LAN Configurations:</strong> Switched Ethernet (single or multiple switches), ATM LAN, Fiber Channel, Wireless (mobility + ease of installation).</li>
</ul>

<h2>Metropolitan Area Networks (MAN)</h2>
<p>MANs serve as a middle ground between LANs and WANs. They can be private or public, operate at high speed, and cover a large urban area.</p>

<h2>Network Physical Structures</h2>
<ul>
  <li><strong>Point-to-Point:</strong> A dedicated link between exactly two devices.</li>
  <li><strong>Multipoint:</strong> More than two devices share a single link — either spatially shared or time-shared.</li>
</ul>
<p><strong>Physical Topology</strong> refers to the way a network is laid out physically. Networks can be <em>infrastructure-based</em> (with central entities/managers) or <em>infrastructureless</em> (no fixed topology, like ad-hoc wireless networks).</p>

<h2>Network Criteria</h2>
<p>A network must satisfy:</p>
<ul>
  <li><strong>Performance:</strong> Response time, throughput, delay.</li>
  <li><strong>Reliability:</strong> Accuracy of delivery, frequency of failure.</li>
  <li><strong>Security (CIA Triad):</strong> Confidentiality, Integrity, Availability — protecting data from unauthorized access, damage, and loss.</li>
</ul>

<h2>Protocols</h2>
<p>A <strong>protocol</strong> is a set of rules that govern data communications. It defines:</p>
<ul>
  <li><strong>What</strong> is communicated</li>
  <li><strong>How</strong> it is communicated</li>
  <li><strong>When</strong> it is communicated</li>
</ul>
<p>The three key elements of a protocol are:</p>
<ul>
  <li><strong>Syntax:</strong> Structure or format of the data.</li>
  <li><strong>Semantics:</strong> Meaning of each section of the data.</li>
  <li><strong>Timing:</strong> When data should be sent and at what speed.</li>
</ul>

<h2>Standards</h2>
<p>Standards are required to allow interoperability between equipment from different vendors.</p>
<ul>
  <li><strong>Advantages:</strong> Ensures large markets for equipment/software; allows products from different vendors to communicate.</li>
  <li><strong>Disadvantages:</strong> Can freeze technology and limit evolution; may result in multiple competing standards.</li>
</ul>
<p><strong>Key Standards Organizations:</strong> Internet Society, IEEE, ISO, ITU-T, ATM Forum, EIA, FCC.</p>`,

        bodyAr: `<h2>ما هي شبكة الحاسوب؟</h2>
<p>شبكة الحاسوب هي مجموعة من أجهزة الحاسوب والأجهزة المتصلة التي يمكنها التواصل مع بعضها البعض لمشاركة البيانات والموارد. يمكن إنشاء هذه الاتصالات باستخدام وسائط سلكية (مثل الكابلات النحاسية أو الألياف الضوئية) أو وسائط لاسلكية (مثل الواي فاي أو الأقمار الصناعية).</p>

<h2>اتصالات البيانات مقابل الشبكات</h2>
<ul>
  <li><strong>اتصالات البيانات (Data Communications):</strong> تتعامل مع إرسال الإشارات بطريقة موثوقة وفعالة. تشمل الموضوعات: إرسال الإشارات والتضمين، وسائط الإرسال، ترميز الإشارات، التواصل، التحكم في رابط البيانات، والتعدد (MUX).</li>
  <li><strong>الشبكات (Networking):</strong> تتعامل مع تقنية وهندسة شبكات الاتصالات المستخدمة لربط الأجهزة المتصلة. تشمل تقنيات الشبكات المختلفة مثل LAN و WAN.</li>
</ul>

<h2>نموذج الاتصالات</h2>
<p>يتكون نموذج الاتصالات الأساسي من خمسة مكونات:</p>
<ul>
  <li><strong>المصدر (Source):</strong> يولّد البيانات الثنائية المراد إرسالها.</li>
  <li><strong>المرسِل (Transmitter):</strong> يحوّل البيانات إلى إشارات كهرومغناطيسية قابلة للإرسال.</li>
  <li><strong>نظام الإرسال (Transmission System):</strong> قد يكون خطًا واحدًا أو شبكة معقدة.</li>
  <li><strong>المستقبِل (Receiver):</strong> يحوّل الإشارات المستقبلة إلى بيانات.</li>
  <li><strong>الوجهة (Destination):</strong> تستقبل البيانات الواردة.</li>
</ul>

<h2>مهام الاتصالات</h2>
<p>يجب أن يتعامل نظام الاتصالات مع مجموعة واسعة من المهام، بما فيها:</p>
<ul>
  <li>استخدام نظام الإرسال والتواصل</li>
  <li>توليد الإشارات والمزامنة</li>
  <li>إدارة التبادل واكتشاف الأخطاء وتصحيحها</li>
  <li>التحكم في التدفق والعنونة</li>
  <li>التوجيه والاسترداد</li>
  <li>تنسيق الرسائل والأمان</li>
  <li>إدارة الشبكة</li>
</ul>

<h2>مكونات الشبكة</h2>
<ul>
  <li><strong>المضيفون (الأجهزة الطرفية):</strong> الأجهزة التي تعمل عليها تطبيقات الشبكة (أجهزة الكمبيوتر الشخصية، الهواتف الذكية، الخوادم).</li>
  <li><strong>روابط الاتصال:</strong> الوسائط المادية التي تحمل البيانات (الألياف، النحاس، الراديو، الأقمار الصناعية).</li>
  <li><strong>مفاتيح الحزم:</strong> الأجهزة التي تعيد توجيه الحزم (الموجهات والمبدلات).</li>
  <li><strong>البروتوكولات:</strong> القواعد التي تحكم كيفية إرسال واستقبال البيانات (مثل TCP، IP، HTTP).</li>
</ul>

<div class="callout callout-info">
  <strong>حقيقة ممتعة:</strong> الإنترنت هو في الأساس "شبكة من الشبكات"، يربط الملايين من الشبكات الخاصة والعامة والأكاديمية والتجارية والحكومية الأصغر عالميًا.
</div>

<h2>حافة الشبكة مقابل قلب الشبكة</h2>
<ul>
  <li><strong>حافة الشبكة (Network Edge):</strong> تشمل المضيفين (العملاء والخوادم). يبدأ العملاء الطلبات، بينما تستجيب الخوادم لها.</li>
  <li><strong>قلب الشبكة (Network Core):</strong> شبكة من الموجهات المترابطة. المهمة الأساسية هي <strong>تبديل الحزم</strong> (نقل البيانات من رابط إلى آخر).</li>
</ul>

<h2>إرسال المعلومات</h2>
<p>اللبنة الأساسية لأي منشأة اتصالات هي <strong>خط الإرسال (الوسيط)</strong>. الأهداف الرئيسية:</p>
<ul>
  <li>توفير السعة المطلوبة بموثوقية مقبولة وبأقل تكلفة.</li>
  <li>للمسافات الطويلة: الألياف الضوئية والإرسال اللاسلكي (الأقمار الصناعية، الراديو).</li>
  <li>لزيادة الكفاءة: <strong>التعدد (Multiplexing)</strong> و<strong>الضغط (Compression)</strong>.</li>
</ul>

<h2>الشبكات الواسعة (WAN)</h2>
<p>تمتد الشبكات الواسعة عبر مناطق جغرافية كبيرة. تقنياتها الرئيسية:</p>
<ul>
  <li><strong>تبديل الدائرة (Circuit Switching):</strong> مسار اتصال مخصص طوال مدة المحادثة. سريع وبلا تأخير. يُستخدم في شبكات الهاتف.</li>
  <li><strong>تبديل الحزم (Packet Switching):</strong> تُقسّم البيانات إلى حزم صغيرة تُرسل بشكل غير متسلسل. نوعان: الدائرة الافتراضية (Virtual Circuit) والمخطط البياني (Datagram).</li>
  <li><strong>ترحيل الإطارات (Frame Relay):</strong> يحذف معظم العبء الزائد لمكافحة الأخطاء، مصمم للاستفادة من معدلات البيانات العالية.</li>
  <li><strong>وضع النقل غير المتزامن (ATM):</strong> يستخدم خلايا ذات طول ثابت، يدعم من 10 ميغابت/ث حتى جيغابت/ث.</li>
</ul>

<h2>الشبكات المحلية (LAN)</h2>
<p>الشبكات المحلية تغطي نطاقًا أصغر كمبنى أو حرم جامعي صغير. معدلات البيانات أعلى بكثير مقارنةً بالشبكات الواسعة. عادةً ما تكون أنظمة بث (Broadcast).</p>

<h2>الشبكات الحضرية (MAN)</h2>
<p>الشبكات الحضرية تقع في منتصف الطريق بين LAN وWAN. يمكن أن تكون خاصة أو عامة، وتعمل بسرعة عالية وتغطي منطقة حضرية كبيرة.</p>

<h2>الهياكل المادية للشبكة</h2>
<ul>
  <li><strong>نقطة إلى نقطة (Point-to-Point):</strong> رابط مخصص بين جهازين تحديدًا.</li>
  <li><strong>متعدد النقاط (Multipoint):</strong> أكثر من جهازين يشتركون في رابط واحد.</li>
</ul>
<p><strong>الطوبولوجيا المادية</strong> هي الطريقة التي تُرتّب بها الشبكة ماديًا. يمكن أن تكون بنية تحتية (Infrastructure) أو بدون بنية تحتية (Infrastructureless).</p>

<h2>معايير الشبكة</h2>
<ul>
  <li><strong>الأداء:</strong> زمن الاستجابة، معدل النقل، التأخير.</li>
  <li><strong>الموثوقية:</strong> دقة التسليم، تكرار الأعطال.</li>
  <li><strong>الأمان (ثالوث CIA):</strong> السرية، النزاهة، التوفر.</li>
</ul>

<h2>البروتوكولات</h2>
<p>البروتوكول هو مجموعة من القواعد التي تحكم اتصالات البيانات. يحدد ماذا يُرسَل، وكيف يُرسَل، ومتى يُرسَل. عناصره الثلاثة:</p>
<ul>
  <li><strong>البنية (Syntax):</strong> هيكل أو تنسيق البيانات.</li>
  <li><strong>الدلالات (Semantics):</strong> معنى كل قسم من البيانات.</li>
  <li><strong>التوقيت (Timing):</strong> متى ترسل وبأي سرعة.</li>
</ul>

<h2>المعايير</h2>
<p>المعايير ضرورية لضمان التشغيل البيني بين المعدات من موردين مختلفين.</p>
<ul>
  <li><strong>المزايا:</strong> ضمان أسواق كبيرة، السماح لمنتجات مختلفة بالتواصل.</li>
  <li><strong>العيوب:</strong> تجميد التكنولوجيا، احتمال وجود معايير متنافسة متعددة.</li>
</ul>
<p><strong>هيئات المعايير الرئيسية:</strong> Internet Society، IEEE، ISO، ITU-T، ATM Forum، EIA، FCC.</p>`,
      },
    },
  ],

  summary: {
    points: [
      'Data Communications covers reliable signal transmission; Networking covers the architecture of interconnected devices.',
      'A communications model has five parts: Source → Transmitter → Transmission System → Receiver → Destination.',
      'A computer network consists of hosts, communication links, packet switches, and protocols.',
      'WAN technologies include Circuit Switching, Packet Switching, Frame Relay, and ATM.',
      'LAN covers a small area with high data rates; MAN is the middle ground between LAN and WAN.',
      'Network criteria: Performance, Reliability, and Security (Confidentiality, Integrity, Availability).',
      'A protocol defines communication rules via Syntax (format), Semantics (meaning), and Timing (when/speed).',
      'Standards ensure interoperability but can freeze technology; key bodies include IEEE, ISO, ITU-T, and FCC.',
      'Physical connection types: Point-to-Point (dedicated link) and Multipoint (shared link).',
      'Next lecture covers Introduction to the Internet and the Protocol Stack.',
    ],
    pointsAr: [
      'اتصالات البيانات تُعنى بالإرسال الموثوق للإشارات؛ الشبكات تُعنى ببنية الأجهزة المترابطة.',
      'نموذج الاتصالات خمسة أجزاء: المصدر ← المرسِل ← نظام الإرسال ← المستقبِل ← الوجهة.',
      'تتكون الشبكة من مضيفين وروابط اتصال ومفاتيح حزم وبروتوكولات.',
      'تقنيات WAN: تبديل الدائرة، تبديل الحزم، ترحيل الإطارات، وATM.',
      'LAN تغطي منطقة صغيرة بمعدلات بيانات عالية؛ MAN هي نقطة وسط بين LAN وWAN.',
      'معايير الشبكة: الأداء، الموثوقية، الأمان (السرية، النزاهة، التوفر).',
      'البروتوكول يحدد قواعد الاتصال عبر البنية (التنسيق) والدلالات (المعنى) والتوقيت (متى/السرعة).',
      'المعايير تضمن التشغيل البيني لكنها قد تجمّد التطور؛ أبرز الهيئات: IEEE، ISO، ITU-T، FCC.',
      'نوعا الاتصال المادي: نقطة إلى نقطة (رابط مخصص) ومتعدد النقاط (رابط مشترك).',
      'المحاضرة القادمة: مقدمة إلى الإنترنت وحزم البروتوكولات.',
    ],
  },

  mcq: [
    // ── Easy ──────────────────────────────────────────────────────────────────
    {
      id: 'cn-l1-q1',
      question: 'Which component of the network is responsible for forwarding packets toward their ultimate destination?',
      questionAr: 'أي مكون في الشبكة مسؤول عن توجيه الحزم نحو وجهتها النهائية؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Hosts', isCorrect: false },
        { id: 'b', text: 'Packet Switches (Routers)', isCorrect: true },
        { id: 'c', text: 'Communication Links', isCorrect: false },
        { id: 'd', text: 'Application Layer', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q2',
      question: "Which of the following is considered an 'End System' (Host)?",
      questionAr: "أي مما يلي يعتبر 'نظامًا طرفيًا' (مضيفًا)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Router', isCorrect: false },
        { id: 'b', text: 'Smartphone', isCorrect: true },
        { id: 'c', text: 'Fiber Optic Cable', isCorrect: false },
        { id: 'd', text: 'Ethernet Switch', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q4',
      question: 'What is the primary function of a network protocol?',
      questionAr: 'ما هي الوظيفة الأساسية لبروتوكول الشبكة؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'To manufacture network cables', isCorrect: false },
        { id: 'b', text: 'To define the format and order of messages exchanged', isCorrect: true },
        { id: 'c', text: 'To increase the speed of electricity', isCorrect: false },
        { id: 'd', text: 'To provide physical power to routers', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q6',
      question: 'Where do network applications (like a web browser) run?',
      questionAr: 'أين تعمل تطبيقات الشبكة (مثل متصفح الويب)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'In the network core', isCorrect: false },
        { id: 'b', text: 'On hosts at the network edge', isCorrect: true },
        { id: 'c', text: 'Inside fiber optic cables', isCorrect: false },
        { id: 'd', text: 'Only on routers', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q9',
      question: 'What is the standard wired access technology for universities and office buildings?',
      questionAr: 'ما هي تقنية الوصول السلكي القياسية للجامعات ومباني المكاتب؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Wi-Fi', isCorrect: false },
        { id: 'b', text: 'Ethernet', isCorrect: true },
        { id: 'c', text: '4G LTE', isCorrect: false },
        { id: 'd', text: 'DSL', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q10',
      question: 'What does FTTH stand for?',
      questionAr: 'إلى ماذا يرمز اختصار FTTH؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Fast Transmission to Host', isCorrect: false },
        { id: 'b', text: 'Fiber to the Home', isCorrect: true },
        { id: 'c', text: 'Free Transmission Through Hubs', isCorrect: false },
        { id: 'd', text: 'Fixed Telephone Tracking Host', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q11',
      question: 'In the basic communications model, which element converts data into a transmittable electromagnetic signal?',
      questionAr: 'في نموذج الاتصالات الأساسي، أي عنصر يحوّل البيانات إلى إشارة كهرومغناطيسية قابلة للإرسال؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Source', isCorrect: false },
        { id: 'b', text: 'Transmitter', isCorrect: true },
        { id: 'c', text: 'Receiver', isCorrect: false },
        { id: 'd', text: 'Destination', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q12',
      question: 'Which network type typically covers a building or a small campus?',
      questionAr: 'أي نوع من الشبكات يغطي عادةً مبنى أو حرمًا جامعيًا صغيرًا؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'WAN', isCorrect: false },
        { id: 'b', text: 'MAN', isCorrect: false },
        { id: 'c', text: 'LAN', isCorrect: true },
        { id: 'd', text: 'ATM', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q13',
      question: 'Which of the following is NOT one of the three key elements of a protocol?',
      questionAr: 'أي مما يلي ليس أحد العناصر الثلاثة الرئيسية للبروتوكول؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Syntax', isCorrect: false },
        { id: 'b', text: 'Semantics', isCorrect: false },
        { id: 'c', text: 'Topology', isCorrect: true },
        { id: 'd', text: 'Timing', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q14',
      question: 'Which switching technique is most suitable for real-time voice services like traditional telephone calls?',
      questionAr: 'أي تقنية تبديل هي الأنسب لخدمات الصوت الفوري مثل المكالمات الهاتفية التقليدية؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Packet Switching', isCorrect: false },
        { id: 'b', text: 'Frame Relay', isCorrect: false },
        { id: 'c', text: 'Circuit Switching', isCorrect: true },
        { id: 'd', text: 'ATM', isCorrect: false },
      ],
    },

    // ── Medium ─────────────────────────────────────────────────────────────────
    {
      id: 'cn-l1-q3',
      question: "[MID] What does the term 'Network of Networks' primarily refer to?",
      questionAr: "[MID] إلى ماذا يشير مصطلح 'شبكة الشبكات' بشكل أساسي؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'A single supercomputer', isCorrect: false },
        { id: 'b', text: 'The Internet', isCorrect: true },
        { id: 'c', text: 'Local Area Network (LAN)', isCorrect: false },
        { id: 'd', text: 'A data center', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q5',
      question: 'Which residential access technology uses existing cable television infrastructure?',
      questionAr: 'ما هي تقنية الوصول السكني التي تستخدم البنية التحتية الحالية لتلفزيون الكابل؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'DSL', isCorrect: false },
        { id: 'b', text: 'FTTH', isCorrect: false },
        { id: 'c', text: 'Cable Internet', isCorrect: true },
        { id: 'd', text: 'Ethernet', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q7',
      question: '[MID] DSL (Digital Subscriber Line) technology shares its physical medium with which other service?',
      questionAr: '[MID] تشارك تقنية DSL (خط المشترك الرقمي) وسطها المادي مع أي خدمة أخرى؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Satellite TV', isCorrect: false },
        { id: 'b', text: 'Traditional Telephone service', isCorrect: true },
        { id: 'c', text: 'Power grid', isCorrect: false },
        { id: 'd', text: 'Wireless radio', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q8',
      question: 'Which type of packet switch typically connects devices within an enterprise LAN?',
      questionAr: 'أي نوع من مفاتيح الحزم يربط عادةً الأجهزة داخل شبكة LAN للمؤسسة؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Router', isCorrect: false },
        { id: 'b', text: 'Switch', isCorrect: true },
        { id: 'c', text: 'Modem', isCorrect: false },
        { id: 'd', text: 'Repeater', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q15',
      question: '[MID] In packet switching, what happens at each intermediate node?',
      questionAr: '[MID] في تبديل الحزم، ماذا يحدث في كل عقدة وسيطة؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'The packet is discarded and re-sent from the source', isCorrect: false },
        { id: 'b', text: 'The entire packet is received, stored briefly, then forwarded', isCorrect: true },
        { id: 'c', text: 'The packet is decrypted and re-encrypted', isCorrect: false },
        { id: 'd', text: 'The packet is split into smaller bits', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q16',
      question: 'Which of the following is a disadvantage of standardization in networking?',
      questionAr: 'أي مما يلي يُعدّ عيبًا من عيوب التوحيد القياسي في الشبكات؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It ensures a large market for equipment', isCorrect: false },
        { id: 'b', text: 'It allows products from different vendors to communicate', isCorrect: false },
        { id: 'c', text: 'It can freeze technology and limit evolution', isCorrect: true },
        { id: 'd', text: 'It reduces the cost of manufacturing', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q17',
      question: 'What is the key difference between a point-to-point connection and a multipoint connection?',
      questionAr: 'ما الفرق الجوهري بين الاتصال نقطة إلى نقطة والاتصال متعدد النقاط؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Point-to-point is wireless; multipoint is wired', isCorrect: false },
        { id: 'b', text: 'Point-to-point dedicates a link to two devices; multipoint shares one link among more than two devices', isCorrect: true },
        { id: 'c', text: 'Point-to-point uses packets; multipoint uses circuits', isCorrect: false },
        { id: 'd', text: 'Point-to-point is only used in LANs; multipoint is only in WANs', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q18',
      question: '[MID] ATM (Asynchronous Transfer Mode) achieves constant data rates by using which technique?',
      questionAr: '[MID] كيف يحقق ATM معدلات بيانات ثابتة؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Circuit switching with variable-length frames', isCorrect: false },
        { id: 'b', text: 'Packet switching with fixed-length cells', isCorrect: true },
        { id: 'c', text: 'Frame relay with large error-checking overhead', isCorrect: false },
        { id: 'd', text: 'Wireless broadcasting over wide areas', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q19',
      question: 'Which network criteria element is described as: "protecting data from unauthorized access and damage, and implementing recovery procedures"?',
      questionAr: 'أي معيار من معايير الشبكة يُوصف بأنه: "حماية البيانات من الوصول غير المصرح به والضرر وتطبيق إجراءات الاسترداد"؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Performance', isCorrect: false },
        { id: 'b', text: 'Reliability', isCorrect: false },
        { id: 'c', text: 'Security', isCorrect: true },
        { id: 'd', text: 'Throughput', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q20',
      question: 'Metropolitan Area Networks (MANs) are best described as:',
      questionAr: 'الشبكات الحضرية (MAN) يمكن وصفها بأنها:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Identical to LANs but wireless', isCorrect: false },
        { id: 'b', text: 'A middle ground between LAN and WAN, covering a large urban area', isCorrect: true },
        { id: 'c', text: 'Only used by government agencies', isCorrect: false },
        { id: 'd', text: 'Low-speed networks that rely on satellite links', isCorrect: false },
      ],
    },

    // ── Hard ───────────────────────────────────────────────────────────────────
    {
      id: 'cn-l1-q21',
      question: '[MID] Frame Relay was developed as an improvement over traditional packet switching systems primarily because:',
      questionAr: '[MID] طُوِّر ترحيل الإطارات (Frame Relay) تحسينًا على أنظمة تبديل الحزم التقليدية أساسًا لأن:',
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'It introduces more error-checking overhead for higher reliability', isCorrect: false },
        { id: 'b', text: 'Modern transmission systems are more reliable, so most error-control overhead can be eliminated', isCorrect: true },
        { id: 'c', text: 'It uses circuit switching instead of packet switching', isCorrect: false },
        { id: 'd', text: 'It is specifically designed for satellite links', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q22',
      question: "The 'Semantics' element of a protocol refers to:",
      questionAr: "يشير عنصر 'الدلالات (Semantics)' في البروتوكول إلى:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'When data should be sent and how fast', isCorrect: false },
        { id: 'b', text: 'The physical structure of the cable used', isCorrect: false },
        { id: 'c', text: 'The meaning of each section of the data', isCorrect: true },
        { id: 'd', text: 'The format or structure of the data', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q23',
      question: '[MID] Which of the following correctly distinguishes Data Communications from Networking?',
      questionAr: '[MID] أي مما يلي يُميّز بشكل صحيح بين اتصالات البيانات والشبكات؟',
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Data Communications deals with network architecture; Networking deals with signal transmission', isCorrect: false },
        { id: 'b', text: 'Data Communications deals with reliable signal transmission (modulation, encoding, MUX); Networking deals with architecture and technologies connecting devices (LANs, WANs)', isCorrect: true },
        { id: 'c', text: 'They are synonymous terms for the same discipline', isCorrect: false },
        { id: 'd', text: 'Data Communications applies only to wireless; Networking only to wired systems', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q24',
      question: 'An infrastructureless network topology (like an ad-hoc wireless network) differs from an infrastructure-based topology in that it:',
      questionAr: 'تختلف طوبولوجيا الشبكة بدون بنية تحتية (مثل الشبكة اللاسلكية المخصصة) عن الطوبولوجيا ذات البنية التحتية في أنها:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Always uses fiber optic cables', isCorrect: false },
        { id: 'b', text: 'Has no central entities or managers and follows no specific fixed topology', isCorrect: true },
        { id: 'c', text: 'Relies on a central router to coordinate all communication', isCorrect: false },
        { id: 'd', text: 'Is limited to two connected devices', isCorrect: false },
      ],
    },
    {
      id: 'cn-l1-q25',
      question: 'To increase data transmission efficiency over a shared transmission medium, which two approaches are primarily used?',
      questionAr: 'لزيادة كفاءة إرسال البيانات عبر وسيط إرسال مشترك، ما هما الأسلوبان الرئيسيان المستخدمان؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Encryption and Decryption', isCorrect: false },
        { id: 'b', text: 'Routing and Switching', isCorrect: false },
        { id: 'c', text: 'Multiplexing and Compression', isCorrect: true },
        { id: 'd', text: 'Synchronization and Flow Control', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'cn-l1-w1',
      question: 'Define what a computer network is and name its four major components.',
      questionAr: 'عَرِّف شبكة الحاسوب واذكر مكوناتها الأربعة الرئيسية.',
      modelAnswer:
        'A computer network is a system of interconnected devices that can share data and resources. Its major components are: 1. Hosts (end systems) — where applications run, 2. Communication links — physical media carrying data, 3. Packet switches (routers/switches) — forward packets toward destinations, and 4. Protocols — rules governing communication.',
      modelAnswerAr:
        'شبكة الحاسوب هي نظام من الأجهزة المترابطة التي يمكنها مشاركة البيانات والموارد. مكوناتها الرئيسية هي: 1. المضيفون (الأنظمة الطرفية) — حيث تعمل التطبيقات، 2. روابط الاتصال — الوسائط المادية الحاملة للبيانات، 3. مفاتيح الحزم (الموجهات/المبدلات) — توجّه الحزم نحو وجهاتها، 4. البروتوكولات — القواعد التي تحكم الاتصال.',
    },
    {
      id: 'cn-l1-w2',
      question: 'Briefly explain the difference between the network edge and the network core.',
      questionAr: 'اشرح باختصار الفرق بين حافة الشبكة وقلب الشبكة.',
      modelAnswer:
        'The network edge consists of end systems (clients and servers) where applications run. The network core is the mesh of interconnected routers that provides the infrastructure for packet switching and routing data across the network.',
      modelAnswerAr:
        'تتكون حافة الشبكة من الأنظمة الطرفية (العملاء والخوادم) حيث تعمل التطبيقات. قلب الشبكة هو شبكة الموجهات المترابطة التي توفر البنية التحتية لتبديل الحزم وتوجيه البيانات عبر الشبكة.',
    },
    {
      id: 'cn-l1-w3',
      question: 'Compare DSL and Cable access technologies.',
      questionAr: 'قارن بين تقنيات الوصول DSL و Cable.',
      modelAnswer:
        'DSL uses existing local telephone lines and provides a dedicated connection to the central office. Cable uses the television cable infrastructure and shares bandwidth among multiple users in a neighborhood, which can lead to slower speeds during peak hours.',
      modelAnswerAr:
        'تستخدم DSL خطوط الهاتف المحلية الحالية وتوفر اتصالاً مخصصًا للمكتب المركزي. بينما تستخدم Cable البنية التحتية لكابل التلفزيون وتشارك عرض النطاق الترددي بين مستخدمين متعددين في الحي، مما قد يُبطئ السرعة في أوقات الذروة.',
    },
    {
      id: 'cn-l1-w4',
      question: 'Explain the five components of the basic communications model and their roles.',
      questionAr: 'اشرح المكونات الخمسة لنموذج الاتصالات الأساسي وأدوارها.',
      modelAnswer:
        '1. Source: generates the binary data to be transmitted. 2. Transmitter: converts data into transmittable electromagnetic signals. 3. Transmission System: the medium (single line or complex network) carrying signals. 4. Receiver: converts received signals back into data. 5. Destination: the endpoint that takes the incoming data.',
      modelAnswerAr:
        '1. المصدر: يولّد البيانات الثنائية المراد إرسالها. 2. المرسِل: يحوّل البيانات إلى إشارات كهرومغناطيسية قابلة للإرسال. 3. نظام الإرسال: الوسيط (خط واحد أو شبكة معقدة) الذي يحمل الإشارات. 4. المستقبِل: يحوّل الإشارات المستقبلة إلى بيانات. 5. الوجهة: النقطة النهائية التي تستقبل البيانات.',
    },
    {
      id: 'cn-l1-w5',
      question: 'Compare Circuit Switching and Packet Switching. For each, give one real-world example of a network that uses it.',
      questionAr: 'قارن بين تبديل الدائرة وتبديل الحزم. لكل منهما، أعطِ مثالاً واقعيًا على شبكة تستخدمه.',
      modelAnswer:
        'Circuit Switching: establishes a dedicated path for the entire duration of a session; data flows without delay; used in traditional telephone networks (PSTN). Packet Switching: data is divided into packets sent independently; each packet is stored and forwarded at each node; used in the Internet.',
      modelAnswerAr:
        'تبديل الدائرة: ينشئ مسارًا مخصصًا طوال مدة الجلسة؛ يتدفق البيانات دون تأخير؛ يُستخدم في شبكات الهاتف التقليدية (PSTN). تبديل الحزم: تُقسَّم البيانات إلى حزم تُرسَل بشكل مستقل؛ كل حزمة تُخزَّن وتُوجَّه في كل عقدة؛ يُستخدم في الإنترنت.',
    },
    {
      id: 'cn-l1-w6',
      question: 'List and explain the three key elements of a protocol (Syntax, Semantics, Timing).',
      questionAr: 'اذكر واشرح العناصر الثلاثة الرئيسية للبروتوكول (البنية، الدلالات، التوقيت).',
      modelAnswer:
        '1. Syntax: defines the structure or format of the data — what is in each field and how it is organized. 2. Semantics: defines the meaning of each section of the data — what action to take based on the field value. 3. Timing: specifies when data should be sent and how fast it can be transmitted.',
      modelAnswerAr:
        '1. البنية (Syntax): تحدد هيكل أو تنسيق البيانات — ما في كل حقل وكيفية تنظيمه. 2. الدلالات (Semantics): تحدد معنى كل قسم من البيانات — ما الإجراء الذي يجب اتخاذه بناءً على قيمة الحقل. 3. التوقيت (Timing): يحدد متى يجب إرسال البيانات وبأي سرعة يمكن إرسالها.',
    },
    {
      id: 'cn-l1-w7',
      question: 'Identify the main five components of a data communications system. (Lecture Question)',
      questionAr: 'حدّد المكونات الخمسة الرئيسية لنظام اتصالات البيانات. (سؤال المحاضرة)',
      modelAnswer:
        'The five components are: 1. Message — the information (data) to be communicated. 2. Sender — the device that sends the message. 3. Receiver — the device that receives the message. 4. Transmission Medium — the physical path over which the message travels. 5. Protocol — the rules that govern data communication.',
      modelAnswerAr:
        'المكونات الخمسة هي: 1. الرسالة — المعلومات (البيانات) المراد نقلها. 2. المرسِل — الجهاز الذي يرسل الرسالة. 3. المستقبِل — الجهاز الذي يستقبل الرسالة. 4. وسيط الإرسال — المسار المادي الذي تسلكه الرسالة. 5. البروتوكول — القواعد التي تحكم اتصالات البيانات.',
    },
    {
      id: 'cn-l1-w8',
      question: 'Highlight the advantages and disadvantages of packet and circuit switching techniques in computer networks. (Lecture Question)',
      questionAr: 'أبرز مزايا وعيوب تقنيتَي تبديل الحزم وتبديل الدائرة في شبكات الحاسوب. (سؤال المحاضرة)',
      modelAnswer:
        'Circuit Switching — Advantages: dedicated path ensures no delay and consistent quality, good for real-time applications. Disadvantages: wastes bandwidth when no data is sent, connection setup takes time. Packet Switching — Advantages: efficient use of bandwidth (shared resources), more robust and fault-tolerant, better for bursty data. Disadvantages: variable delay (jitter), packets may arrive out of order, overhead at each node.',
      modelAnswerAr:
        'تبديل الدائرة — المزايا: مسار مخصص يضمن عدم التأخير وجودة ثابتة، مناسب للتطبيقات الفورية. العيوب: يُهدر عرض النطاق الترددي عند عدم إرسال البيانات، ويستغرق إعداد الاتصال وقتًا. تبديل الحزم — المزايا: استخدام فعّال لعرض النطاق (موارد مشتركة)، أكثر متانة وتحملاً للأعطال، مناسب للبيانات المتقطعة. العيوب: تأخر متغير (Jitter)، قد تصل الحزم بترتيب مختلف، عبء معالجة في كل عقدة.',
    },
  ],
};