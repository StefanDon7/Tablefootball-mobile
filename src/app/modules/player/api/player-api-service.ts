import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlayerAddRequest, Player} from "../model/player";

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  readonly PLAYER_API = `${environment.baseURI}/api/player`;

  constructor(private http: HttpClient) {
  }


  addPlayer(player: PlayerAddRequest): Observable<Player> {
    return this.http.post<Player>(this.PLAYER_API + '/add', player)
  }


  getGroupPlayers(groupUuid: string): Observable<Player[]> {
    return this.http.get<Player[]>(this.PLAYER_API + '/group-players/' + groupUuid)
  }
}
