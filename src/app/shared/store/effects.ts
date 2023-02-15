import {Injectable} from "@angular/core";
import {UserApiService} from "../../modules/user/api/user-api-service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {debounce, map, tap, timer} from "rxjs";
import {ESharedActions} from "../constant/actions";
import {Router} from "@angular/router";
import {SpinnerService} from "../service/spinner-service";
import {NotificationService} from "../service/notification-service";
import {SharedActions} from "../index";

@Injectable()
export class SharedEffect {
  constructor(private action$: Actions,
              private navigator: Router,
              private notification: NotificationService,
              private spinnerService: SpinnerService
  ) {
  }

  navigate = createEffect(
    () => this.action$.pipe(
      ofType(ESharedActions.NAVIGATE),
      map((data: { url: string[] }) => {
        this.navigator.navigate(data.url);
      })
    ), {dispatch: false}
  );

  openSuccessMessageEffect$ = createEffect(
    () => this.action$.pipe(
      ofType(SharedActions.successMessages),
      map((data: { messagesKey: string, extraMessage?: string }) => {
        this.notification.successMessage(data.messagesKey, data.extraMessage);
      }),
    ), {dispatch: false},
  );
  openErrorMessageEffect$ = createEffect(
    () => this.action$.pipe(
      ofType(SharedActions.errorMessages),
      map((data: { messagesKey: string, extraMessage?: string }) => {
        this.notification.errorMessage(data.messagesKey, data.extraMessage);
      }),
    ), {dispatch: false},
  );


  private waitForSpinner = false;

  openDelayedSpinner$ = createEffect(
    () => this.action$.pipe(
      ofType(ESharedActions.OPEN_DELAYED_SPINNER),
      tap(() => this.waitForSpinner = true),
      debounce((data: { delay: number }) => timer(data.delay)),
      map(() => {
        if (this.waitForSpinner) {
          this.spinnerService.openSpinner();
        }
      }),
    ), {dispatch: false},
  );

  closeSpinner$ = createEffect(
    () => this.action$.pipe(
      ofType(ESharedActions.CLOSE_DELAYED_SPINNER),
      map(() => {
        this.waitForSpinner = false;
        this.spinnerService.closeSpinner();
      }),
    ), {dispatch: false},
  );


}
