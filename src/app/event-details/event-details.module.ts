
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventThumbnailComponent } from '../shared/event-thumbnail.component';


@NgModule({
  declarations: [EventDetailsComponent, EventThumbnailComponent],
  imports: [CommonModule, SharedModule],
  exports: [EventDetailsComponent],
})
export class EventDetailsModule { }



// @NgModule({
//   declarations: [ContactUsComponent],
//   imports: [CommonModule, SharedModule],
//   exports: [ContactUsComponent],
// })
// export class ContactUsModule {}
