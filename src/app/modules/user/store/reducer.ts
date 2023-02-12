import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from 'lodash-es';
import {INIT_USER_STATE, State} from "./state";
import {addUserSuccess, loginUserSuccess, logoutUser} from './actions'

const reducer = createReducer(
  cloneDeep(INIT_USER_STATE),
  on(addUserSuccess, (state: State, {user}) => {
    return ({
      ...state,
      addedUser: user
    });
  }),
  on(loginUserSuccess, (state: State, {user}) => {
    return ({
      ...state,
      loginUser: user
    });
  }),
  on(logoutUser, (state) => ({
    ...state,
    loginUser: undefined
  })),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
