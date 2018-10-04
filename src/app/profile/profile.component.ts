import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from '../redux/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @select() readonly authenticated$: Observable<boolean>;
  authenticated: boolean;
  subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router) {
    this.subscription = ngRedux.select<boolean>('authenticated')
      .subscribe(authed => this.authenticated = authed);
  }

  ngOnInit() {
    if (!this.authenticated) {
      this.router.navigate(['/login']);
    }
  }

}
