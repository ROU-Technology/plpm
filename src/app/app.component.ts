import { Component } from '@angular/core';

@Component({
  selector: 'plpm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plpm';
  currentCustomer:string = 'Maria';

  hello: string = 'how are you?';

  data = [
    {
     imageUrl: './../assets/Icon.svg',
     textOne  : 'ABOUT US',
     textTwo: 'hello how are you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ipsam!'
    },

    {
      imageUrl: './../assets/Icon (1).svg',
      textOne  : 'GET INVOLVED',
      textTwo: 'hello how are you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ipsam!'
     },

     {
      imageUrl: './../assets/Icon (2).svg',
      textOne  : 'GIVING BACK',
      textTwo: 'hello how are you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ipsam!'
     }
  ]

  dataTwo = [
    {
     imageUrl : './../assets/fashion-man-love-people-5875438.svg',
     textOne  : 'Watch and listen to our sermons',
     textTwo: 'thats good stuff Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ipsam!',
     color: 'grey'
     
     
    },

    
  ]




}
