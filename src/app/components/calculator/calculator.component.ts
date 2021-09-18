import {
  Component, ElementRef, Input, ViewChild,
} from '@angular/core'
import { Calculator } from './models/calculator.dto'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  @Input() public typeCalculator: Calculator = 'boole'

  @ViewChild('inputCalculator', { static: false }) inputCalculator: ElementRef<HTMLInputElement>
}
