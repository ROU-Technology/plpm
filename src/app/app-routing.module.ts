import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as R from './shared/constants/routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
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
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: R.about,
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: R.gallery,
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: R.biography,
    loadChildren: () =>
      import('./biography/biography.module').then((m) => m.BiographyModule),
  },
  {
    path: R.requestprayer_counsel_donate,
    loadChildren: () =>
      import(
        './requestprayer_counsel_donate_suport/requestprayer_counsel_support_donate.module'
      ).then((m) => m.RequestprayerCounselSupportDonateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
