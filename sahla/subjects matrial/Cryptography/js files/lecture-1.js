export const LECTURE = {
  subjectId: 'crypto',
  number: 1,
  title: 'Course Overview & Introduction to Cryptography',
  titleAr: 'نظرة عامة على المقرر ومقدمة في التشفير',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>The Field of Security Roadmap</h2>
<p>The security field is built upon four pillars:</p>
<ol>
  <li><strong>Cryptography:</strong> The basic foundation and cornerstone for all security topics in computer networks. Its main purpose is to achieve <strong>message privacy</strong>.</li>
  <li><strong>Hashing:</strong> A subfield of cryptography whose purpose is to achieve message integrity, message authentication, message non-repudiation, and people authentication.</li>
  <li><strong>PGP, SSL/TLS, or IPSec:</strong> Three levels of security available for computer networks:
    <ul>
      <li><strong>PGP</strong> (Pretty Good Privacy) – Application layer, secures email messages.</li>
      <li><strong>SSL/TLS</strong> – Transport layer, secures TCP segments.</li>
      <li><strong>IPSec</strong> – Network layer (via VPN), secures IP datagrams.</li>
    </ul>
  </li>
  <li><strong>Firewalls:</strong> Used to protect the site from intruders or malicious software by having a router as a first line of defense.</li>
</ol>
<div class="callout callout-info"><strong>Tip:</strong> Remember the layer–protocol mapping: Application → PGP, Transport → SSL/TLS, Network → IPSec.</div>

<h2>Key Security Concepts – The C.I.A. Triad</h2>
<p>The three fundamental security objectives are:</p>
<ul>
  <li><strong>Confidentiality:</strong> Ensuring data privacy and secrecy.</li>
  <li><strong>Integrity:</strong> Ensuring data has not been tampered with.</li>
  <li><strong>Availability:</strong> Ensuring systems and data are accessible when needed.</li>
</ul>
<div class="callout callout-warning"><strong>Exam Alert:</strong> The CIA Triad is a very common exam topic. Memorize it: "Can I Access?" → Confidentiality, Integrity, Availability.</div>

<h2>Types of Attacks</h2>
<p><strong>Passive Attacks</strong> (eavesdropping – hard to detect, easy to prevent):</p>
<ul>
  <li><strong>Release of message contents:</strong> The attacker reads the actual message content.</li>
  <li><strong>Traffic analysis:</strong> The attacker observes patterns (source, destination, timing) without modifying data.</li>
</ul>
<p><strong>Active Attacks</strong> (modification – easy to detect, hard to prevent):</p>
<ul>
  <li><strong>Masquerade:</strong> Impersonating another entity.</li>
  <li><strong>Replay:</strong> Capturing and resending valid data.</li>
  <li><strong>Modification of messages:</strong> Altering legitimate messages in transit.</li>
  <li><strong>Denial of Service (DoS):</strong> Flooding to make a service unavailable.</li>
</ul>

<h2>Cryptography Components & Categories</h2>
<p>In cryptography, the encryption/decryption <strong>algorithms are known</strong>; only the <strong>keys are secret</strong>.</p>
<p>Cryptography is categorized into:</p>
<ul>
  <li><strong>Symmetric-Key Cryptography:</strong> The same key is used by both sender (encryption) and receiver (decryption). The key is shared. Recommended for <strong>long messages</strong>.</li>
  <li><strong>Asymmetric-Key Cryptography:</strong> Uses a pair of keys – a public key and a private key. One encrypts, the other decrypts.</li>
</ul>

<h2>Basic Terminology</h2>
<ul>
  <li><strong>Plaintext:</strong> The original message.</li>
  <li><strong>Ciphertext:</strong> The coded (encrypted) message.</li>
  <li><strong>Cipher:</strong> Algorithm for transforming plaintext to ciphertext.</li>
  <li><strong>Key:</strong> Information used in the cipher, known only to sender/receiver.</li>
  <li><strong>Encipher (Encrypt):</strong> Converting plaintext to ciphertext.</li>
  <li><strong>Decipher (Decrypt):</strong> Recovering plaintext from ciphertext.</li>
  <li><strong>Cryptography:</strong> Study of encryption principles/methods.</li>
  <li><strong>Cryptanalysis:</strong> Study of deciphering ciphertext without the key.</li>
  <li><strong>Cryptology:</strong> The combined field of cryptography and cryptanalysis.</li>
</ul>

<h2>WiFi Security</h2>
<p>WiFi security algorithms evolved over time:</p>
<ol>
  <li><strong>WEP</strong> (using RC4) – Deprecated due to severe vulnerabilities.</li>
  <li><strong>WPA</strong> (using TKIP) – Also deprecated.</li>
  <li><strong>WPA2</strong> (using AES) – Remains a secure, widely used standard.</li>
  <li><strong>WPA3</strong> – The most secure, providing advanced data encryption and secured password mechanisms.</li>
</ol>
<div class="callout callout-info"><strong>Tip:</strong> WiFi security order from weakest to strongest: WEP → WPA → WPA2 → WPA3.</div>`,

        bodyAr: `<h2>خارطة طريق مجال الأمن</h2>
<p>يُبنى مجال الأمن على أربعة أركان:</p>
<ol>
  <li><strong>التشفير (Cryptography):</strong> الأساس والحجر الأول لجميع موضوعات الأمن في شبكات الحاسب. هدفه الرئيسي تحقيق <strong>خصوصية الرسائل</strong>.</li>
  <li><strong>التجزئة (Hashing):</strong> فرع من التشفير يهدف لتحقيق سلامة الرسالة، والمصادقة، وعدم الإنكار، ومصادقة الأشخاص.</li>
  <li><strong>PGP وSSL/TLS وIPSec:</strong> ثلاثة مستويات أمان متاحة:
    <ul>
      <li><strong>PGP</strong> – طبقة التطبيقات، لتأمين البريد الإلكتروني.</li>
      <li><strong>SSL/TLS</strong> – طبقة النقل، لتأمين مقاطع TCP.</li>
      <li><strong>IPSec</strong> – طبقة الشبكة (عبر VPN)، لتأمين بيانات IP.</li>
    </ul>
  </li>
  <li><strong>جدران الحماية (Firewalls):</strong> تُستخدم لحماية الموقع من المتسللين أو البرمجيات الخبيثة.</li>
</ol>
<div class="callout callout-info"><strong>نصيحة:</strong> تذكّر ربط الطبقة بالبروتوكول: التطبيقات → PGP، النقل → SSL/TLS، الشبكة → IPSec.</div>

<h2>مفاهيم الأمن الأساسية – ثالوث C.I.A.</h2>
<p>الأهداف الأمنية الثلاثة الأساسية هي:</p>
<ul>
  <li><strong>السرية (Confidentiality):</strong> ضمان خصوصية البيانات وسريتها.</li>
  <li><strong>السلامة (Integrity):</strong> ضمان عدم التلاعب بالبيانات.</li>
  <li><strong>التوافر (Availability):</strong> ضمان إمكانية الوصول للأنظمة والبيانات عند الحاجة.</li>
</ul>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> ثالوث CIA موضوع امتحاني شائع جدًا. احفظه: السرية، السلامة، التوافر.</div>

<h2>أنواع الهجمات</h2>
<p><strong>الهجمات السلبية</strong> (التنصت – يصعب اكتشافها، يسهل منعها):</p>
<ul>
  <li><strong>كشف محتوى الرسالة:</strong> المهاجم يقرأ محتوى الرسالة الفعلي.</li>
  <li><strong>تحليل حركة المرور:</strong> المهاجم يراقب الأنماط (المصدر، الوجهة، التوقيت) دون تعديل.</li>
</ul>
<p><strong>الهجمات النشطة</strong> (التعديل – يسهل اكتشافها، يصعب منعها):</p>
<ul>
  <li><strong>انتحال الهوية (Masquerade):</strong> التظاهر بأنك شخص آخر.</li>
  <li><strong>إعادة الإرسال (Replay):</strong> التقاط بيانات صالحة وإعادة إرسالها.</li>
  <li><strong>تعديل الرسائل:</strong> تغيير الرسائل المشروعة أثناء النقل.</li>
  <li><strong>حجب الخدمة (DoS):</strong> إغراق الخدمة لجعلها غير متاحة.</li>
</ul>

<h2>مكونات التشفير وتصنيفاته</h2>
<p>في التشفير، <strong>الخوارزميات معروفة</strong>؛ فقط <strong>المفاتيح سرية</strong>.</p>
<p>يُصنف التشفير إلى:</p>
<ul>
  <li><strong>تشفير المفتاح المتماثل:</strong> نفس المفتاح يستخدمه المرسل والمستقبل. يُوصى به للرسائل <strong>الطويلة</strong>.</li>
  <li><strong>تشفير المفتاح غير المتماثل:</strong> يستخدم زوج مفاتيح – مفتاح عام ومفتاح خاص.</li>
</ul>

<h2>المصطلحات الأساسية</h2>
<ul>
  <li><strong>النص الصريح (Plaintext):</strong> الرسالة الأصلية.</li>
  <li><strong>النص المشفر (Ciphertext):</strong> الرسالة المشفرة.</li>
  <li><strong>الشفرة (Cipher):</strong> خوارزمية تحويل النص الصريح إلى نص مشفر.</li>
  <li><strong>المفتاح (Key):</strong> معلومات تُستخدم في الشفرة ولا يعرفها سوى المرسل والمستقبل.</li>
  <li><strong>التشفير (Encrypt):</strong> تحويل النص الصريح إلى نص مشفر.</li>
  <li><strong>فك التشفير (Decrypt):</strong> استعادة النص الصريح من النص المشفر.</li>
  <li><strong>علم التشفير (Cryptography):</strong> دراسة مبادئ وأساليب التشفير.</li>
  <li><strong>تحليل الشفرات (Cryptanalysis):</strong> دراسة فك الشفرات بدون المفتاح.</li>
  <li><strong>علم التعمية (Cryptology):</strong> يشمل علم التشفير وتحليل الشفرات معًا.</li>
</ul>

<h2>أمن الواي فاي</h2>
<p>تطورت خوارزميات أمن الواي فاي عبر الزمن:</p>
<ol>
  <li><strong>WEP</strong> (يستخدم RC4) – مُهمل بسبب ثغرات خطيرة.</li>
  <li><strong>WPA</strong> (يستخدم TKIP) – مُهمل أيضًا.</li>
  <li><strong>WPA2</strong> (يستخدم AES) – لا يزال معيارًا آمنًا ومُستخدمًا على نطاق واسع.</li>
  <li><strong>WPA3</strong> – الأكثر أمانًا، يوفر تشفيرًا متقدمًا وآلية كلمات مرور محسّنة.</li>
</ol>
<div class="callout callout-info"><strong>نصيحة:</strong> ترتيب أمن الواي فاي من الأضعف للأقوى: WEP → WPA → WPA2 → WPA3.</div>`,
      },
    },
  ],

  summary: {
    points: [
      "The CIA Triad (Confidentiality, Integrity, Availability) forms the foundation of information security.",
      "Security is applied at three network layers: Application (PGP), Transport (SSL/TLS), and Network (IPSec).",
      "Attacks are classified as Passive (eavesdropping, traffic analysis) or Active (masquerade, replay, modification, DoS).",
      "Symmetric encryption uses a shared key (fast, for long messages); Asymmetric uses a key pair (slower, for short messages).",
      "In cryptography, algorithms are public — only the keys are kept secret.",
      "WiFi security evolved from WEP (insecure) to WPA3 (most secure), with WPA2 (AES) still widely used."
    ],
    pointsAr: [
      "ثالوث CIA (السرية، السلامة، التوافر) يشكّل أساس أمن المعلومات.",
      "يُطبَّق الأمن على ثلاث طبقات شبكية: التطبيقات (PGP)، النقل (SSL/TLS)، الشبكة (IPSec).",
      "تُصنَّف الهجمات إلى سلبية (تنصت، تحليل حركة المرور) ونشطة (انتحال، إعادة إرسال، تعديل، حجب خدمة).",
      "التشفير المتماثل يستخدم مفتاحًا مشتركًا (سريع، للرسائل الطويلة)؛ وغير المتماثل يستخدم زوج مفاتيح (أبطأ، للرسائل القصيرة).",
      "في التشفير، الخوارزميات عامة — فقط المفاتيح تبقى سرية.",
      "تطور أمن الواي فاي من WEP (غير آمن) إلى WPA3 (الأكثر أمانًا)، مع بقاء WPA2 (AES) مستخدمًا على نطاق واسع."
    ],
  },

  mcq: [
    {
      id: 'crypto-l1-q1',
      question: "[MID] In which type of cryptography is the same key used for encryption and decryption?",
      questionAr: "[MID] في أي نوع من التشفير يُستخدم نفس المفتاح للتشفير وفك التشفير؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Symmetric', isCorrect: true },
        { id: 'b', text: 'Asymmetric', isCorrect: false },
        { id: 'c', text: 'Public', isCorrect: false },
        { id: 'd', text: 'All', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q2',
      question: "[MID] Which principle of cryptography explains that transmitted data cannot be modified?",
      questionAr: "[MID] أي مبدأ من مبادئ التشفير يُفسر أن البيانات المنقولة لا يمكن تعديلها؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Confidentiality', isCorrect: false },
        { id: 'b', text: 'Integrity', isCorrect: true },
        { id: 'c', text: 'Authentication', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q3',
      question: "[MID] Which of the below security encryption standards is the strongest?",
      questionAr: "[MID] أي من معايير التشفير الأمني التالية هو الأقوى؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'WPA', isCorrect: false },
        { id: 'b', text: 'WPA3', isCorrect: true },
        { id: 'c', text: 'WEP', isCorrect: false },
        { id: 'd', text: 'WPA2', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q4',
      question: "[MID] All of the following are cryptographic applications, except for:",
      questionAr: "[MID] جميع ما يلي تطبيقات تشفيرية، ما عدا:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Data integrity', isCorrect: false },
        { id: 'b', text: 'Confidentiality', isCorrect: false },
        { id: 'c', text: 'Authentication', isCorrect: false },
        { id: 'd', text: 'None (all are cryptographic applications)', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l1-q5',
      question: "Which attack type involves the attacker reading the actual contents of a message?",
      questionAr: "أي نوع من الهجمات يتضمن قراءة المهاجم لمحتوى الرسالة الفعلي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Traffic analysis', isCorrect: false },
        { id: 'b', text: 'Release of message contents', isCorrect: true },
        { id: 'c', text: 'Masquerade', isCorrect: false },
        { id: 'd', text: 'Replay', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q6',
      question: "Which of the following is a passive attack?",
      questionAr: "أيٌّ مما يلي يُعدّ هجومًا سلبيًا؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Masquerade', isCorrect: false },
        { id: 'b', text: 'Denial of Service', isCorrect: false },
        { id: 'c', text: 'Traffic analysis', isCorrect: true },
        { id: 'd', text: 'Modification of messages', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q7',
      question: "In cryptography, what remains secret?",
      questionAr: "في التشفير، ما الذي يبقى سريًا؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The algorithm', isCorrect: false },
        { id: 'b', text: 'The key', isCorrect: true },
        { id: 'c', text: 'Both the algorithm and the key', isCorrect: false },
        { id: 'd', text: 'Neither', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q8',
      question: "Which protocol secures email at the application layer?",
      questionAr: "أي بروتوكول يؤمّن البريد الإلكتروني في طبقة التطبيقات؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'IPSec', isCorrect: false },
        { id: 'b', text: 'SSL/TLS', isCorrect: false },
        { id: 'c', text: 'PGP', isCorrect: true },
        { id: 'd', text: 'WPA3', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q9',
      question: "Symmetric-key cryptography is recommended for:",
      questionAr: "تشفير المفتاح المتماثل يُوصى به لـ:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Short messages only', isCorrect: false },
        { id: 'b', text: 'Long messages', isCorrect: true },
        { id: 'c', text: 'Key exchange only', isCorrect: false },
        { id: 'd', text: 'Digital signatures only', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q10',
      question: "Which WiFi security protocol uses AES encryption?",
      questionAr: "أي بروتوكول أمن واي فاي يستخدم تشفير AES؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'WEP', isCorrect: false },
        { id: 'b', text: 'WPA', isCorrect: false },
        { id: 'c', text: 'WPA2', isCorrect: true },
        { id: 'd', text: 'All of the above', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q11',
      question: "What is the study of breaking codes without knowing the key called?",
      questionAr: "ما يُسمى بدراسة كسر الشفرات بدون معرفة المفتاح؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Cryptography', isCorrect: false },
        { id: 'b', text: 'Cryptanalysis', isCorrect: true },
        { id: 'c', text: 'Cryptology', isCorrect: false },
        { id: 'd', text: 'Steganography', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l1-q12',
      question: "An attacker captures valid data and resends it later. This attack is called:",
      questionAr: "يلتقط المهاجم بيانات صالحة ويعيد إرسالها لاحقًا. يُسمى هذا الهجوم:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Masquerade', isCorrect: false },
        { id: 'b', text: 'Replay', isCorrect: true },
        { id: 'c', text: 'Modification', isCorrect: false },
        { id: 'd', text: 'Traffic analysis', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l1-w1',
      question: "Explain the CIA Triad and its importance in information security.",
      questionAr: "اشرح ثالوث CIA وأهميته في أمن المعلومات.",
      modelAnswer: "The CIA Triad consists of three core principles: Confidentiality (ensuring data privacy and that only authorized users can access it), Integrity (ensuring data is not tampered with or modified without authorization), and Availability (ensuring systems and data are accessible when needed). Together, these three principles form the foundation of any information security policy and guide the design of secure systems.",
      modelAnswerAr: "يتكون ثالوث CIA من ثلاثة مبادئ أساسية: السرية (ضمان خصوصية البيانات وأن المستخدمين المصرح لهم فقط يمكنهم الوصول إليها)، والسلامة (ضمان عدم التلاعب بالبيانات أو تعديلها دون إذن)، والتوافر (ضمان إمكانية الوصول للأنظمة والبيانات عند الحاجة). تشكّل هذه المبادئ الثلاثة معًا أساس أي سياسة أمن معلومات وتوجّه تصميم الأنظمة الآمنة.",
    },
    {
      id: 'crypto-l1-w2',
      question: "Compare and contrast passive and active attacks. Give two examples of each.",
      questionAr: "قارن بين الهجمات السلبية والنشطة. أعطِ مثالين لكل منهما.",
      modelAnswer: "Passive attacks involve monitoring or eavesdropping on communications without altering data. They are hard to detect but easy to prevent (via encryption). Examples: (1) Release of message contents – reading actual message data; (2) Traffic analysis – observing communication patterns. Active attacks involve modifying data or creating false streams. They are easier to detect but harder to prevent. Examples: (1) Masquerade – impersonating another user; (2) Replay – capturing and resending valid messages.",
      modelAnswerAr: "تتضمن الهجمات السلبية مراقبة الاتصالات أو التنصت عليها دون تغيير البيانات. يصعب اكتشافها ولكن يسهل منعها (عبر التشفير). أمثلة: (1) كشف محتوى الرسالة – قراءة بيانات الرسالة الفعلية؛ (2) تحليل حركة المرور – مراقبة أنماط الاتصال. تتضمن الهجمات النشطة تعديل البيانات أو إنشاء تدفقات زائفة. يسهل اكتشافها ولكن يصعب منعها. أمثلة: (1) انتحال الهوية – التظاهر بأنك مستخدم آخر؛ (2) إعادة الإرسال – التقاط رسائل صالحة وإعادة إرسالها.",
    },
    {
      id: 'crypto-l1-w3',
      question: "Differentiate between symmetric-key and asymmetric-key cryptography in terms of keys, speed, and use cases.",
      questionAr: "فرّق بين تشفير المفتاح المتماثل وتشفير المفتاح غير المتماثل من حيث المفاتيح والسرعة وحالات الاستخدام.",
      modelAnswer: "Symmetric-key cryptography uses a single shared key for both encryption and decryption. It is fast and recommended for encrypting long messages. Asymmetric-key cryptography uses a pair of keys (public and private). It is slower but suitable for short messages, digital signatures, and secure key exchange. Symmetric is preferred for bulk data encryption, while asymmetric is used for authentication and establishing secure channels.",
      modelAnswerAr: "يستخدم تشفير المفتاح المتماثل مفتاحًا واحدًا مشتركًا للتشفير وفك التشفير. وهو سريع ويُوصى به لتشفير الرسائل الطويلة. يستخدم تشفير المفتاح غير المتماثل زوجًا من المفاتيح (عام وخاص). وهو أبطأ لكنه مناسب للرسائل القصيرة والتوقيعات الرقمية وتبادل المفاتيح الآمن. يُفضَّل المتماثل لتشفير كميات كبيرة من البيانات، بينما يُستخدم غير المتماثل للمصادقة وإنشاء قنوات آمنة.",
    },
  ],
};
