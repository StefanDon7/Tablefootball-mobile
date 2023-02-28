import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedPageRoutingModule} from './shared-routing.module';

import {SharedPage} from './shared.page';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {SharedEffect} from "./store/effects";
import {reducers} from "./store/reducers";
import {StopwatchComponent} from "./components/stopwatch/stopwatch.component";

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
    StopwatchComponent
  ],
  declarations: [SharedPage, StopwatchComponent]
})
export class SharedPageModule {
}
