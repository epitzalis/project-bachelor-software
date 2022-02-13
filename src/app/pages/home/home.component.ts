import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { booleType, Calculator, propositionType } from '@models/calculator.dto'
import { NavigationService } from '@services/navigation.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public readonly booleType = booleType

  public readonly propositionType = propositionType

  public typeCalculator: Calculator

  constructor(
    private readonly navigationService: NavigationService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.typeCalculator = this.activatedRoute.snapshot.queryParams?.typeCalculator || booleType
  }

  public onChangeSelect(typeCalculator: Calculator): void {
    this.typeCalculator = typeCalculator
    this.navigationService.toHome(this.typeCalculator)
  }
}
