export const CHEATSHEET = [
  {
    id: 'kdd-ref',
    category: 'KDD & Process',
    categoryAr: 'عملية KDD والخطوات',
    icon: 'Search',
    items: [
      {
        label: '7 Core Steps',
        labelAr: 'الخطوات السبع الأساسية',
        content: 'Cleaning $\to$ Integration $\to$ Selection $\to$ Transformation $\to$ Data Mining $\to$ Evaluation $\to$ Presentation.'
      },
      {
        label: 'Data Preprocessing',
        labelAr: 'المعالجة المسبقة',
        content: 'Covers Cleaning, Integration, Selection, and Transformation before the actual mining starts.'
      },
      {
        label: 'Knowledge Presentation',
        labelAr: 'عرض المعرفة',
        content: 'Using visualization and reporting tools to represent discovered patterns to users.'
      }
    ]
  },
  {
    id: 'algo-ref',
    category: 'Clustering Algorithms',
    categoryAr: 'خوارزميات التجميع',
    icon: 'Brain',
    items: [
      {
        label: 'K-Means',
        labelAr: 'K-Means',
        content: 'Partitioning around calculated centroids (means). Fast ($O(n)$) but sensitive to outliers.'
      },
      {
        label: 'K-Medoids (PAM)',
        labelAr: 'K-Medoids (PAM)',
        content: 'Partitioning around actual data points (medoids). Robust to noise but slower ($O(K(n-K)^2)$).'
      },
      {
        label: 'Hierarchical',
        labelAr: 'التجميع الهرمي',
        content: 'Builds a nested tree (Dendrogram). Agglomerative (Bottom-up) vs Divisive (Top-down).'
      }
    ]
  },
  {
    id: 'levels-ref',
    category: 'Knowledge Levels',
    categoryAr: 'مستويات المعرفة',
    icon: 'Layers',
    items: [
      {
        label: 'Facts & Concepts',
        labelAr: 'الحقائق والمفاهيم',
        content: 'Facts are atomic truths. Concepts are sets of objects grouped by common characteristics.'
      },
      {
        label: 'Procedures & Principles',
        labelAr: 'الإجراءات والمبادئ',
        content: 'Procedures are step-by-step actions. Principles are fundamental laws or general truths.'
      }
    ]
  },
  {
    id: 'metrics-ref',
    category: 'Metrics & Distances',
    categoryAr: 'المقاييس والمسافات',
    icon: 'Activity',
    items: [
      {
        label: 'Manhattan Distance',
        labelAr: 'مسافة مانهاتن',
        content: 'Distance used in K-Medoids: $d = |x_2 - x_1| + |y_2 - y_1|$.'
      },
      {
        label: 'Linkage Criteria',
        labelAr: 'معايير الربط',
        content: 'Single (MIN distance), Complete (MAX distance), and Average (Mean distance).'
      }
    ]
  },
  {
    id: 'fuzzy-ref',
    category: 'Fuzzy Logic (FL)',
    categoryAr: 'المنطق الضبابي (FL)',
    icon: 'Ruler',
    items: [
      {
        label: 'The Core Difference',
        labelAr: 'الفرق الجوهري',
        content: 'Uses degrees of truth $[0, 1]$ instead of binary $[0, 1]$ (Crisp sets).'
      },
      {
        label: 'FIS 4-Step Cycle',
        labelAr: 'دورة FIS الرباعية',
        content: 'Fuzzification $\to$ Rule Evaluation (AND=MIN, OR=MAX) $\to$ Aggregation $\to$ Defuzzification (COG/Centroid).'
      },
      {
        label: 'Founder',
        labelAr: 'المؤسس',
        content: 'Introduced by Dr. Lotfi Zadeh in 1965 at UC Berkeley.'
      }
    ]
  },
  {
    id: 'tech-ref',
    category: 'Technical Stack',
    categoryAr: 'الأدوات التقنية',
    icon: 'Terminal',
    items: [
      {
        label: 'NumPy & Pandas',
        labelAr: 'NumPy و Pandas',
        content: 'High-performance arrays (ndarray) and tabular data structures (DataFrame) for EDA.'
      },
      {
        label: 'Scikit-Learn',
        labelAr: 'Scikit-Learn',
        content: 'The primary library for KMeans, AgglomerativeClustering, and StandardScaler.'
      },
      {
        label: 'SciPy',
        labelAr: 'SciPy',
        content: 'Used for hierarchical linkage matrices and dendrogram visualization labels.'
      }
    ]
  }
];
