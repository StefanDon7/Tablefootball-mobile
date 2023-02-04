import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserApiService} from "../../user/api/user-api-service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../root-store/state";
import {Regex} from "../../../shared/model/regex";
import {User, UserAddRequest} from "../../user/model/user";
import {UserActions} from "../../user";
import {selectedUser} from "../../user/store/selectors";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit {

  form: FormGroup;
  user: User | undefined;

  constructor(private formBuilder: FormBuilder,
              private userApiService: UserApiService,
              private store$: Store<AppState>) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.userApiService.getUserByUsername('StefanDon7').subscribe(user => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })

  }

  createUser() {
    // const user = {
    //   ...this.form.getRawValue()
    // } as UserAddRequest;
    // this.store$.dispatch(UserActions.({user}));
    // this.store$.select(selectedUser).subscribe(value => {
    //   if (value) {
    //     console.log(value);
    //   }
    // })
  }


}
