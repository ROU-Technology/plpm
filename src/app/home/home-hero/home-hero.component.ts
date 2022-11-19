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
  constructor() {}

  ngOnInit(): void {}
}
