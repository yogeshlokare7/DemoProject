import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authToken;
  private isAuthenticated; // Set this value dynamically
  
  constructor(private router: Router, public auth: TokenStorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.isAuthenticated = this.auth.isAuthenticated();
    if (this.isAuthenticated) {
      return true;
    }else{
      this.router.navigate(['/sessions/signin'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
