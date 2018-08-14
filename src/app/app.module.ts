import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { IeeeComponent } from './ieee/ieee.component';
import { HackernewsComponent } from './hackernews/hackernews.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    IeeeComponent,
    HackernewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
