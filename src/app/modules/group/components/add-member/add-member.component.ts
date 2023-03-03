import {Component, OnInit} from '@angular/core';
import {User} from "../../../user/model/user";
import {select, Store} from "@ngrx/store";
import {AppModule} from "../../../../app.module";
import {AppState} from "../../../../root-store/state";
import {selectSearchUsers, selectSelectedGroup} from "../../store/selectors";
import {Subject, takeUntil} from "rxjs";
import {GroupActions} from "../../index";
import {MemberAddRequest} from "../../model/member";
import {Group} from "../../model/group";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {

  users: User[] = []
  selectedGroup: Group | undefined
  search = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.pipe(select(selectSearchUsers)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.users = value;
      }
    })
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
      }
    })
  }


  write(user: User) {
    const memberAddRequest = {
      userUuid: user.uuid,
      groupUuid: this.selectedGroup?.uuid
    } as MemberAddRequest;
    this.store$.dispatch(GroupActions.addMember({memberAddRequest}))
  }

  onSearchChange(search: string) {
    if (search !== undefined || search !== '') {
      this.store$.dispatch(GroupActions.getUsersByName({search}))
    }
  }
}
