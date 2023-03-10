import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, of, switchMap} from "rxjs";
import {SharedActions} from "../../../shared";
import {MatchActions} from "../index";
import {MatchAddRequest} from "../model/match";
import {MatchApiService} from "../api/match-api-service";
import {EEventActions} from "../constant/actions";
import {EventAddRequest} from "../model/event";

@Injectable()
export class MatchEffect {
  constructor(private api: MatchApiService,
              private action$: Actions) {
  }

  addMatchEffect$ = createEffect(() => this.action$.pipe(
    ofType(MatchActions.addMatch),
    switchMap((data: { match: MatchAddRequest }) => this.api.addMatch(data.match).pipe(
      switchMap(match => of(
        MatchActions.addMatchSuccess({match}),
        MatchActions.selectMatch({match}),
        SharedActions.navigate({url: ['/match/in-progress/']}),
        SharedActions.successMessages({messagesKey: 'Match created successfully'})
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        MatchActions.addMatchError(error),
        SharedActions.errorMessages({messagesKey: error.message})
      ))
    ))
  ));

  addEventEffect$ = createEffect(() => this.action$.pipe(
    ofType(EEventActions.ADD_EVENT),
    switchMap((data: { event: EventAddRequest }) => this.api.addEvent(data.event).pipe(
      switchMap(event => of(
        MatchActions.addEventSuccess({event}),
        SharedActions.closeSpinner(),
        SharedActions.successMessages({messagesKey: 'Event added successfully'})
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        MatchActions.addEventError(error),
        SharedActions.errorMessages({messagesKey: error.message})
      ))
    ))
  ));

  getMatchesByGroupEffect$ = createEffect(() => this.action$.pipe(
    ofType(MatchActions.getGroupMatches),
    switchMap((data: { uuid: string }) => this.api.getGroupMatches(data.uuid).pipe(
      switchMap(matches => of(
        MatchActions.getGroupMatchesSuccess({matches}),
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        MatchActions.getGroupMatchesError(error),
      ))
    ))
  ));
  getMatchesByTeamEffect$ = createEffect(() => this.action$.pipe(
    ofType(MatchActions.getTeamMatches),
    switchMap((data: { uuid: string }) => this.api.getTeamMatches(data.uuid).pipe(
      switchMap(matches => of(
        MatchActions.getTeamMatchesSuccess({matches}),
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        MatchActions.getTeamMatchesError(error),
      ))
    ))
  ));

  getMatchesByPlayerEffect$ = createEffect(() => this.action$.pipe(
    ofType(MatchActions.getPlayerMatches),
    switchMap((data: { uuid: string }) => this.api.getPlayerMatches(data.uuid).pipe(
      switchMap(matches => of(
        MatchActions.getPlayerMatchesSuccess({matches}),
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        MatchActions.getPlayerMatchesError(error),
      ))
    ))
  ));

  getEventsByMatchEffect$ = createEffect(() => this.action$.pipe(
    ofType(MatchActions.getEventsByMatch),
    switchMap((data: { matchUuid: string }) => this.api.getEventsByMatches(data.matchUuid).pipe(
      switchMap(events => of(
        MatchActions.getEventsByMatchSuccess({events}),
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        MatchActions.getEventsByMatchError(error),
      ))
    ))
  ));

}
