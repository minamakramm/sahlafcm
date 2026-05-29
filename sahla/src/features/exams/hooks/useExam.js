import { useState, useEffect, useCallback, useMemo } from 'react'
import { getExamData, getActiveDepartments, getSubjectBySlug } from '@/features/home/utils/staticData'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import { calculateExamScore } from '@/lib/examScoring'
import { useAnalytics } from '@/hooks/useAnalytics'

function shuffleArray(array, seed) {
  const shuffled = [...array]
  // A simple seeded random function for stable shuffling
  let currentSeed = seed
  const random = () => {
    const x = Math.sin(currentSeed++) * 10000
    return x - Math.floor(x)
  }
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function useExamData(subjectSlug) {
  const { user, isAuthenticated } = useAuth()
  const [exam, setExam] = useState(null)
  const [subject, setSubject] = useState(null)
  const [bestAttempt, setBestAttempt] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true)

    const fetchExam = async () => {
      try {
        // Find subject across active departments
        const activeDepts = getActiveDepartments()
        let foundDeptSlug = null
        let foundSubject = null
        for (const dept of activeDepts) {
          const result = await getSubjectBySlug(dept.slug, subjectSlug)
          if (result) {
            foundDeptSlug = dept.slug
            foundSubject = result
            break
          }
        }

        if (cancelled) return
        if (!foundDeptSlug || !foundSubject) {
           setExam(null)
           setSubject(null)
           setIsLoading(false)
           return
        }
        
        setSubject(foundSubject)

        const examData = await getExamData(foundDeptSlug, subjectSlug)
        
        if (cancelled) return
        
        if (examData) {
          // Shuffle MCQ answers based on question id hash to be stable per question
          const shuffledMcq = examData.mcq.map(q => {
            const hash = q.id.split('').reduce((a, b) => {
              a = ((a << 5) - a) + b.charCodeAt(0)
              return a & a
            }, 0)
            return {
              ...q,
              answers: shuffleArray(q.answers, hash)
            }
          })
          setExam({ ...examData, mcq: shuffledMcq })
        } else {
          setExam(null)
        }

        if (isAuthenticated && user?.id && examData) {
          const { data } = await supabase
            .from('exam_attempts')
            .select('*')
            .eq('user_id', user.id)
            .eq('subject_id', examData.subjectId)
            .order('score', { ascending: false })
            .limit(1)
            .maybeSingle()

          if (!cancelled && data) {
            setBestAttempt(data)
          }
        }
      } catch (err) {
        console.warn('Error fetching exam:', err)
        if (!cancelled) setExam(null)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    fetchExam()

    return () => { cancelled = true }
  }, [subjectSlug, user?.id, isAuthenticated])

  return { exam, subject, isLoading, bestAttempt }
}

export function useExamState(subjectSlug, exam) {
  const { user, isAuthenticated } = useAuth()
  const { track, EVENTS } = useAnalytics()
  const storageKey = `sahla-exam-${subjectSlug}`
  
  const loadInitialState = useCallback(() => {
    try {
      const stored = sessionStorage.getItem(storageKey)
      if (stored) {
        return JSON.parse(stored)
      }
    } catch {
      // ignore
    }
    return {
      state: 'idle', // idle -> started -> submitted -> results
      mcqAnswers: [], // { questionId, answerId }
      writtenAnswers: [], // { questionId, answer }
      startedAt: null,
      scoreInfo: null,
      timeSpentMinutes: 0
    }
  }, [storageKey])

  const [examState, setExamState] = useState(loadInitialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sync state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(examState))
  }, [examState, storageKey])

  const startExam = useCallback(() => {
    setExamState({
      state: 'started',
      mcqAnswers: [],
      writtenAnswers: [],
      startedAt: new Date().toISOString(),
      scoreInfo: null,
      timeSpentMinutes: 0
    })
  }, [])

  const retryExam = useCallback(() => {
    sessionStorage.removeItem(storageKey)
    startExam()
  }, [storageKey, startExam])

  const recordMCQAnswer = useCallback((questionId, answerId) => {
    setExamState(prev => {
      const existing = prev.mcqAnswers.filter(a => a.questionId !== questionId)
      return {
        ...prev,
        mcqAnswers: [...existing, { questionId, answerId }]
      }
    })
  }, [])

  const recordWrittenAnswer = useCallback((questionId, answer) => {
    setExamState(prev => {
      const existing = prev.writtenAnswers.filter(a => a.questionId !== questionId)
      return {
        ...prev,
        writtenAnswers: [...existing, { questionId, answer }]
      }
    })
  }, [])

  const submitExam = useCallback(async () => {
    if (!exam) return

    setIsSubmitting(true)
    try {
      const scoreInfo = calculateExamScore(examState.mcqAnswers, exam.mcq, exam)
      const timeSpentMinutes = Math.round((new Date() - new Date(examState.startedAt)) / 60000)

      if (isAuthenticated && user?.id) {
        await supabase.from('exam_attempts').insert({
          user_id: user.id,
          subject_id: exam.subjectId,
          score: Math.round(scoreInfo.totalScore),
          percentage: scoreInfo.percentage,
          passed: scoreInfo.passed,
          mcq_score: scoreInfo.mcqScore,
          written_score: scoreInfo.writtenScore,
          mcq_answers: examState.mcqAnswers,
          written_answers: examState.writtenAnswers,
          time_taken_minutes: timeSpentMinutes,
          total_questions: exam.mcq.length,
          correct_answers: scoreInfo.correctCount,
          wrong_answers: exam.mcq.length - scoreInfo.correctCount
        })
      }
      
      // Tracking
      track(EVENTS.EXAM_SUBMIT, {
        subjectSlug,
        score: scoreInfo.totalScore,
        percentage: scoreInfo.percentage,
        passed: scoreInfo.passed,
        timeSpentMinutes
      })

      setExamState(prev => ({
        ...prev,
        state: 'results',
        scoreInfo,
        timeSpentMinutes
      }))
    } catch (err) {
      console.warn('Error submitting exam:', err)
      const scoreInfo = calculateExamScore(examState.mcqAnswers, exam.mcq, exam)
      setExamState(prev => ({
        ...prev,
        state: 'results',
        scoreInfo,
        timeSpentMinutes: Math.round((new Date() - new Date(prev.startedAt)) / 60000)
      }))
    } finally {
      setIsSubmitting(false)
    }
  }, [exam, examState, isAuthenticated, user?.id, storageKey, subjectSlug, track, EVENTS.EXAM_SUBMIT])

  return { 
    examState, 
    startExam, 
    retryExam,
    recordMCQAnswer, 
    recordWrittenAnswer, 
    submitExam, 
    isSubmitting 
  }
}
