import {UserApiService} from "../api/user-api-service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {LoginUserRequest, UserAddRequest} from "../model/user";
import {UserActions} from "../index";
import {SharedActions} from "../../../shared";
import {NotificationService} from "../../../shared/service/notification-service";

@Injectable()
export class UserEffects {
  constructor(private api: UserApiService, private notification: NotificationService,
              private action$: Actions) {
  }

  addUserEffect$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.addUser),
    switchMap((data: { user: UserAddRequest }) => this.api.addUser(data.user).pipe(
      switchMap(user => of(
          UserActions.addUserSuccess({user}),
          SharedActions.closeSpinner(),
          SharedActions.successMessages({messagesKey: 'Welcome ', extraMessage: user.firstname + ' ' + user.lastname}),
          // SharedActions.navigate({url: ['user/login']})
        )
      ),
      catchError(error => of(
        SharedActions.closeSpinner(),
        UserActions.addUserError(error),
        SharedActions.errorMessages({messagesKey: error.message, extraMessage: ''}),
      ))
    ))
  ));

  loginUserEffect$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.loginUser),
    switchMap((data: { user: LoginUserRequest }) => this.api.loginUser(data.user).pipe(
      switchMap(user => of(
        UserActions.loginUserSuccess({user}),
        SharedActions.closeSpinner(),
        SharedActions.successMessages({messagesKey: 'Greeting ', extraMessage: user.firstname + ' ' + user.lastname}),
        // SharedActions.navigate({url: ['group/user-groups']})
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        UserActions.loginUserError(error),
        SharedActions.errorMessages({messagesKey: error.message, extraMessage: ''}),
      ))
    ))
  ));
}
