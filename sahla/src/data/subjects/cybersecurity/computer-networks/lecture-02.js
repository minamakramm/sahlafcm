export const LECTURE = {
  subjectId: 'computer-networks',
  number: 2,
  title: 'Network Models',
  titleAr: 'نماذج الشبكات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Introduction to the Internet</h2>
<p>The Internet is defined as a <strong>network of interconnected networks</strong>. Key historical milestones:</p>
<ul>
  <li>Evolved from <strong>ARPANET</strong> in 1969, initially connecting four locations.</li>
  <li>ARPA extended packet-switching technology to tactical radio and satellite communication.</li>
  <li>The <strong>Transmission Control Protocol (TCP)</strong> was developed in 1974 for internetworking.</li>
  <li>The number of connections continues to grow exponentially — now billions of users, hosts, and IoT devices.</li>
</ul>

<h2>Key Elements of the Internet</h2>
<ul>
  <li>The Internet interconnects <strong>end systems (hosts)</strong>: PCs, workstations, servers, mainframes.</li>
  <li>Hosts connect to networks (LAN or WAN); networks are connected by <strong>routers</strong>.</li>
  <li>Each router attaches to two or more networks.</li>
  <li>Some hosts (mainframes, servers) connect directly to a router rather than through a network.</li>
</ul>

<h2>Abstract View of Internet Operation</h2>
<p>The traditional Internet is based on the concept of <strong>intelligent end systems and a "dummy" core</strong>, offering <strong>best-effort QoS</strong>:</p>
<ol>
  <li>The source host breaks data into a sequence of <strong>IP packets</strong>.</li>
  <li>Each packet carries a unique numeric <strong>IP address</strong> of the destination host.</li>
  <li>Based on this address, each packet independently travels through a series of routers and networks from source to destination.</li>
</ol>

<h2>Hierarchical Organization of the Internet</h2>
<p>The Internet is organized hierarchically via <strong>Internet Service Providers (ISPs)</strong> — companies that provide individuals or organizations with Internet access. The hierarchy runs from local ISPs → Regional ISPs → National (Backbone) ISPs, interconnected at <strong>Network Access Points (NAPs)</strong> and <strong>Points of Presence (POPs)</strong>.</p>

<h2>Network Models — Why We Need Them</h2>
<p>A network is a combination of hardware and software sending data from one location to another:</p>
<ul>
  <li><strong>Hardware</strong>: physical equipment that carries signals.</li>
  <li><strong>Software</strong>: instruction sets that make services possible.</li>
</ul>
<p>Complex communication tasks (like sending an email) are broken into many subtasks, each handled by a separate software package using the services of the layer below it. Example layers for sending an email:</p>
<ul>
  <li>Employing a suitable protocol (SMTP)</li>
  <li>Establishing end-to-end connection (TCP)</li>
  <li>Adding final destination address (IP)</li>
  <li>Encrypting data, adding physical address, accessing the medium of the next hop (MAC)</li>
  <li>Sending the actual signal over the physical medium</li>
</ul>

<h2>Protocol Layering Principles</h2>
<p>Two principles must be followed to provide bidirectional communication in a layered protocol model:</p>
<ol>
  <li>Each layer must perform two <strong>opposite tasks</strong> (e.g., encapsulate on the sender side, decapsulate on the receiver side).</li>
  <li>The two objects under each layer on both sides must be <strong>identical</strong> (peer entities must use the same protocol).</li>
</ol>
<p>Important distinction: two layers at the same level share a <strong>logical connection</strong>; a true <strong>physical connection</strong> only exists at the Physical layer.</p>

<h2>TCP/IP Model (5 Layers)</h2>
<p>The TCP/IP architecture divides communication into five relatively independent layers:</p>
<ul>
  <li><strong>Physical Layer:</strong> Covers the physical interface between a data transmission device and a transmission medium. Concerned with transmission of unstructured bit streams (electrical, optical, or radio signals) and the mechanical/electrical/functional characteristics of the medium.</li>
  <li><strong>Data Link Layer:</strong> Responsible for reliable transfer of data between directly connected (neighboring) devices on the same network. Handles framing, MAC addressing, error detection, synchronization, and flow control. The specific protocol depends on the network type (e.g., Ethernet, Wi-Fi, PPP).</li>
  <li><strong>Network Layer (Internet / IP Layer):</strong> Responsible for <strong>source-to-destination delivery</strong> of packets across multiple networks. The IP protocol provides the routing function. Intermediate devices (routers) implement this layer.</li>
  <li><strong>Transport Layer (Host-to-Host Layer):</strong> Responsible for <strong>process-to-process delivery</strong> of the entire message. Ensures data arrives reliably and in order. Protocols: TCP (reliable, connection-oriented), UDP (fast, connectionless).</li>
  <li><strong>Application Layer:</strong> Contains the logic needed to support various user applications. Protocols: HTTP, FTP, SMTP, DNS.</li>
</ul>

<h2>Addressing in the TCP/IP Model</h2>
<p>Four levels of addresses are used in the Internet:</p>
<ul>
  <li><strong>Physical (Link) Address:</strong> The address of a node as defined by its LAN or WAN. Used by the <em>Data Link layer</em>. Example: Ethernet MAC address = 6 bytes (48 bits). <em>Changes from hop to hop.</em></li>
  <li><strong>Logical (IP) Address:</strong> Necessary for universal communication independent of the physical network. IPv4 = 32 bits; IPv6 = 128 bits. Used by the <em>Network layer</em>. <em>Remains the same end-to-end.</em></li>
  <li><strong>Port Address:</strong> Identifies a specific <em>process</em> running on a host (not just the host itself). 16 bits in length. Used by the <em>Transport layer</em>. <em>Remains the same end-to-end.</em></li>
  <li><strong>Specific Address:</strong> User-friendly addresses (e.g., email address, URL). Used by the <em>Application layer</em>. Converted to port and logical addresses by the sending computer.</li>
</ul>
<div class="callout callout-info">
  <strong>Key Rule:</strong> Physical addresses change at every hop (router). Logical (IP) and port addresses generally remain the same from source to destination.
</div>

<h2>The OSI Model (7 Layers)</h2>
<p>Introduced in the 1970s by the International Standards Organization (ISO). An <strong>open system</strong> is a set of protocols allowing any two different systems to communicate regardless of their underlying architecture.</p>
<p><strong>OSI Goals:</strong></p>
<ul>
  <li>Facilitate communication between different systems without changing underlying hardware/software logic.</li>
  <li>Enable flexible, robust, and interoperable network architecture.</li>
</ul>
<p>The OSI model has <strong>seven layers</strong> (top to bottom):</p>
<ol>
  <li><strong>Application (7):</strong> Provides access to the OSI environment for users and distributed information services.</li>
  <li><strong>Presentation (6):</strong> Provides independence from differences in data representation (syntax) — handles translation, encryption, and compression.</li>
  <li><strong>Session (5):</strong> Provides control structure for communication between applications — establishes, manages, and terminates sessions.</li>
  <li><strong>Transport (4):</strong> Provides reliable, transparent end-to-end data transfer, error recovery, and flow control.</li>
  <li><strong>Network (3):</strong> Provides upper layers independence from data transmission/switching technologies; responsible for establishing, maintaining, and terminating connections across networks.</li>
  <li><strong>Data Link (2):</strong> Provides reliable transfer of information across the physical link using frames; includes synchronization, error control, and flow control.</li>
  <li><strong>Physical (1):</strong> Concerned with the transmission of unstructured bit streams over the physical medium; deals with mechanical, electrical, functional, and procedural characteristics.</li>
</ol>

<h2>OSI vs. TCP/IP — Comparison</h2>
<table class="styled-table">
  <thead><tr><th>OSI Layer</th><th>TCP/IP Layer</th><th>Example Protocols</th></tr></thead>
  <tbody>
    <tr><td>Application (7)</td><td rowspan="3">Application</td><td>HTTP, FTP, SMTP, DNS</td></tr>
    <tr><td>Presentation (6)</td><td>SSL, JPEG, MPEG</td></tr>
    <tr><td>Session (5)</td><td>NetBIOS, RPC</td></tr>
    <tr><td>Transport (4)</td><td>Transport</td><td>TCP, UDP</td></tr>
    <tr><td>Network (3)</td><td>Network (Internet)</td><td>IP, ICMP, ARP, OSPF</td></tr>
    <tr><td>Data Link (2)</td><td>Data Link</td><td>Ethernet, PPP, Wi-Fi</td></tr>
    <tr><td>Physical (1)</td><td>Physical</td><td>Cables, Hubs, Fiber</td></tr>
  </tbody>
</table>
<p>The OSI model's <strong>Session</strong> and <strong>Presentation</strong> layers are <strong>merged into the Application layer</strong> in TCP/IP. The OSI model never replaced TCP/IP because TCP/IP was already fully in place, and some OSI layers were never completely defined.</p>`,

        bodyAr: `<h2>مقدمة إلى الإنترنت</h2>
<p>يُعرَّف الإنترنت بأنه <strong>شبكة من الشبكات المترابطة</strong>. أبرز المحطات التاريخية:</p>
<ul>
  <li>تطور من <strong>ARPANET</strong> عام 1969 الذي كان يربط أربعة مواقع.</li>
  <li>طبّقت ARPA تقنية تبديل الحزم على الاتصالات اللاسلكية التكتيكية والاتصالات عبر الأقمار الصناعية.</li>
  <li>طُوِّر <strong>بروتوكول التحكم في الإرسال (TCP)</strong> عام 1974 للتواصل بين الشبكات.</li>
  <li>يستمر عدد الاتصالات في النمو بشكل أسي — الآن مليارات المستخدمين والمضيفين وأجهزة إنترنت الأشياء.</li>
</ul>

<h2>العناصر الرئيسية للإنترنت</h2>
<ul>
  <li>يربط الإنترنت <strong>الأنظمة الطرفية (المضيفين)</strong>: أجهزة الكمبيوتر الشخصية، محطات العمل، الخوادم، الحاسبات الكبيرة.</li>
  <li>تتصل المضيفات بشبكات (LAN أو WAN)؛ وتربط <strong>الموجهات (Routers)</strong> الشبكات ببعضها.</li>
  <li>يتصل كل موجه بشبكتين أو أكثر.</li>
  <li>بعض المضيفات (الخوادم والحاسبات الكبيرة) تتصل مباشرة بموجه بدلاً من الاتصال عبر شبكة.</li>
</ul>

<h2>نظرة تجريدية على عمل الإنترنت</h2>
<p>يعتمد الإنترنت التقليدي على مفهوم <strong>الأنظمة الطرفية الذكية وقلب "بسيط"</strong>، مع تقديم <strong>جودة خدمة بأفضل جهد (Best-Effort QoS)</strong>:</p>
<ol>
  <li>يقسّم المضيف المصدر البيانات إلى تسلسل من <strong>حزم IP</strong>.</li>
  <li>تحمل كل حزمة <strong>عنوان IP</strong> فريدًا للمضيف الوجهة.</li>
  <li>بناءً على هذا العنوان، تسافر كل حزمة بشكل مستقل عبر سلسلة من الموجهات والشبكات من المصدر إلى الوجهة.</li>
</ol>

<h2>التنظيم الهرمي للإنترنت</h2>
<p>يُنظَّم الإنترنت هرميًا عبر <strong>مزودي خدمة الإنترنت (ISPs)</strong> — شركات توفر الوصول إلى الإنترنت. يمتد التسلسل الهرمي من مزودي الخدمة المحليين → الإقليميين → الوطنيين (العمود الفقري)، متصلين عند <strong>نقاط الوصول إلى الشبكة (NAPs)</strong> و<strong>نقاط التواجد (POPs)</strong>.</p>

<h2>نماذج الشبكة — لماذا نحتاجها؟</h2>
<p>الشبكة هي مزيج من الأجهزة والبرامج لإرسال البيانات:</p>
<ul>
  <li><strong>الأجهزة:</strong> المعدات المادية التي تحمل الإشارات.</li>
  <li><strong>البرامج:</strong> مجموعات التعليمات التي تُتيح الخدمات.</li>
</ul>
<p>تُقسَّم المهام المعقدة (كإرسال بريد إلكتروني) إلى مهام فرعية، كل منها يُنفَّذ بحزمة برمجية منفصلة. مثال على طبقات إرسال البريد الإلكتروني:</p>
<ul>
  <li>توظيف بروتوكول مناسب (SMTP)</li>
  <li>إنشاء اتصال من طرف إلى طرف (TCP)</li>
  <li>إضافة عنوان الوجهة النهائية (IP)</li>
  <li>تشفير البيانات وإضافة العنوان المادي والوصول إلى الوسيط (MAC)</li>
  <li>إرسال الإشارة الفعلية عبر الوسيط المادي</li>
</ul>

<h2>مبادئ تصميم طبقات البروتوكول</h2>
<p>يجب اتباع مبدأين لتوفير اتصال ثنائي الاتجاه في نموذج الطبقات:</p>
<ol>
  <li>يجب أن تؤدي كل طبقة <strong>مهمتين متعاكستين</strong> (مثل التغليف عند المرسل والفك عند المستقبل).</li>
  <li>يجب أن تكون الكيانات المقابلة على الجانبين <strong>متطابقة</strong> (تستخدم نفس البروتوكول).</li>
</ol>
<p>تمييز مهم: طبقتان على نفس المستوى تشتركان في <strong>اتصال منطقي</strong>؛ الاتصال <strong>الفيزيائي الحقيقي</strong> موجود فقط عند الطبقة المادية.</p>

<h2>نموذج TCP/IP (5 طبقات)</h2>
<ul>
  <li><strong>الطبقة المادية (Physical):</strong> تغطي الواجهة المادية بين جهاز الإرسال والوسيط. تتعامل مع بث البتات الخام (إشارات كهربائية أو ضوئية أو لاسلكية).</li>
  <li><strong>طبقة ارتباط البيانات (Data Link):</strong> مسؤولة عن النقل الموثوق للبيانات بين الأجهزة المتصلة مباشرةً. تتعامل مع الإطارات وعناوين MAC واكتشاف الأخطاء.</li>
  <li><strong>طبقة الشبكة (Network / IP):</strong> مسؤولة عن تسليم الحزم من المصدر إلى الوجهة عبر شبكات متعددة. بروتوكول IP يوفر وظيفة التوجيه. الموجهات تطبّق هذه الطبقة.</li>
  <li><strong>طبقة النقل (Transport):</strong> مسؤولة عن تسليم البيانات من عملية إلى عملية. تضمن وصول البيانات كاملةً وبالترتيب. TCP (موثوق) و UDP (سريع).</li>
  <li><strong>طبقة التطبيقات (Application):</strong> تحتوي المنطق الداعم لتطبيقات المستخدم. بروتوكولات: HTTP، FTP، SMTP، DNS.</li>
</ul>

<h2>العنونة في نموذج TCP/IP</h2>
<p>تُستخدم أربعة مستويات من العناوين في الإنترنت:</p>
<ul>
  <li><strong>العنوان المادي (Physical/MAC):</strong> عنوان العقدة كما يحدده LAN أو WAN. مثال: عنوان MAC في Ethernet = 6 بايت (48 بت). يستخدمه <em>طبقة ارتباط البيانات</em>. <em>يتغير من قفزة إلى أخرى.</em></li>
  <li><strong>العنوان المنطقي (IP):</strong> ضروري للاتصال العالمي بغض النظر عن الشبكة الفيزيائية. IPv4 = 32 بت؛ IPv6 = 128 بت. يستخدمه <em>طبقة الشبكة</em>. <em>يبقى ثابتًا من المصدر إلى الوجهة.</em></li>
  <li><strong>عنوان المنفذ (Port):</strong> يحدد <em>عملية</em> بعينها على المضيف. طوله 16 بت. يستخدمه <em>طبقة النقل</em>. <em>يبقى ثابتًا من المصدر إلى الوجهة.</em></li>
  <li><strong>العنوان المحدد (Specific):</strong> عناوين سهلة الاستخدام (مثل عنوان البريد الإلكتروني، URL). يستخدمه <em>طبقة التطبيقات</em>. يُحوَّل إلى عناوين منطقية ومنافذ بواسطة الكمبيوتر المرسل.</li>
</ul>
<div class="callout callout-info">
  <strong>قاعدة مهمة:</strong> العناوين المادية تتغير عند كل قفزة (موجه). العناوين المنطقية (IP) وعناوين المنافذ تبقى عمومًا ثابتة من المصدر إلى الوجهة.
</div>

<h2>نموذج OSI (7 طبقات)</h2>
<p>قدّمته منظمة المعايير الدولية (ISO) في السبعينيات. النظام المفتوح هو مجموعة من البروتوكولات تسمح لأي نظامين مختلفين بالتواصل بغض النظر عن بنيتهما.</p>
<p><strong>أهداف OSI:</strong></p>
<ul>
  <li>تسهيل الاتصال بين الأنظمة المختلفة دون تغيير منطق الأجهزة أو البرامج.</li>
  <li>تصميم بنية شبكة مرنة وقوية وقابلة للتشغيل البيني.</li>
</ul>
<p>طبقات نموذج OSI السبع (من الأعلى إلى الأسفل):</p>
<ol>
  <li><strong>التطبيقات (7):</strong> توفر وصول المستخدمين إلى بيئة OSI وخدمات المعلومات الموزعة.</li>
  <li><strong>العرض (6):</strong> توفر الاستقلالية عن اختلافات تمثيل البيانات (بنية الكلام) — الترجمة والتشفير والضغط.</li>
  <li><strong>الجلسة (5):</strong> توفر هيكل التحكم في الاتصال بين التطبيقات — إنشاء الجلسات وإدارتها وإنهاؤها.</li>
  <li><strong>النقل (4):</strong> توفر نقلًا موثوقًا وشفافًا للبيانات من طرف إلى طرف، واستعادة الأخطاء والتحكم في التدفق.</li>
  <li><strong>الشبكة (3):</strong> توفر للطبقات العليا استقلالية عن تقنيات الإرسال والتبديل؛ مسؤولة عن إنشاء الاتصالات عبر الشبكات والحفاظ عليها وإنهائها.</li>
  <li><strong>ارتباط البيانات (2):</strong> توفر نقلًا موثوقًا للمعلومات عبر الرابط المادي باستخدام الإطارات مع المزامنة والتحكم في الأخطاء والتدفق.</li>
  <li><strong>المادية (1):</strong> تتعامل مع إرسال تيار البتات الخام عبر الوسيط المادي، والخصائص الميكانيكية والكهربائية والوظيفية والإجرائية.</li>
</ol>

<h2>مقارنة OSI مع TCP/IP</h2>
<table class="styled-table">
  <thead><tr><th>طبقة OSI</th><th>طبقة TCP/IP</th><th>أمثلة على البروتوكولات</th></tr></thead>
  <tbody>
    <tr><td>التطبيقات (7)</td><td rowspan="3">التطبيقات</td><td>HTTP, FTP, SMTP, DNS</td></tr>
    <tr><td>العرض (6)</td><td>SSL, JPEG, MPEG</td></tr>
    <tr><td>الجلسة (5)</td><td>NetBIOS, RPC</td></tr>
    <tr><td>النقل (4)</td><td>النقل</td><td>TCP, UDP</td></tr>
    <tr><td>الشبكة (3)</td><td>الشبكة (الإنترنت)</td><td>IP, ICMP, ARP, OSPF</td></tr>
    <tr><td>ارتباط البيانات (2)</td><td>ارتباط البيانات</td><td>Ethernet, PPP, Wi-Fi</td></tr>
    <tr><td>المادية (1)</td><td>المادية</td><td>Cables, Hubs, Fiber</td></tr>
  </tbody>
</table>
<p>طبقتا <strong>الجلسة</strong> و<strong>العرض</strong> في OSI مدمجتان في <strong>طبقة التطبيقات</strong> في TCP/IP. لم يحل نموذج OSI محل TCP/IP لأن TCP/IP كان مطبَّقًا بالكامل قبل اكتمال OSI، ولأن بعض طبقات OSI لم تُعرَّف بشكل كامل.</p>`,
      },
    },
  ],

  summary: {
    points: [
      'The Internet evolved from ARPANET (1969) and is a "network of networks" connecting billions of hosts and IoT devices.',
      'Internet operation: hosts break data into IP packets; each packet is independently routed from source to destination.',
      'The Internet is organized hierarchically: Local ISPs → Regional ISPs → National/Backbone ISPs, connected at NAPs and POPs.',
      'Protocol layering principles: each layer performs two opposite tasks; peer entities on both sides must be identical.',
      'TCP/IP has 5 layers: Physical, Data Link, Network (IP), Transport (Host-to-Host), and Application.',
      'Four address types in TCP/IP: Physical (MAC, 48-bit, changes per hop), Logical (IP, stays same), Port (16-bit, stays same), Specific (URL/email, user-friendly).',
      'The OSI model has 7 layers; Session and Presentation are merged into the Application layer in TCP/IP.',
      'OSI goals: enable flexible, robust, and interoperable communication between any two systems without changing underlying hardware/software.',
      'Physical addresses change at each router hop; logical (IP) and port addresses remain constant end-to-end.',
      'Next lecture: Introduction to the Physical Layer and Transmission Media.',
    ],
    pointsAr: [
      'تطور الإنترنت من ARPANET (1969) وهو "شبكة من الشبكات" تربط مليارات المضيفين وأجهزة إنترنت الأشياء.',
      'عمل الإنترنت: تقسّم المضيفات البيانات إلى حزم IP؛ كل حزمة تُوجَّه بشكل مستقل من المصدر إلى الوجهة.',
      'يُنظَّم الإنترنت هرميًا: مزودو خدمة محليون → إقليميون → وطنيون/عمود فقري، متصلون عند NAPs وPOPs.',
      'مبادئ الطبقات: كل طبقة تؤدي مهمتين متعاكستين؛ الكيانات المتماثلة على الجانبين يجب أن تستخدم نفس البروتوكول.',
      'TCP/IP له 5 طبقات: المادية، ارتباط البيانات، الشبكة (IP)، النقل (مضيف إلى مضيف)، التطبيقات.',
      'أربعة أنواع من العناوين في TCP/IP: مادي (MAC، 48 بت، يتغير في كل قفزة)، منطقي (IP، ثابت)، منفذ (16 بت، ثابت)، محدد (URL/بريد إلكتروني، سهل الاستخدام).',
      'نموذج OSI له 7 طبقات؛ طبقتا الجلسة والعرض مدمجتان في طبقة التطبيقات في TCP/IP.',
      'أهداف OSI: تمكين الاتصال المرن والقوي وقابل للتشغيل البيني بين أي نظامين دون تغيير الأجهزة أو البرامج.',
      'العناوين المادية تتغير عند كل موجه؛ العناوين المنطقية (IP) وعناوين المنافذ تبقى ثابتة من المصدر إلى الوجهة.',
      'المحاضرة القادمة: مقدمة إلى الطبقة المادية ووسائط الإرسال.',
    ],
  },

  mcq: [
    // ── Easy ──────────────────────────────────────────────────────────────────
    {
      id: 'cn-l2-q1',
      question: 'The Internet originally evolved from which early network?',
      questionAr: 'من أي شبكة مبكرة تطور الإنترنت في الأصل؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'BITNET', isCorrect: false },
        { id: 'b', text: 'ARPANET', isCorrect: true },
        { id: 'c', text: 'ETHERNET', isCorrect: false },
        { id: 'd', text: 'MILNET', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q2',
      question: 'In the Internet, which device connects two or more networks together?',
      questionAr: 'في الإنترنت، أي جهاز يربط شبكتين أو أكثر معًا؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Switch', isCorrect: false },
        { id: 'b', text: 'Hub', isCorrect: false },
        { id: 'c', text: 'Router', isCorrect: true },
        { id: 'd', text: 'Repeater', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q3',
      question: 'In the TCP/IP model, which layer is responsible for process-to-process data delivery?',
      questionAr: 'في نموذج TCP/IP، أي طبقة مسؤولة عن تسليم البيانات من عملية إلى عملية؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Network Layer', isCorrect: false },
        { id: 'b', text: 'Data Link Layer', isCorrect: false },
        { id: 'c', text: 'Transport Layer', isCorrect: true },
        { id: 'd', text: 'Application Layer', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q4',
      question: 'Which layer of the TCP/IP model is concerned with transmitting raw bit streams over a physical medium?',
      questionAr: 'أي طبقة في نموذج TCP/IP تُعنى بإرسال تيارات البتات الخام عبر الوسيط المادي؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Data Link Layer', isCorrect: false },
        { id: 'b', text: 'Physical Layer', isCorrect: true },
        { id: 'c', text: 'Network Layer', isCorrect: false },
        { id: 'd', text: 'Transport Layer', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q5',
      question: 'How many bits is an Ethernet MAC address?',
      questionAr: 'كم عدد البتات في عنوان MAC لشبكة Ethernet؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '32 bits', isCorrect: false },
        { id: 'b', text: '16 bits', isCorrect: false },
        { id: 'c', text: '128 bits', isCorrect: false },
        { id: 'd', text: '48 bits', isCorrect: true },
      ],
    },
    {
      id: 'cn-l2-q6',
      question: 'How many layers does the OSI model have?',
      questionAr: 'كم عدد طبقات نموذج OSI؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '4', isCorrect: false },
        { id: 'b', text: '5', isCorrect: false },
        { id: 'c', text: '6', isCorrect: false },
        { id: 'd', text: '7', isCorrect: true },
      ],
    },
    {
      id: 'cn-l2-q7',
      question: 'What does ISP stand for?',
      questionAr: 'ماذا يرمز اختصار ISP؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Internet System Protocol', isCorrect: false },
        { id: 'b', text: 'Internet Service Provider', isCorrect: true },
        { id: 'c', text: 'Internal Signal Processor', isCorrect: false },
        { id: 'd', text: 'Integrated Software Platform', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q8',
      question: 'Which address type is used by the Application layer in the TCP/IP model?',
      questionAr: 'أي نوع من العناوين تستخدمه طبقة التطبيقات في نموذج TCP/IP؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Physical (MAC) Address', isCorrect: false },
        { id: 'b', text: 'Logical (IP) Address', isCorrect: false },
        { id: 'c', text: 'Port Address', isCorrect: false },
        { id: 'd', text: 'Specific Address (e.g., URL, email)', isCorrect: true },
      ],
    },
    {
      id: 'cn-l2-q9',
      question: 'Which of the following is an example of an Application Layer protocol in TCP/IP?',
      questionAr: 'أي مما يلي مثال على بروتوكول طبقة التطبيقات في TCP/IP؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IP', isCorrect: false },
        { id: 'b', text: 'TCP', isCorrect: false },
        { id: 'c', text: 'HTTP', isCorrect: true },
        { id: 'd', text: 'Ethernet', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q10',
      question: 'The OSI model was introduced by which organization?',
      questionAr: 'قدّمت نموذج OSI أي منظمة؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IEEE', isCorrect: false },
        { id: 'b', text: 'ITU-T', isCorrect: false },
        { id: 'c', text: 'ISO (International Standards Organization)', isCorrect: true },
        { id: 'd', text: 'ARPA', isCorrect: false },
      ],
    },

    // ── Medium ─────────────────────────────────────────────────────────────────
    {
      id: 'cn-l2-q11',
      question: '[MID] In the TCP/IP Internet operation, what is the role of the source host before transmitting data?',
      questionAr: '[MID] في عمل إنترنت TCP/IP، ما هو دور المضيف المصدر قبل إرسال البيانات؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'It establishes a dedicated circuit to the destination', isCorrect: false },
        { id: 'b', text: 'It breaks the data into IP packets, each carrying the destination IP address', isCorrect: true },
        { id: 'c', text: 'It sends a broadcast to all hosts on the Internet', isCorrect: false },
        { id: 'd', text: 'It waits for the destination to initiate the connection', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q12',
      question: 'Which TCP/IP layer is responsible for source-to-destination delivery of packets across multiple networks, and which device implements it?',
      questionAr: 'أي طبقة في TCP/IP مسؤولة عن التسليم من المصدر إلى الوجهة عبر شبكات متعددة، وأي جهاز يطبّقها؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Transport Layer; implemented by switches', isCorrect: false },
        { id: 'b', text: 'Network (IP) Layer; implemented by routers', isCorrect: true },
        { id: 'c', text: 'Data Link Layer; implemented by hubs', isCorrect: false },
        { id: 'd', text: 'Application Layer; implemented by servers', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q13',
      question: '[MID] Which of the following correctly describes the behavior of physical and logical addresses as a packet travels across the Internet?',
      questionAr: '[MID] أي مما يلي يصف بشكل صحيح سلوك العناوين المادية والمنطقية عندما تنتقل حزمة عبر الإنترنت؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Both physical and logical addresses change at each router', isCorrect: false },
        { id: 'b', text: 'Physical addresses stay the same; logical addresses change at each router', isCorrect: false },
        { id: 'c', text: 'Physical addresses change at each hop; logical (IP) addresses stay the same end-to-end', isCorrect: true },
        { id: 'd', text: 'Both remain constant throughout the entire path', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q14',
      question: 'A port address in TCP/IP is how many bits in length?',
      questionAr: 'كم عدد البتات في عنوان المنفذ (Port Address) في TCP/IP؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '8 bits', isCorrect: false },
        { id: 'b', text: '32 bits', isCorrect: false },
        { id: 'c', text: '16 bits', isCorrect: true },
        { id: 'd', text: '48 bits', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q15',
      question: 'Which OSI layer handles translation, encryption, and compression of data for the Application layer?',
      questionAr: 'أي طبقة في OSI تتعامل مع ترجمة البيانات وتشفيرها وضغطها لطبقة التطبيقات؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Session Layer', isCorrect: false },
        { id: 'b', text: 'Presentation Layer', isCorrect: true },
        { id: 'c', text: 'Transport Layer', isCorrect: false },
        { id: 'd', text: 'Network Layer', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q16',
      question: '[MID] Which two OSI layers are absent (merged into the Application layer) in the TCP/IP model?',
      questionAr: '[MID] أي طبقتان من OSI غائبتان (مدمجتان في طبقة التطبيقات) في نموذج TCP/IP؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Network and Data Link', isCorrect: false },
        { id: 'b', text: 'Physical and Data Link', isCorrect: false },
        { id: 'c', text: 'Session and Presentation', isCorrect: true },
        { id: 'd', text: 'Transport and Network', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q17',
      question: 'In OSI, which layer is responsible for establishing, managing, and terminating communication sessions between applications?',
      questionAr: 'في OSI، أي طبقة مسؤولة عن إنشاء جلسات الاتصال بين التطبيقات وإدارتها وإنهاؤها؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Transport Layer', isCorrect: false },
        { id: 'b', text: 'Presentation Layer', isCorrect: false },
        { id: 'c', text: 'Session Layer', isCorrect: true },
        { id: 'd', text: 'Application Layer', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q18',
      question: 'The Data Link layer in TCP/IP is responsible for data transfer between which two points?',
      questionAr: 'طبقة ارتباط البيانات في TCP/IP مسؤولة عن نقل البيانات بين أي نقطتين؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Source host and destination host across the entire Internet', isCorrect: false },
        { id: 'b', text: 'Any two processes on different hosts', isCorrect: false },
        { id: 'c', text: 'Two directly connected (neighboring) devices on the same network', isCorrect: true },
        { id: 'd', text: 'A user application and the operating system', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q19',
      question: '[MID] What is the key difference between a logical connection and a physical connection in protocol layering?',
      questionAr: '[MID] ما الفرق الجوهري بين الاتصال المنطقي والاتصال المادي في تصميم طبقات البروتوكول؟',
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Logical connections are faster than physical connections', isCorrect: false },
        { id: 'b', text: 'Two same-level layers share a logical (virtual) connection; physical connection only exists at the Physical layer', isCorrect: true },
        { id: 'c', text: 'Physical connections can be established at any layer', isCorrect: false },
        { id: 'd', text: 'Logical connections require physical wires; physical connections do not', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q20',
      question: 'The TCP protocol is associated with which OSI layer mapping in TCP/IP?',
      questionAr: 'يرتبط بروتوكول TCP بأي طبقة في نموذج OSI عند تعيينه إلى TCP/IP؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Network Layer (Layer 3)', isCorrect: false },
        { id: 'b', text: 'Data Link Layer (Layer 2)', isCorrect: false },
        { id: 'c', text: 'Transport Layer (Layer 4)', isCorrect: true },
        { id: 'd', text: 'Application Layer (Layer 7)', isCorrect: false },
      ],
    },

    // ── Hard ───────────────────────────────────────────────────────────────────
    {
      id: 'cn-l2-q21',
      question: '[MID] When sending an email, which sequence of tasks (top to bottom) correctly represents the layered operation from application to physical?',
      questionAr: '[MID] عند إرسال بريد إلكتروني، أي تسلسل من المهام (من الأعلى إلى الأسفل) يمثل بشكل صحيح العملية الطبقية من التطبيق إلى المادية؟',
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Physical signal → IP addressing → TCP connection → SMTP → MAC addressing', isCorrect: false },
        { id: 'b', text: 'SMTP → TCP (end-to-end connection) → IP (destination address) → MAC (physical address/medium access) → Physical signal', isCorrect: true },
        { id: 'c', text: 'MAC addressing → IP addressing → TCP → SMTP → Physical signal', isCorrect: false },
        { id: 'd', text: 'TCP → SMTP → MAC → IP → Physical signal', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q22',
      question: 'Why did the OSI model fail to replace the TCP/IP protocol suite?',
      questionAr: 'لماذا فشل نموذج OSI في استبدال مجموعة بروتوكولات TCP/IP؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Because OSI used too few layers compared to TCP/IP', isCorrect: false },
        { id: 'b', text: 'Because TCP/IP was already fully deployed when OSI was completed, and some OSI layers were never fully defined', isCorrect: true },
        { id: 'c', text: 'Because OSI did not support packet switching', isCorrect: false },
        { id: 'd', text: 'Because OSI could not support IP addressing', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q23',
      question: '[MID] The traditional Internet operates on the concept of "intelligent end systems and dummy core." What does this mean?',
      questionAr: '[MID] يعمل الإنترنت التقليدي على مفهوم "الأنظمة الطرفية الذكية والقلب البسيط". ماذا يعني ذلك؟',
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Routers handle complex application logic; end systems only forward packets', isCorrect: false },
        { id: 'b', text: 'Complex processing (reliability, error control) is handled at end systems; the network core (routers) simply forwards packets on a best-effort basis', isCorrect: true },
        { id: 'c', text: 'The network core is physically smarter than end systems because it has more hardware', isCorrect: false },
        { id: 'd', text: 'End systems are dumb terminals; all intelligence is in the ISP infrastructure', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q24',
      question: 'An IPv4 address is 32 bits; an IPv6 address is 128 bits. How many more unique addresses does IPv6 support compared to IPv4 (in terms of address space multiplier)?',
      questionAr: 'عنوان IPv4 هو 32 بت؛ عنوان IPv6 هو 128 بت. بكم مرة يدعم IPv6 عناوين أكثر من IPv4؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '4 times more', isCorrect: false },
        { id: 'b', text: '96 times more', isCorrect: false },
        { id: 'c', text: '2^96 times more (approximately 79 undecillion times)', isCorrect: true },
        { id: 'd', text: '128 times more', isCorrect: false },
      ],
    },
    {
      id: 'cn-l2-q25',
      question: 'Which of the following statements about the two principles of protocol layering is correct?',
      questionAr: 'أي مما يلي صحيح فيما يخص المبدأين اللذين يحكمان تصميم طبقات البروتوكول؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Each layer must perform the same single task on both the sender and receiver sides', isCorrect: false },
        { id: 'b', text: 'Each layer performs two opposite tasks; and the two peer entities (same layer, both sides) must use identical objects/protocols', isCorrect: true },
        { id: 'c', text: 'Layers can share protocols as long as the physical medium is the same', isCorrect: false },
        { id: 'd', text: 'Only the top layer needs to perform opposite tasks; lower layers just pass data through', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'cn-l2-w1',
      question: 'List the main key elements of the Internet and describe each one briefly. (Lecture Question)',
      questionAr: 'اذكر العناصر الرئيسية للإنترنت واشرح كل منها باختصار. (سؤال المحاضرة)',
      modelAnswer:
        '1. Hosts (End Systems): PCs, workstations, servers, and mainframes where applications run. 2. Networks (LAN/WAN): Local or wide-area networks to which hosts connect. 3. Routers: Devices that connect two or more networks and forward packets between them; each router attaches to two or more networks. 4. IP Packets: Units of data that carry the destination IP address and travel independently from source to destination. 5. Internet Service Providers (ISPs): Companies that provide access to the Internet, organized in a hierarchy from local to regional to national/backbone ISPs.',
      modelAnswerAr:
        '1. المضيفون (الأنظمة الطرفية): أجهزة الكمبيوتر ومحطات العمل والخوادم والحاسبات الكبيرة التي تعمل عليها التطبيقات. 2. الشبكات (LAN/WAN): الشبكات المحلية أو الواسعة التي تتصل بها المضيفات. 3. الموجهات: الأجهزة التي تربط شبكتين أو أكثر وتعيد توجيه الحزم بينها. 4. حزم IP: وحدات البيانات التي تحمل عنوان IP للوجهة وتسافر بشكل مستقل من المصدر إلى الوجهة. 5. مزودو خدمة الإنترنت (ISPs): شركات توفر الوصول إلى الإنترنت، مُنظَّمة هرميًا من المحلي إلى الإقليمي إلى الوطني.',
    },
    {
      id: 'cn-l2-w2',
      question: 'What are some of the factors that determine whether a communication system is a LAN or WAN? (Lecture Question)',
      questionAr: 'ما هي بعض العوامل التي تحدد ما إذا كان نظام الاتصال LAN أم WAN؟ (سؤال المحاضرة)',
      modelAnswer:
        'Key factors: 1. Geographic scope: LANs cover a small area (building or small campus); WANs cover large geographical areas crossing public rights-of-way. 2. Ownership: LANs are usually owned by the same organization as the attached devices; WANs rely partly on common carrier circuits. 3. Data rate: LANs have much higher data rates than WANs. 4. Topology: LANs are often broadcast systems; WANs use switching technologies (circuit, packet). 5. Technologies used: LANs use Ethernet/Wi-Fi; WANs use ATM, Frame Relay, circuit switching.',
      modelAnswerAr:
        'العوامل الرئيسية: 1. النطاق الجغرافي: LAN تغطي منطقة صغيرة (مبنى أو حرم صغير)؛ WAN تغطي مناطق جغرافية واسعة. 2. الملكية: عادةً ما تُمتلك LAN من نفس المنظمة التي تمتلك الأجهزة؛ WAN تعتمد جزئياً على دوائر الناقل العام. 3. معدل البيانات: LAN أعلى بكثير في معدلات البيانات. 4. الطوبولوجيا: LAN غالبًا أنظمة بث؛ WAN تستخدم تقنيات تبديل. 5. التقنيات: LAN تستخدم Ethernet/Wi-Fi؛ WAN تستخدم ATM وFrame Relay وتبديل الدائرة.',
    },
    {
      id: 'cn-l2-w3',
      question: 'Describe the four levels of addresses used in the TCP/IP model, the layer that uses each, and whether each changes hop-to-hop.',
      questionAr: 'اشرح المستويات الأربعة من العناوين في نموذج TCP/IP، والطبقة التي تستخدم كل منها، وما إذا كان كل منها يتغير من قفزة إلى أخرى.',
      modelAnswer:
        '1. Physical (MAC) Address: 48-bit address defined by the LAN/WAN; used by the Data Link layer; CHANGES at each hop (router). 2. Logical (IP) Address: 32-bit (IPv4) or 128-bit (IPv6); uniquely identifies a host; used by the Network layer; STAYS SAME end-to-end. 3. Port Address: 16-bit; identifies a specific process on a host; used by the Transport layer; STAYS SAME end-to-end. 4. Specific Address: User-friendly (URL, email); used by the Application layer; converted to IP and port addresses by the sender.',
      modelAnswerAr:
        '1. العنوان المادي (MAC): 48 بت، يُعرَّف بواسطة LAN/WAN، تستخدمه طبقة ارتباط البيانات، يتغير عند كل قفزة. 2. العنوان المنطقي (IP): 32 بت (IPv4) أو 128 بت (IPv6)، يحدد المضيف بشكل فريد، تستخدمه طبقة الشبكة، يبقى ثابتًا من المصدر إلى الوجهة. 3. عنوان المنفذ: 16 بت، يحدد عملية بعينها على المضيف، تستخدمه طبقة النقل، يبقى ثابتًا. 4. العنوان المحدد: سهل الاستخدام (URL، بريد إلكتروني)، تستخدمه طبقة التطبيقات، يُحوَّل إلى عناوين IP ومنافذ بواسطة المرسل.',
    },
    {
      id: 'cn-l2-w4',
      question: 'Compare the OSI model and the TCP/IP model in terms of number of layers, and explain why the OSI model never replaced TCP/IP.',
      questionAr: 'قارن بين نموذج OSI ونموذج TCP/IP من حيث عدد الطبقات، واشرح لماذا لم يحل نموذج OSI محل TCP/IP.',
      modelAnswer:
        'OSI has 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application); TCP/IP has 5 layers (Physical, Data Link, Network, Transport, Application). OSI\'s Session and Presentation layers are merged into TCP/IP\'s Application layer. OSI never replaced TCP/IP for two reasons: (1) TCP/IP was already fully deployed and operational by the time OSI was completed; (2) some OSI layers (especially Session and Presentation) were never fully defined or implemented in practice.',
      modelAnswerAr:
        'OSI له 7 طبقات (المادية، ارتباط البيانات، الشبكة، النقل، الجلسة، العرض، التطبيقات)؛ TCP/IP له 5 طبقات (المادية، ارتباط البيانات، الشبكة، النقل، التطبيقات). طبقتا الجلسة والعرض في OSI مدمجتان في طبقة التطبيقات في TCP/IP. لم يحل OSI محل TCP/IP لسببين: (1) كان TCP/IP مطبَّقًا بالكامل وعملياً عندما اكتمل OSI؛ (2) بعض طبقات OSI (خاصةً الجلسة والعرض) لم تُعرَّف أو تُطبَّق بالكامل عملياً.',
    },
    {
      id: 'cn-l2-w5',
      question: 'Explain the two principles that must be followed in protocol layering to ensure bidirectional communication.',
      questionAr: 'اشرح المبدأين اللذين يجب اتباعهما في تصميم طبقات البروتوكول لضمان الاتصال ثنائي الاتجاه.',
      modelAnswer:
        '1. Each layer must perform two opposite tasks: one task at the sender side (e.g., encapsulation, compression, encryption) and the reverse task at the receiver side (e.g., decapsulation, decompression, decryption). 2. The two peer entities under each layer on both sides must be identical — they must use the same protocol so they can understand each other. Additionally, a logical connection exists between same-level peer layers; a physical connection only truly exists at the Physical layer.',
      modelAnswerAr:
        '1. يجب أن تؤدي كل طبقة مهمتين متعاكستين: مهمة على جانب المرسل (مثل التغليف، الضغط، التشفير) والمهمة العكسية على جانب المستقبل (مثل فك التغليف، فك الضغط، فك التشفير). 2. يجب أن تكون الكيانات المتماثلة تحت كل طبقة على كلا الجانبين متطابقة — يجب أن يستخدما نفس البروتوكول لفهم بعضهما. بالإضافة إلى ذلك، يوجد اتصال منطقي بين طبقات متماثلة المستوى؛ الاتصال المادي الحقيقي موجود فقط عند الطبقة المادية.',
    },
    {
      id: 'cn-l2-w6',
      question: 'Describe the purpose of each of the five TCP/IP layers and give one example protocol for each.',
      questionAr: 'صِف الغرض من كل طبقة من الطبقات الخمس لـ TCP/IP وأعطِ مثالاً على بروتوكول لكل طبقة.',
      modelAnswer:
        '1. Physical: Transmits raw bit streams over physical media — deals with electrical/optical signals, cables, connectors. (Example: fiber optic cables, copper wire) 2. Data Link: Delivers frames reliably between directly connected devices on the same network; handles MAC addressing, framing, error detection. (Example: Ethernet, Wi-Fi/802.11) 3. Network (IP): Routes packets from source to destination across multiple networks using logical (IP) addressing. (Example: IP, ICMP, ARP) 4. Transport: Provides process-to-process delivery; ensures complete, in-order data delivery. (Example: TCP — reliable; UDP — fast) 5. Application: Supports end-user applications and provides application-level services. (Example: HTTP, FTP, SMTP, DNS)',
      modelAnswerAr:
        '1. المادية: ترسل تيارات البتات الخام عبر الوسائط المادية — تتعامل مع الإشارات الكهربائية/الضوئية والكابلات والموصلات. (مثال: كابلات الألياف الضوئية، الأسلاك النحاسية) 2. ارتباط البيانات: تُسلِّم الإطارات بشكل موثوق بين الأجهزة المتصلة مباشرةً على نفس الشبكة؛ تتعامل مع عناوين MAC والإطارات واكتشاف الأخطاء. (مثال: Ethernet، Wi-Fi) 3. الشبكة (IP): تُوجِّه الحزم من المصدر إلى الوجهة عبر شبكات متعددة باستخدام العنونة المنطقية (IP). (مثال: IP، ICMP، ARP) 4. النقل: توفر التسليم من عملية إلى عملية؛ تضمن اكتمال البيانات وترتيبها. (مثال: TCP — موثوق؛ UDP — سريع) 5. التطبيقات: تدعم تطبيقات المستخدم النهائي وتوفر خدمات على مستوى التطبيق. (مثال: HTTP، FTP، SMTP، DNS)',
    },
  ],
};