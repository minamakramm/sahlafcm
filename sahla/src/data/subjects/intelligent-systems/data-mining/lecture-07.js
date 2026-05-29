export const LECTURE = {
  subjectId: 'data-mining',
  number: 7,
  title: 'Section 1: Python Essentials & NumPy',
  titleAr: 'القسم 1: أساسيات بايثون و NumPy',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Python for Data Science</h2>
<p>Python is the leading language for Data Mining due to its readability and powerful ecosystem of libraries. Key data structures include <strong>Lists</strong>, <strong>Tuples</strong>, and <strong>Dictionaries</strong>.</p>

<h2>🔹 Introduction to NumPy</h2>
<p><strong>NumPy</strong> (Numerical Python) is the fundamental package for scientific computing. It provides a high-performance multidimensional array object, <code>ndarray</code>.</p>
<ul>
    <li><strong>Arrays:</strong> Homogeneous multidimensional arrays.</li>
    <li><strong>Broadcasting:</strong> Performing operations on arrays of different shapes.</li>
    <li><strong>Reshaping:</strong> Changing the dimensions of an array without changing its data.</li>
</ul>

<h2>🔹 Common Operations</h2>
<pre><code>import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6])
reshaped = arr.reshape(2, 3) # 2 rows, 3 columns
zeros = np.zeros((3,3)) # 3x3 array of zeros
linspace = np.linspace(0, 10, 5) # 5 evenly spaced points
sum_val = np.sum(arr) # Total sum
max_idx = np.argmax(arr) # Index of max value</code></pre>

  <h3>🔹 NumPy Functional Summary</h3>
    <table class="styled-table">
  <thead><tr><th>Function</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><code>np.array()</code></td><td>Creates a multidimensional array (ndarray).</td></tr>
    <tr><td><code>np.zeros() / np.ones()</code></td><td>Creates arrays filled with 0s or 1s.</td></tr>
    <tr><td><code>np.arange(start, stop, step)</code></td><td>Creates sequence of numbers.</td></tr>
    <tr><td><code>np.linspace(s, e, count)</code></td><td>Generates count values between start and end.</td></tr>
    <tr><td><code>np.reshape(rows, cols)</code></td><td>Changes shape without changing data.</td></tr>
    <tr><td><code>np.mean() / np.std()</code></td><td>Calculates mean and standard deviation.</td></tr>
    <tr><td><code>np.sum() / np.max() / np.min()</code></td><td>Calculates sum, maximum, or minimum values.</td></tr>
    <tr><td><code>np.argmax() / np.argmin()</code></td><td>Returns index (position) of the max or min element.</td></tr>
    <tr><td><code>np.sqrt() / np.exp()</code></td><td>Applies square root or exponential to all elements (Vectorization).</td></tr>
    <tr><td><code>arr.flatten()</code></td><td>Converts a 2D/3D array into a 1D vector.</td></tr>
    <tr><td><code>arr.T</code></td><td>Transposes the array (swaps rows and columns).</td></tr>
  </tbody>
</table>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>Midterm Reference:</strong> Python syntax, string methods (.count), and basic NumPy operations are frequently tested in Part 1 of the exams.</span></div>`,
        bodyAr: `<h2>🔹 بايثون لعلوم البيانات</h2>
<p>بايثون هي اللغة الرائدة لتنقيب البيانات بسبب سهولة قراءتها ونظامها القوي من المكتبات.</p>

<h2>🔹 مقدمة في NumPy</h2>
<p>تعتبر <strong>NumPy</strong> الحزمة الأساسية للحوسبة العلمية. توفر كائن مصفوفة متعدد الأبعاد عالي الأداء.</p>

<h2>🔹 العمليات الشائعة</h2>
<pre><code>import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6])
reshaped = arr.reshape(2, 3) # صفين و 3 أعمدة
zeros = np.zeros((3,3)) # مصفوفة أصفار 3x3</code></pre>

<div class="callout callout-warning"><span class="callout-icon">🎓</span><span><strong>مرجع الميدتيرم:</strong> غالباً ما يتم اختبار قواعد بايثون، طرق السلاسل النصية (.count)، وعمليات NumPy الأساسية في الجزء الأول من الامتحانات.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "Python lists vs. NumPy arrays (NumPy is faster and memory-efficient).",
      "ndarray: The core multidimensional array object.",
      "Broadcasting: Auto-handling array operations of different sizes.",
      "Reshaping & Slicing: Efficiently manipulating data dimensions."
    ],
    pointsAr: [
      "قوائم بايثون مقابل مصفوفات NumPy (NumPy أسرع وأكثر كفاءة في الذاكرة).",
      "ndarray: كائن المصفوفة متعددة الأبعاد الأساسي.",
      "البث (Broadcasting): معالجة عمليات المصفوفات بأحجام مختلفة تلقائياً.",
      "إعادة التشكيل والتقطيع: التلاعب بكفاءة في أبعاد البيانات."
    ],
  },

  mcq: [
    {
      id: 'dm-s1-q1',
      question: "Which property describes a NumPy array containing elements of the same type?",
      questionAr: "أي خاصية تصف مصفوفة NumPy تحتوي على عناصر من نفس النوع؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Heterogeneous', isCorrect: false },
        { id: 'b', text: 'Homogeneous', isCorrect: true },
        { id: 'c', text: 'Sparse', isCorrect: false },
        { id: 'd', text: 'Dynamic', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q2',
      question: "Which NumPy function is used to change the shape of an array without changing its data?",
      questionAr: "أي وظيفة في NumPy تُستخدم لتغيير شكل المصفوفة دون تغيير بياناتها؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'resize()', isCorrect: false },
        { id: 'b', text: 'reshape()', isCorrect: true },
        { id: 'c', text: 'format()', isCorrect: false },
        { id: 'd', text: 'change_shape()', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q3',
      question: "What is the output of np.array([1, 2, 3]) + 1?",
      questionAr: "ما هو ناتج np.array([1, 2, 3]) + 1؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '[1, 2, 3, 1]', isCorrect: false },
        { id: 'b', text: '[2, 3, 4]', isCorrect: true },
        { id: 'c', text: 'Error', isCorrect: false },
        { id: 'd', text: '[1, 2, 4]', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q4',
      question: "In Python, which characters are used to define a List?",
      questionAr: "في بايثون، أي رموز تُستخدم لتعريف القائمة (List)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '( )', isCorrect: false },
        { id: 'b', text: '{ }', isCorrect: false },
        { id: 'c', text: '[ ]', isCorrect: true },
        { id: 'd', text: '< >', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q5',
      question: "[MID] Python's string .count() method is:",
      questionAr: "[ميدتيرم] طريقة .count() للسلاسل النصية في بايثون هي:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: 'Case-insensitive', isCorrect: false },
        { id: 'b', text: 'Case-sensitive (counts exact matches)', isCorrect: true },
        { id: 'c', text: 'Only for lists', isCorrect: false },
        { id: 'd', text: 'Deprecated', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q6',
      question: "[MID] If variable 's' is NOT defined, running s.count('d') produces:",
      questionAr: "[ميدتيرم] إذا لم يتم تعريف المتغير 's'، فإن تشغيل s.count('d') ينتج:",
      difficulty: 'medium',
      isMidterm: true,
      answers: [
        { id: 'a', text: '0', isCorrect: false },
        { id: 'b', text: 'An empty string', isCorrect: false },
        { id: 'c', text: 'A NameError', isCorrect: true },
        { id: 'd', text: 'The letter id d', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q7',
      question: "What does the 'np.mean()' function calculate?",
      questionAr: "ماذا تحسب وظيفة 'np.mean()'؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'The middle value', isCorrect: false },
        { id: 'b', text: 'The average of the array', isCorrect: true },
        { id: 'c', text: 'The most frequent value', isCorrect: false },
        { id: 'd', text: 'The sum of entries', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q8',
      question: "The Python expression 'hello world'.count('l') returns:",
      questionAr: "تعبير بايثون 'hello world'.count('l') يعيد:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '1', isCorrect: false },
        { id: 'b', text: '2', isCorrect: false },
        { id: 'c', text: '3', isCorrect: true },
        { id: 'd', text: '0', isCorrect: false },
      ],
    },
    {
      id: 'dm-s1-q9',
      question: "Assume s represents this question sentence, what is the output of: counter = s.count('d')",
      questionAr: "افترض أن s تمثل جملة هذا السؤال، ما ناتج: counter = s.count('d')",
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '1', isCorrect: false },
        { id: 'b', text: '2', isCorrect: false },
        { id: 'c', text: 'error (if s is just text)', isCorrect: true },
        { id: 'd', text: '0', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'dm-s1-w1',
      question: "Explain why NumPy arrays are preferred over standard Python lists for data mining tasks.",
      questionAr: "اشرح لماذا يفضل استخدام مصفوفات NumPy على قوائم بايثون القياسية لمهام تنقيب البيانات.",
      modelAnswer: "Speed and efficiency (C-implementation), built-in mathematical functions, and support for vectorization/broadcasting.",
      modelAnswerAr: "السرعة والكفاءة (تطبيق بلغة C)، الوظائف الرياضية المدمجة، ودعم العمليات المتجهة والبث.",
    },
    {
      id: 'dm-s1-w2',
      question: "What is array 'Reshaping' and why is it useful?",
      questionAr: "ما هو 'إعادة تشكيل' (Reshaping) المصفوفة ولماذا هو مفيد؟",
      modelAnswer: "Changing the structure (rows/columns) of data without modifying the content. Essential for preparing data for machine learning models that require specific input shapes.",
      modelAnswerAr: "تغيير هيكل البيانات (الصفوف/الأعمدة) دون تعديل المحتوى. ضروري لتجهيز البيانات لنماذج تعلم الآلة التي تتطلب أشكال مدخلات محددة.",
    },
  ],
};
