import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemDetailConfigModule } from '../../core/components/item-detail-config/item-detail-config.module';
import { ItemDetailSpecsModule } from '../../core/components/item-detail-specs/item-detail-specs.module';

import { ItemDetailRoutingModule } from './item-detail.routing.module';
import { ItemDetailComponent } from './pages/item-detail.component';

@NgModule({
  imports: [
    ItemDetailRoutingModule,
    CommonModule,
    ItemDetailSpecsModule,
    ItemDetailConfigModule
  ],
  declarations: [
    ItemDetailComponent
  ],
})
export class ItemDetailModule {
}
