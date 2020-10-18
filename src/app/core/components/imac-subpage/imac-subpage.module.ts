import {NgModule} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import {ImacSubpageComponent} from './imac-subpage.component';
import {MatTabsModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule,
    MatChipsModule
  ],
    exports: [ImacSubpageComponent],
    declarations: [ImacSubpageComponent]
})
export class ImacSubpageModule {
}
