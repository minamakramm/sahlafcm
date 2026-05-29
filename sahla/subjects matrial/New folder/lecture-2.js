export const LECTURE = {
  subjectId: 'computer-networks',
  number: 2,
  title: 'Network Models',
  titleAr: 'نماذج الشبكات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>The Internet</h2>
<p>The Internet is defined as a network of interconnected networks. It evolved from the ARPANET in 1969. The purpose of the Internet is to interconnect end systems, called hosts (PCs, workstations, servers, mainframes).</p>
<ul>
<li><strong>Hosts:</strong> End systems connected to a network.</li>
<li><strong>Networks:</strong> Such as LANs and WANs connecting hosts.</li>
<li><strong>Routers:</strong> Devices that connect networks together.</li>
</ul>

<h2>Traditional Internet Operation</h2>
<p>The source host breaks the data to be sent into a sequence of packets (IP packets). Each packet includes a unique numeric address of the destination host (IP address). Based on this address, each packet travels through a series of routers and networks from source to destination.</p>

<h2>TCP/IP Protocol Architecture</h2>
<p>Communications involve three agents: applications, computers, and networks. The TCP/IP model divides communication tasks into five layers:</p>
<ol>
<li><strong>Physical layer:</strong> Transmits a bit stream over a physical medium.</li>
<li><strong>Data link layer:</strong> Delivers data units from one station to the next without errors. Uses physical (MAC) addresses.</li>
<li><strong>Network layer:</strong> Responsible for source-to-destination routing across multiple networks using Logical (IP) addresses.</li>
<li><strong>Transport layer:</strong> Assures process-to-process delivery of the entire message reliably. Uses Port addresses.</li>
<li><strong>Application layer:</strong> Contains logic to support various user applications. Uses Specific addresses (like URL/Email).</li>
</ol>
<div class="callout callout-info">Four levels of addresses are used in TCP/IP: Physical (Link) Addresses, Logical (IP) Addresses, Port Addresses, and Specific Addresses.</div>

<h2>The OSI Model</h2>
<p>Introduced in the 1970s by ISO. It has 7 layers: Application, Presentation, Session, Transport, Network, Data Link, and Physical.</p>
<div class="callout callout-warning">The Session and Presentation layers in the OSI model are missing from the TCP/IP protocol suite (they are handled within the TCP/IP Application layer).</div>`,
        bodyAr: `<h2>الإنترنت</h2>
<p>يُعرّف الإنترنت بأنه شبكة من الشبكات المترابطة. تطور من شبكة ARPANET في عام 1969. الغرض من الإنترنت هو ربط الأنظمة الطرفية، والتي تسمى المضيفين (أجهزة الكمبيوتر الشخصية، محطات العمل، الخوادم، الحواسيب المركزية).</p>
<ul>
<li><strong>المضيفون (Hosts):</strong> الأنظمة الطرفية المتصلة بالشبكة.</li>
<li><strong>الشبكات (Networks):</strong> مثل LAN و WAN التي تربط المضيفين.</li>
<li><strong>الموجهات (Routers):</strong> الأجهزة التي تربط الشبكات ببعضها البعض.</li>
</ul>

<h2>عملية الإنترنت التقليدية</h2>
<p>يقوم المضيف المصدر بتقسيم البيانات المراد إرسالها إلى سلسلة من الحزم (حزم IP). تتضمن كل حزمة عنوانًا رقميًا فريدًا للمضيف الوجهة (عنوان IP). بناءً على هذا العنوان، تنتقل كل حزمة عبر سلسلة من الموجهات والشبكات من المصدر إلى الوجهة.</p>

<h2>بنية بروتوكول TCP/IP</h2>
<p>تتضمن الاتصالات ثلاثة وكلاء: التطبيقات، وأجهزة الكمبيوتر، والشبكات. يقسم نموذج TCP/IP مهام الاتصال إلى خمس طبقات:</p>
<ol>
<li><strong>الطبقة المادية (Physical layer):</strong> تنقل تيارًا من البتات عبر وسيط مادي.</li>
<li><strong>طبقة ارتباط البيانات (Data link layer):</strong> تسلم وحدات البيانات من محطة إلى أخرى بدون أخطاء. تستخدم العناوين المادية (MAC).</li>
<li><strong>طبقة الشبكة (Network layer):</strong> مسؤولة عن التوجيه من المصدر إلى الوجهة عبر شبكات متعددة باستخدام العناوين المنطقية (IP).</li>
<li><strong>طبقة النقل (Transport layer):</strong> تضمن تسليم الرسالة بأكملها من عملية إلى عملية بشكل موثوق. تستخدم عناوين المنافذ (Port).</li>
<li><strong>طبقة التطبيق (Application layer):</strong> تحتوي على المنطق لدعم تطبيقات المستخدم المختلفة. تستخدم عناوين محددة (مثل URL/البريد الإلكتروني).</li>
</ol>
<div class="callout callout-info">تُستخدم أربعة مستويات من العناوين في TCP/IP: العناوين المادية (Link)، والعناوين المنطقية (IP)، وعناوين المنافذ، والعناوين المحددة.</div>

<h2>نموذج OSI</h2>
<p>تم تقديمه في السبعينيات من قبل ISO. يتكون من 7 طبقات: التطبيق، التقديم، الجلسة، النقل، الشبكة، ارتباط البيانات، والمادية.</p>
<div class="callout callout-warning">طبقتي الجلسة (Session) والتقديم (Presentation) في نموذج OSI مفقودتان من مجموعة بروتوكولات TCP/IP (يتم التعامل معهما داخل طبقة التطبيق في TCP/IP).</div>`
      }
    }
  ],

  summary: {
    points: [
      "The Internet is a network of interconnected networks designed to connect hosts via routers.",
      "Data is broken into IP packets, each carrying a destination IP address for routing.",
      "The TCP/IP model has 5 layers: Physical, Data Link, Network, Transport, and Application.",
      "Addressing includes Physical (MAC), Logical (IP), Port (process), and Specific (URL) addresses.",
      "The OSI model has 7 layers, but TCP/IP combines the top three (Application, Presentation, Session) into one."
    ],
    pointsAr: [
      "الإنترنت عبارة عن شبكة من الشبكات المترابطة المصممة لربط المضيفين عبر الموجهات.",
      "يتم تقسيم البيانات إلى حزم IP، تحمل كل منها عنوان IP للوجهة بغرض التوجيه.",
      "يتكون نموذج TCP/IP من 5 طبقات: المادية، ارتباط البيانات، الشبكة، النقل، والتطبيق.",
      "تتضمن العنونة عناوين مادية (MAC)، منطقية (IP)، منفذ (عملية)، ومحددة (URL).",
      "يحتوي نموذج OSI على 7 طبقات، لكن TCP/IP يدمج الطبقات الثلاث العليا (التطبيق، التقديم، الجلسة) في طبقة واحدة."
    ]
  },

  mcq: [
    {
      id: 'cn-l2-q1',
      question: "Which layer is responsible for routing data between devices attached to different networks?",
      questionAr: "أي طبقة مسؤولة عن توجيه البيانات بين الأجهزة المتصلة بشبكات مختلفة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Data Link Layer', isCorrect: false },
        { id: 'b', text: 'Network Layer', isCorrect: true },
        { id: 'c', text: 'Transport Layer', isCorrect: false },
        { id: 'd', text: 'Application Layer', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q2',
      question: "What type of address is used by the Data Link layer?",
      questionAr: "ما نوع العنوان الذي تستخدمه طبقة ارتباط البيانات؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Logical (IP) Address', isCorrect: false },
        { id: 'b', text: 'Port Address', isCorrect: false },
        { id: 'c', text: 'Physical (MAC) Address', isCorrect: true },
        { id: 'd', text: 'Specific Address', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q3',
      question: "[MID] Which two OSI layers are missing from the TCP/IP protocol suite?",
      questionAr: "[MID] ما هما الطبقتان في نموذج OSI المفقودتان من مجموعة بروتوكولات TCP/IP؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Transport and Network', isCorrect: false },
        { id: 'b', text: 'Session and Presentation', isCorrect: true },
        { id: 'c', text: 'Data Link and Physical', isCorrect: false },
        { id: 'd', text: 'Application and Session', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q4',
      question: "What is the length of a port address in the TCP/IP suite?",
      questionAr: "ما هو طول عنوان المنفذ في مجموعة TCP/IP؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '8 bits', isCorrect: false },
        { id: 'b', text: '16 bits', isCorrect: true },
        { id: 'c', text: '32 bits', isCorrect: false },
        { id: 'd', text: '48 bits', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q5',
      question: "Which layer is responsible for the process-to-process delivery of the entire message?",
      questionAr: "أي طبقة مسؤولة عن تسليم الرسالة بأكملها من عملية إلى عملية؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Physical Layer', isCorrect: false },
        { id: 'b', text: 'Data Link Layer', isCorrect: false },
        { id: 'c', text: 'Network Layer', isCorrect: false },
        { id: 'd', text: 'Transport Layer', isCorrect: true }
      ]
    },
    {
      id: 'cn-l2-q6',
      question: "[MID] How many layers does the OSI model have?",
      questionAr: "[MID] كم عدد الطبقات في نموذج OSI؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: '4 Layers', isCorrect: false },
        { id: 'b', text: '5 Layers', isCorrect: false },
        { id: 'c', text: '6 Layers', isCorrect: false },
        { id: 'd', text: '7 Layers', isCorrect: true }
      ]
    },
    {
      id: 'cn-l2-q7',
      question: "Which address uniquely identifies a host connected to the Internet?",
      questionAr: "أي عنوان يحدد بشكل فريد المضيف المتصل بالإنترنت؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Physical Address', isCorrect: false },
        { id: 'b', text: 'Logical (IP) Address', isCorrect: true },
        { id: 'c', text: 'Port Address', isCorrect: false },
        { id: 'd', text: 'Specific Address', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q8',
      question: "What does the Physical layer coordinate the transmission of?",
      questionAr: "ما الذي تنسق الطبقة المادية إرساله؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Data frames', isCorrect: false },
        { id: 'b', text: 'IP packets', isCorrect: false },
        { id: 'c', text: 'A bit stream over a physical medium', isCorrect: true },
        { id: 'd', text: 'Application messages', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q9',
      question: "Which of the following is an example of a Specific Address used by the Application layer?",
      questionAr: "أي مما يلي يعد مثالاً على عنوان محدد (Specific Address) تستخدمه طبقة التطبيق؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IPv4 Address', isCorrect: false },
        { id: 'b', text: 'MAC Address', isCorrect: false },
        { id: 'c', text: 'Universal Resource Locator (URL)', isCorrect: true },
        { id: 'd', text: 'Port 80', isCorrect: false }
      ]
    },
    {
      id: 'cn-l2-q10',
      question: "What kind of devices connect networks together in the Internet architecture?",
      questionAr: "ما نوع الأجهزة التي تربط الشبكات ببعضها البعض في بنية الإنترنت؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Hosts', isCorrect: false },
        { id: 'b', text: 'Routers', isCorrect: true },
        { id: 'c', text: 'Mainframes', isCorrect: false },
        { id: 'd', text: 'Workstations', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l2-w1',
      question: "List the main key elements of the Internet and describe briefly each one.",
      questionAr: "اذكر العناصر الأساسية الرئيسية للإنترنت واشرح كل منها بإيجاز.",
      modelAnswer: "The key elements are Hosts (end systems like PCs and servers), Networks (such as LANs and WANs connecting hosts), and Routers (devices that connect two or more networks to forward packets).",
      modelAnswerAr: "العناصر الرئيسية هي المضيفون (الأنظمة الطرفية مثل أجهزة الكمبيوتر الشخصية والخوادم)، والشبكات (مثل LAN و WAN التي تربط المضيفين)، والموجهات (الأجهزة التي تربط شبكتين أو أكثر لإعادة توجيه الحزم)."
    },
    {
      id: 'cn-l2-w2',
      question: "What is the purpose of Port Addresses in the TCP/IP model?",
      questionAr: "ما هو الغرض من عناوين المنافذ (Port Addresses) في نموذج TCP/IP؟",
      modelAnswer: "Port addresses (16 bits) are used by the Transport layer to identify and label different processes or applications running simultaneously on a single host computer.",
      modelAnswerAr: "تُستخدم عناوين المنافذ (16 بت) بواسطة طبقة النقل لتحديد وتمييز العمليات أو التطبيقات المختلفة التي تعمل في وقت واحد على جهاز كمبيوتر مضيف واحد."
    },
    {
      id: 'cn-l2-w3',
      question: "Explain the difference between a logical connection and a physical connection in protocol layering.",
      questionAr: "اشرح الفرق بين الاتصال المنطقي والاتصال المادي في طبقات البروتوكول.",
      modelAnswer: "A physical connection exists only at the lowest layer (Physical layer) where data physically travels. A logical connection is an abstract communication path between two identical peer layers at both sides (e.g., Application to Application), ignoring the underlying physical transfer.",
      modelAnswerAr: "يوجد الاتصال المادي فقط في الطبقة السفلى (الطبقة المادية) حيث تنتقل البيانات ماديًا. الاتصال المنطقي هو مسار اتصال مجرد بين طبقتين متناظرتين متطابقتين على كلا الجانبين (مثل من طبقة تطبيق إلى طبقة تطبيق)، متجاهلاً النقل المادي الأساسي."
    }
  ]
};
