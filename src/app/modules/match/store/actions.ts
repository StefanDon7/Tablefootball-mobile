import {createAction, props, union} from "@ngrx/store";
import {EMatchActions} from "../constant/actions";
import {Match, MatchAddRequest} from "../model/match";

export const addMatch = createAction(EMatchActions.ADD_MATCH, props<{ match: MatchAddRequest }>());
export const addMatchSuccess = createAction(EMatchActions.ADD_MATCH_SUCCESS, props<{ match: Match }>());
export const addMatchError = createAction(EMatchActions.ADD_MATCH_ERROR, props<{ error: string }>());


export const selectMatch = createAction(EMatchActions.SELECT_MATCH, props<{ match: Match }>());

const all = union({
  addMatch,
  addMatchSuccess,
  addMatchError,
  selectMatch
});

export type MatchActions = typeof all;
