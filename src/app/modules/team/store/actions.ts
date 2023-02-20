import {createAction, props, union} from "@ngrx/store";
import {Team, TeamAddRequest} from "../model/team";
import {ETeamActions} from "../constant/actions";


export const addTeam = createAction(ETeamActions.ADD_TEAM, props<{ team: TeamAddRequest }>());
export const addTeamSuccess = createAction(ETeamActions.ADD_TEAM_SUCCESS, props<{ team: Team }>());
export const addTeamError = createAction(ETeamActions.ADD_TEAM_ERROR, props<{ error: string }>());


const all = union({
  addTeam,
  addTeamSuccess,
  addTeamError
});

export type TeamActions = typeof all;
