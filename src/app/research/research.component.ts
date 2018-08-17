import { Component, Injectable, Renderer } from '@angular/core';
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
   constructor(private newService:DataService, private http: Http,private ren : Renderer) { }
  
  someMethod(){

  }

  ngOnInit(){
   this.searchkey = this.newService.getData();
   this.url = "https://api.elsevier.com/content/search/scidir?query="+this.searchkey+"&apiKey=7f59af901d2d86f78a1fd60c1bf9426a&httpAccept=application%2Fjson";
   this.data = this.http.get(this.url).pipe(map((response: any) => response.json())).toPromise().then((res) => {
     this.data = res;
     console.log(res["search-results"])
     for(let i=0;i<20;i++){
     let temp = (this.data["search-results"].entry[i].link[1]);
     let temp0 = temp["@href"]
     temp = this.data["search-results"].entry[i];
     let temp4 = temp["prism:coverDate"];
     temp4 = temp4[0];
     temp4 = temp4["$"];
     let temp1 = temp["dc:title"];
     let temp2 = temp["prism:teaser"]
     let temp3 = temp["prism:publicationName"]+", "+temp4;
     document.createElement("ul")
     document.getElementById("results").innerHTML += "<li style = 'border: 1px solid #238ce2; border-radius: 15px; background-color: white; padding: 2%;'><a href=\""+temp0+"\"><font style='font-weight:5px;' size=4><b>"+temp1+"</b></font></b></a><br><h6><i><u>"+temp3+"</u><i></h6><font size=3>\""+temp2+"\"</font><br><br></li><br>";

    }
   })
  }
} 