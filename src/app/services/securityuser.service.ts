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
  saveAdminUsers: any;
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

  uploadImage(id:number, selectedFile:File):Observable<any>{
    const url = `${this.api.USER_FILE_URL}/${id}?type=securityuser`;
    if(selectedFile!=null){
      const fd = new FormData();
      fd.append('file', selectedFile, selectedFile.name);
      return this.httpClient.post<any>(url, fd);
    }
  }
}
