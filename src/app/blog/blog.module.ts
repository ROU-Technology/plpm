import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {SharedModule} from "../shared/shared.module";
import {BlogComponent} from "./blog/blog.component";
import {BlogDetails} from "./blog-details/blog-details.component";


@NgModule({
  declarations: [BlogComponent, BlogDetails],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ],
  exports: [BlogComponent]
})
export class BlogModule {
}
