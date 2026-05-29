const fs = require('fs');
const path = 'd:/college/sem 4/ip/sahla/src/data/subjects/intelligent-systems/intelligent-programming/lecture-quiz3.js';
let content = fs.readFileSync(path, 'utf8');

const replacements = [
  // Q1
  {
    old: `"a", text: "Use the Mean — it considers all values equally."`,
    new: `"a", text: "Use the Mean — it mathematically considers all values equally to form the average."`
  },
  {
    old: `"b", text: "Use the Median — it is robust to outliers and represents the center better."`,
    new: `"b", text: "Use the Median — it is robust to outliers and represents the center much better."`
  },
  {
    old: `"c", text: "Use the Mode — it highlights the most frequent value."`,
    new: `"c", text: "Use the Mode — it highlights the most frequent normal value in any distribution."`
  },
  {
    old: `"d", text: "Delete the outlier and calculate TF-IDF."`,
    new: `"d", text: "Delete the outlier entirely and calculate the TF-IDF score for the numbers."`
  },

  // Q2
  {
    old: `"a", text: "Mean"`,
    new: `"a", text: "Mean — because categorical variables can always be mapped to numeric codes."`
  },
  {
    old: `"b", text: "Median"`,
    new: `"b", text: "Median — because it finds the central point regardless of categorical outliers."`
  },
  {
    old: `"c", text: "Mode"`,
    new: `"c", text: "Mode — because it simply finds the most frequently occurring category label."`
  },
  {
    old: `"d", text: "Standard Deviation"`,
    new: `"d", text: "Standard Deviation — to determine the average variance in the categories."`
  },

  // Q3
  {
    old: `"a", text: "Because the data is categorical."`,
    new: `"a", text: "Because the data is completely categorical and numerical means do not apply."`
  },
  {
    old: `"b", text: "Because the data has strong outliers that need smoothing."`,
    new: `"b", text: "Because the data has incredibly strong outliers that require heavy smoothing."`
  },
  {
    old: `"c", text: "Because the data follows a normal distribution without strong outliers."`,
    new: `"c", text: "Because the data follows a relatively normal distribution without any outliers."`
  },
  {
    old: `"d", text: "Because Median cannot be calculated for small datasets."`,
    new: `"d", text: "Because the Median cannot be effectively calculated for datasets under 1000 rows."`
  },

  // Q4
  {
    old: `"a", text: "Mean — it gives 12700 which represents the dataset well."`,
    new: `"a", text: "Mean — it gives 12700 which perfectly represents the overall salary dataset."`
  },
  {
    old: `"b", text: "Mode — because salaries are categorical."`,
    new: `"b", text: "Mode — because salaries should always be treated as discrete categorical data."`
  },
  {
    old: `"c", text: "Median (3500) — it is not affected by the extreme outlier 50000."`,
    new: `"c", text: "Median (3500) — it is completely unaffected by the extreme outlier of 50000."`
  },
  {
    old: `"d", text: "Delete all values and restart the dataset."`,
    new: `"d", text: "Delete all values — the outlier completely corrupts any possible calculation."`
  },

  // Q5
  {
    old: `"a", text: "Supervised Learning"`,
    new: `"a", text: "Supervised Learning — because it effectively predicts continuous target variables."`
  },
  {
    old: `"b", text: "Unsupervised Learning"`,
    new: `"b", text: "Unsupervised Learning — because it discovers structures without needing labels."`
  },
  {
    old: `"c", text: "Reinforcement Learning"`,
    new: `"c", text: "Reinforcement Learning — because it relies on trial and error within environments."`
  },
  {
    old: `"d", text: "Transfer Learning"`,
    new: `"d", text: "Transfer Learning — because it reuses previous knowledge on entirely new groups."`
  },

  // Q6
  {
    old: `"a", text: "Numerical; Regression."`,
    new: `"a", text: "Numerical data; therefore you must use a Supervised Regression learning model."`
  },
  {
    old: `"b", text: "Categorical; Supervised Classification."`,
    new: `"b", text: "Categorical data; therefore you must use a Supervised Classification learning model."`
  },
  {
    old: `"c", text: "Categorical; Unsupervised Clustering."`,
    new: `"c", text: "Categorical data; therefore you must use an Unsupervised Clustering learning model."`
  },
  {
    old: `"d", text: "Numerical; Unsupervised Clustering."`,
    new: `"d", text: "Numerical data; therefore you must use an Unsupervised Clustering learning model."`
  },

  // Q7
  {
    old: `"a", text: "Unsupervised Clustering (e.g., K-Means)."`,
    new: `"a", text: "Unsupervised Clustering (like K-Means) to effectively discover similar housing groups."`
  },
  {
    old: `"b", text: "Supervised Classification (e.g., Naive Bayes)."`,
    new: `"b", text: "Supervised Classification (like Naive Bayes) to categorize the specific house types."`
  },
  {
    old: `"c", text: "Supervised Regression (e.g., Linear Regression)."`,
    new: `"c", text: "Supervised Regression (like Linear Regression) to predict continuous numeric targets."`
  },
  {
    old: `"d", text: "Association Rule Mining (e.g., Apriori)."`,
    new: `"d", text: "Association Rule Mining (like Apriori) to discover frequent house purchase patterns."`
  },

  // Q8
  {
    old: `"a", text: "Linear Regression — it predicts continuous values."`,
    new: `"a", text: "Linear Regression — because it is explicitly designed to predict continuous values."`
  },
  {
    old: `"b", text: "Naive Bayes — it classifies labeled data."`,
    new: `"b", text: "Naive Bayes — because it uses probabilistic models to classify all labeled data."`
  },
  {
    old: `"c", text: "K-Means Clustering — it groups unlabeled data."`,
    new: `"c", text: "K-Means Clustering — because it is specifically designed to group unlabeled data."`
  },
  {
    old: `"d", text: "Decision Tree — it splits labeled data by features."`,
    new: `"d", text: "Decision Tree — because it recursively splits the labeled data based on features."`
  },

  // Q9
  {
    old: `"a", text: "The number of unique words."`,
    new: `"a", text: "It completely ignores the absolute number of unique vocabulary words."`
  },
  {
    old: `"b", text: "The frequency of each word."`,
    new: `"b", text: "It completely ignores the mathematical frequency of each individual word."`
  },
  {
    old: `"c", text: "Grammar, word order, and context."`,
    new: `"c", text: "It completely ignores the linguistic grammar, word order, and overall context."`
  },
  {
    old: `"d", text: "The total number of documents."`,
    new: `"d", text: "It completely ignores the total aggregated number of documents in the corpus."`
  },

  // Q10
  {
    old: `"a", text: "[1, 1, 1, 1, 1]"`,
    new: `"a", text: "The vector is [1, 1, 1, 1, 1] because all the vocabulary words are completely present."`
  },
  {
    old: `"b", text: "[0, 1, 1, 0, 1]"`,
    new: `"b", text: "The vector is [0, 1, 1, 0, 1] because 'AI' and 'and' are entirely missing from Doc 1."`
  },
  {
    old: `"c", text: "[1, 1, 0, 1, 1]"`,
    new: `"c", text: "The vector is [1, 1, 0, 1, 1] because 'NLP' is intentionally excluded from the count."`
  },
  {
    old: `"d", text: "[0, 0, 1, 0, 1]"`,
    new: `"d", text: "The vector is [0, 0, 1, 0, 1] because pronouns and stopwords are always omitted."`
  },

  // Q11
  {
    old: `"a", text: "Counts how many times a word appears in a single document."`,
    new: `"a", text: "It strictly counts exactly how many times a word appears in a single target document."`
  },
  {
    old: `"b", text: "Penalizes words that appear in many documents, reducing their importance."`,
    new: `"b", text: "It aggressively penalizes words appearing in many documents, reducing their importance."`
  },
  {
    old: `"c", text: "Removes all stopwords from the corpus automatically."`,
    new: `"c", text: "It automatically identifies and completely removes all English stopwords from the corpus."`
  },
  {
    old: `"d", text: "Sorts words alphabetically for faster lookup."`,
    new: `"d", text: "It systematically sorts all words alphabetically to guarantee much faster model lookup."`
  },

  // Q12
  {
    old: `"a", text: "'AI' and 'and' — they appear in only one document."`,
    new: `"a", text: "'AI' and 'and' — because they appear in only one document, making them far too common."`
  },
  {
    old: `"b", text: "'love' and 'NLP' — they appear in both documents, making them less distinctive."`,
    new: `"b", text: "'love' and 'NLP' — because they appear in both documents, making them much less distinctive."`
  },
  {
    old: `"c", text: "'I' — because pronouns always get zero."`,
    new: `"c", text: "'I' — because English personal pronouns are automatically assigned a permanent zero score."`
  },
  {
    old: `"d", text: "All words equally — TF-IDF gives the same scores as BoW."`,
    new: `"d", text: "All words are treated equally — TF-IDF fundamentally yields identical scores to the BoW model."`
  },

  // Q13
  {
    old: `"a", text: "It increases the weight of all words equally."`,
    new: `"a", text: "It artificially increases the mathematical weight of all vocabulary words completely equally."`
  },
  {
    old: `"b", text: "It downweights common words across documents and upweights distinctive words."`,
    new: `"b", text: "It effectively downweights common words across documents and upweights distinctive terms."`
  },
  {
    old: `"c", text: "It removes all words that appear more than once."`,
    new: `"c", text: "It explicitly removes all vocabulary words that appear more than exactly once in the data."`
  },
  {
    old: `"d", text: "It preserves word order and grammar."`,
    new: `"d", text: "It successfully preserves both the original linguistic word order and the grammatical structure."`
  },

  // Q14
  {
    old: `"a", text: "They are misspelled and cause model errors."`,
    new: `"a", text: "They are frequently misspelled by users and generally cause catastrophic model errors."`
  },
  {
    old: `"b", text: "They appear very frequently but carry little meaningful information."`,
    new: `"b", text: "They appear very frequently in sentences but carry incredibly little meaningful information."`
  },
  {
    old: `"c", text: "They only appear in negative sentiment texts."`,
    new: `"c", text: "They almost exclusively appear in profoundly negative sentiment texts within the dataset."`
  },
  {
    old: `"d", text: "They are too long to process efficiently."`,
    new: `"d", text: "They are significantly too long for most modern machine learning algorithms to process efficiently."`
  },

  // Q15
  {
    old: `"a", text: "Stemming uses grammar rules; Lemmatization chops suffixes."`,
    new: `"a", text: "Stemming heavily relies on complex grammar rules; Lemmatization simply chops off word suffixes."`
  },
  {
    old: `"b", text: "Stemming chops suffixes (fast, inaccurate); Lemmatization uses vocabulary rules (slower, accurate)."`,
    new: `"b", text: "Stemming chops suffixes (fast but inaccurate); Lemmatization uses vocabulary rules (slower, accurate)."`
  },
  {
    old: `"c", text: "They are identical — both produce the same output."`,
    new: `"c", text: "They are fundamentally identical — both algorithms are guaranteed to produce the exact same output."`
  },
  {
    old: `"d", text: "Lemmatization only works on numbers."`,
    new: `"d", text: "Lemmatization exclusively operates on numerical data, whereas Stemming only processes text data."`
  },

  // Q16
  {
    old: `"a", text: "Binary Classification (Positive/Negative)."`,
    new: `"a", text: "Binary Classification, which merely identifies whether a sentence is entirely Positive or Negative."`
  },
  {
    old: `"b", text: "Multi-class Classification (Positive/Neutral/Negative)."`,
    new: `"b", text: "Multi-class Classification, which assigns text into distinct Positive, Neutral, or Negative buckets."`
  },
  {
    old: `"c", text: "Emotion Detection (Joy/Anger/Sadness/Surprise)."`,
    new: `"c", text: "Emotion Detection, which identifies specific psychological states like Joy, Anger, Sadness, or Surprise."`
  },
  {
    old: `"d", text: "Stopword Analysis."`,
    new: `"d", text: "Stopword Analysis, which filters out the emotional words to focus exclusively on factual information."`
  },

  // Q17
  {
    old: `"a", text: "The text is completely neutral."`,
    new: `"a", text: "The analyzed text is evaluated to be completely neutral and entirely devoid of emotion."`
  },
  {
    old: `"b", text: "The analysis failed."`,
    new: `"b", text: "The sentiment analysis algorithm failed to execute and returned a negative error code."`
  },
  {
    old: `"c", text: "The text is extremely negative in sentiment."`,
    new: `"c", text: "The analyzed text is evaluated to contain an extremely negative and pessimistic sentiment."`
  },
  {
    old: `"d", text: "The text is extremely positive in sentiment."`,
    new: `"d", text: "The analyzed text is evaluated to contain an extremely positive and enthusiastic sentiment."`
  },

  // Q18
  {
    old: `"a", text: "It runs faster."`,
    new: `"a", text: "It executes significantly faster and requires considerably less computational processing power."`
  },
  {
    old: `"b", text: "It ensures each fold preserves the same class label proportions as the full dataset."`,
    new: `"b", text: "It guarantees that each fold perfectly preserves the original class label proportions of the full dataset."`
  },
  {
    old: `"c", text: "It automatically tunes hyperparameters."`,
    new: `"c", text: "It automatically tunes the internal hyperparameters of the model to achieve the highest accuracy."`
  },
  {
    old: `"d", text: "It uses more memory for better accuracy."`,
    new: `"d", text: "It strategically utilizes more memory during training to artificially enhance the final evaluation score."`
  },

  // Q19
  {
    old: `"a", text: "Accuracy"`,
    new: `"a", text: "Accuracy — this tracks the general proportion of correct predictions across all classes combined."`
  },
  {
    old: `"b", text: "Precision"`,
    new: `"b", text: "Precision — this tracks how many of the positively predicted products were actually truly relevant."`
  },
  {
    old: `"c", text: "Recall"`,
    new: `"c", text: "Recall — this directly tracks the percentage of genuinely liked products that the model managed to find."`
  },
  {
    old: `"d", text: "F1 Score"`,
    new: `"d", text: "F1 Score — this is the harmonized mathematical average of both Precision and overall Accuracy."`
  },

  // Q20
  {
    old: `"a", text: "predict() requires the full training set as input."`,
    new: `"a", text: "The standard predict() method absolutely requires the full unedited training dataset as input."`
  },
  {
    old: `"b", text: "predict_proba() returns probability scores we can sort to rank items from most to least likely."`,
    new: `"b", text: "predict_proba() yields continuous probability scores we can successfully sort to rank the best items."`
  },
  {
    old: `"c", text: "predict() only works during training and cannot be called after."`,
    new: `"c", text: "The standard predict() method only functions during training and physically cannot be called afterward."`
  },
  {
    old: `"d", text: "predict_proba() is faster and uses less memory."`,
    new: `"d", text: "predict_proba() executes significantly faster and systematically uses far less memory on huge datasets."`
  },

  // Q21
  {
    old: `"a", text: "The Mean (44) is a better representation because it uses all data points."`,
    new: `"a", text: "The Mean (44) is completely superior because it flawlessly incorporates all recorded numerical data points."`
  },
  {
    old: `"b", text: "The Median (13.5) better represents the data because the Mean is heavily pulled by the outlier 200."`,
    new: `"b", text: "The Median (13.5) represents the center far better because the Mean is severely dragged by the outlier 200."`
  },
  {
    old: `"c", text: "Both are equally valid — outliers don't affect either measure."`,
    new: `"c", text: "Both mathematical measures are equally valid because outliers fundamentally don't affect central tendency."`
  },
  {
    old: `"d", text: "Neither is valid — we must use Mode for any dataset with outliers."`,
    new: `"d", text: "Neither metric is valid — you are strictly required to use the Mode for any dataset that features outliers."`
  },

  // Q22
  {
    old: `"a", text: "It contains only positive integers and no negative values."`,
    new: `"a", text: "Because it exclusively consists of positive numeric integers and actively rejects any negative floating values."`
  },
  {
    old: `"b", text: "Each document uses a tiny fraction of the vocabulary, so the matrix is mostly zeros — wasting memory."`,
    new: `"b", text: "Because each document uses barely any vocabulary, leaving the massive matrix filled mostly with wasteful zeros."`
  },
  {
    old: `"c", text: "It stores words in alphabetical order, leaving gaps between entries."`,
    new: `"c", text: "Because it rigidly stores the extracted words in strict alphabetical order, leaving massive gaps between entries."`
  },
  {
    old: `"d", text: "The algorithm skips common words automatically during construction."`,
    new: `"d", text: "Because the underlying generation algorithm systematically skips the most common English vocabulary words automatically."`
  },

  // Q23
  {
    old: `"a", text: "\\"i loved product amazing works well\\""`,
    new: `"a", text: "\\"i loved product amazing works well\\" — because the stemming process failed to properly truncate the trailing suffixes."`
  },
  {
    old: `"b", text: "\\"loved product amazing works well\\""`,
    new: `"b", text: "\\"loved product amazing works well\\" — because the pronoun 'i' is universally treated as an excluded stopword."`
  },
  {
    old: `"c", text: "\\"love product amaz work well\\""`,
    new: `"c", text: "\\"love product amaz work well\\" — because punctuation and stopwords are removed, and the remaining terms are stemmed."`
  },
  {
    old: `"d", text: "\\"love product amazing work well\\""`,
    new: `"d", text: "\\"love product amazing work well\\" — because the algorithm selectively applies lemmatization instead of basic stemming."`
  },

  // Q24
  {
    old: `"a", text: "K-Means requires at least 10,000 data points to work."`,
    new: `"a", text: "K-Means strictly requires an absolute minimum of 10,000 distinct data points to mathematically function."`
  },
  {
    old: `"b", text: "K-Means is unsupervised clustering — it ignores labels. A Supervised Regression model should be used for continuous targets."`,
    new: `"b", text: "K-Means is unsupervised clustering that ignores labels. A Supervised Regression model handles continuous targets."`
  },
  {
    old: `"c", text: "K-Means only works with categorical features, not numerical ones."`,
    new: `"c", text: "K-Means is exclusively engineered to work with categorical text features, making it useless for numerical ones."`
  },
  {
    old: `"d", text: "K-Means is too slow for temperature data."`,
    new: `"d", text: "K-Means possesses an execution speed that is significantly too slow to handle simple temperature datasets."`
  },

  // Q25
  {
    old: `"a", text: "Only folds 1 and 2."`,
    new: `"a", text: "Only folds 1 and 2 — because the algorithm sequentially trains on previous data and evaluates on the next."`
  },
  {
    old: `"b", text: "Folds 1, 2, 4, and 5."`,
    new: `"b", text: "Folds 1, 2, 4, and 5 — because the exact specified fold acts as the test set while the remaining four train."`
  },
  {
    old: `"c", text: "Only fold 4 and 5."`,
    new: `"c", text: "Only folds 4 and 5 — because the cross-validation logic exclusively uses the subsequent folds for the training."`
  },
  {
    old: `"d", text: "All 5 folds including fold 3."`,
    new: `"d", text: "All 5 folds perfectly simultaneously — because cross-validation evaluates performance across the entire dataset."`
  },

  // Q26
  {
    old: `"a", text: "RandomForest cannot handle text data without an outer wrapper."`,
    new: `"a", text: "Because the base RandomForest algorithm structurally cannot process any textual data without an external wrapper."`
  },
  {
    old: `"b", text: "To add an extra ensemble layer — bagging trains multiple RFs on different subsets for better robustness."`,
    new: `"b", text: "To successfully introduce an extra ensemble layer — bagging trains multiple RF instances to achieve better robustness."`
  },
  {
    old: `"c", text: "BaggingClassifier automatically tunes RF hyperparameters."`,
    new: `"c", text: "Because the BaggingClassifier is explicitly programmed to automatically optimize the RandomForest hyperparameters."`
  },
  {
    old: `"d", text: "To reduce training time by parallelizing RF internally."`,
    new: `"d", text: "To aggressively reduce the overall training execution time by seamlessly parallelizing the Random Forest internally."`
  },

  // Q27
  {
    old: `"a", text: "Limits the dataset to only 5000 reviews."`,
    new: `"a", text: "It strictly truncates the entire training dataset to utilize only the first 5000 Amazon product reviews."`
  },
  {
    old: `"b", text: "Keeps only the 5000 most frequent words in the vocabulary to control matrix size."`,
    new: `"b", text: "It safely restricts the vocabulary to only the 5000 most frequently appearing words to successfully control memory."`
  },
  {
    old: `"c", text: "Generates 5000 random features from the text."`,
    new: `"c", text: "It automatically generates exactly 5000 entirely random mathematical features derived from the textual context."`
  },
  {
    old: `"d", text: "Pads each review to exactly 5000 tokens."`,
    new: `"d", text: "It forcefully applies zero-padding to guarantee that every single review contains precisely 5000 valid tokens."`
  },

  // Q28
  {
    old: `"a", text: "The model is missing many products the user actually likes."`,
    new: `"a", text: "The prediction model is fundamentally failing to identify and capture the vast majority of items the user genuinely likes."`
  },
  {
    old: `"b", text: "The model recommends too many products the user does NOT actually like (high false positives)."`,
    new: `"b", text: "The prediction model aggressively suggests significantly too many irrelevant items that the user definitely does NOT like."`
  },
  {
    old: `"c", text: "The model has high overall accuracy."`,
    new: `"c", text: "The prediction model has miraculously achieved an incredibly high level of overall holistic accuracy on the dataset."`
  },
  {
    old: `"d", text: "The dataset has too few rows to calculate any metric."`,
    new: `"d", text: "The given dataset unfortunately contains far too few complete rows to accurately calculate any reliable statistical metric."`
  },

  // Q29
  {
    old: `"a", text: "age and income — numerical data always needs encoding."`,
    new: `"a", text: "Both age and income strictly require encoding because standard numerical variables must always be mathematically normalized."`
  },
  {
    old: `"b", text: "city and education_level — categorical text must be converted to numbers (e.g., cat.codes)."`,
    new: `"b", text: "Both city and education_level require encoding because machine learning algorithms mathematically demand numerical categorical codes."`
  },
  {
    old: `"c", text: "All four features need encoding."`,
    new: `"c", text: "All four of the mentioned dataset features require intensive label encoding before any functional training can potentially begin."`
  },
  {
    old: `"d", text: "None — ML models accept any data type directly."`,
    new: `"d", text: "Absolutely none of the features require any form of encoding because modern ML pipelines can natively process standard text directly."`
  },

  // Q30
  {
    old: `"a", text: "3 — just the raw count of occurrences."`,
    new: `"a", text: "It evaluates to precisely 3 — because Term Frequency simply relies on the unmodified raw count of exact vocabulary occurrences."`
  },
  {
    old: `"b", text: "0.03 — the frequency relative to the total word count (3/100)."`,
    new: `"b", text: "It evaluates to precisely 0.03 — because Term Frequency calculates the occurrences strictly relative to the total word count."`
  },
  {
    old: `"c", text: "100 — the total number of words in the document."`,
    new: `"c", text: "It evaluates to precisely 100 — because Term Frequency exclusively measures the absolute total number of words in the document."`
  },
  {
    old: `"d", text: "0.3 — the word appears in 30% of all documents in the corpus."`,
    new: `"d", text: "It evaluates to precisely 0.3 — because Term Frequency strictly measures the percentage of documents containing the target word."`
  }
];

let replaced = 0;
for (const rep of replacements) {
  if (content.includes(rep.old)) {
    content = content.replace(rep.old, rep.new);
    replaced++;
  } else {
    console.warn('Could not find:', rep.old);
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log('Done! Replaced ' + replaced + ' items.');
