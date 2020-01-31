import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServiceComponent} from './pages/service.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {

}
