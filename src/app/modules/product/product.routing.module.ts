import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './pages/product.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule {
}
