import {NgModule} from '@angular/core';

import {ItemDetailConfigComponent} from './item-detail-config.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ItemDetailConfigComponent],
    declarations: [ItemDetailConfigComponent]
})
export class ItemDetailConfigModule {
}
