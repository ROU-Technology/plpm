import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventDetailsService } from 'src/app/shared/event-details.service';

@Component({
  selector: 'plpm-event-details',
  templateUrl: './event-details.component.html',
   styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @ViewChild(NgForm) productForm!: NgForm;
  events:any[] | any

   public contacts: Array<any>  = [
     {
      location: {
        address: 'No 233 Main St.',
        city: 'New York',
        country: 'United States'
      },
      time: {
        day: '13 May, 2018',
    },
       title: 'Upcoming Event',
       text: 'Singles Affirs July 2022 \n Eidtion',
       text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \n labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.',
       text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.',
       text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \n labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.',
       classNames: 'contacts',
    }
 ];


  constructor(private eventService: EventDetailsService) { }

  ngOnInit() {
       this.events = this.eventService.getEvents()
    }
}
