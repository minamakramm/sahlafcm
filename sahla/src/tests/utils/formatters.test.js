import { describe, it, expect } from 'vitest'
import { formatDuration, truncateText, formatScore } from '../../lib/formatters'

describe('Formatters', () => {
  it('formatDuration converts seconds to string properly', () => {
    expect(formatDuration(3600)).toBe('1h 0m')
    expect(formatDuration(3660)).toBe('1h 1m')
    expect(formatDuration(60)).toBe('1m')
    expect(formatDuration(0)).toBe('0m')
    expect(formatDuration(-1)).toBe('0m')
  })

  it('truncateText bounds length and adds ellipses', () => {
    expect(truncateText('Hello world', 5)).toBe('Hello...')
    expect(truncateText('Hi', 5)).toBe('Hi')
    expect(truncateText('', 5)).toBe('')
  })

  it('formatScore formats percentage safely', () => {
    expect(formatScore(1, 4)).toBe('25%')
    expect(formatScore(0, 4)).toBe('0%')
    expect(formatScore(4, 0)).toBe('0%') // Handles divided by zero natively
  })
})
