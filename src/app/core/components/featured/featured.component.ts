import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-component',
  templateUrl: './featured.component.html',
  styleUrls: [ './featured.component.scss' ]
})
export class FeaturedComponent {
  featuredItems = [
    {
      name: 'Apple iPhone 11 PRO',
      price: 'Vec od 139.000 Din',
      img: './assets/images/iphone/iphone11pro-green.png'
    },
    {
      name: 'Apple iPhone 11',
      price: 'Vec od 90.000 Din',
      img: './assets/images/iphone/iphone11-purple.png'
    },
    {
      name: 'Apple iMac 27"',
      price: 'Vec od 220.000 Din',
      img: './assets/images/imac/imac-27inch.png'
    },
    {
      name: 'Apple iPad Pro',
      price: 'Vec od 109.000 Din',
      img: './assets/images/iPad/iPad-pro.png'
    },
    {
      name: 'Apple AirPods',
      price: 'Vec od 20.000 Din',
      img: './assets/images/airpods/airpods.png'
    },
    {
      name: 'Beats Solo 3',
      price: 'Vec od 43.000 Din',
      img: './assets/images/beats/beats-solo-3.png'
    }
  ];
}
