import { Action } from 'redux';
import { AuthActions } from './actions';

export interface IAppState {
  authenticated: boolean;
}

export const INITIAL_STATE: IAppState = {
  authenticated: false,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  // switch(action.type) {
  //   case CounterActions.INCREMENT: return { count: lastState.count + 1 };
  //   case CounterActions.DECREMENT: return { count: lastState.count - 1 };
  // }

  return lastState;
}
