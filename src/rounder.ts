/**
 * Create a function for rounding with predefined settings.
 *
 * @param exponent how many numbers after comma should be left?
 * @param roundingFunction which function should be used for rounding? default: `Math.round`
 * @param epsilon floating point number patching
 */
export default function rounder(
  exponent = 2,
  roundingFunction = Math.round,
  epsilon = Number.EPSILON
) {
  const pow = Math.pow(10, exponent)

  return function round(value: number) {
    const sign = value < 0 ? -1 : 1
    const absoluteValue = value * sign
    return (roundingFunction(absoluteValue * pow + epsilon) / pow) * sign
  }
}
