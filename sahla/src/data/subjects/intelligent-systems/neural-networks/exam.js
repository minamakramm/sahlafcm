export const EXAM = {
  subjectId: 'neural-networks',
  title: 'Neural Networks Final Assessment',
  titleAr: 'التقييم الشامل والنهائي - الشبكات العصبية',
  timeLimitMinutes: 120,
  duration: 7200,
  mcqMarks: 100,
  writtenMarks: 50,
  passPercentage: 50,

  parts: [
    {
      title: 'Architectures & Foundations',
      titleAr: 'البنيات الأساسية والشبكات الأولية',
      description: 'Understanding linear separability, activation curves, and multi-layer logic.',
      descriptionAr: 'معرفة القابلية للفصل الخطي، منحنيات التنشيط، ومنطق الطبقات المتعددة.'
    },
    {
      title: 'Optimization & Iterations',
      titleAr: 'التحسينات الحاسوبية والتكرارات',
      description: 'Mastering gradient descents, Hebbian paradigms, and step-size regressions.',
      descriptionAr: 'احتراف منحدرات الاشتقاق، المنهج الهيبي، والانحدارات التجريبية.'
    }
  ],

  mcq: [
    {
      id: 'nn-exam-q1',
      question: "Which activation function mathematically bounds standard values explicitly from -1 to 1 uniquely purely?",
      questionAr: "أيُ دوال التنشيط تُحجم وتربط المدخلات بشكل حاسم وحصري كلياً في نطاق من المخرجات محصور من -1 إلى +1؟",
      answers: [
        { id: 'a', text: "Sigmoid natively", isCorrect: false },
        { id: 'b', text: "Tanh intrinsically", isCorrect: true },
        { id: 'c', text: "ReLU actively", isCorrect: false },
        { id: 'd', text: "PReLU geometrically", isCorrect: false }
      ]
    },
    {
      id: 'nn-exam-q2',
      question: "What mathematically solves the 'Dying ReLU' anomaly actively logically?",
      questionAr: "ما هو الحل العملي الهندسي والذي استعان لحل وتسوية شذوذ كارثة 'موت واحتضار ReLU'؟",
      answers: [
        { id: 'a', text: "Replacing it identically with standard Hebb rules", isCorrect: false },
        { id: 'b', text: "Setting the negative bound exclusively to equal 0 exactly inherently", isCorrect: false },
        { id: 'c', text: "Injecting a learnable 'a' slope parameter explicitly for negative bounds natively (PReLU)", isCorrect: true },
        { id: 'd', text: "Squaring inputs inherently unconditionally", isCorrect: false }
      ]
    },
    {
      id: 'nn-exam-q3',
      question: "A Hebb network is fed X=[1,-1] and target Y=1. The vector coordinate update mathematically added is exactly:",
      questionAr: "عُرضت لشبكة (Hebb) إحداثيات ومسارات [X=[1,-1 والهدف الرئيسي كان Y = 1. ماهو مقدار التحديث الذي اُضيف لمتجه الإحداثيات الجبرية؟",
      answers: [
        { id: 'a', text: "[1, 1] geometrically", isCorrect: false },
        { id: 'b', text: "[1, -1] exclusively directly", isCorrect: true },
        { id: 'c', text: "[0, 0] inherently", isCorrect: false },
        { id: 'd', text: "[-1, 1] strictly fundamentally", isCorrect: false }
      ]
    },
    {
      id: 'nn-exam-q4',
      question: "If a Perceptron yields mathematical Y_in = 0.5, and θ=1. What is the explicit bipolar step output natively?",
      questionAr: "حال أنتج واستدرجت معادلات البيرسبترون حاصلا لـ ( Y_in = 0.5) وعتبة (θ=1)، ما هو الناتج المنبثق لدالة الخطوة ثنائية القطب (bipolar step) حصراً؟",
      answers: [
        { id: 'a', text: "1", isCorrect: false },
        { id: 'b', text: "0 exclusively natively", isCorrect: true },
        { id: 'c', text: "-1 inherently", isCorrect: false },
        { id: 'd', text: "Infinity", isCorrect: false }
      ]
    },
    {
      id: 'nn-exam-q5',
      question: "What is the absolute true mathematical consequence of building a Neural Network mathematically composed natively of 500 deep completely linear layers natively without activation curves?",
      questionAr: "ماهي الحتمية المطلقة والعواقب الجبرية الأكيدة الناجمة من بناء شبكة مدمجة من 500 طبقة خطية عميقة ولا تملك دوال تنشيط (Activation Curves) إطلاقًا؟",
      answers: [
        { id: 'a', text: "It requires quantum calculation globally inherently", isCorrect: false },
        { id: 'b', text: "It perfectly mathematically collapses identically into a single completely equivalent fully linear Perceptron natively", isCorrect: true },
        { id: 'c', text: "It loops dynamically causing divergent geometric tangents instantly", isCorrect: false },
        { id: 'd', text: "It dynamically tracks XOR exclusively gracefully", isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'nn-exam-w1',
      question: "Explain heavily why Multi-Layered configurations strictly demand Non-Linear Activation formulas natively.",
      questionAr: "علل بشهادة ومحاذاة واسعة لماذا تشترط الشبكات المتعددة العميقة الاستعانة القطعية بوظائف وتنشيط لا خطية(Non-Linear Activation) للترابط بسلام؟",
      modelAnswer: "Because linear matrices strictly physically distribute. Without non-linear activation curve warping, W3(W2(W1x)) strictly resolves mathematically geometrically directly into a single W_final natively, rendering depth absolutely useless explicitly.",
      modelAnswerAr: "لأن بطبيعة المصفوفات الخطية تتلائم وتقاس بخاصية التوزيع بالضرب الجبري البحت، فتراكماتها كـ W3(W2(W1x)) ستتوالد وتهتلك وتصبح مصفوفة (W) أحادية جديدة فحسب متجاهلة أي عمق. أما الوظائف المنفرجة اللاخطية تكبس وتلوي الانحدارات لتكسر وتتجاوز خصائص التوزيع مما يورث الشبكة عمقاً لا ينهار."
    },
    {
      id: 'nn-exam-w2',
      question: "Solve mathematically the precise Hebb update formula logic fundamentally using a Bipolar logic paradigm.",
      questionAr: "اوضح بالمنهجية الفذة وحل الدلالة الجبرية لتحديث المعادلات العصبية بنظرية (Hebb update) متخذا النهج والبارادايم القطبي الصارم (Bipolar).",
      modelAnswer: "Hebbian updates purely unconditionally track correlation natively via W = W + XY directly inherently. If Input matches Target, Weights strengthen uniformly. No error-checking is calculated exclusively.",
      modelAnswerAr: "تنهج أصول الهيبيان تحديث ارتباطي وتكاملي متتابع بمعادلة : W = W + XY. وبطبيعة الحال إذا طابق وتعارض مع المدخلات تنعكس الأوزان وتتصلب بالإجماع الموحد. لا يخضع الهيبيان بتاتاً لمقاس نسبة وحسابات الخطأ ليحدث القيم."
    },
    {
      id: 'nn-exam-w3',
      question: "Illustrate exactly how Exact Line Search completely differs globally from predetermined Step Size Decay methods.",
      questionAr: "عاين بشكل دقيق تباين وتقاطع خصائص 'البحث الخطي العميق Exact Line Search' تجاه الأساليب المعدة مسبقاً لانكماش حجم الخطوات.",
      modelAnswer: "Predetermined methods shrink Alpha blindly universally. Line search actively substitutes the gradient projection equation purely directly into the overarching Cost function and mathematically locates the exact derivative minimum instantly flawlessly.",
      modelAnswerAr: "تقر الأساليب الثابتة المعدة سلفا بخفض وتهميش الفا كمعامل أعمى مع مرور الفترات. في المقابل يعمل البحث الخطي بزج مسارات الانحدار بشكل مباشر بالدالة ويعوضها ويحسب الميل المشتق لإيجاد الحجم الفعلي والأمثل للخطوة فورياً بلا عيوب رياضية."
    }
  ]
};
