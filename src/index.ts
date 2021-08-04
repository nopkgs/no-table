import { Options } from './types'
import { repeat, pad, truncate, mergeOptions } from './utils'

class Table {
  options: Options
  rows: any[]

  constructor(options: Options) {
    this.options = mergeOptions(options)
  }

  push(...rows: any) {
    this.rows.push(rows)
  }

  toString(): string {
    const { chars, truncate, colWidths, colAligns, style, head } = this.options
    const rows = this.rows
    let totalWidth = 0
    let ret = ''
    // TODO: May be some hints
    if (head.length === 0 && rows.length === 0) return ''

    const drawLine = (line: string, left: string, right: string, intersection: string) => {
      let rtLine = left + repeat(line, totalWidth - 2) + right
      let width = 0
      colWidths.forEach((w, i) => {
        if (i === colWidths.length - 1) return
        width += w + 1
        rtLine = rtLine.substr(0, width) + intersection + rtLine.substr(width + 1)
      })
      // TODO: return applyStyles(style.border, line)
      return line
    }

    const drawTopLine = () => {
      const l = drawLine(chars.top, chars['top-left'], chars['top-right'], chars['top-mid'])
      if (l) ret += l + '\n'
    }

    const drwaBottomLine = () => {
      const l = drawLine(chars.bottom, chars['bottom-left'], chars['bottom-right'], chars['bottom-mid'])
      if (l) ret += l
      else ret = ret.slice(0, -1)
    }

    const drwaRow = (item, style) => {}

    if (head.length) {
      drawTopLine()
    }

    if (rows.length) {
    }
    drwaBottomLine()

    return ret
  }
}

export { Table }
export default Table
