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

export const negativeSymbols = '~¬'

export const operatorSymbols = 'v+^*x'

export const variableSymbols = 'paqbrcsd'

export const openParenthesesSymbols = '('

export const closeParenthesesSymbols = ')'
