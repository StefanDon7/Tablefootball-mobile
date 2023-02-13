import {createAction, props, union} from "@ngrx/store";
import {EGroupActions} from "../constant/actions";
import {Group, GroupAddRequest} from "../model/group";

export const addGroup = createAction(EGroupActions.AddGroup, props<{ group: GroupAddRequest }>());
export const addGroupSuccess = createAction(EGroupActions.AddGroupSuccess, props<{ group: Group }>());
export const addGroupError = createAction(EGroupActions.AddGroupError, props<{ error: string }>());

export const getGroup = createAction(EGroupActions.GetGroup, props<{ uuid: string }>());
export const getGroupSuccess = createAction(EGroupActions.GetGroupSuccess, props<{ group: Group }>());
export const getGroupError = createAction(EGroupActions.GetGroupError, props<{ error: string }>());

export const getGroupsByUser = createAction(EGroupActions.GetGroupsByUser, props<{ uuid: string }>());
export const getGroupsByUserSuccess = createAction(EGroupActions.GetGroupsByUserSuccess, props<{ groups: Group[] }>());
export const getGroupsByUserError = createAction(EGroupActions.GetGroupsByUserError, props<{ error: string }>());

const all = union({
  addGroup,
  addGroupSuccess,
  addGroupError,
  getGroup,
  getGroupSuccess,
  getGroupError,
  getGroupsByUser,
  getGroupsByUserSuccess,
  getGroupsByUserError,
});

export type GroupActions = typeof all;
