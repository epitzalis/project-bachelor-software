import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BooleInfoComponent } from './boole-info.component'

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
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
