// TODO: solve some situations like provided len < str.length
import { Options, defaultOptions } from '../types'
const repeat = (str: string = ' ', times: number = 1) => str.repeat(times)

const pad = (
  str: string,
  len: number,
  pad: string = ' ',
  dir: 'left' | 'right' | 'both' = 'both'
) => {
  switch (dir) {
    case 'left':
      return repeat(pad, str.length - len) + str
    case 'right':
      return str + repeat(pad, str.length - len)
    default:
      const pad_len = str.length - len
      const pad_left_len = ~~(pad_len / 2)
      const pad_right_len = pad_len - pad_left_len
      return repeat(pad, pad_left_len) + str + repeat(pad, pad_right_len)
  }
}

const truncate = (str: string, len: number, chr: string = '...') =>
  str.substring(0, len - chr.length) + chr

const getType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1)

const get_lowerCaseType = (obj: any) => getType(obj).toLowerCase()

const mergeOptions = (opts: Options, options: Options = defaultOptions) => {
  const rtOptions = options
  for (const k in opts) {
    if (get_lowerCaseType(opts[k]) === 'object') {
      rtOptions[k] = mergeOptions(options[k], opts[k])
    } else {
      rtOptions[k] = opts[k]
    }
  }
  return rtOptions
}

export { repeat, pad, truncate, getType, get_lowerCaseType, mergeOptions }

export default {
  repeat,
  pad,
  truncate,
  getType,
  get_lowerCaseType,
  mergeOptions
}
