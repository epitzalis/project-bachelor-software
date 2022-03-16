import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { LanguageService } from '@services/language.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  public isOpen = false

  public selectedLanguage: string

  public selectedFlag: string

  constructor(
    private readonly router: Router,
    private readonly languageService: LanguageService,
  ) {
    this.attachCloseMenu()
  }

  ngOnInit(): void {
    this.selectedFlag = this.languageService.language
    this.selectedLanguage = `LANGUAGE.${this.languageService.language.toUpperCase()}`
  }

  public onClickBurger(): void {
    this.isOpen = !this.isOpen
  }

  public onChangeLanguage(language: string): void {
    this.languageService.language = language
    this.languageService.view.location.reload()
  }

  private attachCloseMenu(): void {
    this.router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.isOpen = false
      }
    })
  }
}
