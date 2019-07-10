# measure-unit

Convert or print measurement units units: length, area, volume and weight.

## Usage

Class based API:

```js
import Measure from 'measure-ts'

const measure = new Measure(1)
Number(measure) // 1
String(measure) // "1 m"

const ha = new Measure(2, 'ha') // 2
String(ha) // "2 ha"
const ha2m2 = ha.to('m2') // 20_000
String(ha2m2) // "20_000 m²"
```

Pretty unit chooser:

```js
import { measureFrom } from 'measure-ts'

const measure = measureFrom('m2', 'a', 'ha', 'km2')
measure(1) // 1 || "1 m²"
measure(100) // 100 || "1 a"
measure(10000) // 10_000 ||  "1 ha"
measure(1000000) // 1_000_000 ||  "1 km²"
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
