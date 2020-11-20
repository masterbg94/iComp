import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EquipmentComponent} from './pages/equipment.component';

const ROUTES: Routes = [
    {
        path: '',
        component: EquipmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class EquipmentRoutingModule {
}
