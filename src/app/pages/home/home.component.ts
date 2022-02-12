import { Component, ViewEncapsulation } from '@angular/core'
import { booleType, propositionType } from '@models/calculator.dto'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public readonly booleType = booleType

  public readonly propositionType = propositionType

  public isBooleSelected = true

  public onChangeSelect(isSelected: boolean): void {
    this.isBooleSelected = isSelected
  }
}
