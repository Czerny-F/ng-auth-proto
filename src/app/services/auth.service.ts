import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IAppState } from '../redux/store';
import { AuthActions } from '../redux/actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated$;
  isAuthenticated = false;

  loginUrl = '/login';
  redirectUrl = '/profile';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: AuthActions,
    private router: Router
  ) {
    this.authenticated$ = ngRedux.select<boolean>('authenticated')
      .subscribe(authed => this.isAuthenticated = authed);
  }

  getPermission(path: string): void {
    console.log(this.isAuthenticated);
    if (this.isAuthenticated && path === this.loginUrl) {
      this.router.navigate([this.redirectUrl]);
    }
    if (!this.isAuthenticated && path !== this.loginUrl) {
      this.router.navigate([this.loginUrl]);
    }
  }

  login(credentials: object): Observable<string> {
    console.log(credentials);

    if (this.authenticate(credentials)) {
      console.log(this.ngRedux.dispatch(this.actions.login()));

      return of('OK').pipe(
        tap(_ => this.router.navigate([this.redirectUrl])),
        catchError(this.handleError<string>('login', 'Failed'))
      );
    }

    return of('Login failed');
  }

  logout(): void {
    this.ngRedux.dispatch(this.actions.logout());
    this.router.navigate([this.loginUrl]);
  }

  private authenticate(credentials: object): boolean {
    // anyway
    return true;
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
