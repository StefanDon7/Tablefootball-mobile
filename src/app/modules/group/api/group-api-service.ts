import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Group, GroupAddRequest} from "../model/group";

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {

  readonly GROUP_API = `${environment.baseURI}/api/group`;

  constructor(private http: HttpClient) {
  }


  addGroup(group: GroupAddRequest): Observable<Group> {
    return this.http.post<Group>(this.GROUP_API + '/add', group)
  }


}
