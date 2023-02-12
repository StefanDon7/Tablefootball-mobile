import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map,} from "rxjs";
import {ESharedActions} from "../constant/actions";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class SharedEffect {
  private loading: any;

  constructor(private action$: Actions,
              private navigator: Router,
              private notificationMessages: ToastrService,
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


}
