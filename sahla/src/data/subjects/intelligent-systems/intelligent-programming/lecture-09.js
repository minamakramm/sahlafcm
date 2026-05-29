export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 9,
  title: 'Movie Recommendation System Project',
  titleAr: 'مشروع نظام توصية الأفلام',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Project Overview</h2>
<p>In this project, we build a <strong>Movie Recommendation System</strong> from scratch using Python. We use the <strong>MovieLens dataset</strong> and apply a <strong>Naive Bayes classifier</strong> to predict whether a user will like a movie based on its genre.</p>

<h2>🔹 Step 1: Import Libraries</h2>
<p>We need <code>pandas</code> for data handling, <code>scikit-learn</code> for the machine learning model, <code>requests</code> for the OMDb API, and <code>streamlit</code> for the web interface.</p>
<div class="code-block"><span class="keyword">import</span> pandas <span class="keyword">as</span> pd
<span class="keyword">import</span> requests
<span class="keyword">from</span> sklearn.model_selection <span class="keyword">import</span> train_test_split
<span class="keyword">from</span> sklearn.naive_bayes <span class="keyword">import</span> GaussianNB
<span class="keyword">from</span> sklearn.metrics <span class="keyword">import</span> accuracy_score, precision_score, recall_score
<span class="keyword">import</span> streamlit <span class="keyword">as</span> st</div>

<h2>🔹 Step 2: Load & Preprocess Data</h2>
<p>We load the <code>movies.csv</code> and <code>ratings.csv</code> files, merge them on the <em>movieId</em> column, and prepare the target variable.</p>
<div class="code-block"><span class="comment"># Load and Merge</span>
movies = pd.<span class="function">read_csv</span>(<span class="string">'movies.csv'</span>)
ratings = pd.<span class="function">read_csv</span>(<span class="string">'ratings.csv'</span>)
df = pd.<span class="function">merge</span>(ratings, movies, on=<span class="string">'movieId'</span>)

<span class="comment"># Convert ratings to binary (1 if >= 4.0, else 0)</span>
df[<span class="string">'user_rating'</span>] = df[<span class="string">'rating'</span>].<span class="function">apply</span>(<span class="keyword">lambda</span> x: <span class="number">1</span> <span class="keyword">if</span> x >= <span class="number">4.0</span> <span class="keyword">else</span> <span class="number">0</span>)

<span class="comment"># Encoding genre names into numbers</span>
df[<span class="string">'genre_code'</span>] = df[<span class="string">'genres'</span>].<span class="function">astype</span>(<span class="string">'category'</span>).cat.codes

X = df[[<span class="string">'genre_code'</span>]]
y = df[<span class="string">'user_rating'</span>]</div>

<h2>🔹 Step 3: Train Model & Evaluate</h2>
<p>We split the data into training (70%) and testing (30%) sets, then train a <strong>Gaussian Naive Bayes</strong> model. After training, we call <code>predict()</code> on the test set and measure three metrics:</p>
<ul>
  <li><strong>Accuracy:</strong> What percentage of all predictions were correct?</li>
  <li><strong>Precision:</strong> Of all the movies predicted as "liked", how many actually were?</li>
  <li><strong>Recall:</strong> Of all the movies the user actually liked, how many did we correctly predict?</li>
</ul>
<div class="code-block"><span class="comment"># Split and Train</span>
X_train, X_test, y_train, y_test = <span class="function">train_test_split</span>(
    X, y, test_size=<span class="number">0.3</span>, random_state=<span class="number">42</span>
)
model = <span class="function">GaussianNB</span>()
model.<span class="function">fit</span>(X_train, y_train)

<span class="comment"># Evaluate</span>
y_pred = model.<span class="function">predict</span>(X_test)
<span class="function">print</span>(<span class="string">"Accuracy :"</span>, <span class="function">accuracy_score</span>(y_test, y_pred))
<span class="function">print</span>(<span class="string">"Precision:"</span>, <span class="function">precision_score</span>(y_test, y_pred))
<span class="function">print</span>(<span class="string">"Recall   :"</span>, <span class="function">recall_score</span>(y_test, y_pred))</div>

<h2>🔹 Step 4: Build the Recommendation List</h2>
<p>Before displaying results in Streamlit, we use <code>predict_proba()</code> to get the probability of each movie being "liked". We then attach this probability to the movies dataframe and sort by it to find the top recommendations.</p>
<div class="code-block"><span class="comment"># predict_proba returns [[P(0), P(1)], ...] — we take column index 1 (P(liked))</span>
movies[<span class="string">'genre_code'</span>] = movies[<span class="string">'genres'</span>].<span class="function">astype</span>(<span class="string">'category'</span>).cat.codes
movies[<span class="string">'like_probability'</span>] = model.<span class="function">predict_proba</span>(
    movies[[<span class="string">'genre_code'</span>]]
)[:, <span class="number">1</span>]

<span class="comment"># Sort descending so highest probability movies come first</span>
top_movies = movies.<span class="function">sort_values</span>(<span class="string">'like_probability'</span>, ascending=<span class="keyword">False</span>)</div>

<h2>🔹 Step 5: Build the Web App with Streamlit</h2>
<p><strong>Streamlit</strong> is a free, open-source Python library that builds web apps for data science and ML projects with minimal code. We use <code>iterrows()</code> to loop over the top 10 movies and display each one.</p>
<div class="code-block">st.<span class="function">title</span>(<span class="string">"🎬 Smart Movie Recommender"</span>)
st.<span class="function">write</span>(<span class="string">"Get your Top 10 movie recommendations based on real data!"</span>)

<span class="keyword">if</span> st.<span class="function">button</span>(<span class="string">"Show Top 10 Recommendations"</span>):
    top_10 = top_movies.<span class="function">head</span>(<span class="number">10</span>)
    <span class="keyword">for</span> index, row <span class="keyword">in</span> top_10.<span class="function">iterrows</span>():
        st.<span class="function">subheader</span>(f<span class="string">"🎬 {row['title']}"</span>)
        st.<span class="function">write</span>(f<span class="string">"Genre: {row['genres']}"</span>)
        st.<span class="function">write</span>(
            f<span class="string">"⭐ Likelihood you will like it: **{round(row['like_probability'] * 100, 2)}%**"</span>
        )</div>

<h2>🔹 Step 6: Fetch Movie Posters with OMDb API</h2>
<p>To make the app look professional, we call the <strong>OMDb API</strong> inside the loop to fetch a real movie poster. We use a <code>try/except</code> block so that a failed API call does not crash the app.</p>
<div class="code-block">        <span class="keyword">try</span>:
            api_key = <span class="string">'549de4d0'</span>
            params = {<span class="string">'t'</span>: row[<span class="string">'title'</span>], <span class="string">'apikey'</span>: api_key}
            response = requests.<span class="function">get</span>(<span class="string">'http://www.omdbapi.com/'</span>, params=params)
            data = response.<span class="function">json</span>()
            <span class="keyword">if</span> data[<span class="string">'Response'</span>] == <span class="string">'True'</span> <span class="keyword">and</span> data[<span class="string">'Poster'</span>] != <span class="string">'N/A'</span>:
                st.<span class="function">image</span>(data[<span class="string">'Poster'</span>], width=<span class="number">200</span>)
        <span class="keyword">except</span>:
            <span class="keyword">pass</span>  <span class="comment"># If the API call fails, skip the poster silently</span></div>

<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span><strong>How the OMDb block works:</strong> We send the movie title to <code>omdbapi.com</code> as a query parameter. The API returns a JSON object. We check that <code>Response == 'True'</code> (movie found) and that <code>Poster != 'N/A'</code> (a real poster image exists) before calling <code>st.image()</code> to display it.</span>
</div>`,

        bodyAr: `<h2>🔹 نظرة عامة على المشروع</h2>
<p>في هذا المشروع، نقوم ببناء <strong>نظام توصية أفلام</strong> باستخدام لغة بايثون. نستخدم خوارزمية <strong>Naive Bayes</strong> للتنبؤ بما إذا كان المستخدم سيعجب بفيلم معين بناءً على نوعه (Genre).</p>

<h2>🔹 الخطوات البرمجية</h2>
<ul>
  <li><strong>الخطوة 1 — استيراد المكتبات:</strong> pandas للبيانات، sklearn للنموذج، requests لواجهة OMDb، وstreamlit للواجهة.</li>
  <li><strong>الخطوة 2 — تحميل البيانات ومعالجتها:</strong> دمج ملفات movies.csv وratings.csv، تحويل التقييمات إلى قيم ثنائية (0/1)، وترميز أسماء الأنواع إلى أرقام باستخدام cat.codes.</li>
  <li><strong>الخطوة 3 — تدريب النموذج وتقييمه:</strong> تقسيم البيانات إلى تدريب واختبار، تدريب GaussianNB، ثم حساب Accuracy وPrecision وRecall.</li>
  <li><strong>الخطوة 4 — بناء قائمة التوصيات:</strong> استخدام predict_proba() للحصول على احتمالية إعجاب المستخدم، ثم ترتيب الأفلام تنازلياً.</li>
  <li><strong>الخطوة 5 — بناء الواجهة بـ Streamlit:</strong> عرض أفضل 10 أفلام مع العنوان والنوع ونسبة الإعجاب المتوقعة.</li>
  <li><strong>الخطوة 6 — جلب الملصقات بـ OMDb API:</strong> إرسال عنوان الفيلم للـ API واستقبال صورة الملصق لعرضها باستخدام st.image().</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Project goal: Build a Movie Recommendation System using Naive Bayes on MovieLens data.",
      "Dataset: MovieLens — movies.csv (titles, genres) merged with ratings.csv (userId, movieId, rating).",
      "Preprocessing: binary label (rating >= 4.0 → 1 else 0) and cat.codes to convert genre text to numbers.",
      "Libraries: Pandas (data), Scikit-Learn (ML model + metrics), Requests (API), Streamlit (Web App).",
      "Model evaluation uses accuracy_score, precision_score, and recall_score after calling model.predict().",
      "predict_proba() returns the probability of each class — we use column index 1 (P(liked)) to rank movies.",
      "Streamlit app: iterrows() loop displays each movie's title, genre, and like_probability percentage.",
      "OMDb API: sends movie title as a query param, receives JSON, checks Response and Poster fields, then displays via st.image().",
      "random_state=42 in train_test_split makes the data split reproducible every run.",
    ],
    pointsAr: [
      "هدف المشروع: بناء نظام توصية أفلام باستخدام Naive Bayes على بيانات MovieLens.",
      "مجموعة البيانات: MovieLens — دمج movies.csv (العناوين والأنواع) مع ratings.csv (المستخدم، الفيلم، التقييم).",
      "المعالجة المسبقة: تسمية ثنائية (تقييم >= 4.0 → 1 وإلا 0) وcat.codes لتحويل أسماء الأنواع إلى أرقام.",
      "المكتبات: Pandas للبيانات، Scikit-Learn للنموذج والمقاييس، Requests للـ API، وStreamlit للواجهة.",
      "تقييم النموذج يستخدم accuracy_score وprecision_score وrecall_score بعد استدعاء model.predict().",
      "predict_proba() تُعيد احتمالية كل فئة — نأخذ العمود رقم 1 وهو P(liked) لترتيب الأفلام.",
      "تطبيق Streamlit: حلقة iterrows() تعرض عنوان كل فيلم ونوعه ونسبة الإعجاب المتوقعة.",
      "OMDb API: يُرسل عنوان الفيلم كمعامل استعلام، يستقبل JSON، يتحقق من حقلي Response وPoster، ثم يعرضها بـ st.image().",
      "random_state=42 في train_test_split يجعل تقسيم البيانات قابلاً للتكرار في كل تشغيل.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l9-q1',
      question: "Which library is primarily used for data manipulation in the movie recommendation project?",
      questionAr: "أي مكتبة تُستخدم بشكل أساسي لمعالجة البيانات في مشروع توصية الأفلام؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Matplotlib', isCorrect: false },
        { id: 'b', text: 'Pandas', isCorrect: true },
        { id: 'c', text: 'Streamlit', isCorrect: false },
        { id: 'd', text: 'Requests', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q2',
      question: "Which machine learning algorithm is implemented in this project?",
      questionAr: "ما هي خوارزمية التعلم الآلي التي تم تنفيذها في هذا المشروع؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'K-Means Clustering', isCorrect: false },
        { id: 'b', text: 'Decision Trees', isCorrect: false },
        { id: 'c', text: 'Naive Bayes (GaussianNB)', isCorrect: true },
        { id: 'd', text: 'Linear Regression', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q3',
      question: "What is the purpose of the 'cat.codes' function in the preprocessing step?",
      questionAr: "ما هو الغرض من دالة 'cat.codes' في خطوة المعالجة المسبقة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To delete categorical data', isCorrect: false },
        { id: 'b', text: 'To encode text categories into numerical values so the ML model can process them', isCorrect: true },
        { id: 'c', text: 'To encrypt the dataset before saving it', isCorrect: false },
        { id: 'd', text: 'To visualize the category distribution as a bar chart', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q4',
      question: "Which library allows you to build a web app for your Python ML project with minimal code?",
      questionAr: "أي مكتبة تتيح لك بناء تطبيق ويب لمشروع التعلم الآلي ببايثون بأقل كود ممكن؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Flask', isCorrect: false },
        { id: 'b', text: 'Streamlit', isCorrect: true },
        { id: 'c', text: 'Django', isCorrect: false },
        { id: 'd', text: 'NumPy', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q5',
      question: "What does the model's 'fit' method do?",
      questionAr: "ماذا تفعل دالة 'fit' في النموذج؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It reshapes the raw dataset into a multi-dimensional array format to ensure the Streamlit visualization component can render the graphs correctly.', isCorrect: false },
        { id: 'b', text: 'It trains the machine learning model by finding the patterns and relationships between the input features (X) and the target labels (y) provided in the training set.', isCorrect: true },
        { id: 'c', text: 'It automatically deletes all missing values and outliers from the ratings column to prevent the Naive Bayes algorithm from throwing a runtime overflow error.', isCorrect: false },
        { id: 'd', text: 'It makes a final prediction on the unseen testing data to calculate the accuracy and precision metrics for the movie recommendation system dashboard.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q6',
      question: "In Step 2, why do we merge the 'ratings' and 'movies' datasets?",
      questionAr: "في الخطوة 2، لماذا ندمج مجموعتي بيانات 'ratings' و 'movies'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To delete all movies from the local CSV files that have no user ratings to save hard drive space and improve the overall training speed.', isCorrect: false },
        { id: 'b', text: 'To create a single unified dataframe that contains both the user ratings and the movie metadata (titles and genres) linked by a common "movieId".', isCorrect: true },
        { id: 'c', text: 'To encrypt the sensitive user information before sending the data to the Naive Bayes classifier for processing and model evaluation.', isCorrect: false },
        { id: 'd', text: 'To convert the floating point rating values into 64-bit integer formats to ensure compatibility with the legacy Pandas merging algorithms.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q7',
      question: "What is the result of the lambda function applied to the 'rating' column?",
      questionAr: "ما هي نتيجة دالة lambda المطبقة على عمود 'rating'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It calculates the rolling average rating for each movie genre to determine which category is trending among the active user base.', isCorrect: false },
        { id: 'b', text: 'It converts the numerical rating into a binary classification where 1 represents a "liked" movie (rating >= 4.0) and 0 represents an "unliked" movie.', isCorrect: true },
        { id: 'c', text: 'It rounds the rating to the nearest integer value to simplify the mathematical calculations required by the probabilistic Naive Bayes model.', isCorrect: false },
        { id: 'd', text: 'It removes all entries from the dataframe where the rating value is below 4.0 to focus the system only on the highest-rated content.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q8',
      question: "Which three scikit-learn metrics are used to evaluate the model's performance?",
      questionAr: "ما هي المقاييس الثلاثة من scikit-learn المستخدمة لتقييم أداء النموذج؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'mean_squared_error, r2_score, and explained_variance_score — the standard regression evaluation metrics for continuous output prediction models.', isCorrect: false },
        { id: 'b', text: 'accuracy_score, precision_score, and recall_score — used to measure correctness, false-positive rate, and coverage of positive predictions respectively.', isCorrect: true },
        { id: 'c', text: 'confusion_matrix, roc_auc_score, and log_loss — advanced probabilistic metrics designed specifically for deep learning classifiers with soft outputs.', isCorrect: false },
        { id: 'd', text: 'f1_score, silhouette_score, and davies_bouldin_score — the standard cluster evaluation metrics used after applying unsupervised learning algorithms.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q9',
      question: "What does predict_proba() return, and how is its output used to build the recommendation list?",
      questionAr: "ماذا تُعيد predict_proba() وكيف يُستخدم ناتجها لبناء قائمة التوصيات؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It returns the final predicted class label (0 or 1) for every movie, which is then used directly as the sort key to rank all movies from most liked to least liked.', isCorrect: false },
        { id: 'b', text: 'It returns a 2D array of probabilities [[P(0), P(1)], ...] for each movie — we extract column index 1 (P(liked)) and store it as "like_probability" to sort the movies descending.', isCorrect: true },
        { id: 'c', text: 'It returns the Gaussian mean and variance for each genre class, which are averaged together to compute an overall genre popularity score for the recommendation engine.', isCorrect: false },
        { id: 'd', text: 'It returns a single float between 0 and 1 representing the overall model confidence, which is then divided equally across all movies to normalize the recommendation scores.', isCorrect: false },
      ],
    },
    {
      id: 'ip-l9-q10',
      question: "In the OMDb API block, why do we check both data['Response'] == 'True' AND data['Poster'] != 'N/A' before calling st.image()?",
      questionAr: "في كتلة OMDb API، لماذا نتحقق من كلا الشرطين data['Response'] == 'True' وdata['Poster'] != 'N/A' قبل استدعاء st.image()؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "Because the OMDb API rate-limits requests and returns 'N/A' as the Response value when the daily quota is exceeded, so we must check both fields to avoid a billing overcharge.", isCorrect: false },
        { id: 'b', text: "Because even when a movie is found (Response == 'True'), the API may still return 'N/A' as the Poster value if no image exists — passing 'N/A' to st.image() would raise an error.", isCorrect: true },
        { id: 'c', text: "Because Streamlit's st.image() function requires both a URL string and a boolean confirmation flag before it will render the image inside the recommendation card component.", isCorrect: false },
        { id: 'd', text: "Because the requests library parses the JSON response lazily, so both fields must be accessed simultaneously to force the complete HTTP response body to load into memory.", isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l9-w1',
      question: "List the 6 main steps of the movie recommendation project in order.",
      questionAr: "اذكر الخطوات الست الرئيسية لمشروع توصية الأفلام بالترتيب.",
      modelAnswer: "1) Import libraries, 2) Load and preprocess data (merge, binary label, cat.codes), 3) Train model and evaluate (fit, predict, accuracy/precision/recall), 4) Build recommendation list using predict_proba(), 5) Build Streamlit web app with iterrows() display loop, 6) Fetch movie posters using the OMDb API.",
      modelAnswerAr: "1) استيراد المكتبات، 2) تحميل البيانات ومعالجتها (دمج، تسمية ثنائية، cat.codes)، 3) تدريب النموذج وتقييمه (fit وpredict وحساب المقاييس)، 4) بناء قائمة التوصيات باستخدام predict_proba()، 5) بناء تطبيق Streamlit مع حلقة iterrows() للعرض، 6) جلب ملصقات الأفلام من OMDb API.",
    },
    {
      id: 'ip-l9-w2',
      question: "Explain the difference between predict() and predict_proba() and why predict_proba() is used for the recommendation list.",
      questionAr: "اشرح الفرق بين predict() وpredict_proba() ولماذا نستخدم predict_proba() لبناء قائمة التوصيات.",
      modelAnswer: "predict() returns a hard class label (0 or 1) for each input. predict_proba() returns the probability of each class — a 2D array where column 0 is P(not liked) and column 1 is P(liked). We use predict_proba() because it gives a continuous score we can sort by, allowing us to rank all movies from most to least likely to be liked, rather than just splitting them into a binary liked/not-liked group.",
      modelAnswerAr: "predict() تُعيد تسمية الفئة النهائية (0 أو 1) لكل مدخل. predict_proba() تُعيد احتمالية كل فئة — مصفوفة ثنائية الأبعاد حيث العمود 0 هو P(لم يُعجبه) والعمود 1 هو P(أُعجب به). نستخدم predict_proba() لأنها تُعطينا قيمة مستمرة يمكننا الترتيب بها، مما يتيح ترتيب جميع الأفلام من الأكثر إلى الأقل احتمالاً للإعجاب، بدلاً من تصنيفها فقط في مجموعتين.",
    },
    {
      id: 'ip-l9-w3',
      question: "How can the OMDb API be used to improve the Streamlit web app? Describe the logic used in the code.",
      questionAr: "كيف يمكن استخدام OMDb API لتحسين تطبيق Streamlit؟ صف المنطق المستخدم في الكود.",
      modelAnswer: "The OMDb API is called inside the recommendation loop for each movie. We send the movie title as the 't' parameter along with an API key. The API returns a JSON object — we check that Response == 'True' (the movie was found) and that Poster != 'N/A' (a real poster image URL exists), then pass the URL to st.image() to display the poster. A try/except block wraps this logic so that any network error or missing movie silently skips the poster without crashing the app.",
      modelAnswerAr: "يُستدعى OMDb API داخل حلقة التوصيات لكل فيلم. نُرسل عنوان الفيلم كمعامل 't' مع مفتاح الـ API. يُعيد الـ API كائن JSON — نتحقق من أن Response == 'True' (الفيلم موجود) وأن Poster != 'N/A' (رابط الصورة موجود)، ثم نمرر الرابط إلى st.image() لعرض الملصق. كتلة try/except تُغلف هذا المنطق حتى تتجاوز أي خطأ شبكة أو فيلم غير موجود بصمت دون إيقاف التطبيق.",
    },
  ],
}