import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeSliderService } from 'src/app/shared/homeslider.service';
import { Subscription } from 'rxjs';

import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Hero, HeroInterface } from 'src/app/interface/homehero';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'plpm-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeHeroComponent implements OnInit {
  slope: HeroInterface[];
  sliders: Hero[];
  errorMessage: string = '';
  sub!: Subscription;
  hideit: boolean = false;
  changestate: boolean = true;
  videosIDs: string[] = [];
  currentVideo: string = '';
  activeIndex: number = 0;

  constructor(private homeSliderService: HomeSliderService) {}

  ngOnInit(): void {
    this.sub = this.homeSliderService.getsliders().subscribe({
      next: (sliders) => {
        const ids = sliders.map((hero) => {
          return hero.attributes.videoId;
        });
        console.log('slide', sliders);
        this.videosIDs = ids;
        console.log(this.videosIDs);
        this.sliders = sliders;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // videoProp() {
  //   this.sliders.map((slide) => {});
  // }

  onSlideChange(event) {
    console.log(event);
    console.log(event[0].activeIndex);
    this.activeIndex = event[0].activeIndex;
    this.currentVideo = this.videosIDs[this.activeIndex];
  }

  loopsliderForid(): any {}

  oop(): any {
    console.log(this.loopsliderForid());
  }

  // }
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
}
