import Unit, { MeasureType } from './Unit'

const type: MeasureType = 'mass'

/**
 * Base SI unit for mass is actually kg
 * and its value will be used as base ratio
 * but we will define only gram,
 * because it is prefixable unit
 */
export const gram: Unit = {
  name: 'gram',
  symbol: 'g',
  ratio: 0.001,
  isPrefixable: true,
  type
}

export const tonne: Unit = {
  name: 'tonne',
  symbol: 't',
  ratio: gram.ratio * 1_000_000,
  description: 'Tonne (metric ton) - 1000 kg - SI accepted unit.',
  type
}

export const pound: Unit = {
  name: 'pound',
  symbol: 'lb',
  ratio: gram.ratio * 453.592_37,
  type
}

export const grain: Unit = {
  name: 'grain',
  symbol: 'gr',
  ratio: pound.ratio / 7_000,
  type
}

export const drachm: Unit = {
  name: 'drachm',
  symbol: 'dr',
  ratio: pound.ratio / 256,
  type
}

export const ounce: Unit = {
  name: 'ounce',
  symbol: 'oz',
  ratio: pound.ratio / 16,
  type
}

export const stone: Unit = {
  name: 'stone',
  symbol: 'st',
  ratio: pound.ratio * 14,
  type
}

export const quarter: Unit = {
  name: 'quarter',
  symbol: 'qr',
  ratio: pound.ratio * 28,
  type
}

export const hundredweight_long: Unit = {
  name: 'hundredweight_long',
  symbol: 'longcwt',
  ratio: pound.ratio * 112,
  type
}

export const hundredweight_short: Unit = {
  name: 'hundredweight_short',
  symbol: 'cwt',
  ratio: pound.ratio * 100,
  type
}

export const ton_long: Unit = {
  name: 'ton_long',
  symbol: 'longton',
  ratio: pound.ratio * 2240,
  type
}

export const ton_short: Unit = {
  name: 'ton_short',
  symbol: 'ton',
  ratio: pound.ratio * 2000,
  type
}

export type MassUnitKey =
  | 'lb'
  | 't'
  | 'ton'
  | 'longton'
  | 'cwt'
  | 'longcwt'
  | 'qr'
  | 'st'
  | 'oz'
  | 'dr'
  | 'gr'
  | 'g'
  | 'Yg'
  | 'Zg'
  | 'Eg'
  | 'Pg'
  | 'Tg'
  | 'Gg'
  | 'Mg'
  | 'kg'
  | 'hg'
  | 'dag'
  | 'dg'
  | 'cg'
  | 'mg'
  | 'μg'
  | 'ng'
  | 'pg'
  | 'fg'
  | 'ag'
  | 'zg'
  | 'yg'
