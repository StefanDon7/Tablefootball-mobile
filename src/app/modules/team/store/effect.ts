import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, of, switchMap} from "rxjs";
import {SharedActions} from "../../../shared";
import {TeamActions} from "../index";
import {TeamAddRequest} from "../model/team";
import {TeamApiService} from "../api/team-api-service";


@Injectable()
export class TeamEffect {
  constructor(private api: TeamApiService,
              private action$: Actions) {
  }

  addTeamEffect$ = createEffect(() => this.action$.pipe(
    ofType(TeamActions.addTeam),
    switchMap((data: { team: TeamAddRequest }) => this.api.addTeam(data.team).pipe(
      switchMap(team => of(
        TeamActions.addTeamSuccess({team}),
        SharedActions.successMessages({messagesKey: 'team.add.success'})
      )),
      catchError(error => of(
        TeamActions.addTeamError(error),
      ))
    ))
  ));


}
