import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName = 'apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn';
  dbPassword = 'ec6094ae0714dc7a5ffc50a86924bef3';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  
  constructor(private http:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

  createDB(db: string): Observable<{}> {
    const url1 = `${this.url}${db}/a2104a6b89f3a6f42b96e661c64517a5`;
    return this.http.get(url1 , this.httpOptions);
  }

  add(db: string, doc: object): Observable<{}> {
    const url2 = `${this.url}${db}`;
    return this.http.post(url2, doc, this.httpOptions)
  }
}