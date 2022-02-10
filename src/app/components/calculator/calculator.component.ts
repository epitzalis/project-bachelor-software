import {
  Component, ElementRef, Input, Renderer2, ViewChild,
} from '@angular/core'
import { NavigationService } from '@services/navigation.service'
import {
  Calculator, closeParenthesesSymbols, negativeSymbols,
  openParenthesesSymbols, operatorSymbols, variableSymbols,
} from '@models/calculator.dto'
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
    if (this.inputCalculator?.nativeElement) {
      this.renderer.setProperty(this.inputCalculator.nativeElement, 'value', newValue)
    }
  }

  public onAddCharacter(character: string): void {
    if (this.valueCalculator) {
      const oldValue = this.valueCalculator
      const lastCharacter = oldValue.charAt(oldValue.length - 1)
      if (this.validateCharacter(character, lastCharacter)) {
        this.valueCalculator = oldValue + character
      }
    } else {
      this.valueCalculator = character
    }
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

  private validateCharacter(character: string, lastCharacter: string): boolean {
    if (negativeSymbols.includes(lastCharacter)) {
      // Después de un símbolo negativo solo se puede poner una variable
      return variableSymbols.includes(character) || openParenthesesSymbols === character
    }
    if (operatorSymbols.includes(lastCharacter)) {
      // Después de un operador solo puede ir una variable o un paréntesis
      return variableSymbols.includes(character)
              || character === '(' || negativeSymbols.includes(character)
    }
    if (variableSymbols.includes(lastCharacter)) {
      // Después de una variable solo puede ir un operador
      return operatorSymbols.includes(character) || closeParenthesesSymbols === character
    }
    if (openParenthesesSymbols === lastCharacter) {
      // Después de un inicio de paréntesis solo puede ir un símbolo negativo una variable o inicio paréntesis
      return negativeSymbols.includes(character) || variableSymbols.includes(character)
                || openParenthesesSymbols === character
    }
    if (closeParenthesesSymbols === lastCharacter) {
      // Después de un cierre de paréntesis solo puede ir un operador o cierre de paréntesis
      return operatorSymbols.includes(character) || closeParenthesesSymbols === character
    }
    return true
  }
}
