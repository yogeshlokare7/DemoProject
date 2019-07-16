import { Injectable } from '@angular/core';
import { RestApi } from '../models/api/rest-api';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminUsers } from '../models/admin-users';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToasterService } from './toaster.service';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';
import { Society } from '../models/society';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  baseUrl = environment.baseUrl;
  companyApi :string;
  api = new RestApi();
  constructor(private httpClient:HttpClient) {
    this.companyApi = `${this.baseUrl}/api/company`;
  }

  checkCompanyLogo(id:number, type:string):Observable<any>{
    const url = `${this.baseUrl}/api/auth/others/check/${type}_${id}.png`;
    console.log("picture url", url);
    return this.httpClient.get<any>(url);
  }

  saveCompany(company:Company):Observable<Company>{
    return this.httpClient.post<Company>(this.companyApi, company);
  }

  saveSociety(society:Society):Observable<Society>{
    return this.httpClient.post<Society>(this.api.SOCIETY_URL, society);
  }

  getSocietyList():Observable<Society[]>{
    const url = `${this.api.SOCIETY_URL}/list`
    return this.httpClient.get<Society[]>(url);
  }

  getCompany(id:number):Observable<Company>{
    const url = `${this.api.SOCIETY_URL}/${id}`
    return this.httpClient.get<Company>(url);
  }

  getSociety(id:number):Observable<Society>{
    const url = `${this.api.SOCIETY_URL}/${id}`;
    return this.httpClient.get<Society>(url);
  }

  saveCompLogo(id:number, selectedFile:File){
    const url = `${this.baseUrl}/api/auth/others/companypic/${id}`;
    const fd = new FormData();
    fd.append('file', selectedFile, selectedFile.name);
    this.httpClient.post(url, fd).subscribe(data=>{
    })
  }

  uploadImage(id:number, selectedFile:File):Observable<any>{
    const url = `${this.api.USER_FILE_URL}/${id}?type=society`;
    if(selectedFile!=null){
      const fd = new FormData();
      fd.append('file', selectedFile, selectedFile.name);
      return this.httpClient.post<any>(url, fd);
    }
  }


}