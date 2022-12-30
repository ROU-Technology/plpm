import { Component, Input, OnInit } from '@angular/core';
import { PlayerOptions, YtPlayerService } from 'yt-player-angular';

@Component({
  selector: 'plpm-video',
  template: ` <yt-player
    seamless
    [videoId]="videoschild"
    [options]="options"
  ></yt-player>`,
  // (stateChange)="play($event)"
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() videoschild: any;
  options: PlayerOptions = {
    controls: false,
    info: false,
    captions: false,
    autoplay: false,
  };

  constructor(private ytPlayerService: YtPlayerService) {}

  ngOnInit() {
    //console.log(this.ytPlayerService);
  }
}
