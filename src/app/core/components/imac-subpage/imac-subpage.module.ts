import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

import { ImacSubpageComponent } from './imac-subpage.component';

@NgModule({
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule,
    MatChipsModule
  ],
  exports: [ ImacSubpageComponent ],
  declarations: [ ImacSubpageComponent ]
})
export class ImacSubpageModule {
}
