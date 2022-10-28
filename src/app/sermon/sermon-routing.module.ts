import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SermonComponent } from './sermon/sermon.component';

const routes: Routes = [{ path: '', component: SermonComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SermonRoutingModule {}
