import {Group} from "../model/group";

export interface State {
  error: string;
  userGroups: Group[];
  group: Group | undefined
  addedGroup: Group | undefined;
}

export const INIT_GROUP_STATE: State = {
  error: '',
  userGroups: [],
  group: undefined,
  addedGroup: undefined,
};
