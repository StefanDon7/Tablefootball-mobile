import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {addPlayerSuccess, getGroupPlayersSuccess} from "./actions";
import {INIT_PLAYER_STATE, State} from "./state";

const reducer = createReducer(
  cloneDeep(INIT_PLAYER_STATE),
  on(addPlayerSuccess, (state: State, {player}) => {
    return ({
      ...state,
      addPlayer: player
    });
  }),
  on(getGroupPlayersSuccess, (state: State, {players}) => {
    return ({
      ...state,
      groupPlayers: players
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
