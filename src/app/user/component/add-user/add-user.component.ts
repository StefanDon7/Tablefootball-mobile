import {Component, OnInit} from '@angular/core';
import {FormBuilder, Form, FormGroup} from "@angular/forms";
import {UserAddRequest} from "../../model/user";
import {UserApiService} from "../../api/user-api-service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {UserActions} from "../../index";
import {selectedUser} from '../../store/selectors'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userApiService: UserApiService, private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
    })
  }

  ngOnInit() {

  }

  createUser() {
    const user = {
      ...this.form.getRawValue()
    } as UserAddRequest;
    // this.userApiService.addUserRequest(user).subscribe(value => {
    //   if (value) {
    //     console.log(value);
    //   }
    // });
    this.store$.dispatch(UserActions.AddUser({user}));
    this.store$.select(selectedUser).subscribe(value => {
      if (value) {
        console.log(value);
      }
    })
  }


}
