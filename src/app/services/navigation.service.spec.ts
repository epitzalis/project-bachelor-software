import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { NavigationService } from './navigation.service'

const routerMock = {
  navigate: () => null,
  getCurrentNavigation: () => ({
    extras: null,
  }),
}

describe('NavigationService', () => {
  let service: NavigationService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NavigationService,
        {
          provide: Router,
          useValue: routerMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    service = TestBed.inject(NavigationService)
  })

  it('should create', () => {
    expect(service).toBeTruthy()
  })

  it('toResult calls router navigate', () => {
    const router = TestBed.inject(Router)
    const spy = spyOn(router, 'navigate')
    service.toResult(null, null)
    expect(spy).toHaveBeenCalled()
  })

  it('getNavigationExtras calls router getCurrentNavigation.extras()', () => {
    const router = TestBed.inject(Router)
    const spy = spyOn(router, 'getCurrentNavigation')
    service.getNavigationExtras()
    expect(spy).toHaveBeenCalled()
  })
})
