import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../root-store/state";
import {User} from "../model/user";

export const getUsers = (state: State) => state?.users;
export const getAddedUser = (state: State) => state?.addedUser;


export const selectFeature = (state: AppState): State => {
  return state.user;
};


export const selectedUser: MemoizedSelector<AppState, User | undefined> = createSelector(selectFeature, s1 => {
  return s1.selectedUser;
});
