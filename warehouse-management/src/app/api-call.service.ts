import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { 

  }
  admindata(formobject:any){
    return this.http.post('http://localhost:8000/postquery/',formobject);
  }
  // logindata(formobject1:any){
  //   return this.http.get('http://localhost:8000/getquery/',formobject1);
  // }
  }
