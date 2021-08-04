// TODO: solve some situations like provided len < str.length

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

export { repeat, pad, truncate }

export default { repeat, pad, truncate }
