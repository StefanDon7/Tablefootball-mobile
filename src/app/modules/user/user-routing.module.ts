import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserPage} from './user.page';
import {AddUserComponent} from "./component/add-user/add-user.component";
import {LoginUserComponent} from "./component/login-user/login-user.component";

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'login',
    component: LoginUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
