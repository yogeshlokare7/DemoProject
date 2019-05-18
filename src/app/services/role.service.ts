import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToasterService } from './toaster.service';
import { Role } from '../models/role';
import { RestApi } from '../models/api/rest-api';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  api = new RestApi();

  dataChange: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient, private toasterService: ToasterService) { }

  get data(): Role[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllRoles(): void {
    this.httpClient.get<Role[]>(this.api.ROLE_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.api.ROLE_URL+"/list");
  }

  addRole2(role: Role): void {
    console.log(role);
    this.httpClient.post(this.api.ROLE_URL, role).subscribe(data => {
      this.dialogData = data;
      if (role.id != null && role.id > 0) {
        this.toasterService.openSuccessSnackBar('Successfully updated', 'ok', 1000);
      } else {
        this.toasterService.openSuccessSnackBar('Successfully added', 'ok', 1000);
      }
    },
      (err: HttpErrorResponse) => {
        this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message, '', 4000);
      });
  }

  addRole(role: Role): Observable<Role> {
    return this.httpClient.post<Role>(this.api.ROLE_URL, role);
  }

  deleteRole(id: number): void {
    console.log(id);
    const url = `${this.api.ROLE_URL}/${id}`;
    this.httpClient.delete(url).subscribe(data => {
      this.toasterService.openSuccessSnackBar('Successfully deleted', 'ok', 1000);
    },
      (err: HttpErrorResponse) => {
        //this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  checkRoleByName(roleName: string): Observable<boolean> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let httpParams = new HttpParams()
      .set('roleName', roleName);
    console.log(httpParams.toString());
    console.log(httpHeaders.keys());
    return this.httpClient.get<boolean>(this.api.CHECKROLEBYNAME_URL, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }

}
