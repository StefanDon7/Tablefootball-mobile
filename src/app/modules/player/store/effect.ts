import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, of, switchMap} from "rxjs";
import {SharedActions} from "../../../shared";
import {PlayerApiService} from "../api/player-api-service";
import {PlayerActions} from "../index";
import {PlayerAddRequest} from "../model/player";


@Injectable()
export class PlayerEffect {
  constructor(private api: PlayerApiService,
              private action$: Actions) {
  }

  getGroupPlayers$ = createEffect(() => this.action$.pipe(
    ofType(PlayerActions.addPlayer),
    switchMap((data: { player: PlayerAddRequest }) => this.api.addPlayer(data.player).pipe(
      switchMap(player => of(
        PlayerActions.addPlayerSuccess({player}),
        SharedActions.successMessages({messagesKey: 'player.add.success'})
      )),
      catchError(error => of(
        PlayerActions.addPlayerSuccess(error),
      ))
    ))
  ));

  getGroupPlayersEffect$ = createEffect(() => this.action$.pipe(
    ofType(PlayerActions.getGroupPlayers),
    switchMap((data: { groupUuid: string }) => this.api.getGroupPlayers(data.groupUuid).pipe(
      switchMap(players => of(
        PlayerActions.getGroupPlayersSuccess({players}),
      )),
      catchError(error => of(
        PlayerActions.addPlayerSuccess(error),
      ))
    ))
  ));

}
