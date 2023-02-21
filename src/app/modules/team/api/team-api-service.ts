import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team, TeamAddRequest} from "../model/team";

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  readonly TEAM_API = `${environment.baseURI}/api/team`;

  constructor(private http: HttpClient) {
  }

  addTeam(team: TeamAddRequest): Observable<Team> {
    return this.http.post<Team>(this.TEAM_API + '/add', team)
  }

  getGroupTeams(groupUuid: string): Observable<Team[]> {
    return this.http.get<Team[]>(this.TEAM_API + '/by-group/' + groupUuid)
  }
}
