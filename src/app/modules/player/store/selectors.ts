import {State} from "./state";
import {createSelector, MemoizedSelector} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {Player} from "../model/player";

export const getAddPlayer = (state: State) => state?.addedPlayer;
export const getGroupPlayers = (state: State) => state?.groupPlayers;
export const getPlayer = (state: State) => state?.player;

export const selectFeature = (state: AppState): State => {
  return state.player;
};


export const selectAddedPlayer: MemoizedSelector<AppState, Player | undefined> = createSelector(selectFeature, s1 => {
  return s1.addedPlayer;
});

