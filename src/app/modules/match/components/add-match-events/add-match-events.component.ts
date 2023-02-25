import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {FigurePosition, TEAM} from "../../model/match";
import {EventAddRequest} from "../../model/event";

@Component({
  selector: 'app-add-match-events',
  templateUrl: './add-match-events.component.html',
  styleUrls: ['./add-match-events.component.scss'],
})
export class AddMatchEventsComponent implements OnInit {

  position = FigurePosition;
  teamGoal = TEAM;
  selectedFigure = FigurePosition.NULL;
  selectedTeam: TEAM | undefined;

  constructor() {
  }

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  homeTeam(position: FigurePosition) {
    this.selectedFigure = position;
    this.selectedTeam = TEAM.HOME;
  }

  awayTeam(position: FigurePosition) {
    this.selectedFigure = position;
    this.selectedTeam = TEAM.AWAY;
  }

  save(teamGoal: TEAM) {
    // console.log(this.selectedTeam);
    // console.log(this.selectedFigure);
    // console.log(teamGoal);
    const date = new Date(new Date()).getTime();
    console.log(date);
    // const event = {} as EventAddRequest
    // this.selectedFigure = FigurePosition.NULL;
    // if (this.selectedTeam === TEAM.HOME) {
    //   if (teamGoal === TEAM.AWAY) {
    //
    //   } else {
    //
    //   }
    // } else {
    //   if (teamGoal === TEAM.HOME) {
    //
    //   } else {
    //
    //   }
    // }
  }

}
