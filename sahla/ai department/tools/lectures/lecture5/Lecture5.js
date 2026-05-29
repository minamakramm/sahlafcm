import { useState } from "react";

const COLOR = "#7B2FBE";
const LIGHT = "#F3E8FF";
const BORDER = "#C89DF0";

const summaryTopics = [
  {
    title: "1. SciKit-Learn Overview & Main Interfaces",
    icon: "🤖",
    summary: "Scikit-learn (sklearn) is an open-source, robust Python machine learning library. It simplifies implementing ML and statistical models with consistent interfaces across all algorithms.",
    points: [
      { label: "Estimator", text: "Any object that learns from data; must implement the fit() method." },
      { label: "Predictor", text: "Any object that can make predictions; must implement the predict() method." },
      { label: "Transformer", text: "Any object that can transform data; must implement fit_transform() and transform() methods." },
      { label: "Model", text: "Any object that can both fit and predict; must implement both fit() and predict() methods." },
    ],
    note: "This consistent API design makes sklearn extremely easy to use — once you learn one model, you know how to use them all.",
  },
  {
    title: "2. Decision Tree Classifier — Iris Dataset",
    icon: "🌳",
    summary: "Decision Tree Classifier splits data recursively based on feature values. It's intuitive, interpretable, and works well for small to medium datasets.",
    points: [
      { label: "Loading Iris", text: "iris = sns.load_dataset('iris') loads the classic dataset with 3 species (setosa, versicolor, virginica) and 4 features." },
      { label: "Train/Test Split", text: "train_test_split(X, y, test_size=0.2, random_state=42) — 80% training, 20% testing. random_state ensures reproducibility." },
      { label: "DecisionTreeClassifier", text: "clf = tree.DecisionTreeClassifier(); clf.fit(X_train, y_train) — builds the tree on training data." },
      { label: "Plot Tree", text: "tree.plot_tree(clf) visualizes the decision splits (requires matplotlib)." },
      { label: "Accuracy Score", text: "metrics.accuracy_score(y_test, y_pred) — proportion of correct predictions." },
    ],
    note: "Decision trees are easy to interpret but prone to overfitting. Use max_depth or pruning to control complexity.",
  },
  {
    title: "3. Feature Standardization with StandardScaler",
    icon: "📏",
    summary: "StandardScaler standardizes features by removing the mean and scaling to unit variance. Important for algorithms sensitive to feature scales (like KNN, SVM, logistic regression).",
    points: [
      { label: "Why standardize?", text: "Features with larger scales can dominate distance-based algorithms. Standardization puts all features on the same scale (mean=0, variance=1)." },
      { label: "scaler.fit()", text: "Computes mean and std for each feature from training data." },
      { label: "scaler.transform()", text: "Applies standardization using the computed mean/std. Same scaler used for both train and test." },
      { label: "fit_transform()", text: "Combines fit() and transform() in one step. Use on training data only." },
    ],
    note: "Always fit scaler ONLY on training data, then transform both train and test. Never fit on test data — that's data leakage!",
  },
  {
    title: "4. KNN Classifier (k-Nearest Neighbors)",
    icon: "👥",
    summary: "KNN classifies based on majority vote of k nearest neighbors. Non-parametric, lazy learner — no explicit training phase.",
    points: [
      { label: "Choosing k", text: "Elbow method: plot accuracy vs k values. Small k = overfitting (noisy), large k = oversmoothing." },
      { label: "k_range loop", text: "for k in range(1,26): knn = KNeighborsClassifier(n_neighbors=k); knn.fit(X,y); scores.append(accuracy)." },
      { label: "K=12 example", text: "model = KNeighborsClassifier(n_neighbors=12); model.fit(X_train, y_train); y_pred = model.predict(X_test)." },
      { label: "Out-of-sample prediction", text: "model.predict([[6,3,4,2]]) → predicts 'versicolor'." },
    ],
    note: "KNN is sensitive to feature scales — always standardize before using KNN. Distance metrics (Euclidean by default) assume all features are on comparable scales.",
  },
  {
    title: "5. Linear Regression — Predicting Petal Length",
    icon: "📈",
    summary: "Linear Regression models relationship between features and continuous target. Here predicting petal_length from sepal features.",
    points: [
      { label: "Feature selection", text: "X = iris.drop(['species','petal_length'], axis=1) — using sepal_length, sepal_width, petal_width only." },
      { label: "Target", text: "y = iris['petal_length'] — continuous variable to predict." },
      { label: "LinearRegression", text: "model = LinearRegression(); model.fit(X_train, y_train); y_pred = model.predict(X_test)." },
      { label: "MSE & R²", text: "mean_squared_error(y_test, y_pred); r2_score(y_test, y_pred) — MSE near 0, R² near 1 indicates perfect fit." },
    ],
    note: "In the example, R² = 1.0 and MSE ≈ 1.4e-30 — suspiciously perfect (likely due to a small synthetic example or data leak). In real data, expect R² < 1.",
  },
  {
    title: "6. Logistic Regression (Classification)",
    icon: "📊",
    summary: "Logistic Regression predicts probability of class membership. Despite the name, it's a classification algorithm for binary or multiclass problems.",
    points: [
      { label: "Binomial", text: "Two possible outcomes (0/1, Pass/Fail). Uses sigmoid function to output probability." },
      { label: "Multinomial", text: "Three or more unordered categories (cat/dog/sheep). Uses softmax function." },
      { label: "Ordinal", text: "Three or more ordered categories (low/medium/high)." },
      { label: "Iris example", text: "LogisticRegression() with default settings works for multiclass. load_iris(return_X_y=True) loads features and targets." },
    ],
    note: "Logistic regression outputs probabilities between 0 and 1. Decision boundary is linear — works well when classes are roughly linearly separable.",
  },
  {
    title: "7. Data Science Workflow Steps",
    icon: "🔄",
    summary: "The complete data science project lifecycle from business understanding to deployment and security.",
    points: [
      { label: "1. Business goals", text: "Understand the problem and define success metrics." },
      { label: "2. Data creation", text: "Generate or acquire relevant data." },
      { label: "3. Data collection", text: "Gather data from various sources." },
      { label: "4. Data cleaning", text: "Handle missing values, outliers, inconsistencies." },
      { label: "5. Data preparation", text: "Transform data for modeling (encoding, scaling)." },
      { label: "6. Data integration", text: "Combine data from multiple sources." },
      { label: "7. Data transformation", text: "Feature engineering and normalization." },
      { label: "8. Deployment", text: "Put model into production." },
      { label: "9. Governance & Security", text: "Data privacy, security, compliance." },
    ],
    note: "Data cleaning typically takes 60-80% of project time. Never skipEDA (Exploratory Data Analysis) before modeling.",
  },
  {
    title: "8. Evaluation Metrics Review (Classification)",
    icon: "🎯",
    summary: "Metrics for classification: Accuracy, Precision, Recall, F1, Confusion Matrix.",
    points: [
      { label: "Confusion Matrix", text: "TP, FP, FN, TN — shows where model makes errors." },
      { label: "Accuracy", text: "(TP+TN)/Total — overall correctness. Misleading for imbalanced data." },
      { label: "Precision", text: "TP/(TP+FP) — of predicted positives, how many are correct?" },
      { label: "Recall (Sensitivity)", text: "TP/(TP+FN) — of actual positives, how many caught?" },
      { label: "F1-Score", text: "Harmonic mean of precision and recall: 2*(P*R)/(P+R). Best for imbalanced classes." },
    ],
    note: "Use F1 when class imbalance exists. Optimize recall for disease detection (don't miss cases). Optimize precision for spam detection (avoid false alarms).",
  },
  {
    title: "9. Regression Metrics Review",
    icon: "📉",
    summary: "Regression metrics: MAE, MSE, RMSE, R² — measure error between predicted and actual continuous values.",
    points: [
      { label: "MAE", text: "Mean Absolute Error — average |y − ŷ|. Robust to outliers, same units as target." },
      { label: "MSE", text: "Mean Squared Error — average (y − ŷ)². Penalizes large errors heavily." },
      { label: "RMSE", text: "√MSE — back to original units. Most widely reported." },
      { label: "R²", text: "Proportion of variance explained. 1 = perfect, 0 = predicts mean, negative = worse than mean." },
    ],
    note: "RMSE penalizes large errors more than MAE. Use RMSE when large errors are especially undesirable.",
  },
];

const questions = [
  { q: "What does the fit() method do in scikit-learn estimators?", options: ["Makes predictions on new data", "Learns parameters from training data", "Transforms the input features", "Plots the model"], answer: 1 },
  { q: "Which function from sklearn.model_selection splits data into training and testing sets?", options: ["split_data()", "train_test_divide()", "train_test_split()", "data_split()"], answer: 2 },
  { q: "What does test_size=0.2 in train_test_split represent?", options: ["20% of data for training", "20% of data for testing", "80% of data for testing", "200 samples for testing"], answer: 1 },
  { q: "What does random_state parameter do in train_test_split?", options: ["Shuffles data randomly each time", "Ensures reproducible splits", "Increases test size", "Randomizes features"], answer: 1 },
  { q: "Which library provides the DecisionTreeClassifier?", options: ["sklearn.ensemble", "sklearn.tree", "sklearn.neighbors", "sklearn.linear_model"], answer: 1 },
  { q: "What does tree.plot_tree(clf) do?", options: ["Trains the decision tree", "Visualizes the tree structure", "Prunes the tree", "Calculates accuracy"], answer: 1 },
  { q: "Why use StandardScaler before KNN?", options: ["To increase model complexity", "KNN is sensitive to feature scales", "To convert categorical data", "To handle missing values"], answer: 1 },
  { q: "What does scaler.fit_transform(X_train) do?", options: ["Only transforms training data", "Fits scaler on X_train AND transforms it", "Only fits scaler without transforming", "Resets the scaler"], answer: 1 },
  { q: "In KNN, what happens if k is too small (e.g., k=1)?", options: ["Underfitting (too smooth)", "Overfitting (sensitive to noise)", "Better generalization", "No effect"], answer: 1 },
  { q: "Which method is used to make predictions with a trained KNN model?", options: ["model.predict()", "model.fit()", "model.transform()", "model.score()"], answer: 0 },
  { q: "What is the output of model.predict([[6,3,4,2]]) in the KNN example?", options: ["setosa", "versicolor", "virginica", "Error"], answer: 1 },
  { q: "In Linear Regression example, what is the target variable?", options: ["sepal_length", "species", "petal_length", "sepal_width"], answer: 2 },
  { q: "Which metric is the average of squared differences between predicted and actual values?", options: ["MAE", "MSE", "RMSE", "R²"], answer: 1 },
  { q: "R² value of 1 indicates:", options: ["Model explains none of the variance", "Perfect fit (all variance explained)", "Model worse than predicting mean", "Negative correlation"], answer: 1 },
  { q: "Logistic Regression is used for:", options: ["Regression (continuous output)", "Classification (categorical output)", "Clustering", "Dimensionality reduction"], answer: 1 },
  { q: "Which type of Logistic Regression handles 3+ unordered categories?", options: ["Binomial", "Multinomial", "Ordinal", "Polynomial"], answer: 1 },
  { q: "What does TP stand for in confusion matrix?", options: ["True Negative", "False Positive", "True Positive", "False Negative"], answer: 2 },
  { q: "Precision is calculated as:", options: ["TP/(TP+FN)", "TP/(TP+FP)", "TN/(TN+FP)", "(TP+TN)/Total"], answer: 1 },
  { q: "Recall is also known as:", options: ["Specificity", "Precision", "Sensitivity", "Accuracy"], answer: 2 },
  { q: "F1-Score is the _________ of precision and recall.", options: ["Arithmetic mean", "Geometric mean", "Harmonic mean", "Quadratic mean"], answer: 2 },
  { q: "Which metric is best for imbalanced classification problems?", options: ["Accuracy", "Precision alone", "Recall alone", "F1-Score"], answer: 3 },
  { q: "What does RMSE stand for?", options: ["Root Maximum Squared Error", "Root Mean Squared Error", "Relative Mean Squared Error", "Random Mean Square Error"], answer: 1 },
  { q: "Which step typically takes 60-80% of data science project time?", options: ["Model training", "Data cleaning", "Deployment", "Business understanding"], answer: 1 },
  { q: "What does the transform() method do?", options: ["Learn parameters from data", "Apply transformation using fitted parameters", "Make predictions", "Calculate accuracy"], answer: 1 },
  { q: "In Decision Tree, what does max_depth control?", options: ["Number of features", "Tree complexity (overfitting prevention)", "Training set size", "Learning rate"], answer: 1 },
  { q: "What library is needed to plot the decision tree?", options: ["seaborn", "matplotlib", "plotly", "bokeh"], answer: 1 },
];

const codeSnippets = [
  {
    title: "Decision Tree Classifier — Full Example",
    explanation: "Load Iris dataset, split into train/test, train a DecisionTreeClassifier, predict, and evaluate accuracy. tree.plot_tree() visualizes the learned decision rules.",
    code: `import seaborn as sns
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
print("Accuracy:", metrics.accuracy_score(y_test, y_pred))`,
  },
  {
    title: "Feature Standardization with StandardScaler",
    explanation: "Standardizes features to mean=0, variance=1. Always fit on training data only, then transform both train and test sets.",
    code: `from sklearn.preprocessing import StandardScaler
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
print("Train std:", X_train_scaled.std(axis=0))`,
  },
  {
    title: "KNN Classifier — Finding Best k",
    explanation: "Loop over k values from 1 to 25, plot accuracy scores to choose optimal k. Then train final model with best k (e.g., k=12).",
    code: `import matplotlib.pyplot as plt
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

print(model.predict([[6, 3, 4, 2]]))`,
  },
  {
    title: "Linear Regression — Predicting Petal Length",
    explanation: "Use sepal features to predict continuous petal_length. Evaluates with MSE and R².",
    code: `from sklearn.model_selection import train_test_split
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
print(f"R-squared: {r2}")`,
  },
  {
    title: "Logistic Regression — Multiclass Classification",
    explanation: "LogisticRegression for Iris species classification. Automatically handles multiclass using one-vs-rest (OvR).",
    code: `from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

X, y = load_iris(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

logreg = LogisticRegression(max_iter=200)
logreg.fit(X_train, y_train)
y_pred = logreg.predict(X_test)

from sklearn.metrics import accuracy_score
print("Accuracy:", accuracy_score(y_test, y_pred))`,
  },
  {
    title: "Confusion Matrix & Classification Report",
    explanation: "Full evaluation of classification model: confusion matrix (TP,FP,FN,TN), precision, recall, f1-score.",
    code: `from sklearn.metrics import confusion_matrix, classification_report
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

print("Classification Report:\n", classification_report(y_test, y_pred))`,
  },
];

function TabBar({ tabs, active, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
      {tabs.map((t) => (
        <button key={t.id} onClick={() => onSelect(t.id)} style={{ padding: "8px 18px", fontSize: 13, borderRadius: 8, cursor: "pointer", border: active === t.id ? `2px solid ${COLOR}` : "0.5px solid var(--color-border-secondary)", background: active === t.id ? LIGHT : "var(--color-background-primary)", color: active === t.id ? COLOR : "var(--color-text-secondary)", fontWeight: active === t.id ? 600 : 400 }}>
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
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "12px 0", lineHeight: 1.75 }}>{topic.summary}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {topic.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "var(--color-background-secondary)", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)" }}>
                      <div style={{ minWidth: 7, width: 7, height: 7, borderRadius: "50%", background: COLOR, marginTop: 5, flexShrink: 0 }} />
                      <div style={{ lineHeight: 1.65 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: COLOR }}>{pt.label}: </span>
                        <span style={{ fontSize: 13, color: "var(--color-text-primary)" }}>{pt.text}</span>
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
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{Object.keys(answers).length} / {questions.length} answered</p>
        {submitted && <div style={{ padding: "6px 16px", borderRadius: 8, background: gradeBg, color: gradeColor, fontWeight: 600 }}>Score: {score}/{questions.length} ({pct}%)</div>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const correct = submitted && chosen === q.answer;
          const wrong = submitted && chosen !== undefined && chosen !== q.answer;
          return (
            <div key={qi} style={{ background: "var(--color-background-primary)", border: submitted ? correct ? "0.5px solid #1D9E75" : wrong ? "0.5px solid #E24B4A" : "0.5px solid var(--color-border-tertiary)" : "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "14px 16px" }}>
              <p style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 500 }}><span style={{ color: COLOR, fontWeight: 700, marginRight: 6 }}>Q{qi + 1}.</span>{q.q}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {q.options.map((opt, oi) => {
                  let bg = "var(--color-background-secondary)", border = "0.5px solid var(--color-border-tertiary)", color = "var(--color-text-primary)";
                  if (submitted) {
                    if (q.answer === oi) { bg = "#E1F5EE"; border = "0.5px solid #1D9E75"; color = "#0F6E56"; }
                    else if (chosen === oi) { bg = "#FCEBEB"; border = "0.5px solid #E24B4A"; color = "#A32D2D"; }
                  } else if (chosen === oi) { bg = LIGHT; border = `0.5px solid ${COLOR}`; color = COLOR; }
                  return (
                    <div key={oi} onClick={() => { if (!submitted) setAnswers(p => ({ ...p, [qi]: oi })); }} style={{ padding: "8px 12px", borderRadius: 8, background: bg, border, color, fontSize: 13, cursor: submitted ? "default" : "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontWeight: 600, minWidth: 18 }}>{String.fromCharCode(65 + oi)}.</span>{opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        {!submitted ? <button onClick={() => { if (Object.keys(answers).length < questions.length) { alert("Please answer all questions."); return; } setSubmitted(true); }} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 600, borderRadius: 8, border: `2px solid ${COLOR}`, background: LIGHT, color: COLOR, cursor: "pointer" }}>Submit Answers</button>
          : <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{ padding: "10px 28px", fontSize: 14, borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", cursor: "pointer" }}>Try Again</button>}
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
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: open ? COLOR : LIGHT, color: open ? "#fff" : COLOR, fontWeight: 600 }}>Lec 5</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{s.title}</span>
              </div>
              <span>{open ? "▲" : "▼"}</span>
            </div>
            {open && (
              <div style={{ borderTop: `0.5px solid ${BORDER}` }}>
                <div style={{ padding: "10px 16px", background: "#FAF3FF", borderBottom: `0.5px solid ${BORDER}` }}><p style={{ margin: 0, fontSize: 12, color: "#3d1a6e" }}>📝 {s.explanation}</p></div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "6px 12px", background: "var(--color-background-secondary)" }}>
                  <button onClick={() => { navigator.clipboard.writeText(s.code).then(() => { setCopied(i); setTimeout(() => setCopied(null), 2000); }); }} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)", background: copied === i ? "#E1F5EE" : "var(--color-background-primary)", cursor: "pointer" }}>{copied === i ? "✓ Copied!" : "Copy"}</button>
                </div>
                <pre style={{ margin: 0, padding: "14px 16px", fontSize: 12, overflowX: "auto", fontFamily: "var(--font-mono)", background: "var(--color-background-secondary)" }}>{s.code}</pre>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Lecture5() {
  const [tab, setTab] = useState("summary");
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ borderLeft: `4px solid ${COLOR}`, paddingLeft: 14, marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>Lecture 5 — ML Models & Workflow (Decision Tree, KNN, Regression)</h2>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>Data Science Tools and Software · Alexandria University</p>
      </div>
      <TabBar tabs={[{ id: "summary", label: "📚 Summary & Explanations" }, { id: "mcq", label: "✏️ MCQ Quiz (26 Qs)" }, { id: "codes", label: "💻 Code Reference (6)" }]} active={tab} onSelect={setTab} />
      {tab === "summary" && <SummarySection />}
      {tab === "mcq" && <MCQSection />}
      {tab === "codes" && <CodesSection />}
    </div>
  );
}
