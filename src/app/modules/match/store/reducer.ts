import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {INIT_MATCH_STATE, State} from "./state";
import {addMatchSuccess} from "./actions";

const reducer = createReducer(
  cloneDeep(INIT_MATCH_STATE),
  on(addMatchSuccess, (state: State, {match}) => {
    return ({
      ...state,
      addedMatch: match
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
