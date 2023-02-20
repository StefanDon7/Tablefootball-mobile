import {State as UserState} from "../modules/user/store/state";
import {State as GroupState} from "../modules/group/store/state";
import {State as PlayerState} from "../modules/player/store/state";
import {State as TeamState} from "../modules/team/store/state";
import {State as SharedState} from "../shared/store/state";

export interface AppState {
  user: UserState;
  group: GroupState;
  player: PlayerState;
  team: TeamState;
  shared: SharedState;
}


