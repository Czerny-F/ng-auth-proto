import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { NgRedux } from '@angular-redux/store';
import { Observable, of } from 'rxjs';

import { IAppState } from '../redux/store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated$;

  isAuthenticated = false;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) {
    this.authenticated$ = ngRedux.select<boolean>('authenticated')
      .subscribe(authed => this.isAuthenticated = authed);
  }

  check(): Observable<boolean> {
    if (this.isAuthenticated) {
      return of(true);
    }

    this.router.navigate(['/login']);
    return of(false);
  }
}
