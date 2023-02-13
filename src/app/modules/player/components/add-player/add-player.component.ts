import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../user/model/user";
import {Subject, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {selectLoginUser} from "../../../user/store/selectors";
import {Group, GroupAddRequest} from "../../../group/model/group";
import {GroupActions} from "../../../group";
import {PlayerAddRequest} from "../../model/player";
import {PlayerActions} from "../../index";
import {selectSelectedGroup} from "../../../group/store/selectors";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent implements OnInit {

  form: FormGroup;
  user: User | undefined;
  selectedGroup: Group | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  isDisable = false;


  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      groupUuid: ['', Validators.required],
      userUuid: [''],
    })
  }

  ngOnInit() {
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
        this.isDisable = true;
        this.form.patchValue({
          groupUuid: this.selectedGroup?.uuid
        })
      }
    });
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
      }
    })
  }

  addPlayer() {
    const player = {
      ...this.form.getRawValue(),
    } as PlayerAddRequest;
    this.store$.dispatch(PlayerActions.addPlayer({player}))
  }

}
