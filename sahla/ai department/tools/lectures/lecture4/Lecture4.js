import { useState } from "react";

const COLOR = "#7B2FBE";
const LIGHT = "#F3E8FF";
const BORDER = "#C89DF0";

const summaryTopics = [
  {
    title: "1. CSV — Comma Separated Values",
    icon: "📄",
    summary: "CSV files are plain text files that use commas to separate values and arrange tabular data. They are the most universal data exchange format — every tool can read them.",
    points: [
      { label: "Loading CSV", text: "pd.read_csv('file.csv') reads the CSV into a pandas DataFrame. Automatically infers column names and data types from the file." },
      { label: "Saving CSV", text: "df.to_csv('output.csv', index=False) saves the DataFrame. index=False prevents writing the row numbers as an extra column." },
      { label: "When to use", text: "Best for simple tabular data. Human-readable, works with Excel, databases, and every data tool in existence." },
    ],
    note: "Always use index=False when saving to CSV — otherwise pandas writes a numbered 0,1,2... column you usually don't want.",
  },
  {
    title: "2. JSON — JavaScript Object Notation",
    icon: "📋",
    summary: "JSON is one of the standard formats for sending data via HTTP between web browsers and applications. It supports hierarchical/nested structures unlike CSV.",
    points: [
      { label: "Basic JSON types", text: "Objects (dicts), arrays (lists), strings, numbers, booleans, and nulls. All object keys must be strings." },
      { label: "Loading JSON", text: "pd.read_json('file.json') loads into a DataFrame. The structure must be consistent for pandas to interpret it correctly." },
      { label: "orient='records'", text: "Produces a list of dicts [{col: val}, ...]. Most common for REST APIs and JavaScript frontends." },
      { label: "orient='split'", text: "Produces {index: [...], columns: [...], data: [[...]]}. Useful when index matters." },
      { label: "orient='values'", text: "Just the raw data array — smallest file size, no column names." },
      { label: "json.loads() / json.dumps()", text: "Built-in Python library. loads() converts JSON string → Python dict. dumps() converts Python dict → JSON string." },
    ],
    note: "Use the built-in json library (no install needed) when dealing with nested JSON that doesn't map cleanly to a flat DataFrame.",
  },
  {
    title: "3. Excel (.xlsx)",
    icon: "📊",
    summary: "Excel files are widely used in corporate settings. Pandas can read and write them using the openpyxl library. Supports multiple named sheets.",
    points: [
      { label: "Loading Excel", text: "pd.read_excel('file.xlsx', sheet_name='Sheet1'). sheet_name accepts a string name OR an integer index (0 = first sheet)." },
      { label: "Saving Excel", text: "df.to_excel('output.xlsx', index=False, sheet_name='Sheet1') saves to a specific sheet." },
      { label: "Required library", text: "openpyxl must be installed: conda install openpyxl. Without it, pandas raises an error on read/write." },
    ],
    note: "For large datasets (>100k rows), prefer CSV or Parquet — Excel is slow, has a ~1 million row limit, and takes more memory.",
  },
  {
    title: "4. Parquet",
    icon: "⚡",
    summary: "Parquet is a columnar storage format optimized for big data frameworks (Apache Spark, Hive). Unlike row-based CSV, it stores data column-by-column — much faster for analytical queries.",
    points: [
      { label: "Why columnar?", text: "Analytical queries typically read a few columns from millions of rows. Columnar storage skips unneeded columns entirely — far faster than CSV." },
      { label: "Loading Parquet", text: "pd.read_parquet('file.parquet'). Requires pyarrow: conda install pyarrow." },
      { label: "Saving with compression", text: "df.to_parquet('output.parquet', compression='snappy'). Options: 'snappy' (fast, moderate size), 'gzip' (smaller but slower), 'uncompressed'." },
      { label: "vs CSV", text: "Parquet files are typically 5–10x smaller than equivalent CSV files and read 10–100x faster for analytical workloads." },
    ],
    note: "Parquet is the preferred format for production data pipelines. Use it whenever your data exceeds ~1 million rows.",
  },
  {
    title: "5. SQL (Structured Query Language)",
    icon: "🗄️",
    summary: "SQL databases store structured data in tables with defined schemas. Pandas connects to any SQL database via SQLAlchemy and loads query results directly into DataFrames.",
    points: [
      { label: "SQLAlchemy", text: "Unified interface to any SQL database. Install: conda install sqlalchemy." },
      { label: "Connection string", text: "'sqlite:///path.db' for SQLite (file-based, no server). 'postgresql://user:pass@host/db' for PostgreSQL." },
      { label: "create_engine()", text: "Creates the connection. Must be created before any read/write operations." },
      { label: "pd.read_sql()", text: "Executes a SQL SELECT query and returns results as a pandas DataFrame." },
      { label: "df.to_sql()", text: "Writes DataFrame to a SQL table. if_exists='replace' drops and recreates the table; 'append' adds rows." },
    ],
    note: "SQLite is perfect for development (no server needed). Use PostgreSQL or MySQL for multi-user production systems.",
  },
  {
    title: "6. Confusion Matrix",
    icon: "🔢",
    summary: "A confusion matrix is a 2×2 table that describes the full picture of a classification model's predictions — not just what it got right, but what type of errors it makes.",
    points: [
      { label: "True Positive (TP)", text: "Predicted Positive AND actually Positive. Correct hit." },
      { label: "True Negative (TN)", text: "Predicted Negative AND actually Negative. Correct rejection." },
      { label: "False Positive (FP)", text: "Predicted Positive BUT actually Negative. Type I Error — false alarm." },
      { label: "False Negative (FN)", text: "Predicted Negative BUT actually Positive. Type II Error — missed case." },
      { label: "Matrix layout", text: "Rows = Actual class. Columns = Predicted class. Diagonal = correct. Off-diagonal = errors." },
    ],
    note: "All four classification metrics (Accuracy, Precision, Recall, F1) are derived from these four cells — understand the confusion matrix first.",
  },
  {
    title: "7. Classification Metrics",
    icon: "🎯",
    summary: "Classification metrics quantify how well a model distinguishes between classes. Different metrics are appropriate for different problems — choosing the wrong one can be misleading.",
    points: [
      { label: "Accuracy", text: "(TP + TN) / Total. Overall correctness. Misleading when classes are imbalanced (e.g., 99% negative class)." },
      { label: "Precision", text: "TP / (TP + FP). Of all positive predictions, how many were correct? Minimize false alarms — use for spam detection." },
      { label: "Recall (Sensitivity)", text: "TP / (TP + FN). Of all actual positives, how many did we catch? Minimize missed cases — use for disease detection." },
      { label: "F1-Score", text: "2 × (Precision × Recall) / (Precision + Recall). Harmonic mean. Best single metric for imbalanced datasets." },
      { label: "ROC Curve", text: "Plots TPR (Recall) vs FPR at every threshold. Shows trade-offs. Closer to top-left corner = better classifier." },
      { label: "EUC", text: "EUC = √(FPrate² + (1−TPrate)²). Distance from the ideal point (FPR=0, TPR=1). Smaller EUC = better classifier." },
    ],
    note: "Rule: High-stakes missed cases (cancer, fraud) → optimize Recall. High-stakes false alarms (spam, security) → optimize Precision. Imbalanced data → use F1.",
  },
  {
    title: "8. Regression Metrics",
    icon: "📉",
    summary: "Regression metrics measure how close the model's predicted continuous values are to actual values. Lower error is better for MAE/MSE/RMSE. Higher is better for R².",
    points: [
      { label: "MAE (Mean Absolute Error)", text: "Average of |yᵢ − ŷᵢ|. In the same units as the target. Robust to outliers. Easy to explain to non-technical stakeholders." },
      { label: "MSE (Mean Squared Error)", text: "Average of (yᵢ − ŷᵢ)². Penalizes large errors more due to squaring. Sensitive to outliers." },
      { label: "RMSE (Root MSE)", text: "√MSE. Back in the same units as the target. Most widely reported regression metric." },
      { label: "R² (R-Squared)", text: "Proportion of variance in y explained by the model. R²=0 → model no better than predicting mean. R²=1 → perfect fit." },
      { label: "Negative R²", text: "Possible! Means the model performs worse than simply predicting the mean for every sample." },
    ],
    note: "RMSE penalizes large errors more than MAE — use RMSE when large errors are especially undesirable. Use MAE when outliers should not dominate.",
  },
];

const questions = [
  { q: "What does CSV stand for?", options: ["Comma Separated Variables", "Comma Separated Values", "Column Structured Values", "Computed Storage Values"], answer: 1 },
  { q: "Which pandas function loads a CSV file into a DataFrame?", options: ["pd.load_csv()", "pd.read_csv()", "pd.import_csv()", "pd.open_csv()"], answer: 1 },
  { q: "When saving a DataFrame to CSV, what does index=False do?", options: ["Prevents saving column headers", "Prevents writing the row index as a column", "Sorts the data before saving", "Compresses the file"], answer: 1 },
  { q: "JSON stands for:", options: ["Java Syntax Object Notation", "JavaScript Object Notation", "Java Standard Output Notation", "JavaScript Oriented Networking"], answer: 1 },
  { q: "Which json function converts a JSON string to a Python object?", options: ["json.parse()", "json.convert()", "json.loads()", "json.read()"], answer: 2 },
  { q: "Which json function converts a Python object to a JSON string?", options: ["json.stringify()", "json.dumps()", "json.encode()", "json.write()"], answer: 1 },
  { q: "What does orient='records' produce when saving JSON?", options: ["A dict with index as keys", "A list of dicts (one dict per row)", "Just the values array", "A dict with column names as keys"], answer: 1 },
  { q: "Which library is required by pandas to handle Excel files?", options: ["xlrd", "openpyxl", "xlwt", "xlsxwriter"], answer: 1 },
  { q: "In pd.read_excel(), what does sheet_name=0 mean?", options: ["Load all sheets", "Load the sheet named '0'", "Load the first sheet (0-indexed)", "Load the last sheet"], answer: 2 },
  { q: "Parquet is optimized for use with:", options: ["Web browsers", "Big data frameworks like Apache Spark", "Relational databases only", "NoSQL systems"], answer: 1 },
  { q: "What type of storage format is Parquet?", options: ["Row-based", "Columnar", "Key-value", "Document-based"], answer: 1 },
  { q: "Which library does pandas require for reading Parquet files?", options: ["openpyxl", "sqlalchemy", "pyarrow or fastparquet", "json"], answer: 2 },
  { q: "In df.to_parquet(), what does compression='snappy' specify?", options: ["File encryption type", "The type of compression applied to the file", "The Parquet format version", "The encoding of string columns"], answer: 1 },
  { q: "Which Python library is used to connect pandas to SQL databases?", options: ["sqlite3", "SQLAlchemy", "psycopg2", "pyodbc"], answer: 1 },
  { q: "What does pd.read_sql() return?", options: ["A SQL query string", "A list of tuples", "A pandas DataFrame", "A database cursor object"], answer: 2 },
  { q: "A False Positive (FP) is:", options: ["Correctly predicted positive", "Incorrectly predicted positive (actual is negative)", "Correctly predicted negative", "Incorrectly predicted negative (actual is positive)"], answer: 1 },
  { q: "A False Negative (FN) is:", options: ["Correctly predicted negative", "Incorrectly predicted positive", "Incorrectly predicted negative (actual is positive)", "Correctly predicted positive"], answer: 2 },
  { q: "Accuracy is calculated as:", options: ["TP / (TP + FP)", "(TP + TN) / (TP + TN + FP + FN)", "TP / (TP + FN)", "2 × (P × R) / (P + R)"], answer: 1 },
  { q: "Precision is defined as:", options: ["TP / (TP + FN)", "TP / (TP + FP)", "(TP + TN) / Total", "2 × (P × R) / (P + R)"], answer: 1 },
  { q: "Recall (Sensitivity) is defined as:", options: ["TP / (TP + FP)", "TN / (TN + FP)", "TP / (TP + FN)", "(TP + TN) / Total"], answer: 2 },
  { q: "The F1-Score is:", options: ["The arithmetic mean of precision and recall", "The harmonic mean of precision and recall", "Precision divided by recall", "Recall minus precision"], answer: 1 },
  { q: "The ROC curve plots:", options: ["Precision vs Recall", "Accuracy vs Loss", "True Positive Rate vs False Positive Rate", "F1-Score vs Threshold"], answer: 2 },
  { q: "EUC = √(FPrate² + (1−TPrate)²). A smaller EUC value means:", options: ["Worse classifier", "Better classifier (closer to ideal point)", "More false positives", "Higher recall only"], answer: 1 },
  { q: "An R² value of 1 indicates:", options: ["The model explains none of the variance", "The model explains all the variance in y", "The model has 100% accuracy", "MSE equals zero"], answer: 1 },
  { q: "Which regression metric penalizes large errors the most?", options: ["MAE", "R²", "MSE / RMSE (due to squaring)", "Accuracy"], answer: 2 },
];

const codeSnippets = [
  {
    title: "Load & Save CSV",
    explanation: "The most universal data format. pd.read_csv() automatically infers column names and types. index=False in to_csv() prevents pandas from writing a numbered row index column — almost always what you want when sharing data.",
    code: `import pandas as pd

df = pd.read_csv('path_to_your_file.csv')
print(df)

df.to_csv('output.csv', index=False)`,
  },
  {
    title: "Load & Save JSON",
    explanation: "JSON supports nested/hierarchical data. When saving, orient controls the output structure. orient='records' (list of row dicts) is most common for APIs. orient='split' preserves the index.",
    code: `import pandas as pd

df = pd.read_json('path_to_your_file.json')
print(df)

df.to_json('output.json', orient='records')`,
  },
  {
    title: "JSON — Nested Data with json Library",
    explanation: "The built-in json library handles complex nested JSON. json.loads() parses a JSON string into a Python dict/list. json.dumps() does the reverse. pd.DataFrame() can then extract specific nested arrays into flat DataFrames.",
    code: `import json
import pandas as pd

obj = """
{"name": "Wes",
 "places_lived": ["United States", "Spain", "Germany"],
 "pet": null,
 "siblings": [{"name": "Scott", "age": 25, "pet": "Zuko"},
              {"name": "Katie", "age": 33, "pet": "Cisco"}]
}
"""

result = json.loads(obj)
print(result)

df_siblings = pd.DataFrame(result['siblings'], columns=['name', 'age'])
print(df_siblings)

as_json = json.dumps(result)
print(as_json)`,
  },
  {
    title: "Load & Save Excel",
    explanation: "Requires openpyxl (conda install openpyxl). sheet_name accepts a sheet name string or a 0-based integer index. Multiple sheets can be read at once with sheet_name=None (returns a dict of DataFrames).",
    code: `import pandas as pd

df = pd.read_excel('path_to_your_file.xlsx', sheet_name='Sheet1')
df = pd.read_excel('path_to_your_file.xlsx', sheet_name=0)

print(df)

df.to_excel('output.xlsx', index=False, sheet_name='Sheet1')`,
  },
  {
    title: "Load & Save Parquet",
    explanation: "Parquet is columnar — much faster and smaller than CSV for large analytical datasets. Requires pyarrow (conda install pyarrow). Compression 'snappy' is fast with moderate size; 'gzip' compresses more but is slower to read/write.",
    code: `import pandas as pd

df = pd.read_parquet('path_to_your_file.parquet')
print(df)

df.to_parquet('output.parquet', compression='snappy')`,
  },
  {
    title: "Connect to SQL & Read Data",
    explanation: "SQLAlchemy provides a unified interface to any SQL database. The connection string format is 'dialect://user:pass@host/database'. SQLite is file-based (no server needed). pd.read_sql() executes any SELECT query and returns a DataFrame. df.to_sql() writes a DataFrame to a table.",
    code: `import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('sqlite:///path_to_your_database.db')

df = pd.read_sql('SELECT * FROM your_table', engine)
print(df)

df.to_sql('table_name', engine, if_exists='replace', index=False)`,
  },
  {
    title: "Confusion Matrix — sklearn",
    explanation: "The confusion matrix shows TP, FP, FN, TN in a 2×2 grid. sklearn's confusion_matrix() takes actual and predicted labels. ConfusionMatrixDisplay renders a labeled heatmap. Diagonal = correct predictions; off-diagonal = errors.",
    code: `import numpy as np
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]

cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:")
print(cm)

disp = ConfusionMatrixDisplay(confusion_matrix=cm,
                              display_labels=['Negative', 'Positive'])
disp.plot(cmap='Blues')
plt.title('Confusion Matrix')
plt.show()`,
  },
  {
    title: "Classification Metrics — Accuracy, Precision, Recall, F1",
    explanation: "sklearn.metrics has all standard classification metrics. classification_report() prints precision, recall, F1, and support for every class in a single call — use it as your first step after training any classifier.",
    code: `from sklearn.metrics import (accuracy_score, precision_score,
                              recall_score, f1_score,
                              classification_report)

y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]

accuracy  = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall    = recall_score(y_true, y_pred)
f1        = f1_score(y_true, y_pred)

print(f"Accuracy:  {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall:    {recall:.4f}")
print(f"F1-Score:  {f1:.4f}")

print(classification_report(y_true, y_pred,
                             target_names=['Negative', 'Positive']))`,
  },
  {
    title: "ROC Curve & EUC",
    explanation: "The ROC curve plots TPR vs FPR at every classification threshold. A perfect classifier hugs the top-left corner. AUC (Area Under Curve) summarises performance — AUC=1.0 is perfect, 0.5 is random. EUC = √(FPrate² + (1−TPrate)²) measures distance to the ideal point (0,1) — smaller is better.",
    code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import roc_curve, auc

y_true   = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_scores = [0.9, 0.1, 0.8, 0.4, 0.3, 0.7, 0.6, 0.2, 0.85, 0.15]

fpr, tpr, thresholds = roc_curve(y_true, y_scores)
roc_auc = auc(fpr, tpr)
euc = np.sqrt(fpr**2 + (1 - tpr)**2)
best_idx = np.argmin(euc)

plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, 'b-o', lw=2, label=f'ROC (AUC = {roc_auc:.2f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier (AUC=0.5)')
plt.scatter(fpr[best_idx], tpr[best_idx], color='red', zorder=5,
            label=f'Best threshold (EUC={euc[best_idx]:.3f})')
plt.xlabel('False Positive Rate (FPR)')
plt.ylabel('True Positive Rate (TPR = Recall)')
plt.title('ROC Curve')
plt.legend()
plt.grid(True)
plt.show()

print(f"AUC:         {roc_auc:.4f}")
print(f"Minimum EUC: {euc[best_idx]:.4f}")`,
  },
  {
    title: "Regression Metrics — MAE, MSE, RMSE, R²",
    explanation: "All four standard regression metrics. MAE is robust to outliers and easy to interpret. MSE/RMSE penalize large errors more (due to squaring). R² is the proportion of target variance explained by the model — 1.0 is perfect, 0.0 means the model is no better than predicting the mean, negative means worse than the mean.",
    code: `import numpy as np
from sklearn.metrics import (mean_absolute_error,
                              mean_squared_error,
                              r2_score)

y_true = np.array([3.0, -0.5, 2.0, 7.0, 4.5])
y_pred = np.array([2.5,  0.0, 2.0, 8.0, 5.0])

mae  = mean_absolute_error(y_true, y_pred)
mse  = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
r2   = r2_score(y_true, y_pred)

print(f"MAE:  {mae:.4f}")
print(f"MSE:  {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"R²:   {r2:.4f}")`,
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
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: open ? COLOR : LIGHT, color: open ? "#fff" : COLOR, fontWeight: 600 }}>Lec 4</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{s.title}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{open ? "▲" : "▼"}</span>
            </div>
            {open && (
              <div style={{ borderTop: `0.5px solid ${BORDER}` }}>
                <div style={{ padding: "10px 16px", background: "#FAF3FF", borderBottom: `0.5px solid ${BORDER}` }}>
                  <p style={{ margin: 0, fontSize: 12, color: "#3d1a6e", lineHeight: 1.75 }}>📝 {s.explanation}</p>
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

export default function Lecture4() {
  const [tab, setTab] = useState("summary");
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ borderLeft: `4px solid ${COLOR}`, paddingLeft: 14, marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px", color: "var(--color-text-primary)" }}>Lecture 4 — Reading/Writing Data &amp; Evaluation Metrics</h2>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>Data Science Tools and Software · Alexandria University</p>
      </div>
      <TabBar tabs={[{ id: "summary", label: "📚 Summary & Explanations" }, { id: "mcq", label: "✏️ MCQ Quiz (25 Qs)" }, { id: "codes", label: "💻 Code Reference (10)" }]} active={tab} onSelect={setTab} />
      {tab === "summary" && <SummarySection />}
      {tab === "mcq" && <MCQSection />}
      {tab === "codes" && <CodesSection />}
    </div>
  );
}
