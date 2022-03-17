import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { PropositionInfoComponent } from './proposition-info.component'

describe('PropositionInfoComponent', () => {
  let component: PropositionInfoComponent
  let fixture: ComponentFixture<PropositionInfoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
      ],
      declarations: [
        PropositionInfoComponent,
      ],
      providers: [
        TranslateService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('loadInfo is and returns text of contradiction', () => {
    const rowsMock = [
      ['F', 'F', 'F'],
      ['F', 'V', 'F'],
      ['V', 'F', 'F'],
      ['V', 'V', 'F'],
    ]
    component['rows'] = rowsMock
    const service = TestBed.inject(TranslateService)
    const spy = spyOn(service, 'instant').and.callFake(() => null)
    component['loadInfo']()
    expect(spy).toHaveBeenCalledWith('RESULT.CONTRADICTION')
  })

  it('loadInfo is and returns text of tautology', () => {
    const rowsMock = [
      ['F', 'F', 'V'],
      ['F', 'V', 'V'],
      ['V', 'F', 'V'],
      ['V', 'V', 'V'],
    ]
    component['rows'] = rowsMock
    const service = TestBed.inject(TranslateService)
    const spy = spyOn(service, 'instant').and.callFake(() => null)
    component['loadInfo']()
    expect(spy).toHaveBeenCalledWith('RESULT.TAUTOLOGY')
  })

  it('loadInfo is and returns text of contingency', () => {
    const rowsMock = [
      ['F', 'F', 'F'],
      ['F', 'V', 'F'],
      ['V', 'F', 'F'],
      ['V', 'V', 'V'],
    ]
    component['rows'] = rowsMock
    const service = TestBed.inject(TranslateService)
    const spy = spyOn(service, 'instant').and.callFake(() => null)
    component['loadInfo']()
    expect(spy).toHaveBeenCalledWith('RESULT.CONTINGENCY')
  })
})
