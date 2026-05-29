export const LECTURE = {
  subjectId: 'computer-networks',
  number: 4,
  title: 'Transmission Media',
  titleAr: 'وسائط النقل',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Introduction to Transmission Media</h2>
<p>Transmission media are the physical paths through which data is transferred from one device to another in a network. They are located at the <strong>Physical Layer</strong> (Layer 1) of the OSI model.</p>

<h2>Types of Transmission Media</h2>
<ol>
  <li><strong>Guided Media (Wired):</strong> Physical cables are used to direct signals.
    <ul>
      <li><strong>Twisted Pair Cable:</strong> Two insulated copper wires twisted together to reduce electromagnetic interference (EMI). Used in telephone lines and Ethernet (UTP/STP).</li>
      <li><strong>Coaxial Cable:</strong> Consists of a central copper conductor, insulation, a braided metal shield, and an outer jacket. Used for Cable TV and older Ethernet.</li>
      <li><strong>Fiber Optic Cable:</strong> Uses pulses of light to transmit data through thin glass or plastic fibers. Offers the highest bandwidth and is immune to EMI.</li>
    </ul>
  </li>
  <li><strong>Unguided Media (Wireless):</strong> Signals travel through free space (air or vacuum).
    <ul>
      <li><strong>Radio Waves:</strong> Omnidirectional, used for Wi-Fi and Bluetooth. Can penetrate walls.</li>
      <li><strong>Microwaves:</strong> Unidirectional, line-of-sight transmission. Used for satellite and terrestrial links.</li>
      <li><strong>Infrared:</strong> Short-range, cannot penetrate walls (e.g., TV remote).</li>
    </ul>
  </li>
</ol>

<h2>Comparison of Wired Media</h2>
<table class="styled-table">
  <thead>
    <tr><th>Media</th><th>Speed</th><th>Distance</th><th>EMI Immunity</th></tr>
  </thead>
  <tbody>
    <tr><td>Twisted Pair</td><td>Moderate</td><td>Short (100m)</td><td>Low</td></tr>
    <tr><td>Coaxial</td><td>Moderate</td><td>Moderate</td><td>Moderate</td></tr>
    <tr><td>Fiber Optic</td><td>Very High</td><td>Very Long</td><td>High (Immune)</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>مقدمة في وسائط النقل</h2>
<p>وسائط النقل هي المسارات المادية التي يتم من خلالها نقل البيانات من جهاز إلى آخر في الشبكة. تقع في <strong>الطبقة المادية</strong> (الطبقة 1) من نموذج OSI.</p>

<h2>أنواع وسائط النقل</h2>
<ol>
  <li><strong>الوسائط الموجهة (السلكية):</strong> تُستخدم الكابلات المادية لتوجيه الإشارات.
    <ul>
      <li><strong>كابل الزوج الملتوي (Twisted Pair):</strong> سلكان نحاسيان معزولان ملتويان معًا لتقليل التداخل الكهرومغناطيسي (EMI). يُستخدم في خطوط الهاتف وإيثرنت (UTP/STP).</li>
      <li><strong>الكابل المحوري (Coaxial):</strong> يتكون من موصل نحاسي مركزي، وعزل، ودرع معدني مضفر، وغطاء خارجي. يُستخدم في تلفزيون الكابل وإيثرنت القديم.</li>
      <li><strong>كابل الألياف الضوئية (Fiber Optic):</strong> يستخدم نبضات الضوء لنقل البيانات عبر ألياف زجاجية أو بلاستيكية رقيقة. يوفر أعلى عرض نطاق ترددي وحصانة ضد EMI.</li>
    </ul>
  </li>
  <li><strong>الوسائط غير الموجهة (اللاسلكية):</strong> تنتقل الإشارات عبر الفضاء الحر (الهواء أو الفراغ).
    <ul>
      <li><strong>موجات الراديو:</strong> متعددة الاتجاهات، تُستخدم في الواي فاي والبلوتوث. يمكنها اختراق الجدران.</li>
      <li><strong>الموجات الدقيقة (Microwaves):</strong> أحادية الاتجاه، تعتمد على خط النظر. تُستخدم في روابط الأقمار الصناعية والأرضية.</li>
      <li><strong>الأشعة تحت الحمراء:</strong> قصيرة المدى، لا يمكنها اختراق الجدران (مثل جهاز التحكم عن بعد في التلفزيون).</li>
    </ul>
  </li>
</ol>

<h2>مقارنة بين الوسائط السلكية</h2>
<table class="styled-table">
  <thead>
    <tr><th>الوسيط</th><th>السرعة</th><th>المسافة</th><th>الحصانة ضد EMI</th></tr>
  </thead>
  <tbody>
    <tr><td>الزوج الملتوي</td><td>متوسطة</td><td>قصيرة (100م)</td><td>منخفضة</td></tr>
    <tr><td>المحوري</td><td>متوسطة</td><td>متوسطة</td><td>متوسطة</td></tr>
    <tr><td>الألياف الضوئية</td><td>عالية جدًا</td><td>طويلة جدًا</td><td>عالية (محصنة)</td></tr>
  </tbody>
</table>`
      }
    }
  ],

  summary: {
    points: [
      "Transmission media are classified into Guided (Wired) and Unguided (Wireless).",
      "Fiber optic cables offer the highest bandwidth and are immune to EMI.",
      "Twisted pair cables are twisted to reduce electromagnetic interference.",
      "Wireless signals include Radio waves, Microwaves, and Infrared.",
      "Guided media are found at the Physical Layer (Layer 1)."
    ],
    pointsAr: [
      "تُصنف وسائط النقل إلى موجهة (سلكية) وغير موجهة (لاسلكية).",
      "توفر كابلات الألياف الضوئية أعلى عرض نطاق ترددي وهي محصنة ضد التداخل الكهرومغناطيسي.",
      "يتم التواء كابلات الزوج الملتوي لتقليل التداخل الكهرومغناطيسي.",
      "تشمل الإشارات اللاسلكية موجات الراديو والموجات الدقيقة والأشعة تحت الحمراء.",
      "توجد الوسائط الموجهة في الطبقة المادية (الطبقة 1)."
    ]
  },

  mcq: [
    {
      id: 'cn-l4-q1',
      question: "Which of the following is an example of Guided Transmission Media?",
      questionAr: "أي مما يلي يعتبر مثالاً على وسائط النقل الموجهة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Radio Waves', isCorrect: false },
        { id: 'b', text: 'Fiber Optic Cable', isCorrect: true },
        { id: 'c', text: 'Microwaves', isCorrect: false },
        { id: 'd', text: 'Infrared', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q2',
      question: "Why are copper wires twisted in a Twisted Pair cable?",
      questionAr: "لماذا يتم التواء الأسلاك النحاسية في كابل الزوج الملتوي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To make the cable stronger', isCorrect: false },
        { id: 'b', text: 'To reduce electromagnetic interference (EMI)', isCorrect: true },
        { id: 'c', text: 'To increase the transmission speed', isCorrect: false },
        { id: 'd', text: 'To allow light pulses to pass through', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q3',
      question: "[MID] Which transmission medium is immune to electromagnetic interference (EMI)?",
      questionAr: "[MID] أي وسيط نقل محصن ضد التداخل الكهرومغناطيسي (EMI)؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Coaxial Cable', isCorrect: false },
        { id: 'b', text: 'Twisted Pair', isCorrect: false },
        { id: 'c', text: 'Fiber Optic Cable', isCorrect: true },
        { id: 'd', text: 'Radio Waves', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q4',
      question: "What is the primary characteristic of Fiber Optic transmission?",
      questionAr: "ما هي السمة الأساسية لنقل الألياف الضوئية؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'It uses electrical signals', isCorrect: false },
        { id: 'b', text: 'It uses pulses of light', isCorrect: true },
        { id: 'c', text: 'It uses sound waves', isCorrect: false },
        { id: 'd', text: 'It is a wireless medium', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q5',
      question: "Which wireless medium requires a strict line-of-sight for transmission?",
      questionAr: "أي وسيط لاسلكي يتطلب خط نظر (line-of-sight) صارمًا للإرسال؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Radio Waves', isCorrect: false },
        { id: 'b', text: 'Microwaves', isCorrect: true },
        { id: 'c', text: 'Bluetooth', isCorrect: false },
        { id: 'd', text: 'Wi-Fi', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q6',
      question: "Which cable type is commonly used for Cable TV connections?",
      questionAr: "أي نوع من الكابلات يُستخدم بشكل شائع لتوصيلات تلفزيون الكابل؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'UTP', isCorrect: false },
        { id: 'b', text: 'Coaxial Cable', isCorrect: true },
        { id: 'c', text: 'Fiber Optic', isCorrect: false },
        { id: 'd', text: 'STP', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q7',
      question: "[MID] In which layer of the OSI model does transmission media operate?",
      questionAr: "[MID] في أي طبقة من نموذج OSI تعمل وسائط النقل؟",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Network Layer', isCorrect: false },
        { id: 'b', text: 'Link Layer', isCorrect: false },
        { id: 'c', text: 'Physical Layer', isCorrect: true },
        { id: 'd', text: 'Application Layer', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q8',
      question: "Which of the following unguided media cannot penetrate walls?",
      questionAr: "أي من الوسائط غير الموجهة التالية لا يمكنها اختراق الجدران؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Radio Waves', isCorrect: false },
        { id: 'b', text: 'Infrared', isCorrect: true },
        { id: 'c', text: 'Microwaves', isCorrect: false },
        { id: 'd', text: 'Satellite signals', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q9',
      question: "What does UTP stand for?",
      questionAr: "إلى ماذا يرمز اختصار UTP؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Unified Twisted Pair', isCorrect: false },
        { id: 'b', text: 'Unshielded Twisted Pair', isCorrect: true },
        { id: 'c', text: 'Universal Transmission Protocol', isCorrect: false },
        { id: 'd', text: 'Underground Twisted Pair', isCorrect: false }
      ]
    },
    {
      id: 'cn-l4-q10',
      question: "Which media is the most expensive to install but supports the longest distances?",
      questionAr: "أي وسيلة هي الأكثر تكلفة في التركيب ولكنها تدعم أطول المسافات؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Twisted Pair', isCorrect: false },
        { id: 'b', text: 'Coaxial Cable', isCorrect: false },
        { id: 'c', text: 'Fiber Optic Cable', isCorrect: true },
        { id: 'd', text: 'Wi-Fi', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'cn-l4-w1',
      question: "Differentiate between Guided and Unguided transmission media.",
      questionAr: "فرق بين وسائط النقل الموجهة وغير الموجهة.",
      modelAnswer: "Guided media use physical structures like cables (copper or fiber) to direct signals from one point to another. Unguided media transmit electromagnetic signals without a physical conductor, using air or vacuum as the medium (e.g., wireless radio or microwaves).",
      modelAnswerAr: "تستخدم الوسائط الموجهة هياكل مادية مثل الكابلات (النحاسية أو الألياف) لتوجيه الإشارات من نقطة إلى أخرى. بينما تنقل الوسائط غير الموجهة إشارات كهرومغناطيسية بدون موصل مادي، باستخدام الهواء أو الفراغ كوسط (مثل الراديو اللاسلكي أو الموجات الدقيقة)."
    },
    {
      id: 'cn-l4-w2',
      question: "What are the advantages of Fiber Optic cable over Twisted Pair and Coaxial cables?",
      questionAr: "ما هي مزايا كابل الألياف الضوئية على كابلات الزوج الملتوي والمحوري؟",
      modelAnswer: "Fiber Optic cables provide much higher bandwidth, support much longer transmission distances without needing repeaters, are completely immune to electromagnetic interference (EMI), and are more secure because they do not radiate signals.",
      modelAnswerAr: "توفر كابلات الألياف الضوئية عرض نطاق ترددي أعلى بكثير، وتدعم مسافات نقل أطول بكثير دون الحاجة إلى مكررات إشارة، وهي محصنة تمامًا ضد التداخل الكهرومغناطيسي (EMI)، وأكثر أمانًا لأنها لا تشع إشارات."
    },
    {
      id: 'cn-l4-w3',
      question: "Describe the three types of wireless (unguided) signals.",
      questionAr: "صف الأنواع الثلاثة للإشارات اللاسلكية (غير الموجهة).",
      modelAnswer: "1. Radio Waves: Omnidirectional, low frequency, can penetrate walls. 2. Microwaves: Unidirectional, high frequency, require line-of-sight. 3. Infrared: Very high frequency, short distance, cannot penetrate walls.",
      modelAnswerAr: "1. موجات الراديو: متعددة الاتجاهات، تردد منخفض، يمكنها اختراق الجدران. 2. الموجات الدقيقة: أحادية الاتجاه، تردد عالٍ، تتطلب خط نظر. 3. الأشعة تحت الحمراء: تردد عالٍ جدًا، مسافة قصيرة، لا يمكنها اختراق الجدران."
    }
  ]
};
