import {State as UserState} from "../user/store/state";

export interface AppState {
  user: UserState;
}
