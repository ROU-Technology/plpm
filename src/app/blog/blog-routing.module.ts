import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogDetails} from "./blog-details/blog-details.component";
import {BlogComponent} from "./blog/blog.component";


const routes: Routes = [{path: '', component: BlogComponent}, {
  path: ':id', component: BlogDetails
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
