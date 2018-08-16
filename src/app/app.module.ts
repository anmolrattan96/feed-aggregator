import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { ResearchComponent } from './research/research.component';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    HackernewsComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path : 'tweets',
      component : TwitterComponent
    },
    {
      path : 'news',
      component : HackernewsComponent
    },
    {
      path : 'research',
      component : ResearchComponent
    }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
