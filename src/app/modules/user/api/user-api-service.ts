import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginUserRequest, User, UserAddRequest} from "../model/user";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  readonly USER_API = `${environment.baseURI}/api/user`;
  readonly radnomApi = `https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json`;

  constructor(private http: HttpClient) {
  }


  addUser(user: UserAddRequest): Observable<User> {
    return this.http.post<User>(this.USER_API + '/add', user)
  }
  loginUser(user: LoginUserRequest): Observable<User> {
    return this.http.post<User>(this.USER_API + '/login', user)
  }

  dovuci(): Observable<any> {
    return this.http.get<any>(this.radnomApi)
  }

}
