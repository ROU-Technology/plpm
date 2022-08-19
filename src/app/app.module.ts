import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsModule } from './contact-us/contact-us.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
// import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, SharedModule, ContactUsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
