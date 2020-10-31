import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IphoneComponent } from './pages/iphone.component';

const ROUTES: Routes = [
  {
    path: '',
    component: IphoneComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class IphoneRoutingModule {
}
