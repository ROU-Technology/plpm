import { SermonThumbnailComponent } from './../shared/sermon-thumbnail';
import { SermonComponent } from './sermon/sermon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonRoutingModule } from './sermon-routing.module';
import { sermon_details } from './sermon-details/sermon-details.component';

@NgModule({
  declarations: [SermonComponent, SermonThumbnailComponent, sermon_details],
  imports: [CommonModule, SharedModule, SermonRoutingModule],
  exports: [SermonComponent],
})
export class SermonModule {}
