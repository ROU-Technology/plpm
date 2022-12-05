import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {ContactUsRoutingModule} from "./contact-us-routing-module.module";

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, SharedModule, ContactUsRoutingModule],
  exports: [ContactUsComponent],
})
export class ContactUsModule {
}
