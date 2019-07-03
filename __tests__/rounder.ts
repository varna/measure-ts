import rounder from '../src/rounder'

describe('rounder.ts', () => {
  it('should round 1 as 1 by default', () => {
    const round = rounder()
    const rounded = round(1)
    expect(rounded).toBe(1)
  })

  it('should round 1.1 as 1 by default', () => {
    const round = rounder()
    const rounded = round(1.1)
    expect(rounded).toBe(1)
  })

  it('should round 1.5 as 2 by default', () => {
    const round = rounder()
    const rounded = round(1.5)
    expect(rounded).toBe(2)
  })

  it('should round 1 as 1 by default', () => {
    const round = rounder()
    const rounded = round(1)
    expect(rounded).toBe(1)
  })

  it('should round 1.1 as 1 by default', () => {
    const round = rounder()
    const rounded = round(1.1)
    expect(rounded).toBe(1)
  })

  it('should round down with Math.floor', () => {
    const round = rounder(undefined, Math.floor)
    const rounded = round(1.9)
    expect(rounded).toBe(1)
  })

  it('should fix fractional number (0.09999999999999998)', () => {
    const round = rounder(1)
    const rounded = round(0.3 - 0.2)
    expect(rounded).toBe(0.1)
  })

  it('should not round 0.9 with e1', () => {
    const round = rounder(1)
    const rounded = round(0.9)
    expect(rounded).toBe(0.9)
  })

  it('should round 0.99 with e1', () => {
    const round = rounder(1)
    const rounded = round(0.99)
    expect(rounded).toBe(1)
  })
})
