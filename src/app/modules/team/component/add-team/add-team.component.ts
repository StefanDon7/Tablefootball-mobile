import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from "../../../player/model/player";
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {selectLoginUser} from "../../../user/store/selectors";
import {Subject, take, takeUntil} from "rxjs";
import {Group, GroupAddRequest} from "../../../group/model/group";
import {GroupActions} from "../../../group";
import {selectSelectedGroup} from "../../../group/store/selectors";
import {TeamAddRequest} from "../../model/team";
import {TeamActions} from "../../index";
import {selectGroupPlayers} from "../../../player/store/selectors";
import {PlayerActions} from "../../../player";
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss'],
})
export class AddTeamComponent implements OnInit, OnDestroy {
  groupPlayers: Player[] = [];
  form: any;
  selectedGroup: Group | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private actions$: Actions,
              private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      name: [''],
      attackPlayer: ['', Validators.required],
      defencePlayer: ['', Validators.required],
      groupUuid: [''],
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  ngOnInit() {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
        this.store$.dispatch(PlayerActions.getGroupPlayers({groupUuid: this.selectedGroup ? this.selectedGroup?.uuid : ''}))
        this.form.patchValue({
          groupUuid: this.selectedGroup?.uuid
        })
      }
    });
    this.store$.pipe(select(selectGroupPlayers)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.groupPlayers = value;
      }
    });
    this.actions$.pipe(ofType(TeamActions.addTeamSuccess)).pipe(take(1)).subscribe(action => {
      if (action) {
        this.form.reset();
      }
    });
  }

  addTeam() {
    if (!this.form.value.name) {
      this.form.controls.name.setValue(this.form.value.attackPlayer.username + '&' + this.form.value.defencePlayer.username)
    }
    this.form.patchValue({
      groupUuid: this.selectedGroup?.uuid
    });
    const team = {
      ...this.form.getRawValue(),
      attackPlayerUuid: this.form.value.attackPlayer.uuid,
      defencePlayerUuid: this.form.value.defencePlayer.uuid,
    } as TeamAddRequest;
    this.store$.dispatch(TeamActions.addTeam({team}))
  }


}
