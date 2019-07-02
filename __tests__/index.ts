import formatUnit from '../src'

test('basic', () => {
  const km_in_m = 1_000
  const res = formatUnit('length')(km_in_m)('km')
  expect(res).toBe('1.000 km')
})
