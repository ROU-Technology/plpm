import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: ':id', component: EventDetailsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
