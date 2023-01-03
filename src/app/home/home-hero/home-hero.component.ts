import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Pagination, Navigation, Swiper } from 'swiper';
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
  videosIDs: any = ['ntfxBg9E52Y', 'jP3qAvnmpZk'];
  currentVideo: string = '';
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onSlideChange(event) {
    console.log(event);
    console.log(event[0].activeIndex);
    this.activeIndex = event[0].activeIndex;
    this.currentVideo = this.videosIDs[this.activeIndex];
  }

  togglefullscreen() {
    this.hideit = !this.hideit;
  }

  PlayActivevideo(id: string): any {
    this.currentVideo = id;
    console.log(this.currentVideo);
    this.changestate = !this.changestate;
  }

  closePopup() {
    this.changestate = !this.changestate;
  }
  // nextvideo(event): any {
  //   console.log(event[0].activeIndex + 'you get it ');
  // }
}
