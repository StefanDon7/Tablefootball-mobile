import {createAction, props, union} from "@ngrx/store";
import {User, UserAddRequest} from "../model/user";

export const enum ProductAction {
  AddUser = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserError = '[Product] Add Product Error',
}

export const AddUser = createAction(ProductAction.AddUser, props<{ user: UserAddRequest }>());
export const AddUserSuccess = createAction(ProductAction.AddUserSuccess, props<{ user: User }>());
export const AddUserError = createAction(ProductAction.AddUserError, props<{ error: string }>());


const all = union({
  AddUser,
  AddUserSuccess,
  AddUserError,
});

export type Actions = typeof all;
