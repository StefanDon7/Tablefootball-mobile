import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserAddRequest} from "../../model/user";
import {UserApiService} from "../../api/user-api-service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {UserActions} from "../../index";
import {Regex} from "../../../../shared/model/regex";
import {SharedActions} from "../../../../shared";
import {Actions, ofType} from "@ngrx/effects";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {NotificationService} from "../../../../shared/service/notification-service";
import {TeamActions} from "../../../team";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private notification: NotificationService, private actions$: Actions, private router: Router, private userApiService: UserApiService, private store$: Store<AppState>) {
    this.form = this.initForm();
  }

  ngOnInit() {
    this.actions$.pipe(ofType(UserActions.addUserSuccess)).pipe(take(1)).subscribe(action => {
      if (action) {
        this.router.navigateByUrl('user/login');
      }
    });
  }

  ngOnDestroy(): void {
  }

  createUser() {
    const user = {
      ...this.form.getRawValue()
    } as UserAddRequest;
    this.store$.dispatch(SharedActions.openSpinner());
    this.store$.dispatch(UserActions.addUser({user}));
  }


  initForm(): FormGroup {
    const form = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(Regex.EMAIL)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(Regex.PASSWORD)])],
    })
    return form;
  }


}
