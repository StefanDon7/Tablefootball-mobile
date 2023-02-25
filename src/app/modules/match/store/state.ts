import {Match} from "../model/match";

export interface State {
  error: string;
  groupMatches: Match[];
  teamMatches: Match[];
  playerMatches: Match[];
  selectedMatch: Match | undefined
  addedMatch: Match | undefined;
}

export const INIT_MATCH_STATE: State = {
  error: '',
  groupMatches: [],
  teamMatches: [],
  playerMatches: [],
  selectedMatch: undefined,
  addedMatch: undefined,
};
