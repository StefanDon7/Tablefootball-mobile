import {State as UserState} from "../modules/user/store/state";
import {State as GroupState} from "../modules/group/store/state";

export interface AppState {
  user: UserState;
  group: GroupState;
}


