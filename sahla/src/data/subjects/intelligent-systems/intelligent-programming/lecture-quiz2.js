export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 'quiz2',
  title: 'Quiz 2 — Intelligent Agents & Movie Project',
  titleAr: 'اختبار 2 — الوكلاء الأذكياء ومشروع الأفلام',

  // ── TAB 1 — Quick Review ──────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Intelligent Agents Review</h2>
<p>An <strong>agent</strong> perceives its environment through <strong>sensors</strong> and acts via <strong>actuators</strong>. Key features include being <strong>Reactive</strong> (sense-respond), <strong>Pro-active</strong> (initiative), and <strong>Social</strong> (collaboration).</p>
<ul>
  <li><strong>Goal-based:</strong> Focus on reaching a target.</li>
  <li><strong>Utility-based:</strong> Optimize for a "happiness" score.</li>
  <li><strong>Learning:</strong> Use feedback loops to improve performance.</li>
</ul>

<h2>🔹 Movie Recommendation Project Review</h2>
<p>The project follows a standard ML workflow: <strong>Load Data → Preprocess → Split → Train → Evaluate</strong>.</p>
<table class="styled-table">
  <thead><tr><th>Tool</th><th>Purpose</th></tr></thead>
  <tbody>
    <tr><td><strong>Pandas</strong></td><td>Loading CSVs, merging datasets (ratings + movies).</td></tr>
    <tr><td><strong>GaussianNB</strong></td><td>Naive Bayes classifier used for predicting "like/dislike".</td></tr>
    <tr><td><strong>Streamlit</strong></td><td>Quickly building interactive web interfaces for data projects.</td></tr>
  </tbody>
</table>

<h2>🔹 Key Implementation Details</h2>
<ul>
  <li><strong>Label Encoding:</strong> Using <code>cat.codes</code> to turn text genres into numbers.</li>
  <li><strong>Feedback Loops:</strong> Essential for agents to learn from user actions (like "marking as important").</li>
  <li><strong>Evaluation Metrics:</strong> Accuracy, Precision, and Recall help measure if the system is actually useful.</li>
</ul>`,
        bodyAr: `<h2>🔹 مراجعة الوكلاء الأذكياء</h2>
<p>الوكيل يدرك بيئته من خلال المستشعرات ويتصرف عبر المشغلات. تشمل الخصائص الرئيسية كونه تفاعليًا (استجابة فورية)، مبادرًا (أخذ المبادرة)، واجتماعيًا (التعاون).</p>

<h2>🔹 مراجعة مشروع توصية الأفلام</h2>
<p>يتبع المشروع سير عمل التعلم الآلي القياسي: تحميل البيانات ← المعالجة المسبقة ← التقسيم ← التدريب ← التقييم.</p>
<table class="styled-table">
  <thead><tr><th>الأداة</th><th>الغرض</th></tr></thead>
  <tbody>
    <tr><td><strong>Pandas</strong></td><td>تحميل ملفات CSV ودمج البيانات.</td></tr>
    <tr><td><strong>GaussianNB</strong></td><td>خوارزمية Naive Bayes للتنبؤ بالتفضيلات.</td></tr>
    <tr><td><strong>Streamlit</strong></td><td>بناء واجهات ويب تفاعلية بسهولة.</td></tr>
  </tbody>
</table>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Intelligent agents are autonomous, goal-driven, and learn from feedback.",
      "Multi-Agent Systems (MAS) solve complex problems through teamwork and protocols.",
      "Building agents requires solving for Competence (logic) and Trust (user comfort).",
      "Movie recommendation project uses Pandas for data manipulation and Scikit-Learn for ML.",
      "Naive Bayes calculates probabilities to predict if a user will like a movie based on genres.",
      "Streamlit is the library of choice for building data science web apps rapidly.",
    ],
    pointsAr: [
      "الوكلاء الأذكياء مستقلون، يسعون لتحقيق الأهداف، ويتعلمون من الملاحظات.",
      "أنظمة الوكلاء المتعددين (MAS) تحل المشكلات المعقدة من خلال العمل الجماعي.",
      "بناء الوكلاء يتطلب حل مشكلتي الكفاءة (المنطق) والثقة (راحة المستخدم).",
      "مشروع توصية الأفلام يستخدم Pandas لمعالجة البيانات و Scikit-Learn للتعلم الآلي.",
      "تستخدم خوارزمية Naive Bayes للاحتمالات للتنبؤ بتفضيلات الأفلام.",
    ],
  },

  // ── TAB 3 — Combined Quiz ────────────────────────────────────────
 mcq: [
    {
      id: "ip-q2-01",
      question: "Which feature describes an agent that takes initiative rather than just reacting to events?",
      questionAr: "أي خاصية تصف الوكيل الذي يتخذ المبادرة بدلاً من مجرد التفاعل مع الأحداث؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Reactive", isCorrect: false },
        { id: "b", text: "Pro-active", isCorrect: true },
        { id: "c", text: "Social", isCorrect: false },
        { id: "d", text: "Passive", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-02",
      question: "What is the primary function of an 'Actuator' in an intelligent agent?",
      questionAr: "ما هي الوظيفة الأساسية لـ 'المشغل' (Actuator) في الوكيل الذكي؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "To perceive the internal state and hardware temperature of the system.", isCorrect: false },
        { id: "b", text: "To execute actions and changes upon the environment based on the agent's decisions.", isCorrect: true },
        { id: "c", text: "To store the long-term memory and history of all user interactions.", isCorrect: false },
        { id: "d", text: "To calculate the probability of the goal being reached in the next step.", isCorrect: false },
      ],
    },
    {
      // FIX: balanced answer lengths — correct answer was too short vs long distractors
      id: "ip-q2-03",
      question: "In the Movie Recommendation project, why is the 'merge' function used?",
      questionAr: "في مشروع توصية الأفلام، لماذا تُستخدم دالة 'merge'؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "To combine user ratings with movie metadata (titles and genres) into a single dataframe linked by movieId.", isCorrect: true },
        { id: "b", text: "To remove duplicate rows from both CSV files so that each movie appears only once in the final training set.", isCorrect: false },
        { id: "c", text: "To split the raw data into separate training and testing sets before passing them to the GaussianNB classifier.", isCorrect: false },
        { id: "d", text: "To apply label encoding to the genre column so the machine learning model can process the text values numerically.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-04",
      question: "Which Python library is used to create the interactive web interface for the recommendation system?",
      questionAr: "أي مكتبة بايثون تُستخدم لإنشاء واجهة الويب التفاعلية لنظام التوصية؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Django", isCorrect: false },
        { id: "b", text: "Streamlit", isCorrect: true },
        { id: "c", text: "Flask", isCorrect: false },
        { id: "d", text: "Matplotlib", isCorrect: false },
      ],
    },
    {
      // FIX: replaced absurd distractors (hard drive, faster processor) with plausible ML alternatives
      id: "ip-q2-05",
      question: "A Learning Agent improves its performance by using a:",
      questionAr: "يحسن الوكيل المتعلم أداءه باستخدام:",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Feedback loop where user actions (e.g., marking an email as important) are used as training data to adjust the model.", isCorrect: true },
        { id: "b", text: "Pre-defined rule set that is manually updated by the developer each time new types of input are encountered.", isCorrect: false },
        { id: "c", text: "Larger labeled dataset that is collected once before deployment and never changed after the model goes live.", isCorrect: false },
        { id: "d", text: "Reactive reflex mechanism that maps every known input directly to a fixed output without any internal state.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-06",
      question: "What does the 'cat.codes' function do in the data preprocessing step?",
      questionAr: "ماذا تفعل دالة 'cat.codes' في خطوة المعالجة المسبقة للبيانات؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It sorts the movies into alphabetical order based on their titles.", isCorrect: false },
        { id: "b", text: "It converts categorical text data (like genres) into numerical codes for the ML model.", isCorrect: true },
        { id: "c", text: "It identifies and removes all 'NaN' or missing values from the dataset.", isCorrect: false },
        { id: "d", text: "It creates a visual chart of the most popular movie categories.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-07",
      question: "Which of these algorithms is used as the core classifier in the Movie Recommendation project?",
      questionAr: "أي من هذه الخوارزميات تُستخدم كمصنف أساسي في مشروع توصية الأفلام؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "K-Means Clustering", isCorrect: false },
        { id: "b", text: "Naive Bayes (GaussianNB)", isCorrect: true },
        { id: "c", text: "Linear Regression", isCorrect: false },
        { id: "d", text: "Genetic Algorithm", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-08",
      question: "What is the two-fold problem of building an intelligent agent mentioned in the lectures?",
      questionAr: "ما هي المشكلة المزدوجة لبناء وكيل ذكي المذكورة في المحاضرات؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Speed and Memory: making the agent fast enough with low RAM.", isCorrect: false },
        { id: "b", text: "Competence and Trust: building knowledge while ensuring user comfort.", isCorrect: true },
        { id: "c", text: "Sensors and Actuators: coordinating inputs and outputs perfectly.", isCorrect: false },
        { id: "d", text: "Logic and Data: creating the rules and gathering the dataset.", isCorrect: false },
      ],
    },
    {
      // FIX: replaced duplicate of Q01 (reactive behavior) with a new concept — PEAS framework
      id: "ip-q2-09",
      question: "In the PEAS framework, which component defines the criteria used to judge how well an agent is performing?",
      questionAr: "في إطار PEAS، أي مكون يحدد المعايير المستخدمة للحكم على مدى جودة أداء الوكيل؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Actuators — the mechanisms the agent uses to apply its decisions to the external environment.", isCorrect: false },
        { id: "b", text: "Performance Measure — the standard used to evaluate the agent's behavior and determine whether it is succeeding at its task.", isCorrect: true },
        { id: "c", text: "Sensors — the input interfaces that collect raw data from the environment before any decision is made.", isCorrect: false },
        { id: "d", text: "Environment — the external world the agent operates in, including all obstacles, users, and data sources.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-10",
      question: "The 'random_state' parameter in train_test_split is used to:",
      questionAr: "يُستخدم معامل 'random_state' في train_test_split لـ:",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Ensure that the training and testing split is reproducible and consistent across different runs of the code.", isCorrect: true },
        { id: "b", text: "Increase the prediction accuracy of the GaussianNB model significantly by optimizing the internal probabilities.", isCorrect: false },
        { id: "c", text: "Randomly shuffle the columns of the merged dataframe before training to ensure the model doesn't overfit.", isCorrect: false },
        { id: "d", text: "Select a fixed number of 42 random movies to display on the Streamlit dashboard for initial user testing.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-11",
      question: "What is a 'Mobile Agent' as defined in the intelligent agent types?",
      questionAr: "ما هو 'الوكيل المتنقل' (Mobile Agent) كما هو مُعرّف في أنواع الوكلاء؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "An agent that is designed specifically to run on mobile devices like smartphones and tablets using Android or iOS.", isCorrect: false },
        { id: "b", text: "A software agent that has the capability to migrate from one computer node to another within a network to perform tasks.", isCorrect: true },
        { id: "c", text: "An agent that uses GPS sensors to track the physical location of the user and provide location-based recommendations.", isCorrect: false },
        { id: "d", text: "An agent that can physically move using mechanical actuators and wheels in a robotics environment.", isCorrect: false },
      ],
    },
    {
      // FIX: balanced answer lengths — correct answer B was visibly longer and more detailed than the others
      id: "ip-q2-12",
      question: "In a Multi-Agent System (MAS), why is 'Social behavior' considered a key feature?",
      questionAr: "في نظام الوكلاء المتعددين (MAS)، لماذا يعتبر 'السلوك الاجتماعي' ميزة أساسية؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It allows agents to post status updates to external platforms so that human operators can monitor the system remotely.", isCorrect: false },
        { id: "b", text: "It enables agents to communicate and coordinate their actions using agreed-upon protocols to achieve shared goals efficiently.", isCorrect: true },
        { id: "c", text: "It gives each agent the ability to recognize human emotions using computer vision so it can adapt its responses accordingly.", isCorrect: false },
        { id: "d", text: "It reduces computation costs by offloading parts of the agent's decision logic to the user's local hardware components.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-13",
      question: "Which component of an agent is responsible for receiving signals from the environment?",
      questionAr: "أي مكون في الوكيل مسؤول عن استقبال الإشارات من البيئة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Actuators: which are the mechanical parts that allow the agent to perform physical movements or changes.", isCorrect: false },
        { id: "b", text: "Sensors: which act as the input interface that perceives data from the external environment for processing.", isCorrect: true },
        { id: "c", text: "Logic Gates: which process the incoming binary signals to make immediate reactive decisions.", isCorrect: false },
        { id: "d", text: "Memory Buffers: which store the incoming signals temporarily before they are processed by the ML model.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-14",
      question: "The 'Naive' part of the Naive Bayes algorithm refers to the assumption that:",
      questionAr: "الجزء 'النايف' (Naive) في خوارزمية نايف بيز يشير إلى افتراض أن:",
      difficulty: "hard",
      answers: [
        { id: "a", text: "The dataset is small enough to be processed by a simple computer without needing a GPU or advanced hardware.", isCorrect: false },
        { id: "b", text: "The features (e.g., different movie genres) are independent of each other, which simplifies the probability calculations.", isCorrect: true },
        { id: "c", text: "The user will always give honest and accurate ratings for every movie they watch in the system.", isCorrect: false },
        { id: "d", text: "The algorithm will always find the most accurate prediction in the first attempt without needing any training epochs.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-15",
      question: "What does the 'test_size=0.3' parameter in train_test_split signify?",
      questionAr: "ماذا يعني معامل 'test_size=0.3' في train_test_split؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "The model will only achieve a maximum of 30% accuracy during the initial testing phase of the development.", isCorrect: false },
        { id: "b", text: "30% of the original dataset will be reserved for testing the model, while the remaining 70% will be used for training.", isCorrect: true },
        { id: "c", text: "The model will run 30 separate tests to ensure the results are statistically significant and free of errors.", isCorrect: false },
        { id: "d", text: "The dataset will be compressed by 30% before being sent to the GaussianNB classifier to save memory.", isCorrect: false },
      ],
    },
    {
      // FIX: removed jargon about "reruns" — reframed around what the lecture actually teaches
      id: "ip-q2-16",
      question: "How does 'st.button' work in a Streamlit application?",
      questionAr: "كيف يعمل 'st.button' في تطبيق Streamlit؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It creates a permanent link to an external website where the user can access additional data sources.", isCorrect: false },
        { id: "b", text: "It renders a clickable button; the code inside the 'if st.button(...)' block only runs when the user clicks it.", isCorrect: true },
        { id: "c", text: "It automatically saves the current output of the application to a local file every time it is rendered on screen.", isCorrect: false },
        { id: "d", text: "It switches the visual theme of the Streamlit interface and reloads all widgets with updated styling.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-17",
      question: "In evaluation metrics, what is 'Recall' particularly concerned with?",
      questionAr: "في مقاييس التقييم، بماذا يهتم 'الاستدعاء' (Recall) بشكل خاص؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "The total time the model takes to process the entire dataset from the start of training to final prediction.", isCorrect: false },
        { id: "b", text: "The ability of the model to find all the positive cases (e.g., all the movies the user actually liked) in the dataset.", isCorrect: true },
        { id: "c", text: "The percentage of positive predictions that were actually correct and matched the user's real preferences.", isCorrect: false },
        { id: "d", text: "The amount of memory the model requires to store its internal weight vectors during the testing phase.", isCorrect: false },
      ],
    },
    {
      // FIX: replaced df.head() vs df.info() (not in lectures) with predict_proba() usage — taught in Lecture 9
      id: "ip-q2-18",
      question: "Why do we use predict_proba() instead of predict() when building the movie recommendation list?",
      questionAr: "لماذا نستخدم predict_proba() بدلاً من predict() عند بناء قائمة توصيات الأفلام؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Because predict() requires the full training set as input, while predict_proba() works on any new unseen data.", isCorrect: false },
        { id: "b", text: "Because predict_proba() returns a continuous probability score we can sort by, allowing us to rank all movies from most to least likely to be liked.", isCorrect: true },
        { id: "c", text: "Because predict() only works with the GaussianNB model during the training phase and cannot be called after the model is saved.", isCorrect: false },
        { id: "d", text: "Because predict_proba() is faster to compute and consumes less memory than predict() when applied to large movie datasets.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-19",
      question: "When building an agent, what does solving for 'Trust' involve?",
      questionAr: "عند بناء وكيل، ماذا يتضمن حل مشكلة 'الثقة'؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Ensuring the agent has a high enough processing speed to handle large amounts of data without crashing or slowing down.", isCorrect: false },
        { id: "b", text: "Guaranteeing user comfort and protection while delegating tasks, so the user feels safe letting the agent act on their behalf.", isCorrect: true },
        { id: "c", text: "Creating a backup system that automatically takes over if the primary agent fails to reach its goal within the time limit.", isCorrect: false },
        { id: "d", text: "Verifying that the agent's source code is licensed under an open-source agreement that allows for commercial redistribution.", isCorrect: false },
      ],
    },
    {
      id: "ip-q2-20",
      question: "Which behavior is shown when an agent plans a route to avoid a traffic jam it anticipates in the future?",
      questionAr: "أي سلوك يظهر عندما يخطط وكيل لمسار لتجنب ازدحام مروري يتوقعه في المستقبل؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Reactive behavior: because it is responding to the current state of the sensors and the road conditions.", isCorrect: false },
        { id: "b", text: "Pro-active behavior: because it is taking initiative and planning ahead to achieve its goal optimally.", isCorrect: true },
        { id: "c", text: "Social behavior: because it must communicate with other cars to determine where the traffic jam is located.", isCorrect: false },
        { id: "d", text: "Passive behavior: because it is only following the instructions provided by the user in the initial destination input.", isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: "ip-q2-w1",
      question: "Describe the three main layers of an Intelligent Email Sorting Agent architecture.",
      questionAr: "صف الطبقات الثلاث الرئيسية لهيكلية وكيل فرز البريد الإلكتروني الذكي.",
      modelAnswer: "1) Input Layer: Email subject/sender/body. 2) Processing Layer: Spam filter, classifier, priority scorer. 3) Output Layer: Tagging/moving emails.",
      modelAnswerAr: "1) طبقة المدخلات: الموضوع/المرسل/النص. 2) طبقة المعالجة: تصفية السبام، المصنف، محدد الأولويات. 3) طبقة المخرجات: وسم أو نقل الرسائل.",
    },
    {
      id: "ip-q2-w2",
      question: "Explain how the lambda function in the movie project converts ratings into a binary classification.",
      questionAr: "اشرح كيف تقوم دالة lambda في مشروع الأفلام بتحويل التقييمات إلى تصنيف ثنائي.",
      modelAnswer: "It applies a threshold (e.g., 4.0) to the rating column, assigning '1' (liked) if the rating is >= 4.0, and '0' (disliked) otherwise.",
      modelAnswerAr: "تقوم بتطبيق حد (مثلاً 4.0) على عمود التقييمات، حيث تمنح القيمة '1' (أعجبني) إذا كان التقييم >= 4.0، والقيمة '0' (لم يعجبني) خلاف ذلك.",
    },
  ],
};
