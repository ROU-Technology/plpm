import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-relevant',
  templateUrl: './church-relevant.component.html',
  styleUrls: ['./church-relevant.component.scss']
})
export class ChurchRelevantComponent implements OnInit {


  public data: Array<any>  = [
    {
      text: 'PHILOSOPHY',
      body: 'No man can be made perfect except by the right application of the the word of God in Hislife and day to day walk with jesus Christ, without which no man shall reign with the Lord of all(we are made perfect by our day to day walk with God as we walk day by day with the Lord).',
      icon: 'assets/images/icon-church-relevant1.svg',
    },
    {
      text: 'Our Believe',
      body: 'Perfect Liberty Power Ministry is a place where everybody matters in the presence of God and free to demonstrate or the gift of God to His service and to the service of men with all carefulness and in order(We believe when we walk together as a team can together achieve Gods purpose).',
      icon: 'assets/images/icon-church-relevant2.svg',
    },
    {
      text: 'The Ministry',
      body: 'The Ministry is the General umbrella for the fulfillment of the vision. The church, missions, crusades, media, publications and others find their expression through the Ministry(The functional head of the Ministry is the president).',
      icon: 'assets/images/icon-church-relevant3.svg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
