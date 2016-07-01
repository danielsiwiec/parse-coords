# parse-coords

Parse DD, DDM, DMS or UTM coordinates into a `{lat, long}`

## Usage

```
npm install --save parse-coords
```

```javascript
import coordinates from 'parse-coords'

coordinates('41.40338, 2.17403') // {lat: 41.40338, lng: 2.17403}

coordinates(`41°24'12.2"N 2°10'26.5"E`) // {lat: 41.40339, lng: 2.17403}

coordinates('31T 430959.5858286716 4583866.770942634') // {lat: 41.40338, lng: 2.17403}

coordinates('foo N bar S') // null
```
