export const enum EMatchActions {
  ADD_MATCH = '[Match] Add Match',
  ADD_MATCH_SUCCESS = '[Match] Add Match Success',
  ADD_MATCH_ERROR = '[Match] Add Match Error',

  GET_GROUP_MATCHES = '[Match] Get Group Matches',
  GET_GROUP_MATCHES_SUCCESS = '[Match] Get Group Matches Success',
  GET_GROUP_MATCHES_ERROR = '[Match] Get Group Matches Error',

  GET_TEAM_MATCHES = '[Match] Get Team Matches',
  GET_TEAM_MATCHES_SUCCESS = '[Match] Get Team Matches Success',
  GET_TEAM_MATCHES_ERROR = '[Match] Get Team Matches Error',

  GET_PLAYER_MATCHES = '[Match] Get Player Matches',
  GET_PLAYER_MATCHES_SUCCESS = '[Match] Get Group Player Success',
  GET_PLAYER_MATCHES_ERROR = '[Match] Get Group Player Error',

  SELECT_MATCH = '[Match] Select Match',
}

export const enum EEventActions {
  ADD_EVENT = '[Event] Add Event',
  ADD_EVENT_SUCCESS = '[Event] Add Event Success',
  ADD_EVENT_ERROR = '[Event] Add Events Error',

  GET_EVENTS_BY_MATCH = '[Event] Get Events By Matches',
  GET_EVENTS_BY_MATCH_SUCCESS = '[Event] Get Events By Matches Success',
  GET_EVENTS_BY_MATCH_ERROR = '[Event] Get Events By Matches Error',
}
