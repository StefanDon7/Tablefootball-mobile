import {Component, OnInit} from '@angular/core';
import {User} from "../../../user/model/user";
import {Subject, takeUntil} from "rxjs";
import {Group} from '../../model/group';
import {select, Store} from "@ngrx/store";
import {selectLoginUser} from "../../../user/store/selectors";
import {AppState} from "../../../../root-store/state";
import {getUserGroups, selectUserGroups} from "../../store/selectors";
import {GroupActions} from "../../index";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss'],
})
export class UserGroupComponent implements OnInit {
  user: User | undefined;
  groups: Group[] = [];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.pipe(select(selectUserGroups)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.groups = value;
      }
    })
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
        this.store$.dispatch(GroupActions.getGroupsByUser({uuid: this.user.uuid}))
      }
    })
  }

}
