import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyComponent } from './pages/privacy.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class PrivacyRoutingModule {
}
