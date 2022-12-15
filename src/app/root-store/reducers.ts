import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./state";
import {reducers as userReducer} from '../user/store/reducer';

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
}
