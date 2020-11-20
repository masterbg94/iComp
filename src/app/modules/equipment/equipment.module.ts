import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EquipmentComponent} from './pages/equipment.component';
import {EquipmentRoutingModule} from './equipment.routing.module';
import {CustomMaterialModule} from '../../core/custom-material.module';

@NgModule({
    imports: [
        EquipmentRoutingModule,
        CustomMaterialModule,
        CommonModule
    ],
    declarations: [
        EquipmentComponent
    ]
})
export class EquipmentModule {
}
