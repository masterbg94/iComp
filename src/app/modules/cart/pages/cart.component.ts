import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any[];

  constructor() {}

  public ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('cart'));

    console.log(this.products);
  }
}
