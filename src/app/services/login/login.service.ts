import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../../models/jwt-response';
import { AuthLoginInfo } from '../../models/login-info';
import { SignUpInfo } from '../../models/signup-info';
import { environment } from '../../../environments/environment';
import { UserModel } from 'src/app/models/user-model';
import { RestApi } from 'src/app/models/api/rest-api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = new RestApi();

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.api.LOGIN_URL, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    let signupUrl = `${this.api.SOCIETY_BASE}/api/auth/signup`;
    return this.http.post<string>(signupUrl, info, httpOptions);
  }

  signin(credentials: AuthLoginInfo): Observable<UserModel> {
    return this.http.post<UserModel>(this.api.LOGIN_URL, credentials, httpOptions);
  }
  
}
