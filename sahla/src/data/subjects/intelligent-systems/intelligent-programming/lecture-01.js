export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'intelligent-programming',
  number: 1,
  title: 'Introduction to AI & Expert Systems',
  titleAr: 'مقدمة في الذكاء الاصطناعي والنظم الخبيرة',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Overview & Key Concepts</h2>
<div class="key-concepts">
  <div class="key-concept-item">Expert System (ES): A program that mimics human expertise using rules and inference.</div>
  <div class="key-concept-item">Knowledge Base: The repository of facts and IF-THEN rules.</div>
  <div class="key-concept-item">Inference Engine: The brain that applies logic (Forward or Backward chaining).</div>
</div>

<h2>🔹 What is Intelligence & AI?</h2>
<p><strong>Intelligence</strong> is the ability to <em>understand, learn, solve problems, and make decisions</em> — not just doing things automatically.</p>
<p><strong>Artificial Intelligence (AI)</strong> aims to make machines perform tasks requiring human intelligence: reasoning, knowledge representation, problem-solving.</p>

<h3>Four Main AI Topics</h3>
<table class="styled-table">
  <thead><tr><th>Topic</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Expert Systems (ES)</strong></td><td>Programs mimicking human expertise using rules & reasoning</td></tr>
    <tr><td><strong>Case-Based Reasoning (CBR)</strong></td><td>Solve problems by referring to similar past problems</td></tr>
    <tr><td><strong>Intelligent Software Agents</strong></td><td>Personal assistants that learn from users & filter information</td></tr>
    <tr><td><strong>Language Technology</strong></td><td>Speech recognition, translation, text summarization</td></tr>
  </tbody>
</table>

<h2>🔹 Expert Systems — Definition</h2>
<p>An ES is a computer program that <strong>mimics human expertise</strong> by applying <strong>inference methods</strong> to a specific <strong>body of knowledge</strong>. It captures what a human expert knows and solves problems automatically.</p>

<h3>Why Use Expert Systems?</h3>
<ul>
  <li>Expert knowledge is often <strong>heuristic</strong> (rules of thumb) — easier to encode as rules than algorithms</li>
  <li>A <strong>knowledge engineer</strong> extracts knowledge from experts and encodes it as rules</li>
  <li><strong>Knowledge is separated from processing</strong> — easier to build and maintain</li>
</ul>

<h3>Advantages of ES</h3>
<ul>
  <li>Available 24/7 — don't sleep, retire, or resign</li>
  <li>Consistent & unbiased recommendations</li>
  <li>Multiple copies distributable anywhere</li>
  <li>Can justify conclusions by showing reasoning chain</li>
</ul>

<h3>ES vs. Conventional Systems</h3>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Conventional</th><th>Expert Systems</th></tr></thead>
  <tbody>
    <tr><td>Knowledge ⭐</td><td>Complete, explicit, algorithmic</td><td>Fragmented, implicit, "rules of thumb"</td></tr>
    <tr><td>Rules</td><td>Simple, few conditions</td><td>Complex, conditional, imprecise</td></tr>
    <tr><td>Output</td><td>Automates manual procedures</td><td>Captures & distributes expertise</td></tr>
    <tr><td>Problem-solving</td><td>Predictable, repetitive</td><td>Dynamic, context-driven</td></tr>
  </tbody>
</table>

<h2>🔹 4 Components of an Expert System</h2>
<ol>
  <li><strong>Knowledge Base</strong> — stores facts, procedural rules, and heuristic rules</li>
  <li><strong>Inference Engine</strong> — controls reasoning; uses forward or backward chaining</li>
  <li><strong>User Interface</strong> — how users input data and receive conclusions</li>
  <li><strong>Explanation Facility</strong> — justifies conclusions by showing which rules were applied</li>
</ol>

<h3>Knowledge Types</h3>
<ul>
  <li><strong>Facts</strong>: e.g., "Milk is white"</li>
  <li><strong>Procedural Rules</strong>: well-defined invariant rules</li>
  <li><strong>Heuristic Rules</strong>: rules of thumb gained by experience</li>
</ul>

<h2>🔹 Knowledge Representation Using Rules</h2>
<p>Rules follow IF...THEN structure:</p>
<div class="code-block"><span class="keyword">IF</span> "fever" <span class="keyword">THEN</span> "flu"

<span class="keyword">IF</span> "fever" <span class="keyword">AND</span> "cough" <span class="keyword">AND</span> "fatigue" <span class="keyword">THEN</span> "COVID-19"</div>

<h2>🔹 Forward vs. Backward Chaining</h2>
<table class="styled-table">
  <thead><tr><th>Feature</th><th>Forward Chaining</th><th>Backward Chaining</th></tr></thead>
  <tbody>
    <tr><td>Direction</td><td>Facts → Goal (bottom-up)</td><td>Goal → Facts (top-down)</td></tr>
    <tr><td>Starts with</td><td>Known facts/symptoms</td><td>A hypothesis/goal</td></tr>
    <tr><td>Also known as</td><td>Fact-driven, data-driven</td><td>Goal-driven</td></tr>
  </tbody>
</table>
<div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>Forward:</strong> Patient has fever+cough+fatigue → system concludes COVID-19<br><strong>Backward:</strong> Doctor suspects pneumonia → checks if fever+difficulty breathing+chest pain are present</span></div>

<h2>🔹 Python Implementation</h2>
<div class="code-block"><span class="comment"># Knowledge Base</span>
disease_rules = {
    (<span class="string">"fever"</span>, <span class="string">"cough"</span>, <span class="string">"fatigue"</span>): <span class="string">"Possible COVID-19"</span>,
    (<span class="string">"fever"</span>, <span class="string">"cough"</span>): <span class="string">"Possible Flu"</span>,
    (<span class="string">"headache"</span>, <span class="string">"runny nose"</span>): <span class="string">"Possible Cold"</span>,
}


<span class="comment"># Forward Chaining</span>
<span class="keyword">def</span> <span class="function">diagnose</span>(symptoms):
    <span class="keyword">for</span> condition, diagnosis <span class="keyword">in</span> disease_rules.<span class="function">items</span>():
        <span class="keyword">if</span> <span class="function">set</span>(condition).<span class="function">issubset</span>(<span class="function">set</span>(symptoms)):
            <span class="keyword">return</span> diagnosis
            
    <span class="keyword">return</span> <span class="string">"No diagnosis found."</span></div>

<h3>🔍 Line-by-Line Code Trace</h3>
<p>Execution for <code>symptoms = ["fever", "cough"]</code>:</p>
<ol>
  <li><strong>Loop 1:</strong> Condition is <code>("fever", "cough", "fatigue")</code>. <code>set(cond).issubset(symptoms)</code> returns <strong>False</strong> (fatigue is missing).</li>
  <li><strong>Loop 2:</strong> Condition is <code>("fever", "cough")</code>. <code>set(cond).issubset(symptoms)</code> returns <strong>True</strong>.</li>
  <li><strong>Return:</strong> <code>"Possible Flu"</code>.</li>
</ol>`,
        bodyAr: `<h2>🔹 نظرة عامة والمفاهيم الأساسية</h2>
<div class="key-concepts">
  <div class="key-concept-item">النظم الخبيرة (ES): برنامج يحاكي الخبرة البشرية باستخدام القواعد والاستدلال.</div>
  <div class="key-concept-item">قاعدة المعرفة: مستودع الحقائق وقواعد IF-THEN.</div>
  <div class="key-concept-item">محرك الاستدلال: عقل النظام الذي يطبق المنطق (التسلسل الأمامي أو الخلفي).</div>
</div>

<h2>🔹 ما هو الذكاء والذكاء الاصطناعي؟</h2>
<p><strong>الذكاء</strong> هو القدرة على <em>الفهم والتعلم وحل المشكلات واتخاذ القرارات</em>.</p>

<h2>🔹 النظم الخبيرة — المكونات الأربعة</h2>
<ol>
  <li><strong>قاعدة المعرفة:</strong> تخزن الحقائق والقواعد.</li>
  <li><strong>محرك الاستدلال:</strong> يتحكم في عملية التفكير (تسلسل أمامي أو خلفي).</li>
  <li><strong>واجهة المستخدم:</strong> للتعامل مع النظام.</li>
  <li><strong>مرفق التوضيح:</strong> يبرر الاستنتاجات.</li>
</ol>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Intelligence = ability to understand, learn, solve problems, make decisions",
      "AI = making machines perform tasks requiring human intelligence",
      "Expert System = program mimicking human expertise using rules + inference",
      "4 components: Knowledge Base, Inference Engine, User Interface, Explanation Facility",
      "Knowledge types: Facts, Procedural Rules, Heuristic Rules",
      "Knowledge Acquisition: extracted from domain experts by knowledge engineers",
      "Forward Chaining: fact-driven, bottom-up (facts → goal)",
      "Backward Chaining: goal-driven, top-down (goal → facts)",
      "Rules use IF...THEN structure with single or multiple conditions",
    ],
    pointsAr: [
      "الذكاء = القدرة على الفهم والتعلم وحل المشكلات واتخاذ القرارات.",
      "الذكاء الاصطناعي = جعل الآلات تؤدي مهام تتطلب ذكاءً بشرياً.",
      "النظام الخبير = برنامج يحاكي الخبرة البشرية باستخدام القواعد والاستدلال.",
      "4 مكونات: قاعدة المعرفة، محرك الاستدلال، واجهة المستخدم، مرفق التوضيح.",
      "أنواع المعرفة: حقائق، قواعد إجرائية، قواعد 휴리스ية (قواعد التجربة).",
      "اكتساب المعرفة: استخراجها من خبراء المجال بواسطة مهندسي المعرفة.",
      "التسلسل الأمامي: مدفوع بالحقائق، من الأسفل للأعلى (حقائق ← هدف).",
      "التسلسل الخلفي: مدفوع بالهدف، من الأعلى للأسفل (هدف ← حقائق).",
      "تستخدم القواعد هيكل IF...THEN مع شروط فردية أو متعددة.",
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'ip-l1-q1',
      question: "What is the primary advantage of separating knowledge from processing in an ES?",
      questionAr: "ما هي الميزة الأساسية لفصل المعرفة عن المعالجة في النظام الخبير؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It enables faster execution by optimizing standard algorithms', isCorrect: false },
        { id: 'b', text: 'It allows the system to function without any internet connection', isCorrect: false },
        { id: 'c', text: 'It makes the system easier to build, modify, and maintain', isCorrect: true },
        { id: 'd', text: 'It significantly reduces the amount of storage space needed', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q2',
      question: "Which component of an Expert System controls the reasoning process?",
      questionAr: "أي مكون من مكونات النظام الخبير يتحكم في عملية الاستدلال؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'A centralized knowledge base of rules', isCorrect: false },
        { id: 'b', text: 'The user interface for data collection', isCorrect: false },
        { id: 'c', text: 'The explanation facility for justifications', isCorrect: false },
        { id: 'd', text: 'An inference engine that applies logical logic', isCorrect: true },
      ],
    },
    {
      id: 'ip-l1-q3',
      question: "Forward chaining is also known as:",
      questionAr: "يُعرف التسلسل الأمامي أيضاً بـ:",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Goal-driven reasoning using high-level hypotheses', isCorrect: false },
        { id: 'b', text: 'Top-down reasoning starting from the desired conclusion', isCorrect: false },
        { id: 'c', text: 'Fact-driven / bottom-up reasoning from input data', isCorrect: true },
        { id: 'd', text: 'Heuristic reasoning based on past experiences only', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q4',
      question: "Which of the following is NOT a component of an Expert System?",
      questionAr: "أي مما يلي ليس من مكونات النظام الخبير؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A modular Knowledge Base', isCorrect: false },
        { id: 'b', text: 'A Database Management System for structured data', isCorrect: true },
        { id: 'c', text: 'An Inference Engine for logical operations', isCorrect: false },
        { id: 'd', text: 'An Explanation Facility for transparency', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q5',
      question: "In the rule IF 'fever' AND 'cough' THEN 'Flu', what is the THEN part called?",
      questionAr: "في القاعدة IF 'fever' AND 'cough' THEN 'Flu'، ماذا يسمى الجزء THEN؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A prerequisite condition', isCorrect: false },
        { id: 'b', text: 'A logical premise', isCorrect: false },
        { id: 'c', text: 'A final conclusion', isCorrect: true },
        { id: 'd', text: 'A working hypothesis', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q6',
      question: "A Knowledge Engineer's role is to:",
      questionAr: "دور مهندس المعرفة هو:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Diagnose patients using their medical expertise', isCorrect: false },
        { id: 'b', text: 'Design the graphical user interface components', isCorrect: false },
        { id: 'c', text: 'Extract domain knowledge from experts and encode it as rules', isCorrect: true },
        { id: 'd', text: 'Test the software for coding bugs and performance', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q7',
      question: "Which type of knowledge is described as 'rules of thumb gained by experience'?",
      questionAr: "أي نوع من المعرفة يوصف بأنه 'قواعد التجربة المكتسبة بالخبرة'؟",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Universally accepted facts', isCorrect: false },
        { id: 'b', text: 'Invariant procedural rules', isCorrect: false },
        { id: 'c', text: 'Subjective heuristic rules', isCorrect: true },
        { id: 'd', text: 'Metaphysical meta-rules', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q8',
      question: "Backward chaining starts with:",
      questionAr: "يبدأ التسلسل الخلفي بـ:",
      difficulty: 'easy',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'A collection of known facts', isCorrect: false },
        { id: 'b', text: 'A specific goal or initial hypothesis', isCorrect: true },
        { id: 'c', text: 'A set of random data points', isCorrect: false },
        { id: 'd', text: 'The main user interface dashboard', isCorrect: false },
      ],
    },
    {
      id: 'ip-l1-q9',
      question: "set(condition).issubset(set(symptoms)) checks whether:",
      questionAr: "تتحقق الدالة set(condition).issubset(set(symptoms)) مما إذا كان:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The two sets are exactly identical in all aspects', isCorrect: false },
        { id: 'b', text: "All conditions exist within the user's reported symptoms", isCorrect: true },
        { id: 'c', text: 'At least one condition matches any input symptom', isCorrect: false },
        { id: 'd', text: "No conditions match the user's reported symptoms", isCorrect: false },
      ],
    },
    
    {
      id: 'ip-l1-q10',
      question: "Expert Systems differ from conventional programs because:",
      questionAr: "تختلف النظم الخبيرة عن البرامج التقليدية لأنها:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'They rely heavily on database management', isCorrect: false },
        { id: 'b', text: 'Their internal logic is always complete and explicit', isCorrect: false },
        { id: 'c', text: 'They use heuristic rules to handle fragmented knowledge', isCorrect: true },
        { id: 'd', text: 'They follow simpler, more predictable rules', isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  written: [
    {
      id: 'ip-l1-w1',
      question: "Define an Expert System and explain how it differs from a conventional software application. Provide at least 3 differences.",
      questionAr: "عرف النظام الخبير واشرح كيف يختلف عن تطبيقات البرمجيات التقليدية. اذكر 3 اختلافات على الأقل.",
      modelAnswer: "An ES mimics human expertise using rules and reasoning. 1. Knowledge: ES uses fragmented/heuristic knowledge vs complete/algorithmic in conventional. 2. Rules: ES uses complex/conditional rules. 3. Output: ES captures expert knowledge vs automate manual procedures.",
      modelAnswerAr: "النظام الخبير هو برنامج يحاكي الخبرة البشرية. 1. المعرفة: يستخدم ES المعرفة 휴리스ية (التجربة) المجزأة مقابل المعرفة الخوارزمية الكاملة. 2. القواعد: يستخدم قواعد معقدة وشرطية. 3. المخرجات: يلتقط الخبرة مقابل أتمتة الإجراءات اليدوية.",
    },
    {
      id: 'ip-l1-w2',
      question: "Describe the four components of an Expert System and explain the role of each.",
      questionAr: "صف المكونات الأربعة للنظام الخبير واشرح دور كل منها.",
      modelAnswer: "1. Knowledge Base (stores facts/rules). 2. Inference Engine (controls reasoning). 3. User Interface (interaction). 4. Explanation Facility (justifies conclusion).",
      modelAnswerAr: "1. قاعدة المعرفة (تخزن الحقائق). 2. محرك الاستدلال (يتحكم في التفكير). 3. واجهة المستخدم (التفاعل). 4. مرفق التوضيح (يبرر النتيجة).",
    },
    {
      id: 'ip-l1-w3',
      question: "Compare forward chaining and backward chaining with examples.",
      questionAr: "قارن بين التسلسل الأمامي والخلفي مع الأمثلة.",
      modelAnswer: "Forward: Facts -> Goal (e.g., symptoms predict disease). Backward: Goal -> Facts (e.g., test if patient has specific disease by checking symptoms).",
      modelAnswerAr: "الأمامي: حقائق ← هدف (مثلاً الأعراض تتنبأ بالمرض). الخلفي: هدف ← حقائق (مثلاً اختبار إذا كان المريض لديه مرض معين بالتحقق من الأعراض).",
    },
    {
      id: 'ip-l1-w4',
      question: "[TRACING] Rule Base: R1: IF A & B THEN C; R2: IF C & D THEN E; R3: IF F THEN A. Facts: {F, B, D}. Trace Forward Chaining to find if E is true.",
      questionAr: "[تتبع] قاعدة القواعد: R1: IF A & B THEN C; R2: IF C & D THEN E; R3: IF F THEN A. الحقائق: {F, B, D}. تتبع التسلسل الأمامي لمعرفة ما إذا كان E صحيحاً.",
      modelAnswer: "1. R3 fires (F exists) -> Add Fact A. 2. R1 fires (A & B exists) -> Add Fact C. 3. R2 fires (C & D exists) -> Fact E is TRUE.",
      modelAnswerAr: "1. يعمل R3 (F موجود) ← إضافة حقيقة A. 2. يعمل R1 (A و B موجودان) ← إضافة حقيقة C. 3. يعمل R2 (C و D موجودان) ← حقيقة E صحيحة.",
    },
    {
      id: 'ip-l1-w5',
      question: "[CODING] Write a Python function check_rule(conditions, facts) that returns True if all conditions (list) are present in facts (set/list).",
      questionAr: "[برمجة] اكتب دالة بايثون check_rule(conditions, facts) تعيد True إذا كانت كل الشروط موجودة في الحقائق.",
      modelAnswer: "def check_rule(cond, facts): return set(cond).issubset(set(facts))",
      modelAnswerAr: "def check_rule(cond, facts): return set(cond).issubset(set(facts))",
    },
    {
      id: 'ip-l1-w6',
      question: "Explain the process of Knowledge Acquisition. Who is involved?",
      questionAr: "اشرح عملية اكتساب المعرفة. من المشارك؟",
      modelAnswer: "A knowledge engineer extracts knowledge from a domain expert via interviews and observation, then encodes it as rules.",
      modelAnswerAr: "يقوم مهندس معرفة باستخراج المعرفة من خبير مجال عبر المقابلات والملاحظة، ثم يشفرها كقواعد.",
    },
    {
      id: 'ip-l1-w7',
      question: "Trace through the Python forward chaining code with input ['fever', 'cough']. Explain each step.",
      questionAr: "تتبع كود بايثون للتسلسل الأمامي مع مدخلات ['fever', 'cough']. اشرح كل خطوة.",
      isMidterm: true,
      modelAnswer: "Input symptoms -> Loop through disease_rules -> Loop 1 ('fever','cough','fatigue') is NOT subset -> Loop 2 ('fever','cough') IS subset -> Return 'Possible Flu'.",
      modelAnswerAr: "الأعراض المدخلة ← تكرار قواعد الأمراض ← الحلقة 1 ليست مجموعة جزئية ← الحلقة 2 هي مجموعة جزئية ← إرجاع 'Possible Flu'.",
    },
    {
      id: 'ip-l1-w8',
      question: "[CODING] Write a Python script that takes user input for symptoms (comma-separated) and uses IF-THEN rules to provide a diagnosis.",
      questionAr: "[برمجة] اكتب سكربت بايثون يأخذ مدخلات الأعراض من المستخدم ويستخدم قواعد IF-THEN لتقديم التشخيص.",
      isMidterm: true,
      modelAnswer: "symptoms = input('Enter symptoms: ').split(','); diagnosis = diagnose([s.strip() for s in symptoms]); print(diagnosis)",
      modelAnswerAr: "symptoms = input('Enter symptoms: ').split(','); diagnosis = diagnose([s.strip() for s in symptoms]); print(diagnosis)",
    },
  ],
}
