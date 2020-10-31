import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductService } from './pruduct.service';

/**
 * The core module is used to hold all root-level providers.
 * It should only be imported in the AppModule (Application Root Module).
 *
 * @since 1.0.0
 */
@NgModule({
  // Place all forRoot() imports here
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  // Place all services/providers/injection tokens here
  providers: [
    // Provide your app wide services here
    ProductService,
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the root module only');
    }
  }
}
