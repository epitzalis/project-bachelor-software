import { ErrorHandler, Injectable } from '@angular/core'
import { CalculatorService } from '@services/calculator.service'

@Injectable()
export class CalculatorErrorHandler implements ErrorHandler {
  constructor(
  private readonly calculatorService: CalculatorService,
  ) { }

  handleError() {
    this.calculatorService.throwExceptionSubject()
  }
}
