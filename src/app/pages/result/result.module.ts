import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableModule } from '@components/table/table.module'
import { ResultComponent } from './result.component'
import { ResultRoutingModule } from './result-routing.module'

@NgModule({
  declarations: [
    ResultComponent,
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    TableModule,
  ],
  exports: [
    ResultComponent,
  ],
})
export class ResultModule { }
