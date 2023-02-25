import {createAction, props, union} from "@ngrx/store";
import {EEventActions, EMatchActions} from "../constant/actions";
import {Match, MatchAddRequest} from "../model/match";
import {Event, EventAddRequest} from "../model/event";

export const addMatch = createAction(EMatchActions.ADD_MATCH, props<{ match: MatchAddRequest }>());
export const addMatchSuccess = createAction(EMatchActions.ADD_MATCH_SUCCESS, props<{ match: Match }>());
export const addMatchError = createAction(EMatchActions.ADD_MATCH_ERROR, props<{ error: string }>());

export const addEvent = createAction(EEventActions.ADD_EVENT, props<{ event: EventAddRequest }>());
export const addEventSuccess = createAction(EEventActions.ADD_EVENT_SUCCESS, props<{ event: Event }>());
export const addEventError = createAction(EEventActions.ADD_EVENT_ERROR, props<{ error: string }>());

export const getGroupMatches = createAction(EMatchActions.GET_GROUP_MATCHES, props<{ uuid: string }>());
export const getGroupMatchesSuccess = createAction(EMatchActions.GET_GROUP_MATCHES_SUCCESS, props<{ matches: Match[] }>());
export const getGroupMatchesError = createAction(EMatchActions.GET_GROUP_MATCHES_ERROR, props<{ error: string }>());

export const getTeamMatches = createAction(EMatchActions.GET_TEAM_MATCHES, props<{ uuid: string }>());
export const getTeamMatchesSuccess = createAction(EMatchActions.GET_TEAM_MATCHES_SUCCESS, props<{ matches: Match[] }>());
export const getTeamMatchesError = createAction(EMatchActions.GET_TEAM_MATCHES_ERROR, props<{ error: string }>());

export const getPlayerMatches = createAction(EMatchActions.GET_PLAYER_MATCHES, props<{ uuid: string }>());
export const getPlayerMatchesSuccess = createAction(EMatchActions.GET_PLAYER_MATCHES_SUCCESS, props<{ matches: Match[] }>());
export const getPlayerMatchesError = createAction(EMatchActions.GET_PLAYER_MATCHES_ERROR, props<{ error: string }>());


export const selectMatch = createAction(EMatchActions.SELECT_MATCH, props<{ match: Match }>());

const all = union({
  addMatch,
  addMatchSuccess,
  addMatchError,
  selectMatch,
  getGroupMatches,
  getGroupMatchesSuccess,
  getGroupMatchesError
});

export type MatchActions = typeof all;
