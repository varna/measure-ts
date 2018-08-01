# format-unit

Format length or area units to human readable Strings.

## Usage

```js
// install
import formatUnit from '@farmis/format-unit'

// meters to ha
formatUnit('area')(200000)('ha')

// ha to meters
formatUnit('area')(200000, 'ha')('m')

// meters to "prettiest" unit
formatUnit('area')(200000)(['m2', 'a', 'ha', 'km2'])

// m to km
formatUnit('length')(2000)('km')
```

## Lincese

UNLICENSED
