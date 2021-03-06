import { Component, ViewEncapsulation } from '@angular/core'
import { LanguageService } from '@services/language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(
    private readonly languageService: LanguageService,
  ) {
    this.languageService.setlanguage()
  }
}
