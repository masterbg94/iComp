import {Component} from '@angular/core';

@Component({
  selector: 'app-featured-component',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  featuredItems = [
    {
      name: 'Apple iPhone 7s',
      price: 'Vec od 55.000 Din',
      img: './assets/iPhone7.png'
    },
    {
      name: 'Apple iPhone XR',
      price: 'Vec od 90.000 Din',
      img: './assets/iPhoneX.png'
    },
    {
      name: 'Apple iMac',
      price: 'Vec od 180.000 Din',
      img: './assets/iMac.png'
    },
    {
      name: 'Apple iMac',
      price: 'Vec od 45.000 Din',
      img: './assets/iPad.png'
    },
    {
      name: 'Apple AirPods',
      price: 'Vec od 20.000 Din',
      img: './assets/headphones.png'
    },
    {
      name: 'Magic Keyboard',
      price: 'Vec od 10.000 Din',
      img: './assets/keyboard.png'
    }
  ];
}
