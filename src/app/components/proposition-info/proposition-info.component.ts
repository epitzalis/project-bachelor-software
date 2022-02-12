import {
  Component, ViewEncapsulation, OnInit, Input,
} from '@angular/core'

@Component({
  selector: 'app-proposition-info',
  templateUrl: './proposition-info.component.html',
  styleUrls: ['./proposition-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PropositionInfoComponent implements OnInit {
  @Input() public rows: string[][]

  public text: string

  ngOnInit(): void {
    this.loadText()
  }

  private loadText(): void {
    const resultPosition = this.rows[0].length - 1
    const totalResults = this.rows.length
    const totalTrues = this.rows.filter(item => item[resultPosition] === 'V').length
    if (totalTrues === 0) {
      this.text = 'Esta tabla de la verdad es una contradicción'
    } else if (totalTrues === totalResults) {
      this.text = 'Esta tabla de la verdad es una tautología'
    } else {
      this.text = 'Esta tabla de la verdad es una contingencia'
    }
  }
}
