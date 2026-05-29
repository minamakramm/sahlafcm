# How to Add New Lectures / Content

Everything within a student’s instructional bound inside Sahla is statically driven directly through source-code JSON configuration arrays ensuring zero lag over Supabase connections directly. Here's exactly how to construct new curriculum manually:

## Step 1: Locate your Subject
Navigate to your active targeted database within:
`src/data/subjects/[department-slug]/index.js`
In the arrays exported here find your subject (or inject a new one using the identical data structure natively).

## Step 2: Push a new Index Pointer
Add your target pointer inside the nested `lectures` array identifying the structural label natively:
```js
{ number: 7, title: 'Introduction to Web3', titleAr: 'مقدمة للويب 3' }
```
### Crucial: Increment `lectureCount`
If `lectureCount` was 6 natively make sure you bump it to `7`. This dynamically scales the tracking array natively.

## Step 3: Copy The Safe Template
Copy `src/data/subjects/intelligent-systems/lecture-template.js` inside the directory to generate the new file path respectively:
`src/data/subjects/[department-slug]/[subject-slug]/lecture-07.js`

## Step 4: Map Your Content
Open the new file locally formatting bounds directly.
Customize your `explanation` content natively defining structures (e.g., arrays holding `text`, `code`, or `mermaid` diagram bounds).
Scale the `summary` arrays identifying the 4 tab parameters and safely injecting bilingual logic configurations natively inside (`titleAr` vs `title`).

## Step 5: Expand Exams
If you wish to scale exams locally access the mapped `exam.js` nested inside your root `subject-slug` structure natively appending `mcq` definitions identically matching structural ID values securely.

## Step 6: Validate & Deploy
Test natively over your local instance via `npm run dev`. Browse `/subjects/[your-slug]/lecture/7`. Ensure routing binds accurately with no visual regressions cleanly. Add, commit, and securely push directly to GitHub where Vercel automatically deploys your updates globally across Sahla safely.
