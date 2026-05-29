export const LECTURE = {
  subjectId: 'neural-networks',
  number: 8,
  title: 'Section 2: PyTorch Basics & CNN Labs',
  titleAr: 'قسم 2: أساسيات PyTorch ومختبرات CNN',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2>🔹 Introduction to PyTorch</h2>
<p>PyTorch is a powerful, open-source deep learning framework. Its core data structure is the <strong>Tensor</strong>, which is similar to a NumPy array but can be processed on a GPU for extreme speed.</p>

<div class="code-block">
<span class="keyword">import</span> torch
<span class="keyword">import</span> torch.nn <span class="keyword">as</span> nn
<span class="keyword">import</span> torch.optim <span class="keyword">as</span> optim

<span class="comment"># Creating Tensors</span>
x = torch.tensor([1.0, 2.0, 3.0])
W = torch.randn(3, 5, requires_grad=True) <span class="comment"># Tracks gradients for training</span>
</div>

<h2>🔹 Building a Neural Network (nn.Module)</h2>
<p>In PyTorch, we define networks by subclassing <code>nn.Module</code>. We define layers in <code>__init__</code> and the data flow in <code>forward</code>.</p>

<div class="code-block">
<span class="keyword">class</span> MyNetwork(nn.Module):
    <span class="keyword">def</span> __init__(self, in_features, hidden_size):
        super().__init__()
        self.hidden = nn.Linear(in_features, hidden_size)
        self.output = nn.Linear(hidden_size, 1)
        self.relu = nn.ReLU()
        self.sigmoid = nn.Sigmoid()

    <span class="keyword">def</span> forward(self, x):
        x = self.relu(self.hidden(x))
        x = self.sigmoid(self.output(x))
        <span class="keyword">return</span> x
</div>

<h2>🔹 The Training Loop</h2>
<p>The standard training process in PyTorch follows 5 strict steps:</p>
<ol>
  <li><strong>Forward Pass:</strong> Pass data through the model.</li>
  <li><strong>Compute Loss:</strong> Compare prediction with target.</li>
  <li><strong>Zero Grads:</strong> Clear old gradients from the optimizer.</li>
  <li><strong>Backward Pass:</strong> Calculate gradients using <code>loss.backward()</code>.</li>
  <li><strong>Update:</strong> Step the optimizer to change weights.</li>
</ol>

<div class="code-block">
criterion = nn.BCELoss() <span class="comment"># Binary Cross Entropy</span>
optimizer = optim.SGD(model.parameters(), lr=0.01)

<span class="comment"># Training step</span>
outputs = model(inputs)
loss = criterion(outputs, targets)
optimizer.zero_grad()
loss.backward()
optimizer.step()
</div>

<h2>🔹 Convolutional Neural Networks (CNN) in PyTorch</h2>
<p>For image data, we use <code>nn.Conv2d</code> for spatial feature extraction and <code>nn.MaxPool2d</code> for downsampling.</p>

<div class="code-block">
<span class="keyword">class</span> SimpleCNN(nn.Module):
    <span class="keyword">def</span> __init__(self):
        super().__init__()
        <span class="comment"># 1 input channel (Grayscale), 16 filters, 3x3 kernel</span>
        self.conv1 = nn.Conv2d(1, 16, kernel_size=3)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc = nn.Linear(16 * 13 * 13, 10) <span class="comment"># Flattened features to classes</span>

    <span class="keyword">def</span> forward(self, x):
        x = self.pool(torch.relu(self.conv1(x)))
        x = x.view(-1, 16 * 13 * 13) <span class="comment"># Flatten</span>
        x = self.fc(x)
        <span class="keyword">return</span> x
</div>
        `,
        bodyAr: `
<h2>🔹 مقدمة في PyTorch</h2>
<p>إطار عمل PyTorch هو أحد أشهر الأدوات للتعلم العميق. يعتمد بشكل أساسي على <strong>الموترات (Tensors)</strong> التي تشبه مصفوفات NumPy ولكنها تدعم الحساب على كروت الشاشة (GPU).</p>

<h2>🔹 بناء شبكة عصبية</h2>
<p>نقوم بتعريف الطبقات في دالة <code>__init__</code> ونحدد مسار البيانات في دالة <code>forward</code>.</p>

<h2>🔹 حلقة التدريب (Training Loop)</h2>
<p>تتكون عملية التدريب من 5 خطوات: التمرير الأمامي ← حساب الخسارة ← تصغير التدرجات ← التمرير الخلفي ← تحديث الأوزان.</p>

<h2>🔹 الشبكات التلافيفية (CNN)</h2>
<p>نستخدم <code>nn.Conv2d</code> لاستخراج الميزات المكانية من الصور و <code>nn.MaxPool2d</code> لتقليل أبعاد الصورة مع الحفاظ على أهم الميزات.</p>
        `,
      },
    },
  ],

  summary: {
    points: [
      'PyTorch Tensors support automatic differentiation via Autograd.',
      'Models are built using nn.Module and sequential layers like nn.Linear or nn.Conv2d.',
      'Optimizers like SGD or Adam handle the weight update logic.',
      'Loss functions (Criterions) measure the error for classification or regression.',
      'CNNs use convolutional layers to detect patterns like edges, textures, and shapes.',
    ],
    pointsAr: [
      'تدعم موترات PyTorch الاشتقاق التلقائي (Autograd).',
      'يتم بناء النماذج باستخدام nn.Module والطبقات المتتالية.',
      'تتحكم أدوات التحسين (Optimizers) مثل SGD في منطق تحديث الأوزان.',
      'دوال الخسارة تقيس مقدار الخطأ في التصنيف أو الانحدار.',
      'تستخدم الـ CNN طبقات التلافيف لاكتشاف الأنماط في الصور مثل الحواف والأشكال.',
    ],
  },

  mcq: [
    {
      id: 'nn-l8-q1',
      question: 'Which method in PyTorch calculates the gradients of the loss with respect to parameters?',
      questionAr: 'ما هي الدالة في PyTorch التي تحسب تدرجات الخسارة بالنسبة للمعاملات؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'optimizer.step()', isCorrect: false },
        { id: 'b', text: 'loss.backward()', isCorrect: true },
        { id: 'c', text: 'model.forward()', isCorrect: false },
        { id: 'd', text: 'torch.grad()', isCorrect: false },
      ],
    },
    {
      id: 'nn-l8-q2',
      question: 'What is the purpose of optimizer.zero_grad()?',
      questionAr: 'ما الغرض من دالة optimizer.zero_grad()؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'To reset the model weights to zero', isCorrect: false },
        { id: 'b', text: 'To clear old gradients from the previous training step', isCorrect: true },
        { id: 'c', text: 'To set the learning rate to zero', isCorrect: false },
        { id: 'd', text: 'To initialize the optimizer', isCorrect: false },
      ],
    },
  ],

  written: [
    {
      id: 'nn-l8-w1',
      question: 'Explain the difference between nn.Linear and nn.Conv2d.',
      questionAr: 'اشرح الفرق بين nn.Linear و nn.Conv2d.',
      modelAnswer: 'nn.Linear is a fully connected layer where every input connects to every output. nn.Conv2d uses kernels to scan over spatial data (images), sharing weights and preserving spatial hierarchy.',
      modelAnswerAr: 'nn.Linear هي طبقة متصلة بالكامل، بينما تستخدم nn.Conv2d فلاتر للمسح فوق الصور واستخراج الميزات المكانية.',
    },
  ],
};
