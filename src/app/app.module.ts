import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { BoxComponent } from './shared/components/box/box.component';
import { ChurchRelevantComponent } from './components/church-relevant/church-relevant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeroComponent,
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
