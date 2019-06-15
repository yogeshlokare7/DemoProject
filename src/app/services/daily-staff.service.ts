import { Injectable } from '@angular/core';
import { RestApi } from '../models/api/rest-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DailyStaff } from '../models/daily-staff';


@Injectable({
  providedIn: 'root'
})
export class DailyStaffService {
  api  = new RestApi();
  constructor(private httpClient:HttpClient) { }

  getDailyStaffList() : Observable< DailyStaff[]>{
    return this.httpClient.get< DailyStaff[]>(this.api.DAILYSTAFF_LIST);
  }

  getDailyStaffByUserId(id:number):Observable< DailyStaff>{
    const url = `${this.api.DAILYSTAFF_LIST}/${id}`
    return this.httpClient.get< DailyStaff>(url);
  }

  saveDailyStaff(dailystaff :  DailyStaff) : Observable< DailyStaff>{
    return this.httpClient.post< DailyStaff>(this.api.DAILYSTAFF_LIST, dailystaff);
  }

  deleteDailyStaff(id:number) : Observable<any>{
    const url = `${this.api.DAILYSTAFF_LIST}/${id}`;
    return this.httpClient.delete(url);
  }

  uploadImage(id:number, selectedFile:File):Observable<any>{
    const url = `${this.api.USER_FILE_URL}/${id}?type=dailystaff`;
    if(selectedFile!=null){
      const fd = new FormData();
      fd.append('file', selectedFile, selectedFile.name);
      return this.httpClient.post<any>(url, fd);
    }
  }
}
