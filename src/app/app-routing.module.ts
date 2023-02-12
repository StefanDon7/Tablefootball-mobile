import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/login',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./modules/group/group.module').then(m => m.GroupPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./modules/member/member.module').then(m => m.MemberPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamPageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./modules/match/match.module').then(m => m.MatchPageModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
