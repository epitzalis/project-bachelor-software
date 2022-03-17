import {
  Component, ViewEncapsulation, OnInit, Input,
} from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-proposition-info',
  templateUrl: './proposition-info.component.html',
  styleUrls: ['./proposition-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PropositionInfoComponent implements OnInit {
  @Input() public rows: string[][]

  public textInfo: string

  constructor(
    private readonly translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.loadInfo()
  }

  private loadInfo(): void {
    if (this.rows) {
      const resultPosition = this.rows[0].length - 1
      const totalResults = this.rows.length
      const totalTrues = this.rows.filter(item => item[resultPosition] === 'V').length
      if (totalTrues === 0) {
        this.textInfo = this.translateService.instant('RESULT.CONTRADICTION')
      } else if (totalTrues === totalResults) {
        this.textInfo = this.translateService.instant('RESULT.TAUTOLOGY')
      } else {
        this.textInfo = this.translateService.instant('RESULT.CONTINGENCY')
      }
    }
  }
}
