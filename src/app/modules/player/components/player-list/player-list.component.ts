import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {Subject, takeUntil} from "rxjs";
import {AppState} from "../../../../root-store/state";
import {Group} from "../../../group/model/group";
import {Player} from "../../model/player";
import {selectGroupPlayers} from "../../store/selectors";
import {PlayerActions} from "../../index";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
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
        this.store$.dispatch(PlayerActions.getGroupPlayers({groupUuid: this.selectedGroup ? this.selectedGroup?.uuid : ''}))
      }
    });
    this.store$.pipe(select(selectGroupPlayers)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.groupPlayers = value;
        console.log(this.groupPlayers);
      }
    });
  }

  dispatch(): void {
  }

  edit(player: Player) {

  }
}
