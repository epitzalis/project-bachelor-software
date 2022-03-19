import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { CalculatorService } from '@services/calculator.service'
import { NavigationService } from '@services/navigation.service'
import { CalculatorComponent } from './calculator.component'

describe('CalculatorComponent', () => {
  let component: CalculatorComponent
  let fixture: ComponentFixture<CalculatorComponent>
  let calculatorService: CalculatorService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        CalculatorComponent,
      ],
      providers: [
        CalculatorService,
        NavigationService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent)
    component = fixture.componentInstance
    calculatorService = TestBed.inject(CalculatorService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('set iTypeCalculator calls onClear method and set a value', () => {
    const spy = spyOn(component, 'onClear').and.callThrough()
    component.iTypeCalculator = 'proposition'
    expect(spy).toHaveBeenCalled()
    expect(component.typeCalculator).toBe('proposition')
  })

  it('exceptionSubscription works when there is an error', () => {
    const spy = spyOn(calculatorService['exceptionSource'], 'next').and.callThrough()
    calculatorService.throwExceptionSubject()
    expect(spy).toHaveBeenCalled()
  })

  it('onAddCharacter works when first character is added', () => {
    component.valueCalculator = ''
    component.onAddCharacter('a')
    expect(component.valueCalculator).toBe('a')
  })

  it('onBack removes a character', () => {
    component.valueCalculator = 'a*'
    component.onBack()
    expect(component.valueCalculator).toBe('a')
  })

  it('After a negative symbol you can only put a variable', () => {
    component.valueCalculator = '¬'
    component.onAddCharacter('*')
    expect(component.valueCalculator).toBe('¬')
    component.onAddCharacter('a')
    expect(component.valueCalculator).toBe('¬a')
  })

  it('After of an operator can only put a variable, negative symbol or an opening of parentheses', () => {
    component.valueCalculator = 'a*'
    component.onAddCharacter('-')
    expect(component.valueCalculator).toBe('a*')
    component.onAddCharacter('b')
    expect(component.valueCalculator).toBe('a*b')
  })

  it('After of a variable can only put an operator or closing parentheses', () => {
    component.valueCalculator = 'a'
    component.onAddCharacter('a')
    expect(component.valueCalculator).toBe('a')
    component.onAddCharacter('*')
    expect(component.valueCalculator).toBe('a*')
  })

  it('After a parenthesis start can only put a negative symbol, an opening parenthesis or variable', () => {
    component.valueCalculator = '('
    component.onAddCharacter('*')
    expect(component.valueCalculator).toBe('(')
    component.onAddCharacter('a')
    expect(component.valueCalculator).toBe('(a')
  })

  it('After a closing parenthesis can only go an operator or closing parenthesis', () => {
    component.valueCalculator = '(a*b)'
    component.onAddCharacter('c')
    expect(component.valueCalculator).toBe('(a*b)')
    component.onAddCharacter('*')
    expect(component.valueCalculator).toBe('(a*b)*')
  })

  it('¬(a+¬b)+¬(¬a+b) boole calculate returns a correct result', () => {
    const service = TestBed.inject(NavigationService)
    component.valueCalculator = ''
    component.typeCalculator = 'boole'
    // ¬(a+¬b)+¬(¬a+b)
    component.onAddCharacter('¬')
    component.onAddCharacter('(')
    component.onAddCharacter('a')
    component.onAddCharacter('+')
    component.onAddCharacter('¬')
    component.onAddCharacter('b')
    component.onAddCharacter(')')
    component.onAddCharacter('+')
    component.onAddCharacter('¬')
    component.onAddCharacter('(')
    component.onAddCharacter('¬')
    component.onAddCharacter('a')
    component.onAddCharacter('+')
    component.onAddCharacter('b')
    component.onAddCharacter(')')
    const result = [
      ['a', 'b', '¬(a+¬b)+¬(¬a+b)'],
      ['0', '0', '0'],
      ['0', '1', '1'],
      ['1', '0', '1'],
      ['1', '1', '0'],
    ]
    const spy = spyOn(service, 'toResult')
    component.onCalculate()
    expect(spy).toHaveBeenCalledWith('boole', result)
  })

  it('¬a*b*(c+¬d)+a*¬b+b*¬c*d boole calculate returns a correct result', () => {
    const service = TestBed.inject(NavigationService)
    component.valueCalculator = ''
    component.typeCalculator = 'boole'
    // ¬a*b*(c+¬d)+a*¬b+b*¬c*d
    component.onAddCharacter('¬')
    component.onAddCharacter('a')
    component.onAddCharacter('*')
    component.onAddCharacter('b')
    component.onAddCharacter('*')
    component.onAddCharacter('(')
    component.onAddCharacter('c')
    component.onAddCharacter('+')
    component.onAddCharacter('¬')
    component.onAddCharacter('d')
    component.onAddCharacter(')')
    component.onAddCharacter('+')
    component.onAddCharacter('a')
    component.onAddCharacter('*')
    component.onAddCharacter('¬')
    component.onAddCharacter('b')
    component.onAddCharacter('+')
    component.onAddCharacter('b')
    component.onAddCharacter('*')
    component.onAddCharacter('¬')
    component.onAddCharacter('c')
    component.onAddCharacter('*')
    component.onAddCharacter('d')
    const result = [
      ['a', 'b', 'c', 'd', '¬a*b*(c+¬d)+a*¬b+b*¬c*d'],
      ['0', '0', '0', '0', '0'],
      ['0', '0', '0', '1', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '1', '1', '0'],
      ['0', '1', '0', '0', '1'],
      ['0', '1', '0', '1', '1'],
      ['0', '1', '1', '0', '1'],
      ['0', '1', '1', '1', '1'],
      ['1', '0', '0', '0', '1'],
      ['1', '0', '0', '1', '1'],
      ['1', '0', '1', '0', '1'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '1', '1'],
      ['1', '1', '1', '0', '0'],
      ['1', '1', '1', '1', '0'],
    ]
    const spy = spyOn(service, 'toResult')
    component.onCalculate()
    expect(spy).toHaveBeenCalledWith('boole', result)
  })

  it('pv~p proposition calculate returns a correct result', () => {
    const service = TestBed.inject(NavigationService)
    component.valueCalculator = ''
    component.typeCalculator = 'proposition'
    // pv~p
    component.onAddCharacter('p')
    component.onAddCharacter('v')
    component.onAddCharacter('¬')
    component.onAddCharacter('p')
    const result = [
      ['p', 'pv~p'],
      ['F', 'V'],
      ['V', 'V'],
    ]
    const spy = spyOn(service, 'toResult')
    component.onCalculate()
    expect(spy).toHaveBeenCalledWith('proposition', result)
  })

  it('p^qv~r proposition calculate returns a correct result', () => {
    const service = TestBed.inject(NavigationService)
    component.valueCalculator = ''
    component.typeCalculator = 'proposition'
    // p^qv~r
    component.onAddCharacter('p')
    component.onAddCharacter('^')
    component.onAddCharacter('q')
    component.onAddCharacter('v')
    component.onAddCharacter('~')
    component.onAddCharacter('r')
    const result = [
      ['p', 'q', 'r', 'p^qv~r'],
      ['F', 'F', 'F', 'V'],
      ['F', 'F', 'V', 'F'],
      ['F', 'V', 'F', 'V'],
      ['F', 'V', 'V', 'F'],
      ['V', 'F', 'F', 'V'],
      ['V', 'F', 'V', 'F'],
      ['V', 'V', 'F', 'V'],
      ['V', 'V', 'V', 'V'],
    ]
    const spy = spyOn(service, 'toResult')
    component.onCalculate()
    expect(spy).toHaveBeenCalledWith('proposition', result)
  })
})
