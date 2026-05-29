export const LECTURE = {
  subjectId: 'neural-networks',
  number: 'quiz2',
  title: 'Quiz 2 — Neural Network Sections (Labs & Coding)',
  titleAr: 'اختبار 2 — أقسام الشبكات العصبية (المعامل والبرمجة)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Section 1 — Supervised Learning Foundations & NumPy</h2>
<h3>Supervised Learning Setup</h3>
<p>In supervised learning, we learn a mapping from inputs to outputs using labeled examples:</p>
<ul>
  <li><strong>Features (X):</strong> input variables — shape <code>(n_samples, n_features)</code></li>
  <li><strong>Targets (y):</strong> desired output — shape <code>(n_samples,)</code></li>
  <li><strong>Model:</strong> ŷ = f<sub>θ</sub>(x), where θ = learnable parameters (weights & biases)</li>
</ul>
<h3>Types of Tasks</h3>
<table class="styled-table"><thead><tr><th>Task</th><th>Output</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Regression</strong></td><td>Continuous value</td><td>Price prediction</td></tr>
<tr><td><strong>Classification</strong></td><td>Category / label</td><td>Spam detection</td></tr>
</tbody></table>

<h3>The Supervised Learning Loop</h3>
<p><strong>Input → Model → Prediction → Loss → Parameter Update → Repeat</strong></p>
<ul>
  <li>A <strong>loss function</strong> measures how wrong a prediction is. Lower loss → better predictions.</li>
  <li><strong>Generalization:</strong> model learns patterns for new data. <strong>Overfitting:</strong> model memorises training data.</li>
</ul>

<h3>NumPy Essentials</h3>
<p>NumPy arrays are up to 50× faster than Python lists — essential for neural network matrix operations.</p>
<div class="code-block">
<span class="keyword">import</span> numpy <span class="keyword">as</span> np

<span class="comment"># Shapes</span>
x = np.array([1, 2, 3])          <span class="comment"># shape (3,)</span>
x_col = x.reshape(-1, 1)         <span class="comment"># shape (3, 1)</span>
x_row = x.reshape(1, -1)         <span class="comment"># shape (1, 3)</span>

<span class="comment"># Matrix multiplication  (n_samples, n_features) @ (n_features, n_units) = (n_samples, n_units)</span>
X = np.random.randn(4, 3)        <span class="comment"># 4 samples, 3 features</span>
W = np.random.randn(3, 2)        <span class="comment"># 2 neurons</span>
Z = X @ W                        <span class="comment"># shape (4, 2)</span>

<span class="comment"># Broadcasting — bias added to every row</span>
b = np.zeros(2)
Z = X @ W + b                    <span class="comment"># (4, 2) + (2,) → (4, 2)</span>

<span class="comment"># Linear forward pass</span>
<span class="keyword">def</span> linear_forward(X, W, b):
    <span class="keyword">return</span> X @ W + b
</div>

<h2>🔹 Section 2 — Activation Functions & Perceptron / Adaline</h2>
<h3>Activation Functions</h3>
<table class="styled-table"><thead><tr><th>Function</th><th>Formula</th><th>Range</th><th>Use</th></tr></thead><tbody>
<tr><td><strong>Identity</strong></td><td>f(x) = x</td><td>(−∞, +∞)</td><td>Linear regression</td></tr>
<tr><td><strong>Sigmoid</strong></td><td>σ(x) = 1 / (1 + e<sup>−x</sup>)</td><td>(0, 1)</td><td>Binary classification</td></tr>
<tr><td><strong>Tanh</strong></td><td>tanh(x)</td><td>(−1, +1)</td><td>Hidden layers</td></tr>
<tr><td><strong>ReLU</strong></td><td>max(0, x)</td><td>[0, +∞)</td><td>Deep networks (fastest)</td></tr>
</tbody></table>

<div class="code-block">
<span class="keyword">def</span> sigmoid(x):    <span class="keyword">return</span> 1 / (1 + np.exp(-x))
<span class="keyword">def</span> sigmoid_der(x): s = sigmoid(x); <span class="keyword">return</span> s * (1 - s)
<span class="keyword">def</span> relu(x):       <span class="keyword">return</span> np.maximum(0, x)
<span class="keyword">def</span> tanh(x):       <span class="keyword">return</span> np.tanh(x)
</div>

<h3>Perceptron</h3>
<p>A single-layer neural network with a <strong>hard threshold</strong> activation. Updates weights only on misclassifications.</p>
<div class="code-block">
<span class="comment"># Perceptron update rule</span>
<span class="keyword">if</span> y[i] != y_pred:
    w += lr * y[i] * X[i]
    b += lr * y[i]

<span class="comment"># Hard threshold output</span>
y_pred = np.where(z >= 0, 1, -1)       <span class="comment"># maps to {-1, +1}</span>
<span class="comment"># or equivalently:</span>
y_pred = np.sign(z)                     <span class="comment"># np.sign(0) = 0 though</span>
</div>

<h3>Adaline (Adaptive Linear Neuron)</h3>
<p>Uses <strong>continuous error</strong> (MSE) and gradient descent on all samples — no hard threshold during training.</p>
<div class="code-block">
<span class="comment"># Adaline update (gradient descent on MSE)</span>
errors = y - z                    <span class="comment"># z = X @ w + b  (linear output, no threshold)</span>
w += lr * np.dot(X.T, errors)
b += lr * np.sum(errors)
loss = np.mean(errors**2)         <span class="comment"># MSE</span>
</div>

<h3>Logical Gates — AND, OR, XOR</h3>
<ul>
  <li><strong>AND & OR:</strong> linearly separable → Perceptron converges perfectly.</li>
  <li><strong>XOR:</strong> <em>not</em> linearly separable → Perceptron cannot solve it. Requires a hidden layer (MLP).</li>
</ul>

<h2>🔹 Hebbian Learning Rule</h2>
<p>"Neurons that fire together, wire together." — Donald O. Hebb, 1949</p>
<div class="code-block">
<span class="comment"># Weight update</span>
w_new = w_old + x_i * y            <span class="comment"># Hebbian rule</span>
b_new = b_old + y

<span class="comment"># Prediction</span>
net = X @ w
y_pred = np.sign(net)               <span class="comment"># bipolar output {-1, +1}</span>
</div>
<h3>Weight Initialisation Methods</h3>
<table class="styled-table"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody>
<tr><td><strong>Zero</strong></td><td>All weights = 0 (baseline Hebbian)</td></tr>
<tr><td><strong>Random Uniform</strong></td><td>Uniform in [−0.5, 0.5]</td></tr>
<tr><td><strong>Random Normal</strong></td><td>Gaussian, μ=0, σ=0.1</td></tr>
<tr><td><strong>Xavier / Glorot</strong></td><td>Uniform in [−1/√n, 1/√n]</td></tr>
<tr><td><strong>He</strong></td><td>Gaussian, σ = √(2/n)</td></tr>
<tr><td><strong>Constant</strong></td><td>All weights = small constant (e.g. 0.1)</td></tr>
</tbody></table>

<h2>🔹 Section 3 — PyTorch Basics</h2>
<h3>What is PyTorch?</h3>
<ul>
  <li>Open-source ML/DL framework with GPU acceleration.</li>
  <li><strong>Tensors</strong> = multi-dimensional arrays (like NumPy ndarray but GPU-capable).</li>
</ul>
<div class="code-block">
<span class="keyword">import</span> torch
<span class="keyword">import</span> torch.nn <span class="keyword">as</span> nn
<span class="keyword">import</span> torch.optim <span class="keyword">as</span> optim

<span class="comment"># Creating tensors</span>
x = torch.tensor([1.0, 2.0])
y = torch.ones(2, 2)

<span class="comment"># Matrix multiplication</span>
inputs = torch.tensor([0.5, -1.0])
weights = torch.randn(2, 3)
output = torch.matmul(inputs, weights)
</div>

<h3>nn.Module — Building a Network</h3>
<div class="code-block">
<span class="keyword">class</span> SimpleNN(nn.Module):
    <span class="keyword">def</span> __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(2, 2)      <span class="comment"># input → hidden</span>
        self.fc2 = nn.Linear(2, 2)      <span class="comment"># hidden → output</span>
        self.sigmoid = nn.Sigmoid()
    <span class="keyword">def</span> forward(self, x):
        x = self.sigmoid(self.fc1(x))
        x = self.sigmoid(self.fc2(x))
        <span class="keyword">return</span> x
</div>

<h3>Training Loop (PyTorch)</h3>
<div class="code-block">
criterion = nn.MSELoss()                     <span class="comment"># or nn.CrossEntropyLoss()</span>
optimizer = optim.SGD(model.parameters(), lr=0.5)

<span class="keyword">for</span> epoch <span class="keyword">in</span> range(num_epochs):
    outputs = model(X)                       <span class="comment"># 1. Forward pass</span>
    loss = criterion(outputs, y)             <span class="comment"># 2. Compute loss</span>
    optimizer.zero_grad()                    <span class="comment"># 3. Zero gradients</span>
    loss.backward()                          <span class="comment"># 4. Backward pass</span>
    optimizer.step()                         <span class="comment"># 5. Update weights</span>
</div>
<p><strong>Key:</strong> <code>loss.backward()</code> computes gradients → <code>optimizer.step()</code> updates weights → <code>optimizer.zero_grad()</code> clears old gradients.</p>

<h2>🔹 Regularization (L1 & L2)</h2>
<p>Prevents <strong>overfitting</strong> by penalizing large weights: L<sub>reg</sub> = L<sub>original</sub> + λ · Ω(W)</p>
<table class="styled-table"><thead><tr><th>Type</th><th>Penalty</th><th>Gradient</th><th>Effect</th></tr></thead><tbody>
<tr><td><strong>L2 (Ridge)</strong></td><td>½ λ Σ w²</td><td>λ · W</td><td>Small, spread-out weights</td></tr>
<tr><td><strong>L1 (Lasso)</strong></td><td>λ Σ |w|</td><td>λ · sign(W)</td><td>Sparse weights (many become 0)</td></tr>
</tbody></table>
<div class="code-block">
<span class="keyword">def</span> l2_penalty(W, lam):  <span class="keyword">return</span> 0.5 * lam * np.sum(W**2)
<span class="keyword">def</span> l1_penalty(W, lam):  <span class="keyword">return</span> lam * np.sum(np.abs(W))

<span class="comment"># Weight update with L2 regularization</span>
W = W - lr * (grad_loss + lam * W)

<span class="comment"># Weight update with L1 regularization</span>
W = W - lr * (grad_loss + lam * np.sign(W))
</div>

<h2>🔹 Backpropagation</h2>
<p>The algorithm to train multi-layer networks by propagating error gradients backward through the network.</p>
<h3>Steps</h3>
<ol>
  <li><strong>Forward pass:</strong> compute output layer by layer.</li>
  <li><strong>Compute error:</strong> E = ½ Σ (target − output)²</li>
  <li><strong>Backward pass:</strong> compute ∂E/∂w for each weight using the chain rule.</li>
  <li><strong>Update:</strong> w_new = w_old − η · ∂E/∂w</li>
</ol>
<div class="code-block">
<span class="comment"># Forward pass (2-layer network with sigmoid)</span>
h1_in  = x1*w1 + x2*w2 + b1
h1_out = sigmoid(h1_in)
o1_in  = h1_out*w5 + h2_out*w6 + b2
o1_out = sigmoid(o1_in)

<span class="comment"># Error</span>
E_total = 0.5*(t1 - o1_out)**2 + 0.5*(t2 - o2_out)**2

<span class="comment"># Backward (chain rule)</span>
dE_dw5 = -(t1 - o1_out) * o1_out*(1-o1_out) * h1_out

<span class="comment"># Update</span>
w5_new = w5 - eta * dE_dw5
</div>

<h3>Coding Functions Summary</h3>
<table class="styled-table"><thead><tr><th>Function</th><th>Formula / Code</th></tr></thead><tbody>
<tr><td><strong>MSE</strong></td><td><code>np.mean((y_hat - y) ** 2)</code></td></tr>
<tr><td><strong>Sigmoid</strong></td><td><code>1 / (1 + np.exp(-x))</code></td></tr>
<tr><td><strong>Sigmoid Derivative</strong></td><td><code>σ(x) * (1 − σ(x))</code></td></tr>
<tr><td><strong>ReLU</strong></td><td><code>np.maximum(0, x)</code></td></tr>
<tr><td><strong>Forward Pass</strong></td><td><code>X @ W + b</code></td></tr>
<tr><td><strong>Perceptron Output</strong></td><td><code>np.where(z > 0, 1, -1)</code></td></tr>
<tr><td><strong>Accuracy</strong></td><td><code>np.mean(y_pred == y_true)</code></td></tr>
<tr><td><strong>Weight Update</strong></td><td><code>W + lr * error * X</code></td></tr>
</tbody></table>
        `,
        bodyAr: `
<h2>🔹 القسم 1 — أسس التعلم الخاضع للإشراف و NumPy</h2>
<h3>إعداد التعلم الخاضع للإشراف</h3>
<p>في التعلم الخاضع للإشراف، نتعلم تعيين (mapping) من المدخلات إلى المخرجات باستخدام أمثلة مُصنَّفة:</p>
<ul>
  <li><strong>الميزات (X):</strong> متغيرات الإدخال — الشكل <code>(n_samples, n_features)</code></li>
  <li><strong>الأهداف (y):</strong> المخرجات المطلوبة — الشكل <code>(n_samples,)</code></li>
  <li><strong>النموذج:</strong> ŷ = f<sub>θ</sub>(x)، حيث θ = المعلمات القابلة للتعلم (الأوزان والتحيزات)</li>
</ul>

<h3>أساسيات NumPy</h3>
<ul>
  <li>مصفوفات NumPy أسرع حتى 50 مرة من قوائم Python.</li>
  <li>عمليات المصفوفات: <code>X @ W + b</code> لحساب التمرير الأمامي الخطي.</li>
  <li>البث (Broadcasting): يضيف التحيز تلقائيًا لكل صف.</li>
</ul>

<h2>🔹 القسم 2 — دوال التنشيط والبيرسيبترون / أدالاين</h2>
<ul>
  <li><strong>Sigmoid:</strong> σ(x) = 1/(1+e<sup>-x</sup>) — المدى (0, 1)</li>
  <li><strong>ReLU:</strong> max(0, x) — الأسرع للشبكات العميقة</li>
  <li><strong>البيرسيبترون:</strong> يحدّث الأوزان فقط عند الخطأ. يحل AND و OR لكن ليس XOR.</li>
  <li><strong>أدالاين:</strong> يستخدم خطأ مستمر (MSE) ونزول التدرج.</li>
</ul>

<h2>🔹 تعلم هيب (Hebbian Learning)</h2>
<p>"الخلايا العصبية التي تنشط معًا، ترتبط معًا." — w_new = w_old + x_i × y</p>

<h2>🔹 القسم 3 — أساسيات PyTorch</h2>
<ul>
  <li><strong>الموترات (Tensors):</strong> مصفوفات متعددة الأبعاد مع دعم GPU.</li>
  <li><strong>حلقة التدريب:</strong> forward → loss → zero_grad → backward → step</li>
</ul>

<h2>🔹 التنظيم (Regularization)</h2>
<ul>
  <li><strong>L2 (Ridge):</strong> يعاقب مربعات الأوزان → أوزان صغيرة موزعة.</li>
  <li><strong>L1 (Lasso):</strong> يعاقب القيم المطلقة → أوزان متفرقة (كثير منها = 0).</li>
</ul>

<h2>🔹 الانتشار الخلفي (Backpropagation)</h2>
<p>خوارزمية لتدريب الشبكات متعددة الطبقات بنشر أخطاء التدرج للخلف عبر الشبكة باستخدام قاعدة السلسلة.</p>
        `,
      },
    },
  ],

  summary: {
    points: [
      "Supervised learning: learn ŷ = f_θ(x) from labeled data. Loop: Input → Model → Prediction → Loss → Update → Repeat.",
      "NumPy shapes: (n_samples, n_features) @ (n_features, n_units) + (n_units,) = (n_samples, n_units). Use X @ W + b for forward pass.",
      "Activation functions: Sigmoid σ(x)=1/(1+e^-x) ∈ (0,1), ReLU = max(0,x), Tanh ∈ (-1,1). Sigmoid derivative = σ(x)(1−σ(x)).",
      "Perceptron: hard threshold (np.sign or np.where), updates weights only on misclassifications. Solves AND/OR but NOT XOR (not linearly separable).",
      "Adaline: uses continuous MSE loss with gradient descent on all samples. No hard threshold during training.",
      "Hebbian learning: w_new = w_old + x_i * y. 'Neurons that fire together, wire together.' Bipolar activation {-1, +1}.",
      "Weight initialisation: Zero, Random Uniform, Random Normal, Xavier (1/√n), He (√(2/n)), Constant.",
      "PyTorch training loop: outputs = model(X) → loss = criterion(outputs, y) → optimizer.zero_grad() → loss.backward() → optimizer.step().",
      "L2 regularisation: penalty = ½λΣw², gradient = λW → small weights. L1: penalty = λΣ|w|, gradient = λ·sign(W) → sparse weights.",
      "Backpropagation: forward pass → compute error E = ½Σ(t−o)² → backward pass (chain rule for ∂E/∂w) → update w = w − η·∂E/∂w.",
      "MSE = np.mean((y_hat − y)**2). Accuracy = np.mean(y_pred == y_true). Perceptron output = np.where(z >= 0, 1, -1).",
    ],
    pointsAr: [
      "التعلم الخاضع للإشراف: تعلم ŷ = f_θ(x) من بيانات مصنفة. الحلقة: إدخال → نموذج → تنبؤ → خسارة → تحديث → تكرار.",
      "أشكال NumPy: (n_samples, n_features) @ (n_features, n_units) + (n_units,) = (n_samples, n_units).",
      "دوال التنشيط: Sigmoid ∈ (0,1)، ReLU = max(0,x)، Tanh ∈ (-1,1). مشتقة Sigmoid = σ(x)(1−σ(x)).",
      "البيرسيبترون: عتبة صلبة، يحدّث فقط عند الخطأ. يحل AND/OR لكن لا يحل XOR.",
      "أدالاين: يستخدم خسارة MSE مستمرة مع نزول التدرج.",
      "تعلم هيب: w_new = w_old + x_i × y. التنشيط ثنائي القطب {-1، +1}.",
      "حلقة تدريب PyTorch: forward → loss → zero_grad → backward → step.",
      "L2: أوزان صغيرة موزعة. L1: أوزان متفرقة (كثير منها صفر).",
      "الانتشار الخلفي: تمرير أمامي → خطأ → تمرير خلفي (قاعدة السلسلة) → تحديث الأوزان.",
    ],
  },

  mcq: [
    // ── NumPy & Shapes ──────────────────────────────────────
    {
      id: 'nn-q2-01',
      question: 'Given X of shape (64, 128) and W of shape (128, 10), adding bias b of shape (10,) results in an array of shape:',
      questionAr: 'بالنظر إلى X بشكل (64, 128) وW بشكل (128, 10)، إضافة التحيز b بشكل (10,) ينتج مصفوفة بشكل:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(64, 10)', isCorrect: true },
        { id: 'b', text: '(128, 10)', isCorrect: false },
        { id: 'c', text: '(64, 20)', isCorrect: false },
        { id: 'd', text: '(74, 10)', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-02',
      question: 'What does np.array([1,2,3]).reshape(-1, 1) produce?',
      questionAr: 'ماذا ينتج np.array([1,2,3]).reshape(-1, 1)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A row vector of shape (1, 3)', isCorrect: false },
        { id: 'b', text: 'A column vector of shape (3, 1)', isCorrect: true },
        { id: 'c', text: 'A 1-D array of shape (3,)', isCorrect: false },
        { id: 'd', text: 'An error because -1 is invalid', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-03',
      question: 'What happens when you try arr = np.array([1,2,3,4,5,6,7,8,9,10,11,12]).reshape(3, 3)?',
      questionAr: 'ماذا يحدث عند محاولة arr.reshape(3, 3) لمصفوفة من 12 عنصر؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'It creates a 3×3 array by truncating extra elements', isCorrect: false },
        { id: 'b', text: 'It creates a 3×3 array and fills the remaining with zeros', isCorrect: false },
        { id: 'c', text: 'It raises a ValueError because 12 cannot be reshaped into (3, 3)', isCorrect: true },
        { id: 'd', text: 'It creates a 3×4 array automatically', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-04',
      question: 'In NumPy, X has shape (3, 2) and b has shape (2,). What does X + b do?',
      questionAr: 'في NumPy، X بشكل (3, 2) و b بشكل (2,). ماذا يفعل X + b؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Raises an error because shapes do not match', isCorrect: false },
        { id: 'b', text: 'Adds b to every row of X via broadcasting — result shape (3, 2)', isCorrect: true },
        { id: 'c', text: 'Adds b to the first column only', isCorrect: false },
        { id: 'd', text: 'Concatenates b to X producing shape (3, 4)', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-05',
      question: 'Which expression correctly computes the linear forward pass ŷ = XW + b in NumPy?',
      questionAr: 'أي تعبير يحسب التمرير الأمامي الخطي ŷ = XW + b في NumPy بشكل صحيح؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'np.dot(X, W) * b', isCorrect: false },
        { id: 'b', text: 'X @ W + b', isCorrect: true },
        { id: 'c', text: 'X * W + b', isCorrect: false },
        { id: 'd', text: 'np.multiply(X, W) + b', isCorrect: false },
      ],
    },

    // ── Perceptron & XOR ────────────────────────────────────
    {
      id: 'nn-q2-06',
      question: 'Why does a perceptron perfectly classify AND and OR but fails on XOR?',
      questionAr: 'لماذا يصنف البيرسيبترون AND و OR بشكل مثالي لكنه يفشل في XOR؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Perceptrons only classify on misclassifications', isCorrect: false },
        { id: 'b', text: 'XOR classes are not linearly separable', isCorrect: true },
        { id: 'c', text: 'The number of outputs of XOR are too large for a perceptron to handle', isCorrect: false },
        { id: 'd', text: 'XOR needs at least three output neurons by definition', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-07',
      question: 'In a Perceptron, when does a weight update occur?',
      questionAr: 'في البيرسيبترون، متى يحدث تحديث الأوزان؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'After every sample regardless of prediction', isCorrect: false },
        { id: 'b', text: 'Only when the prediction is incorrect (misclassification)', isCorrect: true },
        { id: 'c', text: 'Only at the end of each epoch', isCorrect: false },
        { id: 'd', text: 'When the MSE exceeds a threshold', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-08',
      question: 'What is the key difference between the Perceptron and Adaline update rules?',
      questionAr: 'ما الفرق الرئيسي بين قواعد تحديث البيرسيبترون وأدالاين؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Perceptron uses MSE; Adaline uses misclassification count', isCorrect: false },
        { id: 'b', text: 'Perceptron updates only on misclassifications; Adaline uses gradient descent on continuous MSE loss', isCorrect: true },
        { id: 'c', text: 'Adaline uses a hard threshold; Perceptron uses sigmoid', isCorrect: false },
        { id: 'd', text: 'They are identical — just different names', isCorrect: false },
      ],
    },

    // ── Hebbian Learning ────────────────────────────────────
    {
      id: 'nn-q2-09',
      question: 'What is the Hebbian weight update rule?',
      questionAr: 'ما هي قاعدة تحديث أوزان هيب؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'w_new = w_old + x_i * y', isCorrect: true },
        { id: 'b', text: 'w_new = w_old - x_i * error', isCorrect: false },
        { id: 'c', text: 'w_new = w_old + x_i * gradient(mse(y, y_hat))', isCorrect: false },
        { id: 'd', text: 'w_new = sigmoid(w_old)', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-10',
      question: 'The Hebbian learning rule is summarised as:',
      questionAr: 'قاعدة تعلم هيب تُلخّص بـ:',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '"Neurons that fire apart, wire together"', isCorrect: false },
        { id: 'b', text: '"Neurons that fire together, wire together"', isCorrect: true },
        { id: 'c', text: '"All neurons must fire at the same time"', isCorrect: false },
        { id: 'd', text: '"Only the output neuron updates"', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-11',
      question: 'In the Hebbian AND gate implementation, which activation representation is used?',
      questionAr: 'في تطبيق بوابة AND لهيب، أي تمثيل تنشيط يُستخدم؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Binary: {0, 1}', isCorrect: false },
        { id: 'b', text: 'Bipolar: {-1, +1}', isCorrect: true },
        { id: 'c', text: 'Continuous: [0, 1]', isCorrect: false },
        { id: 'd', text: 'One-hot encoded', isCorrect: false },
      ],
    },

    // ── Hard Threshold / NumPy Coding ───────────────────────
    {
      id: 'nn-q2-12',
      question: 'How can you implement a hard threshold output in NumPy that maps values to {-1, 1}?',
      questionAr: 'كيف يمكنك تنفيذ مخرج عتبة صلبة في NumPy يُحوّل القيم إلى {-1, 1}؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'np.sign(x)', isCorrect: true },
        { id: 'b', text: 'np.where(x >= 0, -1, 1)', isCorrect: false },
        { id: 'c', text: '(x > 0).astype(int)', isCorrect: false },
        { id: 'd', text: 'np.tanh(x)', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-13',
      question: 'What does np.where(z >= 0, 1, -1) do?',
      questionAr: 'ماذا يفعل np.where(z >= 0, 1, -1)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Returns 1 where z ≥ 0, otherwise -1 — a perceptron hard threshold', isCorrect: true },
        { id: 'b', text: 'Returns the sigmoid of z', isCorrect: false },
        { id: 'c', text: 'Returns 0 where z ≥ 0, otherwise 1', isCorrect: false },
        { id: 'd', text: 'Raises an error because z must be a scalar', isCorrect: false },
      ],
    },

    // ── Activation Functions ────────────────────────────────
    {
      id: 'nn-q2-14',
      question: 'What is the output range of the sigmoid activation function σ(x)?',
      questionAr: 'ما نطاق مخرجات دالة التنشيط سيجمويد σ(x)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: '(-∞, +∞)', isCorrect: false },
        { id: 'b', text: '(0, 1)', isCorrect: true },
        { id: 'c', text: '(-1, 1)', isCorrect: false },
        { id: 'd', text: '[0, +∞)', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-15',
      question: 'The derivative of the sigmoid function σ(x) is:',
      questionAr: 'مشتقة دالة السيجمويد σ(x) هي:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'σ(x) + (1 − σ(x))', isCorrect: false },
        { id: 'b', text: 'σ(x) * (1 − σ(x))', isCorrect: true },
        { id: 'c', text: '1 / σ(x)', isCorrect: false },
        { id: 'd', text: 'σ(x)²', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-16',
      question: 'Which activation function is defined as f(x) = max(0, x)?',
      questionAr: 'أي دالة تنشيط مُعرَّفة بـ f(x) = max(0, x)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Sigmoid', isCorrect: false },
        { id: 'b', text: 'Tanh', isCorrect: false },
        { id: 'c', text: 'ReLU', isCorrect: true },
        { id: 'd', text: 'Identity', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-17',
      question: 'Why is ReLU preferred over Sigmoid in deep networks?',
      questionAr: 'لماذا يُفضل ReLU على Sigmoid في الشبكات العميقة؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'ReLU outputs probabilities between 0 and 1', isCorrect: false },
        { id: 'b', text: 'ReLU is computationally faster and avoids the vanishing gradient problem', isCorrect: true },
        { id: 'c', text: 'ReLU always produces negative values', isCorrect: false },
        { id: 'd', text: 'ReLU is differentiable everywhere unlike sigmoid', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-18',
      question: 'What is the correct NumPy implementation of the ReLU activation function?',
      questionAr: 'ما التنفيذ الصحيح لدالة ReLU في NumPy؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'np.minimum(0, x)', isCorrect: false },
        { id: 'b', text: 'np.maximum(0, x)', isCorrect: true },
        { id: 'c', text: 'np.abs(x)', isCorrect: false },
        { id: 'd', text: '1 / (1 + np.exp(-x))', isCorrect: false },
      ],
    },

    // ── PyTorch ─────────────────────────────────────────────
    {
      id: 'nn-q2-19',
      question: 'In PyTorch, after computing the loss using a predefined criterion, how are the model weights updated?',
      questionAr: 'في PyTorch، بعد حساب الخسارة باستخدام معيار محدد مسبقًا، كيف يتم تحديث أوزان النموذج؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'loss.backward(); optimizer.step(); optimizer.zero_grad()', isCorrect: false },
        { id: 'b', text: 'optimizer.step(); loss.backward(); optimizer.zero_grad()', isCorrect: false },
        { id: 'c', text: 'optimizer.zero_grad(); loss.backward(); optimizer.step()', isCorrect: true },
        { id: 'd', text: 'optimizer.zero_grad(); optimizer.step(); loss.backward()', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-20',
      question: 'What does loss.backward() do in PyTorch?',
      questionAr: 'ماذا يفعل loss.backward() في PyTorch؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Updates all model weights with new values', isCorrect: false },
        { id: 'b', text: 'Computes the gradients (partial derivatives) of the loss with respect to all parameters', isCorrect: true },
        { id: 'c', text: 'Resets the gradients to zero', isCorrect: false },
        { id: 'd', text: 'Runs the forward pass again', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-21',
      question: 'In PyTorch, nn.Linear(2, 3) creates a layer with how many learnable weight parameters (excluding bias)?',
      questionAr: 'في PyTorch، nn.Linear(2, 3) ينشئ طبقة بكم عدد معلمات الأوزان القابلة للتعلم (بدون التحيز)؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '2', isCorrect: false },
        { id: 'b', text: '3', isCorrect: false },
        { id: 'c', text: '5', isCorrect: false },
        { id: 'd', text: '6', isCorrect: true },
      ],
    },
    {
      id: 'nn-q2-22',
      question: 'Which PyTorch loss function is standard for multi-class classification?',
      questionAr: 'أي دالة خسارة في PyTorch هي المعيار للتصنيف متعدد الفئات؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'nn.MSELoss()', isCorrect: false },
        { id: 'b', text: 'nn.CrossEntropyLoss()', isCorrect: true },
        { id: 'c', text: 'nn.L1Loss()', isCorrect: false },
        { id: 'd', text: 'nn.BCELoss()', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-23',
      question: 'What is the purpose of optimizer.zero_grad() in the PyTorch training loop?',
      questionAr: 'ما الغرض من optimizer.zero_grad() في حلقة تدريب PyTorch؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'It initialises all weights to zero', isCorrect: false },
        { id: 'b', text: 'It clears (resets) the accumulated gradients from previous iterations', isCorrect: true },
        { id: 'c', text: 'It sets the learning rate to zero', isCorrect: false },
        { id: 'd', text: 'It removes the optimizer from memory', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-24',
      question: 'In PyTorch, what is a Tensor?',
      questionAr: 'في PyTorch، ما هو الموتر (Tensor)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'A Python list optimized for speed', isCorrect: false },
        { id: 'b', text: 'A multi-dimensional array similar to NumPy ndarray but with GPU support', isCorrect: true },
        { id: 'c', text: 'A special type of neural network layer', isCorrect: false },
        { id: 'd', text: 'A loss function for deep learning', isCorrect: false },
      ],
    },

    // ── Accuracy ────────────────────────────────────────────
    {
      id: 'nn-q2-25',
      question: 'You are given two NumPy arrays y_true and y_pred of integer types. Which of the following expressions correctly computes the classification accuracy?',
      questionAr: 'لديك مصفوفتان NumPy: y_true و y_pred من نوع عدد صحيح. أي تعبير يحسب دقة التصنيف بشكل صحيح؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'np.sum(y_true = y_pred)', isCorrect: false },
        { id: 'b', text: 'np.mean(y_true == y_pred)', isCorrect: true },
        { id: 'c', text: 'np.mean(y_true * y_pred) / y_true.shape[0]', isCorrect: false },
        { id: 'd', text: 'np.mean(np.abs(y_true - y_pred))', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-26',
      question: 'What does np.mean((y_hat - y) ** 2) compute?',
      questionAr: 'ماذا يحسب np.mean((y_hat - y) ** 2)؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Mean Absolute Error (MAE)', isCorrect: false },
        { id: 'b', text: 'Mean Squared Error (MSE)', isCorrect: true },
        { id: 'c', text: 'Classification Accuracy', isCorrect: false },
        { id: 'd', text: 'Cross-Entropy Loss', isCorrect: false },
      ],
    },

    // ── Regularization ──────────────────────────────────────
    {
      id: 'nn-q2-27',
      question: 'What is the purpose of regularization in neural networks?',
      questionAr: 'ما الغرض من التنظيم (Regularization) في الشبكات العصبية؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'To increase the learning rate automatically', isCorrect: false },
        { id: 'b', text: 'To prevent overfitting by penalizing large weight values', isCorrect: true },
        { id: 'c', text: 'To add more layers to the network', isCorrect: false },
        { id: 'd', text: 'To convert data to a different format', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-28',
      question: 'What is the L2 regularization penalty formula?',
      questionAr: 'ما صيغة عقوبة التنظيم L2؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'λ · Σ |w_i|', isCorrect: false },
        { id: 'b', text: '½ · λ · Σ w_i²', isCorrect: true },
        { id: 'c', text: 'λ · Σ w_i', isCorrect: false },
        { id: 'd', text: '½ · Σ |w_i|²', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-29',
      question: 'Which regularization method tends to produce sparse weights (many weights become exactly zero)?',
      questionAr: 'أي طريقة تنظيم تميل لإنتاج أوزان متفرقة (كثير من الأوزان تصبح صفر)؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'L2 (Ridge)', isCorrect: false },
        { id: 'b', text: 'L1 (Lasso)', isCorrect: true },
        { id: 'c', text: 'Both L1 and L2 equally', isCorrect: false },
        { id: 'd', text: 'Neither — regularization does not affect sparsity', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-30',
      question: 'The gradient of the L2 penalty with respect to weights W is:',
      questionAr: 'التدرج (gradient) لعقوبة L2 بالنسبة للأوزان W هو:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'λ · sign(W)', isCorrect: false },
        { id: 'b', text: 'λ · W', isCorrect: true },
        { id: 'c', text: '½ · λ · W²', isCorrect: false },
        { id: 'd', text: 'λ / W', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-31',
      question: 'The weight update rule with L2 regularization is:',
      questionAr: 'قاعدة تحديث الأوزان مع تنظيم L2 هي:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'W ← W − α · (∇L + λ · sign(W))', isCorrect: false },
        { id: 'b', text: 'W ← W − α · (∇L + λ · W)', isCorrect: true },
        { id: 'c', text: 'W ← W + α · (∇L + λ · W)', isCorrect: false },
        { id: 'd', text: 'W ← W − α · ∇L', isCorrect: false },
      ],
    },

    // ── Backpropagation ─────────────────────────────────────
    {
      id: 'nn-q2-32',
      question: 'In backpropagation, what mathematical technique is used to compute ∂E/∂w for weights in earlier layers?',
      questionAr: 'في الانتشار الخلفي، أي تقنية رياضية تُستخدم لحساب ∂E/∂w للأوزان في الطبقات السابقة؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Integration by parts', isCorrect: false },
        { id: 'b', text: 'The chain rule of differentiation', isCorrect: true },
        { id: 'c', text: 'Matrix inversion', isCorrect: false },
        { id: 'd', text: 'Taylor expansion', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-33',
      question: 'Given inputs x1=0.05, x2=0.10, weights w1=0.15, w2=0.20, bias b1=0.35, what is the net input h1 to the first hidden neuron?',
      questionAr: 'بالنظر إلى المدخلات x1=0.05، x2=0.10، الأوزان w1=0.15، w2=0.20، التحيز b1=0.35، ما هو صافي الإدخال h1 للخلية المخفية الأولى؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '0.3525', isCorrect: false },
        { id: 'b', text: '0.3775', isCorrect: true },
        { id: 'c', text: '0.4525', isCorrect: false },
        { id: 'd', text: '0.2775', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-34',
      question: 'The error function used in backpropagation (as shown in sections) is:',
      questionAr: 'دالة الخطأ المستخدمة في الانتشار الخلفي (كما في الأقسام) هي:',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'E = Σ (target − output)', isCorrect: false },
        { id: 'b', text: 'E = ½ Σ (target − output)²', isCorrect: true },
        { id: 'c', text: 'E = Σ |target − output|', isCorrect: false },
        { id: 'd', text: 'E = log(target / output)', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-35',
      question: 'In the backpropagation weight update, the new weight is calculated as:',
      questionAr: 'في تحديث أوزان الانتشار الخلفي، يُحسب الوزن الجديد كـ:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'w_new = w_old + η · ∂E/∂w', isCorrect: false },
        { id: 'b', text: 'w_new = w_old − η · ∂E/∂w', isCorrect: true },
        { id: 'c', text: 'w_new = w_old × η · ∂E/∂w', isCorrect: false },
        { id: 'd', text: 'w_new = η / ∂E/∂w', isCorrect: false },
      ],
    },

    // ── Weight Initialization ───────────────────────────────
    {
      id: 'nn-q2-36',
      question: 'Xavier / Glorot initialisation draws weights uniformly from:',
      questionAr: 'تهيئة Xavier / Glorot تسحب الأوزان بشكل منتظم من:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '[-1, 1]', isCorrect: false },
        { id: 'b', text: '[-1/√n, 1/√n] where n is the number of input features', isCorrect: true },
        { id: 'c', text: '[-√(2/n), √(2/n)]', isCorrect: false },
        { id: 'd', text: '[0, 1]', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-37',
      question: 'He initialisation uses a Gaussian with standard deviation:',
      questionAr: 'تهيئة He تستخدم توزيع غاوسي بانحراف معياري:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '1/√n', isCorrect: false },
        { id: 'b', text: '√(2/n)', isCorrect: true },
        { id: 'c', text: '2/n', isCorrect: false },
        { id: 'd', text: '0.1', isCorrect: false },
      ],
    },

    // ── Supervised Learning Concepts ────────────────────────
    {
      id: 'nn-q2-38',
      question: 'A model that memorises training data but performs poorly on unseen data is exhibiting:',
      questionAr: 'النموذج الذي يحفظ بيانات التدريب لكنه يعمل بشكل سيئ على بيانات غير مرئية يُظهر:',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Underfitting', isCorrect: false },
        { id: 'b', text: 'Generalization', isCorrect: false },
        { id: 'c', text: 'Overfitting', isCorrect: true },
        { id: 'd', text: 'Normalization', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-39',
      question: 'Why do neural networks need non-linear activation functions?',
      questionAr: 'لماذا تحتاج الشبكات العصبية إلى دوال تنشيط غير خطية؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To make computations slower and more precise', isCorrect: false },
        { id: 'b', text: 'To learn complex, non-linear mappings from input to output', isCorrect: true },
        { id: 'c', text: 'To reduce the number of parameters', isCorrect: false },
        { id: 'd', text: 'To convert all outputs to binary values', isCorrect: false },
      ],
    },
    {
      id: 'nn-q2-40',
      question: 'The Perceptron weight update rule is W = W + learning_rate × error × X. What is "error" in this formula?',
      questionAr: 'قاعدة تحديث أوزان البيرسيبترون هي W = W + learning_rate × error × X. ما هو "error" في هذه الصيغة؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'The MSE of all samples', isCorrect: false },
        { id: 'b', text: 'y_true − y_predicted for the misclassified sample', isCorrect: true },
        { id: 'c', text: 'The sigmoid derivative', isCorrect: false },
        { id: 'd', text: 'The total number of wrong predictions', isCorrect: false },
      ],
    },
  ],

  written: [],
};
