import {createAction, props, union} from "@ngrx/store";
import {EGroupActions} from "../constant/actions";
import {Group, GroupAddRequest} from "../model/group";
import {User} from "../../user/model/user";
import {Member, MemberAddRequest} from "../model/member";

export const addGroup = createAction(EGroupActions.AddGroup, props<{ group: GroupAddRequest }>());
export const addGroupSuccess = createAction(EGroupActions.AddGroupSuccess, props<{ group: Group }>());
export const addGroupError = createAction(EGroupActions.AddGroupError, props<{ error: string }>());

export const addMember = createAction(EGroupActions.AddMember, props<{ memberAddRequest: MemberAddRequest }>());
export const addMemberSuccess = createAction(EGroupActions.AddMemberSuccess, props<{ member: Member }>());
export const addMemberError = createAction(EGroupActions.AddMemberError, props<{ error: string }>());

export const getGroup = createAction(EGroupActions.GetGroup, props<{ uuid: string }>());
export const getGroupSuccess = createAction(EGroupActions.GetGroupSuccess, props<{ group: Group }>());
export const getGroupError = createAction(EGroupActions.GetGroupError, props<{ error: string }>());

export const getGroupsByUser = createAction(EGroupActions.GetGroupsByUser, props<{ uuid: string }>());
export const getGroupsByUserSuccess = createAction(EGroupActions.GetGroupsByUserSuccess, props<{ groups: Group[] }>());
export const getGroupsByUserError = createAction(EGroupActions.GetGroupsByUserError, props<{ error: string }>());

export const getUsersByName = createAction(EGroupActions.GetGroupsByUser, props<{ search: string }>());
export const getUsersByNameSuccess = createAction(EGroupActions.GetGroupsByUserSuccess, props<{ users: User[] }>());
export const getUsersByNameError = createAction(EGroupActions.GetGroupsByUserError, props<{ error: string }>());

export const selectGroup = createAction(EGroupActions.SELECT_GROUP, props<{ group: Group }>());

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
