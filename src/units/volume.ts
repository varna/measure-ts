import Unit, { MeasureType } from './Unit'
import { metre, inch } from './length'

const type: MeasureType = 'volume'

/**
 * Litre is not SI unit (cubic meters are SI unit for volume).
 * Can use SI prefixes.
 */
export const litre: Unit = {
  name: 'litre',
  symbol: 'l',
  alternativeSymbol: 'ℓ',
  ratio: metre.ratio * 0.001,
  isPrefixable: true,
  type
}

/**
 * U.S. Gallon. (U.K. gallon is deprecated?)
 * 3.785411784 litres
 */
export const gallon: Unit = {
  name: 'gallon',
  symbol: 'gal',
  ratio: Math.pow(inch.ratio, 3) * 231,
  type
}

export const quart: Unit = {
  name: 'quart',
  symbol: 'qt',
  ratio: gallon.ratio / 4,
  type
}

/**
 * Imperial (U.S.) Pint is 1/8 gallon
 */
export const pint: Unit = {
  name: 'pint_short',
  symbol: 'pt',
  ratio: gallon.ratio / 8,
  type
}

/**
 * Imperial (U.K.) Pint is 568ml
 */
export const pint_long: Unit = {
  name: 'pint_long',
  symbol: 'pint',
  ratio: litre.ratio * 0.568,
  type
}

export const gill: Unit = {
  name: 'gill',
  symbol: 'gi',
  ratio: gallon.ratio / 32,
  type
}

export const fluid_ounce: Unit = {
  name: 'fluid_ounce',
  symbol: 'fl oz',
  ratio: gallon.ratio / 128,
  type
}

export const peck: Unit = {
  name: 'peck',
  symbol: 'pk',
  ratio: litre.ratio * 8.809_768,
  type
}

export const bushel: Unit = {
  name: 'bushel',
  symbol: 'bu',
  ratio: litre.ratio * 35.239_070_166_88,
  type
}

export type VolumeUnitKey =
  | 'gal'
  | 'qt'
  | 'pt'
  | 'pint'
  | 'gi'
  | 'fl oz'
  | 'pk'
  | 'bu'
  | 'yd3'
  | 'ft3'
  | 'in3'
  | 'ch3'
  | 'fur3'
  | 'mi3'
  | 'lea3'
  | 'M3'
  | 'm3'
  | 'Ym3'
  | 'Zm3'
  | 'Em3'
  | 'Pm3'
  | 'Tm3'
  | 'Gm3'
  | 'Mm3'
  | 'km3'
  | 'hm3'
  | 'dam3'
  | 'dm3'
  | 'cm3'
  | 'mm3'
  | 'μm3'
  | 'nm3'
  | 'pm3'
  | 'fm3'
  | 'am3'
  | 'zm3'
  | 'ym3'
  | 'l'
  | 'Yl'
  | 'Zl'
  | 'El'
  | 'Pl'
  | 'Tl'
  | 'Gl'
  | 'Ml'
  | 'kl'
  | 'hl'
  | 'dal'
  | 'dl'
  | 'cl'
  | 'ml'
  | 'μl'
  | 'nl'
  | 'pl'
  | 'fl'
  | 'al'
  | 'zl'
  | 'yl'
