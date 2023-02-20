import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {INIT_TEAM_STATE, State} from "./state";
import {addTeamSuccess} from "./actions";

const reducer = createReducer(
  cloneDeep(INIT_TEAM_STATE),
  on(addTeamSuccess, (state: State, {team}) => {
    return ({
      ...state,
      addedTeam: team
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
