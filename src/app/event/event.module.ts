import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { SharedModule } from '../shared/shared.module';
import { EventRoutingModule } from './event-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventThumbnailComponent } from '../shared/event-thumbnail.component';
import { EventService } from './event.service';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    EventComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventRoutingModule,
    MarkdownModule.forChild(),
  ],
  exports: [EventComponent, EventDetailsComponent],
})
export class EventModule {}
