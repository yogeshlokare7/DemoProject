import { Injectable } from '@angular/core';
import { RestApi } from '../models/api/rest-api';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminUsers } from '../models/admin-users';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  api = new RestApi();

  dataChange: BehaviorSubject<AdminUsers[]> = new BehaviorSubject<AdminUsers[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  getAdminUsersList: any;

  constructor(private httpClient: HttpClient, private toasterService: ToasterService) {
  
   }

  get data(): AdminUsers[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllUsers(): void {
    this.httpClient.get<AdminUsers[]>(this.api.USER_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  checkUserByUsername(username: string): Observable<boolean> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let httpParams = new HttpParams()
      .set('username', username);
    console.log(httpParams.toString());
    console.log(httpHeaders.keys());
    return this.httpClient.get<boolean>(this.api.CHECKUSERBYUSERNAME_URL, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }

  checkUserByUseremail(userEmail: string): Observable<boolean> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let httpParams = new HttpParams()
      .set('userEmail', userEmail);
    console.log(httpParams.toString());
    console.log(httpHeaders.keys());
    return this.httpClient.get<boolean>(this.api.CHECKUSERBYEMAIL_URL, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }

  addAdminUsers(user: AdminUsers, selectedFile: File): void {
    this.httpClient.post(this.api.USER_URL, user).subscribe(data => {
      this.dialogData = data;
      if (this.dialogData !== null && this.dialogData.id > 0 ) {
        this.uploadImage(this.dialogData.id, selectedFile);
      }
      if (user.id != null && user.id > 0) {
        this.toasterService.openSuccessSnackBar('Successfully updated', '', 2000);
      } else {
        this.toasterService.openSuccessSnackBar('Successfully added', '', 2000);
      }
    },
      (err: HttpErrorResponse) => {
        this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message, '', 8000);
      });
  }

  saveAdminUsers(user:AdminUsers) : Observable<AdminUsers>{
    return this.httpClient.post<AdminUsers>(this.api.USER_URL, user);
  }

  deleteAdminUsers(id: number): Observable<any> {
    const url = `${this.api.SECURITYUSER_LIST}/${id}`;
    return this.httpClient.delete<any>(url);
  }

  // deleteUser(id: number): void {
  //   console.log(id);
  //   const url = `${this.api.USER_LIST}/${id}`
  //   this.httpClient.delete(url).subscribe(data => {
  //     console.log('subscribe');
  //     //this.toasteService.openSuccessSnackBar('Successfully deleted', 'ok', 1000);
  //   },
  //     (err: HttpErrorResponse) => {
  //     console.log('subscribe');
  //       // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
  //     }
  //   );
  // }

  getAdminUsers(id: number): Observable<AdminUsers> {
    console.log("user" + id);
    const url = `${this.api.USER_URL}/${id}`;
    return this.httpClient.get<AdminUsers>(url);
  }

  update(id:number, profile: string): Observable<AdminUsers> {
    const url = `${this.api.UPDATEPWD_URL}/${id}`;
    let httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');
  let httpParams = new HttpParams()
    .set('password', profile);

    return this.httpClient.get<AdminUsers>(url, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }

  checkUserByResetToken(resetToken: string): Observable<AdminUsers> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let httpParams = new HttpParams()
      .set('resetToken', resetToken);
    return this.httpClient.get<AdminUsers>(this.api.CHECKUSERBYTOKEN_URL, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }
  
  addNewPassword(user: AdminUsers): Observable<AdminUsers> {
    return this.httpClient.post<AdminUsers>(this.api.SETPWD_URL, user);
  }
  
  uploadImage(id:number, selectedFile:File):Observable<any>{
    const url = `${this.api.USER_FILE_URL}/${id}?type=user`;
    if(selectedFile!=null){
      const fd = new FormData();
      fd.append('file', selectedFile, selectedFile.name);
      return this.httpClient.post<any>(url, fd);
    }
  }

}
