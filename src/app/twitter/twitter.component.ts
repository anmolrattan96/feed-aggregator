import { Component} from '@angular/core';
import { DataService} from './../data.service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent{

 
searchkey;
tweetsdata;

  constructor(private newService:DataService, private http: Http) { }

  ngOnInit() {
    this.searchkey = this.newService.getData();
    if(this.searchkey == null || this.searchkey == "")
    alert("Please enter a valid string") ;
    else
    {
 
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })

    var searchterm = 'query=' + this.searchkey;
    
    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
 
  }

  }
}
