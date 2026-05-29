export const LECTURE = {
  subjectId: 'crypto',
  number: 3,
  title: 'Data Encryption Standard (DES)',
  titleAr: 'معيار تشفير البيانات (DES)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Block Cipher Components</h2>
<p>Block ciphers process data in fixed-size blocks. The fundamental building blocks include:</p>
<ul>
  <li><strong>XOR Cipher:</strong> Bitwise exclusive-OR operation. Reversible: A ⊕ B ⊕ B = A.</li>
  <li><strong>Rotation Cipher:</strong> Shifts bits left or right within a block.</li>
  <li><strong>P-Box (Permutation Box):</strong> Rearranges bit positions. Types: Straight (same in/out), Compressed (fewer out), Expanded (more out).</li>
  <li><strong>S-Box (Substitution Box):</strong> Replaces input bits with different output (non-linear, provides core security).</li>
  <li><strong>Product Block:</strong> Combines multiple operations (XOR, P-Box, S-Box) for stronger encryption.</li>
</ul>

<h2>The Data Encryption Standard (DES)</h2>
<p>DES is the most traditionally used block cipher in the world:</p>
<ul>
  <li>Created in <strong>1977</strong> by the NBS (now NIST), standard name: <strong>FIPS PUB 46</strong>.</li>
  <li>Block size: <strong>64 bits</strong>.</li>
  <li>Key size: <strong>56 bits</strong> (effective).</li>
  <li>Structure: <strong>16 rounds</strong> of Feistel processing.</li>
  <li>Status: Now <strong>obsolete</strong> due to successful brute-force attacks.</li>
</ul>
<div class="callout callout-warning"><strong>Exam Alert:</strong> DES block = 64 bits, key = 56 bits, 16 rounds, each subkey = 48 bits.</div>

<h2>DES Encryption Process</h2>
<ol>
  <li><strong>Initial Permutation (IP):</strong> Reorders the 64-bit input. Even bits → Left Half, Odd bits → Right Half.</li>
  <li><strong>16 Rounds</strong> of Feistel function processing, each using a 48-bit subkey.</li>
  <li><strong>Final Permutation (FP):</strong> Inverse of IP, produces the 64-bit ciphertext.</li>
</ol>

<h2>One DES Round (Feistel Function)</h2>
<p>Each round operates on two 32-bit halves (L and R):</p>
<ul>
  <li>L<sub>i</sub> = R<sub>i-1</sub></li>
  <li>R<sub>i</sub> = L<sub>i-1</sub> ⊕ F(R<sub>i-1</sub>, K<sub>i</sub>)</li>
</ul>
<p>The function F performs:</p>
<ol>
  <li>Expand R from 32 → 48 bits (Expansion P-box).</li>
  <li>XOR with 48-bit subkey K<sub>i</sub>.</li>
  <li>Pass through 8 S-boxes (each 6→4 bits) → 32 bits.</li>
  <li>Permute using 32-bit P-box.</li>
</ol>

<h2>DES Decryption</h2>
<p>Decryption uses the same algorithm but with subkeys in <strong>reverse order</strong> (SK16 down to SK1). The IP undoes the final FP, and vice versa, recovering the original plaintext.</p>

<h2>Strength of DES & Avalanche Effect</h2>
<p>56-bit keys give 2<sup>56</sup> = 7.2 × 10<sup>16</sup> possible values. DES was broken by brute force: 1997 (months on Internet), 1998 (days on dedicated hardware), 1999 (22 hours combined).</p>
<p>The <strong>Avalanche Effect</strong>: A small change in plaintext or key causes a large, unpredictable change in ciphertext.</p>

<h2>Triple DES (3DES)</h2>
<p>To overcome DES weakness, Triple DES applies DES three times:</p>
<ul>
  <li><strong>2-key 3DES:</strong> Uses 112 bits (K1 and K2). Encrypt-Decrypt-Encrypt with K1, K2, K1.</li>
  <li><strong>3-key 3DES:</strong> Uses 168 bits (K1, K2, K3). Encrypt-Decrypt-Encrypt with K1, K2, K3.</li>
</ul>

<h2>Other Symmetric Ciphers</h2>
<ul>
  <li><strong>RC4:</strong> Stream cipher, used in WEP/SSL, now insecure.</li>
  <li><strong>RC5:</strong> Block cipher with variable block sizes, rounds, and key lengths.</li>
  <li><strong>IDEA:</strong> 64-bit blocks, 128-bit key, 8 rounds. Used in PGP.</li>
  <li><strong>CAST-128:</strong> 64-bit block, 40-128 bit key. Used in PGP/GPG.</li>
  <li><strong>CAST-256:</strong> 128-bit block, up to 256-bit key.</li>
  <li><strong>Blowfish:</strong> 64-bit blocks, 32-448 bit key, 16 rounds, key-dependent S-boxes.</li>
</ul>`,

        bodyAr: `<h2>مكونات تشفير الكتل</h2>
<p>تعالج شفرات الكتل البيانات في كتل ذات حجم ثابت. الوحدات الأساسية تشمل:</p>
<ul>
  <li><strong>شفرة XOR:</strong> عملية أو الحصرية. قابلة للعكس: A ⊕ B ⊕ B = A.</li>
  <li><strong>شفرة الدوران:</strong> تُزيح البتات يسارًا أو يمينًا داخل الكتلة.</li>
  <li><strong>صندوق التبديل (P-Box):</strong> يعيد ترتيب مواقع البتات. الأنواع: مستقيم، مضغوط، موسّع.</li>
  <li><strong>صندوق الاستبدال (S-Box):</strong> يستبدل بتات الإدخال بمخرجات مختلفة (غير خطي، يوفر الأمان الأساسي).</li>
  <li><strong>كتلة المنتج:</strong> تجمع عمليات متعددة (XOR، P-Box، S-Box) لتشفير أقوى.</li>
</ul>

<h2>معيار تشفير البيانات (DES)</h2>
<p>DES هو أكثر شفرات الكتل استخدامًا تقليديًا في العالم:</p>
<ul>
  <li>أُنشئ عام <strong>1977</strong> بواسطة NBS (الآن NIST)، اسم المعيار: <strong>FIPS PUB 46</strong>.</li>
  <li>حجم الكتلة: <strong>64 بت</strong>.</li>
  <li>حجم المفتاح: <strong>56 بت</strong> (فعلي).</li>
  <li>الهيكل: <strong>16 جولة</strong> من معالجة فيستل.</li>
  <li>الحالة: أصبح الآن <strong>قديمًا</strong> بسبب هجمات القوة الغاشمة الناجحة.</li>
</ul>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> كتلة DES = 64 بت، المفتاح = 56 بت، 16 جولة، كل مفتاح فرعي = 48 بت.</div>

<h2>عملية تشفير DES</h2>
<ol>
  <li><strong>التبديل الأولي (IP):</strong> يعيد ترتيب المدخلات ذات 64 بت. البتات الزوجية → النصف الأيسر، البتات الفردية → النصف الأيمن.</li>
  <li><strong>16 جولة</strong> من معالجة دالة فيستل، كل منها يستخدم مفتاحًا فرعيًا من 48 بت.</li>
  <li><strong>التبديل النهائي (FP):</strong> معكوس IP، ينتج النص المشفر ذو 64 بت.</li>
</ol>

<h2>جولة DES واحدة (دالة فيستل)</h2>
<p>تعمل كل جولة على نصفين من 32 بت (L وR):</p>
<ul>
  <li>L<sub>i</sub> = R<sub>i-1</sub></li>
  <li>R<sub>i</sub> = L<sub>i-1</sub> ⊕ F(R<sub>i-1</sub>, K<sub>i</sub>)</li>
</ul>
<p>الدالة F تؤدي:</p>
<ol>
  <li>توسيع R من 32 → 48 بت (صندوق التوسيع).</li>
  <li>XOR مع المفتاح الفرعي K<sub>i</sub> من 48 بت.</li>
  <li>المرور عبر 8 صناديق S (كل منها 6→4 بت) → 32 بت.</li>
  <li>التبديل باستخدام صندوق P من 32 بت.</li>
</ol>

<h2>فك تشفير DES</h2>
<p>يستخدم فك التشفير نفس الخوارزمية لكن بالمفاتيح الفرعية بترتيب <strong>عكسي</strong> (SK16 إلى SK1).</p>

<h2>قوة DES وتأثير الانهيار</h2>
<p>مفاتيح 56 بت تعطي 2<sup>56</sup> = 7.2 × 10<sup>16</sup> قيمة ممكنة. تم كسر DES: 1997 (أشهر)، 1998 (أيام)، 1999 (22 ساعة).</p>
<p><strong>تأثير الانهيار:</strong> تغيير بسيط في النص أو المفتاح يسبب تغييرًا كبيرًا وغير متوقع في النص المشفر.</p>

<h2>Triple DES (3DES)</h2>
<ul>
  <li><strong>3DES بمفتاحين:</strong> 112 بت (K1 وK2). تشفير-فك تشفير-تشفير.</li>
  <li><strong>3DES بثلاثة مفاتيح:</strong> 168 بت (K1، K2، K3).</li>
</ul>

<h2>شفرات متماثلة أخرى</h2>
<ul>
  <li><strong>RC4:</strong> شفرة تدفق، استُخدمت في WEP/SSL، الآن غير آمنة.</li>
  <li><strong>RC5:</strong> شفرة كتل بأحجام كتل وجولات وأطوال مفاتيح متغيرة.</li>
  <li><strong>IDEA:</strong> كتل 64 بت، مفتاح 128 بت، 8 جولات. تُستخدم في PGP.</li>
  <li><strong>CAST-128:</strong> كتلة 64 بت، مفتاح 40-128 بت. تُستخدم في PGP/GPG.</li>
  <li><strong>Blowfish:</strong> كتل 64 بت، مفتاح 32-448 بت، 16 جولة.</li>
</ul>`,
      },
    },
  ],

  summary: {
    points: [
      "DES encrypts 64-bit blocks using a 56-bit key through 16 Feistel rounds, each with a 48-bit subkey.",
      "Core components: XOR, Rotation, P-Boxes (permutation), S-Boxes (substitution), and Product blocks.",
      "DES decryption uses the same algorithm with subkeys in reverse order (SK16 to SK1).",
      "DES is now obsolete — broken by brute force in 22 hours (1999). Triple DES extends it with 2 or 3 keys.",
      "IDEA (128-bit key), CAST, Blowfish, RC4, and RC5 are other symmetric cipher algorithms."
    ],
    pointsAr: [
      "DES يشفر كتل 64 بت باستخدام مفتاح 56 بت عبر 16 جولة فيستل، كل منها بمفتاح فرعي 48 بت.",
      "المكونات الأساسية: XOR، الدوران، صناديق التبديل (P-Box)، صناديق الاستبدال (S-Box)، وكتل المنتج.",
      "فك تشفير DES يستخدم نفس الخوارزمية بالمفاتيح الفرعية بترتيب عكسي (SK16 إلى SK1).",
      "DES أصبح قديمًا — كُسر بالقوة الغاشمة في 22 ساعة (1999). Triple DES يمدده بـ 2 أو 3 مفاتيح.",
      "IDEA (مفتاح 128 بت)، CAST، Blowfish، RC4، وRC5 هي خوارزميات تشفير متماثل أخرى."
    ],
  },

  mcq: [
    {
      id: 'crypto-l3-q1',
      question: "[MID] Block ciphers accumulate symbols in a message of:",
      questionAr: "[MID] شفرات الكتل تجمع الرموز في رسالة ذات حجم:",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Variable size', isCorrect: false },
        { id: 'b', text: 'Integration size', isCorrect: false },
        { id: 'c', text: 'Fixed size', isCorrect: true },
        { id: 'd', text: 'Increasing size', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q2',
      question: "[MID] What is the block size and key length for the IDEA algorithm?",
      questionAr: "[MID] ما هو حجم الكتلة وطول المفتاح لخوارزمية IDEA؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '64, 56 bits', isCorrect: false },
        { id: 'b', text: '64, 128 bits', isCorrect: true },
        { id: 'c', text: '128, 256 bits', isCorrect: false },
        { id: 'd', text: '64, 64 bits', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q3',
      question: "[MID] Which of the following is/are the application(s) of the DES algorithm?",
      questionAr: "[MID] أيٌّ مما يلي هو تطبيق/تطبيقات خوارزمية DES؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'ATM', isCorrect: false },
        { id: 'b', text: 'E-mail', isCorrect: false },
        { id: 'c', text: 'Remote access', isCorrect: false },
        { id: 'd', text: 'All', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l3-q4',
      question: "[MID] The sub key length at each round of DES is:",
      questionAr: "[MID] طول المفتاح الفرعي في كل جولة من DES هو:",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: '48', isCorrect: true },
        { id: 'b', text: '32', isCorrect: false },
        { id: 'c', text: '56', isCorrect: false },
        { id: 'd', text: '64', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q5',
      question: "[MID] Which ciphers can operate on 64-bit blocks of plain and cipher data?",
      questionAr: "[MID] أي الشفرات يمكنها العمل على كتل 64 بت؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'IDEA', isCorrect: false },
        { id: 'b', text: 'CAST', isCorrect: false },
        { id: 'c', text: 'Triple-DES', isCorrect: false },
        { id: 'd', text: 'All', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l3-q6',
      question: "[MID] Which of the following algorithm(s) has overcome DES?",
      questionAr: "[MID] أيٌّ من الخوارزميات التالية تغلبت على DES؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'CAST', isCorrect: false },
        { id: 'b', text: 'AES', isCorrect: false },
        { id: 'c', text: '3DES', isCorrect: false },
        { id: 'd', text: 'All', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l3-q7',
      question: "[MID] Which block cipher has key length of 128 bits?",
      questionAr: "[MID] أي شفرة كتل لها مفتاح بطول 128 بت؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'IDEA', isCorrect: false },
        { id: 'b', text: 'CAST', isCorrect: false },
        { id: 'c', text: 'Both (A) & (B)', isCorrect: true },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q8',
      question: "How many rounds does DES use?",
      questionAr: "كم عدد الجولات التي يستخدمها DES؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '8', isCorrect: false },
        { id: 'b', text: '10', isCorrect: false },
        { id: 'c', text: '16', isCorrect: true },
        { id: 'd', text: '20', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q9',
      question: "In DES decryption, the subkeys are used in what order?",
      questionAr: "في فك تشفير DES، تُستخدم المفاتيح الفرعية بأي ترتيب؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Same order as encryption (SK1 to SK16)', isCorrect: false },
        { id: 'b', text: 'Reverse order (SK16 to SK1)', isCorrect: true },
        { id: 'c', text: 'Random order', isCorrect: false },
        { id: 'd', text: 'Only even-numbered subkeys', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q10',
      question: "The Avalanche Effect in DES means:",
      questionAr: "تأثير الانهيار في DES يعني:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A large key produces a small ciphertext', isCorrect: false },
        { id: 'b', text: 'A small change in input causes a large change in output', isCorrect: true },
        { id: 'c', text: 'DES can only encrypt small messages', isCorrect: false },
        { id: 'd', text: 'DES uses variable-length keys', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q11',
      question: "How many keys does 3DES with three keys use, and what is the total key length?",
      questionAr: "كم مفتاحًا يستخدم 3DES بثلاثة مفاتيح، وما إجمالي طول المفتاح؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '2 keys, 112 bits', isCorrect: false },
        { id: 'b', text: '3 keys, 168 bits', isCorrect: true },
        { id: 'c', text: '3 keys, 192 bits', isCorrect: false },
        { id: 'd', text: '2 keys, 128 bits', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l3-q12',
      question: "The Blowfish algorithm uses a key length ranging from:",
      questionAr: "خوارزمية Blowfish تستخدم مفتاحًا يتراوح طوله من:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '64 to 256 bits', isCorrect: false },
        { id: 'b', text: '32 to 448 bits', isCorrect: true },
        { id: 'c', text: '128 to 512 bits', isCorrect: false },
        { id: 'd', text: '56 to 168 bits', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l3-w1',
      question: "Describe the steps of one DES round (Feistel function F) in detail.",
      questionAr: "صِف خطوات جولة DES واحدة (دالة فيستل F) بالتفصيل.",
      modelAnswer: "In each DES round: (1) The right half R (32 bits) is expanded to 48 bits using an expansion permutation. (2) The expanded R is XORed with the 48-bit round subkey Ki. (3) The result passes through 8 S-boxes, each taking 6 bits as input and producing 4 bits, yielding a 32-bit output. (4) The S-box output is permuted using a 32-bit P-box. (5) This result is XORed with the left half L to produce the new right half: Ri = Li-1 ⊕ F(Ri-1, Ki). The new left half is simply the old right half: Li = Ri-1.",
      modelAnswerAr: "في كل جولة DES: (1) يُوسَّع النصف الأيمن R (32 بت) إلى 48 بت باستخدام تبديل التوسيع. (2) يُجرى XOR بين R الموسّع والمفتاح الفرعي Ki (48 بت). (3) تمر النتيجة عبر 8 صناديق S، كل منها يأخذ 6 بت كمدخل وينتج 4 بت، مما يعطي 32 بت. (4) يُبدَّل ناتج S-box باستخدام صندوق P من 32 بت. (5) تُجرى XOR بين هذه النتيجة والنصف الأيسر L لإنتاج النصف الأيمن الجديد. والنصف الأيسر الجديد هو النصف الأيمن القديم.",
    },
    {
      id: 'crypto-l3-w2',
      question: "Why was DES replaced and what alternatives were developed?",
      questionAr: "لماذا تم استبدال DES وما البدائل التي طُوِّرت؟",
      modelAnswer: "DES was replaced because its 56-bit key was too short, making it vulnerable to brute-force attacks. In 1999, DES was cracked in just 22 hours. Alternatives include: Triple DES (3DES) which applies DES three times with 2 or 3 keys (112 or 168 bits), and AES (Advanced Encryption Standard) which uses 128/192/256-bit keys and is the current standard. Other ciphers like IDEA, CAST, and Blowfish also emerged.",
      modelAnswerAr: "تم استبدال DES لأن مفتاحه ذو 56 بت كان قصيرًا جدًا، مما جعله عرضة لهجمات القوة الغاشمة. في 1999 تم كسر DES في 22 ساعة فقط. البدائل تشمل: Triple DES (3DES) الذي يطبق DES ثلاث مرات بـ 2 أو 3 مفاتيح، وAES الذي يستخدم مفاتيح 128/192/256 بت وهو المعيار الحالي. كما ظهرت شفرات أخرى مثل IDEA وCAST وBlowfish.",
    },
    {
      id: 'crypto-l3-w3',
      question: "What is the Avalanche Effect and why is it important in block ciphers?",
      questionAr: "ما هو تأثير الانهيار ولماذا هو مهم في شفرات الكتل؟",
      modelAnswer: "The Avalanche Effect means that a small change in the plaintext or key (even a single bit) produces a large, unpredictable change in the ciphertext. This is crucial because it ensures that attackers cannot derive useful information by observing how small input changes affect the output, making cryptanalysis significantly harder and ensuring the cipher's security.",
      modelAnswerAr: "تأثير الانهيار يعني أن تغييرًا بسيطًا في النص الصريح أو المفتاح (حتى بت واحد) ينتج تغييرًا كبيرًا وغير متوقع في النص المشفر. هذا مهم لأنه يضمن عدم قدرة المهاجمين على استنتاج معلومات مفيدة من ملاحظة كيف تؤثر تغييرات المدخلات الصغيرة على المخرجات، مما يجعل تحليل الشفرات أصعب بكثير.",
    },
  ],
};
