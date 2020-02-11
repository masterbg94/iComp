import {NgModule} from '@angular/core';

import {HomeComponent} from './pages/home.component';
import {HomeRoutingModule} from './home.routing.module';
import {AppleBannerModule} from '../../core/components/apple-banner/apple-banner.module';
import {FeaturedModule} from '../../core/components/featured/featured.module';
import {NewsletterModule} from '../../core/components/newsletter/newsletter.module';
import {ArcadeModule} from '../../core/components/arcade/arcade.module';
import {FeaturedDoubleModule} from '../../core/components/featured-double/featured-double.module';
import {InfoCarouselModule} from '../../core/components/info-carousel/info-carousel.module';

/**
 * This is Home application module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
  imports: [
    HomeRoutingModule,
    AppleBannerModule,
    FeaturedDoubleModule,
    NewsletterModule,
    ArcadeModule,
    FeaturedModule,
    InfoCarouselModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
