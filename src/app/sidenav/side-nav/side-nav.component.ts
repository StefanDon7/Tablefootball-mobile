import {Component, OnDestroy, OnInit} from '@angular/core';
import {SideNavSection} from "../model/side-nav";
import {LoginUserRequest, User} from "../../modules/user/model/user";
import {Observable, Subject, takeUntil} from "rxjs";
import {AppState} from "../../root-store/state";
import {select, Store} from "@ngrx/store";
import {selectLoginUser} from "../../modules/user/store/selectors";
import {UserActions} from "../../modules/user";
import {Router} from "@angular/router";
import {selectSelectedGroup} from "../../modules/group/store/selectors";
import {Group} from "../../modules/group/model/group";
import {SharedActions} from "../../shared";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {

  items: SideNavSection[] = [];
  user: User | undefined;
  userAsync$: Observable<User | undefined> = new Observable<User | undefined>();
  selectedGroup: Group | undefined;
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

  populateSideNavElements(): void {
    if (this.user) {
      this.addItem({
        id: 0,
        name: 'User',
        icon: 'person',
        isHidden: false,
        callback: () => {
        },
        sideNavSectionElement: [
          {
            name: 'Sign up',
            icon: 'person-add',
            url: '/user/add',
            callback: () => {
            }
          },
          {
            name: 'Log in',
            icon: 'log-in',
            url: '/user/login',
            callback: () => {
            }
          },
          {
            name: 'Log out', icon: 'log-out', url: '/user/logout',
            callback: () => {
              console.log(this.user);
              this.store$.dispatch(UserActions.logoutUser());
            }
          },
        ]
      })
      this.addItem({
        id: 1,
        name: 'Group',
        icon: 'people-circle',
        isHidden: false,
        callback: () => {
        },
        sideNavSectionElement: [
          {name: 'Add group', icon: 'people', url: '/group/add'},
          {name: 'User\'s groups', icon: 'people', url: '/group/user-groups'},
          {name: 'Add member to group', icon: 'people', url: '/group/add-member'}
        ]
      })
    }

  }

  select(): void {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        if (!this.selectedGroup) {
          this.populateAnotherSideNavElements();
        }
        this.selectedGroup = value;
      }
    });
    this.userAsync$ = this.store$.select(selectLoginUser);
    this.userAsync$.subscribe(value => {
      if (value === undefined) {
        // this.router.navigateByUrl('user/login');
      }
    })
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        if (value.uuid !== this.user?.uuid) {
          this.user = value;
          this.populateSideNavElements();
        }
      }
    })
  }


  addItem(sideNavSelection: SideNavSection): void {
    this.items.forEach(value => {
      if (value.id === sideNavSelection) {
        return;
      }
    })
    this.items.push(sideNavSelection);
  }

  populateAnotherSideNavElements(): void {
    this.addItem({
      id: 2,
      name: 'Player',
      icon: 'accessibility',
      isHidden: false,
      callback: () => {
      },
      sideNavSectionElement: [
        {
          name: 'Add player', icon: 'person-add', url: '/player/add',
          callback: () => {
          }
        },
        {
          name: 'Group players list', icon: 'person-add', url: '/player/players-list',
          callback: () => {
          }
        },
      ]
    })
    this.addItem({
      id: 3,
      name: 'Team',
      icon: 'accessibility',
      isHidden: false,
      callback: () => {
      },
      sideNavSectionElement: [
        {
          name: 'Add team', icon: 'person-add', url: '/team/add',
          callback: () => {
          }
        },
        {
          name: 'Group teams list', icon: 'people', url: '/team/teams-list',
          callback: () => {
          }
        },
      ]
    }),
      this.addItem({
        id: 4,
        name: 'Match',
        icon: 'accessibility',
        isHidden: false,
        callback: () => {
        },
        sideNavSectionElement: [
          {
            name: 'Add match', icon: 'person-add', url: '/match/add',
            callback: () => {
            }
          },
          {
            name: 'Match', icon: 'person-add', url: '/match/in-progress',
            callback: () => {
            }
          },
          {
            name: 'Group list', icon: 'person-add', url: '/match/group-list',
            callback: () => {
            }
          },
        ]
      })
  }

  changeLanguage() {
    this.store$.dispatch(SharedActions.changeLanguage({language: 'sr'}))
  }

  theme($event: MouseEvent) {
    if (document.body.getAttribute('color-theme') === 'dark') {
      document.body.setAttribute('color-theme', 'light');
    } else {
      document.body.setAttribute('color-theme', 'dark');
    }
  }


}
