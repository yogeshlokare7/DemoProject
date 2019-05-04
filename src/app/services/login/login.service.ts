import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../../models/jwt-response';
import { AuthLoginInfo } from '../../models/login-info';
import { SignUpInfo } from '../../models/signup-info';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    let loginUrl = `${this.baseUrl}/api/auth/signin`;
    return this.http.post<JwtResponse>(loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    let signupUrl = `${this.baseUrl}/api/auth/signup`;
    return this.http.post<string>(signupUrl, info, httpOptions);
  }
  
}
