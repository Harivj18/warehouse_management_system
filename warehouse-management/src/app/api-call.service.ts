import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { 

  }
  connecting(){
    return this.http.get('http://localhost:8000/send')
  }
  admindata(formobject:any){
    return this.http.post('http://localhost:8000/postquery/',formobject);
  }
  logindata(formobject:any){
    return this.http.post('http://localhost:8080/postquery/',formobject);
  }
  }
