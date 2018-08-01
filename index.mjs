export const lenghtUnits = {
  default: { unit: 'm', scale: 1 },
  'm': { unit: 'm', scale: 1 },
  'cm': { unit: 'cm', scale: 0.01 },
  'km': { unit: 'km', scale: 1000 },
  'in': { unit: 'in', scale: 0.0254 },
  'ft': { unit: 'ft', scale: 0.3048 },
  'league': { unit: 'league', scale: 4828.0417 },
  'league(nautical)': { unit: 'league(nautical)', scale: 5556 },
  'mile': { unit: 'mi', scale: 1609.344 },
  'yd': { unit: 'yd', scale: 0.9144 },
}

export const areaUnits = {
  default: { unit: 'm²', scale: 1 },
  'm2': { unit: 'm²', scale: 1 },
  'cm2': { unit: 'cm²', scale: 0.0001 },
  'km2': { unit: 'km²', cale: 1000000 },
  'a': { unit: 'a', scale: 100 },
  'ha': { unit: 'ha', scale: 10000 },
  'in2': { unit: 'in²', scale: 0.00064516 },
  'ft2': { unit: 'ft²', scale: 0.09290304 },
  'ac': { unit: 'ac', scale: 4046.8564224 },
  'yd2': { unit: 'yd²', scale: 0.83612736 },
  'mi2': { unit: 'mi²', scale: 2589988.1103 },
}

function formatUnit (units, value, inputUnit, outputUnit) {
  if (outputUnit) {
    if (outputUnit.constructor === String && units[outputUnit]) {
      const { unit, scale } = units[outputUnit]
      return Number((value / scale).toFixed(3)).toString() + ' ' + unit
    }

    if (outputUnit.constructor === Array) {
      outputUnit.filter(unit => Object.keys(units).includes(unit))
      const { unit, scale } = outputUnit
        .reverse()
        .map(unit => units[unit])
        .find(({ scale }) => value / scale > 1) || units.default
      return Number((value / scale).toFixed(3)).toString() + ' ' + unit
    }
  }
}

const formatUnits = unitType => (value, inputUnit) => outputUnit => {
  switch (unitType) {
    case 'length': return formatUnit(lenghtUnits, value, inputUnit, outputUnit)
    case 'area': return formatUnit(areaUnits, value, inputUnit, outputUnit)
    default: throw new Error('Bad type provided, must be "area" or "length"')
  }
}

export default formatUnits
