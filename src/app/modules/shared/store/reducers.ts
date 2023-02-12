import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from "lodash-es";
import {closeSpinner, openSpinner} from "./actions";
import {INIT_SHARED_STATE, State} from "./state";

const reducer = createReducer(
  cloneDeep(INIT_SHARED_STATE),
  on(openSpinner, (state: State) => {
    return {
      show: true
    };
  }),
  on(closeSpinner, (state: State) => {
    return {
      show: false
    };
  })
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
