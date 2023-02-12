import {Injectable} from "@angular/core";
import {UserApiService} from "../../modules/user/api/user-api-service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserActions} from "../../modules/user";
import {catchError, debounce, map, of, switchMap, tap, timer} from "rxjs";
import {ESharedActions} from "../constant/actions";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";
import {SpinnerService} from "../service/spinner-service";

@Injectable()
export class SharedEffect {
  constructor(private action$: Actions,
              private navigator: Router,
              private notificationMessages: ToastrService,
              private translateService: TranslateService,
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

  openSuccessDialog = createEffect(
    () => this.action$.pipe(
      ofType(ESharedActions.SUCCESS_MESSAGES),
      map((data: { messagesKey: string, extraMessage?: string }) => {
        // let messages = this.translateService.instant(data.messagesKey);
        // messages = data.extraMessage ? messages + ' - ' + data.extraMessage : messages;
        this.notificationMessages.success(data.messagesKey);
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
