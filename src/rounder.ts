/**
 * Create a function for rounding with predefined settings.
 *
 * @param exponent how many numbers after comma should be left?
 * @param roundingFunction which function should be used for rounding? default: `Math.round`
 * @param epsilon floating point number patching
 */
export default function rounder(
  exponent = 0,
  roundingFunction = Math.round,
  epsilon = 0
) {
  const pow = Math.pow(10, exponent)

  return function round(value) {
    return roundingFunction(value * pow + epsilon) / pow
  }
}
