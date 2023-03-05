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
import {UserApiService} from "./modules/user/api/user-api-service";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {GroupApiService} from "./modules/group/api/group-api-service";
import {LoadingSpinnerComponent} from "./shared/components/loading-spinner/loading-spinner.component";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslatePipe} from "./shared/pipe/translate-pipe";

@NgModule({
  declarations:
    [
      AppComponent,
      SideNavComponent,
      LoadingSpinnerComponent,
      TranslatePipe
    ],
  imports:
    [
      BrowserModule,
      ReactiveFormsModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => {
            return new TranslateHttpLoader(http, './assets/i18n/', '.json');
          },
          deps: [HttpClient]
        }
      }),
      StoreModule.forRoot(reducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
      }),
      EffectsModule.forRoot([]),
    ],
  exports: [
    ReactiveFormsModule, TranslatePipe
  ],
  providers: [UserApiService, GroupApiService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
