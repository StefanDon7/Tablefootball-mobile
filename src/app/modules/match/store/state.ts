import {Match} from "../model/match";

export interface State {
  error: string;
  groupMatches: Match[];
  selectedMatch: Match | undefined
  addedMatch: Match | undefined;
}

export const INIT_MATCH_STATE: State = {
  error: '',
  groupMatches: [],
  selectedMatch: undefined,
  addedMatch: undefined,
};
