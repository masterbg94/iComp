import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {ProductComponent} from './pages/product.component';
import {ProductRoutingModule} from './product.routing.module';
import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    NewsletterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule {
}
