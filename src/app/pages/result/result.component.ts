import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Calculator } from '@models/calculator.dto'
import { NavigationService } from '@services/navigation.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  public arrayData: string[][]

  public typeCalculator: Calculator

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navigationService: NavigationService,
  ) {
    this.typeCalculator = this.activatedRoute.snapshot.params?.type
    this.arrayData = this.getArrayData()
    if (!this.arrayData || !this.typeCalculator) {
      this.navigationService.toHome()
    }
  }

  private getArrayData(): string[][] {
    return this.navigationService.getNavigationExtras().state?.arrayData
  }
}
