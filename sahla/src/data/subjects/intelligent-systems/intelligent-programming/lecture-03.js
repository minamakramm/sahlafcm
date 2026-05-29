export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 3,
  title: 'Uncertainty & Certainty Factors',
  titleAr: 'عوامل اليقين والتعامل مع الشك',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Overview & Key Concepts</h2>
<div class="key-concepts">
  <div class="key-concept-item">Uncertainty: Real-world data is often incomplete, vague, or imprecise.</div>
  <div class="key-concept-item">Certainty Factors (CF): A numerical value (0-1) representing confidence.</div>
  <div class="key-concept-item">Fuzzy Logic: Computing with "degrees of truth" rather than binary true/false.</div>
</div>

<h2>The Problem with Simple IF-THEN Rules</h2>
<p>In medical or technical diagnosis, we rarely have 100% certainty.<h2>Certainty Factors (CFs)</h2>
<p>To handle uncertainty, we assign a <strong>Confidence Score</strong> between 0 and 1. We combine two types of certainty:</p>
<ol>
  <li><strong>CF_user:</strong> How certain is the user that they have the symptom?</li>
  <li><strong>CF_expert:</strong> How strongly does the expert believe this symptom indicates the disease?</li>
</ol>

<h3>🔍 Certainty Factor Calculation Walkthrough</h3>
<div class="callout callout-info">
  <span class="callout-icon">🧮</span>
  <span><strong>Formula:</strong> Combined CF = CF_user × CF_expert</span>
</div>

<p><strong>Scenario:</strong> A patient reports <code>fever (0.9 cert)</code> and <code>cough (0.7 cert)</code>.</p>
<table class="styled-table">
  <thead><tr><th>Symptom</th><th>User CF (U)</th><th>Expert CF (E)</th><th>Combined (U × E)</th></tr></thead>
  <tbody>
    <tr><td>Fever</td><td>0.9</td><td>0.8</td><td><strong>0.72</strong></td></tr>
    <tr><td>Cough</td><td>0.7</td><td>0.7</td><td><strong>0.49</strong></td></tr>
  </tbody>
</table>
<p><strong>Final Diagnosis Score (Average):</strong> (0.72 + 0.49) / 2 = <strong>0.605</strong></p>

<h2>Approaches to Uncertainty</h2>
<table class="styled-table">
  <thead><tr><th>Method</th><th>Logic Style</th><th>Example Use Case</th></tr></thead>
  <tbody>
    <tr><td><strong>Certainty Factors</strong></td><td>Numerical (0.0 to 1.0)</td><td>Medical Diagnosis (MYCIN)</td></tr>
    <tr><td><strong>Fuzzy Logic</strong></td><td>Linguistic (Mild, Severe)</td><td>Washing Machines, Air Conditioners</td></tr>
    <tr><td><strong>Probability</strong></td><td>Statistical (Bayesian)</td><td>Spam Filtering, Risk Assessment</td></tr>
  </tbody>
</table>

<h2>Python Implementation: Uncertainty Engine</h2>
<p>Step-by-step implementation of a weighted diagnostic engine:</p>

<h3>Step 1: The Knowledge Base</h3>
<div class="code-block">disease_rules = {
    <span class="string">"Flu"</span>: {<span class="string">"fever"</span>: <span class="number">0.8</span>, <span class="string">"cough"</span>: <span class="number">0.7</span>},
    <span class="string">"COVID-19"</span>: {<span class="string">"fever"</span>: <span class="number">0.9</span>, <span class="string">"cough"</span>: <span class="number">0.8</span>, <span class="string">"loss_of_smell"</span>: <span class="number">0.9</span>}
}</div>

<h3>Step 2: Diagnosis Logic</h3>
<div class="code-block"><span class="keyword">def</span> <span class="function">diagnose</span>(user_symptoms):
    disease_scores = {}
    
    <span class="keyword">for</span> disease, symptoms_dict <span class="keyword">in</span> disease_rules.<span class="function">items</span>():
        total_cf = <span class="number">0.0</span>
        matched = <span class="number">0</span>
        
        <span class="keyword">for</span> symptom, weight <span class="keyword">in</span> symptoms_dict.<span class="function">items</span>():
            <span class="keyword">if</span> symptom <span class="keyword">in</span> user_symptoms:
                total_cf += user_symptoms[symptom] * weight
                matched += <span class="number">1</span>
                
        <span class="keyword">if</span> matched > <span class="number">0</span>:
            disease_scores[disease] = total_cf / matched
            
    <span class="keyword">return</span> disease_scores</div>`,
        bodyAr: `<h2>نظرة عامة والمفاهيم الأساسية</h2>
<div class="key-concepts">
  <div class="key-concept-item">الشك: البيانات في العالم الحقيقي غالباً ما تكون ناقصة أو غير دقيقة.</div>
  <div class="key-concept-item">عوامل اليقين (CF): قيمة عددية (0-1) تمثل درجة الثقة.</div>
  <div class="key-concept-item">المنطق الضبابي: الحوسبة بـ "درجات الحقيقة" بدلاً من صح/خطأ فقط.</div>
</div>

<h2>لماذا نحتاج للتعامل مع الشك؟</h2>
<p>في التشخيص الطبي، نادراً ما نكون متأكدين بنسبة 100%. ينشأ الشك من:</p>
<ul>
  <li>عدم تأكد المرضى من أعراضهم.</li>
  <li>تداخل الأعراض بين الأمراض المختلفة.</li>
  <li>نقص التاريخ الطبي.</li>
</ul>

<h2>عوامل اليقين (Certainty Factors)</h2>
<p>نستخدم الصيغة التالية لدمج ثقة المستخدم مع خبرة النظام:</p>
<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <span><strong>اليقين المجمع = ثقة المستخدم × قوة ارتباط الخبير</strong></span>
</div>

<table class="styled-table">
  <thead><tr><th>العرض</th><th>يقين المستخدم</th><th>يقين الخبير</th><th>الناتج المجمع</th></tr></thead>
  <tbody>
    <tr><td>الحمى</td><td>0.9</td><td>0.8</td><td>0.72</td></tr>
    <tr><td>السعال</td><td>0.7</td><td>0.7</td><td>0.49</td></tr>
  </tbody>
</table>
<p><strong>النتيجة النهائية:</strong> يتم حساب المتوسط لجميع الأعراض المتطابقة للوصول لدرجة التشخيص النهائية.</p>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Uncertainty is a major challenge — patients aren't always sure about symptoms",
      "Certainty Factors (CFs): confidence levels from 0 (none) to 1 (certain)",
      "CF_user: patient's confidence; CF_expert: expert's association strength",
      "Combined CF = CF_user × CF_expert for each matched symptom",
      "Disease score = average of all combined CFs (sum / matched symptoms count)",
      "Three approaches: Certainty Factors, Fuzzy Logic, Probability-Based Reasoning",
      "Fuzzy Logic allows mild/moderate/severe categories instead of yes/no",
      "5-step plan: Problem → Knowledge Base → Inference Engine → Display → UI",
    ],
    pointsAr: [
      "الشك هو تحدٍ كبير — المرضى ليسوا متأكدين دائماً من الأعراض.",
      "عوامل اليقين (CFs): مستويات الثقة من 0 (لا شيء) إلى 1 (يقين).",
      "ثقة المستخدم (User CF) مقابل قوة ارتباط الخبير (Expert CF).",
      "اليقين المجمع = User CF × Expert CF لكل عرض متطابق.",
      "درجة المرض = متوسط جميع عوامل اليقين المجمعة (المجموع / عدد الأعراض).",
      "ثلاثة طرق: عوامل اليقين، المنطق الضبابي (Fuzzy Logic)، الاستدلال الاحتمالي.",
      "المنطق الضبابي يسمح بفئات خفيف/متوسط/شديد بدلاً من نعم/لا.",
      "خطة 5 خطوات: المشكلة ← قاعدة المعرفة ← محرك الاستدلال ← العرض ← واجهة المستخدم.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l3-q1',
      question: "Why are Certainty Factors needed in Expert Systems?",
      questionAr: "لماذا نحتاج لعوامل اليقين في النظم الخبيرة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'To make the overall system process faster', isCorrect: false },
        { id: 'b', text: 'To handle uncertainty when symptoms are not definite', isCorrect: true },
        { id: 'c', text: 'To significantly reduce total number of rules', isCorrect: false },
        { id: 'd', text: 'To completely eliminate the need for user input', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q2',
      question: "A CF value of 0.0 means:",
      questionAr: "قيمة عامل اليقين 0.0 تعني:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Complete certainty in the final conclusion', isCorrect: false },
        { id: 'b', text: 'No confidence at all in the provided data', isCorrect: true },
        { id: 'c', text: 'Moderate certainty about the specific fact', isCorrect: false },
        { id: 'd', text: 'The system is unable to process the calculation', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q3',
      question: "If CF_user = 0.9 and CF_expert = 0.8, the combined CF is:",
      questionAr: "إذا كان يقين المستخدم 0.9 والخبير 0.8، فاليقين المجمع هو:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A total of 1.7', isCorrect: false },
        { id: 'b', text: 'An average of 0.85', isCorrect: false },
        { id: 'c', text: 'A product of 0.72', isCorrect: true },
        { id: 'd', text: 'A difference of 0.17', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q4',
      question: "In the knowledge base, 'Flu': {'fever': 0.8} — what does 0.8 represent?",
      questionAr: "في قاعدة المعرفة، 'Flu': {'fever': 0.8} — ماذا يمثل و0.8؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Probability of an average person getting flu", isCorrect: false },
        { id: 'b', text: "Expert's certainty that fever indicates flu", isCorrect: true },
        { id: 'c', text: "User's personal certainty about their fever", isCorrect: false },
        { id: 'd', text: "The clinical severity of the patient's fever", isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q5',
      question: "Patient reports fever (CF=0.9) and cough (CF=0.7). Expert CFs for flu: fever=0.8, cough=0.7. Flu score?",
      questionAr: "أفاد المريض بحمى (0.9) وسعال (0.7). تقييم الخبير للأنفلونزا: حمى (0.8) وسعال (0.7). درجة الأنفلونزا؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'A final score of 0.80', isCorrect: false },
        { id: 'b', text: 'A final score of 0.72', isCorrect: false },
        { id: 'c', text: 'A final score of 0.605', isCorrect: true },
        { id: 'd', text: 'A final score of 0.49', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q6',
      question: "Which method allows reasoning with mild/moderate/severe categories?",
      questionAr: "أي طريقة تسمح بالاستدلال بفئات خفيف/متوسط/شديد؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Fixed Certainty Factors', isCorrect: false },
        { id: 'b', text: 'Dynamic Fuzzy Logic', isCorrect: true },
        { id: 'c', text: 'Standard Forward Chaining', isCorrect: false },
        { id: 'd', text: 'Standard Backward Chaining', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q7',
      question: "What does matched_symptoms count in the calculation logic?",
      questionAr: "ماذا يعني عد الأعراض المتطابقة (matched_symptoms) في المنطق الحسابي؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Total symptoms available in the KB', isCorrect: false },
        { id: 'b', text: "Symptoms user reported that exist in the rule", isCorrect: true },
        { id: 'c', text: 'All symptoms ever reported by the user', isCorrect: false },
        { id: 'd', text: 'The total number of diseases in the system', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q8',
      question: "max(disease_scores, key=disease_scores.get) returns:",
      questionAr: "دالة max(disease_scores, key=disease_scores.get) تعيد:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The highest score value found in the dict', isCorrect: false },
        { id: 'b', text: 'The disease name associated with highest score', isCorrect: true },
        { id: 'c', text: 'A list of all diseases sorted by confidence', isCorrect: false },
        { id: 'd', text: 'The average score of all matched diseases', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q9',
      question: "Why does the system ask users to rate confidence from 0 to 1?",
      questionAr: "لماذا يطلب النظام من المستخدمين تقييم ثقتهم من 0 إلى 1؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To reduce the overall computation time', isCorrect: false },
        { id: 'b', text: 'To incorporate user uncertainty into diagnosis', isCorrect: true },
        { id: 'c', text: 'To validate the user\'s personal identity', isCorrect: false },
        { id: 'd', text: 'To limit the number of possible symptoms', isCorrect: false },
      ],
    },
    {
      id: 'ip-l3-q10',
      question: "What happens if matched_symptoms == 0?",
      questionAr: "ماذا يحدث إذا كان عدد الأعراض المتطابقة هو 0؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Assigns a default score of 0', isCorrect: false },
        { id: 'b', text: 'Disease is skipped or not included in results', isCorrect: true },
        { id: 'c', text: 'The system suffers a division by zero crash', isCorrect: false },
        { id: 'd', text: 'The maximum possible score is assigned', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l3-w1',
      question: "Explain Certainty Factors and why they're important for medical diagnosis. Include the formula and an example calculation.",
      questionAr: "اشرح عوامل اليقين (CFs) وأهميتها للتشخيص الطبي. اذكر الصيغة ومثال للحساب.",
      modelAnswer: "CF combines user and expert confidence. Combined = User CF * Expert CF. Score = Average of combined CFs. Fever (0.9*0.8) + Cough (0.7*0.7) / 2 = 0.605.",
      modelAnswerAr: "اليقين المجمع = User CF * Expert CF. النتيجة = متوسط عوامل اليقين المجمع. حمى (0.9*0.8) + سعال (0.7*0.7) / 2 = 0.605.",
    },
    {
      id: 'ip-l3-w2',
      question: "Compare Certainty Factors, Fuzzy Logic, and Probability-Based Reasoning.",
      questionAr: "قارن بين عوامل اليقين والمنطق الضبابي والاستدلال القائم على الاحتمالات.",
      modelAnswer: "CF: 0-1 confidence. Fuzzy: categories (mild/severe). Probability: uses past data for likelihoods.",
      modelAnswerAr: "CF: ثقة من 0-1. المنطق الضبابي: فئات (خفيف/شديد). الاحتمالات: تستخدم البيانات السابقة للاحتمالات.",
    },
    {
      id: 'ip-l3-w3',
      question: "[TRACING] Calculate the final CF score for 'Flu' given: User reports Fever (CF=0.8) and Fatigue (CF=0.5). Expert KB: Fever (w=0.9), Fatigue (w=0.7).",
      questionAr: "[تتبع] احسب درجة CF النهائية للأنفلونزا: المستخدم أفاد بالحمى (0.8) والتعب (0.5). قاعدة الخبير: حمى (0.9)، تعب (0.7).",
      modelAnswer: "1. Fever: 0.8 * 0.9 = 0.72. 2. Fatigue: 0.5 * 0.7 = 0.35. Average: (0.72 + 0.35) / 2 = 0.535.",
      modelAnswerAr: "1. حمى: 0.8 * 0.9 = 0.72. 2. تعب: 0.5 * 0.7 = 0.35. المتوسط: (0.72 + 0.35) / 2 = 0.535.",
    },
    {
      id: 'ip-l3-w4',
      question: "[CODING] Write a Python snippet to calculate the average CF score for a single disease. Input: user_cf (dict of symptom:val) and expert_kb (dict of symptom:weight).",
      questionAr: "[برمجة] اكتب كود بايثون لحساب متوسط درجة CF لمرض واحد. المدخلات: User CF و Expert KB.",
      modelAnswer: "scores = [user_cf[s]*expert_kb[s] for s in expert_kb if s in user_cf]; return sum(scores)/len(scores) if scores else 0",
      modelAnswerAr: "scores = [user_cf[s]*expert_kb[s] for s in expert_kb if s in user_cf]; return sum(scores)/len(scores) if scores else 0",
    },
    {
      id: 'ip-l3-w5',
      question: "Walk through diagnosis for: fever (CF=0.8), cough (CF=0.6), loss of smell (CF=0.9). Calculate each disease score.",
      questionAr: "قم بالتشخيص لـ: حمى (0.8)، سعال (0.6)، فقدان الشم (0.9). احسب درجة كل مرض.",
      modelAnswer: "Flu: (0.8*0.8+0.6*0.7)/2 = 0.53. COVID: (0.8*0.9+0.6*0.8+0.9*0.9)/3 = 0.67. Pneumonia: (0.8*0.9+0.6*0.8)/2 = 0.60.",
      modelAnswerAr: "أنفلونزا: 0.53. كورونا: 0.67. التهاب رئوي: 0.60.",
    },
    {
      id: 'ip-l3-w6',
      question: "What are the limitations of simple IF-THEN rules without uncertainty handling?",
      questionAr: "ما هي قيود قواعد IF-THEN البسيطة بدون التعامل مع الشك؟",
      modelAnswer: "Binary yes/no only, can't handle partial or overlapping symptoms, no gradual confidence reporting.",
      modelAnswerAr: "نعم/لا فقط، لا تستطيع التعامل مع الأعراض الجزئية أو المتداخلة، لا يوجد تدرج في اليقين.",
    },
    {
      id: 'ip-l3-w7',
      question: "Describe the 5-step implementation plan for building an ES with Certainty Factors.",
      questionAr: "صف خطة التنفيذ المكونة من 5 خطوات لبناء نظام خبير بعوامل اليقين.",
      modelAnswer: "1. Problem definition. 2. Knowledge Base with weight. 3. Inference Engine with calculation. 4. Results Display. 5. User UI for confidence collection.",
      modelAnswerAr: "1. تعريف المشكلة. 2. قاعدة المعرفة بالأوزان. 3. محرك الاستدلال بالحسابات. 4. عرض النتائج. 5. الواجهة لجمع اليقين.",
    },
  ],
}
