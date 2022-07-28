import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    @ViewChild(NgForm) productForm!: NgForm;

  public data: Array<any>  = [
    {
      text: 'CONTACT',
      // body: 'GET IN TOUCH WITH OUR CHURCH',
      body: 'GET IN TOUCH WITH<br> OUR CHURCH',
      classNames: 'banner',
    },
  ];

  public contacts: Array<any>  = [
    {
      title: 'Address',
      text: 'NH 234 PUBLIC SQUARE\n SAN FRANCISCO 65368',
      text1: 'Contact Details',
      text2: '(480) 555-0103\n FINSWEET@EXAMPLE.COM',
      text3: 'Find us here',
      classNames: 'contacts',
      icon: 'assets/images/facebook.svg',
      icon1: 'assets/images/twitter.svg',
      icon2: 'assets/images/linkedIn.svg',
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
