import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SermonComponent } from './sermon/sermon.component';
import { sermon_details } from './sermon-details/sermon-details.component';

const routes: Routes = [{ path: '', component: SermonComponent },{
  path:':id',component:sermon_details
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SermonRoutingModule {}
