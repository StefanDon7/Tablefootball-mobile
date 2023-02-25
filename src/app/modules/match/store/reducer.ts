import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {INIT_MATCH_STATE, State} from "./state";
import {
  addMatchSuccess,
  getGroupMatches,
  getGroupMatchesSuccess,
  getPlayerMatchesSuccess,
  getTeamMatchesSuccess
} from "./actions";

const reducer = createReducer(
  cloneDeep(INIT_MATCH_STATE),
  on(addMatchSuccess, (state: State, {match}) => {
    return ({
      ...state,
      addedMatch: match
    });
  }),
  on(getGroupMatchesSuccess, (state: State, {matches}) => {
    return ({
      ...state,
      groupMatches: matches
    });
  }),
  on(getPlayerMatchesSuccess, (state: State, {matches}) => {
    return ({
      ...state,
      playerMatches: matches
    });
  }),
  on(getTeamMatchesSuccess, (state: State, {matches}) => {
    return ({
      ...state,
      teamMatches: matches
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
