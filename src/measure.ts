// import siPrefixes from './SIPrefixes'
// import units, { LENGTH } from './units'
import findUnit from './findUnit'

/**
 * Measure space in meters.
 */
export default class Measure extends Number implements Number {
  public precision = 12
  public exponent = 1
  public ratio = 1
  public symbol = 'm'
  public prefix = ''
  public suffix = ''
  public round = 2

  constructor(value: number | string | Measure, unitString?: string) {
    super(value)
    if (unitString) {
      const { unit, prefix, suffix, ratio } = findUnit(unitString.trim())
      this.symbol = unit
      this.prefix = prefix
      this.suffix = suffix
      this.ratio = 1 / ratio
    }
  }

  public to = (unitString: string): Measure => {
    // check if squared or cubed
    let trimmed = unitString.trim()

    const { unit, prefix, suffix, ratio } = findUnit(trimmed)
    this.symbol = unit
    this.prefix = prefix
    this.suffix = suffix

    const newRatio = 1 / ratio
    const newValue = +this / this.ratio / ratio
    this.ratio = newRatio

    return this.clone(newValue)
  }

  public clone(value) {
    const measure = new Measure(value)
    measure.ratio = this.ratio
    measure.symbol = this.symbol
    measure.prefix = this.prefix
    measure.suffix = this.suffix
    measure.exponent = this.exponent
    measure.precision = this.precision

    return measure
  }

  /**
   * Returns the value of this instance as a number
   */
  public valueOf = (): number => {
    return parseFloat(this.toPrecision(this.precision))
  }

  /**
   * Returns the string representation for this instance.
   */
  public toString = (): string => {
    const pow = Math.pow(10, this.round)
    const rounded = Math.round(this.valueOf() * pow + Number.EPSILON) / pow
    return `${rounded} ${this.prefix}${this.symbol}${this.suffix}`
  }
}
