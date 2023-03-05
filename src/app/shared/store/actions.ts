import {createAction, props, union} from "@ngrx/store";
import {ESharedActions} from "../constant/actions";

export const navigate = createAction(ESharedActions.NAVIGATE, props<{ url: string[] }>());

export const successMessages = createAction(ESharedActions.SUCCESS_MESSAGES, props<{ messagesKey: string, extraMessage?: string }>());

export const errorMessages = createAction(ESharedActions.ERROR_MESSAGES, props<{ messagesKey: string, extraMessage?: string, }>());

export const openSpinner = createAction(ESharedActions.OPEN_SPINNER);

export const closeSpinner = createAction(ESharedActions.CLOSE_SPINNER);

export const openSpinnerAction = createAction(ESharedActions.OPEN_DELAYED_SPINNER, (delay: number = 1) => ({delay}));

export const closeSpinnerAction = createAction(ESharedActions.CLOSE_DELAYED_SPINNER);

export const changeLanguage = createAction(ESharedActions.CHANGE_LANGUAGE, props<{ language: string }>());


const all = union({});

export type SharedActions = typeof all;
