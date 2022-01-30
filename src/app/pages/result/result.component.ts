import { Component } from '@angular/core'
import { ActivatedRoute, Navigation, Router } from '@angular/router'
import { Calculator } from '@models/calculator.dto'
import { NavigationService } from '@services/navigation.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  public arrayData: string[][]

  public typeCalculator: Calculator = 'boole'

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly navigationService: NavigationService,
  ) {
    this.typeCalculator = this.activatedRoute.snapshot.params.type
    const navigation: Navigation = this.router.getCurrentNavigation()
    this.arrayData = navigation.extras.state?.arrayData
    if (!this.arrayData) {
      this.navigationService.toHome()
    }
  }
}
