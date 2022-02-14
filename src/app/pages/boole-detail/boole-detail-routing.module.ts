import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BooleDetailComponent } from './boole-detail.component'

const routes: Routes = [
  {
    path: '',
    component: BooleDetailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooleDetailRoutingModule { }
