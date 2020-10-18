import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ItemDetailComponent} from './pages/item-detail.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ItemDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ItemDetailRoutingModule {
}
