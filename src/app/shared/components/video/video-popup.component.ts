import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerOptions, YtPlayerService } from 'yt-player-angular';

@Component({
  selector: 'plpm-video-popup',
  template: `
    <div class="w-full h-full">
      <yt-player
        seamless
        [videoId]="videoschild"
        [options]="options"
      ></yt-player>

      <button
        (click)="stop()"
        class="w-24 h-12 bg-green-500 top-[10px] right-[90px] absolute text-white rounded-md font-bold"
      >
        Stop
      </button>
    </div>
  `,
  // (stateChange)="play($event)"
  styleUrls: ['./video.component.scss'],
})
export class VideoPopupComponent implements OnInit {
  @Input() videoschild: any;
  @Output() close: EventEmitter<any> = new EventEmitter();
  options: PlayerOptions = {
    controls: true,
    info: false,
    captions: false,
    autoplay: true,
  };

  constructor(private ytPlayerService: YtPlayerService) {}

  ngOnInit() {
    //console.log(this.ytPlayerService);
  }

  play(event) {
    console.log(event);
    this.ytPlayerService.play();
  }

  stop() {
    console.log('stop');
    this.ytPlayerService.stop();
    this.close.emit();
  }
}
