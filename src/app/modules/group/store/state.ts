import {Group} from "../model/group";
import {User} from "../../user/model/user";

export interface State {
  error: string;
  userGroups: Group[];
  selectedGroup: Group | undefined;
  addedGroup: Group | undefined;
  searchUsers: User[];
}

export const INIT_GROUP_STATE: State = {
  error: '',
  userGroups: [],
  selectedGroup: undefined,
  addedGroup: undefined,
  searchUsers: []
};
