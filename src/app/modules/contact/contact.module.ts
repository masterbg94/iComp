import { NgModule } from '@angular/core';
import { AgmapModule } from '../../core/components/agm-maps/agmap.module';

import { NewsletterModule } from '../../core/components/newsletter/newsletter.module';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactComponent } from './pages/contact.component';

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
