import {createAction, props, union} from "@ngrx/store";
import {ESharedActions} from "../constant/actions";

export const navigate = createAction(ESharedActions.NAVIGATE, props<{ url: string[] }>());

export const successMessages = createAction(ESharedActions.SUCCESS_MESSAGES, props<{ messagesKey: string, extraMessage?: string }>());

export const errorMessages = createAction(ESharedActions.ERROR_MESSAGES, props<{ messagesKey: string, extraMessage?: string,  }>());

const all = union({

});

export type SharedActions = typeof all;
