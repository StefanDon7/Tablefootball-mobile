import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Group, GroupAddRequest} from "../model/group";
import {User} from "../../user/model/user";
import {Member, MemberAddRequest} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {

  readonly GROUP_API = `${environment.baseURI}/api/group`;
  readonly USER_API = `${environment.baseURI}/api/user`;
  readonly MEMBER_API = `${environment.baseURI}/api/member`;

  constructor(private http: HttpClient) {
  }


  addGroup(group: GroupAddRequest): Observable<Group> {
    return this.http.post<Group>(this.GROUP_API + '/add', group)
  }

  getGroupsByUser(uuid: string): Observable<Group[]> {
    return this.http.get<Group[]>(this.GROUP_API + '/get-group-created-by/' + uuid);
  }


  getUsersByName(search: string): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API + '/search/' + search);
  }

  addMember(memberAddRequest: MemberAddRequest): Observable<Member> {
    return this.http.post<Member>(this.MEMBER_API + '/add', memberAddRequest)

  }
}
