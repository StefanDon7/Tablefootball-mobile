import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {addPlayerSuccess} from "./actions";
import {INIT_GROUP_STATE, State} from "./state";

const reducer = createReducer(
  cloneDeep(INIT_GROUP_STATE),
  on(addPlayerSuccess, (state: State, {player}) => {
    return ({
      ...state,
      addPlayer: player
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
