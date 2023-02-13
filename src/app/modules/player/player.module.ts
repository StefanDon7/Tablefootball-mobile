import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PlayerPageRoutingModule} from './player-routing.module';

import {PlayerPage} from './player.page';
import {AddPlayerComponent} from "./components/add-player/add-player.component";
import {EffectsModule} from "@ngrx/effects";
import {GroupEffect} from "../group/store/effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "../group/store/reducer";
import {PlayerEffect} from "./store/effect";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([PlayerEffect]),
    StoreModule.forFeature('player', reducers)
  ],
  declarations: [PlayerPage, AddPlayerComponent]
})
export class PlayerPageModule {
}
