import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataService} from './../data.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {


  // title = 'Aggregator';
  // private apiUrl = 'https://api.elsevier.com/content/search/scidir';
  // data: any = {};

  //   constructor(public http: Http){
  //     this.getData();
  //   }
    
//     getData(){
// const params = new HttpParams()
// .set('query', 'nodejs').set('apiKey', '810d0d9a08e546708564d462c1a5246d');

//       return this.http.get(this.apiUrl, {params} ) .pipe(map((res:Response) => res.json())).subscribe(data => {
//         this.data = data;
//       },
//       error => {

//       }  
//     );
//   }




  url = "https://api.elsevier.com/content/search/scidir?query=nodejs&apiKey=7f59af901d2d86f78a1fd60c1bf9426a&httpAccept=application%2Fjson";


  searchkey;
  data: any;
  // header
   constructor(private newService:DataService, private httpClient: HttpClient) { }
  
  ngOnInit(){
   this.searchkey = this.newService.getData();
   this.httpClient.get(this.url).subscribe((res) => {
     this.data = res;
     console.log(this.data['search-results'].entry[0]);
   });
// this.data = JSON.stringify(this.data);
  
  }



}