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
import {UserGroupsComponent} from "./components/user-groups/user-groups.component";
import {AddMemberComponent} from "./components/add-member/add-member.component";

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
  declarations: [GroupPage, AddGroupComponent, UserGroupsComponent, AddMemberComponent]
})
export class GroupPageModule {
}
