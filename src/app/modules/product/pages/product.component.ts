import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const MagicZoom: any;
declare const MagicScroll: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit, AfterViewInit {
  selectedColor: string;
  selectedCapacity: any;
  product = {
    name: 'Iphone X🅁',
    mainImage: '/assets/images/iphone/iphone-white.jpg',
    basePrace: 99000,
    currency: 'RSD',
    images: [
      {
        href: '/assets/images/iphone/iphone-white.jpg',
      },
      {
        href: '/assets/images/iphone/iphone11pro.jpg',
      },
      {
        href: '/assets/images/iphone/iphone11pro-green.png',
      },
      {
        href: '/assets/images/iphone/iphone11-purple.png',
      },
    ],
    colors: [
      {
        name: 'bela',
        background: '#fff'
      },
      {
        name: 'crna',
        background: '#000'
      },
      {
        name: 'plava',
        background: '#47AFE6'
      },
      {
        name: 'zuta',
        background: '#F9CE45'
      },
      {
        name: 'koral',
        background: '#FF6E5B'
      },
      {
        name: 'crvena',
        background: '#981411'
      },
    ],
    capacity: [
      {
        value: '64GB',
        price: 99000,
        currency: 'RSD'
      },
      {
        value: '128GB',
        price: 120000,
        currency: 'RSD'
      }
    ]
  };

  public ngOnInit(): void {
    this.selectedColor = this.product.colors[0].name;
    this.selectedCapacity = this.product.capacity[0].value;
  }

  public ngAfterViewInit(): void {
    MagicScroll.start();
    MagicZoom.start();
  }

  getNumberWithDot(number: number) {
    return `${ number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }`;
  }

  public onClick(color: any) {
    this.selectedColor = color.name;
    console.log(color);
  }

  public onCapacitySelect(capacity: { price: number; currency: string; value: string } | { price: number; currency: string; value: string }) {
    this.selectedCapacity = capacity.value;
  }
}
