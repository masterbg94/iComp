import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductService } from '../../../core/pruduct.service';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: [ './iphone.component.scss' ]
})
export class IphoneComponent implements OnInit {
  public bindData: any;
  data = [
    {
      title: 'iPhone',
      description: 'The iPhone uses a touch-screen interface that was unique upon its release. Other smart phone manufacturers have\n' +
        '        since added similar interfaces to their phones, but the iPhone is still the most common. Other smart phones\n' +
        '        offer non-touch screen interfaces for users who prefer keypad or button navigation.',
      item1: {
        img: './assets/iPhone7.png',
        name: 'iPhone 7',
        price: 'Vec od 55.000 Din',
        link: ''
      },
      item2: {
        img: './assets/iPhone7.png',
        name: 'iPhone X',
        price: 'Vec od 75.000 Din',
        link: ''
      },
      featuredimg: './assets/iphone11-pro.png'
    },
    {
      title: 'iMac',
      description: 'The iMac uses a touch-screen interface that was unique upon its release. Other smart phone manufacturers have\n' +
        '        since added similar interfaces to their phones, but the iPhone is still the most common. Other smart phones\n' +
        '        offer non-touch screen interfaces for users who prefer keypad or button navigation.',
      item1: {
        img: './assets/iPhoneX.png',
        name: 'iMac 2019',
        price: 'Vec od 155.000 Din',
        link: ''
      },
      item2: {
        img: './assets/iPhoneX.png',
        name: 'iMac 2020',
        price: 'Vec od 195.000 Din',
        link: ''
      },
      featuredimg: './assets/iphone11-pro.png'
    },
    {
      title: 'iPad',
      description: 'The iPad uses a touch-screen interface that was unique upon its release. Other smart phone manufacturers have\n' +
        '        since added similar interfaces to their phones, but the iPhone is still the most common. Other smart phones\n' +
        '        offer non-touch screen interfaces for users who prefer keypad or button navigation.',
      item1: {
        img: './assets/iPhone7.png',
        name: 'iPad 2019',
        price: 'Vec od 89.000 Din',
        link: ''
      },
      item2: {
        img: './assets/iPhoneX.png',
        name: 'iPad 2020',
        price: 'Vec od 99.000 Din',
        link: ''
      },
      featuredimg: './assets/iphone11-pro.png'
    }
  ];
  newData: any = [];
  newBindData: any;

  constructor(private router: Router, private prodService: ProductService) {
  }

  getData() {
    this.prodService.getAllProdData().pipe(take(1)).subscribe(
      (resp: any) => {
        this.newData = resp;
      }
    );
    this.subpageData();
  }

  subpageData() {
    if (this.router.url === '/imac') {
      this.newBindData = this.newData.imacs;
      this.newBindData.key = 'imac';
    }
    if (this.router.url === '/macbook-air') {
      this.newBindData = this.newData.macbookAir;
      this.newBindData.key = 'macbook air';
    }
    if (this.router.url === '/macbook-pro') {
      this.newBindData = this.newData.macbookPro;
      this.newBindData.key = 'macbook pro';
    }
    if (this.router.url === '/mac-pro') {
      this.newBindData = this.newData.macPro;
      this.newBindData.key = 'mac pro';
    }
    if (this.router.url === '/mac-mini') {
      this.newBindData = this.newData.macMini;
      this.newBindData.key = 'mac mini';
    }
    console.log('newBind', this.newBindData);
  }

  ngOnInit(): void {
    // if (this.router.url === '/iphone') {
    //   this.bindData = this.data.find(x => x.title === 'iPhone');
    //   console.log(this.bindData);
    // } else if (this.router.url === '/imac') {
    //   this.bindData = this.data.find(x => x.title === 'iMac');
    //   console.log(this.bindData);
    // } else if (this.router.url === '/ipad') {
    //   this.bindData = this.data.find(x => x.title === 'iPad');
    //   console.log(this.bindData);
    // }
    // console.log(this.router.url);

    this.getData();
  }
}
