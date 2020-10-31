import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemDetailConfigComponent } from './item-detail-config.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ItemDetailConfigComponent ],
  declarations: [ ItemDetailConfigComponent ]
})
export class ItemDetailConfigModule {
}
