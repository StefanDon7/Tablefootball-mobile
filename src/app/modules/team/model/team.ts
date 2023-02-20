import {Player} from "../../player/model/player";

export interface Team {
  id: string;
  uuid: string;
  name: string;
  attackPlayer: Player
  defencePlayer: Player;
  groupUuid: string;
}

export interface TeamAddRequest {
  name: string;
  attackPlayerUuid: string
  defencePlayerUuid: string;
  groupUuid: string;
}
