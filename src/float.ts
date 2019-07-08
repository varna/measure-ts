/**
 * Fixes a number that floats away i.e. 0.9999999999999997
 *
 * @param number floating point number
 */
export const float = (number: number) => parseFloat(number.toPrecision(12))
