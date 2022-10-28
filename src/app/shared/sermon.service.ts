import { Injectable } from '@angular/core';

@Injectable()
export class SermonService {
  getEvents() {
    return EVENTS
  }
}

const EVENTS = [
  {
    id: 1,
    type:'Relationship',
    name: 'THE BEST WAY TO INSPIRE PEOPLE',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
  {
    id: 2,
    type:'Relationship',
    name: 'HOW TO SHOW COMPASSION',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
  {
    id: 3,
    type:'Relationship',
    name: 'THE BIBLICAL PURPOSE OF MONEY',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
  {
    id: 4,
    type:'Relationship',
    name: 'THE BEST WAY TO INSPIRE PEOPLE',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
  {
    id: 5,
    type:'Relationship',
    name: 'WHAT IT MEANS TO BE A DISCIPLE',
    body: 'We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
  {
    id: 6,
    type:'Relationship',
    name: 'WHAT IT MEANS TO BELIEVE',
    body: 'We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
  {
    id: 7,
    type:'Relationship',
    name: 'the modern church in 2022',
    body: 'We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want',
    location: {
      address: 'By Mathew Johnson',
      country: 'Tuesday 13 May, 2018'
    },
  },
]
