import {createAction, props, union} from "@ngrx/store";
import {EPlayerActions} from "../constant/actions";
import {PlayerAddRequest, Player} from "../model/player";


export const addPlayer = createAction(EPlayerActions.ADD_PLAYER, props<{ player: PlayerAddRequest }>());
export const addPlayerSuccess = createAction(EPlayerActions.ADD_PLAYER_SUCCESS, props<{ player: Player }>());
export const addPlayerError = createAction(EPlayerActions.ADD_PLAYER_ERROR, props<{ error: string }>());

export const getGroupPlayers = createAction(EPlayerActions.GET_GROUP_PLAYERS, props<{ groupUuid: string }>());
export const getGroupPlayersSuccess = createAction(EPlayerActions.GET_GROUP_PLAYERS_SUCCESS, props<{ players: Player[] }>());
export const getGroupPlayersError = createAction(EPlayerActions.GET_GROUP_PLAYERS_ERROR, props<{ error: string }>());


const all = union({
  addPlayer,
  addPlayerSuccess,
  addPlayerError,
  getGroupPlayers,
  getGroupPlayersSuccess,
  getGroupPlayersError
});

export type PlayerActions = typeof all;
