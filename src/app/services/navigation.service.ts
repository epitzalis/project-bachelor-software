import { Injectable } from '@angular/core'
import { NavigationExtras, Router } from '@angular/router'
import { Calculator } from '@models/calculator.dto'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private readonly router: Router,
  ) { }

  public toResult(type: Calculator, arrayData: string[][]): void {
    this.router.navigate([`/result/${type}`], { state: { arrayData } })
  }

  public toHome(typeCalculator: Calculator): void {
    this.router.navigate([''], { queryParams: { typeCalculator } })
  }

  public getNavigationExtras(): NavigationExtras {
    return this.router.getCurrentNavigation()?.extras
  }
}
