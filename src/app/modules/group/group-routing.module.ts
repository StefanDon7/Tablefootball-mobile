import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupPage} from './group.page';
import {AddGroupComponent} from "./components/add-group/add-group.component";
import {UserGroupsComponent} from "./components/user-groups/user-groups.component";
import {AddMemberComponent} from "./components/add-member/add-member.component";

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
    component: UserGroupsComponent
  },
  {
    path: 'add-member',
    component: AddMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPageRoutingModule {
}
