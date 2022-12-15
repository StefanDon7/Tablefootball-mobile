import {UserApiService} from "../api/user-api-service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, of, switchMap} from "rxjs";
import {UserAddRequest} from "../model/user";
import {UserActions} from "../index";

@Injectable()
export class UserEffects {
  constructor(private api: UserApiService,
              private action$: Actions) {
  }

  addUserEffect$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.AddUser),
    switchMap((data: { user: UserAddRequest }) => this.api.addUserRequest(data.user).pipe(
      switchMap(user => of(
        UserActions.AddUserSuccess({user}),
      )),
      catchError(error => of(
        UserActions.AddUserError(error)
      ))
    ))
  ));
}
