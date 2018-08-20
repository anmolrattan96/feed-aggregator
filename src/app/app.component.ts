import { Component } from '@angular/core';
import { DataService} from './data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formdata;
  searchkey;
  constructor(private newService:DataService){}

  set(data){
    if(data.search == null || data.search == "")
    alert("Please enter a valid string") ;
    else
    {
    this.newService.setData(data.search);
    }
  	this.searchkey = this.newService.getData();
  }

  ngOnInit(){
  	this.formdata = new FormGroup({
      search: new FormControl()
  })	
  }

}
