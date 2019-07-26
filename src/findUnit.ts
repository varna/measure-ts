import units, { UnitKey } from './units/index'
import siPrefixes from './SIPrefixes'

const SQUARE_SYMBOLS = ['²', '2']
const CUBE_SYMBOLS = ['³', '3']

const findUnit = (
  unitString: UnitKey
): {
  unit: string
  prefix: string
  suffix: string
  ratio: number
} => {
  let trimmed = unitString.trim()
  const lastCharacter = trimmed.slice(-1)

  let suffix = ''
  let exponent = 1
  if (SQUARE_SYMBOLS.includes(lastCharacter)) {
    suffix = SQUARE_SYMBOLS[0]
    exponent = 2
    trimmed = trimmed.slice(0, -1)
  }
  if (CUBE_SYMBOLS.includes(lastCharacter)) {
    suffix = CUBE_SYMBOLS[0]
    exponent = 3
    trimmed = trimmed.slice(0, -1)
  }

  // find unit
  let unit = Object.values(units).find(
    ({ name, symbol, alternativeSymbol }) => {
      return (
        trimmed === symbol ||
        trimmed === name ||
        (alternativeSymbol && trimmed === alternativeSymbol)
      )
    }
  )

  // find prefix
  let prefix =
    !unit && siPrefixes.find(siPrefix => trimmed.startsWith(siPrefix.symbol))

  if (prefix && prefix.symbol) {
    trimmed = trimmed.substring(prefix.symbol.length)
  }

  // const [prefix] = unit.split(this.symbol)
  // find unit
  unit = Object.values(units).find(({ name, symbol, alternativeSymbol }) => {
    return (
      trimmed === symbol ||
      trimmed === name ||
      (alternativeSymbol && trimmed === alternativeSymbol)
    )
  })

  if (!unit) {
    throw Error(`Unit "${trimmed}" not found!`)
  }

  let ratio = 1
  if (unit) {
    ratio *= unit.ratio
  }
  if (prefix) {
    ratio *= prefix.ratio
  }
  ratio = Math.pow(ratio, exponent)

  return {
    unit: (unit && unit.symbol) || '',
    prefix: (prefix && prefix.symbol) || '',
    suffix,
    ratio
  }
}

export default findUnit
