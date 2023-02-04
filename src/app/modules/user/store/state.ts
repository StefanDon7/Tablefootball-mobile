import {User} from "../model/user";

export interface State {
  error: string;
  users: User[];
  addedUser: User | undefined;
  selectedUser: User | undefined;
}

export const INIT_USER_STATE: State = {
  error: '',
  users: [],
  addedUser: undefined,
  selectedUser: undefined,
};
