import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
      <!-- <div>Image{{event?.imageUrl}}</div> -->
      <div style="text-align:right;" class="Media">
        <time>
          <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 700; font-size: 24px;
            line-height: 28px; letter-spacing: -0.01em; text-transform: uppercase; color: #161722;"
            class="Major">20</div>
          <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 400; font-size: 16px;
            line-height: 19px; text-transform: uppercase; color: #161722;" class="Micro">JULY</div>
        </time>
      </div>
      <!-- <div *ngIf="event?.onlineUrl">
        {{event?.onlineUrl}}
      </div> -->
      <!-- <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 700; font-size: 24px;
        line-height: 28px; letter-spacing: -0.01em; text-transform: uppercase; color: #161722;">
        {{event?.date}}</div> -->
      <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 700; font-size: 12px;
        line-height: 14px; letter-spacing: 0.08em; text-transform: uppercase;
        background: linear-gradient(109.61deg, #A54E2B -53.83%, #DC9853 62.61%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;">{{event?.type}}</div>
      <h2 style="font-size: 24px;">{{event?.name}}</h2>
      <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 400; font-size: 16px;
        line-height: 24px; color: #161722; opacity: 0.78;">{{event?.body}}</div>

      <div style="font-family: 'Roboto Condensed'; font-style: normal; font-weight: 400; font-size: 16px;
        line-height: 24px; color: #161722;">
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fa fa-clock-o"></i></span><span>{{event?.time?.time1}}</span>
            <br><span class="pad-left">{{event?.time?.day}}</span></li>
        </ul>
      </div>

      <div *ngIf="event?.location" style="font-family: 'Roboto Condensed'; font-style: normal;
        font-weight: 400; font-size: 16px; line-height: 24px; color: #161722;">
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fa fa-search"></i></span><span>{{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}},<br>{{event?.location?.country}}</span></li>
        </ul>
      </div>
  `
  ,
  styles: [`
  .fa-search {
      transform: rotateZ(42deg);
    }
  `]
})
export class EventThumbnailComponent {
   @Input() event:any
}
