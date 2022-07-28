import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsModule } from './modules/contact-us/contact-us.module';

import { AppComponent } from './app.component';
import { BoxComponent } from './shared/components/box/box.component';
import { ChurchRelevantComponent } from './components/church-relevant/church-relevant.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    // BoxComponent,
    ChurchRelevantComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
