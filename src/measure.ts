import findUnit from './findUnit'
import { UnitKey } from './units/index'
import rounder from './rounder'

/**
 * Measure of value with unit.
 * Length, area, volume and mass units.
 * SI, metric and imperial units.
 * Squared and cubed length units (m2, m3, km2, m3, ft3, mi2).
 * SI prefixes (da, h, k, M, G, T, P, E, Z, Y, d, c, m, μ, n, p, f, a, z, y) for (m, m2, m3, l, g) i.e. (km2, kg, cm, ml).
 *
 * @returns {Number|String} `Measure.valueOf(): Number` or `Measure.toString(): String` depending on context
 */
export default class Measure extends Number implements Number {
  public precision = 12
  public exponent = 1
  public ratio = 1
  public unitKey = <UnitKey>'m'
  public symbol = 'm'
  public prefix = ''
  public suffix = ''
  public round = 2

  /**
   * @param value value/quantity of unit
   * @param unitKey key representation of unit
   */
  constructor(value: number | string | Measure, unitKey: UnitKey = 'm') {
    super(value)
    if (unitKey) {
      this.unitKey = unitKey
      const { unit, prefix, suffix, ratio } = findUnit(unitKey)
      this.symbol = unit
      this.prefix = prefix
      this.suffix = suffix
      this.ratio = 1 / ratio
    }
  }

  /**
   * Convert Measure to another Measure with different Unit.
   *
   * @param unitKey key representation of unit
   */
  public to = (unitKey: UnitKey): Measure => {
    const { unit, prefix, suffix, ratio } = findUnit(unitKey)
    this.unitKey = unitKey
    this.symbol = unit
    this.prefix = prefix
    this.suffix = suffix

    const newRatio = 1 / ratio
    const newValue = +this / this.ratio / ratio
    this.ratio = newRatio

    return this.clone(newValue)
  }

  /**
   * Create a copy of of Measure with new value.
   * Why? Because value of Number that we extend is immutable.
   *
   * @param value new value
   */
  public clone(value: number) {
    const measure = new Measure(value)
    measure.ratio = this.ratio
    measure.unitKey = this.unitKey
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

  get extension () {
    return this.prefix + this.symbol + this.suffix
  }

  /**
   * Returns the string representation for this instance.
   */
  public toString = (): string => {
    const rounded = rounder(this.round)(this.valueOf())
    return `${rounded} ${this.extension}`
  }
}
