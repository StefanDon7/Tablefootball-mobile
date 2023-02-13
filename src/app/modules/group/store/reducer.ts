import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {addGroupSuccess, getGroupsByUserSuccess} from "./actions";
import {INIT_GROUP_STATE, State} from "./state";

const reducer = createReducer(
  cloneDeep(INIT_GROUP_STATE),
  on(addGroupSuccess, (state: State, {group}) => {
    return ({
      ...state,
      addedGroup: group
    });
  }),
  on(getGroupsByUserSuccess, (state: State, {groups}) => {
    return ({
      ...state,
      userGroups: groups
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
