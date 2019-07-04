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

  deleteResidents(id: number): void {
    console.log(id);
    const url = `${this.api.RESIDENTUSER_LIST}/${id}`
    this.httpClient.delete(url).subscribe(data => {
      this.toasteService.openSuccessSnackBar('Successfully deleted', 'OK', 1000);
    },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
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
