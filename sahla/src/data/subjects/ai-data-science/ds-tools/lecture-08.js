export const LECTURE = {
  subjectId: 'ds-tools',
  number: 8,
  title: 'Lab 2 of 6: Numerical Computing with NumPy',
  titleAr: 'المختبر 2 من 6: الحوسبة العددية باستخدام NumPy',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10"/><path d="M12 10l3-3v10"/></svg> 1. Introduction to NumPy</h2>
<p>NumPy (Numerical Python) is the foundation of the Python data science stack. It provides high-performance multidimensional array objects (ndarrays) and a wide range of mathematical functions to operate on them.</p>

<h3>2. Why NumPy over Python Lists?</h3>
<ul>
  <li><strong>Speed:</strong> NumPy arrays are up to 50x faster than traditional Python lists because they are implemented in C and stored in contiguous memory.</li>
  <li><strong>Memory:</strong> NumPy arrays are more compact, using significantly less memory.</li>
  <li><strong>Vectorization:</strong> Allows performing operations on whole arrays without explicit loops, leading to cleaner and faster code.</li>
</ul>

<h3>3. Creating Arrays</h3>
<p>NumPy provides multiple ways to initialize arrays:</p>
<ul>
  <li><strong>From Lists:</strong> <code>np.array([1, 2, 3])</code>.</li>
  <li><strong>Pre-filled:</strong> <code>np.zeros((rows, cols))</code>, <code>np.ones((rows, cols))</code>.</li>
  <li><strong>Ranges:</strong> <code>np.arange(start, stop, step)</code> and <code>np.linspace(start, stop, num)</code> for evenly spaced values.</li>
  <li><strong>Random:</strong> <code>np.random.rand(shape)</code> for values between 0 and 1.</li>
</ul>

<h3>4. Array Shapes and Reshaping</h3>
<p>An array's <code>shape</code> attribute returns its dimensions (e.g., <code>(3, 2)</code> for 3 rows and 2 columns). You can change an array's structure using <code>reshape()</code>, provided the total number of elements remains the same.</p>

<h3>5. Indexing and Slicing</h3>
<p>NumPy slicing is similar to Python list slicing but extended to multiple dimensions. <code>array[row_start:row_stop, col_start:col_stop]</code> allows extracting sub-regions of data efficiently.</p>

<h3>6. Broadcasting</h3>
<p>Broadcasting is a powerful mechanism that allows NumPy to work with arrays of different shapes during arithmetic operations. It "stretches" the smaller array across the larger one without creating extra copies in memory.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> NumPy Practical Reference</h2>
<h3>1. Array Operations & Math</h3>
<p>Mathematical operations in NumPy are performed element-wise by default.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Element-wise operations
print(a + b)        # [5, 7, 9]
print(a * b)        # [4, 10, 18]
print(np.sqrt(a))   # Square root of each element

# Statistical functions
print(a.mean())     # 2.0
print(a.max())      # 3
print(a.std())      # Standard deviation
</code></pre>
</div>

<h3>2. Slicing Multi-dimensional Arrays</h3>
<p>Extracting data from rows and columns is simple and fast.</p>
<div class="code-block">
<pre><code class="language-python">
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# Access second row (index 1)
print(matrix[1])      # [4, 5, 6]

# Access third column (all rows, index 2)
print(matrix[:, 2])   # [3, 6, 9]

# Sub-matrix: top-left 2x2
print(matrix[:2, :2]) # [[1, 2], [4, 5]]
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10"/><path d="M12 10l3-3v10"/></svg> 1. مقدمة في NumPy</h2>
<p>تعد NumPy المكتبة الأساسية لكل الحسابات العلمية في بايثون.</p>
<ul>
  <li><strong>السرعة:</strong> أسرع بـ 50 مرة من القوائم العادية.</li>
  <li><strong>توفير الذاكرة:</strong> المصفوفات أكثر كفاءة في تخزين البيانات.</li>
  <li><strong>Broadcasting:</strong> ميزة قوية تتيح إجراء عمليات على مصفوفات بأحجام مختلفة.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'NumPy provides ndarrays, which are faster and more memory-efficient than Python lists.',
      'Core features include vectorization, broadcasting, and universal functions.',
      'Arrays can be created using np.array(), np.zeros(), np.ones(), and np.arange().',
      'Array indexing and slicing allow for efficient data extraction in multiple dimensions.',
      'Arithmetic operations are performed element-wise by default.',
      'Standard deviation, mean, and variance can be computed directly using built-in methods.'
    ],
    pointsAr: [
      'توفر NumPy مصفوفات ndarrays أسرع وأكثر كفاءة من قوائم بايثون.',
      'تتم العمليات الحسابية عنصراً بعنصر (Element-wise) بشكل افتراضي.',
      'تسمح ميزة Broadcasting بإجراء عمليات على مصفوفات بأبعاد مختلفة.'
    ]
  },

  mcq: [
    {
      id: 'ds-s2-q1',
      question: 'Why are NumPy arrays faster than Python lists?',
      answers: [
        { id: 'a', text: 'They are written in pure Python', isCorrect: false },
        { id: 'b', text: 'They are implemented in C and use contiguous memory', isCorrect: true },
        { id: 'c', text: 'They automatically compress data', isCorrect: false },
        { id: 'd', text: 'They do not support math operations', isCorrect: false }
      ]
    },
    {
      id: 'ds-s2-q2',
      question: 'Which function creates an array of 5 elements from 0 to 4?',
      answers: [
        { id: 'a', text: 'np.range(5)', isCorrect: false },
        { id: 'b', text: 'np.arange(5)', isCorrect: true },
        { id: 'c', text: 'np.zeros(5)', isCorrect: false },
        { id: 'd', text: 'np.array(5)', isCorrect: false }
      ]
    },
    {
      id: 'ds-s2-q3',
      question: 'What is the shape of an array created with np.zeros((3, 4))?',
      answers: [
        { id: 'a', text: '3 columns and 4 rows', isCorrect: false },
        { id: 'b', text: '3 rows and 4 columns', isCorrect: true },
        { id: 'c', text: 'A flat array of 12 elements', isCorrect: false },
        { id: 'd', text: '3 dimensions of size 4', isCorrect: false }
      ]
    },
    {
      id: 'ds-s2-q4',
      question: 'In NumPy, how do you perform a dot product of two matrices?',
      answers: [
        { id: 'a', text: 'a * b', isCorrect: false },
        { id: 'b', text: 'np.dot(a, b)', isCorrect: true },
        { id: 'c', text: 'a.sum(b)', isCorrect: false },
        { id: 'd', text: 'a + b', isCorrect: false }
      ]
    },
    { id: 'ds-s2-q5', question: 'Which attribute returns the dimensions of a NumPy array?', answers: [{ id: 'a', text: 'array.size', isCorrect: false }, { id: 'b', text: 'array.shape', isCorrect: true }, { id: 'c', text: 'array.dim', isCorrect: false }, { id: 'd', text: 'array.length', isCorrect: false }] },
    { id: 'ds-s2-q6', question: 'What does broadcasting mean in NumPy?', answers: [{ id: 'a', text: 'Sending data over a network', isCorrect: false }, { id: 'b', text: 'Handling operations between arrays of different shapes', isCorrect: true }, { id: 'c', text: 'Deleting duplicate elements', isCorrect: false }, { id: 'd', text: 'Reshaping an array automatically', isCorrect: false }] },
    { id: 'ds-s2-q7', question: 'How do you extract the element at row 1, column 2 from a 2D array?', answers: [{ id: 'a', text: 'arr[1, 2]', isCorrect: true }, { id: 'b', text: 'arr[1][2]', isCorrect: true }, { id: 'c', text: 'Both A and B', isCorrect: true }, { id: 'd', text: 'arr[2, 1]', isCorrect: false }] },
    { id: 'ds-s2-q8', question: 'Which function returns the maximum value in an array?', answers: [{ id: 'a', text: 'arr.high()', isCorrect: false }, { id: 'b', text: 'arr.max()', isCorrect: true }, { id: 'c', text: 'arr.top()', isCorrect: false }, { id: 'd', text: 'arr.limit()', isCorrect: false }] },
    { id: 'ds-s2-q9', question: 'np.linspace(0, 10, 5) will return how many numbers?', answers: [{ id: 'a', text: '10', isCorrect: false }, { id: 'b', text: '5', isCorrect: true }, { id: 'c', text: '11', isCorrect: false }, { id: 'd', text: '4', isCorrect: false }] },
    { id: 'ds-s2-q10', question: 'What does np.eye(3) create?', answers: [{ id: 'a', text: 'An array of all ones', isCorrect: false }, { id: 'b', text: 'A 3x3 identity matrix', isCorrect: true }, { id: 'c', text: 'A circular array', isCorrect: false }, { id: 'd', text: 'An empty array', isCorrect: false }] },
    { id: 'ds-s2-q11', question: 'Which NumPy function generates random numbers from a uniform distribution between 0 and 1?', answers: [{ id: 'a', text: 'np.random.randn()', isCorrect: false }, { id: 'b', text: 'np.random.rand()', isCorrect: true }, { id: 'c', text: 'np.random.randint()', isCorrect: false }, { id: 'd', text: 'np.random.uniform()', isCorrect: false }] },
    { id: 'ds-s2-q12', question: 'To change the shape of an array from (6,) to (2, 3), use:', answers: [{ id: 'a', text: 'arr.convert(2, 3)', isCorrect: false }, { id: 'b', text: 'arr.reshape(2, 3)', isCorrect: true }, { id: 'c', text: 'arr.resize(6)', isCorrect: false }, { id: 'd', text: 'arr.shape = (2, 3)', isCorrect: false }] },
    { id: 'ds-s2-q13', question: 'Arithmetic operations like multiplication on two same-sized NumPy arrays are performed:', answers: [{ id: 'a', text: 'Using matrix multiplication rules', isCorrect: false }, { id: 'b', text: 'Element-wise', isCorrect: true }, { id: 'c', text: 'Row by row only', isCorrect: false }, { id: 'd', text: 'As a cross product', isCorrect: false }] },
    { id: 'ds-s2-q14', question: 'The total number of elements in an array is given by:', answers: [{ id: 'a', text: 'arr.count', isCorrect: false }, { id: 'b', text: 'arr.size', isCorrect: true }, { id: 'c', text: 'arr.total', isCorrect: false }, { id: 'd', text: 'len(arr)', isCorrect: false }] },
    { id: 'ds-s2-q15', question: 'How do you compute the square root of all elements in array "x"?', answers: [{ id: 'a', text: 'x.sqrt()', isCorrect: false }, { id: 'b', text: 'np.sqrt(x)', isCorrect: true }, { id: 'c', text: 'math.sqrt(x)', isCorrect: false }, { id: 'd', text: 'sqrt(x)', isCorrect: false }] }
  ]
};
