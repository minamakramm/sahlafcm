export const LECTURE = {
  subjectId: 'computer-networks',
  number: 4,
  title: 'Data Transmission Modes and Switching',
  titleAr: 'أوضاع نقل البيانات والتبديل (Switching)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Data Transmission Modes</h2>
<p>Data transmission across a link can be accomplished in either <strong>Parallel</strong> or <strong>Serial</strong> mode:</p>
<ul>
  <li><strong>Parallel Transmission:</strong> Multiple bits (usually 8 bits) are sent simultaneously on different wires. Its major advantage is speed, but the disadvantage is high cost due to the number of wires needed.</li>
  <li><strong>Serial Transmission:</strong> One bit is sent at a time over a single channel. It reduces cost but is slower. Because internal device communication is parallel, serial transmission requires converters. Serial transmission occurs in three ways:
    <ol>
      <li><strong>Asynchronous:</strong> Data is sent in irregular units (bytes) with start and stop bits.</li>
      <li><strong>Synchronous:</strong> Bits are sent in a continuous stream without start/stop bits. The receiver is responsible for grouping them.</li>
      <li><strong>Isochronous:</strong> Used for real-time data, guaranteeing fixed delays between data arrivals (e.g., audio/video).</li>
    </ol>
  </li>
</ul>

<h2>Transmission Media</h2>
<p>Media can be broadly divided into two categories:</p>
<ul>
  <li><strong>Guided Media:</strong> The signal is contained by physical limits (e.g., Twisted-Pair for Ethernet, Coaxial Cable for TV, Fiber-Optic for high-speed backbones immune to interference).</li>
  <li><strong>Unguided Media:</strong> Signals broadcast through free space (wireless). This includes ground, sky, and line-of-sight propagation.</li>
</ul>

<h2>Data Switching Techniques</h2>
<p>To connect massive numbers of devices practically, networks use intermediate <strong>Switches</strong> rather than direct point-to-point links between every device.</p>
<ul>
  <li><strong>Circuit Switched Networks:</strong> A dedicated physical path is established between the sender and receiver before data transfer begins. Resources are reserved. It involves three phases: Setup, Data Transfer, and Teardown. Once setup, no addressing is needed for individual data frames. It operates at the Physical layer.</li>
  <li><strong>Message Switched Networks:</strong> Uses a store-and-forward method for the entire message as a single unit (no packetization). Causes very high latency.</li>
  <li><strong>Packet Switched - Datagram Networks:</strong> Messages are broken into packets. Each packet is treated independently, carries a full destination address, and may take a different path to the destination. There is no resource reservation or setup phase. It operates at the Network layer.</li>
  <li><strong>Packet Switched - Virtual Circuit Networks:</strong> A hybrid approach. Like circuit switching, it requires a setup phase to establish a fixed path for the connection. Like datagrams, data is packetized. Packets use a local address called a <strong>Virtual-Circuit Identifier (VCI)</strong> to follow the established path.</li>
</ul>`,
        bodyAr: `<h2>أوضاع نقل البيانات (Data Transmission Modes)</h2>
<p>يمكن إنجاز نقل البيانات عبر الرابط إما في وضع <strong>متوازي (Parallel)</strong> أو <strong>متسلسل (Serial)</strong>:</p>
<ul>
  <li><strong>النقل المتوازي:</strong> يتم إرسال بتات متعددة (عادة 8 بتات) في وقت واحد على أسلاك مختلفة. الميزة الرئيسية هي السرعة، ولكن العيب هو التكلفة العالية بسبب عدد الأسلاك المطلوبة.</li>
  <li><strong>النقل المتسلسل:</strong> يتم إرسال بتة واحدة في كل مرة عبر قناة واحدة. يقلل من التكلفة ولكنه أبطأ. نظرًا لأن اتصال الأجهزة الداخلي يكون متوازيًا، فإن النقل المتسلسل يتطلب محولات (converters). يحدث النقل المتسلسل بثلاث طرق:
    <ol>
      <li><strong>غير متزامن (Asynchronous):</strong> يتم إرسال البيانات في وحدات غير منتظمة (بايتات) مع بتات بداية وتوقف.</li>
      <li><strong>متزامن (Synchronous):</strong> يتم إرسال البتات في تدفق مستمر دون بتات بداية/توقف. يقع على عاتق المتلقي تجميعها.</li>
      <li><strong>متساوي الزمان (Isochronous):</strong> يُستخدم للبيانات في الوقت الفعلي، ويضمن تأخيرات ثابتة بين وصول البيانات (مثل الصوت/الفيديو).</li>
    </ol>
  </li>
</ul>

<h2>وسائط النقل (Transmission Media)</h2>
<p>يمكن تقسيم الوسائط بشكل عام إلى فئتين:</p>
<ul>
  <li><strong>الوسائط الموجهة (Guided Media):</strong> يتم احتواء الإشارة ضمن حدود مادية (مثل الكابل المزدوج المجدول (Twisted-Pair) لشبكة إيثرنت، والكابل المحوري (Coaxial) للتلفزيون، والألياف البصرية (Fiber-Optic) للشبكات الأساسية عالية السرعة المحصنة ضد التداخل).</li>
  <li><strong>الوسائط غير الموجهة (Unguided Media):</strong> إشارات تبث عبر الفضاء الحر (اللاسلكي). يشمل ذلك الانتشار الأرضي، والانتشار في السماء، وانتشار خط البصر (line-of-sight).</li>
</ul>

<h2>تقنيات تبديل البيانات (Data Switching)</h2>
<p>لربط أعداد هائلة من الأجهزة بشكل عملي، تستخدم الشبكات <strong>مبدلات (Switches)</strong> وسيطة بدلاً من الروابط المباشرة بين كل جهازين.</p>
<ul>
  <li><strong>شبكات تبديل الدوائر (Circuit Switched):</strong> يتم إنشاء مسار مادي مخصص بين المرسل والمستقبل قبل بدء نقل البيانات. يتم حجز الموارد. يتضمن ثلاث مراحل: الإعداد (Setup)، ونقل البيانات، والإنهاء (Teardown). بمجرد الإعداد، لا توجد حاجة إلى العنونة لإطارات البيانات الفردية. تعمل في الطبقة المادية (Physical Layer).</li>
  <li><strong>شبكات تبديل الرسائل (Message Switched):</strong> تستخدم طريقة التخزين والتوجيه (store-and-forward) للرسالة بأكملها كوحدة واحدة (لا يوجد تقسيم إلى حزم). تسبب وقت استجابة (Latency) مرتفع جدًا.</li>
  <li><strong>تبديل الحزم - شبكات مخططات البيانات (Datagram Networks):</strong> يتم تقسيم الرسائل إلى حزم. تُعامل كل حزمة بشكل مستقل، وتحمل عنوان وجهة كامل، وقد تتخذ مسارًا مختلفًا للوصول إلى الوجهة. لا يوجد حجز للموارد أو مرحلة إعداد. تعمل في طبقة الشبكة (Network Layer).</li>
  <li><strong>تبديل الحزم - شبكات الدوائر الافتراضية (Virtual Circuit):</strong> نهج هجين. مثل تبديل الدوائر، تتطلب مرحلة إعداد لإنشاء مسار ثابت للاتصال. ومثل Datagram، يتم تحزيم البيانات. تستخدم الحزم عنوانًا محليًا يسمى <strong>معرّف الدائرة الافتراضية (VCI)</strong> لاتباع المسار المحدد.</li>
</ul>`
      }
    }
  ],

  summary: {
    points: [
      "Parallel transmission sends multiple bits simultaneously (fast but expensive), while serial sends one bit at a time (slower but cheaper).",
      "Serial transmission can be asynchronous (irregular), synchronous (continuous stream), or isochronous (guaranteed fixed delays).",
      "Guided media (like Fiber-Optic cables) contain the signal physically, while unguided media broadcast wirelessly.",
      "Circuit Switching establishes a dedicated path with reserved resources before data transfer begins.",
      "Datagram Packet Switching treats each packet independently without prior path setup, meaning packets may take different routes.",
      "Virtual Circuit Switching is a hybrid that packetizes data but establishes a fixed path during a setup phase using a VCI.",
      "Circuit switching has Setup, Data Transfer, and Teardown phases, requiring no addressing during the actual data transfer."
    ],
    pointsAr: [
      "يرسل النقل المتوازي بتات متعددة في وقت واحد (سريع ولكنه مكلف)، بينما يرسل النقل المتسلسل بتة واحدة في كل مرة (أبطأ ولكنه أرخص).",
      "يمكن أن يكون النقل المتسلسل غير متزامن (غير منتظم)، متزامن (تدفق مستمر)، أو متساوي الزمان (تأخيرات ثابتة مضمونة).",
      "الوسائط الموجهة (مثل كابلات الألياف البصرية) تحتوي الإشارة ماديًا، بينما تبث الوسائط غير الموجهة لاسلكيًا.",
      "ينشئ تبديل الدوائر (Circuit Switching) مسارًا مخصصًا بموارد محجوزة قبل بدء نقل البيانات.",
      "يعامل تبديل حزم Datagram كل حزمة بشكل مستقل دون إعداد مسار مسبق، مما يعني أن الحزم قد تتخذ مسارات مختلفة.",
      "تبديل الدوائر الافتراضية هو نظام هجين يحزم البيانات ولكنه ينشئ مسارًا ثابتًا خلال مرحلة الإعداد باستخدام VCI.",
      "يحتوي تبديل الدوائر على مراحل إعداد، ونقل بيانات، وإنهاء، ولا يتطلب عنونة أثناء نقل البيانات الفعلي."
    ]
  },

  mcq: [
    {
      id: 'cn-l4-q1',
      question: "Which serial transmission mode is essential for real-time audio and video applications because it guarantees a fixed delay between packets?",
      questionAr: "أي وضع نقل متسلسل ضروري لتطبيقات الصوت والفيديو في الوقت الفعلي لأنه يضمن تأخيرًا ثابتًا بين الحزم؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Asynchronous', isCorrect: false },
        { id: 'b', text: 'Synchronous', isCorrect: false },
        { id: 'c', text: 'Isochronous', isCorrect: true },
        { id: 'd', text: 'Parallel', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q2',
      question: "[MID] In which switching technique are packets treated completely independently, potentially arriving out of order?",
      questionAr: "[MID] في أي تقنية تبديل يتم التعامل مع الحزم بشكل مستقل تمامًا، مما قد يؤدي إلى وصولها بترتيب غير صحيح؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Circuit Switching', isCorrect: false },
        { id: 'b', text: 'Message Switching', isCorrect: false },
        { id: 'c', text: 'Datagram Packet Switching', isCorrect: true },
        { id: 'd', text: 'Virtual Circuit Switching', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q3',
      question: "What is a major disadvantage of Parallel Data Transmission?",
      questionAr: "ما هو العيب الرئيسي لنقل البيانات المتوازي (Parallel Data Transmission)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Low transmission speed', isCorrect: false },
        { id: 'b', text: 'High cost due to the need for multiple wires', isCorrect: true },
        { id: 'c', text: 'Inability to connect to modern computers', isCorrect: false },
        { id: 'd', text: 'High likelihood of dropped packets', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q4',
      question: "Which transmission medium uses total internal reflection to guide light pulses and is highly immune to electromagnetic interference?",
      questionAr: "أي وسيط نقل يستخدم الانعكاس الداخلي الكلي لتوجيه نبضات الضوء وهو محصن للغاية ضد التداخل الكهرومغناطيسي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Twisted-Pair Cable', isCorrect: false },
        { id: 'b', text: 'Coaxial Cable', isCorrect: false },
        { id: 'c', text: 'Fiber-Optic Cable', isCorrect: true },
        { id: 'd', text: 'Unguided Radio Waves', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q5',
      question: "[MID] Which type of switching establishes a dedicated path and reserves resources (like bandwidth) before any data is transferred?",
      questionAr: "[MID] أي نوع من التبديل ينشئ مسارًا مخصصًا ويحجز الموارد (مثل النطاق الترددي) قبل نقل أي بيانات؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Circuit Switching', isCorrect: true },
        { id: 'b', text: 'Message Switching', isCorrect: false },
        { id: 'c', text: 'Datagram Packet Switching', isCorrect: false },
        { id: 'd', text: 'Statistical Time Division Switching', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q6',
      question: "In a Virtual Circuit network, what is used to identify the path of a packet locally between two switches?",
      questionAr: "في شبكة الدوائر الافتراضية (Virtual Circuit)، ما الذي يُستخدم لتحديد مسار الحزمة محليًا بين مفتاحين (Switches)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Global IP Address', isCorrect: false },
        { id: 'b', text: 'MAC Address', isCorrect: false },
        { id: 'c', text: 'Virtual-Circuit Identifier (VCI)', isCorrect: true },
        { id: 'd', text: 'Port Number', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q7',
      question: "Why does Circuit Switching not require address headers on the data being transferred during the data transfer phase?",
      questionAr: "لماذا لا يتطلب تبديل الدوائر (Circuit Switching) رؤوس عناوين (address headers) على البيانات المنقولة أثناء مرحلة نقل البيانات؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Because the switches use broadcast domains to flood data', isCorrect: false },
        { id: 'b', text: 'Because a dedicated physical path is already established during the setup phase', isCorrect: true },
        { id: 'c', text: 'Because the data is sent in a single massive frame', isCorrect: false },
        { id: 'd', text: 'Because addressing is handled by the receiver\'s MAC address automatically', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q8',
      question: "Which of the following contributes to the very high latency in Message Switched Networks?",
      questionAr: "أي مما يلي يساهم في وقت الاستجابة (latency) المرتفع جدًا في شبكات تبديل الرسائل (Message Switched)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The requirement to set up a dedicated circuit before transmission', isCorrect: false },
        { id: 'b', text: 'The store-and-forward method where each node must receive the entire, non-packetized message before forwarding it', isCorrect: true },
        { id: 'c', text: 'The collisions that happen constantly on the bus topology', isCorrect: false },
        { id: 'd', text: 'The complex routing algorithms used for small packets', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l4-w1',
      question: "Explain the main differences between Datagram Packet Switching and Virtual Circuit Switching.",
      questionAr: "اشرح الفروق الرئيسية بين تبديل حزم Datagram وتبديل الدوائر الافتراضية (Virtual Circuit).",
      modelAnswer: "In Datagram switching, each packet is treated independently, carries a full destination address, and may take different paths. There is no connection setup. In Virtual Circuit switching, a specific path is established during a setup phase before data transfer. All packets follow this exact path and carry a local Virtual-Circuit Identifier (VCI) rather than a full destination address.",
      modelAnswerAr: "في تبديل Datagram، تُعامل كل حزمة بشكل مستقل، وتحمل عنوان وجهة كامل، وقد تتخذ مسارات مختلفة. لا يوجد إعداد للاتصال. بينما في تبديل الدوائر الافتراضية، يتم إنشاء مسار محدد خلال مرحلة الإعداد قبل نقل البيانات. تتبع جميع الحزم هذا المسار الدقيق وتحمل معرّف دائرة افتراضية (VCI) محلي بدلاً من عنوان وجهة كامل."
    },
    {
      id: 'cn-l4-w2',
      question: "Why is 'Setup' and 'Teardown' necessary in a Circuit Switched Network, and why are addresses only needed during Setup?",
      questionAr: "لماذا يعد 'الإعداد' (Setup) و'الإنهاء' (Teardown) ضروريين في شبكة تبديل الدوائر، ولماذا تكون العناوين مطلوبة فقط أثناء مرحلة الإعداد؟",
      modelAnswer: "Setup is necessary to reserve physical resources (bandwidth, channels) and establish a continuous, dedicated path between the sender and receiver. Teardown is required to release these resources when communication ends. Addresses are only needed during the setup phase to route the initial connection request to the correct destination. Once the path is locked in, the data simply flows along the dedicated wire, so no further addressing is required.",
      modelAnswerAr: "الإعداد ضروري لحجز الموارد المادية (النطاق الترددي، القنوات) وإنشاء مسار مستمر ومخصص بين المرسل والمستقبل. الإنهاء مطلوب لتحرير هذه الموارد عند انتهاء الاتصال. العناوين مطلوبة فقط أثناء مرحلة الإعداد لتوجيه طلب الاتصال الأولي إلى الوجهة الصحيحة. بمجرد تثبيت المسار، تتدفق البيانات ببساطة عبر السلك المخصص، لذلك لا توجد حاجة إلى مزيد من العنونة."
    },
    {
      id: 'cn-l4-w3',
      question: "Describe the trade-off between Parallel and Serial Data Transmission modes.",
      questionAr: "صف المفاضلة (trade-off) بين وضعي نقل البيانات المتوازي (Parallel) والمتسلسل (Serial).",
      modelAnswer: "The trade-off is between speed and cost. Parallel transmission is much faster because it sends multiple bits simultaneously across multiple wires, making it ideal for short distances inside a computer. However, it is very expensive. Serial transmission is slower because it sends one bit at a time over a single channel, but it is vastly cheaper and more practical for long-distance network communications.",
      modelAnswerAr: "المفاضلة تتم بين السرعة والتكلفة. النقل المتوازي أسرع بكثير لأنه يرسل بتات متعددة في وقت واحد عبر أسلاك متعددة، مما يجعله مثاليًا للمسافات القصيرة داخل الكمبيوتر. ومع ذلك، فهو مكلف للغاية. النقل المتسلسل أبطأ لأنه يرسل بتة واحدة في كل مرة عبر قناة واحدة، ولكنه أرخص بكثير وأكثر عملية لاتصالات الشبكة لمسافات طويلة."
    }
  ]
};
