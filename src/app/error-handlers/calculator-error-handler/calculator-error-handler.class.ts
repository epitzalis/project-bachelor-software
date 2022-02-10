import { ErrorHandler, Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable()
export class CalculatorErrorHandler implements ErrorHandler {
  constructor(
  @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  handleError(error) {
    console.log('Error en la calculadora')
  }
}
