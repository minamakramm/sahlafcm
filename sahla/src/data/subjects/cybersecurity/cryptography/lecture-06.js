export const LECTURE = {
  subjectId: 'crypto',
  number: 6,
  title: 'Network Layer Security (IPSec)',
  titleAr: 'أمن طبقة الشبكة (IPSec)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>OSI vs TCP/IP Layers</h2>
<p>The OSI model has <strong>7 layers</strong> while the TCP/IP model has <strong>5 layers</strong>: Physical, Data Link, Network, Transport, and Application. The application layer is the only layer that directly interacts with data from the user.</p>

<h2>Functions of the Internet Model</h2>
<ul>
  <li>The TCP/IP model is the foundation of the internet.</li>
  <li><strong>TCP</strong> ensures reliable data transmission through packet numbering, port numbers, and sequencing.</li>
  <li><strong>IP</strong> enables correct addressing and routing from source to destination.</li>
  <li>It offers flexibility, platform independence, and high reliability for heterogeneous devices.</li>
</ul>

<h2>Addressing Types</h2>
<ul>
  <li><strong>Physical (MAC) addresses:</strong> Local jurisdiction only; used within the same network (Data Link layer).</li>
  <li><strong>Network (IP) addresses:</strong> Universal, logical addresses that can cross LAN boundaries (Network layer).</li>
  <li><strong>Port numbers:</strong> Identify specific processes/services at the Transport layer.</li>
</ul>

<h2>IP Security (IPSec)</h2>
<p>IPSec is a collection of protocols designed by the <strong>IETF</strong> to provide security at the <strong>network level</strong>.</p>
<p>Key topics:</p>
<ul>
  <li>Two Modes of IPSec</li>
  <li>Two Security Protocols</li>
  <li>Security Association</li>
  <li>Virtual Private Networks (VPN)</li>
</ul>

<h2>IPSec Modes</h2>
<ul>
  <li><strong>Transport Mode:</strong> Does NOT protect the IP header; only protects data from the transport layer.</li>
  <li><strong>Tunnel Mode:</strong> Protects the <strong>entire original IP packet</strong> (including the original IP header) by encapsulating it in a new IP packet.</li>
</ul>

<h2>Virtual Private Networks (VPN)</h2>
<p>A VPN uses the global Internet for intra- and inter-organization communication while providing <strong>privacy</strong>. It uses <strong>tunneling</strong> to encapsulate private data within public network packets.</p>
<p>VPN technology allows large organizations to use private addresses internally while communicating securely over the public Internet.</p>

<h2>Network Address Translation (NAT)</h2>
<p>NAT allows a site to use <strong>private addresses</strong> internally and <strong>global Internet addresses</strong> externally. The site needs only one connection to the Internet through a NAT-enabled router. NAT translates between private and public addresses, enabling multiple internal devices to share a single public IP.</p>`,

        bodyAr: `<h2>نموذج OSI مقابل TCP/IP</h2>
<p>نموذج OSI يحتوي على <strong>7 طبقات</strong> بينما نموذج TCP/IP يحتوي على <strong>5 طبقات</strong>: الفيزيائية، ربط البيانات، الشبكة، النقل، والتطبيقات. طبقة التطبيقات هي الطبقة الوحيدة التي تتعامل مباشرة مع بيانات المستخدم.</p>

<h2>وظائف نموذج الإنترنت</h2>
<ul>
  <li>نموذج TCP/IP هو أساس الإنترنت.</li>
  <li><strong>TCP</strong> يضمن نقل البيانات الموثوق من خلال ترقيم الحزم وأرقام المنافذ والتسلسل.</li>
  <li><strong>IP</strong> يُمكّن العنونة والتوجيه الصحيح من المصدر إلى الوجهة.</li>
  <li>يوفر المرونة واستقلالية المنصة والموثوقية العالية للأجهزة المتنوعة.</li>
</ul>

<h2>أنواع العناوين</h2>
<ul>
  <li><strong>العناوين الفيزيائية (MAC):</strong> اختصاص محلي فقط؛ تُستخدم داخل نفس الشبكة (طبقة ربط البيانات).</li>
  <li><strong>عناوين الشبكة (IP):</strong> عناوين منطقية عالمية يمكنها عبور حدود LAN (طبقة الشبكة).</li>
  <li><strong>أرقام المنافذ:</strong> تحدد عمليات/خدمات معينة في طبقة النقل.</li>
</ul>

<h2>أمن بروتوكول الإنترنت (IPSec)</h2>
<p>IPSec هو مجموعة بروتوكولات صممها <strong>IETF</strong> لتوفير الأمان على مستوى <strong>الشبكة</strong>.</p>

<h2>أوضاع IPSec</h2>
<ul>
  <li><strong>وضع النقل (Transport):</strong> لا يحمي رأس IP؛ يحمي فقط بيانات طبقة النقل.</li>
  <li><strong>وضع النفق (Tunnel):</strong> يحمي <strong>حزمة IP الأصلية بالكامل</strong> بتغليفها في حزمة IP جديدة.</li>
</ul>

<h2>الشبكات الخاصة الافتراضية (VPN)</h2>
<p>VPN تستخدم الإنترنت العام للاتصال داخل وبين المنظمات مع توفير <strong>الخصوصية</strong>. تستخدم <strong>الأنفاق</strong> لتغليف البيانات الخاصة داخل حزم الشبكة العامة.</p>

<h2>ترجمة عناوين الشبكة (NAT)</h2>
<p>NAT يسمح للموقع باستخدام <strong>عناوين خاصة</strong> داخليًا و<strong>عناوين إنترنت عامة</strong> خارجيًا. الموقع يحتاج اتصالًا واحدًا فقط بالإنترنت عبر موجه يدعم NAT. يترجم NAT بين العناوين الخاصة والعامة.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "The TCP/IP model has 5 layers; the application layer directly interacts with user data.",
      "IPSec provides security at the network layer with two modes: Transport (protects payload only) and Tunnel (protects entire IP packet).",
      "Physical (MAC) addresses are local; IP addresses are logical and can cross LAN boundaries.",
      "VPNs use tunneling over the public Internet to provide private, secure communication.",
      "NAT translates private internal addresses to public addresses, allowing multiple devices to share one public IP."
    ],
    pointsAr: [
      "نموذج TCP/IP يحتوي على 5 طبقات؛ طبقة التطبيقات تتعامل مباشرة مع بيانات المستخدم.",
      "IPSec يوفر الأمان في طبقة الشبكة بوضعين: النقل (يحمي الحمولة فقط) والنفق (يحمي حزمة IP بالكامل).",
      "عناوين MAC محلية؛ عناوين IP منطقية ويمكنها عبور حدود LAN.",
      "VPN تستخدم الأنفاق عبر الإنترنت العام لتوفير اتصال خاص وآمن.",
      "NAT يترجم العناوين الخاصة الداخلية إلى عناوين عامة، مما يسمح لأجهزة متعددة بمشاركة IP عام واحد."
    ],
  },

  mcq: [
    {
      id: 'crypto-l6-q1',
      question: "IPSec operates at which layer of the network model?",
      questionAr: "IPSec يعمل في أي طبقة من نموذج الشبكة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Application layer', isCorrect: false },
        { id: 'b', text: 'Transport layer', isCorrect: false },
        { id: 'c', text: 'Network layer', isCorrect: true },
        { id: 'd', text: 'Data Link layer', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q2',
      question: "In IPSec Transport mode, what is protected?",
      questionAr: "في وضع النقل لـ IPSec، ما الذي يتم حمايته؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The entire IP packet including the header', isCorrect: false },
        { id: 'b', text: 'Only the data from the transport layer', isCorrect: true },
        { id: 'c', text: 'Only the IP header', isCorrect: false },
        { id: 'd', text: 'Nothing is protected', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q3',
      question: "Which IPSec mode protects the original IP header?",
      questionAr: "أي وضع من أوضاع IPSec يحمي رأس IP الأصلي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Transport mode', isCorrect: false },
        { id: 'b', text: 'Tunnel mode', isCorrect: true },
        { id: 'c', text: 'Both modes equally', isCorrect: false },
        { id: 'd', text: 'Neither mode', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q4',
      question: "Physical (MAC) addresses have what kind of jurisdiction?",
      questionAr: "عناوين MAC الفيزيائية لها أي نوع من الاختصاص؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Global', isCorrect: false },
        { id: 'b', text: 'Local', isCorrect: true },
        { id: 'c', text: 'Regional', isCorrect: false },
        { id: 'd', text: 'Universal', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q5',
      question: "What does NAT stand for?",
      questionAr: "ما هو اختصار NAT؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Network Access Token', isCorrect: false },
        { id: 'b', text: 'Network Address Translation', isCorrect: true },
        { id: 'c', text: 'Node Authentication Technology', isCorrect: false },
        { id: 'd', text: 'Network Application Transfer', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q6',
      question: "How many layers does the TCP/IP model have?",
      questionAr: "كم عدد طبقات نموذج TCP/IP؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '4', isCorrect: false },
        { id: 'b', text: '5', isCorrect: true },
        { id: 'c', text: '7', isCorrect: false },
        { id: 'd', text: '3', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q7',
      question: "VPN stands for:",
      questionAr: "VPN اختصار لـ:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Virtual Public Network', isCorrect: false },
        { id: 'b', text: 'Virtual Private Network', isCorrect: true },
        { id: 'c', text: 'Verified Private Node', isCorrect: false },
        { id: 'd', text: 'Virtual Protocol Network', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q8',
      question: "Which layer is the only one that directly interacts with user data?",
      questionAr: "أي طبقة هي الوحيدة التي تتعامل مباشرة مع بيانات المستخدم؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Network layer', isCorrect: false },
        { id: 'b', text: 'Transport layer', isCorrect: false },
        { id: 'c', text: 'Application layer', isCorrect: true },
        { id: 'd', text: 'Data Link layer', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q9',
      question: "IPSec was designed by which organization?",
      questionAr: "IPSec صُمم بواسطة أي منظمة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'IEEE', isCorrect: false },
        { id: 'b', text: 'IETF', isCorrect: true },
        { id: 'c', text: 'NIST', isCorrect: false },
        { id: 'd', text: 'ISO', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l6-q10',
      question: "Port numbers identify processes at which layer?",
      questionAr: "أرقام المنافذ تحدد العمليات في أي طبقة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Network layer', isCorrect: false },
        { id: 'b', text: 'Application layer', isCorrect: false },
        { id: 'c', text: 'Transport layer', isCorrect: true },
        { id: 'd', text: 'Data Link layer', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l6-w1',
      question: "Compare IPSec Transport mode and Tunnel mode.",
      questionAr: "قارن بين وضع النقل ووضع النفق في IPSec.",
      modelAnswer: "Transport Mode: Only protects the payload (data from the transport layer); the original IP header is left unprotected. Used for end-to-end communication between two hosts. Tunnel Mode: Protects the entire original IP packet (including the IP header) by encapsulating it in a new IP packet with a new header. Used for gateway-to-gateway communication, commonly in VPNs.",
      modelAnswerAr: "وضع النقل: يحمي الحمولة فقط (بيانات طبقة النقل)؛ رأس IP الأصلي يبقى غير محمي. يُستخدم للاتصال من طرف لطرف بين مضيفين. وضع النفق: يحمي حزمة IP الأصلية بالكامل (بما في ذلك رأس IP) بتغليفها في حزمة IP جديدة برأس جديد. يُستخدم للاتصال بين البوابات، شائع في VPN.",
    },
    {
      id: 'crypto-l6-w2',
      question: "Explain how NAT works and why it is useful.",
      questionAr: "اشرح كيف يعمل NAT ولماذا هو مفيد.",
      modelAnswer: "NAT (Network Address Translation) allows internal devices to use private IP addresses while communicating externally using one or few public IP addresses. A NAT-enabled router translates private addresses to public ones for outgoing traffic and reverses the translation for incoming traffic. This is useful because: (1) it conserves the limited pool of public IPv4 addresses, (2) it provides a layer of security by hiding internal network structure, and (3) it allows an entire organization to connect to the Internet through a single public IP.",
      modelAnswerAr: "NAT (ترجمة عناوين الشبكة) يسمح للأجهزة الداخلية باستخدام عناوين IP خاصة أثناء الاتصال خارجيًا باستخدام عنوان أو عدة عناوين IP عامة. الموجه المزود بـ NAT يترجم العناوين الخاصة إلى عامة للحركة الصادرة ويعكس الترجمة للحركة الواردة. هذا مفيد لأنه: (1) يحافظ على مجموعة عناوين IPv4 العامة المحدودة، (2) يوفر طبقة أمان بإخفاء هيكل الشبكة الداخلية، (3) يسمح لمنظمة بأكملها بالاتصال بالإنترنت عبر IP عام واحد.",
    },
    {
      id: 'crypto-l6-w3',
      question: "Differentiate between physical addresses, network addresses, and port numbers.",
      questionAr: "فرّق بين العناوين الفيزيائية وعناوين الشبكة وأرقام المنافذ.",
      modelAnswer: "Physical (MAC) addresses: Used at the Data Link layer, have local jurisdiction (valid only within the same network segment). Network (IP) addresses: Used at the Network layer, are logical and universal, can cross LAN boundaries for routing between different networks. Port numbers: Used at the Transport layer, identify specific processes or services running on a host (e.g., port 80 for HTTP, port 443 for HTTPS).",
      modelAnswerAr: "العناوين الفيزيائية (MAC): تُستخدم في طبقة ربط البيانات، لها اختصاص محلي (صالحة فقط داخل نفس جزء الشبكة). عناوين الشبكة (IP): تُستخدم في طبقة الشبكة، منطقية وعالمية، يمكنها عبور حدود LAN للتوجيه بين شبكات مختلفة. أرقام المنافذ: تُستخدم في طبقة النقل، تحدد عمليات أو خدمات معينة تعمل على المضيف.",
    },
  ],
};
