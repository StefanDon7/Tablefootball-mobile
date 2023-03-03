import {Group} from "./group";
import {User} from "../../user/model/user";

export interface Member {
  id: string;
  uuid: string;
  user: User;
  group: Group;
}

export interface MemberAddRequest {
  userUuid: string;
  groupUuid: string;
}
