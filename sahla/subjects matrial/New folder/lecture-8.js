export const LECTURE = {
  subjectId: 'computer-networks',
  number: 8,
  title: 'Network Layer 2',
  titleAr: 'طبقة الشبكة 2',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Direct vs Indirect Delivery</h2>
<p>The main goal of the network layer is the delivery of packets to their final destination.</p>
<ul>
  <li><strong>Direct Delivery:</strong> The source and destination hosts are on the same network (subnet). The packet is delivered directly without passing through a router (uses ARP).</li>
  <li><strong>Indirect Delivery:</strong> The source and destination are on different networks. The packet is sent to a router (default gateway), which forwards it toward the destination.</li>
</ul>

<h2>Router Architecture</h2>
<p>A router has two main functions: Routing (Control Plane) and Forwarding (Data Plane).</p>
<ol>
  <li><strong>Input Ports:</strong> Perform line termination, data link processing, and decentralized switching (lookup in the forwarding table, queueing).</li>
  <li><strong>Switching Fabric:</strong> Transfers packets from input to output ports. Types include Memory, Bus, and Crossbar (the fastest, allows parallel transfers).</li>
  <li><strong>Output Ports:</strong> Store packets, perform queuing (buffering), and scheduling (e.g., FIFO, Priority). If packets arrive faster than the link can send them, they wait in the queue, causing <em>delay</em>. If the buffer fills up, packets are dropped.</li>
</ol>

<h2>IPv4 Fragmentation and IP Addressing</h2>
<p>Each network link has a Maximum Transmission Unit (MTU). If an IP datagram is larger than the MTU, the router fragments it into smaller pieces. <strong>Reassembly of fragments happens ONLY at the final destination host</strong>, not in the routers.</p>
<p>An IPv4 address is a 32-bit identifier. Importantly, an IP address belongs to an <strong>interface</strong> (connection point), not the entire device. Therefore, a router connecting multiple networks has multiple interfaces and multiple IP addresses.</p>
<div class="callout callout-info">
  <strong>Subnets and CIDR:</strong> A subnet is a logical section of a network where devices share the high-order bits of their IP address and can communicate directly without a router. Modern networks use CIDR (Classless Inter-Domain Routing), which replaces fixed classes (A, B, C) with a flexible subnet mask (e.g., /24).
</div>

<h2>DHCP and NAT</h2>
<ul>
  <li><strong>DHCP (Dynamic Host Configuration Protocol):</strong> Automatically assigns an IP address, subnet mask, default gateway, and DNS to a host when it joins a network ("plug-and-play").</li>
  <li><strong>NAT (Network Address Translation):</strong> Allows a private network to use a single public IP address to communicate with the Internet. The NAT router translates between internal private IP/port combinations and the external public IP/port. This saves public IP addresses and improves security.</li>
</ul>

<h2>IPv6 and Tunneling</h2>
<p>IPv6 uses 128-bit addresses to solve the IPv4 address exhaustion problem. Its header is fixed at 40 bytes to speed up router processing. Unlike IPv4, <strong>routers do NOT fragment IPv6 packets</strong> (there is no checksum field either).</p>
<p>To transition from IPv4 to IPv6, we use <strong>Tunneling</strong>: an IPv6 packet is encapsulated inside an IPv4 packet as payload to travel through IPv4-only routers.</p>`,
        bodyAr: `<h2>التسليم المباشر مقابل غير المباشر</h2>
<p>الهدف الرئيسي لطبقة الشبكة هو تسليم الحزم إلى وجهتها النهائية.</p>
<ul>
  <li><strong>التسليم المباشر:</strong> يكون المضيف المصدر والوجهة على نفس الشبكة (الشبكة الفرعية). يتم تسليم الحزمة مباشرة دون المرور عبر موجه (يستخدم ARP).</li>
  <li><strong>التسليم غير المباشر:</strong> يكون المصدر والوجهة على شبكات مختلفة. يتم إرسال الحزمة إلى موجه (البوابة الافتراضية)، والذي يعيد توجيهها نحو الوجهة.</li>
</ul>

<h2>بنية الموجه (Router Architecture)</h2>
<p>للموجه وظيفتان رئيسيتان: التوجيه (مستوى التحكم) وإعادة التوجيه (مستوى البيانات).</p>
<ol>
  <li><strong>منافذ الإدخال:</strong> تقوم بإنهاء الخط، ومعالجة ارتباط البيانات، والتبديل اللامركزي (البحث في جدول إعادة التوجيه، والاصطفاف).</li>
  <li><strong>نسيج التبديل (Switching Fabric):</strong> ينقل الحزم من منافذ الإدخال إلى منافذ الإخراج. تشمل الأنواع الذاكرة، والناقل، والتبديل المتقاطع (Crossbar - الأسرع، يسمح بالنقل المتوازي).</li>
  <li><strong>منافذ الإخراج:</strong> تخزن الحزم، وتقوم بالاصطفاف (التخزين المؤقت)، والجدولة (مثل FIFO، الأولوية). إذا وصلت الحزم بشكل أسرع مما يمكن للارتباط إرساله، فإنها تنتظر في قائمة الانتظار، مما يسبب <em>تأخيرًا</em>. إذا امتلأ المخزن المؤقت، يتم إسقاط الحزم.</li>
</ol>

<h2>تجزئة IPv4 وعنونة IP</h2>
<p>يحتوي كل ارتباط شبكة على وحدة إرسال قصوى (MTU). إذا كان مخطط بيانات IP أكبر من MTU، يقوم الموجه بتجزئته إلى قطع أصغر. <strong>تحدث إعادة تجميع الأجزاء فقط في المضيف الوجهة النهائية</strong>، وليس في الموجهات.</p>
<p>عنوان IPv4 هو معرف مكون من 32 بت. والأهم من ذلك، أن عنوان IP ينتمي إلى <strong>واجهة (Interface)</strong> (نقطة اتصال)، وليس للجهاز بأكمله. لذلك، فإن الموجه الذي يربط شبكات متعددة لديه واجهات متعددة وعناوين IP متعددة.</p>
<div class="callout callout-info">
  <strong>الشبكات الفرعية و CIDR:</strong> الشبكة الفرعية هي قسم منطقي من شبكة حيث تتشارك الأجهزة في البتات عالية الترتيب من عنوان IP الخاص بها ويمكنها الاتصال مباشرة بدون موجه. تستخدم الشبكات الحديثة CIDR الذي يستبدل الفئات الثابتة (A، B، C) بقناع شبكة فرعية مرن (مثل /24).
</div>

<h2>DHCP و NAT</h2>
<ul>
  <li><strong>DHCP:</strong> يعين تلقائيًا عنوان IP وقناع الشبكة الفرعية والبوابة الافتراضية و DNS للمضيف عند انضمامه إلى شبكة ("التوصيل والتشغيل").</li>
  <li><strong>NAT (ترجمة عنوان الشبكة):</strong> يسمح لشبكة خاصة باستخدام عنوان IP عام واحد للاتصال بالإنترنت. يترجم موجه NAT بين مجموعات IP/المنفذ الخاصة الداخلية و IP/المنفذ العام الخارجي. هذا يوفر عناوين IP العامة ويحسن الأمان.</li>
</ul>

<h2>IPv6 والأنفاق (Tunneling)</h2>
<p>يستخدم IPv6 عناوين 128 بت لحل مشكلة استنفاد عناوين IPv4. رأسه ثابت عند 40 بايت لتسريع معالجة الموجه. على عكس IPv4، <strong>لا تقوم الموجهات بتجزئة حزم IPv6</strong> (ولا يوجد حقل المجموع الاختباري).</p>
<p>للانتقال من IPv4 إلى IPv6، نستخدم <strong>الأنفاق (Tunneling)</strong>: يتم تغليف حزمة IPv6 داخل حزمة IPv4 كحمولة للسفر عبر موجهات IPv4 فقط.</p>`
      }
    }
  ],

  summary: {
    points: [
      "Routers process packets using Input Ports, Switching Fabric, and Output Ports.",
      "IPv4 fragments large packets to fit MTU; reassembly happens only at the final destination.",
      "IP addresses are assigned to network interfaces, so routers have multiple IPs.",
      "CIDR allows flexible subnet masks, replacing fixed Class A/B/C addressing.",
      "DHCP dynamically assigns IPs to hosts.",
      "NAT translates private IP addresses to a single public IP to save addresses and enhance security.",
      "IPv6 uses 128-bit addresses and a fixed 40-byte header with no fragmentation by routers.",
      "Tunneling allows IPv6 packets to cross IPv4 networks by encapsulating them inside IPv4 datagrams."
    ],
    pointsAr: [
      "تقوم الموجهات بمعالجة الحزم باستخدام منافذ الإدخال ونسيج التبديل ومنافذ الإخراج.",
      "يقوم IPv4 بتجزئة الحزم الكبيرة لتناسب MTU؛ تحدث إعادة التجميع فقط في الوجهة النهائية.",
      "يتم تخصيص عناوين IP لواجهات الشبكة، لذلك تمتلك الموجهات عناوين IP متعددة.",
      "يسمح CIDR بأقنعة شبكة فرعية مرنة، مما يحل محل عنونة الفئة A/B/C الثابتة.",
      "يعين DHCP عناوين IP ديناميكيًا للمضيفين.",
      "يترجم NAT عناوين IP الخاصة إلى عنوان IP عام واحد لتوفير العناوين وتعزيز الأمان.",
      "يستخدم IPv6 عناوين 128 بت ورأسًا ثابتًا بحجم 40 بايت بدون تجزئة بواسطة الموجهات.",
      "يسمح النفق (Tunneling) لحزم IPv6 بعبور شبكات IPv4 عن طريق تغليفها داخل مخططات بيانات IPv4."
    ]
  },

  mcq: [
    {
      id: 'cn-l8-q1',
      question: "Which of the following switching fabric types allows multiple packets to be forwarded in parallel?",
      questionAr: "أي من أنواع نسيج التبديل التالية يسمح بإعادة توجيه حزم متعددة بالتوازي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Memory Switching', isCorrect: false },
        { id: 'b', text: 'Bus Switching', isCorrect: false },
        { id: 'c', text: 'Crossbar Switching', isCorrect: true },
        { id: 'd', text: 'Ring Switching', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q2',
      question: "Where are fragmented IPv4 datagrams reassembled?",
      questionAr: "أين يتم إعادة تجميع مخططات بيانات IPv4 المجزأة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'At the next hop router', isCorrect: false },
        { id: 'b', text: 'At the router where congestion occurs', isCorrect: false },
        { id: 'c', text: 'Only at the final destination host', isCorrect: true },
        { id: 'd', text: 'At the NAT router', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q3',
      question: "[MID] Which protocol dynamically assigns an IP address to a host when it joins a network?",
      questionAr: "[MID] ما هو البروتوكول الذي يعين ديناميكيًا عنوان IP للمضيف عند انضمامه إلى شبكة؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'NAT', isCorrect: false },
        { id: 'b', text: 'ARP', isCorrect: false },
        { id: 'c', text: 'DHCP', isCorrect: true },
        { id: 'd', text: 'OSPF', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q4',
      question: "What is the primary motivation for using Network Address Translation (NAT)?",
      questionAr: "ما هو الدافع الرئيسي لاستخدام ترجمة عنوان الشبكة (NAT)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To encrypt data packets over the Internet', isCorrect: false },
        { id: 'b', text: 'To allow an entire local network to use just one public IP address', isCorrect: true },
        { id: 'c', text: 'To translate IPv4 packets into IPv6 packets', isCorrect: false },
        { id: 'd', text: 'To route packets based on MAC addresses', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q5',
      question: "How long is an IPv6 address?",
      questionAr: "ما هو طول عنوان IPv6؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '32 bits', isCorrect: false },
        { id: 'b', text: '48 bits', isCorrect: false },
        { id: 'c', text: '64 bits', isCorrect: false },
        { id: 'd', text: '128 bits', isCorrect: true }
      ]
    },
    {
      id: 'cn-l8-q6',
      question: "[MID] Which of the following is true about the IPv6 header compared to IPv4?",
      questionAr: "[MID] أي مما يلي صحيح حول رأس IPv6 مقارنة بـ IPv4؟",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'It has a variable length.', isCorrect: false },
        { id: 'b', text: 'It has a fixed 40-byte length and no checksum field.', isCorrect: true },
        { id: 'c', text: 'Routers perform fragmentation more efficiently.', isCorrect: false },
        { id: 'd', text: 'It uses 32-bit addresses for backward compatibility.', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q7',
      question: "How does 'Tunneling' help in the transition from IPv4 to IPv6?",
      questionAr: "كيف تساعد 'الأنفاق' (Tunneling) في الانتقال من IPv4 إلى IPv6؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'By permanently upgrading all IPv4 routers to IPv6 at once', isCorrect: false },
        { id: 'b', text: 'By carrying IPv6 packets as payload inside IPv4 datagrams', isCorrect: true },
        { id: 'c', text: 'By assigning public IPv4 addresses to IPv6 hosts', isCorrect: false },
        { id: 'd', text: 'By fragmenting IPv6 packets into smaller IPv4 fragments', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q8',
      question: "What causes queueing delay at a router's output port?",
      questionAr: "ما الذي يسبب تأخير الاصطفاف (queueing delay) في منفذ إخراج الموجه؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'When the routing algorithm takes too long to compute the path', isCorrect: false },
        { id: 'b', text: 'When datagrams arrive from the switch fabric faster than the outgoing link transmission rate', isCorrect: true },
        { id: 'c', text: 'When the MTU is larger than the packet size', isCorrect: false },
        { id: 'd', text: 'When decentralized switching fails', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q9',
      question: "Which IP class provides a default subnet mask of 255.255.255.0?",
      questionAr: "أي فئة IP توفر قناع شبكة فرعية افتراضي 255.255.255.0؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Class A', isCorrect: false },
        { id: 'b', text: 'Class B', isCorrect: false },
        { id: 'c', text: 'Class C', isCorrect: true },
        { id: 'd', text: 'Class D', isCorrect: false }
      ]
    },
    {
      id: 'cn-l8-q10',
      question: "In the context of IP addressing, what is a subnet?",
      questionAr: "في سياق عنونة IP، ما هي الشبكة الفرعية (Subnet)؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'A group of routers sharing a common BGP routing table', isCorrect: false },
        { id: 'b', text: 'A logical section of a network where devices share the same high-order IP bits and communicate without a router', isCorrect: true },
        { id: 'c', text: 'A mechanism to translate private IPs to public IPs', isCorrect: false },
        { id: 'd', text: 'The part of the router architecture that switches packets to output ports', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l8-w1',
      question: "Explain the difference between Direct and Indirect Delivery.",
      questionAr: "اشرح الفرق بين التسليم المباشر (Direct Delivery) والتسليم غير المباشر (Indirect Delivery).",
      modelAnswer: "Direct delivery occurs when the source and destination are on the same local network (subnet), and packets are sent directly using MAC addresses (via ARP) without needing a router. Indirect delivery happens when the destination is on a different network, requiring the source to send the packet to a default gateway (router) to be forwarded.",
      modelAnswerAr: "يحدث التسليم المباشر عندما يكون المصدر والوجهة على نفس الشبكة المحلية (الشبكة الفرعية)، ويتم إرسال الحزم مباشرة باستخدام عناوين MAC (عبر ARP) دون الحاجة إلى موجه. بينما يحدث التسليم غير المباشر عندما تكون الوجهة على شبكة مختلفة، مما يتطلب من المصدر إرسال الحزمة إلى بوابة افتراضية (موجه) لإعادة توجيهها."
    },
    {
      id: 'cn-l8-w2',
      question: "Why do routers have multiple IP addresses while hosts typically have only one?",
      questionAr: "لماذا تمتلك الموجهات عناوين IP متعددة بينما تمتلك الأجهزة المضيفة عادةً عنوانًا واحدًا فقط؟",
      modelAnswer: "An IP address is assigned to a network interface, not the device as a whole. A host typically has one interface connecting it to a single network. A router, by definition, connects multiple different networks, so it has multiple interfaces, each requiring a distinct IP address for the network it connects to.",
      modelAnswerAr: "يتم تعيين عنوان IP لواجهة شبكة، وليس للجهاز ككل. عادةً ما يكون للمضيف واجهة واحدة تربطه بشبكة واحدة. أما الموجه، بحكم تعريفه، فهو يربط شبكات مختلفة متعددة، لذلك يمتلك واجهات متعددة، تتطلب كل منها عنوان IP مميزًا للشبكة التي يتصل بها."
    },
    {
      id: 'cn-l8-w3',
      question: "Describe the concept of 'Tunneling' in the transition from IPv4 to IPv6.",
      questionAr: "صف مفهوم 'الأنفاق' (Tunneling) في الانتقال من IPv4 إلى IPv6.",
      modelAnswer: "Tunneling is a transition mechanism used when an IPv6 packet needs to travel across an IPv4-only network. The original IPv6 packet is encapsulated inside the payload of an IPv4 datagram by an entry router, transported across the IPv4 network, and then decapsulated by an exit router back into an IPv6 packet.",
      modelAnswerAr: "النفق (Tunneling) هي آلية انتقال تُستخدم عندما تحتاج حزمة IPv6 للسفر عبر شبكة تدعم IPv4 فقط. يتم تغليف حزمة IPv6 الأصلية كحمولة داخل مخطط بيانات IPv4 بواسطة موجه الدخول، وتُنقل عبر شبكة IPv4، ثم يتم فك تغليفها بواسطة موجه الخروج وإعادتها كحزمة IPv6."
    }
  ]
};
