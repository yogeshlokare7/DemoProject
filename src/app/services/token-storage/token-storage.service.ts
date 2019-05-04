import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Society } from 'src/app/models/society';

const TOKEN_KEY = 'AuthToken';
const USER_ID = '1';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const COMPANY_KEY = 'TBSM';
const SOCIETY_KEY = 'SOCIETY';
const COMPANY_ID = '';
const COMPANY_ADDRESS = '';
const ROLE_KEY = "ROLE"

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  isAuthenticated() : boolean{
    // let token = this.getToken();
    // let userId = this.getUserId();
    // if(token != null && userId > 0){
    //   return true;
    // }
    return true;
  }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveRole(token: string) {
    window.localStorage.removeItem(ROLE_KEY);
    window.localStorage.setItem(ROLE_KEY, token);
  }

  public getRole(): string {
    return localStorage.getItem(ROLE_KEY);
  }

  public saveUserId(userId: number) {
    window.localStorage.removeItem(USER_ID);
    window.localStorage.setItem(USER_ID, userId.toString());
  }

  public getUserId(): number {
    return +localStorage.getItem(USER_ID);
  }

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveCompanyId(companyId: number) {
    window.localStorage.removeItem(COMPANY_ID);
    window.localStorage.setItem(COMPANY_ID, companyId.toString());
  }

  public getCompanyId(): number {
    return +localStorage.getItem(COMPANY_ID);
  }

  public saveCompany(company:Company) {
    window.localStorage.removeItem(COMPANY_KEY);
    window.localStorage.setItem(COMPANY_KEY, JSON.stringify(company));
  }

  public getCompany(): Company {
    return JSON.parse(localStorage.getItem(COMPANY_KEY));
  }

  public saveSociety(company:Society) {
    window.localStorage.removeItem(SOCIETY_KEY);
    window.localStorage.setItem(SOCIETY_KEY, JSON.stringify(company));
  }

  public getSociety(): Society {
    return JSON.parse(localStorage.getItem(SOCIETY_KEY));
  }
  
  public saveCompanyAddress(address: string) {
    window.localStorage.removeItem(COMPANY_ADDRESS);
    window.localStorage.setItem(COMPANY_ADDRESS, address);
  }

  public getCompanyAddress(): string {
    return localStorage.getItem(COMPANY_ADDRESS);
  }

  public saveAuthorities(authorities: string[]) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (localStorage.getItem(TOKEN_KEY)) {
      JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
}
