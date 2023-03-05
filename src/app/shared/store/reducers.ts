import {INIT_SHARED_STATE, State} from "./state";
import {Action, createReducer, on} from "@ngrx/store";
import {cloneDeep} from "lodash-es";
import {changeLanguage, closeSpinner, openSpinner} from "./actions";


const reducer = createReducer(
  cloneDeep(INIT_SHARED_STATE),
  on(openSpinner, (state: State) => {
    return {
      ...state,
      show: true,
    };
  }),
  on(closeSpinner, (state: State) => {
    return {
      ...state,
      show: false
    };
  }),
  on(changeLanguage, (state: State, {language}) => {
    return ({
      ...state,
      language: language
    });
  }),
)

export function reducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}
