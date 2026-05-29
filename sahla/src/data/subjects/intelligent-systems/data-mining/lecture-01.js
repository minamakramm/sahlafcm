export const LECTURE = {
  subjectId: 'data-mining',
  number: 1,
  title: 'Intro to Data Mining & KDD Process',
  titleAr: 'مقدمة في تنقيب البيانات وعملية KDD',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Why Data Mining?</h2>
<p>We are "drowning in data, but starving for knowledge!" The explosive growth of data—from terabytes to petabytes—is driven by automated data collection tools, e-commerce, and our computerized society. Data mining is the search for relationships and global patterns that exist in large databases but are <em>hidden</em> among the vast amount of data. It serves as the bridge between raw data and actionable intelligence.</p>

<h2>🔹 The KDD Process (7 Steps)</h2>
<p>Knowledge Discovery in Databases (KDD) is the overall process of turning raw data into useful knowledge. Steps 1 to 4 are considered <strong>Data Preprocessing</strong>. Data mining is the essential core step.</p>
<ol>
<li><strong>Data Cleaning:</strong> Removing noise and handling inconsistent data.</li>
<li><strong>Data Integration:</strong> Combining multiple sources (databases, flat files).</li>
<li><strong>Data Selection:</strong> Retrieving relevant data for analysis.</li>
<li><strong>Data Transformation:</strong> Normalizing or aggregating data into appropriate forms.</li>
<li><strong>Data Mining:</strong> Applying intelligent methods to extract data patterns.</li>
<li><strong>Pattern Evaluation:</strong> Identifying truly interesting patterns based on measures.</li>
<li><strong>Knowledge Presentation:</strong> Using visualization techniques to represent knowledge.</li>
</ol>

<h2>🔹 Architecture of a Data Mining System</h2>
<p>A typical system consists of several major components:</p>
<ul>
<li><strong>Information Repository:</strong> DB, Data Warehouse, WWW, or other repositories.</li>
<li><strong>DB/DW Server:</strong> Responsible for fetching the relevant data.</li>
<li><strong>Data Mining Engine:</strong> Essential functional component for performing tasks.</li>
<li><strong>Pattern Evaluation Model:</strong> Interacts with the engine to find interesting patterns.</li>
<li><strong>User Interface:</strong> Communicates between users and the system.</li>
</ul>

<h2>🔹 Data Warehouse (DW)</h2>
<p>A <strong>Data Warehouse</strong> is a single, complete, and consistent store of data obtained from diverse sources, made available to end users in a way they can understand and use for business decision-making. It is a historical decision support database maintained separately from operational databases.</p>
<ul>
<li><strong>Data Warehousing:</strong> The entire process of construction, maintenance, and usage of the warehouse.</li>
<li><strong>The Difference:</strong> Data warehousing is about <em>extracting, cleaning, and storing</em> data. Data mining is about <em>finding patterns and forecasting</em> based on that data.</li>
</ul>

<h2>🔹 Potential Applications</h2>
<ul>
<li><strong>Market Analysis:</strong> CRM, target marketing, market basket analysis.</li>
<li><strong>Risk Management:</strong> Forecasting, customer retention, quality control.</li>
<li><strong>Fraud Detection:</strong> Identifying unusual patterns or <em>outliers</em>.</li>
<li><strong>Science & Society:</strong> Bioinformatics, text mining (email), and Web mining.</li>
</ul>

<div class="callout callout-info"><span class="callout-icon">ℹ️</span><span><strong>Key Hierarchy:</strong> Data Science (The Umbrella) ➔ KDD Process (The Methodology) ➔ Data Mining (The Algorithm Step).</span></div>
<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Official exam questions have been integrated! Look for the <strong>[Midterm]</strong> tag in the practice sections.</span></div>`,
        bodyAr: `<h2>🔹 لماذا تنقيب البيانات؟</h2>
<p>نحن "نغرق في البيانات، ولكننا نتوق إلى المعرفة!" النمو الهائل للبيانات مدفوع بأدوات جمع البيانات الآلية، والتجارة الإلكترونية، ومجتمعنا المحوسب. تنقيب البيانات هو البحث عن العلاقات والأنماط العالمية التي توجد في قواعد البيانات الضخمة ولكنها <em>مخفية</em> بين هذا الكم الهائل. إنه الجسر بين البيانات الخام والذكاء القابل للتنفيذ.</p>

<h2>🔹 عملية KDD (7 خطوات)</h2>
<p>اكتشاف المعرفة في قواعد البيانات (KDD) هو العملية العامة لتحويل البيانات الخام إلى معرفة مفيدة. تعتبر الخطوات من 1 إلى 4 <strong>معالجة مسبقة للبيانات</strong>. تنقيب البيانات هو الخطوة الجوهرية والأساسية.</p>
<ol>
<li><strong>تنظيف البيانات:</strong> إزالة الضجيج ومعالجة البيانات غير المتسقة.</li>
<li><strong>تكامل البيانات:</strong> دمج مصادر متعددة (قواعد بيانات، ملفات مسطحة).</li>
<li><strong>اختيار البيانات:</strong> استرجاع البيانات ذات الصلة للتحليل.</li>
<li><strong>تحويل البيانات:</strong> تطبيع أو تجميع البيانات في نماذج مناسبة.</li>
<li><strong>تنقيب البيانات:</strong> تطبيق الأساليب الذكية لاستخراج أنماط البيانات.</li>
<li><strong>تقييم الأنماط:</strong> تحديد الأنماط المثيرة للاهتمام حقاً بناءً على المقاييس.</li>
<li><strong>عرض المعرفة:</strong> استخدام تقنيات التصور لتمثيل المعرفة للمستخدمين.</li>
</ol>

<h2>🔹 بنية نظام تنقيب البيانات</h2>
<p>يتكون النظام النموذجي من عدة مكونات رئيسية:</p>
<ul>
<li><strong>مستودع المعلومات:</strong> قاعدة البيانات، مستودع البيانات، الويب، أو مستودعات أخرى.</li>
<li><strong>خادم DB/DW:</strong> مسؤول عن جلب البيانات ذات الصلة.</li>
<li><strong>محرك تنقيب البيانات:</strong> المكون الوظيفي الأساسي لأداء المهام.</li>
<li><strong>نموذج تقييم الأنماط:</strong> يتفاعل مع المحرك للعثور على أنماط مثيرة للاهتمام.</li>
<li><strong>واجهة المستخدم:</strong> تتواصل بين المستخدمين والنظام.</li>
</ul>

<h2>🔹 مستودع البيانات (DW)</h2>
<p><strong>مستودع البيانات</strong> هو مخزن واحد وكامل ومتسق للبيانات التي يتم الحصول عليها من مصادر متنوعة، ومتاح للمستخدمين النهائيين بطريقة يمكنهم فهمها واستخدامها لاتخاذ القرارات التجارية. هي قاعدة بيانات لدعم القرار التاريخي يتم صيانتها بشكل منفصل عن قواعد البيانات العملياتية.</p>
<ul>
<li><strong>تخزين البيانات:</strong> العملية الكاملة لبناء وصيانة واستخدام المستودع.</li>
<li><strong>الفرق:</strong> تخزين البيانات يتعلق بـ <em>استخراج وتنظيف وتخزين</em> البيانات. تنقيب البيانات يتعلق بـ <em>إيجاد الأنماط والتنبؤ</em> بناءً على تلك البيانات.</li>
</ul>

<h2>🔹 التطبيقات المحتملة</h2>
<ul>
<li><strong>تحليل السوق:</strong> إدارة علاقات العملاء، التسويق المستهدف، تحليل سلة المشتريات.</li>
<li><strong>إدارة المخاطر:</strong> التنبؤ، الاحتفاظ بالعملاء، مراقبة الجودة.</li>
<li><strong>كشف الاحتيال:</strong> تحديد الأنماط غير العادية أو <em>القيم المتطرفة</em>.</li>
<li><strong>العلم والمجتمع:</strong> المعلوماتية الحيوية، تنقيب النصوص (البريد الإلكتروني)، وتنقيب الويب.</li>
</ul>

<div class="callout callout-info"><span class="callout-icon">ℹ️</span><span><strong>التسلسل الهرمي:</strong> علم البيانات (المظلة) ➔ عملية KDD (المنهجية) ➔ تنقيب البيانات (خطوة الخوارزمية).</span></div>
<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تم دمج أسئلة الامتحانات الرسمية! ابحث عن علامة <strong>[Midterm]</strong> في أقسام التدريب.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Data mining extracts hidden, valid, and actionable patterns from massive datasets.",
      "KDD is a multi-step process; Data Mining is the central computational step.",
      "The 7 KDD stages: Cleaning ➔ Integration ➔ Selection ➔ Transformation ➔ Mining ➔ Evaluation ➔ Presentation.",
      "Predictive tasks (Classification/Regression) vs. Descriptive tasks (Clustering/Association).",
      "Data Mining handles large-scale data that exceeds traditional manual analysis capabilities."
    ],
    pointsAr: [
      "تنقيب البيانات يستخرج أنماطاً مخفية وصلبة وقابلة للتنفيذ من مجموعات البيانات الضخمة.",
      "KDD هي عملية متعددة الخطوات؛ تنقيب البيانات هو الخطوة الحسابية المركزية.",
      "مراحل KDD السبعة: التنظيف ← التكامل ← الاختيار ← التحويل ← التنقيب ← التقييم ← العرض.",
      "المهام التنبؤية (التصنيف/الانحدار) مقابل المهام الوصفية (التجميع/الارتباط).",
      "تنقيب البيانات يتعامل مع البيانات واسعة النطاق التي تتجاوز قدرات التحليل اليدوي التقليدية."
    ],
  },

  mcq: [
    {
      id: 'dm-l1-q1',
      question: "Which of the following is also used as a preprocessing step in the knowledge discovery process?",
      questionAr: "أي مما يلي يُستخدم أيضاً كخطوة معالجة مسبقة في عملية اكتشاف المعرفة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Pattern evaluation', isCorrect: false },
        { id: 'b', text: 'Knowledge presentation', isCorrect: false },
        { id: 'c', text: 'Data mining', isCorrect: false },
        { id: 'd', text: 'None of the mentioned', isCorrect: true },
      ],
    },
    {
      id: 'dm-l1-q2',
      question: "Data mining can be described as the process of......",
      questionAr: "يمكن وصف تنقيب البيانات بأنه عملية......",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'identifying patterns in data', isCorrect: true },
        { id: 'b', text: 'representing data', isCorrect: false },
        { id: 'c', text: 'deducing relationships in data', isCorrect: false },
        { id: 'd', text: 'simulating trends in data', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q3',
      question: "Both ___ and ___ are business intelligence tools that are used to turn information (or data) into actionable knowledge.",
      questionAr: "كل من ___ و ___ هما أدوات ذكاء أعمال تُستخدم لتحويل المعلومات (أو البيانات) إلى معرفة قابلة للتنفيذ.",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'data collecting, data warehousing', isCorrect: false },
        { id: 'b', text: 'data science, data warehousing', isCorrect: false },
        { id: 'c', text: 'data mining, data warehousing', isCorrect: true },
        { id: 'd', text: 'data science, data mining', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q4',
      question: "What is the primary goal of Data Mining?",
      questionAr: "ما هو الهدف الأساسي من تنقيب البيانات؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Storing as much data as possible', isCorrect: false },
        { id: 'b', text: 'Finding hidden patterns and relationships in data', isCorrect: true },
        { id: 'c', text: 'Increasing the speed of internet connections', isCorrect: false },
        { id: 'd', text: 'Backing up database files', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q5',
      question: "Which KDD step is responsible for combining data from different sources?",
      questionAr: "أي خطوة من خطوات KDD مسؤولة عن دمج البيانات من مصادر مختلفة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Data Cleaning', isCorrect: false },
        { id: 'b', text: 'Data Selection', isCorrect: false },
        { id: 'c', text: 'Data Integration', isCorrect: true },
        { id: 'd', text: 'Data Transformation', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q6',
      question: "Data Mining is specifically which step in the KDD process?",
      questionAr: "تنقيب البيانات هو أي خطوة تحديداً في عملية KDD؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'First', isCorrect: false },
        { id: 'b', text: 'Third', isCorrect: false },
        { id: 'c', text: 'Fifth', isCorrect: true },
        { id: 'd', text: 'Seventh', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q7',
      question: "An 'Outlier' in data mining refers to:",
      questionAr: "تشير القيمة المتطرفة (Outlier) في تنقيب البيانات إلى:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The most common data point', isCorrect: false },
        { id: 'b', text: 'Data that fits the general pattern perfectly', isCorrect: false },
        { id: 'c', text: 'A data object that deviates significantly from the rest', isCorrect: true },
        { id: 'd', text: 'A missing value', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q8',
      question: "A task that predicts an unknown continuous value (like house price) is called:",
      questionAr: "تسمى المهمة التي تتنبأ بقيمة مستمرة غير معروفة (مثل سعر المنزل):",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Classification', isCorrect: false },
        { id: 'b', text: 'Regression', isCorrect: true },
        { id: 'c', text: 'Clustering', isCorrect: false },
        { id: 'd', text: 'Association Rule Mining', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q9',
      question: "What is the difference between Data Science and Data Mining?",
      questionAr: "ما الفرق بين علم البيانات وتنقيب البيانات؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'They are the same thing', isCorrect: false },
        { id: 'b', text: 'Data Mining is much broader than Data Science', isCorrect: false },
        { id: 'c', text: 'Data Mining is one specific step/component within Data Science', isCorrect: true },
        { id: 'd', text: 'Data Science is only about visualization', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q10',
      question: "Why is 'Pattern Evaluation' necessary in KDD?",
      questionAr: "لماذا يعد 'تقييم الأنماط' ضرورياً في KDD؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To make the data look pretty', isCorrect: false },
        { id: 'b', text: 'To filter out obvious or uninteresting patterns', isCorrect: true },
        { id: 'c', text: 'To delete the original database', isCorrect: false },
        { id: 'd', text: 'To create new data points', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q11',
      question: "Which of these is a 'Descriptive' task?",
      questionAr: "أي من هذه المهام تعتبر مهمة 'وصفية' (Descriptive)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Predicting stock market prices', isCorrect: false },
        { id: 'b', text: 'Diagnosing disease based on symptoms', isCorrect: false },
        { id: 'c', text: 'Clustering customers with similar buying habits', isCorrect: true },
        { id: 'd', text: 'Forecasting next month\'s sales', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q12',
      question: "[MID] The KDD step that directly follows Data Mining is:",
      questionAr: "خطوة KDD التي تلي تنقيب البيانات مباشرة هي:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Data Cleaning', isCorrect: false },
        { id: 'b', text: 'Data Integration', isCorrect: false },
        { id: 'c', text: 'Pattern Evaluation', isCorrect: true },
        { id: 'd', text: 'Knowledge Presentation', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q13',
      question: "[MID] Which of the following is a preprocessing (before mining) step in KDD?",
      questionAr: "أي مما يلي يعد خطوة معالجة مسبقة (قبل التنقيب) في KDD؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Pattern Evaluation', isCorrect: false },
        { id: 'b', text: 'Knowledge Presentation', isCorrect: false },
        { id: 'c', text: 'Data Cleaning', isCorrect: true },
        { id: 'd', text: 'None — all steps come after mining', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q14',
      question: "[MID] A data warehouse stores data for analysis, while data mining:",
      questionAr: "يقوم مستودع البيانات بتخزين البيانات للتحليل، بينما يقوم تنقيب البيانات بـ:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Stores more data', isCorrect: false },
        { id: 'b', text: 'Extracts hidden patterns from that data', isCorrect: true },
        { id: 'c', text: 'Deletes old data', isCorrect: false },
        { id: 'd', text: 'Only visualizes data', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q15',
      question: "Which component of a Data Mining system is responsible for performing the actual extraction of knowledge?",
      questionAr: "أي مكون من مكونات نظام تنقيب البيانات مسؤول عن إجراء الاستخراج الفعلي للمعرفة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'User Interface', isCorrect: false },
        { id: 'b', text: 'DB Server', isCorrect: false },
        { id: 'c', text: 'Data Mining Engine', isCorrect: true },
        { id: 'd', text: 'Pattern Evaluation Model', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q16',
      question: "How is a Data Warehouse maintained relative to an organization's operational database?",
      questionAr: "كيف يتم صيانة مستودع البيانات بالنسبة لقاعدة البيانات العملياتية للمنظمة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It is part of the operational database', isCorrect: false },
        { id: 'b', text: 'It is maintained separately from the operational database', isCorrect: true },
        { id: 'c', text: 'It replaces the operational database', isCorrect: false },
        { id: 'd', text: 'It is a subset of the operational database', isCorrect: false },
      ],
    },
    {
      id: 'dm-l1-q17',
      question: "Which of the following describes 'Data Warehousing'?",
      questionAr: "أي مما يلي يصف 'تخزين البيانات' (Data Warehousing)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A single algorithm for pattern discovery', isCorrect: false },
        { id: 'b', text: 'The process of constructing and using data warehouses', isCorrect: true },
        { id: 'c', text: 'A method for predicting future stocks', isCorrect: false },
        { id: 'd', text: 'The same as data cleaning', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-l1-w1',
      question: "Explain the 'Drowning in data, but starving for knowledge' problem.",
      questionAr: "اشرح مشكلة 'الغرق في البيانات، ولكن التوق إلى المعرفة'.",
      modelAnswer: "This refers to the gap between the massive amount of raw data collected today and our limited ability to manually analyze it to find useful insights without automated tools like Data Mining.",
      modelAnswerAr: "يشير هذا إلى الفجوة بين الكم الهائل من البيانات الخام التي يتم جمعها اليوم وقدرتنا المحدودة على تحليلها يدوياً للعثور على رؤى مفيدة دون أدوات آلية مثل تنقيب البيانات.",
    },
    {
      id: 'dm-l1-w2',
      question: "Describe the role of Data Transformation in the KDD process.",
      questionAr: "صف دور تحويل البيانات في عملية KDD.",
      modelAnswer: "It prepares data for mining by converting it into a suitable format. Examples include normalization (scaling numbers to 0-1) or aggregation (summarizing daily data into monthly averages).",
      modelAnswerAr: "تجهز البيانات للتنقيب عن طريق تحويلها إلى تنسيق مناسب. تشمل الأمثلة التطبيع (توسيع الأرقام من 0-1) أو التجميع (تلخيص البيانات اليومية إلى متوسطات شهرية).",
    },
    {
      id: 'dm-l1-w3',
      question: "Differentiate between Predictive and Descriptive Data Mining tasks with examples.",
      questionAr: "فرق بين مهام تنقيب البيانات التنبؤية (Predictive) والوصفية (Descriptive) مع الأمثلة.",
      modelAnswer: "Predictive: Aims to predict a target value (e.g., Classification: is an email spam or not?). Descriptive: Aims to find patterns that describe the data (e.g., Clustering: grouping similar customers for targeted ads).",
      modelAnswerAr: "التنبؤية: تهدف إلى التنبؤ بقيمة مستهدفة (مثال: التصنيف: هل البريد الإلكتروني مزعج أم لا؟). الوصفية: تهدف إلى إيجاد أنماط تصف البيانات (مثال: التجميع: تجميع العملاء المتشابهين للإعلانات المستهدفة).",
    },
  ],
};
