import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private readonly translateService: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.setlanguage()
  }

  get view(): WindowProxy {
    return this.document.defaultView
  }

  get storage(): Storage {
    return this.view.localStorage
  }

  get browserLanguage(): string {
    const userLang = this.view.navigator.language
    if (userLang) {
      const language = userLang.substring(0, 2)
      return language
    }
    return 'en'
  }

  get language(): string {
    return this.storage.getItem('language') || this.browserLanguage
  }

  set language(language: string) {
    this.storage.setItem('language', language)
  }

  public setlanguage(): void {
    this.translateService.setDefaultLang('en')
    this.translateService.use(this.language)
  }
}
