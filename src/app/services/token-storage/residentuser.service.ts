import { Injectable } from '@angular/core';
import { RestApi } from 'src/app/models/api/rest-api';
import { Residentuser } from 'src/app/models/residentuser';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToasterService } from '../toaster.service';

@Injectable({
  providedIn: 'root'
})
export class ResidentuserService {

  api  = new RestApi();
  toasterService: any;
  constructor(private httpClient:HttpClient,
    private toasteService:ToasterService) { }

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

 
  deleteResidents(id: number): Observable< any> {
    const url = `${this.api.RESIDENTUSER_LIST}/${id}`

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
