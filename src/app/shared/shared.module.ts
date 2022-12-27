import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './components/box/box.component';
import { ChurchRelevantComponent } from './components/church-relevant/church-relevant.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SermonThumbnailComponent } from './sermon-thumbnail';
import { VideoComponent } from './components/video/video.component';
import { YtPlayerAngularModule } from 'yt-player-angular';
import { VideoPopupComponent } from './components/video/video-popup.component';

@NgModule({
  declarations: [
    BoxComponent,
    ChurchRelevantComponent,
    NavBarComponent,
    FooterComponent,
    SermonThumbnailComponent,
    VideoComponent,
    VideoPopupComponent,
  ],
  imports: [CommonModule, RouterModule, YtPlayerAngularModule],
  exports: [
    CommonModule,
    BoxComponent,
    ChurchRelevantComponent,
    NavBarComponent,
    FooterComponent,
    SermonThumbnailComponent,
    VideoComponent,
    VideoPopupComponent,
  ],
})
export class SharedModule {}
