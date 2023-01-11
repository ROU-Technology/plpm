import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { LoveCompassionComponent } from './love-compassion/love-compassion.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { sermonsPreview } from './our-sermons-preview/sermonsPreviews.component';
import { upcomingEventPreview } from './upcoming-events-previews/upcomingEventPreview.component';
import { servetheWorld } from './servethWorld/servetheWorld.component';
import { share_inspire_inovate } from './share-inspire-inovate/share-inspire-inovate.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    LoveCompassionComponent,
    sermonsPreview,
    upcomingEventPreview,
    servetheWorld,
    share_inspire_inovate,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
