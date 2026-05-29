export const LECTURE = {
  subjectId: 'neural-networks',
  number: 5,
  title: 'Adaline & Madaline',
  titleAr: 'أدالاين ومادالاين (Adaline & Madaline)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>Introduction to Adaline</h2>
<p><strong>Adaline</strong> (Adaptive Linear Neuron) was developed by Widrow and Hoff in 1960. While it looks similar to the Perceptron, it has a fundamental difference: its weight updates are based on the <strong>linear output</strong> (the sum) before the activation function is applied.</p>

<div class="key-concepts">
  <div class="key-concept-item">LMS Rule: Also known as the Delta Rule or Widrow-Hoff Rule.</div>
  <div class="key-concept-item">Linear Activation: Learning happens on the continuous analog output (y_in).</div>
  <div class="key-concept-item">Optimization: It aims to minimize the Mean Squared Error (MSE) globally.</div>
</div>

<h2>The Delta Learning Rule (LMS)</h2>
<p>The update formula for Adaline is driven by the difference between the <strong>Target (T)</strong> and the <strong>Linear Output (y_in)</strong>:</p>
<p style="text-align: center;">$w_{new} = w_{old} + \alpha (T - y_{in}) X$</p>
<p>Where $\alpha$ is the learning rate. Because $(T - y_{in})$ is a real number (the error magnitude), the weights are adjusted more precisely than in the Perceptron rule.</p>

<h2>Adaline Architecture</h2>
<p>The output unit applies a hard-step activation function <em>only</em> during the testing/inference phase. During training, the feedback for updating weights comes directly from the summation node.</p>

<h2>Madaline Networks</h2>
<p><strong>Madaline</strong> (Many Adalines) is a multilayer architecture consisting of several Adalines in a hidden layer and a fixed logic unit (like AND, OR, or MAJORITY) to combine their outputs. This allows the network to solve <strong>non-linearly separable</strong> problems like XOR.</p>`,
        bodyAr: `<h2>مقدمة في الـ Adaline</h2>
<p><strong>Adaline</strong> (العصبون الخطي المتكيف) تم تطويره بواسطة Widrow و Hoff في عام 1960. ورغم شبهه بـ Perceptron، إلا أن تحديث الأوزان فيه يعتمد على <em>المخرج الخطي</em> قبل عملية التنشيط.</p>

<div class="key-concepts">
  <div class="key-concept-item">قاعدة LMS: تُعرف أيضاً بقاعدة Delta أو قاعدة Widrow-Hoff.</div>
  <div class="key-concept-item">التنشيط الخطي: التعلم يتم على ناتج الجمع التماثلي المستمر (y_in).</div>
  <div class="key-concept-item">التحسين: يهدف لتقليل متوسط الأخطاء المربعة (MSE) بشكل كامل.</div>
</div>

<h2>قاعدة تعلم دلتا (Delta Rule)</h2>
<p>صيغة التحديث في Adaline تعتمد على الفرق بين الهدف والقيمة المدخلة الموزونة:</p>
<p style="text-align: center;">$w_{new} = w_{old} + \alpha (T - y_{in}) x$</p>

<h2>بنية مادالاين (Madaline)</h2>
<p>تتكون شبكات <strong>Madaline</strong> من عدة عصبونات Adaline مرتبة في طبقات. تتيح هذه البنية حل المشكلات التي لا يمكن فصلها خطياً عن طريق دمج عدة حدود خطية في شكل معقد باستخدام بوابة منطقية ثابتة.</p>`,
      },
    },
  ],

  summary: {
    points: [
      'Adaline uses a linear activation function for weight updates, unlike the Perceptron.',
      'The learning rule for Adaline is called the Delta Rule or Least Mean Squares (LMS).',
      'Updates occur based on the continuous error (Target - Linear Input).',
      'The goal of Adaline is to minimize the Mean Squared Error (MSE) globally.',
      'Madaline consists of multiple Adalines and its architecture can solve non-linear problems.',
      'Madaline-I uses fixed logic gates (AND/OR) to combine hidden layer outputs.',
      'Unlike Perceptron, Adaline continues learning until MSE is minimized, even if all signs are correct.',
    ],
    pointsAr: [
      'يستخدم Adaline وظيفة تنشيط خطية لتحديث الأوزان، على عكس Perceptron.',
      'تُعرف قاعدة تعلم Adaline بقاعدة Delta أو أقل متوسط مربعات (LMS).',
      'يتم التحديث بناءً على الخطأ المستمر (الهدف - المدخل الخطي).',
      'هدف Adaline هو تقليل متوسط مربع الخطأ (MSE) بشكل عام.',
      'تتكون شبكة Madaline من عدة عصبونات Adaline ويمكنها حل المشكلات غير الخطية.',
      'تستخدم Madaline-I بوابات منطقية ثابتة (مثل AND/OR) لدمج مخارج الطبقة المخفية.',
      'خلافاً للبيرسبترون، يستمر Adaline في التعلم حتى يقلل MSE لأدنى درجة حتى لو كانت الإشارات صحيحة.',
    ],
  },

  mcq: [
    {
      id: 'nn-l5-q1',
      question: 'What is another name for the Adaline learning rule?',
      questionAr: 'ما هو الاسم الآخر لقاعدة تعلم Adaline؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Hebbian Rule', isCorrect: false },
        { id: 'b', text: 'Widrow-Hoff or Delta Rule', isCorrect: true },
        { id: 'c', text: 'Backpropagation', isCorrect: false },
        { id: 'd', text: 'Competitive Learning', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q2',
      question: 'Adaline updates weights based on the error of:',
      questionAr: 'يقوم Adaline بتحديث الأوزان بناءً على خطأ:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Final discrete output', isCorrect: false },
        { id: 'b', text: 'Linear sum (analog output) before activation', isCorrect: true },
        { id: 'c', text: 'Initial weights', isCorrect: false },
        { id: 'd', text: 'Target only', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q3',
      question: 'What does LMS in LMS rule stand for?',
      questionAr: 'إلى ماذا يرمز اختصار LMS في قاعدة الـ LMS؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Last Mean Sum', isCorrect: false },
        { id: 'b', text: 'Least Mean Squares', isCorrect: true },
        { id: 'c', text: 'Linear Matrix System', isCorrect: false },
        { id: 'd', text: 'Logical Minimal Search', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q4',
      question: 'Which network architecture can solve XOR using two Adalines and one OR gate?',
      questionAr: 'أي معمارية شبكة يمكنها حل XOR باستخدام عصبوني Adaline وبوابة OR؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Single Perceptron', isCorrect: false },
        { id: 'b', text: 'Madaline-I', isCorrect: true },
        { id: 'c', text: 'Hebbian network', isCorrect: false },
        { id: 'd', text: 'Simple Adaline', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q5',
      question: 'The error term in the Adaline update rule is:',
      questionAr: 'مصطلح الخطأ في قاعدة تحديث Adaline هو:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '(Target - Signed Output)', isCorrect: false },
        { id: 'b', text: '(Target - Linear Output y_in)', isCorrect: true },
        { id: 'c', text: 'Bias', isCorrect: false },
        { id: 'd', text: 'Weight squared', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q6',
      question: 'Compared to Perceptron, Adaline learning is generally:',
      questionAr: 'بالمقارنة مع البيرسبترون، يكون تعلم أدالاين عادةً:',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Faster and noisier', isCorrect: false },
        { id: 'b', text: 'Smoother and more precise because it uses continuous error', isCorrect: true },
        { id: 'c', text: 'Only possible for Binary inputs', isCorrect: false },
        { id: 'd', text: 'Exactly the same', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q7',
      question: 'What is the activation function typically used for final output in Adaline during inference?',
      questionAr: 'ما هي وظيفة التنشيط المستخدمة لإخراج النتائج النهائية في أدالاين؟',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Sigmoid', isCorrect: false },
        { id: 'b', text: 'Bipolar Step function', isCorrect: true },
        { id: 'c', text: 'Identity', isCorrect: false },
        { id: 'd', text: 'None', isCorrect: false },
      ],
    },
    {
      id: 'nn-l5-q8',
      question: 'Madaline stands for:',
      questionAr: 'مادالاين تعني:',
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Many Adaline', isCorrect: true },
        { id: 'b', text: 'Matrix Adaline', isCorrect: false },
        { id: 'c', text: 'Mathematical Adaline', isCorrect: false },
        { id: 'd', text: 'Modified Adaline', isCorrect: false },
      ],
    },
    {
        id: 'nn-l5-q9',
        question: 'Adaline tries to minimize which cost function?',
        questionAr: 'يحاول أدالاين تقليل أي دالة تكلفة؟',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Absolute Error', isCorrect: false },
          { id: 'b', text: 'Mean Squared Error (MSE)', isCorrect: true },
          { id: 'c', text: 'Cross-Entropy', isCorrect: false },
          { id: 'd', text: 'Bias Error', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q10',
        question: 'In Madaline-I, the weights of the output unit are:',
        questionAr: 'في شبكة مادالاين-1، تكون أوزان وحدة المخرج:',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'Learnable', isCorrect: false },
          { id: 'b', text: 'Fixed to achieve a logic function (like AND/OR)', isCorrect: true },
          { id: 'c', text: 'Always zero', isCorrect: false },
          { id: 'd', text: 'Random', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q11',
        question: 'If Target = 1 and net sum y_in = 0.8, the error in Adaline is:',
        questionAr: 'إذا كان الهدف 1 والمجموع 0.8، فإن الخطأ في أدالاين هو:',
        difficulty: 'easy',
        answers: [
          { id: 'a', text: '0', isCorrect: false },
          { id: 'b', text: '0.2', isCorrect: true },
          { id: 'c', text: '-0.2', isCorrect: false },
          { id: 'd', text: '1.8', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q12',
        question: 'If Target = 1 and net sum y_in = 1.0, what is the weight change for Adaline?',
        questionAr: 'إذا كان الهدف 1 والمجموع 1، ما هو تغير الوزن في أدالاين؟',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Increases weight', isCorrect: false },
          { id: 'b', text: 'No change (Error is zero)', isCorrect: true },
          { id: 'c', text: 'Decreases weight', isCorrect: false },
          { id: 'd', text: 'Resets weight', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q13',
        question: 'Widrow and Hoff presented Adaline in which year?',
        questionAr: 'في أي سنة قدم ويدرو وهوف البيرسبترون أدالاين؟',
        difficulty: 'easy',
        answers: [
          { id: 'a', text: '1949', isCorrect: false },
          { id: 'b', text: '1960', isCorrect: true },
          { id: 'c', text: '1986', isCorrect: false },
          { id: 'd', text: '1959', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q14',
        question: 'The learning rate α in Adaline must be kept small to:',
        questionAr: 'يجب أن يكون معدل التعلم α صغيراً في أدالاين لـ:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Speed up learning', isCorrect: false },
          { id: 'b', text: 'Ensure stability/avoid divergence of the LMS algorithm', isCorrect: true },
          { id: 'c', text: 'Increase MSE', isCorrect: false },
          { id: 'd', text: 'Avoid activation', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q15',
        question: 'Does Adaline use gradients?',
        questionAr: 'هل يستخدم أدالاين الاشتقاقات؟',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'No, only correlation', isCorrect: false },
          { id: 'b', text: 'Yes, it is essentially gradient descent on the quadratic error surface', isCorrect: true },
          { id: 'c', text: 'Only in Madaline', isCorrect: false },
          { id: 'd', text: 'Only with Sigmoid', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q16',
        question: 'In MRI (Madaline-I), the Adalines in hidden layer are called:',
        questionAr: 'في معمارية MRI، تُسمى وحدات أدالاين في الطبقة المخفية:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Output units', isCorrect: false },
          { id: 'b', text: 'MDUs (Multiple Decision Units)', isCorrect: true },
          { id: 'c', text: 'Biases', isCorrect: false },
          { id: 'd', text: 'Gates', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q17',
        question: 'Weight update in Adaline happens for EVERY sample?',
        questionAr: 'هل يتم تحديث الأوزان لكل عينة في أدالاين؟',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'No, only on error', isCorrect: false },
          { id: 'b', text: 'Yes, because (T - y_in) is almost never exactly zero', isCorrect: true },
          { id: 'c', text: 'Only after an epoch', isCorrect: false },
          { id: 'd', text: 'Randomly', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q18',
        question: 'Which logic can Madaline solve but Adaline cannot?',
        questionAr: 'أي وظيفة منطقية يحلها مادالاين ولا يستطيع أدالاين حلها؟',
        difficulty: 'easy',
        answers: [
          { id: 'a', text: 'AND', isCorrect: false },
          { id: 'b', text: 'XOR', isCorrect: true },
          { id: 'c', text: 'OR', isCorrect: false },
          { id: 'd', text: 'NOT', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q19',
        question: 'The LMS algorithm is based on:',
        questionAr: 'خوارزمية LMS تعتمد على:',
        difficulty: 'medium',
        answers: [
          { id: 'a', text: 'Squared Error', isCorrect: true },
          { id: 'b', text: 'Cubic Error', isCorrect: false },
          { id: 'c', text: 'Absolute Error', isCorrect: false },
          { id: 'd', text: 'Zero Error', isCorrect: false },
        ],
    },
    {
        id: 'nn-l5-q20',
        question: 'What is the characteristic of the MSE surface for Adaline?',
        questionAr: 'ما هي خاصية سطح MSE للـ Adaline؟',
        difficulty: 'hard',
        answers: [
          { id: 'a', text: 'Flat', isCorrect: false },
          { id: 'b', text: 'Convex bowl with a single local/global minimum', isCorrect: true },
          { id: 'c', text: 'Many peaks and valleys', isCorrect: false },
          { id: 'd', text: 'Oscillating', isCorrect: false },
        ],
    },
  ],

  written: [
    {
      id: 'nn-l5-w1',
      question: "Explain the main difference between Perceptron and Adaline learning rules.",
      questionAr: "اشرح الفرق الرئيسي بين قواعد تعلم Perceptron و Adaline.",
      modelAnswer: "In Perceptron, the weights update based on the final thresholded output (1 or -1). In Adaline, weights update based on the net input (y_in) before thresholding, making it a continuous error minimizer.",
      modelAnswerAr: "في Perceptron، يعتمد التحديث على المخرج النهائي بعد عملية التنشيط (1 أو -1). أما في Adaline، يعتمد التحديث على المدخل الخطي (y_in) قبل عملية التنشيط، مما يجعله مقللاً للخطأ المستمر.",
    },
    {
      id: 'nn-l5-w2',
      question: "What is a Madaline network and how does it solve non-linear problems?",
      questionAr: "ما هي شبكة Madaline وكيف تحل المشكلات غير الخطية؟",
      modelAnswer: "Madaline is a collection of Adalines. By combining multiple linear boundaries from different Adalines using a logic gate (like OR), it can partition space into non-linear regions.",
      modelAnswerAr: "شبكة Madaline هي مجموعة من عصبونات Adaline. من خلال دمج عدة حدود خطية من Adalines مختلفة باستخدام بوابة منطقية (مثل OR)، يمكنها تقسيم الفضاء إلى مناطق غير خطية.",
    },
    {
      id: 'nn-l5-w3',
      question: "State the Delta Rule formula and define each term.",
      questionAr: "اذكر قاعدة دلتا وعرف كل رمز فيها.",
      modelAnswer: "Δw = α (t - y_in) x. Where α is the learning rate, t is the target, y_in is the linear weighted sum (net input), and x is the input vector.",
      modelAnswerAr: "Δw = α (t - y_in) x. حيث α هو معدل التعلم، t هو الهدف، y_in هو المجموع الخطي، و x هو متجه المدخلات.",
    },
    {
      id: 'nn-l5-w4',
      question: "Explain why Adaline is more precise than Perceptron.",
      questionAr: "اشرح لماذا يعتبر أدالاين أكثر دقة من البيرسبترون.",
      modelAnswer: "Because Adaline uses the magnitude of the error (T - y_in). It knows how far it is from the target. Perceptron only knows IF it is wrong, but not by how much.",
      modelAnswerAr: "لأن أدالاين يستخدم مقدار الخطأ (T - y_in). هو يعرف مدى بعده عن الهدف. بينما يعرف البيرسبترون فقط إذا كان مخطئاً وليس مقدار الخطأ.",
    },
    {
      id: 'nn-l5-w5',
      question: "Describe the learning procedure for a Madaline network.",
      questionAr: "صف إجراء التعلم لشبكة مادالاين.",
      modelAnswer: "Common procedure is MRI: Hidden layer Adalines have learnable weights. The output unit has fixed weights configured as a logic function. When an error occurs at the output, the Adaline whose net input was closest to zero is chosen for update to change its sign and correct the overall logic.",
      modelAnswerAr: "الإجراء المعتاد هو MRI: عصبونات أدالاين في الطبقة المخفية لها أوزان قابلة للتعلم. وحدة المخرج لها أوزان ثابتة تعمل كدالة منطقية. عند حدوث خطأ، يتم اختيار العصبون الأقرب للصفر لتغيير إشارته وتصحيح المنطق العام.",
    },
  ],
}
