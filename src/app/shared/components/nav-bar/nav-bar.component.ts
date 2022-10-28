import { Component, OnInit } from '@angular/core';
import * as R from '../../constants/routes';

@Component({
  selector: 'plpm-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  hidenavbar: boolean = false;
  Routes = R;

  constructor() {}

  ngOnInit(): void {}

  togglenavbarmobile(): void {
    this.hidenavbar =!this.hidenavbar;
  }
}