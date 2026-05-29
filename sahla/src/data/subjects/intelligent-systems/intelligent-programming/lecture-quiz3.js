export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 'quiz3',
  title: 'Quiz 3 — Problem Solving, TF-IDF & Model Selection',
  titleAr: 'اختبار 3 — حل المشكلات، TF-IDF واختيار النماذج',

  // ── TAB 1 — Quick Review ──────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Problem Solving & Calculations Review</h2>
<p>This section covers key problem-solving techniques in Intelligent Programming, focusing on data preprocessing, NLP representations, and model selection.</p>

<h3>1. Handling Outliers & Missing Values</h3>
<ul>
  <li><strong>Mean:</strong> Used for numerical data without strong outliers. It represents the mathematical average.</li>
  <li><strong>Median:</strong> The middle value when sorted. It is <strong>robust to outliers</strong> (e.g., if X = {16, 17, 19, 21, 24, 220}, the median is better than the mean because 220 skews the average). Used for numerical data with outliers or skewed distributions.</li>
  <li><strong>Mode:</strong> The most frequent value. Used primarily for <strong>categorical data</strong>.</li>
</ul>

<h3>2. Choosing the Appropriate Model</h3>
<ul>
  <li><strong>Labeled Data:</strong> Requires <strong>Supervised Learning</strong> models (e.g., Classification, Regression).</li>
  <li><strong>Unlabeled Data:</strong> Requires <strong>Unsupervised Learning</strong> models (e.g., Clustering).</li>
  <li><strong>Data Types:</strong> The choice of model often depends on whether the target variable is <strong>Categorical</strong> (Classification) or <strong>Numerical</strong> (Regression).</li>
</ul>

<h3>3. Text Representation (NLP)</h3>
<ul>
  <li><strong>Bag of Words (BoW):</strong> Represents text by counting word frequencies, ignoring grammar and word order.</li>
  <li><strong>TF-IDF (Term Frequency-Inverse Document Frequency):</strong> Evaluates how important a word is to a document. It increases proportionally to the number of times a word appears in the document but is offset by the frequency of the word in the corpus, which helps to penalize highly frequent but less meaningful words (like "the", "is").</li>
</ul>`,
        bodyAr: `<h2>🔹 مراجعة حل المشكلات والحسابات</h2>
<p>يغطي هذا القسم تقنيات حل المشكلات الرئيسية، مع التركيز على المعالجة المسبقة للبيانات، وتمثيل اللغات الطبيعية، واختيار النماذج.</p>

<h3>1. التعامل مع القيم الشاذة والمفقودة</h3>
<ul>
  <li><strong>المتوسط (Mean):</strong> يُستخدم للبيانات الرقمية التي لا تحتوي على قيم شاذة قوية.</li>
  <li><strong>الوسيط (Median):</strong> يُستخدم للبيانات الرقمية التي تحتوي على قيم شاذة أو توزيعات ملتوية. (مثلاً: في مجموعة البيانات X = {16, 17, 19, 21, 24, 220}، الوسيط أفضل من المتوسط لأن 220 تؤثر بشدة على المتوسط).</li>
  <li><strong>المنوال (Mode):</strong> يُستخدم بشكل أساسي للبيانات الفئوية (Categorical).</li>
</ul>

<h3>2. اختيار النموذج المناسب</h3>
<ul>
  <li><strong>البيانات المصنفة (Labeled Data):</strong> تتطلب نماذج <strong>التعلم الخاضع للإشراف (Supervised Learning)</strong>.</li>
  <li><strong>البيانات غير المصنفة (Unlabeled Data):</strong> تتطلب نماذج <strong>التعلم غير الخاضع للإشراف (Unsupervised Learning)</strong>.</li>
  <li><strong>أنواع البيانات:</strong> يعتمد اختيار النموذج غالبًا على ما إذا كانت البيانات <strong>فئوية</strong> (للتصنيف) أو <strong>رقمية</strong> (للانحدار).</li>
</ul>

<h3>3. تمثيل النصوص</h3>
<ul>
  <li><strong>حقيبة الكلمات (Bag of Words):</strong> تمثل النص بحساب تكرار الكلمات، متجاهلة القواعد النحوية وترتيب الكلمات.</li>
  <li><strong>TF-IDF:</strong> يقيم مدى أهمية الكلمة في المستند، حيث يعاقب الكلمات الشائعة جداً التي لا تحمل معنى كبيراً عبر المستندات.</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Use Mean for numerical data without outliers, Median for data with outliers, and Mode for categorical data.",
      "Unlabeled data requires Unsupervised learning, while labeled data requires Supervised learning.",
      "Categorical vs Numerical data determines the specific ML algorithms you can apply.",
      "Bag of Words counts word frequencies without considering context.",
      "TF-IDF weighs word importance, penalizing words that are too frequent across all documents.",
    ],
    pointsAr: [
      "استخدم المتوسط للبيانات الرقمية بدون قيم شاذة، والوسيط للبيانات ذات القيم الشاذة، والمنوال للبيانات الفئوية.",
      "البيانات غير المصنفة تتطلب تعلماً غير خاضع للإشراف، بينما المصنفة تتطلب تعلماً خاضعاً للإشراف.",
      "تحدد طبيعة البيانات (فئوية أو رقمية) خوارزميات التعلم الآلي التي يمكن تطبيقها.",
      "تقنية Bag of Words تحسب تكرار الكلمات دون مراعاة السياق.",
      "تقنية TF-IDF تزن أهمية الكلمات، وتعاقب الكلمات الشائعة جداً في جميع المستندات.",
    ],
  },

  // ── TAB 3 — Combined Quiz ────────────────────────────────────────
  mcq: [
    // ─── Mean / Median / Mode ────────────────────────────────────
    {
      id: "ip-q3-01",
      question: "Given X = {16, 17, 19, 21, 24, 220}, how should you handle the outlier (220) to find the best central tendency?",
      questionAr: "لديك X = {16, 17, 19, 21, 24, 220}. كيف تتعامل مع القيمة الشاذة (220) لإيجاد أفضل نزعة مركزية؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Use the Mean — it mathematically considers all values equally to form the average.", isCorrect: false },
        { id: "b", text: "Use the Median — it is robust to outliers and represents the center much better.", isCorrect: true },
        { id: "c", text: "Use the Mode — it highlights the most frequent normal value in any distribution.", isCorrect: false },
        { id: "d", text: "Delete the outlier entirely and calculate the TF-IDF score for the numbers.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-02",
      question: "Which method is most appropriate for filling missing values in Categorical data?",
      questionAr: "ما الطريقة الأنسب لملء القيم المفقودة في البيانات الفئوية؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Mean — because categorical variables can always be mapped to numeric codes.", isCorrect: false },
        { id: "b", text: "Median — because it finds the central point regardless of categorical outliers.", isCorrect: false },
        { id: "c", text: "Mode — because it simply finds the most frequently occurring category label.", isCorrect: true },
        { id: "d", text: "Standard Deviation — to determine the average variance in the categories.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-03",
      question: "Why would you choose Mean over Median to impute missing numerical values?",
      questionAr: "لماذا تختار المتوسط بدلاً من الوسيط لتعويض القيم الرقمية المفقودة؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Because the data is completely categorical and numerical means do not apply.", isCorrect: false },
        { id: "b", text: "Because the data has incredibly strong outliers that require heavy smoothing.", isCorrect: false },
        { id: "c", text: "Because the data follows a relatively normal distribution without any outliers.", isCorrect: true },
        { id: "d", text: "Because the Median cannot be effectively calculated for datasets under 1000 rows.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-04",
      question: "A salary dataset contains: {3000, 3200, 3500, 3800, 50000}. A missing salary needs to be filled. Which is best?",
      questionAr: "مجموعة رواتب تحتوي: {3000, 3200, 3500, 3800, 50000}. يجب ملء راتب مفقود. أيهما الأفضل؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Mean — it gives 12700 which perfectly represents the overall salary dataset.", isCorrect: false },
        { id: "b", text: "Mode — because salaries should always be treated as discrete categorical data.", isCorrect: false },
        { id: "c", text: "Median (3500) — it is completely unaffected by the extreme outlier of 50000.", isCorrect: true },
        { id: "d", text: "Delete all values — the outlier completely corrupts any possible calculation.", isCorrect: false },
      ],
    },
    // ─── Supervised vs Unsupervised / Model Selection ────────────
    {
      id: "ip-q3-05",
      question: "If your data is Unlabeled and you need to discover hidden groups, which learning type do you use?",
      questionAr: "إذا كانت بياناتك غير مصنفة وتحتاج لاكتشاف مجموعات خفية، أي نوع تعلم تستخدم؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Supervised Learning — because it effectively predicts continuous target variables.", isCorrect: false },
        { id: "b", text: "Unsupervised Learning — because it discovers structures without needing labels.", isCorrect: true },
        { id: "c", text: "Reinforcement Learning — because it relies on trial and error within environments.", isCorrect: false },
        { id: "d", text: "Transfer Learning — because it reuses previous knowledge on entirely new groups.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-06",
      question: "Your target variable has values 'Cat', 'Dog', 'Bird' with labels. What data type is this and what model category fits?",
      questionAr: "المتغير المستهدف يحتوي 'قطة'، 'كلب'، 'طائر' مع تصنيفات. ما نوع البيانات وفئة النموذج المناسبة؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Numerical data; therefore you must use a Supervised Regression learning model.", isCorrect: false },
        { id: "b", text: "Categorical data; therefore you must use a Supervised Classification learning model.", isCorrect: true },
        { id: "c", text: "Categorical data; therefore you must use an Unsupervised Clustering learning model.", isCorrect: false },
        { id: "d", text: "Numerical data; therefore you must use an Unsupervised Clustering learning model.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-07",
      question: "You want to predict house prices (a continuous number) from labeled data. Which model type is most appropriate?",
      questionAr: "تريد التنبؤ بأسعار المنازل (رقم مستمر) من بيانات مصنفة. أي نوع نموذج هو الأنسب؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Unsupervised Clustering (like K-Means) to effectively discover similar housing groups.", isCorrect: false },
        { id: "b", text: "Supervised Classification (like Naive Bayes) to categorize the specific house types.", isCorrect: false },
        { id: "c", text: "Supervised Regression (like Linear Regression) to predict continuous numeric targets.", isCorrect: true },
        { id: "d", text: "Association Rule Mining (like Apriori) to discover frequent house purchase patterns.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-08",
      question: "A dataset has customer purchase records but NO labels. You want to segment customers into groups. Which algorithm?",
      questionAr: "لديك سجلات شراء بدون تصنيفات. تريد تقسيم العملاء لمجموعات. أي خوارزمية تستخدم؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Linear Regression — because it is explicitly designed to predict continuous values.", isCorrect: false },
        { id: "b", text: "Naive Bayes — because it uses probabilistic models to classify all labeled data.", isCorrect: false },
        { id: "c", text: "K-Means Clustering — because it is specifically designed to group unlabeled data.", isCorrect: true },
        { id: "d", text: "Decision Tree — because it recursively splits the labeled data based on features.", isCorrect: false },
      ],
    },
    // ─── Bag of Words (BoW) ──────────────────────────────────────
    {
      id: "ip-q3-09",
      question: "What does Bag of Words (BoW) completely ignore when representing text?",
      questionAr: "ما الذي تتجاهله تقنية Bag of Words تماماً عند تمثيل النص؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "It completely ignores the absolute number of unique vocabulary words.", isCorrect: false },
        { id: "b", text: "It completely ignores the mathematical frequency of each individual word.", isCorrect: false },
        { id: "c", text: "It completely ignores the linguistic grammar, word order, and overall context.", isCorrect: true },
        { id: "d", text: "It completely ignores the total aggregated number of documents in the corpus.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-10",
      question: "Given corpus: ['I love NLP', 'I love AI and NLP']. What is the BoW vector for Doc 1 using vocabulary [AI, I, NLP, and, love]?",
      questionAr: "بالنسبة للـ corpus: ['I love NLP', 'I love AI and NLP']. ما هو متجه BoW للوثيقة 1 باستخدام المفردات [AI, I, NLP, and, love]؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "The vector is [1, 1, 1, 1, 1] because all the vocabulary words are completely present.", isCorrect: false },
        { id: "b", text: "The vector is [0, 1, 1, 0, 1] because 'AI' and 'and' are entirely missing from Doc 1.", isCorrect: true },
        { id: "c", text: "The vector is [1, 1, 0, 1, 1] because 'NLP' is intentionally excluded from the count.", isCorrect: false },
        { id: "d", text: "The vector is [0, 0, 1, 0, 1] because pronouns and stopwords are always omitted.", isCorrect: false },
      ],
    },
    // ─── TF-IDF ──────────────────────────────────────────────────
    {
      id: "ip-q3-11",
      question: "In TF-IDF, what does the IDF (Inverse Document Frequency) component do?",
      questionAr: "في TF-IDF، ماذا يفعل مكوّن IDF (تكرار المستند العكسي)؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It strictly counts exactly how many times a word appears in a single target document.", isCorrect: false },
        { id: "b", text: "It aggressively penalizes words appearing in many documents, reducing their importance.", isCorrect: true },
        { id: "c", text: "It automatically identifies and completely removes all English stopwords from the corpus.", isCorrect: false },
        { id: "d", text: "It systematically sorts all words alphabetically to guarantee much faster model lookup.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-12",
      question: "In corpus ['I love NLP', 'I love AI and NLP'], which words get LOWER TF-IDF scores compared to BoW?",
      questionAr: "في corpus ['I love NLP', 'I love AI and NLP']، أي الكلمات تحصل على درجة TF-IDF أقل مقارنة بـ BoW؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "'AI' and 'and' — because they appear in only one document, making them far too common.", isCorrect: false },
        { id: "b", text: "'love' and 'NLP' — because they appear in both documents, making them much less distinctive.", isCorrect: true },
        { id: "c", text: "'I' — because English personal pronouns are automatically assigned a permanent zero score.", isCorrect: false },
        { id: "d", text: "All words are treated equally — TF-IDF fundamentally yields identical scores to the BoW model.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-13",
      question: "How does TF-IDF improve upon the Bag of Words model?",
      questionAr: "كيف يُحسّن TF-IDF نموذج Bag of Words؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It artificially increases the mathematical weight of all vocabulary words completely equally.", isCorrect: false },
        { id: "b", text: "It effectively downweights common words across documents and upweights distinctive terms.", isCorrect: true },
        { id: "c", text: "It explicitly removes all vocabulary words that appear more than exactly once in the data.", isCorrect: false },
        { id: "d", text: "It successfully preserves both the original linguistic word order and the grammatical structure.", isCorrect: false },
      ],
    },
    // ─── Stopwords / Stemming / Lemmatization ────────────────────
    {
      id: "ip-q3-14",
      question: "Why are stopwords like 'the', 'is', 'and' removed during NLP preprocessing?",
      questionAr: "لماذا تُزال كلمات التوقف مثل 'the' و 'is' أثناء المعالجة المسبقة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "They are frequently misspelled by users and generally cause catastrophic model errors.", isCorrect: false },
        { id: "b", text: "They appear very frequently in sentences but carry incredibly little meaningful information.", isCorrect: true },
        { id: "c", text: "They almost exclusively appear in profoundly negative sentiment texts within the dataset.", isCorrect: false },
        { id: "d", text: "They are significantly too long for most modern machine learning algorithms to process efficiently.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-15",
      question: "What is the key difference between Stemming and Lemmatization?",
      questionAr: "ما الفرق الرئيسي بين الجذع (Stemming) والإرجاع المعجمي (Lemmatization)؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Stemming heavily relies on complex grammar rules; Lemmatization simply chops off word suffixes.", isCorrect: false },
        { id: "b", text: "Stemming chops suffixes (fast but inaccurate); Lemmatization uses vocabulary rules (slower, accurate).", isCorrect: true },
        { id: "c", text: "They are fundamentally identical — both algorithms are guaranteed to produce the exact same output.", isCorrect: false },
        { id: "d", text: "Lemmatization exclusively operates on numerical data, whereas Stemming only processes text data.", isCorrect: false },
      ],
    },
    // ─── Sentiment Analysis ──────────────────────────────────────
    {
      id: "ip-q3-16",
      question: "What type of Sentiment Analysis classifies 'I'm so frustrated with the delay!' as expressing 'Anger'?",
      questionAr: "أي نوع من تحليل المشاعر يصنف 'I'm so frustrated!' على أنها تعبّر عن الغضب؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Binary Classification, which merely identifies whether a sentence is entirely Positive or Negative.", isCorrect: false },
        { id: "b", text: "Multi-class Classification, which assigns text into distinct Positive, Neutral, or Negative buckets.", isCorrect: false },
        { id: "c", text: "Emotion Detection, which identifies specific psychological states like Joy, Anger, Sadness, or Surprise.", isCorrect: true },
        { id: "d", text: "Stopword Analysis, which filters out the emotional words to focus exclusively on factual information.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-17",
      question: "In TextBlob, a polarity score of -1 means:",
      questionAr: "في TextBlob، درجة القطبية -1 تعني:",
      difficulty: "easy",
      answers: [
        { id: "a", text: "The analyzed text is evaluated to be completely neutral and entirely devoid of emotion.", isCorrect: false },
        { id: "b", text: "The sentiment analysis algorithm failed to execute and returned a negative error code.", isCorrect: false },
        { id: "c", text: "The analyzed text is evaluated to contain an extremely negative and pessimistic sentiment.", isCorrect: true },
        { id: "d", text: "The analyzed text is evaluated to contain an extremely positive and enthusiastic sentiment.", isCorrect: false },
      ],
    },
    // ─── Cross Validation ────────────────────────────────────────
    {
      id: "ip-q3-18",
      question: "What is the advantage of StratifiedKFold over regular KFold?",
      questionAr: "ما ميزة StratifiedKFold على KFold العادي؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It executes significantly faster and requires considerably less computational processing power.", isCorrect: false },
        { id: "b", text: "It guarantees that each fold perfectly preserves the original class label proportions of the full dataset.", isCorrect: true },
        { id: "c", text: "It automatically tunes the internal hyperparameters of the model to achieve the highest accuracy.", isCorrect: false },
        { id: "d", text: "It strategically utilizes more memory during training to artificially enhance the final evaluation score.", isCorrect: false },
      ],
    },
    // ─── Evaluation Metrics ──────────────────────────────────────
    {
      id: "ip-q3-19",
      question: "Which metric answers: 'Of all products actually liked, how many did the model correctly identify?'",
      questionAr: "أي مقياس يجيب: 'من جميع المنتجات التي أُعجب بها المستخدم، كم عدد التي اكتشفها النموذج؟'",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Accuracy — this tracks the general proportion of correct predictions across all classes combined.", isCorrect: false },
        { id: "b", text: "Precision — this tracks how many of the positively predicted products were actually truly relevant.", isCorrect: false },
        { id: "c", text: "Recall — this directly tracks the percentage of genuinely liked products that the model managed to find.", isCorrect: true },
        { id: "d", text: "F1 Score — this is the harmonized mathematical average of both Precision and overall Accuracy.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-20",
      question: "Why do we use predict_proba() instead of predict() when building a recommendation list?",
      questionAr: "لماذا نستخدم predict_proba() بدلاً من predict() عند بناء قائمة توصيات؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "The standard predict() method absolutely requires the full unedited training dataset as input.", isCorrect: false },
        { id: "b", text: "predict_proba() yields continuous probability scores we can successfully sort to rank the best items.", isCorrect: true },
        { id: "c", text: "The standard predict() method only functions during training and physically cannot be called afterward.", isCorrect: false },
        { id: "d", text: "predict_proba() executes significantly faster and systematically uses far less memory on huge datasets.", isCorrect: false },
      ],
    },
    // ─── Additional Hard Questions ───────────────────────────────
    {
      id: "ip-q3-21",
      question: "Dataset: {10, 12, 14, 15, 13, 200}. The Mean is ~44 and the Median is 13.5. Which statement is TRUE?",
      questionAr: "مجموعة البيانات: {10, 12, 14, 15, 13, 200}. المتوسط ~44 والوسيط 13.5. أي عبارة صحيحة؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "The Mean (44) is completely superior because it flawlessly incorporates all recorded numerical data points.", isCorrect: false },
        { id: "b", text: "The Median (13.5) represents the center far better because the Mean is severely dragged by the outlier 200.", isCorrect: true },
        { id: "c", text: "Both mathematical measures are equally valid because outliers fundamentally don't affect central tendency.", isCorrect: false },
        { id: "d", text: "Neither metric is valid — you are strictly required to use the Mode for any dataset that features outliers.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-22",
      question: "A BoW matrix for 50,000 documents and 80,000 unique words is called 'sparse' because:",
      questionAr: "مصفوفة BoW لـ 50,000 مستند و80,000 كلمة فريدة تسمى 'متفرقة' لأن:",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Because it exclusively consists of positive numeric integers and actively rejects any negative floating values.", isCorrect: false },
        { id: "b", text: "Because each document uses barely any vocabulary, leaving the massive matrix filled mostly with wasteful zeros.", isCorrect: true },
        { id: "c", text: "Because it rigidly stores the extracted words in strict alphabetical order, leaving massive gaps between entries.", isCorrect: false },
        { id: "d", text: "Because the underlying generation algorithm systematically skips the most common English vocabulary words automatically.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-23",
      question: "After preprocessing 'I loved this product! It\\'s amazing and works well.' with lowercase → remove punctuation → remove stopwords → stem, the output is:",
      questionAr: "بعد معالجة 'I loved this product! It\\'s amazing and works well.' بالتحويل لأحرف صغيرة ← إزالة الترقيم ← إزالة كلمات التوقف ← الجذع، الناتج هو:",
      difficulty: "hard",
      answers: [
        { id: "a", text: "\"i loved product amazing works well\" — because the stemming process failed to properly truncate the trailing suffixes.", isCorrect: false },
        { id: "b", text: "\"loved product amazing works well\" — because the pronoun 'i' is universally treated as an excluded stopword.", isCorrect: false },
        { id: "c", text: "\"love product amaz work well\" — because punctuation and stopwords are removed, and the remaining terms are stemmed.", isCorrect: true },
        { id: "d", text: "\"love product amazing work well\" — because the algorithm selectively applies lemmatization instead of basic stemming.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-24",
      question: "You have labeled data with a continuous target (e.g., temperature in °C). A classmate suggests K-Means. Why is this wrong?",
      questionAr: "لديك بيانات مصنفة بهدف مستمر (مثل درجة الحرارة). زميلك يقترح K-Means. لماذا هذا خطأ؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "K-Means strictly requires an absolute minimum of 10,000 distinct data points to mathematically function.", isCorrect: false },
        { id: "b", text: "K-Means is unsupervised clustering that ignores labels. A Supervised Regression model handles continuous targets.", isCorrect: true },
        { id: "c", text: "K-Means is exclusively engineered to work with categorical text features, making it useless for numerical ones.", isCorrect: false },
        { id: "d", text: "K-Means possesses an execution speed that is significantly too slow to handle simple temperature datasets.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-25",
      question: "In a 5-fold CV, each fold acts as test data exactly once. If fold 3 is used for testing, which folds are used for training?",
      questionAr: "في CV بـ 5 أجزاء، كل جزء يُستخدم للاختبار مرة واحدة. إذا استُخدم الجزء 3 للاختبار، أي الأجزاء تُستخدم للتدريب؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Only folds 1 and 2 — because the algorithm sequentially trains on previous data and evaluates on the next.", isCorrect: false },
        { id: "b", text: "Folds 1, 2, 4, and 5 — because the exact specified fold acts as the test set while the remaining four train.", isCorrect: true },
        { id: "c", text: "Only folds 4 and 5 — because the cross-validation logic exclusively uses the subsequent folds for the training.", isCorrect: false },
        { id: "d", text: "All 5 folds perfectly simultaneously — because cross-validation evaluates performance across the entire dataset.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-26",
      question: "In the Amazon review case study, why is BaggingClassifier wrapped around RandomForestClassifier instead of using RF alone?",
      questionAr: "في دراسة حالة Amazon، لماذا يُغلَّف BaggingClassifier حول RandomForestClassifier بدلاً من استخدامه وحده؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Because the base RandomForest algorithm structurally cannot process any textual data without an external wrapper.", isCorrect: false },
        { id: "b", text: "To successfully introduce an extra ensemble layer — bagging trains multiple RF instances to achieve better robustness.", isCorrect: true },
        { id: "c", text: "Because the BaggingClassifier is explicitly programmed to automatically optimize the RandomForest hyperparameters.", isCorrect: false },
        { id: "d", text: "To aggressively reduce the overall training execution time by seamlessly parallelizing the Random Forest internally.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-27",
      question: "What does max_features=5000 in CountVectorizer do in the Amazon sentiment pipeline?",
      questionAr: "ماذا يفعل max_features=5000 في CountVectorizer في خط أنابيب تحليل مشاعر Amazon؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "It strictly truncates the entire training dataset to utilize only the first 5000 Amazon product reviews.", isCorrect: false },
        { id: "b", text: "It safely restricts the vocabulary to only the 5000 most frequently appearing words to successfully control memory.", isCorrect: true },
        { id: "c", text: "It automatically generates exactly 5000 entirely random mathematical features derived from the textual context.", isCorrect: false },
        { id: "d", text: "It forcefully applies zero-padding to guarantee that every single review contains precisely 5000 valid tokens.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-28",
      question: "Precision answers: 'Of all items the model PREDICTED as liked, how many were actually liked?' If precision is low, this means:",
      questionAr: "الدقة (Precision) تجيب: 'من كل ما توقعه النموذج كإعجاب، كم كان فعلاً إعجاب؟' إذا كانت الدقة منخفضة، هذا يعني:",
      difficulty: "hard",
      answers: [
        { id: "a", text: "The prediction model is fundamentally failing to identify and capture the vast majority of items the user genuinely likes.", isCorrect: false },
        { id: "b", text: "The prediction model aggressively suggests significantly too many irrelevant items that the user definitely does NOT like.", isCorrect: true },
        { id: "c", text: "The prediction model has miraculously achieved an incredibly high level of overall holistic accuracy on the dataset.", isCorrect: false },
        { id: "d", text: "The given dataset unfortunately contains far too few complete rows to accurately calculate any reliable statistical metric.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-29",
      question: "A dataset has features: [age, income, city, education_level] and a target: 'will_buy' (Yes/No). Which features need encoding before training?",
      questionAr: "مجموعة بيانات بها ميزات: [العمر، الدخل، المدينة، مستوى التعليم] والهدف: 'سيشتري' (نعم/لا). أي الميزات تحتاج ترميز؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Both age and income strictly require encoding because standard numerical variables must always be mathematically normalized.", isCorrect: false },
        { id: "b", text: "Both city and education_level require encoding because machine learning algorithms mathematically demand numerical categorical codes.", isCorrect: true },
        { id: "c", text: "All four of the mentioned dataset features require intensive label encoding before any functional training can potentially begin.", isCorrect: false },
        { id: "d", text: "Absolutely none of the features require any form of encoding because modern ML pipelines can natively process standard text directly.", isCorrect: false },
      ],
    },
    {
      id: "ip-q3-30",
      question: "The TF component in TF-IDF measures how often a word appears in ONE document. If 'AI' appears 3 times in a 100-word doc, its TF is:",
      questionAr: "مكوّن TF في TF-IDF يقيس تكرار الكلمة في مستند واحد. إذا ظهرت 'AI' 3 مرات في مستند من 100 كلمة، فإن TF هو:",
      difficulty: "hard",
      answers: [
        { id: "a", text: "It evaluates to precisely 3 — because Term Frequency simply relies on the unmodified raw count of exact vocabulary occurrences.", isCorrect: false },
        { id: "b", text: "It evaluates to precisely 0.03 — because Term Frequency calculates the occurrences strictly relative to the total word count.", isCorrect: true },
        { id: "c", text: "It evaluates to precisely 100 — because Term Frequency exclusively measures the absolute total number of words in the document.", isCorrect: false },
        { id: "d", text: "It evaluates to precisely 0.3 — because Term Frequency strictly measures the percentage of documents containing the target word.", isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: "ip-q3-w1",
      question: "Given a dataset with numerical values that include an extreme outlier, explain which metric (Mean or Median) is better for filling missing values and why.",
      questionAr: "بالنظر إلى مجموعة بيانات تحتوي على قيم رقمية تتضمن قيمة شاذة متطرفة، اشرح أي مقياس (المتوسط أم الوسيط) هو الأفضل لملء القيم المفقودة ولماذا.",
      modelAnswer: "The Median should be used because it is robust against extreme values. The Mean is highly sensitive to outliers, which would artificially pull the average up or down, leading to inaccurate imputations.",
      modelAnswerAr: "يجب استخدام الوسيط لأنه غير متأثر بشدة بالقيم المتطرفة. المتوسط حساس جداً للقيم الشاذة، مما قد يسحب المعدل لأعلى أو لأسفل بشكل مصطنع، مما يؤدي إلى تعويضات غير دقيقة.",
    },
  ],
};
