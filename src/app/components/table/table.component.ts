import {
  Component, Input, ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input() public columns: string[]

  @Input() public rows: string[][]
}
