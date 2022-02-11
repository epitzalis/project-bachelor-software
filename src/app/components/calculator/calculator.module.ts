import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { CalculatorComponent } from './calculator.component'

@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    CalculatorComponent,
  ],
})
export class CalculatorModule { }
