import {Component, OnInit} from '@angular/core';
import {User} from "../../../user/model/user";
import {select, Store} from "@ngrx/store";
import {AppModule} from "../../../../app.module";
import {AppState} from "../../../../root-store/state";
import {selectSearchUsers} from "../../store/selectors";
import {Subject, takeUntil} from "rxjs";
import {GroupActions} from "../../index";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {

  users: User[] = []
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
  }


  write(user: User) {
    console.log(user);
  }

  onSearchChange(search: string) {
    if (search !== undefined || search !== '') {
      this.store$.dispatch(GroupActions.getUsersByName({search}))
    }
  }
}
