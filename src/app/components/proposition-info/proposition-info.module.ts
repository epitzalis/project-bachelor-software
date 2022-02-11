import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PropositionInfoComponent } from './proposition-info.component'

@NgModule({
  declarations: [
    PropositionInfoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PropositionInfoComponent,
  ],
})
export class PropositionInfoModule { }
