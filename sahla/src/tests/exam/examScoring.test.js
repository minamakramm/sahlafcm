import { describe, it, expect } from 'vitest'
import { calculateExamScore } from '../../lib/examScoring'

describe('examScoring', () => {
  const examMock = { mcqMarks: 50, writtenMarks: 50, passPercentage: 60 }
  const mcqMock = [
    { id: 'q1', answers: [{ id: 'a', isCorrect: true }, { id: 'b', isCorrect: false }] },
    { id: 'q2', answers: [{ id: 'a', isCorrect: false }, { id: 'b', isCorrect: true }] }
  ]

  it('All MCQ correct → mcqScore = exam.mcqMarks', () => {
    const userAnswers = [{ questionId: 'q1', answerId: 'a' }, { questionId: 'q2', answerId: 'b' }]
    const result = calculateExamScore(userAnswers, mcqMock, examMock)
    expect(result.mcqScore).toBe(50)
    expect(result.correctCount).toBe(2)
  })

  it('0 correct → mcqScore = 0', () => {
    const userAnswers = [{ questionId: 'q1', answerId: 'b' }, { questionId: 'q2', answerId: 'a' }]
    const result = calculateExamScore(userAnswers, mcqMock, examMock)
    expect(result.mcqScore).toBe(0)
    expect(result.correctCount).toBe(0)
  })

  it('50% correct → half of mcqMarks', () => {
    const userAnswers = [{ questionId: 'q1', answerId: 'a' }, { questionId: 'q2', answerId: 'a' }]
    const result = calculateExamScore(userAnswers, mcqMock, examMock)
    expect(result.mcqScore).toBe(25)
    expect(result.correctCount).toBe(1)
  })

  it('Empty userAnswers → 0', () => {
    const result = calculateExamScore([], mcqMock, examMock)
    expect(result.mcqScore).toBe(0)
  })

  it('passed = false when percentage < passPercentage', () => {
    const userAnswers = [{ questionId: 'q1', answerId: 'a' }, { questionId: 'q2', answerId: 'a' }]
    const result = calculateExamScore(userAnswers, mcqMock, examMock)
    // 25 total score / 100 possible = 25%
    expect(result.percentage).toBe(25)
    expect(result.passed).toBe(false)
  })
})
