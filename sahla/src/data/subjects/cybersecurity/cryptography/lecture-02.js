export const LECTURE = {
  subjectId: 'crypto',
  number: 2,
  title: 'Traditional Ciphers & Hash Functions',
  titleAr: 'الشفرات التقليدية ودوال التجزئة',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Traditional Ciphers</h2>
<p>Traditional ciphers are the earliest forms of encryption and fall into two main categories: <strong>substitution ciphers</strong> and <strong>transposition ciphers</strong>.</p>

<h2>Substitution Cipher</h2>
<p>A substitution cipher replaces one symbol with another. There are two sub-types:</p>
<ul>
  <li><strong>Monoalphabetic:</strong> Each letter always maps to the same substitute. Example: both L's in "HELLO" map to O → "KHOOR".</li>
  <li><strong>Polyalphabetic:</strong> The same letter can map to different substitutes depending on its position. Example: L maps to N in one position and Z in another.</li>
</ul>

<h2>Shift Cipher (Caesar Cipher)</h2>
<p>The shift cipher is a special case of substitution where each letter is shifted by a fixed number (the key) in the alphabet.</p>
<p><strong>Formula:</strong></p>
<ul>
  <li>Encryption: C = (P + K) mod 26</li>
  <li>Decryption: P = (C − K) mod 26</li>
</ul>
<p><strong>Example:</strong> Encrypt "HELLO" with key = 15:</p>
<ul>
  <li>H(7) + 15 = 22 → W</li>
  <li>E(4) + 15 = 19 → T</li>
  <li>L(11) + 15 = 0 → A</li>
  <li>L(11) + 15 = 0 → A</li>
  <li>O(14) + 15 = 3 → D</li>
</ul>
<p>Result: <strong>WTAAD</strong></p>
<div class="callout callout-info"><strong>Tip:</strong> The Caesar cipher uses modular arithmetic with value 26 (the number of letters in the English alphabet).</div>

<h2>Transposition Cipher</h2>
<p>A transposition cipher reorders (permutes) symbols in a block without replacing them.</p>
<p><strong>Example:</strong> Encrypt "HELLO MY DEAR" using a key block of size 4:</p>
<ol>
  <li>Remove spaces: HELLOMYDEAR</li>
  <li>Divide into blocks of 4: HELL | OMYD | EARZ (add bogus Z)</li>
  <li>Apply key permutation to each block</li>
  <li>Result: <strong>ELHLMDOYAZER</strong></li>
</ol>

<h2>Rail Fence Cipher</h2>
<p>Rail Fence is a type of transposition cipher. It writes plaintext in a zigzag pattern across a number of "rails" and then reads off each row.</p>
<p><strong>Example:</strong> Plaintext "GEEKSFORGEEKS" with 3 rails → Ciphertext: <strong>GSGSEKFREKEOE</strong></p>

<h2>Cryptanalysis</h2>
<p>The main target of cryptanalysis is to recover the <strong>key</strong>, not just the message. Two general approaches:</p>
<ul>
  <li><strong>Cryptanalytic attack:</strong> Exploiting mathematical weaknesses, patterns, and letter frequencies.</li>
  <li><strong>Brute-force attack:</strong> Trying every possible key.</li>
</ul>
<p>In English, the most frequent letters are: <strong>E</strong> (~12.7%), <strong>T</strong> (~9.1%), A, O, I, N, S, H, R. The word "the" is the most common 3-letter word.</p>
<div class="callout callout-warning"><strong>Exam Alert:</strong> Know that "the" is the most common English trigram and how frequency analysis works to break monoalphabetic ciphers.</div>

<h2>Hash Functions</h2>
<p>A hash function produces a <strong>fixed-length output</strong> (digest) from any input. Key properties:</p>
<ul>
  <li><strong>One-way:</strong> Cannot reverse the hash to get the original message.</li>
  <li><strong>Fixed output:</strong> Any input length produces a fixed-size digest.</li>
  <li><strong>Collision resistant:</strong> Different inputs should not produce the same hash.</li>
</ul>
<p>Common hash algorithms:</p>
<ul>
  <li><strong>MD5:</strong> 128-bit digest (4 words of 32 bits).</li>
  <li><strong>SHA-1:</strong> 160-bit digest (5 words of 32 bits).</li>
</ul>
<div class="callout callout-warning"><strong>Exam Alert:</strong> A hash function provides <strong>integrity</strong> (detects modifications) but NOT authentication. Lossless compression is NOT a hash function because it is reversible.</div>`,

        bodyAr: `<h2>الشفرات التقليدية</h2>
<p>الشفرات التقليدية هي أقدم أشكال التشفير وتنقسم إلى فئتين رئيسيتين: <strong>شفرات الاستبدال</strong> و<strong>شفرات التبديل</strong>.</p>

<h2>شفرة الاستبدال</h2>
<p>تستبدل شفرة الاستبدال رمزًا برمز آخر. هناك نوعان فرعيان:</p>
<ul>
  <li><strong>أحادية الأبجدية (Monoalphabetic):</strong> كل حرف يُحوَّل دائمًا لنفس البديل. مثال: كلا الحرفين L في "HELLO" يتحولان إلى O → "KHOOR".</li>
  <li><strong>متعددة الأبجديات (Polyalphabetic):</strong> نفس الحرف يمكن أن يتحول لبدائل مختلفة حسب موقعه.</li>
</ul>

<h2>شفرة الإزاحة (شفرة قيصر)</h2>
<p>شفرة الإزاحة هي حالة خاصة من الاستبدال حيث يُزاح كل حرف بعدد ثابت (المفتاح) في الأبجدية.</p>
<p><strong>الصيغة:</strong></p>
<ul>
  <li>التشفير: C = (P + K) mod 26</li>
  <li>فك التشفير: P = (C − K) mod 26</li>
</ul>
<p><strong>مثال:</strong> تشفير "HELLO" بمفتاح = 15:</p>
<ul>
  <li>H(7) + 15 = 22 → W</li>
  <li>E(4) + 15 = 19 → T</li>
  <li>L(11) + 15 = 0 → A</li>
  <li>L(11) + 15 = 0 → A</li>
  <li>O(14) + 15 = 3 → D</li>
</ul>
<p>النتيجة: <strong>WTAAD</strong></p>
<div class="callout callout-info"><strong>نصيحة:</strong> تستخدم شفرة قيصر الحساب المعياري بالقيمة 26 (عدد حروف الأبجدية الإنجليزية).</div>

<h2>شفرة التبديل (Transposition)</h2>
<p>تعيد شفرة التبديل ترتيب الرموز في كتلة دون استبدالها.</p>
<p><strong>مثال:</strong> تشفير "HELLO MY DEAR" باستخدام كتلة مفتاح بحجم 4:</p>
<ol>
  <li>إزالة المسافات: HELLOMYDEAR</li>
  <li>تقسيم إلى كتل من 4: HELL | OMYD | EARZ (إضافة حرف وهمي Z)</li>
  <li>تطبيق تبديل المفتاح على كل كتلة</li>
  <li>النتيجة: <strong>ELHLMDOYAZER</strong></li>
</ol>

<h2>شفرة السياج (Rail Fence)</h2>
<p>شفرة السياج هي نوع من شفرات التبديل. تكتب النص في نمط متعرج عبر عدد من "القضبان" ثم تقرأ كل صف.</p>
<p><strong>مثال:</strong> النص "GEEKSFORGEEKS" مع 3 قضبان → النص المشفر: <strong>GSGSEKFREKEOE</strong></p>

<h2>تحليل الشفرات</h2>
<p>الهدف الرئيسي لتحليل الشفرات هو استعادة <strong>المفتاح</strong> وليس فقط الرسالة. هناك نهجان عامان:</p>
<ul>
  <li><strong>هجوم تحليلي:</strong> استغلال نقاط الضعف الرياضية والأنماط وتكرار الحروف.</li>
  <li><strong>هجوم القوة الغاشمة:</strong> تجربة كل مفتاح ممكن.</li>
</ul>
<p>في الإنجليزية، أكثر الحروف تكرارًا: <strong>E</strong> (~12.7%)، <strong>T</strong> (~9.1%)، ثم A, O, I, N, S, H, R. وكلمة "the" هي أكثر كلمة ثلاثية شيوعًا.</p>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> اعرف أن "the" هي أكثر ثلاثية حروف شيوعًا وكيف يعمل تحليل التكرار لكسر الشفرات أحادية الأبجدية.</div>

<h2>دوال التجزئة (Hash Functions)</h2>
<p>تنتج دالة التجزئة مخرجات <strong>بطول ثابت</strong> (ملخص) من أي مدخل. الخصائص الرئيسية:</p>
<ul>
  <li><strong>أحادية الاتجاه:</strong> لا يمكن عكس التجزئة للحصول على الرسالة الأصلية.</li>
  <li><strong>مخرجات ثابتة:</strong> أي طول مدخل ينتج ملخصًا بحجم ثابت.</li>
  <li><strong>مقاومة التصادم:</strong> مدخلات مختلفة لا ينبغي أن تنتج نفس التجزئة.</li>
</ul>
<p>خوارزميات التجزئة الشائعة:</p>
<ul>
  <li><strong>MD5:</strong> ملخص 128 بت (4 كلمات من 32 بت).</li>
  <li><strong>SHA-1:</strong> ملخص 160 بت (5 كلمات من 32 بت).</li>
</ul>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> دالة التجزئة توفر <strong>السلامة</strong> (تكشف التعديلات) ولكن ليس المصادقة. الضغط بدون فقدان ليس دالة تجزئة لأنه قابل للعكس.</div>`,
      },
    },
  ],

  summary: {
    points: [
      "Substitution ciphers replace symbols; monoalphabetic uses fixed mapping, polyalphabetic uses variable mapping.",
      "The Caesar (shift) cipher shifts each letter by a fixed key using modular arithmetic (mod 26).",
      "Transposition ciphers reorder symbols without replacing them; Rail Fence writes text in a zigzag pattern.",
      "Cryptanalysis aims to recover the key via cryptanalytic attacks (frequency analysis) or brute-force search.",
      "Hash functions produce fixed-length, one-way digests: MD5 (128-bit) and SHA-1 (160-bit).",
      "Hash functions provide integrity but NOT authentication; lossless compression is NOT a hash function."
    ],
    pointsAr: [
      "شفرات الاستبدال تستبدل الرموز؛ أحادية الأبجدية تستخدم تحويلًا ثابتًا، ومتعددة الأبجديات تستخدم تحويلًا متغيرًا.",
      "شفرة قيصر (الإزاحة) تزيح كل حرف بمفتاح ثابت باستخدام الحساب المعياري (mod 26).",
      "شفرات التبديل تعيد ترتيب الرموز دون استبدالها؛ شفرة السياج تكتب النص بنمط متعرج.",
      "يهدف تحليل الشفرات لاستعادة المفتاح عبر هجمات تحليلية (تحليل التكرار) أو القوة الغاشمة.",
      "دوال التجزئة تنتج ملخصات أحادية الاتجاه بطول ثابت: MD5 (128 بت) وSHA-1 (160 بت).",
      "دوال التجزئة توفر السلامة وليس المصادقة؛ والضغط بدون فقدان ليس دالة تجزئة."
    ],
  },

  mcq: [
    {
      id: 'crypto-l2-q1',
      question: "[MID] Which is the monoalphabetic cipher that uses modular arithmetic with value 26?",
      questionAr: "[MID] ما هي الشفرة أحادية الأبجدية التي تستخدم الحساب المعياري بالقيمة 26؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Transposition', isCorrect: false },
        { id: 'b', text: 'Additive', isCorrect: false },
        { id: 'c', text: 'Shift', isCorrect: true },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q2',
      question: "[MID] In cryptography, what is a cipher?",
      questionAr: "[MID] في التشفير، ما هي الشفرة (cipher)؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'An algorithm for encryption / decryption', isCorrect: true },
        { id: 'b', text: 'The encrypted message', isCorrect: false },
        { id: 'c', text: 'The decrypted message', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q3',
      question: "[MID] What is the length of the Hash value output of the SHA-1 algorithm?",
      questionAr: "[MID] ما هو طول مخرجات قيمة التجزئة لخوارزمية SHA-1؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: '128 bits', isCorrect: false },
        { id: 'b', text: '160 bits', isCorrect: true },
        { id: 'c', text: '256 bits', isCorrect: false },
        { id: 'd', text: '512 bits', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q4',
      question: "[MID] At which end of the communicating parties is decryption performed?",
      questionAr: "[MID] عند أي طرف من أطراف الاتصال يتم فك التشفير؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Transmitter', isCorrect: false },
        { id: 'b', text: 'Receiver', isCorrect: true },
        { id: 'c', text: 'Both ends', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q5',
      question: "[MID] In cryptography, the order of letters in a message is rearranged by which cipher?",
      questionAr: "[MID] في التشفير، يُعاد ترتيب الحروف في الرسالة بواسطة أي شفرة؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Transpositional', isCorrect: true },
        { id: 'b', text: 'Substitution', isCorrect: false },
        { id: 'c', text: 'Sequential', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q6',
      question: "[MID] Which cipher has two categories: monoalphabetic and polyalphabetic?",
      questionAr: "[MID] أي شفرة لها فئتان: أحادية الأبجدية ومتعددة الأبجديات؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Substitution', isCorrect: true },
        { id: 'b', text: 'Transposition', isCorrect: false },
        { id: 'c', text: 'Symmetric', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q7',
      question: "[MID] What is the output of a cryptographic hash function?",
      questionAr: "[MID] ما هو ناتج دالة التجزئة التشفيرية؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'A variable set of bits', isCorrect: false },
        { id: 'b', text: 'A fixed set of bits, one-way mapped', isCorrect: true },
        { id: 'c', text: 'A fixed set of bits, bidirectional mapped', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q8',
      question: "[MID] Which security service cannot be achieved using Hash functions?",
      questionAr: "[MID] أي خدمة أمنية لا يمكن تحقيقها باستخدام دوال التجزئة؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Original data retrieval', isCorrect: true },
        { id: 'b', text: 'Data integrity check', isCorrect: false },
        { id: 'c', text: 'Digital signatures', isCorrect: false },
        { id: 'd', text: 'Password check', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q9',
      question: "[MID] Which of the following is / are offered by Hash functions?",
      questionAr: "[MID] أيٌّ مما يلي تقدمه دوال التجزئة؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Authentication', isCorrect: false },
        { id: 'b', text: 'Non repudiation', isCorrect: false },
        { id: 'c', text: 'Data integrity', isCorrect: false },
        { id: 'd', text: 'All', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l2-q10',
      question: "[MID] Which of the following is not a hash function?",
      questionAr: "[MID] أيٌّ مما يلي ليس دالة تجزئة؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'MD5', isCorrect: false },
        { id: 'b', text: 'SHA-1', isCorrect: false },
        { id: 'c', text: 'SHA-256', isCorrect: false },
        { id: 'd', text: 'Blowfish', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l2-q11',
      question: "If each occurrence of the letter 'L' maps to a different character, the cipher is:",
      questionAr: "إذا تحوّل كل ظهور للحرف 'L' إلى حرف مختلف، فإن الشفرة هي:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Monoalphabetic', isCorrect: false },
        { id: 'b', text: 'Polyalphabetic', isCorrect: true },
        { id: 'c', text: 'Transposition', isCorrect: false },
        { id: 'd', text: 'Rail Fence', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l2-q12',
      question: "The Rail Fence cipher is classified as a:",
      questionAr: "تُصنَّف شفرة السياج (Rail Fence) كـ:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Substitution cipher', isCorrect: false },
        { id: 'b', text: 'Transposition cipher', isCorrect: true },
        { id: 'c', text: 'Hash function', isCorrect: false },
        { id: 'd', text: 'Stream cipher', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l2-w1',
      question: "Encrypt the message 'HELLO' using the Caesar cipher with a key of 15. Show each step.",
      questionAr: "شفّر الرسالة 'HELLO' باستخدام شفرة قيصر بمفتاح 15. أظهر كل خطوة.",
      modelAnswer: "Using C = (P + K) mod 26: H(7)+15=22→W, E(4)+15=19→T, L(11)+15=0→A, L(11)+15=0→A, O(14)+15=3→D. The ciphertext is WTAAD.",
      modelAnswerAr: "باستخدام C = (P + K) mod 26: H(7)+15=22→W، E(4)+15=19→T، L(11)+15=0→A، L(11)+15=0→A، O(14)+15=3→D. النص المشفر هو WTAAD.",
    },
    {
      id: 'crypto-l2-w2',
      question: "Why can't lossless compression be used as a hashing function?",
      questionAr: "لماذا لا يمكن استخدام الضغط بدون فقدان كدالة تجزئة؟",
      modelAnswer: "Lossless compression creates a compressed output that is fully reversible — you can decompress it to retrieve the original data. A hash function must be one-way (irreversible), meaning you cannot recover the original message from the hash digest. Therefore, lossless compression violates the fundamental one-way property of hash functions.",
      modelAnswerAr: "الضغط بدون فقدان ينتج مخرجات مضغوطة قابلة للعكس بالكامل — يمكنك فك ضغطها لاسترداد البيانات الأصلية. يجب أن تكون دالة التجزئة أحادية الاتجاه (غير قابلة للعكس)، بمعنى أنه لا يمكن استعادة الرسالة الأصلية من ملخص التجزئة. لذلك، الضغط بدون فقدان ينتهك خاصية الاتجاه الواحد الأساسية لدوال التجزئة.",
    },
    {
      id: 'crypto-l2-w3',
      question: "Compare MD5 and SHA-1 in terms of digest length. Which provides stronger security and why?",
      questionAr: "قارن بين MD5 وSHA-1 من حيث طول الملخص. أيهما يوفر أمانًا أقوى ولماذا؟",
      modelAnswer: "MD5 produces a 128-bit digest (4 words of 32 bits), while SHA-1 produces a 160-bit digest (5 words of 32 bits). SHA-1 provides stronger security because its longer digest means a larger output space, making collision attacks harder. However, both are now considered weak by modern standards, and SHA-256 or SHA-3 are recommended.",
      modelAnswerAr: "MD5 ينتج ملخصًا بطول 128 بت (4 كلمات من 32 بت)، بينما SHA-1 ينتج ملخصًا بطول 160 بت (5 كلمات من 32 بت). SHA-1 يوفر أمانًا أقوى لأن ملخصه الأطول يعني مساحة مخرجات أكبر، مما يجعل هجمات التصادم أصعب. ومع ذلك، كلاهما يُعتبر ضعيفًا بالمعايير الحديثة، ويُوصى بـ SHA-256 أو SHA-3.",
    },
  ],
};
