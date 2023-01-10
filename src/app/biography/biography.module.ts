import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BiographyComponent } from './biography.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyroutingModule } from './biography-routing.modules';

@NgModule({
  declarations: [BiographyComponent],
  imports: [CommonModule, BiographyroutingModule],
  exports: [BiographyComponent],
})
export class BiographyModule {}
