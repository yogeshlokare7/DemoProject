import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CountryStateService } from 'src/app/services/country-state.service';
import { Society } from 'src/app/models/society';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { ToasterService } from 'src/app/services/toaster.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

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
  constructor(private fb: FormBuilder,
    private location: Location,
    private _dataService: CountryStateService,
    private route: ActivatedRoute,
    private toasterService: ToasterService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) {
    this.society = this.tokenStorageService.getSociety();
    if (this.society) {
      this.societyId = this.society.id;
    }
  }

  ngOnInit() {
    this.createForm();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != null && this.id > 0) {
        this.getUserInfo(this.id);
        this.title = 'Update';
        this.isUpdate = true;
      }
    });
    this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
  }

  getUserInfo(userid: number) {
    this.isLoadingResults = true;
    this.userService.getUser(userid).subscribe(data => {
      this.user = data;
      this.setFormValue(this.user);
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    })
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
  get societyid() { return this.userForm.get('societyid'); }

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
      this.url = user.picture;
    } else {
      this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    }
  }

  onSubmit() {
    this.user = this.prepareSaveUser();
    console.log("user form", JSON.stringify(this.user));
    this.isLoadingResults = true;
    this.userService.saveUser(this.user).subscribe(data => {
      this.isLoadingResults = false;
      if (data != null) {
        let savedUser = data;
        if (savedUser != null && this.selectedFile != null) {
          this.userService.uploadImage(savedUser.id, this.selectedFile).subscribe(data => {

          });
        }
        if (this.isUpdate) {
          this.toasterService.openSuccessSnackBar('Successfully d', '', 2000);
        } else {
          this.toasterService.openSuccessSnackBar('Successfully Added', '', 2000);
        }
        this.isLoadingResults = false;
      }
      this.goBack();
    }, (err: HttpErrorResponse) => {
      this.isLoadingResults = false;
      console.log("user err", err);
    })
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

  goBack() {
    this.location.back();
  }
}