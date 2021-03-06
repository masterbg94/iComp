import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'iphone',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'imac',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'macbook-air',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'macbook-pro',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'ipad',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'mac-pro',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'mac-mini',
    loadChildren: './modules/iphone/iphone.module#IphoneModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: 'service',
    loadChildren: './modules/service/service.module#ServiceModule'
  },
  {
    path: 'product',
    loadChildren: './modules/product/product.module#ProductModule'
  },
  {
    path: 'privacy',
    loadChildren: './modules/privacy/privacy.module#PrivacyModule'
  },
  {
    path: 'compare',
    loadChildren: './modules/compare/compare.module#CompareModule'
  },
  {
    path: 'lager',
    loadChildren: './modules/lager/lager.module#LagerModule'
  }
  ,
  {
    path: ':item/details/:id',
    loadChildren: './modules/item-detail/item-detail.module#ItemDetailModule'
  },
  {
    path: 'cart',
    loadChildren: './modules/cart/cart.module#CartModule'
  },
  {
    path: 'equipment',
    loadChildren: './modules/equipment/equipment.module#EquipmentModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
