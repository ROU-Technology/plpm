import { Component, OnInit } from '@angular/core';
import * as R from '../../shared/constants/routes';
import { EventService } from '../event.service';

@Component({
  selector: 'plpm-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  Routes = R;

  event = [];

  constructor(private service: EventService) {}

  markdown =
    '<p>dhdgd</p><h1>djdjhdhfghf</h1><p><strong>shsgdgdgd</strong></p><ol style="list-style-type:decimal-leading-zero;"><li>dhgdgfd</li><li>dhgdgdg</li><li>hdgdg</li><li>ehdgdgtd</li></ol>';

  ngOnInit(): void {
    this.service.getEvents().subscribe((data) => {
      console.log(data);
      this.event.push(data);
      console.log(this.event);
    });
  }
}
