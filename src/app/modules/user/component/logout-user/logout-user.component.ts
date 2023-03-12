import {Component, OnInit} from '@angular/core';
import {AppState} from "../../../../root-store/state";
import {Store} from "@ngrx/store";
import {UserActions} from "../../index";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.scss'],
})
export class LogoutUserComponent implements OnInit {

  constructor(private store$: Store<AppState>, private router: Router) {
    this.store$.dispatch(UserActions.logoutUser());
    this.router.navigateByUrl('user/login');
  }

  ngOnInit() {
  }

}
