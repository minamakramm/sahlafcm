export const EXAM = {
  subjectId: 'machine-learning',
  title: 'Machine Learning Final Assessment',
  titleAr: 'التقييم الشامل والنهائي - تعلم الآلة',
  timeLimitMinutes: 120,
  duration: 7200,
  mcqMarks: 100,
  writtenMarks: 50,
  passPercentage: 50,

  parts: [
    {
      title: 'Analytical Scenarios & Lifecycle',
      titleAr: 'السيناريوهات التحليلية ودورة حياة النموذج',
      description: 'Understanding validation, metrics, parameters, and generalization.',
      descriptionAr: 'معرفة التحقق، المقاييس، الخصائص، وتعميم النموذج.'
    },
    {
      title: 'Architectural Implementations',
      titleAr: 'التطبيقات الهيكلية الأساسية',
      description: 'Algorithm mechanics for K-Means, Perceptrons, and Linear variants.',
      descriptionAr: 'هيكلة آليات K-Means، خوارزميات بيرسيبترون، والمتغيرات الخطية.'
    }
  ],

  mcq: [
    {
      id: 'ml-exam-q1',
      question: "According to the ML Workflow, what is the 'Validation Data' explicitly used for during training?",
      questionAr: "بالرجوع لخوارزميات وسير عمل نماذج تعلم الآلة الفعّال، فيما تُستخدم تحديداً وبوضوح بيانات الـ(Validation التحقق)؟",
      answers: [
        { id: 'a', text: "To act as the final unbiased benchmark test purely natively", isCorrect: false },
        { id: 'b', text: "To dynamically monitor performance, tune hyperparameters, and trigger early stopping if loss plateaus natively", isCorrect: true },
        { id: 'c', text: "To permanently increase the number of training features dynamically locally", isCorrect: false },
        { id: 'd', text: "To replace the Confusion Matrix inherently", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q2',
      question: "In Regularization, the cost function adds a mathematical penalty term (C × R(f)). What does R(f) strictly penalize?",
      questionAr: "عند إضافة عوامل التنظيم والحصر، يتم استخدام حد العقوبة لدالة التكلفة وهو الـ( C × R(f) ). علامَ يُعاقب هذا الحد الحتمي رياضياً؟",
      answers: [
        { id: 'a', text: "Small learning rates natively", isCorrect: false },
        { id: 'b', text: "Large weights/parameters, encouraging much simpler models inherently to prevent overfitting", isCorrect: true },
        { id: 'c', text: "The amount of data points available natively globally", isCorrect: false },
        { id: 'd', text: "The absolute size of the test set intrinsically", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q3',
      question: "A model suffers from high Training Error (E_train) and high Test Error (E_test). This model is visibly:",
      questionAr: "نموذج يُعاني من أخطاء في المخرجات ضمن مرحلة التدريب وكذلك أخطاء شاسعة من ضمن مرحلة الاختبار النهائية، مما يميزه بانه:",
      answers: [
        { id: 'a', text: "Overfitting significantly", isCorrect: false },
        { id: 'b', text: "Converging natively to local minima specifically", isCorrect: false },
        { id: 'c', text: "Underfitting profoundly (too simple) natively", isCorrect: true },
        { id: 'd', text: "Failing due to over-regularization explicitly scaling", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q4',
      question: "In evaluation metrics, 'Macro Averaging' of Precision calculates:",
      questionAr: "في مقاييس التقييم، معيار التقارب المسمى (المتوسط الكلي - Macro Averaging) الخاصة بالدقة(Precision) يقوم فعلياً بحساب:",
      answers: [
        { id: 'a', text: "The global sum of all TPs divided by all TPs+FPs logically", isCorrect: false },
        { id: 'b', text: "The independent Precision of each individual class first, then computes their simple unweighted mathematical average", isCorrect: true },
        { id: 'c', text: "The pure harmonic mean exclusively native logically", isCorrect: false },
        { id: 'd', text: "The standard deviation of errors globally inherently", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q5',
      question: "Why is K-Fold Cross Validation overwhelmingly superior to a single Train/Validation split?",
      questionAr: "لماذا يتفوق نظام التقييم الكودي(K-Fold) بطبيعة الحال على نظام شق وحيد للتدريب/ والتحقق؟",
      answers: [
        { id: 'a', text: "It requires less mathematical processing natively inherently", isCorrect: false },
        { id: 'b', text: "It strictly utilizes the data more efficiently by rotating the validation fold K times, ensuring every single point is validated against exactly once", isCorrect: true },
        { id: 'c', text: "It bypasses the need for testing data globally entirely explicitly", isCorrect: false },
        { id: 'd', text: "It drops the validation phase randomly explicitly identically", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q6',
      question: "Which dataset partition is explicitly used to tune 'K' parameters to evaluate overfitting without bias?",
      questionAr: "أيُ جزء مقتطع من البيانات يُستخدم جهارةً لوزن عوامل وضبط مدخل الـ K لتقييم الموائمة الزائدة بلا انحياز؟",
      answers: [
        { id: 'a', text: "Testing Set", isCorrect: false },
        { id: 'b', text: "Training Set", isCorrect: false },
        { id: 'c', text: "Database core", isCorrect: false },
        { id: 'd', text: "Validation Set", isCorrect: true }
      ]
    },
    {
      id: 'ml-exam-q7',
      question: "If your KNN implementation skips feature scaling, what is the most likely catastrophe?",
      questionAr: "إذا أهمل نظام خوارزمية (KNN) تماماً تحديد أهداف تحجيم السمات والميزات(Scaling)، فما هي أكثر الحتميات كارثية قد تواجه النموذج؟",
      answers: [
        { id: 'a', text: "Infinite loops", isCorrect: false },
        { id: 'b', text: "Variables with naturally high coordinate values will numerically overpower smaller values, entirely dictating the classification logic blindly", isCorrect: true },
        { id: 'c', text: "The mathematical inverse Matrix function will fail", isCorrect: false },
        { id: 'd', text: "Classification turns into unsupervised regression natively", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q8',
      question: "Accuracy equals:",
      questionAr: "حساب معدل الدقة والصحة يعادل:",
      answers: [
        { id: 'a', text: "(TP + FP) / Total", isCorrect: false },
        { id: 'b', text: "(TP + TN) / Total", isCorrect: true },
        { id: 'c', text: "FN / Total", isCorrect: false },
        { id: 'd', text: "TN / TP", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q9',
      question: "A False Negative (Type II Error) technically occurs precisely when:",
      questionAr: "السلبية الخاطئة (خطأ من النوع الثاني) تقع تقيناً في حالة واحدة، وهي حينما:",
      answers: [
        { id: 'a', text: "The model guesses Class 0, but the data is truly Class 1 natively explicitly", isCorrect: true },
        { id: 'b', text: "The model guesses Class 1, but the data is truly Class 0 inherently", isCorrect: false },
        { id: 'c', text: "The model divides by zero mathematically scaling inherently", isCorrect: false },
        { id: 'd', text: "The K parameters loop infinitely logically inherently", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q10',
      question: "KNN is widely classified theoretically as a 'Lazy Learner'. Why?",
      questionAr: "خوارزمية(KNN) مُصنفة على طابع نطاق واسع في إطار المنظور الميداني باعتبارها 'خوارزمية تعلم كسولة'. ما السبب؟",
      answers: [
        { id: 'a', text: "It runs slowly internally globally", isCorrect: false },
        { id: 'b', text: "It does absolutely no explicit model building during training; it strictly memorizes the data logically natively", isCorrect: true },
        { id: 'c', text: "It drops data randomly globally entirely natively", isCorrect: false },
        { id: 'd', text: "It freezes parameters deliberately inherently scaled natively", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q11',
      question: "K-Means belongs explicitly to which sub-class of Machine Learning?",
      questionAr: "خوارزمية التقسيم (K-Means) تصنف صراحةً تحت أياً من المرجعيات وفئات تعلم الآلة الفرعية؟",
      answers: [
        { id: 'a', text: "Reinforcement Learning with active Feedback", isCorrect: false },
        { id: 'b', text: "Supervised Deep Neural processing natively", isCorrect: false },
        { id: 'c', text: "Unsupervised Clustering via distances", isCorrect: true },
        { id: 'd', text: "Predictive Bayesian mapping explicitly", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q12',
      question: "Which initialization routine stops K-Means from brutally failing due to bad random seed starting clusters?",
      questionAr: "أي عملية من خوارزميات التعيين التي تفادى حدوث فشل عنيف لـ(K-Means) بسبب تقسيم وبدء المواقع للمجموعات بشكل عشوائي كلي؟",
      answers: [
        { id: 'a', text: "G-Matrix init", isCorrect: false },
        { id: 'b', text: "K-Means++ initialization logic via probabilistic spread", isCorrect: true },
        { id: 'c', text: "Running K=1 natively", isCorrect: false },
        { id: 'd', text: "Manhattan initialization logic inherently", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q13',
      question: "For clustering structures forming complex interlocking 'crescent moons', K-Means will:",
      questionAr: "عند محاولة تشكيل ورصف مجموعات لعناصر تأخذ شكل هياكل معقدة (أهلة قمرية متداخلة)، فإن معيار خوارزمية (K-Means) بالتأكيد سيقوم بـ:",
      answers: [
        { id: 'a', text: "Draw Voronoi linear straight line bounds, splitting and ruining the crescents blindly", isCorrect: true },
        { id: 'b', text: "Perfectly morph into matching the crescent contours mapping", isCorrect: false },
        { id: 'c', text: "Refuse entirely to run due to Gaussian faults", isCorrect: false },
        { id: 'd', text: "Switch dynamically into DBSCAN processing mode natively", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q14',
      question: "To automatically discover the correct 'K' geometrically dynamically, which algorithmic variant explicitly maps Gaussian Anderson-Darling tests?",
      questionAr: "من أجل الاستنباط والاكتشاف لعدد المجموعات 'K' تلقائياً وهندسياً، أية تقنية تفاصيلية خوارزمية تعتمد دالة التحقق والفحص الإحصائي لـ (غاوص) أندرسون؟",
      answers: [
        { id: 'a', text: "Ridge-Means natively", isCorrect: false },
        { id: 'b', text: "DBSCAN internally strictly globally", isCorrect: false },
        { id: 'c', text: "G-Means implicitly intelligently logically scaling intrinsically", isCorrect: true },
        { id: 'd', text: "Hierarchical clustering completely", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q15',
      question: "The Davies-Bouldin internal metric strictly evaluates clusters by calculating the ratio between:",
      questionAr: "المؤشرات الخاصة بـ (Davies-Bouldin Index) تقيم تماسك وتقارب وتباعد المجموعات بتقييم نسب الفروق الخاصة بـ:",
      answers: [
        { id: 'a', text: "True Positives and False Negatives natively globally purely", isCorrect: false },
        { id: 'b', text: "Intra-cluster tightness (variance) and Inter-cluster separation distance logically inherently", isCorrect: true },
        { id: 'c', text: "The initial seeds and the final centroids entirely mapping locally", isCorrect: false },
        { id: 'd', text: "The learning rate and momentum globally scaling exclusively", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q16',
      question: "The Normal Equation avoids Gradient Descent entirely by:",
      questionAr: "دالة ومعادلات التنظيم الخطي (Normal Equation) تتجاوز كلياً وحتمياً وتتعدى وتير العمليات بـ (النزول المتدرج) عبر:",
      answers: [
        { id: 'a', text: "Simulating purely random lines continuously over epochs calculating MSE natively", isCorrect: false },
        { id: 'b', text: "Directly computing the exact mathematical inverse via θ = (XᵀX)⁻¹Xᵀy immediately", isCorrect: true },
        { id: 'c', text: "Setting the learning rate alpha to extreme maximums theoretically", isCorrect: false },
        { id: 'd', text: "Assuming data is natively classification logic primarily", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q17',
      question: "A significantly oversized Learning Rate (α) in Gradient Descent inherently causes the parameter trajectory to:",
      questionAr: "معدل تعليم (Learning Rate α) متضخم جداً واكبر من اللازم، سيسبب كحتمية مؤكدة لدالة مسار المعامل في عملية الانحدار المتدرج أن تكون:",
      answers: [
        { id: 'a', text: "Crawl incredibly slowly stalling out at arbitrary local spots randomly", isCorrect: false },
        { id: 'b', text: "Violently ricochet back and forth up the convex bowl diverging toward pure mathematical infinity natively", isCorrect: true },
        { id: 'c', text: "Slide directly into the matrix core accurately immediately", isCorrect: false },
        { id: 'd', text: "Automatically flip parameters natively scaling logic directly", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q18',
      question: "Lasso Regularization differs dramatically from standard Ridge L2 by:",
      questionAr: "يختلف نظام التنظيم (Lasso Regularization L1) بشكل جذري وحاد وفارع عن معايير تنظيم وضبط (Ridge L2) بكونه:",
      answers: [
        { id: 'a', text: "Zeroing out actual coefficients via L1 math, effectively acting natively as a harsh feature selection filter", isCorrect: true },
        { id: 'b', text: "Preventing matrices from inverting over limits fully causing crashes", isCorrect: false },
        { id: 'c', text: "Only permitting integers scaling ranges logically exclusively", isCorrect: false },
        { id: 'd', text: "Doubling total weights uniformly inherently", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q19',
      question: "If your California Housing regression dataset has 3 billion rows, the Normal Equation will absolutely:",
      questionAr: "إذا كانت قاعدة بيانات انحدار المنازل تحتوي على ما يتجاوز الـ (ثلاثة مليار صف ودليل رقمي ضخم)، فإن المعادلات العادية للخط الهندسي العادي رياضياً:",
      answers: [
        { id: 'a', text: "Crash or stall completely due to the O(N^3) complexity of massive matrix inversions intrinsically natively", isCorrect: true },
        { id: 'b', text: "Solve it instantly securely dynamically scaling cleanly logically", isCorrect: false },
        { id: 'c', text: "Convert it to classification smoothly globally invariably", isCorrect: false },
        { id: 'd', text: "Run Gradient Descent internally exactly directly smoothly", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q20',
      question: "Mapping non-scaled features in purely linear configurations strictly forces the cost function contour ellipses to become:",
      questionAr: "عند إسقاط وترتيب المميزات التي تفتقر وتهمل معايير 'المقاييس المتكافئة'، ستعاني معطيات خريطة وخطوط التكلفة الرياضية من أن تصبح بصورة مؤكدة:",
      answers: [
        { id: 'a', text: "Perfect absolute circles universally globally entirely natively natively", isCorrect: false },
        { id: 'b', text: "Extremely elongated and squashed, causing wild oscillatory bouncing during descent natively logically", isCorrect: true },
        { id: 'c', text: "Flat lines entirely natively internally identically", isCorrect: false },
        { id: 'd', text: "Completely convex absolutely smoothly geometrically mapping inherently", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q21',
      question: "The core purpose of the mathematical Sigmoid is explicitly to:",
      questionAr: "الغاية الرئيسية والوظيفة الرياضية الحصرية والخالية من الشوائب لدالة (Sigmoid Logistic) تكمن صراحةً وقصراً في:",
      answers: [
        { id: 'a', text: "Calculate absolute matrix limits via Euclidean distance mapping directly inherently", isCorrect: false },
        { id: 'b', text: "Squish any real boundless number -∞ to +∞ aggressively into a strict constraint logic curve identical to (0, 1) bounds exclusively", isCorrect: true },
        { id: 'c', text: "Convert absolute matrices logically via parameters directly without loops natively", isCorrect: false },
        { id: 'd', text: "Eliminate non-linear constraints entirely logically inherently across gradients", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q22',
      question: "At precisely what algorithmic numerical internal point does Sigmoid cross the neutral 0.5 threshold logic exactly directly inherently?",
      questionAr: "في أية إحداثية رقمية حسابية لديناميكية محاور دالة (Sigmoid Logistic)، تحديداً تتخطى أو تعكس القيمة والنتيجة خط الحياد الرياضي المطلق الـ (0.5)؟",
      answers: [
        { id: 'a', text: "z = -1", isCorrect: false },
        { id: 'b', text: "z = 3.14 natively", isCorrect: false },
        { id: 'c', text: "z = 0 exactly directly without variation", isCorrect: true },
        { id: 'd', text: "z = 1 natively invariably directly", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q23',
      question: "Using Linear Regression explicitly for Classifying tumor data is deeply flawed specifically because:",
      questionAr: "عندما تفرض وتطبق أصلية الانحدار الخطي المستمر لتعيين أو تصنيف بيانات مثل خلايا الأورام (سرطانية أو حميدة)، سيجلب الاستخدام نتائج مدمرة ومخيبة لأن:",
      answers: [
        { id: 'a', text: "Cost variables are integers natively logically completely", isCorrect: false },
        { id: 'b', text: "An extreme tumor size outlier will radically tilt the linear slope, wildly destroying the 0.5 threshold boundary natively intrinsically", isCorrect: true },
        { id: 'c', text: "It loops infinitely exclusively natively globally continuously mapping directly", isCorrect: false },
        { id: 'd', text: "It ignores distances thoroughly entirely universally dynamically explicitly", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q24',
      question: "When a Perceptron model explicitly makes a tragic mistake on a TRUE NEGATIVE data coordinate actively mapping, it must natively:",
      questionAr: "عند تقهقر وتراجع استراتيجية خوارزمية (الـ Perceptron)، مُرتكبةً خطأ جسيماً إثر قياس أهداف وعينات تندرج وتنتسب لكونها سلبية(True Negative)؛ ما هي الآلية الجبرية لعلاجها؟",
      answers: [
        { id: 'a', text: "Completely restart the initialization matrix resetting parameters universally directly", isCorrect: false },
        { id: 'b', text: "Mathematically add the coordinate mapping aggressively pushing limits invariably", isCorrect: false },
        { id: 'c', text: "Mathematically subtract the vector coordinates mapping purely aggressively inherently", isCorrect: true },
        { id: 'd', text: "Engage multi-layered dropping dynamically scaling randomly natively", isCorrect: false }
      ]
    },
    {
      id: 'ml-exam-q25',
      question: "XOR destroyed Perceptron logic exclusively because:",
      questionAr: "عائق وبوابة (دالة XOR) المتعاكسة قوضت وهدمت أساسات البيرسيبترون العادية وحسمت إخفاقه نهائياً باعتبارها أنها:",
      answers: [
        { id: 'a', text: "Computers lacked processing speed entirely scaling natively inherently largely", isCorrect: false },
        { id: 'b', text: "Its coordinates map linearly directly crossing boundaries natively cleanly logically", isCorrect: false },
        { id: 'c', text: "It forces geometric limits forcing single hyperplanes to fail inherently identically natively purely", isCorrect: true },
        { id: 'd', text: "It requires floating point inverse scaling matrices directly intrinsically aggressively natively", isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-exam-w1',
      question: "Elaborate heavily on the devastating consequences 'Overfitting' brings to ML logic architectures broadly mapping scaling inherently natively dynamically. How do we spot it visibly scaling?",
      questionAr: "اشرح وعقب بإطار مسهب عن الانحدارات والعواقب الكارثية والمدمرة التي تبثها مشكلات 'الموائمة الزائدة/ فرط التخصيص' ضمن هندسة المخرجات وهياكل تعلم الآلة الخوارزمية، وكيف نتبين ونكشف طابع الـ(Overfitting) بوضوح تام؟",
      modelAnswer: "Overfitting actively memorizes training data noise, creating wildly complex hyper-contorted boundary mapping natively. spotted easily when an architecture yields 99.9% testing logic training but then collapses utterly producing 40% validation set logic violently natively.",
      modelAnswerAr: "تقوم هذه الديمومة والخطأ المنهجي بحفظ تفاصيل بيانات الشوائب والاختراقات الميدانية بمرحلة التعلم على حساب استقاء القواسم الأساسية الكامنة للنمط، مما ينتج تخطيط حدودي عشوائي جداً ومتعرج ومعقد حوسبياً وغير طبيعي، ينكشف المشهد عندما يحرز نموذج ما أثناء التدريب نتائج وهمية تعادل 99% لكن يفشل وينبطح مقياس صحته بنطاقات هشة إلى 30٪ لنسب الفحص الخارجي."
    },
    {
      id: 'ml-exam-w2',
      question: "If an explicit Logistic Regression equation outputs P = 0.81 actively scaling mapping logically, translate this clinical threshold matrix into plain descriptive constraints actively natively comprehensively.",
      questionAr: "إذا نتج واستخرجت دالة الاستنتاج في نموذج انحدار الاحتمالات اللوجستي نسبة المرجع بـ P= 0.81 عملياً؛ كيف ستتم ترجمة وانسجام هذه الإحصاءات المنحنية كشكل بياني ومقاربة وصفية فعلية حاسمة وديناميكية؟",
      modelAnswer: "This directly means the curve mathematical mapping equation dictates an 81% strict statistical confidence probability constraint that the target is explicit Class 1 logically dynamically. Being well above standard 0.5 limit curves inherently dictates classifying affirmative actively natively dynamically.",
      modelAnswerAr: "يدل المقياس والمعيار بنصيب قطعي أن منحنى الانحدار يعطي استنباطاً بـ81% لوجود العينة وتحقيقها ضمن النمط الموجب لـ كلاس1 بشكل مؤكد احتماليا. حيث تجاوز قيمة المقاس الحدية الأساسية للمحايدات (0.5)، فبذلك ستصدر الخوارزمية كلاس 1 كـ إيجابي قاطع."
    },
    {
      id: 'ml-exam-w3',
      question: "Distinguish fully between K-Means G-Means adaptation and standard fixed mapping logic natively strictly comprehensively dynamically intrinsically inherently natively dynamically.",
      questionAr: "قارن بمقاييس دقيقة تفصيلية بين تقنيات وتطويع خوارزميات (K-Means) الجوهرية وبين معايير (G-Means) المتفرعة استراتيجياً، وبين الفروقات الجوهرية بآليات العمل.",
      modelAnswer: "Standard KMeans inherently forces the engineer to guess the K target logically invariably dynamically natively. G-Means dynamically initializes smaller clusters executing internal Anderson-Darling tests aggressively purely on statistical distribution mapping constraints checking for normal Gaussian traits logically, splitting natively inherently until pure logic prevails dynamically natively.",
      modelAnswerAr: "بينما تقود الـ (K-Means) العادية والمثبتة إلى تخمين وتوقيع العدد K حصرياً دون ضمانات. في المقابل تخمر خوارزميات الـ(G-means) الديناميكية عبر الشق والاستراتيجيات التعيين الأولية بتقليص المجموعات وإجراء فحص وتجانسات حيوية وإحصاء للاندماج لغاوص (Anderson-Darling tests)، ليتم الشطر واستهلاك الدالّة تدريجياً لضمان الوصول للتجمعات بدقة."
    },
    {
      id: 'ml-exam-w4',
      question: "Based on Section 1 constraints, explicitly contrast 'Macro-Averaging' versus 'Micro-Averaging' in Evaluation Metrics definitively mapping intrinsically.",
      questionAr: "وبناءً على ضوابط وبديهيات القسم العملي الأول للميزات؛ تتبع وادلي بالمناقضات والفروقات الحيوية والدقيقة بمقاييس 'متوسط الـ Micro' تجاه نظيره 'متوسط الـ Macro' بمحاور التقييم بوضوح.",
      modelAnswer: "Macro-Averaging inherently treats all classes strictly equally regardless of size, taking the independent precision of Class A and Class B, then mathematically averaging them cleanly. Micro-Averaging heavily favors the majority class natively by pooling all global True Positives and False Positives together directly before calculating precision natively globally.",
      modelAnswerAr: "تعود سياسة Macro بأنها تطفي معاملة التساوي الحرفي لجميع الكيانات بصورة منفردة ومستقلة تماما وتحتسب النتائج على انحياذية متباينة وتأتي بالمتوسط لها. المايكرو Micro يحشد مجريات وخواص كل الإحداثيات والتواريخ لكل كلاس محدد في تواصل وحيد وينحاز بشكل طبيعي وفارق للأغلبية نظرا لأعمال حسابها بدفعة واحدة."
    },
    {
      id: 'ml-exam-w5',
      question: "Define the mathematical function of Regularization (C × R(f)) explicitly natively. Why does 'simplifying' models actively fix overfitting intrinsically definitively?",
      questionAr: "فسر بنطاقات علمية محكمة الغاية الرياضية لدالة التسوية(التنظيم) والـ C × R(f)؟ وبأي منطقية تعمل خصائص (التبسيط للنماذج) على خنق وتقليص آثار الموائمة الزائدة بصورة ملموسة؟",
      modelAnswer: "Regularization explicitly adds a penalty term mapping the absolute size of the parameter weights logically into the Cost Loss calculation natively intrinsically. Overfitted models instinctively develop wildly massive localized weights specifically to force boundaries exactly around noise organically. Penalizing large weights crushes this complex mathematical distortion, inherently smoothing the boundaries out drastically natively globally.",
      modelAnswerAr: "يعمل حيز التسوية لزيادة حجم الاوزان بتوزيع تكاليف جزائية وحجبها من معطيات معادلة الدالة لتحد من النطاقات المفتوحة. تنشئ مشكلات الاوفر فتنج خطوط ومعلمات متعرجة وتزيد الأوزان الكبرى حول الفراغات والضوضاء دون نمط. بإضافة الخسارة الجبرية تتعدل الدالة وتجبر الاوزان للتملص والانحسار إلى أنظمة سطحية أكثر اتساقاً وبساطة ونعومة حدودية."
    },
    {
      id: 'ml-exam-w6',
      question: "Detail heavily the failure cascade of the mathematical Perceptron attempting to process nonlinear 'XOR' Boolean bounds natively intrinsically globally explicitly.",
      questionAr: "استطرد بشروحات مكثفة لترتيب وفشل التتابع لخوارزمية التصنيف الخطية البسيطة(البيرسبترون)، أثناء خضوعها لاختبار ومسائل العبور المنطقي الغير خطي بـ XOR.",
      modelAnswer: "XOR outputs 1 for mixed inputs (0,1 or 1,0) and 0 for pure inputs (0,0 or 1,1). Plotted geometrically, this natively forms a strict diamond/X formation inherently geographically. A single perceptron maps only one single straight mathematical boundary line fundamentally natively. You inherently physically cannot draw a straight line splitting an X structure safely globally intrinsically, forcing the update logic to violently oscillate infinitely.",
      modelAnswerAr: "بوابات XOR ترتضي ان تملك أطراف ومخارج مزدوجة النواتج وتصطف على شكل احداثي يشبه النمط X والهياكل الماسية بالخريطة. ولأن البيرسبترون الأولي مصمم لرسم مستوى خط فاصل مستقيم أحادي، فتصبح القدرة الهندسية والحوسبية عاجزة نهائيا بأن ترسم خط يقص ماسة وكتلة متداخلة بصورة واضحة، ليظل النموذج عالق بتكرار أخطاء منتهية وحلقات حوسبة لا نهاية لها."
    }
  ]
};
