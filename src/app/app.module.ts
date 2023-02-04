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
import {UserEffects} from "./modules/user/store/effect";
import {UserApiService} from "./modules/user/api/user-api-service";
import {ReactiveFormsModule} from "@angular/forms";
import {GroupPageModule} from "./modules/group/group.module";

@NgModule({
  declarations:
    [
      AppComponent,
      SideNavComponent
    ],
  imports:
    [
      BrowserModule,
      ReactiveFormsModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([UserEffects]),
    ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [UserApiService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
