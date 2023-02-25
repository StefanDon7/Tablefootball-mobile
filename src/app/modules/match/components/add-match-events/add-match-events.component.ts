import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FigurePosition, Match, TEAM} from "../../model/match";
import {EventAddRequest, EventType} from "../../model/event";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {select, Store} from '@ngrx/store';
import {AppState} from "../../../../root-store/state";
import {Group} from "../../../group/model/group";
import {selectSelectedMatch} from "../../store/selectors";
import {SharedActions} from "../../../../shared";
import {MatchActions} from "../../index";

@Component({
  selector: 'app-add-match-events',
  templateUrl: './add-match-events.component.html',
  styleUrls: ['./add-match-events.component.scss'],
})
export class AddMatchEventsComponent implements OnInit, OnDestroy {

  position = FigurePosition;
  selectedGroup: Group | undefined;
  selectedMatch: Match | undefined;
  teamGoal = TEAM;
  selectedFigure = FigurePosition.NULL;
  selectedTeam: TEAM | undefined;

  constructor(private store$: Store<AppState>) {
  }

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.select();
    this.dispatch();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  dispatch(): void {

  }

  select(): void {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
      }
    });
    this.store$.pipe(select(selectSelectedMatch)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedMatch = value;
      }
    });
  }

  homeTeam(position: FigurePosition) {
    this.selectedFigure = position;
    this.selectedTeam = TEAM.HOME;
  }

  awayTeam(position: FigurePosition) {
    this.selectedFigure = position;
    this.selectedTeam = TEAM.AWAY;
  }

  save(teamGoal: TEAM) {

    // console.log(this.selectedTeam);
    // console.log(this.selectedFigure);
    // console.log(teamGoal);
    const date = new Date(new Date()).getTime();
    console.log(date);
    const event = {
      matchUuid: this.selectedMatch?.uuid,
      time: date,
      figurePosition: this.selectedFigure,
      groupUuid: this.selectedGroup?.uuid,
    } as EventAddRequest
    if (this.selectedTeam === TEAM.HOME) {
      if (teamGoal === TEAM.AWAY) {
        if (this.selectedFigure === FigurePosition.MIDFIELD) {
          event.eventType = EventType.MINUS;
        } else {
          event.eventType = EventType.GOAL;
        }
      } else {
        event.eventType = EventType.OWN_GOAL;
      }
    } else {
      if (teamGoal === TEAM.HOME) {
        if (this.selectedFigure === FigurePosition.MIDFIELD) {
          event.eventType = EventType.MINUS;
        } else {
          event.eventType = EventType.GOAL;
        }
      } else {
        event.eventType = EventType.OWN_GOAL;
      }
    }
    switch (this.selectedFigure) {
      case FigurePosition.ATTACK_LEFT:
      case FigurePosition.ATTACK_RIGHT:
      case FigurePosition.ATTACK_MIDDLE:
      case FigurePosition.MIDFIELD:
        event.playerUuid = this.selectedTeam === TEAM.HOME ? this.selectedMatch?.firstTeam?.attackPlayer?.uuid : this.selectedMatch?.secondTeam?.attackPlayer?.uuid
        break;
      default:
        event.playerUuid = this.selectedTeam === TEAM.HOME ? this.selectedMatch?.firstTeam?.defencePlayer?.uuid : this.selectedMatch?.secondTeam?.defencePlayer?.uuid
        break;
    }
    console.log(event);
    // this.store$.dispatch(SharedActions.openSpinner());
    // this.store$.dispatch(MatchActions.addEvent({event}));
    this.selectedFigure = FigurePosition.NULL;

  }


}
