import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableModule } from '@components/table/table.module'
import { PropositionInfoModule } from '@components/proposition-info/proposition-info.module'
import { BooleInfoModule } from '@components/boole-info/boole-info.module'
import { TranslateModule } from '@ngx-translate/core'
import { ResultComponent } from './result.component'
import { ResultRoutingModule } from './result-routing.module'

@NgModule({
  declarations: [
    ResultComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ResultRoutingModule,
    PropositionInfoModule,
    BooleInfoModule,
    TableModule,
  ],
  exports: [
    ResultComponent,
  ],
})
export class ResultModule { }
