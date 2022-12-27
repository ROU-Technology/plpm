import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as R from './shared/constants/routes';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {
    path: R.home,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: R.contact,
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: R.sermon,
    loadChildren: () =>
      import('./sermon/sermon.module').then((m) => m.SermonModule),
  },
  {
    path: R.event,
    loadChildren: () =>
      import('./event/event.module').then((m) => m.EventModule),
  },
  {
    path: R.blog,
    loadChildren: () =>
      import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: R.about,
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
