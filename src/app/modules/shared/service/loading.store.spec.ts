import {reducers} from "../store/reducers";
import {INIT_SHARED_STATE, State} from "../store/state";
import {closeSpinner, openSpinner} from "../store/actions";
import {createAction} from "@ngrx/store";

describe('Loading store', () => {
  it('openSpinner', () => {
    const initialState: State = {show: false};
    const newState = reducers(initialState, openSpinner());
    expect(newState).toEqual({show: true});
  })

  it('closeSpinner', () => {
    const initialState: State = {show: true};
    const newState = reducers(initialState, closeSpinner());
    expect(newState).toEqual({show: false});
  })

  it('unknown action', () => {
    const initialState: State = {show: true};
    const action = createAction("UNKNOWN ACTION")
    const newState = reducers(initialState, action);
    expect(newState).toEqual({show: true});
  })

  it('unknown action', () => {
    const initialState: State = {show: false};
    const action = createAction("UNKNOWN ACTION")
    const newState = reducers(initialState, action);
    expect(newState).toEqual({show: false});
  })
})
