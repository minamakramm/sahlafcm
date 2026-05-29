export const LECTURE = {
  subjectId: 'crypto',
  number: 8,
  title: 'Steganography',
  titleAr: 'إخفاء المعلومات (الستيغانوغرافي)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>What is Steganography?</h2>
<p>Steganography means <strong>hiding one piece of data within another</strong>. Unlike cryptography which makes data unreadable, steganography hides the very <strong>existence</strong> of the communication.</p>
<p><strong>Example:</strong> "Since Everyone Can Read, Encoding Text In Neutral Sentences Is Doubtfully Effective" — Taking the first letter of each word reveals: <strong>SECRET INSIDE</strong>.</p>

<h2>History of Steganography</h2>
<ul>
  <li><strong>Ancient Egyptian hieroglyphs</strong> contained hidden messages.</li>
  <li><strong>Herodotus (440 BC):</strong> Demaratus sent a warning about an attack by writing on the wooden backing of a wax tablet before applying beeswax.</li>
  <li><strong>Ancient Chinese:</strong> Wrote messages on fine silk, crunched into a tiny ball, covered by wax, then swallowed by the messenger.</li>
  <li><strong>World War II:</strong> Special invisible "inks" were important steganographic tools.</li>
</ul>

<h2>Physical Techniques</h2>
<ul>
  <li>Hidden messages within wax tablets.</li>
  <li>Hidden messages on messenger's body.</li>
  <li>Messages written in secret inks on paper.</li>
  <li>Messages in Morse code on knitting yarn, knitted into clothing.</li>
  <li>Messages written on envelopes under postage stamps.</li>
</ul>

<h2>Digital Techniques</h2>
<ul>
  <li>Concealing messages within the <strong>lowest bits</strong> of noisy images or sound files.</li>
  <li>Modifying the echo of a sound file (<strong>Echo Steganography</strong>).</li>
  <li>Including data in ignored sections of a file (e.g., after the logical end of the carrier file).</li>
</ul>

<h2>Steganography vs. Cryptography</h2>
<table class="styled-table">
  <thead>
    <tr><th>Steganography</th><th>Cryptography</th></tr>
  </thead>
  <tbody>
    <tr><td>Unknown message passing</td><td>Known message passing</td></tr>
    <tr><td>Prevents discovery of communication existence</td><td>Prevents unauthorized content discovery</td></tr>
    <tr><td>Little known technology</td><td>Common technology</td></tr>
    <tr><td>Once detected, message is known</td><td>Strong algorithms resist attacks</td></tr>
    <tr><td>Does not alter message structure</td><td>Alters message structure</td></tr>
  </tbody>
</table>
<div class="callout callout-info"><strong>Tip:</strong> Steganography hides the existence of communication; Cryptography hides the content. They can be combined for maximum security.</div>

<h2>Capabilities Comparison</h2>
<table class="styled-table">
  <thead>
    <tr><th>Technique</th><th>Confidentiality</th><th>Integrity</th><th>Availability</th></tr>
  </thead>
  <tbody>
    <tr><td>Encryption</td><td>Yes</td><td>No</td><td>Yes</td></tr>
    <tr><td>Digital Signature</td><td>No</td><td>Yes</td><td>No</td></tr>
    <tr><td>Steganography</td><td>Yes/No</td><td>Yes/No</td><td>Yes</td></tr>
  </tbody>
</table>

<h2>Basic Steganography Model & Terms</h2>
<ul>
  <li><strong>Carrier / Cover File:</strong> The original file in which hidden information is stored.</li>
  <li><strong>Stego-Medium:</strong> The medium in which information is hidden.</li>
  <li><strong>Embedded / Payload:</strong> The information to be hidden or concealed.</li>
  <li><strong>Steganalysis:</strong> The process of detecting hidden information inside a file.</li>
</ul>

<h2>Types of Stegosystems</h2>
<ul>
  <li><strong>Pure stegosystems:</strong> No key is used.</li>
  <li><strong>Secret-key stegosystems:</strong> A secret key is used.</li>
  <li><strong>Public-key stegosystems:</strong> A public key is used.</li>
</ul>

<h2>Image Steganography & LSB Method</h2>
<p>Image steganography exploits limitations of the <strong>human visual system</strong>. The most common method is <strong>LSB (Least Significant Bit)</strong>:</p>
<ul>
  <li>The 8th bit (least significant) of image bytes is changed to a bit of the secret.</li>
  <li>In a <strong>24-bit image</strong>, 3 bits can be stored per pixel (1 bit each in R, G, B channels).</li>
  <li>An <strong>800 × 600</strong> pixel image can store: 800 × 600 × 3 = <strong>1,440,000 bits</strong> = <strong>180,000 bytes</strong> of hidden data.</li>
  <li>LSB typically uses <strong>BMP images</strong> (lossless compression) to avoid data loss.</li>
</ul>
<p><strong>Example:</strong> Embedding the number 200 (binary: 11001000) into 3 pixels:</p>
<p>Original: (00101101 00011100 11011100) (10100110 11000100 00001100) (11010010 10101101 01100011)</p>
<p>After embedding: (0010110<strong>1</strong> 0001110<strong>1</strong> 1101110<strong>0</strong>) (1010011<strong>0</strong> 1100010<strong>1</strong> 0000110<strong>0</strong>) (1101001<strong>0</strong> 1010110<strong>0</strong> 01100011)</p>
<div class="callout callout-warning"><strong>Exam Alert:</strong> Know the LSB calculation: 24-bit image → 3 bits per pixel. Capacity = width × height × 3 bits.</div>

<h2>Steganography Tools</h2>
<p>Common tools include: Anubis, BMP Secrets, DarkCryptTC, OpenPuff, OpenStego, StegFS, and StegoShare.</p>`,

        bodyAr: `<h2>ما هو إخفاء المعلومات (الستيغانوغرافي)؟</h2>
<p>الستيغانوغرافي يعني <strong>إخفاء جزء من البيانات داخل جزء آخر</strong>. بخلاف التشفير الذي يجعل البيانات غير قابلة للقراءة، الستيغانوغرافي يُخفي <strong>وجود</strong> الاتصال نفسه.</p>
<p><strong>مثال:</strong> "Since Everyone Can Read, Encoding Text In Neutral Sentences Is Doubtfully Effective" — أخذ الحرف الأول من كل كلمة يكشف: <strong>SECRET INSIDE</strong>.</p>

<h2>تاريخ إخفاء المعلومات</h2>
<ul>
  <li><strong>الهيروغليفية المصرية القديمة</strong> احتوت على رسائل مخفية.</li>
  <li><strong>هيرودوتس (440 ق.م):</strong> ديماراتوس أرسل تحذيرًا بكتابته على الخلفية الخشبية للوح شمعي قبل وضع الشمع.</li>
  <li><strong>الصينيون القدماء:</strong> كتبوا رسائل على حرير ناعم، لفّوها ككرة صغيرة، غطّوها بالشمع، ثم ابتلعها الرسول.</li>
  <li><strong>الحرب العالمية الثانية:</strong> الأحبار السرية غير المرئية كانت أدوات ستيغانوغرافية مهمة.</li>
</ul>

<h2>التقنيات الفيزيائية</h2>
<ul>
  <li>رسائل مخفية داخل ألواح الشمع.</li>
  <li>رسائل مخفية على جسم الرسول.</li>
  <li>رسائل بأحبار سرية على الورق.</li>
  <li>رسائل بشفرة مورس على خيوط الحياكة.</li>
  <li>رسائل على المغلفات تحت الطوابع البريدية.</li>
</ul>

<h2>التقنيات الرقمية</h2>
<ul>
  <li>إخفاء الرسائل في <strong>البتات الأقل أهمية</strong> للصور أو ملفات الصوت.</li>
  <li>تعديل صدى ملف صوتي (<strong>ستيغانوغرافي الصدى</strong>).</li>
  <li>تضمين البيانات في أقسام مُهملة من الملف.</li>
</ul>

<h2>الستيغانوغرافي مقابل التشفير</h2>
<table class="styled-table">
  <thead>
    <tr><th>الستيغانوغرافي</th><th>التشفير</th></tr>
  </thead>
  <tbody>
    <tr><td>تمرير رسائل غير معروف</td><td>تمرير رسائل معروف</td></tr>
    <tr><td>يمنع اكتشاف وجود الاتصال</td><td>يمنع اكتشاف المحتوى</td></tr>
    <tr><td>تقنية قليلة الانتشار</td><td>تقنية شائعة</td></tr>
    <tr><td>عند الاكتشاف، الرسالة تُعرف</td><td>الخوارزميات القوية تقاوم الهجمات</td></tr>
    <tr><td>لا يغيّر بنية الرسالة</td><td>يغيّر بنية الرسالة</td></tr>
  </tbody>
</table>
<div class="callout callout-info"><strong>نصيحة:</strong> الستيغانوغرافي يُخفي وجود الاتصال؛ التشفير يُخفي المحتوى. يمكن دمجهما لأقصى أمان.</div>

<h2>مقارنة القدرات</h2>
<table class="styled-table">
  <thead>
    <tr><th>التقنية</th><th>السرية</th><th>النزاهة</th><th>التوافر</th></tr>
  </thead>
  <tbody>
    <tr><td>التشفير</td><td>نعم</td><td>لا</td><td>نعم</td></tr>
    <tr><td>التوقيع الرقمي</td><td>لا</td><td>نعم</td><td>لا</td></tr>
    <tr><td>الستيغانوغرافي</td><td>نعم/لا</td><td>نعم/لا</td><td>نعم</td></tr>
  </tbody>
</table>

<h2>نموذج ومصطلحات الستيغانوغرافي</h2>
<ul>
  <li><strong>ملف الغلاف (Carrier/Cover):</strong> الملف الأصلي الذي تُخزن فيه المعلومات المخفية.</li>
  <li><strong>الوسيط (Stego-Medium):</strong> الوسط الذي تُخفى فيه المعلومات.</li>
  <li><strong>الحمولة (Payload):</strong> المعلومات المراد إخفاؤها.</li>
  <li><strong>تحليل الإخفاء (Steganalysis):</strong> عملية اكتشاف المعلومات المخفية داخل ملف.</li>
</ul>

<h2>أنواع أنظمة الإخفاء</h2>
<ul>
  <li><strong>أنظمة نقية:</strong> لا يُستخدم مفتاح.</li>
  <li><strong>أنظمة المفتاح السري:</strong> يُستخدم مفتاح سري.</li>
  <li><strong>أنظمة المفتاح العام:</strong> يُستخدم مفتاح عام.</li>
</ul>

<h2>إخفاء في الصور وطريقة LSB</h2>
<p>ستيغانوغرافي الصور يستغل قصور <strong>النظام البصري البشري</strong>. أشهر طريقة هي <strong>LSB (البت الأقل أهمية)</strong>:</p>
<ul>
  <li>البت الثامن (الأقل أهمية) في بايتات الصورة يُغيَّر إلى بت من السر.</li>
  <li>في صورة <strong>24 بت</strong>، يمكن تخزين 3 بتات لكل بكسل (بت واحد في كل قناة R, G, B).</li>
  <li>صورة <strong>800 × 600</strong> بكسل تخزن: 800 × 600 × 3 = <strong>1,440,000 بت</strong> = <strong>180,000 بايت</strong>.</li>
  <li>LSB يستخدم عادة صور <strong>BMP</strong> (ضغط بدون فقدان) لتجنب فقدان البيانات.</li>
</ul>
<div class="callout callout-warning"><strong>تنبيه امتحاني:</strong> اعرف حساب LSB: صورة 24 بت → 3 بتات لكل بكسل. السعة = العرض × الارتفاع × 3 بتات.</div>

<h2>أدوات الستيغانوغرافي</h2>
<p>الأدوات الشائعة تشمل: Anubis، BMP Secrets، DarkCryptTC، OpenPuff، OpenStego، StegFS، وStegoShare.</p>`,
      },
    },
  ],

  summary: {
    points: [
      "Steganography hides the existence of communication, while cryptography hides the content.",
      "LSB (Least Significant Bit) is the most common image steganography method, modifying the 8th bit of each byte.",
      "In 24-bit images, LSB stores 3 bits per pixel; an 800×600 image holds 180,000 bytes of hidden data.",
      "Key terms: Cover File (carrier), Payload (hidden data), Stego-Medium, and Steganalysis (detection).",
      "Three stegosystem types exist: Pure (no key), Secret-key, and Public-key."
    ],
    pointsAr: [
      "الستيغانوغرافي يُخفي وجود الاتصال، بينما التشفير يُخفي المحتوى.",
      "LSB (البت الأقل أهمية) هو أشهر طريقة لإخفاء المعلومات في الصور، يعدّل البت الثامن من كل بايت.",
      "في صور 24 بت، LSB يخزن 3 بتات لكل بكسل؛ صورة 800×600 تحمل 180,000 بايت من البيانات المخفية.",
      "المصطلحات: ملف الغلاف (الحامل)، الحمولة (البيانات المخفية)، الوسيط، وتحليل الإخفاء (الاكتشاف).",
      "ثلاثة أنواع من أنظمة الإخفاء: نقية (بدون مفتاح)، مفتاح سري، ومفتاح عام."
    ],
  },

  mcq: [
    {
      id: 'crypto-l8-q1',
      question: "Steganography primarily aims to:",
      questionAr: "الستيغانوغرافي يهدف بشكل أساسي إلى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Make data unreadable', isCorrect: false },
        { id: 'b', text: 'Hide the existence of communication', isCorrect: true },
        { id: 'c', text: 'Compress data', isCorrect: false },
        { id: 'd', text: 'Authenticate the sender', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q2',
      question: "In the LSB method, how many bits can be stored per pixel in a 24-bit image?",
      questionAr: "في طريقة LSB، كم بت يمكن تخزينه لكل بكسل في صورة 24 بت؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1 bit', isCorrect: false },
        { id: 'b', text: '2 bits', isCorrect: false },
        { id: 'c', text: '3 bits', isCorrect: true },
        { id: 'd', text: '8 bits', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q3',
      question: "An 800×600 pixel, 24-bit image using LSB can store how many bytes of hidden data?",
      questionAr: "صورة 800×600 بكسل بعمق 24 بت باستخدام LSB يمكنها تخزين كم بايت من البيانات المخفية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '60,000 bytes', isCorrect: false },
        { id: 'b', text: '180,000 bytes', isCorrect: true },
        { id: 'c', text: '480,000 bytes', isCorrect: false },
        { id: 'd', text: '1,440,000 bytes', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q4',
      question: "The process of detecting hidden information inside a file is called:",
      questionAr: "عملية اكتشاف المعلومات المخفية داخل ملف تُسمى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Cryptanalysis', isCorrect: false },
        { id: 'b', text: 'Steganalysis', isCorrect: true },
        { id: 'c', text: 'Steganography', isCorrect: false },
        { id: 'd', text: 'Encryption', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q5',
      question: "Which image format is typically used with the LSB method?",
      questionAr: "أي تنسيق صور يُستخدم عادة مع طريقة LSB؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'JPEG', isCorrect: false },
        { id: 'b', text: 'BMP', isCorrect: true },
        { id: 'c', text: 'GIF', isCorrect: false },
        { id: 'd', text: 'SVG', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q6',
      question: "The original file that carries hidden data is called the:",
      questionAr: "الملف الأصلي الذي يحمل البيانات المخفية يُسمى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Payload', isCorrect: false },
        { id: 'b', text: 'Stego-Medium', isCorrect: false },
        { id: 'c', text: 'Cover File / Carrier', isCorrect: true },
        { id: 'd', text: 'Cipher File', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q7',
      question: "Which of the following is TRUE about steganography?",
      questionAr: "أيٌّ مما يلي صحيح عن الستيغانوغرافي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It alters the structure of the secret message', isCorrect: false },
        { id: 'b', text: 'It does not alter the structure of the secret message', isCorrect: true },
        { id: 'c', text: 'It uses well-known public algorithms', isCorrect: false },
        { id: 'd', text: 'It is resistant to attacks even when detected', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q8',
      question: "Combining cryptography and steganography provides:",
      questionAr: "الجمع بين التشفير والستيغانوغرافي يوفر:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Only confidentiality', isCorrect: false },
        { id: 'b', text: 'Only integrity', isCorrect: false },
        { id: 'c', text: 'Maximum security — both hidden existence and encrypted content', isCorrect: true },
        { id: 'd', text: 'No additional benefit', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q9',
      question: "A pure stegosystem uses:",
      questionAr: "نظام الإخفاء النقي يستخدم:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A secret key', isCorrect: false },
        { id: 'b', text: 'A public key', isCorrect: false },
        { id: 'c', text: 'No key', isCorrect: true },
        { id: 'd', text: 'Both secret and public keys', isCorrect: false },
      ],
    },
    {
      id: 'crypto-l8-q10',
      question: "Which digital steganography technique modifies the echo of a sound file?",
      questionAr: "أي تقنية ستيغانوغرافي رقمية تعدّل صدى ملف صوتي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'LSB Steganography', isCorrect: false },
        { id: 'b', text: 'Echo Steganography', isCorrect: true },
        { id: 'c', text: 'Transform Domain', isCorrect: false },
        { id: 'd', text: 'Frequency Steganography', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'crypto-l8-w1',
      question: "Explain how the LSB (Least Significant Bit) steganography method works with a 24-bit image. Include a capacity calculation for a 1024×768 image.",
      questionAr: "اشرح كيف تعمل طريقة LSB للستيغانوغرافي مع صورة 24 بت. أضف حساب السعة لصورة 1024×768.",
      modelAnswer: "The LSB method replaces the least significant bit (8th bit) of each color byte in the image with a bit of the secret message. In a 24-bit image, each pixel has 3 bytes (R, G, B), so 3 secret bits can be stored per pixel. For a 1024×768 image: Capacity = 1024 × 768 × 3 = 2,359,296 bits = 294,912 bytes ≈ 288 KB. BMP format is preferred because it uses lossless compression, preserving the hidden bits exactly.",
      modelAnswerAr: "طريقة LSB تستبدل البت الأقل أهمية (البت الثامن) من كل بايت لون في الصورة ببت من الرسالة السرية. في صورة 24 بت، كل بكسل له 3 بايتات (R, G, B)، لذا يمكن تخزين 3 بتات سرية لكل بكسل. لصورة 1024×768: السعة = 1024 × 768 × 3 = 2,359,296 بت = 294,912 بايت ≈ 288 كيلوبايت. يُفضل تنسيق BMP لأنه يستخدم ضغطًا بدون فقدان يحافظ على البتات المخفية بدقة.",
    },
    {
      id: 'crypto-l8-w2',
      question: "Compare steganography and cryptography in terms of their goals, detection, and message structure.",
      questionAr: "قارن بين الستيغانوغرافي والتشفير من حيث الأهداف والاكتشاف وبنية الرسالة.",
      modelAnswer: "Goals: Steganography prevents discovery of communication existence; cryptography prevents unauthorized content access. Detection: Steganography — once detected, the message is exposed; cryptography — even if detected, strong algorithms resist decryption. Message Structure: Steganography does not alter the secret message structure; cryptography alters/transforms the message into unreadable ciphertext. They can be combined: encrypt the message first, then hide it using steganography for maximum security.",
      modelAnswerAr: "الأهداف: الستيغانوغرافي يمنع اكتشاف وجود الاتصال؛ التشفير يمنع الوصول غير المصرح للمحتوى. الاكتشاف: الستيغانوغرافي — عند الاكتشاف، تُكشف الرسالة؛ التشفير — حتى عند الاكتشاف، الخوارزميات القوية تقاوم فك التشفير. بنية الرسالة: الستيغانوغرافي لا يغيّر بنية الرسالة السرية؛ التشفير يحوّل الرسالة لنص مشفر غير قابل للقراءة. يمكن دمجهما لأقصى أمان.",
    },
    {
      id: 'crypto-l8-w3',
      question: "Define the following steganography terms: Cover File, Payload, Stego-Medium, and Steganalysis.",
      questionAr: "عرّف المصطلحات التالية في الستيغانوغرافي: ملف الغلاف، الحمولة، الوسيط، وتحليل الإخفاء.",
      modelAnswer: "Cover File (Carrier): The original, innocent-looking file (image, audio, etc.) in which hidden information will be stored. Payload (Embedded): The secret information to be hidden or concealed within the cover file. Stego-Medium: The resulting medium after the payload has been embedded into the cover file. Steganalysis: The process of detecting and potentially extracting hidden information from a file suspected of containing steganographic content.",
      modelAnswerAr: "ملف الغلاف (الحامل): الملف الأصلي ذو المظهر البريء (صورة، صوت، إلخ) الذي ستُخزن فيه المعلومات المخفية. الحمولة (المضمنة): المعلومات السرية المراد إخفاؤها داخل ملف الغلاف. الوسيط: الوسط الناتج بعد تضمين الحمولة في ملف الغلاف. تحليل الإخفاء: عملية اكتشاف واستخراج المعلومات المخفية من ملف يُشتبه باحتوائه على محتوى ستيغانوغرافي.",
    },
  ],
};
