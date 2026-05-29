export const LECTURE = {
  subjectId: 'ds-tools',
  number: 2,
  title: 'Lecture 2: Statistics & Probability',
  titleAr: 'المحاضرة 2: الإحصاء والاحتمالات',

  explanation: [
    {
      type: 'text',
      content: {
        body: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 1. What Is Statistics?</h2>
<p>Statistics is the mathematics of understanding data — collecting, organizing, analyzing and interpreting it to find patterns and make decisions.</p>
<ul>
  <li><strong>Descriptive Statistics:</strong> Summarises and describes the features of a dataset. Transforms raw data into useful information. Answers: what does my data look like?</li>
  <li><strong>Inferential Statistics:</strong> Uses a small sample to draw conclusions about a larger population. Helps predict and make decisions. Answers: what can I infer or predict?</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> Statistics is the backbone of data science — from cleaning data and building visualizations to training predictive models.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> 2. Measures of Central Tendency</h2>
<p>These measures describe where the center of the data lies. Choosing the right one depends on whether your data contains outliers.</p>
<ul>
  <li><strong>Mean (Average):</strong> Sum of all values divided by count. Example: [2,4,6,8,10] → mean = 6. Most common but highly sensitive to outliers.</li>
  <li><strong>Weighted Mean:</strong> Each value is multiplied by a weight before averaging. Used when some observations are more important than others (e.g., murder rate weighted by population).</li>
  <li><strong>Trimmed Mean:</strong> Remove a fixed percentage of extreme values from both ends, then compute the mean. Example: 20% trimmed mean on 10 values removes 2 from each end.</li>
  <li><strong>Median:</strong> The middle value when data is sorted. Half of values are above, half below. Robust to outliers — preferred for skewed data.</li>
  <li><strong>Mode:</strong> The most frequently occurring value. Works for categorical data too. Example: [2,4,4,6,8,10] → mode = 4.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> Use the median (or trimmed mean) when your data has outliers, because the plain mean gets pulled toward extreme values.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21.3 15.3-6-6-8.5 8.5 6 6 8.5-8.5Z"/><path d="m8.5 12.2 1.4 1.4"/><path d="m11.3 9.4 1.4 1.4"/><path d="m14.1 6.6 1.4 1.4"/><path d="m16.9 3.8 1.4 1.4"/></svg> 3. Measures of Variability (Dispersion)</h2>
<p>These measures describe how spread out the data is around the center. High variability means data is widely scattered; low variability means it's clustered tightly.</p>
<ul>
  <li><strong>Range:</strong> Max − Min. Simple but heavily influenced by outliers. Example: [2,4,6,8,10] → range = 8.</li>
  <li><strong>Variance (S²):</strong> Average of squared differences from the mean: S² = Σ(xᵢ−x̄)² / (n−1). Uses n−1 for sample, n for population.</li>
  <li><strong>Standard Deviation (SD):</strong> √Variance. Expressed in the same units as the data — much easier to interpret than variance.</li>
  <li><strong>IQR (Interquartile Range):</strong> Q3 − Q1. Spread of the middle 50% of data. Not affected by extreme values.</li>
  <li><strong>MAD (Median Absolute Deviation):</strong> Median of |xᵢ − median|. The most robust estimate — unaffected by outliers, just like the median itself.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> Variance and SD are the most widely reported but both are sensitive to outliers. Prefer MAD or IQR when your data is skewed or has extreme values.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/></svg> 4. Random Variables & Probability Distributions</h2>
<p>A random variable takes values that are outcomes of a random phenomenon. Distributions describe the probability of each possible value.</p>
<ul>
  <li><strong>Discrete RV + PMF:</strong> Takes countable values (0,1,2…). The Probability Mass Function gives P(X = x) exactly.</li>
  <li><strong>Continuous RV + PDF:</strong> Takes any value in a range. The Probability Density Function describes relative likelihood — area under curve = probability.</li>
  <li><strong>CDF:</strong> Cumulative Distribution Function: F(x) = P(X ≤ x). Applies to both discrete and continuous.</li>
  <li><strong>Binomial Distribution:</strong> # successes in n independent Bernoulli trials, each with probability p. Formula: C(n,x)·pˣ·qⁿ⁻ˣ for x = 0,1,…,n.</li>
  <li><strong>Poisson Distribution:</strong> # events in a fixed time/space interval at constant average rate λ. Formula: e⁻λ·λˣ / x!</li>
  <li><strong>Exponential Distribution:</strong> Time between events in a Poisson process. Formula: (1/θ)·e^(−x/θ) for x > 0.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> Knowing which distribution your data follows helps you choose the right statistical test and build better predictive models.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg> 5. Normal Distribution</h2>
<p>The famous bell-shaped curve. It appears naturally in many real-world phenomena and is the foundation of most statistical tests and machine learning algorithms.</p>
<ul>
  <li><strong>Symmetric about the mean:</strong> Mean = Median = Mode for a perfect normal distribution. The curve is identical on both sides.</li>
  <li><strong>68–95–99.7 Rule:</strong> 68% of data within 1 SD, 95% within 2 SD, 99.7% within 3 SD of the mean.</li>
  <li><strong>Z-score (Standardization):</strong> Z = (x − μ) / σ. Converts any normal distribution to Standard Normal N(0,1). Allows comparison across different scales.</li>
  <li><strong>Why it matters for ML:</strong> Most ML models perform best with normally distributed features. Non-normal data may need transformation before modeling.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> If your data is not normal, apply a transformation (e.g., log transform) to make it approximately normal before using parametric tests or models.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> 6. Testing for Normality</h2>
<p>Before applying methods that assume normality (like linear regression or t-tests), verify whether your data actually follows a normal distribution using these three approaches.</p>
<ul>
  <li><strong>Histogram (Graphical):</strong> Roughly bell-shaped → suggests normality. Right/left skewed or multimodal → not normal.</li>
  <li><strong>QQ-Plot (Graphical):</strong> Points on the 45° diagonal line → normal. Curved pattern → skewed. Tails flaring outward → heavy tails (leptokurtic).</li>
  <li><strong>Box Plot (Graphical):</strong> Symmetric box with no extreme outliers → suggests normality. Long whiskers or many outliers → non-normal.</li>
  <li><strong>Skewness (Numerical):</strong> 0 = symmetric (normal). Positive = long right tail. Negative = long left tail.</li>
  <li><strong>Kurtosis (Numerical):</strong> 3 = normal (mesokurtic). > 3 = leptokurtic (sharp peak, fat tails). < 3 = platykurtic (flat peak).</li>
  <li><strong>Shapiro-Wilk Test (Statistical):</strong> p > 0.05 → assume normality (fail to reject H₀). p < 0.05 → data NOT normal (reject H₀).</li>
  <li><strong>Kolmogorov-Smirnov Test (Statistical):</strong> Compares empirical CDF to theoretical normal CDF. p > 0.05 → normal. p < 0.05 → not normal.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> Always use at least two methods (e.g., QQ-plot + Shapiro-Wilk) before drawing conclusions about normality.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m16 16 3-8 3 8c-.87.62-1.9.99-3 .99s-2.13-.37-3-.99Z"/><path d="m2 16 3-8 3 8c-.87.62-1.9.99-3 .99s-2.13-.37-3-.99Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg> 7. Hypothesis Testing</h2>
<p>A formal statistical framework for deciding whether an observed pattern in data is real (statistically significant) or just due to random chance.</p>
<ul>
  <li><strong>H₀ (Null Hypothesis):</strong> The default assumption — no effect, no difference, no relationship exists.</li>
  <li><strong>Hₐ (Alternative Hypothesis):</strong> What you are trying to prove — there IS an effect, difference, or relationship.</li>
  <li><strong>Significance Level (α):</strong> Threshold for decision. Commonly 0.05 (5%) or 0.01 (1%). Represents tolerable false-positive rate.</li>
  <li><strong>p-value:</strong> Probability of observing data at least as extreme as ours IF H₀ were true. p < α → reject H₀. p ≥ α → fail to reject H₀.</li>
  <li><strong>Test Statistic:</strong> A number computed from the sample that measures how far the data is from what H₀ predicts (e.g., t-score, z-score).</li>
  <li><strong>Paired t-test:</strong> Used when the same subjects are measured twice (before/after). More powerful than independent t-test because it removes individual variability.</li>
</ul>
<p class="note"><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.35 4.31 3.31 5.3a2 2 0 0 1 .69 1.7V18h6v-2a2 2 0 0 1 .69-1.7c1.96-.99 3.31-2.98 3.31-5.3a7 7 0 0 0-7-7z"/></svg> Rejecting H₀ does NOT prove Hₐ is true — it only means there is sufficient statistical evidence against H₀.</p>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m19 9-5 5-4-4-3 3"/><path d="M3 3v18h18"/></svg> 8. Central Limit Theorem (CLT)</h2>
<p>The most powerful result in statistics: no matter what shape the original distribution has, the distribution of sample means becomes normal as sample size grows — enabling inference even on non-normal data.</p>
<ul>
  <li><strong>Formal Statement:</strong> If X₁,X₂,…,Xₙ are i.i.d. with mean μ and variance σ², then X̄ ~ N(μ, σ²/n) as n → ∞.</li>
  <li><strong>Variance shrinks with n:</strong> As sample size increases, the variance of the mean (σ²/n) decreases — estimates become more precise and the distribution tightens.</li>
  <li><strong>Finance: Portfolio Returns:</strong> Averaging many asset returns produces a normal distribution regardless of individual asset distributions — underpins VaR calculations.</li>
  <li><strong>Media: Engagement Metrics:</strong> Average session time across thousands of users follows a normal distribution even if individual times are exponentially distributed.</li>
  <li><strong>Healthcare: Drug Trials:</strong> Average drug effect across many patients is approximately normal — enables t-tests and confidence intervals for regulatory approval.</li>
</ul>

<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Python Code Implementation</h2>

<h3>1. Descriptive Statistics — NumPy</h3>
<p>Calculates all core descriptive statistics on a random dataset. Use ddof=1 in np.var() and np.std() when working with a sample (not the full population) to get the unbiased (sample) estimate. The scipy.stats.mode() function finds the most frequent value.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
print(f"Standard Deviation: {std_dev_value}")
</code></pre>
</div>

<h3>2. Mean, Trimmed Mean & Median — Pandas / SciPy</h3>
<p>Three location estimates on real state population data. trim_mean(data, 0.1) drops the bottom 10% and top 10% before averaging — making it robust to outliers like California's huge population. The weighted mean weights each murder rate by state population, giving populous states more influence.</p>
<div class="code-block">
<pre><code class="language-python">
import pandas as pd
import numpy as np
from scipy.stats import trim_mean

state = pd.read_csv('state.csv')

state['Population'].mean()                              # 6,162,876
trim_mean(state['Population'], 0.1)                     # 4,783,697 (drops 10% each end)
state['Population'].median()                            # 4,436,370
np.average(state['Murder.Rate'], weights=state['Population'])  # 4.445834
</code></pre>
</div>

<h3>3. Variability Estimates — Pandas / Statsmodels</h3>
<p>Three variability estimates on state populations. std() is most common but outlier-sensitive. IQR (Q3−Q1) covers the middle 50% spread and ignores extremes. MAD from statsmodels is the most robust estimate — computed as Median(|xᵢ − median|) — completely unaffected by outliers.</p>
<div class="code-block">
<pre><code class="language-python">
# Standard deviation — sensitive to outliers
state['Population'].std()                               # 6,848,235

# IQR = Q3 − Q1 (middle 50% of data)
state['Population'].quantile(0.75) - \\
state['Population'].quantile(0.25)                      # 4,847,308

# MAD — most robust, not influenced by extreme values
from statsmodels.robust import scale as robust
robust.mad(state['Population'])                         # 3,849,870
</code></pre>
</div>

<h3>4. Histogram — Normality Check</h3>
<p>A histogram of 1000 log-normally distributed values. Since this data is right-skewed rather than bell-shaped, we visually conclude it is NOT normally distributed. A normal histogram should peak in the middle and taper symmetrically on both sides with no long tail.</p>
<div class="code-block">
<pre><code class="language-python">
import math
import numpy as np
from scipy.stats import lognorm
import matplotlib.pyplot as plt

np.random.seed(1)
lognorm_dataset = lognorm.rvs(s=.5, scale=math.exp(1), size=1000)

plt.hist(lognorm_dataset, edgecolor='black', bins=20)
plt.show()
# Right-skewed histogram → NOT normally distributed
</code></pre>
</div>

<h3>5. QQ-Plot — Normality Check</h3>
<p>A Q-Q (Quantile-Quantile) plot compares quantiles of your data to theoretical normal quantiles. Points on the 45° line → normal. Curved pattern → skewed data. Points flaring at both ends → heavy tails. The line='45' parameter draws the reference line.</p>
<div class="code-block">
<pre><code class="language-python">
import statsmodels.api as sm
import matplotlib.pyplot as plt

fig = sm.qqplot(lognorm_dataset, line='45')
plt.show()

# ✅ Points on the diagonal  → normally distributed
# ❌ Curved away             → skewed / non-normal
# ❌ Tails flare outward     → heavy tails (leptokurtic)
</code></pre>
</div>

<h3>6. Shapiro-Wilk Test</h3>
<p>A formal statistical normality test. H₀: data IS normally distributed. If p < 0.05 we reject H₀. The result below shows p ≈ 3.88×10⁻²⁹ — astronomically small, confirming the log-normal data is definitely not normal.</p>
<div class="code-block">
<pre><code class="language-python">
import math, numpy as np
from scipy.stats import shapiro, lognorm

np.random.seed(1)
lognorm_dataset = lognorm.rvs(s=.5, scale=math.exp(1), size=1000)

result = shapiro(lognorm_dataset)
print(result)
# ShapiroResult(statistic=0.857, pvalue=3.88e-29)

# p < 0.05  →  reject H₀  →  NOT normally distributed
# p > 0.05  →  fail to reject H₀  →  assume normality
</code></pre>
</div>

<h3>7. Kolmogorov-Smirnov Test</h3>
<p>The KS test compares the empirical CDF of your data to the theoretical CDF of a normal distribution. A p-value of 0.0 means there is essentially zero probability the data came from a normal distribution — further confirming the log-normal result.</p>
<div class="code-block">
<pre><code class="language-python">
import math, numpy as np
from scipy.stats import kstest, lognorm

np.random.seed(1)
lognorm_dataset = lognorm.rvs(s=.5, scale=math.exp(1), size=1000)

result = kstest(lognorm_dataset, 'norm')
print(result)
# KstestResult(statistic=0.841, pvalue=0.0, ...)

# p < 0.05  →  reject H₀  →  NOT normally distributed
</code></pre>
</div>

<h3>8. Hypothesis Testing — Paired t-test</h3>
<p>A paired t-test compares two related measurements (before and after) on the same subjects. Here we test if a drug significantly lowers blood pressure. The box plots visualise the before/after distributions. Since p < 0.05, we reject H₀ and conclude the drug has a statistically significant effect.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
    print("Fail to reject H0: No significant effect found.")
</code></pre>
</div>

<h3>9. CLT — Finance: Portfolio Returns</h3>
<p>Simulates 10,000 portfolios each holding 1,000 assets. The individual asset returns are drawn from a normal distribution, but even if they weren't (see next examples), the average would still converge to normal by CLT. The red curve shows the theoretical N(μ, σ²/n) prediction — it matches the histogram perfectly.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
plt.show()
</code></pre>
</div>

<h3>10. CLT — Media: Audience Engagement</h3>
<p>Individual user session times follow an exponential distribution (heavily right-skewed, definitely non-normal). Yet when we average across 1,000 users, the distribution of averages converges to a normal distribution — exactly as CLT predicts regardless of the source distribution's shape.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
plt.show()
</code></pre>
</div>

<h3>11. CLT — Healthcare: Drug Efficacy</h3>
<p>Blood pressure reductions per patient are drawn from a gamma distribution (skewed, strictly positive values — realistic for medical measurements). Averaging across 500 patients still yields a near-normal distribution, enabling the researchers to construct valid confidence intervals and perform t-tests for drug approval.</p>
<div class="code-block">
<pre><code class="language-python">
import numpy as np
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
plt.show()
</code></pre>
</div>
        `,
        bodyAr: `
<h2><svg class="lecture-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> 1. ما هو الإحصاء؟</h2>
<p>الإحصاء هو رياضيات فهم البيانات - جمعها وتنظيمها وتحليلها وتفسيرها للعثور على الأنماط واتخاذ القرارات.</p>
<ul>
  <li><strong>الإحصاء الوصفي:</strong> يلخص ويصف ميزات مجموعة البيانات.</li>
  <li><strong>الإحصاء الاستدلالي:</strong> يستخدم عينة صغيرة لاستخلاص استنتاجات حول مجتمع أكبر.</li>
</ul>
        `
      }
    }
  ],

  summary: {
    points: [
      'Statistics involves collecting, organizing, and interpreting data.',
      'Measures of central tendency include Mean, Median (robust), and Mode.',
      'Variability is measured by Range, Variance, SD, IQR, and MAD (robust).',
      'Probability distributions (Binomial, Poisson, Normal) model random phenomena.',
      'Normal Distribution is symmetric and follows the 68–95–99.7 rule.',
      'Normality can be tested using Histogram, QQ-Plot, and Shapiro-Wilk test.',
      'Hypothesis testing decides if patterns are statistically significant using p-values.',
      'Central Limit Theorem states sample means converge to a normal distribution.'
    ],
    pointsAr: [
      'يتضمن الإحصاء جمع البيانات وتنظيمها وتفسيرها.',
      'تشمل مقاييس النزعة المركزية المتوسط والوسيط (القوي) والمنوال.',
      'يتم قياس التباين بواسطة المدى والتباين والانحراف المعياري و IQR و MAD.',
      'التوزيع الطبيعي متماثل ويتبع قاعدة 68-95-99.7.',
      'يمكن اختبار التوزيع الطبيعي باستخدام المدرج التكراري ومخطط QQ واختبار Shapiro-Wilk.'
    ]
  },

  mcq: [
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
      question: 'Which measure of central tendency is most sensitive to extreme values (outliers)?',
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
      id: 'ds-l2-q4',
      question: 'What is the median of the dataset [2, 4, 6, 8, 10]?',
      answers: [
        { id: 'a', text: '4', isCorrect: false },
        { id: 'b', text: '5', isCorrect: false },
        { id: 'c', text: '6', isCorrect: true },
        { id: 'd', text: '7', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q5',
      question: 'Standard deviation is defined as:',
      answers: [
        { id: 'a', text: 'The square of the variance', isCorrect: false },
        { id: 'b', text: 'The square root of the variance', isCorrect: true },
        { id: 'c', text: 'The mean of absolute deviations', isCorrect: false },
        { id: 'd', text: 'The sum of squared differences', isCorrect: false }
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
      id: 'ds-l2-q7',
      question: 'For the dataset [2, 4, 6, 8, 10], the range is:',
      answers: [
        { id: 'a', text: '5', isCorrect: false },
        { id: 'b', text: '6', isCorrect: false },
        { id: 'c', text: '8', isCorrect: true },
        { id: 'd', text: '10', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q8',
      question: 'A Probability Mass Function (PMF) applies to which type of random variable?',
      answers: [
        { id: 'a', text: 'Continuous', isCorrect: false },
        { id: 'b', text: 'Discrete', isCorrect: true },
        { id: 'c', text: 'Both', isCorrect: false },
        { id: 'd', text: 'Neither', isCorrect: false }
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
      id: 'ds-l2-q11',
      question: 'What does standardizing a data point produce?',
      answers: [
        { id: 'a', text: 'A percentile', isCorrect: false },
        { id: 'b', text: 'A z-score', isCorrect: true },
        { id: 'c', text: 'A p-value', isCorrect: false },
        { id: 'd', text: 'A confidence interval', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q12',
      question: 'A standard normal distribution has:',
      answers: [
        { id: 'a', text: 'Mean=1, SD=0', isCorrect: false },
        { id: 'b', text: 'Mean=0, SD=1', isCorrect: true },
        { id: 'c', text: 'Mean=0.5, SD=0.5', isCorrect: false },
        { id: 'd', text: 'Mean=1, SD=1', isCorrect: false }
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
      id: 'ds-l2-q14',
      question: 'Curved patterns in a QQ-plot indicate:',
      answers: [
        { id: 'a', text: 'Normal distribution', isCorrect: false },
        { id: 'b', text: 'Skewed data or non-normal distributions', isCorrect: true },
        { id: 'c', text: 'Light tails', isCorrect: false },
        { id: 'd', text: 'No correlation', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q15',
      question: 'Which Python function creates a QQ-plot?',
      answers: [
        { id: 'a', text: 'plt.qqplot()', isCorrect: false },
        { id: 'b', text: 'sm.qqplot()', isCorrect: true },
        { id: 'c', text: 'sns.qqplot()', isCorrect: false },
        { id: 'd', text: 'stats.qqplot()', isCorrect: false }
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
      id: 'ds-l2-q17',
      question: 'Positive skewness means the data has a:',
      answers: [
        { id: 'a', text: 'Longer left tail', isCorrect: false },
        { id: 'b', text: 'Longer right tail', isCorrect: true },
        { id: 'c', text: 'Symmetric shape', isCorrect: false },
        { id: 'd', text: 'Flat distribution', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q18',
      question: 'Kurtosis of a normal (mesokurtic) distribution equals:',
      answers: [
        { id: 'a', text: '0', isCorrect: false },
        { id: 'b', text: '1', isCorrect: false },
        { id: 'c', text: '2', isCorrect: false },
        { id: 'd', text: '3', isCorrect: true }
      ]
    },
    {
      id: 'ds-l2-q19',
      question: 'Leptokurtic distribution has kurtosis:',
      answers: [
        { id: 'a', text: '= 3', isCorrect: false },
        { id: 'b', text: '< 3', isCorrect: false },
        { id: 'c', text: '> 3', isCorrect: true },
        { id: 'd', text: '= 0', isCorrect: false }
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
    {
      id: 'ds-l2-q22',
      question: 'In CLT, Rportfolio ~ N(μ, σ²/n) — as n increases, the variance of the mean:',
      answers: [
        { id: 'a', text: 'Increases', isCorrect: false },
        { id: 'b', text: 'Decreases', isCorrect: true },
        { id: 'c', text: 'Stays the same', isCorrect: false },
        { id: 'd', text: 'Doubles', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q23',
      question: 'Which Python library provides the trim_mean function?',
      answers: [
        { id: 'a', text: 'numpy', isCorrect: false },
        { id: 'b', text: 'pandas', isCorrect: false },
        { id: 'c', text: 'scipy.stats', isCorrect: true },
        { id: 'd', text: 'statsmodels', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q24',
      question: 'The weighted mean uses np.average() with which parameter?',
      answers: [
        { id: 'a', text: 'weights', isCorrect: true },
        { id: 'b', text: 'w', isCorrect: false },
        { id: 'c', text: 'wt', isCorrect: false },
        { id: 'd', text: 'scale', isCorrect: false }
      ]
    },
    {
      id: 'ds-l2-q25',
      question: 'A 95% confidence interval uses z-value:',
      answers: [
        { id: 'a', text: '1.645', isCorrect: false },
        { id: 'b', text: '1.96', isCorrect: true },
        { id: 'c', text: '2.576', isCorrect: false },
        { id: 'd', text: '1.282', isCorrect: false }
      ]
    }
  ]
};
