import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.setlanguage()
  }

  private setlanguage(): void {
    this.translateService.setDefaultLang('en')
    const { navigator } = this.document.defaultView
    const userLang = navigator.language
    if (userLang) {
      const language = userLang.substring(0, 2)
      this.translateService.use(language)
    }
  }
}
