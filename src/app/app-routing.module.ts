import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'result/:type',
    loadChildren: () => import('./pages/result/result.module')
      .then(m => m.ResultModule),
  },
  {
    path: 'boole',
    loadChildren: () => import('./pages/boole-detail/boole-detail.module')
      .then(m => m.BooleDetailModule),
  },
  {
    path: 'proposition',
    loadChildren: () => import('./pages/proposition-detail/proposition-detail.module')
      .then(m => m.PropositionDetailModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
