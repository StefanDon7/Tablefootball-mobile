import {Component, OnInit} from '@angular/core';
import {SideNavSection} from "../model/side-nav";
import {LoginUserRequest, User} from "../../modules/user/model/user";
import {Subject, takeUntil} from "rxjs";
import {AppState} from "../../root-store/state";
import {select, Store} from "@ngrx/store";
import {selectLoginUser} from "../../modules/user/store/selectors";
import {UserActions} from "../../modules/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  items: SideNavSection[] = [];
  user: User | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private store$: Store<AppState>, private router: Router,
  ) {
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
    this.addItem({
      id: 0,
      name: 'User',
      icon: 'person',
      sideNavSectionElement: [
        {name: 'Sign up', icon: 'person-add', url: '/user/add'},
        {name: 'Log in', icon: 'log-in', url: '/user/login'},
        {name: 'Log out', icon: 'log-out', url: '/user/logout'},
      ]
    })
    this.addItem({
      id: 1,
      name: 'Group',
      icon: 'people-circle',
      sideNavSectionElement: [
        {name: 'Add group', icon: 'people', url: '/group/add'},
        {name: 'User\'s groups', icon: 'people', url: '/group/user-groups'}
      ]
    })
    this.addItem({
      id: 2,
      name: 'Player',
      icon: 'accessibility',
      sideNavSectionElement: [
        {name: 'Add player', icon: 'person-add', url: '/player/add'},
        {name: 'Group players list', icon: 'person-add', url: '/player/players-list'},
      ]
    })
  }

  select(): void {
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
        this.populateSideNavElements();
      }
      // else {
      //   this.items = [];
      //   this.router.navigate(["/user/login"]);
      // }
    })
  }

  logout() {
    this.store$.dispatch(UserActions.logoutUser());
  }

  addItem(sideNavSelection: SideNavSection): void {
    this.items.push(sideNavSelection);
  }
}
