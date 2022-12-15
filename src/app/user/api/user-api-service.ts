import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User, UserAddRequest} from "../model/user";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  readonly ADD_USER_API = `${environment.baseURI}/api/user/add`;

  constructor(private http: HttpClient) {
  }


  addUserRequest(user: UserAddRequest): Observable<User> {
    return this.http.post<User>(this.ADD_USER_API, user)
  }

}
