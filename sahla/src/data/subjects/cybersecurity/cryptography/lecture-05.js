export const LECTURE = {
  subjectId: 'crypto',
  number: 5,
  title: 'Public Key Cryptography',
  titleAr: 'تشفير المفتاح العام',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Background</h2>
<p>Public-key algorithms are more efficient for <strong>short messages</strong>. Unlike symmetric encryption that uses one shared key, public-key encryption uses a <strong>pair of keys</strong>: one for encryption and one for decryption.</p>

<h2>Symmetric vs. Public-Key Encryption</h2>
<ul>
  <li><strong>Symmetric:</strong> Same key for encryption/decryption; sender and receiver share algorithm name and secret key securely.</li>
  <li><strong>Public-Key:</strong> One algorithm with a pair of keys; each party has one of the matched pair. Knowledge of the algorithm plus one key plus ciphertext must be insufficient to determine the other key.</li>
</ul>

<h2>Public-Key Applications</h2>
<p>Three categories of use:</p>
<ol>
  <li><strong>Encryption/Decryption</strong> (secrecy)</li>
  <li><strong>Digital Signatures</strong> (message authentication)</li>
  <li><strong>Key Exchange</strong> (of session or shared keys)</li>
</ol>
<p>Algorithm capabilities:</p>
<ul>
  <li><strong>RSA:</strong> Encryption ✓, Digital Signature ✓, Key Exchange ✓</li>
  <li><strong>Elliptic Curve:</strong> Encryption ✓, Digital Signature ✓, Key Exchange ✓</li>
  <li><strong>Diffie-Hellman:</strong> Key Exchange only ✓</li>
  <li><strong>DSS:</strong> Digital Signature only ✓</li>
</ul>
<div class="callout callout-warning"><strong>Exam Alert:</strong> RSA and Elliptic Curve support all three applications. Diffie-Hellman is only for key exchange. DSS is only for digital signatures.</div>

<h2>The RSA Public Key Methodology</h2>
<p>Created by <strong>Rivest, Shamir & Adleman</strong> at MIT in 1977. It is the best known and most widely used public-key scheme. Security comes from the <strong>difficulty of factoring large numbers</strong>.</p>

<h2>RSA Key Setup</h2>
<ol>
  <li>Select two large primes: <strong>p</strong> and <strong>q</strong>.</li>
  <li>Compute <strong>n = p × q</strong>.</li>
  <li>Compute <strong>ø(n) = (p−1)(q−1)</strong>.</li>
  <li>Select encryption key <strong>e</strong> where 1 < e < ø(n) and gcd(e, ø(n)) = 1.</li>
  <li>Find decryption key <strong>d</strong> where e·d mod ø(n) = 1.</li>
  <li>Public key: <strong>PU = {e, n}</strong>.</li>
  <li>Private key: <strong>PR = {d, n}</strong>.</li>
</ol>

<h2>RSA Encryption/Decryption</h2>
<ul>
  <li><strong>Encryption:</strong> C = M<sup>e</sup> mod n (using public key)</li>
  <li><strong>Decryption:</strong> M = C<sup>d</sup> mod n (using private key)</li>
</ul>
<p><strong>Example:</strong> p=17, q=11 → n=187, ø(n)=160, e=7, d=23. PU={7,187}, PR={23,187}. Encrypt M=88: C = 88<sup>7</sup> mod 187 = 11. Decrypt: M = 11<sup>23</sup> mod 187 = 88.</p>
<div class="callout callout-info"><strong>Tip:</strong> The public key is used for encryption. The preferred encryption key in asymmetric cryptography is the public key.</div>

<h2>Diffie-Hellman Key Exchange</h2>
<p>Establishes a shared secret over a public channel. It is used for <strong>key exchange only</strong>, not encryption itself.</p>
<p><strong>How it works:</strong></p>
<ol>
  <li>Alice and Bob publicly agree on a large prime <strong>p</strong> and a base <strong>g</strong>.</li>
  <li>Alice chooses secret <strong>a</strong>; Bob chooses secret <strong>b</strong>.</li>
  <li>Alice sends A = g<sup>a</sup> mod p; Bob sends B = g<sup>b</sup> mod p.</li>
  <li>Alice computes S = B<sup>a</sup> mod p; Bob computes S = A<sup>b</sup> mod p.</li>
  <li>Both arrive at the same shared secret <strong>S</strong>.</li>
</ol>
<p>Security relies on the <strong>discrete logarithm problem</strong>. Vulnerable to <strong>man-in-the-middle attacks</strong>.</p>`,

        bodyAr: `<h2>خلفية</h2>
<p>خوارزميات المفتاح العام أكثر كفاءة للرسائل <strong>القصيرة</strong>. بخلاف التشفير المتماثل الذي يستخدم مفتاحًا واحدًا مشتركًا، يستخدم تشفير المفتاح العام <strong>زوج مفاتيح</strong>: واحد للتشفير وآخر لفك التشفير.</p>

<h2>المتماثل مقابل تشفير المفتاح العام</h2>
<ul>
  <li><strong>المتماثل:</strong> نفس المفتاح للتشفير/فك التشفير؛ المرسل والمستقبل يتشاركان المفتاح السري.</li>
  <li><strong>المفتاح العام:</strong> خوارزمية واحدة بزوج مفاتيح؛ معرفة الخوارزمية ومفتاح واحد وعينات من النص المشفر يجب ألا تكفي لتحديد المفتاح الآخر.</li>
</ul>

<h2>تطبيقات المفتاح العام</h2>
<p>ثلاث فئات:</p>
<ol>
  <li><strong>التشفير/فك التشفير</strong> (السرية)</li>
  <li><strong>التوقيعات الرقمية</strong> (مصادقة الرسالة)</li>
  <li><strong>تبادل المفاتيح</strong> (مفاتيح الجلسة أو المشتركة)</li>
</ol>
<p>قدرات الخوارزميات:</p>
<ul>
  <li><strong>RSA:</strong> تشفير ✓، توقيع رقمي ✓، تبادل مفاتيح ✓</li>
  <li><strong>المنحنيات الإهليلجية:</strong> تشفير ✓، توقيع رقمي ✓، تبادل مفاتيح ✓</li>
  <li><strong>Diffie-Hellman:</strong> تبادل مفاتيح فقط ✓</li>
  <li><strong>DSS:</strong> توقيع رقمي فقط ✓</li>
</ul>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> RSA والمنحنيات الإهليلجية تدعمان التطبيقات الثلاثة. Diffie-Hellman لتبادل المفاتيح فقط. DSS للتوقيعات الرقمية فقط.</div>

<h2>منهجية RSA للمفتاح العام</h2>
<p>ابتكرها <strong>ريفست وشامير وأدلمان</strong> في MIT عام 1977. أشهر وأوسع مخطط مفتاح عام استخدامًا. الأمان يأتي من <strong>صعوبة تحليل الأعداد الكبيرة</strong>.</p>

<h2>إعداد مفتاح RSA</h2>
<ol>
  <li>اختيار عددين أوليين كبيرين: <strong>p</strong> و<strong>q</strong>.</li>
  <li>حساب <strong>n = p × q</strong>.</li>
  <li>حساب <strong>ø(n) = (p−1)(q−1)</strong>.</li>
  <li>اختيار مفتاح التشفير <strong>e</strong> حيث 1 < e < ø(n) وgcd(e, ø(n)) = 1.</li>
  <li>إيجاد مفتاح فك التشفير <strong>d</strong> حيث e·d mod ø(n) = 1.</li>
  <li>المفتاح العام: <strong>PU = {e, n}</strong>.</li>
  <li>المفتاح الخاص: <strong>PR = {d, n}</strong>.</li>
</ol>

<h2>تشفير/فك تشفير RSA</h2>
<ul>
  <li><strong>التشفير:</strong> C = M<sup>e</sup> mod n (باستخدام المفتاح العام)</li>
  <li><strong>فك التشفير:</strong> M = C<sup>d</sup> mod n (باستخدام المفتاح الخاص)</li>
</ul>
<p><strong>مثال:</strong> p=17, q=11 → n=187, ø(n)=160, e=7, d=23. PU={7,187}, PR={23,187}. تشفير M=88: C = 88<sup>7</sup> mod 187 = 11. فك التشفير: M = 11<sup>23</sup> mod 187 = 88.</p>

<h2>تبادل مفاتيح Diffie-Hellman</h2>
<p>يُنشئ سرًا مشتركًا عبر قناة عامة. يُستخدم <strong>لتبادل المفاتيح فقط</strong> وليس للتشفير.</p>
<p><strong>كيف يعمل:</strong></p>
<ol>
  <li>أليس وبوب يتفقان علنيًا على عدد أولي كبير <strong>p</strong> وأساس <strong>g</strong>.</li>
  <li>أليس تختار سرًا <strong>a</strong>؛ بوب يختار سرًا <strong>b</strong>.</li>
  <li>أليس ترسل A = g<sup>a</sup> mod p؛ بوب يرسل B = g<sup>b</sup> mod p.</li>
  <li>أليس تحسب S = B<sup>a</sup> mod p؛ بوب يحسب S = A<sup>b</sup> mod p.</li>
  <li>كلاهما يصل لنفس السر المشترك <strong>S</strong>.</li>
</ol>
<p>الأمان يعتمد على <strong>مسألة اللوغاريتم المنفصل</strong>. عرضة لـ<strong>هجمات الرجل في المنتصف</strong>.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "Public-key cryptography uses a key pair (public + private); efficient for short messages.",
      "RSA supports encryption, digital signatures, and key exchange; security based on factoring large numbers.",
      "RSA key setup: choose primes p,q → compute n, ø(n) → select e → find d. Public key PU={e,n}, Private key PR={d,n}.",
      "Diffie-Hellman enables secure key exchange over public channels but is vulnerable to man-in-the-middle attacks.",
      "DSS supports only digital signatures; Elliptic Curve supports all three applications like RSA."
    ],
    pointsAr: [
      "تشفير المفتاح العام يستخدم زوج مفاتيح (عام + خاص)؛ فعّال للرسائل القصيرة.",
      "RSA يدعم التشفير والتوقيعات الرقمية وتبادل المفاتيح؛ أمانه مبني على صعوبة تحليل الأعداد الكبيرة.",
      "إعداد مفتاح RSA: اختيار أوليين p,q → حساب n, ø(n) → اختيار e → إيجاد d.",
      "Diffie-Hellman يُمكّن تبادل المفاتيح الآمن لكنه عرضة لهجمات الرجل في المنتصف.",
      "DSS يدعم التوقيعات الرقمية فقط؛ المنحنيات الإهليلجية تدعم التطبيقات الثلاثة مثل RSA."
    ],
  },

  mcq: [
    {
      id: 'crypto-l5-q1',
      question: "[MID] Which one is preferred as encryption key in asymmetric cryptography?",
      questionAr: "[MID] أيهما يُفضَّل كمفتاح تشفير في التشفير غير المتماثل؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Public key', isCorrect: true },
        { id: 'b', text: 'Private key', isCorrect: false },
        { id: 'c', text: 'Shared key', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q2',
      question: "RSA security is based on the difficulty of:",
      questionAr: "أمان RSA مبني على صعوبة:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The discrete logarithm problem', isCorrect: false },
        { id: 'b', text: 'Factoring large numbers', isCorrect: true },
        { id: 'c', text: 'Brute-force key search', isCorrect: false },
        { id: 'd', text: 'XOR operations', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q3',
      question: "Which algorithm is used ONLY for key exchange?",
      questionAr: "أي خوارزمية تُستخدم فقط لتبادل المفاتيح؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'RSA', isCorrect: false },
        { id: 'b', text: 'Elliptic Curve', isCorrect: false },
        { id: 'c', text: 'Diffie-Hellman', isCorrect: true },
        { id: 'd', text: 'DSS', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q4',
      question: "In RSA, to encrypt a message M, the sender computes:",
      questionAr: "في RSA، لتشفير الرسالة M، يحسب المرسل:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'C = M^d mod n', isCorrect: false },
        { id: 'b', text: 'C = M^e mod n', isCorrect: true },
        { id: 'c', text: 'C = M × e mod n', isCorrect: false },
        { id: 'd', text: 'C = M + e mod n', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q5',
      question: "Given p=17, q=11 in RSA, what is n?",
      questionAr: "إذا كان p=17, q=11 في RSA، ما قيمة n؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '160', isCorrect: false },
        { id: 'b', text: '187', isCorrect: true },
        { id: 'c', text: '28', isCorrect: false },
        { id: 'd', text: '176', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q6',
      question: "In RSA, ø(n) is calculated as:",
      questionAr: "في RSA، يُحسب ø(n) كـ:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'p × q', isCorrect: false },
        { id: 'b', text: '(p−1)(q−1)', isCorrect: true },
        { id: 'c', text: 'p + q − 1', isCorrect: false },
        { id: 'd', text: 'p − q', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q7',
      question: "Diffie-Hellman is vulnerable to:",
      questionAr: "Diffie-Hellman عرضة لـ:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Brute-force attack', isCorrect: false },
        { id: 'b', text: 'Replay attack', isCorrect: false },
        { id: 'c', text: 'Man-in-the-middle attack', isCorrect: true },
        { id: 'd', text: 'Denial of service', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q8',
      question: "Public-key algorithms are recommended for:",
      questionAr: "خوارزميات المفتاح العام يُوصى بها لـ:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Long messages', isCorrect: false },
        { id: 'b', text: 'Short messages', isCorrect: true },
        { id: 'c', text: 'Any message length equally', isCorrect: false },
        { id: 'd', text: 'File compression', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q9',
      question: "Which algorithm supports ONLY digital signatures (not encryption or key exchange)?",
      questionAr: "أي خوارزمية تدعم التوقيعات الرقمية فقط (ليس التشفير أو تبادل المفاتيح)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'RSA', isCorrect: false },
        { id: 'b', text: 'Diffie-Hellman', isCorrect: false },
        { id: 'c', text: 'DSS', isCorrect: true },
        { id: 'd', text: 'Elliptic Curve', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l5-q10',
      question: "In the RSA example with PU={7,187}, encrypting M=88 gives C=?",
      questionAr: "في مثال RSA بـ PU={7,187}، تشفير M=88 يعطي C=؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '88', isCorrect: false },
        { id: 'b', text: '11', isCorrect: true },
        { id: 'c', text: '23', isCorrect: false },
        { id: 'd', text: '187', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l5-w1',
      question: "Walk through the RSA key generation process using p=17 and q=11.",
      questionAr: "اشرح خطوات إنشاء مفتاح RSA باستخدام p=17 وq=11.",
      modelAnswer: "1) Select primes p=17, q=11. 2) Compute n = 17×11 = 187. 3) Compute ø(n) = (17-1)(11-1) = 16×10 = 160. 4) Choose e such that gcd(e,160)=1; select e=7. 5) Find d such that d×7 mod 160 = 1; d=23 since 23×7=161 mod 160=1. 6) Public key PU = {7, 187}. 7) Private key PR = {23, 187}.",
      modelAnswerAr: "1) اختيار الأوليين p=17, q=11. 2) حساب n = 17×11 = 187. 3) حساب ø(n) = (17-1)(11-1) = 16×10 = 160. 4) اختيار e بحيث gcd(e,160)=1؛ نختار e=7. 5) إيجاد d بحيث d×7 mod 160 = 1؛ d=23 لأن 23×7=161 mod 160=1. 6) المفتاح العام PU = {7, 187}. 7) المفتاح الخاص PR = {23, 187}.",
    },
    {
      id: 'crypto-l5-w2',
      question: "Explain how the Diffie-Hellman key exchange works and its main vulnerability.",
      questionAr: "اشرح كيف يعمل تبادل مفاتيح Diffie-Hellman وثغرته الرئيسية.",
      modelAnswer: "Alice and Bob agree on public parameters p (prime) and g (base). Alice picks secret a, computes A=g^a mod p and sends A. Bob picks secret b, computes B=g^b mod p and sends B. Alice computes S=B^a mod p; Bob computes S=A^b mod p. Both get the same shared secret S. The main vulnerability is the man-in-the-middle attack where an attacker intercepts and replaces the public values, establishing separate keys with each party.",
      modelAnswerAr: "أليس وبوب يتفقان على المعاملات العامة p (عدد أولي) وg (أساس). أليس تختار سرًا a وتحسب A=g^a mod p وترسل A. بوب يختار سرًا b ويحسب B=g^b mod p ويرسل بوب B. أليس تحسب S=B^a mod p؛ بوب يحسب S=A^b mod p. كلاهما يحصل على نفس السر المشترك S. الثغرة الرئيسية هي هجوم الرجل في المنتصف حيث يعترض المهاجم القيم العامة ويستبدلها.",
    },
    {
      id: 'crypto-l5-w3',
      question: "Compare symmetric and asymmetric encryption in a table format covering keys, speed, use case, and key distribution.",
      questionAr: "قارن بين التشفير المتماثل وغير المتماثل في جدول يشمل المفاتيح والسرعة وحالة الاستخدام وتوزيع المفاتيح.",
      modelAnswer: "Symmetric: uses one shared key, fast, suitable for long messages, requires secure key distribution. Asymmetric: uses public/private key pair, slower, suitable for short messages and key exchange, public key can be distributed openly. Knowledge of algorithm + one key must not reveal the other key in asymmetric systems.",
      modelAnswerAr: "المتماثل: يستخدم مفتاحًا واحدًا مشتركًا، سريع، مناسب للرسائل الطويلة، يتطلب توزيع مفتاح آمن. غير المتماثل: يستخدم زوج مفاتيح عام/خاص، أبطأ، مناسب للرسائل القصيرة وتبادل المفاتيح، المفتاح العام يمكن توزيعه علنيًا. معرفة الخوارزمية ومفتاح واحد يجب ألا تكشف المفتاح الآخر.",
    },
  ],
};
