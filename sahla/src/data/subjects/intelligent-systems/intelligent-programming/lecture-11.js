export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 11,
  title: 'Natural Language Processing (NLP)',
  titleAr: 'معالجة اللغات الطبيعية (NLP)',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 What is Natural Language Processing (NLP)?</h2>
<p><strong>Natural Language Processing (NLP)</strong> is a subfield of Artificial Intelligence (AI) that enables machines to understand, interpret, generate, and interact using human language. It bridges the gap between how humans communicate (naturally, ambiguously, contextually) and how computers process data (structured, numerical, precise).</p>

<h2>🔹 Common NLP Applications</h2>
<ul>
  <li><strong>Chatbots & Virtual Assistants:</strong> e.g., Siri, Alexa, Google Assistant — understand voice/text commands and respond naturally.</li>
  <li><strong>Translation:</strong> e.g., Google Translate — automatically converts text between languages.</li>
  <li><strong>Sentiment Analysis:</strong> Analyzes product reviews or social media posts to determine if the sentiment is positive, negative, or neutral.</li>
  <li><strong>Speech-to-Text / Text-to-Speech:</strong> Converting spoken language into text or vice versa (used in voice assistants, transcription tools).</li>
</ul>

<h2>🔹 Goals of NLP</h2>
<ul>
  <li>Understand the structure and meaning of text or speech.</li>
  <li>Convert natural language into a structured format that computers can easily process and analyze.</li>
  <li>Generate meaningful and contextually relevant language in return.</li>
</ul>

<h2>🔹 Text Cleaning and Preprocessing</h2>
<p>Before any NLP model can work with text, the raw text must be cleaned. This step is critical — garbage in, garbage out.</p>

<h3>Stopword Removal</h3>
<p>Stopwords are extremely common words like <code>the</code>, <code>is</code>, <code>and</code>, <code>in</code>, <code>of</code>, <code>to</code>, <code>was</code>. They act as "syntactic glue" — they hold sentences together grammatically but carry <strong>little meaningful information</strong> for most NLP tasks. Removing them reduces noise and improves model efficiency.</p>

<h3>Stemming vs. Lemmatization</h3>
<p>Both techniques reduce words to their root form, but they work differently:</p>
<ul>
  <li><strong>Stemming:</strong> Crudely chops off word suffixes. It is <strong>fast but often inaccurate</strong>. Example: <code>"teaching"</code> → <code>"teach"</code>, but <code>"studies"</code> might become <code>"studi"</code> (not a real word).</li>
  <li><strong>Lemmatization (Smarter):</strong> Uses vocabulary and grammar rules to convert a word to its proper dictionary base form. Example: <code>"better"</code> → <code>"good"</code>, <code>"studies"</code> → <code>"study"</code>. It is <strong>slower but more accurate</strong>.</li>
</ul>

<h3>Preprocessing Pipeline (Case Study)</h3>
<div class="code-block"><span class="keyword">import</span> nltk
<span class="keyword">from</span> nltk.corpus <span class="keyword">import</span> stopwords
<span class="keyword">from</span> nltk.stem <span class="keyword">import</span> PorterStemmer
<span class="keyword">import</span> re

nltk.<span class="function">download</span>('stopwords')
stop_words = <span class="function">set</span>(stopwords.<span class="function">words</span>('english'))
stemmer = <span class="function">PorterStemmer</span>()

<span class="keyword">def</span> <span class="function">preprocess_text</span>(text):
    <span class="comment"># Lowercase + remove punctuation</span>
    text = re.<span class="function">sub</span>(r'[^\w\s]', '', text.<span class="function">lower</span>())
    tokens = text.<span class="function">split</span>()
    <span class="comment"># Remove stopwords and stem each token</span>
    tokens = [stemmer.<span class="function">stem</span>(word) <span class="keyword">for</span> word <span class="keyword">in</span> tokens <span class="keyword">if</span> word <span class="keyword">not in</span> stop_words]
    <span class="keyword">return</span> ' '.<span class="function">join</span>(tokens)

<span class="comment"># Example:
# Input:  "I loved this product! It's amazing and works well."
# Output: "love product amaz work well"</span></div>

<h2>🔹 Bag of Words (BoW)</h2>
<p><strong>Bag of Words</strong> is one of the simplest text representation models. It:</p>
<ul>
  <li>Ignores grammar, word order, and context.</li>
  <li>Treats each document as a "bag" of words.</li>
  <li>Just <strong>counts how often each word appears</strong>.</li>
</ul>
<p><strong>Example:</strong> Given two sentences:</p>
<ol>
  <li><em>"I love NLP"</em></li>
  <li><em>"I love AI and NLP"</em></li>
</ol>
<p>Vocabulary: <code>['I', 'love', 'NLP', 'AI', 'and']</code></p>
<p>BoW matrix:</p>
<ul>
  <li>Doc 1: <code>[1, 1, 1, 0, 0]</code></li>
  <li>Doc 2: <code>[1, 1, 1, 1, 1]</code></li>
</ul>

<div class="code-block"><span class="keyword">from</span> sklearn.feature_extraction.text <span class="keyword">import</span> CountVectorizer

corpus = ["I love NLP", "I love AI and NLP"]
vectorizer = <span class="function">CountVectorizer</span>()
X = vectorizer.<span class="function">fit_transform</span>(corpus)
<span class="function">print</span>(vectorizer.<span class="function">get_feature_names_out</span>())
<span class="function">print</span>(X.<span class="function">toarray</span>())</div>

<h3>Sparse Matrix Problem</h3>
<p>In real datasets with 10,000 documents and 100,000 unique words, most documents use only a tiny fraction of the vocabulary. The resulting BoW matrix is mostly zeros — this is called a <strong>sparse matrix</strong>. It wastes memory and makes computation slow.</p>

<h2>🔹 TF-IDF (Term Frequency – Inverse Document Frequency)</h2>
<p>BoW has a major problem: common words like <code>"the"</code>, <code>"is"</code> get high counts but carry <strong>little meaning</strong>. TF-IDF solves this by downweighting words that appear frequently across <strong>all documents</strong> and upweighting words that are distinctive to a specific document.</p>
<ul>
  <li><strong>TF (Term Frequency):</strong> How often a word appears in a single document.</li>
  <li><strong>IDF (Inverse Document Frequency):</strong> Penalizes words that appear in many documents (common = less informative).</li>
</ul>
<div class="code-block"><span class="keyword">from</span> sklearn.feature_extraction.text <span class="keyword">import</span> TfidfVectorizer

corpus = ["I love NLP", "I love AI and NLP"]
vectorizer = <span class="function">TfidfVectorizer</span>()
X = vectorizer.<span class="function">fit_transform</span>(corpus)
<span class="function">print</span>(vectorizer.<span class="function">get_feature_names_out</span>())
<span class="function">print</span>(X.<span class="function">toarray</span>())</div>
<p>📌 In the TF-IDF output: <code>"love"</code> and <code>"NLP"</code> appear in <strong>both</strong> documents so they get <strong>lower</strong> scores. <code>"AI"</code> and <code>"and"</code> appear in only one document so they get <strong>higher</strong> relative scores — making them more distinctive.</p>

<h2>🔹 What is Sentiment Analysis?</h2>
<p><strong>Sentiment Analysis</strong> is an NLP task that determines the <strong>emotional tone</strong> behind a piece of text. It answers questions like:</p>
<ul>
  <li>Is this review positive, negative, or neutral?</li>
  <li>Does this tweet express anger, joy, or sadness?</li>
  <li>Is the customer satisfied or unhappy?</li>
</ul>

<h3>Types of Sentiment Analysis</h3>
<ul>
  <li><strong>Binary Classification:</strong> Positive vs. Negative. Example: <em>"I love this phone!"</em> → Positive.</li>
  <li><strong>Multi-class Classification:</strong> Positive, Neutral, or Negative. Example: <em>"The product is okay."</em> → Neutral.</li>
  <li><strong>Emotion Detection:</strong> Joy, anger, sadness, surprise, etc. Example: <em>"I'm so frustrated with the delay!"</em> → Anger.</li>
</ul>

<h3>Approaches</h3>
<ul>
  <li><strong>Rule-Based:</strong> Uses dictionaries with predefined sentiment scores. Example with TextBlob: <code>TextBlob("This movie was amazing!").sentiment</code> → <code>Sentiment(polarity=0.75, subjectivity=0.6)</code>. Polarity ranges from -1 (very negative) to +1 (very positive).</li>
  <li><strong>Machine Learning:</strong> Collect labeled data → Preprocess → Vectorize (BoW/TF-IDF) → Train a classifier (Naive Bayes, Logistic Regression, SVM) → Evaluate.</li>
</ul>

<h2>🔹 Case Study: Sentiment Analysis on Amazon Reviews</h2>
<p>Goal: Classify reviews as <strong>positive (1)</strong> or <strong>negative (0)</strong> using a Bagging + Random Forest classifier.</p>

<h3>Step 1: Load Data</h3>
<div class="code-block"><span class="keyword">import</span> pandas <span class="keyword">as</span> pd
df = pd.<span class="function">read_csv</span>('amazon_reviews.csv')
<span class="function">print</span>(df.<span class="function">head</span>())
<span class="comment"># Columns: review_text, label (1=positive, 0=negative)</span></div>

<h3>Step 2: Preprocess</h3>
<p>Apply the preprocessing pipeline (lowercase, remove punctuation, remove stopwords, stem) defined above to the <code>review_text</code> column:</p>
<div class="code-block">df['cleaned_review'] = df['review_text'].<span class="function">astype</span>(str).<span class="function">apply</span>(preprocess_text)</div>

<h3>Step 3: Vectorize</h3>
<p>Convert cleaned text to a numeric matrix using <code>CountVectorizer</code> with <code>max_features=5000</code> (keeps only the 5000 most frequent words to control matrix size):</p>
<div class="code-block"><span class="keyword">from</span> sklearn.feature_extraction.text <span class="keyword">import</span> CountVectorizer
vectorizer = <span class="function">CountVectorizer</span>(max_features=5000)
X = vectorizer.<span class="function">fit_transform</span>(df['cleaned_review']).<span class="function">toarray</span>()
y = df['label']</div>

<h3>Step 4: Split</h3>
<div class="code-block"><span class="keyword">from</span> sklearn.model_selection <span class="keyword">import</span> train_test_split
X_train, X_test, y_train, y_test = <span class="function">train_test_split</span>(X, y, test_size=0.2, random_state=42)</div>

<h3>Step 5: Train with Bagging + Random Forest</h3>
<p><strong>Bagging</strong> (Bootstrap Aggregating) trains multiple models on different random subsets of the data and combines their predictions. Using <code>RandomForestClassifier</code> as the base estimator inside <code>BaggingClassifier</code> adds an extra layer of ensemble learning for higher accuracy and robustness.</p>
<div class="code-block"><span class="keyword">from</span> sklearn.ensemble <span class="keyword">import</span> BaggingClassifier, RandomForestClassifier

base_rf = <span class="function">RandomForestClassifier</span>(n_estimators=100, max_depth=<span class="keyword">None</span>, random_state=42)
bagging_model = <span class="function">BaggingClassifier</span>(base_estimator=base_rf, n_estimators=10, random_state=42)
bagging_model.<span class="function">fit</span>(X_train, y_train)</div>

<h3>Step 6: Evaluate</h3>
<div class="code-block"><span class="keyword">from</span> sklearn.metrics <span class="keyword">import</span> accuracy_score, classification_report, confusion_matrix

y_pred = bagging_model.<span class="function">predict</span>(X_test)
<span class="function">print</span>("Accuracy:", <span class="function">accuracy_score</span>(y_test, y_pred))
<span class="function">print</span>("Classification Report:\\n", <span class="function">classification_report</span>(y_test, y_pred))</div>`,

        bodyAr: `<h2>🔹 ما هي معالجة اللغات الطبيعية (NLP)؟</h2>
<p>هي فرع من فروع الذكاء الاصطناعي (AI) يُمكن الآلات من فهم اللغة البشرية، تفسيرها، توليدها، والتفاعل باستخدامها. تعمل كجسر بين أسلوب تواصل البشر (طبيعي، غامض، سياقي) وطريقة معالجة الحواسيب للبيانات (هيكلية، رقمية، دقيقة).</p>

<h2>🔹 تطبيقات الـ NLP الشائعة</h2>
<ul>
  <li><strong>روبوتات المحادثة (Chatbots):</strong> مثل Siri و Alexa — تفهم الأوامر الصوتية والنصية وترد بشكل طبيعي.</li>
  <li><strong>الترجمة الآلية:</strong> مثل مترجم جوجل (Google Translate).</li>
  <li><strong>تحليل المشاعر (Sentiment Analysis):</strong> تحليل مراجعات المنتجات أو منشورات التواصل الاجتماعي.</li>
  <li><strong>تحويل الكلام إلى نص / النص إلى كلام:</strong> التفاعل الصوتي مع الأجهزة.</li>
</ul>

<h2>🔹 تنظيف النصوص ومعالجتها المسبقة</h2>
<ul>
  <li><strong>إزالة كلمات التوقف (Stopwords):</strong> كلمات شائعة مثل the، is، and لا تحمل معنى مهماً وتُزال لتقليل الضوضاء.</li>
  <li><strong>الجذع (Stemming):</strong> يحذف اللواحق بشكل خام وسريع لكنه أقل دقة. مثال: "teaching" ← "teach".</li>
  <li><strong>الإرجاع للجذر المعجمي (Lemmatization):</strong> يستخدم قواعد المفردات والنحو للوصول للشكل الأساسي الصحيح. أدق لكن أبطأ. مثال: "better" ← "good".</li>
</ul>

<h2>🔹 نموذج حقيبة الكلمات (Bag of Words)</h2>
<p>يُمثل النص بعد الكلمات فقط دون الاهتمام بالترتيب أو السياق. يحسب تكرار كل كلمة في كل وثيقة. ينتج مصفوفة متفرقة (Sparse Matrix) في مجموعات البيانات الكبيرة.</p>

<h2>🔹 TF-IDF</h2>
<p>يحل مشكلة الكلمات الشائعة في BoW. يُعطي وزناً أعلى للكلمات المميزة لوثيقة معينة، ووزناً أقل للكلمات الشائعة في جميع الوثائق.</p>

<h2>🔹 تحليل المشاعر (Sentiment Analysis)</h2>
<p>مهمة NLP تحدد النبرة العاطفية وراء النص. أنواعه: ثنائي (إيجابي/سلبي)، متعدد الفئات (إيجابي/محايد/سلبي)، وكشف المشاعر (فرح/غضب/حزن). يمكن بناؤه بطرق مبنية على قواعد (مثل TextBlob) أو بالتعلم الآلي.</p>

<h2>🔹 دراسة الحالة: تحليل مراجعات Amazon</h2>
<p>نهدف إلى تصنيف المراجعات كإيجابية (1) أو سلبية (0) باستخدام: تنظيف النص ← CountVectorizer ← BaggingClassifier مع RandomForest ← تقييم النموذج.</p>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "NLP is a branch of AI focused on the interaction between computers and human language.",
      "Key applications include Chatbots (Siri, Alexa), Machine Translation, Sentiment Analysis, and Speech-to-Text.",
      "Stopwords (the, is, and) are removed during preprocessing because they add noise without meaningful information.",
      "Stemming is fast but inaccurate (chops suffixes); Lemmatization is slower but returns proper dictionary base forms.",
      "Bag of Words (BoW) counts word frequencies but ignores grammar, order, and context.",
      "Large BoW matrices are mostly zeros — called sparse matrices — which waste memory.",
      "TF-IDF improves on BoW by downweighting common words and upweighting words distinctive to a document.",
      "Sentiment Analysis classifies text as positive/negative/neutral; types include binary, multi-class, and emotion detection.",
      "TextBlob is a rule-based tool; polarity ranges from -1 (very negative) to +1 (very positive).",
      "In the Amazon case study: preprocess → CountVectorizer (max_features=5000) → BaggingClassifier with RandomForest.",
      "BaggingClassifier wraps RandomForestClassifier to add an extra ensemble layer for better robustness.",
      "max_features=5000 in CountVectorizer keeps only the 5000 most frequent words to control matrix size.",
    ],
    pointsAr: [
      "الـ NLP هي فرع من الذكاء الاصطناعي يركز على تفاعل الكمبيوتر مع اللغات البشرية.",
      "من أهم تطبيقاته روبوتات الدردشة (Siri، Alexa)، الترجمة الآلية، وتحليل المشاعر.",
      "كلمات التوقف (the، is، and) تُزال في المعالجة المسبقة لأنها تضيف ضوضاء دون معنى مفيد.",
      "الجذع (Stemming) سريع لكن غير دقيق؛ الإرجاع المعجمي (Lemmatization) أبطأ لكن أدق.",
      "نموذج BoW يعد تكرارات الكلمات لكنه يتجاهل الترتيب والسياق.",
      "المصفوفات الناتجة عن BoW في البيانات الكبيرة تكون متفرقة (Sparse) وتهدر الذاكرة.",
      "TF-IDF يحسّن BoW بتخفيض وزن الكلمات الشائعة وزيادة وزن الكلمات المميزة.",
      "تحليل المشاعر يصنّف النصوص كإيجابية/سلبية/محايدة؛ أنواعه: ثنائي، متعدد الفئات، وكشف المشاعر.",
      "TextBlob أداة مبنية على قواعد؛ القطبية (polarity) تتراوح بين -1 (سلبي جداً) و+1 (إيجابي جداً).",
      "في دراسة حالة Amazon: تنظيف ← CountVectorizer (max_features=5000) ← BaggingClassifier مع RandomForest.",
      "BaggingClassifier يُغلف RandomForestClassifier لإضافة طبقة تجميع إضافية لمزيد من المتانة.",
      "max_features=5000 في CountVectorizer يحتفظ فقط بأكثر 5000 كلمة تكراراً للتحكم في حجم المصفوفة.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l11-q1',
      question: "Which AI subfield enables machines to understand, interpret, and generate human language?",
      questionAr: "ما هو فرع الذكاء الاصطناعي الذي يُمكّن الآلات من فهم وتفسير وتوليد اللغة البشرية؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Computer Vision', isCorrect: false },
        { id: 'b', text: 'Natural Language Processing (NLP)', isCorrect: true },
        { id: 'c', text: 'Reinforcement Learning', isCorrect: false },
        { id: 'd', text: 'Robotics', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q2',
      question: "Which of the following is an example of an NLP application?",
      questionAr: "أي مما يلي يُعد مثالاً على تطبيقات معالجة اللغات الطبيعية (NLP)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Predicting house prices using Linear Regression', isCorrect: false },
        { id: 'b', text: 'Sorting a list of integers', isCorrect: false },
        { id: 'c', text: 'Sentiment Analysis on Amazon Product Reviews', isCorrect: true },
        { id: 'd', text: 'Identifying faces in a photograph', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q3',
      question: "Siri and Alexa are prime examples of which NLP application?",
      questionAr: "يُعتبر Siri و Alexa أمثلة بارزة لأي من تطبيقات NLP؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Chatbots / Virtual Assistants', isCorrect: true },
        { id: 'b', text: 'Image Segmentation', isCorrect: false },
        { id: 'c', text: 'Anomaly Detection', isCorrect: false },
        { id: 'd', text: 'Time Series Forecasting', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q4',
      question: "What is a primary goal of NLP?",
      questionAr: "ما هو الهدف الأساسي لمعالجة اللغات الطبيعية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To increase the internet speed of AI models', isCorrect: false },
        { id: 'b', text: 'To convert natural language into a format computers can process', isCorrect: true },
        { id: 'c', text: 'To compress text files for efficient cloud storage', isCorrect: false },
        { id: 'd', text: 'To render high-quality 3D graphics in modern browsers', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q5',
      question: "Why are stopwords like 'the', 'is', and 'and' removed during text preprocessing?",
      questionAr: "لماذا تُزال كلمات التوقف مثل 'the' و 'is' و 'and' أثناء المعالجة المسبقة للنص؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Because they are misspelled and cause errors in the model', isCorrect: false },
        { id: 'b', text: 'Because they are too long to process efficiently', isCorrect: false },
        { id: 'c', text: 'Because they appear very frequently but carry little meaningful information', isCorrect: true },
        { id: 'd', text: 'Because they only appear in negative sentiment texts', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q6',
      question: "What is the key difference between Stemming and Lemmatization?",
      questionAr: "ما هو الفرق الرئيسي بين الجذع (Stemming) والإرجاع المعجمي (Lemmatization)؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Stemming uses grammar rules while Lemmatization uses brute-force suffix cutting', isCorrect: false },
        { id: 'b', text: 'Stemming crudely chops suffixes (fast but inaccurate); Lemmatization uses vocabulary rules to return a proper dictionary form (slower but accurate)', isCorrect: true },
        { id: 'c', text: 'They are identical — both return the same output for all words', isCorrect: false },
        { id: 'd', text: 'Lemmatization only works on numbers; Stemming works on text', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q7',
      question: "What does the Bag of Words (BoW) model completely ignore when representing text?",
      questionAr: "ما الذي يتجاهله نموذج حقيبة الكلمات (Bag of Words) تماماً عند تمثيل النص؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The number of unique words in the vocabulary', isCorrect: false },
        { id: 'b', text: 'The frequency of each word in a document', isCorrect: false },
        { id: 'c', text: 'Grammar, word order, and context', isCorrect: true },
        { id: 'd', text: 'The total number of documents in the corpus', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q8',
      question: "In a dataset with 10,000 documents and 100,000 unique words, why is the BoW matrix called a 'sparse matrix'?",
      questionAr: "في مجموعة بيانات تحتوي على 10,000 وثيقة و100,000 كلمة فريدة، لماذا تُسمى مصفوفة BoW 'مصفوفة متفرقة'؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Because it contains only positive integers and no zeros', isCorrect: false },
        { id: 'b', text: 'Because most documents use only a tiny fraction of the full vocabulary, resulting in a huge matrix mostly filled with zeros', isCorrect: true },
        { id: 'c', text: 'Because it stores words in alphabetical order leaving gaps', isCorrect: false },
        { id: 'd', text: 'Because it is generated using a sparse algorithm that skips common words', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q9',
      question: "How does TF-IDF improve upon the Bag of Words model?",
      questionAr: "كيف يُحسّن TF-IDF نموذج Bag of Words؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It increases the weight of all words equally to improve accuracy', isCorrect: false },
        { id: 'b', text: 'It downweights words that appear frequently across all documents, making distinctive words more important', isCorrect: true },
        { id: 'c', text: 'It removes all words that appear more than once in the corpus', isCorrect: false },
        { id: 'd', text: 'It sorts words alphabetically so the model can find them faster', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q10',
      question: "In the Amazon review case study, what does max_features=5000 in CountVectorizer do?",
      questionAr: "في دراسة حالة مراجعات Amazon، ماذا يفعل max_features=5000 في CountVectorizer؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It limits the dataset to only 5000 reviews for faster training', isCorrect: false },
        { id: 'b', text: 'It keeps only the 5000 most frequent words in the vocabulary to control the matrix size', isCorrect: true },
        { id: 'c', text: 'It generates 5000 random features from the text automatically', isCorrect: false },
        { id: 'd', text: 'It ensures each review is padded to exactly 5000 tokens', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q11',
      question: "In the Amazon review case study, why is BaggingClassifier wrapping a RandomForestClassifier used instead of a plain RandomForestClassifier?",
      questionAr: "في دراسة حالة Amazon، لماذا يُستخدم BaggingClassifier يُغلّف RandomForestClassifier بدلاً من RandomForestClassifier مباشرة؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Because RandomForest cannot handle text data without an outer wrapper', isCorrect: false },
        { id: 'b', text: 'To add an extra layer of ensemble learning — bagging trains multiple Random Forests on different data subsets for better robustness and accuracy', isCorrect: true },
        { id: 'c', text: 'Because BaggingClassifier automatically tunes the hyperparameters of RandomForest', isCorrect: false },
        { id: 'd', text: 'To reduce training time by parallelizing the Random Forest internally', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q12',
      question: "Which of the following correctly describes what TextBlob's polarity score of -1 means?",
      questionAr: "أي مما يلي يصف بشكل صحيح معنى درجة القطبية (polarity) = -1 في TextBlob؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The text is completely neutral with no emotional content', isCorrect: false },
        { id: 'b', text: 'The analysis failed and returned an error code', isCorrect: false },
        { id: 'c', text: 'The text is extremely negative in sentiment', isCorrect: true },
        { id: 'd', text: 'The text is extremely positive in sentiment', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q13',
      question: "What type of sentiment analysis would classify the review 'I'm so frustrated with the delay!' as expressing 'Anger'?",
      questionAr: "أي نوع من تحليل المشاعر يُصنّف المراجعة 'I'm so frustrated with the delay!' على أنها تعبّر عن الغضب؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Binary Classification', isCorrect: false },
        { id: 'b', text: 'Multi-class Classification', isCorrect: false },
        { id: 'c', text: 'Emotion Detection', isCorrect: true },
        { id: 'd', text: 'Stopword Analysis', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q14',
      question: "After applying the preprocess_text() function to 'I loved this product! It\\'s amazing and works well.', what is the expected output?",
      questionAr: "بعد تطبيق دالة preprocess_text() على الجملة 'I loved this product! It\\'s amazing and works well.'، ما هو الناتج المتوقع؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '"i loved product amazing works well"', isCorrect: false },
        { id: 'b', text: '"loved product amazing works well"', isCorrect: false },
        { id: 'c', text: '"love product amaz work well"', isCorrect: true },
        { id: 'd', text: '"love product amazing work well"', isCorrect: false },
      ],
    },
    {
      id: 'ip-l11-q15',
      question: "Given the corpus ['I love NLP', 'I love AI and NLP'], which word(s) would receive a LOWER TF-IDF score compared to BoW, and why?",
      questionAr: "بالنسبة للـ corpus ['I love NLP', 'I love AI and NLP']، أي الكلمات ستحصل على درجة TF-IDF أقل مقارنةً بـ BoW، ولماذا؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '"AI" and "and" — because they appear in only one document', isCorrect: false },
        { id: 'b', text: '"love" and "NLP" — because they appear in both documents, making them less distinctive', isCorrect: true },
        { id: 'c', text: '"I" — because it is a pronoun and always gets a zero score', isCorrect: false },
        { id: 'd', text: 'All words equally — TF-IDF gives the same score as BoW for small corpora', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l11-w1',
      question: "List three common applications of Natural Language Processing (NLP).",
      questionAr: "اذكر ثلاثة تطبيقات شائعة لمعالجة اللغات الطبيعية (NLP).",
      modelAnswer: "Three common applications are: 1) Chatbots and Virtual Assistants (like Siri or Alexa), 2) Language Translation (like Google Translate), and 3) Sentiment Analysis (understanding the emotion behind product reviews).",
      modelAnswerAr: "ثلاثة تطبيقات شائعة هي: 1) روبوتات المحادثة والمساعدين الافتراضيين (مثل Siri)، 2) الترجمة الآلية (مثل مترجم جوجل)، و 3) تحليل المشاعر (فهم المشاعر في مراجعات المنتجات).",
    },
    {
      id: 'ip-l11-w2',
      question: "What are the core goals of Natural Language Processing?",
      questionAr: "ما هي الأهداف الأساسية لمعالجة اللغات الطبيعية؟",
      modelAnswer: "The core goals are to understand the structure and meaning of text or speech, to convert unstructured natural language into a format that computers can process, and to generate meaningful and natural language in return.",
      modelAnswerAr: "الأهداف الأساسية هي فهم هيكل ومعنى النص أو الكلام، تحويل اللغة الطبيعية غير المهيكلة إلى تنسيق يمكن للحواسيب معالجته، وتوليد لغة ذات معنى وطبيعية للرد.",
    },
    {
      id: 'ip-l11-w3',
      question: "Explain the difference between Stemming and Lemmatization with an example of each.",
      questionAr: "اشرح الفرق بين الجذع (Stemming) والإرجاع المعجمي (Lemmatization) مع مثال لكل منهما.",
      modelAnswer: "Stemming crudely removes word suffixes to get a root — it is fast but can produce non-real words. Example: 'teaching' → 'teach', but 'studies' might become 'studi'. Lemmatization uses vocabulary and grammar rules to return the proper dictionary base form — it is slower but accurate. Example: 'better' → 'good', 'studies' → 'study'.",
      modelAnswerAr: "الجذع (Stemming) يحذف اللواحق بشكل خام للحصول على الجذر — سريع لكن قد ينتج كلمات غير حقيقية. مثال: 'teaching' ← 'teach'، لكن 'studies' قد تصبح 'studi'. الإرجاع المعجمي (Lemmatization) يستخدم قواعد المفردات والنحو للحصول على الشكل الصحيح — أبطأ لكن أدق. مثال: 'better' ← 'good'، 'studies' ← 'study'.",
    },
    {
      id: 'ip-l11-w4',
      question: "Describe the full pipeline used in the Amazon Review Sentiment Analysis case study from raw text to model evaluation.",
      questionAr: "صف المراحل الكاملة المستخدمة في دراسة حالة تحليل مراجعات Amazon من النص الخام حتى تقييم النموذج.",
      modelAnswer: "1) Load the CSV data (review_text, label columns). 2) Preprocess the text: lowercase, remove punctuation with regex, remove stopwords, and apply PorterStemmer. 3) Vectorize cleaned text using CountVectorizer with max_features=5000. 4) Split data into 80% train / 20% test. 5) Train a BaggingClassifier wrapping a RandomForestClassifier (n_estimators=100) with 10 bagging estimators. 6) Evaluate using accuracy_score and classification_report.",
      modelAnswerAr: "1) تحميل بيانات CSV (عمودا review_text و label). 2) معالجة النص مسبقاً: تحويل لأحرف صغيرة، إزالة علامات الترقيم، إزالة كلمات التوقف، وتطبيق PorterStemmer. 3) تحويل النص المنظّف إلى متجهات باستخدام CountVectorizer مع max_features=5000. 4) تقسيم البيانات: 80% تدريب و20% اختبار. 5) تدريب BaggingClassifier يُغلّف RandomForestClassifier (n_estimators=100) مع 10 نماذج bagging. 6) التقييم باستخدام accuracy_score و classification_report.",
    },
  ],
};