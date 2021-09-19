import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CalculatorComponent } from './calculator.component'
import { CalculatorService } from './services/calculator.service'

@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalculatorComponent,
  ],
  providers: [
    CalculatorService,
  ],
})
export class CalculatorModule { }
