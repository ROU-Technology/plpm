import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ChurchRelevantComponent } from './church-relevant/church-relevant.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ChurchRelevantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
