import {createAction, props, union} from "@ngrx/store";
import {Team, TeamAddRequest} from "../model/team";
import {ETeamActions} from "../constant/actions";


export const addTeam = createAction(ETeamActions.ADD_TEAM, props<{ team: TeamAddRequest }>());
export const addTeamSuccess = createAction(ETeamActions.ADD_TEAM_SUCCESS, props<{ team: Team }>());
export const addTeamError = createAction(ETeamActions.ADD_TEAM_ERROR, props<{ error: string }>());

export const getGroupTeams = createAction(ETeamActions.GET_GROUP_TEAMS, props<{ groupUuid: string }>());
export const getGroupTeamsSuccess = createAction(ETeamActions.GET_GROUP_TEAMS_SUCCESS, props<{ teams: Team[] }>());
export const getGroupTeamsError = createAction(ETeamActions.GET_GROUP_TEAMS_ERROR, props<{ error: string }>());

const all = union({
  addTeam,
  addTeamSuccess,
  addTeamError,
  getGroupTeams,
  getGroupTeamsSuccess,
  getGroupTeamsError
});

export type TeamActions = typeof all;
