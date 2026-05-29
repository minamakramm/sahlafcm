export const LECTURE = {
  subjectId: 'data-mining',
  number: 5,
  title: 'Fuzzy Clustering & Fuzzy Logic',
  titleAr: 'التجميع الضبابي والمنطق الضبابي',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Types of Clustering Methods</h2>
<ul>
<li><strong>Partitioning Methods:</strong> K-Means and K-Medoids.</li>
<li><strong>Hierarchical Clustering:</strong> Creating a tree-like dendrogram.</li>
<li><strong>Fuzzy Clustering:</strong> Allowing for overlapping clusters.</li>
<li><strong>Density-based Clustering:</strong> Clusters based on region density.</li>
<li><strong>Model-based Clustering:</strong> Building a mathematical model for each cluster.</li>
</ul>

<h2>🔹 Hard vs. Soft (Fuzzy) Clustering</h2>
<ul>
<li><strong>Hard Clustering:</strong> Each data element belongs to <strong>exactly one</strong> cluster (Boolean 1 or 0). No overlap.</li>
<li><strong>Soft (Fuzzy) Clustering:</strong> Elements can belong to <strong>more than one cluster</strong> simultaneously. Associated with each element is a set of membership levels (degrees of truth).</li>
</ul>

<h2>🔹 What is Fuzzy Logic?</h2>
<p>Introduced in 1965 by <strong>Dr. Lotfi Zadeh</strong> (UC Berkeley), Fuzzy Logic models the uncertainty of natural language. It is based on "degrees of truth" $[0, 1]$ rather than Booleans.</p>
<ul>
<li>Simulates human reasoning with "gray areas."</li>
<li>Decreases the need for precise mathematical models of complex systems.</li>
<li><strong>Fuzzy Set:</strong> Defined mathematically by assigning each individual a grade of membership value (e.g., sunny = 0.8 membership).</li>
</ul>

<p>An MF is a curve that defines how each point in the input space is mapped to a membership value between 0 and 1. The choice of shape is context-dependent:</p>
<ul>
<li><strong>Common Shapes:</strong> Triangular and Trapezoidal.</li>
<li><strong>Advanced Shape:</strong> Gaussian.</li>
</ul>
<p><strong>Example:</strong> Measuring 'Speed'. A crisp speed of 30mph might be mapped to 0.4 "Slow" and 0.6 "Medium" simultaneously.</p>

<h2>🔹 Advantages & Applications</h2>
<p>Fuzzy Logic is not just theoretical; it's a staple in high-performance engineering.</p>
<ul>
<li><strong>Advantages:</strong> Shortens development time, increases maintainability, uses less expensive hardware, and provides smoother control transitions.</li>
<li><strong>Applications:</strong> Space shuttle vehicle orbiting, car braking systems (ABS), shower water temperature regulation, cameras (autofocus), and smart washing machines.</li>
</ul>

<h2>🔹 Fuzzy Inference System (FIS)</h2>
<p><strong>FIS = Expert System + Fuzzy Logic</strong>. It maps an input space to an output space using fuzzy membership functions and fuzzy production rules ($p \rightarrow q$).</p>
<ul>
<li><strong>Antecedent:</strong> The "IF" part ($p$).</li>
<li><strong>Consequent:</strong> The "THEN" part ($q$).</li>
<li><strong>Example Rule:</strong> <code>IF soil is wet AND temperature is hot THEN watering duration is short.</code></li>
</ul>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Official exam questions and fuzzy math problems have been integrated! Look for the <strong>[Midterm]</strong> tag.</span></div>`,
        bodyAr: `<h2>🔹 التجميع الصلب مقابل الضبابي</h2>
<ul>
<li><strong>التجميع الصلب (Hard):</strong> ينتمي كل عنصر إلى مجموعة واحدة بالضبط (1 أو 0).</li>
<li><strong>التجميع الضبابي (Fuzzy):</strong> يمكن أن تنتمي العناصر إلى أكثر من مجموعة في نفس الوقت مع مستويات عضوية (درجات الحقيقة).</li>
</ul>

<h2>🔹 ما هو المنطق الضبابي؟</h2>
<p>قدمه <strong>د. لطفي زاده</strong> في عام 1965، وهو ينمذج عدم اليقين في اللغة الطبيعية. يعتمد على "درجات الحقيقة" بين [0، 1].</p>

<p>هي منحنى يحدد كيفية تعيين كل نقطة في مساحة المدخلات لقيمة عضوية بين 0 و 1. يتم اختيار الشكل بناءً على السياق:</p>
<ul>
<li><strong>الأشكال الشائعة:</strong> المثلث (Triangular) وشبه المنحرف (Trapezoidal).</li>
<li><strong>الأشكال المتقدمة:</strong> غاوسي (Gaussian).</li>
</ul>

<h2>🔹 المزايا والتطبيقات</h2>
<ul>
<li><strong>المزايا:</strong> اختصار وقت التطوير، تحسين قابلية الصيانة، واستخدام أجهزة أقل تكلفة.</li>
<li><strong>التطبيقات:</strong> تنظيم درجة حرارة الماء، أنظمة كبح السيارات، وكاميرات التركيز التلقائي.</li>
</ul>

<h2>🔹 نظام الاستدلال الضبابي (FIS)</h2>
<p>يجمع بين الأنظمة الخبيرة والمنطق الضبابي لربط المدخلات بالمخرجات باستخدام قواعد الإنتاج الضبابية.</p>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تم دمج أسئلة الامتحانات الرسمية ومسائل الرياضيات الضبابية! ابحث عن علامة <strong>[ميدتيرم]</strong>.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Hard clustering = exclusive. Fuzzy clustering = overlapping/degrees.",
      "Fuzzy logic replaces True/False (1/0) with Degrees of Truth (0.0 to 1.0).",
      "Membership functions (Triangles/Trapezoids) map crisp inputs to fuzzy values.",
      "Fuzzy logic is heavily used in modern control systems and consumer appliances."
    ],
    pointsAr: [
      "التجميع الصلب = حصري. التجميع الضبابي = متداخل/درجات.",
      "المنطق الضبابي يستبدل صح/خطأ (1/0) بدرجات الحقيقة (0.0 إلى 1.0).",
      "وظائف العضوية (المثلثات/شبه المنحرفات) تربط المدخلات الصريحة بالقيم الضبابية.",
      "يستخدم المنطق الضبابي بكثافة في أنظمة التحكم الحديثة والأجهزة الاستهلاكية."
    ],
  },

  mcq: [
    {
      id: 'dm-l5-q1',
      question: "Which term describes clustering where elements can belong to multiple clusters simultaneously?",
      questionAr: "أي مصطلح يصف التجميع حيث يمكن أن تنتمي العناصر إلى مجموعات متعددة في وقت واحد؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Hard Clustering', isCorrect: false },
        { id: 'b', text: 'Fuzzy (Soft) Clustering', isCorrect: true },
        { id: 'c', text: 'Partitioning Clustering', isCorrect: false },
        { id: 'd', text: 'Hierarchical Clustering', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q2',
      question: "What is the purpose of a Membership Function?",
      questionAr: "ما هو الغرض من وظيفة العضوية (Membership Function)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To map input values to a membership degree between 0 and 1', isCorrect: true },
        { id: 'b', text: 'To delete noisy data', isCorrect: false },
        { id: 'c', text: 'To calculate Euclidean distance', isCorrect: false },
        { id: 'd', text: 'To randomly assign K centroids', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q3',
      question: "Who is the founder of Fuzzy Logic?",
      questionAr: "من هو مؤسس المنطق الضبابي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Alan Turing', isCorrect: false },
        { id: 'b', text: 'Lotfi Zadeh', isCorrect: true },
        { id: 'c', text: 'Isaac Newton', isCorrect: false },
        { id: 'd', text: 'Andrew Ng', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q4',
      question: "In traditional (Crisp) boolean logic, a statement resolves to:",
      questionAr: "في المنطق التقليدي (Crisp)، تنحل العبارة إلى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A degree between 0 and 1', isCorrect: false },
        { id: 'b', text: '-1, 0, or 1', isCorrect: false },
        { id: 'c', text: 'Exclusively 1 (True) or 0 (False)', isCorrect: true },
        { id: 'd', text: 'A probability distribution', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q5',
      question: "Which shape is NOT typically used for a membership function in fuzzy logic?",
      questionAr: "أي شكل لا يُستخدم عادةً لوظيفة العضوية في المنطق الضبابي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Triangular', isCorrect: false },
        { id: 'b', text: 'Trapezoidal', isCorrect: false },
        { id: 'c', text: 'Gaussian', isCorrect: false },
        { id: 'd', text: 'Square (Crisp Edge)', isCorrect: true },
      ],
    },
    {
      id: 'dm-l5-q6',
      question: "[MATH] In a linear triangular membership function spanning 0 to 10 with a peak at 5, what is the membership degree at exactly 5?",
      questionAr: "[حساب] في وظيفة عضوية مثلثية من 0 إلى 10 مع قمة عند 5، ما هي درجة العضوية عند 5 بالضبط؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.0', isCorrect: false },
        { id: 'b', text: '0.5', isCorrect: false },
        { id: 'c', text: '1.0 (Full membership)', isCorrect: true },
        { id: 'd', text: 'None of the above', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q7',
      question: "[MATH] If 180cm is 'Tall' (1.0) and 160cm is 'Not Tall' (0.0), what is the fuzzy membership of 170cm using linear interpolation?",
      questionAr: "[حساب] إذا كان 180 سم 'طويل' (1.0) و 160 سم 'غير طويل' (0.0)، فما هي العضوية الضبابية لـ 170 سم؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.25', isCorrect: false },
        { id: 'b', text: '0.5', isCorrect: true },
        { id: 'c', text: '0.75', isCorrect: false },
        { id: 'd', text: '1.0', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q8',
      question: "[MID] If dirtiness = 0 in a washing machine fuzzy controller, the membership in 'Small' dirtiness is likely:",
      questionAr: "[ميدتيرم] إذا كان مستوى الاتساخ = 0 في غسالة تعمل بالمنطق الضبابي، فإن العضوية في اتساخ 'صغير' هي غالباً:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '0.0', isCorrect: false },
        { id: 'b', text: '0.5', isCorrect: false },
        { id: 'c', text: 'Cannot be determined', isCorrect: false },
        { id: 'd', text: '1.0 (Fully Small)', isCorrect: true },
      ],
    },
    {
      id: 'dm-l5-q9',
      question: "[MID] Fuzzy logic provides NO advantage over crisp logic when:",
      questionAr: "[ميدتيرم] لا يوفر المنطق الضبابي أي ميزة على المنطق التقليدي عندما:",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'The input is ambiguous between categories', isCorrect: false },
        { id: 'b', text: 'The input falls exactly at one category\'s peak with zero overlap', isCorrect: true },
        { id: 'c', text: 'Multiple categories apply simultaneously', isCorrect: false },
        { id: 'd', text: 'The system needs smooth transitions', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q10',
      question: "[MID] A fuzzy membership degree always falls within the range:",
      questionAr: "[ميدتيرم] تقع درجة العضوية الضبابية دائماً ضمن النطاق:",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: '[-1.0, 1.0]', isCorrect: false },
        { id: 'b', text: '[0, 100]', isCorrect: false },
        { id: 'c', text: '[0.0, 1.0]', isCorrect: true },
        { id: 'd', text: 'Any real number', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q11',
      question: "In the fuzzy rule 'IF soil is wet THEN watering is short', the 'soil is wet' part is called:",
      questionAr: "في القاعدة 'إذا كانت التربة مبللة فإن الري قصير'، يسمى جزء 'التربة مبللة':",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Consequent', isCorrect: false },
        { id: 'b', text: 'Antecedent', isCorrect: true },
        { id: 'c', text: 'Membership Function', isCorrect: false },
        { id: 'd', text: 'Defuzzifier', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q12',
      question: "Fuzzy logic was primarily designed to model the uncertainty of:",
      questionAr: "صُمم المنطق الضبابي أساساً لنمذجة عدم اليقين في:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Mathematical integers', isCorrect: false },
        { id: 'b', text: 'Natural language', isCorrect: true },
        { id: 'c', text: 'Cryptographic keys', isCorrect: false },
        { id: 'd', text: 'Relational databases', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q13',
      question: "Which of the following is a real-world application of Fuzzy Logic?",
      questionAr: "أي مما يلي يعد تطبيقاً حقيقياً للمنطق الضبابي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'SQL Query Optimization', isCorrect: false },
        { id: 'b', text: 'Video compression', isCorrect: false },
        { id: 'c', text: 'Washing machine water regulation', isCorrect: true },
        { id: 'd', text: 'Sorting a list of integers', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q14',
      question: "The fuzzy set 'Small' dirtiness in a system might span values from 0 to 50, this means:",
      questionAr: "مجموعة 'اتساخ صغير' قد تغطي القيم من 0 إلى 50، وهذا يعني:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Any value > 50 is impossible', isCorrect: false },
        { id: 'b', text: 'The membership degree is non-zero within this range', isCorrect: true },
        { id: 'c', text: 'The result must always be 10', isCorrect: false },
        { id: 'd', text: 'The system is broken', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q15',
      question: "For a given figure of clothes dirtiness sets (Small, Medium, Large), the set 'Small' includes dirtiness from ___:",
      questionAr: "بالنسبة لمجموعات اتساخ الملابس، تتضمن مجموعة 'صغير' اتساخاً من ___:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0 to 10', isCorrect: false },
        { id: 'b', text: '10 to 20', isCorrect: false },
        { id: 'c', text: '0 to 50', isCorrect: false },
        { id: 'd', text: 'cannot be determined without the specific graph', isCorrect: true },
      ],
    },
    {
      id: 'dm-l5-q16',
      question: "If a speed is 40mph, and its membership in 'Medium' is 0.8 and 'Fast' is 0.2, this demonstrates:",
      questionAr: "إذا كانت السرعة 40 ميل، وكانت عضويتها في 'متوسط' 0.8 وفي 'سريع' 0.2، فهذا يوضح:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Boolean logic', isCorrect: false },
        { id: 'b', text: 'Overlapping fuzzy sets', isCorrect: true },
        { id: 'c', text: 'A calculation error', isCorrect: false },
        { id: 'd', text: 'Data integration', isCorrect: false },
      ],
    },
    {
      id: 'dm-l5-q17',
      question: "If the input to a washing machine crisp logic controller is 10, what could be a possible fuzzy representation?",
      questionAr: "إذا كان المدخل لمنظم غسالة (crisp logic) هو 10، فماذا يمكن أن يكون التمثيل الضبابي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.8 Small', isCorrect: true },
        { id: 'b', text: 'Exclusively 1 (True)', isCorrect: false },
        { id: 'c', text: '10.0 Accuracy', isCorrect: false },
        { id: 'd', text: 'None of the above', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-l5-w1',
      question: "Explain the difference between a Crisp Set and a Fuzzy Set using the concept of a 'Tall Man'.",
      questionAr: "اشرح الفرق بين المجموعة الصريحة (Crisp) والمجموعة الضبابية (Fuzzy) باستخدام مفهوم 'الرجل الطويل'.",
      modelAnswer: "Crisp: Hard boundary (e.g. exactly >180cm is tall (1), else 0). Fuzzy: Gradual membership boundary where someone who is 175cm might be tall with a fuzzy degree of 0.6.",
      modelAnswerAr: "الصريحة: حدود حادة (مثلاً بالضبط أكبر من 180 سم هو طويل (1)، غير ذلك 0). الضبابية: حدود عضوية تدريجية حيث يمكن للشخص الذي يبلغ طوله 175 سم أن يكون طويلاً بدرجة ضبابية 0.6.",
    },
    {
      id: 'dm-l5-w2',
      question: "[MATH] A fuzzy set 'Warm' is defined linearly from 20°C (membership 0) to 30°C (membership 1). Calculate the membership degree for a temperature of 25°C.",
      questionAr: "[حساب] تم تعريف مجموعة ضبابية 'دافئ' خطياً من 20 درجة مئوية (عضوية 0) إلى 30 درجة مئوية (عضوية 1). احسب درجة العضوية لـ 25 درجة مئوية.",
      modelAnswer: "Since 25 is exactly in the middle of 20 and 30, the membership degree is 0.5.",
      modelAnswerAr: "بما أن 25 تقع تماماً في منتصف المسافة بين 20 و 30، فإن درجة العضوية هي 0.5.",
    },
    {
      id: 'dm-l5-w3',
      question: "List three advantages of Fuzzy Logic in control systems.",
      questionAr: "اذكر ثلاث مزايا للمنطق الضبابي في أنظمة التحكم.",
      modelAnswer: "1. Handles uncertainty and ambiguity. 2. Uses natural language-like rules. 3. Provides smooth control transitions unlike harsh binary switching.",
      modelAnswerAr: "1. يتعامل مع عدم اليقين والغموض. 2. يستخدم قواعد تشبه اللغة الطبيعية. 3. يوفر انتقالات تحكم سلسة على عكس التبديل الثنائي الحاد.",
    },
    {
      id: 'dm-l5-w4',
      question: "How does Fuzzy Logic resolve the 'Boundary Problem' seen in Crisp Logic?",
      questionAr: "كيف يحل المنطق الضبابي 'مشكلة الحدود' (Boundary Problem) الموجودة في المنطق التقليدي؟",
      modelAnswer: "In Crisp logic, an individual at a boundary (e.g., 29.9 years) suddenly jumps from 'Young' to 'Middle-Aged' at 30.0. Fuzzy logic uses overlapping functions to provide a gradual transition (e.g., 50% Young and 50% Middle-aged at the boundary).",
      modelAnswerAr: "في المنطق التقليدي، يقفز الفرد عند الحدود فجأة من 'شاب' إلى 'متوسط العمر'. يستخدم المنطق الضبابي وظائف متداخلة لتوفير انتقال تدريجي.",
    },
    {
      id: 'dm-l5-w5',
      question: "Discuss the role of Membership Functions. Is there a single 'correct' membership function for every problem?",
      questionAr: "ناقش دور وظائف العضوية هل توجد وظيفة عضوية 'صحيحة' واحدة لكل مشكلة؟",
      modelAnswer: "Membership Functions map inputs to truth degrees. There is no single 'correct' MF; they are context-dependent and are tuned based on expert knowledge and system performance requirements.",
      modelAnswerAr: "تقوم وظائف العضوية بربط المدخلات بدرجات الحقيقة. لا توجد وظيفة 'صحيحة' واحدة؛ فهي تعتمد على السياق ويتم ضبطها بناءً على خبرة الخبراء ومتطلبات النظام.",
    },
  ],
};
