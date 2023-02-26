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
        SharedActions.navigate({url: ['/group/user-groups']}),
        SharedActions.successMessages({messagesKey: 'Group' + group.name + 'added successfully'})
      )),
      catchError(error => of(
        GroupActions.addGroupError(error),
      ))
    ))
  ));
  getGroupByUser = createEffect(() => this.action$.pipe(
    ofType(GroupActions.getGroupsByUser),
    switchMap((data: { uuid: string }) => this.api.getGroupsByUser(data.uuid).pipe(
      switchMap(groups => of(
        GroupActions.getGroupsByUserSuccess({groups}),
      )),
      catchError(error => of(
        GroupActions.getGroupError(error),
      ))
    ))
  ));

}
