import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {Match} from "../model/match";

export const getAddedMatch = (state: State) => state?.addedMatch;


export const selectFeature = (state: AppState): State => {
  return state.match;
};


export const selectAddedMatch: MemoizedSelector<AppState, Match | undefined> = createSelector(selectFeature, s1 => {
  return s1.addedMatch;
});

export const selectSelectedGroup: MemoizedSelector<AppState, Match | undefined> = createSelector(selectFeature, s1 => {
  return s1.selectedMatch;
});
export const selectGroupMatch: MemoizedSelector<AppState, Match[]> = createSelector(selectFeature, s1 => {
  return s1.groupMatches;
});


