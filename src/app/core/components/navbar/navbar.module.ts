import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {IphoneShortModule} from "../iphone-short/iphone-short.module";
import {BsDropdownModule} from "ngx-bootstrap";

@NgModule({
    imports: [
        RouterModule,
        IphoneShortModule,
        BsDropdownModule.forRoot()
    ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ]
})
export class NavbarModule {
}
