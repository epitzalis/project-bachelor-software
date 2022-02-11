import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CalculatorModule } from '@components/calculator/calculator.module'
import { TranslateModule } from '@ngx-translate/core'
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
    TranslateModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
