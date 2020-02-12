import {NgModule} from '@angular/core';

import {IphoneShortComponent} from './iphone-short.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule
    ],
  exports: [
    IphoneShortComponent
  ],
  declarations: [
    IphoneShortComponent
  ]
})
export class IphoneShortModule {
}
