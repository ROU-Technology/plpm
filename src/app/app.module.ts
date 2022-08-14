import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsModule } from './contact-us/contact-us.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, ContactUsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
