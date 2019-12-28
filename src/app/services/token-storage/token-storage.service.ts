import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Society } from 'src/app/models/society';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const SOCIETY_KEY = 'SOCIETY';
const SOCIETY_USER = 'SOCIETY_USER';
const ROLE_KEY = "ROLE";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  loggedIn : boolean = false;
  constructor() {
    this.loggedIn = !!localStorage.getItem(SOCIETY_USER);
   }

  isAuthenticated(): boolean {
    if (localStorage.getItem(SOCIETY_USER)) {
      return true;
    } else {
      return false;
    };
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

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveSociety(company: Society) {
    window.localStorage.removeItem(SOCIETY_KEY);
    window.localStorage.setItem(SOCIETY_KEY, JSON.stringify(company));
  }

  public getSociety(): Society {
    return JSON.parse(localStorage.getItem(SOCIETY_KEY));
  }

  public saveUserInfo(user: any) {
    window.localStorage.removeItem(SOCIETY_USER);
    window.localStorage.setItem(SOCIETY_USER, JSON.stringify(user));
  }

  public getUserInfo(): any {
    return JSON.parse(localStorage.getItem(SOCIETY_USER));
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
