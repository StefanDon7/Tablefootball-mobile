import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlayerPage} from './player.page';
import {AddPlayerComponent} from "./components/add-player/add-player.component";
import {PlayerListComponent} from "./components/player-list/player-list.component";

const routes: Routes = [
  {
    path: '',
    component: PlayerPage
  },
  {
    path: 'add',
    component: AddPlayerComponent
  },
  {
    path: 'players-list',
    component: PlayerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerPageRoutingModule {
}
