import {Group} from "../model/group";

export interface State {
  error: string;
  userGroups: Group[];
  selectedGroup: Group | undefined
  addedGroup: Group | undefined;
}

export const INIT_GROUP_STATE: State = {
  error: '',
  userGroups: [],
  selectedGroup: undefined,
  addedGroup: undefined,
};
