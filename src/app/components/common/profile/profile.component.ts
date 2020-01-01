import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { Society } from 'src/app/models/society';
import { RestApi } from 'src/app/models/api/rest-api';
import { ToasterService } from 'src/app/services/toaster.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Output() messageToEmit = new EventEmitter<string>();
  userForm: FormGroup;
  title: string = "Add";
  user: User;
  selectedFile: File = null;
  url = '';
  selectedFile2: File = null;
  generic = new GenericTerm();
  isLoadingResults: boolean = false;
  maxDate = new Date();
  isUpdate: boolean = false;
  sub: any;
  id: number;
  societyId: number = 0;
  society: Society;
  maxSize: number = 2097152;
  api = new RestApi();
  
  constructor(private toasterService: ToasterService,
    private tokenStorageService: TokenStorageService,
    private fb: FormBuilder,
    private userService: UserService) {
   }

  ngOnInit() {
    this.createForm();
    this.user = this.tokenStorageService.getUserInfo();
    this.society = this.tokenStorageService.getSociety();
    console.log("user", this.user);
    if (this.user) {
      this.societyId = this.society.id;
      this.setFormValue(this.user);
    }
  }

  createForm() {
    this.userForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', Validators.required],
      contactno: ['', Validators.required],
      picture: [''],
      gender: ['', [Validators.required]],
      status: ['Y'],
    });
  }
  get firstname() { return this.userForm.get('firstname'); }
  get lastname() { return this.userForm.get('lastname'); }
  get username() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get contactNo() { return this.userForm.get('contactno'); }
  get gender() { return this.userForm.get('gender'); }
  get status() { return this.userForm.get('status'); }

  setFormValue(user: User) {
    this.userForm.patchValue({
      id: user.id as number,
      firstname: user.firstname as string,
      lastname: user.lastname as string,
      username: user.username as string,
      email: user.email as string,
      contactno: user.contactno as string,
      picture: user.picture as string,
      gender: user.gender as string,
      status: user.status as string,
    });
    if (user != null && user.picture != null) {
      this.url = this.api.SOCIETYUSERPIC_URL + user.picture;
    } else {
      this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    }
  }

  onSubmit() {
    this.user = this.prepareSaveUser();
    console.log("user form", JSON.stringify(this.user));
    this.isLoadingResults = true;
    this.userService.saveUser(this.user).subscribe(data => {
      if (data != null) {
        let savedUser = data;
        this.user = data;
        if (savedUser != null && this.selectedFile != null) {
          this.userService.uploadImage(savedUser.id, this.selectedFile).subscribe(data => {
            if(data){
              this.messageToEmit.emit(data.filename);
              this.isLoadingResults = false;
            }else{
              this.messageToEmit.emit(this.user.picture);
              this.isLoadingResults = false;
            }
          }, err=>{
            this.isLoadingResults = false;
          });
        }else{
          this.messageToEmit.emit(this.user.picture);
          this.isLoadingResults = false;
        }
        this.toasterService.openSuccessSnackBar('Successfully Updated', '', 2000);
      }else{
        this.isLoadingResults = false;
      }
    }, (err: HttpErrorResponse) => {
      this.isLoadingResults = false;
      this.messageToEmit.emit(this.user.picture);
      console.log("user err", err);
    });
  }

  prepareSaveUser(): User {
    const formModel = this.userForm.value;
    const saveUser: User = {
      id: formModel.id as number,
      firstname: formModel.firstname as string,
      lastname: formModel.lastname as string,
      username: formModel.username as string,
      email: formModel.email as string,
      contactno: formModel.contactno as string,
      picture: formModel.picture as string,
      gender: formModel.gender as string,
      status: formModel.status as string,
      societyid: this.society as Society,
    }
    return saveUser;
  }

  uploadFile(event, file: ElementRef) {
    if (event.target.files && event.target.files[0]) {
      let files1 = event.target.files[0];
      file['value'] = (files1) ? files1.name : '';
      this.selectedFile = files1;

      if (this.selectedFile.size < this.maxSize) {
        let ftype = event.target.files[0].type;
        if (ftype) {
          switch (ftype) {
            case 'image/png':
              break;
            case 'image/jpg':
              break;
            case 'image/gif':
              break;
            case 'image/jpeg':
              break;
            default:
              alert("Invalid file format extension, only allowed formats are png/jpg/gif/jpeg.");
              file['value'] = '';
              this.selectedFile = null;
              this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
          }
        }
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.url = event.target.result;
        }
        reader.readAsDataURL(this.selectedFile);
      } else {
        alert("Sorry! File size should be less than 2MB.");
        file['value'] = '';
        this.selectedFile = null;
        this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
      }
    }
  }

  goBack(){
    this.messageToEmit.emit(this.user.picture);
  }
}
