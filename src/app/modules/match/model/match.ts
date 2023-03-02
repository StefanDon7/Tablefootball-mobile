import {Team} from "../../team/model/team";

export enum MatchStatus {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END',
}

export interface Match {
  id: string;
  uuid: string
  name: string;
  matchStatus: MatchStatus;
  matchTimeMinutes: number;
  numberOfGoals: number;
  firstTeam: Team;
  secondTeam: Team;
  groupUuid: string;
  createdBy: string;
}

export interface MatchAddRequest {
  name: string;
  matchStatus: MatchStatus;
  firstTeamUuid: string;
  secondTeamUuid: string;
  matchTimeMinutes: number;
  numberOfGoals: number;
  groupUuid: string;
  createdBy: string;
}

export enum FigurePosition {
  GOALKEEPER = 'GOALKEEPER',
  DEFENCE_LEFT = 'DEFENCE_LEFT',
  DEFENCE_RIGHT = 'DEFENCE_RIGHT',
  ATTACK_RIGHT = 'ATTACK_RIGHT',
  ATTACK_MIDDLE = 'ATTACK_MIDDLE',
  ATTACK_LEFT = 'ATTACK_LEFT',
  MIDFIELD = 'MIDFIELD',
  NULL = 'NULL'
}

export enum TEAM {
  HOME = 'HOME',
  AWAY = 'AWAY',
}
