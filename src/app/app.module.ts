import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TwitterStreamComponent } from './twitter-stream/twitter-stream.component';
import { TwitterStreamService } from './twitter-stream.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TwitterStreamComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    TwitterStreamService
  ]
})
export class AppModule { }
