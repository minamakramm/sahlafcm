import { DEPARTMENTS } from '@/data/departments'

export const getAllDepartments = () => DEPARTMENTS
export const getActiveDepartments = () => DEPARTMENTS.filter(d => d.isActive)
export const getDepartmentBySlug = (slug) => DEPARTMENTS.find(d => d.slug === slug)

/**
 * Dynamic imports for subject indexes (code splitting)
 */
export const getSubjectIndex = async (departmentSlug) => {
  const m = await import(`../../../data/subjects/${departmentSlug}/index.js`)
  return m.SUBJECT_INDEX
}

export const getSubjectBySlug = async (departmentSlug, subjectSlug) => {
  const index = await getSubjectIndex(departmentSlug)
  return index.subjects?.find(s => s.slug === subjectSlug) ?? null
}

/**
 * For lecture page navigation — find prev/next lecture
 */
export const getAdjacentLectures = async (departmentSlug, subjectSlug, currentNumber) => {
  const subject = await getSubjectBySlug(departmentSlug, subjectSlug)
  if (!subject) return { prev: null, next: null }
  const lectures = subject.lectures
  const idx = lectures.findIndex(l => String(l.number) === String(currentNumber))
  return {
    prev: idx > 0 ? lectures[idx - 1] : null,
    next: idx < lectures.length - 1 ? lectures[idx + 1] : null,
  }
}

/**
 * Dynamic import of a single lecture file
 */
export const getLectureData = async (departmentSlug, subjectSlug, lectureNumber) => {
  const num = String(lectureNumber).padStart(2, '0')
  const m = await import(
    `../../../data/subjects/${departmentSlug}/${subjectSlug}/lecture-${num}.js`
  )
  return m.LECTURE
}

export const getExamData = async (departmentSlug, subjectSlug) => {
  const m = await import(
    `../../../data/subjects/${departmentSlug}/${subjectSlug}/exam.js`
  )
  return m.EXAM
}

export const getCheatsheetData = async (departmentSlug, subjectSlug) => {
  const m = await import(
    `../../../data/subjects/${departmentSlug}/${subjectSlug}/cheatsheet.js`
  )
  return m.CHEATSHEET
}

/**
 * Search subjects and lectures across all active departments
 */
export const searchContent = async (query) => {
  if (!query || query.length < 2) return []
  const q = query.toLowerCase()
  const results = []
  for (const dept of getActiveDepartments()) {
    try {
      const index = await getSubjectIndex(dept.slug)
      if (index.comingSoon) continue
      for (const subject of index.subjects) {
        if (subject.name.toLowerCase().includes(q) || subject.nameAr?.includes(query)) {
          results.push({ type: 'subject', subject, departmentSlug: dept.slug })
        }
        for (const lecture of subject.lectures) {
          if (lecture.title.toLowerCase().includes(q) || lecture.titleAr?.includes(query)) {
            results.push({ type: 'lecture', subject, lecture, departmentSlug: dept.slug })
          }
        }
      }
    } catch (e) {
      console.warn(`[staticData] Failed to load index for ${dept.slug}`, e)
    }
  }
  return results.slice(0, 10)
}
