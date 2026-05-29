export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'data-mining',
  number: 16,
  title: 'Section 8: Fuzzy Control Sprinkler',
  titleAr: 'قسم 8: نظام التحكم الضبابي للرشاشات',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `
        <h2>🔹 Fuzzy Controller for Sprinkler System (Python)</h2>
        <p>This lab demonstrates building a <strong>fuzzy logic controller</strong> in Python using the <code>scikit-fuzzy</code> library to control watering duration based on air temperature and soil moisture.</p>
        
        <h2>🔹 Step 1: Define Inputs (Antecedents) & Output (Consequent)</h2>
        <div class="code-block">import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

# Inputs (Antecedents)
air_temperature = ctrl.Antecedent(np.arange(30, 111, 1), 'air_temperature')
soil_moisture = ctrl.Antecedent(np.arange(5, 31, 1), 'soil_moisture')

# Output (Consequent)
watering_duration = ctrl.Consequent(np.arange(5, 61, 1), 'watering_duration')</div>
        <ul>
        <li><strong>air_temperature:</strong> Range [30-110]</li>
        <li><strong>soil_moisture:</strong> Range [5-30]</li>
        <li><strong>watering_duration:</strong> Range [5-60]</li>
        </ul>
        
        <h2>🔹 Step 2: Define Membership Functions</h2>
        <h3>Air Temperature (5 levels)</h3>
        <div class="code-block">air_temperature['cold']   = fuzz.trapmf(...)   # [30, 30, 40, 47]  — Trapezoidal
air_temperature['cool']   = fuzz.trimf(...)    # [40, 55, 70]      — Triangular
air_temperature['normal'] = fuzz.trimf(...)    # [60, 72, 84]
air_temperature['warm']   = fuzz.trimf(...)    # [75, 87, 98]
air_temperature['hot']    = fuzz.trapmf(...)   # [90, 95, 110, 110]</div>
        
        <h3>Soil Moisture (3 levels)</h3>
        <div class="code-block">soil_moisture['dry']   = fuzz.trapmf(...)   # [5, 5, 8, 12]
soil_moisture['moist'] = fuzz.trapmf(...)   # [10, 13, 18, 22]
soil_moisture['wet']   = fuzz.trapmf(...)   # [20, 25, 30, 30]</div>
        
        <h3>Watering Duration (3 levels)</h3>
        <div class="code-block">watering_duration['short']  = fuzz.trapmf(...)  # [5, 5, 10, 20]
watering_duration['medium'] = fuzz.trapmf(...)  # [10, 20, 40, 50]
watering_duration['long']   = fuzz.trapmf(...)  # [40, 45, 60, 60]</div>
        
        <table class="styled-table"><thead><tr><th>Function</th><th>Shape</th><th>Parameters</th></tr></thead><tbody>
        <tr><td><code>trimf</code></td><td>Triangular</td><td>3 points [a, b, c] — peak at b</td></tr>
        <tr><td><code>trapmf</code></td><td>Trapezoidal</td><td>4 points [a, b, c, d] — flat top between b-c</td></tr>
        </tbody></table>
        
        <h2>🔹 Step 3: Define Fuzzy Rules</h2>
        <div class="code-block">rule1 = ctrl.Rule(air_temperature['hot']  & soil_moisture['dry'],   watering_duration['long'])
rule2 = ctrl.Rule(air_temperature['warm'] & soil_moisture['moist'], watering_duration['medium'])
rule3 = ctrl.Rule(air_temperature['warm'] & soil_moisture['dry'],   watering_duration['long'])
rule4 = ctrl.Rule(air_temperature['hot']  & soil_moisture['moist'], watering_duration['medium'])</div>
        <ul>
        <li><strong>Rule 1:</strong> IF hot AND dry → LONG watering</li>
        <li><strong>Rule 2:</strong> IF warm AND moist → MEDIUM watering</li>
        <li><strong>Rule 3:</strong> IF warm AND dry → LONG watering</li>
        <li><strong>Rule 4:</strong> IF hot AND moist → MEDIUM watering</li>
        </ul>
        
        <h2>🔹 Step 4: Create & Run the Fuzzy System</h2>
        <div class="code-block"># Create control system
sprinkler_system = ctrl.ControlSystem([rule1, rule2, rule3, rule4])

# Create simulator
sprinkler_simulator = ctrl.ControlSystemSimulation(sprinkler_system)

# Set inputs
sprinkler_simulator.input['air_temperature'] = 92
sprinkler_simulator.input['soil_moisture'] = 11

# Run computation
sprinkler_simulator.compute()

# Get output
watering_duration_value = sprinkler_simulator.output['watering_duration']
print(f"The watering duration is {round(watering_duration_value, 1)}%")
# Output: The watering duration is 34.6%</div>
        
        <h2>🔹 Visualization</h2>
        <p>The <code>.view()</code> method on antecedents and consequents shows the membership function graphs. Passing the simulator shows where the current input values fall on the membership functions.</p>
        
        <div class="callout callout-info" style="margin-top:20px;">
          <span><strong>Resources:</strong> <a href="/data%20mining/sections/Sec8_fuzzyControlSprinklerSimulator.pdf" target="_blank" class="pdf-link">Lab 8 PDF</a></span>
        </div>
        `,
        bodyAr: `<h2>تصميم تحكم ضبابي باستخدام بايثون</h2>
<p>تدريب برمجي لإنشاء نظام تحكم للرشاشات يستند إلى المنطق الضبابي باستخدام مكتبة scikit-fuzzy.</p>

<h3>المدخلات والمخرجات</h3>
<ul>
<li><strong>المدخلات (Antecedents):</strong> درجة حرارة الهواء [30-110]، رطوبة التربة [5-30].</li>
<li><strong>المخرجات (Consequent):</strong> مدة الري [5-60].</li>
</ul>

<h3>دوال العضوية</h3>
<ul>
<li><code>trimf</code>: دالة مثلثية (3 نقاط).</li>
<li><code>trapmf</code>: دالة شبه منحرفة (4 نقاط).</li>
</ul>

<h3>القواعد</h3>
<ul>
<li>إذا حار وجاف → ري طويل.</li>
<li>إذا دافئ ورطب → ري متوسط.</li>
</ul>`
      }
    }
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Use scikit-fuzzy (skfuzzy) to build fuzzy controllers in Python.",
      "Antecedents = Inputs; Consequents = Outputs.",
      "air_temperature [30-110] with 5 levels: cold, cool, normal, warm, hot.",
      "soil_moisture [5-30] with 3 levels: dry, moist, wet.",
      "watering_duration [5-60] with 3 levels: short, medium, long.",
      "trimf = Triangular MF (3 parameters). trapmf = Trapezoidal MF (4 parameters).",
      "Rules connect linguistic conditions (IF-AND-THEN) to outputs.",
      "ControlSystem holds rules; ControlSystemSimulation runs the inference.",
      "Set inputs via simulator.input['var'] = value, then call .compute().",
      "With temperature=92, moisture=11 → watering duration = 34.6%."
    ],
    pointsAr: [
      "Antecedents = مدخلات، Consequents = مخرجات.",
      "trimf = مثلثية، trapmf = شبه منحرفة.",
      "القواعد الضبابية تربط المدخلات اللغوية بالمخرجات."
    ]
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  mcq: [
    {
      id: 'dm-l16-q1',
      question: "In the scikit-fuzzy terminology for inputs and outputs:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Inputs are Consequents and Outputs are Antecedents", isCorrect: false },
        { id: 'b', text: "Inputs are Antecedents and Outputs are Consequents", isCorrect: true },
        { id: 'c', text: "Inputs and Outputs are both Antecedents", isCorrect: false },
        { id: 'd', text: "There is no special terminology", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q2',
      question: "The air_temperature variable has how many membership function levels?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "3 (cold, normal, hot)", isCorrect: false },
        { id: 'b', text: "5 (cold, cool, normal, warm, hot)", isCorrect: true },
        { id: 'c', text: "2 (cold, hot)", isCorrect: false },
        { id: 'd', text: "4 (cold, cool, warm, hot)", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q3',
      question: "The trimf function creates a:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Gaussian membership function", isCorrect: false },
        { id: 'b', text: "Triangular membership function", isCorrect: true },
        { id: 'c', text: "Trapezoidal membership function", isCorrect: false },
        { id: 'd', text: "Sigmoid membership function", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q4',
      question: "The trapmf function requires how many parameters?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "2", isCorrect: false },
        { id: 'b', text: "3", isCorrect: false },
        { id: 'c', text: "4", isCorrect: true },
        { id: 'd', text: "5", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q5',
      question: "When air_temperature is 92 and soil_moisture is 11, the computed watering duration is approximately:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "10.2%", isCorrect: false },
        { id: 'b', text: "34.6%", isCorrect: true },
        { id: 'c', text: "60.0%", isCorrect: false },
        { id: 'd', text: "5.0%", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q6',
      question: "Rule 1 states: IF temperature is hot AND moisture is dry THEN duration is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Short", isCorrect: false },
        { id: 'b', text: "Medium", isCorrect: false },
        { id: 'c', text: "Long", isCorrect: true },
        { id: 'd', text: "Zero", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q7',
      question: "The soil_moisture variable has how many membership function levels?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "2 (dry, wet)", isCorrect: false },
        { id: 'b', text: "3 (dry, moist, wet)", isCorrect: true },
        { id: 'c', text: "5 (very dry, dry, moist, wet, very wet)", isCorrect: false },
        { id: 'd', text: "4 (dry, moist, wet, saturated)", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q8',
      question: "The ControlSystemSimulation object is used to:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Define membership functions", isCorrect: false },
        { id: 'b', text: "Create fuzzy rules", isCorrect: false },
        { id: 'c', text: "Run the fuzzy inference and compute outputs", isCorrect: true },
        { id: 'd', text: "Visualize the data", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q9',
      question: "In the sprinkler system, watering_duration ranges from:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "0 to 100", isCorrect: false },
        { id: 'b', text: "5 to 60", isCorrect: true },
        { id: 'c', text: "30 to 110", isCorrect: false },
        { id: 'd', text: "1 to 10", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q10',
      question: "Rule 4 states: IF temperature is hot AND moisture is moist THEN duration is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "Short", isCorrect: false },
        { id: 'b', text: "Medium", isCorrect: true },
        { id: 'c', text: "Long", isCorrect: false },
        { id: 'd', text: "Maximum", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q11',
      question: "The air_temperature 'cold' level uses which membership function type?",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "trimf (Triangular)", isCorrect: false },
        { id: 'b', text: "trapmf (Trapezoidal)", isCorrect: true },
        { id: 'c', text: "Gaussian", isCorrect: false },
        { id: 'd', text: "Sigmoid", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q12',
      question: "To set input values in the simulator, you use:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "simulator.output['var'] = value", isCorrect: false },
        { id: 'b', text: "simulator.input['var'] = value", isCorrect: true },
        { id: 'c', text: "simulator.set('var', value)", isCorrect: false },
        { id: 'd', text: "simulator.assign('var', value)", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q13',
      question: "The .view() method is used to:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: "Delete membership functions", isCorrect: false },
        { id: 'b', text: "Visualize the membership function graphs", isCorrect: true },
        { id: 'c', text: "Export data to CSV", isCorrect: false },
        { id: 'd', text: "Create new rules", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q14',
      question: "The library used for fuzzy control in this lab is:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "TensorFlow", isCorrect: false },
        { id: 'b', text: "scikit-learn", isCorrect: false },
        { id: 'c', text: "scikit-fuzzy (skfuzzy)", isCorrect: true },
        { id: 'd', text: "pandas", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q15',
      question: "How many fuzzy rules are defined in the sprinkler system?",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: "2", isCorrect: false },
        { id: 'b', text: "3", isCorrect: false },
        { id: 'c', text: "4", isCorrect: true },
        { id: 'd', text: "6", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q16',
      question: "In the provided Python code, if air_temperature['hot'] is defined as fuzz.trapmf(np.arange(30, 111, 1), [90, 95, 110, 110]), what is the degree of membership for a temperature of 93°F?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "0.0 (Not hot)", isCorrect: false },
        { id: 'b', text: "0.5", isCorrect: false },
        { id: 'c', text: "0.6", isCorrect: true },
        { id: 'd', text: "1.0 (Completely hot)", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q17',
      question: "Which component represents the mapping of the unified fuzzy output back into a specific percentage of watering duration?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "Fuzzification", isCorrect: false },
        { id: 'b', text: "Rule Evaluation", isCorrect: false },
        { id: 'c', text: "Aggregration", isCorrect: false },
        { id: 'd', text: "Defuzzification (Centroid method)", isCorrect: true }
      ]
    },
    {
      id: 'dm-l16-q18',
      question: "If we changed Rule 1 to use '&' (AND) but the input soil_moisture had a membership of 0.0 in 'dry', what would the strength of that rule be, regardless of temperature?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "1.0", isCorrect: false },
        { id: 'b', text: "0.0", isCorrect: true },
        { id: 'c', text: "It would equal the temperature membership", isCorrect: false },
        { id: 'd', text: "It would be the average of both", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q19',
      question: "What is the primary risk of using non-overlapping membership functions in a control system?",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "The system will be too slow", isCorrect: false },
        { id: 'b', text: "The output will produce 'jitter' or abrupt jumps (lack of smooth control)", isCorrect: true },
        { id: 'c', text: "The system will run out of memory", isCorrect: false },
        { id: 'd', text: "It is impossible to define rules", isCorrect: false }
      ]
    },
    {
      id: 'dm-l16-q20',
      question: "In scikit-fuzzy, the 'ControlSystemSimulation' must be re-initialized if:",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: "The input values change", isCorrect: false },
        { id: 'b', text: "The actual rules in the ControlSystem are modified", isCorrect: true },
        { id: 'c', text: ".compute() is called", isCorrect: false },
        { id: 'd', text: "The plot is shown", isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'dm-l16-w1',
      question: "What is the difference between Antecedents and Consequents in the scikit-fuzzy library?",
      questionAr: "ما الفرق بين السوابق (Antecedents) واللواحق (Consequents) في مكتبة scikit-fuzzy؟",
      modelAnswer: "Antecedents represent the input variables (like temperature and moisture), while Consequents represent the output variables (like watering duration).",
      modelAnswerAr: "تمثل السوابق متغيرات المدخلات (مثل الحرارة والرطوبة)، بينما تمثل اللواحق متغيرات المخرجات (مثل مدة الري).",
    },
    {
      id: 'dm-l16-w2',
      question: "Describe the parameters required for the 'trimf' and 'trapmf' functions.",
      questionAr: "صف المعاملات المطلوبة لوظائف 'trimf' و 'trapmf'.",
      modelAnswer: "trimf requires 3 points [a, b, c] forming a triangle with peak at b. trapmf requires 4 points [a, b, c, d] forming a trapezoid with a flat top between b and c.",
      modelAnswerAr: "تتطلب trimf ثلاث نقاط [a, b, c] لتشكيل مثلث مع ذروة عند b. تتطلب trapmf أربع نقاط [a, b, c, d] لتشكيل شبه منحرف مع قمة مسطحة بين b و c.",
    },
    {
      id: 'dm-l16-w3',
      question: "How do you define the 'Universe of Discourse' for a fuzzy variable in Python?",
      questionAr: "كيف تحدد 'عالم الخطاب' (Universe of Discourse) لمتغير ضبابي في بايثون؟",
      modelAnswer: "It is defined using np.arange(start, stop, step) provided as the first argument to the Antecedent or Consequent constructor, defining the possible range of numeric values.",
      modelAnswerAr: "يتم تعريفه باستخدام np.arange(start, stop, step) الذي يتم تقديمه كأول معامل لمنشئ السوابق أو اللواحق، مما يحدد النطاق الممكن للقيم الرقمية.",
    },
    {
      id: 'dm-l16-w4',
      question: "Explain the role of 'ControlSystemSimulation' in the code.",
      questionAr: "اشرح دور 'ControlSystemSimulation' في الكود.",
      modelAnswer: "It acts as the execution engine that takes the rules and specific input values, performs the fuzzy inference (MIN/MAX), and calculates the final defuzzified output.",
      modelAnswerAr: "يعمل كمحرك تنفيذ يأخذ القواعد وقيم المدخلات المحددة، ويجري الاستدلال الضبابي (MIN/MAX)، ويحسب المخرج النهائي بعد إزالة التضبيب.",
    },
    {
      id: 'dm-l16-w5',
      question: "Why is it important to have overlap between membership functions (e.g., 'warm' and 'hot')?",
      questionAr: "لماذا من المهم وجود تداخل بين وظائف العضوية (مثلاً: 'دافئ' و 'حار')؟",
      modelAnswer: "Overlap ensures smooth transitions. A single input (like 92°F) can trigger multiple rules partially, allowing the system to blend behaviors instead of switching abruptly.",
      modelAnswerAr: "يضمن التداخل انتقالات سلسة. يمكن لمدخل واحد (مثل 92 درجة فهرنهايت) تفعيل قواعد متعددة جزئياً، مما يسمح للنظام بمزج السلوكيات بدلاً من التبديل المفاجئ.",
    },
  ],
};