import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from 'src/app/modules/cart/pages/cart.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class CartRouterModule {
}
