export const LECTURE = {
  subjectId: 'computer-networks',
  number: 10,
  title: 'Transport Layer 1',
  titleAr: 'طبقة النقل 1',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Transport Layer Services</h2>
<p>While the Network Layer provides logical communication between <strong>hosts</strong>, the Transport Layer provides logical communication between <strong>processes</strong> (applications) running on those hosts.</p>
<p>The transport layer receives data from multiple application sockets, adds a header, and passes it to the network layer (<strong>Multiplexing</strong>). At the receiving end, it uses the header information to direct the segment to the correct application socket (<strong>Demultiplexing</strong>).</p>

<h2>UDP vs. TCP Demultiplexing</h2>
<ul>
  <li><strong>Connectionless (UDP):</strong> Demultiplexing uses a 2-tuple (Destination IP, Destination Port). All clients sending data to the same destination port are directed to the <strong>same single socket</strong> on the server.</li>
  <li><strong>Connection-Oriented (TCP):</strong> Demultiplexing uses a 4-tuple (Source IP, Source Port, Destination IP, Destination Port). Each new client connection gets a <strong>dedicated socket</strong> on the server.</li>
</ul>

<h2>User Datagram Protocol (UDP)</h2>
<p>UDP is a "bare-bones" protocol that provides an unreliable, connectionless service. It does not guarantee delivery, order, or provide congestion/flow control. However, its simplicity and small header (8 bytes) make it very fast, ideal for streaming media, gaming, VoIP, and DNS queries.</p>
<div class="callout callout-info">
  <strong>UDP Checksum:</strong> UDP uses a 1's complement sum of the segment to detect bit errors. If the receiver computes a different checksum, the packet is corrupted and discarded.
</div>

<h2>Principles of Reliable Data Transfer (RDT)</h2>
<p>Building reliable data transfer over an unreliable channel requires handling errors and losses:</p>
<ol>
  <li><strong>RDT 2.0 / 2.1:</strong> Handles bit errors using Checksums, ACKs (Acknowledge), and NAKs (Negative Acknowledge). RDT 2.1 adds Sequence Numbers (0 and 1) to prevent duplicate packets if an ACK/NAK is corrupted.</li>
  <li><strong>RDT 3.0:</strong> Handles packet loss by introducing a <strong>Countdown Timer</strong>. If an ACK is not received before the timeout, the sender retransmits the packet. This is a "Stop-and-Wait" protocol, which has very poor network utilization.</li>
</ol>

<h2>Pipelining: Go-Back-N vs. Selective Repeat</h2>
<p>To improve utilization, pipelining allows the sender to have multiple "in-flight" (unacknowledged) packets at once.</p>
<ul>
  <li><strong>Go-Back-N (GBN):</strong> The receiver accepts only in-order packets and sends <strong>cumulative ACKs</strong>. If a packet is lost, the receiver discards all subsequent out-of-order packets. On timeout, the sender retransmits the lost packet <strong>and all subsequent unacknowledged packets</strong>.</li>
  <li><strong>Selective Repeat (SR):</strong> The receiver buffers out-of-order packets and ACKs each packet individually. On timeout, the sender retransmits <strong>only the specifically lost packet</strong>.</li>
</ul>

<h2>Transmission Control Protocol (TCP)</h2>
<p>TCP is connection-oriented, reliable, and provides an in-order byte stream. Important concepts include:</p>
<ul>
  <li><strong>Sequence Numbers:</strong> Count the <em>bytes</em> of data, not the segments. The Seq # is the byte number of the first data byte in the segment.</li>
  <li><strong>Cumulative ACKs:</strong> The ACK number specifies the <em>next byte expected</em> by the receiver.</li>
  <li><strong>Timeout Calculation:</strong> TCP uses an Exponential Weighted Moving Average (EWMA) to calculate an <code>EstimatedRTT</code> to set a reliable timeout without reacting too strongly to temporary network spikes.</li>
  <li><strong>Fast Retransmit:</strong> If a sender receives <strong>3 duplicate ACKs</strong>, it assumes the next segment was lost and retransmits it immediately, without waiting for the slow timeout.</li>
</ul>`,
        bodyAr: `<h2>خدمات طبقة النقل</h2>
<p>بينما توفر طبقة الشبكة اتصالاً منطقيًا بين <strong>المضيفين (hosts)</strong>، توفر طبقة النقل اتصالاً منطقيًا بين <strong>العمليات (processes)</strong> (التطبيقات) التي تعمل على هؤلاء المضيفين.</p>
<p>تستقبل طبقة النقل البيانات من مآخذ تطبيقات متعددة، وتضيف رأسًا (header)، وتمررها إلى طبقة الشبكة (<strong>تجميع - Multiplexing</strong>). في الطرف المتلقي، تستخدم معلومات الرأس لتوجيه الجزء (segment) إلى مأخذ التطبيق الصحيح (<strong>فك التجميع - Demultiplexing</strong>).</p>

<h2>فك التجميع في UDP مقابل TCP</h2>
<ul>
  <li><strong>بدون اتصال (UDP):</strong> يستخدم فك التجميع مجموعة من عنصرين (IP الوجهة، منفذ الوجهة). يتم توجيه جميع العملاء الذين يرسلون بيانات إلى نفس منفذ الوجهة إلى <strong>نفس المأخذ الواحد</strong> على الخادم.</li>
  <li><strong>موجه نحو الاتصال (TCP):</strong> يستخدم فك التجميع مجموعة من 4 عناصر (IP المصدر، منفذ المصدر، IP الوجهة، منفذ الوجهة). يحصل كل اتصال عميل جديد على <strong>مأخذ مخصص</strong> على الخادم.</li>
</ul>

<h2>بروتوكول بيانات المستخدم (UDP)</h2>
<p>UDP هو بروتوكول أساسي يوفر خدمة غير موثوقة وبدون اتصال. لا يضمن التسليم أو الترتيب ولا يوفر التحكم في الازدحام/التدفق. ومع ذلك، فإن بساطته ورأسه الصغير (8 بايت) يجعله سريعًا جدًا، ومثاليًا لتدفق الوسائط، والألعاب، و VoIP، واستعلامات DNS.</p>
<div class="callout callout-info">
  <strong>المجموع الاختباري لـ UDP (Checksum):</strong> يستخدم UDP مجموع المكمل لـ 1 للجزء لاكتشاف أخطاء البت. إذا حسب المتلقي مجموعًا اختباريًا مختلفًا، فإن الحزمة تعتبر تالفة ويتم إسقاطها.
</div>

<h2>مبادئ النقل الموثوق للبيانات (RDT)</h2>
<p>يتطلب بناء نقل بيانات موثوق عبر قناة غير موثوقة التعامل مع الأخطاء والخسائر:</p>
<ol>
  <li><strong>RDT 2.0 / 2.1:</strong> يعالج أخطاء البت باستخدام المجاميع الاختبارية (Checksums)، وإقرارات الاستلام (ACKs)، والإقرارات السلبية (NAKs). يضيف RDT 2.1 أرقام التسلسل (0 و 1) لمنع الحزم المكررة في حالة تلف ACK/NAK.</li>
  <li><strong>RDT 3.0:</strong> يعالج فقدان الحزم عن طريق إدخال <strong>مؤقت تنازلي (Countdown Timer)</strong>. إذا لم يتم استلام ACK قبل انتهاء المهلة، يقوم المرسل بإعادة إرسال الحزمة. هذا بروتوكول "توقف وانتظر" (Stop-and-Wait)، والذي يتميز بضعف شديد في استخدام الشبكة.</li>
</ol>

<h2>تعدد الإرسال (Pipelining): Go-Back-N مقابل Selective Repeat</h2>
<p>لتحسين الاستخدام، يسمح تعدد الإرسال للمرسل بامتلاك حزم متعددة "قيد الإرسال" (غير مقر باستلامها) في وقت واحد.</p>
<ul>
  <li><strong>Go-Back-N (GBN):</strong> يقبل المتلقي الحزم المرتبة فقط ويرسل <strong>إقرارات استلام تراكمية (cumulative ACKs)</strong>. إذا فُقدت حزمة، يسقط المتلقي جميع الحزم غير المرتبة اللاحقة. عند انتهاء المهلة، يعيد المرسل إرسال الحزمة المفقودة <strong>وجميع الحزم اللاحقة التي لم يُقر باستلامها</strong>.</li>
  <li><strong>التكرار الانتقائي (Selective Repeat - SR):</strong> يقوم المتلقي بتخزين الحزم غير المرتبة مؤقتًا ويقر باستلام كل حزمة بشكل فردي. عند انتهاء المهلة، يعيد المرسل إرسال <strong>الحزمة المفقودة تحديدًا فقط</strong>.</li>
</ul>

<h2>بروتوكول التحكم في الإرسال (TCP)</h2>
<p>TCP هو بروتوكول موجه نحو الاتصال، موثوق، ويوفر تدفق بايتات مرتب. تشمل المفاهيم المهمة:</p>
<ul>
  <li><strong>أرقام التسلسل (Sequence Numbers):</strong> تحسب <em>البايتات</em> من البيانات، وليس الأجزاء (segments). رقم التسلسل هو رقم البايت لأول بايت بيانات في الجزء.</li>
  <li><strong>إقرارات الاستلام التراكمية (Cumulative ACKs):</strong> يحدد رقم ACK <em>البايت التالي المتوقع</em> من قبل المتلقي.</li>
  <li><strong>حساب المهلة:</strong> يستخدم TCP متوسط متحرك مرجح أسيًا (EWMA) لحساب <code>EstimatedRTT</code> لتعيين مهلة موثوقة دون التفاعل بقوة مع طفرات الشبكة المؤقتة.</li>
  <li><strong>إعادة الإرسال السريع (Fast Retransmit):</strong> إذا تلقى المرسل <strong>3 إقرارات استلام (ACKs) مكررة</strong>، فإنه يفترض أن الجزء التالي قد فُقد ويعيد إرساله فورًا، دون انتظار انتهاء المهلة البطيئة.</li>
</ul>`
      }
    }
  ],

  summary: {
    points: [
      "Transport layer multiplexes/demultiplexes data between application processes.",
      "UDP is connectionless and demultiplexes using a 2-tuple, sending traffic to a single socket.",
      "TCP is connection-oriented and demultiplexes using a 4-tuple, assigning a unique socket per connection.",
      "RDT 3.0 uses a countdown timer to handle packet loss, but stop-and-wait has poor network utilization.",
      "Pipelining improves network utilization by allowing multiple unacknowledged packets in flight.",
      "Go-Back-N retransmits all unacknowledged packets upon a loss timeout; Selective Repeat resends only the lost packet.",
      "TCP sequence numbers count bytes, not packets, and ACKs indicate the next expected byte.",
      "TCP Fast Retransmit immediately resends a lost segment upon receiving 3 duplicate ACKs."
    ],
    pointsAr: [
      "تقوم طبقة النقل بتجميع/فك تجميع البيانات بين عمليات التطبيق.",
      "UDP هو بروتوكول بدون اتصال ويفك التجميع باستخدام مجموعة من عنصرين، ويرسل حركة المرور إلى مأخذ واحد.",
      "TCP هو بروتوكول موجه نحو الاتصال ويفك التجميع باستخدام مجموعة من 4 عناصر، ويعين مأخذًا فريدًا لكل اتصال.",
      "يستخدم RDT 3.0 مؤقتًا تنازليًا للتعامل مع فقدان الحزم، لكن بروتوكول التوقف والانتظار لديه استخدام ضعيف للشبكة.",
      "يؤدي تعدد الإرسال (Pipelining) إلى تحسين استخدام الشبكة بالسماح بوجود حزم متعددة غير مقر باستلامها قيد الإرسال.",
      "يعيد Go-Back-N إرسال جميع الحزم التي لم يُقر باستلامها عند انتهاء مهلة الفقدان؛ يعيد Selective Repeat إرسال الحزمة المفقودة فقط.",
      "تحسب أرقام تسلسل TCP البايتات، وليس الحزم، وتشير إقرارات الاستلام (ACKs) إلى البايت التالي المتوقع.",
      "تعيد تقنية TCP Fast Retransmit (إعادة الإرسال السريع) فورًا إرسال الجزء المفقود عند تلقي 3 إقرارات استلام (ACKs) مكررة."
    ]
  },

  mcq: [
    {
      id: 'cn-l10-q1',
      question: "Which tuple is used by TCP to identify a connection and correctly demultiplex incoming segments to dedicated sockets?",
      questionAr: "ما هي المجموعة (tuple) التي يستخدمها TCP لتحديد الاتصال وفك تجميع الأجزاء الواردة بشكل صحيح إلى المآخذ المخصصة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '2-tuple (Destination IP, Destination Port)', isCorrect: false },
        { id: 'b', text: '2-tuple (Source Port, Destination Port)', isCorrect: false },
        { id: 'c', text: '4-tuple (Source IP, Source Port, Destination IP, Destination Port)', isCorrect: true },
        { id: 'd', text: '4-tuple (Source MAC, Source IP, Destination MAC, Destination IP)', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q2',
      question: "What does the UDP Checksum primarily do?",
      questionAr: "ما هو الدور الأساسي للمجموع الاختباري (Checksum) في UDP؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Prevents packets from being lost in the network', isCorrect: false },
        { id: 'b', text: 'Detects bit errors in the transmitted segment', isCorrect: true },
        { id: 'c', text: 'Corrects up to 2 bits of corrupted data', isCorrect: false },
        { id: 'd', text: 'Calculates the round-trip time for the packet', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q3',
      question: "[MID] Which version of Reliable Data Transfer (RDT) first introduces sequence numbers to solve the problem of corrupted ACKs/NAKs?",
      questionAr: "[MID] أي إصدار من بروتوكول النقل الموثوق للبيانات (RDT) يقدم أولاً أرقام التسلسل لحل مشكلة ACKs/NAKs التالفة؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'RDT 1.0', isCorrect: false },
        { id: 'b', text: 'RDT 2.0', isCorrect: false },
        { id: 'c', text: 'RDT 2.1', isCorrect: true },
        { id: 'd', text: 'RDT 3.0', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q4',
      question: "Why is 'Stop-and-Wait' (used in RDT 3.0) considered to have poor performance on high-speed networks?",
      questionAr: "لماذا يُعتبر بروتوكول 'توقف وانتظر' (المستخدم في RDT 3.0) ذو أداء ضعيف على الشبكات عالية السرعة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It uses 4-tuple demultiplexing which takes too much processing time', isCorrect: false },
        { id: 'b', text: 'The sender must wait for an ACK for every single packet, leaving the channel idle most of the time', isCorrect: true },
        { id: 'c', text: 'It sends too many duplicate ACKs, causing network congestion', isCorrect: false },
        { id: 'd', text: 'It requires a global routing table broadcast before sending data', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q5',
      question: "[MID] In the Go-Back-N (GBN) protocol, what happens when the timeout timer expires for the oldest unacknowledged packet?",
      questionAr: "[MID] في بروتوكول Go-Back-N (GBN)، ماذا يحدث عند انتهاء مؤقت المهلة لأقدم حزمة لم يتم إقرار استلامها؟",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'The sender retransmits only the single lost packet', isCorrect: false },
        { id: 'b', text: 'The sender retransmits the lost packet and all subsequent unacknowledged packets in the window', isCorrect: true },
        { id: 'c', text: 'The receiver discards the entire buffer and requests a connection reset', isCorrect: false },
        { id: 'd', text: 'The sender sends a NAK message to the receiver', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q6',
      question: "Which pipelining protocol requires the receiver to buffer out-of-order packets and send individual ACKs?",
      questionAr: "أي بروتوكول تعدد إرسال (pipelining) يتطلب من المتلقي تخزين الحزم غير المرتبة مؤقتًا وإرسال إقرارات استلام فردية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Selective Repeat (SR)', isCorrect: true },
        { id: 'b', text: 'Go-Back-N (GBN)', isCorrect: false },
        { id: 'c', text: 'RDT 2.2', isCorrect: false },
        { id: 'd', text: 'Stop-and-Wait', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q7',
      question: "In TCP, what does the Sequence Number refer to?",
      questionAr: "في TCP، إلى ماذا يشير رقم التسلسل (Sequence Number)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The segment count (e.g., segment 1, 2, 3)', isCorrect: false },
        { id: 'b', text: 'The byte number of the first data byte in the segment', isCorrect: true },
        { id: 'c', text: 'The total number of bytes sent so far', isCorrect: false },
        { id: 'd', text: 'The port number of the receiving application', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q8',
      question: "What triggers a TCP 'Fast Retransmit'?",
      questionAr: "ما الذي يؤدي إلى 'إعادة الإرسال السريع' (Fast Retransmit) في TCP؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Receiving a NAK message from the receiver', isCorrect: false },
        { id: 'b', text: 'The expiration of the timeout countdown timer', isCorrect: false },
        { id: 'c', text: 'Receiving 3 duplicate ACKs for the same data', isCorrect: true },
        { id: 'd', text: 'The EstimatedRTT dropping below the SampleRTT', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q9',
      question: "Why does TCP use an Exponential Weighted Moving Average (EWMA) for EstimatedRTT?",
      questionAr: "لماذا يستخدم TCP متوسط متحرك مرجح أسيًا (EWMA) لتقدير RTT؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To ensure the timeout value reacts instantly to any single delayed packet', isCorrect: false },
        { id: 'b', text: 'To smooth out short-term fluctuations and provide a stable timeout value', isCorrect: true },
        { id: 'c', text: 'To maximize the window size during selective repeat operations', isCorrect: false },
        { id: 'd', text: 'To calculate the checksum faster', isCorrect: false }
      ]
    },
    {
      id: 'cn-l10-q10',
      question: "Which of the following is true regarding TCP ACKs?",
      questionAr: "أي مما يلي صحيح فيما يتعلق بإقرارات استلام TCP (ACKs)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'TCP ACKs are individual, confirming only the packet they reply to.', isCorrect: false },
        { id: 'b', text: 'TCP ACKs are cumulative, indicating the next byte expected by the receiver.', isCorrect: true },
        { id: 'c', text: 'TCP ACKs carry negative acknowledgments (NAKs) for missing bytes.', isCorrect: false },
        { id: 'd', text: 'TCP ACKs are only sent when the timeout expires.', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l10-w1',
      question: "Explain the difference in demultiplexing between UDP and TCP.",
      questionAr: "اشرح الفرق في فك التجميع (Demultiplexing) بين UDP و TCP.",
      modelAnswer: "UDP uses connectionless demultiplexing based on a 2-tuple (Destination IP, Destination Port), meaning all clients sending to the same port share a single socket on the server. TCP uses connection-oriented demultiplexing based on a 4-tuple (Source IP, Source Port, Dest IP, Dest Port), allowing the server to create a dedicated socket for every unique client connection.",
      modelAnswerAr: "يستخدم UDP فك تجميع بدون اتصال يعتمد على 2-tuple (IP الوجهة، منفذ الوجهة)، مما يعني أن جميع العملاء الذين يرسلون إلى نفس المنفذ يتشاركون في مأخذ واحد على الخادم. يستخدم TCP فك تجميع موجه نحو الاتصال يعتمد على 4-tuple (IP المصدر، منفذ المصدر، IP الوجهة، منفذ الوجهة)، مما يسمح للخادم بإنشاء مأخذ مخصص لكل اتصال عميل فريد."
    },
    {
      id: 'cn-l10-w2',
      question: "Compare Go-Back-N (GBN) and Selective Repeat (SR) protocols in handling packet loss.",
      questionAr: "قارن بين بروتوكولات Go-Back-N (GBN) و Selective Repeat (SR) في التعامل مع فقدان الحزم.",
      modelAnswer: "In GBN, the receiver only accepts in-order packets and sends cumulative ACKs. If a packet is lost, the sender's timer expires, and it retransmits the lost packet along with all subsequent unacknowledged packets. In SR, the receiver buffers out-of-order packets and ACKs them individually. When a timeout occurs, the sender retransmits ONLY the specifically lost packet.",
      modelAnswerAr: "في GBN، يقبل المتلقي الحزم المرتبة فقط ويرسل إقرارات استلام تراكمية (cumulative ACKs). إذا فُقدت حزمة، ينتهي مؤقت المرسل، ويعيد إرسال الحزمة المفقودة مع جميع الحزم اللاحقة التي لم يُقر باستلامها. في SR، يقوم المتلقي بتخزين الحزم غير المرتبة مؤقتًا ويقر باستلامها بشكل فردي. عند حدوث مهلة، يعيد المرسل إرسال الحزمة المفقودة تحديدًا فقط."
    },
    {
      id: 'cn-l10-w3',
      question: "What is TCP Fast Retransmit and why is it used?",
      questionAr: "ما هو إعادة الإرسال السريع في TCP (TCP Fast Retransmit) ولماذا يُستخدم؟",
      modelAnswer: "TCP Fast Retransmit is a mechanism used to detect and recover from packet loss quickly, without waiting for the slow retransmission timeout (RTO). When a receiver misses a segment but receives subsequent segments, it continuously sends duplicate ACKs for the last in-order byte. If the sender receives 3 duplicate ACKs, it immediately retransmits the missing segment.",
      modelAnswerAr: "إعادة الإرسال السريع في TCP هو آلية تُستخدم لاكتشاف فقدان الحزم والتعافي منه بسرعة، دون انتظار مهلة إعادة الإرسال البطيئة (RTO). عندما يفتقد المتلقي جزءًا ولكنه يتلقى الأجزاء اللاحقة، فإنه يرسل باستمرار إقرارات استلام مكررة (duplicate ACKs) لآخر بايت مرتب. إذا تلقى المرسل 3 إقرارات استلام مكررة، فإنه يعيد فورًا إرسال الجزء المفقود."
    }
  ]
};
