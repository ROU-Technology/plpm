import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestprayerCounselSupportDonateComponent } from './requestprayer_counsel_support_donate.component';
import { RequestprayerCounselSupportDonateroutingModule } from './requestprayer_counsel_support_donate-routing.module';


@NgModule({
  declarations: [RequestprayerCounselSupportDonateComponent],
  imports: [CommonModule, RequestprayerCounselSupportDonateroutingModule],
  exports: [RequestprayerCounselSupportDonateComponent],
})
export class RequestprayerCounselSupportDonateModule {} 