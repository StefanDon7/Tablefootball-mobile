import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FigurePosition, Match, TEAM} from "../../model/match";
import {Event, EventAddRequest, EventType} from "../../model/event";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {select, Store} from '@ngrx/store';
import {AppState} from "../../../../root-store/state";
import {Group} from "../../../group/model/group";
import {selectSelectedMatch} from "../../store/selectors";
import {SharedActions} from "../../../../shared";
import {MatchActions} from "../../index";
import {Actions, ofType} from "@ngrx/effects";

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
  matchEvents: Event[] = []
  firstTeamGoals: number = 0;
  secondTeamGoals: number = 0;

  constructor(private store$: Store<AppState>, private actions$: Actions) {
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
        this.store$.dispatch(MatchActions.getEventsByMatch({matchUuid: this.selectedMatch?.uuid}))
      }
    });
    this.actions$.pipe(ofType(MatchActions.addEventSuccess)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(action => {
      if (action) {
        this.store$.dispatch(MatchActions.getEventsByMatch({matchUuid: this.selectedMatch?.uuid ? this.selectedMatch?.uuid : ''}))
      }
    });

    this.actions$.pipe(ofType(MatchActions.getEventsByMatchSuccess)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(action => {
      if (action) {
        this.matchEvents = action.events;
        this.calculateMatchResult();
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
    this.store$.dispatch(SharedActions.openSpinner());
    this.store$.dispatch(MatchActions.addEvent({event}));
    this.store$.dispatch(MatchActions.getEventsByMatch({matchUuid: this.selectedMatch ? this.selectedMatch?.uuid : ''}))
    this.selectedFigure = FigurePosition.NULL;

  }


  calculateMatchResult(): void {
    this.firstTeamGoals = 0;
    this.secondTeamGoals = 0;
    this.matchEvents.forEach(value => {
      if (value.player?.uuid === value.match.firstTeam.attackPlayer.uuid) {
        if (value.eventType === EventType.GOAL) {
          this.firstTeamGoals++;
        } else if (value.eventType === EventType.OWN_GOAL) {
          this.secondTeamGoals++;
        } else if (value.eventType === EventType.MINUS) {
          if (this.firstTeamGoals > 0) {
            this.firstTeamGoals--;
          }
        }
      } else if (value.player?.uuid === value.match.firstTeam.defencePlayer.uuid) {
        if (value.eventType === EventType.GOAL) {
          this.firstTeamGoals++;
        } else if (value.eventType === EventType.OWN_GOAL) {
          this.secondTeamGoals++;
        }
      } else if (value.player?.uuid === value.match.secondTeam.attackPlayer.uuid) {
        if (value.eventType === EventType.GOAL) {
          this.secondTeamGoals++;
        } else if (value.eventType === EventType.OWN_GOAL) {
          this.firstTeamGoals++;
        } else if (value.eventType === EventType.MINUS) {
          if (this.secondTeamGoals > 0) {
            this.secondTeamGoals--;
          }
        }
      } else if (value.player?.uuid === value.match.secondTeam.defencePlayer.uuid) {
        if (value.eventType === EventType.GOAL) {
          this.secondTeamGoals++;
        } else if (value.eventType === EventType.OWN_GOAL) {
          this.firstTeamGoals++;
        }
      }
    })
  }

  startMatch() {

  }

  pause() {

  }

  play() {

  }

  endMatch() {

  }


}
