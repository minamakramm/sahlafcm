export const CHEATSHEET = [
  {
    category: "Lecture 1: Introduction & Reasoning",
    categoryAr: "المحاضرة 1: المقدمة والتقنيات",
    icon: "Brain",
    items: [
      {
        label: "Smart System Def",
        labelAr: "تعريف النظام الذكي",
        content: "Integrated system combining <b>sensing, data processing, decision-making, and actuation</b> to operate autonomously in dynamic environments."
      },
      {
        label: "Core Reasoning",
        labelAr: "أساليب الاستنتاج",
        content: "<b>Deduction:</b> Fact A + Rule (A→B) = Fact B (Certain).<br/><b>Induction:</b> Specific cases → General rule (Probabilistic/ML).<br/><b>Abduction:</b> Observe effect → Infer likely cause (Diagnostic)."
      },
      {
        label: "Timeline",
        labelAr: "التسلسل الزمني",
        content: "1940s: Binary logs | 1950s: AI Term | 1970s: Expert Systems (MYCIN) | Modern: IoT, Big Data, Cloud Integration."
      }
    ]
  },
  {
    category: "Lecture 2: CI Foundations",
    categoryAr: "المحاضرة 2: أسس الذكاء الحاسوبي",
    icon: "Ruler",
    items: [
      {
        label: "CI Paradigms",
        labelAr: "نماذج الذكاء الحاسوبي",
        content: "<b>ANN:</b> Brain-inspired, learning patterns from data.<br/><b>Fuzzy Logic:</b> Degrees of truth [0,1], handles vagueness.<br/><b>EC (GA/PSO):</b> Population-based global optimization."
      },
      {
        label: "Learning vs Adaptation",
        labelAr: "التعلم ضد التكيف",
        content: "<b>Learning:</b> Extract historical patterns (offline).<br/><b>Adaptation:</b> Real-time parameter adjustment to environment changes."
      }
    ]
  },
  {
    category: "Lecture 3: Architecture & Sensors",
    categoryAr: "المحاضرة 3: الهيكلية والمستشعرات",
    icon: "Network",
    items: [
      {
        label: "4-Layer Model",
        labelAr: "النموذج رباعي الطبقات",
        content: "<b>Perception:</b> Sensing (Physical to Digital).<br/><b>Communication:</b> Data transfer (Wi-Fi, 5G).<br/><b>Intelligence:</b> Processing (CI/ML).<br/><b>Application:</b> Services & UI."
      },
      {
        label: "Sensors & Actuators",
        labelAr: "المستشعرات والمشغلات",
        content: "<b>Sensors:</b> Measure physical energy (Temp, Light, GPS).<br/><b>Actuators:</b> Execute physical actions (Motors, Valves, LEDs)."
      },
      {
        label: "Data Quality",
        labelAr: "جودة البيانات",
        content: "<b>Noise:</b> Random variations.<br/><b>Calibration:</b> Adjusting to match a reference standard."
      }
    ]
  },
  {
    category: "Lecture 4: Agents & Environments",
    categoryAr: "المحاضرة 4: الوكلاء والبيئات",
    icon: "Activity",
    items: [
      {
        label: "AI Agent",
        labelAr: "الوكيل الذكي",
        content: "Entity that <b>Perceives → Decides → Acts</b> to maximize expected performance. Agent = Architecture + Program."
      },
      {
        label: "PEAS",
        labelAr: "بيئة المهمة",
        content: "<b>Performance:</b> Success metrics.<br/><b>Environment:</b> External world.<br/><b>Actuators:</b> Physical tools.<br/><b>Sensors:</b> Input tools."
      },
      {
        label: "Environment Types",
        labelAr: "أنواع البيئات",
        content: "Fully (Chess) vs Partially (Medical) Observable | Deterministic vs Stochastic | Static vs Dynamic."
      }
    ]
  },
  {
    category: "Lecture 5: ML & Sensor Fusion",
    categoryAr: "المحاضرة 5: تعلم الآلة ودمج البيانات",
    icon: "Database",
    items: [
      {
        label: "Machine Learning",
        labelAr: "تعلم الآلة",
        content: "<b>Supervised:</b> Learning from labels (Regression/Classification).<br/><b>Unsupervised:</b> Finding patterns (Clustering).<br/><b>Reinforcement:</b> Learning via rewards."
      },
      {
        label: "Sensor Fusion",
        labelAr: "دمج البيانات",
        content: "<b>Low-level:</b> Raw data (Images).<br/><b>Mid-level:</b> Features (Edge detected).<br/><b>High-level:</b> Decisions (Obstacle yes/no)."
      }
    ]
  },
  {
    category: "Lecture 6: Applications & Ethics",
    categoryAr: "المحاضرة 6: التطبيقات والأخلاقيات",
    icon: "Lightbulb",
    items: [
      {
        label: "Domains",
        labelAr: "مجالات التطبيق",
        content: "Smart City (Grids/V2X) | Smart Healthcare (MRI/Monitoring) | Smart Grid (Renewables)."
      },
      {
        label: "Ethics & Safety",
        labelAr: "الأخلاقيات والأمان",
        content: "<b>Privacy:</b> Data encryption.<br/><b>Bias:</b> Fairness in AI.<br/><b>Accountability:</b> Who is responsible? (Human-in-the-loop)."
      }
    ]
  }
];
