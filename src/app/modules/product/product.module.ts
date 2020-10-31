import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsletterModule } from '../../core/components/newsletter/newsletter.module';

import { ProductComponent } from './pages/product.component';
import { ProductRoutingModule } from './product.routing.module';

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
