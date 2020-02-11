import {NgModule} from '@angular/core';

import {ServiceComponent} from './pages/service.component';
import {ServiceRoutingModule} from './service.routing.module';
import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';

@NgModule({
  imports: [
    ServiceRoutingModule,
    NewsletterModule
  ],
  declarations: [
    ServiceComponent
  ]
})
export class ServiceModule {

}
