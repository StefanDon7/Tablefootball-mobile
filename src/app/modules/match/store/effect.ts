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
        SharedActions.successMessages({messagesKey: 'Match created successfully'})
      )),
      catchError(error => of(
        MatchActions.addMatchError(error),
      ))
    ))
  ));

  addEventEffect$ = createEffect(() => this.action$.pipe(
    ofType(EEventActions.ADD_EVENT),
    switchMap((data: { eventAddRequest: EventAddRequest }) => this.api.addEvent(data.eventAddRequest).pipe(
      switchMap(event => of(
        MatchActions.addEventSuccess({event}),
        SharedActions.closeSpinner(),
        SharedActions.successMessages({messagesKey: 'Event added successfully'})
      )),
      catchError(error => of(
        MatchActions.addEventError(error),
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
        MatchActions.getPlayerMatchesError(error),
      ))
    ))
  ));

}
