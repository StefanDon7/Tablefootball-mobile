import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPage } from './group.page';
import {AddGroupComponent} from "./add-group/add-group.component";

const routes: Routes = [
  {
    path: '',
    component: GroupPage
  },
  {
    path: 'add',
    component: AddGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPageRoutingModule {}
