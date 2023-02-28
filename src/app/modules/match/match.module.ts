import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MatchPageRoutingModule} from './match-routing.module';

import {MatchPage} from './match.page';
import {AddMatchComponent} from "./components/add-match/add-match.component";
import {AddMatchEventsComponent} from "./components/add-match-events/add-match-events.component";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {MatchEffect} from "./store/effect";
import {reducers} from "./store/reducer";
import {MatchListComponent} from "./components/match-list/match-list.component";
import {SharedPageModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchPageRoutingModule,
    EffectsModule.forFeature([MatchEffect]),
    StoreModule.forFeature('match', reducers),
    ReactiveFormsModule,
    SharedPageModule
  ],
  declarations: [MatchPage, AddMatchComponent, AddMatchEventsComponent, MatchListComponent]
})
export class MatchPageModule {
}
