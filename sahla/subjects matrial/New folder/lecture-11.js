export const LECTURE = {
  subjectId: 'computer-networks',
  number: 11,
  title: 'Transport Layer 2 & Application Layer Introduction',
  titleAr: 'طبقة النقل 2 ومقدمة طبقة التطبيقات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>TCP Flow Control & Connection Management</h2>
<p><strong>Flow Control</strong> is a speed-matching service that ensures a fast sender does not overwhelm a slow receiver. The receiver advertises its available buffer space (<code>RcvWindow</code>) in every ACK. The sender limits its unacknowledged data to this value, preventing buffer overflow.</p>
<p><strong>Connection Management</strong> involves a <strong>3-way handshake</strong> to establish a connection (SYN, SYN-ACK, ACK) which synchronizes sequence numbers and allocates buffers. Closing a connection uses a <strong>4-step process</strong> (FIN, ACK, FIN, ACK) allowing both sides to gracefully terminate.</p>

<h2>Principles of Congestion Control</h2>
<p>Congestion occurs when too many sources send too much data too fast for the network to handle. The main costs of congestion include:</p>
<ul>
  <li><strong>Long delays</strong> due to queuing in router buffers.</li>
  <li><strong>Packet loss</strong> when finite router buffers overflow.</li>
  <li><strong>Wasted capacity:</strong> When a packet is dropped, all upstream transmission capacity used to carry that packet is wasted.</li>
</ul>

<h2>TCP Congestion Control</h2>
<p>TCP infers congestion from packet loss (timeout or duplicate ACKs) and controls its rate using a congestion window (<code>CongWin</code>). It uses two main phases:</p>
<ol>
  <li><strong>Slow Start:</strong> Begins with <code>CongWin = 1 MSS</code>. The window grows <strong>exponentially</strong> (doubles every RTT) to quickly probe available bandwidth until it reaches a threshold or detects a loss.</li>
  <li><strong>AIMD (Additive Increase, Multiplicative Decrease):</strong> When in congestion avoidance, TCP increases <code>CongWin</code> linearly (+1 MSS per RTT). Upon detecting loss, it aggressively reduces the rate.</li>
</ol>
<div class="callout callout-info">
  <strong>Refined Loss Response:</strong> If loss is detected by <strong>3 duplicate ACKs</strong> (mild congestion), TCP cuts the window in half (Fast Recovery). If loss is detected by a <strong>Timeout</strong> (severe congestion), TCP resets the window to 1 MSS and restarts Slow Start.
</div>

<h2>TCP Fairness</h2>
<p>TCP's AIMD mechanism naturally forces competing TCP sessions sharing a bottleneck link (capacity R) to eventually converge to an equal bandwidth share (<code>R/K</code> for K sessions). However, UDP applications and parallel TCP connections can bypass this fairness.</p>

<h2>Introduction to the Application Layer</h2>
<p>Network applications run entirely on <strong>end systems</strong> (hosts), not inside the network core routers. Applications communicate via <strong>Sockets</strong> (the "door" to the transport layer). To deliver a message to the correct application, the network uses an <strong>IP Address</strong> to identify the host, and a <strong>Port Number</strong> (e.g., 80 for HTTP) to identify the specific process.</p>
<p>Common application architectures include:</p>
<ul>
  <li><strong>Client-Server:</strong> An always-on server with a permanent IP handles requests from intermittently connected clients (e.g., Web, Email).</li>
  <li><strong>Pure P2P:</strong> No centralized server; arbitrary end systems communicate directly. Highly scalable but harder to manage (e.g., BitTorrent).</li>
  <li><strong>Hybrid:</strong> Uses a centralized server for discovery/coordination, and P2P for direct data transfer (e.g., Skype, Instant Messaging).</li>
</ul>`,
        bodyAr: `<h2>التحكم في التدفق وإدارة الاتصال في TCP</h2>
<p><strong>التحكم في التدفق (Flow Control)</strong> هو خدمة مطابقة للسرعة تضمن عدم إغراق مرسل سريع لمتلقي بطيء. يعلن المتلقي عن مساحة المخزن المؤقت المتاحة لديه (<code>RcvWindow</code>) في كل إقرار (ACK). يقيد المرسل بياناته غير المقر باستلامها بهذه القيمة، مما يمنع فيضان المخزن المؤقت.</p>
<p>تتضمن <strong>إدارة الاتصال (Connection Management)</strong> عملية <strong>مصافحة ثلاثية (3-way handshake)</strong> لإنشاء اتصال (SYN، SYN-ACK، ACK) الذي يزامن أرقام التسلسل ويخصص المخازن المؤقتة. يستخدم إغلاق الاتصال عملية من <strong>4 خطوات</strong> (FIN، ACK، FIN، ACK) للسماح لكلا الجانبين بالإنهاء بشكل سليم.</p>

<h2>مبادئ التحكم في الازدحام (Congestion Control)</h2>
<p>يحدث الازدحام عندما ترسل مصادر كثيرة جداً بيانات كثيرة جداً بسرعة كبيرة جداً لا يمكن للشبكة التعامل معها. تشمل التكاليف الرئيسية للازدحام:</p>
<ul>
  <li><strong>تأخيرات طويلة</strong> بسبب الاصطفاف في مخازن أجهزة التوجيه (Routers).</li>
  <li><strong>فقدان الحزم</strong> عندما تفيض مخازن أجهزة التوجيه المحدودة.</li>
  <li><strong>إهدار السعة:</strong> عندما يتم إسقاط حزمة، يتم إهدار جميع سعات الإرسال السابقة المستخدمة لحمل تلك الحزمة.</li>
</ul>

<h2>التحكم في الازدحام في TCP</h2>
<p>يستنتج TCP حدوث الازدحام من فقدان الحزم (انتهاء المهلة أو إقرارات مكررة) ويتحكم في معدله باستخدام نافذة الازدحام (<code>CongWin</code>). يستخدم مرحلتين رئيسيتين:</p>
<ol>
  <li><strong>البداية البطيئة (Slow Start):</strong> تبدأ بـ <code>CongWin = 1 MSS</code>. تنمو النافذة بشكل <strong>أُسي (Exponentially)</strong> (تتضاعف كل RTT) لاختبار النطاق الترددي المتاح بسرعة حتى تصل إلى حد معين (Threshold) أو تكتشف فقداناً.</li>
  <li><strong>الزيادة المضافة، النقصان المضاعف (AIMD):</strong> عند تجنب الازدحام، يزيد TCP قيمة <code>CongWin</code> بشكل خطي (+1 MSS لكل RTT). عند اكتشاف فقدان، فإنه يقلل المعدل بقوة.</li>
</ol>
<div class="callout callout-info">
  <strong>الاستجابة المحسنة للفقدان:</strong> إذا تم اكتشاف فقدان بواسطة <strong>3 إقرارات (ACKs) مكررة</strong> (ازدحام خفيف)، يقوم TCP بخفض النافذة إلى النصف. وإذا تم اكتشاف الفقدان بواسطة <strong>انتهاء المهلة - Timeout</strong> (ازدحام شديد)، يقوم TCP بإعادة ضبط النافذة إلى 1 MSS ويبدأ البداية البطيئة من جديد.
</div>

<h2>العدالة في TCP (TCP Fairness)</h2>
<p>تجبر آلية AIMD في TCP جلسات TCP المتنافسة التي تتشارك في رابط عنق زجاجة (بسعة R) على التقارب في النهاية للحصول على حصة متساوية من النطاق الترددي (<code>R/K</code> لعدد K من الجلسات). ومع ذلك، يمكن لتطبيقات UDP واتصالات TCP المتوازية تجاوز هذه العدالة.</p>

<h2>مقدمة في طبقة التطبيقات</h2>
<p>تعمل تطبيقات الشبكة بالكامل على <strong>الأنظمة الطرفية (hosts)</strong>، وليس داخل أجهزة التوجيه الأساسية للشبكة. تتواصل التطبيقات عبر <strong>المآخذ (Sockets)</strong> (الباب إلى طبقة النقل). لتسليم رسالة إلى التطبيق الصحيح، تستخدم الشبكة <strong>عنوان IP</strong> لتحديد المضيف، و <strong>رقم منفذ (Port Number)</strong> (مثل 80 لـ HTTP) لتحديد العملية المحددة.</p>
<p>تشمل هياكل التطبيقات الشائعة:</p>
<ul>
  <li><strong>خادم-عميل (Client-Server):</strong> يتعامل خادم يعمل دائمًا بعنوان IP دائم مع طلبات العملاء المتصلين بشكل متقطع (مثل الويب والبريد الإلكتروني).</li>
  <li><strong>نظير إلى نظير (Pure P2P):</strong> لا يوجد خادم مركزي؛ تتواصل الأنظمة الطرفية العشوائية مباشرة. قابلة للتوسع بشكل كبير ولكن يصعب إدارتها (مثل BitTorrent).</li>
  <li><strong>هجين (Hybrid):</strong> يستخدم خادمًا مركزيًا للاكتشاف/التنسيق، و P2P لنقل البيانات مباشرة (مثل Skype والمراسلة الفورية).</li>
</ul>`
      }
    }
  ],

  summary: {
    points: [
      "TCP Flow Control uses the RcvWindow to match the sender's transmission rate with the receiver's application read rate.",
      "TCP Connection Management uses a 3-way handshake to open and a 4-step process to close connections.",
      "Congestion causes long delays, packet losses, and wasted upstream transmission capacity.",
      "TCP uses Additive Increase, Multiplicative Decrease (AIMD) to probe bandwidth and react to congestion, producing a sawtooth pattern.",
      "TCP Slow Start exponentially increases the sending window to quickly find available network capacity.",
      "TCP reacts mildly to 3 duplicate ACKs (halves window) but severely to a timeout (resets window to 1 MSS).",
      "Network applications run strictly on end systems and use IP addresses for hosts and port numbers for specific processes.",
      "Application architectures include Client-Server, Pure P2P, and Hybrids."
    ],
    pointsAr: [
      "يستخدم التحكم في التدفق لـ TCP قيمة RcvWindow لمطابقة معدل إرسال المرسل مع معدل قراءة تطبيق المتلقي.",
      "تستخدم إدارة اتصال TCP مصافحة ثلاثية لفتح الاتصالات وعملية من 4 خطوات لإغلاقها.",
      "يتسبب الازدحام في تأخيرات طويلة وفقدان للحزم وإهدار لسعة الإرسال السابقة.",
      "يستخدم TCP خوارزمية (AIMD) لاختبار النطاق الترددي والتفاعل مع الازدحام، مما ينتج نمط سن المنشار.",
      "تقوم البداية البطيئة (Slow Start) لـ TCP بزيادة نافذة الإرسال بشكل أسي للعثور بسرعة على سعة الشبكة المتاحة.",
      "يتفاعل TCP بشكل خفيف مع 3 إقرارات مكررة (يقلص النافذة للنصف) ولكن بشدة مع انتهاء المهلة (يعيد ضبط النافذة إلى 1 MSS).",
      "تعمل تطبيقات الشبكة بشكل صارم على الأنظمة الطرفية وتستخدم عناوين IP للمضيفين وأرقام المنافذ لعمليات محددة.",
      "تشمل هياكل التطبيقات خادم-عميل (Client-Server)، ونظير إلى نظير (Pure P2P)، والهياكل الهجينة."
    ]
  },

  mcq: [
    {
      id: 'cn-l11-q1',
      question: "What is the primary purpose of TCP Flow Control?",
      questionAr: "ما هو الغرض الأساسي من التحكم في التدفق (Flow Control) في TCP؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To prevent the network routers from becoming congested', isCorrect: false },
        { id: 'b', text: 'To ensure a fast sender does not overflow a slow receiver\'s buffer', isCorrect: true },
        { id: 'c', text: 'To encrypt data before sending it across the network', isCorrect: false },
        { id: 'd', text: 'To calculate the exact round-trip time between two hosts', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q2',
      question: "[MID] Which signal indicates to a TCP sender that 'severe' congestion has occurred, causing it to reset its congestion window to 1 MSS?",
      questionAr: "[MID] ما هي الإشارة التي تدل لمرسل TCP على حدوث ازدحام 'شديد'، مما يدفعه لإعادة ضبط نافذة الازدحام الخاصة به إلى 1 MSS؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '3 Duplicate ACKs', isCorrect: false },
        { id: 'b', text: 'A Timeout', isCorrect: true },
        { id: 'c', text: 'An explicit congestion notification bit from a router', isCorrect: false },
        { id: 'd', text: 'A FIN segment', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q3',
      question: "During the 'Slow Start' phase of TCP congestion control, how does the congestion window (CongWin) grow?",
      questionAr: "خلال مرحلة 'البداية البطيئة' (Slow Start) للتحكم في الازدحام في TCP، كيف تنمو نافذة الازدحام (CongWin)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Linearly, increasing by 1 MSS every RTT', isCorrect: false },
        { id: 'b', text: 'It remains constant until the threshold is reached', isCorrect: false },
        { id: 'c', text: 'Exponentially, doubling every RTT', isCorrect: true },
        { id: 'd', text: 'It decreases multiplicatively', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q4',
      question: "Why is 'wasted upstream bandwidth' considered a hidden cost of network congestion in a multihop path?",
      questionAr: "لماذا يُعتبر 'النطاق الترددي السابق المُهدر' تكلفة خفية لازدحام الشبكة في مسار متعدد القفزات (multihop)؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Because routers charge money for every packet they forward', isCorrect: false },
        { id: 'b', text: 'Because if a packet is dropped near the destination, all the transmission capacity used on earlier links to transport it is completely wasted', isCorrect: true },
        { id: 'c', text: 'Because it decreases the speed of the sender\'s CPU', isCorrect: false },
        { id: 'd', text: 'Because TCP flow control cannot detect dropped packets', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q5',
      question: "[MID] Which two identifiers are needed to uniquely identify an application process over the Internet?",
      questionAr: "[MID] ما هما المعرّفان اللازمان لتحديد عملية تطبيق (process) بشكل فريد عبر الإنترنت؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'MAC Address and IP Address', isCorrect: false },
        { id: 'b', text: 'IP Address and Port Number', isCorrect: true },
        { id: 'c', text: 'Port Number and Sequence Number', isCorrect: false },
        { id: 'd', text: 'Domain Name and MAC Address', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q6',
      question: "In AIMD (Additive Increase, Multiplicative Decrease), what creates the characteristic 'sawtooth' pattern?",
      questionAr: "في خوارزمية AIMD، ما الذي يُنشئ نمط 'سن المنشار' (sawtooth) المميز؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Exponential growth followed by linear decline', isCorrect: false },
        { id: 'b', text: 'Linear increase of the window to probe bandwidth, followed by halving the window upon detecting loss', isCorrect: true },
        { id: 'c', text: 'Randomly dropping packets to calculate the estimated RTT', isCorrect: false },
        { id: 'd', text: 'The continuous 3-way handshakes happening between multiple clients', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q7',
      question: "Which application architecture relies on an 'always-on' host with a permanent IP address to service requests?",
      questionAr: "أي هيكل تطبيقات (architecture) يعتمد على مضيف 'يعمل دائمًا' بعنوان IP دائم لخدمة الطلبات؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Client-Server architecture', isCorrect: true },
        { id: 'b', text: 'Pure P2P architecture', isCorrect: false },
        { id: 'c', text: 'BitTorrent file sharing', isCorrect: false },
        { id: 'd', text: 'Distributed Hash Table', isCorrect: false }
      ]
    },
    {
      id: 'cn-l11-q8',
      question: "Why do real-time multimedia applications often prefer UDP over TCP?",
      questionAr: "لماذا تفضل تطبيقات الوسائط المتعددة في الوقت الفعلي (real-time) غالبًا استخدام UDP بدلاً من TCP؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'UDP provides better encryption for video data', isCorrect: false },
        { id: 'b', text: 'TCP limits throughput due to congestion control and retransmissions, which causes unwanted delays and jitter', isCorrect: true },
        { id: 'c', text: 'UDP flow control handles packet loss much better than TCP', isCorrect: false },
        { id: 'd', text: 'UDP requires a 3-way handshake which ensures connection stability', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l11-w1',
      question: "Explain the difference between TCP Flow Control and TCP Congestion Control.",
      questionAr: "اشرح الفرق بين التحكم في التدفق (Flow Control) والتحكم في الازدحام (Congestion Control) في TCP.",
      modelAnswer: "TCP Flow Control protects the receiver; it ensures that a fast sender does not overwhelm the receiver's limited application buffers by using the advertised RcvWindow. TCP Congestion Control protects the network; it prevents senders from injecting too much data into the network core, which would cause router queue overflows and packet loss. Flow control uses explicit feedback (RcvWindow), while congestion control infers network state from losses.",
      modelAnswerAr: "يحمي التحكم في التدفق لـ TCP المتلقي؛ فهو يضمن عدم إغراق مرسل سريع لمخازن تطبيق المتلقي المحدودة باستخدام قيمة RcvWindow المُعلن عنها. يحمي التحكم في الازدحام لـ TCP الشبكة؛ فهو يمنع المرسلين من ضخ الكثير من البيانات في قلب الشبكة، مما قد يتسبب في فيضان طوابير أجهزة التوجيه وفقدان الحزم. يستخدم التحكم في التدفق تغذية راجعة صريحة (RcvWindow)، بينما يستنتج التحكم في الازدحام حالة الشبكة من فقدان الحزم."
    },
    {
      id: 'cn-l11-w2',
      question: "Describe how the TCP Slow Start algorithm works.",
      questionAr: "صف كيف تعمل خوارزمية البداية البطيئة (TCP Slow Start).",
      modelAnswer: "Slow Start begins with a congestion window (CongWin) of 1 MSS. For every ACK received, the window increases by 1 MSS, which effectively doubles the window size every Round Trip Time (RTT). This exponential growth allows TCP to rapidly probe and find the available network bandwidth until a loss occurs or a predefined threshold is reached.",
      modelAnswerAr: "تبدأ البداية البطيئة (Slow Start) بنافذة ازدحام (CongWin) تساوي 1 MSS. مقابل كل إقرار (ACK) يتم تلقيه، تزداد النافذة بمقدار 1 MSS، مما يؤدي فعليًا إلى مضاعفة حجم النافذة في كل وقت دورة ذهاب وإياب (RTT). يسمح هذا النمو الأسي لـ TCP باختبار النطاق الترددي المتاح للشبكة والعثور عليه بسرعة حتى يحدث فقدان أو يتم الوصول إلى حد (Threshold) محدد مسبقًا."
    },
    {
      id: 'cn-l11-w3',
      question: "Why does TCP react differently to packet loss detected by '3 duplicate ACKs' compared to a 'timeout'?",
      questionAr: "لماذا يتفاعل TCP بشكل مختلف مع فقدان الحزم المكتشف بواسطة '3 إقرارات مكررة' مقارنة بـ 'انتهاء المهلة' (timeout)؟",
      modelAnswer: "TCP reacts differently because they indicate different levels of congestion. Receiving 3 duplicate ACKs means some packets are still reaching the receiver (mild congestion), so TCP halves its window (Fast Recovery). A timeout means no ACKs are arriving at all, indicating severe congestion, so TCP acts conservatively by resetting its window to 1 MSS and re-entering Slow Start.",
      modelAnswerAr: "يتفاعل TCP بشكل مختلف لأنها تشير إلى مستويات مختلفة من الازدحام. تلقي 3 إقرارات مكررة يعني أن بعض الحزم لا تزال تصل إلى المتلقي (ازدحام خفيف)، لذلك يقوم TCP بتقليص نافذته للنصف (التعافي السريع). بينما انتهاء المهلة يعني عدم وصول أي إقرارات (ACKs) على الإطلاق، مما يشير إلى ازدحام شديد، لذلك يتصرف TCP بحذر من خلال إعادة ضبط نافذته إلى 1 MSS وإعادة الدخول في مرحلة البداية البطيئة."
    }
  ]
};
