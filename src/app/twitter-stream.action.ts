import { createAction, props, Action } from '@ngrx/store';


export class List implements Action {
    readonly type = '[Twitter Stream] List';
    
  }
  export class Success implements Action {
    readonly type = '[Twitter Stream] List Success';
    constructor(public payload: any[]) {}
  }
  
  export type ALL_REDUCER_ACTIONS = List | Success;