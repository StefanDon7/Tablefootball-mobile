import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UserPageRoutingModule} from './user-routing.module';

import {UserPage} from './user.page';
import {AddUserComponent} from "./component/add-user/add-user.component";
import {LoginUserComponent} from "./component/login-user/login-user.component";
import {UserApiService} from "./api/user-api-service";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducer";

@NgModule({
  imports:
    [
      CommonModule,
      FormsModule,
      IonicModule,
      UserPageRoutingModule,
      ReactiveFormsModule,
      EffectsModule.forFeature([UserEffects]),
      StoreModule.forFeature('user', reducers)
    ],
  declarations:
    [
      UserPage,
      AddUserComponent,
      LoginUserComponent,
    ]
})
export class UserPageModule {
}
