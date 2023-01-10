import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryroutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryroutingModule],
  exports: [GalleryComponent],
})
export class GalleryModule {}
