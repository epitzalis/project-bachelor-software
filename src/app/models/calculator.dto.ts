export const booleType = 'boole'

export const propositionType = 'proposition'

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

export enum ConversionPropositionTypeCalculator {
    'a' = 'p',
    'b' = 'q',
    'c' = 'r',
    'd' = 's',
    '¬' = '~',
    '+' = 'v',
    '*' = '^',
}

export const universalVariables = ['a', 'b', 'c', 'd']

export const negativeSymbols = '~¬'

export const operatorSymbols = 'v+^*x'

export const variableSymbols = 'paqbrcsd'

export const openParenthesesSymbols = '('

export const closeParenthesesSymbols = ')'
