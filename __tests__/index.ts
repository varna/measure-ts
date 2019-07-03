import formatUnit from '../src'

test('basic', () => {
  const km_in_m = 1_000
  const res = formatUnit('length')(km_in_m)('km')
  expect(res).toBe('1.000 km')
})

test('9', () => {
  const res = formatUnit('length')(9)(['m', 'km'])
  expect(res).toBe('9 m')
})

test('99', () => {
  const res = formatUnit('length')(99)(['m', 'km'])
  expect(res).toBe('99 m')
})

test('999', () => {
  const res = formatUnit('length')(999)(['m', 'km'])
  expect(res).toBe('999 m')
})

test('999.9 e2', () => {
  const res = formatUnit('length')(999.9)(['m', 'km'])
  expect(res).toBe('999.9 m')
})

test('999.99 e2', () => {
  const res = formatUnit('length')(999.99)(['m', 'km'])
  expect(res).toBe('999.99 m')
})

test('999.999 e2', () => {
  const res = formatUnit('length')(999.999)(['m', 'km'])
  expect(res).toBe('1 km')
})

test('0.001 e2', () => {
  const res = formatUnit('length')(0.001)(['m', 'km'])
  expect(res).toBe('0 m')
})

test('0.005 e2', () => {
  const res = formatUnit('length')(0.005)(['m', 'km'])
  expect(res).toBe('0.01 m')
})
