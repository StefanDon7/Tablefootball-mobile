import {Group} from "../../group/model/group";
import {User} from "../../user/model/user";

export interface PlayerAddRequest {
  firstname: string;
  lastname: string;
  username: string;
  groupUuid: string;
  userUuid?: string;
}

export interface Player {
  firstname: string;
  lastname: string;
  username: string;
  group: Group;
  user?: User;
}
