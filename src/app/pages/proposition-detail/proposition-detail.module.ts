import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PropositionDetailComponent } from './proposition-detail.component'
import { PropositionDetailRoutingModule } from './proposition-detail-routing.module'

@NgModule({
  declarations: [
    PropositionDetailComponent,
  ],
  imports: [
    CommonModule,
    PropositionDetailRoutingModule,
  ],
  exports: [
    PropositionDetailComponent,
  ],
})
export class PropositionDetailModule { }
