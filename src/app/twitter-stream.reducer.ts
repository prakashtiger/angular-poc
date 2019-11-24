import { Action, createReducer, on } from '@ngrx/store';
import * as TwitterStreamActions from './twitter-stream.action';

export function reducer(state: any | undefined, action: TwitterStreamActions.ALL_REDUCER_ACTIONS) {
  switch(action.type) {
    case '[Twitter Stream] List Success': {
      return {twitterStreamList: action.payload, message: 'Success'};
      break;
    }
    default: {
      return state;
    }
  }
}
    