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
 if(this.searchkey == null || this.searchkey == "")
  alert("Please enter a valid string") ;
  else
  {
 this.http.get('https://hn.algolia.com/api/v1/search_by_date?query='+this.searchkey+'&tags=story')
   .pipe(map((res:Response) => res.json())).subscribe(data => {
     this.news = data
    //  this.news = this.news['hits']
    // var author = this.news[0].author
    // console.log(author)
     console.log(this.news)

    });
}
}

}
