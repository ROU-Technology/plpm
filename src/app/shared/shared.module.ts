import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './components/box/box.component';
import { ChurchRelevantComponent } from './components/church-relevant/church-relevant.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BoxComponent,
    ChurchRelevantComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    BoxComponent,
    ChurchRelevantComponent,
    NavBarComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
