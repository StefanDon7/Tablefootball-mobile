import {Component, OnInit} from '@angular/core';
import {Team} from "../../model/team";
import {Subject, takeUntil} from "rxjs";
import {Player} from "../../../player/model/player";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {PlayerActions} from "../../../player";
import {selectGroupPlayers} from "../../../player/store/selectors";
import {Group} from "../../../group/model/group";
import {TeamActions} from "../../index";
import {selectGroupTeams} from "../../store/selectors";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  groupsTeam: Team[] = [];
  selectedGroup: Group | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  groupPlayers: Player[] = [];

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.select();
    this.dispatch();
  }

  private select() {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
        this.dispatch();
      }
    });
    this.store$.pipe(select(selectGroupTeams)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.groupsTeam = value;
      }
    });
  }

  dispatch(): void {
    this.store$.dispatch(TeamActions.getGroupTeams({groupUuid: this.selectedGroup ? this.selectedGroup?.uuid : ''}))
  }

  edit(team: Team) {

  }
}
