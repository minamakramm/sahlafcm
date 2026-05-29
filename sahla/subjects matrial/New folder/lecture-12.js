export const LECTURE = {
  subjectId: 'computer-networks',
  number: 12,
  title: 'Application Layer & Network Security',
  titleAr: 'طبقة التطبيقات وأمن الشبكات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Web and HTTP</h2>
<p>The Web's application-layer protocol is <strong>HTTP (Hypertext Transfer Protocol)</strong>. A web page consists of a base HTML file that includes referenced objects (e.g., images), each addressable by a <strong>URL</strong>. HTTP uses a client-server model and operates over TCP.</p>
<ul>
  <li><strong>Non-Persistent HTTP:</strong> At most one object is sent over a TCP connection before the server closes it. This requires <strong>2 RTTs per object</strong> (1 for TCP setup, 1 for HTTP request/response), which is highly inefficient for pages with many objects.</li>
  <li><strong>Persistent HTTP:</strong> Multiple objects can be sent over a single TCP connection, avoiding repeated TCP handshakes. This is the default in modern HTTP versions (HTTP/1.1, HTTP/2).</li>
</ul>

<h2>HTTP Cookies</h2>
<p>Because HTTP is a <strong>stateless</strong> protocol (the server doesn't remember previous requests), <strong>Cookies</strong> are used to maintain state. They allow websites to remember user logins, shopping carts, and browsing history. However, they also raise privacy concerns due to user tracking and profiling.</p>

<h2>Web Caches (Proxy Servers)</h2>
<p>A Web Cache is an intermediary server that stores copies of recently requested objects. When a browser requests an object, it goes to the cache first.</p>
<ul>
  <li>If the object is found (<strong>Cache Hit</strong>), the cache returns it immediately, drastically reducing response time.</li>
  <li>If not found (<strong>Cache Miss</strong>), the cache requests it from the origin server, saves a copy, and forwards it to the client.</li>
</ul>
<div class="callout callout-info">
  <strong>Why Cache?</strong> Caching is a highly cost-effective way to reduce response time, decrease traffic on the access link, and improve overall Internet scalability without having to pay for expensive bandwidth upgrades.
</div>

<h2>Network Security: Malware & Attacks</h2>
<p>The Internet was not originally designed with security in mind. Attackers use various methods to compromise networks:</p>
<ul>
  <li><strong>Trojan Horse:</strong> Malicious code hidden inside seemingly useful software. Requires user installation and does not self-replicate.</li>
  <li><strong>Virus:</strong> Attaches to legitimate files and requires user interaction to execute. Self-replicating.</li>
  <li><strong>Worm:</strong> A standalone program that spreads automatically over networks without user interaction.</li>
  <li><strong>DDoS (Distributed Denial of Service):</strong> Attackers use a <em>Botnet</em> (a network of compromised hosts) to flood a target with traffic, overwhelming its bandwidth or CPU.</li>
  <li><strong>Packet Sniffing:</strong> On shared/broadcast media (like Wi-Fi), a Network Interface Card in <em>promiscuous mode</em> can capture and read packets intended for others. Prevented by using encryption (HTTPS).</li>
  <li><strong>IP Spoofing:</strong> Sending a packet with a fake source IP address to deceive the receiver.</li>
</ul>

<h2>Intrusion Detection Systems (IDS)</h2>
<ol>
  <li><strong>Signature-based:</strong> Compares traffic against a database of known attack patterns. Highly accurate for known threats but cannot detect new (zero-day) attacks.</li>
  <li><strong>Anomaly-based:</strong> Uses statistics or AI to learn "normal" behavior and flags deviations. Can detect zero-day attacks but has a higher rate of false positives.</li>
</ol>`,
        bodyAr: `<h2>الويب وبروتوكول HTTP</h2>
<p>بروتوكول طبقة التطبيقات للويب هو <strong>HTTP (بروتوكول نقل النص التشعبي)</strong>. تتكون صفحة الويب من ملف HTML أساسي يتضمن كائنات مرجعية (مثل الصور)، يمكن الوصول إلى كل منها بواسطة <strong>URL</strong>. يستخدم HTTP نموذج خادم-عميل (Client-Server) ويعمل فوق TCP.</p>
<ul>
  <li><strong>HTTP غير المستمر (Non-Persistent):</strong> يتم إرسال كائن واحد على الأكثر عبر اتصال TCP قبل أن يغلقه الخادم. يتطلب هذا <strong>2 RTT لكل كائن</strong> (1 لإعداد TCP، 1 لطلب/استجابة HTTP)، وهو غير فعال للغاية للصفحات التي تحتوي على العديد من الكائنات.</li>
  <li><strong>HTTP المستمر (Persistent):</strong> يمكن إرسال كائنات متعددة عبر اتصال TCP واحد، مما يتجنب مصافحات TCP المتكررة. هذا هو الوضع الافتراضي في إصدارات HTTP الحديثة.</li>
</ul>

<h2>ملفات تعريف الارتباط (HTTP Cookies)</h2>
<p>نظرًا لأن HTTP هو بروتوكول <strong>عديم الحالة (stateless)</strong> (لا يتذكر الخادم الطلبات السابقة)، يتم استخدام <strong>ملفات تعريف الارتباط (Cookies)</strong> للحفاظ على الحالة. تسمح للمواقع بتذكر تسجيلات الدخول للمستخدمين وعربات التسوق وسجل التصفح. ومع ذلك، فإنها تثير أيضًا مخاوف تتعلق بالخصوصية بسبب تتبع المستخدمين وبناء ملفات تعريف لهم.</p>

<h2>مخابئ الويب (الخوادم الوكيلة - Web Caches)</h2>
<p>مخبأ الويب هو خادم وسيط يخزن نسخًا من الكائنات المطلوبة مؤخرًا. عندما يطلب المتصفح كائنًا، يذهب إلى المخبأ أولاً.</p>
<ul>
  <li>إذا تم العثور على الكائن (<strong>Cache Hit</strong>)، يعيده المخبأ فورًا، مما يقلل بشكل كبير من وقت الاستجابة.</li>
  <li>إذا لم يتم العثور عليه (<strong>Cache Miss</strong>)، يطلبه المخبأ من الخادم الأصلي، ويحفظ نسخة منه، ويمرره إلى العميل.</li>
</ul>
<div class="callout callout-info">
  <strong>لماذا التخزين المؤقت (Caching)؟</strong> يعد التخزين المؤقت طريقة فعالة للغاية من حيث التكلفة لتقليل وقت الاستجابة وتقليل حركة المرور على رابط الوصول (access link) وتحسين قابلية توسع الإنترنت دون الاضطرار إلى الدفع مقابل ترقيات النطاق الترددي باهظة الثمن.
</div>

<h2>أمن الشبكات: البرامج الضارة والهجمات</h2>
<p>لم يتم تصميم الإنترنت في الأصل مع وضع الأمان في الاعتبار. يستخدم المهاجمون طرقًا مختلفة لاختراق الشبكات:</p>
<ul>
  <li><strong>حصان طروادة (Trojan Horse):</strong> كود ضار مخفي داخل برامج تبدو مفيدة. يتطلب تثبيت المستخدم ولا يكرر نفسه.</li>
  <li><strong>الفيروس (Virus):</strong> يرتبط بملفات شرعية ويتطلب تفاعل المستخدم للتنفيذ. يكرر نفسه.</li>
  <li><strong>الدودة (Worm):</strong> برنامج مستقل ينتشر تلقائيًا عبر الشبكات دون تفاعل المستخدم.</li>
  <li><strong>حجب الخدمة الموزع (DDoS):</strong> يستخدم المهاجمون <em>Botnet</em> (شبكة من الأجهزة المخترقة) لإغراق الهدف بحركة المرور، مما يؤدي إلى إرباك عرض النطاق الترددي أو المعالج لديه.</li>
  <li><strong>استنشاق الحزم (Packet Sniffing):</strong> على الوسائط المشتركة/البث (مثل Wi-Fi)، يمكن لبطاقة الشبكة في <em>الوضع المختلط (promiscuous mode)</em> التقاط وقراءة الحزم المخصصة للآخرين. يتم منعه باستخدام التشفير (HTTPS).</li>
  <li><strong>انتحال IP (IP Spoofing):</strong> إرسال حزمة بعنوان IP مصدر مزيف لخداع المتلقي.</li>
</ul>

<h2>أنظمة كشف التسلل (IDS)</h2>
<ol>
  <li><strong>القائمة على التوقيع (Signature-based):</strong> تقارن حركة المرور بقاعدة بيانات لأنماط الهجوم المعروفة. دقيقة للغاية للتهديدات المعروفة ولكن لا يمكنها اكتشاف الهجمات الجديدة (zero-day).</li>
  <li><strong>القائمة على الشذوذ (Anomaly-based):</strong> تستخدم الإحصائيات أو الذكاء الاصطناعي لتعلم السلوك "الطبيعي" وتبلغ عن الانحرافات. يمكنها اكتشاف الهجمات الجديدة ولكن لديها معدل أعلى من الإيجابيات الكاذبة (False Positives).</li>
</ol>`
      }
    }
  ],

  summary: {
    points: [
      "Non-persistent HTTP uses a new TCP connection for each object, costing 2 RTTs per object.",
      "Persistent HTTP reuses a single TCP connection for multiple objects, dramatically improving speed.",
      "HTTP is stateless, so cookies are used to maintain session state (like logins and carts) between requests.",
      "Web caches (proxies) serve content locally, saving expensive access link bandwidth and reducing latency.",
      "Viruses require user interaction to spread via files, whereas worms propagate automatically across networks.",
      "DDoS attacks use botnets to overwhelm targeted servers with bogus traffic.",
      "Packet sniffing occurs on shared media; attackers read unencrypted data meant for others.",
      "Intrusion Detection Systems can be signature-based (for known attacks) or anomaly-based (for unknown attacks)."
    ],
    pointsAr: [
      "يستخدم HTTP غير المستمر اتصال TCP جديدًا لكل كائن، مما يكلف 2 RTT لكل كائن.",
      "يعيد HTTP المستمر استخدام اتصال TCP واحد لكائنات متعددة، مما يحسن السرعة بشكل كبير.",
      "HTTP هو بروتوكول عديم الحالة، لذا تُستخدم ملفات تعريف الارتباط (Cookies) للحفاظ على حالة الجلسة (مثل تسجيلات الدخول) بين الطلبات.",
      "تقدم مخابئ الويب (الخوادم الوكيلة) المحتوى محليًا، مما يوفر النطاق الترددي الباهظ لرابط الوصول ويقلل من وقت الاستجابة.",
      "تتطلب الفيروسات تفاعل المستخدم للانتشار عبر الملفات، بينما تنتشر الديدان تلقائيًا عبر الشبكات.",
      "تستخدم هجمات DDoS شبكات الروبوتات (botnets) لإغراق الخوادم المستهدفة بحركة مرور وهمية.",
      "يحدث استنشاق الحزم على الوسائط المشتركة؛ حيث يقرأ المهاجمون البيانات غير المشفرة المخصصة للآخرين.",
      "يمكن أن تكون أنظمة كشف التسلل قائمة على التوقيع (للهجمات المعروفة) أو قائمة على الشذوذ (للهجمات غير المعروفة)."
    ]
  },

  mcq: [
    {
      id: 'cn-l12-q1',
      question: "In Non-persistent HTTP, what is the total response time for a single object (excluding transmission time)?",
      questionAr: "في HTTP غير المستمر، ما هو إجمالي وقت الاستجابة لكائن واحد (باستثناء وقت الإرسال)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1 RTT', isCorrect: false },
        { id: 'b', text: '2 RTTs', isCorrect: true },
        { id: 'c', text: '3 RTTs', isCorrect: false },
        { id: 'd', text: 'It depends on the size of the file', isCorrect: false }
      ]
    },
    {
      id: 'cn-l12-q2',
      question: "Which feature allows websites to remember a user's shopping cart despite HTTP being a stateless protocol?",
      questionAr: "ما الميزة التي تسمح لمواقع الويب بتذكر عربة تسوق المستخدم على الرغم من أن HTTP بروتوكول عديم الحالة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Web Caches', isCorrect: false },
        { id: 'b', text: 'IP Spoofing', isCorrect: false },
        { id: 'c', text: 'HTTP Cookies', isCorrect: true },
        { id: 'd', text: 'TCP 3-way handshake', isCorrect: false }
      ]
    },
    {
      id: 'cn-l12-q3',
      question: "[MID] What is the primary benefit of deploying a Web Cache (Proxy Server) in an institutional network?",
      questionAr: "[MID] ما هي الفائدة الأساسية لنشر مخبأ ويب (خادم وكيل) في شبكة مؤسسية؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'It encrypts all outbound traffic to prevent packet sniffing', isCorrect: false },
        { id: 'b', text: 'It prevents DDoS attacks by filtering malicious packets', isCorrect: false },
        { id: 'c', text: 'It converts non-persistent HTTP requests into persistent ones', isCorrect: false },
        { id: 'd', text: 'It reduces response time and traffic on the access link without requiring expensive bandwidth upgrades', isCorrect: true }
      ]
    },
    {
      id: 'cn-l12-q4',
      question: "Which type of malware is a standalone program that self-replicates and spreads automatically across networks without user interaction?",
      questionAr: "أي نوع من البرامج الضارة عبارة عن برنامج مستقل يكرر نفسه وينتشر تلقائيًا عبر الشبكات دون تدخل المستخدم؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Virus', isCorrect: false },
        { id: 'b', text: 'Worm', isCorrect: true },
        { id: 'c', text: 'Trojan Horse', isCorrect: false },
        { id: 'd', text: 'Spyware', isCorrect: false }
      ]
    },
    {
      id: 'cn-l12-q5',
      question: "What is the role of a 'botnet' in a DDoS attack?",
      questionAr: "ما هو دور 'botnet' في هجوم حجب الخدمة الموزع (DDoS)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It encrypts the attacker\'s IP address to prevent tracing', isCorrect: false },
        { id: 'b', text: 'It is a network of compromised hosts used to simultaneously flood a target with traffic', isCorrect: true },
        { id: 'c', text: 'It acts as a proxy server to cache malicious payloads', isCorrect: false },
        { id: 'd', text: 'It alters the signature of viruses to bypass intrusion detection systems', isCorrect: false }
      ]
    },
    {
      id: 'cn-l12-q6',
      question: "[MID] How can a network administrator mitigate the risk of packet sniffing on a shared network?",
      questionAr: "[MID] كيف يمكن لمسؤول الشبكة التخفيف من مخاطر استنشاق الحزم (packet sniffing) على شبكة مشتركة؟",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'By using switched Ethernet and encrypting traffic (e.g., using HTTPS)', isCorrect: true },
        { id: 'b', text: 'By removing cookies from all HTTP requests', isCorrect: false },
        { id: 'c', text: 'By upgrading the access link bandwidth', isCorrect: false },
        { id: 'd', text: 'By using anomaly-based intrusion detection', isCorrect: false }
      ]
    },
    {
      id: 'cn-l12-q7',
      question: "What is 'IP Spoofing'?",
      questionAr: "ما هو انتحال IP (IP Spoofing)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Reading packets that are destined for a different IP address', isCorrect: false },
        { id: 'b', text: 'Infecting an IP address with a Trojan horse', isCorrect: false },
        { id: 'c', text: 'Sending a packet with a fake source IP address to deceive the receiver', isCorrect: true },
        { id: 'd', text: 'Recording a user\'s password and playing it back to the server', isCorrect: false }
      ]
    },
    {
      id: 'cn-l12-q8',
      question: "Which of the following is a key limitation of Signature-based Intrusion Detection Systems?",
      questionAr: "أي مما يلي يُعد قيدًا (limitation) رئيسيًا لأنظمة كشف التسلل القائمة على التوقيع (Signature-based IDS)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'They have an extremely high rate of false alarms', isCorrect: false },
        { id: 'b', text: 'They cannot detect previously unseen (zero-day) attacks', isCorrect: true },
        { id: 'c', text: 'They require massive amounts of bandwidth to operate', isCorrect: false },
        { id: 'd', text: 'They only work on wireless networks', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l12-w1',
      question: "Explain why Persistent HTTP is more efficient than Non-Persistent HTTP for downloading a webpage with many images.",
      questionAr: "اشرح لماذا يُعد HTTP المستمر (Persistent) أكثر كفاءة من HTTP غير المستمر (Non-Persistent) لتنزيل صفحة ويب تحتوي على العديد من الصور.",
      modelAnswer: "In Non-Persistent HTTP, a new TCP connection must be established for every single object (base HTML + every image). This costs 2 RTTs per object, adding significant delay and server overhead. Persistent HTTP keeps the TCP connection open after sending the initial response, allowing all subsequent images to be requested and downloaded over the same connection, drastically reducing TCP handshake overhead and overall page load time.",
      modelAnswerAr: "في HTTP غير المستمر، يجب إنشاء اتصال TCP جديد لكل كائن على حدة (ملف HTML الأساسي + كل صورة). يكلف هذا 2 RTT لكل كائن، مما يضيف تأخيرًا كبيرًا وعبئًا على الخادم. بينما يحافظ HTTP المستمر على اتصال TCP مفتوحًا بعد إرسال الاستجابة الأولية، مما يسمح بطلب جميع الصور اللاحقة وتنزيلها عبر نفس الاتصال، وهذا يقلل بشكل كبير من عبء مصافحة TCP ووقت تحميل الصفحة الإجمالي."
    },
    {
      id: 'cn-l12-w2',
      question: "How does a Web Cache (Proxy Server) reduce traffic on an institution's access link?",
      questionAr: "كيف يقلل مخبأ الويب (الخادم الوكيل) من حركة المرور على رابط الوصول (access link) الخاص بالمؤسسة؟",
      modelAnswer: "A Web Cache sits between the institutional network and the Internet. When users request web pages, the requests go to the cache first. If the cache already has a copy of the requested object (a cache hit), it serves the object directly to the user over the fast local LAN. This prevents the request and the large response file from traveling over the slower, limited-capacity access link, thereby saving bandwidth and reducing congestion.",
      modelAnswerAr: "يقع مخبأ الويب بين الشبكة المؤسسية والإنترنت. عندما يطلب المستخدمون صفحات ويب، تذهب الطلبات إلى المخبأ أولاً. إذا كان لدى المخبأ بالفعل نسخة من الكائن المطلوب (Cache Hit)، فإنه يقدم الكائن مباشرة للمستخدم عبر شبكة LAN المحلية السريعة. هذا يمنع الطلب وملف الاستجابة الكبير من الانتقال عبر رابط الوصول البطيء ومحدود السعة، وبالتالي يوفر النطاق الترددي ويقلل من الازدحام."
    },
    {
      id: 'cn-l12-w3',
      question: "Differentiate between a Virus and a Worm in terms of how they spread.",
      questionAr: "فرق بين الفيروس (Virus) والدودة (Worm) من حيث كيفية انتشارهما.",
      modelAnswer: "A virus attaches itself to a legitimate file or program and relies on user interaction (like opening an infected email attachment or running a program) to execute and spread to other files. A worm is a standalone program that exploits network vulnerabilities to replicate and spread itself automatically across hosts without requiring any user action.",
      modelAnswerAr: "يربط الفيروس نفسه بملف أو برنامج شرعي ويعتمد على تفاعل المستخدم (مثل فتح مرفق بريد إلكتروني مصاب أو تشغيل برنامج) للتنفيذ والانتشار إلى ملفات أخرى. بينما الدودة هي برنامج مستقل يستغل نقاط ضعف الشبكة لنسخ نفسه والانتشار تلقائيًا عبر المضيفين دون الحاجة إلى أي إجراء من المستخدم."
    }
  ]
};
