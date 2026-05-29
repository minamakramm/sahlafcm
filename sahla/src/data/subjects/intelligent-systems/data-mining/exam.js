export const EXAM = {
  subjectId: 'data-mining',
  title: 'Data Mining Comprehensive Exam Bank',
  titleAr: 'بنك أسئلة تنقيب البيانات الشامل',
  timeLimitMinutes: 60,
  duration: 3600,
  mcqMarks: 100,
  writtenMarks: 50,
  passPercentage: 50,
  
  parts: [
    {
      id: 'part-a',
      title: 'Part A: Multiple Choice Questions',
      titleAr: 'الجزء الأول: أسئلة الاختيار من متعدد',
      type: 'mcq'
    },
    {
      id: 'part-b',
      title: 'Part B: Written Analysis',
      titleAr: 'الجزء الثاني: التحليل الكتابي',
      type: 'written'
    }
  ],

  mcq: [
    // --- Official Midterm 2026 Supplement ---
    {
      id: 'dm-m26-q1',
      question: "[Midterm 2026] ___ is a proposed truth which anything proceeds whereas ___ is a condition or natural truth.",
      questionAr: "[ميدتيرم 2026] ___ هو حقيقة مقترحة يسبقها أي شيء بينما ___ هو شرط أو حقيقة طبيعية.",
      answers: [
        { id: 'a', text: 'procedure, fact', isCorrect: false },
        { id: 'b', text: 'concept, principal', isCorrect: false },
        { id: 'c', text: 'fact, procedure', isCorrect: false },
        { id: 'd', text: 'principal, procedure', isCorrect: true },
      ],
    },
    {
      id: 'dm-m26-q2',
      question: "[Midterm 2026] Which of the following is also used as a preprocessing step in the knowledge discovery process?",
      questionAr: "[ميدتيرم 2026] أي مما يلي يُستخدم أيضاً كخطوة معالجة مسبقة في عملية اكتشاف المعرفة؟",
      answers: [
        { id: 'a', text: 'Pattern evaluation', isCorrect: false },
        { id: 'b', text: 'Knowledge presentation', isCorrect: false },
        { id: 'c', text: 'Data mining', isCorrect: false },
        { id: 'd', text: 'None of the mentioned', isCorrect: true },
      ],
    },
    {
      id: 'dm-m26-q3',
      question: "[Midterm 2026] What would be the output of this python line code: counter = s.count('d') (assume s represents this question sentence)",
      questionAr: "[ميدتيرم 2026] ما هو ناتج سطر كود بايثون هذا: counter = s.count('d') (بافتراض أن s تمثل جملة هذا السؤال)",
      answers: [
        { id: 'a', text: '1', isCorrect: false },
        { id: 'b', text: '2', isCorrect: true },
        { id: 'c', text: 'error', isCorrect: false },
        { id: 'd', text: '0', isCorrect: false },
      ],
    },
    {
      id: 'dm-m26-q4',
      question: "[Midterm 2026] For the given dendrogram, how many iterations were performed?",
      questionAr: "[ميدتيرم 2026] للمخطط الشجري المعطى، كم عدد التكرارات التي تم إجراؤها؟",
      answers: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '3', isCorrect: false },
        { id: 'c', text: '2', isCorrect: false },
        { id: 'd', text: 'cannot be determined', isCorrect: true },
      ],
    },
    {
      id: 'dm-m26-q5',
      question: "[Midterm 2026] Compute a merging cost function using d = max(d_DA, d_FA) means we applied......clustering.",
      questionAr: "[ميدتيرم 2026] حساب تكلفة الدمج باستخدام d = max يعني أننا طبقنا تجميع......",
      answers: [
        { id: 'a', text: 'partitioning', isCorrect: false },
        { id: 'b', text: 'average-linkage', isCorrect: false },
        { id: 'c', text: 'single-linkage', isCorrect: false },
        { id: 'd', text: 'complete-linkage', isCorrect: true },
      ],
    },
    {
      id: 'dm-m26-q6',
      question: "[Midterm 2026] A......learning model might be used to predict flight times based on specific parameters such as weather.",
      questionAr: "[ميدتيرم 2026] نموذج تعلم...... قد يُستخدم للتنبؤ بأوقات الرحلات بناءً على معاملات محددة مثل الطقس.",
      answers: [
        { id: 'a', text: 'unsupervised', isCorrect: false },
        { id: 'b', text: 'supervised', isCorrect: true },
        { id: 'c', text: 'Hybrid', isCorrect: false },
        { id: 'd', text: 'All the mentioned', isCorrect: false },
      ],
    },
    {
      id: 'dm-m26-q7',
      question: "[Midterm 2026] To perform K-medoids in python, we can write: kmedoids = KMedoids(n_clusters=k).fit(data)",
      questionAr: "[ميدتيرم 2026] لإجراء K-medoids في بايثون، يمكننا كتابة: kmedoids = KMedoids(n_clusters=k).fit(data)",
      answers: [
        { id: 'a', text: 'True', isCorrect: true },
        { id: 'b', text: 'False', isCorrect: false },
        { id: 'c', text: 'None', isCorrect: false },
        { id: 'd', text: 'Error', isCorrect: false },
      ],
    },
    {
      id: 'dm-m26-q8',
      question: "[Midterm 2026] Sequence of steps in designing a fuzzy logic machine:",
      questionAr: "[ميدتيرم 2026] تسلسل الخطوات في تصميم آلة منطق ضبابي:",
      answers: [
        { id: 'a', text: 'Fuzzification → Rule evaluation → Defuzzification', isCorrect: true },
        { id: 'b', text: 'Rule evaluation → Fuzzification → Defuzzification', isCorrect: false },
        { id: 'c', text: 'Fuzzy Sets → Defuzzification → Rule evaluation', isCorrect: false },
        { id: 'd', text: 'Defuzzification → Rule evaluation → Fuzzification', isCorrect: false },
      ],
    },
    {
      id: 'dm-m26-q9',
      question: "[Midterm 2026] ___ is the process of converting a crisp numeric value to its corresponding degree of membership.",
      questionAr: "[ميدتيرم 2026] ___ هو عملية تحويل قيمة عددية صريحة إلى درجة العضوية المقابلة لها.",
      answers: [
        { id: 'a', text: 'composition', isCorrect: false },
        { id: 'b', text: 'Fuzzification', isCorrect: true },
        { id: 'c', text: 'inference', isCorrect: false },
        { id: 'd', text: 'defuzzification', isCorrect: false },
      ],
    },
    {
      id: 'dm-m26-q10',
      question: "[Midterm 2026] Data mining can be described as the process of......",
      questionAr: "[ميدتيرم 2026] يمكن وصف تنقيب البيانات بأنه عملية......",
      answers: [
        { id: 'a', text: 'identifying patterns in data', isCorrect: true },
        { id: 'b', text: 'representing data', isCorrect: false },
        { id: 'c', text: 'deducing relationships in data', isCorrect: false },
        { id: 'd', text: 'simulating trends in data', isCorrect: false },
      ],
    },

    // --- General Curriculum Pool ---
    {
      id: 'dm-gen-q1',
      question: "Which KDD step involves combining multiple data sources?",
      questionAr: "أي خطوة في KDD تتضمن دمج مصادر بيانات متعددة؟",
      answers: [
        { id: 'a', text: 'Data Cleaning', isCorrect: false },
        { id: 'b', text: 'Data Integration', isCorrect: true },
        { id: 'c', text: 'Data Mining', isCorrect: false },
        { id: 'd', text: 'Pattern Evaluation', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q2',
      question: "Supervised learning differs from unsupervised learning because it requires:",
      questionAr: "يختلف التعلم الخاضع للإشراف عن التعلم غير الخاضع للإشراف لأنه يتطلب:",
      answers: [
        { id: 'a', text: 'Faster computers', isCorrect: false },
        { id: 'b', text: 'Predefined classes / labeled training data', isCorrect: true },
        { id: 'c', text: 'Numerical data only', isCorrect: false },
        { id: 'd', text: 'A huge text database', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q3',
      question: "Which plot type is best for identifying outliers in a dataset distribution?",
      questionAr: "أي نوع من المخططات هو الأفضل لتحديد القيم المتطرفة في توزيع بيانات؟",
      answers: [
        { id: 'a', text: 'Pie Chart', isCorrect: false },
        { id: 'b', text: 'Line Graph', isCorrect: false },
        { id: 'c', text: 'Box Plot', isCorrect: true },
        { id: 'd', text: 'Histogram', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q4',
      question: "In K-Means, when does the algorithm stop iterating?",
      questionAr: "في K-Means، متى تتوقف الخوارزمية عن التكرار؟",
      answers: [
        { id: 'a', text: 'After 100 loops', isCorrect: false },
        { id: 'b', text: 'When centroids move to the origin', isCorrect: false },
        { id: 'c', text: 'When assignments to clusters no longer change', isCorrect: true },
        { id: 'd', text: 'When the user stops the script', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q5',
      question: "Who introduced Fuzzy Logic in 1965?",
      questionAr: "من الذي قدم المنطق الضبابي في عام 1965؟",
      answers: [
        { id: 'a', text: 'Alan Turing', isCorrect: false },
        { id: 'b', text: 'Lotfi Zadeh', isCorrect: true },
        { id: 'c', text: 'John McCarthy', isCorrect: false },
        { id: 'd', text: 'Andrew Ng', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q6',
      question: "Which library is primarily used to generate Dendrograms in Python?",
      questionAr: "أي مكتبة تُستخدم بشكل أساسي لإنشاء الـ Dendrograms في بايثون؟",
      answers: [
        { id: 'a', text: 'Matplotlib', isCorrect: false },
        { id: 'b', text: 'NumPy', isCorrect: false },
        { id: 'c', text: 'SciPy', isCorrect: true },
        { id: 'd', text: 'Pandas', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q7',
      question: "In a Pandas DataFrame, what does df.iloc[0:5] do?",
      questionAr: "في Pandas DataFrame، ماذا تفعل df.iloc[0:5]؟",
      answers: [
        { id: 'a', text: 'Selects first 5 columns', isCorrect: false },
        { id: 'b', text: 'Selects first 5 rows by integer position', isCorrect: true },
        { id: 'c', text: 'Filters rows where index is 5', isCorrect: false },
        { id: 'd', text: 'Deletes 5 rows', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q8',
      question: "What is 'Complete Linkage' in Agglomerative clustering?",
      questionAr: "ما هو 'الربط الكامل' (Complete Linkage) في التجميع التراكمي؟",
      answers: [
        { id: 'a', text: 'Tracing the minimum distance', isCorrect: false },
        { id: 'b', text: 'Taking the maximum distance between elements', isCorrect: true },
        { id: 'c', text: 'Deleting clusters', isCorrect: false },
        { id: 'd', text: 'Averaging distances', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q9',
      question: "What is a major advantage of Hierarchical Clustering over K-Means?",
      questionAr: "ما هي الميزة الرئيسية للتجميع الهرمي على K-Means؟",
      answers: [
        { id: 'a', text: 'It is much faster', isCorrect: false },
        { id: 'b', text: 'It requires knowing K at the start', isCorrect: false },
        { id: 'c', text: 'It provides a great visualization (dendrogram)', isCorrect: true },
        { id: 'd', text: 'It doesn\'t need data scaling', isCorrect: false },
      ],
    },
    {
      id: 'dm-gen-q10',
      question: "Which FIS step uses the 'Centroid Method' to find the final center of gravity?",
      questionAr: "أي خطوة في FIS تستخدم 'طريقة المركز' لإيجاد مركز الثقل النهائي؟",
      answers: [
        { id: 'a', text: 'Fuzzification', isCorrect: false },
        { id: 'b', text: 'Rule Eval', isCorrect: false },
        { id: 'c', text: 'Aggregation', isCorrect: false },
        { id: 'd', text: 'Defuzzification', isCorrect: true },
      ],
    }
  ],

  written: [
    {
      id: 'dm-w-q1',
      question: "Identify the 7 steps of the KDD process. Where does 'Data Mining' fit in?",
      questionAr: "حدد الخطوات السبع لعملية KDD. أين يقع 'تنقيب البيانات'؟",
      modelAnswer: "Cleaning, Integration, Selection, Transformation, Data Mining, Pattern Evaluation, Knowledge Presentation. Data Mining is the 5th core step where intelligent methods extract patterns.",
      modelAnswerAr: "التنظيف، التكامل، الاختيار، التحويل، تنقيب البيانات، تقييم الأنماط، عرض المعرفة. تنقيب البيانات هو الخطوة الخامسة.",
    },
    {
      id: 'dm-w-q2',
      question: "Differentiate between Supervised and Unsupervised learning, providing one example for each.",
      questionAr: "فرق بين التعلم الخاضع للإشراف وغير الخاضع للإشراف، مع تقديم مثال لكل منهما.",
      modelAnswer: "Supervised requires labeled data training (e.g. disease diagnosis). Unsupervised groups unlabeled data (e.g. market segmentation).",
      modelAnswerAr: "يتطلب التعلم الخاضع للإشراف بيانات مصنفة (مثل تشخيص الأمراض). يجمع التعلم غير الخاضع للإشراف البيانات غير المصنفة (مثل تقسيم السوق).",
    },
    {
      id: 'dm-w-q3',
      question: "Compare K-Means and K-Medoids. Identify one advantage and one disadvantage of K-Medoids.",
      questionAr: "قارن بين K-Means و K-Medoids. حدد ميزة واحدة وعيباً واحداً لـ K-Medoids.",
      modelAnswer: "K-Means uses centroids, K-Medoids uses actual points. Adv: Robust to outliers. Disadv: High computational cost.",
      modelAnswerAr: "K-Means تستخدم المتوسطات، K-Medoids تستخدم نقاطاً حقيقية. الميزة: قوية ضد القيم المتطرفة. العيب: تكلفة حسابية عالية.",
    },
    {
      id: 'dm-w-q4',
      question: "Define Single Linkage and Complete Linkage in the context of Hierarchical Clustering.",
      questionAr: "عرف الربط الأحادي والربط الكامل في سياق التجميع الهرمي.",
      modelAnswer: "Single Link (MIN): Smallest distance between element pairs. Complete Link (MAX): Largest distance between element pairs.",
      modelAnswerAr: "الربط الأحادي (MIN): أصغر مسافة بين أزواج العناصر. الربط الكامل (MAX): أكبر مسافة بين أزواج العناصر.",
    },
    {
      id: 'dm-w-q5',
      question: "A student proposes using Crisp Boolean Logic for an Autonomous Braking system. Why is Fuzzy Logic vastly superior?",
      questionAr: "يقترح طالب استخدام المنطق البوليني الصريح لنظام فرملة ذاتي. لماذا يعد المنطق الضبابي متفوقاً تماماً؟",
      modelAnswer: "Crisp logic creates harsh sudden shifts. Fuzzy logic allows varying degrees of braking based on overlapping combinations, creating smooth, intelligent control.",
      modelAnswerAr: "يخلق المنطق الصريح تحولات مفاجئة قاسية. يسمح المنطق الضبابي بدرجات متفاوتة من الكبح بناءً على مجموعات متداخلة، مما يخلق تحكماً سلساً وذكياً.",
    },
    {
      id: 'dm-w-q6',
      question: "Why is Data Scaling/Standardization an essential step before performing clustering analysis?",
      questionAr: "لماذا يعد تقييس/توحيد البيانات خطوة أساسية قبل إجراء تحليل التجميع؟",
      modelAnswer: "Distance-based algorithms are sensitive to units. Features with larger ranges would dominate factor calculation if not scaled.",
      modelAnswerAr: "الخوارزميات القائمة على المسافة حساسة للوحدات. الميزات ذات النطاقات الأكبر ستهيمن على حساب العوامل إذا لم يتم تقييسها.",
    }
  ]
};
