import {
  Component, ElementRef, Input, Renderer2, ViewChild, OnInit, OnDestroy, ViewEncapsulation,
} from '@angular/core'
import { NavigationService } from '@services/navigation.service'
import {
  Calculator, closeParenthesesSymbols, negativeSymbols,
  openParenthesesSymbols, operatorSymbols, variableSymbols,
} from '@models/calculator.dto'
import { CalculatorService } from '@services/calculator.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalculatorComponent implements OnInit, OnDestroy {
  @Input() public set iTypeCalculator(type: Calculator) {
    this.onClear()
    this.typeCalculator = type
  }

  @ViewChild('inputCalculator', { static: false }) inputCalculator: ElementRef<HTMLInputElement>

  public typeCalculator: Calculator = 'boole'

  public errorMessage = ''

  public isException = false

  private exceptionSubscription: Subscription

  constructor(
    private readonly calculatorService: CalculatorService,
    private readonly navigationService: NavigationService,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.exceptionSubscription = this.calculatorService.$exception.subscribe(() => {
      this.errorMessage = ''
      this.isException = true
    })
  }

  ngOnDestroy(): void {
    if (this.exceptionSubscription) {
      this.exceptionSubscription.unsubscribe()
    }
  }

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
    this.clearErrorMessages()
  }

  public onClear(): void {
    this.valueCalculator = ''
    this.clearErrorMessages()
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
    let isValid = true
    let errorMessage: string
    this.clearErrorMessages()
    if (negativeSymbols.includes(lastCharacter)) {
      // Después de un símbolo negativo solo se puede poner una variable
      errorMessage = 'Después de un símbolo negativo solo se puede poner una variable'
      isValid = variableSymbols.includes(character) || openParenthesesSymbols === character
    } else if (operatorSymbols.includes(lastCharacter)) {
      // Después de un operador solo puede ir una variable o una apertura de paréntesis
      errorMessage = 'Después de un operador solo puede ir una variable o una apertura de paréntesis'
      isValid = variableSymbols.includes(character)
              || character === openParenthesesSymbols || negativeSymbols.includes(character)
    } else if (variableSymbols.includes(lastCharacter)) {
      // Después de una variable solo puede ir un operador o cierre de paréntesis
      errorMessage = 'Después de una variable solo puede ir un operador o cierre de paréntesis'
      isValid = operatorSymbols.includes(character) || closeParenthesesSymbols === character
    } else if (openParenthesesSymbols === lastCharacter) {
      errorMessage = 'Después de un inicio de paréntesis solo puede ir un símbolo negativo, una apertura de paréntesis o variable'
      // Después de un inicio de paréntesis solo puede ir un símbolo negativo, una apertura de paréntesis o variable
      isValid = negativeSymbols.includes(character) || variableSymbols.includes(character)
                || openParenthesesSymbols === character
    } else if (closeParenthesesSymbols === lastCharacter) {
      errorMessage = 'Después de un cierre de paréntesis solo puede ir un operador o cierre de paréntesis'
      // Después de un cierre de paréntesis solo puede ir un operador o cierre de paréntesis
      isValid = operatorSymbols.includes(character) || closeParenthesesSymbols === character
    }
    if (!isValid) {
      this.errorMessage = errorMessage
    }
    return isValid
  }

  private clearErrorMessages(): void {
    this.errorMessage = ''
    this.isException = false
  }
}
