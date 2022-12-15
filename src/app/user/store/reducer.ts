import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {INIT_USER_STATE, State} from "./state";
import {AddUserSuccess} from './actions'

const reducer = createReducer(
  cloneDeep(INIT_USER_STATE),
  on(AddUserSuccess, (state: State, {user}) => {
    return ({
      ...state,
      addedUser: user
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
