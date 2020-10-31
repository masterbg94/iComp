import { NgModule } from '@angular/core';
import { AppleBannerModule } from '../../core/components/apple-banner/apple-banner.module';
import { ArcadeModule } from '../../core/components/arcade/arcade.module';
import { FeaturedDoubleModule } from '../../core/components/featured-double/featured-double.module';
import { FeaturedModule } from '../../core/components/featured/featured.module';
import { ImacSubpageModule } from '../../core/components/imac-subpage/imac-subpage.module';
import { InfoCarouselModule } from '../../core/components/info-carousel/info-carousel.module';
import { IphoneShortModule } from '../../core/components/iphone-short/iphone-short.module';
import { NewsletterModule } from '../../core/components/newsletter/newsletter.module';
import { IphoneRoutingModule } from './iphone.routing.module';

import { IphoneComponent } from './pages/iphone.component';

@NgModule({
  imports: [
    IphoneRoutingModule,
    NewsletterModule,
    FeaturedDoubleModule,
    InfoCarouselModule,
    FeaturedModule,
    ArcadeModule,
    AppleBannerModule,
    IphoneShortModule,
    ImacSubpageModule
  ],
  declarations: [
    IphoneComponent
  ]
})
export class IphoneModule {
}
