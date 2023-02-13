import {User} from "../../user/model/user";

export interface Group {
  id: string;
  uuid: string;
  name: string;
  user: User;
}

export interface GroupAddRequest {
  name: string;
  userUuid: string;
}
