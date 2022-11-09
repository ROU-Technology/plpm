import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'share_insipre_inovate',
  templateUrl: './share-inspire-inovate.component.html',
  styleUrls: ['./share-inspire-inovate.component.scss'],
})
export class share_inspire_inovate implements OnInit {
  public data: Array<any> = [
    {
      title: 'Relationship',
      text: 'watch and listen to our sermons',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      location: {
        address: 'By Mathew Johnson',
        country: 'Tuesday 13 May, 2018',
      },
    },
    {
      title: 'Relationship',
      text: 'watch and listen to our sermons',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      location: {
        address: 'By Mathew Johnson',
        country: 'Tuesday 13 May, 2018',
      },
    },
    {
      title: 'Relationship',
      text: 'watch and listen to our sermons',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      location: {
        address: 'By Mathew Johnson',
        country: 'Tuesday 13 May, 2018',
      },
    },
    {
      title: 'Relationship',
      text: 'watch and listen to our sermons',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      location: {
        address: 'By Mathew Johnson',
        country: 'Tuesday 13 May, 2018',
      },
    },
  ];
  ngOnInit(): void {}
}
