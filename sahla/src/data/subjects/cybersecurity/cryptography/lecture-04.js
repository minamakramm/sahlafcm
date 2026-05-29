export const LECTURE = {
  subjectId: 'crypto',
  number: 4,
  title: 'Advanced Encryption Standard (AES)',
  titleAr: 'معيار التشفير المتقدم (AES)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Origins of AES</h2>
<p>After security reports showed DES was vulnerable, a replacement was needed:</p>
<ul>
  <li>Theoretical attacks could break DES; exhaustive key search was feasible.</li>
  <li>Triple-DES was slow with small 64-bit blocks.</li>
  <li>US NIST issued a call for ciphers in <strong>1997</strong>.</li>
  <li>15 candidates were accepted in June 1998; 5 shortlisted in August 1999.</li>
  <li><strong>Rijndael</strong> was selected as AES in October 2000.</li>
  <li>Issued as NIST standard in <strong>November 2001</strong>.</li>
</ul>

<h2>The AES Cipher – Rijndael</h2>
<p>Designed by <strong>Rijmen</strong> and <strong>Daemen</strong> from Belgium. Key features:</p>
<ul>
  <li>Key sizes: <strong>128 / 192 / 256 bits</strong>.</li>
  <li>Data block size: <strong>128 bits</strong> (fixed).</li>
  <li>Iterative cipher that processes data as a block of <strong>4 columns × 4 bytes</strong> (called a "state").</li>
  <li>Designed to be resistant against known attacks, fast on CPUs, and simple in design.</li>
</ul>
<div class="callout callout-warning"><strong>Exam Alert:</strong> AES rounds: 128-bit key → 10 rounds, 192-bit key → 12 rounds, 256-bit key → 14 rounds. Final round has only 3 stages (no MixColumns).</div>

<h2>The AES Structure</h2>
<p>The key is expanded into an array of 32-bit words. Each round has <strong>4 stages</strong>:</p>
<ol>
  <li><strong>Byte Substitution (SubBytes):</strong> Uses an S-box to perform byte-by-byte substitution of the block.</li>
  <li><strong>Shift Rows:</strong> A simple row-wise permutation of the state bytes.</li>
  <li><strong>Mix Columns:</strong> Substitution using matrix multiplication over GF(2⁸).</li>
  <li><strong>Add Round Key:</strong> XOR the state with key material (round key).</li>
</ol>
<p>The process can be viewed as alternating XOR with key material and scrambling data bytes. There is an initial AddRoundKey before the rounds, and the final round omits the MixColumns step (only 3 stages).</p>

<h2>AES Round Details</h2>
<p><strong>SubBytes:</strong> Each byte is independently substituted using a lookup table (S-box). This provides non-linearity.</p>
<p><strong>ShiftRows:</strong> Bytes in each row are cyclically shifted. Row 0 → no shift, Row 1 → shift 1 byte, Row 2 → shift 2 bytes, Row 3 → shift 3 bytes.</p>
<p><strong>MixColumns:</strong> Each column is treated as a polynomial over GF(2⁸) and multiplied by a fixed polynomial. This provides diffusion.</p>
<p><strong>AddRoundKey:</strong> XOR between state and round key. This is the only step that uses the key directly.</p>

<h2>AES Decryption</h2>
<p>Decryption reverses the process: every stage is easily reversible. Keys are used in reverse order, and inverse operations (InvSubBytes, InvShiftRows, InvMixColumns) are applied.</p>

<h2>Summarizing AES</h2>
<ul>
  <li>Iterative cipher with key expanded into 32-bit word array.</li>
  <li>Four words form the round key in each round.</li>
  <li>Only AddRoundKey uses the key directly.</li>
  <li>Every stage is easily reversible for decryption.</li>
  <li>Decryption uses keys in reverse order.</li>
</ul>`,

        bodyAr: `<h2>أصول AES</h2>
<p>بعد أن أظهرت التقارير الأمنية أن DES كان عرضة للخطر، كانت هناك حاجة لبديل:</p>
<ul>
  <li>الهجمات النظرية يمكنها كسر DES؛ البحث الشامل عن المفتاح كان ممكنًا.</li>
  <li>Triple-DES كان بطيئًا بكتل صغيرة 64 بت.</li>
  <li>أصدر NIST الأمريكي دعوة للشفرات عام <strong>1997</strong>.</li>
  <li>قُبل 15 مرشحًا في يونيو 1998؛ وتم تصفية 5 في أغسطس 1999.</li>
  <li>تم اختيار <strong>Rijndael</strong> كـ AES في أكتوبر 2000.</li>
  <li>صدر كمعيار NIST في <strong>نوفمبر 2001</strong>.</li>
</ul>

<h2>شفرة AES – Rijndael</h2>
<p>صممها <strong>Rijmen</strong> و<strong>Daemen</strong> من بلجيكا. الميزات الرئيسية:</p>
<ul>
  <li>أحجام المفتاح: <strong>128 / 192 / 256 بت</strong>.</li>
  <li>حجم كتلة البيانات: <strong>128 بت</strong> (ثابت).</li>
  <li>شفرة تكرارية تعالج البيانات ككتلة من <strong>4 أعمدة × 4 بايت</strong> (تسمى "الحالة").</li>
  <li>مصممة لتكون مقاومة للهجمات المعروفة وسريعة وبسيطة التصميم.</li>
</ul>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> جولات AES: مفتاح 128 بت → 10 جولات، مفتاح 192 بت → 12 جولة، مفتاح 256 بت → 14 جولة. الجولة الأخيرة لها 3 مراحل فقط (بدون MixColumns).</div>

<h2>هيكل AES</h2>
<p>يُوسَّع المفتاح إلى مصفوفة من كلمات 32 بت. كل جولة لها <strong>4 مراحل</strong>:</p>
<ol>
  <li><strong>استبدال البايتات (SubBytes):</strong> يستخدم S-box لاستبدال كل بايت.</li>
  <li><strong>إزاحة الصفوف (ShiftRows):</strong> تبديل بسيط على مستوى الصف.</li>
  <li><strong>خلط الأعمدة (MixColumns):</strong> استبدال باستخدام ضرب المصفوفات.</li>
  <li><strong>إضافة مفتاح الجولة (AddRoundKey):</strong> XOR للحالة مع مادة المفتاح.</li>
</ol>
<p>هناك AddRoundKey أولي قبل الجولات، والجولة الأخيرة تحذف خطوة MixColumns (3 مراحل فقط).</p>

<h2>تفاصيل جولة AES</h2>
<p><strong>SubBytes:</strong> كل بايت يُستبدل باستخدام جدول بحث (S-box). يوفر عدم الخطية.</p>
<p><strong>ShiftRows:</strong> البايتات في كل صف تُزاح دوريًا. الصف 0 → بدون إزاحة، الصف 1 → إزاحة بايت واحد، وهكذا.</p>
<p><strong>MixColumns:</strong> كل عمود يُعامل كمتعدد حدود ويُضرب بمتعدد حدود ثابت. يوفر الانتشار.</p>
<p><strong>AddRoundKey:</strong> XOR بين الحالة ومفتاح الجولة. هذه الخطوة الوحيدة التي تستخدم المفتاح مباشرة.</p>

<h2>فك تشفير AES</h2>
<p>فك التشفير يعكس العملية: كل مرحلة قابلة للعكس بسهولة. تُستخدم المفاتيح بترتيب عكسي مع عمليات معكوسة.</p>

<h2>ملخص AES</h2>
<ul>
  <li>شفرة تكرارية مع توسيع المفتاح إلى مصفوفة كلمات 32 بت.</li>
  <li>أربع كلمات تشكل مفتاح الجولة في كل جولة.</li>
  <li>فقط AddRoundKey يستخدم المفتاح مباشرة.</li>
  <li>كل مرحلة قابلة للعكس بسهولة لفك التشفير.</li>
</ul>`,
      },
    },
  ],

  summary: {
    points: [
      "AES (Rijndael) replaced DES as the standard, using 128-bit blocks with 128/192/256-bit keys.",
      "AES has 4 round stages: SubBytes, ShiftRows, MixColumns, and AddRoundKey.",
      "Number of rounds depends on key size: 10 (128-bit), 12 (192-bit), or 14 (256-bit).",
      "The final round has only 3 stages — MixColumns is omitted.",
      "Only AddRoundKey directly uses the key; all stages are easily reversible for decryption."
    ],
    pointsAr: [
      "AES (Rijndael) حلّ محل DES كمعيار، يستخدم كتل 128 بت مع مفاتيح 128/192/256 بت.",
      "AES له 4 مراحل في كل جولة: SubBytes، ShiftRows، MixColumns، وAddRoundKey.",
      "عدد الجولات يعتمد على حجم المفتاح: 10 (128 بت)، 12 (192 بت)، أو 14 (256 بت).",
      "الجولة الأخيرة لها 3 مراحل فقط — يُحذف MixColumns.",
      "فقط AddRoundKey يستخدم المفتاح مباشرة؛ جميع المراحل قابلة للعكس بسهولة لفك التشفير."
    ],
  },

  mcq: [
    {
      id: 'crypto-l4-q1',
      question: "[MID] Which of the following is the fourth step of AES?",
      questionAr: "[MID] أيٌّ مما يلي هو الخطوة الرابعة في AES؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Sub bytes', isCorrect: false },
        { id: 'b', text: 'Add round keys', isCorrect: true },
        { id: 'c', text: 'Shift rows', isCorrect: false },
        { id: 'd', text: 'Mix columns', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q2',
      question: "[MID] How many rounds does a 256-bit key in AES require?",
      questionAr: "[MID] كم عدد الجولات التي يتطلبها مفتاح 256 بت في AES؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '16', isCorrect: false },
        { id: 'b', text: '12', isCorrect: false },
        { id: 'c', text: '10', isCorrect: false },
        { id: 'd', text: '14', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l4-q3',
      question: "[MID] Which of the following is NOT a part of the rounds in AES?",
      questionAr: "[MID] أيٌّ مما يلي ليس جزءًا من جولات AES؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Mix column', isCorrect: false },
        { id: 'b', text: 'Byte substitution', isCorrect: false },
        { id: 'c', text: 'IP and IP⁻¹', isCorrect: true },
        { id: 'd', text: 'Shift row and add round key', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q4',
      question: "What is the block size of AES?",
      questionAr: "ما هو حجم كتلة AES؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '64 bits', isCorrect: false },
        { id: 'b', text: '128 bits', isCorrect: true },
        { id: 'c', text: '192 bits', isCorrect: false },
        { id: 'd', text: '256 bits', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q5',
      question: "Who designed the Rijndael algorithm?",
      questionAr: "من صمم خوارزمية Rijndael؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Rivest, Shamir, Adleman', isCorrect: false },
        { id: 'b', text: 'Rijmen and Daemen', isCorrect: true },
        { id: 'c', text: 'Bruce Schneier', isCorrect: false },
        { id: 'd', text: 'Ron Rivest', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q6',
      question: "Which AES stage provides non-linearity through byte-by-byte substitution?",
      questionAr: "أي مرحلة في AES توفر عدم الخطية عبر استبدال بايت ببايت؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'ShiftRows', isCorrect: false },
        { id: 'b', text: 'SubBytes', isCorrect: true },
        { id: 'c', text: 'MixColumns', isCorrect: false },
        { id: 'd', text: 'AddRoundKey', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q7',
      question: "Which AES stage is omitted in the final round?",
      questionAr: "أي مرحلة في AES تُحذف في الجولة الأخيرة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'SubBytes', isCorrect: false },
        { id: 'b', text: 'ShiftRows', isCorrect: false },
        { id: 'c', text: 'MixColumns', isCorrect: true },
        { id: 'd', text: 'AddRoundKey', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q8',
      question: "In AES, data is processed as a state of:",
      questionAr: "في AES، تُعالج البيانات كحالة من:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '2 columns of 8 bytes', isCorrect: false },
        { id: 'b', text: '4 columns of 4 bytes', isCorrect: true },
        { id: 'c', text: '8 columns of 2 bytes', isCorrect: false },
        { id: 'd', text: '16 columns of 1 byte', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l4-q9',
      question: "Which AES stage is the only one that directly uses the key?",
      questionAr: "أي مرحلة في AES هي الوحيدة التي تستخدم المفتاح مباشرة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'SubBytes', isCorrect: false },
        { id: 'b', text: 'MixColumns', isCorrect: false },
        { id: 'c', text: 'ShiftRows', isCorrect: false },
        { id: 'd', text: 'AddRoundKey', isCorrect: true },
      ],
    },
    {
      id: 'crypto-l4-q10',
      question: "How many rounds does a 128-bit key AES use?",
      questionAr: "كم عدد الجولات التي يستخدمها AES بمفتاح 128 بت؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '10', isCorrect: true },
        { id: 'b', text: '12', isCorrect: false },
        { id: 'c', text: '14', isCorrect: false },
        { id: 'd', text: '16', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l4-w1',
      question: "Describe the four stages of an AES encryption round and explain the role of each.",
      questionAr: "صِف المراحل الأربع لجولة تشفير AES واشرح دور كل منها.",
      modelAnswer: "The four stages are: (1) SubBytes — performs byte-by-byte substitution using an S-box, providing non-linearity. (2) ShiftRows — cyclically shifts bytes in each row of the state (row 0: no shift, row 1: 1 byte, etc.), providing diffusion across columns. (3) MixColumns — multiplies each column by a fixed polynomial over GF(2⁸), mixing bytes within columns for further diffusion. (4) AddRoundKey — XORs the state with the round key, incorporating the secret key into the encryption. The final round omits MixColumns.",
      modelAnswerAr: "المراحل الأربع هي: (1) SubBytes — يستبدل كل بايت باستخدام S-box، مما يوفر عدم الخطية. (2) ShiftRows — يُزيح البايتات دوريًا في كل صف من الحالة، مما يوفر انتشارًا عبر الأعمدة. (3) MixColumns — يضرب كل عمود بمتعدد حدود ثابت، مما يخلط البايتات لمزيد من الانتشار. (4) AddRoundKey — يُجري XOR بين الحالة ومفتاح الجولة لدمج المفتاح السري. الجولة الأخيرة تحذف MixColumns.",
    },
    {
      id: 'crypto-l4-w2',
      question: "Why was Rijndael selected as the AES standard over other candidates?",
      questionAr: "لماذا تم اختيار Rijndael كمعيار AES على المرشحين الآخرين؟",
      modelAnswer: "Rijndael was selected because it met all required criteria: resistance against known cryptographic attacks, excellent speed and code compactness on various CPU architectures, design simplicity, and flexibility with multiple key sizes (128/192/256 bits). It was chosen from 15 candidates in a transparent, public evaluation process conducted by NIST from 1997 to 2000.",
      modelAnswerAr: "تم اختيار Rijndael لأنه استوفى جميع المعايير المطلوبة: مقاومة الهجمات التشفيرية المعروفة، سرعة ممتازة وضغط الكود على مختلف بنيات المعالجات، بساطة التصميم، والمرونة مع أحجام مفاتيح متعددة (128/192/256 بت). تم اختياره من 15 مرشحًا في عملية تقييم عامة شفافة أجراها NIST من 1997 إلى 2000.",
    },
    {
      id: 'crypto-l4-w3',
      question: "Compare DES and AES in terms of block size, key size, number of rounds, and current security status.",
      questionAr: "قارن بين DES وAES من حيث حجم الكتلة وحجم المفتاح وعدد الجولات والحالة الأمنية الحالية.",
      modelAnswer: "DES: 64-bit block, 56-bit key, 16 rounds, now obsolete (broken by brute force). AES: 128-bit block, 128/192/256-bit key, 10/12/14 rounds respectively, currently the gold standard for symmetric encryption. AES provides significantly stronger security due to larger key sizes and block sizes, making brute-force attacks computationally infeasible.",
      modelAnswerAr: "DES: كتلة 64 بت، مفتاح 56 بت، 16 جولة، أصبح قديمًا (كُسر بالقوة الغاشمة). AES: كتلة 128 بت، مفتاح 128/192/256 بت، 10/12/14 جولة على التوالي، حاليًا المعيار الذهبي للتشفير المتماثل. AES يوفر أمانًا أقوى بكثير بسبب أحجام المفاتيح والكتل الأكبر.",
    },
  ],
};
