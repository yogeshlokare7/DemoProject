import { Injectable } from '@angular/core';
import { RestApi } from 'src/app/models/api/rest-api';
import { Residentuser } from 'src/app/models/residentuser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidentuserService {

  api  = new RestApi();
  constructor(private httpClient:HttpClient) { }

  getResidentuserList() : Observable<Residentuser[]>{
    return this.httpClient.get<Residentuser[]>(this.api.RESIDENTUSER_LIST);
  }

  getResidentuserByUserId(id:number):Observable<Residentuser>{
    const url = `${this.api.RESIDENTUSER_LIST}/${id}`
    return this.httpClient.get<Residentuser>(url);
  }

  saveResidentuser(residentuser : Residentuser) : Observable<Residentuser>{
    return this.httpClient.post<Residentuser>(this.api.RESIDENTUSER_LIST, residentuser);
  }

  deleteResidentuser(id:number) : Observable<any>{
    const url = `${this.api.RESIDENTUSER_LIST}/${id}`;
    return this.httpClient.delete(url);
  }

  uploadImage(id:number, selectedFile:File):Observable<any>{
    const url = `${this.api.USER_FILE_URL}/${id}?type=resident`;
    if(selectedFile!=null){
      const fd = new FormData();
      fd.append('file', selectedFile, selectedFile.name);
      return this.httpClient.post<any>(url, fd);
    }
  }
}
