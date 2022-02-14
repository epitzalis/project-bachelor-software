import {
  Component, ViewEncapsulation,
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public isOpen = false

  constructor(router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.isOpen = false
      }
    })
  }

  public onClickBurger(): void {
    this.isOpen = !this.isOpen
  }

  // todo
  public onChangeLanguage(language: string): void {
    this.isOpen = false
  }
}
