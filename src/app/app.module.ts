import { NgModule, SecurityContext } from '@angular/core';
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
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {},
      },
    }),
    HttpClientModule,
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
