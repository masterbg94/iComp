import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  animations: [
    trigger('openCloseAnimation', [
      state('open', style({ height: '*', opacity: 1, paddingTop: '48px' })),
      state('closed', style({ height: '48px', opacity: 0 })),
      transition('* => closed', animate('0.2s')),
      transition('* => open', animate('0.3s')),
    ]),
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
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
      image: '/assets/images/mac-menu/mac-pro.png',
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
      route: '/iphones/details/31',
    },
    {
      name: 'iPhone 11',
      image: '/assets/images/iphone-menu/iphone-11.png',
      route: '/iphones/details/32',
    },
    {
      name: 'iPhone SE',
      image: '/assets/images/iphone-menu/iphone-se.png',
      route: '/iphones/details/33',
    },
    {
      name: 'iPhone XR',
      image: '/assets/images/iphone-menu/iphone-xr.png',
      route: '/iphones/details/34',
    },
  ];

  ipadMenu = [
    {
      name: 'iPad Pro (2020)',
      image: '/assets/images/ipad-menu/ipad-pro-2020.png',
      route: '/ipad-pro-2020',
    },
    {
      name: 'iPad Pro (2018)',
      image: '/assets/images/ipad-menu/ipad-pro-2018.png',
      route: '/ipad-pro-2018',
    },
    {
      name: 'iPad Air',
      image: '/assets/images/ipad-menu/ipad-air.png',
      route: '/ipad-air',
    },
    {
      name: 'iPad',
      image: '/assets/images/ipad-menu/ipad.png',
      route: '/ipad',
    },
    {
      name: 'iPad mini',
      image: '/assets/images/ipad-menu/ipadMini.png',
      route: '/ipad-mini',
    },
  ]

  constructor() {
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
}
