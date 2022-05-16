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
  adduser(formobject:any){
    return this.http.post('http://localhost:8000/addUser/',formobject);
  }
  getUser(){
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id:any){
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }
  remove(id:any){
    return this.http.delete(`http://localhost:8000/delete/${id}`);
  }

  }
