export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 5,
  title: 'CBR Implementation with NLP & Databases',
  titleAr: 'تنفيذ CBR مع معالجة اللغات الطبيعية (NLP) وقواعد البيانات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Overview & Key Concepts</h2>
<div class="key-concepts">
  <div class="key-concept-item">NLP (Natural Language Processing): Analyzing unstructured human text mathematically.</div>
  <div class="key-concept-item">TF-IDF: A method to weight terms by their frequency and distinctiveness.</div>
  <div class="key-concept-item">Cosine Similarity: Measuring the angle between document vectors to find the best match.</div>
</div>

<h2>The Challenge</h2>
<p>Healthcare symptoms are often <strong>unstructured text</strong>. We need NLP (Natural Language Processing) to compare them mathematically rather than just matching exact keywords.</p>

<h2>TF-IDF (Term Frequency — Inverse Document Frequency)</h2>
<h3>Term Frequency (TF)</h3>
<div class="code-block">TF = times term appears in case / total terms in case

Case 1: "fever cough sore throat headache" → TF("fever") = 1/5 = <span class="number">0.2</span></div>

<h3>Inverse Document Frequency (IDF)</h3>
<div class="code-block">IDF = log(Total Cases / Cases containing word)

"fever" in 4/5 cases → IDF = log(5/4) = log(1.25) = <span class="number">0.096</span></div>
<div class="callout callout-info"><span class="callout-icon"></span><span>Common words → <strong>low IDF</strong> (less distinctive). Rare words → <strong>high IDF</strong> (more distinctive).</span></div>

<h3>TF-IDF Score</h3>
<div class="code-block">TF-IDF = TF × IDF</div>

<h3>🔍 TF-IDF Calculation Walkthrough</h3>
<p>Word: <strong>"Cough"</strong> | Total Cases: <strong>5</strong></p>
<ol>
  <li><strong>If "Cough" appears in 2 cases</strong>: IDF = log(5 / 2) ≈ <strong>0.916</strong></li>
  <li><strong>If "Cough" appears 1 time in Case A (4 words)</strong>: TF = 1 / 4 = <strong>0.25</strong></li>
  <li><strong>Final Score</strong>: 0.25 × 0.916 = <strong>0.229</strong></li>
</ol>

<h2>Cosine Similarity</h2>
<div class="code-block">Cosine Similarity = (A · B) / (||A|| × ||B||)

Step 1: Convert to TF-IDF vectors
Step 2: Dot product: Σ(a_i × b_i) = 0.25
Step 3: Magnitudes: ||A|| = √1.10 ≈ 1.049, ||B|| = √1.25 ≈ 1.118
Step 4: Result = 0.25 / (1.049 × 1.118) ≈ <span class="number">0.21</span> (weak similarity)</div>

<h2>Python Implementation</h2>
<div class="code-block"><span class="keyword">from</span> sklearn.feature_extraction.text <span class="keyword">import</span> TfidfVectorizer
<span class="keyword">from</span> sklearn.metrics.pairwise <span class="keyword">import</span> cosine_similarity


cases = [
    <span class="string">"fever cough sore throat"</span>,
    <span class="string">"fever joint pain severe headache"</span>,
    <span class="string">"chest pain difficulty breathing"</span>
]
new_case = <span class="string">"fever severe headache joint pain"</span>


vectorizer = <span class="function">TfidfVectorizer</span>()
tfidf_matrix = vectorizer.<span class="function">fit_transform</span>(cases + [new_case])


similarities = <span class="function">cosine_similarity</span>(tfidf_matrix[-1], tfidf_matrix[:-1])
best_match = cases[similarities.<span class="function">argmax</span>()]</div>

<h2>Database Storage (SQLite)</h2>
<div class="code-block"><span class="keyword">import</span> sqlite3


conn = sqlite3.<span class="function">connect</span>(<span class="string">"medical_cases.db"</span>)
cursor = conn.<span class="function">cursor</span>()
cursor.<span class="function">execute</span>(<span class="string">"""CREATE TABLE IF NOT EXISTS cases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symptoms TEXT, diagnosis TEXT, treatment TEXT)"""</span>)</div>

<h2>Doctor Adaptation & Learning</h2>
<p>Doctors can <strong>modify treatment</strong> → system stores updated case → <strong>Retain step</strong> in action!</p>
<div class="code-block"><span class="keyword">if</span> update_required == <span class="string">"yes"</span>:
    new_treatment = <span class="function">input</span>(<span class="string">"Enter corrected treatment: "</span>)
    
    cursor.<span class="function">execute</span>(
        <span class="string">"INSERT INTO cases VALUES (?, ?, ?)"</span>,
        (symptoms, diagnosis, new_treatment)
    )
    conn.<span class="function">commit</span>()  <span class="comment"># New case stored for future learning!</span></div>`,
        bodyAr: `<h2>نظرة عامة والمفاهيم الأساسية</h2>
<div class="key-concepts">
  <div class="key-concept-item">معالجة اللغات الطبيعية (NLP): تحليل النصوص البشرية غير المنظمة رياضياً.</div>
  <div class="key-concept-item">TF-IDF: طريقة لوزن الكلمات بناءً على تكرارها وتميزها.</div>
  <div class="key-concept-item">تشابه جيب التمام (Cosine Similarity): قياس الزاوية بين المتجهات لإيجاد أفضل تطابق.</div>
</div>

<h2>التحدي: النصوص غير المنظمة</h2>
<p>غالباً ما تكون أعراض الرعاية الصحية عبارة عن <strong>نصوص غير منظمة</strong>. نحتاج إلى NLP لمقارنتها رياضياً بدلاً من مجرد البحث عن كلمات متطابقة تماماً.</p>

<h2>خوارزمية TF-IDF</h2>
<table class="styled-table">
  <thead><tr><th>المصطلح</th><th>الوصف باللغة العربية</th></tr></thead>
  <tbody>
    <tr><td><strong>TF</strong></td><td>تردد الكلمة داخل الحالة الواحدة (كلمات الحالة / عدد مرات الظهور).</td></tr>
    <tr><td><strong>IDF</strong></td><td>تردد الوثيقة العكسي (يعطي وزناً أكبر للكلمات النادرة والمميزة للأمراض).</td></tr>
    <tr><td><strong>النتيجة</strong></td><td>يتم ضرب TF في IDF للحصول على وزن الكلمة النهائي.</td></tr>
  </tbody>
</table>

<h2>تشابه جيب التمام (Cosine Similarity)</h2>
<p>بعد تحويل النصوص إلى أرقام (متجهات)، نستخدم جيب التمام لقياس الزاوية بينها. <strong>1.0</strong> يعني تطابقاً تاماً، بينما <strong>0.0</strong> يعني عدم وجود أي تشابه.</p>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "TF-IDF converts text symptoms into numerical vectors for comparison",
      "TF = word frequency in document / total words in document",
      "IDF = log(total documents / documents containing word) — rare words score higher",
      "TF-IDF = TF × IDF — combines frequency and distinctiveness",
      "Cosine Similarity = dot product / (||A|| × ||B||) — measures angle between vectors",
      "Cosine: 0 = no similarity, 1 = identical",
      "SQLite database stores cases persistently for learning",
      "Doctor adaptation = Revise step; Case retention = Retain step",
      "TfidfVectorizer and cosine_similarity from sklearn handle NLP computation",
      "argmax() returns the index of the most similar past case",
    ],
    pointsAr: [
      "TF-IDF يحول الأعراض النصية إلى متجهات رقمية للمقارنة بينها.",
      "TF = تردد الكلمة في الوثيقة / إجمالي الكلمات.",
      "IDF = لوغاريتم (إجمالي الوثائق / الوثائق التي بها الكلمة) — الكلمات النادرة تأخذ درجة أعلى.",
      "درجة TF-IDF = TF × IDF — تجمع بين التردد والتميز.",
      "جيب تمام الزاوية (Cosine Similarity): يقيس التشابه كزاوية بين المتجهات.",
      "النتيجة: 1.0 تعني تطابقاً تاماً، 0.0 تعني عدم تشابه.",
      "قاعدة بيانات SQLite تخزن الحالات للتعلم المستمر.",
      "تعديل الطبيب هو خطوة المراجعة (Revise)؛ وحفظ الحالة هو خطوة الاحتفاظ (Retain).",
      "كود مكتبة sklearn يتعامل مع حسابات الـ NLP.",
      "argmax() تعيد الفهرس الخاص بالحالة الأكثر تشابهاً.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l5-q1',
      question: "TF-IDF stands for:",
      questionAr: "يرمز TF-IDF إلى:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Total Frequency — Internal Document Frequency', isCorrect: false },
        { id: 'b', text: 'Term Frequency — Inverse Document Frequency', isCorrect: true },
        { id: 'c', text: 'Text Feature — Indexed Data Format', isCorrect: false },
        { id: 'd', text: 'Term Feature — Inverse Data Frequency', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q2',
      question: "If a word appears in ALL documents, its IDF will be:",
      questionAr: "إذا ظهرت الكلمة في كل الوثائق، فدرجة IDF الخاصة بها ستكون:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Extremely high due to high frequency', isCorrect: false },
        { id: 'b', text: "Very low (close to 0) as it's not distinctive", isCorrect: true },
        { id: 'c', text: 'Exactly 1 across all possible documents', isCorrect: false },
        { id: 'd', text: 'A negative value representing commonality', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q3',
      question: "TF('fever') in Case 1 ('fever cough sore throat headache') equals:",
      questionAr: "تردد الكلمة TF لـ 'حمى' في الحالة ('fever cough sore throat headache') يساوي:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A normalized value of 1.0', isCorrect: false },
        { id: 'b', text: 'A normalized value of 0.5', isCorrect: false },
        { id: 'c', text: 'A normalized value of 0.2', isCorrect: true },
        { id: 'd', text: 'A normalized value of 0.25', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q4',
      question: "Cosine similarity of 1.0 means:",
      questionAr: "تشابه جيب التمام بـ 1.0 يعني:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'No similarity between the two vectors', isCorrect: false },
        { id: 'b', text: 'Vectors are exactly perpendicular (90 deg)', isCorrect: false },
        { id: 'c', text: 'Complete similarity (vectors point same way)', isCorrect: true },
        { id: 'd', text: 'Vectors are pointing in opposite directions', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q5',
      question: "tfidf_matrix[-1] represents:",
      questionAr: "tfidf_matrix[-1] تمثل:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The very first case in the entire collection', isCorrect: false },
        { id: 'b', text: 'All cases converted to a single matrix', isCorrect: false },
        { id: 'c', text: 'The new case (the last element added)', isCorrect: true },
        { id: 'd', text: 'The active database connection session', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q6',
      question: "similarities.argmax() returns:",
      questionAr: "دالة similarities.argmax() تعيد:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The highest numerical similarity score found', isCorrect: false },
        { id: 'b', text: 'The index of the most similar past case', isCorrect: true },
        { id: 'c', text: 'A list of all similarity scores calculated', isCorrect: false },
        { id: 'd', text: 'The least similar case found in the base', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q7',
      question: "SQLite is used to:",
      questionAr: "يُستخدم SQLite لـ:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Provide temporary, volatile storage only', isCorrect: false },
        { id: 'b', text: 'Persistently store cases for learning over time', isCorrect: true },
        { id: 'c', text: 'Increase the speed of TF-IDF calculations', isCorrect: false },
        { id: 'd', text: 'Perform user authentication and logging', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q8',
      question: "Doctor modifying treatment corresponds to which CBR step?",
      questionAr: "تعديل الطبيب للعلاج يقابل أي خطوة في CBR؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Retrieve: Finding the most similar case', isCorrect: false },
        { id: 'b', text: 'Reuse: Applying the existing solution', isCorrect: false },
        { id: 'c', text: 'Revise and Retain: Fixing and storing', isCorrect: true },
        { id: 'd', text: 'None: Not a standard step in the cycle', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q9',
      question: "IDF for 'fever' (in 4 of 5 cases) is:",
      questionAr: "IDF لـ 'حمى' (في 4 وثائق من أصل 5) هو:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'log(5/4) = 0.096 — highly common word', isCorrect: true },
        { id: 'b', text: 'log(4/5) = -0.096 — mathematical error', isCorrect: false },
        { id: 'c', text: '4/5 = 0.8 — raw percentage ratio', isCorrect: false },
        { id: 'd', text: '5/4 = 1.25 — raw inverse ratio', isCorrect: false },
      ],
    },
    {
      id: 'ip-l5-q10',
      question: "Converting symptoms to TF-IDF vectors enables:",
      questionAr: "تحويل الأعراض لمتجهات TF-IDF يمكّن من:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Making the input strings much shorter', isCorrect: false },
        { id: 'b', text: 'Mathematical comparison between text-based cases', isCorrect: true },
        { id: 'c', text: 'Removing duplicate words from the symptoms', isCorrect: false },
        { id: 'd', text: 'Encrypting the data for medical privacy', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l5-w1',
      question: "Explain TF-IDF step by step. Calculate TF, IDF, and TF-IDF for 'cough' across the 5 cases.",
      questionAr: "اشرح TF-IDF خطوة بخطوة. احسب TF و IDF و TF-IDF لـ 'سعال' عبر 5 حالات.",
      modelAnswer: "TF = instances/total terms. IDF = log(TotalDocs/DocsWithTerm). Word 'cough' in Case 1 (1/4 words) = 0.25 TF. IDF = log(5/2docs) = 0.916. Score = 0.229.",
      modelAnswerAr: "TF = عدد الظهور / الكلمات الكلية. IDF = log(إجمالي الوثائق / وثائق الكلمة). درجة سعال = 0.229.",
    },
    {
      id: 'ip-l5-w2',
      question: "[TRACING] Calculate Similarity for Case X (Fault sim=1.0, w=10) and Case Y (Fault sim=0.0, w=10). Total weights = 20. What is the weighted average?",
      questionAr: "[تتبع] احسب التشابه للحالة X و Y بالأوزان 10 لكل منهما.",
      modelAnswer: "(1.0 * 10 + 0.0 * 10) / 20 = 10 / 20 = 0.5 similarity.",
      modelAnswerAr: "10 / 20 = 0.5 تشابه.",
    },
    {
      id: 'ip-l5-w3',
      question: "[CODING] Write the Python code (using sklearn) to find the most similar case from a list cases given a new_query. Return the index.",
      questionAr: "[برمجة] اكتب كود بايثون (باستخدام sklearn) لإيجاد الحالة الأكثر تشابهاً من قائمة cases.",
      modelAnswer: "vec = TfidfVectorizer().fit_transform(cases + [query]); sims = cosine_similarity(vec[-1], vec[:-1]); return sims.argmax()",
      modelAnswerAr: "vec = TfidfVectorizer().fit_transform(cases + [query]); sims = cosine_similarity(vec[-1], vec[:-1]); return sims.argmax()",
    },
    {
      id: 'ip-l5-w4',
      question: "Explain cosine similarity and show complete calculation between two example vectors.",
      questionAr: "اشرح تشابه جيب التمام واظهر الحسابات كاملة بين متجهين.",
      modelAnswer: "Dot product = Σ(a*b). Magnitude = sqrt(Σ(a^2)). Cosine = dot / (||A||*||B||). Result near 1 means highly similar.",
      modelAnswerAr: "حاصل الضرب النقطي / (معيار أ * معيار ب). النتيجة القريبة من 1 تعني شديد التشابه.",
    },
    {
      id: 'ip-l5-w5',
      question: "Describe the complete CBR system architecture: database, NLP retrieval, doctor adaptation, retention.",
      questionAr: "صف هيكلية نظام CBR الكاملة: قاعد بيانات، استرجاع NLP، تكييف الطبيب، الاحتفاظ.",
      modelAnswer: "SQLite stores past medical cases. NLP (TF-IDF) compares new input text. Most similar match retrieved. Doctor may modify diagnosis/treatment (Revise). Corrected case added to DB (Retain).",
      modelAnswerAr: "مخزن SQLite، معالجة نصوص لتشابه الحالات، الطبيب يعدل العلاج، ثم يضاف للتعلم المستمر.",
    },
    {
      id: 'ip-l5-w6',
      question: "Why is TF-IDF preferred over simple word counting? What advantage does IDF provide?",
      questionAr: "لماذا يفضل TF-IDF على عد الكلمات البسيط؟ ما الفائدة من IDF؟",
      modelAnswer: "TF treats all words equally. IDF gives higher importance to rare, distinctive words (like specific symptoms) and penalizes common words (like 'the' or common signs).",
      modelAnswerAr: "IDF يعطي أهمية أكبر للكلمات النادرة والمميزة للأمراض، ويقلل من أهمية الكلمات الشائعة التي لا تفيد في التمييز.",
    },
    {
      id: 'ip-l5-w7',
      question: "Trace the system for patient with 'fever, cough, chest pain'. Which past case is retrieved?",
      questionAr: "تتبع النظام لمريض يعاني من 'حمى، سعال، ألم صدر'. أي حالة يتم استرجاعها؟",
      modelAnswer: "Retrieves 'Pneumonia' case. While fever/cough match many cases, 'chest pain' is highly distinctive (High IDF) and unique to Pneumonia case.",
      modelAnswerAr: "تقوم باسترجاع حالة 'Pneumonia'. بالرغم من تشابه حمى/سعال مع حالات أخرى، إلا أن 'ألم الصدر' مميز جداً وفريد لهذه الحالة.",
    },
    {
      id: 'ip-l5-w8',
      question: "Explain each line of the provided CBR code snippet (TfidfVectorizer, cosine_similarity, etc.).",
      questionAr: "اشرح كل سطر من كود CBR المقدم (TfidfVectorizer و cosine_similarity).",
      isMidterm: true,
      modelAnswer: "1. Vectorizer: initializes NLP engine. 2. fit_transform: creates numerical matrix from text. 3. cosine_similarity: calculates angle between new query and past cases. 4. argmax: picks highest similarity index.",
      modelAnswerAr: "1. Vectorizer: يجهز محرك المعالجة. 2. fit_transform: يحول النص لأرقام. 3. cosine_similarity: يحسب التشابه الزاوي. 4. argmax: يختار الفهرس الأكبر تشابهاً.",
    },
  ],
}
