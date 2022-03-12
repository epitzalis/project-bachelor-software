import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { PropositionDetailComponent } from './proposition-detail.component'
import { PropositionDetailRoutingModule } from './proposition-detail-routing.module'

@NgModule({
  declarations: [
    PropositionDetailComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PropositionDetailRoutingModule,
  ],
  exports: [
    PropositionDetailComponent,
  ],
})
export class PropositionDetailModule { }
