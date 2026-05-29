export const LECTURE = {
  subjectId: 'data-mining',
  number: 'practical-quiz',
  title: 'Comprehensive Practical Exam (Hard)',
  titleAr: 'الامتحان العملي الشامل (مستوى متقدم)',

  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>📝 Comprehensive Practical Exam Instructions</h2>
<p>This exam is designed to test your deep understanding of Data Mining concepts and Python implementation across <strong>all sections</strong>. The difficulty is set to <strong>Hard</strong>.</p>
<ul>
  <li><strong>Sections Covered:</strong> Python/NumPy, Pandas, Visualization, Scikit-Learn (K-Means), SciPy (Hierarchical), Fuzzy Logic, and Genetic Algorithms.</li>
  <li><strong>Question 1 (MCQ):</strong> Focuses on edge cases, advanced parameter understanding, and theoretical nuances.</li>
  <li><strong>Question 2 (Coding):</strong> Requires writing complete, optimized Python code for complex scenarios.</li>
</ul>
<div class="callout callout-warning"><span class="callout-icon">⚠️</span><span><strong>Note:</strong> Pay close attention to syntax, array shapes, and specific algorithm parameters.</span></div>`,
        bodyAr: `<h2>📝 تعليمات الامتحان العملي الشامل</h2>
<p>تم تصميم هذا الامتحان لاختبار فهمك العميق لمفاهيم تنقيب البيانات وتنفيذ بايثون عبر <strong>جميع الأقسام</strong>. تم تعيين مستوى الصعوبة على <strong>متقدم (Hard)</strong>.</p>
<ul>
  <li><strong>الأقسام المشمولة:</strong> بايثون/NumPy، Pandas، التصور المرئي، Scikit-Learn (K-Means)، SciPy (التجميع الهرمي)، المنطق الضبابي، والخوارزميات الجينية.</li>
  <li><strong>السؤال الأول (اختياري):</strong> يركز على الحالات الاستثنائية، فهم المعاملات المتقدمة، والفروق النظرية الدقيقة.</li>
  <li><strong>السؤال الثاني (برمجة):</strong> يتطلب كتابة كود بايثون كامل ومحسن لسيناريوهات معقدة.</li>
</ul>
<div class="callout callout-warning"><span class="callout-icon">⚠️</span><span><strong>ملاحظة:</strong> انتبه جيدًا لبناء الجملة البرمجية (syntax)، أشكال المصفوفات، ومعاملات الخوارزميات المحددة.</span></div>`,
      },
    },
  ],

  summary: {
    points: [
      "NumPy views vs. copies: Views share memory, copies do not.",
      "Pandas advanced indexing: iloc is strictly integer-position based.",
      "K-Means requires feature scaling (StandardScaler) because it relies on distance metrics.",
      "SciPy truncate_mode='lastp' condenses large dendrograms by showing only the final p merges.",
      "Fuzzy Logic defuzzification (COG) finds the geometric balance point of the activated rule area.",
      "Genetic Algorithm fitness functions must penalize invalid states (like exceeding weight) by returning 0."
    ],
    pointsAr: [
      "الفرق بين View و Copy في NumPy: العرض يشارك الذاكرة، النسخ لا تشاركها.",
      "الفهرسة المتقدمة في Pandas: يعتمد iloc بدقة على الموقع الرقمي الصحيح.",
      "يتطلب K-Means تقييس الميزات (StandardScaler) لأنه يعتمد على مقاييس المسافة.",
      "يضغط SciPy truncate_mode='lastp' المخططات الشجرية الكبيرة بإظهار عمليات الدمج p النهائية فقط.",
      "تجد إزالة التضبيب في المنطق الضبابي (COG) نقطة التوازن الهندسي لمنطقة القاعدة النشطة.",
      "يجب أن تعاقب دوال الكفاءة في الخوارزمية الجينية الحالات غير الصالحة (مثل تجاوز الوزن) بإرجاع 0."
    ],
  },

  mcq: [
    {
      id: 'dm-h-q1',
      question: 'Question 1: In NumPy, what is the critical difference in memory behavior between `arr.view()` and `arr.copy()` when applied to a large multidimensional dataset?',
      questionAr: 'في NumPy، ما هو الاختلاف الحاسم في سلوك الذاكرة بين `arr.view()` و `arr.copy()` عند تطبيقهما على مجموعة بيانات كبيرة متعددة الأبعاد؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Both create identical clones, but copy() is faster for data mining tasks.', isCorrect: false },
        { id: 'b', text: 'view() shares the original memory buffer (modifying it changes the original), whereas copy() allocates new independent memory.', isCorrect: true },
        { id: 'c', text: 'copy() maintains a reference to the original data, while view() creates a read-only matrix.', isCorrect: false },
        { id: 'd', text: 'view() is used for 1D arrays and copy() is strictly used for 2D DataFrames.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q2',
      question: 'A data scientist executes: `df.iloc[2:5, [0, 3]]` on a Pandas DataFrame. What exactly is returned?',
      questionAr: 'عالم بيانات نفذ: `df.iloc[2:5, [0, 3]]` على Pandas DataFrame. ماذا يُرجع هذا التعبير بالضبط؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Rows with labels 2 through 5, and columns named 0 and 3.', isCorrect: false },
        { id: 'b', text: 'Rows at integer positions 2, 3, and 4; and columns at integer positions 0 and 3.', isCorrect: true },
        { id: 'c', text: 'Rows at integer positions 2, 3, 4, and 5; and all columns from index 0 to 3.', isCorrect: false },
        { id: 'd', text: 'A boolean mask indicating where values in columns 0 and 3 are between indices 2 and 5.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q3',
      question: 'When performing K-Means clustering using Scikit-Learn on a dataset with features measured in drastically different units (e.g., Age in years and Salary in thousands), what is the mandatory preprocessing step and why?',
      questionAr: 'عند إجراء تجميع K-Means باستخدام Scikit-Learn على مجموعة بيانات ذات ميزات مقاسة بوحدات مختلفة جذريًا (مثل العمر بالسنوات والراتب بالآلاف)، ما هي خطوة المعالجة المسبقة الإلزامية ولماذا؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Applying pca.fit_transform() to reduce dimensions to 2.', isCorrect: false },
        { id: 'b', text: 'Filling missing values with median to prevent infinite loop iterations.', isCorrect: false },
        { id: 'c', text: 'Applying StandardScaler().fit_transform() because K-Means uses Euclidean distance, which is heavily biased by variables with larger numeric ranges.', isCorrect: true },
        { id: 'd', text: 'Converting all columns to integers using .astype(int) to optimize memory usage.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q4',
      question: 'In SciPy hierarchical clustering, if a dendrogram is excessively noisy with 10,000 data points, which parameter configuration correctly condenses the visual output to only show the final 12 cluster merges?',
      questionAr: 'في التجميع الهرمي لـ SciPy، إذا كان المخطط الشجري مزعجًا بصريًا بشكل مفرط لوجود 10000 نقطة بيانات، فما هو تكوين المعاملات الذي يضغط الخرج المرئي لإظهار عمليات دمج المجموعات الـ 12 النهائية فقط؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'sch.dendrogram(linkage, max_clusters=12)', isCorrect: false },
        { id: 'b', text: 'sch.dendrogram(linkage, truncate_mode="lastp", p=12)', isCorrect: true },
        { id: 'c', text: 'sch.dendrogram(linkage, levels=12, compress=True)', isCorrect: false },
        { id: 'd', text: 'sch.dendrogram(linkage, p=12, mode="condense")', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q5',
      question: 'Consider a Fuzzy Logic rule: `IF Temperature is HOT (0.8) AND Humidity is HIGH (0.4) OR Wind is STRONG (0.6) THEN Risk is HIGH`. Assuming standard Min-Max inference, what is the calculated firing strength of this rule?',
      questionAr: 'ضع في اعتبارك قاعدة منطق ضبابي: `إذا كانت الحرارة حارة (0.8) والرطوبة عالية (0.4) أو الرياح قوية (0.6) فإن الخطر عالي`. بافتراض استدلال Min-Max القياسي، ما هي قوة التفعيل المحسوبة لهذه القاعدة؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'MAX(MIN(0.8, 0.4), 0.6) = MAX(0.4, 0.6) = 0.6', isCorrect: true },
        { id: 'b', text: 'MIN(MAX(0.8, 0.4), 0.6) = MIN(0.8, 0.6) = 0.6', isCorrect: false },
        { id: 'c', text: 'MIN(0.8, 0.4, 0.6) = 0.4', isCorrect: false },
        { id: 'd', text: 'MAX(0.8, 0.4, 0.6) = 0.8', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q6',
      question: 'In a Genetic Algorithm designed to solve the 0-1 Knapsack problem, what is the most severe consequence of setting the `mutation_probability` to 0.95 (95%)?',
      questionAr: 'في خوارزمية جينية مصممة لحل مشكلة الحقيبة 0-1، ما هي النتيجة الأكثر خطورة لتعيين `احتمال الطفرة` (mutation_probability) إلى 0.95 (95%)؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The population will converge instantly to the global optimum due to hyper-exploration.', isCorrect: false },
        { id: 'b', text: 'The algorithm degrades into a purely random search, effectively destroying favorable genetic traits inherited via crossover.', isCorrect: true },
        { id: 'c', text: 'The tournament selection process will fail to find 3 individuals.', isCorrect: false },
        { id: 'd', text: 'The fitness function will continuously return 0 for all individuals.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q7',
      question: 'When defining fuzzy membership functions using `skfuzzy`, what is the mathematical difference in the resulting shape between `fuzz.trimf(x, [10, 20, 30])` and `fuzz.trapmf(x, [10, 20, 30, 40])`?',
      questionAr: 'عند تعريف دوال العضوية الضبابية باستخدام `skfuzzy`، ما هو الفرق الرياضي في الشكل الناتج بين `fuzz.trimf(x, [10, 20, 30])` و `fuzz.trapmf(x, [10, 20, 30, 40])`؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'trimf creates a triangle peaking at 20; trapmf creates a trapezoid with a flat plateau of maximum membership (1.0) strictly between 20 and 30.', isCorrect: true },
        { id: 'b', text: 'trimf creates a curve; trapmf creates a triangle with an extended base.', isCorrect: false },
        { id: 'c', text: 'trimf has a peak at 30; trapmf has peaks at both 20 and 30.', isCorrect: false },
        { id: 'd', text: 'There is no difference; they are aliases for the same function.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q8',
      question: 'In Scikit-Learn, executing `model.fit_predict(X)` on an `AgglomerativeClustering` object returns:',
      questionAr: 'في Scikit-Learn، تنفيذ `model.fit_predict(X)` على كائن `AgglomerativeClustering` يُرجع:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The hierarchical linkage matrix (Z).', isCorrect: false },
        { id: 'b', text: 'An array of integer labels indicating the cluster assignment for each corresponding row in X.', isCorrect: true },
        { id: 'c', text: 'The coordinates of the cluster centroids.', isCorrect: false },
        { id: 'd', text: 'A visual dendrogram object.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q9',
      question: 'If a Genetic Algorithm utilizes Tournament Selection (size=3) from a population of 50, how does this method specifically preserve population diversity while applying selection pressure?',
      questionAr: 'إذا كانت خوارزمية جينية تستخدم اختيار البطولة (بحجم = 3) من مجموعة سكانية تبلغ 50، فكيف تحافظ هذه الطريقة تحديدًا على التنوع السكاني مع تطبيق ضغط الاختيار؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'It sorts the entire population and always pairs the top 3 together.', isCorrect: false },
        { id: 'b', text: 'It randomly selects 3 individuals and picks the best among them, giving weaker individuals a statistical chance to be selected if grouped with even weaker peers.', isCorrect: true },
        { id: 'c', text: 'It completely ignores the fitness function and relies solely on random chance.', isCorrect: false },
        { id: 'd', text: 'It merges the genes of all 3 selected individuals to create a super-parent.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q10',
      question: 'A dataset has severe outliers. Which combination of Pandas operation and Seaborn plot is the most robust approach to detect and handle them prior to clustering?',
      questionAr: 'تحتوي مجموعة بيانات على قيم متطرفة شديدة. ما هو المزيج بين عمليات Pandas ورسم Seaborn البياني الذي يُعد النهج الأكثر قوة لاكتشافها والتعامل معها قبل التجميع؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'df.mean() and sns.lineplot()', isCorrect: false },
        { id: 'b', text: 'df.corr() and sns.heatmap()', isCorrect: false },
        { id: 'c', text: 'Calculating IQR bounds with df.quantile() and visualizing with sns.boxplot()', isCorrect: true },
        { id: 'd', text: 'df.dropna() and sns.scatterplot()', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q11',
      question: 'In K-Medoids clustering, the key difference from K-Means is that medoids are actual data points. After running `kmedoids = KMedoids(n_clusters=3); kmedoids.fit(data)`, which TWO attributes give you the cluster assignments and the indices of the medoid points respectively?',
      questionAr: 'في تجميع K-Medoids، الفرق الرئيسي عن K-Means هو أن النقاط المركزية (medoids) هي نقاط بيانات فعلية. بعد تنفيذ `kmedoids = KMedoids(n_clusters=3); kmedoids.fit(data)`، ما هما الخاصيتان اللتان تعطيانك تعيينات المجموعات وفهارس نقاط الـ medoid على التوالي؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'kmedoids.clusters_ and kmedoids.centers_', isCorrect: false },
        { id: 'b', text: 'kmedoids.labels_ and kmedoids.medoid_indices_', isCorrect: true },
        { id: 'c', text: 'kmedoids.predict() and kmedoids.centroids_', isCorrect: false },
        { id: 'd', text: 'kmedoids.assignments_ and kmedoids.representatives_', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q12',
      question: 'Given Q1 = 200, Q3 = 800, and IQR = 600: A value of 1750 in the dataset would be classified as:',
      questionAr: 'إذا كان Q1 = 200، Q3 = 800، و IQR = 600: ستُصنف القيمة 1750 في مجموعة البيانات على أنها:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'Normal — it is within the IQR range.', isCorrect: false },
        { id: 'b', text: 'An outlier — it exceeds the Upper Bound (Q3 + 1.5 * IQR = 800 + 900 = 1700).', isCorrect: true },
        { id: 'c', text: 'A lower outlier — it is below the Lower Bound.', isCorrect: false },
        { id: 'd', text: 'Cannot be determined without the mean and standard deviation.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q13',
      question: 'You need to calculate the total revenue, average order value, and number of transactions for each "Region" in a DataFrame `df`. Which single Pandas command achieves this most efficiently?',
      questionAr: 'تحتاج إلى حساب إجمالي الإيرادات ومتوسط قيمة الطلب وعدد المعاملات لكل "منطقة" في DataFrame `df`. أي أمر Pandas واحد يحقق ذلك بأكبر قدر من الكفاءة؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'df.groupby("Region")["Revenue"].sum().mean().count()', isCorrect: false },
        { id: 'b', text: 'df.groupby("Region")["Revenue"].agg(["sum", "mean", "count"])', isCorrect: true },
        { id: 'c', text: 'df.describe().groupby("Region")', isCorrect: false },
        { id: 'd', text: 'df.pivot_table(values="Revenue", index="Region", aggfunc="all")', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q14',
      question: 'A researcher wants to visualize the correlation between ALL numeric columns in a DataFrame simultaneously. Which Seaborn function and its required Pandas preprocessing step is the correct approach?',
      questionAr: 'يريد باحث تصور الارتباط بين جميع الأعمدة الرقمية في DataFrame في وقت واحد. ما هي وظيفة Seaborn وخطوة معالجة Pandas المطلوبة للنهج الصحيح؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'sns.scatterplot(data=df) — no preprocessing needed.', isCorrect: false },
        { id: 'b', text: 'sns.heatmap(df.corr(), annot=True) — compute the correlation matrix first via df.corr().', isCorrect: true },
        { id: 'c', text: 'sns.barplot(data=df.describe()) — use describe() to generate statistics.', isCorrect: false },
        { id: 'd', text: 'sns.pairplot(df.corr()) — pass the correlation directly to pairplot.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q15',
      question: 'In single-point crossover, Parent A = [1, 0, 1, 1, 0, 0] and Parent B = [0, 1, 0, 0, 1, 1]. If the crossover point is at index 4, what is Child 1 (taking the LEFT side from Parent A)?',
      questionAr: 'في العبور أحادي النقطة، الأب A = [1, 0, 1, 1, 0, 0] والأب B = [0, 1, 0, 0, 1, 1]. إذا كانت نقطة العبور عند الفهرس 4، فما هو الطفل 1 (أخذ الجانب الأيسر من الأب A)؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '[1, 0, 1, 1, 1, 1]', isCorrect: true },
        { id: 'b', text: '[0, 1, 0, 0, 0, 0]', isCorrect: false },
        { id: 'c', text: '[1, 0, 1, 1, 0, 0]', isCorrect: false },
        { id: 'd', text: '[1, 1, 1, 1, 1, 1]', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q16',
      question: 'A student writes: `df.loc[df["Monthly_Spending"] > 8000, "Monthly_Spending"] = 8000`. What is the precise effect on the DataFrame?',
      questionAr: 'كتب طالب: `df.loc[df["Monthly_Spending"] > 8000, "Monthly_Spending"] = 8000`. ما هو التأثير الدقيق على الـ DataFrame؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'All rows where Monthly_Spending > 8000 are deleted from the DataFrame.', isCorrect: false },
        { id: 'b', text: 'Only values exceeding 8000 in the Monthly_Spending column are replaced (capped) with exactly 8000, leaving all other values and rows unchanged.', isCorrect: true },
        { id: 'c', text: 'The entire Monthly_Spending column is overwritten to 8000 for all rows.', isCorrect: false },
        { id: 'd', text: 'All values in Monthly_Spending are normalized to a 0-8000 range using min-max scaling.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q17',
      question: 'In the Fuzzy System Architecture, which component is specifically responsible for using the Rule Base to transform the "Fuzzy Input Set" into a "Fuzzy Output Set"?',
      questionAr: 'في بنية النظام الضبابي، أي مكون مسؤول تحديداً عن استخدام قاعدة القواعد لتحويل "مجموعة المدخلات الضبابية" إلى "مجموعة مخرجات ضبابية"؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The Fuzzifier — it converts crisp inputs to fuzzy sets.', isCorrect: false },
        { id: 'b', text: 'The Defuzzifier — it converts fuzzy outputs to crisp values.', isCorrect: false },
        { id: 'c', text: 'The Inference Engine — it evaluates fuzzy rules against fuzzy inputs to produce fuzzy outputs.', isCorrect: true },
        { id: 'd', text: 'The Membership Function — it defines the shape of the fuzzy sets.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q18',
      question: 'Given a NumPy array `arr = np.array([10, 20, 30, 40, 50, 60])`, what does `arr.reshape(3, 2)` produce and what would `arr.reshape(2, 4)` cause?',
      questionAr: 'إذا كانت لديك مصفوفة NumPy `arr = np.array([10, 20, 30, 40, 50, 60])`، ماذا ينتج `arr.reshape(3, 2)` وماذا سيسبب `arr.reshape(2, 4)`؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'reshape(3,2) produces a 3x2 matrix; reshape(2,4) produces a 2x4 matrix.', isCorrect: false },
        { id: 'b', text: 'reshape(3,2) produces [[10,20],[30,40],[50,60]]; reshape(2,4) raises a ValueError because 2*4=8 ≠ 6 elements.', isCorrect: true },
        { id: 'c', text: 'Both work fine; reshape automatically pads missing elements with zeros.', isCorrect: false },
        { id: 'd', text: 'reshape(3,2) fails; reshape(2,4) succeeds by truncating extra elements.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q19',
      question: 'After running a fuzzy control simulation with `sim.compute()`, a student tries to read the output using `sim.output["watering_duration"]` but gets a KeyError. The most likely cause is:',
      questionAr: 'بعد تشغيل محاكاة تحكم ضبابي باستخدام `sim.compute()`، حاول طالب قراءة المخرج باستخدام `sim.output["watering_duration"]` لكنه حصل على KeyError. السبب الأكثر ترجيحاً هو:',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: 'The .compute() method was never called.', isCorrect: false },
        { id: 'b', text: 'The Consequent variable was defined with a different string name than "watering_duration" (e.g., "watering" or "duration").', isCorrect: true },
        { id: 'c', text: 'The output must be accessed via sim.result[] not sim.output[].', isCorrect: false },
        { id: 'd', text: 'Fuzzy systems do not produce outputs; they only visualize membership functions.', isCorrect: false },
      ],
    },
    {
      id: 'dm-h-q20',
      question: 'For the GA Knapsack problem with items = [[1,2],[2,4],[3,4],[4,5],[5,7],[6,9]] and max_weight=10, what is the fitness of the individual [0, 1, 1, 1, 0, 0]?',
      questionAr: 'لمشكلة حقيبة الخوارزمية الجينية مع items = [[1,2],[2,4],[3,4],[4,5],[5,7],[6,9]] و max_weight=10، ما هي كفاءة الفرد [0, 1, 1, 1, 0, 0]؟',
      difficulty: 'hard',
      answers: [
        { id: 'a', text: '0 — the total weight exceeds 10.', isCorrect: false },
        { id: 'b', text: '13 — weight=2+3+4=9 ≤ 10, value=4+4+5=13.', isCorrect: true },
        { id: 'c', text: '9 — the fitness equals the total weight.', isCorrect: false },
        { id: 'd', text: '15 — all item values are summed regardless of selection.', isCorrect: false },
      ],
    }
  ],

  written: [
    {
      id: 'dm-h-w1',
      question: 'Question 2.1 (Data Prep & KMeans): You have a Pandas DataFrame `df` with columns `["Age", "Income", "Score"]`. Write Python code to: 1) Extract ONLY the "Income" and "Score" columns into a NumPy array `X` using index-based selection. 2) Standardize `X` using `StandardScaler`. 3) Train a K-Means model with 4 clusters and assign the resulting labels to a new column `df["Cluster"]`.',
      questionAr: 'السؤال 2.1 (تجهيز البيانات و KMeans): لديك Pandas DataFrame `df` يحتوي على الأعمدة `["Age", "Income", "Score"]`. اكتب كود بايثون لـ: 1) استخراج أعمدة "Income" و "Score" فقط في مصفوفة NumPy `X` باستخدام التحديد القائم على الفهرس (index). 2) تقييس `X` باستخدام `StandardScaler`. 3) تدريب نموذج K-Means بـ 4 مجموعات وتعيين التسميات الناتجة في عمود جديد `df["Cluster"]`.',
      modelAnswer: "from sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\n\n# 1. Select 'Income' (idx 1) and 'Score' (idx 2)\nX = df.iloc[:, [1, 2]].values\n\n# 2. Standardize data\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# 3. K-Means clustering\nkmeans = KMeans(n_clusters=4, random_state=42)\ndf['Cluster'] = kmeans.fit_predict(X_scaled)",
      modelAnswerAr: "استيراد المكتبات، استخدام iloc[:, [1, 2]].values لاستخراج المصفوفة، ثم StandardScaler().fit_transform(X)، وأخيراً KMeans(n_clusters=4).fit_predict().",
    },
    {
      id: 'dm-h-w2',
      question: 'Question 2.2 (Hierarchical & SciPy): Write the complete Python code to compute a Ward linkage matrix for a dataset `data_scaled`, and plot a dendrogram that is truncated to show ONLY the final 5 cluster merges. Make sure to display the plot.',
      questionAr: 'السؤال 2.2 (التجميع الهرمي و SciPy): اكتب كود بايثون الكامل لحساب مصفوفة ربط Ward لمجموعة بيانات `data_scaled`، ورسم مخطط شجري (dendrogram) مقطوع لإظهار آخر 5 عمليات دمج للمجموعات فقط. تأكد من عرض الرسم البياني.',
      modelAnswer: "import scipy.cluster.hierarchy as sch\nimport matplotlib.pyplot as plt\n\n# Compute linkage matrix\nZ = sch.linkage(data_scaled, method='ward')\n\n# Plot truncated dendrogram\nplt.figure(figsize=(10, 6))\nsch.dendrogram(Z, truncate_mode='lastp', p=5)\nplt.title('Truncated Hierarchical Dendrogram')\nplt.xlabel('Cluster Size')\nplt.ylabel('Distance')\nplt.show()",
      modelAnswerAr: "استخدام sch.linkage مع method='ward'، ثم sch.dendrogram مع truncate_mode='lastp' و p=5، وأخيراً plt.show().",
    },
    {
      id: 'dm-h-w3',
      question: 'Question 2.3 (Fuzzy Logic): Define a fuzzy control system for a Washing Machine. It has two inputs: `dirt_level` (0-100) and `load_size` (0-10), and one output: `wash_time` (10-60). Write the `skfuzzy` code to: 1) Define these Antecedents/Consequents. 2) Define a Triangular membership for `dirt_level` named "high" peaking at 80 (range 60-100). 3) Write a rule: IF dirt_level is high AND load_size is heavy, THEN wash_time is very_long.',
      questionAr: 'السؤال 2.3 (المنطق الضبابي): عرّف نظام تحكم ضبابي لغسالة. لها مدخلان: `dirt_level` (0-100) و `load_size` (0-10)، ومخرج واحد: `wash_time` (10-60). اكتب كود `skfuzzy` لـ: 1) تعريف هذه السوابق/اللوحق. 2) تعريف عضوية مثلثة لـ `dirt_level` تسمى "high" ذروتها عند 80 (نطاق 60-100). 3) كتابة قاعدة: إذا كان مستوى الأوساخ عالياً وحجم الحمولة ثقيلاً، فإن وقت الغسيل طويل جداً.',
      modelAnswer: "import numpy as np\nfrom skfuzzy import control as ctrl\nimport skfuzzy as fuzz\n\n# 1. Variables\ndirt_level = ctrl.Antecedent(np.arange(0, 101, 1), 'dirt_level')\nload_size = ctrl.Antecedent(np.arange(0, 11, 1), 'load_size')\nwash_time = ctrl.Consequent(np.arange(10, 61, 1), 'wash_time')\n\n# 2. Membership Function\ndirt_level['high'] = fuzz.trimf(dirt_level.universe, [60, 80, 100])\n\n# 3. Rule (assuming load_size['heavy'] and wash_time['very_long'] are defined)\nrule = ctrl.Rule(dirt_level['high'] & load_size['heavy'], wash_time['very_long'])",
      modelAnswerAr: "تعريف Antecedent و Consequent باستخدام np.arange، استخدام fuzz.trimf لإنشاء دالة العضوية المثلثة باستخدام .universe، ثم تعريف القاعدة باستخدام معامل '&'.",
    },
    {
      id: 'dm-h-w4',
      question: 'Question 2.4 (Genetic Algorithm): In a GA for the Knapsack problem, you are given `items = [[weight, value], ...]`, `max_weight = 20`, and an `individual` (a list of 0s and 1s). Write an advanced Python `fitness(individual)` function that calculates total value and total weight. If weight > 20, instead of returning 0, apply a harsh penalty: return `total_value - (total_weight - max_weight) * 10`. If weight <= 20, return `total_value`.',
      questionAr: 'السؤال 2.4 (الخوارزمية الجينية): في خوارزمية جينية لمشكلة الحقيبة، لديك `items = [[weight, value], ...]`, `max_weight = 20`، وفرد `individual` (قائمة من 0 و 1). اكتب دالة `fitness(individual)` متقدمة تحسب إجمالي القيمة وإجمالي الوزن. إذا كان الوزن > 20، بدلاً من إرجاع 0، قم بتطبيق عقوبة قاسية: أرجع `total_value - (total_weight - max_weight) * 10`. إذا كان الوزن <= 20، أرجع `total_value`.',
      modelAnswer: "def fitness(individual):\n    total_weight = 0\n    total_value = 0\n    max_weight = 20\n    \n    for i in range(len(individual)):\n        if individual[i] == 1:\n            total_weight += items[i][0]\n            total_value += items[i][1]\n            \n    if total_weight > max_weight:\n        penalty = (total_weight - max_weight) * 10\n        return total_value - penalty\n    \n    return total_value",
      modelAnswerAr: "تكرار عبر الفرد، حساب الإجمالي للوزن والقيمة استناداً إلى فهرس العنصر، ثم التحقق من شرط تجاوز الوزن لتطبيق معادلة العقوبة المطلوبة.",
    },
    {
      id: 'dm-h-w5',
      question: 'Question 2.5 (IQR Outlier Detection): Given a DataFrame `df` with a column "Salary", write Python code to: 1) Calculate Q1 and Q3 using `df.quantile()`. 2) Compute the IQR. 3) Calculate the Lower and Upper bounds. 4) Use `df.loc` to cap (clip) all outlier values — replace values below Lower Bound with the Lower Bound, and values above Upper Bound with the Upper Bound.',
      questionAr: 'السؤال 2.5 (كشف القيم المتطرفة بـ IQR): لديك DataFrame `df` يحتوي على عمود "Salary"، اكتب كود بايثون لـ: 1) حساب Q1 و Q3 باستخدام `df.quantile()`. 2) حساب IQR. 3) حساب الحدين العلوي والسفلي. 4) استخدام `df.loc` لقص (cap) جميع القيم المتطرفة — استبدال القيم تحت الحد الأدنى بالحد الأدنى، والقيم فوق الحد العلوي بالحد العلوي.',
      modelAnswer: "Q1 = df['Salary'].quantile(0.25)\nQ3 = df['Salary'].quantile(0.75)\nIQR = Q3 - Q1\n\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\n# Cap outliers using .loc\ndf.loc[df['Salary'] < lower_bound, 'Salary'] = lower_bound\ndf.loc[df['Salary'] > upper_bound, 'Salary'] = upper_bound",
      modelAnswerAr: "حساب Q1 و Q3 باستخدام quantile(0.25) و quantile(0.75)، ثم IQR = Q3 - Q1، والحدود = Q1/Q3 ± 1.5*IQR، واستخدام df.loc للاستبدال الشرطي.",
    },
    {
      id: 'dm-h-w6',
      question: 'Question 2.6 (Visualization): You have a DataFrame `employee_data` with columns ["Department", "Experience_Years", "Performance_Score"]. Write Python code using Seaborn and Matplotlib to: A) Create a scatter plot showing the relationship between Experience_Years (x-axis) and Performance_Score (y-axis), with points colored by Department. B) Create a heatmap of the correlation matrix for all numeric columns, with annotations enabled. C) Label all axes, add titles, and display both plots.',
      questionAr: 'السؤال 2.6 (التصور المرئي): لديك DataFrame يسمى `employee_data` بأعمدة ["Department", "Experience_Years", "Performance_Score"]. اكتب كود بايثون باستخدام Seaborn و Matplotlib لـ: أ) إنشاء مخطط تشتت يوضح العلاقة بين سنوات الخبرة (محور x) ودرجة الأداء (محور y)، مع تلوين النقاط حسب القسم. ب) إنشاء خريطة حرارية لمصفوفة الارتباط لجميع الأعمدة الرقمية، مع تمكين التعليقات التوضيحية. ج) تسمية جميع المحاور وإضافة عناوين وعرض كلا الرسمين.',
      modelAnswer: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\n# A) Scatter plot colored by Department\nplt.figure(figsize=(10, 6))\nsns.scatterplot(data=employee_data, x='Experience_Years', y='Performance_Score', hue='Department')\nplt.xlabel('Experience (Years)')\nplt.ylabel('Performance Score')\nplt.title('Experience vs Performance by Department')\nplt.show()\n\n# B) Correlation heatmap\nplt.figure(figsize=(8, 6))\nsns.heatmap(employee_data.corr(), annot=True, cmap='coolwarm')\nplt.title('Correlation Matrix Heatmap')\nplt.show()",
      modelAnswerAr: "استخدام sns.scatterplot مع hue='Department' لتلوين النقاط حسب القسم، ثم sns.heatmap(employee_data.corr(), annot=True) للخريطة الحرارية مع التعليقات التوضيحية.",
    },
    {
      id: 'dm-h-w7',
      question: 'Question 2.7 (K-Medoids): You have a scaled dataset `X_scaled`. Write Python code to: A) Import KMedoids from sklearn_extra.cluster. B) Create a K-Medoids model with 3 clusters. C) Fit the model and get the cluster labels. D) Print the medoid indices and the cluster centers (which are actual data points).',
      questionAr: 'السؤال 2.7 (K-Medoids): لديك مجموعة بيانات مقيّسة `X_scaled`. اكتب كود بايثون لـ: أ) استيراد KMedoids من sklearn_extra.cluster. ب) إنشاء نموذج K-Medoids بـ 3 مجموعات. ج) تدريب النموذج والحصول على تسميات المجموعات. د) طباعة فهارس الـ medoid ومراكز المجموعات (وهي نقاط بيانات فعلية).',
      modelAnswer: "from sklearn_extra.cluster import KMedoids\n\n# Create K-Medoids model\nkmedoids = KMedoids(n_clusters=3, random_state=42)\n\n# Fit and get labels\nlabels = kmedoids.fit_predict(X_scaled)\n\n# Print results\nprint('Medoid Indices:', kmedoids.medoid_indices_)\nprint('Cluster Centers (actual data points):', kmedoids.cluster_centers_)\nprint('Labels:', kmedoids.labels_)",
      modelAnswerAr: "استيراد KMedoids، إنشاء النموذج بـ n_clusters=3، استخدام fit_predict للتدريب والتسمية، ثم طباعة medoid_indices_ و cluster_centers_ و labels_.",
    },
    {
      id: 'dm-h-w8',
      question: 'Question 2.8 (GA Population): A company has a budget of 25 units. The tools are: Laptop Stand (cost=4, value=7), Mouse (3, 5), Keyboard (6, 10), Webcam (5, 8), Mic (7, 12), Headset (4, 6). Write Python code to: A) Create a list of lists representing [cost, value] for each tool. B) Write a function `generate_population(size, n_items)` that generates a population of random binary chromosomes. C) Generate a population of 8 individuals and print it.',
      questionAr: 'السؤال 2.8 (مجتمع GA): شركة لديها ميزانية 25 وحدة. الأدوات هي: حامل لابتوب (تكلفة=4، قيمة=7)، ماوس (3، 5)، كيبورد (6، 10)، كاميرا (5، 8)، ميكروفون (7، 12)، سماعة (4، 6). اكتب كود بايثون لـ: أ) إنشاء قائمة قوائم تمثل [التكلفة، القيمة] لكل أداة. ب) كتابة دالة `generate_population(size, n_items)` تولد مجتمعاً من الكروموسومات الثنائية العشوائية. ج) توليد مجتمع من 8 أفراد وطباعته.',
      modelAnswer: "import random\n\n# A) Items dataset\ntools = [[4, 7], [3, 5], [6, 10], [5, 8], [7, 12], [4, 6]]\n\n# B) Population generator\ndef generate_population(size, n_items):\n    return [[random.randint(0, 1) for _ in range(n_items)] for _ in range(size)]\n\n# C) Generate and print\npopulation = generate_population(8, len(tools))\nfor i, ind in enumerate(population):\n    print(f'Individual {i+1}: {ind}')",
      modelAnswerAr: "تعريف قائمة الأدوات كقائمة قوائم [تكلفة، قيمة]، ثم دالة تولد قائمة ثنائية الأبعاد من البتات العشوائية باستخدام random.randint(0,1)، وتوليد 8 أفراد.",
    },
    {
      id: 'dm-h-w9',
      question: 'Question 2.9 (Pandas Data Cleaning): You have a DataFrame `df` with columns ["Name", "Age", "Salary", "Department"]. Write Python code to: A) Check for missing values in the entire DataFrame. B) Fill missing "Age" values with the median age. C) Drop any remaining rows that still contain NaN values. D) Use `groupby` and `agg` to calculate the mean and max Salary for each Department.',
      questionAr: 'السؤال 2.9 (تنظيف بيانات Pandas): لديك DataFrame `df` بأعمدة ["Name", "Age", "Salary", "Department"]. اكتب كود بايثون لـ: أ) التحقق من القيم المفقودة في كامل الـ DataFrame. ب) ملء قيم "Age" المفقودة بالوسيط (median). ج) حذف أي صفوف متبقية تحتوي على قيم NaN. د) استخدام `groupby` و `agg` لحساب متوسط وأقصى راتب لكل قسم.',
      modelAnswer: "# A) Check missing values\nprint(df.isnull().sum())\n\n# B) Fill missing Age with median\ndf['Age'] = df['Age'].fillna(df['Age'].median())\n\n# C) Drop remaining NaN rows\ndf = df.dropna()\n\n# D) Groupby with multiple aggregations\nresult = df.groupby('Department')['Salary'].agg(['mean', 'max'])\nprint(result)",
      modelAnswerAr: "استخدام isnull().sum() للتحقق، fillna(median()) لملء العمر، dropna() لحذف الباقي، وgroupby().agg(['mean','max']) للتجميع.",
    },
    {
      id: 'dm-h-w10',
      question: 'Question 2.10 (Fuzzy Simulation): Using the sprinkler system code from Section 8, write the complete Python code to: A) Create a ControlSystem with rule1 and rule2. B) Create a ControlSystemSimulation. C) Set the input air_temperature to 95 and soil_moisture to 8. D) Run the computation and print the resulting watering_duration output rounded to 1 decimal place.',
      questionAr: 'السؤال 2.10 (محاكاة ضبابية): باستخدام كود نظام الرشاش من القسم 8، اكتب كود بايثون الكامل لـ: أ) إنشاء ControlSystem مع rule1 و rule2. ب) إنشاء ControlSystemSimulation. ج) تعيين مدخل air_temperature إلى 95 و soil_moisture إلى 8. د) تشغيل الحساب وطباعة مخرج watering_duration مقرباً إلى منزلة عشرية واحدة.',
      modelAnswer: "from skfuzzy import control as ctrl\n\n# A) Create control system\nsprinkler_ctrl = ctrl.ControlSystem([rule1, rule2])\n\n# B) Create simulation\nsim = ctrl.ControlSystemSimulation(sprinkler_ctrl)\n\n# C) Set inputs\nsim.input['air_temperature'] = 95\nsim.input['soil_moisture'] = 8\n\n# D) Compute and print\nsim.compute()\nresult = sim.output['watering_duration']\nprint(f'Watering Duration: {round(result, 1)}%')",
      modelAnswerAr: "إنشاء ControlSystem بالقواعد، ثم ControlSystemSimulation، تعيين المدخلات عبر sim.input['var'] = value، واستدعاء sim.compute()، وقراءة sim.output['watering_duration'].",
    }
  ]
};
