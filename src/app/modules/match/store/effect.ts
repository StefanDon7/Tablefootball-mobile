import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, of, switchMap} from "rxjs";
import {SharedActions} from "../../../shared";
import {MatchActions} from "../index";
import {MatchAddRequest} from "../model/match";
import {MatchApiService} from "../api/match-api-service";

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

}