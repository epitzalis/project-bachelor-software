import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { NavigationEnd, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { HeaderComponent } from './header.component'
import { LanguageService } from '../../services/language.service'

const languageServiceMock = {
  language: 'es',
  view: {
    location: {
      reload() {},
    },
  },
}

class RouterMock {
  public ne = new NavigationEnd(0, '_url', '_url_after_redirects')

  public events = new Observable(observer => {
    observer.next(this.ne)
    observer.complete()
  })
}

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
      ],
      declarations: [
        HeaderComponent,
      ],
      providers: [
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: Router,
          useClass: RouterMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('onClickBurger changes the value of isOpen', () => {
    component.isOpen = true
    component.onClickBurger()
    expect(component.isOpen).toBeFalse()
  })

  it('onChangeLanguage refreshes the web', () => {
    const service = TestBed.inject(LanguageService)
    const spy = spyOn(service.view.location, 'reload').and.callFake(() => null)
    component.onChangeLanguage('es')
    expect(spy).toHaveBeenCalled()
  })
})
