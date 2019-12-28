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
  private loginInfo: AuthLoginInfo;
  loggedIn: boolean;

  constructor(private authService: LoginService,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  isValidUser() {
    this.loggedIn = this.tokenStorage.isAuthenticated();
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

    this.authService.signin(this.loginInfo).subscribe(data => {
      console.log("data", JSON.stringify(data));
      this.tokenStorage.saveUserInfo(data);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveSociety(data.societyid);

      this.submitButton.disabled = false;
      this.progressBar.mode = 'determinate';

      this.isLoginFailed = false;
      this.isLoggedIn = true;
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
    this.router.navigateByUrl("/society/dashboard");
  }

}