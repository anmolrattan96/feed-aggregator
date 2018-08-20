import { Component} from '@angular/core';
import { DataService} from './../data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styleUrls: ['./hackernews.component.css']
})
export class HackernewsComponent{
searchkey;
news = {};
 constructor(private newService:DataService, private http: Http) { }

ngOnInit(){
 this.searchkey = this.newService.getData();
 this.http.get('https://hn.algolia.com/api/v1/search_by_date?query='+this.searchkey+'&tags=story')
   .pipe(map((res:Response) => res.json())).subscribe(data => {
     this.news = data
     console.log(this.news)
    });
}

}
