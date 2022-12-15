import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public appPages = [
    {title: 'User', url: '/user/add', icon: 'person'},
    {title: 'Group', url: '/group/add', icon: 'heart'},
    {title: 'Player', url: '/player/add', icon: 'archive'},
    {title: 'Team', url: '/team/add', icon: 'trash'},
    {title: 'Match', url: '/match/add', icon: 'warning'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
