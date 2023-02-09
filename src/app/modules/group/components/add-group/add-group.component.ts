import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserApiService} from "../../../user/api/user-api-service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {User} from "../../../user/model/user";
import {selectLoginUser} from "../../../user/store/selectors";
import {Subject, takeUntil} from "rxjs";
import {GroupAddRequest} from "../../model/group";
import {GroupActions} from "../../index";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit {

  form: FormGroup;
  user: User | undefined;
  private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private formBuilder: FormBuilder,
              private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.initForm();
    this.store$.pipe(select(selectLoginUser)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      if (value) {
        this.user = value;
      }
    })
  }

  addGroup() {
    const group = {
      ...this.form.getRawValue(),
      userUuid: this.user?.uuid
    } as GroupAddRequest;
    console.log(group);
    this.store$.dispatch(GroupActions.addGroup({group}))
  }


  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }
}
