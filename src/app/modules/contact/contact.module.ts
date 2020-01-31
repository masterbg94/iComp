import {NgModule} from '@angular/core';

import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';
import {ContactRoutingModule} from './contact.routing.module';
import {ContactComponent} from './pages/contact.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    NewsletterModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {
}
