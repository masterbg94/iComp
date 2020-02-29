import {NgModule} from '@angular/core';

import {LagerComponent} from './pages/lager.component';
import {LagerRoutingModule} from './lager.routing.module';

@NgModule({
    imports: [
        LagerRoutingModule
    ],
    declarations: [
        LagerComponent
    ]
})
export class LagerModule {
}
