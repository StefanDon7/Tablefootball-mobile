import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TeamPageRoutingModule} from './team-routing.module';

import {TeamPage} from './team.page';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {TeamEffect} from "./store/effect";
import {AddTeamComponent} from "./component/add-team/add-team.component";
import {TeamListComponent} from "./component/team-list/team-list.component";
import {reducers} from "./store/reducer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    EffectsModule.forFeature([TeamEffect]),
    StoreModule.forFeature('team', reducers),
    ReactiveFormsModule
  ],
  declarations: [TeamPage, AddTeamComponent, TeamListComponent]
})
export class TeamPageModule {
}
