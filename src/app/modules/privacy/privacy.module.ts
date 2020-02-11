import {NgModule} from '@angular/core';

import {PrivacyComponent} from './pages/privacy.component';
import {PrivacyRoutingModule} from './privacy.routing.module';

@NgModule({
  imports: [
    PrivacyRoutingModule
  ],
  exports: [],
  declarations: [
    PrivacyComponent
  ]
})
export class PrivacyModule {
}
