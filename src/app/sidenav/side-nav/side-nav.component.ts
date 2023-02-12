import {Component, OnInit} from '@angular/core';
import {SideNavSection} from "../model/side-nav";
import {User} from "../../modules/user/model/user";
import {Subject, takeUntil} from "rxjs";
import {AppState} from "../../root-store/state";
import {select, Store} from "@ngrx/store";
import {selectLoginUser} from "../../modules/user/store/selectors";
import {UserActions} from "../../modules/user";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  items: SideNavSection[] = [];
  user: User | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.select();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }


  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  populateSideNavElements(): void {
    this.items.push({
      id: 0,
      name: 'User',
      icon: 'person',
      sideNavSectionElement: [
        {name: 'Sign up', icon: 'person-add', url: '/user/add'},
        {name: 'Log in', icon: 'log-in', url: '/user/login'},
        {name: 'Log out', icon: 'log-out', url: '/user/logout'},
      ]
    }),
      this.items.push({
        id: 1,
        name: 'Group',
        icon: 'people-circle',
        sideNavSectionElement: [
          {name: 'Add group', icon: 'people', url: '/group/add'}
        ]
      }),
      this.items.push({
        id: 2,
        name: 'Player',
        icon: 'accessibility',
        sideNavSectionElement: [
          {name: 'Sign up', icon: 'person-add', url: '/user/add'},
          {name: 'Log in', icon: 'log-in', url: '/user/login'},
          {name: 'Log out', icon: 'log-out', url: '/user/logout'},
        ]
      })
  }

  select(): void {
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
        this.populateSideNavElements();
      } else {
        this.items = [];
      }
    })
  }

  logout() {
    this.store$.dispatch(UserActions.logoutUser());
  }
}
