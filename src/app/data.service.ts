import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  key;
  
  setData(data:string){
this.key = data;
  }

  getData(){
  	return this.key;
  }


}
