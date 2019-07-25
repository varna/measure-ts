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

## Units

### SI prefixes

Meters (normal, square and cubic), grams and litres are prefixable with [SI prefixes](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes). Examples:

| Key | Unit             | Value           |
| --- | ---------------- | --------------- |
| km  | kilometre        | 1 \* 1000       |
| cm  | centimetre       | 1 / 100         |
| ml  | mililitre        | 1 / 1000        |
| km2 | square kilometre | 1 _ 1000 _ 1000 |

### Length

| Key | Name          | Value           |
| --- | ------------- | --------------- |
| m   | Meter (meter) | 1               |
| M   | Nautical Mile | Metre \* 1852   |
| in  | Inch          | Foot / 12       |
| ft  | Foot          | Yard / 3        |
| yd  | Yard          | Metre \* 0.9144 |
| ch  | Chain         | Yard \* 22      |
| fur | Furlong       | Chain \* 10     |
| mi  | Mile          | Furlong \* 8    |
| lea | League        | Mile \* 3       |

### Area

Square length units can be used to measure area, i.e. "m2".

| Key | Name    | Value             |
| --- | ------- | ----------------- |
| a   | Are     | Metre \*_ 2 _ 100 |
| ha  | Hectare | Are \* 100        |
| ac  | Acre    | Yard \*_ 2 _ 4840 |

### Volume

Cubic length units can be used to measure volume, i.e. "m3".

I'm not sure how imperial volume units "really" work (in practise), so create an issue or PR to fix anything that is a miss.

| Key   | Name                   | Value                      |
| ----- | ---------------------- | -------------------------- |
| l     | Litre                  | Metre \*\* 3 / 1000        |
| pint  | Pint (Imperial)        | Litre \* 0.568             |
| gal   | Gallon (American)      | Inch \*\* 3 / 231          |
| qt    | Quart (American)       | Gallon / 4                 |
| pt    | Pint (American)        | Gallon / 8                 |
| gi    | Gill (American)        | Gallon / 32                |
| fl oz | Fluid Ounce (American) | Gallon / 128               |
| peck  | Peck                   | Litre \* 8.809_768         |
| bu    | Bushel                 | Litre \* 35.239_070_166_88 |

### Mass (weight)

| Key     | Name                           | Value              |
| ------- | ------------------------------ | ------------------ |
| kg      | Kilogram                       | 1                  |
| g       | Gram                           | Kilogram / 1000    |
| lb      | Pound                          | Gram \* 453.592_37 |
| t       | Tonne (Metric Ton)             | Kilogram \* 1000   |
| ton     | American Ton (short)           | Pound \* 2000      |
| longton | Imperial Ton (long)            | Pound \* 2240      |
| cwt     | American Hundredweight (short) | Pound \* 100       |
| longcwt | Imperial Hundredweight (long)  | Pound \* 112       |
| qr      | Quarter                        | Pound \* 28        |
| st      | Stone                          | Pound \* 14        |
| oz      | Ounce                          | Pound / 16         |
| dr      | Drachm                         | Pound / 256        |
| gr      | Grain                          | Pound / 7000       |

## Roadmap

- [Suggest units](https://stackoverflow.com/questions/56947641/generating-union-string-type)
- [Working in `String` context](https://stackoverflow.com/questions/56949175/valueof-and-tostring-in-typescript)
- [Working as `Number` without `ts-lint` complains](https://stackoverflow.com/questions/56949175/valueof-and-tostring-in-typescript)
- Setting precision
- Setting rounding
- Measure `operator` Measure = Measure

## Lincese

MIT © [Farmis](./LICENSE)
