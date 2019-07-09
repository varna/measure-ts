export const LENGTH = 'length'
export const AREA = 'area'
export const VOLUME = 'volume'
export const MASS = 'mass'

export type MeasureType = 'length' | 'area' | 'volume' | 'mass'
export type Unit = {
  name: string
  symbol: string
  alternativeSymbol?: string
  ratio: number
  type: MeasureType
  isPrefixable?: true
}

/**
 * Length - SI
 */
export const metre: Unit = {
  name: 'metre',
  symbol: 'm',
  ratio: 1,
  type: LENGTH,
  isPrefixable: true
}

/**
 * Length - Imperial
 * Since 1959 it is by international agreement standardized as exactly 0.9144 meters.
 * https://en.wikipedia.org/wiki/International_yard_and_pound
 */
export const yard: Unit = {
  name: 'yard',
  symbol: 'yd',
  ratio: metre.ratio * 0.9144,
  type: LENGTH
}

export const foot: Unit = {
  name: 'foot',
  symbol: 'ft',
  alternativeSymbol: '′',
  ratio: yard.ratio / 3,
  type: LENGTH
}

export const inch: Unit = {
  name: 'inch',
  symbol: 'in',
  alternativeSymbol: '″',
  ratio: foot.ratio / 12,
  type: LENGTH
}

export const chain: Unit = {
  name: 'chain',
  symbol: 'ch',
  ratio: yard.ratio * 22,
  type: LENGTH
}

export const furlong: Unit = {
  name: 'furlong',
  symbol: 'fur',
  ratio: chain.ratio * 10,
  type: LENGTH
}

export const mile: Unit = {
  name: 'mile',
  symbol: 'mi',
  ratio: furlong.ratio * 8,
  type: LENGTH
}

export const league: Unit = {
  name: 'league',
  symbol: 'lea',
  ratio: mile.ratio * 3,
  type: LENGTH
}

/**
 * Nautical Mile (M)
 * https://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf
 */
export const nautical_mile: Unit = {
  name: 'nautical_mile',
  symbol: 'M',
  ratio: metre.ratio * 1852,
  type: LENGTH
}

/**
 * Are - Common land area measuremnt unit
 */
export const are: Unit = {
  name: 'are',
  symbol: 'a',
  ratio: metre.ratio * 100,
  type: AREA
}

/**
 * Hectare - 100 are
 */
export const hectare: Unit = {
  name: 'hectare',
  symbol: 'ha',
  ratio: are.ratio * 100,
  type: AREA
}

/**
 * Acre - Imperial land area measuremnt unit
 */
export const acre: Unit = {
  name: 'acre',
  symbol: 'ac',
  ratio: Math.pow(yard.ratio, 2) * 4840,
  type: AREA
}

// /**
//  * The board foot or board-foot is a unit of measurement for the volume of lumber in the United States and Canada.
//  */
// export const board_foot: Unit = {
//   name: 'board_foot',
//   symbol: "FBM",
//   ratio: Math.pow(inch.ratio * 144, 3),
// type: AREA,
// }

/**
 * Volume - not SI (cubic meters are SI unit for volume).
 * Can use SI prefixes.
 */
export const litre: Unit = {
  name: 'litre',
  symbol: 'l',
  alternativeSymbol: 'ℓ',
  ratio: metre.ratio * 0.001,
  isPrefixable: true,
  type: VOLUME
}

/**
 * U.S. Gallon. (U.K. gallon is deprecated)
 * 3.785411784 litres
 */
export const gallon: Unit = {
  name: 'gallon',
  symbol: 'gal',
  ratio: Math.pow(inch.ratio, 3) * 231,
  type: VOLUME
}

export const quart: Unit = {
  name: 'quart',
  symbol: 'qt',
  ratio: gallon.ratio / 4,
  type: VOLUME
}

/**
 * Imperial (U.S.) Pint is 1/8 gallon
 */
export const pint: Unit = {
  name: 'pint',
  symbol: 'pt',
  ratio: gallon.ratio / 8,
  type: VOLUME
}

/**
 * Imperial (U.K.) Pint is 568ml
 */
export const pint_long: Unit = {
  name: 'pint_long',
  symbol: 'pt',
  ratio: litre.ratio * 0.568,
  type: VOLUME
}

export const gill: Unit = {
  name: 'gill',
  symbol: 'gi',
  ratio: gallon.ratio / 32,
  type: VOLUME
}

export const fluid_ounce: Unit = {
  name: 'fluid_ounce',
  symbol: 'fl oz',
  ratio: gallon.ratio / 128,
  type: VOLUME
}

// /**
//  * Dry Volume - a.k.a Farming units
//  * 1 bushel = 2 kennings (obsolete) = 4 pecks = 8 dry gallons = 16 pint
//  */
// export const dry_pint: Unit = {
//   name: 'dry_pint',
//   symbol: 'pt',
//   ratio: litre.ratio * 0.550_610_471_357_5
// }
// export const dry_quart: Unit = {
//   name: 'dry_quart',
//   symbol: 'qt',
//   ratio: litre.ratio * 1.101_221
// }
// export const dry_gallon: Unit = {
//   name: 'dry_gallon',
//   symbol: 'gal',
//   ratio: litre.ratio * 4.404_884
// }

export const peck: Unit = {
  name: 'peck',
  symbol: 'pk',
  ratio: litre.ratio * 8.809_768,
  type: VOLUME
}

export const bushel: Unit = {
  name: 'bushel',
  symbol: 'bu',
  ratio: litre.ratio * 35.239_070_166_88,
  type: VOLUME
}

// export const dry_barrel: Unit = {
//   name: 'dry_barrel',
//   symbol: 'bbl',
//   ratio: litre.ratio * 115.6271
// }

/**
 * Weight - SI - (well, actually kg is SI unit, not gram)
 */
export const gram: Unit = {
  name: 'gram',
  symbol: 'g',
  ratio: 0.001,
  isPrefixable: true,
  type: MASS
}

/**
 * Weight - Common
 */
export const tonne: Unit = {
  name: 'tonne',
  symbol: 't',
  ratio: gram.ratio * 1_000_000,
  type: MASS
}

/**
 * Weight - Imperial
 */
export const pound: Unit = {
  name: 'pound',
  symbol: 'lb',
  ratio: gram.ratio * 453.592_37,
  type: MASS
}

export const grain: Unit = {
  name: 'grain',
  symbol: 'gr',
  ratio: pound.ratio / 7_000,
  type: MASS
}

export const drachm: Unit = {
  name: 'drachm',
  symbol: 'dr',
  ratio: pound.ratio / 256,
  type: MASS
}

export const ounce: Unit = {
  name: 'ounce',
  symbol: 'oz',
  ratio: pound.ratio / 16,
  type: MASS
}

export const stone: Unit = {
  name: 'stone',
  symbol: 'st',
  ratio: pound.ratio * 14,
  type: MASS
}

export const quarter: Unit = {
  name: 'quarter',
  symbol: 'qr',
  ratio: pound.ratio * 28,
  type: MASS
}

/**
 * Hundredweight - Imperial - long (UK)
 */
export const hundredweight_long: Unit = {
  name: 'hundredweight_long',
  symbol: 'cwt',
  ratio: pound.ratio * 112,
  type: MASS
}

/**
 * Hundredweight - Imperial - short (US and Canadian)
 */
export const hundredweight_short: Unit = {
  name: 'hundredweight_short',
  symbol: 'cwt',
  ratio: pound.ratio * 100,
  type: MASS
}

/**
 * Ton - Imperial - long (UK)
 */
export const ton_long: Unit = {
  name: 'ton_long',
  symbol: 't',
  ratio: pound.ratio * 2240,
  type: MASS
}

/**
 * Ton - Imperial - short (US and Canadian)
 */
export const ton_short: Unit = {
  name: 'ton_short',
  symbol: 't',
  ratio: pound.ratio * 2000,
  type: MASS
}

const units = {
  metre,
  yard,
  foot,
  inch,
  chain,
  furlong,
  mile,
  league,
  nautical_mile,
  are,
  hectare,
  acre,
  litre,
  gallon,
  quart,
  pint,
  pint_long,
  gill,
  fluid_ounce,
  peck,
  bushel,
  gram,
  tonne,
  pound,
  grain,
  drachm,
  ounce,
  stone,
  quarter,
  hundredweight_long,
  hundredweight_short,
  ton_long,
  ton_short
}

export default units
