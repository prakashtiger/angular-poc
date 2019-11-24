import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TwitterStreamEffects } from './twitter-stream.effects';
import { PubNubAngular } from 'pubnub-angular2';
import { AppComponent } from './app.component';
import { TwitterStreamComponent } from './twitter-stream/twitter-stream.component';
import { TwitterStreamService } from './twitter-stream.service';
import { reducer } from './twitter-stream.reducer';
import { FilterStreamPipe } from './filter-stream.pipe';
@NgModule({
  imports:      [ BrowserModule,
     FormsModule,
     StoreModule.forRoot({twitterStreamList: reducer}),
     EffectsModule.forRoot([TwitterStreamEffects]) 
    ],
  declarations: [ AppComponent, TwitterStreamComponent, FilterStreamPipe ],
  bootstrap:    [ AppComponent ],
  providers: [
    PubNubAngular,
    TwitterStreamService
  ]
})
export class AppModule { }
