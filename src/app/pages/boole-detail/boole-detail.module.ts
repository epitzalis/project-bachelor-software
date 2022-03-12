import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { BooleDetailRoutingModule } from './boole-detail-routing.module'
import { BooleDetailComponent } from './boole-detail.component'

@NgModule({
  declarations: [
    BooleDetailComponent,
  ],
  imports: [
    CommonModule,
    BooleDetailRoutingModule,
    TranslateModule,
  ],
  exports: [
    BooleDetailComponent,
  ],
})
export class BooleDetailModule { }
