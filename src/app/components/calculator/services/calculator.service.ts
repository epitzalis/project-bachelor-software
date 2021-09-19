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

}
