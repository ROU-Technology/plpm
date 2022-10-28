import { Component, OnInit } from '@angular/core';
import * as R from '../../shared/constants/routes';

@Component({
  selector: 'plpm-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  Routes = R;

  constructor() {}

  ngOnInit(): void {}
}
