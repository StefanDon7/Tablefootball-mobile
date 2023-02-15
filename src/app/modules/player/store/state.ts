import {Player} from "../model/player";

export interface State {
  error: string;
  groupPlayers: Player[];
  player: Player | undefined
  addedPlayer: Player | undefined;
}

export const INIT_PLAYER_STATE: State = {
  error: '',
  groupPlayers: [],
  player: undefined,
  addedPlayer: undefined,
};
