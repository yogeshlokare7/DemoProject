import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = environment.baseUrl;
  companyApi :string;
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

  getCompany(id:number):Observable<Company>{
    const url = `${this.companyApi}/${id}`
    return this.httpClient.get<Company>(url);
  }

  saveCompLogo(id:number, selectedFile:File){
    const url = `${this.baseUrl}/api/auth/others/companypic/${id}`;
    const fd = new FormData();
    fd.append('file', selectedFile, selectedFile.name);
    this.httpClient.post(url, fd).subscribe(data=>{
    })
  }


}
