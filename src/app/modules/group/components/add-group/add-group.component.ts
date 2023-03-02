import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {User} from "../../../user/model/user";
import {selectLoginUser} from "../../../user/store/selectors";
import {Subject, take, takeUntil} from "rxjs";
import {GroupAddRequest} from "../../model/group";
import {GroupActions} from "../../index";
import {Actions, ofType} from "@ngrx/effects";
import {PlayerActions} from "../../../player";
import {Router} from "@angular/router";
import {MidfieldGoalType} from "../../model/midfield-goal-type";
import {MatchType} from "../../model/match-type";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit, OnDestroy {

  form: FormGroup;
  user: User | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  midfieldGoalType = Object.values(MidfieldGoalType);
  matchType = Object.values(MatchType);

  constructor(private formBuilder: FormBuilder,
              private actions$: Actions,
              private router: Router,
              private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  ngOnDestroy(): void {
    this.form.reset();
  }

  ngOnInit() {
    this.initForm();
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
      }
    })
    this.actions$.pipe(ofType(GroupActions.addGroupSuccess)).pipe(take(1)).subscribe(action => {
      if (action) {
      }
    });
  }

  addGroup() {
    const group = {
      ...this.form.getRawValue(),
      userUuid: this.user?.uuid
    } as GroupAddRequest;
    this.store$.dispatch(GroupActions.addGroup({group}))
  }


  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      midfieldGoalType: [''],
      matchType: [''],
    })
  }
}
