import {User} from "../../user/model/user";

export interface Group {
  id: string;
  uuid: string;
  name: string;
  userUuid: User;
}

export interface GroupAddRequest {
  name: string;
  userUuid: string;
}
