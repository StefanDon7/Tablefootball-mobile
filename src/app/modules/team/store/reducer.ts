import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {INIT_TEAM_STATE, State} from "./state";
import {addTeamSuccess, getGroupTeamsSuccess} from "./actions";

const reducer = createReducer(
  cloneDeep(INIT_TEAM_STATE),
  on(addTeamSuccess, (state: State, {team}) => {
    return ({
      ...state,
      addedTeam: team
    });
  }),
  on(getGroupTeamsSuccess, (state: State, {teams}) => {
    return ({
      ...state,
      groupTeams: teams
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
