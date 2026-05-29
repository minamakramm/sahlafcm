export const CHEATSHEET = [
  {
    id: 'eval-ref',
    category: 'Evaluation Metrics',
    categoryAr: 'مقاييس التقييم',
    icon: 'Search',
    items: [
      { 
        label: 'Accuracy', 
        labelAr: 'الدقة', 
        content: '$\\frac{TP + TN}{Total}$. overall correctness.' 
      },
      { 
        label: 'Precision', 
        labelAr: 'الدقة (Precision)', 
        content: '$\\frac{TP}{TP + FP}$. Of predicted positives, how many are actually correct?' 
      },
      { 
        label: 'Recall', 
        labelAr: 'الاسترداد (Recall)', 
        content: '$\\frac{TP}{TP + FN}$. Of all actual positives, how many did the model find?' 
      }
    ]
  },
  {
    id: 'dist-ref',
    category: 'Distance & Normalization',
    categoryAr: 'المسافة والتحجيم',
    icon: 'Ruler',
    items: [
      { 
        label: 'Euclidean (L2)', 
        labelAr: 'المسافة الإقليدية', 
        content: '$\\sqrt{\\sum (x_i - y_i)^2}$. Straight line distance.' 
      },
      { 
        label: 'Manhattan (L1)', 
        labelAr: 'مسافة مانهاتن', 
        content: '$\\sum |x_i - y_i|$. Grid-like distance.'       },
      { 
        label: 'Min-Max Scaling', 
        labelAr: 'تحجيم Min-Max', 
        content: '$x_{new} = \\frac{x - min}{max - min}$. Maps features to [0, 1].'       }
    ]
  },
  {
    id: 'regression-ref',
    category: 'Linear & Logistic Models',
    categoryAr: 'النماذج الخطية واللوجستية',
    icon: 'Activity',
    items: [
      { 
        label: 'Normal Equation', 
        labelAr: 'المعادلة العادية', 
        content: '$\\theta = (X^T X)^{-1} X^T y$. Analytical one-step solution for regression.'       },
      { 
        label: 'Sigmoid Function', 
        labelAr: 'دالة Sigmoid', 
        content: '$g(z) = \\frac{1}{1 + e^{-z}}$. Maps outputs to probability range (0, 1).'       },
      { 
        label: 'L2 Regularization (Ridge)', 
        labelAr: 'انتظام Ridge', 
        content: 'Adds $+\\lambda \\sum \\theta^2$ to cost. Shrinks weights to prevent overfitting.'       }
    ]
  },
  {
    id: 'logic-ref',
    category: 'Perceptrons & Neural Networks',
    categoryAr: 'المدركات والشبكات العصبية',
    icon: 'Brain',
    items: [
      { 
        label: 'Perceptron Update', 
        labelAr: 'تحديث المدرك', 
        content: '$w = w + (y_{true} - y_{pred})x$. Adjusts weights only on error.' 
      },
      { 
        label: 'Linear Separability', 
        labelAr: 'قابلية الفصل الخطي', 
        content: 'Perceptrons can solve AND/OR but fail at XOR (non-linear).' 
      },
      { 
        label: 'Activation Function', 
        labelAr: 'دالة التنشيط', 
        content: 'Injected between layers to break linearity and learn complex curves.' 
      }
    ]
  }
];
