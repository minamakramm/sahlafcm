export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'data-mining',
  number: 14,
  title: 'Lecture 7: Genetic Algorithms',
  titleAr: 'المحاضرة 7: الخوارزميات الجينية',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 What Are Genetic Algorithms (GAs)?</h2>
        <p>GAs are a type of <strong>machine-learning technique</strong> that mimics the biological process of evolution. They are <strong>search and optimization techniques</strong> based on Darwin's Principle of Natural Selection:</p>
        <div class="callout callout-tip"><span class="callout-icon">💡</span><span><strong>"Select The Best, Discard The Rest"</strong></span></div>
        
        <h3>Natural Selection Example — Giraffes</h3>
        <ul>
        <li>Giraffes with slightly longer necks could feed on higher branches when lower ones were eaten.</li>
        <li>They had a <strong>better chance of survival</strong>.</li>
        <li>Favorable characteristics <strong>propagated through generations</strong>.</li>
        <li>Longer necks may have been a <strong>mutation initially</strong> but became a trait since it was favorable.</li>
        </ul>
        
        <h2>🔹 GA Requirements</h2>
        <p>Two things must be defined:</p>
        <ol>
        <li><strong>Genetic Representation:</strong> How solutions are encoded (chromosomes). Fixed-size representations enable simple crossover.</li>
        <li><strong>Fitness Function:</strong> Measures the quality of a solution — <strong>always problem-dependent</strong>.</li>
        </ol>
        
        <h3>Representation Types</h3>
        <ul>
        <li>Bit strings: <code>0101...1100</code></li>
        <li>Real numbers: <code>43.2 -33.1 ... 89.2</code></li>
        <li>Permutations: <code>E11 E3 E7 ... E15</code></li>
        <li>Lists of rules: <code>R1 R2 R3 ... R23</code></li>
        <li>Program elements (Genetic Programming)</li>
        </ul>
        
        <h2>🔹 Working Mechanism — GA Steps</h2>
        <ol>
        <li><strong>Initialize Population (P):</strong> Randomly generate n candidate solutions (chromosomes).</li>
        <li><strong>Evaluate Fitness:</strong> Determine fitness for all solutions using the fitness function. Fitness can be profit, accuracy, etc.</li>
        <li><strong>Selection:</strong> Create a mating pool — elements that pass fitness criteria remain. Elite solutions are carried into the next generation.</li>
        <li><strong>Crossover:</strong> Select random crossover sites in parent pairs, then swap solution parts. Creates <strong>offspring</strong> combining traits of both parents.</li>
        <li><strong>Mutation:</strong> Randomly change a small portion of solutions (e.g., flip a bit from 1→0 or 0→1). Introduces diversity.</li>
        <li>Repeat steps 2-5 until a <strong>termination condition</strong> is satisfied.</li>
        </ol>
        
        <h2>🔹 GA Operators in Detail</h2>
        <h3>Crossover</h3>
        <p>Forms <strong>new elements</strong> by combining parts of two parents currently in the population.</p>
        <div class="code-block">Parent C: 01|1011    Parent D: 10|1100
Offspring E: 011100    Offspring F: 101011
(Split at position 2, swap tails)</div>
        
        <h3>Mutation</h3>
        <p>Applied by <strong>randomly flipping bits</strong> within a single element. Prevents the algorithm from getting stuck in local optima.</p>
        
        <h2>🔹 Detailed Example: Secret Number</h2>
        <p>Secret number: <code>001010</code></p>
        <table class="styled-table"><thead><tr><th>Step</th><th>Action</th><th>Result</th></tr></thead><tbody>
        <tr><td><strong>Step 1</strong></td><td>Generate initial population</td><td>A=110100 (score=1), B=111101 (score=1), C=011011 (score=4), D=101100 (score=3)</td></tr>
        <tr><td><strong>Step 2</strong></td><td>Delete low scorers A, B. Parents = C, D</td><td>Selection of fittest</td></tr>
        <tr><td><strong>Step 3</strong></td><td>Crossover C and D at position 2</td><td>E=011100 (score=3), F=101011 (score=4)</td></tr>
        <tr><td><strong>Step 4-5</strong></td><td>Crossover again at position 4</td><td>G=011000 (score=4), H=101111 (score=3)</td></tr>
        <tr><td><strong>Final</strong></td><td>Select best (F,G), reproduce</td><td>J=001011 (score=5) → M=<strong>001010 (score=6!)</strong></td></tr>
        </tbody></table>
        <p>Solution reached after <strong>13 guesses</strong> using evolutionary search!</p>
        
        <h2>🔹 GA Applications</h2>
        <ul>
        <li>Dynamic process control</li>
        <li>Optimization of induction rules</li>
        <li>Discovery of new connectivity topologies (NNs)</li>
        <li>Simulation of biological models</li>
        <li>Complex engineering structure design</li>
        <li>Pattern recognition</li>
        <li>Scheduling, transportation, and routing</li>
        <li>Layout and circuit design</li>
        <li>Telecommunication, graph-based problems</li>
        </ul>
        
        <h2>🔹 Limitations of GAs</h2>
        <ul>
        <li>Does <strong>not guarantee</strong> an optimal solution (may settle in local minimum/maximum).</li>
        <li>Not all problems can be formulated for GA.</li>
        <li>Requires both <strong>programming and statistical skills</strong>.</li>
        <li>Relies heavily on <strong>random number generators</strong>.</li>
        <li>Locating good variables and obtaining data is difficult.</li>
        <li>Selecting evolution methods requires <strong>experimentation and experience</strong>.</li>
        </ul>
        
        `,
        bodyAr: `<h2>الخوارزميات الجينية (GA)</h2>
<p>تقنيات تحسين مستوحاة من التطور البيولوجي والتحديد الطبيعي. مبدأ داروين: "اختر الأفضل، تخلص من الباقي."</p>

<h3>خطوات العمل</h3>
<ol>
<li><strong>تهيئة المجموعة:</strong> توليد حلول عشوائية (كروموسومات).</li>
<li><strong>تقييم الكفاءة:</strong> حساب جودة كل حل باستخدام دالة الكفاءة.</li>
<li><strong>الاختيار:</strong> اختيار أفضل الحلول للتكاثر.</li>
<li><strong>العبور:</strong> دمج أجزاء من حلين أبوين لإنشاء ذرية جديدة.</li>
<li><strong>الطفرة:</strong> تغيير عشوائي لجزء صغير من الحل لمنع الوقوع في الحد الأدنى المحلي.</li>
</ol>

<h3>القيود</h3>
<ul>
<li>لا تضمن الحل الأمثل.</li>
<li>تعتمد على مولدات الأرقام العشوائية.</li>
<li>تتطلب مهارات برمجية وإحصائية.</li>
</ul>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "GA = search/optimization mimicking natural selection: 'Select the Best, Discard the Rest'.",
      "GA requires two definitions: Genetic Representation (how solutions are encoded) and Fitness Function (how solutions are evaluated).",
      "Chromosomes = candidate solutions (bit strings, real numbers, permutations, rules, etc.).",
      "Fitness function is ALWAYS problem-dependent — measures solution quality.",
      "GA Steps: Initialize → Evaluate → Select → Crossover → Mutate → Repeat.",
      "Crossover: combines parts of two parents at a random split point to produce offspring.",
      "Mutation: randomly flips bits to introduce diversity and prevent local optima.",
      "Elite solutions are carried directly into the next generation.",
      "GA does NOT guarantee an optimal solution — may settle in a sub-optimal local minimum.",
      "Applications: process control, pattern recognition, scheduling, routing, circuit design.",
      "Limitations: relies on randomness, requires experimentation, needs programming + statistical skills."
    ],
    pointsAr: [
      "الخوارزمية الجينية تحاكي الانتقاء الطبيعي.",
      "الكروموسوم = حل مرشح (سلسلة جينات).",
      "دالة الكفاءة تعتمد دائماً على المشكلة.",
      "العبور يدمج حلين أبوين، والطفرة تضيف تنوع.",
      "لا تضمن GA الحل الأمثل."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'dm-l14-q1',
      question: "Which genetic operator is responsible for swapping parts of two parent solutions to form new offspring?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Mutation", isCorrect: false },
        { id: 'b', text: "Crossover", isCorrect: true },
        { id: 'c', text: "Selection", isCorrect: false },
        { id: 'd', text: "Evaluation", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q2',
      question: "The basic principle behind Genetic Algorithms is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Newton's Laws of Motion", isCorrect: false },
        { id: 'b', text: "Darwin's Principle of Natural Selection", isCorrect: true },
        { id: 'c', text: "Bayes' Theorem", isCorrect: false },
        { id: 'd', text: "Euclidean Distance Formula", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q3',
      question: "A chromosome in GA represents:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "A database table", isCorrect: false },
        { id: 'b', text: "A candidate solution to the problem", isCorrect: true },
        { id: 'c', text: "A fuzzy membership function", isCorrect: false },
        { id: 'd', text: "A neural network layer", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q4',
      question: "The fitness function in GA is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Universal and the same for all problems", isCorrect: false },
        { id: 'b', text: "Always problem-dependent", isCorrect: true },
        { id: 'c', text: "Based on physical fitness of the user", isCorrect: false },
        { id: 'd', text: "Only applicable to binary problems", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q5',
      question: "Mutation in GA involves:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Combining two parent solutions", isCorrect: false },
        { id: 'b', text: "Randomly flipping bits within a single element", isCorrect: true },
        { id: 'c', text: "Removing all solutions with low fitness", isCorrect: false },
        { id: 'd', text: "Sorting solutions by fitness", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q6',
      question: "Which of the following is NOT a valid chromosome representation?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Bit strings (0101...1100)", isCorrect: false },
        { id: 'b', text: "Real numbers (43.2 -33.1 ...)", isCorrect: false },
        { id: 'c', text: "SQL queries (SELECT * FROM ...)", isCorrect: true },
        { id: 'd', text: "Permutations of elements (E11 E3 E7 ...)", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q7',
      question: "The first step of a Genetic Algorithm is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Crossover of parents", isCorrect: false },
        { id: 'b', text: "Initialize a population of candidate solutions", isCorrect: true },
        { id: 'c', text: "Mutation of all elements", isCorrect: false },
        { id: 'd', text: "Defuzzification", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q8',
      question: "In the secret number example, the solution was reached after how many guesses?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "6 guesses", isCorrect: false },
        { id: 'b', text: "10 guesses", isCorrect: false },
        { id: 'c', text: "13 guesses", isCorrect: true },
        { id: 'd', text: "20 guesses", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q9',
      question: "A limitation of GA is that it:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Always finds the globally optimal solution", isCorrect: false },
        { id: 'b', text: "Does not require any input parameters", isCorrect: false },
        { id: 'c', text: "Does not guarantee an optimal solution and may settle in a local minimum", isCorrect: true },
        { id: 'd', text: "Cannot be used for optimization problems", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q10',
      question: "Elite solutions in GA are:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Discarded after each generation", isCorrect: false },
        { id: 'b', text: "Carried directly into the next generation", isCorrect: true },
        { id: 'c', text: "Only used for mutation", isCorrect: false },
        { id: 'd', text: "The least fit solutions", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q11',
      question: "Fixed-size genetic representations are preferred because:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "They eliminate the need for a fitness function", isCorrect: false },
        { id: 'b', text: "Their parts are easily aligned, facilitating simple crossover", isCorrect: true },
        { id: 'c', text: "They always produce optimal results", isCorrect: false },
        { id: 'd', text: "They make mutation impossible", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q12',
      question: "GA can be developed for:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Only supervised data mining", isCorrect: false },
        { id: 'b', text: "Only unsupervised data mining", isCorrect: false },
        { id: 'c', text: "Both supervised and unsupervised data mining", isCorrect: true },
        { id: 'd', text: "Neither supervised nor unsupervised", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q13',
      question: "In the crossover step, if Parent C = 01|1011 and Parent D = 10|1100 (split at position 2), the first offspring E is:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "011011", isCorrect: false },
        { id: 'b', text: "011100", isCorrect: true },
        { id: 'c', text: "101011", isCorrect: false },
        { id: 'd', text: "101100", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q14',
      question: "Which of the following is a GA application?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Word processing", isCorrect: false },
        { id: 'b', text: "Scheduling, transportation, and routing", isCorrect: true },
        { id: 'c', text: "Simple arithmetic calculation", isCorrect: false },
        { id: 'd', text: "File compression only", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q15',
      question: "The selection step in GA creates:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "A neural network", isCorrect: false },
        { id: 'b', text: "A mating pool from the fittest solutions", isCorrect: true },
        { id: 'c', text: "A fuzzy rule base", isCorrect: false },
        { id: 'd', text: "New random solutions from scratch", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q16',
      question: "In a bit representation, the value (0 or 1) represents:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Whether an object is available or not", isCorrect: true },
        { id: 'b', text: "The weight of the object only", isCorrect: false },
        { id: 'c', text: "The generation number", isCorrect: false },
        { id: 'd', text: "The fitness score", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q17',
      question: "The purpose of mutation in GA is primarily to:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Reduce the population size", isCorrect: false },
        { id: 'b', text: "Introduce diversity and prevent getting stuck in local optima", isCorrect: true },
        { id: 'c', text: "Speed up the algorithm execution", isCorrect: false },
        { id: 'd', text: "Replace the fitness function", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q18',
      question: "Genetic Algorithms implement optimization strategies by:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Exhaustively testing all possible solutions", isCorrect: false },
        { id: 'b', text: "Simulating evolution of species through natural selection", isCorrect: true },
        { id: 'c', text: "Using gradient descent", isCorrect: false },
        { id: 'd', text: "Applying fuzzy logic rules", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q19',
      question: "Variable length representations in GA:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Cannot be used at all", isCorrect: false },
        { id: 'b', text: "Make crossover implementation more complex", isCorrect: true },
        { id: 'c', text: "Are always preferred over fixed-size", isCorrect: false },
        { id: 'd', text: "Eliminate the need for mutation", isCorrect: false }
      ]
    },
    {
      id: 'dm-l14-q20',
      question: "GA relies heavily on which type of generators?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "SQL generators", isCorrect: false },
        { id: 'b', text: "Report generators", isCorrect: false },
        { id: 'c', text: "Random number generators", isCorrect: true },
        { id: 'd', text: "Image generators", isCorrect: false }
      ]
    }
  ],

  written: []
};