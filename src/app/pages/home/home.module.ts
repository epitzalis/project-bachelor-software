import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CalculatorModule } from '@components/calculator/calculator.module'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalculatorModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
