import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MatchPage} from './match.page';
import {AddMatchComponent} from "./components/add-match/add-match.component";
import {AddMatchEventsComponent} from "./components/add-match-events/add-match-events.component";

const routes: Routes = [
  {
    path: '',
    component: MatchPage
  },
  {
    path: 'add',
    component: AddMatchComponent
  },
  {
    path: 'in-progress',
    component: AddMatchEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchPageRoutingModule {
}
