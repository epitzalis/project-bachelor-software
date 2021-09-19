import { Injectable } from '@angular/core'
import { UtilService } from '@services/util.service';
import { ConversionTypeCalculator, universalVariables } from '../models/calculator.dto';

@Injectable()
export class CalculatorService {

  constructor(
    private readonly utilService: UtilService,
  ){}

  public convertToUniversal(originalValue: string): string {
    for (const propositionCharacter in ConversionTypeCalculator) {
        originalValue = this.utilService.replaceAll(originalValue, propositionCharacter, 
                                                        ConversionTypeCalculator[propositionCharacter])
    }
    return originalValue
  }

  public getUsedVariables(universalValue: string): string[] {
    let usedVariables = []
    universalVariables.forEach((variable: string) => {
      if (universalValue.includes(variable)) {
        usedVariables.push(variable)
      }
    })
    return usedVariables
  }

  public getHeadArrayData(universalValue: string, usedVariables: string[]): string[] {
    const headData: string[] = []
    usedVariables.forEach((variable: string) => {
      headData.push(variable)
    })
    headData.push(universalValue)
    return headData
  }

  public createResultEntries(arrayData: string[][], usedVariables: string[]): string[][] {
    const numberResults = this.getNumberResults(usedVariables.length)
    for (let i = 0; i < numberResults; i += 1) {
      const row = []
      for (let j = 0; j < usedVariables.length + 1; j += 1) {
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
      for (let j = 1; j < arrayDataFilled.length; j += 1) {
        if (numberConsecutiveTrues === counterConsecutiveTrues) {
          counterConsecutiveTrues = 0
          actualValue = !actualValue
        }
        arrayDataFilled[j][numberUnfilledVariables - 1] = actualValue ? '1' : '0'
        counterConsecutiveTrues += 1
      }
      numberUnfilledVariables -= 1
      numberConsecutiveTrues *= 2
    }
    return arrayDataFilled
  }

  private getNumberResults(numberVariables: number): number {
    return Math.pow(2, numberVariables)
  }

}
