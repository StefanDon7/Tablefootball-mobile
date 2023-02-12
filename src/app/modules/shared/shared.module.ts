import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedPageRoutingModule} from './shared-routing.module';

import {SharedPage} from './shared.page';
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "../user/store/reducer";
import {SharedEffect} from "./store/effects";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule,
    EffectsModule.forFeature([SharedEffect]),
    StoreModule.forFeature('shared', reducers)
  ],
  exports: [
    LoadingSpinnerComponent
  ],
  declarations: [SharedPage,
    LoadingSpinnerComponent]
})
export class SharedPageModule {
}
