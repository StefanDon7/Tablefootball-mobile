import {createAction, props, union} from "@ngrx/store";
import {LoginUserRequest, User, UserAddRequest} from "../model/user";
import {EUserActions} from "../constant/actions";



export const addUser = createAction(EUserActions.AddUser, props<{ user: UserAddRequest }>());
export const addUserSuccess = createAction(EUserActions.AddUserSuccess, props<{ user: User }>());
export const addUserError = createAction(EUserActions.AddUserError, props<{ error: string }>());

export const loginUser = createAction(EUserActions.LoginUser, props<{ user: LoginUserRequest }>());
export const loginUserSuccess = createAction(EUserActions.LoginUserSuccess, props<{ user: User }>());
export const loginUserError = createAction(EUserActions.LoginUserError, props<{ error: string }>());

const all = union({
  addUser,
  addUserSuccess,
  addUserError,
  loginUser,
  loginUserSuccess,
  loginUserError
});

export type UserActions = typeof all;
