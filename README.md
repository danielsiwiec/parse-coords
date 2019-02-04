# parse-coords

Parse DD, DDM, DMS or UTM coordinates into a `{lat, long}`

## Installing

```
npm install --save parse-coords
```

## Example

```javascript
import coordinates from 'parse-coords'

coordinates('41.40338, 2.17403') // {lat: 41.40338, lng: 2.17403}

coordinates(`41°24'12.2"N 2°10'26.5"E`) // {lat: 41.40339, lng: 2.17403}

coordinates('31T 430959.5858286716 4583866.770942634') // {lat: 41.40338, lng: 2.17403}

coordinates('foo N bar S') // null
```

## Input sanitation

The library makes the best effort to understand the input. Where makes sense:
- commas are optional
- spaces are optional
- degree, minute, second symbols are optional

## API

`coordinates(string)`

#### Parameters
`string` - represents the coordinates in one of the formats - DD, DDM, DMS or UTM

#### Returns
`{lat, lng}` - an object containing `lat` and `lng` fields, represented in Decimal Degrees format.


## Handling Errors

If the string passed in is in an unrecognized format, `null` is returned.
