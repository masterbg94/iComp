import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
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
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
