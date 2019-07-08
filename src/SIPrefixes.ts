export type SIPrefix = {
  name: string
  symbol: string
  ratio: number
}

export const yotta: SIPrefix = {
  name: 'yotta',
  symbol: 'Y',
  ratio: 1e24
}

export const zetta: SIPrefix = {
  name: 'zetta',
  symbol: 'Z',
  ratio: 1e21
}

export const exa: SIPrefix = {
  name: 'exa',
  symbol: 'E',
  ratio: 1e18
}

export const peta: SIPrefix = {
  name: 'peta',
  symbol: 'P',
  ratio: 1e15
}

export const tera: SIPrefix = {
  name: 'tera',
  symbol: 'T',
  ratio: 1e12
}

export const giga: SIPrefix = {
  name: 'giga',
  symbol: 'G',
  ratio: 1e9
}

export const mega: SIPrefix = {
  name: 'mega',
  symbol: 'M',
  ratio: 1e6
}

export const kilo: SIPrefix = {
  name: 'kilo',
  symbol: 'k',
  ratio: 1e3
}

export const hecto: SIPrefix = {
  name: 'hecto',
  symbol: 'h',
  ratio: 1e2
}

export const deca: SIPrefix = {
  name: 'deca',
  symbol: 'da',
  ratio: 1e1
}

export const deci: SIPrefix = {
  name: 'deci',
  symbol: 'd',
  ratio: 1e-1
}

export const centi: SIPrefix = {
  name: 'centi',
  symbol: 'c',
  ratio: 1e-2
}

export const milli: SIPrefix = {
  name: 'milli',
  symbol: 'm',
  ratio: 1e-3
}

export const micro: SIPrefix = {
  name: 'micro',
  symbol: 'μ',
  ratio: 1e-6
}

export const nano: SIPrefix = {
  name: 'nano',
  symbol: 'n',
  ratio: 1e-9
}

export const pico: SIPrefix = {
  name: 'pico',
  symbol: 'p',
  ratio: 1e-12
}

export const femto: SIPrefix = {
  name: 'femto',
  symbol: 'f',
  ratio: 1e-15
}

export const atto: SIPrefix = {
  name: 'atto',
  symbol: 'a',
  ratio: 1e-18
}

export const zepto: SIPrefix = {
  name: 'zepto',
  symbol: 'z',
  ratio: 1e-21
}

export const yocto: SIPrefix = {
  name: 'yocto',
  symbol: 'y',
  ratio: 1e-24
}

const prefixes = [
  yotta,
  zetta,
  exa,
  peta,
  tera,
  mega,
  kilo,
  hecto,
  deca,
  // 1e0
  deci,
  centi,
  milli,
  micro,
  nano,
  pico,
  femto,
  atto,
  zepto,
  yocto
]

export default prefixes
