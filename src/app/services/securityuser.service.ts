import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Securityuser } from '../models/securityuser';
import { RestApi } from '../models/api/rest-api';

@Injectable({
  providedIn: 'root'
})
export class SecurityuserService {

  api  = new RestApi();
  constructor(private httpClient:HttpClient) { }

  getSecurityuserList() : Observable<Securityuser[]>{
    return this.httpClient.get<Securityuser[]>(this.api.SECURITYUSER_LIST);
  }

  getSecurityuserByUserId(id:number):Observable<Securityuser>{
    const url = `${this.api.SECURITYUSER_LIST}/${id}`
    return this.httpClient.get<Securityuser>(url);
  }

  saveSecurityuser(securityuser : Securityuser) : Observable<Securityuser>{
    return this.httpClient.post<Securityuser>(this.api.SECURITYUSER_LIST, securityuser);
  }

  deleteSecurityuser(id:number) : Observable<any>{
    const url = `${this.api.SECURITYUSER_LIST}/${id}`;
    return this.httpClient.delete(url);
  }
}
