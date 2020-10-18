import {NgModule} from '@angular/core';

import {ItemDetailRoutingModule} from './item-detail.routing.module';
import {ItemDetailComponent} from './pages/item-detail.component';
import {CommonModule} from '@angular/common';
import {ItemDetailSpecsModule} from '../../core/components/item-detail-specs/item-detail-specs.module';
import {ItemDetailConfigModule} from '../../core/components/item-detail-config/item-detail-config.module';

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
