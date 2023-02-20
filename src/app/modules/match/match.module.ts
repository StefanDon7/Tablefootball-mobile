import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MatchPageRoutingModule} from './match-routing.module';

import {MatchPage} from './match.page';
import {AddMatchComponent} from "./components/add-match/add-match.component";
import {AddMatchEventsComponent} from "./components/add-match-events/add-match-events.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchPageRoutingModule
  ],
  declarations: [MatchPage, AddMatchComponent, AddMatchEventsComponent]
})
export class MatchPageModule {
}
