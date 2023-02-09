import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GroupPageRoutingModule} from './group-routing.module';

import {GroupPage} from './group.page';
import {AddGroupComponent} from "./components/add-group/add-group.component";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {GroupEffect} from "./store/effect";
import {reducers} from "./store/reducer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([GroupEffect]),
    StoreModule.forFeature('group', reducers)
  ],
  declarations: [GroupPage, AddGroupComponent]
})
export class GroupPageModule {
}
