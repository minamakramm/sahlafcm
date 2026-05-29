export const LECTURE = {
  subjectId: 'computer-networks',
  number: 5,
  title: 'Data Link Layer 1',
  titleAr: 'طبقة ارتباط البيانات 1',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Introduction to Data Link Layer (DLL)</h2>
<p>The data link layer is responsible for transferring datagrams from one node to an adjacent node over a link. It transforms the physical layer (a raw transmission facility) into a reliable link for hop-to-hop communication. A layer-2 packet is called a <strong>frame</strong>.</p>
<div class="callout callout-info">The DLL is typically implemented in the Network Interface Card (NIC) combining hardware, software, and firmware.</div>

<h2>Services of DLL</h2>
<ul>
<li><strong>Framing:</strong> Divides the stream of bits received from the network layer into manageable data units called frames.</li>
<li><strong>Addressing:</strong> Adds a header to the frame to define the physical addresses of the sender and receiver.</li>
<li><strong>Flow control:</strong> Imposes a mechanism to avoid overwhelming the receiver.</li>
<li><strong>Error control:</strong> Adds reliability to detect and retransmit damaged, duplicate, or lost frames.</li>
<li><strong>Media access control:</strong> Determines which device has control over the link at any given time.</li>
</ul>

<h2>Error Detection and Correction</h2>
<p>Types of errors include Single-bit error (one bit changed) and Burst error (two or more bits changed). Errors are mitigated using redundancy bits (EDC).</p>
<ul>
<li><strong>Single Bit Parity:</strong> Can only detect single-bit errors. Adds one parity bit to make the total number of 1s even (or odd).</li>
<li><strong>Two-Dimensional Bit Parity:</strong> Uses row and column parity bits to detect and <strong>correct</strong> single-bit errors by locating the exact flipped bit.</li>
</ul>

<h2>Flow and Error Control Protocols</h2>
<p>Error control in the DLL is based on Automatic Repeat Request (ARQ).</p>
<ul>
<li><strong>Stop-and-Wait ARQ:</strong> Sender sends one frame and waits for an ACK before sending the next. Receiver window size = 1.</li>
<li><strong>Go-Back-N ARQ:</strong> Sender can send multiple frames (up to window size) before receiving ACKs. If an error is detected, all frames from the erroneous one onward are retransmitted. Receiver window size = 1. Send window max size = 2<sup>m</sup> - 1.</li>
<li><strong>Selective Repeat ARQ:</strong> Only the erroneous frames are retransmitted. Uses individual ACKs/NAKs. Sender and Receiver window max size = 2<sup>m-1</sup>.</li>
</ul>

<div class="callout callout-warning">Piggybacking: When a frame is carrying data from A to B, it can also carry control information (ACK) about arrived frames from B to A, improving bidirectional efficiency.</div>`,
        bodyAr: `<h2>مقدمة إلى طبقة ارتباط البيانات (DLL)</h2>
<p>طبقة ارتباط البيانات مسؤولة عن نقل مخططات البيانات (datagrams) من عقدة إلى العقدة المجاورة عبر ارتباط. إنها تحول الطبقة المادية (منشأة إرسال خام) إلى ارتباط موثوق للاتصال من قفزة إلى قفزة. تسمى حزمة الطبقة الثانية <strong>إطارًا (Frame)</strong>.</p>
<div class="callout callout-info">يتم تنفيذ DLL عادةً في بطاقة واجهة الشبكة (NIC) التي تجمع بين الأجهزة والبرامج والبرامج الثابتة.</div>

<h2>خدمات طبقة ارتباط البيانات</h2>
<ul>
<li><strong>تأطير (Framing):</strong> يقسم تيار البتات المستلم من طبقة الشبكة إلى وحدات بيانات يمكن إدارتها تسمى إطارات.</li>
<li><strong>العنونة (Addressing):</strong> يضيف رأسًا للإطار لتحديد العناوين المادية للمرسل والمستقبل.</li>
<li><strong>التحكم في التدفق (Flow control):</strong> يفرض آلية لتجنب إغراق المستقبل بالبيانات.</li>
<li><strong>التحكم في الأخطاء (Error control):</strong> يضيف الموثوقية لاكتشاف وإعادة إرسال الإطارات التالفة أو المكررة أو المفقودة.</li>
<li><strong>التحكم في الوصول إلى الوسائط (MAC):</strong> يحدد الجهاز الذي يتحكم في الارتباط في أي وقت.</li>
</ul>

<h2>اكتشاف الأخطاء وتصحيحها</h2>
<p>تشمل أنواع الأخطاء خطأ بت واحد (تغير بت واحد) وخطأ اندفاعي (تغير بتين أو أكثر). يتم التخفيف من الأخطاء باستخدام بتات التكرار (EDC).</p>
<ul>
<li><strong>تكافؤ البت الواحد (Single Bit Parity):</strong> يمكنه فقط اكتشاف أخطاء البت الواحد.</li>
<li><strong>التكافؤ ثنائي الأبعاد (Two-Dimensional Bit Parity):</strong> يستخدم بتات التكافؤ للصف والعمود لاكتشاف و<strong>تصحيح</strong> أخطاء البت الواحد.</li>
</ul>

<h2>بروتوكولات التحكم في التدفق والأخطاء</h2>
<p>يعتمد التحكم في الأخطاء على طلب التكرار التلقائي (ARQ).</p>
<ul>
<li><strong>Stop-and-Wait ARQ:</strong> يرسل المرسل إطارًا واحدًا وينتظر ACK قبل إرسال التالي. حجم نافذة المستقبل = 1.</li>
<li><strong>Go-Back-N ARQ:</strong> يمكن للمرسل إرسال إطارات متعددة قبل تلقي ACKs. في حالة حدوث خطأ، يتم إعادة إرسال جميع الإطارات بدءًا من الإطار الخاطئ. حجم نافذة المستقبل = 1.</li>
<li><strong>Selective Repeat ARQ:</strong> يتم إعادة إرسال الإطارات الخاطئة فقط. حجم نافذة المرسل والمستقبل = 2<sup>m-1</sup>.</li>
</ul>

<div class="callout callout-warning">Piggybacking: عندما يحمل إطار بيانات من A إلى B، يمكنه أيضًا حمل معلومات تحكم (ACK) حول الإطارات الواصلة من B إلى A، مما يحسن الكفاءة ثنائية الاتجاه.</div>`
      }
    }
  ],

  summary: {
    points: [
      "The Data Link Layer transforms the physical layer into a reliable node-to-node link.",
      "DLL services include framing, addressing, flow control, error control, and MAC.",
      "Two-dimensional parity can both detect and correct single-bit errors.",
      "Go-Back-N ARQ retransmits the erroneous frame and all subsequent frames.",
      "Selective Repeat ARQ only retransmits the specifically damaged frames.",
      "Piggybacking improves bidirectional protocol efficiency by attaching ACKs to data frames."
    ],
    pointsAr: [
      "تحول طبقة ارتباط البيانات الطبقة المادية إلى ارتباط موثوق من عقدة إلى عقدة.",
      "تشمل خدمات DLL التأطير والعنونة والتحكم في التدفق والأخطاء والتحكم في الوصول للوسائط.",
      "يمكن للتكافؤ ثنائي الأبعاد اكتشاف وتصحيح أخطاء البت الواحد.",
      "يقوم بروتوكول Go-Back-N ARQ بإعادة إرسال الإطار الخاطئ وجميع الإطارات اللاحقة.",
      "يقوم بروتوكول Selective Repeat ARQ بإعادة إرسال الإطارات التالفة فقط.",
      "يعمل Piggybacking على تحسين كفاءة البروتوكول ثنائي الاتجاه عن طريق إرفاق ACKs بإطارات البيانات."
    ]
  },

  mcq: [
    {
      id: 'cn-l5-q1',
      question: "Which Data Link Layer service divides the stream of bits into manageable data units?",
      questionAr: "أي خدمة من خدمات طبقة ارتباط البيانات تقسم تيار البتات إلى وحدات بيانات يمكن إدارتها؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Addressing', isCorrect: false },
        { id: 'b', text: 'Flow Control', isCorrect: false },
        { id: 'c', text: 'Framing', isCorrect: true },
        { id: 'd', text: 'Error Control', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q2',
      question: "Which parity method is capable of both detecting and correcting a single-bit error?",
      questionAr: "أي طريقة تكافؤ قادرة على اكتشاف وتصحيح خطأ بت واحد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Single Bit Parity', isCorrect: false },
        { id: 'b', text: 'Two-Dimensional Bit Parity', isCorrect: true },
        { id: 'c', text: 'No Parity Check', isCorrect: false },
        { id: 'd', text: 'Cyclic Redundancy Check (CRC)', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q3',
      question: "[MID] What is the receiver window size in Go-Back-N ARQ?",
      questionAr: "[MID] ما هو حجم نافذة المستقبل في بروتوكول Go-Back-N ARQ؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '1', isCorrect: true },
        { id: 'b', text: 'N', isCorrect: false },
        { id: 'c', text: '2^(m-1)', isCorrect: false },
        { id: 'd', text: '2^m', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q4',
      question: "Where is the Data Link Layer typically implemented?",
      questionAr: "أين يتم تنفيذ طبقة ارتباط البيانات عادةً؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'In the network router exclusively', isCorrect: false },
        { id: 'b', text: 'In the application software', isCorrect: false },
        { id: 'c', text: 'In the Network Interface Card (NIC)', isCorrect: true },
        { id: 'd', text: 'In the CPU directly', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q5',
      question: "What type of error occurs when two or more bits in the data unit have changed?",
      questionAr: "ما نوع الخطأ الذي يحدث عندما يتغير بتان أو أكثر في وحدة البيانات؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Single-bit error', isCorrect: false },
        { id: 'b', text: 'Burst error', isCorrect: true },
        { id: 'c', text: 'Syntax error', isCorrect: false },
        { id: 'd', text: 'Framing error', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q6',
      question: "[MID] In Selective-Repeat ARQ with an m-bit sequence number, what is the maximum size of both send and receive windows?",
      questionAr: "[MID] في بروتوكول Selective-Repeat ARQ مع رقم تسلسل من m بت، ما هو الحد الأقصى لحجم نافذتي الإرسال والاستقبال؟",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: '2^m - 1', isCorrect: false },
        { id: 'b', text: '2^m', isCorrect: false },
        { id: 'c', text: '2^(m-1)', isCorrect: true },
        { id: 'd', text: '1', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q7',
      question: "Which ARQ protocol resends ONLY the damaged frame?",
      questionAr: "أي بروتوكول ARQ يعيد إرسال الإطار التالف فقط؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Stop-and-Wait ARQ', isCorrect: false },
        { id: 'b', text: 'Go-Back-N ARQ', isCorrect: false },
        { id: 'c', text: 'Selective Repeat ARQ', isCorrect: true },
        { id: 'd', text: 'Simplest Protocol', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q8',
      question: "What does Piggybacking improve in a network?",
      questionAr: "ما الذي يحسنه Piggybacking في الشبكة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Efficiency of bidirectional protocols', isCorrect: true },
        { id: 'b', text: 'Physical layer cabling speed', isCorrect: false },
        { id: 'c', text: 'Encryption strength', isCorrect: false },
        { id: 'd', text: 'Single bit error correction capability', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q9',
      question: "If a sender uses Go-Back-N ARQ and timer expires for frame 1 while frames 2 and 3 were already sent, what will it do?",
      questionAr: "إذا استخدم المرسل Go-Back-N ARQ وانتهى المؤقت للإطار 1 بينما تم إرسال الإطارين 2 و 3 بالفعل، فماذا سيفعل؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Retransmit only frame 1', isCorrect: false },
        { id: 'b', text: 'Retransmit frames 1, 2, and 3', isCorrect: true },
        { id: 'c', text: 'Retransmit only frame 3', isCorrect: false },
        { id: 'd', text: 'Wait indefinitely for an ACK', isCorrect: false }
      ]
    },
    {
      id: 'cn-l5-q10',
      question: "What is the primary mechanism of Error control in the Data Link Layer?",
      questionAr: "ما هي الآلية الأساسية للتحكم في الأخطاء في طبقة ارتباط البيانات؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Dropping all packets blindly', isCorrect: false },
        { id: 'b', text: 'Increasing bandwidth', isCorrect: false },
        { id: 'c', text: 'Automatic Repeat Request (ARQ)', isCorrect: true },
        { id: 'd', text: 'Routing to an alternate path', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l5-w1',
      question: "Briefly describe the services provided by the data link layer.",
      questionAr: "صف بإيجاز الخدمات التي تقدمها طبقة ارتباط البيانات.",
      modelAnswer: "The DLL provides Framing (dividing bits into frames), Addressing (adding physical sender/receiver addresses), Flow Control (preventing receiver overwhelm), Error Control (detecting and retransmitting lost/damaged frames via ARQ), and Media Access Control (determining link control).",
      modelAnswerAr: "توفر طبقة ارتباط البيانات التأطير (تقسيم البتات إلى إطارات)، والعنونة (إضافة العناوين المادية)، والتحكم في التدفق (منع إغراق المستقبل)، والتحكم في الأخطاء (اكتشاف وإعادة إرسال الإطارات التالفة)، والتحكم في الوصول إلى الوسائط."
    },
    {
      id: 'cn-l5-w2',
      question: "Compare and contrast the Go-Back-N ARQ Protocol with Selective-Repeat ARQ.",
      questionAr: "قارن بين بروتوكول Go-Back-N ARQ وبروتوكول Selective-Repeat ARQ.",
      modelAnswer: "Go-Back-N ARQ has a simple receiver (window size 1) that discards out-of-order frames, forcing the sender to retransmit the lost frame and all subsequent ones. Selective-Repeat ARQ has complex receivers that buffer out-of-order frames and requires the sender to retransmit ONLY the specific lost or damaged frame.",
      modelAnswerAr: "يحتوي Go-Back-N على مستقبل بسيط (حجم النافذة 1) يتخلص من الإطارات غير المرتبة، ويجبر المرسل على إعادة إرسال الإطار المفقود وجميع الإطارات اللاحقة. بينما يحتوي Selective-Repeat على مستقبل معقد يخزن الإطارات غير المرتبة ويتطلب من المرسل إعادة إرسال الإطار المفقود أو التالف فقط."
    },
    {
      id: 'cn-l5-w3',
      question: "Define piggybacking and its usefulness.",
      questionAr: "عَرِّف مصطلح Piggybacking وفائدته.",
      modelAnswer: "Piggybacking is the technique of attaching acknowledgment (ACK) information to outgoing data frames rather than sending separate control frames. It is highly useful because it saves bandwidth and improves the efficiency of bidirectional protocols.",
      modelAnswerAr: "Piggybacking هو تقنية إرفاق معلومات الإقرار (ACK) بإطارات البيانات الصادرة بدلاً من إرسال إطارات تحكم منفصلة. وهو مفيد للغاية لأنه يوفر النطاق الترددي ويحسن كفاءة البروتوكولات ثنائية الاتجاه."
    }
  ]
};
