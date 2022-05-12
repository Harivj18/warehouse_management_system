import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  constructor(private http:HttpClient) { }

  logindata(formobject:any){
    return this.http.post('http://localhost:8080/postquery/',formobject);
  }

}

