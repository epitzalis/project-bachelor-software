import { ErrorHandler, NgModule } from '@angular/core'
import { CalculatorErrorHandler } from './calculator-error-handler.service'

  @NgModule({
    providers: [{ provide: ErrorHandler, useClass: CalculatorErrorHandler }],
  })

export class CalculatorErrorHandlerModule {}
