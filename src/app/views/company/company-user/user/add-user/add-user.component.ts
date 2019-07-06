import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { CompanyService } from 'src/app/services/company.service';
import { CountryStateService } from 'src/app/services/country-state.service';
import { Role } from 'src/app/models/role';
import { Society } from 'src/app/models/society';
import { State } from 'src/app/models/state';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  title: string = "Add";
  countries: string[];
  states: State[];
  userstates: State[];
  societies: Society[] = [];
  user: User;
  selectedFile: File = null;
  maxSize: number = 2097152;
  url = '';
  selectedFile2: File = null;
  maxSize2: number = 2097152;
  url2 = '';
  generic = new GenericTerm();
  isLoadingResults: boolean = false;
  roles: Role[] = [];
  userRoles: Role[] = [];
  maxDate  = new Date();
  isUpdate: boolean = false;
  sub:any;
  id:number;
  constructor(private fb: FormBuilder,
    private location: Location,
    private _dataService: CountryStateService,
    private companyService: CompanyService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private toasterService:ToasterService,
    private userService: UserService) { }

  ngOnInit() {
    this.countries = this._dataService.getCountries();
    this.createForm();
    this.getRoles();
    this.getSocietyList();
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

  createForm(){
    this.userForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname:['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', Validators.required],
      contactno: ['', Validators.required],
      password: ['12345678'],
      streetno: [''],
      streetname: [''],
      postalcode: [''],
      city: [''],
      province: [''],
      country: [''],
      token: [''],
      picture: [''],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      rating: [''],
      status: ['Y'],
      loginallowed: [''],
      colone: [''],
      coltwo: [''],
      apartment: [''],
      societyid: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }
  get firstname() { return this.userForm.get('firstname');}
  get lastname() { return this.userForm.get('lastname');}
  get username() { return this.userForm.get('username');}
  get email() { return this.userForm.get('email'); }
  get contactNo() { return this.userForm.get('contactno'); }
  get postalcode() { return this.userForm.get('postalcode'); }
  get city() { return this.userForm.get('city'); }
  get province() { return this.userForm.get('province'); }
  get country() { return this.userForm.get('country'); }
  get token() { return this.userForm.get('token'); }
  get picture() { return this.userForm.get('picture'); }
  get gender() { return this.userForm.get('gender'); }
  get dob() { return this.userForm.get('dob'); }
  get rating() { return this.userForm.get('rating'); }
  get status() { return this.userForm.get('status'); }
  get loginallowed() { return this.userForm.get('loginallowed'); }
  get colone() { return this.userForm.get('colone'); }
  get coltwo() { return this.userForm.get('coltwo'); }
  get apartment() { return this.userForm.get('apartment'); }
  get societyid() { return this.userForm.get('societyid'); }
  get role() { return this.userForm.get('role'); }

  setFormValue(user: User) {
    this.userForm.patchValue({
      id: user.id as number,
      firstname: user.firstname as string,
      lastname:user.lastname as string,
      username: user.username as string,
      email: user.email as string,
      contactno: user.contactno as string,
      password: user.password as string,
      streetno: user.streetno as string,
      streetname: user.streetname as string,
      postalcode: user.postalcode as string,
      city: user.city as string,
      province: user.province as string,
      country: user.country as string,
      token: user.token as string,
      picture: user.picture as string,
      gender: user.gender as string,
      dob: user.dob as Date,
      rating: user.rating as string,
      status: user.status as string,
      loginallowed: user.loginallowed as boolean,
      colone: user.colone as string,
      coltwo: user.coltwo as string,
      apartment: user.apartment as string,
      societyid: user.societyid.id as number,
      role: user.role as Role
    });
    this.onSelect(user.country);
    if (user != null && user.picture != null) {
      this.url = user.picture;
    } else {
      this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    }
  }

  getRoles() {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
      console.log("adding roles", this.roles);
    }, err=>{

    });
  }

  getSocietyList(){
    this.companyService.getSocietyList().subscribe(data=>{
      this.societies = data;
    }, err=>{

    })
  }

  onSelect(country: string) {
    this.states = this._dataService.getStates().filter((item) => item.country == country);
  }

  onSubmit() {
    this.user = this.prepareSaveUser();
    console.log("user form", JSON.stringify(this.user));
    this.isLoadingResults = true;
    this.userService.saveUser(this.user).subscribe(data => {
      this.isLoadingResults = false;
      if(data!=null){
        let savedUser = data;
        if (savedUser != null && this.selectedFile != null) {
          this.userService.uploadImage(savedUser.id, this.selectedFile).subscribe(data => {

          });
        }
        if(this.isUpdate){
          this.toasterService.openSuccessSnackBar('Successfully Updated', '', 2000);
        }else{
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

  prepareSaveUser() : User{
    const formModel = this.userForm.value;

    let selectedSociety  = this.societies.find(x=>x.id == formModel.societyid);
    let selectedRole = this.roles.find(y=>y.id == formModel.role);
    const saveUser : User = {
    id: formModel.id as number,
    firstname: formModel.firstname  as string,
    lastname:  formModel.lastname as string,
    username:  formModel.username as string,
    email:  formModel.email as string,
    contactno:  formModel.contactno as string,
    password:  formModel.password as string,
    streetno:  formModel.streetno as string,
    streetname:  formModel.streetname as string,
    postalcode:  formModel.postalcode as string,
    city:  formModel.city as string,
    province:  formModel.province as string,
    country:  formModel.country as string,
    token:  formModel.token as string,
    picture:  formModel.picture as string,
    gender:  formModel.gender as string,
    dob: formModel.dob as Date,
    rating:  formModel.rating as string,
    status:  formModel.status as string,
    loginallowed: formModel.loginallowed as boolean,
    colone:  formModel.colone as string,
    coltwo:  formModel.coltwo as string,
    apartment:  formModel.apartment as string,
    societyid: selectedSociety as Society,
    role: selectedRole as Role,
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

  uploadUserLogo(event, file: ElementRef) {
    if (event.target.files && event.target.files[0]) {
      let files = event.target.files[0];
      file['value'] = (files) ? files.name : '';
      this.selectedFile2 = files;

      if (this.selectedFile2.size < this.maxSize) {
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
              this.selectedFile2 = null;
              this.url2 = "data:image/png;base64," + this.generic.IMAGEDATA + "";
          }
        }
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.url2 = event.target.result;
        }
        reader.readAsDataURL(this.selectedFile2);
      } else {
        alert("Sorry! File size should be less than 2MB.");
        file['value'] = '';
        this.selectedFile2 = null;
        this.url2 = "data:image/png;base64," + this.generic.IMAGEDATA + "";
      }
    }
  }

  goBack() {
    this.location.back();
  }
}