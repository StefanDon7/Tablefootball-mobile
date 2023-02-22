import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../user/model/user";
import {Subject, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {selectLoginUser} from "../../../user/store/selectors";
import {Group, GroupAddRequest} from "../../../group/model/group";
import {GroupActions} from "../../../group";
import {selectSelectedGroup} from "../../../group/store/selectors";

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
})
export class AddMatchComponent implements OnInit, OnDestroy {

  form: FormGroup;
  user: User | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  selectedGroup: Group | undefined;


  constructor(private formBuilder: FormBuilder,
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
      }
    })
    this.store$.pipe(select(selectSelectedGroup)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.selectedGroup = value;
        this.form.patchValue({
          groupUuid: this.selectedGroup?.uuid
        })
      }
    });
  }

  addMatch() {

  }


  initForm() {
    this.form = this.formBuilder.group({
      name: [''],
      matchStatus: ['', Validators.required],
      firstTeam: ['', Validators.required],
      secondTeam: ['', Validators.required],
      groupUuid: [this.selectedGroup?.uuid, Validators.required],
      createdBy: [this.user?.uuid, Validators.required]
    })
  }


}
