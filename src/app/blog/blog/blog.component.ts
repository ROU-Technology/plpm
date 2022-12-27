import {SermonService} from './../../shared/sermon.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'plpm-sermon',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @ViewChild(NgForm) productForm!: NgForm;
  events: any[] | any;

  public contacts: Array<any> = [
    {
      time: {
        day: 'Tuesday 13 May, 2022',
        author: 'By John Hunau Deo',
      },
      text: 'Church was doing what he often did when dropped An oracle',
      text1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \n laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',

      classNames: 'contacts',
    },
  ];

  constructor(private sermonService: SermonService) {
  }

  ngOnInit() {
    this.events = this.sermonService.getEvents();
  }
}
