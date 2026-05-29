export const LECTURE = {
  subjectId: 'neural-networks',
  number: 3,
  title: 'Hebbian Learning',
  titleAr: 'التعلم الهيبي (Hebbian Learning)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Hebbian Learning Formula</h2>
<p>Hebbian Learning operates on a very crude, simple philosophy: <em>Neurons that fire together, wire together.</em></p>
<p>The mathematical update formulas depend entirely on the explicit label $Y$:</p>
$$ W_{new} = W_{old} + X \\cdot Y $$
<h2>🔹 Mathematical Walkthrough: Hebbian AND Gate</h2>
<p>We universally use <strong>bipolar</strong> inputs ($-1, +1$) in this specific algorithm.</p>
<table class="styled-table" style="width:100%; text-align:left; background: var(--bg-card); border-collapse: collapse; margin: 20px 0; font-family: var(--font-mono); font-size: 0.8rem;">
  <thead><tr style="border-bottom: 1px solid var(--border-active); color: var(--accent-violet-soft);">
    <th style="padding: 10px;">x₁</th><th style="padding: 10px;">x₂</th><th style="padding: 10px;">b</th><th style="padding: 10px;">y</th>
    <th style="padding: 10px; border-left: 2px solid var(--border-subtle);">w₁</th><th style="padding: 10px;">w₂</th><th style="padding: 10px;">b_w</th>
    <th style="padding: 10px; border-left: 2px solid var(--border-subtle);">Δw₁</th><th style="padding: 10px;">Δw₂</th><th style="padding: 10px;">Δb</th>
  </tr></thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 10px;">1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">1</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--text-muted);">0</td><td style="padding: 10px; color: var(--text-muted);">0</td><td style="padding: 10px; color: var(--text-muted);">0</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">1</td><td style="padding: 10px; color: var(--accent-cyan);">1</td><td style="padding: 10px; color: var(--accent-cyan);">1</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 10px;">1</td><td style="padding: 10px;">-1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">-1</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle);">1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">1</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">-1</td><td style="padding: 10px; color: var(--accent-cyan);">1</td><td style="padding: 10px; color: var(--accent-cyan);">-1</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 10px;">-1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">-1</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle);">0</td><td style="padding: 10px;">2</td><td style="padding: 10px;">0</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">1</td><td style="padding: 10px; color: var(--accent-cyan);">-1</td><td style="padding: 10px; color: var(--accent-cyan);">-1</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 10px;">-1</td><td style="padding: 10px;">-1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">-1</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle);">1</td><td style="padding: 10px;">1</td><td style="padding: 10px;">-1</td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: var(--accent-cyan);">1</td><td style="padding: 10px; color: var(--accent-cyan);">1</td><td style="padding: 10px; color: var(--accent-cyan);">-1</td>
    </tr>
    <tr style="background: rgba(99, 102, 241, 0.1);">
      <td colspan="4" style="padding: 10px; text-align: right; color: var(--accent-violet-soft);"><strong>Final W:</strong></td>
      <td style="padding: 10px; border-left: 2px solid var(--border-subtle); color: white;"><strong>2</strong></td>
      <td style="padding: 10px; color: white;"><strong>2</strong></td>
      <td style="padding: 10px; color: white;"><strong>-2</strong></td>
      <td colspan="3"></td>
    </tr>
  </tbody>
</table>

<h2>🔹 Mathematical Step: Vector Addition Graph</h2>
<p>Hebbian dynamically graphs unconditionally. Look at Row 2 mathematically updated into the system below ($W_{\\text{new}} = W_{\\text{old}} + XY$)</p>
<div style="text-align: center; margin: 30px 0;">
  <svg width="300" height="300" viewBox="-150 -150 300 300" style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
    <g stroke="rgba(255,255,255,0.1)" stroke-width="1">
      <line x1="-150" y1="-100" x2="150" y2="-100"/><line x1="-150" y1="-50" x2="150" y2="-50"/>
      <line x1="-150" y1="0" x2="150" y2="0" stroke="rgba(255,255,255,0.3)"/>
      <line x1="-150" y1="50" x2="150" y2="50"/><line x1="-150" y1="100" x2="150" y2="100"/>
      <line x1="-100" y1="-150" x2="-100" y2="150"/><line x1="-50" y1="-150" x2="-50" y2="150"/>
      <line x1="0" y1="-150" x2="0" y2="150" stroke="rgba(255,255,255,0.3)"/>
      <line x1="50" y1="-150" x2="50" y2="150"/><line x1="100" y1="-150" x2="100" y2="150"/>
    </g>

    <defs>
      <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="var(--accent-rose)"/></marker>
      <marker id="arrowCyan" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="var(--accent-cyan)"/></marker>
      <marker id="arrowEmerald" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="var(--accent-emerald)"/></marker>
    </defs>

    <!-- W_old: [1,1] -->
    <line x1="0" y1="0" x2="50" y2="-50" stroke="var(--accent-cyan)" stroke-width="3" marker-end="url(#arrowCyan)"/>
    <text x="60" y="-55" fill="var(--accent-cyan)" font-size="12" font-weight="bold">W_old [1, 1]</text>

    <!-- X*Y update: [-1, 1] applied to [1,1] -->
    <line x1="50" y1="-50" x2="0" y2="-100" stroke="var(--accent-rose)" stroke-width="3" stroke-dasharray="4,4" marker-end="url(#arrowRed)"/>
    <text x="-40" y="-80" fill="var(--accent-rose)" font-size="12" font-weight="bold">ΔW [-1, 1]</text>

    <!-- W_new: [0,2] -->
    <line x1="0" y1="0" x2="0" y2="-100" stroke="var(--accent-emerald)" stroke-width="3" marker-end="url(#arrowEmerald)"/>
    <text x="10" y="-110" fill="var(--accent-emerald)" font-size="14" font-weight="bold">W_new [0, 2]</text>
  </svg>
  <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 10px;">Graphically tracing the unconditional vector summation geometry structurally.</p>
</div>

<p>Suppose we want to classify 3x3 pixel grids. "I" is the target pattern map for $Y=1$. "O" is the target pattern map for $Y=-1$.</p>
<div style="display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">
  <div style="text-align: center;">
    <strong>Pattern "I" (Y = 1)</strong><br/><br/>
    <svg width="120" height="120" viewBox="0 0 120 120" style="background: var(--bg-card); border: 2px solid var(--border-active);">
      <rect x="0" y="0" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
      <rect x="40" y="0" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
      <rect x="80" y="0" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
      
      <rect x="0" y="40" width="40" height="40" fill="var(--bg-card)" stroke="#000" />
      <rect x="40" y="40" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
      <rect x="80" y="40" width="40" height="40" fill="var(--bg-card)" stroke="#000" />
      
      <rect x="0" y="80" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
      <rect x="40" y="80" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
      <rect x="80" y="80" width="40" height="40" fill="var(--accent-violet)" stroke="#000" />
    </svg>
    <p style="font-family: var(--font-mono); font-size: 0.8rem; margin-top: 10px; color: var(--accent-violet-soft);">X = [1, 1, 1, -1, 1, -1, 1, 1, 1]</p>
  </div>

  <div style="text-align: center;">
    <strong>Pattern "O" (Y = -1)</strong><br/><br/>
    <svg width="120" height="120" viewBox="0 0 120 120" style="background: var(--bg-card); border: 2px solid var(--border-active);">
      <rect x="0" y="0" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      <rect x="40" y="0" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      <rect x="80" y="0" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      
      <rect x="0" y="40" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      <rect x="40" y="40" width="40" height="40" fill="var(--bg-card)" stroke="#000" />
      <rect x="80" y="40" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      
      <rect x="0" y="80" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      <rect x="40" y="80" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
      <rect x="80" y="80" width="40" height="40" fill="var(--accent-rose)" stroke="#000" />
    </svg>
    <p style="font-family: var(--font-mono); font-size: 0.8rem; margin-top: 10px; color: var(--accent-rose);">X = [1, 1, 1, 1, -1, 1, 1, 1, 1]</p>
  </div>
</div>

<p>Applying standard Hebb rules, unconditionally updating starting from $W = 0$, $b = 0$:</p>
<table class="styled-table" style="width:100%; text-align:left; background: var(--bg-card); border-collapse: collapse; margin: 20px 0; font-family: var(--font-mono); font-size: 0.85rem;">
  <thead><tr style="border-bottom: 1px solid var(--border-active); color: var(--accent-violet-soft);">
    <th style="padding: 12px;">Pattern</th>
    <th style="padding: 12px;">Δw₁</th><th style="padding: 12px;">Δw₂</th><th style="padding: 12px;">Δw₃</th>
    <th style="padding: 12px;">Δw₄</th><th style="padding: 12px;">Δw₅</th><th style="padding: 12px;">Δw₆</th>
    <th style="padding: 12px;">Δw₇</th><th style="padding: 12px;">Δw₈</th><th style="padding: 12px;">Δw₉</th><th style="padding: 12px;">Δb</th>
  </tr></thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 12px; color: var(--accent-violet-soft);"><strong>Delta I (X × 1)</strong></td>
      <td style="padding: 12px;">1</td><td style="padding: 12px;">1</td><td style="padding: 12px;">1</td>
      <td style="padding: 12px;">-1</td><td style="padding: 12px;">1</td><td style="padding: 12px;">-1</td>
      <td style="padding: 12px;">1</td><td style="padding: 12px;">1</td><td style="padding: 12px;">1</td><td style="padding: 12px;">1</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 12px; color: var(--accent-rose);"><strong>Delta O (X × -1)</strong></td>
      <td style="padding: 12px;">-1</td><td style="padding: 12px;">-1</td><td style="padding: 12px;">-1</td>
      <td style="padding: 12px;">-1</td><td style="padding: 12px;">1</td><td style="padding: 12px;">-1</td>
      <td style="padding: 12px;">-1</td><td style="padding: 12px;">-1</td><td style="padding: 12px;">-1</td><td style="padding: 12px;">-1</td>
    </tr>
    <tr style="background: rgba(99, 102, 241, 0.2); font-weight: bold;">
      <td style="padding: 12px; color: white;"><strong>FINAL w_new</strong></td>
      <td style="padding: 12px;">0</td><td style="padding: 12px;">0</td><td style="padding: 12px;">0</td>
      <td style="padding: 12px; color: var(--accent-amber);">-2</td>
      <td style="padding: 12px; color: var(--accent-amber);">2</td>
      <td style="padding: 12px; color: var(--accent-amber);">-2</td>
      <td style="padding: 12px;">0</td><td style="padding: 12px;">0</td><td style="padding: 12px;">0</td><td style="padding: 12px;">0</td>
    </tr>
  </tbody>
</table>
<p>Notice how indices 4, 5, and 6 heavily polarized? The algorithm automatically detected that the middle row perfectly mathematically distinguishes between an "I" and an "O".</p>`,
        bodyAr: `<h2>🔹 صياغة ومبدأ التعلم للتدريب الهيبي(Hebbian Learning)</h2>
<p>تتمحور وتقوم نظرية وتحديثات (Hebb) على فلسفة بسيطة بدائية تماماً، ومفادها : <em>العصبونات والخلايا التي تطلق شحنة معاً، تترابط وتلتحم ببعضها.</em></p>
<p>لا تتوقف ولا تعتمد التعديلات إطلاقاً على قياس ومعدلات الخسارة والخطأ، بل تضيف الأوزان بصورة مطلقة كالتالي:</p>

<h3>🔹 المسارات الحسابية: رسم وقياسات الهيبيان للبوابة المنطقية AND</h3>
<p>نستعين بشكل عام وتام بالمدخلات المزدوجة ثنائية القطب (Bipolar) التي تأخذ الصيغة القطعية ( $-1, +1$) من قلب الخوارزمية.</p>

<h3>🔹 معضلة الصور والتمثيل الصوري لأنماط I أو O</h3>
<p>هنا نقوم بترجمة المصفوفة المربعة التي تمثل الحروف بشكل مدخلات ومرجعيات قطبية لتعامل معها الخوارزمية بمنطق سليم.</p>
`
      }
    }
  ],

  summary: {
    points: [
      "Hebbian learning blindly assumes weights increase when input and target perfectly align in sign natively.",
      "Hebbian updates do NOT use prediction errors! It simply adds X*Y unconditionally natively.",
      "In pattern matching, weights perfectly accumulate where differences exist identically."
    ],
    pointsAr: [
      "بافتراض أعمى، تقر وتكتفي خوارزمية ومعادلة الهيبيان بزيادة الأوزان متى ما تواجه وتطابق اتجاه وإشارة الأهداف المدخلة.",
      "تحديث معادلة الهيبي لا يعتمد ولا يعترف ابداً بالخسارات التنبؤية إطلاقاً! بل تجمع مدخل الـ X مضروباً بالـ Y للوزن المبدئي.",
      "عبر شبكات مطابقة أنماط وتشكيل الصور، يكتشف النظام المقاربات والمفارقات بشدة بالمساحات والأوزان المتقاطعة والمتغايرة."
    ]
  },

  mcq: [
    {
      id: 'nn-l3-q1',
      question: "Under standard Hebb learning with purely bipolar inputs (-1, +1), what is the explicit geometric update natively added to weight vector W if X=[-1, -1] and Y=-1?",
      questionAr: "تحت سياقات تعليم الهيبي (Hebb) الدقيقة للمقاسات الثنائية القطبية، ماذا تمثل الإضافة الهندسية الحتمية لمتجه الأوزان W إذا كان الـ X يساوي [-1, -1] والهدف Y = -1 ؟",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'W + [-1, -1] natively', isCorrect: false },
        { id: 'b', text: 'W + [1, 1] exactly, because (-1*-1)=1 and (-1*-1)=1 natively', isCorrect: true },
        { id: 'c', text: 'W completely resets logically inherently', isCorrect: false },
        { id: 'd', text: 'W inherently zeros itself exactly', isCorrect: false }
      ]
    },
    {
      id: 'nn-l3-q2',
      question: "Hebbian Learning fundamentally differs from Perceptrons exclusively because:",
      questionAr: "يختلف نظام التعلم بالهيبيان (Hebbian Learning) جذريا ومؤسساتياً عن خوارزميات الـ (Perceptron) تحديداً بسبب ان:",
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Hebb only works on floats natively', isCorrect: false },
        { id: 'b', text: 'Hebb mathematically updates strictly based entirely on the Target Output Data unconditionally, whereas Perceptron explicitly only calculates updates if a Prediction Error physically occurs natively', isCorrect: true },
        { id: 'c', text: 'Hebb ignores distance matrices dynamically', isCorrect: false },
        { id: 'd', text: 'Hebb requires derivatives entirely natively', isCorrect: false }
      ]
    }
  ],

  written: [
    {
      id: 'nn-l3-w1',
      question: "Calculate one strict Hebbian step if W_old = [2, -2], Point is X=[1, -1], and True Target Y=1.",
      questionAr: "احسب وتريث لإخراج عملية تدريب وخطوة من تنقيح الـ Hebbian رياضياً إذا كان (W المبدئي = [2,-2] ) والنقاط X هي [1,-1] والهدف القطعي Y=1 .",
      modelAnswer: "Delta_W = X * Y = [1, -1] * 1 = [1, -1]. W_new = [2, -2] + [1, -1] = [3, -3] exactly.",
      modelAnswerAr: "بما ان Delta_W = X * Y = [1, -1] مضروبة في 1 يستقر الدلتا على وضع النقطة [1, -1]. وبجمعه مع الأوزان الأصلية ينتج W_new كالتالي [2, -2] + [1, -1] لتكون الاجابة القطعية [3, -3] تحديدا."
    },
    {
      id: 'nn-l3-w2',
      question: "Given an 'I' vs 'O' grid pattern classifier like the lecture, why do pixels situated identically in both patterns ultimately yield a weight dimension of precisely 0 under Hebbian mathematics?",
      questionAr: "إذا كُنّا نستنبط مقارنة لشبكات تحديد الصور بين نمط حرف I ونمط حرف O. لماذا تستخرج البكسلات المربعات المتقاطعة للنمطين أوزاناً جبرية ورياضية تساوي صفر تحديداً بنظرية הה(Hebb)؟",
      modelAnswer: "Because if Pixel 1 is exactly (+1) in both the 'I' pattern (target Y=+1) and the 'O' pattern (target Y=-1), the first update yields (+1)(+1) = +1. The second step identically yields (+1)(-1) = -1. Adding them gives 1 - 1 = 0 natively. The neuron mathematically learns to totally ignore identical features.",
      modelAnswerAr: "إذا كان وزن البكسل رقم 1 مشبعاً ومفعلاً بقيمة (+1) بكل من حرف 'I' وهو إيجابي وحرف 'O' وهو سلبي، فبالتحصيلة الأولى بالضرب تخرج القيمة بموجب 1، وفي المعطاة الثانية ستصبح (+1)*(-1) فتصبح -1. بجمعهما كلياً تلغي كل واحدة الأخرى فتساوي النتيجة صفراً. ليتعلم العصبون إلغاء وتجاهل العقد المتشابهة بالأنماط."
    }
  ]
};
