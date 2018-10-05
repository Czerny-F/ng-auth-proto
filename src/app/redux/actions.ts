import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AuthActions {
  static LOGIN = 'Auth.LOGIN';
  static LOGOUT = 'Auth.LOGOUT';

  login(): Action {
    return { type: AuthActions.LOGIN };
  }

  logout(): Action {
    return { type: AuthActions.LOGOUT };
  }
}
