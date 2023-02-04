import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserApiService} from "../../api/user-api-service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {Regex} from "../../../../shared/model/regex";
import {UserAddRequest} from "../../model/user";
import {UserActions} from "../../index";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userApiService: UserApiService, private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(Regex.EMAIL)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(Regex.PASSWORD)])],
    })
  }

  ngOnInit() {

  }

  createUser() {
    const user = {
      ...this.form.getRawValue()
    } as UserAddRequest;
    this.store$.dispatch(UserActions.loginUser({user}));
    // this.store$.select(selectedUser).subscribe(value => {
    //   if (value) {
    //     console.log(value);
    //   }
    // })
  }


}
