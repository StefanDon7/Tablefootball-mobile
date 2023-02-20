import {Group} from "../../group/model/group";
import {User} from "../../user/model/user";

export interface Player {
  id: string;
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  group: Group;
  user?: User;
}

export interface PlayerAddRequest {
  firstname: string;
  lastname: string;
  username: string;
  groupUuid: string;
  userUuid?: string;
}


