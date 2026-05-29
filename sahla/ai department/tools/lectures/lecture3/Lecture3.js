import { useState } from "react";

const COLOR = "#0F6E56";
const LIGHT = "#E1F5EE";
const BORDER = "#8ECFBE";

const summaryTopics = [
  {
    title: "1. What Is Data Visualization?",
    icon: "🎨",
    summary: "Data visualization is the process of using visual elements like charts, graphs, or maps to represent data. It translates complex, high-volume, or numerical data into a visual format that is easier to process and understand.",
    points: [
      { label: "Identify Trends & Patterns", text: "Observe multiple data points together to spot increases/decreases and recurring patterns across parameters." },
      { label: "Predict Future Values", text: "Multiple data points plotted together give a predictable correlation value for the next data point." },
      { label: "Identify Deviation", text: "See how much a value deviates from the expected — i.e., spot outliers visually." },
      { label: "Compare Significant Points", text: "Two or more data points plotted on the same chart can be compared quickly and intuitively." },
    ],
    note: "Always ask four questions before choosing a chart: What is the purpose? What type of data? How many variables? How many data points?",
  },
  {
    title: "2. Comparison Charts",
    icon: "📊",
    summary: "Comparison charts show how different things are related or how they change. They help identify patterns, trends, and differences in data.",
    points: [
      { label: "Use when", text: "Comparing sales for two months, how one product performs against others, or comparing multiple variables across categories." },
      { label: "Column Chart", text: "Vertical bars — great for comparing values across discrete categories side by side." },
      { label: "Bar Chart", text: "Horizontal bars — useful when category labels are long or when there are many categories." },
      { label: "Line Chart", text: "Connected data points — good for showing change when data is continuous." },
      { label: "Radar Chart", text: "Spider/web chart — ideal for comparing multiple variables simultaneously across categories." },
      { label: "Others", text: "Bullet Graph, Mekko Chart, Pie Chart, Scatter Plot." },
    ],
    note: "Column and bar charts are interchangeable — choose column for few categories, bar when labels are long.",
  },
  {
    title: "3. Trend Charts",
    icon: "📈",
    summary: "Trend charts show how data changes over time. They visually represent the movement of variables, helping to identify patterns and trends across a timeline.",
    points: [
      { label: "Use when", text: "Tracking stock prices over months, monitoring temperature changes over seasons, or following website traffic growth." },
      { label: "Line Graph", text: "The most common trend chart — connects data points in time order to reveal direction and rate of change." },
      { label: "Dual-Axis Line Graph", text: "Two y-axes — allows comparison of two variables with different scales on the same chart." },
      { label: "Area Chart", text: "A line chart with the area below shaded — emphasises volume and cumulative totals over time." },
      { label: "Waterfall Chart", text: "Shows how individual positive/negative values contribute to a total — great for financial P&L analysis." },
    ],
    note: "Use a dual-axis line graph when two variables have very different scales (e.g., revenue in millions vs. customer count in thousands).",
  },
  {
    title: "4. Relationship Charts",
    icon: "🔗",
    summary: "Relationship charts reveal connections or correlations between two or more variables. They show interdependencies and associations visually.",
    points: [
      { label: "Use when", text: "Exploring whether advertising spend correlates with sales, or whether temperature affects ice cream consumption." },
      { label: "Scatter Plot", text: "Plots individual data points as dots using x/y coordinates — reveals positive, negative, or no correlation between two variables." },
      { label: "Bubble Chart", text: "Like a scatter plot but with a third variable encoded as the size of each bubble." },
      { label: "Heatmap", text: "Grid of colored cells where color intensity represents the correlation strength between pairs of variables." },
      { label: "Line Graph", text: "Can also show relationships when one variable changes continuously with another." },
    ],
    note: "Correlation shown in a scatter plot does not imply causation — always interpret carefully.",
  },
  {
    title: "5. Distribution Charts",
    icon: "📉",
    summary: "Distribution charts show how data is spread across values. They help understand outliers, the normal tendency (central location), and the range of your data.",
    points: [
      { label: "Use when", text: "Understanding the spread of exam scores, salary distributions, or how product prices cluster." },
      { label: "Histogram", text: "Bars showing frequency of values in each range (bin). Great for seeing the shape of a distribution (normal, skewed, bimodal)." },
      { label: "Box Plot (Boxplot)", text: "Shows median, Q1, Q3 (IQR box), whiskers, and outlier dots. Compact summary of distribution shape and spread." },
      { label: "KDE Plot", text: "Kernel Density Estimate — smooth continuous curve version of a histogram. Better for comparing multiple distributions." },
      { label: "Violin Plot", text: "Combines a KDE plot with a box plot — shows full distribution shape AND summary statistics together." },
    ],
    note: "Box plots are excellent for comparing distributions across groups side by side on a single chart.",
  },
  {
    title: "6. Composition Charts (Part-to-Whole)",
    icon: "🥧",
    summary: "Composition charts break down a total into its component parts, showing how each part contributes to the whole — either at a single point in time or evolving over time.",
    points: [
      { label: "Use when", text: "Showing how different products contribute to total revenue, or how budget is allocated across departments." },
      { label: "Pie Chart", text: "Classic part-to-whole chart. Best for 2–5 categories. Proportions must always sum to 100%." },
      { label: "Stacked Bar Chart", text: "Bars divided into colored segments. Better than pie for comparing totals AND composition across multiple groups." },
      { label: "Stacked Column Chart", text: "Same as stacked bar but vertical — good for time-series composition data." },
      { label: "Area Chart", text: "Stacked area shows how the composition of a total changes over time." },
      { label: "Tree Map", text: "Nested rectangles sized by value — great for hierarchical data with many components." },
    ],
    note: "Avoid pie charts when there are more than 5 categories or when values are very similar — use a stacked bar chart instead.",
  },
  {
    title: "7. Geographical Charts",
    icon: "🗺️",
    summary: "When your data has a geographic component, specialized charts can represent regions and locations in a meaningful, intuitive way.",
    points: [
      { label: "Choropleth", text: "A map where regions are colored according to a data variable (e.g., darker color = higher population). Best for showing regional variation." },
      { label: "Cartogram", text: "A map where regions are distorted in size proportional to a variable (e.g., larger area = more votes). Good for emphasizing disparities." },
    ],
    note: "Choropleths are the most common geographic chart. Always include a clear legend since color alone can be ambiguous.",
  },
  {
    title: "8. Python Visualization Libraries",
    icon: "🐍",
    summary: "Python provides powerful libraries for creating everything from static publication-quality plots to fully interactive dashboards.",
    points: [
      { label: "matplotlib", text: "The foundational Python plotting library. Full control over every aspect of the figure. Documentation: matplotlib.org. Used for: plt.hist(), plt.boxplot(), plt.show()." },
      { label: "seaborn", text: "Built on top of matplotlib. Simplifies statistical visualizations. Used for: sns.pairplot(), sns.heatmap(), sns.load_dataset." },
      { label: "plotly / plotly.express", text: "Creates fully interactive charts (zoom, hover, filter). Used for: px.scatter() with color, size, and hover_data parameters." },
      { label: "Iris Dataset", text: "Classic 150-sample, 3-species, 4-feature dataset built into seaborn. Perfect for demonstrating pairplots, heatmaps, and scatter plots." },
    ],
    note: "Use matplotlib/seaborn for static reports and publications. Use plotly for interactive dashboards and exploratory analysis.",
  },
  {
    title: "9. Correlation in Visualization",
    icon: "🔢",
    summary: "Correlation describes the linear relationship between two variables. Understanding correlation is key to interpreting heatmaps, scatter plots, and pairplots correctly.",
    points: [
      { label: "Formula", text: "ρ(X,Y) = cov(X,Y) / √(var(X)·var(Y)). Always between −1 and +1." },
      { label: "ρ ≈ +1", text: "Strong positive correlation — as X increases, Y increases. Example: petal_length vs petal_width in Iris data (ρ = 0.96)." },
      { label: "ρ ≈ −1", text: "Strong negative correlation — as X increases, Y decreases. Example: sepal_width vs petal_length in Iris (ρ = −0.43)." },
      { label: "ρ ≈ 0", text: "No linear correlation — variables are not linearly related (may still have nonlinear relationship)." },
      { label: "Diagonal in heatmap", text: "Always 1.00 because every variable is perfectly correlated with itself." },
    ],
    note: "Correlation only captures LINEAR relationships. A correlation of 0 does not mean there is no relationship — there may be a nonlinear one.",
  },
];

const questions = [
  { q: "Data visualization translates complex data into:", options: ["Text summaries", "Visual representations", "Numerical tables", "Audio formats"], answer: 1 },
  { q: "Which chart type is used to show data changes OVER TIME?", options: ["Pie chart", "Bubble chart", "Line graph", "Choropleth"], answer: 2 },
  { q: "Composition charts (part-to-whole) include:", options: ["Scatter plot, Bubble chart", "Stacked Bar, Pie chart, Tree Map", "Histogram, Boxplot", "Choropleths, Cartograms"], answer: 1 },
  { q: "Choropleths and Cartograms are used for:", options: ["Trend analysis", "Distribution analysis", "Geographical data", "Relationship analysis"], answer: 2 },
  { q: "A scatter plot is used for which type of chart?", options: ["Trend", "Comparison / Relationship", "Composition", "Geographical"], answer: 1 },
  { q: "To visualize one-dimensional categorical data, the best choice is:", options: ["Scatter plot", "Line graph", "Histogram or Pie chart", "Bubble chart"], answer: 2 },
  { q: "A pie chart shows:", options: ["Counts for each category", "Proportion of data in each category (adds to 100%)", "Data changes over time", "Correlation between variables"], answer: 1 },
  { q: "Which Python libraries are mentioned for creating visualizations?", options: ["numpy and scipy", "matplotlib and seaborn", "plotly and bokeh", "pandas and sklearn"], answer: 1 },
  { q: "The Iris dataset has how many samples and how many species?", options: ["100 samples, 2 species", "150 samples, 3 species", "200 samples, 4 species", "50 samples, 5 species"], answer: 1 },
  { q: "The Iris dataset features are:", options: ["height, weight, color, texture", "sepal_length, sepal_width, petal_length, petal_width", "x, y, z, w", "length, width, area, perimeter"], answer: 1 },
  { q: "iris.describe() in pandas displays:", options: ["First 5 rows", "Basic statistics (count, mean, std, min, max)", "Column names", "Data types"], answer: 1 },
  { q: "In sns.pairplot(), the hue parameter:", options: ["Sets the color theme", "Colors points based on a categorical variable", "Adjusts the plot size", "Adds a title"], answer: 1 },
  { q: "The diagonal plots in a pairplot show:", options: ["Scatter plots", "Line charts", "Histograms or KDE plots", "Box plots"], answer: 2 },
  { q: "KDE stands for:", options: ["K-dimensional Estimator", "Kernel Density Estimate", "Key Data Extraction", "K-nearest Distribution Estimator"], answer: 1 },
  { q: "In a correlation heatmap, a value close to 1 indicates:", options: ["No correlation", "Strong negative correlation", "Strong positive correlation", "Nonlinear correlation"], answer: 2 },
  { q: "To drop the 'species' column before computing correlations, the correct code is:", options: ["iris.remove('species')", "iris.drop('species', axis=1).corr()", "iris.corr(exclude='species')", "iris['species'].drop()"], answer: 1 },
  { q: "Which library is used for the interactive scatter plot in the lecture?", options: ["matplotlib", "seaborn", "plotly.express", "bokeh"], answer: 2 },
  { q: "In px.scatter(), the 'size' parameter maps to:", options: ["Dot color", "Dot transparency", "Dot size (using a numeric column)", "Axis scale"], answer: 2 },
  { q: "Correlation ρ(X,Y) ranges between:", options: ["0 and 1", "-1 and 0", "-1 and 1", "-∞ and ∞"], answer: 2 },
  { q: "Correlation is computed as cov(X,Y) divided by:", options: ["var(X) + var(Y)", "√(var(X) × var(Y))", "var(X) × var(Y)", "n-1"], answer: 1 },
  { q: "Which question should you ask FIRST before choosing a chart?", options: ["What color scheme to use?", "What is the primary purpose of the visualization?", "How many colors are available?", "What software to use?"], answer: 1 },
  { q: "Distribution charts help identify:", options: ["Geographic regions", "Outliers, normal tendency, and range", "Composition of parts", "Time-based trends"], answer: 1 },
  { q: "Charts used for distribution include Histogram, Boxplot, KDE plot, and:", options: ["Pie chart", "Choropleths", "Violin plot", "Radar chart"], answer: 2 },
  { q: "Relationship charts show:", options: ["Part-to-whole composition", "Change over time", "Connection or correlation between variables", "Geographic location"], answer: 2 },
  { q: "The hover_data parameter in px.scatter() controls:", options: ["The color of hover tooltip", "Extra columns shown when hovering over a data point", "The hover animation speed", "The background color"], answer: 1 },
];

const codeSnippets = [
  {
    title: "Load Iris Dataset — Seaborn",
    explanation: "Loads the classic Iris dataset directly from seaborn as a pandas DataFrame. No file download needed — seaborn hosts it online. The dataset has 150 rows and 5 columns: 4 numeric flower measurements and 1 categorical species column (setosa, versicolor, virginica).",
    code: `import matplotlib.pyplot as plt
import seaborn as sns

# Load directly from seaborn — returns a pandas DataFrame
iris = sns.load_dataset('iris')

print(iris)
# 150 rows × 5 columns
# Columns: sepal_length, sepal_width, petal_length, petal_width, species
# Species: setosa (50), versicolor (50), virginica (50)`,
  },
  {
    title: "Basic Statistics — iris.describe()",
    explanation: "The pandas describe() method generates summary statistics for all numeric columns in one call. It shows count, mean, standard deviation, min, 25th percentile (Q1), median (50%), 75th percentile (Q3), and max. Non-numeric columns like 'species' are automatically excluded.",
    code: `import seaborn as sns

iris = sns.load_dataset('iris')

# Summary statistics for all numeric columns
iris.describe()

# Output rows:   count | mean | std | min | 25% | 50% | 75% | max
# Output columns: sepal_length | sepal_width | petal_length | petal_width`,
  },
  {
    title: "Pairplot — All Feature Relationships",
    explanation: "A pairplot creates a grid of scatter plots for every combination of numeric features. Each off-diagonal cell shows the scatter plot between two features. The diagonal cells show the distribution of each single feature (KDE by default when hue is set). The hue='species' parameter colors each point by its species, making clusters and separability immediately visible.",
    code: `import matplotlib.pyplot as plt
import seaborn as sns

iris = sns.load_dataset('iris')

# Grid of scatter plots — all feature pairs
# hue='species' → each species gets a different color
# Diagonal → KDE (Kernel Density Estimate) per species
sns.pairplot(iris, hue='species')
plt.show()

# Key insight: petal_length and petal_width clearly separate
# the three species — setosa is completely isolated`,
  },
  {
    title: "Correlation Heatmap",
    explanation: "A heatmap visualizes the correlation matrix — pairwise Pearson correlations between all numeric features. We must drop 'species' first because corr() only works on numeric columns. The cmap='coolwarm' gives red for positive and blue for negative correlations. annot=True prints the correlation values inside each cell. The diagonal is always 1.00.",
    code: `import matplotlib.pyplot as plt
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
# sepal_width  vs petal_length → ρ = -0.43 (moderate negative)`,
  },
  {
    title: "Interactive Scatter Plot — Plotly Express",
    explanation: "Plotly Express creates fully interactive charts — users can zoom, pan, hover, and click to filter. The color='species' parameter maps each species to a color. size='petal_length' encodes a third variable as dot size. hover_data=['petal_width'] adds petal_width as extra information in the tooltip when hovering.",
    code: `import plotly.express as px
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
# hover over dots to see all feature values`,
  },
];

function TabBar({ tabs, active, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
      {tabs.map((t) => (
        <button key={t.id} onClick={() => onSelect(t.id)} style={{ padding: "8px 18px", fontSize: 13, borderRadius: 8, border: active === t.id ? `2px solid ${COLOR}` : "0.5px solid var(--color-border-secondary)", background: active === t.id ? LIGHT : "var(--color-background-primary)", color: active === t.id ? COLOR : "var(--color-text-secondary)", fontWeight: active === t.id ? 600 : 400, cursor: "pointer" }}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

function SummarySection() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {summaryTopics.map((topic, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ background: "var(--color-background-primary)", border: `0.5px solid ${isOpen ? BORDER : "var(--color-border-tertiary)"}`, borderRadius: 12, overflow: "hidden" }}>
            <div onClick={() => setOpen(isOpen ? null : i)} style={{ padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", background: isOpen ? LIGHT : "var(--color-background-primary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{topic.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: isOpen ? COLOR : "var(--color-text-primary)" }}>{topic.title}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "12px 0", lineHeight: 1.7 }}>{topic.summary}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {topic.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "var(--color-background-secondary)", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)" }}>
                      <div style={{ minWidth: 7, width: 7, height: 7, borderRadius: "50%", background: COLOR, marginTop: 5, flexShrink: 0 }} />
                      <div style={{ lineHeight: 1.65 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: COLOR }}>{pt.label}:</span>
                        <span style={{ fontSize: 13, color: "var(--color-text-primary)" }}> {pt.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {topic.note && (
                  <div style={{ marginTop: 12, padding: "10px 14px", background: "#FFFBEA", border: "0.5px solid #E5C84A", borderRadius: 8, fontSize: 12, color: "#6B4F00", lineHeight: 1.7 }}>
                    💡 <strong>Key Takeaway:</strong> {topic.note}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function MCQSection() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.reduce((a, q, i) => a + (answers[i] === q.answer ? 1 : 0), 0) : 0;
  const pct = submitted ? Math.round((score / questions.length) * 100) : 0;
  const gradeColor = pct >= 80 ? "#0F6E56" : pct >= 60 ? "#BA7517" : "#A32D2D";
  const gradeBg = pct >= 80 ? "#E1F5EE" : pct >= 60 ? "#FAEEDA" : "#FCEBEB";

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>{Object.keys(answers).length} / {questions.length} answered</p>
        {submitted && <div style={{ padding: "6px 16px", borderRadius: 8, background: gradeBg, color: gradeColor, fontWeight: 600, fontSize: 14 }}>Score: {score}/{questions.length} ({pct}%)</div>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const correct = submitted && chosen === q.answer;
          const wrong = submitted && chosen !== undefined && chosen !== q.answer;
          return (
            <div key={qi} style={{ background: "var(--color-background-primary)", border: submitted ? correct ? "0.5px solid #1D9E75" : wrong ? "0.5px solid #E24B4A" : "0.5px solid var(--color-border-tertiary)" : "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "14px 16px" }}>
              <p style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 500, lineHeight: 1.55, color: "var(--color-text-primary)" }}>
                <span style={{ color: COLOR, fontWeight: 700, marginRight: 6 }}>Q{qi + 1}.</span>{q.q}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {q.options.map((opt, oi) => {
                  const sel = chosen === oi, isAns = q.answer === oi;
                  let bg = "var(--color-background-secondary)", border = "0.5px solid var(--color-border-tertiary)", color = "var(--color-text-primary)";
                  if (submitted) { if (isAns) { bg = "#E1F5EE"; border = "0.5px solid #1D9E75"; color = "#0F6E56"; } else if (sel) { bg = "#FCEBEB"; border = "0.5px solid #E24B4A"; color = "#A32D2D"; } }
                  else if (sel) { bg = LIGHT; border = `0.5px solid ${COLOR}`; color = COLOR; }
                  return (
                    <div key={oi} onClick={() => { if (!submitted) setAnswers(p => ({ ...p, [qi]: oi })); }} style={{ padding: "8px 12px", borderRadius: 8, background: bg, border, color, fontSize: 13, cursor: submitted ? "default" : "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, minWidth: 18 }}>{String.fromCharCode(65 + oi)}.</span>{opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        {!submitted
          ? <button onClick={() => { if (Object.keys(answers).length < questions.length) { alert("Please answer all questions."); return; } setSubmitted(true); }} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 600, borderRadius: 8, border: `2px solid ${COLOR}`, background: LIGHT, color: COLOR, cursor: "pointer" }}>Submit Answers</button>
          : <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 500, borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", cursor: "pointer" }}>Try Again</button>
        }
      </div>
    </>
  );
}

function CodesSection() {
  const [openCode, setOpenCode] = useState(null);
  const [copied, setCopied] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {codeSnippets.map((s, i) => {
        const open = openCode === i;
        return (
          <div key={i} style={{ background: "var(--color-background-primary)", border: `0.5px solid ${open ? BORDER : "var(--color-border-tertiary)"}`, borderRadius: 12, overflow: "hidden" }}>
            <div onClick={() => setOpenCode(open ? null : i)} style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", background: open ? LIGHT : "var(--color-background-primary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: open ? COLOR : LIGHT, color: open ? "#fff" : COLOR, fontWeight: 600 }}>Lec 3</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{s.title}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{open ? "▲" : "▼"}</span>
            </div>
            {open && (
              <div style={{ borderTop: `0.5px solid ${BORDER}` }}>
                <div style={{ padding: "10px 16px", background: "#F0FBF7", borderBottom: `0.5px solid ${BORDER}` }}>
                  <p style={{ margin: 0, fontSize: 12, color: "#0a4035", lineHeight: 1.7 }}>📝 {s.explanation}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "6px 12px", background: "var(--color-background-secondary)" }}>
                  <button onClick={() => { navigator.clipboard.writeText(s.code).then(() => { setCopied(i); setTimeout(() => setCopied(null), 2000); }); }} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)", background: copied === i ? "#E1F5EE" : "var(--color-background-primary)", color: copied === i ? "#0F6E56" : "var(--color-text-secondary)", cursor: "pointer" }}>
                    {copied === i ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: "14px 16px", fontSize: 12, lineHeight: 1.65, overflowX: "auto", fontFamily: "var(--font-mono)", color: "var(--color-text-primary)", background: "var(--color-background-secondary)", whiteSpace: "pre" }}>{s.code}</pre>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Lecture3() {
  const [tab, setTab] = useState("summary");
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ borderLeft: `4px solid ${COLOR}`, paddingLeft: 14, marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px", color: "var(--color-text-primary)" }}>Lecture 3 — Data Visualization</h2>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>Data Science Tools and Software · Alexandria University</p>
      </div>
      <TabBar tabs={[{ id: "summary", label: "📚 Summary & Explanations" }, { id: "mcq", label: "✏️ MCQ Quiz (25 Qs)" }, { id: "codes", label: "💻 Code Reference (5)" }]} active={tab} onSelect={setTab} />
      {tab === "summary" && <SummarySection />}
      {tab === "mcq" && <MCQSection />}
      {tab === "codes" && <CodesSection />}
    </div>
  );
}
