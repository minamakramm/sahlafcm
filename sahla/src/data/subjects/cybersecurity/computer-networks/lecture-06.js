export const LECTURE = {
  subjectId: 'computer-networks',
  number: 6,
  title: 'Data Link Layer 2',
  titleAr: 'طبقة ارتباط البيانات 2',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Multiple Access Links and Protocols</h2>
<p>There are two main types of links: Point-to-point (direct connection between two devices, e.g., PPP) and Broadcast (shared medium where multiple devices can hear transmissions, e.g., Ethernet, Wi-Fi). A <strong>Multiple Access Protocol</strong> determines how nodes share a broadcast channel to avoid collisions.</p>

<h2>Taxonomy of Multiple Access Protocols</h2>
<ul>
  <li><strong>Channel Partitioning:</strong> Divides the channel into smaller pieces (TDMA for time, FDMA for frequency, CDMA for code). It is efficient at high load but inefficient at low load.</li>
  <li><strong>Random Access:</strong> Nodes compete for access and transmit when they have data. Allows collisions and uses recovery strategies. Efficient at low load but suffers from collisions at high load.
    <ul>
      <li><strong>Slotted ALOHA:</strong> Nodes transmit only at slot beginnings. Max efficiency = 37%.</li>
      <li><strong>Pure ALOHA:</strong> Unslotted, transmit anytime. Max efficiency = 18%.</li>
      <li><strong>CSMA/CD:</strong> Carrier Sense Multiple Access with Collision Detection (Ethernet). Listens before and while transmitting. If collision occurs, sends jamming signal, stops, and waits a random backoff time.</li>
      <li><strong>CSMA/CA:</strong> Carrier Sense Multiple Access with Collision Avoidance (Wi-Fi). Uses RTS/CTS (Request/Clear To Send) and acknowledgments (ACK) to avoid collisions, solving the <em>hidden terminal problem</em>.</li>
    </ul>
  </li>
  <li><strong>Controlled Access ("Taking Turns"):</strong> Combines advantages of both.
    <ul>
      <li><strong>Polling:</strong> Master node invites slave nodes to transmit. (Concerns: polling overhead, latency, single point of failure).</li>
      <li><strong>Token Passing:</strong> A control token is passed sequentially. Only the node with the token can transmit. (Concerns: token overhead, latency, single point of failure).</li>
    </ul>
  </li>
</ul>

<h2>MAC Addresses and ARP</h2>
<p>An <strong>IP Address</strong> is a logical address (32-bit for IPv4) used for routing between networks. A <strong>MAC Address</strong> is a physical address (48-bit) used for delivering frames within the same local network (LAN).</p>
<div class="callout callout-info">
  <strong>Address Resolution Protocol (ARP):</strong> Resolves an IP address into a MAC address. When a device wants to send data to an IP, it broadcasts an ARP Request ("Who has this IP?"). The target replies with its MAC address. ARP is used only within the same LAN.
</div>

<h2>Switches vs Routers</h2>
<p>A <strong>Switch</strong> connects devices within the same LAN and forwards frames using MAC addresses. A <strong>Router</strong> connects different networks together and forwards packets using IP addresses.</p>`,
        bodyAr: `<h2>ارتباطات وبروتوكولات الوصول المتعدد</h2>
<p>هناك نوعان رئيسيان من الارتباطات: نقطة إلى نقطة (اتصال مباشر بين جهازين، مثل PPP) والبث (وسيط مشترك حيث يمكن لأجهزة متعددة سماع الإرسال، مثل إيثرنت، واي فاي). يحدد <strong>بروتوكول الوصول المتعدد (Multiple Access Protocol)</strong> كيفية مشاركة العقد لقناة بث لتجنب التصادمات.</p>

<h2>تصنيف بروتوكولات الوصول المتعدد</h2>
<ul>
  <li><strong>تقسيم القناة (Channel Partitioning):</strong> يقسم القناة إلى أجزاء أصغر (TDMA للوقت، FDMA للتردد، CDMA للرمز). إنه فعال في الحمل العالي ولكنه غير فعال في الحمل المنخفض.</li>
  <li><strong>الوصول العشوائي (Random Access):</strong> تتنافس العقد للوصول وترسل عندما يكون لديها بيانات. يسمح بالتصادمات ويستخدم استراتيجيات الاسترداد. فعال في الحمل المنخفض ولكنه يعاني من التصادمات في الحمل العالي.
    <ul>
      <li><strong>Slotted ALOHA:</strong> ترسل العقد فقط في بداية الفترات الزمنية (slots). الحد الأقصى للكفاءة = 37٪.</li>
      <li><strong>Pure ALOHA:</strong> غير مقسم، ترسل في أي وقت. الحد الأقصى للكفاءة = 18٪.</li>
      <li><strong>CSMA/CD:</strong> (الإيثرنت). يستمع قبل وأثناء الإرسال. في حالة حدوث تصادم، يرسل إشارة تشويش، ويتوقف، وينتظر وقت تراجع عشوائي.</li>
      <li><strong>CSMA/CA:</strong> (الواي فاي). يستخدم RTS/CTS و (ACK) لتجنب التصادمات، وحل <em>مشكلة المحطة المخفية (hidden terminal problem)</em>.</li>
    </ul>
  </li>
  <li><strong>الوصول المتحكم به ("تبادل الأدوار"):</strong> يجمع بين مزايا الاثنين.
    <ul>
      <li><strong>Polling:</strong> تدعو العقدة الرئيسية العقد التابعة للإرسال. (مخاوف: عبء الاستطلاع، زمن الوصول، نقطة فشل واحدة).</li>
      <li><strong>Token Passing:</strong> يتم تمرير رمز تحكم بالتسلسل. فقط العقدة التي تمتلك الرمز يمكنها الإرسال.</li>
    </ul>
  </li>
</ul>

<h2>عناوين MAC وبروتوكول ARP</h2>
<p><strong>عنوان IP</strong> هو عنوان منطقي (32 بت لـ IPv4) يستخدم للتوجيه بين الشبكات. <strong>عنوان MAC</strong> هو عنوان مادي (48 بت) يستخدم لتسليم الإطارات داخل نفس الشبكة المحلية (LAN).</p>
<div class="callout callout-info">
  <strong>بروتوكول تحليل العناوين (ARP):</strong> يحلل عنوان IP إلى عنوان MAC. عندما يريد جهاز إرسال بيانات إلى IP، فإنه يبث طلب ARP ("من لديه هذا الـ IP؟"). يرد الهدف بعنوان MAC الخاص به. يستخدم ARP فقط داخل نفس الشبكة المحلية.
</div>

<h2>المحولات (Switches) مقابل الموجهات (Routers)</h2>
<p>يربط <strong>المحول (Switch)</strong> الأجهزة داخل نفس الشبكة المحلية (LAN) ويعيد توجيه الإطارات باستخدام عناوين MAC. بينما يربط <strong>الموجه (Router)</strong> شبكات مختلفة معًا ويعيد توجيه الحزم باستخدام عناوين IP.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Multiple Access Protocols manage how nodes share a broadcast link.",
      "CSMA/CD is used in wired Ethernet to detect collisions.",
      "CSMA/CA is used in wireless Wi-Fi to avoid collisions using RTS/CTS and ACKs.",
      "IP addresses are logical and used for routing between different networks.",
      "MAC addresses are physical, flat, and used for routing within the same LAN.",
      "ARP resolves an IP address to a MAC address by broadcasting a request on the LAN.",
      "Switches forward frames based on MAC addresses within a LAN; routers forward packets based on IP addresses between LANs."
    ],
    pointsAr: [
      "تدير بروتوكولات الوصول المتعدد كيفية مشاركة العقد لارتباط البث.",
      "يُستخدم CSMA/CD في إيثرنت السلكي لاكتشاف التصادمات.",
      "يُستخدم CSMA/CA في شبكة Wi-Fi اللاسلكية لتجنب التصادمات باستخدام RTS/CTS و ACKs.",
      "عناوين IP منطقية وتستخدم للتوجيه بين الشبكات المختلفة.",
      "عناوين MAC مادية ومسطحة وتستخدم لتوجيه البيانات داخل نفس الشبكة المحلية.",
      "يحلل ARP عنوان IP إلى عنوان MAC عن طريق بث طلب على الشبكة المحلية.",
      "تقوم المحولات (Switches) بتوجيه الإطارات بناءً على عناوين MAC داخل الشبكة المحلية؛ تقوم الموجهات (Routers) بتوجيه الحزم بناءً على عناوين IP بين الشبكات."
    ]
  },

  mcq: [
    {
      id: 'cn-l6-q1',
      question: "Which of the following Multiple Access Protocols divides the channel into smaller pieces based on time?",
      questionAr: "أي من بروتوكولات الوصول المتعدد التالية يقسم القناة إلى أجزاء أصغر بناءً على الوقت؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'FDMA', isCorrect: false },
        { id: 'b', text: 'TDMA', isCorrect: true },
        { id: 'c', text: 'CDMA', isCorrect: false },
        { id: 'd', text: 'CSMA', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q2',
      question: "What is the maximum efficiency of Slotted ALOHA?",
      questionAr: "ما هو الحد الأقصى لكفاءة بروتوكول Slotted ALOHA؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '18%', isCorrect: false },
        { id: 'b', text: '37%', isCorrect: true },
        { id: 'c', text: '50%', isCorrect: false },
        { id: 'd', text: '100%', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q3',
      question: "[MID] Which protocol is typically used in IEEE 802.11 (Wi-Fi) to handle collisions?",
      questionAr: "[MID] أي بروتوكول يُستخدم عادةً في IEEE 802.11 (Wi-Fi) للتعامل مع التصادمات؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'CSMA/CD', isCorrect: false },
        { id: 'b', text: 'CSMA/CA', isCorrect: true },
        { id: 'c', text: 'Slotted ALOHA', isCorrect: false },
        { id: 'd', text: 'Token Passing', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q4',
      question: "What does ARP (Address Resolution Protocol) do?",
      questionAr: "ما هي وظيفة بروتوكول ARP (بروتوكول تحليل العناوين)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Finds the IP address given a MAC address', isCorrect: false },
        { id: 'b', text: 'Finds the MAC address given an IP address', isCorrect: true },
        { id: 'c', text: 'Routes packets across different networks', isCorrect: false },
        { id: 'd', text: 'Assigns an IP address to a new device', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q5',
      question: "What is the broadcast MAC address used in Ethernet to send a frame to all devices on a LAN?",
      questionAr: "ما هو عنوان MAC للبث المستخدم في شبكة إيثرنت لإرسال إطار إلى جميع الأجهزة على شبكة LAN؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '00-00-00-00-00-00', isCorrect: false },
        { id: 'b', text: '255.255.255.255', isCorrect: false },
        { id: 'c', text: 'FF-FF-FF-FF-FF-FF', isCorrect: true },
        { id: 'd', text: 'AA-BB-CC-DD-EE-FF', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q6',
      question: "[MID] Which mechanism solves the Hidden Terminal Problem in CSMA/CA?",
      questionAr: "[MID] ما هي الآلية التي تحل مشكلة المحطة المخفية (Hidden Terminal Problem) في CSMA/CA؟",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Collision Detection (CD)', isCorrect: false },
        { id: 'b', text: 'RTS/CTS exchange', isCorrect: true },
        { id: 'c', text: 'Token Passing', isCorrect: false },
        { id: 'd', text: 'Exponential Backoff alone', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q7',
      question: "Which of the following represents a drawback of 'Taking Turns' MAC protocols (like Token Passing)?",
      questionAr: "أي مما يلي يمثل عيبًا في بروتوكولات الوصول المتعدد 'تبادل الأدوار' (مثل Token Passing)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'High collision rates', isCorrect: false },
        { id: 'b', text: 'Single point of failure and latency', isCorrect: true },
        { id: 'c', text: 'Requires RTS/CTS', isCorrect: false },
        { id: 'd', text: 'Inability to work under high load', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q8',
      question: "A network switch operates primarily using which type of address?",
      questionAr: "يعمل محول الشبكة (Switch) بشكل أساسي باستخدام أي نوع من العناوين؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IP address', isCorrect: false },
        { id: 'b', text: 'MAC address', isCorrect: true },
        { id: 'c', text: 'Port number', isCorrect: false },
        { id: 'd', text: 'URL', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q9',
      question: "If Host A is sending a packet to Host B on a DIFFERENT network, what destination MAC address does Host A place in the Ethernet frame?",
      questionAr: "إذا كان المضيف A يرسل حزمة إلى المضيف B على شبكة مختلفة، فما هو عنوان MAC للوجهة الذي يضعه المضيف A في إطار إيثرنت؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Host B’s MAC address', isCorrect: false },
        { id: 'b', text: 'The Switch’s MAC address', isCorrect: false },
        { id: 'c', text: 'The Router’s (Default Gateway’s) MAC address', isCorrect: true },
        { id: 'd', text: 'The Broadcast MAC address', isCorrect: false }
      ]
    },
    {
      id: 'cn-l6-q10',
      question: "Why is an IP address considered hierarchical and NOT portable?",
      questionAr: "لماذا يُعتبر عنوان IP هرميًا وليس محمولاً (Not Portable)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It is burned into the NIC permanently.', isCorrect: false },
        { id: 'b', text: 'It depends on the subnet/location the device is connected to.', isCorrect: true },
        { id: 'c', text: 'It changes every time the computer reboots.', isCorrect: false },
        { id: 'd', text: 'It is 48 bits long.', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l6-w1',
      question: "Differentiate between logical and physical (MAC) addresses.",
      questionAr: "فرق بين العناوين المنطقية والعناوين المادية (MAC).",
      modelAnswer: "An IP (logical) address is hierarchical, location-dependent, and used to route packets across different networks (the Internet). A MAC (physical) address is a flat, 48-bit address burned into the NIC, is portable, and is used to deliver frames within the same local network (LAN).",
      modelAnswerAr: "عنوان IP (المنطقي) هو عنوان هرمي يعتمد على الموقع ويستخدم لتوجيه الحزم عبر شبكات مختلفة (الإنترنت). بينما عنوان MAC (المادي) هو عنوان مسطح مكون من 48 بت محفور في بطاقة الشبكة (NIC)، وهو محمول، ويستخدم لتسليم الإطارات داخل نفس الشبكة المحلية (LAN)."
    },
    {
      id: 'cn-l6-w2',
      question: "Why is there a need for the ARP protocol?",
      questionAr: "لماذا توجد حاجة إلى بروتوكول ARP؟",
      modelAnswer: "ARP is needed because network-layer routing uses IP addresses, but data-link layer transmission on a LAN requires MAC addresses. ARP dynamically resolves a known destination IP address into its corresponding unknown MAC address so the frame can be successfully delivered on the local network.",
      modelAnswerAr: "هناك حاجة إلى ARP لأن التوجيه في طبقة الشبكة يستخدم عناوين IP، لكن الإرسال في طبقة ارتباط البيانات على شبكة LAN يتطلب عناوين MAC. يقوم ARP بتحليل عنوان IP المعروف للوجهة ديناميكيًا إلى عنوان MAC المجهول المقابل له حتى يمكن تسليم الإطار بنجاح على الشبكة المحلية."
    },
    {
      id: 'cn-l6-w3',
      question: "Explain how CSMA/CA uses RTS/CTS to avoid collisions.",
      questionAr: "اشرح كيف يستخدم CSMA/CA آلية RTS/CTS لتجنب التصادمات.",
      modelAnswer: "Before sending a large data frame, the sender transmits a short Request To Send (RTS) packet. The receiver replies with a Clear To Send (CTS) packet, which is broadcast to all nearby nodes. Other nodes hear the CTS and defer their transmissions, effectively reserving the channel and avoiding collisions (especially from hidden terminals).",
      modelAnswerAr: "قبل إرسال إطار بيانات كبير، يقوم المرسل بإرسال حزمة طلب إرسال (RTS) قصيرة. يرد المستقبل بحزمة جاهز للإرسال (CTS)، والتي يتم بثها إلى جميع العقد القريبة. تسمع العقد الأخرى CTS وتؤجل إرسالها، مما يؤدي فعليًا إلى حجز القناة وتجنب التصادمات (خاصة من المحطات المخفية)."
    }
  ]
};
