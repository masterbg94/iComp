import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
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
