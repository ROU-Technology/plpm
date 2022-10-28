import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { LoveCompassionComponent } from './love-compassion/love-compassion.component';
import { OurSermonsComponent } from './our-sermons/our-sermons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { sermonsPreview } from './our-sermons-preview/sermonsPreviews.component';
import { upcomingEventPreview } from './upcoming-events-previews/upcomingEventPreview.component';
import { servetheWorld } from './servethWorld/servetheWorld.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    LoveCompassionComponent,
    sermonsPreview,
    upcomingEventPreview,
    servetheWorld,
    OurSermonsComponent,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
