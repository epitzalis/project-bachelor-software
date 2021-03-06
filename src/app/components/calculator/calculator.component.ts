import {
  Component, ElementRef, Input, Renderer2, ViewChild, OnInit, OnDestroy, ViewEncapsulation,
} from '@angular/core'
import { NavigationService } from '@services/navigation.service'
import {
  booleType,
  Calculator, closeParenthesesSymbols, negativeSymbols,
  openParenthesesSymbols, operatorSymbols, propositionType, variableSymbols,
} from '@models/calculator.dto'
import { CalculatorService } from '@services/calculator.service'
import { Subscription } from 'rxjs'
import { TranslateService } from '@ngx-translate/core'
import { ConversionService } from '@services/conversion.service'

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

  public readonly booleType = booleType

  public readonly propositionType = propositionType

  public typeCalculator: Calculator = booleType

  public errorMessage = ''

  public isException = false

  private exceptionSubscription: Subscription

  constructor(
    private readonly calculatorService: CalculatorService,
    private readonly conversionService: ConversionService,
    private readonly navigationService: NavigationService,
    private readonly translateService: TranslateService,
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
      const universalValue = this.conversionService.convertToUniversal(this.valueCalculator)
      const usedVariables = this.calculatorService.getUsedVariables(universalValue)
      if (usedVariables.length) {
        const arrayData = this.calculateArrayData(universalValue, usedVariables)
        this.navigationService.toResult(this.typeCalculator, arrayData)
      }
    }
  }

  private calculateArrayData(universalValue: string, usedVariables: string[]): string[][] {
    // Se crea el primer nivel con los t??tulos
    const headData = this.calculatorService.getHeadArrayData(universalValue, usedVariables)
    let arrayData: string[][] = [headData]
    // Crear entradas vac??as de los arrays
    arrayData = this.calculatorService.createResultEntries(arrayData, usedVariables)
    // Se Rellena la matriz con valores verdaderos o falsos de cada variable
    arrayData = this.calculatorService.fillInitialValues(arrayData, usedVariables)
    // Calcula los resultados de la tabla
    arrayData = this.calculatorService.calculateArrayData(arrayData)
    if (this.typeCalculator === propositionType) {
      // En caso de ser una proposici??n, hay que volver a pasar a proposici??n la tabla
      arrayData = this.conversionService.convertToProposition(arrayData)
    }
    return arrayData
  }

  private validateCharacter(character: string, lastCharacter: string): boolean {
    let isValid = true
    let errorMessage: string
    this.clearErrorMessages()
    if (negativeSymbols.includes(lastCharacter)) {
      // Despu??s de un s??mbolo negativo solo se puede poner una variable
      errorMessage = this.translateService.instant('ERROR.AFTER_NEGATIVE')
      isValid = variableSymbols.includes(character) || openParenthesesSymbols === character
    } else if (operatorSymbols.includes(lastCharacter)) {
      // Despu??s de un operador solo puede ir una variable, s??mbolo negativo o una apertura de par??ntesis
      errorMessage = this.translateService.instant('ERROR.AFTER_OPERATOR')
      isValid = variableSymbols.includes(character)
              || character === openParenthesesSymbols || negativeSymbols.includes(character)
    } else if (variableSymbols.includes(lastCharacter)) {
      // Despu??s de una variable solo puede ir un operador o cierre de par??ntesis
      errorMessage = this.translateService.instant('ERROR.AFTER_VARIABLE')
      isValid = operatorSymbols.includes(character) || closeParenthesesSymbols === character
    } else if (openParenthesesSymbols === lastCharacter) {
      // Despu??s de un inicio de par??ntesis solo puede ir un s??mbolo negativo, una apertura de par??ntesis o variable
      errorMessage = this.translateService.instant('ERROR.AFTER_OPEN_PARENTHESES')
      isValid = negativeSymbols.includes(character) || variableSymbols.includes(character)
                || openParenthesesSymbols === character
    } else if (closeParenthesesSymbols === lastCharacter) {
      // Despu??s de un cierre de par??ntesis solo puede ir un operador o cierre de par??ntesis
      errorMessage = this.translateService.instant('ERROR.AFTER_CLOSE_PARENTHESES')
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
