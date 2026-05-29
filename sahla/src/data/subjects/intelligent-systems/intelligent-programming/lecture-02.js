export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 2,
  title: 'ES Reasoning, Conflict Resolution & Consultation',
  titleAr: 'استدلال النظم الخبيرة وحل التعارض والاستشارة',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Overview & Key Concepts</h2>
<div class="key-concepts">
  <div class="key-concept-item">Deductive Reasoning: Moving from general rules to specific conclusions.</div>
  <div class="key-concept-item">Conflict Resolution: How the system chooses which rule to fire first.</div>
  <div class="key-concept-item">Decision Support vs Expert Systems: System-driven vs User-driven aid.</div>
</div>

<h2>Backward Chaining — Python Implementation</h2>
<p>Unlike forward chaining (data-driven), <strong>backward chaining</strong> starts with a hypothesis and looks for evidence. Below is a simple Python diagnostic check:</p>
<div class="code-block"><span class="keyword">def</span> <span class="function">pneumonia_diagnosis</span>(symptoms):
    <span class="comment"># Define the 'Goal' (Hypothesis) requirements</span>
    required = {<span class="string">"fever"</span>, <span class="string">"difficulty breathing"</span>, <span class="string">"chest pain"</span>}
    
    <span class="keyword">if</span> required.<span class="function">issubset</span>(<span class="function">set</span>(symptoms)):
        <span class="keyword">return</span> <span class="string">"Hypothesis Confirmed: Patient might have Pneumonia."</span>
    <span class="keyword">else</span>:
        missing = required - <span class="function">set</span>(symptoms)
        <span class="keyword">return</span> <span class="string">f"Hypothesis Rejected. Missing: {missing}"</span></div>

<h2>Deductive Reasoning</h2>
<p>Expert Systems typically use <strong>deductive reasoning</strong>. This is a top-down logical approach where a conclusion is reached by applying general rules to a specific case:</p>
<div class="callout callout-info">
  <span class="callout-icon"></span>
  <span><strong>Example:</strong><br>Premise 1: All mammals have hair.<br>Premise 2: A whale is a mammal.<br><strong>Conclusion:</strong> A whale has hair.</span>
</div>

<h2>Multiple Inferencing & Conflict Sets</h2>
<p>When the facts in working memory match the <strong>IF</strong> conditions of multiple rules at once, we have a <strong>Conflict Set</strong>. The engine must decide which one to fire first.</p>

<h3>The Recognition-Act Cycle</h3>
<ol>
  <li><strong>Match:</strong> Find all rules whose conditions are satisfied.</li>
  <li><strong>Conflict Resolution:</strong> Pick one rule from the conflict set.</li>
  <li><strong>Fire:</strong> Execute the <strong>THEN</strong> part (adds a new fact).</li>
</ol>

<h2>Conflict Resolution Strategies</h2>
<table class="styled-table">
  <thead><tr><th>Strategy</th><th>Description</th><th>Best For...</th></tr></thead>
  <tbody>
    <tr><td><strong>Order</strong></td><td>Fire rules in the order they appear in the file.</td><td>Simplest systems.</td></tr>
    <tr><td><strong>Recency</strong></td><td>Favor rules matching the most recently added fact.</td><td>Dynamic, time-sensitive data.</td></tr>
    <tr><td><strong>Specificity (LHS)</strong></td><td>Fire rules with more conditions (more specific) first.</td><td>Handling complex exceptions.</td></tr>
    <tr><td><strong>Meta-Rules</strong></td><td>Special "rules about rules" that set priorities.</td><td>Large-scale industrial ES.</td></tr>
  </tbody>
</table>

<h3>🔍 Specificity Trace Example</h3>
<p><strong>Facts:</strong> {fever, cough, headache}</p>
<ul>
  <li>R1: IF fever THEN flu</li>
  <li>R2: IF fever AND cough THEN cold</li>
</ul>
<div class="callout callout-tip">
  <span class="callout-icon">💡</span>
  <span><strong>Result:</strong> R2 fires first because it is <strong>more specific</strong> (has 2 conditions) than R1 (only 1).</span>
</div>

<h2>Mortgage Loan Expert System (Case Study)</h2>
<p>Real-world systems use <strong>Hierarchical Rule-Bases</strong>. Here, sub-rules feed into main rules to reach a final decision.</p>
<table class="styled-table">
  <thead><tr><th>Rule #</th><th>Action / Conclusion</th><th>Input Type</th></tr></thead>
  <tbody>
    <tr><td>Rule 1 & 2</td><td>Final Approval (APPROVE)</td><td>Main Decisions</td></tr>
    <tr><td>Rule 3 & 8</td><td>Steady Job / Assets</td><td>Sub-Rules</td></tr>
    <tr><td>Rule 4</td><td>Acceptable Property</td><td>Sub-Rule</td></tr>
    <tr><td>Rule 5, 6, 7</td><td>Income Adequacy</td><td>Chain of Rules</td></tr>
  </tbody>
</table>

<h2>DSS vs. Expert Systems</h2>
<p>It is important to distinguish between purely supportive systems and automated expertise:</p>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Decision Support (DSS)</th><th>Expert Systems (ES)</th></tr></thead>
  <tbody>
    <tr><td><strong>Primary Driver</strong></td><td>User (User-driven)</td><td>System (System-driven)</td></tr>
    <tr><td><strong>Process</strong></td><td>Analytical modeling</td><td>Knowledge-based reasoning</td></tr>
    <tr><td><strong>Outcome</strong></td><td>Helps user decide</td><td>Decides for the user</td></tr>
  </tbody>
</table>`,
        bodyAr: `<h2>نظرة عامة والمفاهيم الأساسية</h2>
<div class="key-concepts">
  <div class="key-concept-item">الاستدلال الاستنباطي: الانتقال من القواعد العامة إلى استنتاجات محددة.</div>
  <div class="key-concept-item">حل التعارض: كيف يختار النظام القاعدة التي يتم تشغيلها أولاً.</div>
  <div class="key-concept-item">أنظمة دعم القرار مقابل النظم الخبيرة: المساعدة التي يقودها المستخدم مقابل النظام.</div>
</div>

<h2>التسلسل الخلفي (Python)</h2>
<p>على عكس التسلسل الأمامي، يبدأ <strong>التسلسل الخلفي</strong> بـ "فرضية" (الهدف) ويبحث عن الأدلة التي تدعمها.</p>

<h2>الاستدلال الاستنباطي (Deductive Reasoning)</h2>
<p>تستخدم النظم الخبيرة المنطق "من الأعلى للأسفل"، حيث يتم الوصول للنتيجة بتطبيق القاعدة العامة على الحالة الخاصة.</p>

<h2>حل التعارض (Conflict Resolution)</h2>
<table class="styled-table">
  <thead><tr><th>الاستراتيجية</th><th>الوصف</th></tr></thead>
  <tbody>
    <tr><td><strong>الترتيب (Order)</strong></td><td>تشغيل القواعد حسب ترتيبها في النظام.</td></tr>
    <tr><td><strong>الحداثة (Recency)</strong></td><td>إعطاء الأولوية لأحدث حقيقة مضافة.</td></tr>
    <tr><td><strong>الخصوصية (Specificity)</strong></td><td>تشغيل القاعدة التي تحتوي على أكبر عدد من الشروط.</td></tr>
  </tbody>
</table>

<h2>الفرق بين DSS و Expert Systems</h2>
<p>DSS يساعد المستخدم في اتخاذ القرار (مدفوع بالمستخدم)، بينما ES يتخذ القرار نيابة عن المستخدم (مدفوع بالنظام).</p>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Deductive reasoning: deriving new facts from accepted premises",
      "Multiple inferencing: multiple rules match → conflict set created",
      "Conflict resolution strategies: Order, Recency, Specificity, Problem-specific",
      "Meta rules: rules that determine the order of rule firing",
      "Mortgage loan case: 8-rule hierarchical structure (sub-rules feed main rules)",
      "DSS is user-driven (helps decide); ES is system-driven (decides for user)",
      "WHY facility: users can ask why a question is asked → system shows relevant rule",
      "ES problems: expensive, errors hard to detect, non-experts may miss wrong conclusions",
    ],
    pointsAr: [
      "الاستدلال الاستنباطي: اشتقاق حقائق جديدة من مقدمات مقبولة.",
      "الاستدلال المتعدد: تطابق قواعد متعددة يؤدي لإنشاء مجموعة تعارض.",
      "استراتيجيات حل التعارض: الترتيب، الحداثة، الخصوصية، والتعامل مع المشكلة المحددة.",
      "قواعد ما وراء القواعد (Meta rules): قواعد تحدد ترتيب إطلاق القواعد.",
      "حالة قرض الرهن العقاري: هيكل هرمي من 8 قواعد.",
      "DSS مدفوع بالمستخدم (يساعد في القرار)؛ ES مدفوع بالنظام (يقرر بدلاً من المستخدم).",
      "ميزة WHY: يسأل المستخدم 'لماذا' ويظهر النظام القاعدة ذات الصلة.",
      "مشاكل ES: مكلف، أخطاء يصعب اكتشافها، غير الخبراء قد يخطئون الاستنتاجات.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l2-q1',
      question: "What happens when multiple rules match the same fact in working memory?",
      questionAr: "ماذا يحدث عندما تتطابق قواعد متعددة مع نفس الحقيقة في ذاكرة العمل؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The entire software system crashes', isCorrect: false },
        { id: 'b', text: 'All matching rules fire at the exact same time', isCorrect: false },
        { id: 'c', text: 'They enter a conflict set where one is selected', isCorrect: true },
        { id: 'd', text: 'The first rule in the list always fires first', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q2',
      question: "The 'specificity' conflict resolution strategy means:",
      questionAr: "استراتيجية حل التعارض القائمة على 'الخصوصية' تعني:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Selecting the simplest rule in the base first', isCorrect: false },
        { id: 'b', text: 'Selecting the rule matching most recent facts', isCorrect: false },
        { id: 'c', text: 'Firing the rule with the most LHS conditions first', isCorrect: true },
        { id: 'd', text: 'Ordering all rules alphabetically by their name', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q3',
      question: "In the mortgage loan rule-base, what does Rule 3 define?",
      questionAr: "في قاعدة قرض الرهن العقاري، ماذا تعرف القاعدة 3؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Whether the property is considered acceptable', isCorrect: false },
        { id: 'b', text: 'Whether an applicant is considered to have a steady job', isCorrect: true },
        { id: 'c', text: 'Whether the total income is considered adequate', isCorrect: false },
        { id: 'd', text: 'Whether the final loan is ready for approval', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q4',
      question: "What is the difference between DSS and Expert Systems?",
      questionAr: "ما الفرق بين DSS والنظم الخبيرة؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A DSS makes all decisions automatically', isCorrect: false },
        { id: 'b', text: 'A DSS is user-driven while ES is system-driven', isCorrect: true },
        { id: 'c', text: 'They are functionally identical systems', isCorrect: false },
        { id: 'd', text: 'DSS uses rules while ES uses databases', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q5',
      question: "In backward chaining Python code, if not all required symptoms are present:",
      questionAr: "في كود التسلسل الخلفي ببايثون، إذا لم تتوفر جميع الأعراض المطلوبة:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The internal system kernel crashes', isCorrect: false },
        { id: 'b', text: 'It returns a positive diagnosis anyway', isCorrect: false },
        { id: 'c', text: 'It identifies and reports all missing symptoms', isCorrect: true },
        { id: 'd', text: 'It asks the user to re-type the input', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q6',
      question: "The 'recency' conflict resolution strategy fires:",
      questionAr: "استراتيجية حل التعارض بالحداثة (recency) تقوم بـ:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The rule containing the most conditions', isCorrect: false },
        { id: 'b', text: 'The rule matching the most recently added fact', isCorrect: true },
        { id: 'c', text: 'The rule that was added earliest to the base', isCorrect: false },
        { id: 'd', text: 'The rule that is considered the least specific', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q7',
      question: "When user types 'WHY' in SELECT AUTO, the system:",
      questionAr: "عندما يكتب المستخدم 'WHY' في النظام، فإن النظام:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Explains the entire final diagnosis', isCorrect: false },
        { id: 'b', text: 'Displays the rule related to the current question', isCorrect: true },
        { id: 'c', text: 'Skips the question and moves to the next one', isCorrect: false },
        { id: 'd', text: 'Immediately terminates the entire consultation', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q8',
      question: "If a single applicant's mortgage is 65% of net income, is income adequate?",
      questionAr: "إذا كان رهن مقدم الطلب الأعزب 65% من صافي الدخل، فهل الدخل كافٍ؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Yes, because the ratio 65% is less than 70%', isCorrect: true },
        { id: 'b', text: 'No, because the ratio 65% is greater than 60%', isCorrect: false },
        { id: 'c', text: 'There is not enough information to conclude', isCorrect: false },
        { id: 'd', text: 'Only if the applicant is also married', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q9',
      question: "'Meta rules' in Expert Systems are described as:",
      questionAr: "قواعد ما وراء القواعد (Meta rules) في نظم الخبرة توصف بأنها:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Rules about rules that determine firing order', isCorrect: true },
        { id: 'b', text: 'Rules that are added via machine learning', isCorrect: false },
        { id: 'c', text: 'Rules used for updating the knowledge base', isCorrect: false },
        { id: 'd', text: 'Rules purely for managing user interaction', isCorrect: false },
      ],
    },
    {
      id: 'ip-l2-q10',
      question: "One major disadvantage of Expert Systems is:",
      questionAr: "من عيوب النظم الخبيرة الأساسية:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'They execute logic too quickly for users', isCorrect: false },
        { id: 'b', text: 'They are incapable of making any errors', isCorrect: false },
        { id: 'c', text: "Non-experts may not catch wrong conclusions", isCorrect: true },
        { id: 'd', text: 'They are extremely easy and cheap to build', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l2-w1',
      question: "Explain the conflict resolution process in rule-based ES. Describe at least three strategies with examples.",
      questionAr: "اشرح عملية حل التعارض في النظم الخبيرة القائمة على القواعد. صف 3 استراتيجيات مع الأمثلة.",
      modelAnswer: "When multiple rules fire, a conflict set is created. Strategies: 1. Order (first rule in list). 2. Recency (matching latest fact). 3. Specificity (more conditions on LHS). Examples: order rules by priority or complexity.",
      modelAnswerAr: "عندما تطلق قواعد متعددة، يتم إنشاء مجموعة تعارض. الاستراتيجيات: 1. الترتيب. 2. الحداثة (أحدث حقيقة). 3. الخصوصية. مثال: ترتيب القواعد حسب الأولوية.",
    },
    {
      id: 'ip-l2-w2',
      question: "Trace through the mortgage loan rules for: married, 3 years at job, good credit, mortgage=55% family income, property in lending zone, loan=75% value, has 20% cash.",
      questionAr: "تتبع صاحب قرض رهن: متزوج، 3 سنوات عمل، رهن 55% من دخل الأسرة، العقار في منطقة القروض، قرض 75% من القيمة، ولديه كاش 20%.",
      modelAnswer: "1. Rule 3 fires -> Job > 2y -> 'steady job'. 2. Rule 6 fires -> Married & Mtg < 60% -> 'family income adequate'. 3. Rule 5 fires -> 'adequate income'. 4. Rule 4 fires -> 'acceptable property'. 5. Rule 1 fires -> 'APPROVE'.",
      modelAnswerAr: "1. Rule 3 -> عمل لأكثر من سنتين -> وظيفة ثابتة. 2. Rule 6 -> متزوج والرهن < 60% -> دخل الأسرة كافٍ. 3. Rule 5 -> دخل كافٍ. 4. Rule 4 -> عقار مقبول. 5. Rule 1 -> موافقة (APPROVE).",
    },
    {
      id: 'ip-l2-w3',
      question: "[TRACING] Conflict Set: R1 (IF A THEN X), R2 (IF A & B THEN Y), R3 (IF C THEN Z). Facts: {A, B, C}. Which rule fires first under Specificity strategy? Why?",
      questionAr: "[تتبع] مجموعة التعارض: R1 (IF A THEN X)، R2 (IF A & B THEN Y)، R3 (IF C THEN Z). الحقائق: {A, B, C}. أي قاعدة تطلق أولاً حسب الخصوصية؟",
      modelAnswer: "R2 fires first because it has the most conditions (A & B) on the LHS, making it the most specific rule.",
      modelAnswerAr: "تطلق R2 أولاً لأنها تحتوي على شروط أكثر (أ و ب)، مما يجعلها القاعدة الأكثر خصوصية.",
    },
    {
      id: 'ip-l2-w4',
      question: "[CODING] Implement a simple Conflict Resolution 'Specificity' picker in Python. Given a list of rules (each a list of conditions), return the index of the rule with the most conditions.",
      questionAr: "[برمجة] نفذ ملتقط الخصوصية في بايثون. أعد فهرس (index) القاعدة التي تحتوي على أكبر عدد من الشروط.",
      modelAnswer: "def pick_specific(rules): return rules.index(max(rules, key=len))",
      modelAnswerAr: "def pick_specific(rules): return rules.index(max(rules, key=len))",
    },
    {
      id: 'ip-l2-w5',
      question: "Compare backward chaining and forward chaining with Python pseudocode for medical diagnosis.",
      questionAr: "قارن بين التسلسل الخلفي والأمامي مع كود زائف لبايثون للتشخيص الطبي.",
      modelAnswer: "Forward: Loop rules, check if symptoms subset. Backward: check if all required symptoms for a specific disease exist.",
      modelAnswerAr: "الأمامي: تكرار القواعد والتحقق من وجود الأعراض. الخلفي: التحقق من وجود جميع الأعراض المطلوبة لمرض معين.",
    },
    {
      id: 'ip-l2-w6',
      question: "Explain why Expert Systems can be problematic. Discuss at least three disadvantages.",
      questionAr: "اشرح لماذا يمكن أن تكون النظم الخبيرة مشكلة. ناقش 3 عيوب.",
      modelAnswer: "1. Expensive upkeep. 2. Hidden errors in conclusions. 3. Verification difficulty for non-experts.",
      modelAnswerAr: "1. صيانة مكلفة. 2. أخطاء مختفية في الاستنتاجات. 3. صعوبة التحقق لغير الخبراء.",
    },
    {
      id: 'ip-l2-w7',
      question: "What is the difference between DSS and ES? Give an example scenario for each.",
      questionAr: "ما الفرق بين DSS و ES؟ اذكر سيناريو لكل منهما.",
      modelAnswer: "DSS is user-driven (e.g., financial dashboard helping analyst). ES is system-driven (e.g., auto-diagnosis bot deciding treatment).",
      modelAnswerAr: "DSS مدفوع بالمستخدم (مثل لوحة تحكم مالية تسعد المحلل). ES مدفوع بالنظام (مثل بوت التشخيص الآلي يقرر العلاج).",
    },
  ],
}
