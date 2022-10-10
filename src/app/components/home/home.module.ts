import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
// import { ChurchRelevantComponent } from 'src/app/shared/components/church-relevant/church-relevant.component';
import { LoveCompassionComponent } from './love-compassion/love-compassion.component';
import { OurSermonsComponent } from './our-sermons/our-sermons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';





@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent, 
    LoveCompassionComponent,
    OurSermonsComponent,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule ],
})
export class HomeModule {}
