import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'plpm-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeHeroComponent implements OnInit {
  hideit: boolean = false;
  changestate: boolean = true;
  videosID: any = ['ntfxBg9E52Y', 'jP3qAvnmpZk'];

  constructor() {}

  ngOnInit(): void {}
  togglefullscreen() {
    this.hideit = !this.hideit;
  }
  PlayActivevideo(): any {
    this.changestate = !this.changestate;
  }
  // nextvideo(event): any {
  //   console.log(event[0].activeIndex + 'you get it ');
  // }
}
