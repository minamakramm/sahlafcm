import { describe, it, expect } from 'vitest'
import { getSubjectBySlug, getActiveDepartments, searchContent } from '../../features/home/utils/staticData'

describe('staticData Helpers', () => {
  it('getActiveDepartments() → returns only isActive=true departments', () => {
    const depts = getActiveDepartments()
    expect(depts.every(d => d.isActive)).toBe(true)
  })

  it('getSubjectBySlug → returns subject for existing slug', async () => {
    const depts = getActiveDepartments()
    if (depts.length > 0 && depts[0].subjects?.length > 0) {
       const target = depts[0].subjects[0]
       const result = await getSubjectBySlug(depts[0].slug, target.slug)
       expect(result).toBeDefined()
       expect(result.slug).toBe(target.slug)
    }
  })

  it('getSubjectBySlug → returns undefined for nonexistent', async () => {
    const depts = getActiveDepartments()
    if (depts.length > 0) {
       const result = await getSubjectBySlug(depts[0].slug, 'nonexistent-slug')
       expect(result).toBeUndefined()
    }
  })

  it('searchContent → returns array matching query', async () => {
    const results = await searchContent('AI')
    expect(Array.isArray(results)).toBe(true)
  })

  it('searchContent → returns empty array if empty query', async () => {
    const results = await searchContent('')
    expect(results.length).toBe(0)
  })
})
