export type Calculator = 'boole' | 'proposition'

export enum ConversionTypeCalculator {
    'p' = 'a',
    'q' = 'b',
    'r' = 'c',
    's' = 'd',
    '~' = '¬',
    'v' = '+',
    '^' = '*',
    'x' = '*',
}

export const universalVariables = ['a', 'b', 'c', 'd']
