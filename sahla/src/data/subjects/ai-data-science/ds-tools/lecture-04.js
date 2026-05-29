export const LECTURE = {
  subjectId: 'ds-tools',
  number: 4,
  title: 'Lecture 4: Data formats & Evaluation Metrics',
  titleAr: 'المحاضرة 4: تنسيقات البيانات ومقاييس التقييم',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> 1. CSV — Comma Separated Values</h2>
<p>CSV files are plain text files that use commas to separate values and arrange tabular data. They are the most universal data exchange format — every tool can read them.</p>
<ul>
  <li><strong>Loading CSV:</strong> <code>pd.read_csv('file.csv')</code> reads the CSV into a pandas DataFrame. Automatically infers column names and data types from the file.</li>
  <li><strong>Saving CSV:</strong> <code>df.to_csv('output.csv', index=False)</code> saves the DataFrame. <code>index=False</code> prevents writing the row numbers as an extra column.</li>
  <li><strong>When to use:</strong> Best for simple tabular data. Human-readable, works with Excel, databases, and every data tool in existence.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Always use index=False when saving to CSV — otherwise pandas writes a numbered 0,1,2... column you usually don't want.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg> 2. JSON — JavaScript Object Notation</h2>
<p>JSON is one of the standard formats for sending data via HTTP between web browsers and applications. It supports hierarchical/nested structures unlike CSV.</p>
<ul>
  <li><strong>Basic JSON types:</strong> Objects (dicts), arrays (lists), strings, numbers, booleans, and nulls. All object keys must be strings.</li>
  <li><strong>Loading JSON:</strong> <code>pd.read_json('file.json')</code> loads into a DataFrame. The structure must be consistent for pandas to interpret it correctly.</li>
  <li><strong>orient='records':</strong> Produces a list of dicts <code>[{col: val}, ...]</code>. Most common for REST APIs and JavaScript frontends.</li>
  <li><strong>json.loads() / json.dumps():</strong> Built-in Python library. <code>loads()</code> converts JSON string → Python dict. <code>dumps()</code> converts Python dict → JSON string.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Use the built-in json library (no install needed) when dealing with nested JSON that doesn't map cleanly to a flat DataFrame.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 3. Excel (.xlsx)</h2>
<p>Excel files are widely used in corporate settings. Pandas can read and write them using the openpyxl library. Supports multiple named sheets.</p>
<ul>
  <li><strong>Loading Excel:</strong> <code>pd.read_excel('file.xlsx', sheet_name='Sheet1')</code>. <code>sheet_name</code> accepts a string name OR an integer index (0 = first sheet).</li>
  <li><strong>Saving Excel:</strong> <code>df.to_excel('output.xlsx', index=False, sheet_name='Sheet1')</code> saves to a specific sheet.</li>
  <li><strong>Required library:</strong> <code>openpyxl</code> must be installed. Without it, pandas raises an error on read/write.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> For large datasets (>100k rows), prefer CSV or Parquet — Excel is slow, has a ~1 million row limit, and takes more memory.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> 4. Parquet</h2>
<p>Parquet is a columnar storage format optimized for big data frameworks (Apache Spark, Hive). Unlike row-based CSV, it stores data column-by-column — much faster for analytical queries.</p>
<ul>
  <li><strong>Why columnar?</strong> Analytical queries typically read a few columns from millions of rows. Columnar storage skips unneeded columns entirely — far faster than CSV.</li>
  <li><strong>Loading Parquet:</strong> <code>pd.read_parquet('file.parquet')</code>. Requires <code>pyarrow</code>.</li>
  <li><strong>Saving with compression:</strong> <code>df.to_parquet('output.parquet', compression='snappy')</code>.</li>
  <li><strong>vs CSV:</strong> Parquet files are typically 5–10x smaller than equivalent CSV files and read 10–100x faster for analytical workloads.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Parquet is the preferred format for production data pipelines. Use it whenever your data exceeds ~1 million rows.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg> 5. SQL (Structured Query Language)</h2>
<p>SQL databases store structured data in tables with defined schemas. Pandas connects to any SQL database via SQLAlchemy and loads query results directly into DataFrames.</p>
<ul>
  <li><strong>SQLAlchemy:</strong> Unified interface to any SQL database. Install: <code>conda install sqlalchemy</code>.</li>
  <li><strong>Connection string:</strong> <code>'sqlite:///path.db'</code> for SQLite (file-based).</li>
  <li><strong>pd.read_sql():</strong> Executes a SQL SELECT query and returns results as a pandas DataFrame.</li>
  <li><strong>df.to_sql():</strong> Writes DataFrame to a SQL table. <code>if_exists='replace'</code> drops and recreates the table.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> SQLite is perfect for development (no server needed). Use PostgreSQL or MySQL for multi-user production systems.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10"/><path d="M12 10l3-3v10"/></svg> 6. Confusion Matrix</h2>
<p>A confusion matrix is a 2×2 table that describes the full picture of a classification model's predictions — not just what it got right, but what type of errors it makes.</p>
<ul>
  <li><strong>True Positive (TP):</strong> Predicted Positive AND actually Positive. Correct hit.</li>
  <li><strong>True Negative (TN):</strong> Predicted Negative AND actually Negative. Correct rejection.</li>
  <li><strong>False Positive (FP):</strong> Predicted Positive BUT actually Negative. Type I Error — false alarm.</li>
  <li><strong>False Negative (FN):</strong> Predicted Negative BUT actually Positive. Type II Error — missed case.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> All four classification metrics (Accuracy, Precision, Recall, F1) are derived from these four cells — understand the confusion matrix first.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> 7. Classification Metrics</h2>
<p>Classification metrics quantify how well a model distinguishes between classes. Different metrics are appropriate for different problems — choosing the wrong one can be misleading.</p>
<ul>
  <li><strong>Accuracy:</strong> (TP + TN) / Total. Overall correctness. Misleading when classes are imbalanced.</li>
  <li><strong>Precision:</strong> TP / (TP + FP). Of all positive predictions, how many were correct? Minimize false alarms.</li>
  <li><strong>Recall (Sensitivity):</strong> TP / (TP + FN). Of all actual positives, how many did we catch? Minimize missed cases.</li>
  <li><strong>F1-Score:</strong> 2 × (Precision × Recall) / (Precision + Recall). Harmonic mean. Best single metric for imbalanced datasets.</li>
  <li><strong>ROC Curve:</strong> Plots TPR (Recall) vs FPR at every threshold. Closer to top-left corner = better classifier.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> Rule: High-stakes missed cases (cancer) → optimize Recall. High-stakes false alarms (spam) → optimize Precision.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m19 15-5-5-4 4-3-3"/><path d="M3 3v18h18"/></svg> 8. Regression Metrics</h2>
<p>Regression metrics measure how close the model's predicted continuous values are to actual values. Lower error is better for MAE/MSE/RMSE. Higher is better for R².</p>
<ul>
  <li><strong>MAE (Mean Absolute Error):</strong> Average of |yᵢ − ŷᵢ|. Robust to outliers.</li>
  <li><strong>MSE (Mean Squared Error):</strong> Average of (yᵢ − ŷᵢ)². Penalizes large errors more.</li>
  <li><strong>RMSE (Root MSE):</strong> √MSE. Most widely reported regression metric.</li>
  <li><strong>R² (R-Squared):</strong> Proportion of variance in y explained by the model. 1.0 = perfect fit.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> <strong>Key Takeaway:</strong> RMSE penalizes large errors more than MAE — use RMSE when large errors are especially undesirable. Use MAE when outliers should not dominate.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Python Code Implementation</h2>

<h3>1. Load & Save CSV</h3>
<p>The most universal data format. pd.read_csv() automatically infers column names and types. index=False in to_csv() prevents pandas from writing a numbered row index column — almost always what you want when sharing data.</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd

df = pd.read_csv('path_to_your_file.csv')
print(df)

df.to_csv('output.csv', index=False)
</code></pre>
</div>

<h3>2. Load & Save JSON</h3>
<p>JSON supports nested/hierarchical data. When saving, orient controls the output structure. orient='records' (list of row dicts) is most common for APIs. orient='split' preserves the index.</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd

df = pd.read_json('path_to_your_file.json')
print(df)

df.to_json('output.json', orient='records')
</code></pre>
</div>

<h3>3. JSON — Nested Data with json Library</h3>
<p>The built-in json library handles complex nested JSON. json.loads() parses a JSON string into a Python dict/list. json.dumps() does the reverse. pd.DataFrame() can then extract specific nested arrays into flat DataFrames.</p>
<div class="code-block">
<pre><code class="language-python">
import json
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
print(as_json)
</code></pre>
</div>

<h3>4. Load & Save Excel</h3>
<p>Requires openpyxl (conda install openpyxl). sheet_name accepts a sheet name string or a 0-based integer index. Multiple sheets can be read at once with sheet_name=None (returns a dict of DataFrames).</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd

df = pd.read_excel('path_to_your_file.xlsx', sheet_name='Sheet1')
df = pd.read_excel('path_to_your_file.xlsx', sheet_name=0)

print(df)

df.to_excel('output.xlsx', index=False, sheet_name='Sheet1')
</code></pre>
</div>

<h3>5. Load & Save Parquet</h3>
<p>Parquet is columnar — much faster and smaller than CSV for large analytical datasets. Requires pyarrow (conda install pyarrow). Compression 'snappy' is fast with moderate size; 'gzip' compresses more but is slower to read/write.</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd

df = pd.read_parquet('path_to_your_file.parquet')
print(df)

df.to_parquet('output.parquet', compression='snappy')
</code></pre>
</div>

<h3>6. Connect to SQL & Read Data</h3>
<p>SQLAlchemy provides a unified interface to any SQL database. The connection string format is 'dialect://user:pass@host/database'. SQLite is file-based (no server needed). pd.read_sql() executes any SELECT query and returns a DataFrame. df.to_sql() writes a DataFrame to a table.</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('sqlite:///path_to_your_database.db')

df = pd.read_sql('SELECT * FROM your_table', engine)
print(df)

df.to_sql('table_name', engine, if_exists='replace', index=False)
</code></pre>
</div>

<h3>7. Confusion Matrix — sklearn</h3>
<p>The confusion matrix shows TP, FP, FN, TN in a 2×2 grid. sklearn's confusion_matrix() takes actual and predicted labels. ConfusionMatrixDisplay renders a labeled heatmap. Diagonal = correct predictions; off-diagonal = errors.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
plt.show()
</code></pre>
</div>

<h3>8. Classification Metrics — Accuracy, Precision, Recall, F1</h3>
<p>sklearn.metrics has all standard classification metrics. classification_report() prints precision, recall, F1, and support for every class in a single call — use it as your first step after training any classifier.</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.metrics import (accuracy_score, precision_score,
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
                             target_names=['Negative', 'Positive']))
</code></pre>
</div>

<h3>9. ROC Curve & EUC</h3>
<p>The ROC curve plots TPR vs FPR at every classification threshold. A perfect classifier hugs the top-left corner. AUC (Area Under Curve) summarises performance — AUC=1.0 is perfect, 0.5 is random. EUC = √(FPrate² + (1−TPrate)²) measures distance to the ideal point (0,1) — smaller is better.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
print(f"Minimum EUC: {euc[best_idx]:.4f}")
</code></pre>
</div>

<h3>10. Regression Metrics — MAE, MSE, RMSE, R²</h3>
<p>All four standard regression metrics. MAE is robust to outliers and easy to interpret. MSE/RMSE penalize large errors more (due to squaring). R² is the proportion of target variance explained by the model — 1.0 is perfect, 0.0 means the model is no better than predicting the mean, negative means worse than the mean.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
print(f"R²:   {r2:.4f}")
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> 1. ملفات CSV</h2>
<p>ملفات نصية بسيطة تستخدم الفواصل للفصل بين القيم.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v10"/><path d="M12 10l3-3v10"/></svg> 2. مصفوفة الارتباك</h2>
<p>تصف أداء نموذج التصنيف من خلال مقارنة القيم الفعلية والمتوقعة.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> 3. مقاييس التقييم</h2>
<ul>
  <li><strong>Accuracy:</strong> الدقة الإجمالية.</li>
  <li><strong>Precision:</strong> دقة التوقعات الإيجابية.</li>
  <li><strong>Recall:</strong> القدرة على اكتشاف الحالات الإيجابية.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'CSV is universal; JSON is hierarchical; Parquet is optimized for speed/size.',
      'SQLAlchemy connects pandas to relational databases (SQLite, Postgres, etc.).',
      'The Confusion Matrix is the foundation for all classification metrics.',
      'Accuracy can be misleading on imbalanced datasets.',
      'Precision minimizes false positives; Recall minimizes false negatives.',
      'F1-Score provides a balanced view for imbalanced data.',
      'MAE, MSE, and RMSE quantify error in continuous predictions (regression).',
      'R-Squared (R²) measures the proportion of variance explained by a regression model.'
    ],
    pointsAr: [
      'CSV تنسيق عالمي؛ JSON هرمي؛ Parquet محسن للسرعة والحجم.',
      'يربط SQLAlchemy مكتبة pandas بقواعد البيانات العلائقية.',
      'مصفوفة الارتباك هي الأساس لجميع مقاييس التصنيف.',
      'الدقة قد تكون مضللة في مجموعات البيانات غير المتوازنة.',
      'Precision يقلل الإنذارات الكاذبة؛ Recall يقلل الحالات المفقودة.',
      'يوفر F1-Score رؤية متوازنة للبيانات غير المتوازنة.',
      'MAE و MSE و RMSE تقيس الخطأ في التنبؤات المستمرة (الانحدار).'
    ]
  },

  mcq: [
    {
      id: 'ds-l4-q1',
      question: 'What does CSV stand for?',
      answers: [
        { id: 'a', text: 'Comma Separated Variables', isCorrect: false },
        { id: 'b', text: 'Comma Separated Values', isCorrect: true },
        { id: 'c', text: 'Column Structured Values', isCorrect: false },
        { id: 'd', text: 'Computed Storage Values', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q2',
      question: 'Which pandas function loads a CSV file into a DataFrame?',
      answers: [
        { id: 'a', text: 'pd.load_csv()', isCorrect: false },
        { id: 'b', text: 'pd.read_csv()', isCorrect: true },
        { id: 'c', text: 'pd.import_csv()', isCorrect: false },
        { id: 'd', text: 'pd.open_csv()', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q3',
      question: 'When saving a DataFrame to CSV, what does index=False do?',
      answers: [
        { id: 'a', text: 'Prevents saving column headers', isCorrect: false },
        { id: 'b', text: 'Prevents writing the row index as a column', isCorrect: true },
        { id: 'c', text: 'Sorts the data before saving', isCorrect: false },
        { id: 'd', text: 'Compresses the file', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q4',
      question: 'JSON stands for:',
      answers: [
        { id: 'a', text: 'Java Syntax Object Notation', isCorrect: false },
        { id: 'b', text: 'JavaScript Object Notation', isCorrect: true },
        { id: 'c', text: 'Java Standard Output Notation', isCorrect: false },
        { id: 'd', text: 'JavaScript Oriented Networking', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q5',
      question: 'Which json function converts a JSON string to a Python object?',
      answers: [
        { id: 'a', text: 'json.parse()', isCorrect: false },
        { id: 'b', text: 'json.convert()', isCorrect: false },
        { id: 'c', text: 'json.loads()', isCorrect: true },
        { id: 'd', text: 'json.read()', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q6',
      question: 'Which json function converts a Python object to a JSON string?',
      answers: [
        { id: 'a', text: 'json.stringify()', isCorrect: false },
        { id: 'b', text: 'json.dumps()', isCorrect: true },
        { id: 'c', text: 'json.encode()', isCorrect: false },
        { id: 'd', text: 'json.write()', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q7',
      question: "What does orient='records' produce when saving JSON?",
      answers: [
        { id: 'a', text: 'A dict with index as keys', isCorrect: false },
        { id: 'b', text: 'A list of dicts (one dict per row)', isCorrect: true },
        { id: 'c', text: 'Just the values array', isCorrect: false },
        { id: 'd', text: 'A dict with column names as keys', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q8',
      question: 'Which library is required by pandas to handle Excel files?',
      answers: [
        { id: 'a', text: 'xlrd', isCorrect: false },
        { id: 'b', text: 'openpyxl', isCorrect: true },
        { id: 'c', text: 'xlwt', isCorrect: false },
        { id: 'd', text: 'xlsxwriter', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q9',
      question: 'In pd.read_excel(), what does sheet_name=0 mean?',
      answers: [
        { id: 'a', text: 'Load all sheets', isCorrect: false },
        { id: 'b', text: "Load the sheet named '0'", isCorrect: false },
        { id: 'c', text: 'Load the first sheet (0-indexed)', isCorrect: true },
        { id: 'd', text: 'Load the last sheet', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q10',
      question: 'Parquet is optimized for use with:',
      answers: [
        { id: 'a', text: 'Web browsers', isCorrect: false },
        { id: 'b', text: 'Big data frameworks like Apache Spark', isCorrect: true },
        { id: 'c', text: 'Relational databases only', isCorrect: false },
        { id: 'd', text: 'NoSQL systems', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q11',
      question: 'What type of storage format is Parquet?',
      answers: [
        { id: 'a', text: 'Row-based', isCorrect: false },
        { id: 'b', text: 'Columnar', isCorrect: true },
        { id: 'c', text: 'Key-value', isCorrect: false },
        { id: 'd', text: 'Document-based', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q12',
      question: 'Which library does pandas require for reading Parquet files?',
      answers: [
        { id: 'a', text: 'openpyxl', isCorrect: false },
        { id: 'b', text: 'sqlalchemy', isCorrect: false },
        { id: 'c', text: 'pyarrow or fastparquet', isCorrect: true },
        { id: 'd', text: 'json', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q13',
      question: "In df.to_parquet(), what does compression='snappy' specify?",
      answers: [
        { id: 'a', text: 'File encryption type', isCorrect: false },
        { id: 'b', text: 'The type of compression applied to the file', isCorrect: true },
        { id: 'c', text: 'The Parquet format version', isCorrect: false },
        { id: 'd', text: 'The encoding of string columns', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q14',
      question: 'Which Python library is used to connect pandas to SQL databases?',
      answers: [
        { id: 'a', text: 'sqlite3', isCorrect: false },
        { id: 'b', text: 'SQLAlchemy', isCorrect: true },
        { id: 'c', text: 'psycopg2', isCorrect: false },
        { id: 'd', text: 'pyodbc', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q15',
      question: 'What does pd.read_sql() return?',
      answers: [
        { id: 'a', text: 'A SQL query string', isCorrect: false },
        { id: 'b', text: 'A list of tuples', isCorrect: false },
        { id: 'c', text: 'A pandas DataFrame', isCorrect: true },
        { id: 'd', text: 'A database cursor object', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q16',
      question: 'A False Positive (FP) is:',
      answers: [
        { id: 'a', text: 'Correctly predicted positive', isCorrect: false },
        { id: 'b', text: 'Incorrectly predicted positive (actual is negative)', isCorrect: true },
        { id: 'c', text: 'Correctly predicted negative', isCorrect: false },
        { id: 'd', text: 'Incorrectly predicted negative (actual is positive)', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q17',
      question: 'A False Negative (FN) is:',
      answers: [
        { id: 'a', text: 'Correctly predicted negative', isCorrect: false },
        { id: 'b', text: 'Incorrectly predicted positive', isCorrect: false },
        { id: 'c', text: 'Incorrectly predicted negative (actual is positive)', isCorrect: true },
        { id: 'd', text: 'Correctly predicted positive', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q18',
      question: 'Accuracy is calculated as:',
      answers: [
        { id: 'a', text: 'TP / (TP + FP)', isCorrect: false },
        { id: 'b', text: '(TP + TN) / (TP + TN + FP + FN)', isCorrect: true },
        { id: 'c', text: 'TP / (TP + FN)', isCorrect: false },
        { id: 'd', text: '2 × (P × R) / (P + R)', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q19',
      question: 'Precision is defined as:',
      answers: [
        { id: 'a', text: 'TP / (TP + FN)', isCorrect: false },
        { id: 'b', text: 'TP / (TP + FP)', isCorrect: true },
        { id: 'c', text: '(TP + TN) / Total', isCorrect: false },
        { id: 'd', text: '2 × (P × R) / (P + R)', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q20',
      question: 'Recall (Sensitivity) is defined as:',
      answers: [
        { id: 'a', text: 'TP / (TP + FP)', isCorrect: false },
        { id: 'b', text: 'TN / (TN + FP)', isCorrect: false },
        { id: 'c', text: 'TP / (TP + FN)', isCorrect: true },
        { id: 'd', text: '(TP + TN) / Total', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q21',
      question: 'The F1-Score is:',
      answers: [
        { id: 'a', text: 'The arithmetic mean of precision and recall', isCorrect: false },
        { id: 'b', text: 'The harmonic mean of precision and recall', isCorrect: true },
        { id: 'c', text: 'Precision divided by recall', isCorrect: false },
        { id: 'd', text: 'Recall minus precision', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q22',
      question: 'The ROC curve plots:',
      answers: [
        { id: 'a', text: 'Precision vs Recall', isCorrect: false },
        { id: 'b', text: 'Accuracy vs Loss', isCorrect: false },
        { id: 'c', text: 'True Positive Rate vs False Positive Rate', isCorrect: true },
        { id: 'd', text: 'F1-Score vs Threshold', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q23',
      question: 'EUC = √(FPrate² + (1−TPrate)²). A smaller EUC value means:',
      answers: [
        { id: 'a', text: 'Worse classifier', isCorrect: false },
        { id: 'b', text: 'Better classifier (closer to ideal point)', isCorrect: true },
        { id: 'c', text: 'More false positives', isCorrect: false },
        { id: 'd', text: 'Higher recall only', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q24',
      question: 'An R² value of 1 indicates:',
      answers: [
        { id: 'a', text: 'The model explains none of the variance', isCorrect: false },
        { id: 'b', text: 'The model explains all the variance in y', isCorrect: true },
        { id: 'c', text: 'The model has 100% accuracy', isCorrect: false },
        { id: 'd', text: 'MSE equals zero', isCorrect: false }
      ]
    },
    {
      id: 'ds-l4-q25',
      question: 'Which regression metric penalizes large errors the most?',
      answers: [
        { id: 'a', text: 'MAE', isCorrect: false },
        { id: 'b', text: 'R²', isCorrect: false },
        { id: 'c', text: 'MSE / RMSE (due to squaring)', isCorrect: true },
        { id: 'd', text: 'Accuracy', isCorrect: false }
      ]
    }
  ]
};
