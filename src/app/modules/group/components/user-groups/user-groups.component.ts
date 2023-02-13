import {Component, OnInit} from '@angular/core';
import {User} from "../../../user/model/user";
import {Subject, takeUntil} from "rxjs";
import {Group} from '../../model/group';
import {select, Store} from "@ngrx/store";
import {selectLoginUser} from "../../../user/store/selectors";
import {AppState} from "../../../../root-store/state";
import {getUserGroups, selectSelectedGroup, selectUserGroups} from "../../store/selectors";
import {GroupActions} from "../../index";

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
})
export class UserGroupsComponent implements OnInit {
  user: User | undefined;
  groups: Group[] = [];
  selectedGroup: Group | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
      }
    });
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

  selectGroup(group: Group): void {
    this.store$.dispatch(GroupActions.selectGroup({group}));

  }

}
