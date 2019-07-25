import Unit, { MeasureType } from './Unit'

const type: MeasureType = 'length'

export const metre: Unit = {
  name: 'metre',
  symbol: 'm',
  ratio: 1,
  type,
  isPrefixable: true
}

/**
 * Yard - Imperial length base unit.
 * Since 1959 it is by international agreement standardized as exactly 0.9144 meters.
 * https://en.wikipedia.org/wiki/International_yard_and_pound
 */
export const yard: Unit = {
  name: 'yard',
  symbol: 'yd',
  ratio: metre.ratio * 0.9144,
  type
}

export const foot: Unit = {
  name: 'foot',
  symbol: 'ft',
  alternativeSymbol: '′',
  ratio: yard.ratio / 3,
  type
}

export const inch: Unit = {
  name: 'inch',
  symbol: 'in',
  alternativeSymbol: '″',
  ratio: foot.ratio / 12,
  type
}

export const chain: Unit = {
  name: 'chain',
  symbol: 'ch',
  ratio: yard.ratio * 22,
  type
}

export const furlong: Unit = {
  name: 'furlong',
  symbol: 'fur',
  ratio: chain.ratio * 10,
  type
}

export const mile: Unit = {
  name: 'mile',
  symbol: 'mi',
  ratio: furlong.ratio * 8,
  type
}

export const league: Unit = {
  name: 'league',
  symbol: 'lea',
  ratio: mile.ratio * 3,
  type
}

/**
 * Nautical Mile (M)
 * https://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf
 */
export const nautical_mile: Unit = {
  name: 'nautical_mile',
  symbol: 'M',
  ratio: metre.ratio * 1852,
  type
}

export type LenghtUnitKey =
  | 'yd'
  | 'ft'
  | 'in'
  | 'ch'
  | 'fur'
  | 'mi'
  | 'lea'
  | 'M'
  | 'm'
  | 'Ym'
  | 'Zm'
  | 'Em'
  | 'Pm'
  | 'Tm'
  | 'Gm'
  | 'Mm'
  | 'km'
  | 'hm'
  | 'dam'
  | 'dm'
  | 'cm'
  | 'mm'
  | 'μm'
  | 'nm'
  | 'pm'
  | 'fm'
  | 'am'
  | 'zm'
  | 'ym'
