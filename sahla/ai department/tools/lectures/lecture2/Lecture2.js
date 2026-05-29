import { useState } from "react";

const COLOR = "#185FA5";
const LIGHT = "#E6F1FB";
const BORDER = "#B8D4F5";

const summaryTopics = [
  {
    title: "1. What Is Statistics?",
    icon: "📊",
    summary: "Statistics is the mathematics of understanding data — collecting, organizing, analyzing and interpreting it to find patterns and make decisions.",
    points: [
      { label: "Descriptive Statistics", text: "Summarises and describes the features of a dataset. Transforms raw data into useful information. Answers: what does my data look like?" },
      { label: "Inferential Statistics", text: "Uses a small sample to draw conclusions about a larger population. Helps predict and make decisions. Answers: what can I infer or predict?" },
    ],
    note: "Statistics is the backbone of data science — from cleaning data and building visualizations to training predictive models.",
  },
  {
    title: "2. Measures of Central Tendency",
    icon: "🎯",
    summary: "These measures describe where the center of the data lies. Choosing the right one depends on whether your data contains outliers.",
    points: [
      { label: "Mean (Average)", text: "Sum of all values divided by count. Example: [2,4,6,8,10] → mean = 6. Most common but highly sensitive to outliers." },
      { label: "Weighted Mean", text: "Each value is multiplied by a weight before averaging. Used when some observations are more important than others (e.g., murder rate weighted by population)." },
      { label: "Trimmed Mean", text: "Remove a fixed percentage of extreme values from both ends, then compute the mean. Example: 20% trimmed mean on 10 values removes 2 from each end." },
      { label: "Median", text: "The middle value when data is sorted. Half of values are above, half below. Robust to outliers — preferred for skewed data." },
      { label: "Mode", text: "The most frequently occurring value. Works for categorical data too. Example: [2,4,4,6,8,10] → mode = 4." },
    ],
    note: "Use the median (or trimmed mean) when your data has outliers, because the plain mean gets pulled toward extreme values.",
  },
  {
    title: "3. Measures of Variability (Dispersion)",
    icon: "📏",
    summary: "These measures describe how spread out the data is around the center. High variability means data is widely scattered; low variability means it's clustered tightly.",
    points: [
      { label: "Range", text: "Max − Min. Simple but heavily influenced by outliers. Example: [2,4,6,8,10] → range = 8." },
      { label: "Variance (S²)", text: "Average of squared differences from the mean: S² = Σ(xᵢ−x̄)² / (n−1). Uses n−1 for sample, n for population." },
      { label: "Standard Deviation (SD)", text: "√Variance. Expressed in the same units as the data — much easier to interpret than variance." },
      { label: "IQR (Interquartile Range)", text: "Q3 − Q1. Spread of the middle 50% of data. Not affected by extreme values." },
      { label: "MAD (Median Absolute Deviation)", text: "Median of |xᵢ − median|. The most robust estimate — unaffected by outliers, just like the median itself." },
    ],
    note: "Variance and SD are the most widely reported but both are sensitive to outliers. Prefer MAD or IQR when your data is skewed or has extreme values.",
  },
  {
    title: "4. Random Variables & Probability Distributions",
    icon: "🎲",
    summary: "A random variable takes values that are outcomes of a random phenomenon. Distributions describe the probability of each possible value.",
    points: [
      { label: "Discrete RV + PMF", text: "Takes countable values (0,1,2…). The Probability Mass Function gives P(X = x) exactly." },
      { label: "Continuous RV + PDF", text: "Takes any value in a range. The Probability Density Function describes relative likelihood — area under curve = probability." },
      { label: "CDF", text: "Cumulative Distribution Function: F(x) = P(X ≤ x). Applies to both discrete and continuous." },
      { label: "Binomial Distribution", text: "# successes in n independent Bernoulli trials, each with probability p. Formula: C(n,x)·pˣ·qⁿ⁻ˣ for x = 0,1,…,n." },
      { label: "Poisson Distribution", text: "# events in a fixed time/space interval at constant average rate λ. Formula: e⁻λ·λˣ / x!" },
      { label: "Exponential Distribution", text: "Time between events in a Poisson process. Formula: (1/θ)·e^(−x/θ) for x > 0." },
    ],
    note: "Knowing which distribution your data follows helps you choose the right statistical test and build better predictive models.",
  },
  {
    title: "5. Normal Distribution",
    icon: "🔔",
    summary: "The famous bell-shaped curve. It appears naturally in many real-world phenomena and is the foundation of most statistical tests and machine learning algorithms.",
    points: [
      { label: "Symmetric about the mean", text: "Mean = Median = Mode for a perfect normal distribution. The curve is identical on both sides." },
      { label: "68–95–99.7 Rule", text: "68% of data within 1 SD, 95% within 2 SD, 99.7% within 3 SD of the mean." },
      { label: "Z-score (Standardization)", text: "Z = (x − μ) / σ. Converts any normal distribution to Standard Normal N(0,1). Allows comparison across different scales." },
      { label: "Why it matters for ML", text: "Most ML models perform best with normally distributed features. Non-normal data may need transformation before modeling." },
    ],
    note: "If your data is not normal, apply a transformation (e.g., log transform) to make it approximately normal before using parametric tests or models.",
  },
  {
    title: "6. Testing for Normality",
    icon: "🔍",
    summary: "Before applying methods that assume normality (like linear regression or t-tests), verify whether your data actually follows a normal distribution using these three approaches.",
    points: [
      { label: "Histogram (Graphical)", text: "Roughly bell-shaped → suggests normality. Right/left skewed or multimodal → not normal." },
      { label: "QQ-Plot (Graphical)", text: "Points on the 45° diagonal line → normal. Curved pattern → skewed. Tails flaring outward → heavy tails (leptokurtic)." },
      { label: "Box Plot (Graphical)", text: "Symmetric box with no extreme outliers → suggests normality. Long whiskers or many outliers → non-normal." },
      { label: "Skewness (Numerical)", text: "0 = symmetric (normal). Positive = long right tail. Negative = long left tail." },
      { label: "Kurtosis (Numerical)", text: "3 = normal (mesokurtic). > 3 = leptokurtic (sharp peak, fat tails). < 3 = platykurtic (flat peak)." },
      { label: "Shapiro-Wilk Test (Statistical)", text: "p > 0.05 → assume normality (fail to reject H₀). p < 0.05 → data NOT normal (reject H₀)." },
      { label: "Kolmogorov-Smirnov Test (Statistical)", text: "Compares empirical CDF to theoretical normal CDF. p > 0.05 → normal. p < 0.05 → not normal." },
    ],
    note: "Always use at least two methods (e.g., QQ-plot + Shapiro-Wilk) before drawing conclusions about normality.",
  },
  {
    title: "7. Hypothesis Testing",
    icon: "⚖️",
    summary: "A formal statistical framework for deciding whether an observed pattern in data is real (statistically significant) or just due to random chance.",
    points: [
      { label: "H₀ (Null Hypothesis)", text: "The default assumption — no effect, no difference, no relationship exists." },
      { label: "Hₐ (Alternative Hypothesis)", text: "What you are trying to prove — there IS an effect, difference, or relationship." },
      { label: "Significance Level (α)", text: "Threshold for decision. Commonly 0.05 (5%) or 0.01 (1%). Represents tolerable false-positive rate." },
      { label: "p-value", text: "Probability of observing data at least as extreme as ours IF H₀ were true. p < α → reject H₀. p ≥ α → fail to reject H₀." },
      { label: "Test Statistic", text: "A number computed from the sample that measures how far the data is from what H₀ predicts (e.g., t-score, z-score)." },
      { label: "Paired t-test", text: "Used when the same subjects are measured twice (before/after). More powerful than independent t-test because it removes individual variability." },
    ],
    note: "Rejecting H₀ does NOT prove Hₐ is true — it only means there is sufficient statistical evidence against H₀.",
  },
  {
    title: "8. Central Limit Theorem (CLT)",
    icon: "📈",
    summary: "The most powerful result in statistics: no matter what shape the original distribution has, the distribution of sample means becomes normal as sample size grows — enabling inference even on non-normal data.",
    points: [
      { label: "Formal Statement", text: "If X₁,X₂,…,Xₙ are i.i.d. with mean μ and variance σ², then X̄ ~ N(μ, σ²/n) as n → ∞." },
      { label: "Variance shrinks with n", text: "As sample size increases, the variance of the mean (σ²/n) decreases — estimates become more precise and the distribution tightens." },
      { label: "Finance: Portfolio Returns", text: "Averaging many asset returns produces a normal distribution regardless of individual asset distributions — underpins VaR calculations." },
      { label: "Media: Engagement Metrics", text: "Average session time across thousands of users follows a normal distribution even if individual times are exponentially distributed." },
      { label: "Healthcare: Drug Trials", text: "Average drug effect across many patients is approximately normal — enables t-tests and confidence intervals for regulatory approval." },
      { label: "Confidence Interval Formula", text: "x̄ ± z_(α/2) · (σ/√n). For 95% CI: z = 1.96. Example with μ=10, σ=5, n=100: [9.02, 10.98] mmHg." },
    ],
    note: "CLT is why parametric tests (t-test, ANOVA, etc.) work on large samples even when the underlying distribution is not normal.",
  },
];

const questions = [
  { q: "What are the two main types of statistics?", options: ["Descriptive and Inferential", "Quantitative and Qualitative", "Population and Sample", "Parametric and Non-parametric"], answer: 0 },
  { q: "Which measure of central tendency is most sensitive to extreme values (outliers)?", options: ["Median", "Mode", "Mean", "Trimmed Mean"], answer: 2 },
  { q: "A 20% trimmed mean on a dataset of 10 values removes how many values total?", options: ["2", "4", "1", "3"], answer: 1 },
  { q: "What is the median of the dataset [2, 4, 6, 8, 10]?", options: ["4", "5", "6", "7"], answer: 2 },
  { q: "Standard deviation is defined as:", options: ["The square of the variance", "The square root of the variance", "The mean of absolute deviations", "The sum of squared differences"], answer: 1 },
  { q: "Which variability measure is NOT sensitive to outliers?", options: ["Variance", "Standard Deviation", "MAD (Median Absolute Deviation)", "Range"], answer: 2 },
  { q: "For the dataset [2, 4, 6, 8, 10], the range is:", options: ["5", "6", "8", "10"], answer: 2 },
  { q: "A Probability Mass Function (PMF) applies to which type of random variable?", options: ["Continuous", "Discrete", "Both", "Neither"], answer: 1 },
  { q: "The Binomial Distribution describes:", options: ["Time between events in a Poisson process", "Number of successes in fixed independent Bernoulli trials", "Number of events in a fixed time interval", "Distribution of means"], answer: 1 },
  { q: "In a normal distribution, what percentage of data lies within one standard deviation of the mean?", options: ["50%", "68%", "95%", "99.7%"], answer: 1 },
  { q: "What does standardizing a data point produce?", options: ["A percentile", "A z-score", "A p-value", "A confidence interval"], answer: 1 },
  { q: "A standard normal distribution has:", options: ["Mean=1, SD=0", "Mean=0, SD=1", "Mean=0.5, SD=0.5", "Mean=1, SD=1"], answer: 1 },
  { q: "In a QQ-plot, what does a straight diagonal line indicate?", options: ["The data is skewed right", "The data has heavy tails", "The data follows a normal distribution", "The data has outliers"], answer: 2 },
  { q: "Curved patterns in a QQ-plot indicate:", options: ["Normal distribution", "Skewed data or non-normal distributions", "Light tails", "No correlation"], answer: 1 },
  { q: "Which Python function creates a QQ-plot?", options: ["plt.qqplot()", "sm.qqplot()", "sns.qqplot()", "stats.qqplot()"], answer: 1 },
  { q: "In the Shapiro-Wilk test, if p-value > 0.05:", options: ["Reject normality", "Assume normality", "Data is skewed", "Data has outliers"], answer: 1 },
  { q: "Positive skewness means the data has a:", options: ["Longer left tail", "Longer right tail", "Symmetric shape", "Flat distribution"], answer: 1 },
  { q: "Kurtosis of a normal (mesokurtic) distribution equals:", options: ["0", "1", "2", "3"], answer: 3 },
  { q: "Leptokurtic distribution has kurtosis:", options: ["= 3", "< 3", "> 3", "= 0"], answer: 2 },
  { q: "In hypothesis testing, the null hypothesis H0 is rejected when:", options: ["p-value > alpha", "p-value < alpha", "p-value = 1", "t-statistic = 0"], answer: 1 },
  { q: "The Central Limit Theorem states that sample means tend to be:", options: ["Uniformly distributed", "Exponentially distributed", "Normally distributed", "Binomially distributed"], answer: 2 },
  { q: "In CLT, Rportfolio ~ N(μ, σ²/n) — as n increases, the variance of the mean:", options: ["Increases", "Decreases", "Stays the same", "Doubles"], answer: 1 },
  { q: "Which Python library provides the trim_mean function?", options: ["numpy", "pandas", "scipy.stats", "statsmodels"], answer: 2 },
  { q: "The weighted mean uses np.average() with which parameter?", options: ["weights", "w", "wt", "scale"], answer: 0 },
  { q: "A 95% confidence interval uses z-value:", options: ["1.645", "1.96", "2.576", "1.282"], answer: 1 },
];

const codeSnippets = [
  {
    title: "Descriptive Statistics — NumPy",
    explanation: "Calculates all core descriptive statistics on a random dataset. Use ddof=1 in np.var() and np.std() when working with a sample (not the full population) to get the unbiased (sample) estimate. The scipy.stats.mode() function finds the most frequent value.",
    code: `import numpy as np
from scipy import stats

dataset = np.random.rand(10) * 100

mean_value      = np.mean(dataset)
median_value    = np.median(dataset)
mode_value      = stats.mode(dataset)[0]
range_value     = np.max(dataset) - np.min(dataset)
variance_value  = np.var(dataset)
sample_variance = np.var(dataset, ddof=1)   # ddof=1 = sample variance
std_dev_value   = np.std(dataset)

print(f"Mean: {mean_value}")
print(f"Median: {median_value}")
print(f"Mode: {mode_value}")
print(f"Range: {range_value}")
print(f"Variance: {variance_value}")
print(f"Sample Variance: {sample_variance}")
print(f"Standard Deviation: {std_dev_value}")`,
  },
  {
    title: "Mean, Trimmed Mean & Median — Pandas / SciPy",
    explanation: "Three location estimates on real state population data. trim_mean(data, 0.1) drops the bottom 10% and top 10% before averaging — making it robust to outliers like California's huge population. The weighted mean weights each murder rate by state population, giving populous states more influence.",
    code: `import pandas as pd
import numpy as np
from scipy.stats import trim_mean

state = pd.read_csv('state.csv')

state['Population'].mean()                              # 6,162,876
trim_mean(state['Population'], 0.1)                     # 4,783,697 (drops 10% each end)
state['Population'].median()                            # 4,436,370
np.average(state['Murder.Rate'], weights=state['Population'])  # 4.445834`,
  },
  {
    title: "Variability Estimates — Pandas / Statsmodels",
    explanation: "Three variability estimates on state populations. std() is most common but outlier-sensitive. IQR (Q3−Q1) covers the middle 50% spread and ignores extremes. MAD from statsmodels is the most robust estimate — computed as Median(|xᵢ − median|) — completely unaffected by outliers.",
    code: `# Standard deviation — sensitive to outliers
state['Population'].std()                               # 6,848,235

# IQR = Q3 − Q1 (middle 50% of data)
state['Population'].quantile(0.75) - \\
state['Population'].quantile(0.25)                      # 4,847,308

# MAD — most robust, not influenced by extreme values
from statsmodels.robust import scale as robust
robust.mad(state['Population'])                         # 3,849,870`,
  },
  {
    title: "Histogram — Normality Check",
    explanation: "A histogram of 1000 log-normally distributed values. Since this data is right-skewed rather than bell-shaped, we visually conclude it is NOT normally distributed. A normal histogram should peak in the middle and taper symmetrically on both sides with no long tail.",
    code: `import math
import numpy as np
from scipy.stats import lognorm
import matplotlib.pyplot as plt

np.random.seed(1)
lognorm_dataset = lognorm.rvs(s=.5, scale=math.exp(1), size=1000)

plt.hist(lognorm_dataset, edgecolor='black', bins=20)
plt.show()
# Right-skewed histogram → NOT normally distributed`,
  },
  {
    title: "QQ-Plot — Normality Check",
    explanation: "A Q-Q (Quantile-Quantile) plot compares quantiles of your data to theoretical normal quantiles. Points on the 45° line → normal. Curved pattern → skewed data. Points flaring at both ends → heavy tails. The line='45' parameter draws the reference line.",
    code: `import statsmodels.api as sm
import matplotlib.pyplot as plt

fig = sm.qqplot(lognorm_dataset, line='45')
plt.show()

# ✅ Points on the diagonal  → normally distributed
# ❌ Curved away             → skewed / non-normal
# ❌ Tails flare outward     → heavy tails (leptokurtic)`,
  },
  {
    title: "Shapiro-Wilk Test",
    explanation: "A formal statistical normality test. H₀: data IS normally distributed. If p < 0.05 we reject H₀. The result below shows p ≈ 3.88×10⁻²⁹ — astronomically small, confirming the log-normal data is definitely not normal.",
    code: `import math, numpy as np
from scipy.stats import shapiro, lognorm

np.random.seed(1)
lognorm_dataset = lognorm.rvs(s=.5, scale=math.exp(1), size=1000)

result = shapiro(lognorm_dataset)
print(result)
# ShapiroResult(statistic=0.857, pvalue=3.88e-29)

# p < 0.05  →  reject H₀  →  NOT normally distributed
# p > 0.05  →  fail to reject H₀  →  assume normality`,
  },
  {
    title: "Kolmogorov-Smirnov Test",
    explanation: "The KS test compares the empirical CDF of your data to the theoretical CDF of a normal distribution. A p-value of 0.0 means there is essentially zero probability the data came from a normal distribution — further confirming the log-normal result.",
    code: `import math, numpy as np
from scipy.stats import kstest, lognorm

np.random.seed(1)
lognorm_dataset = lognorm.rvs(s=.5, scale=math.exp(1), size=1000)

result = kstest(lognorm_dataset, 'norm')
print(result)
# KstestResult(statistic=0.841, pvalue=0.0, ...)

# p < 0.05  →  reject H₀  →  NOT normally distributed`,
  },
  {
    title: "Hypothesis Testing — Paired t-test",
    explanation: "A paired t-test compares two related measurements (before and after) on the same subjects. Here we test if a drug significantly lowers blood pressure. The box plots visualise the before/after distributions. Since p < 0.05, we reject H₀ and conclude the drug has a statistically significant effect.",
    code: `import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

np.random.seed(42)
before_drug = np.random.normal(loc=130, scale=15, size=30)
after_drug  = np.random.normal(loc=120, scale=15, size=30)

plt.figure(figsize=(10, 6))
plt.boxplot([before_drug, after_drug],
            tick_labels=['Before Drug', 'After Drug'])
plt.title('Blood Pressure Before and After Taking the Drug')
plt.ylabel('Blood Pressure (mmHg)')
plt.show()

t_stat, p_val = stats.ttest_rel(before_drug, after_drug)
print(f"T-statistic: {t_stat:.4f}")
print(f"P-value:     {p_val:.4f}")

alpha = 0.05
if p_val < alpha:
    print("Reject H0: The drug has a significant effect on blood pressure.")
else:
    print("Fail to reject H0: No significant effect found.")`,
  },
  {
    title: "CLT — Finance: Portfolio Returns",
    explanation: "Simulates 10,000 portfolios each holding 1,000 assets. The individual asset returns are drawn from a normal distribution, but even if they weren't (see next examples), the average would still converge to normal by CLT. The red curve shows the theoretical N(μ, σ²/n) prediction — it matches the histogram perfectly.",
    code: `import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as stats

n_assets  = 1000    # assets per portfolio
n_samples = 10000   # number of simulated portfolios
mu, sigma = 0.05, 0.20

np.random.seed(42)
returns           = np.random.normal(mu, sigma, (n_samples, n_assets))
portfolio_returns = np.mean(returns, axis=1)   # average over 1000 assets

plt.figure(figsize=(10, 6))
plt.hist(portfolio_returns, bins=50, density=True,
         alpha=0.6, color='b', label='Portfolio Returns')

x = np.linspace(mu - 0.1, mu + 0.1, 1000)
plt.plot(x, stats.norm.pdf(x, mu, sigma / np.sqrt(n_assets)),
         'r-', lw=2, label='Theoretical Normal (CLT)')
plt.title('CLT in Finance: Portfolio Returns')
plt.xlabel('Average Return')
plt.ylabel('Density')
plt.legend()
plt.show()`,
  },
  {
    title: "CLT — Media: Audience Engagement",
    explanation: "Individual user session times follow an exponential distribution (heavily right-skewed, definitely non-normal). Yet when we average across 1,000 users, the distribution of averages converges to a normal distribution — exactly as CLT predicts regardless of the source distribution's shape.",
    code: `import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as stats

n_users   = 1000
n_samples = 10000
mu, sigma = 5.0, 5.0   # minutes

np.random.seed(42)
# Exponential source — skewed, non-normal
engagement_times = np.random.exponential(mu, (n_samples, n_users))
average_times    = np.mean(engagement_times, axis=1)

plt.figure(figsize=(10, 6))
plt.hist(average_times, bins=50, density=True,
         alpha=0.6, color='g', label='Average Engagement Time')

x = np.linspace(mu - 2, mu + 2, 1000)
plt.plot(x, stats.norm.pdf(x, mu, sigma / np.sqrt(n_users)),
         'r-', lw=2, label='Theoretical Normal (CLT)')
plt.title('CLT in Media: Average Engagement Time')
plt.xlabel('Average Time Spent (minutes)')
plt.ylabel('Density')
plt.legend()
plt.show()`,
  },
  {
    title: "CLT — Healthcare: Drug Efficacy",
    explanation: "Blood pressure reductions per patient are drawn from a gamma distribution (skewed, strictly positive values — realistic for medical measurements). Averaging across 500 patients still yields a near-normal distribution, enabling the researchers to construct valid confidence intervals and perform t-tests for drug approval.",
    code: `import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as stats

n_patients = 500
n_samples  = 10000
mu, sigma  = 10.0, 5.0   # mmHg

np.random.seed(42)
# Gamma source — skewed, non-normal
reductions = np.random.gamma(shape=2, scale=mu/2,
                             size=(n_samples, n_patients))
average_reductions = np.mean(reductions, axis=1)

plt.figure(figsize=(10, 6))
plt.hist(average_reductions, bins=50, density=True,
         alpha=0.6, color='purple', label='Average Reduction')

x = np.linspace(mu - 2, mu + 2, 1000)
plt.plot(x, stats.norm.pdf(x, mu, sigma / np.sqrt(n_patients)),
         'r-', lw=2, label='Theoretical Normal (CLT)')
plt.title('CLT in Healthcare: Blood Pressure Reduction')
plt.xlabel('Average Reduction (mmHg)')
plt.ylabel('Density')
plt.legend()
plt.show()`,
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
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: open ? COLOR : LIGHT, color: open ? "#fff" : COLOR, fontWeight: 600 }}>Lec 2</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{s.title}</span>
              </div>
              <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{open ? "▲" : "▼"}</span>
            </div>
            {open && (
              <div style={{ borderTop: `0.5px solid ${BORDER}` }}>
                <div style={{ padding: "10px 16px", background: "#F0F6FF", borderBottom: `0.5px solid ${BORDER}` }}>
                  <p style={{ margin: 0, fontSize: 12, color: "#1a3a6e", lineHeight: 1.7 }}>📝 {s.explanation}</p>
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

export default function Lecture2() {
  const [tab, setTab] = useState("summary");
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ borderLeft: `4px solid ${COLOR}`, paddingLeft: 14, marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px", color: "var(--color-text-primary)" }}>Lecture 2 — Statistics &amp; Probability</h2>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>Data Science Tools and Software · Alexandria University</p>
      </div>
      <TabBar tabs={[{ id: "summary", label: "📚 Summary & Explanations" }, { id: "mcq", label: "✏️ MCQ Quiz (25 Qs)" }, { id: "codes", label: "💻 Code Reference (11)" }]} active={tab} onSelect={setTab} />
      {tab === "summary" && <SummarySection />}
      {tab === "mcq" && <MCQSection />}
      {tab === "codes" && <CodesSection />}
    </div>
  );
}
