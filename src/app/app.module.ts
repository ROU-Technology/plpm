import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactUsModule } from './contact-us/contact-us.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { SermonService } from './shared/sermon.service';
import { SermonModule } from './sermon/sermon.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventModule } from './event/event.module';
import { EventDetailsService } from './shared/event-details.service';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AboutModule,
    EventModule,
    ContactUsModule,
    SermonModule,
    HomeModule,
  ],
  providers: [EventDetailsService, SermonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
