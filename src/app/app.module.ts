import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObituariesModule } from './obituaries/obituaries.module';
import { ObituaryComponent } from './obituaries/obituary/obituary.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObituariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
