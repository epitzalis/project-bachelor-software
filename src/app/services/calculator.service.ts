import { Injectable } from '@angular/core'
import { UtilService } from '@services/util.service'
import { universalVariables } from '@models/calculator.dto'
import { create, all } from 'mathjs'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public $exception: Observable<void>

  private math = create(all)

  private exceptionSource = new Subject<void>()

  constructor(
    private readonly utilService: UtilService,
  ) {
    this.$exception = this.exceptionSource.asObservable()
  }

  public throwExceptionSubject(): void {
    this.exceptionSource.next()
  }

  public getUsedVariables(universalValue: string): string[] {
    const usedVariables = universalVariables.filter((variable: string) => universalValue.includes(variable))
    if (usedVariables.length === 0) {
      throw new Error('incorrect sentence')
    }
    return usedVariables
  }

  public getHeadArrayData(universalValue: string, usedVariables: string[]): string[] {
    return [...usedVariables, universalValue]
  }

  public createResultEntries(arrayData: string[][], usedVariables: string[]): string[][] {
    const numberResults = this.getNumberResults(usedVariables.length)
    for (let i = 0; i < numberResults; i++) {
      const row = []
      for (let j = 0; j < usedVariables.length + 1; j++) {
        row.push([])
      }
      arrayData.push(row)
    }
    return arrayData
  }

  public fillInitialValues(arrayData: string[][], usedVariables: string[]): string[][] {
    const arrayDataFilled = arrayData
    let numberUnfilledVariables = usedVariables.length
    let numberConsecutiveTrues = 1
    for (let i = numberUnfilledVariables; i !== 0; i -= 1) {
      let counterConsecutiveTrues = 0
      let actualValue = true
      for (let j = 1; j < arrayDataFilled.length; j++) {
        if (numberConsecutiveTrues === counterConsecutiveTrues) {
          counterConsecutiveTrues = 0
          actualValue = !actualValue
        }
        arrayDataFilled[j][numberUnfilledVariables - 1] = actualValue ? '0' : '1'
        counterConsecutiveTrues += 1
      }
      numberUnfilledVariables -= 1
      numberConsecutiveTrues *= 2
    }
    return arrayDataFilled
  }

  public calculateArrayData(arrayData: string[][]): string[][] {
    const arrayCalculated = arrayData
    const headData = arrayData[0]
    const sentence = headData[headData.length - 1]
    for (let i = 1; i < arrayCalculated.length; i++) {
      let mappedSentence = sentence
      for (let j = 0; j < arrayCalculated[i].length - 1; j++) {
        const variableName = headData[j]
        const variableValue = arrayCalculated[i][j]
        mappedSentence = this.utilService.replaceAll(mappedSentence, variableName, variableValue)
      }
      mappedSentence = this.applyNegativeSymbol(mappedSentence)
      // Se resuelven las sentencias que haya entre paréntesis
      mappedSentence = this.resolveSentences(mappedSentence)
      // Se debe de invertir el valor de cada símbolo que contenga un negativo antes
      mappedSentence = this.applyNegativeSymbol(mappedSentence)
      const evaluationResult = this.evaluateSentence(mappedSentence)
      arrayCalculated[i][arrayCalculated[i].length - 1] = evaluationResult
    }
    return arrayCalculated
  }

  private evaluateSentence(sentence: string): string {
    return this.math.evaluate(sentence) > 0 ? '1' : '0'
  }

  private getNumberResults(numberVariables: number): number {
    return <number> this.math.pow(2, numberVariables)
  }

  private applyNegativeSymbol(sentence: string) {
    // Se buscan los símbolos negativos para invertir el valor del siguiente caracter
    // Los carácteres solo se invierten cuando delante no hay un paréntesis
    for (let i = 0; i < (sentence.length - 1); i++) {
      const nextIndex = i + 1
      const character = sentence[i]
      const nextCharacter = sentence[nextIndex]
      if ((character === '~' || character === '¬') && (nextCharacter !== '(' && nextCharacter !== ')')) {
        const newCharacter = nextCharacter === '0' ? '1' : '0'
        sentence = this.utilService.setCharAt(sentence, i, '')
        sentence = this.utilService.setCharAt(sentence, i, newCharacter)
        i -= 1
      }
    }
    return sentence
  }

  private resolveSentences(sentence: string): string {
    // Se itera varias veces por la sentencia hasta conseguir obtener los resultados dentro de todos los paréntesis
    let isResolved = false
    while (!isResolved) {
      let indexStart = null
      let indexEnd = null
      for (let i = 0; i < sentence.length && indexEnd === null; i++) {
        // Se va buscando cuál es la sentencia de menor nivel encontrada,
        // para ir resolviéndola hasta llegar a resolver todos los paréntesis
        const character = sentence[i]
        if (character === '(') {
          indexStart = i
        } else if (character === ')') {
          indexEnd = i
        }
      }
      // Una vez que se encuentra una sentencia de nivel menor, se obtiene su valor
      if (indexStart === null && indexEnd === null) {
        // Si no se encuentran índices, es porque no hay más paréntesis en la sentencia
        isResolved = true
      } else if ((indexStart === null && indexEnd !== null) || indexStart !== null && indexEnd === null) {
        // Si entra en esta condición es porque los paréntesis no se pusieron correctamente
        throw new Error('incorrect sentence')
      } else {
        const parenthesesSentence = sentence.substring(indexStart, (indexEnd + 1))
        const evaluation = this.evaluateSentence(parenthesesSentence)
        // Se reemplaza el valor del paréntesis por el resultado de la evaluación
        sentence = this.utilService.replaceAll(sentence, parenthesesSentence, evaluation)
      }
    }
    return sentence
  }
}
