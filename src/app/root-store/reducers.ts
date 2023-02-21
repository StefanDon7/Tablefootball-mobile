import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./state";
import {reducers as userReducer} from '../modules/user/store/reducer';
import {reducers as groupReducer} from '../modules/group/store/reducer';
import {reducers as playerReducer} from '../modules/player/store/reducer';
import {reducers as teamReducer} from '../modules/team/store/reducer';
import {reducers as matchReducer} from '../modules/match/store/reducer';
import {reducers as sharedReducer} from '../shared/store/reducers';

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  group: groupReducer,
  player: playerReducer,
  team: teamReducer,
  match: matchReducer,
  shared: sharedReducer,
}
