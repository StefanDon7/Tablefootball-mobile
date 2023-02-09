import {Component, OnInit} from '@angular/core';
import {SideNavSection} from "../model/side-nav";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  items: SideNavSection[] = [];


  constructor() {
  }

  ngOnInit() {
    this.populateSideNavElements();
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
}
