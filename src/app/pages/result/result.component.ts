import { DOCUMENT } from '@angular/common'
import {
  Component, Inject, OnInit, ViewEncapsulation,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { booleType, Calculator } from '@models/calculator.dto'
import { NavigationService } from '@services/navigation.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResultComponent implements OnInit {
  public readonly booleType = booleType

  public columns: string[]

  public rows: string[][]

  public typeCalculator: Calculator

  private arrayData: string[][]

  private readonly HEAD_POSITION = 0

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navigationService: NavigationService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.typeCalculator = this.activatedRoute.snapshot.params?.type
    this.arrayData = this.getArrayData()
    if (!this.arrayData || !this.typeCalculator) {
      this.navigationService.toHome(this.typeCalculator)
    }
  }

  public ngOnInit(): void {
    this.loadTable()
    this.document.defaultView.scrollTo(0, 0)
  }

  public toHome(): void {
    this.navigationService.toHome(this.typeCalculator)
  }

  private getArrayData(): string[][] {
    return this.navigationService.getNavigationExtras()?.state?.arrayData
  }

  private loadTable(): void {
    if (this.arrayData?.length) {
      this.columns = [...this.arrayData[this.HEAD_POSITION]]
      this.arrayData.splice(this.HEAD_POSITION, 1)
      this.rows = this.arrayData.map((row: string[]) => [...row])
    }
  }
}
