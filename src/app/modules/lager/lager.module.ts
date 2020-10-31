import { NgModule } from '@angular/core';
import { LagerRoutingModule } from './lager.routing.module';

import { LagerComponent } from './pages/lager.component';

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
