export const LECTURE = {
  subjectId: 'ds-tools',
  number: 3,
  title: 'Lecture 3: Data Visualization',
  titleAr: 'المحاضرة 3: تصور البيانات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.6 0-.42-.17-.8-.44-1.1-.27-.3-.44-.7-.44-1.15 0-.91.75-1.65 1.66-1.65H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z"/></svg> 1. What Is Data Visualization?</h2>
<p>Data visualization is the process of using visual elements like charts, graphs, or maps to represent data. It translates complex, high-volume, or numerical data into a visual format that is easier to process and understand.</p>
<ul>
  <li><strong>Identify Trends & Patterns:</strong> Observe multiple data points together to spot increases/decreases and recurring patterns across parameters.</li>
  <li><strong>Predict Future Values:</strong> Multiple data points plotted together give a predictable correlation value for the next data point.</li>
  <li><strong>Identify Deviation:</strong> See how much a value deviates from the expected — i.e., spot outliers visually.</li>
  <li><strong>Compare Significant Points:</strong> Two or more data points plotted on the same chart can be compared quickly and intuitively.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Always ask four questions before choosing a chart: What is the purpose? What type of data? How many variables? How many data points?</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 2. Comparison Charts</h2>
<p>Comparison charts show how different things are related or how they change. They help identify patterns, trends, and differences in data.</p>
<ul>
  <li><strong>Column Chart:</strong> Vertical bars — great for comparing values across discrete categories side by side.</li>
  <li><strong>Bar Chart:</strong> Horizontal bars — useful when category labels are long or when there are many categories.</li>
  <li><strong>Line Chart:</strong> Connected data points — good for showing change when data is continuous.</li>
  <li><strong>Radar Chart:</strong> Spider/web chart — ideal for comparing multiple variables simultaneously across categories.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Column and bar charts are interchangeable — choose column for few categories, bar when labels are long.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m19 9-5 5-4-4-3 3"/><path d="M3 3v18h18"/></svg> 3. Trend Charts</h2>
<p>Trend charts show how data changes over time. They visually represent the movement of variables, helping to identify patterns and trends across a timeline.</p>
<ul>
  <li><strong>Line Graph:</strong> The most common trend chart — connects data points in time order to reveal direction and rate of change.</li>
  <li><strong>Dual-Axis Line Graph:</strong> Two y-axes — allows comparison of two variables with different scales on the same chart.</li>
  <li><strong>Area Chart:</strong> A line chart with the area below shaded — emphasises volume and cumulative totals over time.</li>
  <li><strong>Waterfall Chart:</strong> Shows how individual positive/negative values contribute to a total — great for financial P&L analysis.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Use a dual-axis line graph when two variables have very different scales (e.g., revenue in millions vs. customer count in thousands).</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> 4. Relationship Charts</h2>
<p>Relationship charts reveal connections or correlations between two or more variables. They show interdependencies and associations visually.</p>
<ul>
  <li><strong>Scatter Plot:</strong> Plots individual data points as dots using x/y coordinates — reveals positive, negative, or no correlation between two variables.</li>
  <li><strong>Bubble Chart:</strong> Like a scatter plot but with a third variable encoded as the size of each bubble.</li>
  <li><strong>Heatmap:</strong> Grid of colored cells where color intensity represents the correlation strength between pairs of variables.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Correlation shown in a scatter plot does not imply causation — always interpret carefully.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m19 15-5-5-4 4-3-3"/><path d="M3 3v18h18"/></svg> 5. Distribution Charts</h2>
<p>Distribution charts show how data is spread across values. They help understand outliers, the normal tendency (central location), and the range of your data.</p>
<ul>
  <li><strong>Histogram:</strong> Bars showing frequency of values in each range (bin). Great for seeing the shape of a distribution (normal, skewed, bimodal).</li>
  <li><strong>Box Plot (Boxplot):</strong> Shows median, Q1, Q3 (IQR box), whiskers, and outlier dots. Compact summary of distribution shape and spread.</li>
  <li><strong>KDE Plot:</strong> Kernel Density Estimate — smooth continuous curve version of a histogram. Better for comparing multiple distributions.</li>
  <li><strong>Violin Plot:</strong> Combines a KDE plot with a box plot — shows full distribution shape AND summary statistics together.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Box plots are excellent for comparing distributions across groups side by side on a single chart.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg> 6. Composition Charts (Part-to-Whole)</h2>
<p>Composition charts break down a total into its component parts, showing how each part contributes to the whole — either at a single point in time or evolving over time.</p>
<ul>
  <li><strong>Pie Chart:</strong> Best for 2–5 categories. Proportions must always sum to 100%.</li>
  <li><strong>Stacked Bar Chart:</strong> Better than pie for comparing totals AND composition across multiple groups.</li>
  <li><strong>Tree Map:</strong> Nested rectangles sized by value — great for hierarchical data with many components.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Avoid pie charts when there are more than 5 categories or when values are very similar — use a stacked bar chart instead.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> 7. Geographical Charts</h2>
<p>When your data has a geographic component, specialized charts can represent regions and locations in a meaningful, intuitive way.</p>
<ul>
  <li><strong>Choropleth:</strong> Regions colored according to a data variable (e.g., darker color = higher population). Best for showing regional variation.</li>
  <li><strong>Cartogram:</strong> Regions distorted in size proportional to a variable (e.g., larger area = more votes). Good for emphasizing disparities.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Choropleths are the most common geographic chart. Always include a clear legend since color alone can be ambiguous.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> 8. Python Visualization Libraries</h2>
<p>Python provides powerful libraries for creating everything from static publication-quality plots to fully interactive dashboards.</p>
<ul>
  <li><strong>matplotlib:</strong> The foundational Python plotting library. Full control over every aspect of the figure.</li>
  <li><strong>seaborn:</strong> Built on top of matplotlib. Simplifies statistical visualizations.</li>
  <li><strong>plotly / plotly.express:</strong> Creates fully interactive charts (zoom, hover, filter).</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Use matplotlib/seaborn for static reports and publications. Use plotly for interactive dashboards and exploratory analysis.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10"/><path d="M12 10l3-3v10"/></svg> 9. Correlation in Visualization</h2>
<p>Correlation describes the linear relationship between two variables. Understanding correlation is key to interpreting heatmaps, scatter plots, and pairplots correctly.</p>
<ul>
  <li><strong>ρ ≈ +1:</strong> Strong positive correlation — as X increases, Y increases.</li>
  <li><strong>ρ ≈ −1:</strong> Strong negative correlation — as X increases, Y decreases.</li>
  <li><strong>ρ ≈ 0:</strong> No linear correlation — variables are not linearly related.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Correlation only captures LINEAR relationships. A correlation of 0 does not mean there is no relationship — there may be a nonlinear one.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Python Code Implementation</h2>

<h3>1. Load Iris Dataset — Seaborn</h3>
<p>Loads the classic Iris dataset directly from seaborn as a pandas DataFrame. No file download needed — seaborn hosts it online. The dataset has 150 rows and 5 columns: 4 numeric flower measurements and 1 categorical species column (setosa, versicolor, virginica).</p>
<div class="code-block">
<pre><code class="language-python">
import matplotlib.pyplot as plt
import seaborn as sns

# Load directly from seaborn — returns a pandas DataFrame
iris = sns.load_dataset('iris')

print(iris)
# 150 rows × 5 columns
# Columns: sepal_length, sepal_width, petal_length, petal_width, species
# Species: setosa (50), versicolor (50), virginica (50)
</code></pre>
</div>

<h3>2. Basic Statistics — iris.describe()</h3>
<p>The pandas describe() method generates summary statistics for all numeric columns in one call. It shows count, mean, standard deviation, min, 25th percentile (Q1), median (50%), 75th percentile (Q3), and max. Non-numeric columns like 'species' are automatically excluded.</p>
<div class="code-block">
<pre><code class="language-python">
import seaborn as sns

iris = sns.load_dataset('iris')

# Summary statistics for all numeric columns
iris.describe()

# Output rows:   count | mean | std | min | 25% | 50% | 75% | max
# Output columns: sepal_length | sepal_width | petal_length | petal_width
</code></pre>
</div>

<h3>3. Pairplot — All Feature Relationships</h3>
<p>A pairplot creates a grid of scatter plots for every combination of numeric features. Each off-diagonal cell shows the scatter plot between two features. The diagonal cells show the distribution of each single feature (KDE by default when hue is set). The hue='species' parameter colors each point by its species, making clusters and separability immediately visible.</p>
<div class="code-block">
<pre><code class="language-python">
import matplotlib.pyplot as plt
import seaborn as sns

iris = sns.load_dataset('iris')

# Grid of scatter plots — all feature pairs
# hue='species' → each species gets a different color
# Diagonal → KDE (Kernel Density Estimate) per species
sns.pairplot(iris, hue='species')
plt.show()

# Key insight: petal_length and petal_width clearly separate
# the three species — setosa is completely isolated
</code></pre>
</div>

<h3>4. Correlation Heatmap</h3>
<p>A heatmap visualizes the correlation matrix — pairwise Pearson correlations between all numeric features. We must drop 'species' first because corr() only works on numeric columns. The cmap='coolwarm' gives red for positive and blue for negative correlations. annot=True prints the correlation values inside each cell. The diagonal is always 1.00.</p>
<div class="code-block">
<pre><code class="language-python">
import matplotlib.pyplot as plt
import seaborn as sns

iris = sns.load_dataset('iris')

plt.figure(figsize=(8, 6))

# Drop non-numeric 'species' before computing correlations
corr_matrix = iris.drop('species', axis=1).corr()

sns.heatmap(
    corr_matrix,
    annot=True,       # Print values inside cells
    cmap='coolwarm',  # Red = positive, Blue = negative
    fmt=".2f"         # 2 decimal places
)
plt.title('Correlation Matrix — Iris Dataset')
plt.show()

# Key findings:
# petal_length vs petal_width  → ρ = 0.96 (very strong positive)
# sepal_length vs petal_length → ρ = 0.87 (strong positive)
# sepal_width  vs petal_length → ρ = -0.43 (moderate negative)
</code></pre>
</div>

<h3>5. Interactive Scatter Plot — Plotly Express</h3>
<p>Plotly Express creates fully interactive charts — users can zoom, pan, hover, and click to filter. The color='species' parameter maps each species to a color. size='petal_length' encodes a third variable as dot size. hover_data=['petal_width'] adds petal_width as extra information in the tooltip when hovering.</p>
<div class="code-block">
<pre><code class="language-python">
import plotly.express as px
import seaborn as sns

iris = sns.load_dataset('iris')

fig = px.scatter(
    iris,
    x='sepal_length',           # x-axis variable
    y='sepal_width',            # y-axis variable
    color='species',            # encode species as color
    size='petal_length',        # encode petal_length as dot size
    hover_data=['petal_width']  # show in tooltip on hover
)
fig.update_layout(title='Iris Dataset — Interactive Scatter Plot')
fig.show()

# Interactive features: zoom, pan, click legend to toggle species,
# hover over dots to see all feature values
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.6 0-.42-.17-.8-.44-1.1-.27-.3-.44-.7-.44-1.15 0-.91.75-1.65 1.66-1.65H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z"/></svg> 1. ما هو تصور البيانات؟</h2>
<p>تصور البيانات هو عملية استخدام العناصر المرئية مثل المخططات أو الرسوم البيانية أو الخرائط لتمثيل البيانات.</p>
<ul>
  <li><strong>تحديد الاتجاهات والأنماط.</strong></li>
  <li><strong>التنبؤ بالقيم المستقبلية.</strong></li>
  <li><strong>تحديد الانحرافات.</strong></li>
  <li><strong>مقارنة النقاط الهامة.</strong></li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'Data visualization translates complex data into intuitive visual formats.',
      'Comparison charts (Column, Bar, Radar) highlight differences between categories.',
      'Trend charts (Line, Area) show changes over time.',
      'Relationship charts (Scatter, Heatmap) reveal correlations between variables.',
      'Distribution charts (Histogram, Boxplot) show data spread and outliers.',
      'Composition charts (Pie, Stacked Bar) show part-to-whole relationships.',
      'Python libraries like Seaborn and Plotly make complex plotting very efficient.',
      'Correlation (ρ) measures linear relationships between variables from -1 to +1.'
    ],
    pointsAr: [
      'يترجم تصور البيانات البيانات المعقدة إلى تنسيقات مرئية بديهية.',
      'تخطيطات المقارنة توضح الفروق بين الفئات.',
      'مخططالات الاتجاه توضح التغييرات بمرور الوقت.',
      'تخطيطات العلاقة تكشف عن الارتباطات بين المتغيرات.',
      'تخطيطات التوزيع توضح انتشار البيانات والقيم المتطرفة.',
      'تخطيطات التكوين توضح علاقة الجزء بالكل.',
      'مكتبات بايثون مثل Seaborn و Plotly تجعل التخطيط المعقد فعالاً للغاية.'
    ]
  },

  mcq: [
    {
      id: 'ds-l3-q1',
      question: 'Data visualization translates complex data into:',
      answers: [
        { id: 'a', text: 'Text summaries', isCorrect: false },
        { id: 'b', text: 'Visual representations', isCorrect: true },
        { id: 'c', text: 'Numerical tables', isCorrect: false },
        { id: 'd', text: 'Audio formats', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q2',
      question: 'Which chart type is used to show data changes OVER TIME?',
      answers: [
        { id: 'a', text: 'Pie chart', isCorrect: false },
        { id: 'b', text: 'Bubble chart', isCorrect: false },
        { id: 'c', text: 'Line graph', isCorrect: true },
        { id: 'd', text: 'Choropleth', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q3',
      question: 'Composition charts (part-to-whole) include:',
      answers: [
        { id: 'a', text: 'Scatter plot, Bubble chart', isCorrect: false },
        { id: 'b', text: 'Stacked Bar, Pie chart, Tree Map', isCorrect: true },
        { id: 'c', text: 'Histogram, Boxplot', isCorrect: false },
        { id: 'd', text: 'Choropleths, Cartograms', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q4',
      question: 'Choropleths and Cartograms are used for:',
      answers: [
        { id: 'a', text: 'Trend analysis', isCorrect: false },
        { id: 'b', text: 'Distribution analysis', isCorrect: false },
        { id: 'c', text: 'Geographical data', isCorrect: true },
        { id: 'd', text: 'Relationship analysis', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q5',
      question: 'A scatter plot is used for which type of chart?',
      answers: [
        { id: 'a', text: 'Trend', isCorrect: false },
        { id: 'b', text: 'Comparison / Relationship', isCorrect: true },
        { id: 'c', text: 'Composition', isCorrect: false },
        { id: 'd', text: 'Geographical', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q6',
      question: 'To visualize one-dimensional categorical data, the best choice is:',
      answers: [
        { id: 'a', text: 'Scatter plot', isCorrect: false },
        { id: 'b', text: 'Line graph', isCorrect: false },
        { id: 'c', text: 'Histogram or Pie chart', isCorrect: true },
        { id: 'd', text: 'Bubble chart', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q7',
      question: 'A pie chart shows:',
      answers: [
        { id: 'a', text: 'Counts for each category', isCorrect: false },
        { id: 'b', text: 'Proportion of data in each category (adds to 100%)', isCorrect: true },
        { id: 'c', text: 'Data changes over time', isCorrect: false },
        { id: 'd', text: 'Correlation between variables', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q8',
      question: 'Which Python libraries are mentioned for creating visualizations?',
      answers: [
        { id: 'a', text: 'numpy and scipy', isCorrect: false },
        { id: 'b', text: 'matplotlib and seaborn', isCorrect: true },
        { id: 'c', text: 'plotly and bokeh', isCorrect: false },
        { id: 'd', text: 'pandas and sklearn', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q9',
      question: 'The Iris dataset has how many samples and how many species?',
      answers: [
        { id: 'a', text: '100 samples, 2 species', isCorrect: false },
        { id: 'b', text: '150 samples, 3 species', isCorrect: true },
        { id: 'c', text: '200 samples, 4 species', isCorrect: false },
        { id: 'd', text: '50 samples, 5 species', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q10',
      question: 'The Iris dataset features are:',
      answers: [
        { id: 'a', text: 'height, weight, color, texture', isCorrect: false },
        { id: 'b', text: 'sepal_length, sepal_width, petal_length, petal_width', isCorrect: true },
        { id: 'c', text: 'x, y, z, w', isCorrect: false },
        { id: 'd', text: 'length, width, area, perimeter', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q11',
      question: 'iris.describe() in pandas displays:',
      answers: [
        { id: 'a', text: 'First 5 rows', isCorrect: false },
        { id: 'b', text: 'Basic statistics (count, mean, std, min, max)', isCorrect: true },
        { id: 'c', text: 'Column names', isCorrect: false },
        { id: 'd', text: 'Data types', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q12',
      question: 'In sns.pairplot(), the hue parameter:',
      answers: [
        { id: 'a', text: 'Sets the color theme', isCorrect: false },
        { id: 'b', text: 'Colors points based on a categorical variable', isCorrect: true },
        { id: 'c', text: 'Adjusts the plot size', isCorrect: false },
        { id: 'd', text: 'Adds a title', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q13',
      question: 'The diagonal plots in a pairplot show:',
      answers: [
        { id: 'a', text: 'Scatter plots', isCorrect: false },
        { id: 'b', text: 'Line charts', isCorrect: false },
        { id: 'c', text: 'Histograms or KDE plots', isCorrect: true },
        { id: 'd', text: 'Box plots', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q14',
      question: 'KDE stands for:',
      answers: [
        { id: 'a', text: 'K-dimensional Estimator', isCorrect: false },
        { id: 'b', text: 'Kernel Density Estimate', isCorrect: true },
        { id: 'c', text: 'Key Data Extraction', isCorrect: false },
        { id: 'd', text: 'K-nearest Distribution Estimator', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q15',
      question: 'In a correlation heatmap, a value close to 1 indicates:',
      answers: [
        { id: 'a', text: 'No correlation', isCorrect: false },
        { id: 'b', text: 'Strong negative correlation', isCorrect: false },
        { id: 'c', text: 'Strong positive correlation', isCorrect: true },
        { id: 'd', text: 'Nonlinear correlation', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q16',
      question: "To drop the 'species' column before computing correlations, the correct code is:",
      answers: [
        { id: 'a', text: "iris.remove('species')", isCorrect: false },
        { id: 'b', text: "iris.drop('species', axis=1).corr()", isCorrect: true },
        { id: 'c', text: "iris.corr(exclude='species')", isCorrect: false },
        { id: 'd', text: "iris['species'].drop()", isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q17',
      question: 'Which library is used for the interactive scatter plot in the lecture?',
      answers: [
        { id: 'a', text: 'matplotlib', isCorrect: false },
        { id: 'b', text: 'seaborn', isCorrect: false },
        { id: 'c', text: 'plotly.express', isCorrect: true },
        { id: 'd', text: 'bokeh', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q18',
      question: "In px.scatter(), the 'size' parameter maps to:",
      answers: [
        { id: 'a', text: 'Dot color', isCorrect: false },
        { id: 'b', text: 'Dot transparency', isCorrect: false },
        { id: 'c', text: 'Dot size (using a numeric column)', isCorrect: true },
        { id: 'd', text: 'Axis scale', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q19',
      question: 'Correlation ρ(X,Y) ranges between:',
      answers: [
        { id: 'a', text: '0 and 1', isCorrect: false },
        { id: 'b', text: '-1 and 0', isCorrect: false },
        { id: 'c', text: '-1 and 1', isCorrect: true },
        { id: 'd', text: '-∞ and ∞', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q20',
      question: 'Correlation is computed as cov(X,Y) divided by:',
      answers: [
        { id: 'a', text: 'var(X) + var(Y)', isCorrect: false },
        { id: 'b', text: '√(var(X) × var(Y))', isCorrect: true },
        { id: 'c', text: 'var(X) × var(Y)', isCorrect: false },
        { id: 'd', text: 'n-1', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q21',
      question: 'Which question should you ask FIRST before choosing a chart?',
      answers: [
        { id: 'a', text: 'What color scheme to use?', isCorrect: false },
        { id: 'b', text: 'What is the primary purpose of the visualization?', isCorrect: true },
        { id: 'c', text: 'How many colors are available?', isCorrect: false },
        { id: 'd', text: 'What software to use?', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q22',
      question: 'Distribution charts help identify:',
      answers: [
        { id: 'a', text: 'Geographic regions', isCorrect: false },
        { id: 'b', text: 'Outliers, normal tendency, and range', isCorrect: true },
        { id: 'c', text: 'Composition of parts', isCorrect: false },
        { id: 'd', text: 'Time-based trends', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q23',
      question: 'Charts used for distribution include Histogram, Boxplot, KDE plot, and:',
      answers: [
        { id: 'a', text: 'Pie chart', isCorrect: false },
        { id: 'b', text: 'Choropleths', isCorrect: false },
        { id: 'c', text: 'Violin plot', isCorrect: true },
        { id: 'd', text: 'Radar chart', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q24',
      question: 'Relationship charts show:',
      answers: [
        { id: 'a', text: 'Part-to-whole composition', isCorrect: false },
        { id: 'b', text: 'Change over time', isCorrect: false },
        { id: 'c', text: 'Connection or correlation between variables', isCorrect: true },
        { id: 'd', text: 'Geographic location', isCorrect: false }
      ]
    },
    {
      id: 'ds-l3-q25',
      question: 'The hover_data parameter in px.scatter() controls:',
      answers: [
        { id: 'a', text: 'The color of hover tooltip', isCorrect: false },
        { id: 'b', text: 'Extra columns shown when hovering over a data point', isCorrect: true },
        { id: 'c', text: 'The hover animation speed', isCorrect: false },
        { id: 'd', text: 'The background color', isCorrect: false }
      ]
    }
  ]
};
