import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {Team} from "../model/team";

export const getAddedTeam = (state: State) => state?.addedTeam;
export const getGroupTeams = (state: State) => state?.groupTeams;

export const selectFeature = (state: AppState): State => {
  return state.team;
};


export const selectAddedTeam: MemoizedSelector<AppState, Team | undefined> = createSelector(selectFeature, s1 => {
  return s1.addedTeam;
});
export const selectGroupTeams: MemoizedSelector<AppState, Team[]> = createSelector(selectFeature, s1 => {
  return s1.groupTeams;
});

