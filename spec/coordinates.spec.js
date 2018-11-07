import coordinates from '../index'

describe('coordinates', () => {
  describe('Decimal Degrees', () => {
    it('should recognize coordinates', () => {
      expect(coordinates('41.40338, 2.17403')).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize coordinates without a comma', () => {
      expect(coordinates('41.40338 2.17403')).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize negative coordinates', () => {
      expect(coordinates('-41.40338, -2.17403')).toEqual({ lat: -41.40338, lng: -2.17403 })
    })
  })

  describe('Decimal Minutes', () => {
    it('should recognize coordinates', () => {
      expect(coordinates('41 24.2028, 2 10.4418')).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize coordinates without a comma', () => {
      expect(coordinates('41 24.2028 2 10.4418')).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize coordinates with degree and minute symbol, without a comma', () => {
      expect(coordinates(`41° 24.2028' 2° 10.4418'`)).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize coordinates with degree and minute symbol, without a comma, without spaces', () => {
      expect(coordinates(`41°24.2028' 2°10.4418'`)).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize coordinates with degree and minute symbol, with a comma, without spaces', () => {
      expect(coordinates(`41°24.2028', 2°10.4418'`)).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize coordinates with degree and minute symbol, with a comma', () => {
      expect(coordinates(`41° 24.2028', 2° 10.4418'`)).toEqual({ lat: 41.40338, lng: 2.17403 })
    })

    it('should recognize negative coordinates', () => {
      expect(coordinates('-41 24.2028, -2 10.4418')).toEqual({ lat: -41.40338, lng: -2.17403 })
    })
  })

  describe('Degrees, minutes, seconds', () => {
    it('should recognize coordinates for NE', () => {
      expect(coordinates(`41°24'12.2"N 2°10'26.5"E`)).toEqual({ lat: 41.40339, lng: 2.17403 })
    })

    it('should recognize coordinates for SW', () => {
      expect(coordinates(`41°24'12.2"S 2°10'26.5"W`)).toEqual({ lat: -41.40339, lng: -2.17403 })
    })

    it('should recognize coordinates for SW with a space before NSEW', () => {
      expect(coordinates(`41°24'12.2" S 2°10'26.5" W`)).toEqual({ lat: -41.40339, lng: -2.17403 })
    })
  })

  describe('UTM', () => {
    it('should recognize UTM format', () => {
      expect(coordinates('31T 430959.5858286716 4583866.770942634')).toEqual({ lat: 41.40338, lng: 2.17403 })
    })
  })

  it('should return null for a search string input', () => {
    expect(coordinates('freddys sandwitches')).toBeUndefined()
  })
})
