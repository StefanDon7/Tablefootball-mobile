import {User} from "../../user/model/user";

export interface Group {
  id: string;
  uuid: string;
  name: string;
  midfieldGoalType: string;
  matchType: string;
  user: User;
}

export interface GroupAddRequest {
  name: string;
  userUuid: string;
  midfieldGoalType: string;
  matchType: string;
}
