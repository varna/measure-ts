# measure-unit

Convert or print measurement units units: length, area, volume and weight.

## Usage

```ts
import Measure, { measureFrom } from '../src'

// 10_000 => 10_000 m² => 1 ha
new Measure(10_000).to('ha')

// 1 ha => 10_000 m²
new Measure(1, 'ha').to('m2')

// 1 gal => 3.79 l
new Measure(1, 'gal').to('l')

const measure = measureFrom('m2', 'a', 'ha', 'km2')
measure(1) // 1 m²
measure(100) // 100 m² => 1 a
measure(10_000) // 10_000 m² => 1 ha
measure(1_000_000) // 1_000_000 m² => 1 km²
```

## Roadmap

- [Suggest units](https://stackoverflow.com/questions/56947641/generating-union-string-type)
- [Working in `String` context](https://stackoverflow.com/questions/56949175/valueof-and-tostring-in-typescript)
- [Working as `Number` without `ts-lint` complains](https://stackoverflow.com/questions/56949175/valueof-and-tostring-in-typescript)
- Setting precision
- Setting rounding
- Measure `operator` Measure = Measure

## Lincese

MIT © [Farmis](./LICENSE)
