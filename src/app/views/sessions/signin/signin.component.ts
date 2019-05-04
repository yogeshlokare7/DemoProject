import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthLoginInfo } from '../../../models/login-info';
import { LoginService } from '../../../services/login/login.service';
import { TokenStorageService } from '../../../services/token-storage/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
  private loginInfo: AuthLoginInfo;
  loggedIn:boolean;

  constructor(private authService :LoginService,
    private tokenService :TokenStorageService,
    private router: Router,
    private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    //.isValidUser();
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  isValidUser() {
    this.loggedIn = this.tokenService.isAuthenticated();
    if (this.loggedIn) {
      this.navigatePage();
    } 
  }

  signin() {
    const signinData = this.signinForm.value;

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.loginInfo = new AuthLoginInfo(
      signinData.username,
      signinData.password);

    this.authService.signin(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveRole(data.role.name);
        this.tokenStorage.saveUserId(data.id);
        //this.tokenStorage.saveCompanyId(data.societyid.id);
        this.tokenStorage.saveSociety(data.societyid);

        this.submitButton.disabled =false;
        this.progressBar.mode = 'determinate';

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getRole();
        this.navigatePage();
      },
      error => {
        console.log(error);
        this.errorMessage = error;
        this.isLoginFailed = true;
      }
    );
  }

  navigatePage() {
    this.roles = this.tokenStorage.getRole();
    console.log("roles", this.roles);
    if(this.roles.includes("Tejovat Admin")){
      this.router.navigateByUrl("/admin/dashboard");
    }else{
      this.router.navigateByUrl("/company/dashboard");
    }
  }

}
