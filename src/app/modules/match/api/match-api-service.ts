import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Group, GroupAddRequest} from "../../group/model/group";
import {Observable} from "rxjs";
import {Match, MatchAddRequest} from "../model/match";

@Injectable({
  providedIn: 'root'
})
export class MatchApiService {

  readonly MATCH_API = `${environment.baseURI}/api/match`;

  constructor(private http: HttpClient) {
  }


  addMatch(match: MatchAddRequest): Observable<Match> {
    return this.http.post<Match>(this.MATCH_API + '/add', match)
  }


  getGroupMatches(uuid: string): Observable<Match[]> {
    return this.http.get<Match[]>(this.MATCH_API + '/by-group/'+uuid)
  }

  getTeamMatches(uuid: string): Observable<Match[]> {
    return this.http.get<Match[]>(this.MATCH_API + '/by-player/'+uuid)
  }

  getPlayerMatches(uuid: string): Observable<Match[]> {
    return this.http.get<Match[]>(this.MATCH_API + '/by-matches/' + uuid)
  }


}
