import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './components/box/box.component';
import { ChurchRelevantComponent } from './components/church-relevant/church-relevant.component';

@NgModule({
  declarations: [BoxComponent, ChurchRelevantComponent],
  imports: [CommonModule],
  exports: [CommonModule, BoxComponent, ChurchRelevantComponent],
})
export class SharedModule {}
