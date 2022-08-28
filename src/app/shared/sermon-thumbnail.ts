import { Component, Input } from '@angular/core'

@Component({
  selector: 'sermon-thumbnail',
  template: `
      
      <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 700; font-size: 12px;
        line-height: 14px; letter-spacing: 0.08em; text-transform: uppercase;
        background: linear-gradient(109.61deg, #A54E2B -53.83%, #DC9853 62.61%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;">{{event?.type}}</div>
      <h2 style="font-size: 24px;">{{event?.name}}</h2><br>
      
      <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 400; font-size: 16px;
        line-height: 24px; color: #161722; opacity: 0.78;">{{event?.body}}</div><br>

      <div *ngIf="event?.location" style="font-family: 'Roboto Condensed'; font-style: normal;
        font-weight: 400; font-size: 16px; line-height: 24px; color: #161722;">
        <!-- <ul class="fa-ul"> -->
          <span>{{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}},<br>{{event?.location?.country}}</span>
        <!-- </ul> -->
      </div>
  `
  ,
  styles: [`
  .fa-search {
      transform: rotateZ(42deg);
    }
  `]
})
export class SermonThumbnailComponent {
   @Input() event:any
}
