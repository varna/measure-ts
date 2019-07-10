import findUnit from './findUnit'
import Measure from './measure'

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
  return new Measure(value).to(unitString)
}

const createMeasureSelector = (...args: string[]) => {
  const units = args.map(findUnit).sort((a, b) => b.ratio - a.ratio)

  return function(value: number) {
    const found = units.reduce(
      // find smallest unit larger than 1
      (previousUnit, currentUnit) => {
        const currentQuantity = Number(toMeasure(currentUnit, value)) //currentUnit.quantity(value)
        const previousQuantity = Number(toMeasure(previousUnit, value)) // previousUnit.quantity(value)

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
}

export default createMeasureSelector
