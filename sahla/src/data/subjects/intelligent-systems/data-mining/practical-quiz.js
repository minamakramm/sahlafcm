export const PRACTICAL_QUIZ = {
  subjectId: 'data-mining',
  title: 'Data Mining Final Practical Exam',
  titleAr: 'الامتحان العملي النهائي - تنقيب البيانات',
  timeLimitMinutes: 60,
  duration: 3600,
  mcqMarks: 20,
  writtenMarks: 30,
  passPercentage: 50,
  
  parts: [
    {
      id: 'part-a',
      title: 'Question 1: Multiple Choice Questions',
      titleAr: 'السؤال الأول: أسئلة الاختيار من متعدد',
      type: 'mcq'
    },
    {
      id: 'part-b',
      title: 'Question 2: Python Practical Coding',
      titleAr: 'السؤال الثاني: البرمجة العملية باستخدام بايثون',
      type: 'written'
    }
  ],

  mcq: [
    {
      id: 'dm-prac-q1',
      question: 'A smart ventilation system decides whether to increase fan speed using the rule: IF room temperature is high AND air pollution is high THEN Fan Speed is Fast. Given: high temp = 0.72, high pollution = 0.48. According to "min-max" inference, what is the resulting rule strength?',
      questionAr: 'يقرر نظام تهوية ذكي ما إذا كان سيزيد من سرعة المروحة باستخدام القاعدة: "إذا كانت درجة حرارة الغرفة عالية وكان تلوث الهواء مرتفعًا فإن سرعة المروحة سريعة". معطى: درجة الحرارة = 0.72، تلوث الهواء = 0.48. وفقًا لاستدلال "min-max"، ما هي قوة القاعدة الناتجة؟',
      answers: [
        { id: 'a', text: '0.72', isCorrect: false },
        { id: 'b', text: '0.48', isCorrect: true },
        { id: 'c', text: '1.20', isCorrect: false },
        { id: 'd', text: '0.60', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q2',
      question: 'A student is using Pandas to clean a dataset and writes: df.loc[df["Monthly_Spending"] > 8000, "Monthly_Spending"] = 8000. What is the result of this line of code?',
      questionAr: 'يستخدم طالب Pandas لتنظيف مجموعة بيانات وكتب: df.loc[df["Monthly_Spending"] > 8000, "Monthly_Spending"] = 8000. ما هي نتيجة هذا السطر البرمجي؟',
      answers: [
        { id: 'a', text: 'All rows with Monthly_Spending greater than 8000 are deleted', isCorrect: false },
        { id: 'b', text: 'Values greater than 8000 are replaced with 8000', isCorrect: true },
        { id: 'c', text: 'All values in Monthly_Spending are normalized between 0 and 8000', isCorrect: false },
        { id: 'd', text: 'The entire column is set to 8000', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q3',
      question: 'In K-Medoids clustering, what does the value 3 mean in the following code: KMedoids(n_clusters=3)?',
      questionAr: 'في تجميع K-Medoids، ماذا تعني القيمة 3 في الكود التالي: KMedoids(n_clusters=3)؟',
      answers: [
        { id: 'a', text: 'The algorithm will run 3 iterations', isCorrect: false },
        { id: 'b', text: 'The dataset will be divided into 3 clusters', isCorrect: true },
        { id: 'c', text: 'The algorithm will remove 3 outliers', isCorrect: false },
        { id: 'd', text: 'The distance matrix will contain 3 columns', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q4',
      question: 'When identifying outliers using the Interquartile Range (IQR) method, how is the upper bound calculated?',
      questionAr: 'عند تحديد القيم المتطرفة باستخدام طريقة المدى الربيعي (IQR)، كيف يتم حساب الحد العلوي؟',
      answers: [
        { id: 'a', text: 'Q1 - 1.5 * IQR', isCorrect: false },
        { id: 'b', text: 'Q3 + 1.5 * IQR', isCorrect: true },
        { id: 'c', text: 'Mean + 2 * Standard Deviation', isCorrect: false },
        { id: 'd', text: 'Q3 - Q1', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q5',
      question: 'The code "individual[i] = 1 - individual[i]" is used in Genetic Algorithms to flip a bit from 0 to 1 or from 1 to 0.',
      questionAr: 'يُستخدم الكود "individual[i] = 1 - individual[i]" في الخوارزميات الجينية لقلب البت من 0 إلى 1 أو من 1 إلى 0.',
      answers: [
        { id: 'a', text: 'True', isCorrect: true },
        { id: 'b', text: 'False', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q6',
      question: 'In the Fuzzy System Architecture, the Defuzzifier is specifically responsible for using the Rule Base to transform the "Fuzzy Input Set" into a "Fuzzy Output Set"?',
      questionAr: 'في بنية النظام الضبابي، يكون الـ Defuzzifier مسؤولاً بشكل خاص عن استخدام قاعدة القواعد لتحويل "مجموعة المدخلات الضبابية" إلى "مجموعة مخرجات ضبابية"؟',
      answers: [
        { id: 'a', text: 'True', isCorrect: false },
        { id: 'b', text: 'False', isCorrect: true },
      ],
    },
    {
      id: 'dm-prac-q7',
      question: 'When identifying outliers using the Interquartile Range (IQR) method, how is the "lower bound" threshold calculated?',
      questionAr: 'عند تحديد القيم المتطرفة باستخدام طريقة المدى الربيعي (IQR)، كيف يتم حساب عتبة "الحد الأدنى"؟',
      answers: [
        { id: 'a', text: 'Q3 + 1.5 * IQR', isCorrect: false },
        { id: 'b', text: 'Q1 - 1.5 * IQR', isCorrect: true },
        { id: 'c', text: 'Q1 - (Q3 - Q1)', isCorrect: false },
        { id: 'd', text: 'Mean - 2 * Standard Deviation', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q8',
      question: 'In the Genetic Algorithm code, what is the purpose of "random.random() < mutation_probability"?',
      questionAr: 'في كود الخوارزمية الجينية، ما هو الغرض من "random.random() < mutation_probability"؟',
      answers: [
        { id: 'a', text: 'To decide which two parents will be selected for crossover', isCorrect: false },
        { id: 'b', text: 'To determine if a specific gene in an individual\'s chromosome should be flipped', isCorrect: true },
        { id: 'c', text: 'To randomly reduce the weight of the knapsack if it is too heavy', isCorrect: false },
        { id: 'd', text: 'To stop the algorithm if a perfect solution is found', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q9',
      question: 'You have a DataFrame "df" and want to calculate the total sum, the average, and the number of entries for "Annual Salary" grouped by "Department". Which command is most efficient?',
      questionAr: 'لديك DataFrame "df" وتريد حساب المجموع الإجمالي، والمتوسط، وعدد المدخلات لـ "Annual Salary" مجمعة حسب "Department". أي أمر هو الأكثر كفاءة؟',
      answers: [
        { id: 'a', text: 'df.groupby("Department")["Annual Salary"].sum().mean().count()', isCorrect: false },
        { id: 'b', text: 'df.groupby("Department")["Annual Salary"].agg(["sum", "mean", "count"])', isCorrect: true },
        { id: 'c', text: 'df.describe().groupby("Department")', isCorrect: false },
        { id: 'd', text: 'df.groupby("Department").sum() + df.mean()', isCorrect: false },
      ],
    },
    {
      id: 'dm-prac-q10',
      question: 'After running kmedoids.fit(data), which attribute provides the cluster index for each individual data point?',
      questionAr: 'بعد تشغيل kmedoids.fit(data)، أي خاصية توفر فهرس المجموعة (cluster index) لكل نقطة بيانات فردية؟',
      answers: [
        { id: 'a', text: 'kmedoids.cluster_centers_', isCorrect: false },
        { id: 'b', text: 'kmedoids.inertia', isCorrect: false },
        { id: 'c', text: 'kmedoids.labels_', isCorrect: true },
        { id: 'd', text: 'kmedoids.n_clusters', isCorrect: false },
      ],
    }
  ],

  written: [
    {
      id: 'dm-prac-w1',
      question: 'Write the Python code to visualize the relationship between "Monthly_Sales" and "Customer_Rating" from a DataFrame "sales_data". Create a scatter plot, label the axes, and display the figure.',
      questionAr: 'اكتب كود بايثون لتصور العلاقة بين "Monthly_Sales" و "Customer_Rating" من DataFrame يسمى "sales_data". أنشئ مخطط تشتت، وقم بتسمية المحاور، واعرض الشكل.',
      modelAnswer: "import matplotlib.pyplot as plt\nplt.scatter(sales_data['Monthly_Sales'], sales_data['Customer_Rating'])\nplt.xlabel('Monthly Sales')\nplt.ylabel('Customer Rating')\nplt.title('Sales vs Rating')\nplt.show()",
      modelAnswerAr: "استيراد المكتبة ثم استخدام plt.scatter لرسم البيانات وتسمية المحاور.",
    },
    {
      id: 'dm-prac-w2',
      question: 'Given a budget of 25 units, create a list of lists for these tools (Laptop Stand: 4/7, Wireless Mouse: 3/5, Keyboard: 6/10, Webcam: 5/8, Microphone: 7/12, Headset: 4/6). Then write a function to generate an initial population for a Genetic Algorithm.',
      questionAr: 'بالنظر إلى ميزانية قدرها 25 وحدة، أنشئ قائمة قوائم لهذه الأدوات. ثم اكتب دالة لتوليد مجتمع أولي (initial population) لخوارزمية جينية.',
      modelAnswer: "tools = [[4, 7], [3, 5], [6, 10], [5, 8], [7, 12], [4, 6]]\nimport random\ndef generate_population(size, items_count):\n    return [[random.randint(0, 1) for _ in range(items_count)] for _ in range(size)]",
      modelAnswerAr: "تعريف القائمة ثم كتابة دالة تستخدم random.randint لتوليد الكروموسومات.",
    },
    {
      id: 'dm-prac-w3',
      question: 'Design a fuzzy logic system to control car acceleration (-5 to +5). Define the Consequent "acceleration" and write a rule: IF distance is "far" AND speed limit is "very_high", THEN acceleration is "hard_accelerate".',
      questionAr: 'صمم نظام منطق ضبابي للتحكم في تسارع السيارة (-5 إلى +5). عرف الـ Consequent "acceleration" واكتب قاعدة: "إذا كانت المسافة بعيدة وحد السرعة مرتفع جدًا، فإن التسارع قوي جداً".',
      modelAnswer: "from skfuzzy import control as ctrl\nacceleration = ctrl.Consequent(np.arange(-5, 6, 1), 'acceleration')\nrule = ctrl.Rule(distance['far'] & speed_limit['very_high'], acceleration['hard_accelerate'])",
      modelAnswerAr: "استخدام skfuzzy.control لتعريف المخرجات والقواعد المنطقية.",
    },
    {
      id: 'dm-prac-w4',
      question: 'A logistics company wants to analyze delivery performance. Write the code to visualize the relationship between "Deliveries Completed" and "On-time Percentage" using a suitable plot.',
      questionAr: 'تريد شركة لوجستية تحليل أداء التسليم. اكتب الكود لتصور العلاقة بين "التسليمات المكتملة" و "نسبة التسليم في الوقت المحدد" باستخدام مخطط مناسب.',
      modelAnswer: "import seaborn as sns\nsns.scatterplot(data=delivery_data, x='Deliveries Completed', y='Online Percentage')\nplt.show()",
      modelAnswerAr: "استخدام Seaborn أو Matplotlib لرسم العلاقة بين المتغيرين.",
    }
  ]
};
