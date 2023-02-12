import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../root-store/state";
import {closeSpinner, openSpinner} from "../store/actions";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(protected store$: Store<AppState>) {
  }

  openSpinner(): void {
    this.store$.dispatch(openSpinner());
  }

  closeSpinner(): void {
    this.store$.dispatch(closeSpinner());
  }
}
