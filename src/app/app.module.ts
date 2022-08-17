import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeroComponent } from './components/home/home-hero/home-hero.component';
import { BoxComponent } from './shared/components/box/box.component';
import { ChurchRelevantComponent } from './components/church-relevant/church-relevant.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoveCompassionComponent } from './components/home/love-compassion/love-compassion.component';
import { OurSermonsComponent } from './components/home/our-sermons/our-sermons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeroComponent,
    BoxComponent,
    ChurchRelevantComponent,
    FooterComponent,
    LoveCompassionComponent,
    OurSermonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
