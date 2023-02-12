import {UserApiService} from "../api/user-api-service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, of, switchMap} from "rxjs";
import {LoginUserRequest, UserAddRequest} from "../model/user";
import {UserActions} from "../index";
import {SharedActions} from "../../../shared";

@Injectable()
export class UserEffects {
  constructor(private api: UserApiService,
              private action$: Actions) {
  }

  addUserEffect$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.addUser),
    switchMap((data: { user: UserAddRequest }) => this.api.addUser(data.user).pipe(
      switchMap(user => {
        return of(
          UserActions.addUserSuccess({user}),
          SharedActions.closeSpinner(),
          SharedActions.successMessages({messagesKey: 'gsadgds'})
        )
      }),
      catchError(error => of(
        SharedActions.closeSpinner(),
        UserActions.addUserError(error),
      ))
    ))
  ));

  loginUserEffect$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.loginUser),
    switchMap((data: { user: LoginUserRequest }) => this.api.loginUser(data.user).pipe(
      switchMap(user => of(
        UserActions.loginUserSuccess({user}),
        SharedActions.closeSpinner(),
        SharedActions.successMessages({messagesKey: 'gsadgds'})
      )),
      catchError(error => of(
        SharedActions.closeSpinner(),
        UserActions.loginUserError(error),
      ))
    ))
  ));
}
