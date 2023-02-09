import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {User} from "../model/user";

export const getUsers = (state: State) => state?.users;
export const getAddedUser = (state: State) => state?.addedUser;
export const getLoginUser = (state: State) => state?.loginUser;

export const selectFeature = (state: AppState): State => {
  return state.user;
};


export const selectedAddedUser: MemoizedSelector<AppState, User | undefined> = createSelector(selectFeature, s1 => {
  return s1.addedUser;
});
export const selectLoginUser: MemoizedSelector<AppState, User | undefined> = createSelector(selectFeature, s1 => {
  return s1.loginUser;
});
