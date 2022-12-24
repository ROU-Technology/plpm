import { Component, Input, OnInit } from '@angular/core';
import { PlayerOptions, YtPlayerService } from 'yt-player-angular';

@Component({
  selector: 'plpm-video-popup',
  template: ` <yt-player
    seamless
    [videoId]="videoschild"
    [options]="options"
    (stateChange)="play($event)"
  ></yt-player>`,
  // (stateChange)="play($event)"
  styleUrls: ['./video.component.scss'],
})
export class VideoPopupComponent implements OnInit {
  @Input() videoschild: any;
  options: PlayerOptions = {
    controls: false,
    info: false,
    captions: false,
  };

  constructor(private ytPlayerService: YtPlayerService) {}

  ngOnInit() {
    //console.log(this.ytPlayerService);
  }

  play(event) {
    console.log(event);
    if (event.type == 5) {
      this.ytPlayerService.play();
    }
  }
}
