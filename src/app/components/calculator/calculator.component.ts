import {
  Component, ElementRef, Input, Renderer2, ViewChild,
} from '@angular/core'
import { NavigationService } from '@services/navigation.service'
import { Calculator } from '@models/calculator.dto'
import { CalculatorService } from './services/calculator.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  @Input() public set iTypeCalculator(type: Calculator) {
    this.onClear()
    this.typeCalculator = type
  }

  @ViewChild('inputCalculator', { static: false }) inputCalculator: ElementRef<HTMLInputElement>

  public typeCalculator: Calculator = 'boole'

  constructor(
    private readonly calculatorService: CalculatorService,
    private readonly navigationService: NavigationService,
    private readonly renderer: Renderer2,
  ) {}

  get valueCalculator(): string {
    return this.inputCalculator.nativeElement.value
  }

  set valueCalculator(newValue: string) {
    this.renderer.setProperty(this.inputCalculator.nativeElement, 'value', newValue)
  }

  public onAddCharacter(character: string): void {
    const oldValue = this.valueCalculator
    this.valueCalculator = oldValue + character
  }

  public onBack(): void {
    this.valueCalculator = this.valueCalculator.slice(0, -1)
  }

  public onClear(): void {
    this.valueCalculator = ''
  }

  public onCalculate(): void {
    if (this.valueCalculator) {
      const universalValue = this.calculatorService.convertToUniversal(this.valueCalculator)
      const usedVariables = this.calculatorService.getUsedVariables(universalValue)
      if (usedVariables.length) {
        // Create first level with titles
        const headData = this.calculatorService.getHeadArrayData(universalValue, usedVariables)
        let arrayData: string[][] = [headData]
        // Create all empty array entries
        arrayData = this.calculatorService.createResultEntries(arrayData, usedVariables)
        // Fill the array with true or false values of each variable
        arrayData = this.calculatorService.fillInitialValues(arrayData, usedVariables)
        // Calculare array data
        arrayData = this.calculatorService.calculateArrayData(arrayData)
        this.navigationService.toResult(this.typeCalculator, arrayData)
      }
    }
  }
}
