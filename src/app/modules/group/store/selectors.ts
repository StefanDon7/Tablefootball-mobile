import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {Group} from "../model/group";

export const getAddedGroup = (state: State) => state?.addedGroup;
export const getGroup = (state: State) => state?.userGroups;
export const getUserGroups = (state: State) => state?.userGroups;

export const selectFeature = (state: AppState): State => {
  return state.group;
};


export const selectAddedGroup: MemoizedSelector<AppState, Group | undefined> = createSelector(selectFeature, s1 => {
  return s1.addedGroup;
});

