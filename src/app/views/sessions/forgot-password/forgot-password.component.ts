import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  userEmail:string;
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;
  constructor(private loginService:LoginService) { }

  ngOnInit() {

  }

  submitEmail() {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.loginService.forgotPassword(this.userEmail, "2019-05-11").subscribe(data=>{
      this.submitButton.disabled = false;
      this.progressBar.mode = 'determinate';
      console.log("resp", data);
    }, err=>{

    });
  }

}
