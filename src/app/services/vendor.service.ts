import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToasterService } from './toaster.service';
import { RestApi } from '../models/api/rest-api';
import { Vendor } from '../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  api = new RestApi();

  dataChange: BehaviorSubject<Vendor[]> = new BehaviorSubject<Vendor[]>([]);
  dialogData: any;

  constructor(private httpClient: HttpClient, private toasterService: ToasterService) { }

  get data(): Vendor[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllVendors(): void {
    this.httpClient.get<Vendor[]>(this.api.VENDOR_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  getVendorList():Observable<Vendor[]>{
    return this.httpClient.get<Vendor[]>(this.api.VENDOR_URL);
  }

  addVendor(customer: Vendor): void {
    this.httpClient.post(this.api.VENDOR_URL, customer).subscribe(data => {
      this.dialogData = data;
      if (customer.id != null && customer.id > 0) {
        this.toasterService.openSuccessSnackBar('Successfully updated', '', 2000);
      } else {
        this.toasterService.openSuccessSnackBar('Successfully added', '', 2000);
      }
    },
      (err: HttpErrorResponse) => {
        this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message, '', 8000);
      });
  }

  saveVendor(customer: Vendor): Observable<Vendor> {
    return this.httpClient.post<Vendor>(this.api.VENDOR_URL, customer);
  }

  deleteVendor(id: number): void {
    console.log('user' + id);
    const url = `${this.api.VENDOR_URL}/${id}`;

    this.httpClient.delete(url).subscribe(data => {
      console.log(data['']);
      this.toasterService.openSuccessSnackBar('Successfully deleted', 'ok', 1000);
    },
      (err: HttpErrorResponse) => {
        this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message, '', 8000);
      }
    );
  }

  getVendor(id: number): Observable<Vendor> {
    const url = `${this.api.VENDOR_URL}/${id}`;
    return this.httpClient.get<Vendor>(url);
  }

}

