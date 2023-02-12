import {State} from "./state";
import {AppState} from "../../root-store/state";
import {createSelector, MemoizedSelector} from "@ngrx/store";

export const getSpinnerValue = (state: State) => state?.show;


export const selectFeature = (state: AppState): State => {
  return state.shared;
};


export const selectSpinnerValue: MemoizedSelector<AppState, any | undefined> = createSelector(selectFeature, s1 => {
  return s1.show;
});
