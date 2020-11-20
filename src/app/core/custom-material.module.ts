import {NgModule} from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatListModule
    ]
})
export class CustomMaterialModule {
}
