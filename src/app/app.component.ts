import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AppState} from "./root-store/state";
import {Store} from "@ngrx/store";
import {selectLanguage} from "./shared/store/selectors";
import {SharedActions} from "./shared";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private store$: Store<AppState>) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.store$.select(selectLanguage).subscribe(value => this.translate.use(value));
  }


}
