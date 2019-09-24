import { measureFrom } from '../src'

describe('Rounding e2', () => {
  const selector = measureFrom('m', 'cm')

  test('1.11', () => expect(String(selector(1.11))).toBe('1.11 m'))
  test('1.111', () => expect(String(selector(1.111))).toBe('1.11 m'))
  test('5.55', () => expect(String(selector(5.55))).toBe('5.55 m'))
  test('5.555', () => expect(String(selector(5.555))).toBe('5.56 m'))
  test('9.99', () => expect(String(selector(9.99))).toBe('9.99 m'))
  test('9.999', () => expect(String(selector(9.999))).toBe('10 m'))
  test('0.001', () => expect(String(selector(0.001))).toBe('0.1 cm'))
  test('0.0001', () => expect(String(selector(0.0001))).toBe('0.01 cm'))
  test('0.00001', () => expect(String(selector(0.00001))).toBe('0 cm'))
  test('0.00005', () => expect(String(selector(0.00005))).toBe('0.01 cm'))
})

describe('Rounding negative e2', () => {
  const selector = measureFrom('m', 'cm')

  test('-1.11', () => expect(String(selector(-1.11))).toBe('-1.11 m'))
  test('-1.111', () => expect(String(selector(-1.111))).toBe('-1.11 m'))
  test('-5.55', () => expect(String(selector(-5.55))).toBe('-5.55 m'))
  test('-5.555', () => expect(String(selector(-5.555))).toBe('-5.56 m'))
  test('-9.99', () => expect(String(selector(-9.99))).toBe('-9.99 m'))
  test('-9.999', () => expect(String(selector(-9.999))).toBe('-10 m'))
  test('-0.001', () => expect(String(selector(-0.001))).toBe('-0.1 cm'))
  test('-0.0001', () => expect(String(selector(-0.0001))).toBe('-0.01 cm'))
  test('-0.00001', () => expect(String(selector(-0.00001))).toBe('0 cm'))
  test('-0.00005', () => expect(String(selector(-0.00005))).toBe('-0.01 cm'))
  test('-0.00009', () => expect(String(selector(-0.00009))).toBe('-0.01 cm'))
})

describe('unitKey', () => {
  test('1 m3', () => {
    const measure = measureFrom('m3')(1000)
    expect(measure.unitKey).toBe('m3')
  })
})
