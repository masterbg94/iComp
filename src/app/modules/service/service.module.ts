import { NgModule } from '@angular/core';
import { NewsletterModule } from '../../core/components/newsletter/newsletter.module';

import { ServiceComponent } from './pages/service.component';
import { ServiceRoutingModule } from './service.routing.module';

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
