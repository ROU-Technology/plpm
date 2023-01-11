import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RequestprayerCounselSupportDonateComponent } from './requestprayer_counsel_support_donate.component';

const routes: Routes = [
  { path: '', component: RequestprayerCounselSupportDonateComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestprayerCounselSupportDonateroutingModule {}
