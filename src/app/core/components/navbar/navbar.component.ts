import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  animations: [
    trigger('openCloseAnimation', [
      state('open', style({
        height: '*',
        opacity: 1,
        paddingTop: '48px'
      })),
      state('closed', style({
        height: '48px',
        opacity: 0
      })),
      transition('* => closed', animate('0.2s')),
      transition('* => open', animate('0.3s')),
    ]),
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  submenu = false;
  menu: string;

  mecMenu = [
    {
      name: 'IMac',
      image: '/assets/images/mac-menu/imac.png',
      router: '/imac'
    },
    {
      name: 'Mac Pro',
      image: '/assets/images/mac-menu/mac-pro1.png',
      router: '/mac-pro'
    },
    {
      name: 'Mac mini',
      image: '/assets/images/mac-menu/mac-mini.png',
      router: '/mac-mini'
    },
    {
      name: 'MacBook Air',
      image: '/assets/images/mac-menu/mac-air.png',
      router: '/macbook-air'
    },
    {
      name: 'MacBook Pro',
      image: '/assets/images/mac-menu/mac-book.png',
      router: '/macbook-pro'
    },
  ];

  iphoneMenu = [
    {
      name: 'iPhone 11 Pro',
      image: '/assets/images/iphone-menu/iphone-11-pro.png',
      route: '/iphone/details/34',
    },
    {
      name: 'iPhone 11',
      image: '/assets/images/iphone-menu/iphone-11.png',
      route: '/iphone/details/33',
    },
    {
      name: 'iPhone XS',
      image: '/assets/images/iphone-menu/iphone-se.png',
      route: '/iphone/details/32',
    },
    {
      name: 'iPhone XR',
      image: '/assets/images/iphone-menu/iphone-xr.png',
      route: '/iphone/details/31',
    },
  ];

  ipadMenu = [
    {
      name: 'iPad Pro (2020)',
      image: '/assets/images/ipad-menu/ipad-pro-2020.png',
      route: '/ipad/details/45',
    },
    {
      name: 'iPad Pro (2018)',
      image: '/assets/images/ipad-menu/ipad-pro-2018.png',
      route: '/ipad/details/44',
    },
    {
      name: 'iPad Air',
      image: '/assets/images/ipad-menu/ipad-air.png',
      route: '/ipad/details/43',
    },
    {
      name: 'iPad',
      image: '/assets/images/ipad-menu/ipad.png',
      route: '/ipad/details/42',
    },
    {
      name: 'iPad mini',
      image: '/assets/images/ipad-menu/ipadMini.png',
      route: '/ipad/details/41',
    },
  ];

  iwatchMenu = [
    {
      name: 'Apple Watch Series 6',
      image: '/assets/images/iwatch-menu/watch-series-6.png',
      route: '/iwatch/details/51',
    },
    {
      name: 'Apple Watch SE',
      image: '/assets/images/iwatch-menu/watch-series-se.png',
      route: '/iwatch/details/52',
    }
  ];

  iMusicMenu = [
    {
      name: 'AirPods',
      image: '/assets/images/iMusic-menu/airpods.png',
      route: '/imusic/details/81',
    },
    {
      name: 'AirPods Pro',
      image: '/assets/images/iMusic-menu/airpods-pro.png',
      route: '/imusic/details/82',
    }
  ];

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  openMacMenu() {
    this.submenu = true;
    this.menu = 'MacMenu';
  }

  openIpadMenu() {
    this.submenu = true;
    this.menu = 'IpadMenu';
  }

  openIphoneMenu() {
    this.submenu = true;
    this.menu = 'IphoneMenu';
  }

  openIwatchMenu() {
    this.submenu = true;
    this.menu = 'IwatchMenu';
  }

  openImusicMenu() {
    this.submenu = true;
    this.menu = 'iMusicMenu';
  }

  pageChanged(routerLink: string) {
    window.open(routerLink, '_self');
  }

  numberOfItemsInLocalStorage() {
    if (JSON.parse(localStorage.getItem('cart'))) {
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
}
