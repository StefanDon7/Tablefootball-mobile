import {User} from "../model/user";

export interface State {
  error: string;
  users: User[];
  addedUser: User | undefined;
  loginUser: User | undefined,
}

export const INIT_USER_STATE: State = {
  error: '',
  users: [],
  addedUser: undefined,
  loginUser: undefined,
};
