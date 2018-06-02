import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './/app-routing.module'
import { CobokComponent } from './cobok/cobok.component'
import { RootComponent } from './root/root.component'

@NgModule({
  declarations: [AppComponent, CobokComponent, RootComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
