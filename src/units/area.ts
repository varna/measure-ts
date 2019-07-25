import Unit, { MeasureType } from './Unit'
import { metre, yard } from './length'

const type: MeasureType = 'area'

export const are: Unit = {
  name: 'are',
  symbol: 'a',
  ratio: metre.ratio * 100,
  type
}

export const hectare: Unit = {
  name: 'hectare',
  symbol: 'ha',
  ratio: are.ratio * 100,
  type
}

export const acre: Unit = {
  name: 'acre',
  symbol: 'ac',
  ratio: Math.pow(yard.ratio, 2) * 4840,
  type
}

export type AreaUnitKey =
  | 'ha'
  | 'a'
  | 'ac'
  | 'yd2'
  | 'ft2'
  | 'in2'
  | 'ch2'
  | 'fur2'
  | 'mi2'
  | 'lea2'
  | 'M2'
  | 'm2'
  | 'Ym2'
  | 'Zm2'
  | 'Em2'
  | 'Pm2'
  | 'Tm2'
  | 'Gm2'
  | 'Mm2'
  | 'km2'
  | 'hm2'
  | 'dam2'
  | 'dm2'
  | 'cm2'
  | 'mm2'
  | 'μm2'
  | 'nm2'
  | 'pm2'
  | 'fm2'
  | 'am2'
  | 'zm2'
  | 'ym2'
