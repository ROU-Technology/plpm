import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { BoxComponent } from './component/box/box.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { EventModule } from './event/event.module';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    NavBarComponent
  ],
  imports: [
    
    BrowserModule,
    AboutModule,
    EventModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
