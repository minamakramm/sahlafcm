export const CHEATSHEET = [
  {
    id: 'es-ref',
    category: 'Expert Systems (ES)',
    categoryAr: 'النظم الخبيرة (ES)',
    icon: 'Brain',
    items: [
      { 
        label: '4 Core Components', 
        labelAr: 'المكونات الـ 4 الأساسية', 
        content: 'Knowledge Base (KB), Inference Engine (IE), User Interface (UI), Explanation Facility (EF).' 
      },
      { 
        label: 'Forward Chaining', 
        labelAr: 'التسلسل الأمامي', 
        content: 'Fact-driven / Data-driven. Uses bottom-up reasoning (Starting Facts $\to$ Goal).' 
      },
      { 
        label: 'Backward Chaining', 
        labelAr: 'التسلسل الخلفي', 
        content: 'Goal-driven. Uses top-down reasoning (Hypothesis $\to$ Required Facts).' 
      },
      { 
        label: 'Conflict Resolution', 
        labelAr: 'حل التعارض', 
        content: 'Order (sequence), Recency (newest fact), Specificity (most rules/conditions).' 
      },
      { 
        label: 'Major Limitation', 
        labelAr: 'أبرز القيود', 
        content: 'Hidden errors and high maintenance costs; difficulty in tracing large rule bases.' 
      }
    ]
  },
  {
    id: 'cf-ref',
    category: 'Certainty Factors (CF)',
    categoryAr: 'عوامل اليقين (CF)',
    icon: 'Ruler',
    items: [
      { 
        label: 'Primary Goal', 
        labelAr: 'الهدف الأساسي', 
        content: 'Quantify and handle unmeasured uncertainty or user confidence in the range [0, 1].' 
      },
      { 
        label: 'Combined CF Formula', 
        labelAr: 'صيغة اليقين المجمع', 
        content: '$CF_{user} \times CF_{expert}$' 
      },
      { 
        label: 'Final Disease Score', 
        labelAr: 'الدرجة النهائية للمرض', 
        content: '$\\frac{\\sum (\\text{Combined CFs})}{\\text{Matched Symptoms Count}}$'       },
      { 
        label: 'Fuzzy Logic vs CF', 
        labelAr: 'المنطق الضبابي مقابل CF', 
        content: 'Fuzzy uses categories (mild, severe, moderate) while CF uses raw numerical confidence (e.g., 0.8).' 
      }
    ]
  },
  {
    id: 'cbr-ref',
    category: 'Case-Based Reasoning (CBR)',
    categoryAr: 'الاستدلال المبني على الحالات (CBR)',
    icon: 'Search',
    items: [
      { 
        label: "The 4 R's Cycle", 
        labelAr: 'دورة الـ 4 R\'s', 
        content: 'Retrieve $\to$ Reuse $\to$ Revise $\to$ Retain (The Learning Step).' 
      },
      { 
        label: 'Weighted Similarity', 
        labelAr: 'التشابه المرجح', 
        content: '$\\frac{1}{\\sum W_i} \\times \\sum(W_i \\times Sim_i)$'       },
      { 
        label: 'Transformational Adaptation', 
        labelAr: 'التكييف التحويلي', 
        content: 'Directly modify the past solution itself using rules to fit the current problem.' 
      },
      { 
        label: 'Derivational Adaptation', 
        labelAr: 'التكييف الاشتقاقي', 
        content: 'Reuse the method or process used to reach the solution, rather than the solution itself.' 
      }
    ]
  },
  {
    id: 'nlp-ref',
    category: 'NLP & Implementations',
    categoryAr: 'معالجة اللغات الطبيعية والتنفيذ',
    icon: 'MessageSquare',
    items: [
      { 
        label: 'Term Frequency (TF)', 
        labelAr: 'تردد الكلمة (TF)', 
        content: '$\\frac{\\text{Term Count in Case}}{\\text{Total Terms in Case}}$'       },
      { 
        label: 'Inverse Doc Freq (IDF)', 
        labelAr: 'تردد الوثيقة العكسي (IDF)', 
        content: '$\\log(\\frac{\\text{Total Cases}}{\\text{Cases containing term}})$'       },
      { 
        label: 'Cosine Similarity', 
        labelAr: 'تشابه جيب التمام', 
        content: 'Mathematical vector matching used to compare unstructured text symptoms.' 
      },
      { 
        label: 'Storage Strategy', 
        labelAr: 'استراتيجية التخزين', 
        content: 'SQLite databases are typically used to store case vectors, metadata, and past confirmed solutions for continuous learning.' 
      }
    ]
  },
  {
    id: 'agents-ref',
    category: 'Intelligent Agents',
    categoryAr: 'الوكلاء الأذكياء',
    icon: 'Bot',
    items: [
      { 
        label: 'Core Definition', 
        labelAr: 'التعريف الأساسي', 
        content: 'Entity that perceives via sensors and acts via actuators.' 
      },
      { 
        label: 'Three Key Features', 
        labelAr: 'ثلاث خصائص رئيسية', 
        content: 'Reactive (immediate), Pro-active (initiative), Social (collaborative).' 
      },
      { 
        label: 'Agent Types', 
        labelAr: 'أنواع الوكلاء', 
        content: 'Goal-Based, Utility-Based, Learning, Mobile, Interface, Multi-Agent.' 
      }
    ]
  },
  {
    id: 'nb-ref',
    category: 'Machine Learning (Naive Bayes)',
    categoryAr: 'التعلم الآلي (نايف بيز)',
    icon: 'Database',
    items: [
      { 
        label: 'Naive Bayes Algorithm', 
        labelAr: 'خوارزمية نايف بيز', 
        content: 'Probabilistic classifier based on Bayes\' theorem with strong independence assumptions.' 
      },
      { 
        label: 'ML Workflow', 
        labelAr: 'سير عمل التعلم الآلي', 
        content: 'Load Data $\to$ Preprocess $\to$ Split (Train/Test) $\to$ Train $\to$ Evaluate.' 
      },
      { 
        label: 'Streamlit', 
        labelAr: 'ستريم ليت', 
        content: 'Python library for building interactive web apps for data science projects quickly.' 
      }
    ]
  }
];
