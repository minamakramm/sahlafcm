export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 6,
  title: 'Lecture 6: Case Study CBR in Healthcare & DB',
  midtermInfo: 'Lectures 1-6 are included in the midterm for this subject.',
  titleAr: 'المحاضرة 6: دراسة حالة الـ CBR في الرعاية الصحية وقواعد البيانات',



  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Overview & Healthcare Case Study</h2>
<div class="key-concepts">
  <div class="key-concept-item"><strong>CBR (Case-Based Reasoning):</strong> A cognitive paradigm that solves a new query by retrieving similar historical cases.</div>
  <div class="key-concept-item"><strong>Medical Case Base:</strong> Structured historical files mapping specific symptom text clusters to clinical diagnoses and treatments.</div>
  <div class="key-concept-item"><strong>Adaptive Learning:</strong> The continuous capability of a healthcare system to ingest refined doctor interventions back into the knowledge base.</div>
</div>

<h2>The Clinical Challenge</h2>
<p>A hospital wants to build an intelligent Case-Based Reasoning (CBR) system to help doctors diagnose diseases based on patient symptoms. Consider a patient presenting with:</p>
<div class="callout callout-info">
  <span class="callout-icon">🔍</span>
  <span><strong>New Patient symptoms:</strong> <em>"fever, severe headache, joint pain"</em></span>
</div>
<p>To identify the correct diagnosis, the CBR system must mathematically query a historical database of past cases, compute similarity, and propose a clinical decision.</p>

<h2>Step 1: Storing Past Medical Cases</h2>
<p>The system stores a historical registry of diagnosed patient encounters. Here is the initial case base:</p>
<table class="styled-table">
  <thead>
    <tr>
      <th>Case ID</th>
      <th>Symptoms</th>
      <th>Diagnosis</th>
      <th>Suggested Treatment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Case 1</strong></td>
      <td>fever, cough, sore throat, headache</td>
      <td><span class="badge badge-info">Flu</span></td>
      <td>Rest, fluids, paracetamol</td>
    </tr>
    <tr>
      <td><strong>Case 2</strong></td>
      <td>fever, joint pain, severe headache, rash</td>
      <td><span class="badge badge-warning">Dengue</span></td>
      <td>Hydration, painkillers, hospital monitoring</td>
    </tr>
    <tr>
      <td><strong>Case 3</strong></td>
      <td>cough, shortness of breath, chest pain</td>
      <td><span class="badge badge-danger">Pneumonia</span></td>
      <td>Antibiotics, oxygen therapy</td>
    </tr>
    <tr>
      <td><strong>Case 4</strong></td>
      <td>sneezing, runny nose, mild fever</td>
      <td><span class="badge badge-success">Common Cold</span></td>
      <td>Rest, fluids, antihistamines</td>
    </tr>
    <tr>
      <td><strong>Case 5</strong></td>
      <td>high fever, muscle pain, vomiting</td>
      <td><span class="badge badge-primary">Malaria</span></td>
      <td>Antimalarial drugs, IV fluids</td>
    </tr>
  </tbody>
</table>

<h2>Step 2: Vectorization & Natural Language Processing (NLP)</h2>
<p>Because medical symptoms are written in free-form unstructured text, a system cannot perform simple keyword checks. Instead, it converts them into structured mathematical vectors using <strong>TF-IDF Vectorization</strong>.</p>
<div class="code-block">
cases = [
    "fever cough sore throat headache",
    "fever joint pain severe headache rash",
    "cough shortness of breath chest pain",
    "sneezing runny nose mild fever",
    "high fever muscle pain vomiting"
]
</div>

<h2>The Mathematics of TF-IDF</h2>
<h3>1. Term Frequency (TF)</h3>
<p>Measures how frequently a specific term appears in a case relative to the total number of words in that case:</p>
<div class="code-block">
TF = (Number of times term appears in a case) / (Total number of terms in that case)
</div>
<p>For example, in <strong>Case 1</strong> (<em>"fever cough sore throat headache"</em> - 5 terms total):</p>
<div class="code-block">
TF("fever", Case 1) = 1 / 5 = <span class="number">0.2</span>
</div>

<h3>2. Inverse Document Frequency (IDF)</h3>
<p>Measures the distinctiveness of a term across the entire case base. Rare words score highly, while ubiquitous words are downweighted:</p>
<div class="code-block">
IDF = log10(Total number of cases / Number of cases containing the term)
</div>
<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <span><strong>Lecture Slide Note:</strong> The raw lecture slides contain a common typographical error expressing the formula as <code>log(containing / total)</code>, but the actual computation printed on page 6 correctly evaluates <code>log10(5 / 4)</code>. We use <strong>base-10 logarithms</strong> for these calculations.</span>
</div>
<p>Let's calculate IDF for <strong>"fever"</strong> (which appears in 4 out of 5 historical cases):</p>
<div class="code-block">
Total Cases (N) = 5
Cases with "fever" (df) = 4
IDF("fever") = log10(5 / 4) = log10(1.25) ≈ <span class="number">0.096</span>
</div>

<h3>3. TF-IDF Score</h3>
<p>Combines local frequency and global rarity to weight each term:</p>
<div class="code-block">
TF-IDF = TF × IDF
TF-IDF("fever", Case 1) = 0.2 × 0.096 = <span class="number">0.0192</span>
</div>

<p>Here is a detailed breakdown of selected term weights in <strong>Case 1</strong>:</p>
<table class="styled-table">
  <thead>
    <tr>
      <th>Symptom Word</th>
      <th>TF (Case 1)</th>
      <th>IDF (Global)</th>
      <th>TF-IDF Score (Case 1)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>fever</strong></td>
      <td>0.2</td>
      <td>log10(5/4) ≈ 0.096</td>
      <td><strong>0.0192</strong></td>
    </tr>
    <tr>
      <td><strong>cough</strong></td>
      <td>0.2</td>
      <td>log10(5/2) ≈ 0.301</td>
      <td><strong>0.0602</strong></td>
    </tr>
    <tr>
      <td><strong>headache</strong></td>
      <td>0.2</td>
      <td>log10(5/2) ≈ 0.301</td>
      <td><strong>0.0602</strong></td>
    </tr>
    <tr>
      <td><strong>sore</strong></td>
      <td>0.2</td>
      <td>log10(5/1) ≈ 0.699</td>
      <td><strong>0.1398</strong></td>
    </tr>
  </tbody>
</table>

<h2>Step 3: Calculating Cosine Similarity</h2>
<p>Once raw symptom text is converted into numerical vectors, the CBR system measures the similarity between the new case vector and each historical vector using <strong>Cosine Similarity</strong>:</p>
<div class="code-block">
Cosine Similarity (cos θ) = (A · B) / (||A|| × ||B||)
</div>
<p>Where:</p>
<ul>
  <li><code>A · B</code> is the dot product: <code>Σ(a_i × b_i)</code></li>
  <li><code>||A||</code> and <code>||B||</code> are the Euclidean magnitudes (vector lengths): <code>sqrt(Σ(x_i^2))</code></li>
</ul>

<h3>🔍 Step-by-Step Mathematical Walkthrough</h3>
<p>Let's calculate the similarity between <strong>Vector A (Case 1)</strong> and <strong>Vector B (Case 2)</strong> based on five clinical symptoms:</p>
<table class="styled-table">
  <thead>
    <tr>
      <th>Symptom Dimension</th>
      <th>Vector A (Case 1) Weights</th>
      <th>Vector B (Case 2) Weights</th>
      <th>Product (A_i × B_i)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>fever</strong></td>
      <td>0.5</td>
      <td>0.5</td>
      <td>0.25</td>
    </tr>
    <tr>
      <td><strong>cough</strong></td>
      <td>0.7</td>
      <td>0.0</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td><strong>sore throat</strong></td>
      <td>0.6</td>
      <td>0.0</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td><strong>headache</strong></td>
      <td>0.0</td>
      <td>0.8</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td><strong>muscle pain</strong></td>
      <td>0.0</td>
      <td>0.6</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td><strong>Total (Dot Product)</strong></td>
      <td>-</td>
      <td>-</td>
      <td><strong>0.25</strong></td>
    </tr>
  </tbody>
</table>

<ol>
  <li><strong>Compute Dot Product:</strong>
    <div class="code-block">A · B = (0.5 × 0.5) + (0.7 × 0.0) + (0.6 × 0.0) + (0.0 × 0.8) + (0.0 × 0.6) = 0.25</div>
  </li>
  <li><strong>Compute Vector Magnitudes:</strong>
    <div class="code-block">
||A|| = sqrt(0.5² + 0.7² + 0.6²) = sqrt(0.25 + 0.49 + 0.36) = sqrt(1.10) ≈ 1.049
||B|| = sqrt(0.5² + 0.8² + 0.6²) = sqrt(0.25 + 0.64 + 0.36) = sqrt(1.25) ≈ 1.118
    </div>
  </li>
  <li><strong>Divide Dot Product by Magnitudes Product:</strong>
    <div class="code-block">
cos θ = 0.25 / (1.049 × 1.118) = 0.25 / 1.17278 ≈ <span class="number">0.21</span>
    </div>
  </li>
</ol>
<div class="callout callout-danger">
  <span class="callout-icon">🔴</span>
  <span><strong>Interpretation:</strong> A similarity score of <strong>0.21</strong> represents a <strong>weak similarity</strong> between Case 1 (Flu) and Case 2 (Dengue).</span>
</div>

<h2>Implementing Persisted CBR Systems</h2>
<p>To operate inside a hospital, a CBR system must store cases in a persistent SQL database and offer a mechanism for clinical experts to modify/adapt and approve treatments. Below is the complete Python workflow implementing this using SQLite and NLP:</p>`,
        bodyAr: `<h2>نظرة عامة ودراسة حالة الرعاية الصحية</h2>
<div class="key-concepts">
  <div class="key-concept-item"><strong>الاستدلال المبني على الحالات (CBR):</strong> نموذج إدراكي يحل الاستفسارات الجديدة عن طريق استرجاع الحالات التاريخية المماثلة.</div>
  <div class="key-concept-item"><strong>قاعدة الحالات الطبية:</strong> ملفات تاريخية منظمة تربط مجموعات أعراض نصية معينة بالتشخيصات والعلاجات السريرية.</div>
  <div class="key-concept-item"><strong>التعلم التكيفي:</strong> القدرة المستمرة للنظام الصحي على استيعاب تدخلات الطبيب المعدلة وإعادتها لقاعدة المعرفة.</div>
</div>

<h2>التحدي السريري</h2>
<p>ترغب إحدى المستشفيات في بناء نظام ذكي للاستدلال المبني على الحالات (CBR) لمساعدة الأطباء في تشخيص الأمراض بناءً على أعراض المريض. لننظر في مريض يعاني من:</p>
<div class="callout callout-info">
  <span class="callout-icon">🔍</span>
  <span><strong>أعراض المريض الجديد:</strong> <em>"fever, severe headache, joint pain" (حمى، صداع شديد، آلام المفاصل)</em></span>
</div>
<p>لتحديد التشخيص الصحيح، يجب على نظام CBR الاستعلام رياضياً في قاعدة البيانات التاريخية للحالات السابقة، وحساب التشابه، واقتراح قرار سريري.</p>

<h2>الخطوة 1: تخزين الحالات الطبية السابقة</h2>
<p>يخزن النظام سجلاً تاريخياً للحالات السابقة التي تم تشخيصها. إليك قاعدة الحالات الأولية:</p>
<table class="styled-table">
  <thead>
    <tr>
      <th>معرف الحالة</th>
      <th>الأعراض</th>
      <th>التشخيص</th>
      <th>العلاج المقترح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>الحالة 1</strong></td>
      <td>fever, cough, sore throat, headache</td>
      <td><span class="badge badge-info">Flu (إنفلونزا)</span></td>
      <td>راحة، سوائل، باراسيتامول</td>
    </tr>
    <tr>
      <td><strong>الحالة 2</strong></td>
      <td>fever, joint pain, severe headache, rash</td>
      <td><span class="badge badge-warning">Dengue (حمى الضنك)</span></td>
      <td>ترطيب، مسكنات ألم، مراقبة بالمستشفى</td>
    </tr>
    <tr>
      <td><strong>الحالة 3</strong></td>
      <td>cough, shortness of breath, chest pain</td>
      <td><span class="badge badge-danger">Pneumonia (التهاب رئوي)</span></td>
      <td>مضادات حيوية، علاج بالأكسجين</td>
    </tr>
    <tr>
      <td><strong>الحالة 4</strong></td>
      <td>sneezing, runny nose, mild fever</td>
      <td><span class="badge badge-success">Common Cold (زكام)</span></td>
      <td>راحة، سوائل، مضادات الهيستامين</td>
    </tr>
    <tr>
      <td><strong>الحالة 5</strong></td>
      <td>high fever, muscle pain, vomiting</td>
      <td><span class="badge badge-primary">Malaria (ملاريا)</span></td>
      <td>أدوية مضادة للملاريا، سوائل وريدية</td>
    </tr>
  </tbody>
</table>

<h2>الخطوة 2: تحويل الأعراض إلى متجهات رقمية (NLP Vectorization)</h2>
<p>بما أن الأعراض الطبية تُكتب بنصوص حرة غير منظمة، فلا يمكن للنظام إجراء فحوصات كلمات مفتاحية بسيطة. بدلاً من ذلك، يحولها إلى متجهات رياضية منظمة باستخدام <strong>TfidfVectorizer</strong>.</p>

<h2>رياضيات الـ TF-IDF</h2>
<h3>1. تردد المصطلح (Term Frequency - TF)</h3>
<p>يقيس مدى تكرار مصطلح معين في حالة واحدة بالنسبة للعدد الإجمالي للكلمات في تلك الحالة:</p>
<div class="code-block">
TF = (عدد مرات ظهور الكلمة في الحالة) / (إجمالي عدد الكلمات في تلك الحالة)
</div>
<p>على سبيل المثال، في <strong>الحالة 1</strong>:</p>
<div class="code-block">
TF("fever", Case 1) = 1 / 5 = 0.2
</div>

<h3>2. تردد الوثيقة العكسي (Inverse Document Frequency - IDF)</h3>
<p>يقيس تميز المصطلح عبر كامل قاعدة الحالات. الكلمات النادرة تأخذ وزناً مرتفعاً، بينما الكلمات الشائعة يقل وزنها:</p>
<div class="code-block">
IDF = log10(إجمالي عدد الحالات / عدد الحالات التي تحتوي على الكلمة)
</div>
<p>لنحسب الـ IDF لـ <strong>"fever"</strong> (التي تظهر في 4 حالات من أصل 5):</p>
<div class="code-block">
IDF("fever") = log10(5 / 4) = log10(1.25) ≈ 0.096
</div>

<h2>الخطوة 3: حساب تشابه جيب التمام (Cosine Similarity)</h2>
<p>بمجرد تحويل الأعراض إلى متجهات رقمية، يقيس نظام CBR مدى التشابه بين أعراض المريض الجديد وكل حالة تاريخية في قاعدة البيانات باستخدام صيغة <strong>تشابه جيب التمام</strong>:</p>
<div class="code-block">
Cosine Similarity (cos θ) = (A · B) / (||A|| × ||B||)
</div>

<h3>🔍 تتبع حسابي خطوة بخطوة</h3>
<p>لنحسب التشابه بين <strong>المتجه A (الحالة 1)</strong> و<strong>المتجه B (الحالة 2)</strong> بناءً على خمسة أعراض سريرية:</p>
<ul>
  <li><strong>الضرب النقطي (Dot Product):</strong>
    <div class="code-block">A · B = (0.5 × 0.5) + (0.7 × 0.0) + (0.6 × 0.0) + (0.0 × 0.8) + (0.0 × 0.6) = 0.25</div>
  </li>
  <li><strong>معيار المتجهات (Magnitudes):</strong>
    <div class="code-block">
||A|| = sqrt(0.5² + 0.7² + 0.6²) = sqrt(1.10) ≈ 1.049
||B|| = sqrt(0.5² + 0.8² + 0.6²) = sqrt(1.25) ≈ 1.118
    </div>
  </li>
  <li><strong>القسمة للحصول على النتيجة النهائية:</strong>
    <div class="code-block">
cos θ = 0.25 / (1.049 × 1.118) ≈ 0.21
    </div>
  </li>
</ul>
<p>تمثل نتيجة التشابه <strong>0.21</strong> تشابهاً ضعيفاً (Weak Similarity) بين متجهات الحالتين.</p>

<h2>تنفيذ نظام CBR كامل بقواعد بيانات persisted</h2>
<p>لعمل نظام CBR في بيئة المستشفى الحقيقية، يجب تخزين الحالات في قاعدة بيانات SQL وحفظ القرارات وتوفير آلية للأطباء لتعديل وتكييف العلاجات وحفظها للتعلم المستمر:</p>`
      }
    },
    {
      type: 'code',
      content: {
        language: 'python',
        code: `import sqlite3
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# --- STEP 1: INITIALIZE DATABASE AND POPULATE CASES ---
def init_db():
    conn = sqlite3.connect("medical_cases.db")
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS cases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        symptoms TEXT NOT NULL,
        diagnosis TEXT NOT NULL,
        treatment TEXT NOT NULL
    )
    """)
    
    # Check if data already exists
    cursor.execute("SELECT COUNT(*) FROM cases")
    if cursor.fetchone()[0] == 0:
        sample_cases = [
            ("fever cough sore throat", "Flu", "Rest, fluids, paracetamol"),
            ("fever joint pain severe headache", "Dengue", "Hydration, painkillers, hospital monitoring"),
            ("cough shortness of breath chest pain", "Pneumonia", "Antibiotics, oxygen therapy"),
            ("sneezing runny nose mild fever", "Common Cold", "Rest, fluids, antihistamines"),
            ("high fever muscle pain vomiting", "Malaria", "Antimalarial drugs, IV fluids")
        ]
        cursor.executemany("INSERT INTO cases (symptoms, diagnosis, treatment) VALUES (?, ?, ?)", sample_cases)
        conn.commit()
    conn.close()

# --- STEP 2: RETRIEVE ALL PERSISTED CASES ---
def fetch_cases():
    conn = sqlite3.connect("medical_cases.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, symptoms, diagnosis, treatment FROM cases")
    records = cursor.fetchall()
    conn.close()
    return records

# --- STEP 3: PERFORM NLP SIMILARITY QUERY ---
def find_best_match(new_symptoms):
    cases = fetch_cases()
    if not cases:
        return None, 0.0
    
    # Extract symptoms texts for vectorization
    symptoms_list = [case[1] for case in cases] + [new_symptoms]
    
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(symptoms_list)
    
    # Calculate similarity between last index (new query) and all previous rows
    similarities = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])[0]
    best_match_idx = similarities.argmax()
    
    return cases[best_match_idx], similarities[best_match_idx]

# --- STEP 4: ADAPTATION AND RETENTION (LEARNING) ---
def process_new_patient(new_patient_symptoms):
    best_case, similarity_score = find_best_match(new_patient_symptoms)
    
    if not best_case:
        print("No cases found in DB.")
        return
        
    print(f"\\n[RETRIEVED CASE]")
    print(f"Similarity Score: {similarity_score:.2f}")
    print(f"Matched Case Symptoms: {best_case[1]}")
    print(f"Suggested Diagnosis: {best_case[2]}")
    print(f"Suggested Treatment: {best_case[3]}")
    
    # CBR Revise (Adaptation by Physician)
    update_solution = input("\\nWould you like to modify the suggested treatment? (yes/no): ").strip().lower()
    
    final_treatment = best_case[3]
    if update_solution == "yes":
        final_treatment = input("Enter the corrected treatment: ").strip()
    
    # CBR Retain (Store new case for future learning)
    conn = sqlite3.connect("medical_cases.db")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO cases (symptoms, diagnosis, treatment) VALUES (?, ?, ?)",
        (new_patient_symptoms, best_case[2], final_treatment)
    )
    conn.commit()
    conn.close()
    print("New case stored persistently in database for future learning!")

# Execution Run
init_db()
process_new_patient("fever severe headache muscle pain")`,
        caption: 'Full persistent CBR system demonstrating SQLite database storage, dynamic vector indexing, clinical adaptation, and learning.',
        captionAr: 'نظام CBR متكامل يوضح تخزين قواعد البيانات (SQLite) والفهرسة الديناميكية، والتكيف السريري، والتعلم المستمر.'
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Medical CBR translates unstructured, free-form patient symptoms into structured NLP vectors using TF-IDF.",
      "Term Frequency (TF) weights terms locally: TF = frequency of word / total terms in case.",
      "Inverse Document Frequency (IDF) weights terms globally: IDF = log10(Total Cases / Cases with word). Ubiquitous symptoms have near-zero IDF, whereas rare identifiers have high IDF values.",
      "TF-IDF combines both weights (TF × IDF) to form a robust, descriptive symptom vector.",
      "Cosine Similarity calculates the angular similarity between vectors: cos θ = (A · B) / (||A|| × ||B||). Values range from 0.0 (no overlap) to 1.0 (identical vectors).",
      "Persistent CBR pipelines rely on databases (like SQLite) to maintain historical cases.",
      "Doctor intervention constitutes the REVISE step, where a physician corrects or customizes the proposed treatment plan.",
      "Saving this customized, adapted encounter back into the SQLite database represents the RETAIN step, fulfilling the CBR learning cycle."
    ],
    pointsAr: [
      "نظام CBR الطبي يترجم الأعراض الطبية الحرة غير المنظمة إلى متجهات NLP باستخدام خوارزمية TF-IDF.",
      "تردد المصطلح (TF) يزن الكلمات محلياً: TF = عدد تكرار الكلمة / إجمالي الكلمات في الحالة.",
      "تردد الوثيقة العكسي (IDF) يزن الكلمات عالمياً: IDF = log10(إجمالي الحالات / الحالات التي تحتوي الكلمة). الأعراض الشائعة جداً تأخذ وزناً قريباً من الصفر بينما الأعراض النادرة تأخذ درجة عالية.",
      "درجة TF-IDF تدمج الوزن المحلي والعالمي (TF × IDF) لإنشاء متجهات أعراض دقيقة.",
      "تشابه جيب التمام (Cosine Similarity) يحسب نسبة التشابه كزاوية بين المتجهات: الضرب النقطي مقسوماً على حاصل ضرب معيارهما.",
      "الأنظمة العملية تعتمد على قواعد بيانات مثل SQLite لتخزين وتحديث الحالات التاريخية بشكل دائم.",
      "تعديل الطبيب وتصحيحه للعلاج يمثل خطوة المراجعة (REVISE) في دورة الـ CBR.",
      "حفظ وتخزين الحالة المعدلة للمريض الجديد في قاعدة البيانات يمثل خطوة الاحتفاظ (RETAIN)، مما يحقق التعلم الذاتي للنظام."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l6-q1',
      question: "Which of the following describes the key purpose of converting symptoms to unstructured text vectors using TF-IDF in CBR?",
      questionAr: "أي مما يلي يصف الغرض الأساسي من تحويل الأعراض إلى متجهات نصية باستخدام TF-IDF في نظام CBR؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "To encrypt confidential medical data for clinical privacy protection", isCorrect: false },
        { id: 'b', text: "To make symptom text values shorter so they occupy less database storage", isCorrect: false },
        { id: 'c', text: "To represent text mathematically, enabling numerical similarity calculations between cases", isCorrect: true },
        { id: 'd', text: "To automatically correct typing mistakes made by clinical staff during input", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q2',
      question: "What is the TF value of the word 'cough' in a patient case symptoms list: 'fever cough sore throat headache'?",
      questionAr: "ما هي قيمة تردد المصطلح (TF) لكلمة 'cough' في قائمة الأعراض التالية: 'fever cough sore throat headache'؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "0.20", isCorrect: false },
        { id: 'b', text: "0.25", isCorrect: true },
        { id: 'c', text: "0.50", isCorrect: false },
        { id: 'd', text: "1.00", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q3',
      question: "If a database contains 10 cases, and a highly specific symptom like 'rash' appears in exactly 1 case, what is its IDF score (using base-10 log)?",
      questionAr: "إذا كانت قاعدة البيانات تحتوي على 10 حالات، وظهر عرض نادر مثل 'rash' في حالة واحدة فقط، فما درجة الـ IDF له؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "log10(1/10) = -1.0", isCorrect: false },
        { id: 'b', text: "log10(10/1) = 1.0", isCorrect: true },
        { id: 'c', text: "1/10 = 0.1", isCorrect: false },
        { id: 'd', text: "10/1 = 10.0", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q4',
      question: "Why does common word filtering or global downweighting (IDF) matter for clinical diagnostics?",
      questionAr: "لماذا تعد تصفية الكلمات الشائعة أو تقليل الوزن العالمي (IDF) أمراً هاماً للتشخيص الطبي؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "It prevents doctors from modifying treatments stored inside database structures", isCorrect: false },
        { id: 'b', text: "It downweights ubiquitous symptoms (like fever) and highlights distinctive symptoms (like rash)", isCorrect: true },
        { id: 'c', text: "It shortens the execution times of SQL commands in SQLite persistent engines", isCorrect: false },
        { id: 'd', text: "It automatically translates medical terms between Arabic and English contexts", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q5',
      question: "If two clinical vectors have a dot product of 0.25, and their Euclidean magnitudes are 1.049 and 1.118, what is their Cosine Similarity score?",
      questionAr: "إذا كان الضرب النقطي لمتجهين هو 0.25، ومعيارهما هو 1.049 و 1.118، فما هي قيمة تشابه جيب التمام لهما؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "0.21", isCorrect: true },
        { id: 'b', text: "0.45", isCorrect: false },
        { id: 'c', text: "0.87", isCorrect: false },
        { id: 'd', text: "1.17", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q6',
      question: "Which python function or method is utilized to locate the database record index with the highest calculated similarity score?",
      questionAr: "أي دالة بايثون تُستخدم لتحديد فهرس السجل في قاعدة البيانات الذي يمتلك أعلى درجة تشابه؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "argmax()", isCorrect: true },
        { id: 'b', text: "fit_transform()", isCorrect: false },
        { id: 'c', text: "executemany()", isCorrect: false },
        { id: 'd', text: "cosine_similarity()", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q7',
      question: "In the persistent healthcare CBR code snippet, allowing the doctor to input a corrected treatment represents which CBR phase?",
      questionAr: "في كود نظام الـ CBR الطبي، السماح للطبيب بإدخال علاج معدل يمثل أي مرحلة من دورة الـ CBR؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Retrieve", isCorrect: false },
        { id: 'b', text: "Reuse", isCorrect: false },
        { id: 'c', text: "Revise", isCorrect: true },
        { id: 'd', text: "Retain", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q8',
      question: "Inserting the adapted, approved new patient case into the SQLite database corresponds to which step?",
      questionAr: "إدراج حالة المريض الجديد المعتمدة والمعدلة في قاعدة بيانات SQLite يقابل أي خطوة؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Retain (Learning)", isCorrect: true },
        { id: 'b', text: "Revise (Evaluating)", isCorrect: false },
        { id: 'c', text: "Retrieve (Querying)", isCorrect: false },
        { id: 'd', text: "Reuse (Applying)", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q9',
      question: "What would the Cosine Similarity score be if two symptom vectors are exactly identical (point in the same direction)?",
      questionAr: "ماذا ستكون درجة تشابه جيب التمام إذا كان متجها الأعراض متطابقين تماماً؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "0.0", isCorrect: false },
        { id: 'b', text: "0.5", isCorrect: false },
        { id: 'c', text: "1.0", isCorrect: true },
        { id: 'd', text: "-1.0", isCorrect: false }
      ]
    },
    {
      id: 'ip-l6-q10',
      question: "Which of the following is true regarding the TF-IDF score of a term that appears in every single case in the database?",
      questionAr: "أي مما يلي صحيح بشأن درجة TF-IDF لمصطلح يظهر في جميع الحالات داخل قاعدة البيانات؟",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "Its score will be extremely high because of the high frequency.", isCorrect: false },
        { id: 'b', text: "Its score will be 0.0 because its IDF score is log10(Total/Total) = log10(1) = 0.", isCorrect: true },
        { id: 'c', text: "Its score will equal the average length of all case symptoms combined.", isCorrect: false },
        { id: 'd', text: "Its score will be negative, indicating common non-informative words.", isCorrect: false }
      ]
    }
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l6-w1',
      question: "Trace the step-by-step mathematical calculations for TF, IDF, and TF-IDF weights for 'fever' in Case 1 ('fever, cough, sore throat, headache') across a 5-case database where 4 cases contain the word 'fever'. Provide all formulas and the base-10 log calculations.",
      questionAr: "تتبع خطوة بخطوة الحسابات الرياضية لأوزان TF و IDF و TF-IDF لـ 'fever' في الحالة 1 عبر قاعدة بيانات مكونة من 5 حالات تحتوي 4 منها على كلمة 'fever'. أظهر جميع الصيغ الحسابية.",
      modelAnswer: "1. TF = term count / case word count. Fever appears 1 time in Case 1 (5 words) -> TF = 1/5 = 0.2.\n2. IDF = log10(N / df). N = 5, df = 4 -> IDF = log10(5/4) = log10(1.25) ≈ 0.0969.\n3. TF-IDF = TF * IDF = 0.2 * 0.0969 = 0.01938.",
      modelAnswerAr: "1. حساب الـ TF = ظهور الكلمة / إجمالي الكلمات = 1/5 = 0.2.\n2. حساب الـ IDF = log10(إجمالي الحالات / الحالات التي تحتويها) = log10(5/4) = log10(1.25) ≈ 0.0969.\n3. ضرب القيمتين: TF-IDF = 0.2 * 0.0969 = 0.01938."
    },
    {
      id: 'ip-l6-w2',
      question: "Show the complete calculation of Cosine Similarity between Vector A [0.5, 0.7, 0.6, 0.0, 0.0] and Vector B [0.5, 0.0, 0.0, 0.8, 0.6]. Write out intermediate numbers (dot product, magnitudes, denominator product, division).",
      questionAr: "أظهر الحساب الكامل لتشابه جيب التمام بين المتجه A [0.5, 0.7, 0.6, 0.0, 0.0] والمتجه B [0.5, 0.0, 0.0, 0.8, 0.6].",
      modelAnswer: "1. Dot Product = (0.5*0.5) + (0.7*0) + (0.6*0) + (0*0.8) + (0*0.6) = 0.25.\n2. Magnitude A = sqrt(0.5^2 + 0.7^2 + 0.6^2) = sqrt(0.25+0.49+0.36) = sqrt(1.10) ≈ 1.049.\n3. Magnitude B = sqrt(0.5^2 + 0.8^2 + 0.6^2) = sqrt(0.25+0.64+0.36) = sqrt(1.25) ≈ 1.118.\n4. Similarity = 0.25 / (1.049 * 1.118) = 0.25 / 1.17278 ≈ 0.213.",
      modelAnswerAr: "1. الضرب النقطي = 0.25.\n2. معيار أ = sqrt(1.10) ≈ 1.049.\n3. معيار ب = sqrt(1.25) ≈ 1.118.\n4. جيب تمام الزاوية = 0.25 / (1.049 * 1.118) ≈ 0.213."
    },
    {
      id: 'ip-l6-w3',
      question: "Explain the logical pipeline of persistent Case-Based Reasoning in hospital database deployments. Detail the role of SQLite DBs, NLP query models, physician interventions (Revise), and case retention (Retain).",
      questionAr: "اشرح سلسلة العمليات المنطقية لنظام CBR المستمر المطبق في المستشفيات بالتفصيل. وضح دور قاعدة البيانات، واستعلام الـ NLP، وتعديل الطبيب (Revise)، والاحتفاظ بالحالة (Retain).",
      modelAnswer: "The database persistently stores cases (symptoms, diagnoses, treatments). When a patient arrives, free-text symptoms are parsed via NLP (TF-IDF Vectorizer) and matched using cosine similarity against the database records. The closest case is retrieved. A doctor reviews the proposed therapy, adapting it to the patient if necessary (Revise). This corrected case is written back to the SQLite DB (Retain) so the system gains knowledge and learns for future queries.",
      modelAnswerAr: "تخزن قاعدة البيانات الحالات. عند وصول مريض جديد، يتم معالجة أعراضه النصية بـ NLP ومقارنتها عبر تشابه جيب التمام بقاعدة البيانات لاسترجاع أقرب حالة. يراجع الطبيب الخطة ويعدلها (Revise)، ثم يتم إدراج الحالة المعدلة في قاعدة البيانات (Retain) لتمكين التعلم التلقائي."
    },
    {
      id: 'ip-l6-w4',
      question: "Provide the Python commands required to calculate the similarity scores between a single new patient symptoms vector and a matrix of all past case vectors, and explain how we find the record index of the closest historical match.",
      questionAr: "اكتب أوامر لغة بايثون اللازمة لحساب التشابه بين متجه المريض الجديد ومصفوفة الحالات السابقة، ووضح كيف نجد فهرس أقرب حالة.",
      modelAnswer: "Using sklearn, we call: similarities = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1]). This returns a 2D array of similarity scores. To find the index of the highest score, we call best_match_index = similarities.argmax(), which returns the column position of the maximum score.",
      modelAnswerAr: "نستدعي: similarities = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1]) لحساب التشابه. ولإيجاد الفهرس صاحب التشابه الأكبر، نستدعي: similarities.argmax()."
    }
  ]
}
