import {NgModule} from '@angular/core';

import {CompareComponent} from './pages/compare.component';
import {CompareRoutingModule} from './compare.routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CompareRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    CompareComponent
  ]
})
export class CompareModule {

}
