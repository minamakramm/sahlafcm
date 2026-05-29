export const CHEATSHEET = [
  {
    id: 'architect-ref',
    category: 'Architecture & Foundation',
    categoryAr: 'الهيكلية والأساسات',
    icon: 'Network',
    items: [
      { 
        label: 'Neuron Computation', 
        labelAr: 'حساب الخلية', 
        content: '$y_{in} = b + \\sum w_i x_i$. The weighted sum of inputs plus bias.' 
      },
      { 
        label: 'Bias (b)', 
        labelAr: 'الانحياز', 
        content: 'Shifts the activation function; essential for modeling non-zero intercepts. Even if all inputs are zero, the neuron can output a signal.' 
      },
      { 
        label: 'Weight (W)', 
        labelAr: 'الوزن', 
        content: 'Represents the strength of the connection (synapse) between neurons. Learned through training.' 
      },
      { 
        label: 'He Initialization', 
        labelAr: 'تهيئة He', 
        content: '$scale = \\sqrt{2 / N_{in}}$. Standard for ReLU-based networks to prevent vanishing gradients.' 
      },
      { 
        label: 'Xavier (Glorot)', 
        labelAr: 'تهيئة زافيير', 
        content: '$scale = \\sqrt{1 / N_{in}}$. Optimized for Sigmoid and Tanh activations.' 
      }
    ]
  },
  {
    id: 'activation-ref',
    category: 'Activation Functions',
    categoryAr: 'دالات التنشيط',
    icon: 'Zap',
    items: [
      { 
        label: 'Sigmoid', 
        labelAr: 'سيجمويد', 
        content: '$\\frac{1}{1 + e^{-x}}$. Range (0, 1). Used for binary classification and probabilities.' 
      },
      { 
        label: 'Tanh', 
        labelAr: 'تانش', 
        content: '$\\frac{e^x - e^{-x}}{e^x + e^{-x}}$. Range (-1, 1). Zero-centered, providing better weight updates than Sigmoid.' 
      },
      { 
        label: 'ReLU', 
        labelAr: 'ريلو', 
        content: '$max(0, x)$. Efficient, avoids vanishing gradients, but can suffer from "Dying ReLU" problem.' 
      },
      { 
        label: 'PReLU', 
        labelAr: 'بي ريلو', 
        content: '$x$ if $x > 0$, else $ax$. Solves Dying ReLU by having a learnable slope for negative values.' 
      }
    ]
  },
  {
    id: 'learning-rules-ref',
    category: 'Learning Rules',
    categoryAr: 'قواعد التعلم',
    icon: 'Edit3',
    items: [
      { 
        label: 'Hebb Rule', 
        labelAr: 'قاعدة هيب', 
        content: '$\\Delta w = \\eta x y$. Correlation-based learning: "Neurons that fire together, wire together".' 
      },
      { 
        label: 'Perceptron Rule', 
        labelAr: 'قاعدة المدرك', 
        content: '$\\Delta w = \\alpha (T-y) x$. Error-driven; updates weights only when the prediction (y) is wrong.' 
      },
      { 
        label: 'Delta Rule (Adaline)', 
        labelAr: 'قاعدة دلتا', 
        content: '$\\Delta w = \\alpha (T-y_{in}) x$. Minimizes Mean Squared Error (MSE) using the linear input before thresholding.' 
      },
      { 
        label: 'Epoch', 
        labelAr: 'الدورة التدريبية', 
        content: 'One complete pass through the entire training dataset.' 
      }
    ]
  },
  {
    id: 'backprop-ref',
    category: 'Advanced Concepts',
    categoryAr: 'مفاهيم متقدمة',
    icon: 'Brain',
    items: [
      { 
        label: 'Chain Rule', 
        labelAr: 'قاعدة السلسلة', 
        content: '$\\frac{\\partial Error}{\\partial W_{hidden}} = \\frac{\\partial Error}{\\partial Output} \\times \\frac{\\partial Output}{\\partial Hidden} \\times \\frac{\\partial Hidden}{\\partial W_{hidden}}$. The foundation of Backprop; propagates gradients backward to update weights.' 
      },
      { 
        label: 'Vanishing Gradient', 
        labelAr: 'تلاشي الاشتقاق', 
        content: 'When gradients become too small in deep networks, effectively stopping the learning process in early layers.' 
      },
      { 
        label: 'Linear Separability', 
        labelAr: 'القابلية للفصل خطياً', 
        content: 'Data is separable if a single straight line (hyperplane) can divide the classes. (e.g. AND, OR are separable; XOR is not).' 
      },
      { 
        label: 'Forward Pass', 
        labelAr: 'المرور الأمامي', 
        content: 'Input data travels through the layers toward the output to generate a prediction.' 
      }
    ]
  }
];
