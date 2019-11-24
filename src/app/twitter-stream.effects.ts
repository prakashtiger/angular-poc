import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TwitterStreamService } from './twitter-stream.service';
import * as TwitterStreamActions from './twitter-stream.action';
import { Success } from './twitter-stream.action';
@Injectable()
export class TwitterStreamEffects {
  channel = 'pubnub-twitter';
    loadTwitterStream$ = createEffect(() => this.actions$.pipe(
      ofType('[Twitter Stream] List'),
      mergeMap(() => this.twitterStreamService.getAll()
        .pipe(
          map((data) => {
           return  new Success(data);
          }),
          catchError(() => EMPTY)
        ))
      )
    );
    constructor(
        private actions$: Actions,
        private twitterStreamService: TwitterStreamService
      ) {}
      
}