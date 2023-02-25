import {FigurePosition, Match} from "./match";
import {Player} from "../../player/model/player";

export interface Event {
  id: string
  uuid: string
  eventType: EventType;
  time: number;
  figurePosition?: FigurePosition;
  player?: Player;
  match: Match;
  groupUuid: string;
}

export interface EventAddRequest {
  eventType: EventType;
  time: number;
  figurePosition?: FigurePosition;
  playerUuid?: string;
  matchUuid: string;
  groupUuid: string;
}

export enum EventType {
  MATCH_START = 'MATCH_START',
  MATCH_END = 'MATCH_END',
  PAUSE_START = 'PAUSE_START',
  PAUSE_END = 'PAUSE_END',
  GOAL = 'GOAL',
  OWN_GOAL = 'OWN_GOAL',
  MINUS = 'MINUS'
}
