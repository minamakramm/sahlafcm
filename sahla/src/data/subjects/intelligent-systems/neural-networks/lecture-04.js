export const LECTURE = {
  subjectId: 'neural-networks',
  number: 4,
  title: 'Perceptron Learning Rule',
  titleAr: 'قاعدة تعلم البيرسبترون (Perceptron)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Linear Separability & Decision Boundaries</h2>
<p>A Perceptron is fundamentally a <strong>Linear Classifier</strong>. It mathematically draws a straight boundary (a hyperplane) separating classes.</p>
<div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">
  <!-- Linearly Separable -->
  <div style="text-align: center; flex: 1 1 140px; max-width: 200px;">
    <svg viewBox="-10 -10 120 120" style="width: 100%; height: auto; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <line x1="0" y1="50" x2="100" y2="50" stroke="var(--text-muted)" stroke-width="0.5"/>
      <line x1="50" y1="0" x2="50" y2="100" stroke="var(--text-muted)" stroke-width="0.5"/>
      <line x1="10" y1="90" x2="90" y2="10" stroke="var(--text-primary)" stroke-width="2" stroke-dasharray="5,5"/>
      <circle cx="20" cy="20" r="4" fill="var(--accent-cyan)"/>
      <circle cx="40" cy="20" r="4" fill="var(--accent-cyan)"/>
      <circle cx="20" cy="40" r="4" fill="var(--accent-cyan)"/>
      <rect x="70" y="70" width="8" height="8" fill="var(--accent-rose)"/>
      <rect x="80" y="50" width="8" height="8" fill="var(--accent-rose)"/>
      <rect x="60" y="90" width="8" height="8" fill="var(--accent-rose)"/>
    </svg>
    <p style="font-size: 0.85rem; color: var(--accent-emerald); margin-top: 10px;">Linearly Separable (Solvable)</p>
  </div>
  <!-- Non Linearly Separable (XOR) -->
  <div style="text-align: center; flex: 1 1 140px; max-width: 200px;">
    <svg viewBox="-10 -10 120 120" style="width: 100%; height: auto; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <line x1="0" y1="50" x2="100" y2="50" stroke="var(--text-muted)" stroke-width="0.5"/>
      <line x1="50" y1="0" x2="50" y2="100" stroke="var(--text-muted)" stroke-width="0.5"/>
      <line x1="10" y1="50" x2="90" y2="50" stroke="var(--accent-rose)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
      <rect x="20" y="20" width="8" height="8" fill="var(--accent-rose)"/>
      <circle cx="80" cy="20" r="4" fill="var(--accent-cyan)"/>
      <circle cx="20" cy="80" r="4" fill="var(--accent-cyan)"/>
      <rect x="80" y="80" width="8" height="8" fill="var(--accent-rose)"/>
    </svg>
    <p style="font-size: 0.85rem; color: var(--accent-rose); margin-top: 10px;">Non-Linearly Separable (XOR)</p>
  </div>
</div>
<p>The mathematical boundary equation is defined explicitly as: $w_1 x_1 + w_2 x_2 + b = 0$.</p>

<h2>🔹 The Perceptron Algorithm</h2>
<p>Unlike Hebb, Perceptrons ONLY update themselves if they mathematically guess incorrectly. It is an error-driven classification model.</p>
<p><strong>Stopping Condition:</strong> The epoch loops strictly continue iterating until a full epoch completes featuring explicitly zero mathematical weight updates (all points classed correctly).</p>

<h2>🔹 The Bipolar Step Activation</h2>
<p>The course exclusively uses Bipolar thresholds defined mathematically as:</p>
$$ y = f(y_{in}) = 1 \\text{ if } y_{in} > \\theta $$
$$ y = f(y_{in}) = 0 \\text{ if } -\\theta \\le y_{in} \\le \\theta $$
$$ y = f(y_{in}) = -1 \\text{ if } y_{in} < -\\theta $$

<h2>🔹 Update Rule</h2>
<p>If $y \\neq target$, mathematically apply exactly:</p>
$$ W_{new} = W_{old} + \\alpha (target) X $$
<p>(In our exams, $\\alpha = 1$ unless specified strictly natively).</p>

<h2>🔹 Mathematical Tracking: Perceptron AND Gate (Multi-Epochs)</h2>
<p>When computing explicitly mathematically, you must trace the full arrays over multiple Epochs until it physically converges. Let's map Epoch 1 and Epoch 2 side-by-side for an AND gate (Threshold $\\theta=0$):</p>
<table class="styled-table" style="width:100%; text-align:left; background: var(--bg-card); border-collapse: collapse; margin: 20px 0; font-family: var(--font-mono); font-size: 0.75rem;">
  <thead><tr style="border-bottom: 1px solid var(--border-active); color: var(--accent-violet-soft);">
    <th>x₁</th><th>x₂</th><th>b</th><th>t</th>
    <!-- Epoch 1 -->
    <th style="border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">E1: Y_in</th><th style="color: var(--accent-cyan);">E1: Y</th>
    <th style="color: var(--accent-emerald);">w₁</th><th style="color: var(--accent-emerald);">w₂</th><th style="color: var(--accent-emerald);">b_w</th>
    <!-- Epoch 2 -->
    <th style="border-left: 2px solid var(--border-subtle); color: var(--accent-amber);">E2: Y_in</th><th style="color: var(--accent-amber);">E2: Y</th>
    <th style="color: var(--accent-emerald);">w₁</th><th style="color: var(--accent-emerald);">w₂</th><th style="color: var(--accent-emerald);">b_w</th>
  </tr></thead>
  <tbody>
    <tr><td colspan="4" style="text-align: right; color: var(--text-muted); padding: 5px;">Initial:</td><td colspan="2" style="border-left: 2px solid var(--border-subtle);"></td><td style="color: white; padding: 5px;">0</td><td style="color: white;">0</td><td style="color: white;">0</td><td colspan="5" style="border-left: 2px solid var(--border-subtle);"></td></tr>
    <!-- row 1 -->
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 5px;">1</td><td style="padding: 5px;">1</td><td style="padding: 5px;">1</td><td style="padding: 5px;">1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-cyan);">0</td><td style="padding: 5px; color: var(--accent-cyan);">0</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-amber);">2</td><td style="padding: 5px; color: var(--accent-amber);">1</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">-1</td>
    </tr>
    <!-- row 2 -->
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 5px;">1</td><td style="padding: 5px;">-1</td><td style="padding: 5px;">1</td><td style="padding: 5px;">-1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-cyan);">1</td><td style="padding: 5px; color: var(--accent-cyan);">1</td>
      <td style="padding: 5px; color: white;">0</td><td style="padding: 5px; color: white;">2</td><td style="padding: 5px; color: white;">0</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-amber);">-1</td><td style="padding: 5px; color: var(--accent-amber);">-1</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">-1</td>
    </tr>
    <!-- row 3 -->
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 5px;">-1</td><td style="padding: 5px;">1</td><td style="padding: 5px;">1</td><td style="padding: 5px;">-1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-cyan);">2</td><td style="padding: 5px; color: var(--accent-cyan);">1</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">-1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-amber);">-1</td><td style="padding: 5px; color: var(--accent-amber);">-1</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">-1</td>
    </tr>
    <!-- row 4 -->
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 5px;">-1</td><td style="padding: 5px;">-1</td><td style="padding: 5px;">1</td><td style="padding: 5px;">-1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-cyan);">-3</td><td style="padding: 5px; color: var(--accent-cyan);">-1</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">-1</td>
      <td style="border-left: 2px solid var(--border-subtle); padding: 5px; color: var(--accent-amber);">-3</td><td style="padding: 5px; color: var(--accent-amber);">-1</td>
      <td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">1</td><td style="padding: 5px; color: white;">-1</td>
    </tr>
  </tbody>
</table>
<p>Notice how Epoch 2 resulted in ZERO weight changes! Epoch 2 physically mathematically locked convergence. The final boundary is $1x_1 + 1x_2 - 1 = 0$.</p>

<h2>🔹 Mathematical Step: Epoch Boundary Convergence Graph</h2>
<p>Unlike Hebb, Perceptron dynamically redraws its classification plane uniquely per error natively. Let's physically chart the shift between Epoch 1 and Epoch 2.</p>
<div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">
  <!-- Epoch 1 Incomplete Boundary -->
  <div style="text-align: center; flex: 1 1 140px; max-width: 200px;">
    <svg viewBox="-30 -30 60 60" style="width: 100%; height: auto; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <g stroke="rgba(255,255,255,0.1)" stroke-width="0.5">
        <line x1="-30" y1="-20" x2="30" y2="-20"/><line x1="-30" y1="20" x2="30" y2="20"/>
        <line x1="-20" y1="-30" x2="-20" y2="30"/><line x1="20" y1="-30" x2="20" y2="30"/>
        <line x1="-30" y1="0" x2="30" y2="0" stroke="rgba(255,255,255,0.3)"/>
        <line x1="0" y1="-30" x2="0" y2="30" stroke="rgba(255,255,255,0.3)"/>
      </g>
      <!-- Target Points -->
      <circle cx="20" cy="-20" r="3" fill="var(--accent-emerald)"/> <!-- Class 1 (Y=1) -->
      <rect x="18" y="18" width="4" height="4" fill="var(--accent-rose)"/> <!-- Class 2 (Y=-1) -->
      <rect x="-22" y="-22" width="4" height="4" fill="var(--accent-rose)"/>
      <rect x="-22" y="18" width="4" height="4" fill="var(--accent-rose)"/>
      
      <!-- Volatile Epoch 1 Boundary: x2 = -x1  -->
      <line x1="-30" y1="30" x2="30" y2="-30" stroke="var(--accent-amber)" stroke-width="2" stroke-dasharray="4,2"/>
    </svg>
    <p style="font-family: var(--font-mono); font-size: 0.8rem; margin-top: 10px; color: var(--accent-amber);">Epoch 1: x₁ + x₂ = 0</p>
  </div>

  <!-- Epoch 2 Locked Boundary -->
  <div style="text-align: center; flex: 1 1 140px; max-width: 200px;">
    <svg viewBox="-30 -30 60 60" style="width: 100%; height: auto; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
      <g stroke="rgba(255,255,255,0.1)" stroke-width="0.5">
        <line x1="-30" y1="-20" x2="30" y2="-20"/><line x1="-30" y1="20" x2="30" y2="20"/>
        <line x1="-20" y1="-30" x2="-20" y2="30"/><line x1="20" y1="-30" x2="20" y2="30"/>
        <line x1="-30" y1="0" x2="30" y2="0" stroke="rgba(255,255,255,0.3)"/>
        <line x1="0" y1="-30" x2="0" y2="30" stroke="rgba(255,255,255,0.3)"/>
      </g>
      <!-- Target Points -->
      <circle cx="20" cy="-20" r="3" fill="var(--accent-emerald)"/> 
      <rect x="18" y="18" width="4" height="4" fill="var(--accent-rose)"/> 
      <rect x="-22" y="-22" width="4" height="4" fill="var(--accent-rose)"/>
      <rect x="-22" y="18" width="4" height="4" fill="var(--accent-rose)"/>
      
      <!-- Converged Epoch 2 Boundary: x2 = -x1 + 1 -->
      <line x1="-15" y1="35" x2="35" y2="-15" stroke="var(--accent-emerald)" stroke-width="2"/>
    </svg>
    <p style="font-family: var(--font-mono); font-size: 0.8rem; margin-top: 10px; color: var(--accent-emerald);">Epoch 2 Final: x₁ + x₂ - 1 = 0</p>
  </div>
</div>

<h2>🔹 Mathematical Walkthrough: Multi-Output Perceptron</h2>
<p>Because this course is heavily mathematical, let's track a multi-output Perceptron explicitly natively evaluating two simultaneous targets ($T_1$ and $T_2$):</p>
<table class="styled-table" style="width:100%; text-align:left; background: var(--bg-card); border-collapse: collapse; margin: 20px 0; font-family: var(--font-mono); font-size: 0.8rem;">
  <thead><tr style="border-bottom: 1px solid var(--border-active); color: var(--accent-violet-soft);">
    <th style="padding: 10px;">x₁</th><th style="padding: 10px;">x₂</th><th style="padding: 10px;">b</th>
    <th style="padding: 10px; border-left: 2px solid var(--border-subtle);">T₁ (AND)</th>
    <th style="padding: 10px;">Y_in₁</th><th style="padding: 10px;">Y₁</th>
    <th style="padding: 10px;">Δw₁₁</th><th style="padding: 10px;">Δw₂₁</th><th style="padding: 10px;">Δb₁</th>
    <th style="padding: 10px; border-left: 2px solid var(--border-subtle);">T₂ (OR)</th>
    <th style="padding: 10px;">Y_in₂</th><th style="padding: 10px;">Y₂</th>
    <th style="padding: 10px;">Δw₁₂</th><th style="padding: 10px;">Δw₂₂</th><th style="padding: 10px;">Δb₂</th>
  </tr></thead>
  <tbody>
    <!-- Initial State -->
    <tr style="background: rgba(255,255,255,0.02);"><td colspan="15" style="padding: 10px; color: var(--text-muted);">Epoch 1. Initial W1=[0,0], W2=[0,0]. Threshold θ=0.</td></tr>
    <!-- Row 1 -->
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 10px;">1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">1</td>
      <!-- Target 1 Calc -->
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-emerald);">1</td>
      <td style="padding: 10px;">0</td><td style="padding: 10px;">0</td>
      <td style="padding: 10px; color: var(--accent-amber);">1</td><td style="padding: 10px; color: var(--accent-amber);">1</td><td style="padding: 10px; color: var(--accent-amber);">1</td>
      <!-- Target 2 Calc -->
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">1</td>
      <td style="padding: 10px;">0</td><td style="padding: 10px;">0</td>
      <td style="padding: 10px; color: var(--accent-amber);">1</td><td style="padding: 10px; color: var(--accent-amber);">1</td><td style="padding: 10px; color: var(--accent-amber);">1</td>
    </tr>
    <!-- Row 2 -->
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 10px;">1</td><td style="padding: 10px;">-1</td><td style="padding: 10px;">1</td>
      <!-- Target 1 Calc -->
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-emerald);">-1</td>
      <td style="padding: 10px; color: var(--text-muted);">1</td><td style="padding: 10px;">1</td>
      <td style="padding: 10px; color: var(--accent-rose);">-1</td><td style="padding: 10px; color: var(--accent-rose);">1</td><td style="padding: 10px; color: var(--accent-rose);">-1</td>
      <!-- Target 2 Calc -->
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">1</td>
      <td style="padding: 10px; color: var(--text-muted);">1</td><td style="padding: 10px;">1</td>
      <td style="padding: 10px;">0</td><td style="padding: 10px;">0</td><td style="padding: 10px;">0</td>
    </tr>
    <!-- Final Weights info -->
    <tr style="background: rgba(99, 102, 241, 0.1);">
      <td colspan="15" style="padding: 10px; color: white;">At epoch end natively, networks continuously loop unconditionally until explicitly zero update values cascade for identically every specific row synchronously iteratively.</td>
    </tr>
  </tbody>
</table>`,
        bodyAr: `<h2>🔹 الفصل الخطي والحدود الفاصلة</h2>
<p>بنيوياً، يعتبر البيرسبترون <strong>مُصنّفاً خطياً (Linear Classifier)</strong>. رياضياً، يقوم برسم سطح فائق (خط مستقيم) يَفصل بين الفئات رياضياً.</p>

<h3>🔹 خوارزمية البيرسبترون</h3>
<p>على خطى مغايرة لخوارزمية Hebb، لا يُحّدث البيرسبترون نواتجه وأوزانه إلا إذا تنبأ وأخطأ في ناتج الدالة. مما يجعله نموذج تصنيف يقوده ويحفزه الخطأ التنبؤي.</p>
<p><strong>شروط إنهاء التعلم:</strong> تتخبط حِلَق وحقب التكرار(Epoch) بشكل متواصل صارم، حتى تمر دورة وحقبة زمنية خالية تماماً من التحديثات بامتياز (كافة العينات تم تصنيفها بشكل سليم).</p>

<h3>🔹 وظائف وربط المخرجات والاستنباط</h3>
<p>الدورة بالأساس تقترن بمصفوفات وأنساق القطبية المزدوجة Bipolar لتأطير دالة الخطى، وتعطي نواتجا حتمية (-1 , 0 أو +1):</p>
`
      }
    }
  ],

  summary: {
    points: [
      "Perceptrons STRICTLY require the dataset to be purely mathematically linearly separable natively.",
      "Perceptrons trigger mathematical updates explicitly only when a prediction differs inherently from the target natively.",
      "Multi-output networks simply run N independent perceptron tracking formulas simultaneously dynamically."
    ],
    pointsAr: [
      "يتطلب البيرسبترون بصورة حتمية وصارمة أن تكون مجريات وبيانات الأطر قابلة للفصل والتجزئة الخطي السليم.",
      "تقتدح وتنبثق تعديلات البيرسبترون إذا شذ واختلف التنبؤ الحسابي الناتج عن المدلول الفعلي للهدف.",
      "أنساق الشبكات متعددة المخرجات تقوم بموازاة واجراء عدة وتائر لنماذج البيرسبترون سوية دون مشاكل."
    ]
  },

  mcq: [
    {
      id: 'nn-l4-q1',
      question: "In the strict Bipolar Perceptron logic with Threshold θ=0. If the mathematical sum exactly equals 0, what is the explicit output?",
      questionAr: "بالرجوع للمرونة القطبية(Bipolar)، إذا تم تعيين عتبة المنتهى الحدي לθ = 0. وساوى الناتج الإجمالي لعملية الجمع صفر بالضبط، فما هو الإخراج المنتظر حتماً؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: '+1 natively', isCorrect: false },
        { id: 'b', text: '-1 intrinsically', isCorrect: false },
        { id: 'c', text: '0 exactly flawlessly', isCorrect: true },
        { id: 'd', text: 'Infinity purely', isCorrect: false }
      ]
    },
    {
      id: 'nn-l4-q2',
      question: "When mathematically does the standard Perceptron algorithm dynamically declare explicit convergence?",
      questionAr: "متى تقر وتعلن خوارزمية البيرسبترون استسلامها بالوصول وايقاف تكرارات الدورة (تقارب رياضي)؟",
      difficulty: 'easy',
      answers: [
        { id: 'a', text: 'When a total epoch pass completes registering exactly literally 0 weight updates natively', isCorrect: true },
        { id: 'b', text: 'When weights explode exactly to 100 inherently', isCorrect: false },
        { id: 'c', text: 'After identically 1 loop perfectly', isCorrect: false },
        { id: 'd', text: 'When MSE equals specifically 1 rationally', isCorrect: false }
      ]
    },
    {
      id: 'nn-l4-q3',
      question: "What mathematical topological flaw permanently destroyed Perceptron research funding statically for decades inherently?",
      questionAr: "أيُ المعاضلِ والبوابات الفشل الهيكلي التي دمرت وركدت تمويل وأبحاث البيرسبترون في فترة حقبتها الزمنية؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Its absolute geometric inability to solve mathematically non-linear constraints like the XOR boolean function natively', isCorrect: true },
        { id: 'b', text: 'Its memory bounds randomly inherently collapsing', isCorrect: false },
        { id: 'c', text: 'Its requirement for matrices exclusively natively', isCorrect: false },
        { id: 'd', text: 'Its over-reliance on activation tangents inherently logically', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'nn-l4-w1',
      question: "Given W=[1,1], b=0, θ=0. Input X=[-1, -1]. Target T=-1. Compute carefully the output and mathematical update required natively.",
      questionAr: "احسب وتوخ الحذر بإخراج نتائج عملية متمثلة بـ W المبدئي=[1,1] ومعامل الميل b=0 وعتبة المنتهى θ=0. ونقاط مدخل X=[-1, -1] بينما الهدف الفعلي هو -1.",
      modelAnswer: "Y_in = (-1)(1) + (-1)(1) + 0 = -2. Output = -1 (because -2 < 0). Since Target is -1 and Prediction is -1, NO UPDATE perfectly natively.",
      modelAnswerAr: "محصلة Y_in = (-1)(1) + (-1)(1) + 0 = ستساوي -2. بالتالي المخرج بعد المقارنة هو -1. وبما ان الهدف المطلوب والمرجو هو -1، والتنبؤ أعطى -1. فهذا لا يستوجب عملية التغيير. 'لا يوجد تحديث مطلقاً'."
    },
    {
      id: 'nn-l4-w2',
      question: "Explain the logical failure of a Single Perceptron facing an XOR problem layout.",
      questionAr: "اِطرح ووضح بجلاء العوائق الرياضية لفشل عصبون بيرسبترون مفرد بوجه وهياكل بوابات الـ(XOR).",
      modelAnswer: "A perceptron strictly governs a single mathematical straight line (Hyperplane) across feature space. In XOR, diagonally opposite quadrants share the identical label classification natively, making it mathematically completely physically impossible to cleanly split identical clusters using a distinctly single linear slash flawlessly.",
      modelAnswerAr: "بنية البيرسبترون تحكم وتجبر إحداثيات الفراغ عبر خط مستقيم ومستوى منفرد فاصلاً واحداً. في نظام بوابات الـ XOR تتقاطع وتشترك الأقطار والمناطق المتعاكسة بأهدافها المتشابهة بالمقابل. مما يجعل الاستحالة الهندسية بأن تشطر وترسم خط مستقيم وحيد يقص ويفصل المجموعات دون المرور والالتواء حول المساحات المنحنية."
    }
  ]
};
