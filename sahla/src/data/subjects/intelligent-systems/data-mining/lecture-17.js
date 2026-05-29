export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'data-mining',
  number: 17,
  title: 'Section 9: Genetic Algorithm Knapsack',
  titleAr: 'قسم 9: الخوارزمية الجينية لمشكلة الحقيبة',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Python Implementation of Genetic Algorithm (Knapsack Problem)</h2>
        <p>This lab demonstrates using a <strong>Genetic Algorithm (GA)</strong> to solve the <strong>0-1 Knapsack Problem</strong>: maximize total value without exceeding a maximum weight limit.</p>
        
        <h2>🔹 Problem Setup</h2>
        <div class="code-block">import random

# Items: [weight, value]
items = [
    [1, 2], [2, 4], [3, 4],
    [4, 5], [5, 7], [6, 9]
]

max_weight = 10
population_size = 10
mutation_probability = 0.2
generations = 10</div>
        <p><strong>Goal:</strong> Select items to maximize total value without exceeding <code>max_weight = 10</code>.</p>
        
        <h2>🔹 GA Steps Implementation</h2>
        
        <h3>Step 1: Generate Random Population</h3>
        <div class="code-block">def create_individual():
    return [random.randint(0, 1) for _ in range(len(items))]</div>
        <ul>
        <li>Each individual is a <strong>binary list</strong> (0 or 1).</li>
        <li><strong>1 = Take the item</strong>, <strong>0 = Leave the item</strong>.</li>
        <li>Example: <code>[1, 0, 1, 0, 0, 1]</code> → take items 1, 3, and 6.</li>
        </ul>
        
        <h3>Step 2: Fitness Function</h3>
        <div class="code-block">def fitness(individual):
    total_weight = sum(items[i][0] * individual[i] for i in range(len(items)))
    total_value = sum(items[i][1] * individual[i] for i in range(len(items)))
    if total_weight > max_weight:
        return 0  # Penalize invalid solutions
    return total_value</div>
        <ul>
        <li>Computes <strong>total value</strong> of selected items.</li>
        <li>If total weight > max_weight → <strong>fitness = 0</strong> (penalty for invalid solution!).</li>
        <li>Example: <code>[1, 1, 0, 0, 0, 0]</code> → Weight=3, Value=6, Fitness=6 ✓</li>
        <li>Example: <code>[1, 1, 1, 1, 1, 1]</code> → Weight=21 (too heavy!) → Fitness=0 ✗</li>
        </ul>
        
        <h3>Step 3: Tournament Selection</h3>
        <div class="code-block">def select_parent(population):
    tournament = random.sample(population, 3)  # Pick 3 random individuals
    return max(tournament, key=fitness)         # Best one becomes parent</div>
        <p>Picks <strong>3 random individuals</strong> from the population, the best one (highest fitness) becomes a parent.</p>
        
        <h3>Step 4: Single-Point Crossover</h3>
        <div class="code-block">def crossover(parent1, parent2):
    point = random.randint(1, len(items) - 1)
    child = parent1[:point] + parent2[point:]
    return child</div>
        <ul>
        <li>Split two parents at a <strong>random point</strong> and combine.</li>
        <li>Example:
            <ul>
            <li>Parent 1: <code>[1, 0, 1 | 0, 0, 1]</code></li>
            <li>Parent 2: <code>[0, 1, 0 | 1, 0, 0]</code></li>
            <li>Child: <code>[1, 0, 1, 1, 0, 0]</code></li>
            </ul>
        </li>
        </ul>
        
        <h3>Step 5: Mutation</h3>
        <div class="code-block">def mutate(individual):
    for i in range(len(individual)):
        if random.random() < mutation_probability:
            individual[i] = 1 - individual[i]  # Flip 0→1 or 1→0
    return individual</div>
        <ul>
        <li>Each bit has a <strong>20% chance</strong> of flipping.</li>
        <li>Example: Before: <code>[1, 0, 1, 0, 0, 1]</code> → After: <code>[1, 1, 1, 0, 0, 1]</code> (2nd bit flipped)</li>
        </ul>
        
        <h3>Step 6: Main GA Loop</h3>
        <div class="code-block">def genetic_algorithm():
    population = [create_individual() for _ in range(population_size)]
    
    for generation in range(generations):
        population = sorted(population, key=lambda x: fitness(x), reverse=True)
        best = population[0]
        
        new_population = []
        for _ in range(population_size):
            parent1 = select_parent(population)
            parent2 = select_parent(population)
            child = crossover(parent1, parent2)
            child = mutate(child)
            new_population.append(child)
        population = new_population
    
    # Final best solution
    best = max(population, key=lambda x: fitness(x))
    selected_items = [i + 1 for i in range(len(items)) if best[i]]
    print(f"Selected Items: {selected_items}")
    print(f"Total Value: {fitness(best)}")</div>
        
        <h2>🔹 Sample Output</h2>
        <div class="code-block">Best Solution:
Selected Items: [1, 2, 6]
Total Value: 15
Total Weight: 9</div>
        <p>Items 1 (w=1,v=2), 2 (w=2,v=4), and 6 (w=6,v=9) give total value=15 at weight=9 ≤ 10.</p>
        
        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/data%20mining/sections/DM%20Sec%209%20-%20Genetic_Algorithm.pdf" target="_blank" class="pdf-link">Lab 9 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>برمجة خوارزمية جينية لحل مشكلة الحقيبة</h2>
<p>تطبيق عملي لمسألة التحسين باستخدام الكروموسومات لتمثيل العناصر وتطبيق أساليب التطور.</p>

<h3>إعداد المشكلة</h3>
<ul>
<li>لكل عنصر: وزن وقيمة.</li>
<li>الهدف: اختيار عناصر لتعظيم القيمة دون تجاوز الوزن الأقصى (10).</li>
<li>الكروموسوم: قائمة ثنائية (0 = ترك، 1 = أخذ).</li>
</ul>

<h3>الخطوات</h3>
<ol>
<li><strong>توليد المجموعة:</strong> سلاسل ثنائية عشوائية.</li>
<li><strong>دالة الكفاءة:</strong> مجموع القيم. إذا تجاوز الوزن → كفاءة = 0.</li>
<li><strong>اختيار البطولة:</strong> 3 أفراد عشوائيين، الأفضل يصبح أب.</li>
<li><strong>العبور أحادي النقطة:</strong> قطع الأبوين عند نقطة عشوائية ودمج الأجزاء.</li>
<li><strong>الطفرة:</strong> قلب البت بنسبة 20%.</li>
</ol>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "0-1 Knapsack: maximize value without exceeding weight limit.",
      "Chromosome = binary list: 1 (take item), 0 (leave item).",
      "Fitness function: sum of values. If weight > max → fitness = 0 (penalty).",
      "Tournament Selection: pick 3 random individuals, best fitness wins.",
      "Single-point Crossover: split parents at random index, swap tails.",
      "Mutation: each bit flips with mutation_probability (20%).",
      "Population sorted by fitness each generation, new offspring replace old.",
      "GA parameters: max_weight=10, population_size=10, mutation_probability=0.2, generations=10.",
      "Sample result: Items [1,2,6] → Value=15, Weight=9.",
      "GA does not guarantee the global optimum but finds good solutions efficiently."
    ],
    pointsAr: [
      "مشكلة الحقيبة 0-1: تعظيم القيمة دون تجاوز الوزن.",
      "الكروموسوم = قائمة ثنائية: 1 أخذ، 0 ترك.",
      "دالة الكفاءة تعاقب الحلول التي تتجاوز الوزن (= 0).",
      "العبور: تقسيم الأبوين عند نقطة عشوائية.",
      "الطفرة: قلب البتات بنسبة 20%."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'dm-l17-q1',
      question: "In the 0-1 Knapsack problem solved via GA, what does the chromosome [0, 1, 1, 0] mean?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Items 2 and 3 are taken. Items 1 and 4 are left.", isCorrect: true },
        { id: 'b', text: "All items are taken", isCorrect: false },
        { id: 'c', text: "The weight is 0110", isCorrect: false },
        { id: 'd', text: "The item has a fitness of 0", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q2',
      question: "What happens to the fitness when total_weight exceeds max_weight?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Fitness increases proportionally", isCorrect: false },
        { id: 'b', text: "Fitness becomes 0 (penalized)", isCorrect: true },
        { id: 'c', text: "Fitness stays the same", isCorrect: false },
        { id: 'd', text: "Fitness becomes negative", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q3',
      question: "Tournament Selection picks how many random individuals?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "2", isCorrect: false },
        { id: 'b', text: "3", isCorrect: true },
        { id: 'c', text: "5", isCorrect: false },
        { id: 'd', text: "The entire population", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q4',
      question: "In single-point crossover, if Parent1 = [1, 0, 1 | 0, 0, 1] and Parent2 = [0, 1, 0 | 1, 0, 0] (split at 3), the child is:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "[1, 0, 1, 1, 0, 0]", isCorrect: true },
        { id: 'b', text: "[0, 1, 0, 0, 0, 1]", isCorrect: false },
        { id: 'c', text: "[1, 1, 1, 1, 1, 1]", isCorrect: false },
        { id: 'd', text: "[0, 0, 0, 0, 0, 0]", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q5',
      question: "The mutation probability in this lab is set to:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "0.05 (5%)", isCorrect: false },
        { id: 'b', text: "0.1 (10%)", isCorrect: false },
        { id: 'c', text: "0.2 (20%)", isCorrect: true },
        { id: 'd', text: "0.5 (50%)", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q6',
      question: "Mutation in this implementation works by:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Swapping entire chromosomes", isCorrect: false },
        { id: 'b', text: "Flipping individual bits (0→1 or 1→0)", isCorrect: true },
        { id: 'c', text: "Removing items from the list", isCorrect: false },
        { id: 'd', text: "Adding new items", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q7',
      question: "The max_weight for the knapsack in this lab is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "5", isCorrect: false },
        { id: 'b', text: "10", isCorrect: true },
        { id: 'c', text: "15", isCorrect: false },
        { id: 'd', text: "20", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q8',
      question: "How many items are available in the knapsack problem?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "4", isCorrect: false },
        { id: 'b', text: "5", isCorrect: false },
        { id: 'c', text: "6", isCorrect: true },
        { id: 'd', text: "8", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q9',
      question: "For individual [1, 1, 0, 0, 0, 0], the total weight is:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "1", isCorrect: false },
        { id: 'b', text: "3 (1+2)", isCorrect: true },
        { id: 'c', text: "6", isCorrect: false },
        { id: 'd', text: "10", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q10',
      question: "For individual [1, 1, 0, 0, 0, 0], the fitness (total value) is:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "3", isCorrect: false },
        { id: 'b', text: "6 (2+4)", isCorrect: true },
        { id: 'c', text: "0 (overweight)", isCorrect: false },
        { id: 'd', text: "15", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q11',
      question: "The create_individual function generates:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "A list of item weights", isCorrect: false },
        { id: 'b', text: "A random binary list of 0s and 1s", isCorrect: true },
        { id: 'c', text: "A sorted population", isCorrect: false },
        { id: 'd', text: "A fitness value", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q12',
      question: "The population is sorted in each generation by:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Weight (ascending)", isCorrect: false },
        { id: 'b', text: "Fitness (descending — best first)", isCorrect: true },
        { id: 'c', text: "Random order", isCorrect: false },
        { id: 'd', text: "Chromosome length", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q13',
      question: "For individual [1, 1, 1, 1, 1, 1], the fitness would be:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "31 (sum of all values)", isCorrect: false },
        { id: 'b', text: "0 (total weight=21 exceeds max_weight=10)", isCorrect: true },
        { id: 'c', text: "21 (sum of all weights)", isCorrect: false },
        { id: 'd', text: "15", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q14',
      question: "The number of generations in this lab is set to:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "5", isCorrect: false },
        { id: 'b', text: "10", isCorrect: true },
        { id: 'c', text: "50", isCorrect: false },
        { id: 'd', text: "100", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q15',
      question: "The sample output shows selected items [1, 2, 6] with total value:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "9", isCorrect: false },
        { id: 'b', text: "13", isCorrect: false },
        { id: 'c', text: "15 (2+4+9)", isCorrect: true },
        { id: 'd', text: "21", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q16',
      question: "With 6 items available for the Knapsack problem, what is the total number of unique candidate solutions (chromosomes) in the search space?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "6", isCorrect: false },
        { id: 'b', text: "12 (6*2)", isCorrect: false },
        { id: 'c', text: "36 (6^2)", isCorrect: false },
        { id: 'd', text: "64 (2^6)", isCorrect: true }
      ]
    },
    {
      id: 'dm-l17-q17',
      question: "What is the most likely result if the 'mutation_probability' is set too high (e.g., 0.9)?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "The population will converge to the global optimum faster", isCorrect: false },
        { id: 'b', text: "The search becomes essentially random, losing the benefits of parental inheritance", isCorrect: true },
        { id: 'c', text: "The fitness of all individuals becomes 0", isCorrect: false },
        { id: 'd', text: "The population size will double", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q18',
      question: "In Tournament Selection, what happens if we increase the tournament size from 3 to 10 in a population of 20?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "Diversity increases", isCorrect: false },
        { id: 'b', text: "Selection pressure increases (the best individuals are much more likely to be picked)", isCorrect: true },
        { id: 'c', text: "The tournament becomes random", isCorrect: false },
        { id: 'd', text: "Crossover becomes impossible", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q19',
      question: "If Parent A = [1, 1, 1, 0, 0, 0] and Parent B = [0, 0, 0, 1, 1, 1] undergo single-point crossover at split point 3, what are the two possible children?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "[1, 1, 1, 1, 1, 1] and [0, 0, 0, 0, 0, 0]", isCorrect: true },
        { id: 'b', text: "[1, 1, 1, 0, 0, 0] and [0, 0, 0, 1, 1, 1]", isCorrect: false },
        { id: 'c', text: "[1, 0, 1, 0, 1, 0] and [0, 1, 0, 1, 0, 1]", isCorrect: false },
        { id: 'd', text: "[1, 1, 0, 0, 1, 1] and [0, 0, 1, 1, 0, 0]", isCorrect: false }
      ]
    },
    {
      id: 'dm-l17-q20',
      question: "Why would a researcher use 'Elitism' in a GA (carrying the best individual directly to the next generation)?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "To increase random mutation", isCorrect: false },
        { id: 'b', text: "To ensure the best found solution is never lost during crossover/mutation", isCorrect: true },
        { id: 'c', text: "To reduce the population size", isCorrect: false },
        { id: 'd', text: "To allow invalid weights", isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'dm-l17-w1',
      question: "Why is the Genetic Algorithm considered a 'heuristic' or 'stochastic' search technique?",
      questionAr: "لماذا تُعتبر الخوارزمية الجينية تقنية بحث 'استكشافية' (heuristic) أو 'تصادفية' (stochastic)؟",
      modelAnswer: "Because it relies on randomness (stochastic) and rules of thumb to find a good solution efficiently rather than checking every possible combination (brute force). It doesn't guarantee the absolute best but finds local optima quickly.",
      modelAnswerAr: "لأنها تعتمد على العشوائية وقواعد التجربة للعثور على حل جيد بكفاءة بدلاً من فحص كل تركيبة ممكنة. لا تضمن الأفضل مطلقاً ولكنها تجد الحلول المثالية المحلية بسرعة.",
    },
    {
      id: 'dm-l17-w2',
      question: "Explain the 'Fitness Function' logic for the 0-1 Knapsack problem in this lab.",
      questionAr: "اشرح منطق 'دالة الكفاءة' لمشكلة الحقيبة 0-1 في هذا المختبر.",
      modelAnswer: "Fitness equals the sum of values of selected items. However, if the sum of weights exceeds the limit, the fitness is set to 0. This 'penalizes' invalid solutions so they don't reproduce.",
      modelAnswerAr: "تساوي الكفاءة مجموع قيم العناصر المختارة. ومع ذلك، إذا تجاوز مجموع الأوزان الحد المسموح به، يتم تعيين الكفاءة إلى 0. هذا 'يعاقب' الحلول غير الصالحة حتى لا تتكاثر.",
    },
    {
      id: 'dm-l17-w3',
      question: "Describe 'Tournament Selection' and why it is used.",
      questionAr: "صف 'اختيار البطولة' ولماذا يتم استخدامه.",
      modelAnswer: "A small subset (3 random members) is picked, and the best among them is chosen as a parent. This mimics natural selection by favoring stronger individuals while allowing occasional weaker ones to survive, maintaining diversity.",
      modelAnswerAr: "يتم اختيار مجموعة فرعية صغيرة (3 أعضاء عشوائيين)، ويتم اختيار الأفضل بينهم كأب. هذا يحاكي الانتقاء الطبيعي بتفضيل الأفراد الأقوى مع السماح للأفراد الأضعف أحياناً بالبقاء، مما يحافظ على التنوع.",
    },
    {
      id: 'dm-l17-w4',
      question: "Compare the roles of Crossover and Mutation in a Genetic Algorithm.",
      questionAr: "قارن بين دوري العبور (Crossover) والطفرة (Mutation) في الخوارزمية الجينية.",
      modelAnswer: "Crossover combines existing good traits from two parents to create potentially better children. Mutation introduces entirely new, random traits to prevent the population from becoming too similar (stagnation) and getting stuck in local optima.",
      modelAnswerAr: "العبور يجمع بين السمات الجيدة الموجودة لدى الأبوين لإنشاء أطفال أفضل محتملاً. الطفرة تدخل سمات عشوائية جديدة تماماً لمنع المجموعة من أن تصبح متشابهة جداً (الركود) والوقوع في الحلول المثالية المحلية.",
    },
    {
      id: 'dm-l17-w5',
      question: "What would likely happen if the 'mutation_probability' was set to 100%?",
      questionAr: "ماذا سيحدث على الأرجح إذا تم تعيين 'احتمال الطفرة' إلى 100%؟",
      modelAnswer: "The algorithm would become a purely random search. Good children created by crossover would be immediately destroyed by random flips, losing the 'memory' of previous generations.",
      modelAnswerAr: "ستصبح الخوارزمية بحثاً عشوائياً بحتاً. سيتم تدمير الأطفال الجيدين الناتجين عن العبور على الفور بواسطة التغييرات العشوائية، مما يفقد 'ذاكرة' الأجيال السابقة.",
    },
  ],
};