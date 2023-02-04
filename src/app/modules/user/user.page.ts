import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public user!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
