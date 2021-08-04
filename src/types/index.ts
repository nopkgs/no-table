interface Options {
  chars?: {
    'top'?: string
    'top-mid'?: string
    'top-left'?: string
    'top-right'?: string
    'bottom'?: string
    'bottom-mid'?: string
    'bottom-left'?: string
    'bottom-right'?: string
    'left'?: string
    'left-mid'?: string
    'mid'?: string
    'mid-mid'?: string
    'right'?: string
    'right-mid'?: string
    'middle'?: string
  }
  truncate?: string
  colWidths?: number[]
  colAligns?: number[]
  style?: {
    'padding-left'?: number
    'padding-right'?: number
    'head'?: string[]
    'border'?: string[]
    'compact'?: boolean
  }
  head?: any[]
}

const defaultOptions = {
  chars: {
    'top': '─',
    'top-mid': '┬',
    'top-left': '┌',
    'top-right': '┐',
    'bottom': '─',
    'bottom-mid': '┴',
    'bottom-left': '└',
    'bottom-right': '┘',
    'left': '│',
    'left-mid': '├',
    'mid': '─',
    'mid-mid': '┼',
    'right': '│',
    'right-mid': '┤',
    'middle': '│'
  },
  truncate: '…',
  colWidths: [],
  colAligns: [],
  style: {
    'padding-left': 1,
    'padding-right': 1,
    'head': ['red'],
    'border': ['grey'],
    'compact': false
  },
  head: []
}

export { Options, defaultOptions }
export default { defaultOptions }
