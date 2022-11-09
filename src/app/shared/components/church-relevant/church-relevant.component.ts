import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-relevant',
  templateUrl: './church-relevant.component.html',
  styleUrls: ['./church-relevant.component.scss']
})
export class ChurchRelevantComponent implements OnInit {


  public data: Array<any>  = [
    {
      text: 'ABOUT US',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'assets/images/icon-church-relevant1.svg',
    },
    {
      text: 'GET INVOLVED',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'assets/images/icon-church-relevant2.svg',
    },
    {
      text: 'GIVING BACK',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'assets/images/icon-church-relevant3.svg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
