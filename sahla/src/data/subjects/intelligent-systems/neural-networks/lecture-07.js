export const LECTURE = {
  subjectId: 'neural-networks',
  number: 7,
  title: 'Section 1: Implementing NN in Python (NumPy)',
  titleAr: 'قسم 1: تنفيذ الشبكات العصبية ببايثون (NumPy)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Supervised Learning Foundations</h2>
<p>In supervised learning, we learn a mapping from inputs to outputs using labeled examples. The core loop is: <strong>Input → Model → Prediction → Loss → Parameter Update → Repeat</strong>.</p>
<ul>
  <li><strong>Features (X):</strong> Input variables — shape <code>(n_samples, n_features)</code>.</li>
  <li><strong>Targets (y):</strong> Desired output — shape <code>(n_samples,)</code>.</li>
  <li><strong>Loss Function:</strong> Measures how wrong a prediction is. Lower loss = better model.</li>
</ul>

<h2>🔹 NumPy for Neural Networks</h2>
<p>NumPy is essential for deep learning because it handles matrix operations efficiently. Arrays are up to 50× faster than standard Python lists.</p>
<div class="code-block">
<span class="keyword">import</span> numpy <span class="keyword">as</span> np

<span class="comment"># Shapes and Reshaping</span>
x = np.array([1, 2, 3])          <span class="comment"># shape (3,)</span>
x_col = x.reshape(-1, 1)         <span class="comment"># column vector (3, 1)</span>

<span class="comment"># Forward Pass: ŷ = XW + b</span>
X = np.random.randn(4, 3)        <span class="comment"># 4 samples, 3 features</span>
W = np.random.randn(3, 2)        <span class="comment"># Weights for 2 neurons</span>
b = np.zeros(2)                  <span class="comment"># Bias</span>
Z = X @ W + b                    <span class="comment"># Result shape (4, 2)</span>
</div>

<h2>🔹 Activation Functions Implementation</h2>
<table class="styled-table"><thead><tr><th>Function</th><th>Formula</th><th>Range</th></tr></thead><tbody>
<tr><td><strong>Sigmoid</strong></td><td>1 / (1 + e<sup>−x</sup>)</td><td>(0, 1)</td></tr>
<tr><td><strong>ReLU</strong></td><td>max(0, x)</td><td>[0, +∞)</td></tr>
<tr><td><strong>Tanh</strong></td><td>tanh(x)</td><td>(−1, +1)</td></tr>
</tbody></table>

<div class="code-block">
<span class="keyword">def</span> sigmoid(x):
    <span class="keyword">return</span> 1 / (1 + np.exp(-x))

<span class="keyword">def</span> relu(x):
    <span class="keyword">return</span> np.maximum(0, x)

<span class="keyword">def</span> sigmoid_derivative(x):
    s = sigmoid(x)
    <span class="keyword">return</span> s * (1 - s)
</div>

<h2>🔹 Implementing the Perceptron Rule</h2>
<p>The Perceptron updates weights only when a misclassification occurs:</p>
<div class="code-block">
<span class="keyword">if</span> y_true != y_pred:
    weights += learning_rate * y_true * input_vector
    bias += learning_rate * y_true
</div>

<h2>🔹 Implementing Adaline (LMS Rule)</h2>
<p>Adaline updates based on continuous error using Gradient Descent:</p>
<div class="code-block">
<span class="comment"># Compute error (Target - Linear Output)</span>
error = y_true - (X @ weights + bias)
<span class="comment"># Update weights</span>
weights += learning_rate * X.T @ error
bias += learning_rate * error.sum()
</div>
        `,
        bodyAr: `
<h2>🔹 أسس التعلم الخاضع للإشراف</h2>
<p>في التعلم الخاضع للإشراف، نتعلم كيفية تعيين المدخلات للمخرجات باستخدام أمثلة مصنفة. الحلقة الأساسية هي: <strong>المدخلات ← النموذج ← التنبؤ ← الخسارة ← تحديث المعاملات ← التكرار</strong>.</p>

<h2>🔹 استخدام NumPy في الشبكات العصبية</h2>
<p>تعتبر مكتبة NumPy ضرورية للتعلم العميق لأنها تتعامل مع عمليات المصفوفات بكفاءة عالية. المصفوفات أسرع بـ 50 مرة من قوائم بايثون العادية.</p>
<div class="code-block">
<span class="comment"># التمرير الأمامي: ŷ = XW + b</span>
Z = X @ W + b
</div>

<h2>🔹 تنفيذ دوال التنشيط</h2>
<p>دوال التنشيط هي التي تعطي للشبكة القدرة على تعلم الأنماط المعقدة وغير الخطية. أشهرها Sigmoid و ReLU و Tanh.</p>
        `,
      },
    },
  ],

  summary: {
    points: [
      'Supervised learning relies on the (Input → Prediction → Loss → Update) loop.',
      'NumPy arrays are essential for efficient matrix multiplication (X @ W + b).',
      'Broadcasting allows adding a bias vector to every row of a matrix automatically.',
      'Perceptron updates weights only on mistakes; Adaline updates based on continuous MSE error.',
      'Activation functions like Sigmoid and ReLU are implemented using NumPy vectorization.',
    ],
    pointsAr: [
      'يعتمد التعلم الخاضع للإشراف على حلقة (المدخلات ← التنبؤ ← الخسارة ← التحديث).',
      'مصفوفات NumPy ضرورية لعمليات ضرب المصفوفات الفعالة.',
      'يسمح البث (Broadcasting) بإضافة متجه التحيز لكل صف في المصفوفة تلقائياً.',
      'يقوم البيرسبترون بتحديث الأوزان عند الأخطاء فقط؛ بينما يعتمد أدالاين على خطأ MSE المستمر.',
      'يتم تنفيذ دوال التنشيط مثل Sigmoid و ReLU باستخدام NumPy.',
    ],
  },

  mcq: [
    {
      id: 'nn-l7-q1',
      question: 'Which NumPy operation computes the weighted sum XW in a forward pass?',
      questionAr: 'أي عملية في NumPy تحسب المجموع الموزون XW في التمرير الأمامي؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'X * W', isCorrect: false },
        { id: 'b', text: 'X @ W', isCorrect: true },
        { id: 'c', text: 'X.dot(W)', isCorrect: true },
        { id: 'd', text: 'Both b and c', isCorrect: true },
      ],
    },
    {
      id: 'nn-l7-q2',
      question: 'What is the shape of the result of (100, 50) @ (50, 10) + (10,)?',
      questionAr: 'ما هو شكل نتيجة العملية (100, 50) @ (50, 10) + (10,)؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(100, 50)', isCorrect: false },
        { id: 'b', text: '(100, 10)', isCorrect: true },
        { id: 'c', text: '(50, 10)', isCorrect: false },
        { id: 'd', text: '(10, 10)', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'nn-l7-w1',
      question: 'Write a NumPy function to compute the Sigmoid activation and its derivative.',
      questionAr: 'اكتب دالة بلغة NumPy لحساب تنشيط Sigmoid ومشتقته.',
      modelAnswer: 'def sigmoid(x): return 1 / (1 + np.exp(-x))\ndef sigmoid_der(x): s = sigmoid(x); return s * (1 - s)',
      modelAnswerAr: 'دالة السيجمويد تعتمد على np.exp، والمشتقة هي الناتج مضروباً في (1 - الناتج).',
    },
  ],
};
