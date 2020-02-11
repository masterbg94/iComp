import {NgModule} from '@angular/core';

import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';
import {ContactRoutingModule} from './contact.routing.module';
import {ContactComponent} from './pages/contact.component';
import {AgmapModule} from '../../core/components/agm-maps/agmap.module';

@NgModule({
  imports: [
    ContactRoutingModule,
    NewsletterModule,
    AgmapModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {
}
