import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CobokComponent } from './cobok/cobok.component'
import { RootComponent } from './root/root.component'

const routes: Routes = [{ path: '', component: RootComponent }, { path: 'cobok', component: CobokComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
