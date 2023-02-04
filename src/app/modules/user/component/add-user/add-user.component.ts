import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserAddRequest} from "../../model/user";
import {UserApiService} from "../../api/user-api-service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../root-store/state";
import {UserActions} from "../../index";
import {selectedUser} from '../../store/selectors'
import {Regex} from "../../../../shared/model/regex";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userApiService: UserApiService, private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
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
    this.store$.dispatch(UserActions.addUser({user}));
    // this.store$.select(selectedUser).subscribe(value => {
    //   if (value) {
    //     console.log(value);
    //   }
    // })
  }


}
