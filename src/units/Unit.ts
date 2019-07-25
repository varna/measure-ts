export type MeasureType =
  | 'time' // second (s)
  | 'length' // metre (m)
  | 'area' // metre (m) ** 2
  | 'volume' // metre (m) ** 3
  | 'mass' // kilogram (kg)
  | 'electric current' // ampere (A)
  | 'temperature' // kelvin (K)
  | 'amount of substance' // mole (mol)
  | 'luminous intensity' // candela (cd)

type Unit = {
  name: string
  symbol: string
  alternativeSymbol?: string
  ratio: number
  type: MeasureType
  isPrefixable?: true
  description?: string
}

export default Unit
