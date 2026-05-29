/**
 * Calculate MCQ score for an exam.
 * @param {Array} userAnswers - [{ questionId, answerId }]
 * @param {Array} examMCQ - exam.mcq from static data (includes isCorrect on answers)
 * @param {Object} exam - { mcqMarks, writtenMarks, passPercentage }
 * @returns {{ mcqScore, writtenScore, totalScore, percentage, passed, correctCount, totalMCQ }}
 */
export function calculateExamScore(userAnswers, examMCQ, exam) {
  const totalMCQ = examMCQ.length
  if (totalMCQ === 0) {
    return { mcqScore: 0, writtenScore: 0, totalScore: 0, percentage: 0, passed: false, correctCount: 0, totalMCQ: 0 }
  }

  let correctCount = 0
  for (const answer of userAnswers) {
    const question = examMCQ.find(q => q.id === answer.questionId)
    if (!question) continue
    const correctAnswer = question.answers.find(a => a.isCorrect)
    if (correctAnswer?.id === answer.answerId) correctCount++
  }

  const mcqMarks = exam.mcqMarks ?? 100
  const writtenMarks = exam.writtenMarks ?? 0
  const passPercentage = exam.passPercentage ?? 50

  const mcqScore = Math.round((correctCount / totalMCQ) * mcqMarks)
  const writtenScore = 0  // written answers need manual grading
  const totalScore = mcqScore + writtenScore
  const totalPossible = mcqMarks + writtenMarks
  const percentage = Math.round((totalScore / totalPossible) * 100)
  const passed = percentage >= passPercentage

  return { 
    mcqScore, 
    writtenScore, 
    totalScore, 
    percentage, 
    passed, 
    correctCount, 
    totalMCQ,
    mcqPossible: mcqMarks,
    writtenPossible: writtenMarks
  }
}
