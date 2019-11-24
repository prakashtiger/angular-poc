import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TwitterStreamActions from '../twitter-stream.action';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-twitter-stream',
  templateUrl: './twitter-stream.component.html',
  styleUrls: ['./twitter-stream.component.css']
})
export class TwitterStreamComponent implements OnInit {
  twitterStreamList$: Observable<any[]> = this.store.select((state) => {
    return state.twitterStreamList.twitterStreamList;
  });
 
  constructor(private store: Store<any>) { 
    
  }

  ngOnInit() {
    this.store.dispatch(new TwitterStreamActions.List());
  }

  filterTweet() {
    
  }

}