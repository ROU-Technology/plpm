import { SermonThumbnailComponent } from './../shared/sermon-thumbnail';
import { SermonComponent } from './sermon/sermon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SermonComponent, SermonThumbnailComponent],
  imports: [CommonModule, SharedModule],
  exports: [SermonComponent]
})
export class SermonModule { }



