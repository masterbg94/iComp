import { NgModule } from '@angular/core';

import { ItemDetailSpecsComponent } from './item-detail-specs.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
      CommonModule
  ],
  exports: [ ItemDetailSpecsComponent ],
  declarations: [
    ItemDetailSpecsComponent
  ]
})
export class ItemDetailSpecsModule {
}
