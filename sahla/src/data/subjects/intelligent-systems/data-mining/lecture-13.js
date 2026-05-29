export const LECTURE = {
  subjectId: 'data-mining',
  number: 13,
  title: 'Section 7: Sprinkler Case Study',
  titleAr: 'القسم 7: دراسة حالة الرشاش',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Fuzzy Logic Systems Architecture</h2>
<p>Conventional logic understands only TRUE (1) or FALSE (0). <strong>Lotfi Zadeh</strong> observed that human reasoning includes intermediate possibilities. A Fuzzy Logic System (FLS) requires:</p>
<ul>
  <li><strong>Fuzzification:</strong> Converting crisp numeric inputs into fuzzy degrees.</li>
  <li><strong>Rule Evaluation:</strong> Using IF-THEN rules (AND=MIN, OR=MAX).</li>
  <li><strong>Defuzzification:</strong> Converting unified output back to a crisp value (COG/Centroid).</li>
</ul>

<h2>🔹 Case Study: Home Sprinkler System</h2>
<p>The system determines <strong>Watering Duration</strong> based on <strong>Air Temperature</strong> and <strong>Soil Moisture</strong>.</p>
<div class="case-study-grid">
  <div>
    <h4>System Inputs</h4>
    <ul>
      <li><strong>Temp (92°F):</strong> Falls into <em>Warm (0.20)</em> and <em>Hot (0.46)</em>.</li>
      <li><strong>Moisture (11%):</strong> Falls into <em>Dry (0.75)</em> and <em>Moist (0.25)</em>.</li>
    </ul>
  </div>
  <div>
    <h4>Fired Rules (Strength = MIN)</h4>
    <ol style="font-size:0.9rem;">
      <li>IF hot(0.46) AND dry(0.75) THEN long: <strong>0.46</strong></li>
      <li>IF warm(0.20) AND moist(0.25) THEN med: <strong>0.20</strong></li>
      <li>IF warm(0.20) AND dry(0.75) THEN long: <strong>0.20</strong></li>
      <li>IF hot(0.46) AND moist(0.25) THEN med: <strong>0.25</strong></li>
    </ol>
  </div>
</div>

<p><strong>Final Output calculation:</strong> We take the MAX strength for each consequent label: <em>Long = MAX(0.46, 0.20) = 0.46</em>; <em>Medium = MAX(0.20, 0.25) = 0.25</em>. After Defuzzification via the COG method (finding the Balance Point), the result is exactly <strong>38 minutes</strong> of watering.</p>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> The COG defuzzification method and the MIN application for AND-linked rules are almost always featured in high-value exam calculation problems.</span></div>`,
        bodyAr: `<h2>🔹 بنمارة أنظمة المنطق الضبابي</h2>
<p>يتطلب نظام المنطق الضبابي (FLS):</p>
<ul>
  <li><strong>التضبيب (Fuzzification):</strong> تحويل الأرقام إلى درجات عضوية.</li>
  <li><strong>تقييم القواعد:</strong> استخدام قواعد IF-THEN.</li>
  <li><strong>إزالة التضبيب:</strong> تحويل المخرجات الضبابية إلى رقم صريح (مركز الثقل).</li>
</ul>

<h2>🔹 دراسة حالة: نظام الرشاش المنزلي</h2>
<p>يحدد النظام <strong>مدة الري</strong> بناءً على <strong>درجة حرارة الهواء</strong> و <strong>رطوبة التربة</strong>.</p>
<div class="case-study-grid">
  <div>
    <h4>مدخلات النظام</h4>
    <ul>
      <li><strong>الحرارة (92°F):</strong> تقع ضمن <em>Warm (0.20)</em> و <em>Hot (0.46)</em>.</li>
      <li><strong>الرطوبة (11%):</strong> تقع ضمن <em>Dry (0.75)</em> و <em>Moist (0.25)</em>.</li>
    </ul>
  </div>
  <div>
    <h4>القواعد المفعلة (القوة = MIN)</h4>
    <ol style="font-size:0.9rem;">
      <li>إذا كان الجو حاراً (0.46) و جافاً (0.75) فإن الري طويل: <strong>0.46</strong></li>
      <li>إذا كان الجو دافئاً (0.20) و رطباً (0.25) فإن الري متوسط: <strong>0.20</strong></li>
    </ol>
  </div>
</div>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تعد طريقة COG لإزالة التضبيب وتطبيق الحد الأدنى (MIN) للقواعد المرتبطة بـ AND من أكثر المواضيع تكراراً في المسائل الحسابية في الاختبارات.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Lotfi Zadeh introduced FL to bridge the gap between human reasoning and binary logic.",
      "The three steps are Fuzzification, Rule Evaluation (Min-Max), and Defuzzification.",
      "Center of Gravity (COG/Centroid) is the most common defuzzification technique.",
      "Rule Evaluation uses the Minimum strength for AND connectors and Maximum for OR."
    ],
    pointsAr: [
      "قدم لطفي زاده المنطق الضبابي لسد الفجوة بين التفكير البشري والمنطق الثنائي.",
      "الخطوات الثلاث هي التضبيب، تقييم القواعد، وإزالة التضبيب.",
      "مركز الثقل (COG) هو أسلوب إزالة التضبيب الأكثر شيوعاً.",
      "استخدام الحد الأدنى (Min) لروابط AND والحد الأقصى (Max) لروابط OR في تقييم القواعد."
    ],
  },

  mcq: [
    {
      id: 'dm-s7-q1',
      question: "In the Sprinkler example, if Rule A has strength 0.46 and Rule B has 0.20 for the same label 'Long', what is the final fuzzy output for 'Long'?",
      questionAr: "في مثال الرشاش، إذا كانت قوة القاعدة A هي 0.46 والقاعدة B هي 0.20 لنفس التسمية 'Long'، فما هو المخرج الضبابي النهائي لـ 'Long'؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '0.20 (Minimum)', isCorrect: false },
        { id: 'b', text: '0.66 (Combined)', isCorrect: false },
        { id: 'c', text: '0.33 (Average)', isCorrect: false },
        { id: 'd', text: '0.46 (Maximum)', isCorrect: true },
      ],
    },
    {
      id: 'dm-s7-q2',
      question: "Which component transforms a crisp input (like 92°F) into a linguistic membership level?",
      questionAr: "أي مكون يحول مدخلاً صريحاً (مثل 92 درجة فهرنهايت) إلى مستوى عضوية لغوي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Defuzzifier', isCorrect: false },
        { id: 'b', text: 'Aggregator', isCorrect: false },
        { id: 'c', text: 'Fuzzifier (Membership Functions)', isCorrect: true },
        { id: 'd', text: 'Rule Base', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q3',
      question: "Who is credited with inventing Fuzzy Logic in response to the limitations of binary logic?",
      questionAr: "من يُنسب إليه اختراع المنطق الضبابي استجابةً لقيود المنطق الثنائي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Alan Turing', isCorrect: false },
        { id: 'b', text: 'Lotfi Zadeh', isCorrect: true },
        { id: 'c', text: 'John McCarthy', isCorrect: false },
        { id: 'd', text: 'Guido van Rossum', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q4',
      question: "What is the primary purpose of 'Defuzzification'?",
      questionAr: "ما هو الغرض الأساسي من 'إزالة التضبيب' (Defuzzification)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To make the rules more complex', isCorrect: false },
        { id: 'b', text: 'To convert fuzzy sets back into a single crisp numeric value', isCorrect: true },
        { id: 'c', text: 'To remove outliers from the dataset', isCorrect: false },
        { id: 'd', text: 'To convert text labels into binary 0 and 1', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q5',
      question: "In Rule Evaluation, if antecedents are connected by 'AND', the resulting rule strength is:",
      questionAr: "في تقييم القواعد، إذا كانت السوابق مرتبطة بـ 'AND'، فإن قوة القاعدة الناتجة هي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The sum of all strengths', isCorrect: false },
        { id: 'b', text: 'The maximum strength', isCorrect: false },
        { id: 'c', text: 'The average strength', isCorrect: false },
        { id: 'd', text: 'The smallest (minimum) strength', isCorrect: true },
      ],
    },

    {
      id: 'dm-s7-q6',
      question: "Contrast 'Hard Classification' with 'Fuzzy Classification'. In a Hard (Boolean) system, if 'Hot' is defined as >90°F, what is the status of 89.9°F versus a Fuzzy system?",
      questionAr: "قارن بين 'التصنيف الصارم' (Hard) و 'التصنيف الضبابي' (Fuzzy). في النظام الصارم، إذا تم تعريف 'حار' على أنه >90°F، فما هي حالة 89.9°F مقارنة بالنظام الضبابي؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Hard: 1.0 (Hot); Fuzzy: 0.99', isCorrect: false },
        { id: 'b', text: 'Hard: 0.0 (Not Hot); Fuzzy: ~0.45 (Partially Hot)', isCorrect: true },
        { id: 'c', text: 'Both systems report 0.0', isCorrect: false },
        { id: 'd', text: 'Both systems report 1.0', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q7',
      question: "If Rule 1 has strength 0.6 and Rule 2 has strength 0.3, and BOTH suggest 'Water: Long', what is the unified fuzzy output for 'Long'?",
      questionAr: "إذا كانت قوة القاعدة 1 هي 0.6 وقوة القاعدة 2 هي 0.3، وكلاهما يشير إلى 'ري: طويل'، فما هو المخرج الضبابي الموحد لـ 'طويل'؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '0.3 (Minimum)', isCorrect: false },
        { id: 'b', text: '0.45 (Average)', isCorrect: false },
        { id: 'c', text: '0.6 (Maximum)', isCorrect: true },
        { id: 'd', text: '0.9 (Sum)', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q8',
      question: "In the COG (Center of Gravity) method, what does the resulting 'crisp' value represent geometrically?",
      questionAr: "في طريقة مركز الثقل (COG)، ماذا يمثل الرقم 'الصريح' الناتج هندسياً؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The highest peak of the tallest graph', isCorrect: false },
        { id: 'b', text: 'The point that divides the area into two equal halves (balance point)', isCorrect: true },
        { id: 'c', text: 'The starting point of the first rule', isCorrect: false },
        { id: 'd', text: 'The average of all input values', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q9',
      question: "Which step in the Fuzzy logic process is responsible for evaluating the 'IF' part of the rules?",
      questionAr: "أي خطوة في عملية المنطق الضبابي مسؤولة عن تقييم جزء 'IF' من القواعد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Fuzzification', isCorrect: false },
        { id: 'b', text: 'Rule Evaluation (Inference)', isCorrect: true },
        { id: 'c', text: 'Aggregration', isCorrect: false },
        { id: 'd', text: 'Defuzzification', isCorrect: false },
      ],
    },
    {
      id: 'dm-s7-q10',
      question: "Fuzzy Logic is particularly useful for processes that:",
      questionAr: "المنطق الضبابي مفيد بشكل خاص للعمليات التي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Have precise mathematical models', isCorrect: false },
        { id: 'b', text: 'Are based on human intuition and linguistic variables', isCorrect: true },
        { id: 'c', text: 'Require only binary (0/1) outputs', isCorrect: false },
        { id: 'd', text: 'Involve only integer arithmetic', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s7-w1',
      question: "Briefly describe the Center of Gravity (COG) method used in the Sprinkler Case Study.",
      questionAr: "صف باختصار طريقة مركز الثقل (COG) المستخدمة في دراسة حالة الرشاش.",
      modelAnswer: "COG finds the balance point of the combined geometric shapes of all active membership functions. This single point represents the average 'truth' translated into a real-world number.",
      modelAnswerAr: "يجد COG نقطة التوازن للأشكال الهندسية المدمجة لجميع وظائف العضوية النشطة. تمثل هذه النقطة الوحيدة متوسط 'الحقيقة' المترجم إلى رقم في العالم الحقيقي.",
    },
    {
      id: 'dm-s7-w2',
      question: "Explain the concept of 'Possibilities between YES and NO' as proposed by Lotfi Zadeh.",
      questionAr: "اشرح مفهوم 'الاحتمالات بين نعم ولا' كما اقترحه لطفي زاده.",
      modelAnswer: "Binary logic only allows 0 or 1. Human reasoning includes shades like 'Possibly Yes' or 'Certainly No'. FL maps these to a continuous spectrum [0, 1].",
      modelAnswerAr: "يسمح المنطق الثنائي بـ 0 أو 1 فقط. يتضمن التفكير البشري درجات مثل 'نعم محتمل' أو 'لا بالتأكيد'. يقوم المنطق الضبابي برسم خرائط لهذه الدرجات على طيف مستمر [0، 1].",
    },
    {
      id: 'dm-s7-w3',
      question: "Contrast a 'Hard' (Boolean) classification of Temperature with a 'Fuzzy' classification. Why is Fuzzy better for a sprinkler system?",
      questionAr: "قارن بين التصنيف 'الصارم' (بولين) لدرجة الحرارة والتصنيف 'الضبابي'. لماذا يعتبر الضبابي أفضل لنظام الرش؟",
      modelAnswer: "A Hard system has sharp cut-offs (e.g., 90 is HOT, 89 is COOL), leading to jerky behavior. A Fuzzy system allows smooth transitions (89 is mostly HOT but slightly COOL), providing more nuanced control (e.g., watering 34 minutes instead of just ON or OFF).",
      modelAnswerAr: "النظام الصارم لديه فواصل حادة (مثلاً: 90 حار، 89 بارد)، مما يؤدي لسلوك متقطع. النظام الضبابي يسمح بانتقالات سلسة (89 حار غالباً ولكن بارد قليلاً)، مما يوفر تحكماً أدق (مثلاً: الري لمدة 34 دقيقة بدلاً من مجرد تشغيل أو إيقاف).",
    },
    {
      id: 'dm-s7-w4',
      question: "Explain why the MIN operator is used for 'AND' connectors in fuzzy rule evaluation.",
      questionAr: "اشرح سبب استخدام عامل MIN لروابط 'AND' في تقييم القواعد الضبابية.",
      modelAnswer: "The 'AND' operation represents the intersection of sets. In logic, the combined truth of two conditions is limited by the 'weakest link' (the lowest membership value), hence the use of MIN.",
      modelAnswerAr: "تمثل عملية 'AND' تقاطع المجموعات. في المنطق، تكون الحقيقة المدمجة لشرطين محدودة بـ 'أضعف حلقة' (أدنى قيمة عضوية)، ومن هنا جاء استخدام MIN.",
    },
  ],
};
