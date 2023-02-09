import {INIT_USER_STATE, State} from "../../modules/user/store/state";
import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from "lodash-es";

const reducer = createReducer(
  cloneDeep(INIT_USER_STATE)
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
