import {createAction, props, union} from "@ngrx/store";
import {EPlayerActions} from "../constant/actions";
import {PlayerAddRequest, Player} from "../model/player";


export const addPlayer = createAction(EPlayerActions.ADD_PLAYER, props<{ player: PlayerAddRequest }>());
export const addPlayerSuccess = createAction(EPlayerActions.ADD_PLAYER_SUCCESS, props<{ player: Player }>());
export const addPlayerError = createAction(EPlayerActions.ADD_PLAYER_ERROR, props<{ error: string }>());



const all = union({
  addPlayer,
  addPlayerSuccess,
  addPlayerError,
});

export type PlayerActions = typeof all;
