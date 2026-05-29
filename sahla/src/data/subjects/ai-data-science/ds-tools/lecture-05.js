export const LECTURE = {
  subjectId: 'ds-tools',
  number: 5,
  title: 'Lecture 5: ML Models & Workflow',
  titleAr: 'المحاضرة 5: نماذج تعلم الآلة وسير العمل',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg> 1. SciKit-Learn Overview & Main Interfaces</h2>
<p>Scikit-learn (sklearn) is an open-source, robust Python machine learning library. It simplifies implementing ML and statistical models with consistent interfaces across all algorithms.</p>
<ul>
  <li><strong>Estimator:</strong> Any object that learns from data; must implement the <code>fit()</code> method.</li>
  <li><strong>Predictor:</strong> Any object that can make predictions; must implement the <code>predict()</code> method.</li>
  <li><strong>Transformer:</strong> Any object that can transform data; must implement <code>fit_transform()</code> and <code>transform()</code> methods.</li>
  <li><strong>Model:</strong> Any object that can both fit and predict; must implement both <code>fit()</code> and <code>predict()</code> methods.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> This consistent API design makes sklearn extremely easy to use — once you learn one model, you know how to use them all.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m17 10-5-5-5 5h10Z"/><path d="m17 14-5-5-5 5h10Z"/><path d="m17 18-5-5-5 5h10Z"/><path d="M12 18v4"/></svg> 2. Decision Tree Classifier — Iris Dataset</h2>
<p>Decision Tree Classifier splits data recursively based on feature values. It's intuitive, interpretable, and works well for small to medium datasets.</p>
<ul>
  <li><strong>Loading Iris:</strong> <code>iris = sns.load_dataset('iris')</code> loads the classic dataset with 3 species (setosa, versicolor, virginica) and 4 features.</li>
  <li><strong>Train/Test Split:</strong> <code>train_test_split(X, y, test_size=0.2, random_state=42)</code> — 80% training, 20% testing. random_state ensures reproducibility.</li>
  <li><strong>DecisionTreeClassifier:</strong> <code>clf = tree.DecisionTreeClassifier(); clf.fit(X_train, y_train)</code> — builds the tree on training data.</li>
  <li><strong>Plot Tree:</strong> <code>tree.plot_tree(clf)</code> visualizes the decision splits (requires matplotlib).</li>
  <li><strong>Accuracy Score:</strong> <code>metrics.accuracy_score(y_test, y_pred)</code> — proportion of correct predictions.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Decision trees are easy to interpret but prone to overfitting. Use <code>max_depth</code> or pruning to control complexity.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21.3 15.3-6-6-8.5 8.5 6 6 8.5-8.5Z"/><path d="m8.5 12.2 1.4 1.4"/><path d="m11.3 9.4 1.4 1.4"/><path d="m14.1 6.6 1.4 1.4"/><path d="m16.9 3.8 1.4 1.4"/></svg> 3. Feature Standardization with StandardScaler</h2>
<p>StandardScaler standardizes features by removing the mean and scaling to unit variance. Important for algorithms sensitive to feature scales (like KNN, SVM, logistic regression).</p>
<ul>
  <li><strong>Why standardize?</strong> Features with larger scales can dominate distance-based algorithms. Standardization puts all features on the same scale (mean=0, variance=1).</li>
  <li><strong>scaler.fit():</strong> Computes mean and std for each feature from training data.</li>
  <li><strong>scaler.transform():</strong> Applies standardization using the computed mean/std. Same scaler used for both train and test.</li>
  <li><strong>fit_transform():</strong> Combines <code>fit()</code> and <code>transform()</code> in one step. Use on training data only.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Always fit scaler ONLY on training data, then transform both train and test. Never fit on test data — that's data leakage!</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="2"/></svg> 4. KNN Classifier (k-Nearest Neighbors)</h2>
<p>KNN classifies based on majority vote of k nearest neighbors. Non-parametric, lazy learner — no explicit training phase.</p>
<ul>
  <li><strong>Choosing k:</strong> Elbow method: plot accuracy vs k values. Small k = overfitting (noisy), large k = oversmoothing.</li>
  <li><strong>k_range loop:</strong> Iterate through values (e.g., 1–25) to find the k that yields the highest accuracy.</li>
  <li><strong>Out-of-sample prediction:</strong> <code>model.predict([[6,3,4,2]])</code> → predicts 'versicolor'.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> KNN is sensitive to feature scales — always standardize before using KNN. Distance metrics (Euclidean by default) assume all features are on comparable scales.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m19 9-5 5-4-4-3 3"/><path d="M3 3v18h18"/></svg> 5. Linear Regression — Predicting Petal Length</h2>
<p>Linear Regression models relationship between features and continuous target. Here predicting petal_length from sepal features.</p>
<ul>
  <li><strong>Feature selection:</strong> X usually contains numeric predictors (e.g., sepal_length, sepal_width).</li>
  <li><strong>Target:</strong> y is the continuous variable to predict (petal_length).</li>
  <li><strong>Evaluation:</strong> <code>mean_squared_error(y_test, y_pred)</code> and <code>r2_score(y_test, y_pred)</code> quantify the fit.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> MSE near 0 and R² near 1 indicates a high-quality model. In real data, expect R² < 1.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 6. Logistic Regression (Classification)</h2>
<p>Logistic Regression predicts probability of class membership. Despite the name, it's a classification algorithm for binary or multiclass problems.</p>
<ul>
  <li><strong>Binomial:</strong> Two possible outcomes (0/1, Pass/Fail). Uses sigmoid function to output probability.</li>
  <li><strong>Multinomial:</strong> Three or more unordered categories (cat/dog/sheep). Uses softmax function.</li>
  <li><strong>Ordinal:</strong> Three or more ordered categories (low/medium/high).</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Logistic regression outputs probabilities between 0 and 1. Decision boundary is linear — works well when classes are roughly linearly separable.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><polyline points="21 3 21 8 16 8"/></svg> 7. Data Science Workflow Steps</h2>
<p>The complete data science project lifecycle from business understanding to deployment and security.</p>
<ol>
  <li><strong>Business goals:</strong> Understand the problem and define success metrics.</li>
  <li><strong>Data creation/collection:</strong> Acquire or generate relevant data.</li>
  <li><strong>Data cleaning:</strong> Handle missing values, outliers, inconsistencies (Takes 60-80% of time).</li>
  <li><strong>Data preparation:</strong> Transform data for modeling (encoding, scaling).</li>
  <li><strong>Data integration/transformation:</strong> Feature engineering and combining sources.</li>
  <li><strong>Deployment:</strong> Put model into production.</li>
  <li><strong>Governance & Security:</strong> Data privacy, security, and compliance.</li>
</ol>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Data cleaning typically takes 60-80% of project time. Never skip EDA (Exploratory Data Analysis) before modeling.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> 8. Evaluation Metrics Review</h2>
<p>Proper evaluation depends on the task type (Classification vs Regression).</p>
<ul>
  <li><strong>Classification:</strong> Accuracy, Precision, Recall, F1, Confusion Matrix.</li>
  <li><strong>Regression:</strong> MAE, MSE, RMSE, R².</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Optimize recall for disease detection (don't miss cases). Optimize precision for spam detection (avoid false alarms). Use F1 for imbalanced classes.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Python Code Implementation</h2>

<h3>1. Decision Tree Classifier — Full Example</h3>
<p>Load Iris dataset, split into train/test, train a DecisionTreeClassifier, predict, and evaluate accuracy. tree.plot_tree() visualizes the learned decision rules.</p>
<div class="code-block">
<pre><code class="language-python">
import seaborn as sns
from sklearn import tree
from sklearn import metrics
from sklearn.model_selection import train_test_split

iris = sns.load_dataset('iris')

X = iris.drop('species', axis=1)
y = iris['species']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

clf = tree.DecisionTreeClassifier()
clf = clf.fit(X_train, y_train)

tree.plot_tree(clf)

y_pred = clf.predict(X_test)
print("Accuracy:", metrics.accuracy_score(y_test, y_pred))
</code></pre>
</div>

<h3>2. Feature Standardization with StandardScaler</h3>
<p>Standardizes features to mean=0, variance=1. Always fit on training data only, then transform both train and test sets.</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import seaborn as sns

iris = sns.load_dataset('iris')
X = iris.drop('species', axis=1)
y = iris['species']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

scaler = StandardScaler()
scaler.fit(X_train)
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)

print("Train mean:", X_train_scaled.mean(axis=0))
print("Train std:", X_train_scaled.std(axis=0))
</code></pre>
</div>

<h3>3. KNN Classifier — Finding Best k</h3>
<p>Loop over k values from 1 to 25, plot accuracy scores to choose optimal k. Then train final model with best k (e.g., k=12).</p>
<div class="code-block">
<pre><code class="language-python">
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
import seaborn as sns

iris = sns.load_dataset('iris')
X = iris.drop('species', axis=1)
y = iris['species']

k_range = list(range(1, 26))
scores = []
for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X, y)
    y_pred = knn.predict(X)
    scores.append(metrics.accuracy_score(y, y_pred))

plt.plot(k_range, scores)
plt.xlabel('Value of k for KNN')
plt.ylabel('Accuracy Score')
plt.title('Accuracy Scores for k-Nearest-Neighbors')
plt.show()

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
model = KNeighborsClassifier(n_neighbors=12)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(model.predict([[6, 3, 4, 2]]))
</code></pre>
</div>

<h3>4. Linear Regression — Predicting Petal Length</h3>
<p>Use sepal features to predict continuous petal_length. Evaluates with MSE and R².</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import seaborn as sns

iris = sns.load_dataset('iris')

X = iris.drop(['species', 'petal_length'], axis=1)
y = iris['petal_length']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print(f"Mean Squared Error: {mse}")
print(f"R-squared: {r2}")
</code></pre>
</div>

<h3>5. Logistic Regression — Multiclass Classification</h3>
<p>LogisticRegression for Iris species classification. Automatically handles multiclass using one-vs-rest (OvR).</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

logreg = LogisticRegression(max_iter=200)
logreg.fit(X_train, y_train)
y_pred = logreg.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
</code></pre>
</div>

<h3>6. Confusion Matrix & Classification Report</h3>
<p>Full evaluation of classification model: confusion matrix (TP,FP,FN,TN), precision, recall, f1-score.</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:\n", cm)

print("Classification Report:\n", classification_report(y_test, y_pred))
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg> 1. مكتبة SciKit-Learn</h2>
<p>المكتبة الأساسية لتعلم الآلة في بايثون، وتتميز بواجهة موحدة لجميع النماذج (fit, predict).</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><polyline points="21 3 21 8 16 8"/></svg> 2. سير عمل علوم البيانات</h2>
<ol>
  <li>الأهداف التجارية.</li>
  <li>جمع البيانات وتوليدها.</li>
  <li><strong>تنظيف البيانات (60-80% من الوقت).</strong></li>
  <li>تحضير البيانات ونمذجتها.</li>
  <li>النشر والأمان.</li>
</ol>
        `
      }
    }
  ],

  summary: {
    points: [
      'Scikit-learn provides a unified API (fit/predict/transform) for all ML tasks.',
      'Decision Trees are easy to visualize but can overfit without constraints.',
      'Standardization is mandatory for distance-based algorithms like KNN.',
      'The Elbow Method helps select the best K value in KNN.',
      'Logistic Regression is used for classification, despite its name.',
      'Data cleaning is the most time-consuming part (60-80%) of any Data Science project.',
      'R-squared (R²) near 1.0 indicates an excellent fit for regression models.',
      'F1-Score is the best metric for imbalanced classification problems.',
      'The model development lifecycle ends with Deployment, Governance, and Security.'
    ],
    pointsAr: [
      'توفر Scikit-learn واجهة موحدة لجميع مهام تعلم الآلة.',
      'الأشجار القرارية سهلة التصور ولكنها قد تعاني من فرط التخصيص (Overfitting).',
      'التقييس (Standardization) إلزامي للخوارزميات المعتمدة على المسافة مثل KNN.',
      'تساعد طريقة Elbow في اختيار أفضل قيمة لـ K في خوارزمية KNN.',
      'يستخدم الانحدار اللوجستي للتصنيف وليس للتنبؤ بالقيم المستمرة.',
      'تنظيف البيانات هو الجزء الأكثر استهلاكاً للوقت في أي مشروع.',
      'التقييم الصحيح هو المفتاح لنجاح النموذج.'
    ]
  },

  mcq: [
    {
      id: 'ds-l5-q1',
      question: 'What does the fit() method do in scikit-learn estimators?',
      answers: [
        { id: 'a', text: 'Makes predictions on new data', isCorrect: false },
        { id: 'b', text: 'Learns parameters from training data', isCorrect: true },
        { id: 'c', text: 'Transforms the input features', isCorrect: false },
        { id: 'd', text: 'Plots the model', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q2',
      question: 'Which function from sklearn.model_selection splits data into training and testing sets?',
      answers: [
        { id: 'a', text: 'split_data()', isCorrect: false },
        { id: 'b', text: 'train_test_divide()', isCorrect: false },
        { id: 'c', text: 'train_test_split()', isCorrect: true },
        { id: 'd', text: 'data_split()', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q3',
      question: 'What does test_size=0.2 in train_test_split represent?',
      answers: [
        { id: 'a', text: '20% of data for training', isCorrect: false },
        { id: 'b', text: '20% of data for testing', isCorrect: true },
        { id: 'c', text: '80% of data for testing', isCorrect: false },
        { id: 'd', text: '200 samples for testing', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q4',
      question: 'What does random_state parameter do in train_test_split?',
      answers: [
        { id: 'a', text: 'Shuffles data randomly each time', isCorrect: false },
        { id: 'b', text: 'Ensures reproducible splits', isCorrect: true },
        { id: 'c', text: 'Increases test size', isCorrect: false },
        { id: 'd', text: 'Randomizes features', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q5',
      question: 'Which library provides the DecisionTreeClassifier?',
      answers: [
        { id: 'a', text: 'sklearn.ensemble', isCorrect: false },
        { id: 'b', text: 'sklearn.tree', isCorrect: true },
        { id: 'c', text: 'sklearn.neighbors', isCorrect: false },
        { id: 'd', text: 'sklearn.linear_model', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q6',
      question: 'What does tree.plot_tree(clf) do?',
      answers: [
        { id: 'a', text: 'Trains the decision tree', isCorrect: false },
        { id: 'b', text: 'Visualizes the tree structure', isCorrect: true },
        { id: 'c', text: 'Prunes the tree', isCorrect: false },
        { id: 'd', text: 'Calculates accuracy', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q7',
      question: 'Why use StandardScaler before KNN?',
      answers: [
        { id: 'a', text: 'To increase model complexity', isCorrect: false },
        { id: 'b', text: 'KNN is sensitive to feature scales', isCorrect: true },
        { id: 'c', text: 'To convert categorical data', isCorrect: false },
        { id: 'd', text: 'To handle missing values', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q8',
      question: 'What does scaler.fit_transform(X_train) do?',
      answers: [
        { id: 'a', text: 'Only transforms training data', isCorrect: false },
        { id: 'b', text: 'Fits scaler on X_train AND transforms it', isCorrect: true },
        { id: 'c', text: 'Only fits scaler without transforming', isCorrect: false },
        { id: 'd', text: 'Resets the scaler', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q9',
      question: 'In KNN, what happens if k is too small (e.g., k=1)?',
      answers: [
        { id: 'a', text: 'Underfitting (too smooth)', isCorrect: false },
        { id: 'b', text: 'Overfitting (sensitive to noise)', isCorrect: true },
        { id: 'c', text: 'Better generalization', isCorrect: false },
        { id: 'd', text: 'No effect', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q10',
      question: 'Which method is used to make predictions with a trained KNN model?',
      answers: [
        { id: 'a', text: 'model.predict()', isCorrect: true },
        { id: 'b', text: 'model.fit()', isCorrect: false },
        { id: 'c', text: 'model.transform()', isCorrect: false },
        { id: 'd', text: 'model.score()', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q11',
      question: 'What is the output of model.predict([[6,3,4,2]]) in the KNN example?',
      answers: [
        { id: 'a', text: 'setosa', isCorrect: false },
        { id: 'b', text: 'versicolor', isCorrect: true },
        { id: 'c', text: 'virginica', isCorrect: false },
        { id: 'd', text: 'Error', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q12',
      question: 'In Linear Regression example, what is the target variable?',
      answers: [
        { id: 'a', text: 'sepal_length', isCorrect: false },
        { id: 'b', text: 'species', isCorrect: false },
        { id: 'c', text: 'petal_length', isCorrect: true },
        { id: 'd', text: 'sepal_width', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q13',
      question: 'Which metric is the average of squared differences between predicted and actual values?',
      answers: [
        { id: 'a', text: 'MAE', isCorrect: false },
        { id: 'b', text: 'MSE', isCorrect: true },
        { id: 'c', text: 'RMSE', isCorrect: false },
        { id: 'd', text: 'R²', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q14',
      question: 'R² value of 1 indicates:',
      answers: [
        { id: 'a', text: 'Model explains none of the variance', isCorrect: false },
        { id: 'b', text: 'Perfect fit (all variance explained)', isCorrect: true },
        { id: 'c', text: 'Model worse than predicting mean', isCorrect: false },
        { id: 'd', text: 'Negative correlation', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q15',
      question: 'Logistic Regression is used for:',
      answers: [
        { id: 'a', text: 'Regression (continuous output)', isCorrect: false },
        { id: 'b', text: 'Classification (categorical output)', isCorrect: true },
        { id: 'c', text: 'Clustering', isCorrect: false },
        { id: 'd', text: 'Dimensionality reduction', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q16',
      question: 'Which type of Logistic Regression handles 3+ unordered categories?',
      answers: [
        { id: 'a', text: 'Binomial', isCorrect: false },
        { id: 'b', text: 'Multinomial', isCorrect: true },
        { id: 'c', text: 'Ordinal', isCorrect: false },
        { id: 'd', text: 'Polynomial', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q17',
      question: 'What does TP stand for in confusion matrix?',
      answers: [
        { id: 'a', text: 'True Negative', isCorrect: false },
        { id: 'b', text: 'False Positive', isCorrect: false },
        { id: 'c', text: 'True Positive', isCorrect: true },
        { id: 'd', text: 'False Negative', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q18',
      question: 'Precision is calculated as:',
      answers: [
        { id: 'a', text: 'TP/(TP+FN)', isCorrect: false },
        { id: 'b', text: 'TP/(TP+FP)', isCorrect: true },
        { id: 'c', text: 'TN/(TN+FP)', isCorrect: false },
        { id: 'd', text: '(TP+TN)/Total', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q19',
      question: 'Recall is also known as:',
      answers: [
        { id: 'a', text: 'Specificity', isCorrect: false },
        { id: 'b', text: 'Precision', isCorrect: false },
        { id: 'c', text: 'Sensitivity', isCorrect: true },
        { id: 'd', text: 'Accuracy', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q20',
      question: 'F1-Score is the _________ of precision and recall.',
      answers: [
        { id: 'a', text: 'Arithmetic mean', isCorrect: false },
        { id: 'b', text: 'Geometric mean', isCorrect: false },
        { id: 'c', text: 'Harmonic mean', isCorrect: true },
        { id: 'd', text: 'Quadratic mean', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q21',
      question: 'Which metric is best for imbalanced classification problems?',
      answers: [
        { id: 'a', text: 'Accuracy', isCorrect: false },
        { id: 'b', text: 'Precision alone', isCorrect: false },
        { id: 'c', text: 'Recall alone', isCorrect: false },
        { id: 'd', text: 'F1-Score', isCorrect: true }
      ]
    },
    {
      id: 'ds-l5-q22',
      question: 'What does RMSE stand for?',
      answers: [
        { id: 'a', text: 'Root Maximum Squared Error', isCorrect: false },
        { id: 'b', text: 'Root Mean Squared Error', isCorrect: true },
        { id: 'c', text: 'Relative Mean Squared Error', isCorrect: false },
        { id: 'd', text: 'Random Mean Square Error', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q23',
      question: 'Which step typically takes 60-80% of data science project time?',
      answers: [
        { id: 'a', text: 'Model training', isCorrect: false },
        { id: 'b', text: 'Data cleaning', isCorrect: true },
        { id: 'c', text: 'Deployment', isCorrect: false },
        { id: 'd', text: 'Business understanding', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q24',
      question: 'What does the transform() method do?',
      answers: [
        { id: 'a', text: 'Learn parameters from data', isCorrect: false },
        { id: 'b', text: 'Apply transformation using fitted parameters', isCorrect: true },
        { id: 'c', text: 'Make predictions', isCorrect: false },
        { id: 'd', text: 'Calculate accuracy', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q25',
      question: 'In Decision Tree, what does max_depth control?',
      answers: [
        { id: 'a', text: 'Number of features', isCorrect: false },
        { id: 'b', text: 'Tree complexity (overfitting prevention)', isCorrect: true },
        { id: 'c', text: 'Training set size', isCorrect: false },
        { id: 'd', text: 'Learning rate', isCorrect: false }
      ]
    },
    {
      id: 'ds-l5-q26',
      question: 'What library is needed to plot the decision tree?',
      answers: [
        { id: 'a', text: 'seaborn', isCorrect: false },
        { id: 'b', text: 'matplotlib', isCorrect: true },
        { id: 'c', text: 'plotly', isCorrect: false },
        { id: 'd', text: 'bokeh', isCorrect: false }
      ]
    }
  ]
};
