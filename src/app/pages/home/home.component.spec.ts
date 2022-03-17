import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { HomeComponent } from './home.component'
import { NavigationService } from '../../services/navigation.service'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        HomeComponent,
      ],
      providers: [
        NavigationService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('onChange Select changes calculator type', () => {
    const service = TestBed.inject(NavigationService)
    const spy = spyOn(service, 'toHome').and.callFake(() => null)
    component.onChangeSelect('proposition')
    expect(spy).toHaveBeenCalled()
    expect(component.typeCalculator).toBe('proposition')
  })
})
