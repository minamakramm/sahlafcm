export const LECTURE = {
  subjectId: 'ds-tools',
  number: 7,
  title: 'Lab 1 of 6: Data Science Tools',
  titleAr: 'المختبر 1 من 6: أدوات علوم البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 1. The Modern Data Science Stack</h2>
<p>Modern data science relies on a robust ecosystem of tools and libraries that work together to handle the full lifecycle of data, from collection to deployment. Python has emerged as the leading language due to its vast library support.</p>

<h3>2. The Core Python Libraries</h3>
<ul>
  <li><strong>NumPy (Numerical Python):</strong> The foundational library for all numerical computing. It provides high-performance multidimensional arrays and math tools.</li>
  <li><strong>Pandas:</strong> Built on NumPy, it provides the <code>DataFrame</code> structure — the standard for tabular data manipulation and analysis.</li>
  <li><strong>Matplotlib & Seaborn:</strong> Libraries for data visualization. Matplotlib is for low-level control, while Seaborn is for high-level statistical plots.</li>
  <li><strong>Scikit-Learn:</strong> The primary library for classical machine learning algorithms (Classification, Regression, Clustering).</li>
  <li><strong>Plotly:</strong> A library for creating interactive, web-based visualizations.</li>
</ul>

<h3>3. Development Environments</h3>
<p>Data scientists use specialized environments to write and share code effectively:</p>
<ul>
  <li><strong>Jupyter Notebooks:</strong> Interactive web-based documents that combine live code, equations, visualizations, and narrative text.</li>
  <li><strong>Google Colab:</strong> A cloud-based version of Jupyter that provides free access to GPUs and requires zero configuration.</li>
  <li><strong>Anaconda:</strong> A distribution of Python and R for scientific computing that simplifies package management and deployment.</li>
  <li><strong>VS Code:</strong> A powerful IDE that supports Jupyter extensions for professional development.</li>
</ul>

<h3>4. Package Management</h3>
<p>Managing thousands of libraries requires reliable package managers:</p>
<ul>
  <li><strong>pip:</strong> The standard package installer for Python (pulls from PyPI).</li>
  <li><strong>conda:</strong> A cross-platform package and environment manager that handles non-python dependencies more gracefully than pip.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Practical Setup Reference</h2>

<h3>1. Checking Installed Libraries</h3>
<p>Before starting any project, verify that your core libraries are installed and check their versions to ensure compatibility.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
import pandas as pd
import matplotlib
import seaborn as sns
import sklearn

print(f"NumPy version: {np.__version__}")
print(f"Pandas version: {pd.__version__}")
print(f"Scikit-Learn version: {sklearn.__version__}")
</code></pre>
</div>

<h3>2. Basic Jupyter Shortcut Guide</h3>
<p>Mastering Jupyter shortcuts significantly speeds up your exploratory data analysis (EDA).</p>
<div class="code-block">
<pre><code class="language-text">
Shift + Enter : Run cell and move to next
Alt + Enter   : Run cell and insert new cell below
Esc + A       : Insert cell Above
Esc + B       : Insert cell Below
Esc + D + D   : Delete selected cell
Esc + M       : Convert cell to Markdown
Esc + Y       : Convert cell to Code
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 1. بيئة عمل علوم البيانات الحديثة</h2>
<p>تعتمد علوم البيانات الحديثة على نظام بيئي قوي من الأدوات والمكتبات التي تعمل معاً.</p>
<ul>
  <li><strong>Python:</strong> اللغة الأساسية والمفضلة لعلوم البيانات.</li>
  <li><strong>Jupyter:</strong> البيئة التفاعلية لكتابة الكود والتقارير.</li>
  <li><strong>Anaconda:</strong> المنصة الشاملة لإدارة الحزم والبيئات.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'Python is the dominant language for Data Science due to its readable syntax and massive ecosystem.',
      'Core libraries: NumPy (Arrays), Pandas (DataFrames), Scikit-Learn (ML), Matplotlib (Plots).',
      'Jupyter Notebooks are the standard for interactive data exploration.',
      'Anaconda simplifies environment management and ensures package compatibility.',
      'Package managers like pip and conda are used to install and update libraries.',
      'Google Colab is a free cloud alternative to local Jupyter installations.'
    ],
    pointsAr: [
      'بايثون هي اللغة المهيمنة في علوم البيانات بسبب سهولتها ونظامها البيئي الضخم.',
      'المكتبات الأساسية: NumPy (المصفوفات)، Pandas (الجداول)، Scikit-Learn (تعلم الآلة).',
      'تعتبر دفاتر Jupyter هي المعيار لاستكشاف البيانات التفاعلي.'
    ]
  },

  mcq: [
    {
      id: 'ds-s1-q1',
      question: 'Which library provides the primary "DataFrame" structure for tabular data?',
      answers: [
        { id: 'a', text: 'NumPy', isCorrect: false },
        { id: 'b', text: 'Pandas', isCorrect: true },
        { id: 'c', text: 'Matplotlib', isCorrect: false },
        { id: 'd', text: 'Scikit-Learn', isCorrect: false }
      ]
    },
    {
      id: 'ds-s1-q2',
      question: 'Jupyter Notebooks combine code, text, and visualizations in one document. What is the keyboard shortcut to run a cell?',
      answers: [
        { id: 'a', text: 'Ctrl + S', isCorrect: false },
        { id: 'b', text: 'Alt + F4', isCorrect: false },
        { id: 'c', text: 'Shift + Enter', isCorrect: true },
        { id: 'd', text: 'Esc + R', isCorrect: false }
      ]
    },
    {
      id: 'ds-s1-q3',
      question: 'Which platform provides free cloud-based Jupyter notebooks with GPU access?',
      answers: [
        { id: 'a', text: 'GitHub', isCorrect: false },
        { id: 'b', text: 'Google Colab', isCorrect: true },
        { id: 'c', text: 'Anaconda Navigator', isCorrect: false },
        { id: 'd', text: 'Stack Overflow', isCorrect: false }
      ]
    },
    {
      id: 'ds-s1-q4',
      question: 'The foundational library for all numerical computing in Python is:',
      answers: [
        { id: 'a', text: 'Seaborn', isCorrect: false },
        { id: 'b', text: 'Pandas', isCorrect: false },
        { id: 'c', text: 'NumPy', isCorrect: true },
        { id: 'd', text: 'Keras', isCorrect: false }
      ]
    },
    { id: 'ds-s1-q5', question: 'Which tool is used as a cross-platform package and environment manager?', answers: [{ id: 'a', text: 'pip', isCorrect: false }, { id: 'b', text: 'conda', isCorrect: true }, { id: 'c', text: 'npm', isCorrect: false }, { id: 'd', text: 'git', isCorrect: false }] },
    { id: 'ds-s1-q6', question: 'To convert a Jupyter cell to Markdown mode, use:', answers: [{ id: 'a', text: 'Esc + C', isCorrect: false }, { id: 'b', text: 'Esc + M', isCorrect: true }, { id: 'c', text: 'Esc + Y', isCorrect: false }, { id: 'd', text: 'Ctrl + M', isCorrect: false }] },
    { id: 'ds-s1-q7', question: 'Which library is best for building traditional Machine Learning models like Random Forests?', answers: [{ id: 'a', text: 'Matplotlib', isCorrect: false }, { id: 'b', text: 'Scikit-Learn', isCorrect: true }, { id: 'c', text: 'BeautifulSoup', isCorrect: false }, { id: 'd', text: 'Requests', isCorrect: false }] },
    { id: 'ds-s1-q8', question: 'In Jupyter, what does Esc + B do?', answers: [{ id: 'a', text: 'Bold text', isCorrect: false }, { id: 'b', text: 'Insert cell Below', isCorrect: true }, { id: 'c', text: 'Back to previous cell', isCorrect: false }, { id: 'd', text: 'Build model', isCorrect: false }] },
    { id: 'ds-s1-q9', question: 'Seaborn is built on top of which library?', answers: [{ id: 'a', text: 'NumPy', isCorrect: false }, { id: 'b', text: 'Matplotlib', isCorrect: true }, { id: 'c', text: 'TensorFlow', isCorrect: false }, { id: 'd', text: 'Pandas', isCorrect: false }] },
    { id: 'ds-s1-q10', question: 'What does the abbreviation CSV stand for?', answers: [{ id: 'a', text: 'Common Series Values', isCorrect: false }, { id: 'b', text: 'Comma Separated Values', isCorrect: true }, { id: 'c', text: 'Column Sorted Variables', isCorrect: false }, { id: 'd', text: 'Computed Statistics Volume', isCorrect: false }] },
    { id: 'ds-s1-q11', question: 'Which distribution of Python is specifically designed for scientific computing?', answers: [{ id: 'a', text: 'Vanilla Python', isCorrect: false }, { id: 'b', text: 'Anaconda', isCorrect: true }, { id: 'c', text: 'PyCharm', isCorrect: false }, { id: 'd', text: 'ActivePython', isCorrect: false }] },
    { id: 'ds-s1-q12', question: 'Interactive, web-based visualizations in Python are often created using:', answers: [{ id: 'a', text: 'Matplotlib', isCorrect: false }, { id: 'b', text: 'Plotly', isCorrect: true }, { id: 'c', text: 'PIL', isCorrect: false }, { id: 'd', text: 'Tkinter', isCorrect: false }] },
    { id: 'ds-s1-q13', question: 'Which package manager is the default for Python?', answers: [{ id: 'a', text: 'apt-get', isCorrect: false }, { id: 'b', text: 'pip', isCorrect: true }, { id: 'c', text: 'brew', isCorrect: false }, { id: 'd', text: 'maven', isCorrect: false }] },
    { id: 'ds-s1-q14', question: 'To insert a cell ABOVE in Jupyter, use:', answers: [{ id: 'a', text: 'Esc + A', isCorrect: true }, { id: 'b', text: 'Esc + U', isCorrect: false }, { id: 'c', text: 'Ctrl + Alt + N', isCorrect: false }, { id: 'd', text: 'Shift + A', isCorrect: false }] },
    { id: 'ds-s1-q15', question: 'Which library is used for numerical array operations?', answers: [{ id: 'a', text: 'Requests', isCorrect: false }, { id: 'b', text: 'NumPy', isCorrect: true }, { id: 'c', text: 'Flask', isCorrect: false }, { id: 'd', text: 'Django', isCorrect: false }] }
  ]
};
