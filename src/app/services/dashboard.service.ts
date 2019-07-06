import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestApi } from '../models/api/rest-api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  api = new RestApi();
  constructor(private httpClient : HttpClient) { }


  getCounters(societyId:number): Observable<any> {
    const url=  `${this.api.COUNTER_URL}/${societyId}`;
    return this.httpClient.get<any>(url);
  }
}
