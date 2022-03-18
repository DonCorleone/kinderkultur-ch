import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchlosswochenComponent } from './components/schlosswochen/schlosswochen.component';
import { HeaderComponent } from './components/header/header.component';
import { SpielgruppeComponent } from './components/spielgruppe/spielgruppe.component';
import { FigurentheaterComponent } from './components/figurentheater/figurentheater.component';

@NgModule({
  declarations: [
    AppComponent,
    SchlosswochenComponent,
    HeaderComponent,
    SpielgruppeComponent,
    FigurentheaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
