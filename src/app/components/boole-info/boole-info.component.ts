import {
  Component, Input, OnInit, ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-boole-info',
  templateUrl: './boole-info.component.html',
  styleUrls: ['./boole-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BooleInfoComponent implements OnInit {
  @Input() public rows: string[][]

  public numberVariables: number

  public maxtermText: string // ∏ Son las posiciones con resultados final a 0

  public mintermText: string // ∑ Son las posiciones con resultados final a 1

  ngOnInit(): void {
    this.loadInfo()
  }

  private loadInfo(): void {
    if (this.rows) {
      this.numberVariables = this.rows[0]?.length - 1
      const mintermPositions = []
      const maxtermPositions = []
      for (let i = 0; i < this.rows.length; i++) {
        const value = this.rows[i][this.numberVariables]
        if (value === '0') {
          maxtermPositions.push(i)
        } else {
          mintermPositions.push(i)
        }
      }
      this.maxtermText = maxtermPositions.join(',')
      this.mintermText = mintermPositions.join(',')
    }
  }
}
