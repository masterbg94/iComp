import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CompareComponent} from './pages/compare.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CompareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CompareRoutingModule {

}
