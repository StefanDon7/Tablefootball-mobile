import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../user/model/user";
import {Subject, take, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {selectLoginUser} from "../../../user/store/selectors";
import {Group, GroupAddRequest} from "../../../group/model/group";
import {GroupActions} from "../../../group";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {TeamActions} from "../../../team";
import {selectGroupTeams} from "../../../team/store/selectors";
import {Team} from "../../../team/model/team";
import {Match, MatchAddRequest, MatchStatus} from "../../model/match";
import {MatchActions} from "../../index";
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
})
export class AddMatchComponent implements OnInit, OnDestroy {

  form: FormGroup;
  user: User | undefined;
  groupsTeam: Team[] = [];
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  selectedGroup: Group | undefined;


  constructor(private formBuilder: FormBuilder,
              private actions$: Actions,
              private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  ngOnInit() {
    this.initForm();
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
        this.form.patchValue({
          createdBy: this.user.uuid
        })
      }
    })
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
        this.form.patchValue({
          groupUuid: this.selectedGroup?.uuid
        })
        this.store$.dispatch(TeamActions.getGroupTeams({groupUuid: this.selectedGroup?.uuid}))
      }
    });
    this.store$.pipe(select(selectGroupTeams)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.groupsTeam = value;
      }
    });
    this.actions$.pipe(ofType(MatchActions.addMatchSuccess)).pipe(take(1)).subscribe(action => {
      if (action) {
        this.form.reset();
      }
    });
  }

  addMatch() {
    const match = {
      ...this.form.getRawValue(),
      firstTeamUuid: this.form.value.firstTeam.uuid,
      secondTeamUuid: this.form.value.secondTeam.uuid
    } as MatchAddRequest
    this.store$.dispatch(MatchActions.addMatch({match}))
  }


  initForm() {
    this.form = this.formBuilder.group({
      name: [''],
      matchStatus: [MatchStatus.CREATED, Validators.required],
      firstTeam: ['', Validators.required],
      secondTeam: ['', Validators.required],
      groupUuid: [this.selectedGroup?.uuid, Validators.required],
      createdBy: [this.user?.uuid, Validators.required]
    })
  }


}
