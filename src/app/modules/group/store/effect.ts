import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {GroupApiService} from "../api/group-api-service";
import {catchError, of, switchMap} from "rxjs";
import {SharedActions} from "../../../shared";
import {GroupActions} from "../index";
import {GroupAddRequest} from "../model/group";
import {MemberAddRequest} from "../model/member";


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
  getGroupByUserEffect$ = createEffect(() => this.action$.pipe(
    ofType(GroupActions.getGroupsByUser),
    switchMap((data: { uuid: string }) => this.api.getUserGroups(data.uuid).pipe(
      switchMap(groups => of(
        GroupActions.getGroupsByUserSuccess({groups}),
      )),
      catchError(error => of(
        GroupActions.getGroupError(error),
      ))
    ))
  ));

  getUsersByNameEffect$ = createEffect(() => this.action$.pipe(
    ofType(GroupActions.getUsersByName),
    switchMap((data: { search: string }) => this.api.getUsersByName(data.search).pipe(
      switchMap(users => of(
        GroupActions.getUsersByNameSuccess({users}),
      )),
      catchError(error => of(
        GroupActions.getUsersByNameError(error),
      ))
    ))
  ));
  addMemberEffect$ = createEffect(() => this.action$.pipe(
    ofType(GroupActions.addMember),
    switchMap((data: { memberAddRequest: MemberAddRequest }) => this.api.addMember(data.memberAddRequest).pipe(
      switchMap(member => of(
        GroupActions.addMemberSuccess({member}),
        // SharedActions.navigate({url: ['/group/members']}),
        SharedActions.successMessages({messagesKey: 'Member' + member.user.firstname + ' ' + member.user.lastname + 'added successfully'})
      )),
      catchError(error => of(
        GroupActions.addMemberError(error),
      ))
    ))
  ));


}
