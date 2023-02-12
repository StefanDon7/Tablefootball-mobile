import {State as UserState} from "../modules/user/store/state";
import {State as GroupState} from "../modules/group/store/state";
import {State as SharedState} from "../modules/shared/store/state";

export interface AppState {
  user: UserState;
  group: GroupState;
  shared: SharedState;
}


