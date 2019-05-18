import { Injectable } from '@angular/core';

import { DashboardCounter } from '../models/dashboard-counter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestApi } from '../models/api/rest-api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  api = new RestApi();
  constructor(private httpClient : HttpClient) { }


  getCounters(): Observable<any> {
    return this.httpClient.get<any>(this.api.COUNTER_URL);
  }
}
