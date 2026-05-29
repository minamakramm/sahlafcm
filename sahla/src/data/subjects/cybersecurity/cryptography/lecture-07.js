export const LECTURE = {
  subjectId: 'crypto',
  number: 7,
  title: 'Transport & Application Layer Security (SSL/TLS & E-Mail)',
  titleAr: 'أمن طبقة النقل والتطبيقات (SSL/TLS والبريد الإلكتروني)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>TCP Basics: Port Numbers</h2>
<p>Port numbers range from <strong>0 to 65535</strong> (16 bits), assigned by IANA, divided into 3 categories:</p>
<ul>
  <li><strong>Well-known ports (0–1023):</strong> Reserved for standard services (e.g., HTTP=80, HTTPS=443, FTP=21).</li>
  <li><strong>Registered ports (1024–49151):</strong> Assigned to specific applications.</li>
  <li><strong>Dynamic/Private ports (49152–65535):</strong> For temporary connections.</li>
</ul>

<h2>SSL/TLS</h2>
<p>Two dominant protocols provide security at the <strong>transport layer</strong>:</p>
<ul>
  <li><strong>SSL (Secure Sockets Layer):</strong> Originally developed by Netscape. Version 3 was designed with public input.</li>
  <li><strong>TLS (Transport Layer Security):</strong> The IETF standardized version of SSL. Uses TCP for reliable end-to-end service.</li>
</ul>
<p>TLS has <strong>two layers of protocols</strong> and provides:</p>
<ul>
  <li><strong>Confidentiality:</strong> Symmetric encryption with a shared secret key defined by the Handshake Protocol. Supported ciphers: AES, IDEA, RC2-40, DES-40, DES, 3DES, RC4.</li>
  <li><strong>Message Integrity:</strong> Using MAC with shared secret key (similar to HMAC). Message is compressed before encryption.</li>
</ul>

<h2>TLS Architecture</h2>
<ul>
  <li><strong>TLS Connection:</strong> A transient, peer-to-peer communication link associated with one TLS session.</li>
  <li><strong>TLS Session:</strong> An association between client and server, created by the Handshake Protocol, defining cryptographic parameters. May be shared by multiple connections.</li>
</ul>

<h2>HTTPS</h2>
<p>HTTPS = HTTP over SSL/TLS. Key points:</p>
<ul>
  <li>Secures communication between browser and server.</li>
  <li>Documented in RFC 2818.</li>
  <li>Uses <strong>https://</strong> instead of http:// and <strong>port 443</strong> instead of 80.</li>
  <li>Encrypts: URL, document contents, form data, cookies, HTTP headers.</li>
</ul>
<div class="callout callout-info"><strong>Tip:</strong> HTTPS = port 443, HTTP = port 80. HTTPS encrypts everything including URLs and cookies.</div>

<h2>E-Mail Security</h2>
<p>Email is one of the most commonly used network services, but by default, contents are <strong>not secured</strong>. Email security enhancements include:</p>
<ul>
  <li><strong>Confidentiality:</strong> Protection from disclosure.</li>
  <li><strong>Authentication:</strong> Verifying the sender.</li>
  <li><strong>Message Integrity:</strong> Protection from modification.</li>
  <li><strong>Non-Repudiation:</strong> Protection from denial by sender or receiver.</li>
</ul>

<h2>Pretty Good Privacy (PGP)</h2>
<p>PGP is a common protocol to secure email at the <strong>application layer</strong>. It authenticates and protects email contents. The sender includes algorithm identifiers and key values in the message.</p>
<p>PGP uses a <strong>session key</strong> (symmetric) for fast data encryption, and the session key itself is encrypted with the recipient's public key (asymmetric).</p>

<h2>GPG (GNU Privacy Guard)</h2>
<p>GPG is a free, open-source implementation of the OpenPGP standard. Key aspects:</p>
<ul>
  <li><strong>Asymmetric Encryption:</strong> Public key for encryption, private key for decryption.</li>
  <li><strong>Digital Signatures:</strong> Verify authenticity and integrity.</li>
  <li><strong>Hybrid System:</strong> Combines symmetric (fast) and asymmetric (secure) encryption.</li>
  <li><strong>Key Management:</strong> Uses a "web of trust" model for managing key pairs.</li>
  <li><strong>Cross-platform:</strong> Available via command-line on Linux/macOS/Windows, or GUI tools like Gpg4win.</li>
</ul>`,

        bodyAr: `<h2>أساسيات TCP: أرقام المنافذ</h2>
<p>أرقام المنافذ تتراوح من <strong>0 إلى 65535</strong> (16 بت)، تُخصصها IANA، مقسمة إلى 3 فئات:</p>
<ul>
  <li><strong>المنافذ المعروفة (0–1023):</strong> محجوزة للخدمات القياسية (مثل HTTP=80، HTTPS=443، FTP=21).</li>
  <li><strong>المنافذ المسجلة (1024–49151):</strong> مُخصصة لتطبيقات محددة.</li>
  <li><strong>المنافذ الديناميكية/الخاصة (49152–65535):</strong> للاتصالات المؤقتة.</li>
</ul>

<h2>SSL/TLS</h2>
<p>بروتوكولان رئيسيان يوفران الأمان في <strong>طبقة النقل</strong>:</p>
<ul>
  <li><strong>SSL (طبقة المقابس الآمنة):</strong> طوّرتها Netscape أصلاً. الإصدار 3 صُمم بمشاركة عامة.</li>
  <li><strong>TLS (أمن طبقة النقل):</strong> النسخة المعيارية من IETF لـ SSL. يستخدم TCP للخدمة الموثوقة.</li>
</ul>
<p>TLS له <strong>طبقتان من البروتوكولات</strong> ويوفر:</p>
<ul>
  <li><strong>السرية:</strong> تشفير متماثل بمفتاح سري مشترك يحدده بروتوكول المصافحة.</li>
  <li><strong>سلامة الرسالة:</strong> باستخدام MAC بمفتاح سري مشترك. تُضغط الرسالة قبل التشفير.</li>
</ul>

<h2>بنية TLS</h2>
<ul>
  <li><strong>اتصال TLS:</strong> رابط اتصال مؤقت بين نظيرين مرتبط بجلسة TLS واحدة.</li>
  <li><strong>جلسة TLS:</strong> ارتباط بين العميل والخادم، يُنشئه بروتوكول المصافحة، يحدد معلمات التشفير.</li>
</ul>

<h2>HTTPS</h2>
<p>HTTPS = HTTP عبر SSL/TLS. النقاط الرئيسية:</p>
<ul>
  <li>يؤمّن الاتصال بين المتصفح والخادم.</li>
  <li>يستخدم <strong>https://</strong> بدلاً من http:// و<strong>المنفذ 443</strong> بدلاً من 80.</li>
  <li>يشفر: عنوان URL، محتويات المستند، بيانات النماذج، ملفات تعريف الارتباط، رؤوس HTTP.</li>
</ul>

<h2>أمن البريد الإلكتروني</h2>
<p>البريد الإلكتروني من أكثر خدمات الشبكة استخدامًا، لكن محتوياته بشكل افتراضي <strong>غير مؤمنة</strong>. تحسينات الأمان تشمل:</p>
<ul>
  <li><strong>السرية:</strong> الحماية من الكشف.</li>
  <li><strong>المصادقة:</strong> التحقق من هوية المرسل.</li>
  <li><strong>سلامة الرسالة:</strong> الحماية من التعديل.</li>
  <li><strong>عدم الإنكار:</strong> الحماية من إنكار المرسل أو المستقبل.</li>
</ul>

<h2>الخصوصية الجيدة جدًا (PGP)</h2>
<p>PGP بروتوكول شائع لتأمين البريد الإلكتروني في <strong>طبقة التطبيقات</strong>. يصادق ويحمي محتويات البريد. يستخدم <strong>مفتاح جلسة</strong> (متماثل) للتشفير السريع، ويُشفر مفتاح الجلسة بالمفتاح العام للمستقبل.</p>

<h2>GPG (حارس خصوصية GNU)</h2>
<p>GPG تطبيق مفتوح المصدر لمعيار OpenPGP. الجوانب الرئيسية:</p>
<ul>
  <li><strong>التشفير غير المتماثل:</strong> المفتاح العام للتشفير، الخاص لفك التشفير.</li>
  <li><strong>التوقيعات الرقمية:</strong> للتحقق من الأصالة والسلامة.</li>
  <li><strong>نظام هجين:</strong> يجمع بين التشفير المتماثل (السريع) وغير المتماثل (الآمن).</li>
  <li><strong>إدارة المفاتيح:</strong> يستخدم نموذج "شبكة الثقة".</li>
</ul>`,
      },
    },
  ],

  summary: {
    points: [
      "SSL/TLS provides transport layer security; TLS is the IETF standardization of Netscape's SSL.",
      "HTTPS uses port 443 (vs HTTP port 80) and encrypts URLs, content, cookies, and headers.",
      "TLS provides confidentiality (symmetric encryption) and message integrity (MAC with shared key).",
      "PGP secures email at the application layer using a hybrid of symmetric and asymmetric encryption.",
      "GPG is a free OpenPGP implementation using asymmetric encryption, digital signatures, and a web of trust."
    ],
    pointsAr: [
      "SSL/TLS يوفر أمان طبقة النقل؛ TLS هو التقنين المعياري من IETF لـ SSL من Netscape.",
      "HTTPS يستخدم المنفذ 443 (مقابل HTTP المنفذ 80) ويشفر URLs والمحتوى والكوكيز والرؤوس.",
      "TLS يوفر السرية (تشفير متماثل) وسلامة الرسالة (MAC بمفتاح مشترك).",
      "PGP يؤمّن البريد الإلكتروني في طبقة التطبيقات باستخدام مزيج من التشفير المتماثل وغير المتماثل.",
      "GPG تطبيق مفتوح المصدر لـ OpenPGP يستخدم التشفير غير المتماثل والتوقيعات الرقمية وشبكة الثقة."
    ],
  },

  mcq: [
    {
      id: 'crypto-l7-q1',
      question: "SSL was originally developed by:",
      questionAr: "SSL طوّرته في الأصل:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Microsoft', isCorrect: false },
        { id: 'b', text: 'Netscape', isCorrect: true },
        { id: 'c', text: 'NIST', isCorrect: false },
        { id: 'd', text: 'Google', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q2',
      question: "HTTPS uses which port number?",
      questionAr: "HTTPS يستخدم أي رقم منفذ؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '80', isCorrect: false },
        { id: 'b', text: '443', isCorrect: true },
        { id: 'c', text: '21', isCorrect: false },
        { id: 'd', text: '8080', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q3',
      question: "PGP secures email at which layer?",
      questionAr: "PGP يؤمّن البريد الإلكتروني في أي طبقة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Network layer', isCorrect: false },
        { id: 'b', text: 'Transport layer', isCorrect: false },
        { id: 'c', text: 'Application layer', isCorrect: true },
        { id: 'd', text: 'Data Link layer', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q4',
      question: "TLS provides confidentiality using:",
      questionAr: "TLS يوفر السرية باستخدام:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Asymmetric encryption only', isCorrect: false },
        { id: 'b', text: 'Symmetric encryption with a shared secret key', isCorrect: true },
        { id: 'c', text: 'Hashing only', isCorrect: false },
        { id: 'd', text: 'Digital signatures', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q5',
      question: "Which of the following is NOT encrypted by HTTPS?",
      questionAr: "أيٌّ مما يلي لا يُشفّره HTTPS؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'URL', isCorrect: false },
        { id: 'b', text: 'Cookies', isCorrect: false },
        { id: 'c', text: 'Destination IP address', isCorrect: true },
        { id: 'd', text: 'Form data', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q6',
      question: "A TLS session is created by which protocol?",
      questionAr: "جلسة TLS تُنشأ بواسطة أي بروتوكول؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Record Protocol', isCorrect: false },
        { id: 'b', text: 'Handshake Protocol', isCorrect: true },
        { id: 'c', text: 'Alert Protocol', isCorrect: false },
        { id: 'd', text: 'Change Cipher Spec', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q7',
      question: "Email security enhancement does NOT include:",
      questionAr: "تحسين أمن البريد الإلكتروني لا يشمل:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Confidentiality', isCorrect: false },
        { id: 'b', text: 'Authentication', isCorrect: false },
        { id: 'c', text: 'Data compression', isCorrect: true },
        { id: 'd', text: 'Non-repudiation', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q8',
      question: "GPG uses which model for key management?",
      questionAr: "GPG يستخدم أي نموذج لإدارة المفاتيح؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Certificate Authority (CA)', isCorrect: false },
        { id: 'b', text: 'Web of Trust', isCorrect: true },
        { id: 'c', text: 'Kerberos', isCorrect: false },
        { id: 'd', text: 'Token-based', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q9',
      question: "Port numbers range from 0 to:",
      questionAr: "أرقام المنافذ تتراوح من 0 إلى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1023', isCorrect: false },
        { id: 'b', text: '49151', isCorrect: false },
        { id: 'c', text: '65535', isCorrect: true },
        { id: 'd', text: '32767', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l7-q10',
      question: "PGP uses a session key that is encrypted with the recipient's:",
      questionAr: "PGP يستخدم مفتاح جلسة يُشفّر بواسطة __ المستقبل:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Private key', isCorrect: false },
        { id: 'b', text: 'Public key', isCorrect: true },
        { id: 'c', text: 'Shared symmetric key', isCorrect: false },
        { id: 'd', text: 'MAC key', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l7-w1',
      question: "Explain how PGP secures email messages using both symmetric and asymmetric encryption.",
      questionAr: "اشرح كيف يؤمّن PGP رسائل البريد الإلكتروني باستخدام التشفير المتماثل وغير المتماثل.",
      modelAnswer: "PGP uses a hybrid approach: (1) A random symmetric session key is generated for each message. (2) The email content is encrypted using this session key (fast symmetric encryption). (3) The session key itself is then encrypted using the recipient's public key (asymmetric encryption). (4) Both the encrypted message and encrypted session key are sent together. The recipient uses their private key to decrypt the session key, then uses the session key to decrypt the message.",
      modelAnswerAr: "PGP يستخدم نهجًا هجينًا: (1) يُولَّد مفتاح جلسة متماثل عشوائي لكل رسالة. (2) يُشفَّر محتوى البريد باستخدام مفتاح الجلسة (تشفير متماثل سريع). (3) يُشفَّر مفتاح الجلسة نفسه باستخدام المفتاح العام للمستقبل (تشفير غير متماثل). (4) يُرسل كل من الرسالة المشفرة ومفتاح الجلسة المشفر معًا. المستقبل يستخدم مفتاحه الخاص لفك تشفير مفتاح الجلسة، ثم يستخدم مفتاح الجلسة لفك تشفير الرسالة.",
    },
    {
      id: 'crypto-l7-w2',
      question: "What is the relationship between SSL and TLS? What services does TLS provide?",
      questionAr: "ما العلاقة بين SSL وTLS؟ ما الخدمات التي يوفرها TLS؟",
      modelAnswer: "TLS is the IETF standardized version of SSL, which was originally designed by Netscape. TLS provides two main services: (1) Confidentiality through symmetric encryption using a shared secret key established by the Handshake Protocol (supporting ciphers like AES, 3DES, etc.), and (2) Message Integrity through MAC with a shared secret key (similar to HMAC). TLS uses TCP for reliable end-to-end communication.",
      modelAnswerAr: "TLS هو النسخة المعيارية من IETF لـ SSL الذي صممته Netscape. TLS يوفر خدمتين رئيسيتين: (1) السرية عبر التشفير المتماثل بمفتاح سري مشترك يُنشئه بروتوكول المصافحة، (2) سلامة الرسالة عبر MAC بمفتاح سري مشترك (مشابه لـ HMAC). TLS يستخدم TCP للاتصال الموثوق.",
    },
    {
      id: 'crypto-l7-w3',
      question: "What does HTTPS encrypt and how does it differ from HTTP?",
      questionAr: "ما الذي يشفره HTTPS وكيف يختلف عن HTTP؟",
      modelAnswer: "HTTPS (HTTP over SSL/TLS) encrypts: the URL, document contents, form data, cookies, and HTTP headers. It uses port 443 instead of HTTP's port 80 and https:// URL scheme instead of http://. Unlike HTTP which transmits data in plaintext, HTTPS provides a secure encrypted channel between the browser and server, protecting against eavesdropping and man-in-the-middle attacks.",
      modelAnswerAr: "HTTPS (HTTP عبر SSL/TLS) يشفر: عنوان URL، محتويات المستند، بيانات النماذج، ملفات تعريف الارتباط، ورؤوس HTTP. يستخدم المنفذ 443 بدلاً من المنفذ 80 لـ HTTP وعنوان https:// بدلاً من http://. بخلاف HTTP الذي ينقل البيانات كنص صريح، HTTPS يوفر قناة مشفرة آمنة بين المتصفح والخادم.",
    },
  ],
};
