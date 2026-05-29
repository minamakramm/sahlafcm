export const LECTURE = {
  subjectId: 'data-mining',
  number: 6,
  title: 'Fuzzy Inference System (FIS)',
  titleAr: 'نظام الاستدلال الضبابي (FIS)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 FIS Overview & Structure</h2>
<p>A <strong>Fuzzy Inference System (FIS)</strong> maps an input space to an output space using fuzzy logic. It utilizes a collection of <strong>fuzzy membership functions</strong> and <strong>production rules</strong> (IF-THEN) to reason about data.</p>

<h2>🔹 The 4 Critical Functional Steps</h2>

<h3>1. Fuzzification (Domain Transformation)</h3>
<p>Initial step where "crisp" numerical inputs are transformed into <em>fuzzy inputs</em> using membership functions. It determines the <strong>degree of truth</strong> for each rule premise.</p>

<h3>2. Rule Evaluation (Fuzzy Inference)</h3>
<p>Linguistic rules are evaluated. The truth value for the premise of each rule is applied to the <strong>conclusion</strong> part.
<ul>
<li>AND uses <strong>Minimum (MIN)</strong>.</li>
<li>OR uses <strong>Maximum (MAX)</strong>.</li>
</ul>
</p>

<h3>3. Aggregation of All Outputs</h3>
<p>The process where the individual outputs of every fired rule are unified into a <strong>single fuzzy set</strong> for each output variable. The input to this process is the list of truncated functions from the Inference step.</p>
<ul>
<li><strong>Maximum:</strong> A point-wise maximum over all fuzzy sets.</li>
<li><strong>Sum:</strong> A point-wise sum of all fuzzy sets.</li>
<li><strong>Probabilistic Sum.</strong></li>
</ul>

<h3>4. Defuzzification</h3>
<p>Converts the unified fuzzy output set back into a single <strong>Crisp Number</strong> for real-world execution.</p>
<ul>
<li><strong>Centroid Method:</strong> Finds the "Center of Gravity" of the combined membership function.</li>
<li><strong>Maximum Method:</strong> Selects the value at which the fuzzy set has its maximum truth value (peak).</li>
</ul>

<h2>🔹 The Tipping Problem Example</h2>
<p><strong>Inputs (Scale 0-10):</strong> Food Quality (Poor/Delicious) and Service (Poor/Good/Excellent).<br>
<strong>Output (Scale 5-15%):</strong> Amount of Tip (Cheap/Average/Generous).</p>
<ul>
<li><strong>Rule 1:</strong> IF service is poor OR food is bad THEN tip is cheap.</li>
<li><strong>Rule 2:</strong> IF service is good THEN tip is average.</li>
<li><strong>Rule 3:</strong> IF service is excellent OR food is delicious THEN tip is generous.</li>
</ul>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Official exam questions on FIS sequences and aggregation logic have been integrated! Search for <strong>[Midterm]</strong> below.</span></div>`,
        bodyAr: `<h2>🔹 نظرة عامة على FIS</h2>
<p>نظام الاستدلال الضبابي (FIS) يربط مساحة المدخلات بمساحة المخرجات باستخدام المنطق الضبابي وقواعد (IF-THEN).</p>

<h2>🔹 الخطوات الأربع الوظيفية</h2>
<ol>
<li><strong>التضبيب (Fuzzification):</strong> تحويل المدخلات الصريحة إلى قيم ضبابية.</li>
<li><strong>تقييم القواعد (Rule Evaluation):</strong> تطبيق القواعد وتحديد قوة الاستنتاج.
    <ul>
    <li>AND تستخدم <strong>الأدنى (MIN)</strong>.</li>
    <li>OR تستخدم <strong>الأقصى (MAX)</strong>.</li>
    </ul>
</li>
<li><strong>التجميع (Aggregation):</strong> توحيد مخرجات جميع القواعد المفعلة في مجموعة ضبابية واحدة لكل متغير مخرج.
    <ul>
    <li><strong>الحد الأقصى (Maximum):</strong> يأخذ القيمة القصوى عند كل نقطة.</li>
    <li><strong>المجموع (Sum):</strong> يجمع الأشكال الضبابية معاً.</li>
    </ul>
</li>
<li><strong>إزالة التضبيب (Defuzzification):</strong> تحويل المجموعة الضبابية الموحدة إلى رقم صريح واحد للتنفيذ.
    <ul>
    <li><strong>طريقة المركز (Centroid):</strong> تحسب "مركز ثقل" الشكل الهندسي المجمع.</li>
    <li><strong>طريقة الحد الأقصى (Maximum Method):</strong> تختار النقطة ذات أعلى قيمة حقيقة (القمة).</li>
    </ul>
</li>
</ol>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تم دمج أسئلة الامتحانات الرسمية حول تسلسل FIS ومنطق التجميع! ابحث عن علامة <strong>[ميدتيرم]</strong>.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "FIS combines fuzzy logic with IF-THEN rules.",
      "Fuzzification maps crisp numbers to linguistic labels (e.g., 8/10 becomes 'Delicious 0.8').",
      "Rule Evaluation calculates the support for each triggered IF-THEN rule.",
      "Defuzzification (like the Centroid method) turns fuzzy shapes back into a final crispy number."
    ],
    pointsAr: [
      "يجمع FIS بين المنطق الضبابي وقواعد IF-THEN.",
      "التضبيب يربط الأرقام الصريحة بالتسميات اللغوية.",
      "تقييم القواعد يحسب الدعم لكل قاعدة مفعلة.",
      "إزالة التضبيب تحول الأشكال الضبابية إلى رقم صريح نهائي."
    ],
  },

  mcq: [
    {
      id: 'dm-l6-q1',
      question: "Which of the following sequence of steps are taken in designing a fuzzy logic machine?",
      questionAr: "أي من تسلسل الخطوات التالي يتم اتخاذه في تصميم آلة منطق ضبابي؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Fuzzification → Rule evaluation → Defuzzification', isCorrect: true },
        { id: 'b', text: 'Rule evaluation → Fuzzification → Defuzzification', isCorrect: false },
        { id: 'c', text: 'Fuzzy Sets → Defuzzification → Rule evaluation', isCorrect: false },
        { id: 'd', text: 'Defuzzification → Rule evaluation → Fuzzification', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q2',
      question: "___ is the process of converting a crisp numeric value to its corresponding degree of membership within a fuzzy set.",
      questionAr: "___ هي عملية تحويل قيمة رقمية صريحة إلى درجة العضوية المقابلة لها داخل مجموعة ضبابية.",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'composition', isCorrect: false },
        { id: 'b', text: 'Fuzzification', isCorrect: true },
        { id: 'c', text: 'inference', isCorrect: false },
        { id: 'd', text: 'defuzzification', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q3',
      question: "In Rule Evaluation, if antecedents are connected by 'AND', the resulting rule strength is:",
      questionAr: "في تقييم القواعد، إذا كانت السوابق متصلة بـ 'AND'، فإن قوة القاعدة الناتجة هي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The sum of all strengths', isCorrect: false },
        { id: 'b', text: 'The maximum strength', isCorrect: false },
        { id: 'c', text: 'The smallest (minimum) strength', isCorrect: true },
        { id: 'd', text: 'The average strength', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q4',
      question: "What does a Fuzzy Inference System (FIS) combine?",
      questionAr: "ما الذي يجمعه نظام الاستدلال الضبابي (FIS)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Neural Networks and Databases', isCorrect: false },
        { id: 'b', text: 'Expert Systems and Fuzzy Logic', isCorrect: true },
        { id: 'c', text: 'HTML and CSS', isCorrect: false },
        { id: 'd', text: 'K-Means and Hierarchical Clustering', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q5',
      question: "Which step converts a crisp, real-world input (like 'Speed = 45') into a degree of truth?",
      questionAr: "أي خطوة تحول المدخل الصريح (مثل 'السرعة = 45') إلى درجة حقيقة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Defuzzification', isCorrect: false },
        { id: 'b', text: 'Aggregation', isCorrect: false },
        { id: 'c', text: 'Fuzzification', isCorrect: true },
        { id: 'd', text: 'Rule Composition', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q6',
      question: "When a fuzzy rule antecedent uses an 'OR' operator, which operation resolve the truth level?",
      questionAr: "عندما تستخدم مقدمة قاعدة ضبابية عامل 'OR'، أي عملية تحدد مستوى الحقيقة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Finding the Minimum (MIN)', isCorrect: false },
        { id: 'b', text: 'Finding the Maximum (MAX)', isCorrect: true },
        { id: 'c', text: 'Addition', isCorrect: false },
        { id: 'd', text: 'Finding the Centroid', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q7',
      question: "What is 'Aggregation' in FIS?",
      questionAr: "ما هو 'التجميع' (Aggregation) في FIS؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Grouping data points into clusters', isCorrect: false },
        { id: 'b', text: 'Combining outputs of all fired rules into a single fuzzy shape/set', isCorrect: true },
        { id: 'c', text: 'Converting a fuzzy set into a crisp number', isCorrect: false },
        { id: 'd', text: 'Deleting noisy variables', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q8',
      question: "The 'Centroid Method' is commonly used during which phase?",
      questionAr: "تُستخدم 'طريقة المركز' (Centroid) عادةً خلال أي مرحلة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Fuzzification', isCorrect: false },
        { id: 'b', text: 'Data Preprocessing', isCorrect: false },
        { id: 'c', text: 'Rule Evaluation', isCorrect: false },
        { id: 'd', text: 'Defuzzification', isCorrect: true },
      ],
    },
    {
      id: 'dm-l6-q9',
      question: "[MATH] If Rule 1 has conditions A (0.4) AND B (0.7), what is the combined support level?",
      questionAr: "[حساب] إذا كانت القاعدة 1 لها الشروط A (0.4) و B (0.7)، فما هو مستوى الدعم المجمع؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.4', isCorrect: true },
        { id: 'b', text: '0.7', isCorrect: false },
        { id: 'c', text: '1.1', isCorrect: false },
        { id: 'd', text: '0.28', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q10',
      question: "[MATH] If Rule 2 has conditions X (0.3) OR Y (0.9), what is the combined support level?",
      questionAr: "[حساب] إذا كانت القاعدة 2 لها الشروط X (0.3) أو Y (0.9)، فما هو مستوى الدعم المجمع؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.3', isCorrect: false },
        { id: 'b', text: '0.9', isCorrect: true },
        { id: 'c', text: '1.2', isCorrect: false },
        { id: 'd', text: '0.27', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q11',
      question: "[MID] The correct FULL sequence of FIS functional steps is:",
      questionAr: "[ميدتيرم] التسلسل الكامل الصحيح لخطوات FIS الوظيفية هو:",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Rule Evaluation → Fuzzification → Defuzzification → Aggregation', isCorrect: false },
        { id: 'b', text: 'Defuzzification → Aggregation → Rule Evaluation → Fuzzification', isCorrect: false },
        { id: 'c', text: 'Fuzzification → Rule Evaluation → Aggregation → Defuzzification', isCorrect: true },
        { id: 'd', text: 'Aggregation → Fuzzification → Defuzzification → Rule Evaluation', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q12',
      question: "[MID] Two rules both fire for 'High Speed': Rule A = 0.7, Rule B = 0.4. After MAX aggregation, the value is:",
      questionAr: "[ميدتيرم] قاعدتان تعملان لـ 'سرعة عالية': القاعدة أ = 0.7، القاعدة ب = 0.4. بعد تجميع MAX، القيمة هي:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '0.4', isCorrect: false },
        { id: 'b', text: '1.1', isCorrect: false },
        { id: 'c', text: '0.55', isCorrect: false },
        { id: 'd', text: '0.7', isCorrect: true },
      ],
    },
    {
      id: 'dm-l6-q13',
      question: "Which of the following is NOT a common fuzzy aggregation operator?",
      questionAr: "أي مما يلي ليس عاملاً شائعاً للتجميع الضبابي؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Maximum', isCorrect: false },
        { id: 'b', text: 'Sum', isCorrect: false },
        { id: 'c', text: 'Probabilistic Sum', isCorrect: false },
        { id: 'd', text: 'Euclidean Mean', isCorrect: true },
      ],
    },
    {
      id: 'dm-l6-q14',
      question: "The defuzzification method select value at highest truth value (peak) is called:",
      questionAr: "طريقة إزالة التضبيب التي تختار القيمة عند أعلى قيمة حقيقة (القمة) تسمى:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Centroid Method', isCorrect: false },
        { id: 'b', text: 'Min-Max Method', isCorrect: false },
        { id: 'c', text: 'Maximum Method', isCorrect: true },
        { id: 'd', text: 'Point-wise Summation', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q15',
      question: "What is the typical input for the 'Aggregation' step in an FIS?",
      questionAr: "ما هو المدخل النموذجي لخطوة 'التجميع' في FIS؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The final crisp number', isCorrect: false },
        { id: 'b', text: 'The list of truncated output shapes from each rule', isCorrect: true },
        { id: 'c', text: 'The raw sensor data', isCorrect: false },
        { id: 'd', text: 'The user\'s manual override', isCorrect: false },
      ],
    },
    {
      id: 'dm-l6-q16',
      question: "In the Tipping Problem example, what is the rating scale for Food and Service?",
      questionAr: "في مثال مشكلة الإكرامية، ما هو مقياس التقييم للطعام والخدمة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '0 to 100', isCorrect: false },
        { id: 'b', text: '1 to 5 Stars', isCorrect: false },
        { id: 'c', text: '0 to 10', isCorrect: true },
        { id: 'd', text: '-1 to 1', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-l6-w1',
      question: "List and briefly explain the 4 main steps of a Fuzzy Inference System.",
      questionAr: "اذكر واشرح باختصار الخطوات الأربع الرئيسية لنظام الاستدلال الضبابي.",
      modelAnswer: "1. Fuzzification (crisp mapping to fuzzy degrees). 2. Rule Evaluation (applying logic to the IF-THEN rules). 3. Aggregation (combining output shapes). 4. Defuzzification (calculating final real number via centroid).",
      modelAnswerAr: "1. التضبيب (ربط الصريح بالدرجات الضبابية). 2. تقييم القواعد (تطبيق المنطق على القواعد). 3. التجميع (دمج أشكال المخرجات). 4. إزالة التضبيب (حساب الرقم الحقيقي النهائي عبر المركز).",
    },
    {
      id: 'dm-l6-w2',
      question: "[MATH] A fuzzy rule states: IF Temp is Hot (0.6) AND Humidity is High (0.8) THEN AC Speed is Fast. What is the support value triggered for 'Fast' assuming MIN logic?",
      questionAr: "[حساب] تنص قاعدة ضبابية على: إذا كانت درجة الحرارة ساخنة (0.6) والرطوبة عالية (0.8) فإن سرعة التكييف سريعة. ما هي قيمة الدعم؟",
      modelAnswer: "The AND operator in fuzzy logic usually takes the MINIMUM of the two values. MIN(0.6, 0.8) = 0.6. The support for 'Fast' is 0.6.",
      modelAnswerAr: "عامل AND في المنطق الضبابي يأخذ عادةً الحد الأدنى للقيمتين. MIN(0.6, 0.8) = 0.6.",
    },
    {
      id: 'dm-l6-w3',
      question: "In the Tipping Example, explain what Defuzzification accomplishes.",
      questionAr: "في مثال الإكرامية، اشرح ما الذي تحققه عملية إزالة التضبيب (Defuzzification).",
      modelAnswer: "After aggregation creates a combined geometric shape representing all possible tip recommendations, defuzzification (like finding the center of gravity) turns that shape into one definitive standard number (e.g., '14% tip').",
      modelAnswerAr: "بعد التجميع، تقوم إزالة التضبيب (مثل إيجاد مركز الثقل) بتحويل الشكل الهندسي الناتج إلى رقم واحد محدد (مثل '14% إكرامية').",
    },
    {
      id: 'dm-l6-w4',
      question: "Explain 'Aggregation' in FIS and why it precedes Defuzzification.",
      questionAr: "اشرح 'التجميع' في FIS ولماذا يسبق عملية إزالة التضبيب.",
      modelAnswer: "Aggregation is the pointwise unification of fuzzy output shapes from all active rules into a single continuous shape. This is necessary because Defuzzification requires a holistic shape to calculate the final crisp value.",
      modelAnswerAr: "التجميع هو توحيد أشكال المخرجات الضبابية من جميع القواعد النشطة في شكل واحد مستمر. هذا ضروري لأن إزالة التضبيب تتطلب شكلاً كلياً لحساب القيمة الصريحة النهائية.",
    },
  ],
};
