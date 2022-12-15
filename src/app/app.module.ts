import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SideNavComponent} from "./sidenav/side-nav/side-nav.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./root-store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./user/store/effect";
import {UserApiService} from "./user/api/user-api-service";

@NgModule({
  declarations:
    [
      AppComponent,
      SideNavComponent
    ],
  imports:
    [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([UserEffects]),

    ],
  providers: [UserApiService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
