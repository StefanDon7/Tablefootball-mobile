import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {GroupApiService} from "../api/group-api-service";
import {catchError, of, switchMap} from "rxjs";
import {SharedActions} from "../../../shared";
import {GroupActions} from "../index";
import {GroupAddRequest} from "../model/group";


@Injectable()
export class GroupEffect {
  constructor(private api: GroupApiService,
              private action$: Actions) {
  }

  addGroupEffect$ = createEffect(() => this.action$.pipe(
    ofType(GroupActions.addGroup),
    switchMap((data: { group: GroupAddRequest }) => this.api.addGroup(data.group).pipe(
      switchMap(group => of(
        GroupActions.addGroupSuccess({group}),
        SharedActions.successMessages({messagesKey: 'group.add.success'})
      )),
      catchError(error => of(
        GroupActions.addGroupError(error),
      ))
    ))
  ));

}