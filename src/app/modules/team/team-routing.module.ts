import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamPage } from './team.page';
import {AddTeamComponent} from "./component/add-team/add-team.component";

const routes: Routes = [
  {
    path: '',
    component: TeamPage
  },
  {
    path: 'add',
    component: AddTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
