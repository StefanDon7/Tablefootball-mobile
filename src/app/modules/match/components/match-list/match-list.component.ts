import {Component, OnDestroy, OnInit} from '@angular/core';
import {Group} from "../../../group/model/group";
import {Subject, takeUntil} from "rxjs";
import {Player} from "../../../player/model/player";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {selectGroupMatches, selectSelectedMatch} from "../../store/selectors";
import {MatchActions} from "../../index";
import {Match} from "../../model/match";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnInit, OnDestroy {
  selectedGroup: Group | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  groupMatches: Match[] = [];
  selectedMatch: Match | undefined;

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.select();
    this.dispatch();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  select() {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
        this.dispatch();
      }
    });
    this.store$.pipe(select(selectGroupMatches)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.groupMatches = value;
      }
    });
    this.store$.pipe(select(selectSelectedMatch)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedMatch = value;
      }
    });
  }

  dispatch(): void {
    this.store$.dispatch(MatchActions.getGroupMatches({uuid: this.selectedGroup ? this.selectedGroup?.uuid : ''}))
  }

  selectMatch(match: Match) {
    this.store$.dispatch(MatchActions.selectMatch({match}))
  }


}
