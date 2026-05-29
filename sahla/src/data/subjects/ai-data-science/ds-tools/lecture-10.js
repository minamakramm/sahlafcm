export const LECTURE = {
  subjectId: 'ds-tools',
  number: 10,
  title: 'Lab 4 of 6: Data Visualization with Seaborn',
  titleAr: 'المختبر 4 من 6: تصور البيانات باستخدام Seaborn',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 1. Why Data Visualization?</h2>
<p>Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.</p>

<h3>2. Matplotlib vs. Seaborn</h3>
<ul>
  <li><strong>Matplotlib:</strong> The foundation. It offers full control over every element of the plot but requires more code for complex visualizations.</li>
  <li><strong>Seaborn:</strong> Built on top of Matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics. It integrates deeply with Pandas DataFrames.</li>
</ul>

<h3>3. Visualizing Distributions</h3>
<p>Understanding how your data is spread out is crucial for many machine learning models:</p>
<ul>
  <li><strong>Histograms:</strong> Show the frequency of data points within specific ranges.</li>
  <li><strong>KDE (Kernel Density Estimate):</strong> A smooth curve that estimates the probability density function of the data.</li>
  <li><strong>Box Plots:</strong> Display the distribution of data based on a five-number summary (minimum, first quartile, median, third quartile, and maximum). Excellent for spotting <strong>outliers</strong>.</li>
</ul>

<h3>4. Visualizing Relationships</h3>
<ul>
  <li><strong>Scatter Plots:</strong> Show the relationship between two numeric variables.</li>
  <li><strong>Heatmaps:</strong> Visualize data through variations in coloring. Often used for <strong>Correlation Matrices</strong> to find dependencies between features.</li>
  <li><strong>Pairplots:</strong> Create a matrix of plots where each feature is plotted against every other feature. This is the fastest way to explore a new dataset.</li>
</ul>

<h3>5. Aesthetic Customization</h3>
<p>Seaborn allows you to set themes (<code>sns.set_style</code>) and color palettes (<code>sns.set_palette</code>) easily to make your plots look professional.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Seaborn Practical Reference</h2>

<h3>1. Plotting Distributions & Outliers</h3>
<p>Using Iris dataset as a classic example for visualization.</p>
<div class="code-block">
<pre><code class="language-python">
import seaborn as sns
import matplotlib.pyplot as plt

# Load sample data
iris = sns.load_dataset('iris')

# Set aesthetic style
sns.set_style('whitegrid')

# Box plot for each species
plt.figure(figsize=(10, 6))
sns.boxplot(x='species', y='petal_length', data=iris)
plt.title('Petal Length Distribution by Species')
plt.show()
</code></pre>
</div>

<h3>2. Relationship Exploration</h3>
<p>Pairplots and Heatmaps are the most powerful tools in a data scientist's arsenal.</p>
<div class="code-block">
<pre><code class="language-python">
# Matrix of all feature combinations
sns.pairplot(iris, hue='species', palette='viridis')
plt.show()

# Correlation Heatmap
plt.figure(figsize=(8, 6))
correlation_matrix = iris.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', linewidths=0.5)
plt.title('Feature Correlation Matrix')
plt.show()
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 1. لماذا نهتم بتصور البيانات؟</h2>
<p>يعد تصور البيانات وسيلة قوية لفهم الأنماط، الاتجاهات، والقيم المتطرفة بسهولة.</p>
<ul>
  <li><strong>Matplotlib:</strong> المكتبة الأساسية للتحكم الكامل في الرسوم.</li>
  <li><strong>Seaborn:</strong> مكتبة مبنية على Matplotlib توفر رسوماً إحصائية جميلة ومعقدة بأوامر بسيطة.</li>
  <li><strong>Boxplots:</strong> مفيدة جداً لتحديد القيم المتطرفة (Outliers).</li>
  <li><strong>Heatmaps:</strong> تستخدم غالباً لرؤية مصفوفة الارتباط (Correlation) بين المتغيرات.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'Visualization is key to identifying outliers, trends, and patterns.',
      'Matplotlib provides the engine, while Seaborn provides the high-level beauty.',
      'Box plots are the best tool for identifying outliers statistically.',
      'Heatmaps visualize correlations between numeric features (0 to 1).',
      'Pairplots allow for simultaneous exploration of all feature relationships.',
      'Customizing titles, labels, and themes is essential for effective communication.'
    ],
    pointsAr: [
      'التصور هو المفتاح لتحديد القيم المتطرفة والاتجاهات والأنماط.',
      'تعتبر الرسوم الصندوقية (Box plots) أفضل أداة لتحديد القيم المتطرفة إحصائياً.',
      'تسمح Pairplots باستكشاف جميع العلاقات بين الميزات في وقت واحد.'
    ]
  },

  mcq: [
    {
      id: 'ds-s4-q1',
      question: 'Which library is Seaborn built on top of?',
      answers: [
        { id: 'a', text: 'NumPy', isCorrect: false },
        { id: 'b', text: 'Matplotlib', isCorrect: true },
        { id: 'c', text: 'TensorFlow', isCorrect: false },
        { id: 'd', text: 'Plotly', isCorrect: false }
      ]
    },
    {
      id: 'ds-s4-q2',
      question: 'Which plot is best for identifying outliers in a dataset?',
      answers: [
        { id: 'a', text: 'Line Plot', isCorrect: false },
        { id: 'b', text: 'Box Plot', isCorrect: true },
        { id: 'c', text: 'Pie Chart', isCorrect: false },
        { id: 'd', text: 'Heatmap', isCorrect: false }
      ]
    },
    {
      id: 'ds-s4-q3',
      question: 'What does a Correlation Heatmap visualize?',
      answers: [
        { id: 'a', text: 'Missing values', isCorrect: false },
        { id: 'b', text: 'The strength of linear relationships between variables', isCorrect: true },
        { id: 'c', text: 'The number of rows in the data', isCorrect: false },
        { id: 'd', text: 'The order of categories', isCorrect: false }
      ]
    },
    {
      id: 'ds-s4-q4',
      question: 'Which Seaborn function plots histograms combined with a KDE curve?',
      answers: [
        { id: 'a', text: 'sns.lineplot()', isCorrect: false },
        { id: 'b', text: 'sns.histplot()', isCorrect: true },
        { id: 'c', text: 'sns.boxplot()', isCorrect: false },
        { id: 'd', text: 'sns.barplot()', isCorrect: false }
      ]
    },
    { id: 'ds-s4-q5', question: 'How do you create a matrix of scatter plots for all features in Seaborn?', answers: [{ id: 'a', text: 'sns.matrixplot()', isCorrect: false }, { id: 'b', text: 'sns.pairplot()', isCorrect: true }, { id: 'c', text: 'sns.allplots()', isCorrect: false }, { id: 'd', text: 'sns.jointplot()', isCorrect: false }] },
    { id: 'ds-s4-q6', question: 'In a box plot, what does the line inside the box represent?', answers: [{ id: 'a', text: 'The Mean', isCorrect: false }, { id: 'b', text: 'The Median', isCorrect: true }, { id: 'c', text: 'The Maximum', isCorrect: false }, { id: 'd', text: 'The Minimum', isCorrect: false }] },
    { id: 'ds-s4-q7', question: 'Which command is used to show a Matplotlib/Seaborn plot?', answers: [{ id: 'a', text: 'sns.display()', isCorrect: false }, { id: 'b', text: 'plt.show()', isCorrect: true }, { id: 'c', text: 'plt.render()', isCorrect: false }, { id: 'd', text: 'sns.draw()', isCorrect: false }] },
    { id: 'ds-s4-q8', question: 'What does the "hue" parameter in Seaborn do?', answers: [{ id: 'a', text: 'Changes the overall brightness', isCorrect: false }, { id: 'b', text: 'Colors the data points based on a categorical variable', isCorrect: true }, { id: 'c', text: 'Deletes outliers', isCorrect: false }, { id: 'd', text: 'Sets the plot size', isCorrect: false }] },
    { id: 'ds-s4-q9', question: 'Correlation values in a heatmap range from:', answers: [{ id: 'a', text: '0 to 100', isCorrect: false }, { id: 'b', text: '-1 to 1', isCorrect: true }, { id: 'c', text: '-Infinity to +Infinity', isCorrect: false }, { id: 'd', text: '0 to 1 only', isCorrect: false }] },
    { id: 'ds-s4-q10', question: 'Which function adds a title to your plot?', answers: [{ id: 'a', text: 'plt.header()', isCorrect: false }, { id: 'b', text: 'plt.title()', isCorrect: true }, { id: 'c', text: 'sns.title()', isCorrect: false }, { id: 'd', text: 'plt.label()', isCorrect: false }] },
    { id: 'ds-s4-q11', question: 'To change the aesthetic theme to a dark grid, use:', answers: [{ id: 'a', text: 'sns.style("dark")', isCorrect: false }, { id: 'b', text: 'sns.set_style("darkgrid")', isCorrect: true }, { id: 'c', text: 'plt.theme("dark")', isCorrect: false }, { id: 'd', text: 'sns.background("black")', isCorrect: false }] },
    { id: 'ds-s4-q12', question: 'Scatter plots are primarily used for which type of data?', answers: [{ id: 'a', text: 'Two categorical variables', isCorrect: false }, { id: 'b', text: 'Two numerical variables', isCorrect: true }, { id: 'c', text: 'One categorical variable only', isCorrect: false }, { id: 'd', text: 'Time series only', isCorrect: false }] },
    { id: 'ds-s4-q13', question: 'Which plot uses colored rectangles to show values in a matrix?', answers: [{ id: 'a', text: 'Bar chart', isCorrect: false }, { id: 'b', text: 'Heatmap', isCorrect: true }, { id: 'c', text: 'Area chart', isCorrect: false }, { id: 'd', text: 'Stem plot', isCorrect: false }] },
    { id: 'ds-s4-q14', question: 'Which command sets the labels for the X and Y axes?', answers: [{ id: 'a', text: 'plt.labels()', isCorrect: false }, { id: 'b', text: 'plt.xlabel() and plt.ylabel()', isCorrect: true }, { id: 'c', text: 'sns.axis_labels()', isCorrect: false }, { id: 'd', text: 'plt.set_axes()', isCorrect: false }] },
    { id: 'ds-s4-q15', question: 'Seaborn "regplot" performs which task besides plotting?', answers: [{ id: 'a', text: 'Data cleaning', isCorrect: false }, { id: 'b', text: 'Linear regression fitting', isCorrect: true }, { id: 'c', text: 'Clustering', isCorrect: false }, { id: 'd', text: 'Standardization', isCorrect: false }] }
  ]
};
