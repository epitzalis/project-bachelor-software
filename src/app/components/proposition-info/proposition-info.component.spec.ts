import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { PropositionInfoComponent } from './proposition-info.component'

const rowsMock = [
  ['F', 'F', 'F'],
  ['F', 'V', 'F'],
  ['V', 'F', 'F'],
  ['V', 'V', 'V'],
]

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
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionInfoComponent)
    component = fixture.componentInstance
    component['rows'] = rowsMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
