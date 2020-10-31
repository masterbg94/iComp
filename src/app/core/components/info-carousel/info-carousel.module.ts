import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap';

import { InfoCarouselComponent } from './info-carousel.component';

@NgModule({
  imports: [
    CarouselModule,
    CommonModule
  ],
  exports: [
    InfoCarouselComponent
  ],
  declarations: [
    InfoCarouselComponent
  ]
})
export class InfoCarouselModule {
}
