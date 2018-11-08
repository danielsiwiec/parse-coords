module.exports = class RegexBuilder {
  constructor () {
    this.string = '^'
  }

  plusMinus () {
    this.string += '[-+]?'
    return this
  }

  decimalNumber () {
    this.string += '\\d+(\\.\\d+)?'
    return this
  }

  integer (digits) {
    this.string += `\\d${digits ? `{${digits}}` : '+'}`
    return this
  }

  comma () {
    this.string += ',?\\s*'
    return this
  }

  degreeOption () {
    this.string += '(°|° | )'
    return this
  }

  minuteOption () {
    this.string += `'?`
    return this
  }

  secondOption () {
    this.string += `"?`
    return this
  }

  whiteSpace () {
    this.string += '\\s*'
    return this
  }

  with (string) {
    this.string += string
    return this
  }

  // regex: /^\d+°\d+'\d+(\.\d+)?"\s*[NS]\s*\d+°\d+'\d+(\.\d+)?"\s*[EW]$/,
  // regex: /^\d{2}[C-X] \d+(\.\d+)? \d+(\.\d+)?$/,

  build () {
    this.string += '$'
    return new RegExp(this.string)
  }
}
