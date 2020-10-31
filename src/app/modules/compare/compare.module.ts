import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompareRoutingModule } from './compare.routing.module';

import { CompareComponent } from './pages/compare.component';

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
