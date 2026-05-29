export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: "intelligent-programming",
  number: 10,
  title: "Cross Validation & Product Recommendation",
  titleAr: "التحقق المتقاطع ونظام توصية المنتجات",

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: "text",
      content: {
        body: `<h2>🔹 What is Cross Validation (CV)?</h2>
<p><strong>Cross Validation</strong> is a technique used to evaluate how well a machine learning model <strong>generalizes</strong> to unseen data. Instead of relying on a single train/test split (which can be biased depending on how the data is divided), CV gives a more reliable and stable estimate of model performance.</p>
<ul>
  <li>It splits the data into <strong>K equal parts (folds)</strong> (e.g., 5 or 10 pieces).</li>
  <li>It trains the model <strong>K times</strong>, each time using a <strong>different fold</strong> as the test set and the remaining K-1 folds as the training set.</li>
  <li>Finally, it <strong>averages the performance</strong> across all folds to produce a more reliable accuracy metric.</li>
</ul>
<p>📌 <strong>Why is this better than a simple train/test split?</strong> A single split can be "lucky" or "unlucky" depending on which data ends up in the test set. Cross Validation removes this randomness by testing on every part of the data at least once.</p>

<h2>🔹 StratifiedKFold vs Regular KFold</h2>
<p><strong>StratifiedKFold</strong> is a smarter variant of regular KFold. It ensures that <strong>each fold has the same proportion of class labels</strong> as the original dataset. For example, if 30% of your data is class 1 and 70% is class 0, every fold will also contain approximately 30% class 1 and 70% class 0.</p>
<p>This is especially important for <strong>imbalanced datasets</strong> where one class is much rarer than the other.</p>

<h2>🔹 Build Using Cross Validation</h2>
<p>We use <code>StratifiedKFold</code> and <code>cross_val_score</code> from <code>sklearn.model_selection</code> to perform CV on a <code>DecisionTreeClassifier</code>.</p>
<div class="code-block"><span class="keyword">import</span> pandas <span class="keyword">as</span> pd
<span class="keyword">from</span> sklearn.model_selection <span class="keyword">import</span> cross_val_score, StratifiedKFold
<span class="keyword">from</span> sklearn.tree <span class="keyword">import</span> DecisionTreeClassifier

<span class="comment"># Define the model</span>
model = <span class="function">DecisionTreeClassifier</span>(max_depth=5, random_state=42)

<span class="comment"># Define the CV strategy: 5 folds, shuffled, reproducible</span>
cv = <span class="function">StratifiedKFold</span>(n_splits=5, shuffle=True, random_state=42)

<span class="comment"># Perform Cross Validation — returns an array of 5 accuracy scores</span>
cv_scores = <span class="function">cross_val_score</span>(model, X, y, cv=cv, scoring='accuracy')

<span class="function">print</span>("Cross-Validation Accuracy Scores:", cv_scores)
<span class="function">print</span>("Average CV Accuracy:", cv_scores.<span class="function">mean</span>())</div>

<p>📌 <strong>Key parameters explained:</strong></p>
<ul>
  <li><code>n_splits=5</code> — divide data into 5 folds.</li>
  <li><code>shuffle=True</code> — shuffle the data before splitting to avoid ordering bias.</li>
  <li><code>random_state=42</code> — makes results reproducible.</li>
  <li><code>scoring='accuracy'</code> — the metric used to evaluate each fold.</li>
</ul>

<h2>🔹 Product Recommendation System</h2>
<p>Similar to a Movie Recommendation System, we build a <strong>Product Recommendation System</strong> using two datasets: <code>products.csv</code> (productId, category, price) and <code>purchases.csv</code> (userId, productId, rating). We want to display the <strong>Top 10 recommended products</strong> that a user is most likely to enjoy.</p>
<p>The model learns patterns from historical purchases and ratings to predict whether a user will <strong>like</strong> a product. We use <strong>Naive Bayes (GaussianNB)</strong> because it works well with continuous numeric features like price.</p>

<h3>Step 1: Imports</h3>
<div class="code-block"><span class="keyword">import</span> pandas <span class="keyword">as</span> pd
<span class="keyword">from</span> sklearn.model_selection <span class="keyword">import</span> train_test_split
<span class="keyword">from</span> sklearn.naive_bayes <span class="keyword">import</span> GaussianNB
<span class="keyword">from</span> sklearn.metrics <span class="keyword">import</span> accuracy_score, precision_score, recall_score</div>

<h3>Step 2: Load & Preprocess Data</h3>
<p>We merge the two datasets on <code>productId</code>, then engineer two new columns:</p>
<ul>
  <li><strong>user_like</strong>: Binary target — 1 if rating ≥ 4 (user liked it), else 0.</li>
  <li><strong>category_code</strong>: Encodes text categories (e.g., "Electronics") into numbers so the model can process them.</li>
</ul>
<div class="code-block">products = pd.<span class="function">read_csv</span>('products.csv')
purchases = pd.<span class="function">read_csv</span>('purchases.csv')
df = pd.<span class="function">merge</span>(purchases, products, on='productId')

<span class="comment"># Binary target: 1 = liked (rating >= 4), 0 = not liked</span>
df['user_like'] = df['rating'].<span class="function">apply</span>(<span class="keyword">lambda</span> x: 1 <span class="keyword">if</span> x >= 4 <span class="keyword">else</span> 0)

<span class="comment"># Encode category strings into integer codes</span>
df['category_code'] = df['category'].<span class="function">astype</span>('category').cat.codes

<span class="comment"># Features: what the model learns from</span>
X = df[['category_code', 'price']]
<span class="comment"># Target: what the model predicts</span>
y = df['user_like']</div>

<h3>Step 3: Train & Evaluate Model</h3>
<p>We split 70% of data for training and 30% for testing, then evaluate using three metrics:</p>
<ul>
  <li><strong>Accuracy</strong>: Overall % of correct predictions.</li>
  <li><strong>Precision</strong>: Of all products predicted as "liked", how many actually were? (avoids false positives)</li>
  <li><strong>Recall</strong>: Of all products the user actually liked, how many did we catch? (avoids false negatives)</li>
</ul>
<div class="code-block">X_train, X_test, y_train, y_test = <span class="function">train_test_split</span>(X, y, test_size=0.3, random_state=42)

model = <span class="function">GaussianNB</span>()
model.<span class="function">fit</span>(X_train, y_train)

y_pred = model.<span class="function">predict</span>(X_test)
<span class="function">print</span>("Accuracy:", <span class="function">accuracy_score</span>(y_test, y_pred))
<span class="function">print</span>("Precision:", <span class="function">precision_score</span>(y_test, y_pred))
<span class="function">print</span>("Recall:", <span class="function">recall_score</span>(y_test, y_pred))</div>

<h3>Step 4: Predict Probabilities & Display Top 10</h3>
<p>Instead of just predicting "liked" or "not liked", we use <code>predict_proba</code> to get the <strong>probability</strong> that a user will like each product. This lets us rank products and recommend the most promising ones.</p>
<ul>
  <li><code>predict_proba(X)</code> returns a 2D array: column 0 = probability of class 0, column 1 = probability of class 1.</li>
  <li><code>[:, 1]</code> selects only the "like" probabilities for all rows.</li>
  <li><code>drop_duplicates()</code> ensures each product appears only once before ranking.</li>
  <li><code>sort_values(..., ascending=False)</code> puts the highest probability products first.</li>
</ul>
<div class="code-block">df['like_probability'] = model.<span class="function">predict_proba</span>(X)[:, 1]

top_products = df[['productId', 'category', 'like_probability']] \\
    .<span class="function">drop_duplicates</span>() \\
    .<span class="function">sort_values</span>('like_probability', ascending=False)

<span class="function">print</span>(top_products.<span class="function">head</span>(10))</div>`,

        bodyAr: `<h2>🔹 ما هو التحقق المتقاطع (Cross Validation)؟</h2>
<p>تقنية لتقييم أداء النموذج بشكل أكثر دقة وموثوقية. بدلاً من الاعتماد على تقسيم واحد فقط للبيانات، يُقلّل التحقق المتقاطع من تأثير التحيّز الناتج عن كيفية تقسيم البيانات.</p>
<ul>
  <li>تقوم بتقسيم البيانات إلى <strong>K من الأجزاء المتساوية (folds)</strong> (مثلاً 5 أو 10 أجزاء).</li>
  <li>يتم تدريب النموذج <strong>K من المرات</strong>، وفي كل مرة يُستخدم جزء مختلف كبيانات اختبار والأجزاء الباقية كبيانات تدريب.</li>
  <li>في النهاية، يتم <strong>حساب متوسط الأداء</strong> عبر جميع الأجزاء للحصول على تقدير موثوق.</li>
</ul>
<p>📌 <strong>لماذا هذا أفضل من التقسيم العادي؟</strong> تقسيم واحد قد يكون "محظوظاً" أو "سيئاً" بناءً على أي البيانات تنتهي في مجموعة الاختبار. التحقق المتقاطع يُزيل هذه العشوائية باختبار كل جزء من البيانات مرة على الأقل.</p>

<h2>🔹 الفرق بين StratifiedKFold و KFold العادي</h2>
<p><strong>StratifiedKFold</strong> تضمن أن كل جزء يحتوي على <strong>نفس نسبة الفئات</strong> الموجودة في البيانات الأصلية. هذا مهم جداً عند التعامل مع البيانات غير المتوازنة.</p>

<h2>🔹 نظام توصية المنتجات</h2>
<p>نقوم ببناء نظام يقترح أفضل المنتجات باستخدام بيانات المنتجات والمشتريات. النموذج يتعلم من سجلات الشراء والتقييمات السابقة للتنبؤ بما إذا كان المستخدم سيُعجبه المنتج.</p>
<ul>
  <li>نقوم بدمج بيانات <code>products.csv</code> و <code>purchases.csv</code> بناءً على <code>productId</code>.</li>
  <li>نحول التقييمات إلى قيم ثنائية (>=4 يعني 1، وإلا 0) ونرمز الفئات باستخدام <code>cat.codes</code>.</li>
  <li>نقوم بتدريب نموذج <code>GaussianNB</code>، وحساب دقة النموذج والمقاييس الأخرى.</li>
  <li>نستخدم <code>predict_proba(X)[:, 1]</code> للحصول على احتمالية إعجاب المستخدم ونرتب المنتجات لعرض أفضل 10 اقتراحات.</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Cross Validation splits data into K folds, training K times to get a reliable average performance.",
      "StratifiedKFold ensures each fold has the same proportion of class labels as the original dataset — crucial for imbalanced data.",
      "cross_val_score is used to automatically run CV and return the scores for each fold.",
      "shuffle=True in StratifiedKFold randomizes the data order before splitting to avoid ordering bias.",
      "The Product Recommendation System predicts user likes based on product 'category_code' and 'price'.",
      "Features (X) used for recommendation: category_code and price.",
      "Target (y) for recommendation: user_like (1 if rating >= 4, else 0).",
      "Model used for recommendation: GaussianNB (Naive Bayes) — works well with continuous numeric features.",
      "Precision measures how many predicted 'likes' were actually correct; Recall measures how many real likes were captured.",
      "We use predict_proba(X)[:, 1] to extract the likelihood of a user liking a product.",
      "drop_duplicates() ensures we don't recommend the same product multiple times before sorting.",
    ],
    pointsAr: [
      "يقسم التحقق المتقاطع (CV) البيانات إلى K من الأجزاء ويدرب النموذج K مرة للحصول على متوسط أداء موثوق.",
      "تُستخدم StratifiedKFold لضمان أن كل جزء يحتوي على نفس النسبة من الفئات مثل البيانات الأصلية — مهم جداً للبيانات غير المتوازنة.",
      "تُستخدم دالة cross_val_score لتشغيل الـ CV تلقائياً وإرجاع النتائج لكل جزء.",
      "shuffle=True في StratifiedKFold تعشوش البيانات قبل التقسيم لتجنب تحيز الترتيب.",
      "نظام توصية المنتجات يتوقع إعجاب المستخدم بناءً على رمز الفئة (category_code) والسعر (price).",
      "الميزات (X) المستخدمة للتوصية: category_code و price.",
      "الهدف (y) للتوصية: user_like (1 إذا كان التقييم >= 4، وإلا 0).",
      "النموذج المستخدم للتوصية: GaussianNB — يعمل بشكل جيد مع الميزات الرقمية المستمرة.",
      "الدقة (Precision) تقيس كم من التوقعات الإيجابية كانت صحيحة؛ الاستدعاء (Recall) يقيس كم من الحالات الإيجابية الحقيقية تم التقاطها.",
      "نستخدم predict_proba(X)[:, 1] لاستخراج احتمالية إعجاب المستخدم بالمنتج.",
      "تضمن دالة drop_duplicates() عدم اقتراح نفس المنتج أكثر من مرة قبل الترتيب.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: "ip-l10-q1",
      question: "What is the primary purpose of Cross Validation?",
      questionAr: "ما هو الغرض الأساسي من التحقق المتقاطع (Cross Validation)؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "To delete missing values from the dataset", isCorrect: false },
        { id: "b", text: "To evaluate a model's performance robustly by averaging results across multiple data splits", isCorrect: true },
        { id: "c", text: "To convert categorical data into numerical data", isCorrect: false },
        { id: "d", text: "To increase the execution speed of the machine learning model", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q2",
      question: "In a 5-fold cross-validation, how many times is the model trained?",
      questionAr: "في التحقق المتقاطع بـ 5 أجزاء (5-fold)، كم مرة يتم تدريب النموذج؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "1 time", isCorrect: false },
        { id: "b", text: "2 times", isCorrect: false },
        { id: "c", text: "5 times", isCorrect: true },
        { id: "d", text: "10 times", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q3",
      question: "Which features (X) were used to train the GaussianNB model in the Product Recommendation System?",
      questionAr: "ما هي الميزات (X) التي استخدمت لتدريب نموذج GaussianNB في نظام توصية المنتجات؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "userId and rating", isCorrect: false },
        { id: "b", text: "productId and category", isCorrect: false },
        { id: "c", text: "category_code and price", isCorrect: true },
        { id: "d", text: "userId and price", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q4",
      question: "What does model.predict_proba(X)[:, 1] return in the recommendation system?",
      questionAr: "ماذا ترجع model.predict_proba(X)[:, 1] في نظام التوصية؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "The predicted rating out of 5 stars", isCorrect: false },
        { id: "b", text: "The probability that the user will dislike the product (class 0)", isCorrect: false },
        { id: "c", text: "The probability that the user will like the product (class 1)", isCorrect: true },
        { id: "d", text: "The accuracy score of the model on the test data", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q5",
      question: "Why do we use the drop_duplicates() function before extracting the top 10 products?",
      questionAr: "لماذا نستخدم دالة drop_duplicates() قبل استخراج أفضل 10 منتجات؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "To ensure we do not recommend the exact same product multiple times if it appears multiple times in the merged dataframe", isCorrect: true },
        { id: "b", text: "To drop users who have rated the same product more than once", isCorrect: false },
        { id: "c", text: "To remove products that have the exact same price as other products", isCorrect: false },
        { id: "d", text: "To delete missing data rows from the DataFrame", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q6",
      question: "What is the advantage of StratifiedKFold over regular KFold?",
      questionAr: "ما هي ميزة StratifiedKFold على KFold العادي؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "It runs faster than regular KFold", isCorrect: false },
        { id: "b", text: "It ensures each fold has the same proportion of class labels as the full dataset", isCorrect: true },
        { id: "c", text: "It automatically tunes the model's hyperparameters", isCorrect: false },
        { id: "d", text: "It uses more memory to achieve better accuracy", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q7",
      question: "Why is setting shuffle=True recommended when using StratifiedKFold?",
      questionAr: "لماذا يُنصح بتعيين shuffle=True عند استخدام StratifiedKFold؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "To reduce the number of folds needed", isCorrect: false },
        { id: "b", text: "To prevent ordering bias by randomizing the data before splitting", isCorrect: true },
        { id: "c", text: "To make the model train on all folds simultaneously", isCorrect: false },
        { id: "d", text: "To automatically balance the class labels", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q8",
      question: "What does the 'user_like' column represent after preprocessing in the Product Recommendation System?",
      questionAr: "ماذا يمثل عمود 'user_like' بعد المعالجة المسبقة في نظام التوصية؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "The original numerical rating given by the user (1–5)", isCorrect: false },
        { id: "b", text: "A binary value: 1 if the rating was 4 or above, 0 otherwise", isCorrect: true },
        { id: "c", text: "The encoded product category as a number", isCorrect: false },
        { id: "d", text: "The predicted probability of liking a product", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q9",
      question: "In the Product Recommendation System, what is the purpose of using .astype('category').cat.codes on the 'category' column?",
      questionAr: "في نظام التوصية، ما الغرض من استخدام .astype('category').cat.codes على عمود 'category'؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "To filter out rare product categories from the dataset", isCorrect: false },
        { id: "b", text: "To convert text category names into integer codes that the model can process", isCorrect: true },
        { id: "c", text: "To sort products alphabetically by category name", isCorrect: false },
        { id: "d", text: "To count how many products belong to each category", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q10",
      question: "Which metric measures, out of all products actually liked by users, how many the model successfully identified?",
      questionAr: "أي مقياس يقيس، من بين جميع المنتجات التي أعجبت المستخدمين فعلياً، كم عدد التي تعرّف عليها النموذج بنجاح؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Accuracy", isCorrect: false },
        { id: "b", text: "Precision", isCorrect: false },
        { id: "c", text: "Recall", isCorrect: true },
        { id: "d", text: "F1 Score", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q11",
      question: "After calling cross_val_score with n_splits=5, how many accuracy scores are returned?",
      questionAr: "بعد استدعاء cross_val_score مع n_splits=5، كم عدد درجات الدقة التي يتم إرجاعها؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "1 — a single averaged score", isCorrect: false },
        { id: "b", text: "5 — one score per fold", isCorrect: true },
        { id: "c", text: "10 — two scores per fold", isCorrect: false },
        { id: "d", text: "0 — scores are printed, not returned", isCorrect: false },
      ],
    },
    {
      id: "ip-l10-q12",
      question: "Why is GaussianNB a suitable model choice for the Product Recommendation System?",
      questionAr: "لماذا يُعدّ GaussianNB خياراً مناسباً للنموذج في نظام توصية المنتجات؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "Because it only works with text data like product categories", isCorrect: false },
        { id: "b", text: "Because it assumes features follow a Gaussian (normal) distribution, which suits continuous features like price", isCorrect: true },
        { id: "c", text: "Because it requires no training data at all", isCorrect: false },
        { id: "d", text: "Because it can handle images of products directly", isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: "ip-l10-w1",
      question: "Briefly explain how K-Fold Cross Validation works.",
      questionAr: "اشرح باختصار كيف يعمل التحقق المتقاطع (K-Fold Cross Validation).",
      modelAnswer: "It splits the dataset into K equal parts (folds). It then trains the model K times, each time keeping one fold as the test set and using the remaining K-1 folds for training. Finally, it averages the performance scores from all K iterations to provide a reliable estimate of the model's accuracy.",
      modelAnswerAr: "يقوم بتقسيم البيانات إلى K أجزاء متساوية. ثم يدرب النموذج K من المرات، وفي كل مرة يستخدم جزءاً واحداً للاختبار والأجزاء K-1 المتبقية للتدريب. في النهاية، يتم حساب متوسط الأداء من جميع التكرارات لتقديم تقدير موثوق لدقة النموذج.",
    },
    {
      id: "ip-l10-w2",
      question: "In the Product Recommendation System, how is the 'user_like' target variable created from the 'rating' column?",
      questionAr: "في نظام توصية المنتجات، كيف يتم إنشاء متغير الهدف 'user_like' من عمود التقييم 'rating'؟",
      modelAnswer: "The 'user_like' variable is created using a lambda function that checks the 'rating'. If the rating is greater than or equal to 4, it sets 'user_like' to 1 (representing that the user likes it). Otherwise, it sets it to 0 (representing that the user dislikes it).",
      modelAnswerAr: "يتم إنشاء متغير 'user_like' باستخدام دالة lambda تفحص التقييم (rating). إذا كان التقييم أكبر من أو يساوي 4، يتم تعيين قيمته إلى 1 (بمعنى أن المستخدم أعجبه). وإلا يتم تعيينه إلى 0 (بمعنى أنه لم يعجبه).",
    },
    {
      id: "ip-l10-w3",
      question: "Explain the difference between Precision and Recall in the context of the Product Recommendation System.",
      questionAr: "اشرح الفرق بين الدقة (Precision) والاستدعاء (Recall) في سياق نظام توصية المنتجات.",
      modelAnswer: "Precision measures, out of all the products the model predicted a user would like, what fraction were actually liked. A high precision means the model rarely suggests products the user dislikes. Recall measures, out of all the products the user actually liked, what fraction the model correctly identified. A high recall means the model misses few genuinely good products. There is often a trade-off between the two.",
      modelAnswerAr: "الدقة (Precision) تقيس، من بين جميع المنتجات التي توقع النموذج أن المستخدم سيحبها، كم كانت صحيحة فعلاً. الاستدعاء (Recall) يقيس، من بين جميع المنتجات التي أحبها المستخدم فعلاً، كم عدد التي اكتشفها النموذج بشكل صحيح. غالباً ما يوجد توازن بين الاثنين.",
    },
  ],
};