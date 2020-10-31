import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartRouterModule } from 'src/app/modules/cart/cart.router-module';
import { CartComponent } from 'src/app/modules/cart/pages/cart.component';


@NgModule({
  imports: [
    CartRouterModule,
    CommonModule
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule {
}
