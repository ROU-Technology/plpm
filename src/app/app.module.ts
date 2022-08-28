import { SermonService } from './shared/sermon.service';
import { SermonModule } from './sermon/sermon.module';
import { EventDetailsModule } from './event-details/event-details.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsModule } from './contact-us/contact-us.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { BoxComponent } from './component/box/box.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { EventModule } from './event/event.module';
import { EventDetailsService } from './shared/event-details.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    NavBarComponent
  ],
  imports: [

    BrowserModule,
    SharedModule,
    AboutModule,
    EventModule,
    ContactUsModule,
    EventDetailsModule,
    SermonModule
  ],
  providers: [EventDetailsService, SermonService],
  bootstrap: [AppComponent],
})
export class AppModule {}

