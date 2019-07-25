import {
  LenghtUnitKey,
  metre,
  yard,
  foot,
  inch,
  chain,
  furlong,
  mile,
  league,
  nautical_mile
} from './length'
import { AreaUnitKey, are, hectare, acre } from './area'
import {
  VolumeUnitKey,
  litre,
  gallon,
  quart,
  pint,
  pint_long,
  gill,
  fluid_ounce,
  peck,
  bushel
} from './volume'
import {
  MassUnitKey,
  gram,
  tonne,
  ton_short,
  ton_long,
  pound,
  grain,
  drachm,
  ounce,
  stone,
  quarter,
  hundredweight_long,
  hundredweight_short
} from './mass'

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

export type UnitKey = LenghtUnitKey | AreaUnitKey | VolumeUnitKey | MassUnitKey
