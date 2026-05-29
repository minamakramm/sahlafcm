export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'smart-systems',
  number: 'quiz1',
  title: 'Quiz 1 — Python & Smart Foundations',
  titleAr: 'اختبار 1 — أساسيات بايثون والأنظمة الذكية',

  // ── TAB 1 — Quick Review ──────────────────────────────────────────
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>🔹 Python Fundamentals</h2>
<p>Python is a high-level, versatile language. Key syntax rules include:</p>
<ul>
  <li><strong>Indentation:</strong> Critical for defining code blocks (e.g., after <code>if</code> or <code>for</code>). Missing it causes an <code>IndentationError</code>.</li>
  <li><strong>Variables:</strong> Case-sensitive, cannot start with a number. Primitives: <code>str, int, float, bool</code>.</li>
  <li><strong>Comments:</strong> Use <code>#</code> for single-line and <code>""" """</code> for multi-line.</li>
  <li><strong>I/O:</strong> <code>input()</code> always returns a <code>str</code> — convert with <code>int()</code> or <code>float()</code>. <code>print()</code> can take <code>sep</code> and <code>end</code> parameters.</li>
</ul>

<h2>🔹 String Formatting</h2>
<p>Modern Python uses <strong>f-strings</strong> for efficiency and readability:</p>
<pre><code>name = "Ali"
age = 22
print(f"Student {name} is {age} years old.")</code></pre>

<h2>🔹 Data Collections — Deep Dive</h2>
<table class="styled-table">
  <thead>
    <tr><th>Collection</th><th>Syntax</th><th>Ordered</th><th>Mutable</th><th>Duplicates</th><th>Use Case</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>List</strong></td>
      <td><code>[1, 2, 3]</code></td>
      <td>Yes</td><td>Yes</td><td>Yes</td>
      <td>Standard dynamic arrays.</td>
    </tr>
    <tr>
      <td><strong>Tuple</strong></td>
      <td><code>(1, 2, 3)</code></td>
      <td>Yes</td><td>No</td><td>Yes</td>
      <td>Constant data / coordinates.</td>
    </tr>
    <tr>
      <td><strong>Set</strong></td>
      <td><code>{1, 2, 3}</code></td>
      <td>No</td><td>Yes</td><td>No</td>
      <td>Filtering duplicates.</td>
    </tr>
    <tr>
      <td><strong>Dictionary</strong></td>
      <td><code>{'a': 1}</code></td>
      <td>No</td><td>Yes</td><td>Keys: No</td>
      <td>Mapping data (JSON-like).</td>
    </tr>
  </tbody>
</table>

<h2>🔹 List vs. Tuple Operations</h2>
<ul>
  <li><strong>List Manipulation:</strong> <code>append()</code>, <code>insert(i, x)</code>, <code>remove(x)</code>, <code>pop(i)</code>, <code>sort()</code>, <code>reverse()</code>.</li>
  <li><strong>Slicing:</strong> <code>lst[start:stop:step]</code>. Example: <code>lst[::-1]</code> reverses a list.</li>
  <li><strong>Tuple Safety:</strong> Since tuples are <strong>immutable</strong>, they are faster and safer for data that shouldn't change. <code>tuple.count(x)</code> and <code>tuple.index(x)</code> are the only primary methods.</li>
</ul>

<h2>🔹 Dictionary Mastery</h2>
<ul>
  <li><strong>Accessing:</strong> <code>dct.get('key', default)</code> is the professional way to avoid <code>KeyError</code>.</li>
  <li><strong>Merging:</strong> <code>dct1.update(dct2)</code> combines two dictionaries.</li>
  <li><strong>Iteration:</strong> Use <code>dct.items()</code> to get both keys and values in a loop.</li>
</ul>

<h2>🔹 Common Python Pitfalls</h2>
<ul>
  <li><strong>TypeError:</strong> Trying to modify a Tuple or adding a string to an integer.</li>
  <li><strong>IndexError:</strong> Accessing <code>lst[5]</code> when the list only has 3 items.</li>
  <li><strong>KeyError:</strong> Accessing a dictionary key that doesn't exist without using <code>.get()</code>.</li>
</ul>

<h2>🔹 NumPy Library (Numerical Python)</h2>
<p>NumPy is the core library for numerical computing, providing the powerful <strong>ndarray</strong> object.</p>
<ul>
  <li><strong>Creation:</strong> <code>np.array()</code>, <code>np.zeros((rows,cols))</code>, <code>np.ones()</code>, <code>np.arange(start, stop, step)</code>, <code>np.linspace(0, 1, 5)</code>.</li>
  <li><strong>Shape Attributes:</strong> <code>.shape</code> (dimensions), <code>.size</code> (total count), <code>.ndim</code> (axes), <code>.dtype</code> (data type).</li>
  <li><strong>Memory Management:</strong> <code>a.view()</code> creates a shared window; <code>a.copy()</code> creates a completely independent array.</li>
  <li><strong>Matrix Operations:</strong> <code>np.eye(n)</code> (Identity), <code>np.transpose(a)</code> or <code>a.T</code>, <code>np.concatenate((a, b), axis=0)</code>.</li>
</ul>`,

        bodyAr: `<h2>🔹 أساسيات بايثون</h2>
<ul>
  <li><strong>الإزاحة (Indentation):</strong> إلزامية لتحديد كتل الكود؛ نسيانها يؤدي لـ <code>IndentationError</code>.</li>
  <li><strong>المتغيرات:</strong> حساسة لحالة الأحرف (age ليست هي Age) ولا يمكن أن تبدأ برقم.</li>
  <li><strong>المدخلات:</strong> دالة <code>input()</code> ترجع دائماً نصاً (string)، لذا يجب تحويلها باستخدام <code>int()</code> إذا كنت تتوقع رقماً.</li>
</ul>

<h2>🔹 نصوص f-strings</h2>
<p>أسرع وأسهل طريقة لدمج المتغيرات في النصوص:</p>
<pre><code>name = "علي"
print(f"مرحباً {name}")</code></pre>

<h2>🔹 مقارنة مجموعات البيانات</h2>
<table class="styled-table">
  <thead><tr><th>المجموعة</th><th>الرمز</th><th>قابلة للتعديل</th><th>تكرار القيم</th><th>الاستخدام</th></tr></thead>
  <tbody>
    <tr><td><strong>List</strong></td><td><code>[]</code></td><td>نعم</td><td>نعم</td><td>تخزين بيانات متغيرة.</td></tr>
    <tr><td><strong>Tuple</strong></td><td><code>()</code></td><td>نعم</td><td>لا</td><td>بيانات ثابتة (إحداثيات).</td></tr>
    <tr><td><strong>Set</strong></td><td><code>{}</code></td><td>لا</td><td>نعم</td><td>حذف التكرار.</td></tr>
    <tr><td><strong>Dictionary</strong></td><td><code>{k:v}</code></td><td>لا</td><td>نعم</td><td>بيانات مرتبطة (مفتاح وقيمة).</td></tr>
  </tbody>
</table>

<h2>🔹 أخطاء شائعة</h2>
<ul>
  <li><strong>TypeError:</strong> عند محاولة تعديل Tuple أو جمع نص مع رقم.</li>
  <li><strong>IndexError:</strong> عند محاولة الوصول لعنصر غير موجود في القائمة.</li>
  <li><strong>KeyError:</strong> عند محاولة الوصول لمفتاح غير موجود في القاموس (استخدم <code>.get()</code> لتجنب ذلك).</li>
</ul>

<h2>🔹 مكتبة NumPy</h2>
<p>المكتبة الأساسية للحسابات العددية والتعامل مع المصفوفات الضخمة ndarrays:</p>
<ul>
  <li><strong>np.zeros():</strong> إنشاء مصفوفة من الأصفار.</li>
  <li><strong>np.eye(n):</strong> مصفوفة الوحدة (Identity Matrix).</li>
  <li><strong>.shape:</strong> ترجع أبعاد المصفوفة (صفوف، أعمدة).</li>
  <li><strong>.size:</strong> ترجع عدد العناصر الكلي في المصفوفة.</li>
  <li><strong>.copy():</strong> لعمل نسخة مستقلة تماماً من المصفوفة.</li>
</ul>`,
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  summary: {
    points: [
      "Python uses indentation to indicate blocks of code; missing it causes an IndentationError.",
      "Variable names are case-sensitive (e.g., 'age' vs 'Age' are different) and cannot start with a number.",
      "Lists are defined with [] — ordered, mutable, and allow duplicate values.",
      "Tuples are defined with () — ordered and IMMUTABLE (cannot be changed after creation).",
      "Sets are defined with {} — unordered and do NOT allow duplicate elements.",
      "Dictionaries store data in key-value pairs; keys must be unique, values can repeat.",
      "list.append(x) adds to the end; list.insert(i, x) adds at a specific index.",
      "list.remove(x) deletes by value; list.pop(i) deletes by index and returns the element.",
      "dict.get('key') is safer than dict['key'] because it returns None instead of raising a KeyError.",
      "The 'input()' function always returns data as a string (str); convert with int() or float().",
      "NumPy .shape returns a tuple of dimensions; .size returns total number of elements.",
      "np.arange(start, stop, step) creates evenly spaced values; np.eye(n) creates an identity matrix.",
      "a.view() creates a shared view (changes affect original); a.copy() creates an independent copy.",
    ],
    pointsAr: [
      "تستخدم بايثون الإزاحة لتحديد كتل الكود؛ نسيانها يؤدي لخطأ IndentationError.",
      "أسماء المتغيرات حساسة لحالة الأحرف ولا تبدأ برقم.",
      "القوائم (Lists) مرتبة وقابلة للتعديل وتسمح بالتكرار.",
      "الصفوف (Tuples) مرتبة وغير قابلة للتعديل نهائياً.",
      "المجموعات (Sets) غير مرتبة ولا تسمح بالعناصر المكررة.",
      "القواميس (Dicts) تخزن بيانات بصيغة مفتاح-قيمة، المفاتيح فريدة.",
      "append() تضيف للنهاية؛ insert(i,x) تضيف في موضع محدد.",
      "remove(x) تحذف بالقيمة؛ pop(i) تحذف بالفهرس وترجع العنصر.",
      "dict.get('key') أكثر أماناً من dict['key'] لأنه يرجع None بدل خطأ.",
      "دالة input() ترجع دائماً string.",
    ],
  },

  // ── TAB 3 — MCQ ──────────────────────────────────────────────────
  mcq: [
    // ── VARIABLES & BASICS ──
    {
      id: "ss-q1-01",
      question: "In Python, which of the following is an invalid variable name?",
      questionAr: "أي من الخيارات التالية يعتبر اسم متغير غير صالح؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "my_var", isCorrect: false },
        { id: "b", text: "Var_2", isCorrect: false },
        { id: "c", text: "2_var", isCorrect: true },
        { id: "d", text: "_var", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-02",
      question: "What does the 'input()' function return by default?",
      questionAr: "ماذا ترجع دالة input() بشكل افتراضي؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Integer", isCorrect: false },
        { id: "b", text: "Float", isCorrect: false },
        { id: "c", text: "String", isCorrect: true },
        { id: "d", text: "Boolean", isCorrect: false },
      ],
    },

    // ── LIST QUESTIONS ──
    {
      id: "ss-q1-03",
      question: "Which collection type is ordered, mutable, and allows duplicate elements?",
      questionAr: "أي نوع من المجموعات مرتب، قابل للتعديل، ويسمح بالعناصر المتكررة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Tuple", isCorrect: false },
        { id: "b", text: "Set", isCorrect: false },
        { id: "c", text: "List", isCorrect: true },
        { id: "d", text: "Dictionary", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-04",
      question: "What is the output of:\nlst = ['a', 'b', 'c', 'd']\nprint(lst[-1])",
      questionAr: "ما هو ناتج:\nlst = ['a', 'b', 'c', 'd']\nprint(lst[-1])",
      difficulty: "easy",
      answers: [
        { id: "a", text: "'a'", isCorrect: false },
        { id: "b", text: "'b'", isCorrect: false },
        { id: "c", text: "'c'", isCorrect: false },
        { id: "d", text: "'d'", isCorrect: true },
      ],
    },
    {
      id: "ss-q1-05",
      question: "What is the output of:\nlst = [10, 20, 30, 40, 50]\nprint(lst[1:4])",
      questionAr: "ما هو ناتج:\nlst = [10, 20, 30, 40, 50]\nprint(lst[1:4])",
      difficulty: "medium",
      answers: [
        { id: "a", text: "[10, 20, 30]", isCorrect: false },
        { id: "b", text: "[20, 30, 40]", isCorrect: true },
        { id: "c", text: "[20, 30, 40, 50]", isCorrect: false },
        { id: "d", text: "[30, 40, 50]", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-06",
      question: "Which method adds an element to the END of a list?",
      questionAr: "أي طريقة تضيف عنصراً في نهاية القائمة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "insert()", isCorrect: false },
        { id: "b", text: "add()", isCorrect: false },
        { id: "c", text: "append()", isCorrect: true },
        { id: "d", text: "extend()", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-07",
      question: "What is the difference between list.remove(x) and list.pop(i)?",
      questionAr: "ما الفرق بين list.remove(x) و list.pop(i)؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "remove() deletes by index; pop() deletes by value.", isCorrect: false },
        { id: "b", text: "remove() deletes by value; pop() deletes by index and returns the element.", isCorrect: true },
        { id: "c", text: "Both delete by index.", isCorrect: false },
        { id: "d", text: "pop() raises an error; remove() does not.", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-08",
      question: "What is the output of:\nlst = [3, 1, 4, 1, 5]\nlst.sort()\nprint(lst)",
      questionAr: "ما هو ناتج:\nlst = [3, 1, 4, 1, 5]\nlst.sort()\nprint(lst)",
      difficulty: "easy",
      answers: [
        { id: "a", text: "[5, 4, 3, 1, 1]", isCorrect: false },
        { id: "b", text: "[3, 1, 4, 1, 5]", isCorrect: false },
        { id: "c", text: "[1, 1, 3, 4, 5]", isCorrect: true },
        { id: "d", text: "[1, 3, 4, 5]", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-09",
      question: "What is the output of:\nlst = ['apple', 'banana', 'cherry']\nprint(lst.index('banana'))",
      questionAr: "ما هو ناتج:\nlst = ['apple', 'banana', 'cherry']\nprint(lst.index('banana'))",
      difficulty: "easy",
      answers: [
        { id: "a", text: "0", isCorrect: false },
        { id: "b", text: "1", isCorrect: true },
        { id: "c", text: "2", isCorrect: false },
        { id: "d", text: "'banana'", isCorrect: false },
      ],
    },

    // ── TUPLE QUESTIONS ──
    {
      id: "ss-q1-10",
      question: "What is the primary difference between a List and a Tuple?",
      questionAr: "ما الفرق الأساسي بين القائمة والصف؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Lists are immutable while Tuples are mutable.", isCorrect: false },
        { id: "b", text: "Lists are mutable while Tuples are immutable.", isCorrect: true },
        { id: "c", text: "Lists use parentheses and Tuples use brackets.", isCorrect: false },
        { id: "d", text: "There is no difference.", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-11",
      question: "Which of the following will raise a TypeError?",
      questionAr: "أي من التالي سيرفع خطأ TypeError؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "t = (1,2,3); print(t[0])", isCorrect: false },
        { id: "b", text: "t = (1,2,3); t[0] = 10", isCorrect: true },
        { id: "c", text: "t = (1,2,3); print(len(t))", isCorrect: false },
        { id: "d", text: "t = (1,2,3); print(t.count(2))", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-12",
      question: "What is the output of:\nt = (5, 5, 3, 2, 5)\nprint(t.count(5))",
      questionAr: "ما هو ناتج:\nt = (5, 5, 3, 2, 5)\nprint(t.count(5))",
      difficulty: "easy",
      answers: [
        { id: "a", text: "1", isCorrect: false },
        { id: "b", text: "2", isCorrect: false },
        { id: "c", text: "3", isCorrect: true },
        { id: "d", text: "5", isCorrect: false },
      ],
    },

    // ── SET QUESTIONS ──
    {
      id: "ss-q1-13",
      question: "Which data structure does NOT allow duplicate elements?",
      questionAr: "أي هيكل بيانات لا يسمح بالعناصر المتكررة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "List", isCorrect: false },
        { id: "b", text: "Tuple", isCorrect: false },
        { id: "c", text: "Set", isCorrect: true },
        { id: "d", text: "Range", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-14",
      question: "What is the output of:\nst = {1, 2, 3, 3, 2, 1}\nprint(len(st))",
      questionAr: "ما هو ناتج:\nst = {1, 2, 3, 3, 2, 1}\nprint(len(st))",
      difficulty: "medium",
      answers: [
        { id: "a", text: "6", isCorrect: false },
        { id: "b", text: "4", isCorrect: false },
        { id: "c", text: "3", isCorrect: true },
        { id: "d", text: "2", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-15",
      question: "Which method is used to add a single element to a Set?",
      questionAr: "أي طريقة تُستخدم لإضافة عنصر واحد إلى المجموعة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "append()", isCorrect: false },
        { id: "b", text: "insert()", isCorrect: false },
        { id: "c", text: "add()", isCorrect: true },
        { id: "d", text: "push()", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-16",
      question: "What does the union() method do when called on a Set?",
      questionAr: "ماذا تفعل طريقة union() عند استدعائها على مجموعة؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "Returns only elements found in both sets.", isCorrect: false },
        { id: "b", text: "Returns all elements from both sets without duplicates.", isCorrect: true },
        { id: "c", text: "Modifies the original set in place.", isCorrect: false },
        { id: "d", text: "Returns the difference between two sets.", isCorrect: false },
      ],
    },

    // ── DICTIONARY QUESTIONS ──
    {
      id: "ss-q1-17",
      question: "Which of these is used to store data in key-value pairs?",
      questionAr: "أي من هؤلاء يستخدم لتخزين البيانات في أزواج مفتاح-قيمة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "List", isCorrect: false },
        { id: "b", text: "Dictionary", isCorrect: true },
        { id: "c", text: "Tuple", isCorrect: false },
        { id: "d", text: "Set", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-18",
      question: "What is the output of:\ndct = {'a': 1, 'b': 2, 'c': 3}\nprint(dct['b'])",
      questionAr: "ما هو ناتج:\ndct = {'a': 1, 'b': 2, 'c': 3}\nprint(dct['b'])",
      difficulty: "easy",
      answers: [
        { id: "a", text: "'b'", isCorrect: false },
        { id: "b", text: "1", isCorrect: false },
        { id: "c", text: "2", isCorrect: true },
        { id: "d", text: "3", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-19",
      question: "What is the safest way to access a dictionary key that might not exist?",
      questionAr: "ما هي الطريقة الأكثر أماناً للوصول إلى مفتاح قد لا يوجد في القاموس؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "dct['key']", isCorrect: false },
        { id: "b", text: "dct.get('key')", isCorrect: true },
        { id: "c", text: "dct.values('key')", isCorrect: false },
        { id: "d", text: "dct.find('key')", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-20",
      question: "What is the output of:\ndct = {'x': 10, 'y': 20}\ndct['z'] = 30\nprint(len(dct))",
      questionAr: "ما هو ناتج:\ndct = {'x': 10, 'y': 20}\ndct['z'] = 30\nprint(len(dct))",
      difficulty: "easy",
      answers: [
        { id: "a", text: "2", isCorrect: false },
        { id: "b", text: "3", isCorrect: true },
        { id: "c", text: "30", isCorrect: false },
        { id: "d", text: "Error", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-21",
      question: "Which method returns all the KEYS of a dictionary?",
      questionAr: "أي طريقة ترجع جميع مفاتيح القاموس؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "dct.values()", isCorrect: false },
        { id: "b", text: "dct.items()", isCorrect: false },
        { id: "c", text: "dct.keys()", isCorrect: true },
        { id: "d", text: "dct.all()", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-22",
      question: "What does dct.items() return?",
      questionAr: "ماذا ترجع دالة dct.items()؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "All keys as a list.", isCorrect: false },
        { id: "b", text: "All values as a list.", isCorrect: false },
        { id: "c", text: "A view of (key, value) pairs as tuples.", isCorrect: true },
        { id: "d", text: "The number of key-value pairs.", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-23",
      question: "What happens if you try to add a duplicate KEY to a dictionary?",
      questionAr: "ماذا يحدث إذا أضفت مفتاحاً مكرراً إلى القاموس؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "An error is raised.", isCorrect: false },
        { id: "b", text: "Both values are stored under the same key.", isCorrect: false },
        { id: "c", text: "The new value overwrites the old value.", isCorrect: true },
        { id: "d", text: "The original value is kept and the new one is ignored.", isCorrect: false },
      ],
    },

    // ── OPERATORS & CONTROL FLOW ──
    {
      id: "ss-q1-24",
      question: "What is the output of:\na = 10\nb = 4\na += b\nb *= 2\nprint(a, b)",
      questionAr: "ما هو ناتج:\na = 10\nb = 4\na += b\nb *= 2\nprint(a, b)",
      difficulty: "medium",
      answers: [
        { id: "a", text: "14 4", isCorrect: false },
        { id: "b", text: "10 8", isCorrect: false },
        { id: "c", text: "14 8", isCorrect: true },
        { id: "d", text: "10 4", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-25",
      question: "Predict the output:\na = True\nb = False\nprint(a or b and not a)",
      questionAr: "توقع الناتج:\na = True\nb = False\nprint(a or b and not a)",
      difficulty: "hard",
      answers: [
        { id: "a", text: "False", isCorrect: false },
        { id: "b", text: "True", isCorrect: true },
        { id: "c", text: "None", isCorrect: false },
        { id: "d", text: "Error", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-26",
      question: "Which statement skips the current loop iteration and moves to the next?",
      questionAr: "أي جملة تتخطى الدورة الحالية للحلقة وتنتقل للتالية؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "break", isCorrect: false },
        { id: "b", text: "pass", isCorrect: false },
        { id: "c", text: "continue", isCorrect: true },
        { id: "d", text: "stop", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-27",
      question: "Which statement is used as a placeholder (null statement) in Python?",
      questionAr: "أي جملة تُستخدم كمكان مؤقت (null statement) في بايثون؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "null", isCorrect: false },
        { id: "b", text: "None", isCorrect: false },
        { id: "c", text: "pass", isCorrect: true },
        { id: "d", text: "skip", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-28",
      question: "What will be the output of: print(5 ** 3)?",
      questionAr: "ما هو ناتج: print(5 ** 3)؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "15", isCorrect: false },
        { id: "b", text: "125", isCorrect: true },
        { id: "c", text: "8", isCorrect: false },
        { id: "d", text: "53", isCorrect: false },
      ],
    },

    // ── NUMPY ──
    {
      id: "ss-q1-29",
      question: "In NumPy, which attribute returns the shape (dimensions) of an array?",
      questionAr: "في NumPy، أي سمة ترجع شكل (أبعاد) المصفوفة؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: ".size", isCorrect: false },
        { id: "b", text: ".ndim", isCorrect: false },
        { id: "c", text: ".shape", isCorrect: true },
        { id: "d", text: ".dtype", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-30",
      question: "Which NumPy function creates an identity matrix of size 2×2?",
      questionAr: "أي دالة NumPy تنشئ مصفوفة وحدة 2×2؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "np.ones((2,2))", isCorrect: false },
        { id: "b", text: "np.zeros((2,2))", isCorrect: false },
        { id: "c", text: "np.eye(2)", isCorrect: true },
        { id: "d", text: "np.full((2,2), 1)", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-31",
      question: "What does np.arange(10, 30, 5) produce?",
      questionAr: "ماذا ينتج np.arange(10, 30, 5)؟",
      difficulty: "medium",
      answers: [
        { id: "a", text: "[10, 15, 20, 25, 30]", isCorrect: false },
        { id: "b", text: "[10, 15, 20, 25]", isCorrect: true },
        { id: "c", text: "[5, 10, 15, 20, 25, 30]", isCorrect: false },
        { id: "d", text: "[10, 20, 30]", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-32",
      question: "In NumPy, what does 'a.size' represent?",
      questionAr: "في NumPy، ماذا يمثل a.size؟",
      difficulty: "easy",
      answers: [
        { id: "a", text: "Number of dimensions.", isCorrect: false },
        { id: "b", text: "Length of the first dimension only.", isCorrect: false },
        { id: "c", text: "Total number of elements in the array.", isCorrect: true },
        { id: "d", text: "Memory size in bytes.", isCorrect: false },
      ],
    },
    {
      id: "ss-q1-33",
      question: "What is the key difference between a.view() and a.copy() in NumPy?",
      questionAr: "ما الفرق بين a.view() و a.copy() في NumPy؟",
      difficulty: "hard",
      answers: [
        { id: "a", text: "view() creates an independent copy; copy() shares data.", isCorrect: false },
        { id: "b", text: "view() shares data with the original (changes reflect); copy() is independent.", isCorrect: true },
        { id: "c", text: "Both create independent copies.", isCorrect: false },
        { id: "d", text: "copy() is faster than view().", isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ─────────────────────────────────────
  written: [
    {
      id: "ss-q1-w1",
      question: "Write a Python program that creates a dictionary of 3 students and their grades, then prints the name of each student and whether they passed (grade >= 50) or failed.",
      questionAr: "اكتب برنامج بايثون ينشئ قاموساً لـ 3 طلاب ودرجاتهم، ثم يطبع اسم كل طالب وما إذا نجح (درجة >= 50) أم رسب.",
      modelAnswer: `students = {'Ali': 75, 'Sara': 45, 'Omar': 60}
for name, grade in students.items():
    if grade >= 50:
        print(f"{name}: Passed")
    else:
        print(f"{name}: Failed")`,
      modelAnswerAr: `students = {'علي': 75, 'سارة': 45, 'عمر': 60}
for name, grade in students.items():
    if grade >= 50:
        print(f"{name}: ناجح")
    else:
        print(f"{name}: راسب")`,
    },
    {
      id: "ss-q1-w2",
      question: "Given the list lst = [4, 7, 2, 9, 1, 5], write Python code to: (a) sort it, (b) remove the last element, (c) print the final list.",
      questionAr: "بالنسبة للقائمة lst = [4, 7, 2, 9, 1, 5]، اكتب كود بايثون لـ: (أ) ترتيبها، (ب) حذف آخر عنصر، (ج) طباعة القائمة النهائية.",
      modelAnswer: `lst = [4, 7, 2, 9, 1, 5]
lst.sort()
lst.pop()
print(lst)  # Output: [1, 2, 4, 5, 7]`,
      modelAnswerAr: `lst = [4, 7, 2, 9, 1, 5]
lst.sort()
lst.pop()
print(lst)  # الناتج: [1, 2, 4, 5, 7]`,
    },
    {
      id: "ss-q1-w3",
      question: "Explain why a Set cannot contain duplicate values and give a real-world example where this behavior is useful.",
      questionAr: "اشرح لماذا لا تقبل المجموعة (Set) القيم المكررة، وأعطِ مثالاً واقعياً يوضح أهمية هذه الخاصية.",
      modelAnswer: "A Set uses hashing internally to store elements, so if you try to add a value that already exists, it simply ignores it. Real-world example: tracking unique visitors to a website — even if the same user visits 10 times, they only appear once in the set.",
      modelAnswerAr: "تستخدم المجموعة تقنية الـ hashing داخلياً، لذا إضافة قيمة موجودة يتم تجاهلها تلقائياً. مثال واقعي: تتبع الزوار الفريدين لموقع إلكتروني — حتى لو زار نفس المستخدم 10 مرات، يظهر مرة واحدة فقط.",
    },
    {
      id: "ss-q1-w4",
      question: "Write a small Python function that takes a list of numbers and returns their sum using a for loop (without using the built-in sum() function).",
      questionAr: "اكتب دالة بايثون تأخذ قائمة من الأرقام وترجع مجموعها باستخدام حلقة for (بدون استخدام دالة sum()).",
      modelAnswer: `def sum_list(numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(sum_list([1, 2, 3, 4, 5]))  # Output: 15`,
      modelAnswerAr: `def sum_list(numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(sum_list([1, 2, 3, 4, 5]))  # الناتج: 15`,
    },
  ],
};