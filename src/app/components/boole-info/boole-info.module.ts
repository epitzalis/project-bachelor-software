import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooleInfoComponent } from '@components/boole-info/boole-info.component'

@NgModule({
  declarations: [
    BooleInfoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BooleInfoComponent,
  ],
})
export class BooleInfoModule { }
