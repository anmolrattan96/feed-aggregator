import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { error } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Aggregator';
  private apiUrl = 'https://api.elsevier.com/content/search/scidir';
  data: any = {};

    constructor(public http: HttpClient){
      console.log('Hello Fellow User');
    }
    
    getData(){
const params = new HttpParams()
.set('query', 'nodejs').set('apiKey', '810d0d9a08e546708564d462c1a5246d');

      return this.http.get<any[]>(this.apiUrl, {params} ).subscribe(data => {
        this.data = data;
      },
      error => {

      }  
    );
  }
}

