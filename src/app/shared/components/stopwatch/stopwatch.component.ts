import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() startButtonDisabled = false;
  @Input() startTime: any;
  @Input() elapsedTime: number = 0;
  @Input() interval: any;

  @Input() time: string = '0:00';

  start(): void {
    this.startButtonDisabled = true;
    this.startTime = new Date();
    this.interval = setInterval(() => {
      // if (this.time === '0:10') {
      //   this.stop();
      //   return;
      // }
      this.updateTime();
    }, 500);
  }

  stop(): void {
    this.startButtonDisabled = false;
    if (this.startTime !== undefined) {
      const endTime = new Date();
      const elapsedMs = endTime.getTime() - this.startTime.getTime();
      this.elapsedTime += elapsedMs;
      clearInterval(this.interval);
    }
  }

  reset(): void {
    this.startTime = undefined;
    this.elapsedTime = 0;
    this.time = '0:00';
    clearInterval(this.interval);
  }

  private updateTime(): void {
    const now = new Date();
    const currentElapsedTime = now.getTime() - this.startTime?.getTime();
    const totalElapsedTime = currentElapsedTime + this.elapsedTime;
    const totalSeconds = Math.floor(totalElapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    this.time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    console.log(this.time);
  }

}
