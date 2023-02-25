import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {Match} from "../model/match";


export const selectFeature = (state: AppState): State => {
  return state.match;
};


export const selectAddedMatch: MemoizedSelector<AppState, Match | undefined> = createSelector(selectFeature, s1 => {
  return s1.addedMatch;
});

export const selectSelectedMatch: MemoizedSelector<AppState, Match | undefined> = createSelector(selectFeature, s1 => {
  return s1.selectedMatch;
});
export const selectGroupMatches: MemoizedSelector<AppState, Match[]> = createSelector(selectFeature, s1 => {
  return s1.groupMatches;
});
export const selectTeamMatches: MemoizedSelector<AppState, Match[]> = createSelector(selectFeature, s1 => {
  return s1.teamMatches;
});
export const selectPlayerMatches: MemoizedSelector<AppState, Match[]> = createSelector(selectFeature, s1 => {
  return s1.playerMatches;
});


