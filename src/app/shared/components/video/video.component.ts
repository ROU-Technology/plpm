import {Component, OnInit} from '@angular/core';
import {PlayerOptions, YtPlayerService} from "yt-player-angular";

@Component({
  selector: 'plpm-video',
  template: `
    <yt-player seamless [videoId]="'ntfxBg9E52Y'" [options]="options"></yt-player>`,
  styleUrls: ['./video.component.scss']

})
export class VideoComponent implements OnInit {

  options: PlayerOptions = {
    controls: false,
    info: false,
    captions: false,
  }


  constructor(private ytPlayerService: YtPlayerService) {

  }

  ngOnInit() {
    // const tag = document.getElementsByTagName('iframe')
    // tag.contentDocument.getElementsByClassName('ytp-show-cards-title').style.display = 'none'
  }

}
