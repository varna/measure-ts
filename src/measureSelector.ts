import findUnit from './findUnit'
import Measure from './measure'
import { UnitKey } from './units/index'

const toMeasure = (
  {
    prefix,
    unit,
    suffix
  }: {
    prefix: string
    unit: string
    suffix: string
  },
  value: number
) => {
  const unitString = prefix + unit + suffix
  return new Measure(value).to(<UnitKey>unitString)
}

/**
 * Creates a function that finds best looking unit for value from a list of provided units.
 * @param unitKeys an Array of unit identifiers.
 * @returns {(value: number) => Measure} Finds best looking unit for pretty printing and returns Measure with it.
 */
const createMeasureSelector = (...unitKeys: UnitKey[]) => {
  const units = unitKeys.map(findUnit).sort((a, b) => b.ratio - a.ratio)

  /**
   * Finds best looking unit for pretty printing and returns Measure with it.
   *
   * @param value quantity/value of measure.
   * @returns {Measure} new Measure(value, bestLookingUnit)
   */
  const finder = (value: number) => {
    const found = units.reduce(
      // find smallest unit larger than 1
      (previousUnit, currentUnit) => {
        const currentQuantity = Number(toMeasure(currentUnit, value))
        const previousQuantity = Number(toMeasure(previousUnit, value))

        return previousQuantity < 1 || currentQuantity < previousQuantity
          ? currentUnit
          : previousUnit
      },
      units[0] // default to first/largest unit
    )

    const foundMeasure = toMeasure(found, value)
    if (Number(foundMeasure) < 1) {
      return toMeasure(units[units.length - 1], value)
    } else {
      return foundMeasure
    }
  }

  return finder
}

export default createMeasureSelector
