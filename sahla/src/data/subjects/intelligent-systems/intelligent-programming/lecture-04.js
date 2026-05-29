export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 4,
  title: 'Case-Based Reasoning (CBR)',
  titleAr: 'الاستدلال المبني على الحالات (CBR)',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Overview & Key Concepts</h2>
<div class="key-concepts">
  <div class="key-concept-item">Case-Based Reasoning (CBR): Solving problems by reusing solutions from similar past experiences.</div>
  <div class="key-concept-item">Case Base: A library of stored "episodes" or problems with their confirmed solutions.</div>
  <div class="key-concept-item">The 4 R's: Retrieve, Reuse, Revise, and Retain — the lifecycle of a CBR system.</div>
</div>

<h2>What is CBR?</h2>
<p>CBR solves problems by <strong>remembering and reusing solutions from similar past problems</strong>. Like humans: "I've seen this before" → adapt past experience.</p>
<ul>
  <li>Uses <strong>stored past experience</strong> (case base) instead of rules</li>
  <li>Draws on <strong>similarities and differences</strong></li>
  <li><strong>Learns from experience</strong> — new solved cases added to case base</li>
</ul>

<h2>The Four R's — CBR Cycle</h2>
<table class="styled-table">
  <thead><tr><th>Step</th><th>Name</th><th>What It Does</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>Retrieve</strong></td><td>Search case base for most similar past case</td></tr>
    <tr><td>2</td><td><strong>Reuse</strong></td><td>Adapt the similar case's solution to fit new problem</td></tr>
    <tr><td>3</td><td><strong>Revise</strong></td><td>Test the proposed solution; repair if it fails</td></tr>
    <tr><td>4</td><td><strong>Retain</strong></td><td>Store confirmed solution as new case for future use</td></tr>
  </tbody>
</table>

<h2>Similarity Computation</h2>
<p>Similarity: 0.0 (none) to 1.0 (identical). Attributes have <strong>weights</strong> reflecting importance.</p>
<div class="code-block">Similarity = (1 / Σweights) × Σ(weight_i × similarity_i)</div>

<h3>🔍 Similarity Trace Example</h3>
<table class="styled-table">
  <thead><tr><th>Attribute</th><th>Weight</th><th>Similarity</th><th>W × S Product</th></tr></thead>
  <tbody>
    <tr><td>Fault</td><td>6</td><td>0.8</td><td>4.8</td></tr>
    <tr><td>Battery</td><td>6</td><td>0.9</td><td>5.4</td></tr>
    <tr><td>Lights</td><td>6</td><td>1.0</td><td>6.0</td></tr>
    <tr><td>Car Make</td><td>1</td><td>0.4</td><td>0.4</td></tr>
    <tr><td>Year</td><td>1</td><td>0.6</td><td>0.6</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>20</strong></td><td>-</td><td><strong>17.2</strong></td></tr>
  </tbody>
</table>
<p>Result = 17.2 / 20 = <strong>0.86</strong></p>

<h2>Adaptation</h2>
<p>After finding best match, its solution is <strong>adapted</strong>:</p>
<ul>
  <li>Original: "Front light fuse defect → Replace front light fuse"</li>
  <li>Adapted: "<strong>Brake</strong> light fuse defect → Replace <strong>brake</strong> light fuse"</li>
</ul>

<h3>Two Adaptation Approaches</h3>
<table class="styled-table">
  <thead><tr><th>Approach</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Transformational Analogy</strong></td><td>Modify the <em>past solution itself</em> using rules to fit new problem</td></tr>
    <tr><td><strong>Derivational Analogy</strong></td><td>Reuse the <em>method/process</em> used, not the solution itself</td></tr>
  </tbody>
</table>

<h2>Case Revision & Retention</h2>
<p><strong>Revision:</strong> Evaluate solution (real environment or simulation) → repair if failed.</p>
<p><strong>Retention:</strong> Verified solutions added to case base → system <strong>learns over time</strong>.</p>

<h2>Expert System vs CBR</h2>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Expert System</th><th>CBR</th></tr></thead>
  <tbody>
    <tr><td>Basis</td><td>IF-THEN rules</td><td>Past cases/experiences</td></tr>
    <tr><td>Reasoning</td><td>Forward/backward chaining</td><td>Similarity-based retrieval</td></tr>
    <tr><td>Adaptation</td><td>Does NOT adapt automatically</td><td>Adapts past solutions</td></tr>
    <tr><td>Learning</td><td>Does NOT learn automatically</td><td>Learns by retaining new cases</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>نظرة عامة والمفاهيم الأساسية</h2>
<div class="key-concepts">
  <div class="key-concept-item">الاستدلال بالحالات (CBR): حل المشكلات بإعادة استخدام الحلول السابقة.</div>
  <div class="key-concept-item">قاعدة الحالات: مكتبة مخزنة للخبرات السابقة مع حلولها المعتمدة.</div>
  <div class="key-concept-item">دورة الـ 4 R's: استرجع، أعد الاستخدام، راجع، واحتفظ.</div>
</div>

<h2>ما هو CBR؟</h2>
<p>يحل CBR المشكلات من خلال <strong>تذكر وإعادة استخدام الحلول من مشكلات ماضية مماثلة</strong>. مثل البشر: "لقد رأيت هذا من قبل".</p>

<h2>دورة الـ 4 R's</h2>
<table class="styled-table">
  <thead><tr><th>الخطوة</th><th>الاسم</th><th>الوصف</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>الاسترجاع (Retrieve)</strong></td><td>البحث عن الحالة الأكثر تشابهاً من المشاكل السابقة.</td></tr>
    <tr><td>2</td><td><strong>إعادة الاستخدام (Reuse)</strong></td><td>تعديل حل الحالة السابقة ليناسب المشكلة الحالية.</td></tr>
    <tr><td>3</td><td><strong>المراجعة (Revise)</strong></td><td>اختبار الحل المقترح وإصلاحه عند الفشل.</td></tr>
    <tr><td>4</td><td><strong>الاحتفاظ (Retain)</strong></td><td>تخزين الحل الجديد للتعلم من التجربة.</td></tr>
  </tbody>
</table>

<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span>خلافاً للنظم الخبيرة التي تتبع قواعد ثابتة، فإن أنظمة CBR تتعلم من التجارب وتتحسن مع الوقت.</span>
</div>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "CBR solves problems using past experiences, not rules",
      "Four R's: Retrieve → Reuse → Revise → Retain",
      "Similarity measured 0.0-1.0 using weighted attributes",
      "Weighted average: Σ(weight × similarity) / Σ(weights)",
      "Adaptation: modify best-matching case's solution for new problem",
      "Transformational analogy: modify the solution directly",
      "Derivational analogy: reuse the method/process, not the solution",
      "Case revision: evaluate and repair if necessary",
      "Case retention: store confirmed solutions → system learns",
      "CBR learns and adapts; ES follows fixed rules",
    ],
    pointsAr: [
      "الاستدلال المبني على الحالات (CBR): يحل المشكلات بالخبرات السابقة وليس القواعد.",
      "دورة 4 R's: استرجاع ← إعادة استخدام ← مراجعة ← احتفاظ.",
      "قياس التشابه من 0.0 إلى 1.0 باستخدام أوزان للسمات.",
      "المتوسط المرجح: مجموع (الوزن × التشابه) / مجموع الأوزان.",
      "التكييف (Adaptation): تعديل حل الحالة الأكثر تشابهاً لتناسب المشكلة الجديدة.",
      "القياس التحويلي (Transformational): تعديل الحل مباشرة.",
      "القياس الاشتقاقي (Derivational): إعادة استخدام الطريقة وليس الحل.",
      "مراجعة الحالة: التقييم والإصلاح إذا لزم الأمر.",
      "الاحتفاظ بالحالة: تخزين الحل وبذلك يتعلم النظام.",
      "CBR يتعلم ويتكيف، بينما ES يتبع قواعد ثابتة.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l4-q1',
      question: "The four steps of the CBR cycle are:",
      questionAr: "الخطوات الأربع لدورة الـ CBR هي:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Input, Process, Output, Store', isCorrect: false },
        { id: 'b', text: 'Retrieve, Reuse, Revise, Retain', isCorrect: true },
        { id: 'c', text: 'Collect, Analyze, Decide, Report', isCorrect: false },
        { id: 'd', text: 'Search, Match, Apply, Save', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q2',
      question: "In similarity computation, 0.0 means:",
      questionAr: "في حساب التشابه، 0.0 تعني:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Perfect match', isCorrect: false },
        { id: 'b', text: 'No similarity at all', isCorrect: true },
        { id: 'c', text: 'Moderate similarity', isCorrect: false },
        { id: 'd', text: 'Unknown', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q3',
      question: "If weight for 'Fault' is 6 and 'Car Make' is 1, which has more influence?",
      questionAr: "إذا كان وزن 'العطل' 6 و 'ماركة السيارة' 1، فأيهما أكثر تأثيراً؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Car Make', isCorrect: false },
        { id: 'b', text: 'Fault', isCorrect: true },
        { id: 'c', text: 'Both equal', isCorrect: false },
        { id: 'd', text: 'Neither', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q4',
      question: "In the car example, changing 'front light' to 'brake light' is based on:",
      questionAr: "في مثال السيارة، تغيير 'الضوء الأمامي' إلى 'ضوء الفرامل' يعتمد على:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Random replacement', isCorrect: false },
        { id: 'b', text: 'Differences between matched case and new problem', isCorrect: true },
        { id: 'c', text: 'User preference', isCorrect: false },
        { id: 'd', text: 'Default behavior', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q5',
      question: "Transformational analogy involves:",
      questionAr: "يتضمن القياس التحويلي (Transformational analogy):",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Reusing the method that produced the solution', isCorrect: false },
        { id: 'b', text: 'Modifying the past solution directly to fit new problem', isCorrect: true },
        { id: 'c', text: 'Creating a completely new solution', isCorrect: false },
        { id: 'd', text: 'Ignoring past cases', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q6',
      question: "Key advantage of CBR over Expert Systems:",
      questionAr: "ميزة CBR الأساسية على النظم الخبيرة:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'CBR is faster', isCorrect: false },
        { id: 'b', text: 'CBR can learn from new experiences and adapt', isCorrect: true },
        { id: 'c', text: 'CBR requires fewer resources', isCorrect: false },
        { id: 'd', text: "CBR doesn't need a database", isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q7',
      question: "In the weighted similarity calculation, the total weight sum was:",
      questionAr: "في حساب التشابه المرجح، كان مجموع الأوزان الكلي هو:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '10', isCorrect: false },
        { id: 'b', text: '15', isCorrect: false },
        { id: 'c', text: '20', isCorrect: true },
        { id: 'd', text: '25', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q8',
      question: "Derivational analogy reuses:",
      questionAr: "يعيد القياس الاشتقاقي (Derivational analogy) استخدام:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'The exact past solution', isCorrect: false },
        { id: 'b', text: 'The process/method used to create the past solution', isCorrect: true },
        { id: 'c', text: 'Only the problem description', isCorrect: false },
        { id: 'd', text: 'Nothing from past cases', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q9',
      question: "Case revision involves:",
      questionAr: "تتضمن مراجعة الحالة (Case revision):",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Storing immediately', isCorrect: false },
        { id: 'b', text: 'Evaluating and repairing if it fails', isCorrect: true },
        { id: 'c', text: 'Deleting unsuccessful cases', isCorrect: false },
        { id: 'd', text: 'Asking for new problem', isCorrect: false },
      ],
    },
    {
      id: 'ip-l4-q10',
      question: "CBR is most appropriate when:",
      questionAr: "يكون CBR أكثر ملاءمة عندما:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Rules are well-defined and stable', isCorrect: false },
        { id: 'b', text: 'Domain is dynamic and past experiences are useful', isCorrect: true },
        { id: 'c', text: 'Logical inference is the only approach', isCorrect: false },
        { id: 'd', text: 'No past data available', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l4-w1',
      question: "Explain the CBR cycle (Four R's) with a practical example.",
      questionAr: "اشرح دورة CBR (الـ 4 R's) بمثال عملي.",
      modelAnswer: "1. Retrieve: find similar tech support case. 2. Reuse: adapt fix to current gadget. 3. Revise: check if fix works. 4. Retain: save the fix in support database.",
      modelAnswerAr: "1. استرجاع: البحث عن حالة دعم فني مماثلة. 2. إعادة الاستخدام: تكييف الحل للجهاز الحالي. 3. مراجعة: اختبار الحل. 4. الاحتفاظ: تخزين الحل في قاعدة البيانات.",
    },
    {
      id: 'ip-l4-w2',
      question: "Calculate weighted similarity: Fault(w=6,sim=0.7), Car(w=1,sim=0.3), Year(w=1,sim=0.5), Battery(w=6,sim=0.95), Lights(w=6,sim=1.0).",
      questionAr: "احسب التشابه المرجح: Fault(w=6,sim=0.7), Car(w=1,sim=0.3), Year(w=1,sim=0.5), Battery(w=6,sim=0.95), Lights(w=6,sim=1.0).",
      modelAnswer: "Sum weights = 20. Weighted sum = (6*0.7)+(1*0.3)+(1*0.5)+(6*0.95)+(6*1.0) = 4.2+0.3+0.5+5.7+6.0 = 16.7. Similarity = 16.7/20 = 0.835.",
      modelAnswerAr: "مجموع الأوزان = 20. المجموع المرجح = 16.7. التشابه = 0.835.",
    },
    {
      id: 'ip-l4-w3',
      question: "Compare transformational and derivational analogy with examples.",
      questionAr: "قارن بين القياس التحويلي (Transformational) والاشتقاقي (Derivational) مع الأمثلة.",
      modelAnswer: "Transformational: Modifying solution directly (e.g. bridge redesign). Derivational: Reusing the problem-solving logic/steps.",
      modelAnswerAr: "تحويلي: تعديل الحل مباشرة (إعادة تصميم جسر). اشتقاقي: إعادة استخدام منطق/خطوات حل المشكلة.",
    },
    {
      id: 'ip-l4-w4',
      question: "Explain how CBR learns over time. Why is 'Retain' critical?",
      questionAr: "اشرح كيف يتعلم CBR بمرور الوقت. لماذا تعد خطوة 'الاحتفاظ' (Retain) هامة؟",
      modelAnswer: "Learning occurs by adding new confirmed solutions to Case Base. Retain is critical because it ensures the system knows more cases and provides better matches next time.",
      modelAnswerAr: "يتم التعلم بإضافة حالات جديدة لقاعدة الحالات. 'الاحتفاظ' يضمن زيادة معرفة النظام وتحسين التطابق المستقبلي.",
    },
    {
      id: 'ip-l4-w5',
      question: "Discuss advantages and disadvantages of CBR vs Expert Systems.",
      questionAr: "ناقش مزايا وعيوب CBR مقابل النظم الخبيرة.",
      modelAnswer: "CBR learns and adapts, handles novel domains easily, but needs cases. ES is consistent and explainable but rigid and doesn't learn.",
      modelAnswerAr: "CBR يتعلم ويتكيف، يسهل تطبيقه في مجالات جديدة، لكنه يحتاج حالات. ES ثابت وسهل الفهم لكنه جامد ولا يتعلم.",
    },
  ],
}
