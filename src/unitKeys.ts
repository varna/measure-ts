import { stringEnum } from './stringEnum'
import siPrefixes from './SIPrefixes'
import units, { LENGTH } from './units'

const keys = []
const prefixes = Object.values(siPrefixes).map(prefix => prefix.symbol)

Object.values(units).forEach(({ isPrefixable, type, name, symbol }) => {
  let unitKeys = [symbol]
  if (type === LENGTH) {
    ;['²', '2', '³', '3'].forEach(suffix => {
      unitKeys.push(symbol + suffix)
    })
  }
  if (isPrefixable) {
    prefixes.forEach(prefix => {
      unitKeys.forEach(unitKey => {
        keys.push(prefix + unitKey)
      })
    })
  } else {
    // keys = [...keys, ...unitKeys]
  }
  keys.push(name)
})

/** Create a K:V */
const UnitString = stringEnum(keys)

/** Create a Type */
export type UnitString = keyof typeof UnitString

// const test: UnitString = ''
