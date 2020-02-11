import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductComponent} from './pages/product.component';
import {ProductRoutingModule} from './product.routing.module';
import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    NewsletterModule,
    CommonModule
  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule {
}
