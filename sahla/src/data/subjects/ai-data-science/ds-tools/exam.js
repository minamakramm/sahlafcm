export const EXAM = {
  subjectId: 'ds-tools',
  title: 'Midterm Exam — Data Science Tools',
  titleAr: 'اختبار منتصف الفصل — أدوات علوم البيانات',
  timeLimitMinutes: 60,
  duration: 3600,
  mcqMarks: 100,
  writtenMarks: 0,
  passPercentage: 50,
  
  mcq: [
    // --- LECTURE 2: STATISTICS & PROBABILITY ---
    {
      id: 'ds-l2-q1',
      question: 'What are the two main types of statistics?',
      answers: [
        { id: 'a', text: 'Descriptive and Inferential', isCorrect: true },
        { id: 'b', text: 'Quantitative and Qualitative', isCorrect: false },
        { id: 'c', text: 'Population and Sample', isCorrect: false },
        { id: 'd', text: 'Parametric and Non-parametric', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q2',
      question: 'Which measure of central tendency is most sensitive to outliers?',
      answers: [
        { id: 'a', text: 'Median', isCorrect: false },
        { id: 'b', text: 'Mode', isCorrect: false },
        { id: 'c', text: 'Mean', isCorrect: true },
        { id: 'd', text: 'Trimmed Mean', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q3',
      question: 'A 20% trimmed mean on a dataset of 10 values removes how many values total?',
      answers: [
        { id: 'a', text: '2', isCorrect: false },
        { id: 'b', text: '4', isCorrect: true },
        { id: 'c', text: '1', isCorrect: false },
        { id: 'd', text: '3', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q6',
      question: 'Which variability measure is NOT sensitive to outliers?',
      answers: [
        { id: 'a', text: 'Variance', isCorrect: false },
        { id: 'b', text: 'Standard Deviation', isCorrect: false },
        { id: 'c', text: 'MAD (Median Absolute Deviation)', isCorrect: true },
        { id: 'd', text: 'Range', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q9',
      question: 'The Binomial Distribution describes:',
      answers: [
        { id: 'a', text: 'Time between events in a Poisson process', isCorrect: false },
        { id: 'b', text: 'Number of successes in fixed independent Bernoulli trials', isCorrect: true },
        { id: 'c', text: 'Number of events in a fixed time interval', isCorrect: false },
        { id: 'd', text: 'Distribution of means', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q10',
      question: 'In a normal distribution, what percentage of data lies within one standard deviation of the mean?',
      answers: [
        { id: 'a', text: '50%', isCorrect: false },
        { id: 'b', text: '68%', isCorrect: true },
        { id: 'c', text: '95%', isCorrect: false },
        { id: 'd', text: '99.7%', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q13',
      question: 'In a QQ-plot, what does a straight diagonal line indicate?',
      answers: [
        { id: 'a', text: 'The data is skewed right', isCorrect: false },
        { id: 'b', text: 'The data has heavy tails', isCorrect: false },
        { id: 'c', text: 'The data follows a normal distribution', isCorrect: true },
        { id: 'd', text: 'The data has outliers', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q16',
      question: 'In the Shapiro-Wilk test, if p-value > 0.05:',
      answers: [
        { id: 'a', text: 'Reject normality', isCorrect: false },
        { id: 'b', text: 'Assume normality', isCorrect: true },
        { id: 'c', text: 'Data is skewed', isCorrect: false },
        { id: 'd', text: 'Data has outliers', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q20',
      question: 'In hypothesis testing, the null hypothesis H0 is rejected when:',
      answers: [
        { id: 'a', text: 'p-value > alpha', isCorrect: false },
        { id: 'b', text: 'p-value < alpha', isCorrect: true },
        { id: 'c', text: 'p-value = 1', isCorrect: false },
        { id: 'd', text: 't-statistic = 0', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q21',
      question: 'The Central Limit Theorem states that sample means tend to be:',
      answers: [
        { id: 'a', text: 'Uniformly distributed', isCorrect: false },
        { id: 'b', text: 'Exponentially distributed', isCorrect: false },
        { id: 'c', text: 'Normally distributed', isCorrect: true },
        { id: 'd', text: 'Binomially distributed', isCorrect: false }
      ]
    },

    // --- LECTURE 3: DATA VISUALIZATION ---
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
      id: 'ds-l3-q23',
      question: 'Charts used for distribution include Histogram, Boxplot, KDE plot, and:',
      answers: [
        { id: 'a', text: 'Pie chart', isCorrect: false },
        { id: 'b', text: 'Choropleths', isCorrect: false },
        { id: 'c', text: 'Violin plot', isCorrect: true },
        { id: 'd', text: 'Radar chart', isCorrect: false }
      ]
    },

    // --- LECTURE 4: DATA FORMATS & EVALUATION ---
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
      id: 'ds-l4-q24',
      question: 'An R² value of 1 indicates:',
      answers: [
        { id: 'a', text: 'The model explains none of the variance', isCorrect: false },
        { id: 'b', text: 'The model explains all the variance in y', isCorrect: true },
        { id: 'c', text: 'The model has 100% accuracy', isCorrect: false },
        { id: 'd', text: 'MSE equals zero', isCorrect: false }
      ]
    },

    // --- LECTURE 5: ML MODELS & WORKFLOW ---
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
      id: 'ds-l5-q25',
      question: 'In Decision Tree, what does max_depth control?',
      answers: [
        { id: 'a', text: 'Number of features', isCorrect: false },
        { id: 'b', text: 'Tree complexity (overfitting prevention)', isCorrect: true },
        { id: 'c', text: 'Training set size', isCorrect: false },
        { id: 'd', text: 'Learning rate', isCorrect: false }
      ]
    },

    // --- LECTURE 6: WEKA & PREPROCESSING ---
    {
      id: 'ds-l6-q2',
      question: 'Which tag in ARFF defines the name of the dataset?',
      answers: [
        { id: 'a', text: '@DATA', isCorrect: false },
        { id: 'b', text: '@ATTRIBUTE', isCorrect: false },
        { id: 'c', text: '@RELATION', isCorrect: true },
        { id: 'd', text: '@NAME', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q3',
      question: 'In an ARFF file, missing values are represented by:',
      answers: [
        { id: 'a', text: 'NULL', isCorrect: false },
        { id: 'b', text: 'NaN', isCorrect: false },
        { id: 'c', text: '?', isCorrect: true },
        { id: 'd', text: '-1', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q7',
      question: 'Which filter is used to convert NUMERIC attributes to NOMINAL?',
      answers: [
        { id: 'a', text: 'Normalize', isCorrect: false },
        { id: 'b', text: 'Discretize', isCorrect: true },
        { id: 'c', text: 'Standardize', isCorrect: false },
        { id: 'd', text: 'ReplaceMissingValues', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q10',
      question: 'Which filter scales all numeric values to a range between 0 and 1?',
      answers: [
        { id: 'a', text: 'Standardize', isCorrect: false },
        { id: 'b', text: 'Normalize', isCorrect: true },
        { id: 'c', text: 'Discretize', isCorrect: false },
        { id: 'd', text: 'Remove', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q14',
      question: 'How do you mark a comment in an ARFF file?',
      answers: [
        { id: 'a', text: '//', isCorrect: false },
        { id: 'b', text: '#', isCorrect: false },
        { id: 'c', text: '%', isCorrect: true },
        { id: 'd', text: '/*', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q16',
      question: 'Which data type is used for categorical labels like "Red", "Blue", "Green"?',
      answers: [
        { id: 'a', text: 'NUMERIC', isCorrect: false },
        { id: 'b', text: 'NOMINAL', isCorrect: true },
        { id: 'c', text: 'STRING', isCorrect: false },
        { id: 'd', text: 'DATE', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q18',
      question: 'Standardization scales data to have:',
      answers: [
        { id: 'a', text: 'Mean=1, StdDev=0', isCorrect: false },
        { id: 'b', text: 'Mean=0, StdDev=1', isCorrect: true },
        { id: 'c', text: 'Min=0, Max=1', isCorrect: false },
        { id: 'd', text: 'Sum=1', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q21',
      question: 'Attribute selection is used to:',
      answers: [
        { id: 'a', text: 'Increase dataset size', isCorrect: false },
        { id: 'b', text: 'Find the most relevant features', isCorrect: true },
        { id: 'c', text: 'Change data types', isCorrect: false },
        { id: 'd', text: 'Delete noisy rows', isCorrect: false }
      ]
    },
    {
      id: 'ds-l6-q25',
      question: 'Weka is an acronym for:',
      answers: [
        { id: 'a', text: 'Waikato Environment for Knowledge Analysis', isCorrect: true },
        { id: 'b', text: 'World Environment for Knowledge Access', isCorrect: false },
        { id: 'c', text: 'Wide Enterprise Knowledge Assistant', isCorrect: false },
        { id: 'd', text: 'Waikato Engine for Knowledge Analysis', isCorrect: false }
      ]
    },

    // --- BONUS MIDTERM QUESTIONS ---
    {
      id: 'ds-mid-bonus-1',
      question: 'Which measure of central tendency is robust to outliers?',
      answers: [
        { id: 'a', text: 'Mean', isCorrect: false },
        { id: 'b', text: 'Median', isCorrect: true },
        { id: 'c', text: 'Mode', isCorrect: false },
        { id: 'd', text: 'Range', isCorrect: false }
      ]
    },
    {
      id: 'ds-mid-bonus-2',
      question: 'What is the native file format for Weka?',
      answers: [
        { id: 'a', text: 'CSV', isCorrect: false },
        { id: 'b', text: 'JSON', isCorrect: false },
        { id: 'c', text: 'ARFF', isCorrect: true },
        { id: 'd', text: 'Parquet', isCorrect: false }
      ]
    }
  ],
  
  written: []
};
