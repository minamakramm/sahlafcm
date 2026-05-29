export const LECTURE = {
  subjectId: 'ds-tools',
  number: 11,
  title: 'Lab 5 of 6: Machine Learning with SciKit-Learn',
  titleAr: 'المختبر 5 من 6: تعلم الآلة باستخدام SciKit-Learn',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg> 1. The SciKit-Learn Ecosystem</h2>
<p>Scikit-Learn (sklearn) is the standard library for machine learning in Python. It provides a consistent and efficient API for many algorithms, making it easy to experiment with different models.</p>

<h3>2. The ML Pipeline</h3>
<p>A standard machine learning workflow in sklearn typically follows these steps:</p>
<ol>
  <li><strong>Load & EDA:</strong> Use Pandas to load and explore data.</li>
  <li><strong>Preprocessing:</strong> Handle missing values, encode categories, and scale numeric features.</li>
  <li><strong>Splitting:</strong> Use <code>train_test_split</code> to separate data into training and testing sets.</li>
  <li><strong>Model Choice:</strong> Select an algorithm (e.g., KNN, Decision Tree, Logistic Regression).</li>
  <li><strong>Training:</strong> Use the <code>fit()</code> method to learn from training data.</li>
  <li><strong>Prediction:</strong> Use the <code>predict()</code> method to test on unseen data.</li>
  <li><strong>Evaluation:</strong> Calculate metrics like Accuracy, F1-Score, and Confusion Matrix.</li>
</ol>

<h3>3. Feature Scaling (Standardization)</h3>
<p>Many ML models (like KNN and SVM) are sensitive to the scale of features. <code>StandardScaler</code> removes the mean and scales features to unit variance, ensuring all features contribute equally.</p>

<h3>4. Train/Test Split</h3>
<p>To evaluate how well a model generalizes to new data, we hide a portion (usually 20-30%) during training. <code>random_state</code> is used to ensure the results are reproducible across different runs.</p>

<h3>5. Evaluation Metrics</h3>
<ul>
  <li><strong>Accuracy:</strong> Proportion of correct predictions.</li>
  <li><strong>Classification Report:</strong> Detailed view of Precision, Recall, and F1-Score for each class.</li>
  <li><strong>Confusion Matrix:</strong> A table showing the performance of the algorithm by comparing predicted vs. actual values.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> ML Implementation Reference</h2>

<h3>1. Preprocessing & Splitting</h3>
<p>Essential steps before feeding data into any model.</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd

# Load data
df = pd.read_csv('iris.csv')
X = df.drop('species', axis=1)
y = df['species']

# Split data (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Standardize features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
</code></pre>
</div>

<h3>2. Model Training & Evaluation</h3>
<p>Building a KNN classifier and evaluating its success.</p>
<div class="code-block">
<pre><code class="language-python">
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, accuracy_score

# Initialize and train
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)

# Predict
y_pred = knn.predict(X_test)

# Evaluate
print(f"Accuracy: {accuracy_score(y_test, y_pred)}")
print(classification_report(y_test, y_pred))
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg> 1. تعلم الآلة مع SciKit-Learn</h2>
<p>تعتبر Scikit-Learn المكتبة القياسية لتعلم الآلة في بايثون، وتتميز بواجهة موحدة لجميع الخوارزميات.</p>
<ul>
  <li><strong>Preprocessing:</strong> معالجة البيانات وتقييسها باستخدام StandardScaler.</li>
  <li><strong>Splitting:</strong> تقسيم البيانات إلى مجموعات تدريب واختبار.</li>
  <li><strong>Training:</strong> استخدام دالة fit() لتدريب النموذج.</li>
  <li><strong>Evaluation:</strong> تقييم الأداء باستخدام Accuracy و Confusion Matrix.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'SciKit-Learn provides a unified API for all machine learning models.',
      'Training always uses the .fit() method, and inference uses .predict().',
      'Scaling features (Standardization) is crucial for distance-based models like KNN.',
      'Data is split into training and testing sets to evaluate model generalization.',
      'random_state ensures reproducibility of results in splits and model shuffling.',
      'Evaluation metrics like Precision and Recall are more informative than Accuracy for imbalanced data.'
    ],
    pointsAr: [
      'توفر SciKit-Learn واجهة موحدة لجميع نماذج تعلم الآلة.',
      'يستخدم التدريب دائماً دالة .fit()، والتنبؤ يستخدم .predict().',
      'يعد تقييس الميزات أمراً بالغ الأهمية للنماذج التي تعتمد على المسافة مثل KNN.'
    ]
  },

  mcq: [
    {
      id: 'ds-s5-q1',
      question: 'Which sklearn method is used to train a model?',
      answers: [
        { id: 'a', text: 'model.train()', isCorrect: false },
        { id: 'b', text: 'model.fit()', isCorrect: true },
        { id: 'c', text: 'model.learn()', isCorrect: false },
        { id: 'd', text: 'model.execute()', isCorrect: false }
      ]
    },
    {
      id: 'ds-s5-q2',
      question: 'What is the purpose of train_test_split?',
      answers: [
        { id: 'a', text: 'To double the amount of data', isCorrect: false },
        { id: 'b', text: 'To evaluate how the model performs on unseen data', isCorrect: true },
        { id: 'c', text: 'To clean missing values', isCorrect: false },
        { id: 'd', text: 'To visualize features', isCorrect: false }
      ]
    },
    {
      id: 'ds-s5-q3',
      question: 'Which scaler removes the mean and scales features to unit variance?',
      answers: [
        { id: 'a', text: 'MinMaxScaler', isCorrect: false },
        { id: 'b', text: 'StandardScaler', isCorrect: true },
        { id: 'c', text: 'Normalizer', isCorrect: false },
        { id: 'd', text: 'RobustScaler', isCorrect: false }
      ]
    },
    {
      id: 'ds-s5-q4',
      question: 'In sklearn, predictions are made using which method?',
      answers: [
        { id: 'a', text: 'model.get_output()', isCorrect: false },
        { id: 'b', text: 'model.predict()', isCorrect: true },
        { id: 'c', text: 'model.transform()', isCorrect: false },
        { id: 'd', text: 'model.evaluate()', isCorrect: false }
      ]
    },
    { id: 'ds-s5-q5', question: 'What does random_state=42 ensure?', answers: [{ id: 'a', text: 'Better accuracy', isCorrect: false }, { id: 'b', text: 'Consistent/Reproducible results', isCorrect: true }, { id: 'c', text: 'Faster training speed', isCorrect: false }, { id: 'd', text: 'More features', isCorrect: false }] },
    { id: 'ds-s5-q6', question: 'Which library is needed for the train_test_split function?', answers: [{ id: 'a', text: 'sklearn.linear_model', isCorrect: false }, { id: 'b', text: 'sklearn.model_selection', isCorrect: true }, { id: 'c', text: 'sklearn.preprocessing', isCorrect: false }, { id: 'd', text: 'sklearn.metrics', isCorrect: false }] },
    { id: 'ds-s5-q7', question: 'A confusion matrix shows:', answers: [{ id: 'a', text: 'Only the final accuracy', isCorrect: false }, { id: 'b', text: 'A comparison of actual vs. predicted classes', isCorrect: true }, { id: 'c', text: 'The missing values in the data', isCorrect: false }, { id: 'd', text: 'The decision tree structure', isCorrect: false }] },
    { id: 'ds-s5-q8', question: 'In the scaler.fit_transform(data) command, what does "fit" do?', answers: [{ id: 'a', text: 'Applies the scaling', isCorrect: false }, { id: 'b', text: 'Calculates the mean and standard deviation', isCorrect: true }, { id: 'c', text: 'Deletes outliers', isCorrect: false }, { id: 'd', text: 'Reshapes the array', isCorrect: false }] },
    { id: 'ds-s5-q9', question: 'Which metric is most useful for highly imbalanced datasets?', answers: [{ id: 'a', text: 'Accuracy', isCorrect: false }, { id: 'b', text: 'F1-Score', isCorrect: true }, { id: 'c', text: 'Sum of Squared Errors', isCorrect: false }, { id: 'd', text: 'Standard Deviation', isCorrect: false }] },
    { id: 'ds-s5-q10', question: 'The KNN algorithm classifies based on:', answers: [{ id: 'a', text: 'A linear decision boundary', isCorrect: false }, { id: 'b', text: 'Majority vote of the closest data points', isCorrect: true }, { id: 'c', text: 'Probability distribution', isCorrect: false }, { id: 'd', text: 'Tree splits', isCorrect: false }] },
    { id: 'ds-s5-q11', question: 'After fitting a scaler on X_train, you should only _____ on X_test.', answers: [{ id: 'a', text: 'fit', isCorrect: false }, { id: 'b', text: 'transform', isCorrect: true }, { id: 'c', text: 'reshape', isCorrect: false }, { id: 'd', text: 'predict', isCorrect: false }] },
    { id: 'ds-s5-q12', question: 'ClassificationReport returns which three primary metrics?', answers: [{ id: 'a', text: 'Mean, Median, Mode', isCorrect: false }, { id: 'b', text: 'Precision, Recall, F1-Score', isCorrect: true }, { id: 'c', text: 'Accuracy, Error, Variance', isCorrect: false }, { id: 'd', text: 'Bias, Variance, Noise', isCorrect: false }] },
    { id: 'ds-s5-q13', question: 'Which parameter in train_test_split determines the percentage of data for testing?', answers: [{ id: 'a', text: 'size', isCorrect: false }, { id: 'b', text: 'test_size', isCorrect: true }, { id: 'c', text: 'split_ratio', isCorrect: false }, { id: 'd', text: 'data_pct', isCorrect: false }] },
    { id: 'ds-s5-q14', question: 'Sklearn "Estimators" always implement which method?', answers: [{ id: 'a', text: 'predict()', isCorrect: false }, { id: 'b', text: 'fit()', isCorrect: true }, { id: 'c', text: 'transform()', isCorrect: false }, { id: 'd', text: 'score()', isCorrect: false }] },
    { id: 'ds-s5-q15', question: 'Hyperparameters are set:', answers: [{ id: 'a', text: 'During training automatically', isCorrect: false }, { id: 'b', text: 'Before training starts', isCorrect: true }, { id: 'c', text: 'After the model is finished', isCorrect: false }, { id: 'd', text: 'By the dataset', isCorrect: false }] }
  ]
};
