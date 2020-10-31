import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LagerComponent } from './pages/lager.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LagerComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class LagerRoutingModule {
}
