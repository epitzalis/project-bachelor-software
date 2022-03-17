import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BooleInfoComponent } from './boole-info.component'

const rowsMock = [
  ['0', '0', '0'],
  ['0', '1', '0'],
  ['1', '0', '0'],
  ['1', '1', '1'],
]

describe('BooleInfoComponent', () => {
  let component: BooleInfoComponent
  let fixture: ComponentFixture<BooleInfoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooleInfoComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleInfoComponent)
    component = fixture.componentInstance
    component.rows = rowsMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
