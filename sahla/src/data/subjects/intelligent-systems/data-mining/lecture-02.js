export const LECTURE = {
  subjectId: 'data-mining',
  number: 2,
  title: 'Learning Methods & 4 Levels',
  titleAr: 'طرق التعلم والمستويات الأربعة',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is Data Science?</h2>
<p>Data Science is the science that uses <strong>computer science, statistics, machine learning, visualization, and human-computer interactions</strong> to collect, clean, integrate, analyze, and visualize data to create "data products."</p>
<ul>
    <li><strong>The Umbrella:</strong> Data science is an umbrella term for several techniques used to extract information and insights.</li>
    <li><strong>The Relationship:</strong> Artificial Intelligence, Machine Learning, and Data Mining are the primary areas related to Data Science. Data Mining is specifically only <em>a part</em> of the Data Science pipeline.</li>
</ul>

<h2>🔹 Will Data Mining Help Me? (4 Criteria)</h2>
<p>Before starting a project, ask these four critical questions:</p>
<ol>
    <li>Can we clearly define the problem?</li>
    <li>Do potentially meaningful data exist?</li>
    <li>Does the data contain hidden knowledge (vs. just being useful for reporting)?</li>
    <li>Will the cost of processing be less than the likely increase in profit?</li>
</ol>

<h2>🔹 On What Kinds of Data?</h2>
<p>Data mining can be performed on traditional and advanced repositories:</p>
<ul>
    <li><strong>Basic:</strong> Relational databases, Data warehouses, Transactional databases.</li>
    <li><strong>Advanced:</strong> Spatial & Temporal data, Time-series, Stream data, Multimedia databases, Text databases, and the World Wide Web.</li>
</ul>

<h2>🔹 The 4 Levels of learning</h2>
<ol>
<li><strong>Facts:</strong> Simple statements of truth.</li>
<li><strong>Concepts:</strong> A set of objects, symbols, or events grouped together because they share common characteristics.</li>
<li><strong>Procedures:</strong> A step-by-step action to achieve a goal.</li>
<li><strong>Principles:</strong> General truths or laws that are basic to other truths.</li>
</ol>

<h2>🔹 Learning Methods</h2>
<h3>1. Supervised Learning</h3>
<p>Uses models to identify objects of similar structure and determine the outcome. It requires a <strong>Training Set</strong> where the diagnosis/class is already known.</p>

<div class="code-block">Patient | Fever | Congestion | Headache | Diagnosis
--------|-------|------------|----------|----------
1       | Yes   | Yes        | Yes      | Strep Throat
2       | No    | Yes        | Yes      | Allergy
3       | Yes   | Yes        | No       | Cold
4       | No    | No         | Yes      | Allergy</div>

<h3>2. Unsupervised Learning</h3>
<p>A method that builds models from data <strong>without predefined classes</strong>. It finds patterns in data instances where the outcome is unknown.</p>

<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Comparison Hint:</strong> If the data has a 'Target Column' (like 'Diagnosis' or 'Price'), it's <strong>Supervised</strong>. If it's just a bunch of features with no 'answer' column, it's <strong>Unsupervised</strong>.</span></div>
<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Official exam questions have been integrated! Look for the <strong>[Midterm]</strong> tag in the practice sections.</span></div>`,
        bodyAr: `<h2>🔹 ما هو علم البيانات؟</h2>
<p>علم البيانات هو العلم الذي يستخدم <strong>علوم الكمبيوتر، والإحصاء، والتعلم الآلي، والتصور، والتفاعل بين الإنسان والحاسوب</strong> لجمع البيانات وتنظيفها ودمجها وتحليلها وتصويرها لإنشاء "منتجات بيانات".</p>
<ul>
    <li><strong>المظلة:</strong> علم البيانات هو مصطلح شامل للعديد من التقنيات المستخدمة لاستخراج المعلومات والرؤى.</li>
    <li><strong>العلاقة:</strong> الذكاء الاصطناعي، والتعلم الآلي، وتنقيب البيانات هي المجالات الأساسية المرتبطة بعلم البيانات. تنقيب البيانات هو تحديداً <em>جزء فقط</em> من مسار علم البيانات.</li>
</ul>

<h2>🔹 هل سيساعدني تنقيب البيانات؟ (4 معايير)</h2>
<p>قبل البدء في مشروع، اسأل هذه الأسئلة الأربعة الحاسمة:</p>
<ol>
    <li>هل يمكننا تحديد المشكلة بوضوح؟</li>
    <li>هل توجد بيانات ذات مغنى محتمل؟</li>
    <li>هل تحتوي البيانات على معرفة مخفية (مقابل كونها مفيدة فقط للتقارير)؟</li>
    <li>هل ستكون تكلفة المعالجة أقل من الزيادة المحتملة في الربح؟</li>
</ol>

<h2>🔹 على أي نوع من البيانات؟</h2>
<p>يمكن إجراء تنقيب البيانات على المستودعات التقليدية والمتقدمة:</p>
<ul>
    <li><strong>الأساسية:</strong> قواعد البيانات العلائقية، مستودعات البيانات، قواعد بيانات المعاملات.</li>
    <li><strong>المتقدمة:</strong> البيانات المكانية والزمانية، السلاسل الزمنية، بيانات التدفق، قواعد بيانات الوسائط المتعددة، قواعد بيانات النصوص، والويب.</li>
</ul>

<h2>🔹 مستويات التعلم الأربعة</h2>
<ol>
<li><strong>الحقائق:</strong> عبارات بسيطة للحقيقة (مثل: يغلي الماء عند 100 درجة).</li>
<li><strong>المفاهيم:</strong> مجموعة من الكائنات أو الرموز أو الأحداث المجمعة معاً لأنها تشترك في خصائص مشتركة.</li>
<li><strong>الإجراءات:</strong> إجراء خطوة بخطوة لتحقيق هدف.</li>
<li><strong>المبادئ:</strong> حقائق عامة أو قوانين أساسية لحقائق أخرى.</li>
</ol>

<h2>🔹 طرق التعلم</h2>
<h3>1. التعلم بالإشراف (Supervised Learning)</h3>
<p>يستخدم النماذج لتحديد الكائنات ذات البنية المماثلة وتحديد النتيجة. يتطلب <strong>مجموعة تدريب</strong> حيث يكون التشخيص/الفئة معروفاً مسبقاً.</p>

<h3>2. التعلم بدون إشراف (Unsupervised Learning)</h3>
<p>طريقة تبني نماذج من البيانات <strong>بدون فئات محددة مسبقاً</strong>. يجد الأنماط في حالات البيانات حيث تكون النتيجة غير معروفة.</p>

<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>تلميح للمقارنة:</strong> إذا كانت البيانات تحتوي على "عمود مستهدف" (مثل التشخيص)، فهو <strong>بإشراف</strong>. إذا كانت مجرد ميزات بدون عمود إجابة، فهو <strong>بدون إشراف</strong>.</span></div>
<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> تم دمج أسئلة الامتحانات الرسمية! ابحث عن علامة <strong>[Midterm]</strong> في أقسام التدريب.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "The 4 Knowledge Levels: Facts (data), Concepts (groupings), Procedures (steps), Principles (laws).",
      "Concept Learning involves moving from general categories to specific instances.",
      "Supervised Learning: Requires labeled data (input + output). Tasks: Classification, Regression.",
      "Unsupervised Learning: Deals with unlabeled data (input only). Tasks: Clustering.",
      "Machine Learning is the automation of model building for data analysis."
    ],
    pointsAr: [
      "مستويات المعرفة الأربعة: الحقائق (بيانات)، المفاهيم (مجموعات)، الإجراءات (خطوات)، المبادئ (قوانين).",
      "تعلم المفاهيم يتضمن الانتقال من فئات عامة إلى حالات محددة.",
      "التعلم بالإشراف: يتطلب بيانات مصنفة (مدخلات + مخرجات). المهام: التصنيف، الانحدار.",
      "التعلم بدون إشراف: يتعامل مع بيانات غير مصنفة (مدخلات فقط). المهام: التجميع.",
      "التعلم الآلي هو أتمتة بناء النماذج لتحليل البيانات."
    ],
  },

  mcq: [
    {
      id: 'dm-l2-q1',
      question: "___ is a proposed truth which anything proceeds whereas ___ is a condition or natural truth.",
      questionAr: "___ هو حقيقة مقترحة يسبقها أي شيء بينما ___ هو شرط أو حقيقة طبيعية.",
      difficulty: 'hard',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'procedure, fact', isCorrect: false },
        { id: 'b', text: 'concept, principal', isCorrect: false },
        { id: 'c', text: 'fact, procedure', isCorrect: false },
        { id: 'd', text: 'principal, procedure', isCorrect: true },
      ],
    },
    {
      id: 'dm-l2-q2',
      question: "A statement like 'Water boils at 100 degrees Celsius' is at which level of learning?",
      questionAr: "عبارة مثل 'يغلي الماء عند 100 درجة مئوية' هي في أي مستوى من مستويات التعلم؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Fact', isCorrect: true },
        { id: 'b', text: 'Concept', isCorrect: false },
        { id: 'c', text: 'Procedure', isCorrect: false },
        { id: 'd', text: 'Principle', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q3',
      question: "Which learning method uses a 'Target Class' or 'Labels' in its training data?",
      questionAr: "أي طريقة تعلم تستخدم 'فئة مستهدفة' أو 'تسميات' في بيانات التدريب الخاصة بها؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Unsupervised Learning', isCorrect: false },
        { id: 'b', text: 'Reinforcement Learning', isCorrect: false },
        { id: 'c', text: 'Supervised Learning', isCorrect: true },
        { id: 'd', text: 'Descriptive Learning', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q4',
      question: "Which of the following describes 'Concept Learning'?",
      questionAr: "أي مما يلي يصف 'تعلم المفاهيم'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Step-by-step instructions', isCorrect: false },
        { id: 'b', text: 'Recognizing shared traits across objects', isCorrect: true },
        { id: 'c', text: 'Calculating the mean of data', isCorrect: false },
        { id: 'd', text: 'A basic law of physics', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q5',
      question: "If a dataset contains house sizes but NO target price column for training, the task is:",
      questionAr: "إذا كانت مجموعة البيانات تحتوي على أحجام المنازل ولكن بدون عمود سعر مستهدف للتدريب، فإن المهمة هي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Supervised', isCorrect: false },
        { id: 'b', text: 'Unsupervised', isCorrect: true },
        { id: 'c', text: 'Manual', isCorrect: false },
        { id: 'd', text: 'None of the above', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q6',
      question: "A learning model might be used to predict flight times based on parameters such as weather, traffic, and peak hours. This is:",
      questionAr: "قد يتم استخدام نموذج تعلم للتنبؤ بأوقات الرحلات بناءً على معايير مثل الطقس وحركة المرور وساعات الذروة. هذا هو:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Unsupervised', isCorrect: false },
        { id: 'b', text: 'Supervised', isCorrect: true },
        { id: 'c', text: 'Hybrid', isCorrect: false },
        { id: 'd', text: 'All the mentioned', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q7',
      question: "Defining 'Laptop' as a portable computer with a screen and keyboard is an example of:",
      questionAr: "تعريف 'الكمبيوتر المحمول' (Laptop) بأنه كمبيوتر محمول مزود بشاشة ولوحة مفاتيح هو مثال على:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A Fact', isCorrect: false },
        { id: 'b', text: 'A Concept', isCorrect: true },
        { id: 'c', text: 'A Procedure', isCorrect: false },
        { id: 'd', text: 'A Principle', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q8',
      question: "A recipe for baking a cake is best described as a:",
      questionAr: "وصفة كعكة توصف بأنها:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Fact', isCorrect: false },
        { id: 'b', text: 'Concept', isCorrect: false },
        { id: 'c', text: 'Procedure', isCorrect: true },
        { id: 'd', text: 'Principle', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q9',
      question: "Clustering is the most common task in which learning style?",
      questionAr: "التجميع (Clustering) هو المهمة الأكثر شيوعاً في أي نمط تعلم؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Supervised', isCorrect: false },
        { id: 'b', text: 'Unsupervised', isCorrect: true },
        { id: 'c', text: 'Procedural', isCorrect: false },
        { id: 'd', text: 'Conceptual', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q10',
      question: "If a system learns to play chess by getting rewards for winning, this is:",
      questionAr: "إذا تعلم نظام ما لعب الشطرنج من خلال الحصول على مكافآت مقابل الفوز، فهذا هو:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Supervised Learning', isCorrect: false },
        { id: 'b', text: 'Unsupervised Learning', isCorrect: false },
        { id: 'c', text: 'Reinforcement Learning', isCorrect: true },
        { id: 'd', text: 'Fact Learning', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q11',
      question: "Predicting whether a student will pass or fail based on past study hours is:",
      questionAr: "التنبؤ بما إذا كان الطالب سينجح أم يرسب بناءً على ساعات الدراسة السابقة هو:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Classification (Supervised)', isCorrect: true },
        { id: 'b', text: 'Clustering (Unsupervised)', isCorrect: false },
        { id: 'c', text: 'Concept Mining', isCorrect: false },
        { id: 'd', text: 'Regression (Supervised)', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q12',
      question: "In Machine Learning, what is a 'Feature'?",
      questionAr: "في تعلم الآلة، ما هي 'الميزة' (Feature)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The final output/prediction', isCorrect: false },
        { id: 'b', text: 'An individual measurable property of a data point', isCorrect: true },
        { id: 'c', text: 'A bug in the algorithm', isCorrect: false },
        { id: 'd', text: 'The name of the user', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q13',
      question: "Which discipline is considered an 'Umbrella' for techniques like data mining and machine learning?",
      questionAr: "أي تخصص يعتبر 'مظلة' لتقنيات مثل تنقيب البيانات وتعلم الآلة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Statistics', isCorrect: false },
        { id: 'b', text: 'Data Science', isCorrect: true },
        { id: 'c', text: 'Optimization', isCorrect: false },
        { id: 'd', text: 'Visualization', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q14',
      question: "According to the 'Will Data Mining Help Me?' criteria, what must be true about the cost of processing?",
      questionAr: "وفقاً لمعايير 'هل سيساعدني تنقيب البيانات؟'، ما الذي يجب أن يكون صحيحاً بشأن تكلفة المعالجة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It must be shared with the client', isCorrect: false },
        { id: 'b', text: 'It must be less than the likely increase in profit', isCorrect: true },
        { id: 'c', text: 'It should be covered by research grants', isCorrect: false },
        { id: 'd', text: 'Cost is irrelevant', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q15',
      question: "Streaming data and multimedia databases are examples of:",
      questionAr: "تعد بيانات التدفق وقواعد بيانات الوسائط المتعددة أمثلة على:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Relational databases', isCorrect: false },
        { id: 'b', text: 'Transactional repositories', isCorrect: false },
        { id: 'c', text: 'Advanced information repositories', isCorrect: true },
        { id: 'd', text: 'Operational databases', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q16',
      question: "A model that builds relationships from data without predefined classes is using:",
      questionAr: "النموذج الذي يبني علاقات من البيانات بدون فئات محددة مسبقاً يستخدم:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Classification', isCorrect: false },
        { id: 'b', text: 'Procedural learning', isCorrect: false },
        { id: 'c', text: 'Unsupervised learning', isCorrect: true },
        { id: 'd', text: 'Supervised learning', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q17',
      question: "The statement 'All mammals have hearts' is an example of which level?",
      questionAr: "عبارة 'كل الثدييات لها قلوب' هي مثال على أي مستوى؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Fact', isCorrect: false },
        { id: 'b', text: 'Concept', isCorrect: false },
        { id: 'c', text: 'Procedure', isCorrect: false },
        { id: 'd', text: 'Principle', isCorrect: true },
      ],
    },
    {
      id: 'dm-l2-q18',
      question: "Which level of learning describes 'How to perform a calculation'?",
      questionAr: "أي مستوى من مستويات التعلم يصف 'كيفية إجراء عملية حسابية'؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Facts', isCorrect: false },
        { id: 'b', text: 'Concepts', isCorrect: false },
        { id: 'c', text: 'Procedures', isCorrect: true },
        { id: 'd', text: 'Principles', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q19',
      question: "Learning through 'Observation and Instance' to group objects is called:",
      questionAr: "يسمى التعلم من خلال 'الملاحظة والحالة' لتجميع الأشياء بـ:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Fact Learning', isCorrect: false },
        { id: 'b', text: 'Concept Learning', isCorrect: true },
        { id: 'c', text: 'Procedural Learning', isCorrect: false },
        { id: 'd', text: 'Principle Learning', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q20',
      question: "Which of the following is considered 'Atomic' knowledge?",
      questionAr: "أي مما يلي يعتبر معرفة 'ذرية' (Atomic)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Principles', isCorrect: false },
        { id: 'b', text: 'Procedures', isCorrect: false },
        { id: 'c', text: 'Concepts', isCorrect: false },
        { id: 'd', text: 'Facts', isCorrect: true },
      ],
    },
    {
      id: 'dm-l2-q21',
      question: "'If supply exceeds demand, prices fall' is a:",
      questionAr: "'إذا تجاوز العرض الطلب، تنخفض الأسعار' هو:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Fact', isCorrect: false },
        { id: 'b', text: 'Concept', isCorrect: false },
        { id: 'c', text: 'Procedure', isCorrect: false },
        { id: 'd', text: 'Principle', isCorrect: true },
      ],
    },
    {
      id: 'dm-l2-q22',
      question: "Classifying an email as 'Spam' or 'Inbox' based on keywords is an application of:",
      questionAr: "تصنيف البريد الإلكتروني كـ 'مزعج' أو 'وارد' بناءً على الكلمات المفتاحية هو تطبيق لـ:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Fact recognition', isCorrect: false },
        { id: 'b', text: 'Concept Learning', isCorrect: true },
        { id: 'c', text: 'Procedural Automation', isCorrect: false },
        { id: 'd', text: 'Principle Law', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q23',
      question: "[MID] 'Newton's Third Law: Every action has an equal and opposite reaction' belongs to which level?",
      questionAr: "قانون نيوتن الثالث: لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه، ينتمي إلى أي مستوى؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Fact', isCorrect: false },
        { id: 'b', text: 'Concept', isCorrect: false },
        { id: 'c', text: 'Procedure', isCorrect: false },
        { id: 'd', text: 'Principle', isCorrect: true },
      ],
    },
    {
      id: 'dm-l2-q24',
      question: "[MID] A model trained on labeled historical flight data to predict future delays uses:",
      questionAr: "النموذج المدرب على بيانات رحلات تاريخية مصنفة للتنبؤ بالتأخيرات المستقبلية يستخدم:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Unsupervised learning', isCorrect: false },
        { id: 'b', text: 'Supervised learning', isCorrect: true },
        { id: 'c', text: 'Reinforcement learning', isCorrect: false },
        { id: 'd', text: 'No learning', isCorrect: false },
      ],
    },
    {
      id: 'dm-l2-q25',
      question: "[MID] The key difference between a 'Procedure' and a 'Principle' is:",
      questionAr: "الفرق الجوهري بين 'الإجراء' و 'المبدأ' هو:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Procedures are laws; Principles are steps', isCorrect: false },
        { id: 'b', text: 'Procedures are step-by-step actions; Principles are fundamental truths', isCorrect: true },
        { id: 'c', text: 'They are the same thing', isCorrect: false },
        { id: 'd', text: 'Procedures are higher level than Principles', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-l2-w1',
      question: "Define 'Concept Learning' and explain how we use it in daily life.",
      questionAr: "عرف 'تعلم المفاهيم' واشرح كيف نستخدمه في الحياة اليومية.",
      modelAnswer: "Concept Learning is the ability to recognize common features between objects to group them. Daily life: recognizing all types of 'Chairs' as things to sit on, even if they look different.",
      modelAnswerAr: "تعلم المفاهيم هو القدرة على التعرف على الميزات المشتركة بين الكائنات لتجميعها. الحياة اليومية: التعرف على جميع أنواع 'الكراسي' كأشياء للجلوس عليها، حتى لو كانت تبدو مختلفة.",
    },
    {
      id: 'dm-l2-w2',
      question: "Compare Supervised and Unsupervised learning in terms of Data Type and Objective.",
      questionAr: "قارن بين التعلم بالإشراف وبدون إشراف من حيث نوع البيانات والهدف.",
      modelAnswer: "Supervised: Uses labeled data; objective is to predict/map inputs to known outputs. Unsupervised: Uses unlabeled data; objective is to discover hidden patterns/structures.",
      modelAnswerAr: "بالإشراف: يستخدم بيانات مصنفة؛ الهدف هو التنبؤ بالمخرجات المعروفة. بدون إشراف: يستخدم بيانات غير مصنفة؛ الهدف هو اكتشاف الأنماط/الهياكل المخفية.",
    },
    {
      id: 'dm-l2-w3',
      question: "Give a real-world example of a 'Principle' level of knowledge in computer science.",
      questionAr: "أعطِ مثالاً واقعياً لمستوى المعرفة 'المبدأ' (Principle) في علوم الكمبيوتر.",
      modelAnswer: "Example: 'Increasing the complexity of an algorithm increases its execution time (Big O notation)'. It's a general law that applies across different situations.",
      modelAnswerAr: "مثال: 'زيادة تعقيد الخوارزمية يزيد من وقت تنفيذها (ترميز Big O)'. إنه قانون عام ينطبق في مواقف مختلفة.",
    },
    {
      id: 'dm-l2-w4',
      question: "In the context of knowledge levels, what is the difference between a 'Fact' and a 'Principle'?",
      questionAr: "في سياق مستويات المعرفة، ما الفرق بين 'الحقيقة' (Fact) و 'المبدأ' (Principle)؟",
      modelAnswer: "A Fact is a singular, simple truth (e.g., this car is red). A Principle is a general law or fundamental truth that applies to many cases (e.g., Newton's laws of motion).",
      modelAnswerAr: "الحقيقة هي حقيقة مفردة وبسيطة (مثل: هذه السيارة حمراء). المبدأ هو قانون عام أو حقيقة أساسية تنطبق على العديد من الحالات (مثل: قوانين نيوتن للحركة).",
    },
    {
      id: 'dm-l2-w5',
      question: "Explain why 'Procedures' are vital in automated systems like Data Mining.",
      questionAr: "اشرح لماذا تعتبر 'الإجراءات' حيوية في الأنظمة المؤتمتة مثل تنقيب البيانات.",
      modelAnswer: "Procedures provide the step-by-step algorithms needed to process data. Without procedures, a system wouldn't know 'how' to perform tasks like sorting, filtering, or calculating distances.",
      modelAnswerAr: "توفر الإجراءات الخوارزميات خطوة بخطوة اللازمة لمعالجة البيانات. بدون الإجراءات، لن يعرف النظام 'كيفية' أداء مهام مثل الفرز أو التصفية أو حساب المسافات.",
    },
    {
      id: 'dm-l2-w6',
      question: "How does 'Concept Learning' relate to Classification in Machine Learning?",
      questionAr: "كيف يرتبط 'تعلم المفاهيم' بالتصنيف (Classification) في تعلم الآلة؟",
      modelAnswer: "Classification is essentially teaching a machine a 'Concept'. By showing the machine many labeled examples of a class (like 'Spam'), it learns the characteristics (the concept) of that class to categorize new data points.",
      modelAnswerAr: "التصنيف هو في الأساس تعليم الآلة 'مفهوماً'. من خلال عرض العديد من الأمثلة المصنفة لفئة ما (مثل 'البريد المزعج') للآلة، فإنها تتعلم الخصائص (المفهوم) لتلك الفئة لتصنيف نقاط البيانات الجديدة.",
    },
  ],
};
