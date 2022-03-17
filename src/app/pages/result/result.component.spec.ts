import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { NavigationService } from '@services/navigation.service'
import { ResultComponent } from './result.component'

const arrayDataMock = [
  ['a', 'b', 'a*b'],
  ['0', '0', '0'],
  ['0', '1', '0'],
  ['1', '0', '0'],
  ['1', '1', '1'],
]

describe('ResultComponent', () => {
  let component: ResultComponent
  let fixture: ComponentFixture<ResultComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        ResultComponent,
      ],
      providers: [
        NavigationService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent)
    component = fixture.componentInstance
    component['arrayData'] = arrayDataMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('toHome call component.toHome()', () => {
    const service = TestBed.inject(NavigationService)
    const spy = spyOn(service, 'toHome').and.callFake(() => null)
    component.toHome()
    expect(spy).toHaveBeenCalled()
  })
})
