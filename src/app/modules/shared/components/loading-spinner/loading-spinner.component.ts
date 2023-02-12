import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../store/state";
import {Observable, Subject, takeUntil} from "rxjs";
import {AppState} from "../../../../root-store/state";
import {selectSpinnerValue} from "../../store/selectors";
import {selectLoginUser} from "../../../user/store/selectors";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {

  spinnerValue$: Observable<boolean> | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

}
