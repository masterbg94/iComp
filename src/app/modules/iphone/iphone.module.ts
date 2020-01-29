import {NgModule} from '@angular/core';

import {IphoneComponent} from './pages/iphone.component';
import {IphoneRoutingModule} from './iphone.routing.module';
import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';
import {FeaturedDoubleModule} from '../../core/components/featured-double/featured-double.module';
import {InfoCarouselModule} from '../../core/components/info-carousel/info-carousel.module';
import {FeaturedModule} from '../../core/components/featured/featured.module';
import {ArcadeModule} from '../../core/components/arcade/arcade.module';
import {AppleBannerModule} from '../../core/components/apple-banner/apple-banner.module';
import {IphoneShortModule} from '../../core/components/iphone-short/iphone-short.module';

@NgModule({
  imports: [
    IphoneRoutingModule,
    NewsletterModule,
    FeaturedDoubleModule,
    InfoCarouselModule,
    FeaturedModule,
    ArcadeModule,
    AppleBannerModule,
    IphoneShortModule
  ],
  declarations: [
    IphoneComponent
  ]
})
export class IphoneModule {
}
