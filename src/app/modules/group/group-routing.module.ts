import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPage } from './group.page';
import {AddGroupComponent} from "./components/add-group/add-group.component";
import {UserGroupComponent} from "./components/user-group/user-group.component";

const routes: Routes = [
  {
    path: '',
    component: GroupPage
  },
  {
    path: 'add',
    component: AddGroupComponent
  },
  {
    path: 'user-groups',
    component: UserGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPageRoutingModule {}
