import {Team} from "../model/team";

export interface State {
  error: string;
  groupTeams: Team[];
  addedTeam: Team | undefined;
}

export const INIT_TEAM_STATE: State = {
  error: '',
  groupTeams: [],
  addedTeam: undefined,
};
