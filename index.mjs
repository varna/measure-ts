export const lenghtUnits = {
  default: { unit: 'm', scale: 1 },
  'm': { unit: 'm', scale: 1 },
  'cm': { unit: 'cm', scale: 0.01 },
  'km': { unit: 'km', scale: 1000 },
  'in': { unit: 'in', scale: 0.0254 },
  'ft': { unit: 'ft', scale: 0.3048 },
  'league': { unit: 'league', scale: 4828.0417 },
  'league(nautical)': { unit: 'league(nautical)', scale: 5556 },
  'mi': { unit: 'mi', scale: 1609.344 },
  'yd': { unit: 'yd', scale: 0.9144 },
}

export const areaUnits = {
  default: { unit: 'm²', scale: 1 },
  'm2': { unit: 'm²', scale: 1 },
  'cm2': { unit: 'cm²', scale: 0.0001 },
  'km2': { unit: 'km²', scale: 1000000 },
  'a': { unit: 'a', scale: 100 },
  'ha': { unit: 'ha', scale: 10000 },
  'in2': { unit: 'in²', scale: 0.00064516 },
  'ft2': { unit: 'ft²', scale: 0.09290304 },
  'ac': { unit: 'ac', scale: 4046.8564224 },
  'yd2': { unit: 'yd²', scale: 0.83612736 },
  'mi2': { unit: 'mi²', scale: 2589988.1103 },
}

function formatUnit (units, value, outputUnit) {
  if (outputUnit) {
    let unit = units.default
    if (outputUnit.constructor === String && units[outputUnit]) {
      unit = units[outputUnit]
    } else if (outputUnit.constructor === Array) {
      const unitIndex = outputUnit
        .filter(unit => Object.keys(units).includes(unit))
        .reverse()
        .find(unit => (value / units[unit].scale > 1))
      if (unitIndex) unit = units[unitIndex];
    }
    return Number(value / unit.scale).toFixed(3).toString() + ' ' + unit.unit
  }
}

const formatUnits = unitType => value => outputUnit => {
  switch (unitType) {
    case 'length': return formatUnit(lenghtUnits, value, outputUnit)
    case 'area': return formatUnit(areaUnits, value, outputUnit)
    default: throw new Error('Bad type provided, must be "area" or "length"')
  }
}

export default formatUnits
