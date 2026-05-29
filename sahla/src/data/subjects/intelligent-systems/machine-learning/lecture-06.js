export const LECTURE = {
  subjectId: 'machine-learning',
  number: 6,
  title: 'Section 1: Intro to ML — Practical Review',
  titleAr: 'القسم 1: مقدمة في تعلم الآلة - مراجعة المختبر العملي',
  
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Section 1: ML Foundations & Workflow Review</h2>
<p>This practical lab formally reviews ML structures and logistics, diving deep into mathematical model evaluations and the precise steps of the Machine Learning lifecycle.</p>

<h3>📊 Types of ML & Logistics</h3>
<p>In this course, assignments require strictly rigidly formed <strong>groups of 3</strong>. Absences directly penalize grades.</p>
<table class="styled-table">
  <thead><tr><th>Type</th><th>Sub-type</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Supervised</strong></td><td>Classification (Discrete)</td><td>Building a filter for Email Spam vs Ham. Predicting loan defaults natively.</td></tr>
    <tr><td><strong>Supervised</strong></td><td>Regression (Continuous)</td><td>Predicting the exact fluid dollar price of a house.</td></tr>
    <tr><td><strong>Unsupervised</strong></td><td>Clustering (Unlabeled)</td><td>Segmenting a grocery store's customers blindly into clusters based on purchasing behavior natively.</td></tr>
  </tbody>
</table>

<h3>⚙️ The ML Training Workflow & Validation Data</h3>
<p>During training, an algorithm seeks to strictly minimize the Loss Function ($\\text{Training Error} = \\sum \\text{loss}(y_i, f(x_i))$). However, focusing only on Training Loss causes immense Overfitting.</p>
<p>The <strong>Validation Set</strong> is used dynamically during training to explicitly monitor performance on unseen data. If validation loss plateaus, we reduce the Learning Rate. If validation loss begins to violently climb while training loss drops, we trigger <strong>Early Stopping</strong>. The best Hyperparameters are specifically chosen based on validation trends.</p>

<h3>⚖️ Regularization & K-Fold Cross Validation</h3>
<p>To mathematically combat Overfitting (where a model gets way too complex copying noise), we apply <strong>Regularization</strong>. We aggressively tell the algorithm to minimize:</p>
$$ \\sum \\text{loss}(y_i, f(x_i))  +  C \\times R(f) $$
<p>The $C \\times R(f)$ term explicitly measures and <strong>penalizes large weights</strong>, forcing the model to favor mathematically simpler structures inherently.</p>
<p><strong>K-Fold Cross Validation</strong> natively splits data into $K$ equal parts, rotating the validation fold exactly $K$ times and averaging the final errors to ensure every single data point is validated. This is drastically superior to a single train/test split locally.</p>

<h3>📏 Evaluation Metrics: Macro vs Micro</h3>
<p>When analyzing a Confusion Matrix across multi-class scenarios, you must explicitly choose how to average your Precision and Recall:</p>
<ul>
  <li><strong>Macro Averaging:</strong> Calculates the raw Precision of Class A, Class B, and Class C completely independently, and then computes the simple mathematical average $\\frac{P_A + P_B + P_C}{3}$. This treats all classes entirely equally, regardless if one class is massive and the other has only 2 samples natively.</li>
  <li><strong>Micro Averaging:</strong> Globally pools every single True Positive, False Positive, and False Negative from all classes into one massive pile, and calculates one global precision natively. This heavily favors the majority class structurally.</li>
</ul>

<div class="callout callout-info"><span class="callout-icon">📄</span><span><strong>Lab Handouts:</strong> <a href="/subjects/machine-learning/sections/Section1-Introduction to Machine Learning (1).pptx" target="_blank" class="pdf-link">Download Section 1 PPTX</a> | <a href="/subjects/machine-learning/sections/section 1.pdf" target="_blank" class="pdf-link">Download Section 1 PDF</a></span></div>`,
        bodyAr: `<h2>🔹 القسم العملي 1: مراجعة سير العمل ودورة التعلم الآلي</h2>
<p>يقوم هذا المختبر العملي بمراجعة أساسيات المقاييس والمعايير ودورات حياة التعلم الآلي والرياضيات.</p>

<h3>📊 أنواع التعلم الآلي</h3>
<p>يوجد نوعين أساسيين: خاضع للإشراف (تصنيف للنواتج المتقطعة وانحدار للمتصلة)، وغير خاضع للإشراف (التجميع).</p>

<h3>⚙️ مجموعة بيانات التحقق (Validation Set)</h3>
<p>أثناء التدريب، تحاول الخوارزمية تقليل دالة الخسارة. ومع ذلك، يؤدي التركيز على خسارة التدريب فقط إلى حدوث التجهيز الزائد (Overfitting). نستخدم بيانات التحقق لغرض الإيقاف المبكر (Early Stopping) وضبط المعلمات الإعدادية (Hyperparameters).</p>

<h3>⚖️ التنظيم والتحقق المتقاطع (Regularization & K-Fold)</h3>
<p>لتجنب حفظ البيانات بشكل مفرط، نضيف قيماً لمعاقبة الأوزان الكبرى. والـ K-fold يسمح لنا باستخدام كل نقاط وعينات الداتا كبيانات تحقق بالتناوب، مما يعطي كفاءة أعلى من التقسيم المباشر (مثل 80-20).</p>

<h3>📏 مقاييس التقييم: Macro مقابل Micro</h3>
<p>المتوسط Macro يعامل كل الفئات (كبيرة او صغيرة العدد) بشكل متساوي القيمة تماماً، بينما Micro يجمع النتائج كلها في كومة واحدة مما يميل كفة الحسابات للفئة الغالبة عدداً بالطبيعة.</p>`
      }
    }
  ],
  
  summary: {
    points: [
      "Validation sets dynamically control hyperparameter tuning and Early Stopping.",
      "Loss Function explicitly minimizes deviations globally natively.",
      "Regularization appends C × R(f) to penalize massive parameter weights directly.",
      "K-Fold guarantees every data point serves as a validation target exactly once.",
      "Macro averging treats all classes structurally uniformly. Micro dynamically pools all raw hits together favoring large classes."
    ],
    pointsAr: [
      "مجموعة بيانات التحقق (Validation) تستخدم لضبط المعلمات والإيقاف المبكر.",
      "دالة الخسارة تُقلل الفروقات عالمياً لتجهيز النموذج.",
      "يُضاف التنظيم (Regularization) كقيمة تحايد للحد من تضخم الأوزان واضطراب الحدود.",
      "نظام (K-Fold) يسمح باختبار كل جزء من قاعدة البيانات ومقاطعته للتجربة الفردية مرة واحدة كاملة.",
      "المعيار للـ Macro Averaging يحافظ على المعاملة المثلى الموحدة لكل كلاس فئة, اما للـ Micro Averaging فهو دمج لكل إحداثيات الدقة مما يحيز الغالب منها بضراوة."
    ]
  },

  mcq: [
    {
      id: 'ml-l6-q1',
      question: "Predicting exactly how many milliseconds it will take a server to crash is an example of:",
      questionAr: "التوقع بالتدقيق الزمني كم وحدة ميلي ثانية سيتطلبها خادم رئيسي حتى يصل لانهياره ويسقط من الخوادم، من الأمثلة المعطاة على :",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Binary Classification natively', isCorrect: false },
        { id: 'b', text: 'K-Means Clustering', isCorrect: false },
        { id: 'c', text: 'Linear Regression natively strictly', isCorrect: true },
        { id: 'd', text: 'Bayesian Networks', isCorrect: false }
      ]
    },
    {
      id: 'ml-l6-q2',
      question: "When Netflix attempts to cluster its users into 10 unknown viewing-habit groups without labeling them first, it is running:",
      questionAr: "تطبيق نتفلكس عندما يسعى لتقسيم مشتركيه وحاضنتهم إلى فريقات من طبائع وسلوكيات مشاهدة تتألف من (عشر اقسام) غير معروفة ولا تصنف مسبقاً فهو بالتأكيد ينفذ:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Regression', isCorrect: false },
        { id: 'b', text: 'Supervised Learning exclusively', isCorrect: false },
        { id: 'c', text: 'Unsupervised Learning aggressively natively', isCorrect: true },
        { id: 'd', text: 'Gradient Descent', isCorrect: false }
      ]
    },
    {
      id: 'ml-l6-q3',
      question: "Classification algorithms natively require:",
      questionAr: "بحسب الأصول المعيارية وتطابقها، خوارزميات التصنيف والفرز تتطلب تماماً:",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'Unlabeled data natively exclusively', isCorrect: false },
        { id: 'b', text: 'Labeled training data showing explicit answers historically globally', isCorrect: true },
        { id: 'c', text: 'No data, just math natively', isCorrect: false },
        { id: 'd', text: 'Images exclusively natively', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'ml-l6-w1',
      question: "Compare Classification and Regression explicitly dynamically.",
      questionAr: "قارن بمقاييس دقيقة تفصيلية بين تقنيات (التصنيف) و (تحليل الانحدار) كأنماط التعلم.",
      modelAnswer: "Classification maps inputs to rigid discrete categorizations (Like true/false, dog/cat/bird). Regression maps inputs onto completely fluid continuous mathematical curves outputting numbers like 400.12 or 9200.",
      modelAnswerAr: "خوارزمية الانحدار تُرجع النتائج بتأكيد دالة تقاربية ذات تدفق سائل تماماً (Continuous) لأرقام مثل 19.34 او لمدى عمري بين. وبالمقابل، يستخرج ويحدد التصنيف نواتج قاطعة ومنقطعة (Discrete) غير مستمرة ( مثل مريض/متعافي او كلب/قطة أو 0 / 1)."
    }
  ]
};
