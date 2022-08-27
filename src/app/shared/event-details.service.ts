import { Injectable } from '@angular/core';

@Injectable()
export class EventDetailsService  {
  getEvents() {
    return EVENTS
  }

  // getEvents_MAIN() {
  //   return EVENTS_MAIN
  // }
}

// const EVENTS_MAIN = [
//     {
//       id: 1,
//       imageUrl: '/assets/images/angularconnect-shield.png',
//       type:'Upcoming Event',
//       name: 'PRETORIA WE ARE HERE',
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       time: 'Friday 23:39 IST Saturday 11:20 ISD',
//       // price: 599.99,
//       location: {
//         address: 'No 233 Main St. ',
//         city: 'New York',
//         country: 'United States'
//       },
//     },
//      {
//        id: 2,
//        date: '9/26/2036',
//        type:'Upcoming Event',
//        name: 'DR. MOTSEKI IS COMPUTER SYSTEMS ENGINEER',
//        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//        time: 'Friday 23:39 IST Saturday 11:20 ISD',
//        // price: 599.99,
//        imageUrl: '/assets/images/angularconnect-shield.png',
//        location: {
//          address: 'No 233 Main St. ',
//          city: 'New York',
//          country: 'United States'
//        },
//      },
//   ]

const EVENTS = [
  {
    id: 1,
    date: '9/26/2036',
    type:'Upcoming Event',
    name: '100 RANDOM ACTS OF KINDNESS',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: {
        time1: 'Friday 23:39 IST',
        day: 'Saturday 11:20 ISD',
    },
    // price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'No 233 Main St. ',
      city: 'New York',
      country: 'United States'
    },
  },
  {
    id: 2,
    date: '9/26/2036',
    type:'Upcoming Event',
    name: 'FAITH IS A PROCESS, NOT A DESTINATION',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // time: 'Friday 23:39 IST Saturday 11:20 ISD',
    time: {
      time1: 'Friday 23:39 IST',
      day: 'Saturday 11:20 ISD',
  },
    // price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'No 233 Main St. ',
      city: 'New York',
      country: 'United States'
    },
  },
  {
    id: 3,
    date: '9/26/2036',
    type:'Upcoming Event',
    name: 'THERE IS NOTHING IMPOSSIBLE',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // time: 'Friday 23:39 IST Saturday 11:20 ISD',
    time: {
      time1: 'Friday 23:39 IST',
      day: 'Saturday 11:20 ISD',
  },
    // price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'No 233 Main St. ',
      city: 'New York',
      country: 'United States'
    },
  },
  {
    id: 4,
    date: '9/26/2036',
    type:'Upcoming Event',
    name: 'CELEBRATING FREEDOM AND LIFE',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // time: 'Friday 23:39 IST Saturday 11:20 ISD',
    time: {
      time1: 'Friday 23:39 IST',
      day: 'Saturday 11:20 ISD',
  },
    // price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'No 233 Main St. ',
      city: 'New York',
      country: 'United States'
    },
  },
]
