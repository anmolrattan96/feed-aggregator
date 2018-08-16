import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DataService} from './../data.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})


@Injectable()
export class ResearchComponent {
   url ='';
  //= "https://api.elsevier.com/content/search/scidir?query=nodejs&apiKey=7f59af901d2d86f78a1fd60c1bf9426a&httpAccept=application%2Fjson";

  
  searchkey;
  data: any;
   constructor(private newService:DataService, private http: Http) { }
  
  someMethod(){

  }

  ngOnInit(){
   this.searchkey = this.newService.getData();
   this.url = "https://api.elsevier.com/content/search/scidir?query=nodejs&apiKey=7f59af901d2d86f78a1fd60c1bf9426a&httpAccept=application%2Fjson";
   this.data = this.http.get(this.url).pipe(map((response: any) => response.json())).toPromise().then((res) => console.log(res))
  }

 private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
  




}