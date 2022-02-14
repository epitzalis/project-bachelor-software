import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PropositionDetailComponent } from './proposition-detail.component'

const routes: Routes = [
  {
    path: '',
    component: PropositionDetailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropositionDetailRoutingModule { }
