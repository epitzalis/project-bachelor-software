import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public isBooleSelected = true

  public onChangeSelect(isSelected: boolean): void {
    this.isBooleSelected = isSelected
  }
}
