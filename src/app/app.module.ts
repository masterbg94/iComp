import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {NavbarModule} from './core/components/navbar/navbar.module';
import {FooterModule} from './core/components/footer/footer.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
